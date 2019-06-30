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
    "revision": "bf1f26689c8dfe65b5142bf96ca4df7b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "7a644893899a2a63ecf8bceb3aed90da"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a64c0f31ed93d1219fa72179d72b032c"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "d064e218530346422ef49dc22e11f929"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "b2ab2570b1e0d1e29cd123df5f78161f"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "a29e71834722b477a5837e9d530d5136"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "0faef359a5fce868269dd3f6a5ed9f8f"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "b0dd0614e9f5d9f51836fc85eaa89d8f"
  },
  {
    "url": "articles/index.html",
    "revision": "1bca1d08be34ec40f20da5926efb7e80"
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
    "url": "assets/js/1.eaa33edf.js",
    "revision": "0ff827af28de2fc7cba9e942e33b5fec"
  },
  {
    "url": "assets/js/10.38acf979.js",
    "revision": "b9e4a5fa05e3b1c2ba146511b2a6c1c5"
  },
  {
    "url": "assets/js/11.fc2d78c1.js",
    "revision": "11d52529f07e925cee1ca387dc1c6fc5"
  },
  {
    "url": "assets/js/12.127174aa.js",
    "revision": "ac30e7d8e7a10e6a91df051c5770088e"
  },
  {
    "url": "assets/js/13.9facbb15.js",
    "revision": "645246998eba7a69bdc53209dc700653"
  },
  {
    "url": "assets/js/14.09023cd3.js",
    "revision": "9e2a38954134410c62db1b17093692c6"
  },
  {
    "url": "assets/js/15.5e3bfa95.js",
    "revision": "fa9c03ada898277e4aea10387b0c86da"
  },
  {
    "url": "assets/js/2.8690f1f9.js",
    "revision": "39d4fe0ff3cc5de4f44f6a8ff9d23eda"
  },
  {
    "url": "assets/js/5.b2d88b04.js",
    "revision": "d5c68d23b0cc8d4ae4e2bac5b775a00b"
  },
  {
    "url": "assets/js/6.9cfaa079.js",
    "revision": "326e78b6679f8d22deddbffe461b4294"
  },
  {
    "url": "assets/js/7.12d7389a.js",
    "revision": "1f86876bdae3eefba994965c64565d17"
  },
  {
    "url": "assets/js/8.2a2bed59.js",
    "revision": "386ec3b516a301d711e779b909ccff27"
  },
  {
    "url": "assets/js/9.38d16243.js",
    "revision": "2e13a6f3bac27d77810a842e193ecf44"
  },
  {
    "url": "assets/js/vendors~docsearch.9ca4b8ed.js",
    "revision": "ffae475eedd9319be60a48484c5541b4"
  },
  {
    "url": "blog/index.html",
    "revision": "3f195268b83e380c906d765d629de6ec"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "ff8d6fa128d9f448b32b28514d014b05"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1fa76b870177dfd12db86a0e4bb8b016"
  },
  {
    "url": "books/index.html",
    "revision": "3d3875628b51c4a7846f811a53e4072d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "9eecccdf92c0f07e003226142e21dc60"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "be4f0574862e359bbd01964af367c502"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "896d90f0922e107339772b7265c2d9cd"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "0bcd6a308b2616df3aa0a49de0ba7617"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "a39ead3b935baef748ab3724538aa572"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "e3a2c8de8d966d8b915cf2b3d0c18db7"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "63f75659674773c2fb1925a4e107e8bf"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "992fa7c8c0aa34de975e4572a02f96e7"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "8e1ccf242a8e77f6c293015d9339d642"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "7dffe8122153a5f58ed5ff2431ff9409"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "015e7399f10afd52966152bda49c352b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "0310c388c879bc53edab0177b5c903ba"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "2d289f404344e8c455be58f5e3d5a6c6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "f48defc6eecf023f383f6ebc479012f1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "ef4b21fca347e6ef04e0040c5c229874"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "2c5508163437fde1cae7c222122c1a6f"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "ee60da9960b669b8b0a09df16b3cb388"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "b538fe04b84f6978043409ed9aac4e6e"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "1cbc73f029377c5c7681064d60d358ee"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "45c6651d0dfc57498ec28e8c573536aa"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "ff490471e08063d14bb489667ade9205"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "941de399c8bf100f0ac81f5e7555ffb1"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "86f162a6537604c6ff3967dfcf5c2133"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "e056d22546df893fd2282d1a69a50269"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "d6e847e57cd642b6d583390d03dac941"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "517a314502182c07b1ce5005ee3558b4"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "538e09f46cff20aef2c09a6f5d46dc5a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "faae9b585971f57750a10683f230689b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "e4af32f3288bba4aa6b37635d5ea2d2f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "b4eefa175720ac0967d7b50cb99b52e6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "c83187bea840478c94365b9ea50356aa"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "71841ee3317e0704249382538a7c91ae"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "d01e7c5477f71909a58eefc5773e98e0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "f0d3870594ec097cd852e7b667e09063"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "5b0a24042678ee9991f7ee8612fc641b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "bd2f91cbe02ba7f4ab56a89ce0601d03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "6328d90d5de16e0a4c199fe479f29275"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "3428f4535bab0a4ce874a3f3484bcbe8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "0f035cb9b9cab1ec3bca6b2ef8ae4a86"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "25c9d7e950c19bd7c934d1584bd04b1a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ada38c3303efaca73a863450a7015279"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "05a929387c5ab44741f8cd1b6cf813a6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "91071cc41a34f05ffaaa8508270a8d34"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "120bc390b0801be54911efcb14f9460b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "14b1b2c074e9bc0804b1f03c32083b31"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "7726e7cd4858238209195ea27130aca5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "4ec09bf4804eaf07a7fb87b811fe73bf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "d55f5e6d90b6adae567b58ce5db5ec1c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "4c29b2866acc8e04e5ce6c090126e989"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "ab2f59b0d47c900a5b213f617386f889"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "737ec9b2062b43254c08a1df416f5197"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "b30571546432036575634467ee301990"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "f25f2c051f59aa954ad51758e336a21d"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "ef48dfed5b3d23d81c0b206169eafe5f"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "01590711cc35d13fe5bc0f11daf102d5"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "c4b7eadf95f77fb397263f5726f94c79"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "31de0e3fa79398d3510cee2326ec26dc"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "c7dc9e72f5ba2b4e46ebdf250acd1a81"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "a8aee2ae7a9208e2d64424ba32487ac0"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "14f602d107577c57304987a209f521ba"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "c39c29b69c5fa8f375744c5493a2d8a1"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "3a5f87f6833c0784fa2a73a4530f16e3"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "cfc38de52ebd5a69b0ca63f753579e66"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "291bed35b11d9493d8b33b14def4117b"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "fd87f8e2417f1489f927db202a19e289"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e4ed2083b8f1765ded787de2b87784ea"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "f6b3567b28c92c5a7d1681b7677f5948"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "ef034c177a59bc7d9fd64024756e0cde"
  },
  {
    "url": "categories/database/index.html",
    "revision": "9d7bca9179d4b918b48b7580a8024df8"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "142fbdd9b0304e3d5de421650b225c50"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "b2e4e09f58b519f69e185fe477110b70"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "09634fa2706763448c7c2dc01aae24ce"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "41ddba88c1becb4493f13a309a04f0a2"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "79f98ea20fcaf3dbfaf5ea3664b5644a"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "37e5b4cf3f6eb15321412e56156d6482"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "320372e995ad71398972a9f31988728d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "7c9c16b9c0560f3141b1800b7734903a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "13cb1936bf513390cae04f5864ed9bba"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "dd208790dc8baf4aad8b843fa14ec707"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "836847b376dfa394bee457c2a49b28bb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "341030b5ab2c962b71e2eca08bbaa887"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "aace9efb95818392208c8a5ceadde802"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "e8031aa6814afd3712d0dae9d5131388"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "e4490940cd31f775adfd140bfffe9213"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "c15ff1e682c583bc5a43fde2ade6f9c8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "d8e7b4c6264a9829ddacc49d38e6f47d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "cee400c4f8c009771cd19a9a01d23a8e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "ea69939cc8b1461ac67a0ba49100fb34"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "90c5f3f6a544a5d98be56b23401b8cee"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "3837efdceadf7e01f3571ed025fc1744"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "8d3c758e5f920c1de21a772e2ed6004c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "bc85cd40215cb344cdd17a9f63b12fcc"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "7295f6ece4ab3ec29d696b9f88b44267"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "e4c828ae19bc526e64c501d91aa07b93"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "177fbab373e9eb3c1f994d6af62eb433"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "5995b13329554d1cbecc35f9a5dc12d5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "89cd036e6401dad79988d682bbd53fcb"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "1204cabf980fcb5bb539622fd029e6bb"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "17982a8558e98ab5fd3e6d341b90174e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "f97504b4875055d173153b6d232bf50f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "ab67918595e27adbdc2163d7c29f4448"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "180961a61f176631d6781bd14b567e3c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "c7e8b8c0e190526fcd8e809965b302a7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "4615f449d4065d779b1c29584de4fdb3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "149817f232b8b272fa432c2c227105e9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "6a942daf063132c6838c9bd19d5fbbba"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "b95386c7815155f26dbc6b4f653d84c4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "17f09d3088ded1491a44d015db0c6bc9"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "360de020c94e869b7f9cba312fd1e548"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "993cad2a3c20b8d696da922755ecba88"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "c4c1bf2d6d31f2692eebddddaa4879b8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "1a95f21de8512d73a03d3b9dc0af68b5"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "c962e69c9dadcd6902648d23588e3e2c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "43be49ee7843499ae2e02cd5cded97b5"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "7c5887163d584f006e6f7db05a8de11a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "a17e168b3670358bd3909949a4d2dabc"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "e46bde3f115a9549359feea2fdf6dfcb"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "d6f104c0b52957932e10bf950c42f6c7"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "fd315a52a3f5e8e38092873d20f82c22"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "f6451987da3458e50f5544e8ff66ca68"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "7f5069dd776ee7e1e09d4dc8c0dcaec9"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "42d3d0d89ff66eec1a3204694bf7b6bf"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c7917028037ee6c9a9f95a7b2ce5ab10"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "ddf3c9f3bf3314437fc99bc19f1a79dd"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "106be5d0d988243174eaa56d4e52cbdc"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "ed0c3a77c30a056b30156f8592de962c"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "81ffd2edba4e6f9985fe620806bf5943"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "3f1de1becbf0d9282e35f51df4538abd"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "98f4a6b747586be4384318efcb936633"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "b2e1891471a8756d562b84bc2c9ccf82"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "d0a184acf480f3a6a0b60e3154b61cb0"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "df762429217eb4423b236dc694287d6b"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "1db6c8e83af9834b8a0d60c30d671236"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "7200c4b8ca3fb3a0fa310712b4960009"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "e5901a8759e60372c203091f627d258b"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "536ffb73362850066e3f3f41f6c3afff"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "918c31751d9e3e137e71b7fb9e0d9e13"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "0a53a85fce7a717a30f1963b881701b1"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "b13a2f70956a5cf0ca4c18600a3b775b"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "f28e7c02efc05df2ed14f719e46922cc"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "65da6d9f53c2d9cf4760024c624f57d5"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "571feb3ae43654dd0d9f778fd20d07c5"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "de4436a5f64eb34f258c27a264e613b7"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "5539a30336a67e328f40a616be28a005"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "2fbb2a29914a8d74cfaa3554b318bfa8"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "a72a903d3ffee68c1704c64c31f031d9"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "2b02ad4826a7b5be4581e855b58d2964"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "094a18663e170032d49f38762cfb5412"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "31a9c2de95564d6fcafd7dee575e3e41"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "236c17bc0b5dbe263c62fba702830377"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "7a568725773f7e44bca9d18c0a228d04"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "396349cb032196d237c4307dd63e4f74"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "45d234842866ead9f67ce553d382726e"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "1249fa6756a465fd729287d4f6b1c9c3"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "f879b28ff78f686d932a1c67a6392937"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "38e2eb9cf01a903ada60d4b22a64c060"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "24261cf57c90aed7200696ae58db13ba"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "14a7c025855232ce80ba20427d8739b0"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "dd06713c2c478343c86f35f23315a1f8"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "ff574d1bd075f718f2289dc490b8ca3c"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "90db21d6476a86745c66d215799cbd8e"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "4db1eeb222ddc616567c73dcac15494f"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "d2436f096ad4b002d462a93037b3b965"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "4b1f5a930cbafe10bd4b432144205fac"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "16a1cb7ad9d81ff9f15efcdb7bd62791"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "571a490f28e2c56648b6ad576f77bc86"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "58488e498e67f8dec04d9b6e8316db6b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "e482254607dc6372246fdea8361a4cf1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "2bb7738da12c3148519cd3a615f66767"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "7778e4b5f1ae3768f32adc6eb575c831"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "9813051a84d5e76daab6ed6bdab750a9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "cbd28506c2c3e1711cb8b77bee37a1e6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "da63cffbc0b29d6e4ef42ea64027df91"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "2aceed2f3189e0006e844022171aa282"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "672518e334136a4db490debe729f34d4"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1caf17b2d9ffc3c7ae07eda9afdf421e"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "71b9b6d02d0fa0ec53a348ed8a63159a"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "5de97c23be8b9a900331cf5f736915d7"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "52dbcadecf21906e8982dde4842a4462"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "8f2b1ce3caab24b56cdec9e18c8f4687"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "57ce63b5974ec62f8a7137f9823cbd31"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "fdceddf3a455c194b11dcaf844836e6c"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "dc80f9b45fc92aab91d2f4c13f400c59"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "6652da785ffdc456e01febd8760ad194"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "d041b95250a7a4f2ef929066c7c5e144"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "4968dee3f18f760a3cbf9dbb1c25f07a"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "7abd516840929fb6457c4d0bc13edb85"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "ac42ccc67d3b0fcac39bf6da74687bf7"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "fa123ce2a93a51ca41c89d3ec66ed062"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "c22e2515b3b6ab3c2dff0d88abc70412"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "f83bbebb6680a5bbc1f66d7afb1e9a50"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "fc63b28f73229d1ba97c0406ff0b0163"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "20876791fafc0b0479e5d76a9bd9af77"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "7de3d2a46eff9464f4ab9a610563e79c"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "189402ca99719fd0a6970bd34d07e584"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "a01f54626fff6773d8d4a6705d9af2fe"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "d34723899160184cc834c278ba49f13e"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "1781476db7c2e28794bfe39f3a38cb48"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "80958d53bc0f38e8348414b2e5efb25a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "8264608155cafda51340c6e55da7841b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "c4ab2320a214cc67b24e50b0e3e5af7f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "bde2215548fc7f659823a1565596db14"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "001c1f5c4f296e436598c751ff58cb0e"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "65fdb78864186fe43b36a152eda94e76"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "06deed1492334a3f756b7b1cf2a811ce"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "b8895875b80e56b7c446b368d7769f70"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "0b005f7cfdbe1102c08e5b74b867e29f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "9e508d4b5d9aa357bd236ade98c68a02"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "ac66520bfa778037787a94072304104d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "e18924fb1d4f0b5bda092dd03e93807f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "689c8dc68d75134ad03f41b1cd5f941c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "0fb1d02e7b196a1b449a3b59baeea86b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "2fbd78124591ecfb0b67fcb00fe52962"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "db2225c20e7d06951c9c99f663680484"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "6e6fa887f6850c5a4f3c2a501059cbe8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "64527f59578edc5cbc88ad9ebbf04aa4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "1652e46dea8f127085b04dfdf52901ee"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "f308f785841c53354d2e337674b54e06"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "81b56766db7fab8bb53ddaa549f364d3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "6a0345aab1855aa9150dd1537692f10b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "54e7ec50e05ce9c73bef9344599380f1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "56779268e77db6e506e18641e2d24127"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "2f9b8af260b9f3a48a08e9fbf034d19e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "5d2f4024fca4955f56fca77333629595"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "071fbac32f9224d19b71ee2bbfcb717d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "d2f05a0e52ce3a3e78cd839f655ee7e8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "f588905c66861715f98e0710e273adc2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "6aa956ea62281cb702cae52c4399a464"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "ef0606934948124445c11b1e54d6ed8d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "e7abbb13cb75612df5bfa9b6e35c5d05"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "4a42d181584f135bbe464759490d2c62"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "cb7e8b2522a5c8c8d73acfd5a16fdacf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "34d36523b370ef22b7d9d2898027615b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "f6c41247fc1ad705a34a6dbd1b32b7d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "7dcc51136d3f09e58adbfef496373463"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "4c0afa19e23fabd114c49d73b1dd9465"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "955c623603dd24dad61ec88da7d9a1ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "d8033863e5e37c4fc0a903a5f9c21292"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "fba5449dee4056aafc9b18d655f05a61"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "3c905d791a4c2abb5d93ee2347a7d984"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "260bc0514b909bdf485cc8bced1e0f0a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "431102aebb574e46b84d615c82b8e17c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "2aa0c023e01d0e972ab38f1039ce89f2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "4834927ad4dbbffe1824dcf9da2c431e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "f45c61aa1960680704f221866136a113"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "825985ed3566f8f176e98504563e86a8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "8277662c972a4ba91d04a1115517164e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "2507a5bbdd73c5ce82de1ae3588a0594"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "283bb49d5f7ec85a85f33d41f497b95e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "66b4062a2fbd094e2158744d12d508ad"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "29c4b496fe0713cfb396bf49525bd5cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "f5759ad05adba738ceef12ae6eff6a58"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "a58c4da40731298588a46537cd300eb8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "90476c0a4953a93b7c57cd9ac39c3846"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "9a4d8ba599328287910c8a9a92406e45"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "de5c1b0a867ec8bedfa9289320f8544c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "53228948ea96b4f02b24cc7da8bfc7d8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "a7c800e20cd49d64d62ab57a672b3f5e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "ee438b1238f86c71f75302ac2358f8f5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "b13cb31c74cd06b30ecab605a83bcbbd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "c2e7e759b3069783fcf0507878cff97e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "e771802418f91726fe0a8c4401d6f30e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "c48bc599bbda0d4c560d17f77f97d4c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "a94590abb15f14178ed6c7629227f388"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "6cc0687cac780d1b4398e843c674696a"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "aa54a25bc26a4b510c592dc22ef86abd"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "69f2f2b41d6ba7d8aa6050106bef3f08"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "4a329f7c41183e5779d0e14ecc011fbc"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "6c65d1b62f20f9ed87567e8411d7c8ae"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "7788cf2338edd498bc814d280cd01463"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ba0f9dcf60af2c1c70302565be5eaf59"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "5961c50f7246463629446309bdae9ea8"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "c08c1379dd2da3cc8387c1a314b13d5b"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "e658f8cab16238aaf7f46c1a6f265b30"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "fe1e4869432ac5be59eba7e77b710fc6"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "e36d1fc1306841c19fb625e0570317c8"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "eaafa61da1284bd71eade993043871fe"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "081e899f2756cd28ef0f3e24125c9ae1"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "6eff833d69b6287150e818f84ca04c3f"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "2baa5ab3f661ecf749b5f16f71d143ed"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "d3a091add030c012d5ccb12edd9c6f85"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "439c589d3f808c98e61b04da7b74264d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "36c61810becb533b60433376a66b25e6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "60c0152dbd67f522acaf1776814d40eb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "9d21d565fe8cd10f0efe89f0c1321b77"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "1f91b5fec4922cc97eb686ae449ce4b5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "e484a8432e554897a0d75de4bdb16753"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "5b1f42bcaf2e8bcb43dfd4869267ee7e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "8bc3a535ce2253a0a3de5018d7f00d89"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "f626378c9b22e282a738891f151cbe8c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "d1279255e9ab847cbc457e815fb940ff"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "ea1634cda04701bc2ed3cfe7d5f7af12"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "db7812e6c01492f070aefbf4df102793"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "21f229870c523a1c78ca79c1e6341f02"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "443517c1c2437ce1b8ff18c1fdfe2e6d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "4a3474d1efbe2eb96d23f271c481aed9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "4b8cd7a4b5f1cb8e8adbac1d580e13a7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "309ab4516a26a6e2988783d21e18a7b1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "d6df6a8ed3483b6a52741e14f7a41f75"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "eb9d437434b47c256cb5de59bdd41a13"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "5f6fc17819b7d5355f982e603511ca56"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "3eb3a0c7ae16112fe2b5810b013602d9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "695d62610f10478ba102ebbe58337b45"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "dbedec63f5aca58ff37c64d0776a2b4f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "798958db13e2e1dd29eb8b181b92d235"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "5ab54a021ead363998778bc26783f1e9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "a7e39c3603220fb02dff3336bd58372d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "67421f704dc52487df96d436560a67be"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "ff41982d84af1ccb9d78bda62986b13e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "7a7620666315a00d01ad6ad16f9c87ad"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "3517b4354bf4c52e5b519f4f2f525a87"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "ff0fc9147180f9cdf70d1db76d212419"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "68e4da8504f092cac77ab00c088aaf31"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "5270a189d0775cc19577675b958c7ec3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "6e5e1b41fbe1425497b443f637c512ae"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "16d8b78b93cf24975adb8383ef5816a6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "92209620433b04454ff41be0e13de14d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "3d023e9c25afd72cfdf92141dea0a606"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "701b374d41e36fe83444da27f8e00c18"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "8a8b1f9353c5318a6b186d66bfdaff6a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "5a0a81d83d1e7af8be06c651a28aa0de"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "11e3041cde58503461addab696e64f83"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "3b56ed0854b33938d3fd6bc91374d296"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "a24fda14c46ffaa032a8d3163801c3ed"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "e76c8ebe5716b69a404e60323f9615aa"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "b57f3cab44d674057926e8201ea784ca"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "e596a18cdeee1dd8570f50adee5e90ec"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "d009f3b56fc0ab6f100a50e540a17a65"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "1075e66b911458db247d0aed9ce9d895"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "a96ae901ebb89ed693a30eeb7be47355"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "d0e7a665d97eb8cbb5268505c4a4ebec"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "9625c67d4a47c223fba6070c9fe5a22b"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "9709e23d9beb1816c6a070bbc0ea633c"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "5983428ac24ac4d7a976a89a993683d7"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "bb9552f212958cf285b9ec0821504640"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "629346bad9b2a6dc2b475c50bed5caee"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "22caf91e5215b2f342460ae154a26868"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "15fcc65c74b3bac9ebccae60f39fee7e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "dd361079e34bd67f030a49925a0ed418"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "fec25a28bc7b5c72308faab3aaf04233"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "59c72dee0aa4b1ad544c3f6a3cc6dca6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "529b75721d24fb92feab88855133f912"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "d03b968b6e485784e4af6a4b58a4f189"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "ddd1d80fd3937063384acabd4a4719c5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "9c1cd85b0b3449139f829c4504f86b65"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "604a4621495d4796ba4e8513e529bca7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "ec59b7b6531f1e2a549119234c1763ee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "fb5db37303f4c7e8fb9f7f3e1e0fc487"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "53480326ba9a18d2e3fd49b677420c74"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "289d35f4f537c9b57861a0d737fce2e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "eb346d36476e7cc2752a8cb0fd89e40b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "037f2a3c6362c95ba079111e128da447"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "491b12aadedb65c2b052566d5bbda103"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "2c60215dd36ae9ef52c31a2a73b16f32"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "e29a699b75d9857cd07cda2b653ebf5c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "a286c7369f3de1fa6899943deb989777"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "ea1019b271d1be5f388d0c8811d7db27"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "b41316799a7e6b9e9ffbd2ae761f4be4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "48260bc56530f514a01fa100ad092eba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "baf9e95e77a29813db222118e9a61039"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "8bddb7762c39e37db087ae5c5b5e5d05"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "afaf11b54e05e6a183240e3c47296189"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "f56705ca9e8c5d043b221ca2a860eb1c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "2f3a4d280f06e4b48554cae82ee5ccad"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "204b62fb2e1d3e4a6c59092c0c8be535"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "0b64a0a70cb772e14f9cd1a81b54e7ba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "8bf20b6f4360fb63228e0dd633b61e38"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "cadd6091c7c3712c3537eced2b85aef4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "a3fa11ced1d570c55f346be3f9f61ff1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "b93dd01ee57c9c3cec2c61da58ec17cc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "6e8e81a5571e4f9bf4928e43701af903"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "4b4682d559987694cc22b885d1de19a3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "e451927cc467cc82af61efcd731bc81a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "7f2787e43f76e390e8dd1ad10846ff5e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "18f7c702afa2bd3992b042d6530bc43f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "acc8e346dc6e3ff8877e4785bffc9b02"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "a1158c09759e73f476b36f9f875dfc04"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "ce302b97869e46ce70372c9b9e49ef9f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "6d6c306908bdc15a962e0a03db2055dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "a1960f3c738c4025c361e941aca1b1bf"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "642206b7fd4b295a13269d05223b841c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "c5fb8a53b65ba25e606ad1b004d6ef8e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "7a4050daf9962baf86b3909ea3006f5e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "adc1e491a7cbbfe6590f1104744f33be"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "ed8f94749fc3c11da1f54954c1605101"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "4c0b5b5c84ff961976cac660e043956f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "cbdfbb67b76ffe12a1f062905027dad1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "4ff3ff354087225aa6cb8075029f3098"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "15a68fd8f34219154784781d259feea3"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "ac59521dda70bbb749026b320012070c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "39231aa8a245bca138292eda7bbe998b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "7e5127ac380bec333eef06bfc9bcf03a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "fdcf68d5472afa0b673fe9bb7c81c384"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "bcd199517b70269f15aded3aa6d5446a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "dc5ed01b006047c01ff208ad096a7567"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "ce0a55ae41e74bd14ebe45cbd43e4a89"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "c87b55dc686e334b107e08a65789d80a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "dba3ca44f4109e70bd9ef759319666ef"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "18b18be991bf539d4ec8a04bb51ad9db"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "0a16f45c45bf769226e932138405a5fb"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "2f7b48512fea0910e826b048527e48b7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "e6f613c00f7c8c8705800d1f09f3ecc0"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "3b327f9c5d2200709bc348a8fe38fbfb"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "05f4caf8be51e8f5dfab92bfbe96f42b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "dc72e137ff683fa0fd1e629b803b52a1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "aceb2353e934be555c20cd43759bf304"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "acbcd9b8fde05f5ebd52188f893c7674"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "48fb3c14b53703e10f217334fd7685f6"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "c85230fe31ab286f291d2ed022e52ec2"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "7d2ec93e6612e0d67ac13b8f11928879"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "678c0f2be58ca8c4237fc7ac3cd266a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "b1f861a77d1d2ebcadfb8d1b0aaa3b14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "9063e23704766bf8d53b438ebe71f0c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "103f180aa0a18df6f0b00e0d5e293296"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "b1ae7d87c79ca24b58ea901fc7704ad5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "aca1fd0a0e58573685ea1c83a81488f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "f5bb1865ab44c8cf637a2462f013ef26"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "e01581d30c1b03450a2f37d65a340ccf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "0ee9c3d4e04c651356dd43f5458afc1f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "488a1850826e9f06cbecec0a0475b520"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "dfca576a16a13dd9f9fd1aee5ed908c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "3da71d8fd18c95e61af1cecc49b9a55a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "9edc7e51743631ef1f06591a01553787"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "6364b2283e0e0801f6004338f8f75800"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "19c65e1b1cefd6106925cdfcf029579a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "d84e2c0042ed01a2bcb129f8c823a109"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "f5a01557c268fdd90b312ad316cf9363"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "45142d103f92d5c78b7394fe1d7d99bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "6d5c087be1b462f43b3ce484e2553f0c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "c6df3e9eac48cab6246e45582d04a2ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "76c2f2baded7d2f2fe9749df8238c631"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "a48a4d620ed5b41b8a4715e8670cf1a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "31fe966b409ce116a0bf93939941ef1f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "bf85e8f40a0c5b7f2ab92024c96957a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "449c7b826a477278c336fc7a77461609"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "ce608e71154e574af019d5836405c9af"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "6d2dc9877c2cccee60c1583d8724d897"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "5ed9826f9298ef7c34045c52e293f11e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "a34296290f8ecc6c973d55d59583ccb3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "e10e06ac3d7a4857c8df88972731d1b5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "90149c1daafb64ca7a9ed41615c95af9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "8a3081cc6496124543af8ac944c22ea8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "78703377599d9dd40d1d2e135d3e402e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "4933f38156b4edf796c58b7de6f33eba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "9377a8a9aa3e94bb93e16d806b2f13ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "cad8f1fe12f5c1dde85c8971701985bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "16fd635112d3e301d9fcf4c7a441d190"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "e9302b84f056052f00f2b5e48c353abb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "a02e9455c82ed8bcdeac68ddc9189829"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "f909b9091a5cfad0ccf30c29b5f1b631"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "c8256c27615d3986bd395494408a9ade"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "9c713e195b9d50ed4b3fb3d8c206940b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "8dabbc1c163f9e76b278c60d511d25dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "8d94aae4ec695bff002168b8cafe0d72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "b493e569dd23f1989605ba33748e44d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "4003b94443cad704cb3ea7f7eece91ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "51fc688a4afbfeab92d2f0245abc7ce5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "f5d392f4ed342f134e85e2a4f24415ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "49250f95ee8839abf792950935594396"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "0f9e4f8e77e9c669f2d2b0dcf3c8518e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "b71c7c6fc787dae089f4ec0d4004c2ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "3b6aeb3f287256b4a56e55429cfec55c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "2aecb6ed413d846402a3f6253c08c3a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "91999927842d1657a9fb388617189ba2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "ccc3b24e05874c386a6d01b983273ab3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "792e405de4e22a6cb89f61173f2011ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "db3b525791c3356e297950cfabf1b36f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "dba3fc147e5a95ff6a07332b8bf5754c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "2b64e10b91aee57ed380838690c02661"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "d6b314d4055aa8da42234a58ba1e63e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "7b0616c439ff26ae0aeb8f2294490d24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "16a2075c8d2c91dfbe22874e916b2f35"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "f31732e0583654ebff246bbde0c936b9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "65ff504ad67d6dfec5373e90b55063dd"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "45cc30826707275388fdefdfd8da9ee4"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "c55e32cb46c6a9a203a74123c218e8ad"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "a89922384d9e54bba3527041100ade83"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "3e19241d44131d1a13f7fecaa9d2d432"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "56512766ce123fc07f322033a247fdbc"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "a3a1a6e1a901347a6685b81bfe8c8b7d"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "51be022d78a9f13bc5fc26fd0c2a34b2"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "97b385282474d9a12dc744569b5598e2"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "4d95de51a4ca28d06941fbdea91bc217"
  },
  {
    "url": "categories/index.html",
    "revision": "d3244726da9ced3bde53c3c5f8209f1d"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "1455695a8a657c0cae6dd64bdae0532d"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "c53d61e1ae4e5094b21b5d260ff53935"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "263f185d809146a5ab81a35bea85c755"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "293f0d77de800e0a57681a64ceebbbf9"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "c8a77be71d848a2a8fafc3629fda52c9"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "7446146f7a2824b98f096ab8ff968f03"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "d8df6792565d8ed5515c43c2cfc970ce"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0e689dcadd5097a5f25dbc1835c9e28d"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "0bd108a1eac2733f766584c0ca183187"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "9d4d00ac723924d8b3bdebcd094cb11f"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "62ee5cedc3409b281ab9b3346dc9dbaa"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "aceb35947310b8e8bc073ae6498ba423"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "75d4d96225af7def8acdc2def4ad8e78"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "cf40c708c1663a989f4d7dd1177c100a"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "5f9857de6499f5f6cc690c061dcbe655"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "ecde267e0e4499fa5c5fc154a25eea07"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "341673444c21731b352b0aff9b8e714a"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "57381edada4b6ee90aff59940db41188"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "3266721be6c28cf805a819906d37ed0a"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "8a557bac04f51e12cc5d4ef58098e562"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "adee979684a53d584e591621668e3dc5"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "62d1f75895a8bf91ec9a5349993c401f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "47baf425d04f87f9d1cd3f9d6db16ba6"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "77bb349abfa9d969b1147f6cca1c4289"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "7a772dd1a441d29f969db467d4917bb9"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "827541be058b88d9d614616314d3adc1"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "16e5d747d169af9320dad347b8cd1596"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "b4300760f48401becfe7b3fe4898be73"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "47a37482d7a8dd8a2b4598945e99745b"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "cc6536fbc164ac95d75a8471739e78e8"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "3bc9ce2f3d6b2f99702ff67fde65ec24"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "722ab4634e4cea53c7e585ff11a9008a"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "df2b37c998df36eced93cba14c433dfe"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "dda567af652cd432983b90f6f30bbb97"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "dfecf74a48804ed8dbe539071e0df498"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "5f89e55d2717fe1cc775ebda2d78e45a"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "1c011c6be072bd34add19496337edf92"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "df32dbfaf92077e64b37d638f5ea753e"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "3436748a053cb98c96b56edcba211b0e"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "5d652226e5e7e5312d3f85e7c6846d2d"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "4a7a1c477258f73d0a1ba0bf36b43ec5"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "a4bc85d029ffd9244b7186fe642733af"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "1dea4951885b81c17060ba4a733e3916"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "2b1378410aeb3c26a03ae4c6283168bf"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "9453f1402feb719c129b32522ddf7818"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "5ffe2e4bc28adaf6203220934792ca8d"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "732ffcb4170073ff2c61370ec29c6524"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "1af3684784d3733bef63cd89f84acc0c"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "69d26ec334fd8ef7491d6914c4aa5464"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "bee43515f1d3fe4c022f2b425369b7f7"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "2c550a17c9e0619b03898dccb7665a2a"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "34c997cdd95bb6ec348a2b7138d2269e"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "2ca55b150275d27f42618699177c5283"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "1b2ef7526472c053d389ab8246d91ab4"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "7cde5132c7c7118f29ef8553bf97f36b"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "31fc4f30887a8ea020854966934b6b34"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "b549f60d063b63d3e81bbc53aad8eb74"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "eaa48cf6df0a9d6d8880b1568f354b2a"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "62eec86c7ca38a83bff6a065bfcfb685"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "2600f7c5cc9a96ce04236814adb84f92"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "cf708c142e7c6d7319931496e730b2ee"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "127679170163c0bc94c40c68d299fe91"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "b5d125ee8b5db417b0b63b9fc7f0116b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "08eece163be3393b023226cd3e6bb99c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "4c4e016d830761b473493f40701cbf7c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "b7124359a04c00a92d384754919c5c3e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "6c6457ed36a9895c75df0ffe34700948"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "b7976003eebc16bd076a36f6aa34cf03"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "2a991c38759673940fc0b04f2be9e9a5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "0b4830203086a3a0eb96bc0ad405586a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "dc9b1ca4c930ea7fee8df77ce1fd7e30"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "a935b3536497107750a98d31427297a0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "8db2073f9b376b00bd2e07cd5f03a04e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "e1419daa49ae7932972b9aa5796c4e22"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "b9e3da22506643cd377c48fd25ad2690"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "7c2966a0bc15ee14e363e0014ceb65dc"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "92d4a07ef08b808d453d35b4f907ef05"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "4058750ff5f21e718b2aa0bf350a0fed"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "d2e0c4ee7ddbc04a7303be0c0da21ad1"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "d6ef22f59b776c91c08d4e7d4fde8eb6"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "f38c329c8021d977ade202719c788e10"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "45136397962dfa23c87e732413b3f2a4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "a1624404cb9d1bb010c2922968799d5a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "f1dc5fef1b8b7794925f74b5ce73ed77"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "4990af088489435ea87fe032b353351f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "691625658c2f9a538be26e6005822f61"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "40569a14760956a021806cfa6e54bd79"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "eff9daf66bac45159a935e0eeeeb51d9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "106c8b0ab810a3dfaaa34496d479e325"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "1cc2802a5998933bd18592c43e5608c1"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "43da4bcadfad48be1da44728985386c0"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "4dbbd42dd2cc7536e52270ea442731e6"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "e05c8a521fdd58f91e1f3252fcd6cb02"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "9b7a604abf9111e19a4472d96cd49dfc"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "22edf1ab2735dfdcf87bfdb6809e2edd"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b282b0220a0456fbf3cb2975ab395125"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "fc2e0a51baa4cf3955d34bcf5c649c48"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "10cdc0c22ea635298c932084c5474520"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "1d7670583ff169022c75fc39c09b79c7"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "4f5d5c5c43344b69a10bec73e4864731"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "9ef6e3e881d61710aab561ddb2b81116"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "ed57fa62a5370f4ee6fbeb1ac30eb2b3"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "766532869bb2e2f8c5590cc218d8f6db"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "466fb33ca6084e612abcc1fa970a6860"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "5aff9f7c694c29d3249e79160023f2f1"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "929e42c2b84f3845cba155ec26abeabb"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "3e2d57909694a63dca8d0726b40c4e27"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "1cf0a750029245f3db072265dc28792e"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "41503350e883c807f3aa75bcb6db1155"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "bb79bcf6b3279b9182452957fee79e7e"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "8cb50e87d17a2be782d3757c14304efb"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "1c9680b3328aec1eefdfba61335084ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "321855e2d91f67ea082ef6e9aca9fd7b"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "25b9836e86a30aad5133b2d5787c7fcc"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "d1b626f93a2961f9f762b78ec60a9e26"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "abc59f2888a2f1e178ed5619d2dd06d4"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "a2b45c52fd990ad88b7a28a473875b21"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "59cab7cc96c9248a3606178b23b97116"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "478b9f3c8c787bd396083754055407da"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "40f4c4829506a48d00e331687ba1027c"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "d4c784932adeb2f9f6a27ac56b3d0a32"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "a14d60a5ef4b009f3d69eefe214cf0cc"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "6327a37399e396f1a096b4abe15b366c"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "4cba02ad2acba325c4fc7c5ba2b5b1a5"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "0a6775c4581471cc084c6717a0c87d89"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "d0e733459ec6e9050e3d760fcb0154af"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "07309c642b286920fd57b3d6dcb06938"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "b96f2f80b01172c0eae5903313122b09"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "44cedb995afe7582bc4372ed28d609d3"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "26dfb0da3b9d23198488b1fd389bd5fe"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "7f37d96632a18a31e02bae784468afde"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "1eb1704732a10f07aa27dad0863524a6"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "d4802109594e15dd6159b1be1d24ee8b"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "654b453c314ece1b6b39ee83ce7b2d87"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "3e9211878192f0b962041b85c384bd16"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "a2ad34e1145594a0255da9c53f4e0d40"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "1597b59b12ebc252a6bf7a53de6dc1db"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "0e211f80fae7269c3a7dd33ce14675ec"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "a397ec9ec929a15e99b5dd9a4f569a86"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "7528958ee5cf5f7a4f625e6d356df4c2"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "c0e7b700a89476f36b411719902ba856"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "7392ec81308867b2e42f9ab02d8ddc1b"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "8f4dcc07f11943a13acd2454b99f977d"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "4952e799313f5b1adb70781ce8dac2f4"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "14c089ccb213744ca2dee985c84f2e78"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "1271144b4e1ca9c93b016b96ef1ec550"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "205465ae89634e1359453a721bdbe13f"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "fc667f323668b1c12c73471fa21905ba"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "1f4cb1b9fc463adaef9b0087f04e7be9"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "2e0f0a4a8f94dae05797122c4aef1ece"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "3f3d3d2c844edd7d541649aa0d082c95"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "1cc5db9d0854021f42d5dec13b469b08"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "8e519e165cb7e924334f2b8e0332a12d"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "4f579a76a13a28b1df38330a04253487"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "ef12f6c4b73a64918fafa6c2765347a6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "8bb7eca98170cceb7a336170a341042c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "e0c276e5b35c25d1d042f9a1ba5dc0d6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "15ae01ff9ce8152f6b4c221e054a6395"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "a7862c288786f7a78477850410568d2b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "0ae12d4c9967104a5a25d4e10bba3500"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "f52ae88442e2f7e6ead3edc91bfeed70"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "5b8c01735da11d882429e1f2c637583d"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "6a8cc507c580b9a2bdef59d6250f7242"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "1b1387a4f7f145971d395d8203012aa2"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "f6be95baabcd09b28eed0beea81215ae"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "41e7def8c9eae8a146f8c31bc470431e"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "c990b16087adef7780d419e57777a9c0"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "24439df6b7dec10f75f3dcff65b18d99"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "5f04b9636c7dd3577d42d9460082f3d7"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "0a734373d2892b9145641ab8504b8a3e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "40f9f7799789a07027e2ceceb4e8359d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "993afc7331ee7ce7b13c448529332e5b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "16867bea272d79e864705474d5e6e3e5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "7d4b6bdcb106715ee861ba463411570f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "74797e3e9179c37ba423d7204d8b6b39"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "7370e6dc5dd644f049310e9f81acffbd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "c22fbc1d578c97538beb7d6df4109d43"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "3f3bfaf1c6228cf9db8fadcd80dd01f3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "d7f15393fc2aaa8eb42664a6b76dead7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "a4dc10269f5d0bb56604d9451c0ba852"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "eae746777088dfa6e0c6efa5be026ba8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "78af1a8acd81e0b9fd64adf5327afae2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "d73703f99d847609defa04ea251fb6cc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "b4298a7cdf5620bcc78b57a40bb51cbd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "35fe09f6151aadb82aa876a447f261be"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "32d070a7317d937a792b8010677e475e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "32fd540a355199dc6ad411dd3b45e0f1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "3cef9420c5cd3bd9dc59694d0120fe4a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "1188d1b299a20729f48292c08fbeb55c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "b46d79cf804a01b11ede1e08151d5ef1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "4b58ee50ee37318c178401490357146b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "4379a241ad91657f4c65bdf3ef06c5b7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "694bc2148827a150364fd21c9d265369"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "fa32973120cd707b83f21e874a98a46b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "51f31b17f8760f5713ec47154a29cdd8"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "16c1d7ffea2d0e3a0e8eb3a084c33ff3"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "fe12d64701a453aeb83c1cbd4fcb31d0"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "9dbddc9b11b46780c32f94fd43d64cdb"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "49b9303a3e31a93db97fbe4dca3b157f"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "9b46d6d32f93a6c432344c8d854f07a6"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "f3ad2a6bd5fddef9c7d5060a72905905"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "b8833d693791e10c047f12b3fc2e9ddd"
  },
  {
    "url": "categories/os/index.html",
    "revision": "49e8eb9e676b97560f6fb8b3a1367756"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "db3ec27fa63b72a9f3ffa8906fc4e2f5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "74c46a092c16c73a691606e64188d6dc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "5e300501d25a5736b9a97979c60113bc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "8528c4750daad2591d99c3c8a9ad6700"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "976f559c2236d178f4c837f807e2f57d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "d9ccebca2dc6e28c7592ff1f7b879b0c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "e8eb4008d104e1f65e4670a4c6228306"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "9f6215a7c73431765e36d6747b8a2624"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "1e7929fac02b9024c33cd31f3a473d5b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "1f5104fbc220416301943e2ef68bf9ae"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "be04f95709d5473ac3739da3d8840768"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "2f8b2e8275e0f9d1e8ad06f2bc7af821"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "b5bd432fc6b705bc9e13e152ea326c83"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "c606622535aad494cc7b62c96c7996bd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "e929be1191352e7a998bf2b4a329621f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "b42d2104b011f5ed73ba3e37fa666884"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "b18117cf5924e6238c80cbec77089f03"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "8e97f14ddd04ffca28d5ec3eb8dfb3a4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "1fba30401c41319595a695770f51dbea"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "d272d0373e2c3b52977867d59eaca02c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "6d8cbe5922d5be42d307ae6461b6eb76"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "b38f3ad53e8595fbfa761f6056ace002"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "cc36dc6a04c9fd910cd86e2007af19fe"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "1814af40413bc8272a2c4efe89891080"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "23b1d8d88412d93a81f285d4a4f77ded"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "906dbf45edf6e6cdc13513aee440981a"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "130de4f1dcbafc4062ab5e8bfc4da16a"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "b73c51f75d8c4bca40985e426d9e501a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "542bb5a4e434246b153d6de9f3d83ae4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "ef95858c3990fa938e8713944f6528db"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "8e72d9e2e1a5e2852d4ea40d4379b43e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "76408a3d623f7efdb0fd48e19420ead8"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "dc38dc1b8d31a9b0336552f536b1b16c"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "80b18ff029c21a33de19b71830c94da2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "6b57b5d9135043fc96082fe7f0dfec00"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "5f5137a0340334bb59de62f9fb6cdb46"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "4345ef0b9f9ac1862fea86926c2cc151"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "17955b72041c4b739b6dc3a69e8ece7d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "a4be7a2eed11c0530b2eb4e5c72fb7a0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "463f4db5df8caa4d262c2a5250ba29fb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "8d9d75667eea9be7273e38b356125fbb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "290a2dc0b4f82df7ad4bdd27be6c020f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "052ed9fa991a6485bd84ede6a41247bd"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "ffaf11f820bac106bbb7aabf64803336"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "6729c82c762a23f6b7537600cce500c7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "92d7bddcd980c39a7f535c32d886f123"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "fbea973d7eeec2cc554da838f4145c9c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "4479aabad4b9d28bd7f3c00cfc2bdf91"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "db0a8bdf05a4753d6df636acc1c6e85a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "93fa720ea3609d8558f0555f2a406d65"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "1b77d99d3312c14b76bd3593b57c8059"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "859290efe1300c1f0a7f011c8f9e2829"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "3429fd1101f9bb09d72d673178b10a26"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "3210d91c1410e011a7ac5fa8ad7b4cbf"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "3c5790c3433a9f7485fa667a14a29a7c"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "fdc469965fdd0f10eec2eb4b5d4101f5"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "499518bcb4114e0acfc10bce98de062b"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "a74aa8a218d84ba3309f8431374c2451"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "e6eefa817c8dffe5b74b4c1c4d321476"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "329b2ea79996e417adea43fb9c2b74ae"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "2e2120574e1898465fde8908d1d82adf"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "b7ce790a8a1d922dcad295a364c16eb9"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "81be3068b4c02199f1da71cde05fad9f"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "295ddcb2eaefb5f1021244d30cc31a7d"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "18eb3f4b1723391930bc5085b99b60fb"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "a01cf5019717cba9ba47d07d9b346bc0"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "44b32f09eac568f04a4f5c7861cdbe39"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "3032ef7a04023047f56db615e2b4916f"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "46af4c1881ca0992aeaaf24ecf8e0411"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "945eea4878177569aa90c8c5bc4192ae"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "e8643df69c14199b07ebb4993ea2c3e0"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "b0f76694c0d7ca936c718d24a1fa7c9c"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "f6ae1b3a21d9a7edb23c80ef435b6db8"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "c3a4d95c486f4e4adab0cfbf8e4dede2"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "4593eae61dc39f9b34a319891327bb00"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "fa28da1ab0da1ecc5bddd5a21650d595"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "f4b8b643dfbf88551bb096dae2ad193e"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "cda6dbb1a1f2fecec34e9c3753108022"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "9964191c2869e8dba2a60da251ff9d41"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "3e494fe8076b4da12aab223fffc4447f"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "c330dc142db42e53258cd6e334a615b5"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "9dab6baeb6882b27b3b0a1c82624ae0e"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "b37ae6097e5a64ee7b5c81c0f5961a7b"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "ee11c14a8f2aa10806b8442016676615"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "10b2f36d061fbeb9b40932cfc4699324"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "160322a5936ac4d5f5194139eaec23b3"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "9eb6e2c7d44709f18a83cdffae7a2526"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "b97ea5b113ba089c0c07d71bd34cc7fa"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "b752649904504e020cf2cf6adea65bfe"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "89dd2daf8defb724cdfa80b3b8ec473f"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "b3ce607de324b23f863203d2559c5c32"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "96fff012bd89cafdf01bbc845ddd51db"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "cc211b933609301bd8dec949403e8605"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "784271f20a2a957db482659061ca6a80"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "1c9869881080c2bfa96c11d57ff5da6e"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "468c9b49f0fc747c567cc9fb0178d72d"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "9bc817f42eb3ce6017923f5c5b6d966a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "134288d91b839606f4da8de3423292cf"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "0d6001892b784ce390733ab2cd80f4c5"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "c8d87a80300c3c93ac79e3a833c27cfe"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "38e946e262243c56101f3f322d9924ea"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "026b0e70bb054c8c4a8cf48206cb74c2"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "500b0b92f36f2310d3aa7fc64f49d4de"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "3545c7174bf37901c6077ea30354f7af"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "785cc90a29df01781a9cf273d73d03a8"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ccbf64d9d988b9d727675959cab5ebed"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "6930d48948100a7ecc3a54cbc0cea128"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "e4e8a625f390aa2b6a2eda82840ba421"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "9ea2cdaf0c1907928ef81e7456e952df"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "5dd271cc2aba053afa0ac7681a7dfa2f"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "3a388943b8dd548317345ab7e98fb24c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "cb547afa63969e72987dfd1ed1b7815e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "bef92a214184b01c87589a9bfc5ff9e7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "cbd98757271a1dd2a913ec6a2708f309"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "704db989d10db58d750cccae7fe79128"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "d0dae66792e7e504e9fa7de9cc567796"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "63bc76627dff4a4cc84baa7d74a4ac5e"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "cbe35495225bb3db12a6008e89feede3"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "4dfdcc47b82b43874fc39f88a64a1b72"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "1c3ef0db3aa0d90d4628c09e86849ba2"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "a01a60bf523a2f731d0f145de64954fc"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "febe21f006e38e2fc1d9628a37d62568"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "8c52f91cc187900192f9698e3331ebef"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "2350dff5325b09818cf484aa2a9311a8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "90cdf26339d242e84b5fdc755932285c"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "f6ef3acd481ee2810a4fb462e28cb7ff"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "3bebdd018b07dd770698f6f1fbc3f88f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "e733721ed44951c1786904c7f8996884"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "1f83a82da473c5a22b3b41e5dbfdb9b3"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "4bd70462a528f7b18793da0f92a41d54"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "358c8bf1137748283021d921a5c0c467"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "373c4701f64f945ba807f73e6a010619"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "19f5d836746984d727575c98e7c6ad34"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "468a27070c81a6787320b4bba67abbd2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "f08925260ffefc289e124a7d1c27aa54"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "f938fd84f89589f4565d55c3622e518d"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "5b255a91184b87f0ffbb5368362d287f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "604bfb01bbd4b4c302ebe4e0baac12df"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "141d379ecacc9c329d31d2be9ccea1b6"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "a74742d55829011fbf815d474461bdaa"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "11a70d490410cc3c126546a7f77cb99b"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "472340e4baaf7e98d009d2d72ffb08d8"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "23557aa922d6381d7292560f5c1ae018"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "2a00169e62e5b1b28fbf5f7185fdf198"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "77c1e91f21a5eed6d591522b22d1b234"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "a94505b49dcccffcd400e440e0722fac"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "83b2d200348a02c619c6ee88a1ca1226"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "63a44460c1bdcbe47c4f15839ca2bde9"
  },
  {
    "url": "categories/php/index.html",
    "revision": "da6a8d858e71cab35ab095f66dc046e5"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "a11ff1e38353566f257e69c89dbc156a"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "e6a6b6e2f0865860f4b1ea510745b41b"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "3b8e147841d021754172c89fd2ef1856"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "921b66fb5790fcc26ec6a2d65da1bc6c"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "6fb46f09b5cb034c3aa4a3f33add46c8"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "5f4bc98025a54a17b6525b793d31f848"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "4e78ad0ee4a635758cc41a42e600ba3b"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "bc8b9005bf6ed226db813b5264095e04"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "a16abdef37dd7c8013bc40ba636e4bcb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "2a2579a507b2d079babe3df21ec769a9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "4dd23ebf8316c31ff3fcff36a88f4b0f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "4b2a1f3bc35b22b029d3aa0db659f922"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "70efad0624a0d1f061e8f23417cf7301"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "6024186cde83dcc5ad761e94b6b044be"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "615bc3c89eada1f7ff8fc565e531f42b"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "614101eb545eb603e2d0bfb9302b80eb"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "e488e49fcff51d080e90a0bd2f7173c4"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "2f363eb546b59f14cdcf2d5ab2741fec"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "68f2d5e615d9d5c0ea24063840c759b0"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "ff69b1d013f56047222606cc3087d7ab"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "498e8ec6f21c8f1adbf8e90b838656a1"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "8e8b49a328ab0df476de886f0ea0a8c7"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "7db06849af4d7695071a09aac40990c8"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "15b65d868c636bb7c85873b05cb39a25"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "b109febc269681bda02eeed5c1ec18a6"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "d0dca03fffe010c26fd82d3c92e824bb"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "1ac746bdc575c0ebaf252fb2c1da3ca8"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "f6bf65a5a80fd140048826b0f1242bab"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "2be98522ed163d00e56a0e179f916877"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "e531b75d6de153ffcb9d4172fa82cf54"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "3f87cd72842731bf277c08d8d007a478"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "6d6427150dab3290ccb1139854ec4720"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "434f2f01d028975bf14667c0c15ce710"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "716a074f41dc61ee77a886c518a71020"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "0c74a52d5a5fc7daef62ae11b93d6f99"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "0ca9303e32c634bbb37ba68bf65f138b"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "c95f608b510c11f80abdc2e3443f3165"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "a7d60286649dc64df7008ddee670b629"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "50bcd6d1a55b6f0f07c8dc84955d1bfd"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "dffe7e62c9d769143c79ed1d4d70719a"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "5f77484359f53c7c9ad4e7cbe9b4e059"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "eecfd3df0043ac9beab2aa7707bfa13e"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "e86eef1cf896bac0bcc8139fcc2ed395"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "978d439a77ec3020461e0f981bf3ceeb"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "4cae19aca5a6bb628f0963a9645ffe62"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "c904ef3c856624cbba2564574b164a6b"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "3bd6b1fa67b23364fc77a9b5034e085f"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "0ac9876c750aa063bc02c4472fc39ed9"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "91e4074c2759ec085d4550818ad98a05"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "b80ab29ca71c3e10b1c9eb4013b36370"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "066a24bd20563b2a4ad2dd0215160093"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "9688540d00d1396ec36bfb38a4452007"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "582d8f40502b129ff1f51bbd254ac137"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "6312f91b3f3c5189d4ae17cc54bec580"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "dccc9ccda74934cc964670239b3b4430"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "292f2801091cf5adba39714c67fadf23"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "11085f40277c043079fae69ffaed3245"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "9a36f1997d76cb3d756732af074e4a1c"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "e3f6be6afbe6037c509cded62c42851f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "526e6689f49ecfebfd7a368d3637ce6f"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "89964480b9bc1a8f2cd9d69d76ad802c"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "d60e0f1b4c4ce8857f00f04458a4c830"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "91878c8362d641bab1dcd5a9e2696938"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "a8874c458d29a006b80b22efb32f352b"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "9b4534d85cb38fe0e0f6b38ab43900d7"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "27c3235755d57f1f0a2b551edf1650bf"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "241753c04ca9e39d7f0b2a652338ee1f"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "923b32ffafae3725cfb0ddcf2e361123"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "002983b4c0722eabfbcc42108e983bcb"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "40a6ad9adb3fc7f05e39837ad2bfcb1b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "2ea7d444b53c65cd7cbaf338fa572452"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "21dcccd6124c55a221da05814e1cb638"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "2538f7362cb7235827f5800c68239e1b"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "d45e70c79d6e92bafd2bf58bb116ef76"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "3a8cca4510a069276ffe19dc86eb6745"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "19c50ce128a165ab4c4ef11f44aa35e1"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "9bc4e429e9907d142ea79992ea2f0641"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "ef4e61f76aa7124394b72dbd8b4f4692"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "e41796841c11094a7e7dc16cf404dda6"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "6243963bde394faf5f3a6c325ff7e415"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "7addd29023c6306a6f3b633df2a05821"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "6bffb1afa4034b51dc8cfb0c997e7fc4"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "7ecf6aca4e6a7e7d0ed191811c96a384"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "a6ce504397875b44275b3cf3f38dfc84"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "df08bee51cd21279c2f3d74c5ba835ef"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "5786a98db5a90965395d8a3df84208e2"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "e8af917fdc49fc189bb73885065dd4f0"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "e161bcfc813722e68e56a982a4d32005"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "48e618ce858b38aaeded50fdc5f37e22"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "c95e9a51a638f382d99c486c5ed2bc30"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "dd9f3377152855106ef74b44cf442937"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "5021a02c819ca884b32a75bee4d30142"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "d33f3fe9fbbbea5b5942bda6d233ca49"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "931d9f28073dbd8f6e523fe22773a4ed"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "6226a8cc65bd44ee96f2c188a57ffdeb"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "9b9d57e273c3fb98b77eeb77bb8145de"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "7bb769e4d3ae770ed72046f2f82a4286"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "0cfebac857d05f695bb5252de342acb1"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "ab9510f5e390530a1d9e9b96946bc8a0"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "00e82005f80864840543da26146fefb7"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "5985fd69b9a223f09a168dfe3ad70d6a"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "92b38323f539d49f047b5c4fd360ec16"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "dae410905891ee32f82e7895ed90e0f6"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "ed9251212a6d796df8f6f44f96d25b59"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "50a37c5592920941b35f2920830e43f8"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "e1e662d68f0afef73df2395dcff5621d"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "c67a88224d8b068f9ed816447e33f953"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "8b6dee415c9bc9e5efb82716a730db84"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "e2be19042ce50c60849d87c417dd0fa6"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "51e53d3a902c0eb280490f329dbcb602"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "e75cd2569f637debe4b6429e2639d6e4"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "d7457b9695ad28d8fe26449700444f43"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "97b4686bcb19ce56d5206f5dc9cc6ed3"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "3e287a916287351c156bf5183bf92ebb"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "80fe1e97892d623cf812d334895bb3bc"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "03fba1ac688b2f26799dad04b15d67dd"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "1e77e86a1082f7d7b02621ef644acd7b"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "03fa7d0c052e3eff1e928d2ebfe3f9e7"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a7db6a1ee18adf0b474d8788e3dd35dc"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "19b62179fdb9c033ebe146e9902bf410"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "091f3d777ea835dbe7a7769748362edf"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "0e432424aa1b5bfb85f98b41e840bbc6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "d00c8b656fcb60047a1bb6cb7b24e11b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "c83c8a7ce193afa545f5fc6394dd83a8"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "970341dcb639d66cf14687047b1ec28f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "0e362694ed854c3d2c76153f3a477848"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "019483f928f711c9a86a2af382431a89"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "dfc42ea393d060e2d77f86a24a8ebcd7"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "c6c508f9cbe8a29645b615283b4f94c5"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "c8656d207483660dd6866cbfda856d61"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "b1a0f9b6596f5e7768536b8622f20fdd"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "4129b8f6eb2cd642fc4a2a8dade75998"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "296bbbcf6773ce62ca63ffe15caceebf"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "414db4c0b6ffbeadc7fc0e434efc0c38"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "456220160afe371f7cca39c9a1dfd998"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "1947fcfd93188fb3112b89fabb67c7c9"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "cca4f422d2803059da1de3bdc1e46bfd"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "b6a32b1e9235a3fc19bd646b4e03437a"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "8c5f5a1f0e08a26dfef01c24dadaa069"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "4841767bba1581e9d3c810581cdcf826"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "5527eefbbc0db2630b878bf574e4b216"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "fc7d5f81c916bfbe0cf8345dc4186b2a"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "91924108239fc0a62ce7a9a573d9823c"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "06c6faab05322b5f18cf2471dd7c44fd"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "16f5d10c3ae5899a6f0680d63ff755f2"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "8cad776591d1deb4ef91e468a1f35c84"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "050636ebed8e59080ef08fe03f990a08"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "265a090dcb0aad61bfcacf7a59b868ea"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "ed4c4c4c13c1530082e9943493be6acc"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "c74d095630eb2c5b01eb8c87dbdb9598"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "05345d3b12780e3f0df09e99ebff9675"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "9edf4ff07a89a48aa62ef445db4b2172"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "908811c43aeb15b31346b2cc1e5bf7d8"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "bf00d3aacf5de7fe68011670fb9ffefd"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "c236420e0ecbd607c48fbefe297e90b2"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "29225b3b1039360aeddb0078fae41289"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "f7aa1e06ece6b727272051bbbc4890ad"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "11b6c286f793844357bf4575d558e396"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "c9ed8666bdfb7dbed9dd31f12a373bdd"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "f83df6cf449c9cee5443f0bfa9605560"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "88d220fe88de2d112a3f23b2b5bdcc65"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "b351211b6318cc80b98270af2a4518a0"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "fcf4afd1561cf832ab83cab58ebcdd78"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "70a4ad0baeb2693802df159784dd14d9"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "25526a45302efc69c05df16bfadfa79c"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "496f5dd112493a88b58e1435517b88eb"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "f744e323b6c830fec5c0bb3a9786ff64"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "b274162de7ccf81489fa9187d118fba5"
  },
  {
    "url": "favorite/index.html",
    "revision": "88efff4b859315c7c89c4db3a60ce66a"
  },
  {
    "url": "index.html",
    "revision": "c2bb488b1a4eda6bab907aa971ef9b18"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "b2562b2a39d7cb53b9ce1b7ceb07bd67"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "27ed9ba82d51aed9892657895d2797a5"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "f25e6dadf52cc14697db1d1dc6f679a3"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "3cf3d63ddc96995d419f60feabb5717c"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "f5bfb7029f6b10499469d1daffcb2daf"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "c6c2f5fe34d568ad806c13396b052e61"
  },
  {
    "url": "note/index.html",
    "revision": "ef88ea059a0618d7e76425f09250327a"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "183389eefb9e44630373ed69a7299941"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e08fbf6f7a03271a6d1faadc3cd16168"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "b91f49a48902cedb6e9266b52b7700d2"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "cb331ba306d6f478f98d87139156769b"
  },
  {
    "url": "share/index.html",
    "revision": "07650d715b48afb2f5b4e53847fecc1e"
  },
  {
    "url": "single/about_me.html",
    "revision": "4406c6ea8c427458099abd3a4ffcfe7f"
  },
  {
    "url": "single/all_article.html",
    "revision": "adc71ba8883b4a20e826612b812aad16"
  },
  {
    "url": "single/welcome.html",
    "revision": "897d44269530d9953707f7b22c1518ba"
  },
  {
    "url": "test/index.html",
    "revision": "0111cb9cd76e4556d408e7305e889adb"
  },
  {
    "url": "test/test.html",
    "revision": "7cbb795cbc598b257da9490eed68ae65"
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
