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
    "revision": "50cb6175099bd31b5063f002df44f513"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "d171ee1b4872fdf2558f4ae392ea9244"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "b241b16997e691345f0aaf12a273d908"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "329742406d30abb93afdb3d2b0a1b103"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "b20682c33465ef3ed842f431b5b7fa85"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "04b5247f70c7cd6adc4f5edab7d15317"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4bc3218520e1a8547398ab1268976fdb"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "a7ab30ad7e93a8297ef0549cb8daa4a4"
  },
  {
    "url": "articles/index.html",
    "revision": "8ee64211469f969d644630b03bb56e04"
  },
  {
    "url": "assets/css/0.styles.e2400d2c.css",
    "revision": "0d3b1330ee7e9015b4005a8423119513"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.787e0bd4.js",
    "revision": "c58fc057131e6c3030883f3ff4ca3d68"
  },
  {
    "url": "assets/js/10.a9529e8f.js",
    "revision": "4cf9944cc7ab2b32c06d2e6f909c4b85"
  },
  {
    "url": "assets/js/11.dc068847.js",
    "revision": "6dbda24166332a72abb4def0f5881751"
  },
  {
    "url": "assets/js/12.efd21c05.js",
    "revision": "034a6500fc7fd7bf969da4a0bf54b959"
  },
  {
    "url": "assets/js/13.d3224229.js",
    "revision": "e464bb8c7ffab7197c38601795ff31ad"
  },
  {
    "url": "assets/js/14.4ffd1059.js",
    "revision": "fab2b88b935afe3f297c4fa1e37a853a"
  },
  {
    "url": "assets/js/15.beedf24e.js",
    "revision": "980828661fd9e896dfeafdd9f4433819"
  },
  {
    "url": "assets/js/2.9856637f.js",
    "revision": "ed9e8a84578c8d8e82a156ebfd4f2f36"
  },
  {
    "url": "assets/js/5.f17ac19b.js",
    "revision": "8c450df304a23b7122e0a3c648c5801c"
  },
  {
    "url": "assets/js/6.386faf50.js",
    "revision": "4b56deebabf30f3f593e500725cdb692"
  },
  {
    "url": "assets/js/7.5bee776e.js",
    "revision": "a4a8faea3bce8a59d2824daf55d85387"
  },
  {
    "url": "assets/js/8.f1f5297f.js",
    "revision": "8c55a158622df6481e81851a92041563"
  },
  {
    "url": "assets/js/9.bcd6317f.js",
    "revision": "355efdbce47ce9daf377696a01f38d23"
  },
  {
    "url": "assets/js/vendors~docsearch.0989c548.js",
    "revision": "87f15776b03956f8494bf7d9354ebac3"
  },
  {
    "url": "blog/index.html",
    "revision": "ed0694444faeb2c8aa566104c91df85a"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "433b3a622be765affc67ed12dbe61782"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "e4e3f3fb3b624d68088ed34330033723"
  },
  {
    "url": "books/index.html",
    "revision": "10971d1c0b12d4f5afc68ab18ff52f70"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "9852599f89d490a7425bfca7afc4703a"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "2e0a2ee8bbba8e2c33167a870a27f5d4"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "dae18d0280614709fbb126190fd27aa7"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "969d7b840576d583f0ddbdcc74b14619"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "75718d84333be3d0c0b87cee6ceabb07"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "6a3c506aa527f4528d37daee5178a784"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "5b0ee7f99bedcfb3ae87b1300dc01160"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "fd7ed7a5baa184997394eeb647933472"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "f5c636ec256bcafa0da138de4ee234b0"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "f51b2e28a2a96d5ccd8ed3c4a7bbb8fe"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "f1d2049e5b4f5aaa730e945aea7c286f"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "c979d168962a316a22b594c5a78b3e52"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "504b4fba3975545bf32ea23bb326ec80"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "1dfdb8634fa1639ced873d0f46fc2b64"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "238ecb6237752a295aa62d44ac1dcba5"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "c3fb4d8732c0d94280d451091c371d50"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "b6be327f81742f4f9db9565827ef8b1f"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "af282dd0ff69c701042c882cc19f0dc7"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "aea8ab66f1e274f3a5b5132cdf0aecb6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "c46253fc37924c531e509d310b750fa3"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "9af8e8a547b1be3abf801bd2723b66d0"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "a64b1161af19ad2a8753104b267eb6a8"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "6765da6418a6a8f34646d32cd0bed1f2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "23d699e7f6957a0025cbd561c4c50d0a"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "a03175d5e4c672ae40c78cf3cdc677a4"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "9c19a4079f4590ed219048aeaa1fa9bc"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "f2bcc72b99c3f584d022daa7ba1bd3f7"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "f4df56c2a07bbf250b9206e602b2c522"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "c66cf3fd67820a90d703de21b44a3f5b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "51b206cb2f61b9f06df8578db4f6a33a"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "d045315a61f3d38e40c5698968c9d261"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "60a41d51e3a13eee38510c5028a9e92e"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "9f9c633decaa2df7b4d4bae75f0f3ff0"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "d1fe3db652170c33891fb98ab2bafb23"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "29ea438636095b8d41b5980609921288"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "487c3bdf2e8b992889cc93d94cd17193"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "d67e0ea36341080bb9228755c53ed3f1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "2c2d5d2eebb052acf25ebe1daf78381b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d497d7afec4824ace6a5d69594c514d6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "4b40a0c5be00c88bb13a52f8c05a2ec7"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "efb5c1806f9d32d4a00e2716356e5d44"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "62a2bd5e7a179cc4bc1984d1612ffc91"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "bdee886cf702d95a1ca9cc1d05a375f9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "de4b8fff165a93bb839f4054acdde6fd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "8e39293c507bcf14baf46870788a90c5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "d4128315d1a33eab2567cb560d213b18"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "ed785cd2a2c7a573dbf8b3883c331f51"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "1935d8b7861f2047d4a2de0090b16471"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "c5f8d5e96c9b46271c9e6b58aa11076c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "effe49aa2305afb8e1ee79d0e0c1ca31"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "f98cdf5bef11e76b4de1acea28e8fde8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "e8e7bafb226bb6050310580282418697"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "953328cac4a8129181996039e1f5f357"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "df2415aa2af4b4464870980f3f4621f5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "0f8b92da10293709348f1a58e37faa2c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "ba6e36b76354be385db46cffc7fbfa03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "8b9db8c6661984c44ae71767f31ccb7a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "85655af3d9f3f284de382ac5d1d16070"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "49c36968591f919f1b372403da0e5101"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "b0e71e0c581f8c4f65b4ad9a5ec5cc97"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "bcb66ab440bed834a7af26d1f3cf1387"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "9fc762d8d12e50bb2663d7b06f14b29a"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "de969535ad3b616540098e8d0256d1db"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "90839aecb22f0189d40ea66c53e3bf2c"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "bde2c59631075ebaf662f398e609bd9e"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "a95e0cff1602e6f95102115f5a850237"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "833db8432511690b1b6e819fbd242360"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "5e42839d95b72ef0f9020c50293d10ed"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "63d4f831313d33f14769451139d745b5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "e533522b4b784d7d26ce7be8dc6c618a"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "da21da1f84ca3ff7c37a72140b6ce701"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "db725553d995d5c61afe523b770a688a"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "ed6eedf5036cafaaed42595af33c9d7d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "023ae9213eddf418b447e6618b27de04"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "89d72740cfd8aa42f4246e636fff9193"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "27cd7f2410161cee69347e86f1af6031"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "d44f44f0b4eaf9b0a5dc2f77c1c1a211"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "312128f71799e99abdf9d45f1970a863"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "d4992257d4798bbc1cc517aba66af8c5"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "2f943ebd7490d9bcb82e08146e491d8e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "10d64205cacea42fc0020e8c2c4febe8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "2750318bf8846b69c32b25d8d0a96060"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "91052c51d5dbe30f34eb94cbf2ee4eb6"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "c8f30a62fb058f01149fed41e66678ba"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "43b5a406ed7517ed3d6abb18daa3b55d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "843e4b3316913bc3f04885523beb88fd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "a2ff53b6b04bbc84c7a1630eeca241a1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "d5b09c35d7c235a4f4c96707ec26d594"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "b5f8308bd03186a914f9f0cf3d9aae25"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "a6fb5a73a8b75cb430eaa8a01b529e6a"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "d76775f41d3c5c02de85d53daef82b0e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "6d22fc09b0f1c0b04581e7a3233f5bb3"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "90b1588c372837de6d6b7230697fbe19"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "96969018648f2860dd3d0db560308dca"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "488b531365f159549a8ada57c369b630"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "15ea07efee55285fe8ca46a68e434192"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "fa689e5e293e3530439f79016151ee68"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "a75703d5351f5ee9d6a24213b9ad56c7"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "4ebbcc90e724b4d00c32633b0641b78b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "a07257f3746c45a58a93e367953956a7"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "9e9af9dcae4735cbce4a49cce1a2780f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "967d1128c52e54e28fcdd55ca4dbe039"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "98853bc4b0616ab22b56255d9338eee0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "d99d84590ef34e6ba1c8eab1dee95e26"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "3300e710ab06c077088e1544cbc949b6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "2c460a91134ef95b87d2885e12e2d68c"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "3dd5ddabc124b7f3c31ea4f6c4f77c63"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "449052dbba9711a36289a8046e3ad7e3"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "ec4ee73a6a6fa0c8b7d172b123776558"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "efe856c184356c7cfb6a15fe8852c625"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "d22744334750cbf7c4b02e510cc34e28"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "7d970bdda372103052dc0202a715ad3f"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "ee543e0dec6c8f9bb3177bac3b464b22"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "1efbf69ce2179c667fd5327f92be03ba"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "51311422c009955355d10611c835f7d6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "33bacd95be9d29f6669a5ca9f408b23c"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "1d21352cb011f1fcf57a846b2f438153"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "90bc20707ca9b14732a68c16e18a93a0"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "f18d708f7ef272e791ad079582a9fdad"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "f4bf7ce03ec18b5846a647e6da885d25"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "ccebe583258b8e46774aa570cca8a5a6"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "bfd2ac91b406f0dda536a96bd3abe016"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "daa850fbf5749379182a6b89bae0b6f9"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "2c4281250f60d747dfbff28de3fefda2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "910e79ad878e01a5aad4ee898cce6b7d"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "77de4b2d136d0df518bc21240c64cd87"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "08f62d28232bbdc4b1408faeb5b6fdb8"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "568775c0b967ac6b36ce10a7ffc3be08"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "5cce5fea2dfae9bd24bd09fb585224c2"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "06e2812a3f7bafa0d7c1f200b8d8254d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "da00eb1ca580b1c3abded87ca6a774b1"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "26c1d4b7134e6f88ac84923b9480e715"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "67b83c0e7f23773f33da0e757c6fbbd0"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "98ee385e4d45d55411a8a9a3b295d436"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "80b841e33e83d410ae8896de1ffd4b98"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "d2472766998a250a116f59ef1eabc5c8"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "480c15fc38bed90a9f98f846530fd00d"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "97ebfd2cd684043ea84e26afc754a17b"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "411aaba50c3491c0eb6cdb02abbdc6d2"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "91725241b73d9c0a8fa04446eaf3e43e"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "481f0b4b1537db31b3553d005bc1720e"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "db0e0bf045e406b5bef9a6e5deb1490c"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "a7a8a3f18d27fd7b76285ec80944e6eb"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "24e8bd1f95a030a690783e968e97886f"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "b9ca659f9784c3c886f184231c72a0e0"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "91a234b8073f69e4540af4710fbe4122"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "18adac98967267ced6d50a874e14cb38"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "dcc86241dce65529af98598d072eb8a0"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "3bf0070668796f0519f913cb1029cbce"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "654d16bc4ca7f474160c381cda067e87"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "666b88b3d9e36748fb7f296fc81c52a7"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "f1214086ca90c3b95b55adfb38ab3f1b"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "d4653c3b0d6a25303bb4361d21ee8b03"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "108fb77b0ab0ac8a3f4dd90dfed8c2c9"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "cec9aed68c6d4f101f15fbf44d50f69d"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "1c71fa2e33e3bf259dce663e12d6157f"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "39eb42f4a7ee03a2f3a956ca1207b953"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "d7c3dd556b8acae6f337422450f0e8b7"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "dc9f19c57c7c797a068040c006e73b9d"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "4a509bf710256db6aa34cd3f148239ba"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "6b3f2590e585a1d56e5350b32a014e39"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "38c7d8e75fc79a6de1033f04ef8f4d45"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "8f140cbd4d23d8afb6a8ee2a98b2b04d"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "50180fd67ec7f9a3b420a46505fd7a8e"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "f7b4ed82ace0c40edd797a5c3fb2ef8b"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "c446e64d50d7e4f20c6b650ab16ffe7d"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "ec37cc0ba810902401824aa8994677d6"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "390a28b8e892e736ead6e81253bba073"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "220372410cb9bfb0ac77e0396637e1a3"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "edae2b6dec290cf3dd336cc6f33eff66"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "9ed59a9ed06ff383c470fb9c7202f7e3"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "74f6c6b8d6b90a9d4dc21913a5dc2775"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "6552188e33f7594f596424e9f1509858"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "00f210f72f50c8c8721bd8fdeb9bdbba"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "53fab7fa3e272b70d2eea26735b315be"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "92add33204d35a07408127e5d8cde8b2"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "2176bb17ee860a2a78eb7d8861655978"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "39a46604ccc8e31987815b74805ba7ca"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "99149218a82e78b06174e009a461998d"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "3853ec9aa3d39b20a2722fb985939861"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "27720fa1a6971b6189efbb3ed051ae6c"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "2e37986b140fd10a5c734b2aeac72391"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "c89c1e478a0791e2403b47ac36bfe7dd"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "1b3747026c1f735f344a302aeb449597"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "a5f00fbec6a9d659bb273815a1c72463"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "37f25a0bcede67f2e72b17886ad78850"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "d7ad44afd09f3678cc48f241029c2e71"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "11aaa87f45c09dddb198cb2fc7585410"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "d55da16f0f9742f53f16b3f3970ed2c7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "4f63ed491f0df6c70fc44ca10f3e33d1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "0faa247b9f7058953bcdaf706f674721"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "b9c473b6e17cbc1623bb7eeebafdc867"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "f871e580138006163a20e177e73e4793"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "e8b591b78fc42966aad3f51b7f28a550"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "4cdfbef3cc7b39a894428b039a2f44db"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "1c62b1e34eec3c647ed87293c00ad495"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "86a56e0fdb9677c344fb1d6e83562f21"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "43c5cdc92528a9ae986f3d485f0e7817"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "a3f8f9d7724640832de64dbf9f0bd503"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "6dc856acfd18a572cd180cb8e560f295"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "0201fe835492e71dadae605a80a196b9"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "60f0fee2bd5ac4e8b80bb9077af859ae"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "45d9983f68d616c8a0e416e6d3c70fbc"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "333d216dbb46043d0cf7c7d24328b26d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "848e07d315810c091373d87bf603be26"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "aa26afec2b12261ab421f4f73da92710"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "f7ebdf30a069448119baae65c02c71f9"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "dd79bd9a90f300c079c16ca5cfae0929"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "96b0cad50225ec9a11a9c13dae58234e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "8e947ca888c1567beb0409f8a2f4b2c0"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "d1d71c1f04247e1e12242e40d0b408bf"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "3e27b42217a570d34d6135a470ab87e9"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "73bea61f2e7ed07dff574a53849ccc89"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "b8a51182ca92c2070dbff75e733917e8"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "6d1b0f45345452c593ebc7707208c7e0"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "4316c3a473085c64725da1ac30ed6869"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "9dedb327b327b4f98f6dd1ddd296feba"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "c0245246b4fe592cf460e9b8df93a59a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "f91c292325010acad5ec09cbf1327251"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "cb1a874d686a92a1df078303f1fff394"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "2d669bb4b3015200464e75a2665982e4"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "77862de1b206391a1a21549d42692df6"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "515f253a0d92ce2bd8a19f2b5ca310d4"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "f31fb73140b18eacfc62c8ee739b48ad"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "033e4ea2ea138c793959baafa02cdebd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "4d16e5a2450340a2e3955028416499f4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "73b5f4485347a35f5da636212ef72c74"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "4d0022d586aaab87bd37a4118f932ff4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "32ae7f04517ef4fe0cc4b3bf99498bf3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "2a438139f7d355768b96b3d5c9f5b196"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "8a05fb0c43cd92c426fe4f0dd443db55"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "c28be3b9b726b4a7228bff1aa9c3a320"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "ef2b16883516968dd66da9cfbb3ebf90"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "184325f4344c72abc15dcc624f10e2ee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "fe0187baf7f0c79f05d3f0e7c87c1e2c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "235f4e68fbe68e320e38908954f49053"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "79c40e4f5fe01106021f8a248431e8aa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "40d9c92b7d058cd16d1b2950b3bb0944"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "4bbb6a7c8dc79c22626531045198fc1a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "2bdb9c97d34a523504a24257e86033f0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "9cac54b665f219cb0e36930eaf684123"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2b8a8ac0437b5dcdb2336e3ab0162b03"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "04febcec2ff0d4ba62e2e33acd46b056"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "02979704371347749eaf3de374061456"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "88436f61c88902a7dbf757ec0eca73b8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "a8a3965ce2582c081240ce1ffd02be15"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "70b92800ed54c96a9dbdc777752c0dc8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "885cc2194b2900e062b7c0884df763b3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "01a1db2d275a5b67ebfc319ad0865499"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "9aa88a0ab855850aa53dcbd2a528efbd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "c1f0e25a54fbb72ad5821fa03ea8f6f0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "911ca2d5df648fc5a7ad35ad4079a14c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "40f1a5900ee26b2042341c17ba367cd7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "cae51cf80e36717a23a98aa264fec53f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "3e1d92d78fd97d828d83ba020b706c3d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "dbf8ab802775447a09cce2296f088c6a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "94a5c1194b648bfedcee2ed79cf2bfcb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "afd7c2ab5bb4622c7cb786060f13f718"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "a4ffe79f858f439ee008346d7eddd367"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "96e8c977c632ee33fc908162c71a95f8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "478ac0a7a1446d1f8b3609f4ac0f6bc2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "865053b0a84c3a00947d7c29731e0517"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "bf3bed3cb728245ffd512a62d9e7059c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "8069ef0c03df45e7c791e4c9b3e6705e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "dea6d7fa46c98172f34353a14c563066"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "5755ce5c3b7ab01c54adc512aa5191bb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "9fb57b40b4b63179485543aa1b40f7d5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "13319b415831d76a761dce8c57236eae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "2f8d3acbcb79f74b9483f097958c7fba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "6a9519c27f5ce7d5276dde8735e39db8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "cf111b3ac3611a7a5516a2e2d3f7d0be"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "396e353cea2f8356cf28f1f0664290e0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "23f7c09e4321335537e3e864eb8b814a"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "bb4b358ef3021a6ff046d5d4a6caca67"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a72770697a0e21f0b79b00769ce23fb6"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "ff757daa6bb526b9db9cd5aed1490cfb"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "a656678009169fc6cd575212b9a7a5a2"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "97f14eae9ab99e208a556cf732fa2a8c"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "fb44043deb06cb9359f330c8305ba745"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ac0f250773c024798324338c5a1d38e1"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "2706f15dfb6e36989ef35ac6a726dd40"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "f62c34f3a803dc511d4b3f2209489dcb"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "ae1f84be343fb7e115537357fe53a882"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "b42adc5586fe4c4121aeb8f2b3269ef2"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "68511dd2e4a32a38adc12266efe3b741"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "6cf5a64e395dcd5e974a1a08e3a9d2e1"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "6ad2c1fd255d0b266b18c79f6ceb7758"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "203744cf6aecaf7bba32cd8d154652a5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "1788c18a7eefb97c507ac404f1bcc1fe"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "0fbfadb7cb82174ced7ffc3c1687115b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "dfa0409ac2dce212fe28cd6fad938021"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "9a5e8cb6eecfc0b57956c77b5641a4c5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "99bcf758bcaf332834b1ad090674456c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "9faac26dc4d1b64a2d2f528649c84c59"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "e94fdb72084437635256fbf4c59c9885"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "24007e5ae1bec43346bf5dea332fde81"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "db737793cfdce6d400b7948f4b09764c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "f6b16bbad53b94c470e8174f19444855"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "36154b81956a38bcec8bf52f95d849aa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "7d53e902f9c3cb75ac6c9fc6d68765b8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "631515a5f4dc2d68035c3949013aa97b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "6a144cfc712d0bde63ac4806315f2bcc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "bddc3013c5aa35446c8774eb6ea4d1e8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "156e47248114386582e321ed24aef8e2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "84ffaabb4c13a6f4931310927b0dbbe2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "822594749a0d66c0341149409570b70f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "9361e23b1df0e8ebb3ccf24f7f872066"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "b784f8d568a51c0c5a68c4112e00dde5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "bbc9f269a9787ae8c8b34b4c8e8ecd71"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "60a4174344e0f028b0a097da845a3ec0"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "b6fb5232d71a91a76de780fbf3828e92"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "02132c03dd5044052a8d1d73f7617dda"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "cc1456dc5963166171106b947238780e"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "fbe3ae7d7581ab7a17519cb61b5f6c27"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "3ce079ef67c24ef63ae20c3c35dddf38"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "91466aeda98a405edd4003211b994dc7"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "e67d7367a9417eedcbabb0fe7d5befd7"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "ab635fc3d97589da2ed282b9fa191c26"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "ab5ea45cbca01b84be1d41f50292023f"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "a9cbc3506f6d8f5deedc569ad449d75b"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "8412eaa6467a9fb7a90398c80aa28b15"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "1f28384faed01e5f1167730749cf5f0b"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "b531818ec9e2872b8b04d5d3f726385a"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "4fc4b44abc7de97b2408cfb0ccb4a2f5"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "2df699a9e7dcf50b9f604419dfde0aae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "c7a9dd1e746528e8447d18b9bf02f665"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "e2197ac31cf2f8c24a952f8f187ca8b6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "0fdc0f53eef38f7fd7e1b683fd3fe23b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "cf5874dca778f5b9e9b34598bd08ca77"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "c44a8d4fae175dc2d0e5ffee94746794"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "b74cfcd0f8ea244cfdb16fcb3d449dbd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "8104e48851cae04ff9f63680c8e6c72e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "cc1460f19311783c366281fe27b3d10e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "4bbdb587b064dfc74e482181bd4ea0bd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "51d355780fccff7929e1c4140f76e071"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ed5ea9c98484ea32c947057278e1dc64"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "9b0c8df5d5662282391e05fbbca94d23"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "e74a79e9bc84514ffd821c2c7b2a2c48"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "f7a8bba2bf71b4eaa0902dac2f2444f9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "888abff557471d9e61fbbc154d43eda7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "6eb5a2bd56a909aa4e8bd3c2f7d34699"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "b48c8e6881218a2feaf45b0a757dde4c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "8fb4315a1b23eed910fc278e4034b78f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "82f186492e54b4a1b665262caff13e54"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "bd0368e18f8d4934160dd20f9836c43e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "d143921782bd45f87f5b41c656cddbbe"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "e844f18f22344250254e477336b9d464"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "f12142fc688006ff500cb19514a00993"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "1497eefe7a1f08493729b7a0930d2e14"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "5e4665162c8af8666ba0ef7743bab26f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "a738e47a8eaafa31b6ca2363c4302c15"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "1d1c2efaea34d839c832490f8c9a7b6c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "0839d4e2ca17cb352e75fbc7557ddf68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "289592631bb9bde6c8039a746a230597"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "720e3f38bfba34f6ec1c9ab65d4e326c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "e0499348f6819e2e532f0cae5c82d528"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "a5306a9a3e5ff7658aac0f26508b4fa7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "0a5f91a54c2f25f0f3bcb5a2fbcb9775"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "6bfe41214aaad54ea61b0632381d71bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "2d1b542adbc3fe86ed9258d3103309b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "739ff45b6bc3c6e3cffd492e2ba74d0c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "02ca23c2c5add41bba7fd8aa7a5bf694"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "e2d5b61179f2a17374e5412bbfc0c113"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "1759b72f907b08d817dc06ca684f9bcf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "cc94fe48b5d9d05b2009db5db1594466"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "4a277c2b17e98c6dfb570435e97be78f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "55d0925b27f09bfc3a4bd385ff16aa70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "9f497a95835bdec8250d87db91bb88dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "f923d3d815d096cfd6a09e4ef6c44fd5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "035c2cd4ba69458dd49b06b506a2537a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "e43d9fb415f524e73e9257658d653bc3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "7b1cc528a3d0df83251af80864f29ca9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "7dc74ec54f87108d2c936e82df71c776"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "869fd0bfc31ce26cc39f544e370992c3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "d456b772f5c68a61d5c5e5c8e09e01ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "8a2c6d88b9d50c1f402dbb740b67c750"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "a4cf14204737df9c1304fa4ae224df95"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "45bebf83ef90c318f458d7a6f37da0eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "dc9fc779a6c5ac203e3a8329326fdf61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "6af3127a0687621860bcc0cb7a773e24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "e4ca27bb6429b3b2cccbca81273a61ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "107a1013b5109c8820c4e0bd51f46e0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "6cd1e296d1eff6318bdb1104b0374e3c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "21696e455dab6ec74bee042d1f182cdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "f4d125d1aa9db1e714be607fd1c3bc94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "7d59f4243cbc579c37058bfa98ddd90e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "ed3891b0cdcdaca25a11765931026785"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "65019adcebd8ecfafe7fd21a88c0a944"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "337ff4b905f2b26479cd35c461cf17a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "4e77dcf31cf4acd867d400fea00cf9ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "2bab0cd1c4cd04158f0de6429414152e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "4c6d4f763b3892a4ead167d0340a6db7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "7500145646a79fcdd15fe546ab66a6ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "fdb380ba5c3043812eded389ae2b8386"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "702f5f1e52c62e03a565407f183fc7e3"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "6db2d7cb094b9ab93150b59fb456b03f"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "9cc950f9c478a54bad45e1715ecde61c"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "bd350193ae4d1ef17ccbc3e3f9be2199"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "cb678ab0e83d8e9d7dff3dd4992ed847"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "41c809b2f34b6b64fccd78065a75fea9"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "2f73bb4acdf1b352fde6b13736e95260"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "5c9ec7f1aa15aa834fb32a07f05206f9"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "7166d0c483ffcc5b0b5ec1dd509c3c40"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "f3605469237346dad8aba4376d9d9267"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "96fed0427ec3336598da97855ebc2d94"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "652937c5692a8e180cbad012d7f55864"
  },
  {
    "url": "categories/index.html",
    "revision": "5d5d4be53a2d86e981bab241b38a0c8c"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "97b54d9b4af0d0559e2ee178f2703445"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "c98365c5d8bd134fd1b1074e5fcabfd2"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "d754379760426c534969f2143f5d6892"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "3b476cec8e3c5293e7120a95ef8cf878"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "25c6168074253170666dd78ca10dcfab"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "1c530d3d5b115b3e4892d978fc6df1a9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f1d84114003eb491a4cda7e39b6bd31a"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "65d4169d0f5226f7b8d46955d709c071"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "65eb4fe713ef246cef1881f9df208f39"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "ead525f2a92fc81ee40d0cf19fd80aa6"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "45c02532ba654cb6b9fe713a15fc276f"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "1eb6eeb991b6aab3dcff67154529e777"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "ed64e5cc091b7f70ae2c305948abf891"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "379cb05cae761354a37b8d03e84e563d"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "a010f804e82d7d27b81872aba13ea21c"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "03b4999535e888caf134ee8b5434ebd0"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "df42b99fad912f70d252e7041255d58a"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "71be2142c77802c9598235cea2549555"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "8d7626af1fe8717b20c12046db618699"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "b957f52277f924f32e57d3d951026780"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "2cb9a648b6b7d3ce5dfccdc63182cd38"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "9ead6b3bd0e95fedbaec82cc86672b92"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "e26cc6824b8c9b742ec4a5ccf74d1f81"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "df55c11225f1416bba9f7a5df27f3d90"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "f0086a57e030c7e459bc629b8258e257"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "f84896fd30848fbb3efc7b8473b74433"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "7cd947c3b5c863888a1e9c7489184f5a"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "cf3a1d3cc91765fff6a045dd0a97baf6"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "19023f13f4c6ca45a6d0f19516e5adfc"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "e7b16d1805048cb865caa4288a272eb6"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "135482c2430070a3f31c6ccb207acc48"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "3824991c9bf969d8e9bee11e722c30b5"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "4afed981441ae8a7219cdcd3b0cebde3"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a5b9463f266eb7459bbfd99ea35eba06"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "eede97f0ae73a248268e39015eef0f73"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "8275477f443f61fa668a24d68e253e18"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "e0f846a959246a8557eea1bf8b8cfb71"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "61ed11732ce1caa7487437bdc2bac9dd"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "cbe367f762c4a135e190776715c0fad8"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "46da74d33af17d0e1c846f7d51f96533"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "016d279a2f5992a03fbfcac0a5c3ed53"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "ffe21c5e1dae6fcbb1d26eac9544a17a"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "a00874ba63860ccf92eccb2f109e0b6c"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "badc42acb407075a66e6e2e2b8065528"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "359b19dde3c5a1c10d427206fcb7c36c"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "baf9dfb76dc4725aa7f34e7b555ebee9"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "ccde22b67c252726a6f6e827cc8a4846"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "fb64116a76d79dc052a81f958374a772"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "38d59f727684a9bd5dfc9dcda5198c8f"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "254038dd449850380a4b13cca66c688d"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "8c8eb377c6c3aaa43e9c1744c0f0545b"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "4a6d216195614da3380cabe96b08e119"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "dbfa81139d2e6617958f18b0b13f9c63"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "e6d063aa269e1b15a4a8e2d3a793785c"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "d8391f2c58e5d42281c4e60ce2636436"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "313e9b4994bba58a2a961974143f99b4"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "d0e58844dae6529bae34ca8d61c7a31b"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "f2c79754661e13cdd18b44bb4d4a122a"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "7de83860f40d7c57630025c766a18f28"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "3c46a404c7a1c3963907a2d475b6f283"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "eeb8f30f14f4d08c6821c3e278b492d5"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "e2d254ceee2f0e22b32262eacef8837e"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "7f976be4ad0dc7ba806a3311c93e1a3f"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "cdc5aa58dee90d3685553b7d01a5ada9"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "e33576bb459fe2b30829faafc06a628b"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "4ed85a7d935732970c18c59dd71f150b"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "b85850a456fa18186ae1430ed686cf10"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "ea195d53354264a8185e5479ab9f5523"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "bff4dfe132d67973d8376892deb5725d"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "5613b29df84970687a98d291612fbbd9"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "1756b161b3a5a29266f18c04ec4850ff"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "a3fde652ad3485ddc7149e736ba5597f"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "d34a8810fc00b5386a092e1b038520aa"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "c20f4b0711197dec6db7bf23f2c9b53f"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "cbe5008b139feea36ab76420e70db925"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "dbef9a760438306da8d5b34707ca9ca6"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "79381ba2e1c9ec5aa4be1b005fd19b00"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "357eed8872500a3464a9a8476b3b0f46"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "2fb5a2acc68c163dbd540be3c75d1e2c"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "53312a336654b6ab2d15c5e07571a597"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "76df09d37e51606d168c79e3355e0396"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "944d7470876a3a9e9537f3bd5b9cd268"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "602d2458c66ca907ce8482d52c2f300a"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "0c61212f87df09a04efacde40a33d218"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "44d73c3be4d7e14f51dd775896993449"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "d0d7ec832cb9d71de0a01fa468ccf8e8"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "beca80402fff87fdb88d6e4f51390d7d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "5b3ed127bc9e1940a09feb14ad598bf6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "7aa42e774ff57e14142d4831c5f312a1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "0bc2d6bff3bb38e326ecfda52dc62f83"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ad599325760090be19171ab2017da443"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "2fd48e2169151d1c6b6d25dc168c1da9"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "a1e672224217f6187be3fe7d0622ec78"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "b1c35de53b975cdb8f1a89d2d87c5488"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "e115f9ecc5849287882a4710835b10c1"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "f603efc4862ff2b180649cb8864c36e6"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "7c8d00f373628c475ce2e409e222035f"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "7a2cccf29f707f0de3ee1d278f82de65"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "bf524da628c5b27277c71433e2ae79ed"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "d74b0f4e02f4bf753b771ae04c1b47ba"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "450538d9a52c21850a3f1caccfb21de6"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "ab7cb15c3712f2a4faea19d0ea6f115d"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "aaaaf067d6d997217ce543444db448ae"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "88f1789978da6b29c46160e57d49ebe1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "c22d7787aecb5c7cb1a6bd6cee45aa08"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "d92a4cd8c58ea3c870cd605646253853"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "c1319eaee4fa0f00cf04af555da18703"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "d7f2f6f3bb6eb0f1634c5c3e23456a2d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "9cd7f2144692f739e08ea57d8974d91f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "6325fc3d8e5079ddbb31d1baac7a0139"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "86c97c1d3c241463afe20797d55de231"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "21d121718a0cc55cf546bf571e310c1d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "fd6c74e919307e3abb64724a1c48ee3a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "1737d5cacc46660a61df43e3ce79f8e6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "7641f2a7bed657fa118fc0e11d3a0ab6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "4012bbd2227a55f43497887097a8e041"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "786c76f24821812b03b4cecabb777df7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "721b3d0dde19546566ae23f5ed7499ff"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "5242917caeb3c2dd93ca8259395d6da2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "261c0a2779605f46b8d68f575c8eccfe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "9b671cdec339b55a905d872002e4fc7c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "c4d053ad7a2eba38ccf624f1d36813ea"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "34b306c07b63473b97dd7353ec8ff059"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "ba3d82f3dec434ceda167f4c67774ddb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "821d85044d024644c9abaf35c547d879"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "091cd23f539a8abd0657e1bfdb4abb98"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "443be30e776c7d9c8525801f9d79ed5c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "8f73cada828340f304e7de66b509962d"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "30b253981a2fac7294a0aa6681404086"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "0c4b4a0af5a688a1f303df7967026702"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "19eac3e2e101f0abf536e8c285065776"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "5df1e7a0a4a2aea1d98880441bd0cc61"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "a8869372fc89c64cedd3fbf2b37227a8"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "c3fce3b2fb4692412b8021de851f734e"
  },
  {
    "url": "categories/os/index.html",
    "revision": "a489cf075da5fced523a8d9abb33b40c"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "0a2f825ed97888e5bef9773101d1feec"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "c1d952256740a6f58a9ddac55850bc12"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "dc02a0d6520b990e887a489eaf72e1db"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "5f12f769c4778d6b95920f967571f7c3"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "547b5bd42e509e741ea6a902ffbf0316"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "77ff4515f8fd791aef0916f503784bf2"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "124c8c5c74c4ad62535e989475acefc6"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "c3624a2478d6bc0e661f98992fc698c9"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "0e71e3f28ab74f10ee8abac80ae0120d"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "6f5b25ce1b79e2d8f3ca74799418a53b"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "4cdd6e0269fd1eb1646596f591d3432c"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "1cc17967a44de5e2f2f6b7ba10adda1f"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "1ab424385f2118b15bce4bea120f5efd"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "edc45737c5e54032aaa80e7dd22a0751"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "e096fe584e94450b0e4745e603088bb5"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "6e735483f197f1658031b12ff95e0148"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "21e2098f5327b0566808f760f1f83e15"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "52ea32dc697c18582afb968ac602006d"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "5eb3910c332f7026fc903744c1cf4761"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "98b52586fbd9682c97e4011de8a43658"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "48773f48a07b44988d80660c1b7f3fca"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "38f00f46f64333fda4bcaedc76483756"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "2cea34f715f23e359652cf2f868c064b"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "9377e599e59fbcc9f7f27fe2fe320a73"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "688d1f1dd07db874d863aa97d37bbe22"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "523dd1912332f144c98335d2ebec9b75"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "19a53465aea9de7478384dd44267f61b"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "0da9ac03cd74dd1de208926dbf22f49e"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "bbb9f3e06fb8fc6feeef688b5e471343"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "102e74b3786db993c23496b09edd32d9"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "eb7025cf8064843aaabf82ef11b86837"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "debf22f57c67186f115b1dbec48ac4fd"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "1f4bfee66fb52d5e9205203719cc9b8e"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "26b9635a78eddbbb6935237b7bcf5a8e"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "0abb6303026440db520a861d4c5cf93f"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "a97f2af40b035758e9333df661dada25"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "db71be02b0a83c6b369322284ea0523b"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "fd21f155a98b12b8bcd64e3f63432470"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "9f02208cf5a2dcb9b78a4b38fe7ce27e"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "b22bd5263b83d905972459b19d83cbb6"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "e21c7c97d416eec462d8943149a867be"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "d41f79f185309e3b52de95df6d141a94"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "e4158ea4377824ce545741accf839695"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "d9a4880421a7a254c57896d688d153a9"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "9936af740fd8543ceb3db5fad4df4d4d"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "235438af6e7ab8952f5957356947443e"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "a064c2d22c0e56c0ca10860c4b88d6c8"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "015b3d3afa62babd23ee9319c2856e56"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "e3bbf193dcb99470f8e22f2bd161ca3f"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "3209624ed73bdd3bd01fa3bb8ec89707"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "51ba91e1b36cc622ef2935878323493a"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "b836d4d4589aa32a82af899643d6f712"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "b3e684dfd6360f28e9849a0e17ed8cf4"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "f8ca54accef5eadc3b3a98add5546fa1"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "966391bdd1cf40e2ab28b93490247fc8"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "2c767c579aaa95eb28582820cdf1c4a5"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "11b5cbb365bcb106ce5947141a327f03"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "48a2f150a4fc3b337d1c741df803f19d"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "1eb5d01f147a4dc95958fb771c76fd30"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "c594eaa53f26ac0f5d1482d486e29826"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "273a287bfcc8372cd925483796ef056f"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "0000ce35434269897f84ee0319d70a1f"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "be4dc7b738b70443dda56ed1cc269ccf"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "3056f3f01bf477b2c553ff8efa39cd6f"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "a587081c1e44e3bf62b9fca13aea2114"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "c9a7596f420043462f3f7a558e80beba"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "80067e8df152a996c7b3a9662a70d973"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "09a003bbb843db1f63c9b8dd58bd48e7"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "dc294d14b2c51b5b67a93121e577e0fc"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "d523931be2ca3e86cd0be6f7cdcebba8"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "069b5a648c0be2350328a7e40b4c5927"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "d99a3f878d6ea72a965d5d8d6b4da6f8"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "a5723fe3a3737888c03a013caf935821"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "ea42c0bd4e0e0097ffdc68626dd84e27"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "b1cb84a7124da3146a83245f0bbc569b"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "a0c93f0d854dea3bc80d509bcaf1357f"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "40deaaa88a615e7dd0cfb86e790208e1"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "ef10972ef2c3ca51771e2fa7c1ee256b"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "ad7cbb230f9a578200ea9c6b788d6c49"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "106cffdfab3f704dfa52ce10c3b01b8f"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "624ef0006e22d83076183a588043cb81"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "10c3da97a6265c22d8932980e5b153aa"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "ee95d01056111d89c5a66f29cdd455c6"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "c1f1e811b194a2982787e7a23ff1108e"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "2d3fd1dd3cfd8731aab632a1181c37cc"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "6e3d2586165b6d9502be3c25f289d656"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "80fbe1d5ed4bbf003b4a64fc86ae7539"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "cad7b5ee41380af455fa746cb4440d4e"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "240f68f5afa72f16d0355f69f71657c9"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "b7339bc60bca867909c805016c361c1a"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "5922b73b22dcd5c471420de039b7f4b5"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "347cd32bc1481b9e09ee36e4188be21c"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "e567f8d65f273ec8489b6e74e6573fbe"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "138f8fa99e40333a9089d2ac63a62b84"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "df368a750a8f549eed00ece2a4b8b85e"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "b2e63f11738647da2cf33a93e6dd6683"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "d2cac219d8118b73da43dba5ebc6997e"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "ccac9d4c020d6506ab54c6e013dd41d5"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "8f67d9c297620c058ba6be0c13291fc2"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "c360395301580d1ff43ab8ca27969a49"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "a08ef5639095cbc739b6e575871dccdd"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "bc0439c4041003fdf7295c2fdc71a491"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "72f9520d197426f676b9a8cef81b8c39"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "b6fcaeba14be19842fdfdbd6d299f3bb"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "9fdf5bfca576ab37781bb7ebc1f4453e"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "69785285468e16d516c0cc1d475c4b09"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "3b75d65d016450d7cfeb5aae2a51c58e"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "832b0fa628e7a1582ec430af9fd26d6e"
  },
  {
    "url": "categories/php/index.html",
    "revision": "869e1c4fa8aa465146f093ad44333824"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "1619b54be9bce6428bfd6e3e0f970458"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "e0699474810ef3bfed3edec3139bd75c"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "7ab9d19dd6ec6c5a773341a1ee925668"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "9607671d253500d02b78810f85259f84"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "5297321d391725985fcc71fac3f70871"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "fd0e81eb78f9686e3bf2765a10ec6f65"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "c675cc7389a79f6d3094b9f2253f81e1"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "bc77ac8b788d41ad393eba7e5dfb89ae"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "9d38258e7f227370ebb31cac90f87cda"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "16a372101f9ea0ecb2b566a1541c291b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "0b6cc3d04a7b529a9af98f01dd75e491"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "39bfc79a375934c1cf75654e676e15fa"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "0de97845b9bad8583fa77912327570cb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "dabdf9ab5cee6aa96fa92226fbc16b4c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "a8a3a2b3b6e91d7b66ca773f07a3e62a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "45a91c0d8bc1c184bcda82792dd2b12e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "c56788eb9c774d7a86365fcdf549c2b8"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "7a860f4632616698bd50331b0e85450b"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "cfbb92c23a6e90a8dcf4e7630845f8ad"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "27af2976b16e1022c7c9f8b27f0d155d"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "30ec5af732f2f6ed2110a77809283ae4"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "e8b9ad6c1da89dd35277c2739de2eced"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "1fefb19dacd716c3adcc2c287bc63d91"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "d8773cc85184599cb98f03ac93f142f8"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "524d7f47ace16c82edc4ed4970cd87ce"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "862b628d9c05578a63fa0b8273cc9585"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "9a7fa024ddbf3bae9e00ba1a97a2859d"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "631ebc4b0def2e330c92734c9c6da072"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "76f8f57a18b3e26dfc8efc3946325101"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "534b8f2d1cc18b4d8c725bcce42d6ac1"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "20acf72eebf7b097586817aeba6b5c01"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "de5b42abfa29ac6236146db837b5f9d3"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "c833ed3b6967b04778a95fd44640c36a"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "9cb3fffb47343364e23dbb4239685ae4"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "863e7cfbc379ba0bd381641ed7712c8c"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "7ff65d3a86cdce946439afc2d4fd55ce"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "89bdfd80b64c000dafd292d04d183226"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "daa79c812bda675c94e7cf1285010e1d"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "ad58418e0aac57eee5360c56ab75e31a"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "a69353684ba8f15bf7c2b2132c44de5d"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "ce124a71dae98c11c29085ae6754ef97"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "afd678e1fe80983755e8be25c458890e"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "57ee49518f3e04d765a455370e0b7b10"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "45f600698783467b38dffdee1a4f6da6"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "25b24f9811cafddf3552f708596d034d"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "fd4c8bb305d72ec4ff2bda8912937e8e"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "2db9034875f0823ee5c9e7646dd215c9"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "73493f5caa5979d04260ef8bd6bb2a4f"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "d70b5f7e11246ae99aaa88b368d1dd12"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "7b428652be207e46d90ff4138e87e668"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "806cd7a2757fce066d028ef4487cc13f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f594b2efa7339c0a684d2a6e7297054b"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "26a295246e50a81d25b21435b253fbec"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "9be3d1d2cec1ca050a85331e0aac83d2"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "f3dffcaeb446fafb9a307570acad0c58"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "2ba625bdb38d00321d3f033e000434cb"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "24710c4be22f87be613d93d0e1cf25e5"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "79c9e8522153fd59e77764ec23eda724"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "1f2094b6f24f78d8d616f7a9f710d927"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "947861e6cc39e65e387b7f6271e21ab5"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "2b67a965824ca3439fb06db02a051773"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "36129b25eec8a3bc9deeeca2eb1020c2"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "0d69bdc9682b0cb079c94c0c46236778"
  },
  {
    "url": "categories/system/index.html",
    "revision": "df60d2126aa9235ca4b567b0b4876aaf"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "a7f4f178f6b85d6ad16c3f202dea6da9"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "01fade13104aaaf7c7481d431dd8b6f1"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "88b9b6de9d3463e30602eb811c7a65a9"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "90a4615e2a9de5aa514eee1cdf8a8740"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "5e265f851ca6a63451277b9b580f4255"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "ef57e2b5093e220127f91ca4ad4ef1c7"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "c461ba58d87f9bec0b1f0799c2b5f306"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "fad019ae189e5d3f637be79efa4fd470"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "26b3c77cbf01b6c02ae7b64fc4ed8343"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "f056b4cd821d6a764603653facf85994"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "db29201ba24c89a7029c39500cbd7d69"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "ce65653dd28b98a740b1e463b037d6de"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "33ea6ebea1c01c08615c6599c238dcb6"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "e36d5fded20bbd25bc5146d8465d6378"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "85210c72c6d5ac4693c1a5d906397ef7"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "47a722b0f05d0b7392e5d01fa5be6374"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "97f5ae455f02ede789bc63886d5c9c69"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "8763b7aa2d4d95b74774e9f03f57d175"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "366ec0543f5a54b4a7571c9732e62799"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "1357bae8a1cf1d9970673e2f37cf7d1c"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "c33010303ca5c78ae97aa61c1b4041e9"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "2a3cc99309af85c773b6d27ca164c5af"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "baac06e82aaa2dc5e8a0235e4826f8e3"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "9c9668f6ef4ec997cc09eb447fed8b54"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "51fb1385e5009069c3e2b6fedf0b961f"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "50d214a20c5394be4016ea2bd1780872"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "3514dd902f3b8a3c55a484dc83f471d9"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "b7e8d51bc7d5d42bb987fa68656ca95a"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "bcafb72216ea547934e1ca01bcf44f4f"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "dec0cd69ed06ddbbe1e723636d0e8116"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "71023fde16eaeda0bb6b889432e4a7fb"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "595ce565dc371862cb22531a1baa0ba6"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "4be0c05c50fa2c5a52465437fe201e47"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "9b705bc8aec48958aa22c550eeec8a7a"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "e29bddd4a996ea06bdcefd93ff13c35a"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "faac62cdbed4cad728b7e526c682ab77"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "16a4a5cf4155b301c5893e77bfed7311"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "df065b698da17d2abcbf5ed2d0a0bc72"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "c30268e28accd22dc24b62199a4b226b"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "def550569d2b4a278069a57b6dce2870"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "bae074f6131f33310cbefdd0ea64ce38"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "590f3ab0869d1b29e98322c28717d11e"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "756b49bf0fb0bace3f97d4944df12a4a"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "599b7136a703b3cd62824e053f33769f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "7226cfc96fef46e4bb3fdb581d7266da"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "6621a0b7ee5d912f9c0a52e10138d243"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "bd7f0355b57ea399dab5849aaa4b216d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "fb299513bde6a1e887098e73413db67a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "a5b1aaf85e3994b42cfed564a2f1a08a"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "255cba93a7a3056f5ba2ec5a76758bb3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "97ae7a19d8494b1ca3b6a192f9591839"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "007df4638852a7c18e3f0ac12d4024d1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "9003b6fc449f679070e63bb79771d033"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "f76df5133da8b4f6e5924b9a061ed969"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "c1322e5211ea3c58ceaf7c8a4105b0cd"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "abd30142903737ee15cbaeffc54ce42f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "f670c0b8a7bae2a8f1fe1c6fca2a5bcc"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "145e5015db5169014ecda6458d1c4004"
  },
  {
    "url": "favorite/index.html",
    "revision": "558d62712686af7104bc9ea2bb1554e8"
  },
  {
    "url": "index.html",
    "revision": "095b9ceaf6566732c0b1ecc6723cdb65"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "814c021ea4b227d213afff502f04855f"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "d784474dd2394d496aa61e32db11193f"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "e0c3818cf0c558d62ec16ca5d8217323"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "73c6f940fcc2f96b8e751d6ab607fb6f"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "807a2e9721e5b39b0e40a7bb13d72aea"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "d9de4016c3b478a5ab47f16fc171e077"
  },
  {
    "url": "note/index.html",
    "revision": "d0384fb8ff98cfb7f9e616a7aede6a87"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "ec8077dc2fef772897e74e8272c529e7"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "27b5a5c7559be2193ae0cdf9f1965fc3"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "7d812dfb8583ba3b2ccb9392ac71107f"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "63a125a945fbb918eb8b4f473fbe26fb"
  },
  {
    "url": "share/index.html",
    "revision": "258afe16f356fcc1f6fb90fcd57453d1"
  },
  {
    "url": "single/about_me.html",
    "revision": "31e926e263e5e36c2442bd5594bf1b4c"
  },
  {
    "url": "single/all_article.html",
    "revision": "58a8728a56f6488d36aee3e0b88063fe"
  },
  {
    "url": "single/welcome.html",
    "revision": "205f23faa518573bd79cc537152b1bb3"
  },
  {
    "url": "test/index.html",
    "revision": "8398cdb2f90ea9a0253d091521aec283"
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
