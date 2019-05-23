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
    "revision": "7410e59376c123f3bcc7a76b64c36a3b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "9311af4bef518234470393d1fa9d9b87"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "34024e63c71d884049369391ca53ea19"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "d879a6d940b4e70cb19915320ad0ce57"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "326a0c858062b8e4b9eec5660a6757eb"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "d41a5a7c851637b2019955fc2e7e5d64"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "e4689e335cf3c78c42c5b599ac177999"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "f3ab886be9650d3e81e176e89c4f92c2"
  },
  {
    "url": "articles/index.html",
    "revision": "e0d4a1b173d3e44c5608f76de6aacc92"
  },
  {
    "url": "assets/css/0.styles.348d0f22.css",
    "revision": "228345e067e3b0d5198ef53ed847c2e5"
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
    "url": "assets/js/13.328c17d4.js",
    "revision": "c5d1b05c9eabcd02e78b2d49cf7e379a"
  },
  {
    "url": "assets/js/14.35307f94.js",
    "revision": "2f8e7601b7f68beaf840b2b4e27396c3"
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
    "revision": "eff523e3782a022fcf9a29e002c45d8c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "98676de7bf9c2fcf863cccf64384095c"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "788b24c375f1a304efb427781e24d4ef"
  },
  {
    "url": "books/index.html",
    "revision": "19dbc6704fd3fdcf60f455a88537d4b9"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "4680d59a3d24da446705ee0dfb5bd6f7"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "0bcfb53bf9c721b885765fed80c63e8e"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "8c9a386f752776f5964de8cc17c0830e"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "7c40f76fb6fcd969822d4ce62eaeddee"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "71c8db06306ad075266433c7bfe482df"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "54d9c295aa2e87ed18ae7fb5a930ea8c"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "0571d40965c4016b98aecfd724a866ca"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "e73234a5748fd3f23737ae4191c9fef3"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "f9da503f623b3e504ecea2585e9c55a8"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "79e5631ca9ca03dde2305f3cb031371f"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "108507e1eb4ba02bc12f80ad72b8c6b8"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "d57b6076861d8e3622a4d5cfafe6c401"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "09dc942b47d62a72bb98212ce41f44d0"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "f023a4afe32797b0906a3b5c40c5a8b6"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "747f82f0277187aa8da503bb6f8cef6b"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "207cc49d5dad11c33a05c06caeedcd70"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "5bd32b5eaeed908d83f6471575153ffc"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "f1538ba0fefd3aac41981ea9d0a769ff"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "414e06054f9b567537e90e1083c82d7d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "bd264922677b2169357cb86366353998"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "72393695d48777ac2ed862e57a46d09d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "66622d4edfd9ca17ece36aded2b5e80e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "7cafa145077c5ba790d9bfa16ade46af"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "86764e84d742942d165b30286f250a9f"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "06483cd0370ff076fec57181270531ec"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "051d999f0e7f72d23a84fc4d65a93e0a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "0f2696a767605697dffe38d161504293"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "e9668e0bd8b506e50e0f4fd38b98b021"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "2be2191436428de19d16ade6e75030d3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "03922a5053ae556d478ad194684118be"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "3f872a37dec74d5d9f17fed5cee3c45d"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "ab860d8290774ba1da4c02b137858113"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "719e267033d8bcf01856da7fb1c79404"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "71b759f6db3b7bc456d8e98589eda602"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "c216239f053ec3dba123a6489d278fc3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "d5cd7353d6fbba97881a466daa310f44"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "d7f20d0534c04c382c14eda0b35e152e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "d1c43ed355400e0bae70d65e1af7caa2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "2d82ea139097f56ed0854e9909b8789a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "c3b07b312b2794f688c2925286ef1eec"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "04c57e761587aea29193087c3d093c9a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "09413e1fddbfc1d0d6ea035e556ad454"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "2b954f475a001564ae9dc4d8dbb3e337"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "0a5f7cb21055ab7e24f8be19e58acf7f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "a0a85bbc1880e9d94c89bf0d13f5e5a5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "a1c1c3ef77ebeb58a6f754a6130fadc2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "c79c783d10d66f36dd93027b76700be3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "23b4b5df0bb44c5569adb5a937d74282"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "02f69d24b574de345784458530283821"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "78caed9c82bdb844c1969a51fc6f2d31"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "6a14f70f9326c5e10b4b58d8be16cc38"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "e5a7023a5f47c1faff041437927f271f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "48c942e05a2d26ac8924b46afbb7cd6b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "ad84b5d4ac00cde779cc083ffb34cc66"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a79bfbcd8e46e2c2b46874cce4a0664e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "3c5e287368d3d7e59c0a60a9f3705bf7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "c665bf22aa9ca83145ccffdd5b1e40e7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "1406bbe405064ef77350f7f78d39ddbb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "4f4eed3405e859c3bebf76f6d721074a"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "80cfc7df08a660a99f608ce21b577e20"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "5204d77433704ef96b1888b2616b5c25"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "4ebb3262c955037569e418a0cfcb5f68"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "72e738eb93de572ec6c9bde76de2e2b5"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "953b6cd09f66f23d689f544c3596578c"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "e74d4d9e47f9229fc635f7c9ed4db725"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "c96a414b6e5947e771461ed2b638cb7a"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "c641f8178f31637f91031cbeea1bed2f"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "75467cb70c3254936223617cd246655f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "ebfdb7edc6ac83a1279ad2621d8d1fef"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "fbf98eecf07190cf1be5790e04eb7df9"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "753f684eb67262fd480cc66fec21811c"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "00ef6d6e1b755aeb7911d7ae43016c39"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "8f2d042d71f85e551f1705180f71e284"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "b95fce0623f78d0fc198aae7a4654d4d"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "a56b9680af8fda9452c9416606a15205"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "04712ce3bf81db294361609ebbd3d627"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "6e9d7d5c61e21dff0d487ae3c379ddad"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "1b2264949852a7cfa03604a11046e1d5"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "f21dbb92722df4228430ea34eb0fb0ec"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "5987f067b76cdeb0352e3f290c0aad00"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "3ec41cf1c67df7d6a6b082cc2a5b5241"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "f5468f94f758402734dc41460afc2737"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "4f9d318cf59fa7485b1efc3de0cd2fb1"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "e5055688a1e6a16433c05445ae1dc03d"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "16d9343b989ac89be4091c4b81bedbc1"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "29e2d35c7d76d4d9db3c31038e031112"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "29ade1645257b3177fafbdde25a67176"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "74d9e5eb9761905d300c7e6d76d1f2b9"
  },
  {
    "url": "categories/front-end/_pages/Gulp.html",
    "revision": "052a9a521f58e51092a04abaec1932c6"
  },
  {
    "url": "categories/front-end/_pages/Pug.html",
    "revision": "72f339f54746e6770924a43f18061f85"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "8b3147eeb539c19f60a4c33a35732981"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "b2258bef6a9e24b083ee80b16237801f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation.html",
    "revision": "f5416f0bc6ce92552ae5ca5496f3e7b9"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/example.html",
    "revision": "7f3ce5acb7838df1c85210d74768c205"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/index.html",
    "revision": "6678c162f249b34da4d1a929406c8349"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/reference.html",
    "revision": "b7c3c5132f465093e1539e9a8c65388c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basic.html",
    "revision": "69e6b772ac0332dbb4a32553d0510573"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/color.html",
    "revision": "75dab497137b0be4eb3afc07f7b049e0"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/create.html",
    "revision": "14da7a95c8aae9be7e4e8a4f14b9fc37"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/image.html",
    "revision": "19f91d41bde1c9ef3440734e82edf396"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/path.html",
    "revision": "67500b47040da7432bc22d219c455cf3"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/rectangle.html",
    "revision": "752c93329ebba450420d86d97b5376c9"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/reference.html",
    "revision": "7f99a17bc307d3a8dbff32ea0e34cded"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/save.html",
    "revision": "9c644ddae0f69871852c6940e2edf659"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/style.html",
    "revision": "2b81b517f368de242169755d985238e7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/text.html",
    "revision": "4d4e9fb82abfc23215d95a12771d1b46"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Clip.html",
    "revision": "686bd961e7cf99de0ce55bbd64dd41c5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate.html",
    "revision": "d55c850451c1086e3a6ade4c9b13a453"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/index.html",
    "revision": "78fc995e1976f65c7911fd98de7318b1"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/reference.html",
    "revision": "3fa66bd54a2c2f81ab5bedc75b3b1a3b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/rotate.html",
    "revision": "1ad3b645f2a8a89131247b65812777dd"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/scale.html",
    "revision": "4d4b7eb734335e085fc872271b08fb42"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/translate.html",
    "revision": "efa163101014685dcf7b190eaa82bd0a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawArc.html",
    "revision": "fc4189bd600c191a2e01fc39e13e11af"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGradient.html",
    "revision": "db7fb752adb2789666ca2c3d8d1e8a46"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGraphics.html",
    "revision": "41064f16cad90bb0fc5ea347b0aefdb0"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawImage.html",
    "revision": "df44860fff25defcf86b47d775113e4e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawPolygon.html",
    "revision": "1a4ce58f8b1cade86f6889f3d2c41033"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawStyle.html",
    "revision": "50affc4f185e680730cc0335bf90c05f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawText.html",
    "revision": "1a8bf7d545121e5687606b74d833dddb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/capture.html",
    "revision": "e8f459cf1aae14ef1af15ffcbc0ed499"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/clip.html",
    "revision": "59d322cd44d1d153385ea39bf18a9417"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/composite.html",
    "revision": "43c8924119d5c40c2577e54fb0bd89c7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/effect.html",
    "revision": "d1e0fd42485fe0a2370200e5d01e3066"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/pixel.html",
    "revision": "a6f8e728febee76072bcfb4c0bb005d7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/reference.html",
    "revision": "e881b5f64717758d962d618b0e0ff4c2"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/scale.html",
    "revision": "8390f725a28f407a3b2982deaa538388"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/waterMark.html",
    "revision": "969ceabd7ca74db399db52645601056a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/ImageProcess.html",
    "revision": "fc91ee9d656ac1c964075ae96fa6ffa8"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/index.html",
    "revision": "ca5274953d173022c6474d962dcf166b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction.html",
    "revision": "7f0e2038ed223ef15e00516534d797ec"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/ball.html",
    "revision": "400f4939c22971742ac34c9052bbb237"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/card.html",
    "revision": "b17b2b7aca2bf5b5dc502529bc621b39"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/element.html",
    "revision": "6d10672507f91490d0f4ab9903caff68"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/keyboard.html",
    "revision": "f549f22a4b21e1a327ebe44099b5b50c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/mouse.html",
    "revision": "5ef5829f9c714597ab6206366ca87474"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/position.html",
    "revision": "94c9582922a6f044440bd11735c26d19"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/reference.html",
    "revision": "c0257f5db8801bf3bc2de59dcd8b6c1b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/spotlight.html",
    "revision": "9d7127d170a612fba087fab03adeed27"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Matrix.html",
    "revision": "c3de861c0fa12ee45dd99e9fbaa00bdf"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Point.html",
    "revision": "f51fea9374d96d5a9f90c45732181808"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Reference.html",
    "revision": "d031ad7018e2586d9694c510d005dedd"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Save_Restore.html",
    "revision": "63b031dcfd46ab4d0c5a6b0668325695"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/coordinate_system.html",
    "revision": "c2dd2d5febf9c9cfe280ac0aa473ef5d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/matrix.html",
    "revision": "699fcbebd544829f07649b6fa95b0abb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform1.html",
    "revision": "a77c120de1c55a3c1e52ba259e830092"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform2.html",
    "revision": "7348a047f0c6886081bfae655e644c0f"
  },
  {
    "url": "categories/front-end/canvas/_page/Scratch_Card.html",
    "revision": "c8e33d7273dedf619a3311e328e96810"
  },
  {
    "url": "categories/front-end/canvas/index.html",
    "revision": "82f8976668efde33c6d61661c8b7e1c7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "9bc2f211514f077e5964a96e2a049798"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "1d69ab9a4174b5a47fe9cd087416ff17"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "cc5d4108a3dc50fb30215834ef0b39e9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ff7d96109dd5d29c894cf9296816036e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "11b6bdd4056944aa592dc040463d1e37"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "9cd40f9cada067b6a8c3df0254ae3162"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "4e4be0abe60c89942b9c802558f9d856"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "420e99883813bd7c54aecc6a8359c534"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "9a26098682737f23b296239c2181758e"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "0edc3ee8f0dd50489f4ec1a584a8e50b"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "3fdfe091db2ce290bdeba840dc096cdd"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "3a2b7550b108a55b7e8322dfb1e8812d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "38810435f1e0259df39c59b7177b8036"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "fa426541ea3593d89fe55e96a11a0559"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "fced1d22f068d4544adb9d9717e480d3"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "f1942afde7181af611d48bbfd5a6fadb"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "c2490dc0b9a175ace0c2d756d38998b5"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "38085e6da83a779d4057a39bd87dea87"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "b9f84f207a23dd5847da1985e9e3859b"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "4b768cc23afbe0bd26e7b16e0ac9a2ea"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "837dc48e8853ccb45160b1abf7478331"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "a8fc88f739fc266520369abce0da5361"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "aebfc027ab7ca5f50839f8d872421065"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "96405a1f4bea698f4c8b0550b960c3c4"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "329e8bf8e231388bbd25c865765bb393"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "f165aac6ebf087fc877b72710e213007"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "0c6b7769c6491ed0c280da4e0912c806"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "a1b7157bbf742f4c72f4ff5b7ee02d87"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "225e264a503cf6d29a0fb9ea1627ddad"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "2402120205614c178e26b00a99b89bfa"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "24cafb89c4bf31c0d5d455167c4b18c5"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "d71daa6a0cb7e765755ad73b77afb002"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "8ae4d2152bf73968cff17c4d0f1564e3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "65eedcf7b829d2fb0612132bb449bbbe"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "7db40fd0bcc1c45803585b5f65d9e4de"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "549624681fd842ab1b38a5eb34a471ee"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "e467f1036659f9107878682b7be18ad7"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "e7dbe2da525d5aa6832f129ee79ec20d"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "c209555a29ec5da9bebf15290443085d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "a8e2f0ed1cbf9794e355af5e89b22fa1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "890b2ba2ee7deea8072918d2284e0bb7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "5613df128906ca4832ad2397e24695eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "919c0461d15b43b4ba1c0fb7feebeb73"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "4faa9d553d44cfc009255b162cccc26f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "64809b645c98034588b648fb70c09ef0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "1c7ede7f041435e1cb3a8d5f7ff2bcc3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "4e8674add549341ab4f2cbab3691c66a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "604459d125f0d1f98188a1e663b9702f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "4f7514dc2c493bbb6e6b29d22a2a9097"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "ecdb1761568a525229d39b2cd1885a66"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "36950cafb57f6a8879420a523399bab4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "657bd733080156db18212218243c1b64"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "1e66c1b3d60677087379bd6aa8d0175b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "46e87ad5a2760be9c7d95f06aebfcc1b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "3378f1ba13aa6d129be7723e97f99a15"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "24178a18bd953bf7c9c443697bf0852e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "b694160cf76e5596e4a6bc4b40bdce3c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "18991a33aa421558fbf34e7f713c40d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "717519484317e70b47cc462888f16b85"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "b7988eb2e05118cbebd7a074fd695ce8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "1b140e500bff6a65526740b61826d00a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "ca2081ae669a1bbd68808e3f25a3530d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "8ddd876f2bd5da63f5c765e705229051"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "a35489404244654938be53a3c83e8268"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "43e827e53c05c3afd8ceedea23274474"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "8ef3fed2c92eb85e1d8a6e8d82a383ad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "421dbb920ddabec0b4bfba62de8f9b54"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "1d6c9c9c58f4e89fb46ba0497099ea2c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "63e6c261ea0f27994444b6cf63995f6a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "6a714d732893e54640167e7ac3b49505"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "bfa4ea8a0a3f8f0bc8c7d4178bed2fe7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "1e5be69522ba85c20e4297ede6134cbd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "8b16a2a9114b2aa9aa4625df977ee18d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "6ffc4954e2d104304d0efb3ed29dd3ac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "7cf7adba26d7e4f8d9e7f4435fd02a9b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "4403b45af8bda74459177ab39692b9c1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "956f804422aa46a950e13cdefbf4321c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "a7d8b2f4e47640f5c80dac1aab596c4d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "b24c7a321bf02ea27d5f1ca747b8868c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "6a9a0ee5d0d908ecfd9bae2f8008f274"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "8757da505a7f6c40a44f5415e2c43016"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "c747de5cc2340056b1287473904968dd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "cb0d3a9e9d25ae4a2bc87e690a8b0305"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "3054645d0165383c7fa23811beb0e570"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "ee87c7e43e2b45f90b52a350b92f8b70"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "d6ce21b3c92bf1f33d5a3d40f7afcb98"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "eb566909b9613cdf785f1d3690a11bc1"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "19b6179dc558035ab330a6b23b3fbbfc"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "ab2e6b21a6041799bfcee3d728efbf49"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "7af5f0bb12fc0d1a37a17daa6be00757"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "24da0ffd66236a52189ea1ef7ded77e6"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "620c56f25a462b1dad8adc3119db709c"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "d91b7028a187d4b42a84e343eb5d5efc"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "a118471fc932a55f5448db29c1719b45"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "c7c565e9f346e5f8a7f8dad781ab40d4"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "3fbc5931cdaba45c5bc3a7d0b19f7c63"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "be7ffd79fb11c8f4c3611d97e8d78f93"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "a7568adcc0680d83f7f90c4b1a23d712"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "92b686a6e823c9828f7ece87b7c090e2"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "585fde162386897ce9bfad349283a592"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "7a9ad504bffe245f985dca259b7a9d35"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "8257282a3ffe927a94043407013d63bc"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "be4af18b601591ddd82a802bfff8f296"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "72bfbbd7f3c791380aae4c03c057d48f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "e0539d0ede259d334f820c1490f257f7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "d2c6d5799876a8c7f24d36a663d57a19"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "c671719c86fa9914982e53acfc916c2c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "2cb965a2a53edcf5a9b6e12290f0afe1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "b58d42931ca44fb0a41fbbdfe8119f67"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "dfbda54428d60d07bdd079e45eb2152c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "1e0d45903017e6b1d875dc2d3ffeb995"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "9704bcd6424ad9da2ee7bbee3f6a366b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "c125dff05694b35f4843e8be07dc9753"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "3aa972de17da8eb9390d11caf41b8643"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "d57c78e24d3a724e9718a0b0eb8f3357"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "5e4706ee43e73478b632865650bbf472"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "2b4f5d5d235a5725fbef4dcc10696f31"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "8b4bb17d1d2aa5f540e7cc9af5bedfde"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "a6240b9d004e925c0cbee2a5a733f978"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "b998422ba4e28123275f80ba5697414d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "993a48ca445a6f80fc138c619c0997e4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "8494c41e802307f3bb732973186abe51"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "825355a43577e4f893e378933c39d6d8"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "e9beecccb311b9483d82e844d1e84e02"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "61833f5c634d16a0b05c6d475c247f70"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "28696801aea1d4ece8f975e2309d70b1"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "56fc26417379449c35393b7d110f88b7"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "8047bb8ae6f0b07c977156513963ce22"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "16184f8a74ba1fb9bedaceac27d2d69b"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "7208c28d24d4b3d9f8f20f887cc6ae23"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "3c26d329d748150343c29df1ad95a960"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "eb54f7f97309ab3d30a6594f4c0e1bbd"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "37117c209761b66a14ded2e78265851c"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "78d29e3d7c8d95804af3bd75ce83701f"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "674af016bde04bebb1c201c5b2320cec"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "d687b3a575ea43dccfc236a44fa8e6ec"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "0a31b32254b4cd0dae9070317120da00"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "887c99ef2544f213e4e49ff4fa1d254d"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "e6c5b175de46d7db87dc4dcc9a8af7bc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "a71a1ffac31c93041844b191e50b25bb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "576139d161fa08a576449a90c8ab9ea0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "5bebc68bbfe0431a70c01399fd871864"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "de3fe2f32d93d7acc2c9f540787fed61"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "a19a7bb40899d4e32134545a009f9526"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "41aab76179166a26e8fcdf652b07c72f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "7aea01e0ab57d9afa5afbba3ef096e67"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "65d98b742663736eccf641ec389a48c5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "3d186757bec05e0986f1c739978ef72b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "fa77d333bbbff1991c904130a98cc3f1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "9fdc6a87365b4deb355024ec89211cc6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "0f97cf6545d053f9908ec008cd6d04f4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "94b24912f5ca8ee0384da6eb7643be07"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "5072a2aef9a350d663217bf289a39ee3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "1e1c90dab7556ad570a95469b20ae8d6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "f87f2db466110f06b7c13bd53465cb89"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "8cec12c81a5f5a33a402ec017784a80d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "7996a359452d223779f341c20b8d39b2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "bf8bf9526b7c954c36d836a56749c63d"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "482d7c56142fbe6691cbf02f51459a10"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "c8795cdb3562ecab027f29a1d7f86309"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "9d8586009cfdcce09b7fa75a893afcf0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "404ca19102d3d9faab8a423f640c56f3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "a3a184ad3a59dcc1603e0ef72b8bf4f0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "6ae67afcbb4749646b36877bbde40907"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "7487e16c981a3d60f6d0e55e6d645728"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "1dffba0a7e89760ad722e6df08d79dfb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "bd61ef9952f5d397c72c60e2fd1246a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "4b634c2063a1e7787351f8d3bceeaccc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "f8b0c2988d786841bc65b6817e8dc3be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "8b08340b21abc78056cf1efea842b523"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "d9f99900972b9d72a623f1a9599def5e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "0e222c6f9d741ea804e7ee3bcac6a6a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "bcbcc4f2a05c14b0483d2bb03089c271"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "2b74602f3b4e461026b0a523c94eeb79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "aa2be25f901a9c3c56a57b7db685f6f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "531a00109d1504bbc419dfe59622a8a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "dfa47ea218d7120e7f2c80161cf64004"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "e714a25167a5870fe31ff57035ea81ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "284936bc098357bfeb1901c2fa851b1b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "c4cdc932030341efabfe8bf17bb0180d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "e22cbf411dc0c73b2054a078bff248d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "4d4db13ef8c5add514bb873189d6a62c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "5113c4037fca767481507c8f61e2e4dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "7da2fe8bb087ef4a5ab9c2530764a454"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "aae99832e14ac72da5bab5a9ea1a10da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "3fea76112bfa7e85539de670dc4a85ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "950d1f55585c93da49c2823673e7e87f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "95e98588a00194834e4f7ece5909d7d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "1c899db59752addb7c7bfe3a7ccf1a5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "032bb0f3753e4d982040cd6685ca0477"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "6b2ccfcad9cdeb185e60963466aef76b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "b1922c33d42e2692075aca79eb2a4458"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "6c56a8f528f5b2783e7d83ffc084bbdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "94059e1faf3ede4916407f41c7305e87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "1f1c7c725e105512b654c18a64a3a85d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "04f38acb9c4c283e1807b315921cec9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "dcdcd885709a9de30b281b8c1ab0b22e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "918e24e14c38d8f6cf3e8e491176f62a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "7ca5974d2393e961cbf62d6a63579c8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "7ec8c34446eecabe1636a30a0c8e3088"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "a608cfb71047fbffaf4bfd516fe8958e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "72d168c58f2c5045bd4db570596912b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "870564d221df427c562560acab251cba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "0b98fb8328b838c8569a9bead378f419"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "bd8f9520491abe9537893ef7b52f236d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "1eb2e3ece7e8e1d3f0628445f908bf67"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "9f32b9b4737f9e7c4990f819c66b319c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "99a1b7a07b8fb75c4ccc2eb5045e290b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "55c3cdc8d54509c787fbfbd441301c2c"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "45ebdfe801d52b43f3463b003009c088"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "565d2e7a6c68cef8bd8ecc095482b0b4"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "a98d204c85b5fe85d00e6ad354b7b62f"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "eb0a659777fc482b9e46966aa58a8ea8"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "3857e7cb37cc2084e97b63aa63fe4631"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d86a8bb1ff0a01e2c3ec457dc1b3de8b"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "e97d973eac6a2abb462138bc35430925"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "6239720faacb4733eabc6fd4908b887b"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "92882212cd5d8931c8296e52ceff5c66"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "6490380c9aced43b129af4350f60b7e4"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "f74c8bbbd60334196cee4f26bfae34b9"
  },
  {
    "url": "categories/index.html",
    "revision": "060d7badfef374de84c4aabaf98b6c3e"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "c31ea9bb825f673741c9ba44b3f8bd93"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "91a72c3d809d755334df5cfadf158008"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "ad1b9d9e2129e81fcd2cb39665e06e47"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "304eec3965b74cd01592e27ffd4e65ce"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "a596cd8cbc9bc5e0755826ea5adbf1ea"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "6f5c0398e14cd6f1b40b62e908500c73"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fb96c1c1c733fcdcfe33a60ef3f23e94"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "13e8b752b6589e1b29700348a5ccba78"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "bb58af97d7aa1ad6f6c3b1e8002fd160"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "6464f1db80bcb14743528c768c6c938f"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "5e93523ccad681c9e03bcd528ae6188f"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "de4b1235476f0dc7cdb87597d394d311"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "377010d88b7e011f15ca12b637120b8b"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "5d02f3c997ac0d195da888f3c2abb40d"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "bead51d16afbf301887fe5a257a608d0"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "aba4b9f59854d2ea8e2bcadef78f552a"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "fb9f2f5b3ca3cde666851615f567982a"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "2fad0785cfa974ae5e58b6691cb26d22"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "adfbc93e56909d16f374d3bdf2755756"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "51fb00e268bb40b4b2218a8b9d5588de"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "58ffec43a1e3e1f5ecfd44c444435db7"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "1505733907c913c6b9d608830e6ae303"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "c7108850eb92ce60acac7645ab5ed39e"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "42cb2be454144566451a1ca7bc1d6018"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "fa356c28849bc335ff48e879a06be706"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "3612ee3942d08437dfc6f133ddb5efc0"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "1327e412dbbc22bdf60ab1a8cb00f08f"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "614018aaafde5de0c892a392e07218c8"
  },
  {
    "url": "categories/nodejs/_books/node/Basic.html",
    "revision": "0e3672081d8653f3d3f4aabe9516b9ad"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "b81ef63fac5e93cbf378370547a64810"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "f41db48095239c1993d76bee5799294f"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "6b38e17e2467118d31ab8be65231cb7c"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "0dc467362d5d9628a975799482d25b51"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "81c1c5a482537031d2fe2cfdc29d8822"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "f532fa14c3c4d976d56db4c0b1077368"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "93cd7ba355987add44ae4b0b442b3248"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "58864b99270a815164476b9394ab9d00"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "f7fed50a232b8c7f9788ea135756fdbd"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "aca314ed233809f86722c7c69041ea2c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "8dfafe148bbb92b0c5a7e212750e5fff"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "cc81b8f392142ad73bb31c8841cfc734"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "b55f1d342137d71792c660d6806c26c6"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "2c58a286db5fd1d60d16a2befb4bcc9c"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "9122c7d07e5fb731f328f54586f52f8c"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "1b1bb94afb3a8ec6df9843b0dc866710"
  },
  {
    "url": "categories/nodejs/_books/node/Rekit.html",
    "revision": "781c960936fd12889857668dc0bff470"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "beaa40ada0de741ce7b8356b43fe0d01"
  },
  {
    "url": "categories/nodejs/_books/node/Solution.html",
    "revision": "844f79e4b4a624b496b91dcdfd3c909d"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "31dedd17b3a5fa2ac496d8dc0214e573"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "471f8e94828642c388afc1b92eb49e1a"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "488a33fc42419b9cf236d46740f8569a"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "193aa2d4ae4c20b0cdf0331f0cd00bc9"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "7ec38768b8d47b4519965c4df047ec04"
  },
  {
    "url": "categories/nodejs/_pages/Koa.html",
    "revision": "0b815b69931a619a597f734cebd3492d"
  },
  {
    "url": "categories/nodejs/_pages/Sequelize.html",
    "revision": "3c710dd1abcc6194e3bdbd7b911310da"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "faf7eab79f6164b346ffb63549dcaeae"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "3cbba3e87b3fe405d936ef44ab428ae2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "82c5dfcb496bc6f51ea1170c12cc45f1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "ea7d262da1597df4fb3f5943db3fd251"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "017d9bbe09892f5a503c45745f961a02"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "1e382a195ea208acc6f8ddf761b1a92b"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "8b9f4c528dbc919c465143735728d633"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "075e96633bbf59701afb8e402e6788ee"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "49f905ee2d6d917644b22cc2e2ea9582"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "05219bf48eb823692565ca7910196fae"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "7ccd1dd82058cc1268b56ab7e89c66cf"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "e260ed18ddedae66e40967c1a2e0bece"
  },
  {
    "url": "categories/os/index.html",
    "revision": "ab76548399f076f04c9606b0dfc32dc8"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "fa4836e327fc0b893b761ce817dd9023"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "9dda7dd2d7573a8898406f7d3b13d2bc"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "a67422241cb0d38687de0e7791d01639"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "9563b471d7813f45c7b366d19730b0b5"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "fc7f45a9747572f32ae9ab6bb60ce827"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "0e61037a183f4dcbf76328a3a7750daf"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "d04fbf7eab607f0bff9d82cae3729f9f"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "fd27d96e9532942075ff59258a93e394"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "5e7c6f452cb6aa82c444e0355b139027"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "c2a7bd1fa8deb349db29bb441f612814"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "80df4962b941594e445182334fce4414"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "55f4188fe4fcae1c2aa4bde28e5bba6a"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "3386c05050ab5627cbb2d9214f8d6167"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "e0ca8b6833d5c1639d43c18b2e4cff8a"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "f57059e8fc9a3560383dede66add38f7"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "8299bb9b7b4739b2fd66955107d07145"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "43a099ffca450cb92f71c4c924a6277c"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "7e477392cfbdded3010ba45a9e137007"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "283dc16767f16dfcf173786840c00b54"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "831bc78b93faa488aeb69678372d6b2a"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "85d47f5e6ed529ac636281b2e86066f1"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "37026f13cac25a093a22c3132d0c74c7"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "09befe2ae4cb371b9a8b33b346655048"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "a2c3a8f4d5509cb5ce1226c49fdca3e7"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "cd5c5fefc05f959a6221e58afdda91f5"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "fc02f3b3b37aade85509f98b7ab350b3"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "c64272cd23ab40c4cebcc6965b152c6d"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "af0ccf6675b1bf883db01d687e221755"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "b224085ef79f57764372371ccb404563"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "79fb26e95980bcf03fba5aa38c46eb5d"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "2e900327f82d546a9fdea24c34631917"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "c8c7c564cce12df5a1ab330b4651e8cd"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "c08c62f129acca4a9394269ed198d9fb"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "4b4b9d0f324878bbc65eb1f6c5bdc65f"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "7bbde8365b856eadcbd76c909aa475ea"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "26dc3af5b2c4fe6070be5ea102bf3cee"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "343fd5c1942273b2578e95cb3bee244f"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "5fb8c14697beee7c90fc89399e98819b"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "4492a8cef79f3da708f2c11ecb8c2ea5"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "ad0ebd50c2d9973f3003b8cce8b2b392"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "6d8a3e2d9b49b4171c280771974a5023"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "6291001f86f35c3f7a0dd8b7b67a962c"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "003ec93942dd62ba2450a863630d6cef"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "55a31f78053fd45991c1d1d127c5ab71"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "0d65c0d804f320bd42415d3634a47ce6"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "10dcec2bb4962775b14e71f172a103ca"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "916c982d35210a320d62a899a6560e72"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "c0a788211073ff7ce64c4b84fae82247"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "b66d9734a2101e16bcab779f9829bb93"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "ad9e7a4962a0337892d3755dca91a8d1"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "f346bf65f71724b98fd2ad837a6bd6c8"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "af337349b4fe7111e79d54350f5b4160"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "35bf00d9f5dbc1887dd8227ab6364ee8"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "27c8ce0a72adbbdeaacf2a1599663722"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "77ee502d727ac51d547b8cec413d11c1"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "d5b409d05cbcdaa0193554124854cfa8"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "5a3787dadcde56164b7d14586c93932e"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "985697b255bb8a3ff55fc55e201a0f1b"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "a2d3610703165305609f33939e7f2d5d"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "5abf6b9946d204ca76ef172342703724"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "beacda774a89d17afbdd17dd58d4e9f5"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "f0a15e757e7c8b4c752eb8144281d9e8"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "4191eb55d32e80c214ff1f50fc31711f"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "3186399513046992f42505e8a75730ec"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "5f789adc0f460bbbd2d6cccdb3174e44"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "4afea51012cf61a6e70f8eb665d6d4dd"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "ba505ee223cd7146c0237dc6b44b4dee"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "dd581b13df5a3ac73cd29cf13ace329a"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "3ef252212a38a78fe4c03dc3980cee42"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "a679d3b6fc94dfc5451e16755586866f"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "52352b8b8908526eccb767428239758a"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "8148ff88ca4be2809731e47e00d5a79c"
  },
  {
    "url": "categories/php/index.html",
    "revision": "acd692a01114ad1bd6ea1278db8dcf0e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config_Detail.html",
    "revision": "4ae1020e7a2180c3849da6c1b36d9877"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config.html",
    "revision": "e5119d18de0e7a401b69a6aa7736c861"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Container.html",
    "revision": "34785bfbe0b88e3d86b49565e4cee6f5"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Controller.html",
    "revision": "f6237e06ad540e368db542d7a2755fc4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_CURD.html",
    "revision": "d42495817da3346028d5453f2840a534"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_Query.html",
    "revision": "ece311d6368635f69790dbc69165e60e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database.html",
    "revision": "51ae12e259ea6f6c4eccc1ab122258a8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Env.html",
    "revision": "18e2ce20a4efcfe15897c594a4478482"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Composer.html",
    "revision": "fa70d3c731d526601a57ca1bea2ff032"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Function.html",
    "revision": "db61360e4eb6bf83e16e5fdc29cd757b"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Library.html",
    "revision": "d22319eed8b903cb16c0796bb6cfbd41"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Facade.html",
    "revision": "e656ec4a1a9b54fae25f41ac50c3e735"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/index.html",
    "revision": "00b63f2d0df9a74f63e1bd5fffaf7ed9"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Inject.html",
    "revision": "98ec20e2dde7d43754a339e7261091dc"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Advance.html",
    "revision": "13efe98f515fcdfe05f275e567890d37"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/CURD.html",
    "revision": "4281dc9f14d3c28e573cfd4ef6eacf35"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/index.html",
    "revision": "7998efddf955bbb9a7712ea6221b2b9e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Transform.html",
    "revision": "9bb0c1eb45c5a3470b11e7078a8d4d41"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Namespace.html",
    "revision": "d4725bdc3b89a7a40f565918f8e712e6"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference.html",
    "revision": "dc521d8b785fde332bb2cbbb752755d4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Assistant.html",
    "revision": "87ce7072a6ca27133d393b577606c0e1"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Console.html",
    "revision": "a28b588f8b17c3b031c115e56ec4f27e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Constant.html",
    "revision": "3916b6f3f5a7ca2e670a4930efdecbe5"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Debug.html",
    "revision": "a9fefe6e433d93f6baf3b5f4b3dc20e4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Request.html",
    "revision": "1897e5ea663d9d425f6aea85d89e3edb"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Response.html",
    "revision": "f204766ed50b36fdc1da99cabbf3f369"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Route.html",
    "revision": "91db81ca16554ae09e968aa338da0ba9"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Static.html",
    "revision": "2217747993623c29504fbe160a5afc61"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Template_Engine.html",
    "revision": "b8e77e04b91fc3373c24dc18dd882240"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator_Rules.html",
    "revision": "917253f7c4d0ab144b3ec1185e7aa441"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator.html",
    "revision": "8640ab4283c4d1685d473f8a47bc57b2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/View.html",
    "revision": "2757632f89d96e7903d870e070b893c1"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "77c0d0d17b06b62706b2697235fa7a5a"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "6300af30225e01e794b6073723d639f7"
  },
  {
    "url": "categories/python/_books/python_spider/bs4.html",
    "revision": "04cdbaf15669bcbe89ef7f38c6cdf167"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "7d664395d39e3c4e1c58c382a186ea85"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "77382c2b9401ad07041d81c250118029"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "957707dadeb476b35b523ed6a6096d7c"
  },
  {
    "url": "categories/python/_books/python_spider/pymysql.html",
    "revision": "d97516ca2de2d6f947bd3869bde247e1"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "215db56f48f97c6e441261f87ecb3d20"
  },
  {
    "url": "categories/python/_books/python_spider/re.html",
    "revision": "c111929b0714b02ac4d4b3e0bd9d8746"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "86abc04d06e4b62e8e6d2d1f2a2cade5"
  },
  {
    "url": "categories/python/_books/python_spider/reference.html",
    "revision": "c22131d8320e681907734d23b5ea5e10"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "d709067b4fa5b2927f0cb344a617592f"
  },
  {
    "url": "categories/python/_books/python_spider/requests.html",
    "revision": "634cd28ae511fb4006c499f04581635a"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "02a942dbc5e5e7d96926a57f75d8833e"
  },
  {
    "url": "categories/python/_books/python_spider/scarpy_basis.html",
    "revision": "81d852527da844b50d0e9142eb4ebe13"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "32f43c6f8cf62588801c367699dc5d89"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_command.html",
    "revision": "8ceec3e551f74c5827c90d1a06a0524a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "a57613bc79cc80e89b636022710d85e5"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_file.html",
    "revision": "9d21c98eedd84bd28a00511a8a687318"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "fe84126051b60e1cfa0cfcd1b3e2e6a2"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_image.html",
    "revision": "16793d9599beac642f4b592c73e7fd2f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "809e2a471508661f1d835959db9a0445"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_mysql.html",
    "revision": "a45476ac09205ccd6581bbf314aa39d9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "07e20fbd4da492e0639dd944864b7a4c"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_selector.html",
    "revision": "d5e899daa6a7c521941606edbcfd4303"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "9d30a2b6297f41822e50d0dd54ecbf9d"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_simple.html",
    "revision": "684a8e6a76515c979cf9d95b911bb17a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "35b2ee8f569d1f1be871976fd7db014f"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy.html",
    "revision": "70c4a0cf9c5b8ab86c6d3671cb6a3481"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "87099166f43250cd3491c3b0007fa839"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "3e163775e5ec97d5320bf1af9692df25"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "7cda03f90fcc78bc53b93ab525220727"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "5f2b2e5f5a89c952f231fb18df1e9d71"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "de06753e576784f2365a05d00292f9ff"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "1d64968e32f8b96ba4f652ef8c0d2faa"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "440913d835745948663096f85132f23f"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "668110dc1030eb99bffde1ffd6203a26"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "13d162b445e18e1eb4c763e7c4557872"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "71d33cc51a79aebdf95ec5cf4556cea4"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "5e34f97edaf4e9d7cc2e6d1df0081037"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "3dd44f02e023d7020d797ffaf8b20bfe"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "f5fcf862b397fb377c5aa38e150af20c"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "ae0973050f0c7975bb14a4cfc793e196"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "476aad15df766bca5bbdd9618bfc1673"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "a6434534276e67b180f417135e33349e"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "8ef48fb346649a6cd0a61d83f4ffdd29"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "82dab3fe0b9d9703fd91ea6d858a4eb1"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "92ac6d9b4afaf8ee5a66adb6ed274e86"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "9827e2decba097ffc1680a26c2e60ad1"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "09829524e05950dc48a19f31ac1a3996"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "d9ca60bf8c31eddc28f2da3c74489c8e"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "ceb37b4674494047ee115c4ad575fb8e"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "45194b193fdb4e9f747ba7bcbe69702b"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "4846677d3839978fa4a2a447cf812629"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "defcc0237d2dc182a0605a24f56482e8"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "21b089e4d75bd2d55228e6d84da0188d"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "f1586c11e98c26998ea9d0466f7730f0"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "2490746c310a975bd8dce493a672b4cd"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "e77fb8a0aec5a74b4f317a8ef61585b2"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "e8c6c05021722ba83277315f87d41cb5"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "58fd903e3f94e1f4184fe422576484e1"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "1e9e31afb8b991146c3151427f4e30f1"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "607f58bbd45c0230a91ad36289251d76"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "067e1a547272a7084d2e50fd4ca3a452"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4cf519ec10f4a8c1d7af8b5c9dc6bcb1"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "792e2f5656bf8ab663529ade09d47612"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "86e6ec6ee09cf4d47ee69f161ad1b085"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "43e168c96bd1f711e3547effde27f4bf"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "db44f1615e98e731cda06866fff96e87"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "9e5dd4281157fb508fd14669b1a1ccc8"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "1eee268e48acc92359c2549d76af3cad"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "bae83f070b819448728feb466d960ee9"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "7f57ad427cfd86bf1064439a519cc822"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "3ea80d5cab063bdbd8cbd4d7a523a983"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "57dbf1b5a884758d66373ff78696fd53"
  },
  {
    "url": "categories/system/index.html",
    "revision": "e2dbdcb37e572e5c3530bdb12389ca66"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "7c7b06e0015505010e8d4d12dd8d8510"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "875e81ae138234b51c5429ded9c54764"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "ed74a97fd2590264e8b554e9a5e4cfee"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "74f2e28e7d8800ab9fed5a8da232bf90"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "746ccb8fbaf470fd8aef3fc0b4f89034"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "e3d2e81fa822cf1085acef4decd865a5"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "2709b4739463d26d6b5e1d75e5a72e41"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "0bb26573c8599c84471646148142becb"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "0764f079947897721ae1eaa1ff33ac6c"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "61725816225ce37265a26308b4059480"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "dc610afd48b04c5ab71140be9b77c7ea"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "b8f30b077277b417f03499312db636dc"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "610fb25d89ae925d148d100df984990e"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "334c373972980db0bbcea63ffc9933af"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "d08cce63bb37b15c4f02b06f386a1abe"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "7acd0353c9f371cc033608a2a7fd0c41"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "e83312230fcd5ff17bfbafc0617be190"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "b8c53bd92fb6494c5fe93122ddeacfc3"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "98e543ebfda6eabfb78ab6e97597ba35"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "6116482214797530c4b5c76cf80d2a5d"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "e58cc0d19a639bd2a819639b0df515ca"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "babe761962be06c0c3a87908ad678f90"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "bcf0403c73e39777c7ae6581d135f9d5"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "4539ca59ec27df07d44e1ecacd423db8"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "b79ea4b2241b5879aa5d463a63e1a63c"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "83a10fed891cdada82584edf955d436d"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "76b5898726e0991805bf4f223471a361"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "09c7dab60b55a7727360dd0e3f355434"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "6343b3a7f8705069ae0e2e73f3c5f7de"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "6480ff312cda0ac89f7a5b285906b274"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "f5b5865bbe2dc05e6447e46af9f854d9"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "be99987028f126762a1036ac185efe6e"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8a19420e78cc70ad50a4fa92a5382e0e"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "cca3778bf2b859a6be32ea28ea8c65ce"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "7d43e89f5933b1c47db1bc39f5007d78"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "268a78d7ad68c3febada32b03524bc96"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "1eb82d5effb7ed0a432aac0fe4ca0933"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "7961bcd55149eed47351658a18d985e0"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "764c107e6b039408c1d883f1208295ab"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "6859a6df52c908c14e4dceb1cdad4e3e"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "9eaa4a6d5abe7e2ab8b4b4b06fe520a8"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "e63abdd1b1cc9c100f8ee9e888a76e7c"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "c282a8a9289abd98d0ae90536c22d8a6"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "48f2e5515feac5fc8632e3806437a671"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "b2972e8cb944a383d0e40aa7429ed1e9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "27b9e53e07c6e18f6b4b631e80b9b21b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "bd84775f68c55dc7ce18ce7ed46ac529"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "4829cbf7c2f47a2f24f146264ad7de32"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "ff608d05c36bb4c80572763cfc7f094c"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "24062df85e8330aa29086112e3ba2b9d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "2e6d1da2242f9f5d9b8c03994debd012"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "1931634bbc5207c8d73d877b6c89e911"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "f46cd9bf60eaffc23bdc96df231f4452"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "d5e73e621efdb066c20e38b6e617b499"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "b2366e6ddd5e2e6d35aadc6c9bd28e28"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "89bd88ffa848c8934e2377142533f40b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "0395fe213c50a68a6326ef39e2829a49"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "a9442c4e2bd21db0ca98fcd6b7ee1cb9"
  },
  {
    "url": "favorite/index.html",
    "revision": "d611e6212dddf98c3929affe90b8d94a"
  },
  {
    "url": "index.html",
    "revision": "bd45295661191b306b27b1d5299f3569"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "19276eb7e9e3924e9b75a8554c359bb6"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "2d98c8b3211dd64f21c7f889c4632790"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "30247960c19d32f1669ea1b14de2281c"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "007b9ca4ab7a5de793bba48276c69728"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "2757423ef446f1f46cbb115b78c62688"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "3960ffc163e8d65cf4684fea3a4b0e52"
  },
  {
    "url": "note/index.html",
    "revision": "f42b8aab75bd007539ca894dd6c386e8"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "0eb891979b3d929be383b3fb9e9077e0"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "d5a5f0d363ac0d108d279ee1d28ef86d"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "616566d128794e5d24d05bc734c2383b"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "4db9f7c4108e0e0277de40fc3b096ec2"
  },
  {
    "url": "share/index.html",
    "revision": "4b935ec4f4d6516fc1f4696655a656a3"
  },
  {
    "url": "single/about_me.html",
    "revision": "94667e7f93cb34e2dccac846ff0dd0c9"
  },
  {
    "url": "single/all_article.html",
    "revision": "f95a4c032a06b717e143a45051d0a802"
  },
  {
    "url": "single/welcome.html",
    "revision": "eaba68c383352b66f86f4a99c2487fb2"
  },
  {
    "url": "test/index.html",
    "revision": "d62f2e0bdf6958c452b6b4ed1c424f2f"
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
