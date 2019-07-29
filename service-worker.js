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
    "revision": "581cb9f6df25c8bb784ffe38fcde6703"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "c2d30a154a72d945c3b7aa97aa9346d2"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "0e6b74cf31718e667b7d4e139d16bee2"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "802da590d86375e84716c8fc33969db8"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "72a74ee3839d1f65630ce17eeffa0b35"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "52d849d71ec92241d474d5ba1e189a09"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "d38e99dd1faea48457beb7178f8c1210"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "3d238e7f110de36bb16ee3b9ba420bd4"
  },
  {
    "url": "articles/index.html",
    "revision": "c62bae9ae85c6064191d63bc90bf0cdf"
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
    "revision": "7c93e63790c5c33a7d2fb2846438396e"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "8cad732259ed20236a893548ab27574e"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "c92af7931089c2a1cc0d1b9e585aae95"
  },
  {
    "url": "books/index.html",
    "revision": "163f9c3b7ff307467fbecb32a41afbac"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "2d964802610a83deda94802a24799ccb"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "afcc81ed1a57115fc3afc65e575ec698"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "5e29f88e962bbad811b1df4a2538399c"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "6fb039d49bcfc04d2d27d41797d9f31a"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "5ee7e029deb4e0110b67d514ab0c169f"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "e09a8133ca4da956ccfaeb34bd7b363c"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "6954d702467300e83e801b6e3c97fe72"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "7b07e1647cb9e920a003b0baf8d5b44b"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "8e201df7bf4c4b600bbb2d7628e79f2e"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "86b0ebef96c7590b75900ea91fa0ab71"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "92fa301ffd0c6acce62a9caed5ab0ccf"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "35e5fd51cd00b7c1f55fa840421178b5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "c7d7e431319e129fd661e39f66165028"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "80e29b4f278dbff89ad8dfac10eea47d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "7321d7db283dec5f52ee8415b8af14e7"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "b12ba062cd4d275077f0bd017b7cff44"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "d112bcf1f122f5c4879dd46b76d788d7"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "0d561f48c322761d7cf632a70c5221f5"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "78294a04b9dd87ff53330aed27c5bd84"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "8ba582efad5f4f0ebd3f84d1145e694c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "14e038776a56328e4de8a291a9a97403"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "f93061e914ae590770b37d6c2e425dfe"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "03d32eefc2949ebdacf57c77b44b86da"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "8d68f7ca6ed629953dc5d3bd4980a76a"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "731b78aa75552108ac32e69a7c047ec1"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "c1bfd0656f30b05558a76cb137cf5b21"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "bf2f087d08a96df980f1a7dd12875116"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "b04ebf15dae98beb60f99c825fecd3d8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "50c1e599186e5f744e745d2da7c26b5c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "29c7fd61bae4b5b134397bb26b77d9af"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "9474def7a10dbf890ad40429ef26414a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "ce72643a1b99d3cc12c94a146cf77bee"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "43f30ca10a00e9a64f201a6341cb770e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "366dc7f6fd0a3f29c6b153abd187cbd6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "45c927a3686caa5991932350ce4f5d5c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "210f38019f466bd3e70954d5294a149e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "da6409c5c563f99d77cda7abd4a4b4fc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b6a4b429edc4d199a7607b7e3169eb83"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "68fe3695f7f5c20cca44dd658d89e662"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "42dec90110973a3c54a7b472d59fcb1e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "7d8872034ec6d1b7d0c81849bfb79f01"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "065bc9caa58d006add50796bc7a10f3d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "2577650d060b287ddf81e250b288ce58"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "82007280aac8c36b6f294c9ea864dd81"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "465c3b72c032e8c151e77139bb7eda3f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "5ee1e37ef5e2d35a8f824651eca980c0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "10d250a2e5dd4825c5194cbd95bbe764"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "26d6fce79b5d25c0f5716985e2d17161"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "129e1970797ab60e8618974ecff6b1b1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "d9c112455bdd0a2c228b8187d6c48a34"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "e97a198bd04009eb5e2dd5a0cfb6015f"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "cbcddc843fa0289b8a43d5b54a18c6d5"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "8132d96abc9c41a9820404c4322445ad"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "bd7c28c6a52f63c26a089d948c47297a"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "52da7765979ba94915cc3b24080442da"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "e459380f66b30532c2a2914c49678a67"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "a69b45864802f8e366be99fe13d0cea9"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "5b3eb51cd27c1bd01ec137a98e2e29c0"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "35dd29024bb13e866c1b90b386bc8760"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "763a32b926df0de73e8f2e940c3ca6cc"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "cada2544694c5a6c4446ab2e237c133a"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "70246b62dead060e8da80d2ed29392aa"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "7f1c1974c3ff3ffa2a48d95fb1898a55"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "2cfca87190881995af657d6b408c67a8"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "920149f50b9704749001da51558b678e"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "49d2f3a265e7121fa529cb2b760ff1e1"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "78b81115ea54ec195f874ddd9984e8cc"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "a9181d86a7be9fd6beb046429f9a849e"
  },
  {
    "url": "categories/database/index.html",
    "revision": "19a49dbb6b8842caf2adc130a966d271"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "b960e4fae24715632f3dc126bcad07a6"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "6819ba0d65fdcd0836e8d7416c95f3a0"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "d4c5b36cedbd452261dd246887e3dde2"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "8a62006cf1553b7384b4558c9b561248"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "4a93857ac61a0514d3ada35d9bc01abe"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "b4036bb063dd199f41946551d5f50633"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "818d413a82071e1a2e7a06c37f3ebbfa"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "3ff729bdb9b37b19708a018a6712d859"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "158e71512a5d7ed9f564837b59ac6642"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "c6d9255bbb69328a89e2717a4cba0c41"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "cadcbb28e656ccb729f251e14b0f9a0e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "ee3f1312778fb9f0b083d250b8de5a43"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "a5db235fe9fa108460de4ec101d1c426"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "faa55c1fcf00020bd429fabf836534e5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "4992f0c0bfc4031b4c7748f9d171c3d9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "d318b0d17d66f081c4a8b4d6c2472b28"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "ff6da7a6264f659c2f7ef3ccafba8005"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "ffc5090df2c36e7b117fdd4d4aa49ed7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "0f40b35c08bae1f5dc5b0b41f9d1ade9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "f00710778bb95831e3b1d2a819dc3dee"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "f4ce171e60b056860118fbb208325d83"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "5817a23e002c3fd9dfb7a9f02d6c963c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "a6693ca878cee821b1fbeda732989f79"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "bd652c6cd10974c77dc650d84a2fd7e1"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "860183a63c0d8ed341dc892ea942767d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "ecfecb1d13315d85136bdffbe86779ce"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "0008625aeb00d4a959ba7d6ac50223ba"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "baab57ece91b5b258fb8d382b0c298d5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "1c7844c9e2356e93dc30b48584ff0e54"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "21468142c99ad7b5cbe8aae3ba273d42"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "b820be2f36bca3d543bb368499f5229a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "67bd096dd77368162db96dcc1a9e4a38"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "05b175c5da84b41a6a065cbc3e01db3f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "12e5482d93d6fc2993d085e17a586e88"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "1e0495a410a9296e5c2ad1316506d8c1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "aa2a5c46d08864caf810f49696bb59e9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "e3a774113e9ea1416849518b629abacb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "30f095a748b36da2a57aa7dbb19cd967"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "84829bdf58fcb5121486f65d83cce8b3"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "79f78e9d74502442e8e872a1c75ccd7e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "aaee690dc0632184f365e8824488fe07"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "1384095893efbcfb35b06275d4774257"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "140f51bffe157454278127af3d449195"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "12e2b14c36af8e9f0f4c2ffac1c01d79"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "2189e659c019195d0b828aa26444d459"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "d7f78c9852c7a535ce5ff46990fe7501"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "8208a95c81b6b01fe904c5dba996fb02"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "a329ec1c98407e8057c54458495fb0a4"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "a6594f80ffea0ad431f41d786242a53a"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "af846b16e20a3fba6b60b8a8ae7998e9"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "d148345fdb9bc634df099a462eff4baf"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "d88e68a88c8f6eeade933d41f4a91a7e"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "fb6992f8d4074e6db16390231b46da24"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "46581547e139827a60614ec151160b89"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "e65da4bfe15a56d6d5076814a3297dc3"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "b7f6eef74090a7ef2d05927488bc1ef2"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "003ccc8310d5d9c4709a52b71fc4ede9"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "2771eb2a47dfc4fa1e33f0dfcd24f66f"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "394bd3ed328511e44acc2129bb0a06e5"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "7d6aa31f4dcfb5dec2d7a2ee3c3d7309"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "376d18b9ccb0e6114ab3ba995c13bbce"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "797a714848667c878adabbaa80559db8"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "adf4201c39ccb3f7e0036a82e258c3f7"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "d96225beaa87b169aaa0bc99e5b5ffbd"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "efe117bd1da40abf2855519688fa8f03"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "b19b74e54fdd947b39a0060ad8cd300d"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "cbd405566320d42dd303b883c664baa5"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "280703b1603de6fa01412fa4a16aa991"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "4fd8b3280d7235c56f905b12fb0e58f0"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "a6720004af17617de4b6978dc9046be0"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "bb3855496756017905a7dc0d346b8615"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "55418c6608cf146412e96120c60c901b"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "fdaaed038cdcb9e64952df2052151b49"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "368620fe2e7f0bb4ca0a766f57216f9f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "38608311ad639a157846f4708e3bf8ff"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "f3e6ed957c9cdc4973f2dc87f4f460f8"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "5fefe5fac518e29260e807c6e9380fd1"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "63748cc6cd3d8c0282f4e01389f36c84"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "f2c2d2e23f4de4e930442243fc90d534"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "3443c07fa32b919dd630a39a4cb6cae8"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "e8701bbddc642e6b8da45c569f7795a7"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "8f89105b0fbd48748ba168a3c8c537a9"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "dc5fba1547626847b73f55351b161187"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "f61796e66e8a187760c243b44b179fd2"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "5b9e320a57f7a5b0aa30198caf8a1e47"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "f1bd9b33439595403ecb3db252a0cc60"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "a6cdeb8668317c6472eae0ef4cb50e7e"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "c0abb59785fbfd67086a752007421422"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "0d7a146380b282e012535b9936e22f50"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "6c3e7f1f30b2530a29ae43bcce654094"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "04bcff871ccf1b62c5d6ee45765af99a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9274c820d37d70723235f15d4c0e1bbb"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "9dc7c9a77c461031bd0a04ac98e67eb3"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "2dd25bee10a20a4345ea00ebcef91cae"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "dc11a472d6eac945fb9e2d9f38ca3fc3"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "aed70c8d0d4ae87ec62df04c97d1215b"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "d3c211456ee4cd36bced30dcfcaa31de"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "e41cf85a91086dfbaa1a8c356c1549a0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "333681944a8783de669498b43f811acd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "dc4b48b6de99ffcc18fcd0236c54ff86"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "62866784a98f83fd72048f8244aa65ac"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "d83a038193f847f51d95c33807dca050"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "00df07399df6a3b283b19a3c07d1adbd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "d97e13aaaf041bad8b4f4257514b9846"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "5c47fc67bfaa4c28af98c197e308edf7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "dfb99d2fbb2031aea2bab9ea69513b8a"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "755facad46825c8cd63529d7f2b39388"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "dfa7d210d046685da4e0bcdaf21e7556"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "17e5fb5167415929bf45dce0446791f7"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "6a56dd5f4977823af2da618baff30b5f"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "e252ad744ea5e2116d597c6945ff9b7b"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "7d69f4c494a7dfd0023db723d074c176"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "45eb97c4bdb6cf608002aaf35b0cbf15"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "55e6ff112eccb97b10c11af78121cd97"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "d18bdca2ec972b80a507dd018ddb3715"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "367e5a4ecfedf43753eb6eee6c48706d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "7b79a2141fdab0a621b7053770ac427d"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "b18b95658386cf5bf2dfca0c9388d2af"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "d7d3c544547fd5dff1d827806337dbfb"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "2485fff5421d1394bfb812f12cda1b23"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "7e7cda514d7fe84bd12049bc3b05af2f"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "5b469fb537c5e163af02bd83873e5971"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "6ef3127d99d7fe75f8ca25a4e0b9be81"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "1942ef3d0cc68a2f4ba4d50795d7bcbd"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a9b03b3b8926166d7e245c100de8f736"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "66391a5ea55c6179b808804fc704e43e"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "2c98e39b60260968d3e6764f3bfdaa66"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "f3f9805cc079da520fa46e8e4ab27ad5"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "589201f8ca7f5df69ec8fc29c9542045"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "48e4f37c440ba76cb33bb44ee4587cd1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "1fa2c5a4337279d81d3c18a87d560624"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "ed1144ceeae5a607d7f7a71fe62e3689"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "8a6de402921845d5d8a64df1d68902d5"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "0af7ad522d4577f423a83ce98fd0c35a"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "13235b317549181b260379fa182f4fdd"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "20445129a50d13eba4a9c7abfc9758d8"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "ff67aeb4ffd02f1668049e45ffd9bcce"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "d56ccdf271f5d7f0f9a85f96409b9598"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "00a3ab4d41a13e43b002869e106027fc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "7a7a1b8ef5a7451f418ac81b092bb588"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "da634e4e3ef8069447863eaf97643f2e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "b35ed97d5c5793dbc44bab53885efb5e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "7a288e89d9303f45044e196f9201c814"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "f21eafbea9572d2a5d3a0a721dd00978"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "4f53538fd89f6e050ec2587aeda53955"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "2b6b51bf9e25d970a89570c0564d2490"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "a9788985eed414eb58cbd97d39b4c08e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "4ad745d24455d6d02d916d5ea0720291"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "18ee524ba4c63682abc85abf8131dfb6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "615fe8f4ebb122f7bfe5258c59259bf1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "5b5b8edb0099bc9a99173fa360276d38"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "e91e1d0c9b26fc03921a91d4c498f972"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "52a72489230d50d25113c88cddde7224"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "61fc5dc17062454d3dd91b6775529530"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "2bdf6ab74c9fd1f2885a96d6e27b171d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "16292acc9705840192eedb6fe34f4619"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "f57702047714fadf695394a9529ea878"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "a2a9ec9aa3e8b7ea17459732eebdb393"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "f79e9a79c601660de5fca93359bb8282"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "b620a807ffadb9a6593a83d701fe4212"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "f37b64553dcfb5153ad7634ac1884872"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "58fd07de46ac81c004fbe238c93aceef"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "81f14c5fb323bfc1cfbb630f8f72e96b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "54e3a770ba3a994e9759ff6554600320"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "3f880e2528d362dff0202be49acc4295"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "a4e01535f6e7125e6b370df8d204eef4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "8b19d03676e9f25249ce3b29fbca83d9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "2ac641e913d69c8759344771426af3cd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "ff6347a4574023cebd2f387f351ff6a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "de40117ee902edc6f26a57161f9908fe"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "3a40b39b86078c56ff39c8a8f3739634"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "510b3d5adcccdeb8289fa40e4c186b83"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "fcbfbef8086026b7b9bbe3b55b9828b2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "2bfcb54f3b8e2d95d2afae7ee3e6359e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "6416566f7536d85dd38703bf705ecef8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "4898f932e17aa4529350e5a1b0a8f530"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "db85c615039071efdd6d7302de81cb39"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "94754b01d29c5cb0cf3b8f6d0d5d572e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "69d69e18d01a93ac0d8189871c4ab87f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "65a2c2cec882cc6ea7914fb0153ebe24"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "6d59ba021447ce508d152de55c1b73e7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "da3e32ab7bacbb076f813b82da449eb4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "db456e1302ab43c9b8cb6c67f95ed0b7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "2b6526b9870de6beb6cc7567ab523b53"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "268375f0389171be811b597a65c10df3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "c47496221b3f9043e37bdf0fcbf137ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "44c046eea1f491aa2705102cb691356b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "20df558ff6d80ffed8164d66af10b803"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "c6174a2cdb330db49a0675f8992b2dd8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "c29fdeedd5f2fee5cf3e3f173adfb33a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "fdd533fbc13e8c71c740a9416b25a79a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "1b2b9b4dcf219b29862d1ca819c13ad8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "33abb76af8eb26706b012c8a3848966b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "99baeb7b326e47f13c7e23157aad1aee"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "f0031e20787b60d02556b00a6e7e5ff9"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "a1231884d3e26ee7deeebf615075797a"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "8b7d412a7fe3edde393bb951d00bf94c"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "d21d29c27f58e472a383edf9079a0289"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "ecda78ac87b42d1f791638bb3f3cd410"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "9bcadc832d432d828c566f756090afef"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "75f6d08afa7d7b0ba387071e73292dae"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "363894c30b6e194bae44a96b88ec568a"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "49815cac792009d0b1a4353f3805f9c3"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "42bb50e813963aad5295b1aaa571a720"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "fb3a50c7cf0d7c0eff4a193067badcd0"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "c6ff32aeb4063b0636e03ce0dae2c3b4"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "2d51592d83290b5ffda72631aafdd073"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "b94a8822d0603635012fa72cfd8e33ef"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "8a0f8d4f76b6ca4534cda655c5b2ef24"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "ec09619ce1bc44ce1c39d9ca6d6a55db"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "81840b681b4132c318f17cb6dfcd5ce4"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "52309318e1a049eb5a7911b34f6d6613"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "4a8e11ba3939722a4de493ee5915d66d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "ec6946a0ffa1d096127081973a1277da"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "a421045e529ea05d2635d88c2e3ce04e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "569ca3e3c5e8f187e3c126ab13d2d2ed"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "7a6de922a32d33263dedfccb0894ec54"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "88defe14316d9091da6b9b563482c5f5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "0df06afba4c3fbb2db5a3fce6ff0b52f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "bee3d54d5d3ac8a7ba09c4c668e72d0f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "3bd736fd976e7c9bdcdfed225dd74ce6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "e9db710e71ed3faf74df466fc893a0b3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "6a98cc30c7e5b79f87407a76501a78bd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "61fb2595ed7b7c2e825c1acd6e1bc346"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "1b18765d4c9d8318ff8e12e238cad25f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "e2380931c3229f58a6208d9b0e11e95c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "c775b0a82843896d8a87e57c5e50815d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "498436c9d60670e3bf78528c496bcb02"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "107c7ce2b839f1abd0af93ad20e8ebf8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "2d6563940685bb321febda8c9f9e4901"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "05762f11c89eb6c2d7b804e2208651a4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "82d95c099d2c50f586350e54b46980b2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "0608b506abfc4cdd674512bfb56b1459"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "198ae95c4afbe7b5912bb50e78be26c8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "6f1d50ab8750686862050338d64d39f6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "52f8dd9ed0a3be0f8d10aaf6aa907380"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "9c135b3c5bd540ab71a997f6df9eded8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "5591b49641a7d201d52c0d3fa31cfd6c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "4c05603c4530674ce565f67ca0247e16"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "fde612d6b165e5bbcc8e3b112d6b9bd2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "b95034824c958f256a68461448adb83c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "910da60c6f7ed60308df572785b623eb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "391dcb622a478d2ab8bb2df87086cdee"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "f5030c894326dab19e8f8310b9cd9476"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "cab29489df38e0304ac755e3f01676d2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "056529befb066da14fb25a123aa30429"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "0c21ac1297ded1d1f8b21946b5fb35b2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "3739c7c64dd5905206f1a5acace28c1d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "a8ed730667127511321b885897fa0e94"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "62eff983c7c78076024a547f612e210c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "5d01c3351aa3bcca54ec154fd5177a1b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "3ee6f998ae0a4e9c1eb83ca36385fe31"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "56006b31dc0267d18d42a818f308a83c"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "3ed097fea25224b2256aca3991053fdb"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "c368a6fb9b850d427d077c7e27f3f644"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "88074805a406af594761fc2d6e0dcd38"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "a42178995f5ed2e6bf500545d1748ee2"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "c87cfea955d6d8d1b53e5b015e8eb0e3"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "cdf06a7dc996cf9d8bac66556805ec5a"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "762f417aa96fa709cc4b25bf10a45383"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "ebd177a719459e29ac4d72904f103aa1"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "cd66c6b2b08c94b9c748456ebf54a6d3"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "52e4ced2dc3924ce5b44805a9e04927a"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "955b265f620f825036975cfcac3de0ab"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "40df687d46526a97ce3176dd89a0433f"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "7d2502609cf7218c78caa10086b13748"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "ebada0090c09b968443740b7159e6f35"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "5b698d3252b7bd139ad5a374dd1677e5"
  },
  {
    "url": "categories/front-end/react/_books/redux/Render.html",
    "revision": "832ffdbc5c7a5619288afef0247a5e6d"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "33ffc7d4332270bda7f863839fed62b6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "2c68626b39e3dc62f787ef6bd17a62fd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "edcd7d7e02cadccdde017d7824b8e9d3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "cbd52e8043a22188ad5e9f005efebdf0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "aa1464e6ddf2229e790c743513e838cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "c0b3280835c1c65615526a2de990e865"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "3ccc625306a401456ddf37f1cb085307"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "4962738115b255dfa924a3429774851b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "3a0e8dcd38e219ad8c808438f693fa20"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "6a49f4efa272dbe23a1c2a4245e50261"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "6c8bfa31af6c10de072057725df140af"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "01966ee0d44304d0e1370d1d353220ed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "7ac3aad4d7f45301184c1f47aeaaa453"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "ace5794f77a21dd2826aae2b2bf82d89"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "51b201fdf65e9ba9d33846decee0990a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "8682b4334b6fdd6bf964b80268677946"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "464bdba37e77a0b6162b14323e57e1dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "a14dc239d3de92fd62dfd720e29a7446"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "739711dcb9a0906a13bd2a2c22759535"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "ca22aff37b9b1450c86dd8f347b1f0c5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "7ee40cdc4a6661e3c6537ff2478644d0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "010f47819fa562c81259723dbcf2aaae"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "38249e21d99ca43cc16d0684bc5f4c2d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "731dc1299613e926c64afc80b51d9fce"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "cf74ad873ae2328312351e73b0011890"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "6224c53cb139498500d9d674b66ddec9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "fdc2087c1b5222de2207e925b1121efc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "acb8272597f78297d69ed830c85b0eea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "4f03ae43950d6fda465aebc95b799056"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "dc824e5564cde37f21efd58257f487f7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "62d4b6682ec84ceca1dcdc5d8e26cacc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "b69fb2daa595ee157d1372fe297d69cd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "121fb927bdf0d323986163207e0bf7dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "68c86d7590b8cccbe59301896995c7bd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "1adc54ee383e3f6eea8aea2cbdd78df0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "9bce5e8877752eb01bdb077189ebe8ec"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "e9cbd9c74eef104e5fe2122cdb40e99f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "d5516ca40ba3950e36017e108ca17185"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "02c6ed7f0b94d1e80619877f60353a3d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "ef50a98be4860689ee9b93e1c0a7f2b2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b282b2bccddd2cd27196cd79c5c03197"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "e2eba2598bb38b6fca126f8dc6531ef4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "b07a51df243631a4c7442b513b81944c"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "344f1810e5e15f554a419b133c7a234c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "7bed5f4fe5e9cda52b3afb2814b10104"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "63a0482e176e40251a21034529df5079"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "53ff4bce0034976c0be9ca55a28e6510"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "de3220a18048d19217354d5d89e365e8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "a3a7d0404b7983afad15ffa40525afb5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "183090e89585c627cbe91d2c4bc8460a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "979d9246cbdb154bbf41683f815be6cb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "fc04107d7539622f2ec346b9be1eb65f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "4eec995cedd7ac770fbcab234d86b022"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "ca2e421ecbe787c2f54d459c3de3dc76"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "a5cf744d0ac2cf4bf22186a486ea896a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "7182c84b5529ebe0c71fc831372e8971"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "1c4b4a39ff7b6010a3d0f2ae245c2b8b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "e6d950640e22418429291c92deff2a0b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "69430044b6cdd9cf020a23d2268a74fd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "d7f1d80ee4dcf17ff7e5dc1312ba45c9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "a5a98375ef890ebc0c06a1d315e7b260"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "e85a97b35ce5a37a2b89003b5a566928"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "b0c2fa1d597d9a3d925555993b076b8c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "9f569be613fec0e815f3a8d4bf5baa2f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "cf7450a13837b4216e1c3aadf53c8447"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "f23ef5c0eb8ca8d3d97ed5f811b42e09"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "2721a43c5c387188f1b713c1b8f8d11c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "ed865147c211b6fab1ef6c215796d95f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "b551a28b66c2a11cbefa27cb46ad495c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "2fbfe0e91161130bdcbd8bb1fc4198a0"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "0ce8c5682b2f19f6ed3a1d58c5927cbc"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "82c3a8c5cd2113dfffc1ff5061a3c2b8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "32ab36704c9665f5bc774c18ffc041c4"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "fefe0d1bac59a2924b4e6adb4f632067"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "f1097d0679c4bdffc216ce7a0ac7d2a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "c256496ffdff2d1f97e5026b211bc1ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "d5c479036d3e2c3a7d1bbefd99a30ddd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "bde7ef777e89f40827a8a71b352d2c85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "af2c64f5a27bc9cc6529311f1c152e2d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "db8d74d82021b581f32c3c8f18a02143"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "f2a5f04f8180010e08047d85bed8f63d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "09859b72b2b9aa6bce00255fa23ef8a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "280edb8a56a09422c0b5dbdc15b10313"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "4761c2f66ae90cb372a985c06986eb44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "0c1a0b302bf8bbaf765a68be87d7e64f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "25d36b1e5d102126a8aa5adba7726e6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "a8f87f95e13bf733373dc75310f71696"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "676cf82d717c007fca7fb969e32ad129"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "7ac01dcc161494c5b60aa6183465adaf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "d2fded1a823a63a76e21cf925318845a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "7cbab56acaa19e2f3fb34b6553e3ca55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "916697f36b95488c62349f56f4e8087d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "8bcbe4042f3e6185398c075847f66a2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "948537108bacf2facafd67918a8c84ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "59bc45dc4ecc7846effc798507cbb7db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "fc84a9c5b9da211a3568417b1d4443be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "5a0e81d686e89095abb173f1e1f2e7b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "a6049f9bd63af435f33ccf0dc23736bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "0ff40fdc27924fe2485605604ee575db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "9dbdac386388615d9bd05bef3a57e6f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "de616691205682f958a0fd26b74fe07c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "a10da8701fa6cc0accf6980808e6bae7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "56da462c1709c1246cd713ab082d02c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "83de02753b3029d87dd6f0a42fd118f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "1b5c499e24701cb62a0dd2e406e3b4c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "e50b67acfa33f2ee51ab4fadac24ae86"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "d7722d81f7844d17cb6c7ab211d903eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "3c7ff7486b8024c394aa5b89beb4d9ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "1a7d58f038e91f45b36cb070d67ce7db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "8891c1238a6d452dbc1ace9cf2ff565b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "9df6e34b6ff1abcb8d13f6c1d0e0d073"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "94c5a64361e449a717c7eb5b1306b125"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "136fc33c64e4a0e2130a86177806d8c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "51f67fdabdb7ceded4a70aea6704f561"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "86661e28ac989b510d43d51f217a78a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "a8b7dc745394a1dbb2a564f9eee38fa5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "f77bc7049773aebf9379c55e978980dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "d220f4ee68afced13242dc1764da5492"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "29a5aa2fb90c525886a799531bf95b39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "52bdbd9e560c7a6ab9efd5641700e950"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "f8847680d2c4bbcecdbf0e12276c7219"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "0667183ba5ad0f3dd50131ec8780df87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "24ea9fed345de16a6e015384fe5dab64"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "82b485b7201d8ff5df6c37e0836b47cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "55c3ebfe64a117ff61bcf033fa833521"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "698341ea09891ad67b0785885ef3d0a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "b9f77dc138642de48fe4eec33bf7a72b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "fc3b48ad8cd0b860b85386c16314fc7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "16372c87dabb27724e3f0ef99ff605e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "a1a7346f90ae00bc5bd7d57aae5c0f3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "fdb417d0d5bbfb294c38061beed309e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "b9339140ad5987c9b15b7f19303a699f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "8e6d3ef54e69455dc536e8fb25493878"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "7b615bb9bf6f17a8a0d54942ef9c5ef0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "a245904977120dff7236cd479c4a664a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "231ab7c8d7079387c3f187b1230e344f"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "2e5319c8e80f57693deb3d50bdcbc3f0"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "c093f3d5883cab6d011c24a998eb9831"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "60d7e9c8a66990ba300f1b85041a9ff1"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "835967db02baf341ad83890efd660a6f"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "1d683ef31efde0ba90f4d8f180f3b2a4"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "f4b453c08dd8e06dc72e735b7c4fcb61"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "c0f0f05fb21e2c88c474749221c15b65"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "b4351299196a81a91fa080205c5d31a4"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "7e0b75823fccf2ba626f31e1597f966c"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "0d9665175e0cf2fba801ea5694598769"
  },
  {
    "url": "categories/index.html",
    "revision": "bf18d973a3320b48dd1fb58d53ae8875"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "226ec5e3bbdcfa3bc70a2e16b023f3a8"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "d2e36cf3b5d385d594aad2892ab9c648"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "94f11ed053cbeef56d1ba7834e656446"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "851d15b579d2f5a915ab165f20dad6e7"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "034ff5f5c2ee93f460cbf6a5f78c1844"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "377c859d019c8d2112d75e1f4e1c67ab"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "4b9961ee9182138ce86c4f10892333d4"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "c70e589d9bfd125c543de1e86eae2a4f"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "032b12d64fd744ad1e556cc252a4f1ac"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "5238db42d38b93234b2d091aa704842d"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "34d6b590b8da3f328ca8d72a2dab1fd5"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "95214c83949b3c847e4df2859f695030"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "0c4cf7c8f2e474109df50a45fc865350"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "43f018c529bcc1df970d17264e00f2a4"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "82325ef28a63e8b552d9c9f5864fb17d"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "1f89bb00a32b8ea88c1e2f332409d774"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "fbc3ffb613a3b41f426671118d474e2f"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "fb384c52439f07edc7cf137082f10c9d"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "bbba3d773c17b04326275b5fd18a02a4"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "6b9a793fcac6c00e36a597063238208e"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "f8c5d848792d7634ffc10fb1ace6643a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "db94fe05c3db1bdfa41d3fe5262c58a7"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "c0bb33ede6a8cf06b7ba4a8592d36351"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "17ef93172710dddba162cb2de98f1eba"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "a8a229be956c3869c14e3e1312c2b52e"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "c7a4b00aba0bcb335f0cdffc42b50d76"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "4f2c2da5922cdf027265c1404d4b079c"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "5012e401803daf109f61035a1f9687f7"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "4df344f482d864466dc4b79ecf9405d7"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "6398d63e87a104c38a482b996700c734"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "dec1b5eb1f4c917486f50afcdf7b50bc"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "7be65b5425081ed41122de5c85a0052b"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "02171346367c271174aa86279febde66"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "c4248940f0b3d0997552b45d0c666216"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "1ed789c4350bc21ae222dedb4784d3c9"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "cd790889e85ef7cb5279186c75d91cc4"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "18ee08b4af01f67c2d7df83693cd8c43"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "f3fd2e2cabac044dd787392c5ebce77f"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "0d93b8ebd149b85761b398d69057ec78"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "da2c9b1beebfe1d32c0c929373b9b7cb"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "23c54eef850b1671ad839ce43b15de8b"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "1eb7aea1806974e8026bd419e38feaa4"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "7263b0f120f8d6685d2eda2bd18639b4"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "f498f05d01a37274c19dae55c66d08aa"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "4bdc03e34e12f72cd4d18f1fdd455ce2"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "dff391d6322e91307405e7f492c9e9ac"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "4d00bfab5568e502b8891950b1907f1b"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "67ef01673994980d22bec5fdda96df85"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "0e6ed2e50abb5dd34e8035e7a5ba2470"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "201082007b2944af76162b09e977f749"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "9afa543c40448b5cf9c01816106d9d51"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "fa6e3d22f4d83c1abb683974d5f2ed4e"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "e83597b54ac404e2895e3311b83b22f6"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "8963129b9cc10dd163d032e78e15c283"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "36dded1d3f3b103f77bdde13bee43f62"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "09f6b6063e3d787bd71e4a5657c01dc8"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "4cca7566c3d0e06239310feed38c8583"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "3405b1bf1c4001c5833cf329340da4f2"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "0de79724282b782a759e1f3dbf8f5fa7"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "09dc59923ea4a7eada932b6e962be6a1"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "e201151defc23d17197b39d4db00d298"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "188f5c8e600f9bc2a68adb64510ceb7a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "3a462ebae2d911090318d352df4bb1fb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "ef115e64c503e9574f0ff7c118ec3730"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "fc47c9c0ee21669f06b3c47ce1a488b8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "c32bdfc8bd61973e9ff40cbd237f80ac"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "1ca014b2390eb94fa7ebf441ddc73dd0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "11483f460b1c0f5bf67ac713672a0136"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "db2722db2fab9c176a544d3c980ef0be"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "4a893259ce12874280f2d67c4e9ca6be"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "f921088dff7f4e9f334c8bc27f704749"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "55be56e70c6857d1c75b90b411a15b21"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "8f30c947f290d1333f3ea34d59eefe28"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "08737957d20a7839359e8bdfeea250ab"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "04e9753f043b44d8a9252de76face710"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "f1abc4f931e238291919608e64c19c99"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "2711ad6d110d2b5a8ce04199951e1011"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "67e593d0d0058c84c5dbbce526f6352f"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "e7db4932d01a0523da08702c13d0238d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "b2895134f8944e1dd83bbd46891346d0"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "3a5a575d99853769e5bfc3cd1f25bd75"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "bc60d9cbdb7d4f31c97d54e2ddf6f9d2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "2e07b016a563a6f7ceea58417b1e8acb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "2c7f31c0178fd653004b1b11ba941051"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "b92955fe6bf1cc786ccf9e68238b5fcf"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "6ef6a93767859b36426821638ffc1d02"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "9a12a3c0d02bb86b8012fd73b91d34eb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "ef94b08084b6357d6933b75cec4c146a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "4292212ac022e956803bb2e09f280e77"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "337fa86fd0abc891b8ff27e7f1d95ef1"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "a3e29af4157be6c82cfe2791ebe601c7"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "82fe18b043885c8925d445f9193d2332"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "d6199db7baec2b5de96ff8ba8e8edb06"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "f84a2236c7e1ddca3caa2a77caa77277"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "b939f58ee2ad216c98fc9a689e48e682"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a0ade84b607bbf002e883dc3aee23171"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "94cbd5e700e0a68b6ec3a0b503bcef77"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "1f7669f528e2282295774406a26ec753"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "1706784e5e13f4c0baa9a0d5dc9c5a7a"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "863309b443dff4a57246796dfe50a834"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "2f995aef4deb68b8360111dc5a032cfb"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "5c0442f99b43b129144979fc2e02a476"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "56dca7f8e67998471bf9f5567c8aebe7"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "23de94ffcfb4f0d9d2a155b08bd64f78"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "d199a162ddd935b83a42bc97a95e1ae8"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "7380049dacbd7476b3120a55ee09fe9d"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "d3fccfd8ce575f0810f8435abf788761"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "e3540315dee62c777c45b905f0706144"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "cbfc214f32a82de37300d364fa84ebd3"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "2d4ed2661e367ee7e71d8b46a4bcd4e5"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "7568d015501b60d02b6ea154e8e9b55b"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "2b95304448b70ae61cc16a629ad9cbf5"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "77aef862a63d60dee331bb9a4f638d43"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "7fa337f20a7277470939aac7831ea8e5"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "57c749837569df3e306f442bf7a2f57f"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "3f793e887de26afb497ee4aeebb390e1"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "807b8986bc8ec8a0ee9151f54d620380"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "02f84ce52a8aaadf85c0203a516d8f39"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "87dcab1c6538351756e01de9ebae0b1e"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "9d2e3f0f8cc4af250790a4e17e9d5311"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "54dd1649903384741ce641a1d28bd7a5"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "454e0bf7e15c0964303d419d0e68f190"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "a426a23f777e1a8606e0bafb142b1e08"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "3808c57cee630eb16b4ab470171d6f66"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "35e335eb5be3dc5b0f174c48362ccc74"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "2b8b3295b9531535976aac74d098a855"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "1a44517bd77dae2f8ecff558e1534d7c"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "5fd8064db07003aeb3087bd3dff68cbb"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "ac1bc19a56d603284d60c14e9fb63759"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "ebdf3b322e80b7ae59215096e105bc24"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "a4e636b62d4005d38a39c2bdeb0958ae"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "c1b36f2777bfc46238fdfa73840926f9"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "6382dab6d6d539c3916edfc171782654"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "d2c81ce71c230175b8ac8c767ebce310"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "098e543aa217c6d03acab0ba820bc8dc"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "43f20cbd69e81abb3991ac1cc74088cf"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "63297c47a646d4cb5fa1c249ec95cc11"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "454eaae63d4d855e2c030e5f926c57e5"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "274e66d000d2322a78208774b01376b5"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "df1fc573ea7248edc62d8974ae869986"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "ea1f7ce75cc7ea5b743ac948aaf845fd"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "0898ea91a9d8ab94313f03a2498066f7"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "10956702b33561bb9d36f997209fc985"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "b9ebeec98c8d9014de996fb3714d07b5"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "5b6f67fccc9d0545de64306788d247b3"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "ffedf7effb2d4a716d26ba7d67048815"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f673222de4a1a0cac97aef7728e9444a"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "8aa86824b06bb5a16941a324fb60aed4"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "ae816bfb46a68c254e23ddecbf9a0064"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "13371ea1d97c8ff3353228836822cd76"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "25b75f068cccc5e825f3ab191948ef5c"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "8ac8a0791dbbcf52778c1a1a8264e79f"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "f45a3d65c1ce9669663866d85109d6df"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "b9cbeb65cbb4ee7004bd904bbdc112e4"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "9a0d7bb25f00986a733501f07f6663c7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "9e856d1f246739f2746bf3922472c68d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "a54d036a03875e22e7aa1bfa2a3c971d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "4abe62dc3c74f2377fabb521c8c334c0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "2c57a99b8ee8358ed667fff4bb155584"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "43b9d78d2ae50ccc0cd2cdb4976dd7e3"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "a4cde3d975b28b7e1f04ff554c704280"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "de256610446940e390dd0154b353e783"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "a9661b888ac3eea9d9559d757d4f468a"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "7ff1c31ae913519aedba109d67d5e023"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "a34a49e4d3572b9940e5780b9db5150c"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "1ff79aab0a18b443e6e6cc21df29c990"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "bd5123c80be1c9b4f97d7bdcf2b95e59"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "17e487c6ef02d2b775977bdf017ec218"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "beafae9eaf21c4d9c66b8bc15df80f14"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "3da3b46c53665cff487794da755d838f"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "2e4ee1927ec583a56a97854e5719cf72"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "e2f4cee9bc1cd8fc5862bc294a6bdbb5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "0d90179020ba9fcf3871d7cdad34fcac"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "63cbc92671dde745a22a8a83031f40e3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "f97e3f89babbe1a7ddd20f939d0a6a8a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "0aa31812ae01b6e4d522fb6f52a4486f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "1dc371ecbb693461c1025c983ab5e32a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "ce37c62303c2cdfe33415b6aaebe8db4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "06e21757d3d86c2fc724a7c519aaecb4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "c54b1ec87fa6e8c766a5dcf3e0c93a53"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "e1ff89d82a56520bb55a1952de7cfd4e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "6c3ec7483040c3af8de7a3f25d59e463"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "f31501b1d751ceed8c9e900b5fcb4119"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "dc4cf96737ab04d747be5621b666b004"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "342c54da69d1827dc487d4119b8895b4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "c9611377641944da163531883ec9e225"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "12ac7c5adf3774a57a0e9ecc0ef5bbbd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "f033dadf25e0af7cf30fc1a8a2b13f4a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "c3d36dfc4688519898df0be7bae21c6d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "c3638eb859911f868dbf3228d10d0a5f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "4ed03291ba5aa0c14065f0285d09f4d1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "d68192e2d8f9f1777fa5c71ccae5c859"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "28d698b535e8d9b4178be9f1302ff222"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "ea6adb4a565f492e6a80c8a22be36d02"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "b116d94e85020565643022b15b2122e7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "8e4eb1dbdfeb183b9f7e6d340e6bf675"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "dc984329f68352aac2351e7bc60fd244"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "af1f253e4d34e52554b60e3020b88855"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "f5a5c2eba9cff0a8bc05acfc3cc562d6"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "72820663dcd606bb96767e3c3e5c7ac8"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "d846dc30428d64408116bf120610bd54"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "57d3b5e49d46b91028b3ac9625853032"
  },
  {
    "url": "categories/os/index.html",
    "revision": "d774d21c0cdbf9feede6d8d981a7b000"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "b2577f5efc09c2220ce3b3dadedb899e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "3159eec834d5fe3f91d7625fb69005f2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "659ab15b7c30835d9a72a592162f1121"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "bda7e73272261ec92200ca5c482f77e4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "bd0c6f570285ce784dab79ac089fc350"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "608787c09e6f2127cd66fe463379edaa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "f4c1ca2551bd6f82b0f1817d553a1168"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "2b85d9c5ebfd3c58e1e176306360fd56"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "70390a6972bbe079cf54536529135872"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "2b2c8f58fb7042a1e34e8351975c2b0e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d3b2430a9c29c3bbf31086afe22fc1ca"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "00f0032de299dc4a169d13c42a1667d5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "e1bbbe2838fb5694205c9d19ed02d6ee"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "f0e0b3c5b16c066c8621dd0c80a27d74"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "c259088f09af81b94b8f04fa72b456e3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "9b763998902065ba2c35251fb36b8c97"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "b3bcb1019dcba6d607f2ac134a78cc1e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "0fa179371682fa97ccf8868e7380217c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "15627a244f86dd2bb138b714feaa0992"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "baf415074956e6815c1ecf2d0bcd67f3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "ef3756b16bca818ad71d99a20cfe14de"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "01072c387aad90d8ded9085f65a4d6a7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "762a4ea56ae699154417d17758797b01"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "ed0f4089934fbd8ee65b86d17ffbd871"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "ff1d960a54a8c704ed5aa9b03b9edead"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "1e5f90d528529d9116361dadda1e9b28"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "fa60fb33adfd01d03a7c3130dd2b71b1"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "2fd09be526ff581a41e3dc554f6a917c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "2fb835062e120558c957232dd415aa54"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "c58f369176fc790d12c1a0fe6a3b4a4a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "bcee2303e705d11414fb93e8b97d6e41"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "562c7f52fef93904def2a70b77b1702a"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "3ac8eb6fe3dc537cf2b8ad2697cfe831"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "83b95dc22bf79b462bf81cd625ca640f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "124866bbe6ad0ab0646a3c80840f5276"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "71d5b54b2aa13bf812efee497ce69b2e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "e50eb9f476b74e5273e64e5ad6ea4bbf"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "8b2b962834643de496ce93922066c774"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "ec1cdb52d8cac01b71808d3b83a0e95c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "6a99e28b97e70436a530df82545b9036"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "aecea157c49cdd6898781d5f107e1e05"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "552f5f171c7bea3482d39a8fd0102834"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "2b2ccc5646b8227ea79a9d3a7b746b18"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "90b59b719b0e936910ed941179327e82"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "7cff8d60205da4d6e7282d7ffa6225ef"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "a800f6e568b0ddbcb2362da173a39846"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "45062b7212bac2282692a337bdb863fa"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "2fdfea6b645975fb3385963dd121489d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "1df4cbbdd645d6b2bc0ac7ab9a83bccf"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "dbee3a73efbf377f14ae2d697594f876"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "88512b92d6847504a14d53f21ba1ffdd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "032cf766a3bd9ed7bdfb77f1cbfde6bf"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "e05a618ce4e77c0dbe89517d118b7aba"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "189c8e009b91f68e6adc00428ad21e70"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "4b93d190b22eaa07628ce4eebf0f85e0"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "8c940ce36d27ad6fdd2004eb6fb131b9"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "e4f3c7f24521bf4c9069914dad22da20"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "9e61cb2e28fc083b99e0a690d57bdfbc"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "cd96f0ade0f68fe05dac3f5e7b763e45"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "fad95664b89b350b54c042e395426ef5"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "76a6ed3a698181a9c7017b1f7c0e47ac"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "9d515f12700a8292ee6fb5e7bd11f7c7"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "3019c72a88819c5f87ab511cda4cda96"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "d12a28c96c1ffaed286ef9570b6b6120"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "bbbf7eea3a2a894d468a62d110087ea5"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "81e23a65e4acf8014c4bec5a26d7be2c"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "a5805e09bbb041cfec97546f4c6ad1d3"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "0457723a1fdcfa14f2e248aab02ea569"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "e2ae35c9c497a02f7b9999a6fec8edc9"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "e67034cd518cc418774f64f6a4dc9d1f"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "0d8eb3cb3934a8713870589ff977e776"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "ffadc032cde2cc068e2d5a552c55b761"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "3fc805b1057e2773afd655131927e4c2"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "8b60c2f4a97af0b626cc730414602dbb"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "bde42fa5ea6478ba89e00e4430837a91"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "2422cd5e95ffa6b4b5a08932a2fca22b"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "de4f78f257ae6004032a9773e93e554e"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "277560c4b6f8e0cbcb9af90a096f16e5"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "5014f73a623e27f5c2230423ed7b1602"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "e3efbcca7b0d4a9b24446588018b8c91"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "00d90c1008af33495f8aa3a8a002d5ca"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "9e2cb92441390393847b8835b29a40e8"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "7d06be621a72abc2638687a8be6bfbf6"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "822ec1b0593063145d4f57b4f1e3fc07"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "21a4204d27527af200eb19e9785a7443"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "4cd370364cb529ed27b0fe193461b85f"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "2e7597c5147501994f89bb2d8c721146"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "aeffd47d8f8d5c5242e9420e5cb74ded"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "465658006ae24f39b5ad5a636777b7f9"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "e8e0e6319c04ce82195d36aba54799f4"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "f8fbeb515490e5b79957706d6b347487"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "5216c86fe3e9d6ad993602a5d8c8015e"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "e776b0c1c57f86b3a791bcebbd92f321"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "03277f03708e89626112d69692170738"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "7ff61c852099a60292546900aebf371d"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "ac56f7d22db6c9c4a7e190b1785c29c7"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "096c0ff63a0c52bf645e6f5cf8641b9c"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "821f0d3a00a907bbc20af5978da78ea0"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "5ec36bcc92d7e50e1411bde5172c2824"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "d1652f45711462aeedd3b449cf4df57b"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "bae49014f86fe786581879537c021c6e"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "e0de2d6ad7a48de9aa1cabd6b1987ff5"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "189b2c16a83b3ac069ffca3fda445e27"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "0ad4a72fd41bb767936f40991d731a60"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "7afa8097d55ffc8d3b5890fcaf1d6436"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "972dd064e96accf025600cea95fb6579"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "84598eb81edfe6c792244f8c5db57a90"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "8cfc786d810e4d528495006f7e9bf87f"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "d43e3b7fb7b52c0882b34b1a52e9b79b"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "09576cee2c6b1786c7717ae2197d789c"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "1d9a0132f682c523ee89be769e63b62f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "bda7d8fbcf50b9b412b613f48f735cf4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "5539c8f2362821c64e38f799f64e0beb"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "90509a0d58f33623081e198c72bb99cc"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "a87fb640c85d31a8f33c06cb6e60e08d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "ecb08c4143f08485dcf562bb35256dc2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "f761a7d523ca754a6c5a0ce1dece501f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "1635d25e98c366a4ef2384b4e5e7e5ac"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "2ce1e621b24282e6aa8d5c7678ff8894"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "6fd8b1757755d90e01ecf2db29b26907"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "18e446ed33fdad3ab396c7c0c0bd1d31"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "29d72f5a54f6a0d908c1e8befecda834"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "3ecb3daa7a43cb0f0bdca513799f1846"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "e62ad24259d35e241021cd2564bce3de"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "2dc0a4c8d5234d6923d040eb1b5cd35c"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "0ea91052684e60a2ba60124fcebd0607"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "d79b0a9ec315d7dbbd060861269f8cbd"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "16c4152b0afede5ba5388b654e014f5c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "10d5125d70ef3f4427d0baa1883d5ad4"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "f6fad2d01c51d05b27513e8bd00a2d14"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "20163f02aec455fa3457f9a565deb487"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "517c147b594b9cae3bc3251b26aaee58"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "dc811394389f53ae3d0c870634cfc7d8"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "015d4ccd120711c835c78a23adadd05a"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "073de39b24700b96d2ac0dd1a4eda944"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "1519fc1c2cb57f6aae7743ae1558f675"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "f77ea2eb8411a81f4c895554f61d3c4f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "edbd8def7c1c24008fc6056d5c0498a1"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "3c6797c024e3f354cf25c442d56028f2"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "da45872ef1b8eacc50a631184c90d814"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "012b9d8a5a271159f85bf92fa827cd14"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "46b32bd48f99072946301049d1902bb7"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "ae42a51bc740ab5bd421a3ebd98a40dd"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "093d5b2346cafba5e1f293ef595b3d4f"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "2f37a3494016485ec0a8e48faaf9cea6"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "57078f4f634c711028c4f9981e2a8f75"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "0e08c80776c1f60568de5a02a1eb2d70"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "eb0c9c6480cdb7513ca9525cdc61fdcc"
  },
  {
    "url": "categories/php/index.html",
    "revision": "941996e991670754e7ccf5c0cf7f3ca5"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "cfb43f4fb80c69e41e49c7f88dabc958"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "b598b2c6a8a16b93f6aaf9fa7c2fec84"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "042bc151865799d49bdcf8bc0aeba28a"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "a6039e3ee7faa62162e030ab398e13a9"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "829e4bc7885042a090fe01334e0e3dd4"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "8a2b92d5dd892937c9d4b81258185f3b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "3445424c7218a1b43172bfbdd1b119e6"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "8235408100aeb2f4a8bff238281bb418"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "9245118cd778f6cf8fa35a22b18431b1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "677a41c22777c42aa4e7945cc8d2d73b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "9082744caabdf1f38cb0d141a3b08cab"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "c08cbe48cf783fea81925994df835b20"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "65ece97647ce8c4e15c2638ec32a54a8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "09ea799de888a2545457a18109f7601a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "a0d3345b0b280d4250364a3df90f87cb"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "c6fa5056a8efae07debd8b9ea45ba5f1"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "a8f2e2edc656da7b76835619f5a41a18"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "61139b15e24dcf5aa1c3062f4561dd7f"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "f55d24b77bf9af7420e03fbee2b14997"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "3a5a2623d31a858f1a5a00afc5fd73f4"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "00930182f1af8e046d56515f8004dc76"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "836f202ce51aab63006bdd27276e1871"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "643ed6f19540da9d405c6fd830854686"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "5abc02e56050225120c1efe904c59b8a"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "a39e97e33d807036ec393f3dfc1d5baa"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "19a60f179f5c9bdb6769b2f29fe5ba38"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "f8ba60023f0e0899be770fe99d46633b"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "ddadaeb493f3d01662f97e19bd9371eb"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "1ae53a671d095c8ffa03a0f67155dc60"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "26cd64f0c0a6ab48960a6a048b7ed4c3"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "9e9b056395080a3c0fc1ce2fe1eabbea"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "2abca0ffc9c24e960875f1d206650761"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "9ca26478e8a0c780e881f9164ea94b27"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "9c2474ec6516cfb02da7aa4d563a148f"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "aea641cc64d69660515856b819677ffd"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "0d21765bf51337d917ac76790ad6a083"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "349de02895c10c287799fc0d57939153"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "1bb306618b18fd2aa377913a23eefbbe"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "707e323c9b8f817728acb10190b4760b"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "d793994fa8d6c2c7649b1108065ecf25"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "e0d8261a527d46ed0c7fd8421810703a"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "f53812aad331399f23ed835f5cf2ebe7"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "09386ec07c9c79524db2238e4cc54274"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "dda74cf45beb6cd85fc6f63e2637eda8"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "22a90788dc5abe9ce98ebf139c285de5"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "bd2d0a39c6d736aa192b6a64611fe11d"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "f2b0d1367017e7db810b7b414d53aedc"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "388f5a5896113ffa694c1db33c46fccd"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "dff5875ef8d04edb9bdeae542cd94b5e"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "e7fb1a0112dcf8cfbdfda7b8b15d35e2"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "e29a162be5e2c93b4a9e995ce7368dc3"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "464e23209f4f52e0b4ff13ed790b121e"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7a7e79819691ee1425441b7f303fcf27"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "59e18efa73e833d02c925c2770d36d11"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "5fb557a7cd823bf373eb5578afef4814"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "f1dae78343e22805234673c124a7a405"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "f6e47267e9749416227078221469d773"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "c7e6e9740881a92703d350584f83506f"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "f20cdd17538a8d5c2ee9b5f3dd38db45"
  },
  {
    "url": "categories/python/index.html",
    "revision": "cba55632e25c2fcfff32e104e977fc53"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "92a0fc8ae013da5a229d08f5b79da90e"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "e50bbc4d8867b9bfd41e56fd1edeb9d9"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "3208c2db67bd8993ccd03915be0eddf7"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "e2c095e4a2d566883b838c52e7b30a45"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "1751c87468ea122b697fc8af49c01cd2"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "539623dbae0fbc53b99d51a686bd3b23"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "c00da23f5d9d80b3a92375bf8b8f1188"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "777aa5cb9f240411f8f9321ea11994cc"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "3f0532e39a1ca49fa89b672e4feb4535"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "b72facd4c3ed67512f96a2b74bfcdbd3"
  },
  {
    "url": "categories/system/index.html",
    "revision": "9a2666c01de5e9abb0702f3f7ed25db6"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "211d9faccf350c6b743d70c573f1c2e2"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "e09736ef6be32f58107ae986389fbe37"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "86cc270fcc6f6a175d035de0cd483004"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "7193db210a296dd6fdb12a70e62747cf"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "1d1e5fb0dbb4f07823a2d85ad014ca47"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "36d61af662ea82522852662898dce584"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "e62f051479dc6a9d750a617b4c01d171"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "4b56e5ce04e4ca5dd4d58862ee75bb7d"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "bc62a6afae8d7658465fb20b0225a394"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "4aeedb0c37d7f66b9b3a5cdcd43bbf44"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "a3ccc3aeac422b03e35677dbd7c159cf"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "501fb8930751186c90115365d59f3226"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "488b3a2d4d01ab67181561cdd66e9eb4"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "91034c8d602601ab2e1b0d5024cbb545"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "f01735ced957e8d4283e44bfaa986f9a"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "afb474577e7d27fa65053f28f0a85612"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "03b50724a687849e8861024e0b5d7f89"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "6058937973b18d1eb1a19e1f2eef57b9"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "4c224d1c12548583f448749792a53883"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "a242505fba60e60f00abe3fab981874a"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "b1e5422e4e6c79fdb7fcc35c416c63a1"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "2c4c23f69848d2a69d9aee0174590bbd"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "40ebbaee9562d6c08ddc28871c6cbf5d"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "74a0314616daadf09bd40180b49c2c99"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "3722eb088a18d45684212de1ec7ce0b2"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "2ec35feeb2cdd91ce579f4fb770f0f6c"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "210f10e76d3aa1d8d9cb7db002ba5b01"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "17673804469abcd9673e6db10b792f6a"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "c323353cd42591e03e529d78522d37da"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "12f1ca8ece2359c59d0f673498157d66"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "673fd146918f16715faa87441dd63152"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "10260d39a2bb392e7cf57244e51345de"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "213628399eae90b918486bdda9d25f0a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "3ac2f4266fa7973fa3c77b9e9e713de1"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "db6dcec470c386fbb90682ff8716128d"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "190161ef62f282e463f7469e426c58fc"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "6b79acfc9811197dfb97841f1223c44b"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "b70474ea4fb1edc5c6c0b4fe4680b533"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "19b1099fcf413cb231f36f34063ab503"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "d06bd2d46b46645299337607d0453544"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "aabb3312bcad044c8d4bdcf34c4cf7b2"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "f970aec317e7773583b676af6190d11b"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "2bcb2cdcebd79e702ba37332837abe4a"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "8d76539f5d672d54d9f3a244dd5e7fb0"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "2c36a35ca44bc5a31070da353ed0703c"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "ac9da13c1fac2b402362a6430b9c5db3"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ceab965868b29fe3c79d7dcfb79181b6"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "10aa9795ca19add1cf423e397644a280"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Config.html",
    "revision": "71de5357b9ca56d66c0a975951a947c6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Database.html",
    "revision": "2d84702a034bff985561848a3575bc52"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "e421b526072bb2b3ef9c8637cb075b15"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Keymap.html",
    "revision": "fdee9b64dc7874da73e409ac51f53069"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "8c2980338672675b2b47c5e3e70b7768"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Usage.html",
    "revision": "d3d9610428f15303e681f1ac115bbb00"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "0b66fffde379c97d6bf9bd9073406152"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "a98fe2099e968e26d2f7b82237cb7a21"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "7c4c14115d3e8a7fe618289644bf6536"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "00d1b1eed311cefddd2c7179613d521b"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "9154a13d2404f767f70c081f2e2997ac"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "2572c40f88df66951310709f48a4c637"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "fdc916af80902c044a6fbff44c45b5f7"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "fe15fa85477a868b3b2add1fcb359a84"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "d49c382f912816c16f8816d7d16cf0e9"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "538095a756ebc499f7adfc4d2d7b8636"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "e59dfce440ef66c86c0a9f3aaf64cc19"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "4403e7a168b6a4ec4a82f483a13e18c9"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "7184ab82834b9b0e86e4f901b12553d0"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "7d75de02bc23ded38251069f4e7f01cd"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "7e07299297508ebcfa7feb7810968a12"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "aefd968fcf71877a0f1685880b6d27ee"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "1d19d4ec4bb5dd30ae1eeecacc168836"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "be1d0c97f35cfa2b670e8a0dfea8c091"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "fc50b669050757e5a361faf015761891"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "c96b0235299d26c97af8c1cc069854eb"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "f50357a44d5211bbd98aab0144cc6835"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "b516f615916f2e6c750c12ba00ced580"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "d6a76efdf540dd66ab2438717a32eab7"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "36f5e1f33f76168f0a3c74f71801b49f"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "6b7fbad5b604f9044da792f3fdb1926e"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8b6630916780290dadc753b977d6219a"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "f5fa2a458b8d649b0fd7e6afd1818941"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "84d25e1e53d2f549484dd1f428810728"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "90506281fb5b8aaa0dffd4fb99e18ac9"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "13f4853b39bddd9a7e6d1863d025cd3f"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "89fc8997782381fd651b989060ae68c0"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "abc01ae6dacc0bdea956e01ebf291ba7"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "99c37cc844f0913409d23bde93a9b010"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "0bfb4f3b3b45bd56fd69029f3f64740f"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "3f0a1d7870ecaa6451db22388598eefd"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "07d706254970e6f00caad3a35e195635"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "8003eca419011454d169b35c4ec848ae"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "1cb4ed88d4dc13239a59cb10fc033149"
  },
  {
    "url": "favorite/index.html",
    "revision": "e8d67a845491d20395baf7a6744b9cec"
  },
  {
    "url": "index.html",
    "revision": "e348b04278a37d2469c7b356ba0e103a"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "5e3e9066d084711aaf5e1032a23e1567"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "acc05b0b0d86d9cff525a94d09fb78ef"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "5af6f68862910ea75fc5f2bbaa826deb"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "5cd462c2a13646df6662dd870bc81150"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "9af8eeff525c199adcf9237d6be9db02"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "b472e39e4bc4d750f64f5dd50dbc8549"
  },
  {
    "url": "note/index.html",
    "revision": "0f8c89554b60447ce9cbd5739bceccdd"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "374511a085ff5142837e53551febc1dd"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "f0ac590a587116fe675de147fdfaab7d"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "fb999710a96b9c88386f25338e05d8c1"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "7907a0e5cc75b6e93d908478111b643d"
  },
  {
    "url": "share/index.html",
    "revision": "366a4a2816ed569cb7440185e6171843"
  },
  {
    "url": "single/about_me.html",
    "revision": "cc0fb4b2e31fdc3c90bb8f4c78a7361c"
  },
  {
    "url": "single/all_article.html",
    "revision": "813c06125974e8fe719d3084559472c4"
  },
  {
    "url": "single/welcome.html",
    "revision": "88f00669bcc37f3f69dc09993ca2bf5b"
  },
  {
    "url": "test/index.html",
    "revision": "989f0546f09e66bc07bf946f49899f1b"
  },
  {
    "url": "test/test.html",
    "revision": "46a10dbd7bf59ae6caa2697eb4784658"
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
