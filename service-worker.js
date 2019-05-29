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
    "revision": "51ead648c519003fbd153b70bb8cd90b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "0480be9adab996d2d57f74c23838c144"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "bbfa4b6cbebb8cf85a58481d064e77bc"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "7227330771c39a98d2a1cd496e992e7b"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "4c756f0336cb53f0b44da05d63c3fb71"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "0709ccb9ace76ccbc8f7522b65f83431"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "8744f4485b4e69169facb660beb8660c"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "66cda97915b11f7a14aad7a42fa9be1b"
  },
  {
    "url": "articles/index.html",
    "revision": "61018a0f2cff722c0501b3797854fe21"
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
    "revision": "21f67f610ac008ede453ab16a1c3eaaf"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "09d403c51fd273390f719a53e70a3c28"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "7329fab95e5457b36e52546b90a22682"
  },
  {
    "url": "books/index.html",
    "revision": "a373305f9664796cb0e0400f7400e7b3"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "b87eab8ca91090ad6bc425c9b9b9fb63"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "4a21aa4d3bee23fe299909c3df5f9ad4"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "217ac1229839df2198a2b4b3db59b125"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "5f5508cecd8df1cb79c2fe9998e4b5ec"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "43e1ecf5ec8efaed1f3aa48027eac26b"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "d6b1fa8716e98f1f1d854a8a16be5b16"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "2f11f4e0d7783f00609fcfe96112e5fd"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "614c1cec0c4935310e355d2276a3a9ba"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "efc0781a7c7580853ea1207746b9bbef"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "c39d06efc04eb12b0b984d7f3bc49e96"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "69baa62d9d6252876f2deed371ae7c02"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "021eeccf0a98ccb551851c3500747732"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "f3602a02e23739b0cdaa9ff179744232"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "d372a25a02defb86cec9618c1ed866fa"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "b153f86645bbe392714c9443c83e7914"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "ba2a9b06f9b4015f7490ac7ada197df8"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "91d586c4d677e6c4c9b183619f74c6e3"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "b4a17fdab3ed2406e7a7b5df9c9aa52c"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "a530a44a24db5dd70136949916894a82"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "866e2327d0c0407060fef45100f96cfb"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "e6851ca315862d049aafe2e275c890ce"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "abb95d02b3adad3a6d385d6f894bd5c2"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "91bb3c00a9df4eab45a32a3c107aafa2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "010017b6c039d649d8910c3cb55b38ef"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "92bdb75de50b65ed87c37b978de89665"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "a1fb744c1a548ed742b3b52d54a6c4a3"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "0d1508de64427936100e1a8e67d99ed8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "acf08e4ec70efbd59844ed7696eb9734"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "15bb52ba595cbbc4760f1d47189f496d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "04c0248900e19341b0b211b7c9094419"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2ebbabdd389834200d4de41a393e9323"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "ce8d8d65fbe2cd024732b5b7ec0cc2d1"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "91981adb7bc70f8496d2754b6ed26c3a"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "fddc7615ae27e0a56989c440598a0607"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "090ae70349dd5067ecb5c9a288c7e4ee"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "b3607eed75d3a0686c62610dc1f9d150"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "0f64f9dea95735d4d3c294987463e08c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "4a2aa6c533af574a9b09e77798533355"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d956e3bf5cb5f1b98c4980f4fe285ba3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "5a8c548195366e1022b77e3a5cd2cb16"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "14a6f6092f44207243d6831c8e70574a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "e94df1dc373b227f22fd23b6a33efcc9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "be4a257d21e57ce74bdec8e848e2a54b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "f786c1f6bbf01536f51360b137001c93"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "06eb4749c170d2aa5b05921cd1134871"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "379e1e86ca2dd31edee0877d14ebee2a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "409bbd2c70f528042bed9afd9a2d7754"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "69d52c120545fed02543deb4ed144ce6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ce64344a2675136dab701af6cae97709"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "ccd39130170637c98ceb228a81a9312b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "fe12ea7931757b6df82367aece1056f8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "e9c168a1d55415a9a4c483a4d8291152"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "ec5416e5ef09d05f5fcfdfbc8259728f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "120be1a6634c370efcb5712f8417f66d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "43d195968c4c0ac00073daca90bf6acd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "988a1e0e08a8b4a4d2dee62416238dd3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "12ae473eba521a9ca10b849725400ce0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "80192b320b5e22eadb30b649f87c302e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "8747c8d277da2c962c947019c97cf7d4"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "cc75a3f53fe1b70aed4d0bbe3e8f4d91"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "c229d3669e94582e7ae6f7704a80e98b"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "cf345e029280dbd0b4d55f92f8d52e1a"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "a2ad226ec32307cc579f4b4b18ec27af"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "e11146d447abe48ac86c9fcbb71859e1"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "a4f6741b767d4e117902bf1e283b1c01"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "afdc90d189be78b456cde5a5c7f19327"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "aa38607b75f631f568bce2332b58a1b7"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "44d105fb25b5d0370f88fc422e455836"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "df0295a2c52d4e5d546817f42805b21c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "23fdd4ae4c81b95b4c87936f3db975dd"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "f8bcecb99228c70389492cf2c9e24244"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "48fe3308503be2ce77e5b46d0802267d"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "028d7badd0baba6ba650d688f0f8a2e2"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "b9608762c6fa183a33065e4aa233bb44"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "3429688a93f6f163cf61c786e60846ef"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "8255ce3b1249ed1cfeb800cba29f9f6a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "7e77f416620e9c116cc64b07d6bd3517"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "c3ed70a149dfc84d34425660e4674da0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "9a0f835b48fd7a9b74107bb30fe7850d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "9c182da912835113d7f408f12d478caa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "f20baa455d42d9042999a70482c21955"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "9e6b7818fccb4919b71cb169b882b0d0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "c24cc1904f234f62b034bb55330f1290"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "c5832ac0618a23723c0ded180fe2003e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "b44eab4bfe71dc8732df037000b244ed"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "25bbb0fec2a506fe788c6e20f0713cbe"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "2383a2cdddf6496d69a3400221c5af1b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "48300604217c9c6b57fb5f9150e02a64"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "9a3ff4e3d3391a2710b264bb5ebd2ab5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "a61dfac178ba04c6b79aad44ec74d4d6"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "cd271c8eb11ac9c3cb8ba37625081256"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "6948ba05a3007b5435896185b4080b3b"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "34a5a65b86015b94041dcb8435e9a59b"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "f7d2ed5ac13dccaf5438a0b7f9a8ebca"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "54de87513e899db81b36a8b96986dd87"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "532fdf423f9316960dfa122e50939ed8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "a219404fc901a2f9fe3859e1a41c3855"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "297972143f9aa532b39fa3431c2acffb"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "50a975fd782445205d082d8d08cada78"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "4e2c3f9fd05a0a655134dc2d2e7cc3eb"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "2c53126f19d7c2663224215c4c48d4e8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "e07796cf17118aad99926e24bbb6a0c8"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "6f8a2d6d3e6d8305c9905e56c07d04bd"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "68f2c00bc9590c6268231e8ef5e82f18"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "b04d9224b08ba588eaeda2651f8801a7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "6e4b32c67d33bc13502b3e8f92cbef56"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "4cf5c9a3de46f1eabfc879c6e34aaa6b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "8dbb2e37a1d0bfc4f047894f7138ae11"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "13d4264e6c458f5e8175748d4b4ea06f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "08791e8cae7028f8c6b705910d9bac52"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "dbb1bcfef0bbff385ff349d891fcc9a6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "4abd50046942fac8e900fa3f9f1a1a6a"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "ddeaa89e84abd1bdb53d06cb8459f9a3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "1a8086c636145137b86af434dfc61cdb"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "b4018685420e59c7cc01bf828ac55c6a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "9c3e61361288a8f1d0170476dc5365b7"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "726260e03c6df198659610702358a47a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "0639720408f604203707b9eb0e3629d6"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "0c4f260bb03c0b83fb06eef81b422952"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "61eace7befe8fd92c3b1128acf08aeee"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "55a42fc9c7fb3842cc6f955256c39172"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "8d5a3fb81e8edf29ce094a9a9c398197"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "6b67bb16fd8c639de6aa29c5803a5829"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "fe401df56bbce2750c5300e7304623a5"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "56263019c404fc3d3a6b8fda59ccb2e1"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "ee46cc874d71a61c1729aa63bc4c4c7b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "8a289e42599c2b3285d7c5792f9e5dff"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "41db1fe6150edfd33d6b2041ada81e9f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "61bbe73a2ecef94c1fc2a8ab1906062b"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "62716505ab64e2dd9823674d406ad26e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "18b51188b46bfc676d8aad1303bdea48"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "8ac62207fe7ce989252e796e55052df0"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "94ae85a36b54e18d9e07e7e9336d6886"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "b7fa2eb2bec499fe223b48516fdcff56"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "3a5bd9ff38195e444c00f98cecb23ba3"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "f434da2f10b85823e7f510d4e0d0cb69"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "06e1d4365525688d77eb66f2b48cbc99"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "9e1608f65528d1297fb1ea8a64c79b8d"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "82b6187d4fa47349c17e5c1cb64a4c37"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "70901b3b5ff8b326bf9b76a21d7cb6fa"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "3d5332b7ab5e6daef01fe24544849860"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c611368116552c9eef4ed500568a7116"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "4fc8958dab9a020d7f1c071a09c7752d"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "fb7d31882a03696ab3d10be6ab067577"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "4509772151a6f75db74ee28fb7d3d19f"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "02e01dab4c55654e86629b49ef55b14a"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "558de6c15de409b47f679a483558cc8a"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "6b3fdf7f048e6cd1228d7185f002e563"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "ab72746941327f7f209d78d301499e35"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "95f9cb78f2d40ba7c4effc8f1e10d0e6"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "14456d369075a757b39b9a3d410f08a2"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "8e138411b550f7a2cc57b9a4adc9d50a"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "87ae0347b800e54122aa811a46f75a0f"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "ef1f710e8cd5f264fa05821f3b1dad3a"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "58cc948d8a463520a53a302b3905f590"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "6e64aa67a1cac3541143540536898e3d"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "2902b7fb9683e6471c85650c585e40e8"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "ff7ca7cf395c7255d787b1cd32abcfff"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "f8235199dc73d5277b4105f9416943fc"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "beca19da12b7bbea53d770595d4c791b"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "97c53b35efa9cc9979e9f2b5ac619e8c"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "3e917b98e052537abcc2f04f65230de5"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "d52a0ddca1dfeee04fd23177c3df69b4"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "36e8bc45e2cb4151f71a51307bfd6efa"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "82d081ef61d8a29f64e06d144a564e16"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "391ed6ded0fb692e58b4c702fdd2e61f"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "033bb1edf7e754c6b65a8d12e520e290"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "9e495f76ade336592911badd09514eb3"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "9ecbc5468224e8b379f151c2f9b0cd20"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "ca5d20e5cbf9fc562143ff2491394a2e"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "ec0fef9ab8c6f98d64aa0ea08ff14b71"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "528496576c0a44399164ecdce5ee0fa9"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "62445ca89a5c1f715bd215fc76975d5b"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "a71cd5ca89a5d864b45a18edafa2ded0"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "447d6daf020e5cb5dfb792ce5437fccd"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "4aa0c459a189be8ee56c5f1952a181a2"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "bd965f85145d255b7e7e822a792f0506"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "688ea587252fb853239bf16925e888b1"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "a13584d037289f7b766731d03dbbc91f"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "d49200095a35a6cd84ae84daed7e0929"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "16109846d3dbe8ee9edf418ef2361bea"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "b7ef5d31e0200a8382b498b7fb990627"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "b0ba9d7441954469931fdb5b88a6d4f6"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "462397ca0530f28363fee9cefaef986b"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "8aab531e1ea780e99e35881d6530b6c6"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "62c5a206f8d25d98e6cf25e5d6bdd7a2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b15e59d900b3052ae8bc5cdb33727783"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "5d35376782bd51dffbecdf3fec98a8ca"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "21b0b181eed4f78bd6ea396ce2b10b3d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "5404163458d5188e7d6ecd76ee8421e4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "a8e95910e819537b06cee1182bcfb98b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "f9cc8dbb1917da86c319340a4c133b47"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "79255de3df1de8c5e8dfd834cf708791"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "cb8b9d84c2da12816b45f02e7b89883d"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "157f5a65f2a9b7431871a4b4c8cbe45c"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "7d0d75aeddbafd804daa2a020df927de"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "e1987db5c513934c8c39bdc97861ad3a"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "c297bf96eb2df2d8973a49c489237fa7"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "764108a5c6c1c09b0063f91fbf0ba1a2"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "5de202358abaf45124721f020e6acc12"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "2c624fd13f0d1188f1ca355f569c95d6"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "b547664f6f0ce3935e1ab059e1952d0a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "f860564cb5e7788b14430eb7a9cd3da5"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "86fc9bdf3ceee70e39b40effa29505d6"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "db67963f0f046e231f545887b61c1564"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "823b98aae5e41f2523147cf201dd9c80"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "9e3fb870eb4d3f6811fbc1b3309141c3"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "3d76d82015eff04886b72ab8f0547dcd"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "8b282d4e1a14ac6ed032351ac8730ac7"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "2dcece5c12722e9cf0a023b7e822ace5"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "7105ddb37c625a42df69544b9caa4f46"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "c0c835f5b3d0f85ba4b482b094d64e0b"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a3e859548d6ba95b6455500ab2b1c0b6"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "cf7b39c2bec43147e35a816203c73af5"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "305d4fb3808a8373f0412387de503647"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "8aacf796586601c9c11539a7b76f5b6b"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "72239cea7b68a6419e7dadc00ba32eff"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "8bc74d3124a13e33bb16a45bcab5ab72"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "daa33815250f33b48f1965256c45e120"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "8cbc87a3596df56d60496b470c36cb18"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "ac4d3bcc813dec9174abccf4178e1214"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "80c808763125e31d362499428ad3e027"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "82f3c7abf5aad3513fbc165e8a9ff778"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "5e722b799b3f5503d30db6cc4d11fd42"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "91db62b394fae541a19f6ed445f71869"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "d927ec21d11c10b95eacbf658f27a7fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "5c091c8f7228f68111ad4c82b9f125de"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "952dcdaeed587cdd27af4ce71aaa29b0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "293a79a89918d9c2bfd3272cb2d6cd24"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "787f45bdcf36e81e9383726efca3814d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "ad540c536ddd372a3c7141b7e365d45f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "15afac04d321b9150b2bf0ce4b6d9c3e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "ea7b22594af7faac61d948520426d041"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "6e786c6105dcd8f1ce9f127e3c2209c5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "b903d29a78e92ed222b7b8423f79ed93"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "5ef2859028ff0f3f69320ab21dbd5705"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "69028f261e9414d95522cc60634f55ad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "cd0677d67097fc84ff20b9e24d3ac3d8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "4a5df2376463a319cc50a482afbe82e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "d68f413b4199e3a1070a1c92f8e14cc6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "52b2974a360ce23ad9c54b535ba547f7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2c19c0fed43f9bef43468de7d9840405"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "ee11a83585be4f093653d03faa2215a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "212988cd70e6c193620f9d18a607c448"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "521b6cb39a74535bc9ebda8c8eb2eac1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "1662e44a95b35d8c9377d2840cfb40a3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "3e2ac7664708c5ab053c6ac01235b9fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "c2c66504cd9ce7b8fcb47ac87f725e6b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "6132e10a8e9a8f62fc2d5e45c432811a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "cd79461eca1f89aa2ca22f904744f7b1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "1ad05015d1ba394f478af4a5740e065c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "4605d7ff6731bd78a8f10e2be6255e5d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "3a4a58757552350ecfe219745e7fd96c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "687abb3903ffac46e1775dcc386e503a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "527be9fb32f8537deae11a96bd02e1cb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "d801c1096592fb1f9c5279414922b8ed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "3fa531ffb306208b1fc62d2502a5e7ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "5d109bb71065587cbeb53550d35033b0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "739d821a785fe8f2c95b860e5e82bcc9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "eae8fba8380fdde9933ae6f25bb88c26"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "d0f019ce92ee6c437764b999346198c8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "29ee20712beaefccf483144701687ccc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "b1c03511d228f9001de3ac4534f288af"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "e34126b27bf78cec2e07cd71506c0cf5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "ec11b76c681320c4112e1a651f9643d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "a578df7018a7299e2a2a33c886046545"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "2ba424b852da2e834653732c62a5e851"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "b260737ca3d663482ffa501d87cefc0a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "0d218cea0a43d154d27d1b8c4557817c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "d83bde8c2eee8b87927d6534f9b4da46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "94760aab8e325ceec05371211c38f18b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "4ee8d1c64a0abdfa6dae43e3c21a5c0a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "1bdf049c650ee3c1e352ce31dcdb00c2"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "a4a4b67fee3e9d3bf7875a7bd9effe80"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a39a24509b3663cc680083f150e79ab8"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "471368d55d9b361afadfb6dfc54fc941"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "4dbaa3cff662103e59e5b77f339f7e58"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "c18c8f06f2cbd5243109955310d762c7"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "e22b9d4f35b8e777ebdf313d543bbe2a"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ea5daa4c89100f6ccc99b03bafc7f4a1"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "bc4b56f834c51a07671783c86aa9cd97"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "43cd4855cce08bc4f4b6aad40dcd6d12"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "ba983387fcfd0299150c838ab528eb3f"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "ee75c3f473ee30cf2b96113134db4cbb"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "d4cbe7d18772c8b6890335ac3b124db4"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "df9511f4e5089b5826e6c14d9764f0ef"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "072f85ca11392443c027ecb100bbeb35"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "fc0040b2a73b60d6dbc1d6848bede9d5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "f541cd442cf23d630c888ac14be2cc15"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "fdeda322cf9bc459fb570480268a14af"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "32c4d9a993bb33673d8a94dad16293fb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "6b0586f7cfafeb71346316a820d1b6ab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "13742df4ceb9cf4e8120006e6d646e53"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "f377466bd24fbc62947f7b2f52e394b8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "f060319bef0959dca4903119380dfafa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "6368309da7feeda7b21a0f84f905843e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "e64bb685db8e7012ebc25d627c37ab98"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "ef8cddbd26bf86913e1102d7f8db0647"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "08072772c0cd5c4d5b02d77d182ec0e4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "dae56b8511f1997b0890a34c653c3364"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "29861907ac356ea08a70c870750565d8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "08cd5185cfa27d05a3905a7a77de1169"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "c8ab14e6f43b8a8e193ecbae9e54980d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "465814041995a2cdc8670580ea645790"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "2d34dbfd2663ee87743f3761dccb2799"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "3407fca7ae435200cd63189d7c46fe49"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "6cd3d7a475be6f7284df1765b707bc23"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "954404b97569e4438891148d8fb90943"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "e66281d3dc42be817f6a95b398884346"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "2534f9ca19899695e6702f7c12f89644"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "604b4e0f71585d2675e240ee553f216b"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "8ed093817fba7c0b4dee52ff2b91d67d"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "6ef1adea338ca22dcfc3a8553362680a"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "bbae4c2cbab51d701ccee70f7b392c5a"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "bf85711369a96b0c57c38f921d68b2c8"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "3bfba3b2fc818d6470e6adc119d35f23"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "c2ca3a7ea46556bce91b53ad800bf936"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "1d11906ddb2bdf40b3a47547cff5e581"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "623e404d66385e648c118d856e451850"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "1a61daeb2c6738a66fd19bcd5cd6cbc7"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "b93ced6f26c83a75e822d46880a190b8"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "3b604144ff17b0701c60c72e56f8fa8a"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "1f48b063afdf32eed1bba9b68b7e42f4"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "e0eaffbf9b94152590b662ffdd5e87fc"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "2d5733008ec250a8cd1496ce814ba884"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "cbba8dd4bd88b82e7bd88a617a84412d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "ca122d2045a53ca998c488c2844c9bd7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "2ecdbcd2565d31daf2995e0d65e67895"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "f2552e7697b16d7b05994b06e2ac195c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "46e74b040123fa4f654a8fbb67f2167d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "384aebaffbf09529fbf6ee96af42032a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "1ce15ac867fe705f1ad5df1bd5416376"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "ddae07d9aa604fb3f8d5d754734f9320"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "4a24e0c78970ae471b06656033e56f20"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "1fec663e025f6d4fc162103f95b8ffcf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "cc1112665cf21bb7c79a62da6071145d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "b939b2e807015c27ec01723f2f82f7f2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "9df0d92b21f5857c9eacf9e9cc86965f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "bb2b5b5f4893143403133c9bb65403db"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "7fe17f8df633f38b7f05be7950164331"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "0cc553a5b4c7832aff9c2347dbaca9bb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "22d77c8d4ee16f1b253317af603c397b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "14d63da43591d6751e8b977906212dc8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "ef9d616c703a109f234f8fe7b44c3d9e"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "bc782a0072c4d1a3060b057f9b8f4ab2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "c0e11e23330914c90d53b17edd3cf780"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "db86439a4542d053c8b5d25fb1aa90ac"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "5bb7f9b5b458cca32c55f6d800370ca0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "a7af59ade9a27eb978edc98e38d77475"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "62ddc61f48d11fee15535af697e45523"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "ed2508c1d1e0106957632fbd2a21f1ab"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "895fb6b07f4355b5056307641effe4b8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "6ecf836c1d18c1a4c13722a95a4c8adb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "284e7d61c97d4119537e4bc552fe2c72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "aa354eb040d97701623ce66e0877343d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "2d2dbd16c0e1e549030502c652292a72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "63de27e532cd40a400c7f251ae015c83"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "f52c3f6167b67e9e7daa8a25124ac858"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "91c3d83de70bc2c4e269c90da48e5ed0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "adf3e8c8377cd42eb1cc0e21cf7e8ebe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "01c2bfd269bf2f395698c7a5a8380a62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "107b33dd25622494c50f0484f0abf22e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "b40dcdef0c33db30902293946b810ae1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "519809060d04c6a57b01003d79c9247f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "396acb11ee2e186ccbf733504e4f9f4e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "1b4b1ad2c6ccc6c9e92801ca10374c12"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "ff8314b17989be05fd79a350438d3bdb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "eea5b20b4d9ffc7c1a348e2a3c0d74ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "6dcea7ada272f0cd6b42cd047a3d2c72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "32acb01a1170899b68ce28f26840958e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "9e10f4a4f7833a176625d76ad2f33012"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "f328dcb8d8414e2680bbcfe12f3c1ca7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "8063cdeee2c5976330bab02d2996305e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "878a4a25a4db830b3c07a409cb83fd44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "a3e8e5589cd63a3b64d69d95e8a591f4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "6e874092af3660d3903cda0017ee08a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "31425b39c6ab11b95086e998150997df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "f169ed1c7ea28f28e8cca2576c3b1cae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "7344e0aa7718462fa7f4be8ecb8880f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "94a84126dad736de72abe5d45c276741"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "5e1c2aab3e5a5856ea675213f855fab4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "a8a523e27b06f472709e2dd45833fe73"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "02d218be617adb5bcecaba0b8d241320"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "c8b406b18303c0abe1a5812a8ffce355"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "f24b626ea39d112f70f8ef972a78b2b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "f709faa43ca13850815adb649a485d59"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "5221d017038b8d91ac17a322c8f110e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "425ca6be92e08fcc4258dc63f12977bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "061a553375f28ceeae4b01cbe487d88f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "2d38be323e7c5ab31ff7a911de661818"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "8e70f25bded4549aaae53c8ef6d8c58c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "42851de2dd428b7cad94876c7b66c37e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "d5b2aece9262a29a17f18a8478536d28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "51b60270dc6cd044c20fe1553dbb1026"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "6f5a93bc10b3495045fae28e5e6527c2"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "03d8c11753a4e2513e60ebfcbee0e957"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "199f68adb923fa197b62d5e64f5696b8"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "b006071033d4128665d9956a2370f305"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ec195fd3f7ebfb2469bfa9a6aacdb049"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "ebec3f302a55aa548034dc585aae7d03"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "1a5b6d27cb3ce8b93114615e97e49d6a"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "fbece99eb01680152fe8d016700cf4af"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "8f22c6b50f6e5278d5f07c550ab1c7b0"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "20c70ffe678b8fe376ea0b888cc233cf"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "05fec09e06c4a915a301f3274d5d71e1"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "66cc37300a86e8c67231ea923328aef8"
  },
  {
    "url": "categories/index.html",
    "revision": "b911d167778f32978c290e7d2506ee8c"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "cc30941a683bfd3ec8c7c1963466a75b"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "c9e9d8f89bd8aa524fcf7bf960078513"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "852f5278b0fa9c05fbc9198557496095"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "db56b62659cc393e9a8e172b1df3a487"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "6f8fc883f07601ccf1b44f93a525e9c0"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "4688890db8cf5b8b11026c1156417b5e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b16fcf537c3f513bf2fd9fd5b8ed3249"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "d4059cf0b0cc432e2adef25a79fb6e47"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "92a2a4509d5be6992f3cd3973dcd6678"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "63d4ac4ea7681ceb13c825a14a48de30"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "b04c5b098bd8e9bd5cf59e541b76eb88"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "7c452063b510a47843a23ef1d52e0831"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "ed7839423ee4c8a613752badc1480311"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "9e2fdaee80a24ffeb232ee308fafddc6"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "713a47e2a111438a5107102366a4c509"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "70c0c7d69c7212293af80c585581d5ae"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "fab9cfd708899aeccbc7969c320bd466"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "f9af46a930f12c6b463f5575cdc7443d"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "b4ec77d39399bb2139d2f1c3ccebb373"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "48e30c9d3444e62f10752abee1d13a02"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "53f6bcd81aeeddc1b0a74852ed9d44dc"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "6ac03d3125e4a74e2b010c77a92cb9dd"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "3784cd162a165a0a0140756bbc2b3b75"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "c695c84d67bc7f7538292fb26cd4c151"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "3963126aae8fcf01b91aba2e9f6242b8"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "dd74d02ea4ca0308cfff7fe3bf25bdb1"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "960aebb48358071555b80095b50b7e3a"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "0153198d6dc43cb23299d2fdeeec5291"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "68b28d242ab7907f57f68e664c03358e"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "3ca51a10434a16cc534d34b153eba7be"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "a27504f126c6ad0118404d089dfee3a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "4dda87fe94f472e6032dc99ecddd644d"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "9be899bf2326e38aa74484b999bb5208"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "e88ab80586f49fd39e21a48d0a801d5d"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "080b7207b05ca37218eebd1bcceb589d"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "fef141ce25a88523ce634c83ca5d848e"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "6194ae36d7a9476bd9cbd6bf17817676"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "730f7205c6e27ebd075d3e974f6c78da"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "be51daa29014a02e8bf7bc6b45685f9a"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "8e80b14e8387f2b1d6dad784486fadba"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "26cdca93ee89d15b9eab2fe4d6778f1e"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "d23feebe146067fba65e1bacdd769ae6"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "1f632b84e5ac14f292dd12df27f60956"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "04b24067cf07f2fd67bb5a46a76ef31d"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "a7d8d4b79cb4d4eb317cb288a06de476"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "64a57cb53839a0b75167c1e2bedcb62c"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "8177f025500f8f989c1ef29694f2ee04"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "23bbb6aacb747ec328700abb860480c9"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "7ca338141267ebbd278b7df8e910a60f"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "b51933c4cc95c4a8e12f464a98950d9b"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "507c94b29d35a05e207b77d1db8c2a77"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "0331e0d22747165bca4743102990cfdb"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "b53cd9ad173a99d0ac17e7f025b26128"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "dc5cd469695920fa282080d289039216"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "d5d5a507aa405caa353eb7e1e02a66ba"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "9b5f14f5c521621e33650604af56f20a"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "0675b0b4d023a4ec12a4ead1235070f6"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "33f5ea5cf5d14ed55f75bd7c8f551598"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "1811f2aab257b4dd36b6df5feedccd4f"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "c68a7fb0168b884e178383abf804c224"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "2f30e61e4bb0f44d29dc0d8abb30756b"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "c9c7d2786277169ea7db74d75bbfecc2"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "ee4070c0937ab498aff9749ba1d7b939"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "251a64b36d39514759180b052c654af7"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "603aab50e1e0c2a081cf8c850db11c16"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "8ec55a1fd4e4f6d2efa7aacda59cb41b"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "fa53825b3fa0d09b82d6b05827050d21"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "901f3ae9439ab44cf449c577e9a28cf5"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "acd593eaae605057558bb46f50276d06"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "8b7d6d4e4c66c93767fa0bef3bdd169d"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "39b3ca138589b5fade6b04e047590939"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "3a4b466264edf9b0f4618fb2a26f9f5a"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "9fe30690be763b80a75218182a4277d0"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "5727d8d5cc77ffa183c3aa0e6141e312"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "1e119ffd80bfb6bcf5bb2e93e4194ae5"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "b6f4aa9a8c163202fa13c02544e6fb1a"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "f6b44976a2f08bcc90d4743ecb2886bc"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "24e56bbf9ea9a33267934fd4697d9bae"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "24fb4af2949cadeb90cba640f4b65767"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "70316757ed1de51f7fb5ceee1ef9a487"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "40bf8cbc94c147ed7ca1f4d1ff5363c6"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "0df236ee5a691ad85d19bfe105fdb6e9"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "f4513a68eff58fa75add1336cf2294d2"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "df330b07b09ecd41eb2ccdcfbc6242fa"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "50425b7eceede3ec64ed5892000285fa"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "9178771fb986e22163d98f585cd73531"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "ba0d5bb9740331db25332f5a343201d1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "96709045f173b01f308d76a5f2433aa9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "c5c10af20ba09241427483a5df2ee232"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "6dc3841b13e6c67b2c8cdb4750ab5670"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "43a334784d662f98e716b9b592b62b5c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "71142dc8b4bcc723adfca9b33cbe3590"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "190a054ba4408618bb682452b57b3775"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "8d4d9b3f766bab3e37535cd1759ed32f"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "7e7a1efa256b86c28e7e6209cd225c95"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "a7ab7a654685433d0db2898812075261"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "09fa543adda189e2b936eb3dedbe289a"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "f6a54076268b1607ed032862a56a5166"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "dbe9f1261e3ce7bb294e0cedf809f545"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "2b86eb46efa201f3748babc4255ac919"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "74cf11ce592230ce215a989f62f345dc"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "e54fa3c5ed7696c9553b7375744ca286"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "032f07e83c33255671d81dc8886b5868"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "97f1a0f0edaded0fd0bf53bde476688d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "82dbf988dfd62b5e90149704752b5a6c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "51b7cd1c21fa61bc35afd39f96cad404"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "863fde1b12ab8dd21848f9ba4846d20e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "9c08493399deeee273ba89e4419b8f71"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "33c055f141a938b94c9ce4e4ee9f5dd4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "bb6cf5647f03ba85f7432e7f8ac7e650"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "2969216d64195f29ea2b8edf4247935f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "ebd4efbc8c90f2d1f86ce7ca94b6e193"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "230f092f6c4e02467adf0b36ba593a74"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "16a12ca505d7880d2c06c934a0a94755"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "0cce595eeba7279aa4fe76c7fdcc5b86"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "7eb4c2d2b8854dbc19f3dc9e980169f0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "0b47f9bf292ec5b50c1a9d7bc00ff0cd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "8193d8de0dff5d4d80377cfe05606972"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "a6df286fb87d3baf64e3ba2ffe6b7b92"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "6d43e14bedc01dc6f9907f2ea10d0226"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "8b3ffefdb8991c2eb143bf6e0d0983e5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "5a5e4a8525ef93ed12a0d83a3df0f6a2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "126503112628761ba56c9abc22975bbd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "557a32cbd4de3d932871bc45d41ee3c9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "caf06c0130448129a673f3fdb2fdc9da"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "60a0daad284e45f454085897f5e07f69"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "814afb7eb62c850afaba955af6e83f15"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "bd9066761012e714358862e7894b0ee9"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f2871b705156d464dbb4c89b24ce26ea"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "305d2db41394debb260e6f0ce91dd408"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "3abf9c8a18842cef7b97b3f986157f91"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "8758ac4c8c24f66c0c9fa2846d000c37"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "fcc220e0a6d3ea8b86c6be0a6974fe77"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "24ecd193674fcbb3e60b130003b953c3"
  },
  {
    "url": "categories/os/index.html",
    "revision": "8e529897124c869d17a1bd8ce8a10f94"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "73aafe131fc644adef18251038946963"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "79758d2cfdf459fd28b011b8c21a6e28"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "c0f26f71db3a582631974874a3c3ade9"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "83b48074265c3a1ad12dbd72c1e95fbd"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "f31c9a2a2dbafb1f043c494496e1b0a3"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "dba0259c0c994c4111439c884ba41aab"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "f23f50711338f76a46a0a16207a84f88"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "6ecc2a28a0f1111b05c59a23228c56d6"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "c4a094683de9cc1a210875bf940c4608"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "f72b6a7bc875e20335532020be40e19e"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "0dc99206185e001a782795f4c6834042"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "da16cb8928b9777df6b055e30a38178a"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "014191c770bc4115bc5fcc720bd79ce7"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "e0f3ff2a9fd2cf743c43936ad8d9bce2"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "38f6ec1885908ced689cd44876ca3360"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "f66a5a9362ff3b2a2ed39621171df48e"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "0f251e74230391f356bd01d277f53149"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "615cb3e5b0a560e917ca925523bd1d81"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "e8127bb84d5a1da30bf74bf646a101ee"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "b13e2327e83ed23bf82482c856e75bf4"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "9980d1dddae5ca48c55cf6423702c1b7"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "3dbadd11d6ec4a1a7d8d717236f1f5a1"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "c2d87ffcc2dc3e0224c3d5a2f885e187"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "9c2970c160105952b54348ea259a817e"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "79aebf5a3809d9fc77b5fff35d10c2f1"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "681487cc4cfbf8df4a2e1e79e7472c9b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "f8b2f3c148b5c18ea8551df07f61fcc4"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "1f71511709bc9778dbc9a5e29b94c7a5"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "65c6680bc4bbc89a5ba79baa74760d96"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "b763e44418ea7c4f36ac086bf849f5ba"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "f56729e6020bed72c4384c9b487b5461"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "b910a73b0675bb64c350ea7ad78f527b"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "93c110bda02b3edfa113197551278dc3"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "adcde37655abb191acbde8a10bb2bf9a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "4d7ee356e80e4e4721be3115d043f710"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "27527d20c1495de2d741f9da485cce73"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "18778ba0874da326c74cec6ca964959d"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "cdc9f978256544066d70b2f5007ba1af"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "8ee573e9c1733cc7599d20a97a5ca4a5"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "e0a74b6253eff950df6270bcce262aba"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "89bd41ee5d5d397a13ae702d1c11feb6"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "494d6e45e184b45b7942f9d096e5333f"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "b1318d0eb028a25a646df27e081e173c"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "4d25ee71c30e212b825ec3c0d376951e"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "b3bd10a5fbd62834eaedb0d327833e07"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "94b2c1da08ce1b73058ba2ecbf93a6ea"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "4895983271f372a21dd6a4f8effe8e1e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "ae0d4fa1aebf7b18732a42646d789a37"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "19263f67fa2ebb9b4e6d67658a91e5af"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "d0d4ef7f0b6c5bc82725284a678878fa"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "632875ff7819d3bf27daf00fda149c6d"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "09e1591c8149fbcb081b68ce3a45a3b1"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "59b26fbc56733ff03fb357b5abbd068a"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "5f53980ff4e37b23eb64fa6f024ce66f"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "aa5074caf5ef46cb2ddeeb61436cede8"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "9f5e2b879e76687b41475707e0db6e84"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "e04b512dc73c4e8d7d27ac1a97a9a01f"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "c9662a9bd00c472aa352fd25b14cfb77"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "585e92b84dfc70ebe05f28bcbe4544bc"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "299370c2090288db8d937220f8f3e73e"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "075ac24f1bd44331c58068107e31d9e1"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "e612755360ba2144652244dc0230b00b"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "1fdc216048143ae688f761544a33f2b8"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "a97f49f6ae50f5655da5ac9710fa9b59"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "11bb8fe1d83a6fbc6828ef1704763d8e"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "aee8543c1fcb0461e896e85f3a374ec9"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "27f8963f6e52c47565204ea5aa91a7b0"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "a2582f51a2a93c7f7cf90c1c1f258312"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "df9eaacc7836b842eb11ff81609a3963"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "ff6adc6f432e98e0afc4fd2b6055fe18"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "a54f8ef39ebfdf608229165e9c3bd3d8"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "303157ca70124670169be26ff110789e"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "cb05fba09f0b7bb6cf864604735435a9"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "aed18e01d19baba549c87d02e3175574"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "bae144d7d08d126c16ed42fa23841d28"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "d5768b8c84972aac3e5a56a45de810c2"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "153aca4068d9e8c2e12545cb1399b737"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "93234bd68f021f0045089a0356742341"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "70f321da0ab9739a87e78da463b01ccd"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "c10b60e15eeca53fa588a19e4701432f"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "3e9b3742e894e74d200aa52240ab9c36"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "e9b0a52cb8c7fc784d716e1bd26a9732"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "5c111b67604d4a381e53863da8c98a63"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "c881e474081d4ec162b32b643fd150d7"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "0b967da4ffae905b64734824d41f0a5b"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "4609fc424f1fcd2f5694d42422b3adbd"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "1545589cc07afd8083df5a3e33e82d03"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "08960430843a33358845350cde293536"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "a63dc2839fae24cc87a391d310a8ad92"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "f35e89e16fbc3965e233532c61f72d66"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "3b9fdd516008e51767c63e961a75b0fa"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "f7186c5e4321810436e45d0212fb3b36"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "bb6772866ae3432976b2b7560db99f6b"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "91b041f7d7a2934cd2f257d7097795d2"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "0be40e1fd6f3412faadfefca674fb1f3"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "7913260bd1a9d6cffad0447152661e12"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "f0c09c956f95d57acab2bccc7beb2a9f"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "939bacb7469ce9cc094a282b8426c269"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "9b428a5dbb7a5f42428ccddecc24c7d6"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "c996be8a00776bf2ccc23bc237a424eb"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "eadd861cfddfbccbfe53b13371095076"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "96e81240200c47b5141b6a79569066f6"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "c973cad4db0ccf3c1736f0f8481d583d"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "6492d25a8bfcd8ce0d425b8471480fd1"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "d46336752fc0d0bef1a694e8f2e4583c"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "6f5a8a6d4d067b6c631197719d6d834b"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "42ad0ceab500f46ff7fcb21467bf8820"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "78cb242ae8f4e7e1172ece58a3e1b285"
  },
  {
    "url": "categories/php/index.html",
    "revision": "dcc1d42fd5bbb1446ca56ddea97c4ed3"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "ee55fd6ec4aa7a165df1785b4471a1b5"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "6b93fd3acbbdfb3c6f1eac3e47151b5a"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "031402c6b9632757d304404dc6a4fc40"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "51d3291dd54c49b79d8e8fa0b949409f"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "2b0ec1edbb32c4b8c442b6b25466053f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "e4d7bfa38311e0364d165a8cc8510460"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "8383dfafcc47c72e5f0cb42e4cb6ad09"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "2a97d98fef9b826906e7124b2899fd7b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "b541a54a427500eaa471834f9fc69ec1"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "f42bf0bffaa979ad8e65180416922bd9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "4636bcde597052b63fb1c6d0e934f598"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "ebf5c4c2bb725b690a9a82d69b4d9262"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "03a7dfc38109c81bb6f36b7f7e6615f0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "59f0e11709c07961361789492ae02f44"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "eb957effec1348a0fe54184dcad5895c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "8c027327b159a5de30c1ac26357d18a8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "8c7105836e423ab735118abefca53162"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "8b803ee69289da54f31c40403ff9e642"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "4174de070e0f7df9ca00d8618c6099bf"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "5e74ec61ae965a1c03729e051fb85452"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "ad00860cee8e32a2d0d32494f5dbb05c"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "8dfdc86a7e36bab23e213bffff1e7028"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "d1904092e907b359adeddbb95ccba57d"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "b1bf889a1844aaee8d8fc47af378cbcc"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "73a1f7d2025211c05b944ce79dae26f7"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "1eaf8e6c4142633804b83fe7e85d13ee"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "4c254fa9086145a45525f2cdb10feed7"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "45ddd30da5941d11fa9d006cbee48ba2"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "c5ed72eff1e652e82d179606a6ec394d"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "3494472567c97d5449f7595bcd21cb6d"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "b305db2830c0f408888afedc5a2d4681"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "32f4fc1803e21973f7172c5f258455f3"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "b62d96ae7e548a45ddc3d150474cf90c"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "198d65e1ada2a61334567eff08940680"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "4d00035c932aa9d78c7d21b37ac513f8"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "b1679d54e0a06d923457221bb60a4785"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "2f9c0fd3b0cc0fc9b83ec41fd59ef281"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "263a454745a053d071befecbcc55030e"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "7ada23069c548221b2781b17c829e6a7"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "ff53bb45a319c25d201d6c61b8a0e5b0"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "e5f27257dad911c7268986f26c325c40"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "795016c60e7a2e26dc8e93f00fa9d6e5"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "0d6004da4815ba2dae6ada38226144cf"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "4a75d7155cf4bfdcd6480d89b9820ffb"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "df65f858fa9127be909bcafe5bd101e1"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "9e2fd56b502550bb3741da2243f5830d"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "9bf74ddace42d837788a36a5d938c652"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "5a3323cd411432c114211aca50f98cad"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "b920d713e0b838ea42f339e462f84c23"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "b8bdc6a7cb0118f92fd64d1600de3e5a"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "0136c35d44ac3f50a01731111c47d0cb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b5a9ff7dedb368b3fa0fcdf7b88fc860"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "3b125252fb5e923dc7c4f53ada624d9d"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "e99ac607d01ed203d21f05c95a5452bf"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "d70a4d61c26c012d2b9b124dce851903"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "480ae22e03d68f1affa3ac25a09ddf09"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "0df479082f952f5db79e3589e9528757"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "2002c3ba07884e744ac45b7376ab9ae1"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "c3b87716d123e8957c6b765563633538"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "2e73ced8f4e366914e92206eb4eebc1b"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "d4b529af3a400afb388d727ff35420c6"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "08c3bdb7a0e1e904bec5c9337fc2619c"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "97eb1476994d5a4023e4cee0c459ef9b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "922178a142410845c76ab3f52b29d52d"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "1a03567cb3a70aa2ea28e4a412738601"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "d3a498e597672d83c4785688657f19aa"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "caab2e1072629a78813d99d6a86007d1"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "b1d7f34ea5046cc86bf444072f5f87b2"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "b2757459380029d60c5328d333ee4623"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "f552d641da6e41a6a1c6d6328037f518"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "68e805b5157598821925670aa56d14d0"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "229eb33ff9f669c6585b37bc580f9168"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "68319f912afbeabc4f70ead2a215f2ce"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "ab11b90a7c8c1c12df3d9901950a94d7"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "6eb91c7c4b4ece746046464946c69455"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "d0030aa0b2bd193e57cae173649a7bf9"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "a531a82be66c58eba16968ca8960feb0"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "7f2a6a829458d103329da377ce4f8443"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ed2387fab3206736f22592c14d0b5861"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "551910088a3152138249849678cdb7a9"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "5f0d090d07ec239728745b15c3fd639f"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "03fa172a147dfee31e34cdda693e9a2c"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "6c2dde5a3b0d2dd17b2be1b717d05991"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "552719e8ddfbb95ad78287fef192959f"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "8171e908d2e3784f8d3aa0c1dd38ee12"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "11216c22be84422af21492e15150f509"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "10836ef59858d7bd85ede0e973909dd7"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "ef60072bf39517b452e0984c72fad65a"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e63733c1c787ece9513ede5981963585"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "df8cc30b3504e23eee6c8406f50ae7b9"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "4276d4f186241d1fe4563b02a9f1da7d"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "35ef304e7a0468bdf4d218da03b46618"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "95260d9d2c1afe2089ec9574b1395a57"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "784522b346f5f52efd9ef359983ccaaf"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "b396fae476961a3e1c3e976d3ff15392"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "d26612093f8fa5c7c11adfa4ebea150d"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8963094e0ddef41e95c69506381ad757"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "d8623d9fc310ab02dbd4bd52c09ddc59"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "72ccaff7dbc0a3ebc339589a463f3661"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "02bd228cc1681f5ca2475bdeb97a0890"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "9b0c7d399502ec21455ad676f22ad1cb"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "22d247cc7cc0715ead88ca69f4a90b5c"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "eef28729e7556d12d4cdbc488aeaac91"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "a9e24b42a43188200b6526dec64c5dad"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "ea1c52f3e6a9b456c1520acc8efd0fc0"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "d107faf14fce6b81ba8de0c7ad4937cd"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "16a8a307d8efa3caf850deced068c1dc"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "d0dac00e44253b97a2d0941e9c75c6da"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "fd2048ffd4247cbc71813a2f155b03ac"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "0205beae999ee13b5e5da0694a9266ae"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "c9ece8c268a6b6c58d6349959bd1f1b1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "2e275a3d22e26a25061546ded7e2cf4e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "be99d546072d73168e756ef76dd1c39a"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "3a0cdcc3da95f6e17e6c8b6b82fb0c56"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "99bde3da0708d852c8040254be964e35"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "95027d172627efb2ef6175b7c6c59dec"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "a9098ecb8457e0f1bdec96f97d50795b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "dfc779958a969d5d3f503bd347024c1b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "3bb0b84c9ffe9f15874d17d7a7729d4f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "bee9880f5c9dde5b49cc9054a1be24c0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "0dbf3371d6fc0177b61abcb2928c75a2"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "7ac69f753728450cca0d887b9cfc9c3e"
  },
  {
    "url": "favorite/index.html",
    "revision": "a9b0d62b452aaec4bc7f7e8ef310c5d8"
  },
  {
    "url": "index.html",
    "revision": "09057ec7e89158ea575e70f1699e4ed3"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "a222e08dcb6f58b351a8033973822483"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "2fa70b8b368295cf5a185a880c7c8915"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "bae8df029cd9cc158c8959eab54c08d7"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "79f04b83db9c76a0f6e64ce774f2c93e"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "6b7dbdd37db7c24f6352767644effd90"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "a2546d58678af6b2e33a64d45fa7294b"
  },
  {
    "url": "note/index.html",
    "revision": "0238ae2f0532133e95c4a0017253d5e1"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "7f7620fa0e8ce2633eb2616297e3d987"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "308fb84746946bdddd24978ad1ecc2cf"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "040ec8bf33465176b130f85d3e5587ce"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "cf0f1c154d757f290f79339e5afa3a0f"
  },
  {
    "url": "share/index.html",
    "revision": "4cc0e7fe9529a7054fa9553c1446ad82"
  },
  {
    "url": "single/about_me.html",
    "revision": "cfe775cf9977752071555fc3e1f88ab0"
  },
  {
    "url": "single/all_article.html",
    "revision": "9cb65dae5ad09e5226d9e030454b771e"
  },
  {
    "url": "single/welcome.html",
    "revision": "5650d9cfafd1d79ba93e51c382a7c56c"
  },
  {
    "url": "test/index.html",
    "revision": "cafb9ccb7bfd575fc66ba94caa041788"
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
