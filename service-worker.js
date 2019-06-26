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
    "revision": "db77261cf34e213a243953f3e5582e62"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "509ee6fbccb873dfd48c96529aa69910"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "4393ce6d2fa6a06e6ef75c71ea9f8889"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "6fd71afb7fe9f6bd2bac50b6027bff33"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "386c9cdb067686584aed59e9390d1159"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "f269e60e1820da93be3b1080881633bd"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "0cc9b160131cb8e5b0529753dd8e0bfd"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "e874b37b79dace9754636e598a3d2bad"
  },
  {
    "url": "articles/index.html",
    "revision": "dd6b009b9a71967b598112c5d6aa87fc"
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
    "url": "assets/js/1.8e760262.js",
    "revision": "98fe6ba13e527d8c7b2bb53c0e59a131"
  },
  {
    "url": "assets/js/10.b41ad964.js",
    "revision": "14ee3c9c6ad67b64845cdfd61f9727d2"
  },
  {
    "url": "assets/js/11.0308a93a.js",
    "revision": "e45e95472294b4751ac895adec2f9db2"
  },
  {
    "url": "assets/js/12.2066d374.js",
    "revision": "4371b782b6669044e0a5cad777269b67"
  },
  {
    "url": "assets/js/13.939c5fc0.js",
    "revision": "6540d0d31369824b4b95fd66a4c53b71"
  },
  {
    "url": "assets/js/14.d614af6c.js",
    "revision": "c459c95a962e385b14f9a6b443103218"
  },
  {
    "url": "assets/js/15.bace0a72.js",
    "revision": "6e64a4b183d24a192d50ce910749d4a9"
  },
  {
    "url": "assets/js/2.d2951703.js",
    "revision": "68d9a85a42012da86394284abf7d2731"
  },
  {
    "url": "assets/js/5.6a013f9e.js",
    "revision": "ba6636844e6e3fdcea88c0008e36acc4"
  },
  {
    "url": "assets/js/6.f1c25a50.js",
    "revision": "1d91b544b484a5a5f8e7e9f929498da5"
  },
  {
    "url": "assets/js/7.6348a279.js",
    "revision": "a435f7fe134decb950d044cd5c918db4"
  },
  {
    "url": "assets/js/8.ddb55fea.js",
    "revision": "b688ec2049265a44fbb1e46ff4904f83"
  },
  {
    "url": "assets/js/9.6bfa35ff.js",
    "revision": "e39f4883a57bfc60192b2e649540f16d"
  },
  {
    "url": "assets/js/vendors~docsearch.c0b4a593.js",
    "revision": "03759a6d68eac8d87b616474316e0458"
  },
  {
    "url": "blog/index.html",
    "revision": "e13dbed1834e6cf8d4284fcd3c4ac478"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "63a391c1a860807cdbb00a054afe4daf"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "963db23d5e4d32bffccaad298fc2f230"
  },
  {
    "url": "books/index.html",
    "revision": "c3b42daab743d3530d56c666de80785d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "d4fe2b390d0438a174eb6ba51a22dc00"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "6eb718ac5779eebc1d33cd5cff438410"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "5185131ae78d42bafa7c5dcb6185a7ea"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "d9044bda804d839a67ec5fa15e426b69"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "b74c9ca4dd595cdb9c15bae9a004e215"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "f130ff9f14690422ee4f1d797703f8e9"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "18af01a99b690650f8610798ff511e07"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "857f7af569e0b64ec5d204c017a1525e"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "18cacb2083b340e11867be4b63f12b8a"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "6c43dbab9f7cd52e9cfcdc5ef2778aba"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "6c6fb3d70925b39a4ced36743862df94"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "6c4bd294724905bb89a3a69d4686f811"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "8c604fd2fea888399ea87489db84bb75"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "8bad76d5fa00efa6487a97349c44db55"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "162a15b822d747a8464d986146161dd6"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "51c5aa33ff9eeb10dfda241628200f0d"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "47b0967fab084745c473eabaf5bc08f6"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "56e11e4c522551614e654462bf54c04b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "7af16b3aad8eb4bf9d2cac933eb80d24"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "90c1f57afb555f9525a68a73a763b57f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "a9641c39b0d526aab9eddd7fd43d20e8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "8c420100e8e7d65b278d760dc9e61f13"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "95617e7e94325a2151fdbcc8f22ede51"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "c3b344e791324736cadfc001c578a3bc"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "2690c5e0a712de0409b10618120d4a42"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "a37d7af1d5384740d448b536f733a8a7"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "2f676d84c0c14814d46382dc62a8d4e8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "12ed0ea738a4a083b7335379f1b21b8c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "71523823dca9af12ba5b028863c8c5a4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "e5969030e63bdad86577f6bfd00f50be"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "65ef9441079b56e8c9f564a5a83109b6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "f3bed4b781c825268719004534fdcd71"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "657ffc8ec7a51c4772a31554007c0290"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "dc40058942da1373d81934fcf99465f8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "e2ab42ec893e9dc3e6ad391444e476c1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "378883096861670ab056dcca5d0ccc52"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "9beb3c81a17fcffcf8f2b4fd8484e8d8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "1bb96447160fe81b37ab9bc7c139cc79"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "660fff7f34b15c4a3972818e63e186ba"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "b7d908a2d846c7a9a7762a8bd353e23b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "521cb5310dfc67ba0e2b800402f5363c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "a998d8eb734a4d0ffdf7c409f4fdd3e3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "5a29d87ca1518dcd8d6dce45453c6f58"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "95b9b07566482515d6edb3dd293400cf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "94b4038eb3b70368f11e54c783874406"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "920583bf164f827a1372b8d7d6a11ff6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a97025faa17ab6c3a888a3dda4cdf5da"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "8a04e8ea948ac7f97508961f9af60da4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "7e7ff68c726df844831c7e5891303b73"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "ef887a1499e7dcf8dc4db97563ce7af5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "f874434d8be8b29eac505a39f688d953"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "b93b21bc2aa2de2ce55fc1a0fb891768"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "6abacf5c2f8f0aad8fa773cc4f4ac6d5"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "41cad3f004f7bf4dd82879eed9373451"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "2a752ab9b88d1ce00b0245e94c467e6b"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "ffbb24420b439d33893c757d2802313e"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "540fc51bedaf269a58dd6e07cae61678"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "d3cf94f4038555723fbdccf1fd721570"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "07ba9f5777eab3dffabcda7c02d858a6"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "17d2b75492b79c922af69aa33e1de969"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "3c762bd1cae0acc9b91f760f996f66ea"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "2849c2cc37756573239a589f1c771013"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "a30f05a1be645fe36d2954c8d92309c8"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "f01215cf6324d444991bacfd6bba315f"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "fa42372f2c8bff34d4c2986109b43dd2"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e178281eb0f3372965c36f7b2accd56d"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "15099a2d0499e4e0e2607720ab73b97f"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "54b89e1d34d587e9fe523b8fee437fb0"
  },
  {
    "url": "categories/database/index.html",
    "revision": "83e722ffe2bc310ad708ffba784401af"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "6aaf4aad9fd22ebf26507774bc2e55fb"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "a0a713732b20d55a468fb54c2e7a0145"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "0d187c37d0f4ab1c237ec5791c4ba1a0"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "d5c8315a4d623452302972c51e4129c1"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "84efd3e6f8607f377bcb58ba9b173d30"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "1529c41f893c44297478cbebc6473b01"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "876af610c0b10582242255c784777037"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "1d41f892cafde490d40ead756147adcf"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "9c7eb6b3f7fed2dca51546365f02a467"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "addbea29bb9e3b363c002b069155eb6f"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "4339a6f0f9fc7214dd878b6f27824e56"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "cde9afd9c18b4ebd2611bc9f207da2fb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "e09606cffcc242611c251bed47b88be4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "7a0433795b912261815c59c879e5d722"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "0074873b0e75fca8890d102b68d8b113"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "46309ff4d9ddd1c803adc159e35da1f9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "8344228593c1e2e770cf41de7d0fa5a0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "3b80d9e5b222262afc02ad481ea29563"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "9c8eaf74b7a54e34b68c0468ba298387"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "b454ff97d6652e9b7d343b6154cf219f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "5d4fa3fccc66be71e0da917c61f2e1a1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "859ced244ae65642dfeb1f99b647aa73"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "b0f7034dc17e32c6a0402bbca253eb94"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "500bba45bb0c9c720960ce9b4f393896"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "e3443e6069dea56a11d57bc6e1907c99"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "d1f9d44bdf3b4e09b0752c0d8d5b36b9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "2f61b87af01a106ea64725174d663af5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "ad1522e3c3fd14bb3491de32c9840f6d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "968c10032e1a8f221eb3a2930e4fe956"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "a71097922d7f978154e32e9a784b9b41"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "f6b8ff66cb591e2994a945d0614c643f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "29adf393906e81bb4dbc1e67a032227d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "b79a61a0b3d292ba39368566c299989c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "a1a7f1e62951d016e5407f3b1dd7c0e8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "b15f4567a22872fa4dee8a5f4c54af97"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "66edcbd85561f8d458a2861a6f905cae"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "15efbfb61ab0d168a26e56c9856bfdb2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "060faec7adfac2d5ddada8488f7c6b64"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "7ce83b00bbf3d758d9c4bd22e436e304"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "b5b70a39db9607b0466ac09b336410e9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "2cb74c2a3acb71af9642697bab4e3138"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "3017f3e7a2fb30df9b3cbe635caf6b43"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "396a21ffb216eeb7df288273fb22feb4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "2b1cd6b652e7bd93d103836be423d572"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "a7bb14e4002a1105ebbfad8c76068fb4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "7a50864f536c68aa6aabb609c6e6df5b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "5422ee82f0f056339422db8443543af4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "cb7f4695be7d3a991b7e9d3f5ebd4609"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "10d5065345682df4432760a3ccbba95d"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "a4b7ab058ab495bd72c3e9d22abbf74b"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "1645a48a119757cafe0124c08037450e"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "5a803ca509fb2d32ff891e27cc85bc81"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ddba01c1ee0abd0a573e2409082be625"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "f8998cefa567af6d8979c0b99c1db641"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "adf4dcb674fdf9dc53084cd9bdf4776b"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "597fc1074acc077afc6afc64c92bb477"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "35e35c88c5e864e036189f6fbbe237b3"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "ea19fde442200ba041c10755eb74b2db"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "cfc60ed27c384ff2888299a38830bc96"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "1014d7cc907336d35508328c266e46e1"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "c4956f9eb087cb8120c88d966aa0d3b4"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "798f9bcf1ca9df003341bb9252858c2a"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "38d0dc6e467af9dd3eb97b9e8c3c8a8a"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "bc6f588a9b6811933203e879c0652718"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a87f376d8121e0657506b753decff7b2"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "b058cc4ddd56499f2213113e4db61aa6"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "3dad0f79c4b20553128537c8a24b6b08"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "73165d7b8332bf53a8ab09ae36ecd044"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "cced28fc8862547e7e4808c66761feb7"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "0e9c153383a0c72845ad5e488ce9b2e7"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "c5bf8334301a7332e2391e3887285b53"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "abd5de77e9259bc66d3c535745c9179b"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "e4eff01089d5177d25a7303c6239decc"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "f1dee0b8a01ffa240cfd8fa35dd1c761"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "be8cf7d27bd54509c12fa9749dffc7c5"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "597b382d38a3c8e82098691d5dba4672"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "800973642e8098cc5e471d45ab64e3b7"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "e8dcb1f98459021f63e558c778f2de1e"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "a51ab3e561a2c7d1c72657eab4451f12"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "fea187bddee1449ddd0cd31d4774c32b"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "610d1c5c8d4cf9edbb77fd30fc6f1ee3"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "ffe917c09cf649f3d7f4795be434ec8e"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "ab4909165bb30f1b165e606d2d208dfd"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "0c9310bd3fdfa9b8a4e6a434d6fe7ba0"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "d396bc003f8784780e53dd1b51d31c3e"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "7e174c65ba6ce3875f0d27a62c4977ff"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "8e33250749503b8551b811df7b58dd77"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "3fb4560495a8e1e28241264486350367"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "bc8eeb2f35f05ddddb4f7ebf5c60c37f"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "c1fe70be862a2dbfd53ad6228664d95e"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "7fadf11a5360f76484bab8b0c9016e10"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "927bb46632696ca5d730ca14d2061cb2"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "43e6169c5208b82df94aef6a3ec50568"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "754af0066230683288600df1498936da"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "d0456957fc9767d65faddc85d3a152ce"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "e4f496927db1534dcc26325f77d7a289"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "31295a7fc073032be77f64a3b432201a"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "fc6963d2d265ddd4c1ce44b8335aca08"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "c1d158edbdb2f5f60c20ad36ab98ee89"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "391dda571731ec95bf6dea56d0a65073"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "757020c81abf2be777abca24c457fa4d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "51d9769f341927f2e3d56b07c1d946b6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "03d40dfee4b7cc5ceae2991fb2e4ae0c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "eaa6e3130c8083fa534b5809f8556c72"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "b95ecabd83ceca8c395b04f07e58926b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "c1555a23f9bc32bb7830de71b008fb01"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "cfd3f6b4d02a8487e716526257b68865"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "5d93303a7b6c06b97329f46da98dfa12"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "76c96210c79b9c003c415a52ee42e60d"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "b6a312ef12b2a0b9907cc39dc06d5eaa"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "3e02b310136a794c5805e71a1d569432"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "4c0d1b8e84647e3747e307990e748510"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "6326a696036584c612e8500bf9d7c7f5"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "d9a46baf2b856eed6df8a5e78009e684"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "c52a9a0a6e7c3dd6b01f2da02190fae6"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "b218f46351ef4e03966588a6876108d8"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "8319c2033881d3831ac96f7a1f539eeb"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "00540d10ec1fd57efcdd8bd6890ac21c"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "4ac3ceb6268fd59cad54f22c8839e2d4"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "4548ad03a311bf0c60240cd71bb17c30"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "5fca435ba4ee0e5a6d30dadacdcdbcd4"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "64937a9e0ed33dc7db61750007c5a7b9"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "62a1f4ed9989e3950dce69d3662a9d3b"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "a3ddce6a73cde6ac1e02648ceea7d686"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "da2189084cf43e3e4348760cbb8bbde9"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "708dcddbb7cf751967793eca3b10f625"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "432a1bd5f496474ac482743d25df40bb"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "9a2abe09de86494274474f214dcc9adb"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "c459dbe4e8fb8030af2ffb55b8cf4579"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "b485372f983bf24bd1a8b109a6e08386"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "b78c843faaac4504e2f2c586ae90fa6a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "c324d963e8850f6930fac11381618d50"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "508810dff00df270741504bdee98c559"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "edfd1f8373852d6754fd8a7fbd7e37aa"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "99943c8f10854a227d5ec13c6171fe97"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "efcf9387091af4b2d1226192d1b92a7f"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "3af0a279eb717439ee963c7e640b16cc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "a6e738e97fd5392f3dcf0ccef8f4566e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "936312fddc990b8d7455c77bb4811221"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "9c2915287e1b93f1de23dec1fd365a32"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "66837e214152227d7435ceca19302c61"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "a64b742c39f0476c04bdce83fed4e820"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "21225270ed3747b6a2f2af788139eac4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "d6cd1b733d09a10048276aa75659ee52"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "25680ae34950b11dcfc8a0caa2195f72"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "9cfa1533be0630981c691400451494f3"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "09d929ea6a298a843135baeb831ebf1b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "9add95eb370098d20e35e594314476a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "b1b52594f51c494e9a93223b155c236c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "e133b0cd8e71bc11875e4a6144174341"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "63d25b1347c079ec09e7f7caa70d8e4d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "3faad3c89a835a11a4dbaec0c4e83d95"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "6c3f893e0eea6f87d34cfbaa4274c48a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "2ef8a9c2065bc41632ad500f5e2b5efa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "e049505d346af5e9c5d96b3bf4e472d3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "07b141d1adc5f355843328b17736fdcb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "9517609be5320848ad15249ece24e7dc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "9224a2554497b4cd2c16362091bb87f6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "2a5af22a581ae3953f29731570186553"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "8122380c469be3aef8410ecfcbb06cbb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "e58d3b1e5a48a9b39608bfaf973fc480"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "4499a4dd9dc1425e8cdc8fe9cb030daa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "afe63f37963257b0c8c95cfce76c4d7f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "3a624b761283fbef95f76e4a1bfe3218"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "cf876e2976faa3fb2482bbdee1df2d6d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "9e6069aceed567898a821a9b66d89b5d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "6c23851353dfb50bb8bd26b57ef4690a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "07bb4e589d1db94f0b77d8de53b7a6bf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "899df7f2315efe65e0a0a3ba23fc4f60"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "d31115b83cd121d15facc29d6104ae15"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "bf294975d0a28fc7e3a9187230aaec8b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "4ba4a51d569908d52ed4be51487715da"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "75855c98eccde3f17316b1df03f6e7fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "ab7171707b9cfe508226037990270dfd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "d087746636675a91a20f56be0abf0ed2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "6a697b515e1debb34b208f28b6af0abe"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "98489ee472d66f14eb106d3836a0867b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "ffb22a31fe166c8c52bd552c8b577581"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "ca9cbc3aaa1a4c1fe5584cd746f720cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "e0ba68811865ad2cdcf24303259378a9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "f3e61db3387d37f1ef155a8f484d1e86"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "b8dd313732a8bb97f5dff3fc7d0f785d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "a19f9615828541cbca711f580fd4e9c4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "959715ef5b0011a2d5466dda648c5398"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "030755c9658ef4ec819284eed4e52de8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "708835c8a63e8d9579e4b8a79eb9c9e3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "0d70903828a5f49b653113d338b3c367"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "7d359d9cc1eef5b777896a8e7366a090"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "16a83c0ad1d48ee843427d7bd65117a5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "50ffd329dfd35f7f8498b3a9ca763512"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "449241b3df0d38612b4aca9db9bfa0a8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "ff91ac1e5ca76728a6bb15a9efcdf955"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "bba04ecaf56d900fff57b419128588bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "714c2102b6a062f88fc491b62934050a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "38083ada239bab08a67d2e7d2e32d9cf"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "ee8e2c26982d24a604a34afd4eea23ca"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "cc018736b7a24e94312075143ff3abe0"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "e0d7a1d7874c8d6b12c43796732f98b0"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "ef5dcc1bae449cabb881bae071a1f44d"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "7ddea8eba77b83006c5e842b209c6701"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "70a1f6e2de8fef8b325299f6aa27b8bb"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "0b6b3de3682fbc5c49b1449598d8458f"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "e90e9fae26fd75e9e39af77d07e072b5"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "5a36dfd0e5ce866d9703e1321b262cff"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "2a17103411499e8bc94a67fa1b9528b7"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "ea9b4bf75f8f3a344d350f2a03738e15"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "c0b0d23b54633303c48bfa2b44e1c8a5"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "6c5fa0b1967a3e7330b91d5b2aa0ab3f"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "ed11e2ac977370397776e324e7b4ea1e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "891980348f00ea93ad965e09b14ceb2b"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "8cea62862c4a898c612d96d85419cd5c"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "269b6fff5263232debf356facfedc6c4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "87b69813e1a31cbdd6b56e6ab119216d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "99199ced215a49c9ee16f55d60c27f99"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "a6a160d91658fbdb0fba0bafe58cde26"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "9a300c655b46f217e9d4b4ef2d60a07f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "c48a31448d540cba9074b57bb6b00f52"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "a5fa3c1a79b002d96be540cdcda941a5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "09529321b53cf6975adaa8895d36d688"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "a1a4cafd1c92e1a14da7571c90b06e1d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "2af985770e59fb8cf238944441bd19bb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "7509c49d9e784c696b42cda4ae68ae03"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "87f92f1d10a88fd002306ac09ed37337"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "4a39a0a1e263ac690627a5c29599ce49"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "dbb09eba3883ce6c9d3d0be3235f559a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "78277b2fd5b72e09eea7589149ef4172"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "59ce024b7caa05a98c63a7f0828068de"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "699938d980b98d607a5bfb521faa1f1a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "5b28da5cf9bd015940ed631f2b2593d1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "61c3ccb839cc6729e2e50fca4d008e00"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "2ee59f8b488f03383d7dc15435aeeaa3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "915cc2ef358ff99db712df571bba8ae1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "8535071f5e97563fd28a3dc2fc42a14d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "beb1a9df21dd9ea8dd9d8bdb4b5e971c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "17d65e2af3fc2cea64a09c07d56c59a2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "dd0ef4b88ed1b238d4684834acd3136c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "62a534f1b710932c34eb80481db06c0e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "807dddf8804a2576626d7297b4202782"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "95323336a6fed3d941221554a9b96f10"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "5eba585fd00ef20428397699d858409c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "45eb578bd619ca879f2e0f2e4886856b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "432b3ff0365f9ce3b6b4653340f36fa2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "369753c082388b044d84a06ff4e3ea55"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "dbaba89e6171d670e4a58f2a82754513"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "803ec4380b2cfee1ec044b5bb696b188"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "60eb3f17391735adead811167f256e0f"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "a8456828486c56e8a40c855961facd75"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "52408297314bf95afbe82c236b9c71fd"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "6d3cd4e5294fd21cffd84793a9a1d60a"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "8bdbed7aaa6f21b457dbd8b3f0ce91fb"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "4eb84c5be8bed2696500a36baa1faea1"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "cbcfc43c56df2f155e58814332046218"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "addab4fd1bf3d28737f6b8c09fa36363"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "7e710cb211298c60c167a27a00c541bc"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "a68de95897cd4fcb5c884d7a146d444a"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "769265e02ded83a530785ae94a4c2aee"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "3ad6536a6c3043205bd20fd7358d28d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "f96f3f73735893f49bda1492edef28cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "15e2b93b7b3bfbf28da858bcea1b9dfb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "71cded1ea625ce0c59ae3321c4329ec5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "9c18b408d94df64968ebd5bc82939daf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "8ae30fdf50512f56644ca17ea7ceb5da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "b0361e9386d1364264b6c1849a7f095d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "1d3b3dc21ad6983ad26b7b609fa9779b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "a0af36603185869f95cc5e914c79ca45"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "b1e6ecd782f7456dfc5ad1784c2ed154"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "c6c22afdcab90c44d69fcc0edd180765"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "581a3b9ce4d50c2fcc981e9ad2b7a77b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "ee9baadcd5b9b11de8da9c8e0583e1d9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "62ff37a6a6ec0dcf9e592fce2f02d6c6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "85fba111bd5d97f4ca290074ec0f7530"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "b56e945d44ad1b6d4d31dba8a7849b9b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "cb36aded19d3cc42e04575ce16c51b89"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "cdc66758f3bd2f99429f40048dc37c71"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "06c9102a2ce653c77b4740b0ab04bf3c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "293f4da3ca21b9145e16d76f72e5bdb3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "678e21d2b12e6fa395f7c306c9264845"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "f0046132d32fc3d93a7cc146bb6a2853"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "32c13188f20a63371a9ff5e15c316e8b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "c076e7d675413327cea7342078586c3c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "cf54bccfc76d34df341793e484b40399"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "113b2ebff1a83b6c7d0975217540d44f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "0cd34f980a83944ede6067e1b3588b25"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "5451a2d7d906a977fbd4329ab4ec4240"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "2e61ba81827de1b625d1721fda7cb9f0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "e4e548ae5f0360029da1e6fe0f6c953f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "a259d78c9d9acbe923f4cf57710ac316"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "b293b435dd6cb9415c171ab768d357d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "9bd69b5e7ddb1ebfe8eb5347f3070117"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "ccfec538e9053500ba18bf69cfdfa3ba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "be602b9a963043f272aaec54abbe6ca3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "9ce667c9d306a52559df07ab75623e74"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "aadeeead9117d9146601a36b6cc11250"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "68060123f96f95ab7810422d8eda87fc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "96472153a59a49edbcec610ba048c188"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "a988a1bf348314661190a09451d0500b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "f7580a1588ec11ce4ef5a1b92bf36b87"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "462a0b6923a1ce9119943ec4c2b40bfb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "8516ee3340da06c0880d911a716dc0af"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "361b782b5ba85fea678de1dc5cb1bf93"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "d308a4e8d7b091dd47d9869a1fa3077f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "511919dce0f9bfab4a42a296544b7c70"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "9f3ce471e3d330be6ac109d9ef21ef98"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "9908d68cea04f97eb9b51b6f87335abe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "26849348922e45b8b0be8e7b8ba16148"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "f709e168ec651f68632d2549bf4a07c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3b066f66664a7bc73e64aa2d9545cb4e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "9af6588d313083a6360e0cf0fa1a7e56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "752dbbf67bd41ae0b31d839c8142c38e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "9503a4ae64d0c0050b50def868aa8ec1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ba7d55e1babb137d0d04482162c604b3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "b97ed5ab5d5320c9036abc97f3d8f269"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "fa5c06b20e2e5f9a3bf69a568ab43694"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ab19d51bb9f857cd58ef8d31e49d541a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "6c1997186d794221135aad750ea80f2f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "f7fe1cf56e44432e7cb328c1dd14b36b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "67214ee43d11bb91d209faf1842b5762"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "691a9d1ab32f696118f579ae8cf8233e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "35d32b2e834b5060357b4297df8f5664"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "9b31d258c3a5e838b3835c0605a7a9fe"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "e8dac91c37d4a2da898e02b73a235df9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "cafc7734ae4b08a48c9988d6a1173fc0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "e8530d075e33d992ef02f71d04c66163"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "145e698135c26604d01cd4f04cab242c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "f267ac099c9bb75c3059b7c761dad806"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "9f95699274c126cc1e2a6c829da10904"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "2dd52d9385b448dd86c27e4e27b1c105"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "b3aa326113bd0f08fb71623abd760b08"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "7e0de1d2fd2c0f01b01ea2d4c6447ccf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "6d36b07ef583d66655f53aceb0e5e2a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "14956c81a603399ccf839b3e4f7304a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "76a39a59a02082240437497d6a916fce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "07d7cfc4069826cf72c89731bc9c5e11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "de339a8f7ebfbb31be7a8660a226be6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "272387a44e608a8f8b9c9abd5ecb5902"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "be2acc139ea99d3952cc8554ce1bb972"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "8ce2d37b0e502a6e893f9736e6124ad8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "bb3a8e89633eaadaa451f37dc95bc7b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "663faf6773fb1d1fd2da586d4cc1fe8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "49730d69111dfee021ceda78ec93e72c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "ec6c14aeba246036ba31a85896301dff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "0c66f887051f952381c437dbe3116c29"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "5c85fef9b567d4094c2cc872efe0f448"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "63e9a3025278ea38b3b56ebf31dacce2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "1aabb8dc7bfacec18331468024d12732"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "28124346e781831e78e6bdad62f51893"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "e9360a88fd64e8559cc8cb41db7e58f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "6bc2921755ae8444316a57f9538b0c27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "acf915ffb6489ee86c2a76bab89f8ad6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "6eaddfd77e0944ec3da4174ba1920e18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "f77d366232e956801a4af0182a7c9a38"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "796fdcdc7776c44fd11c5ef02ce99b6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "f0f43c3ce13bcdbf2f869f9db4258638"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "4abc1bc8b8c69333e7d0495b7d568617"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "df2092dcb6c875ea98366bc6343100d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "763d6cef4844ee5f1c23edc5c7565c62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "ad33b3d63ddaad1607fc008e37dbd289"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "d879a384fa484fc0ebbc200bcc462923"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "f94327e600aa78e32ba4dd8b732eb2b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "aef3e18a04b2cad9fc6b4ef1d9844ccc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "c2a7721a4652c3f7001603d43293bd46"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "ddabaa0a885d2835a1685f098152d99e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "c0ebb04a9bfd841384f9ebbf4c8dfa68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "3bd71f4969eca37c2b85b2631ede1875"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "8598a1942cdd0b653fa3131b42750b01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "01bc33847a4f3c1c1472bdea2cce2988"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "624bc958af57b5b668f34164101f56f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "68b9f72fc81ca9e8d0bf7688154a170d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "3e8a59ef0bf3cc944f78bbdc7f28a756"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "900acbad24b1aaeb5c9bb110ea8873cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "f0bd74265504ed1c4f0c74b28340c858"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "b73cad92daf949f5f3c7c848aab02cc0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "7484f5876651a17e1eba0070d4ac16c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "b4fd4c2a5d85f92379f196fa03ba4eac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "780d60c2a446867a0d80f7651989dfd3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "cf0b23c5083234e6319aedf51080acc4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "c06c2cf3c055312a6d5180d5312aa870"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "5b7ae1adc981dca31cf798c2d1e40b3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "d38f2c204d56b664b1a90be7ce288aeb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "0f888dfe5a93ae54dc17b294c7360a40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "f769a08a0081f97fb084a5172aae4ee4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "0ebdef6f15abeec32829550ac22aa875"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "97e40561c2c97d2c8a6a04a5e0bd31b9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "9bfa44a9c4007cea7b914bfb7b2614ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "cf50a25e2e72b8448181716aeca365d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "7b19c42d19e6842ae64c0dc8c02bf2f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "9f1ecb8ef14a3367af23501892df4c1d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "3cc42637e60f886d1948f5d490d4618b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "9b2aa2b668f87adcb6eee4bcd0187fee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "d42c09c2702d2aec0fe41f4dd8adaeb0"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "068c4464fd8f6b91cb074e7a078f9ec8"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "4d8f171dfa13ac3ccd20f66e52fb3787"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "5cecb70eb3106fa72db58b6444ff5337"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "b470d55b99f0b5197288ba1085ac259a"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "dedfda253b514e229ea7b5940a0d6490"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "0713ca45d3ad7a26aeda2b486b0c2e74"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "f6ac9e27a1165d585d5e5d8fb9044076"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "428780b89ee4c8ff8d5d2c3073d18833"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "8594b0e3aa46f8a8a182f6dfe1f7ac39"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "4527184e78e7fbdec4054c00731087de"
  },
  {
    "url": "categories/index.html",
    "revision": "1cad70afaae03915e4a9a4f1a75fa561"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "b85ffb30a30eb2c87f8446c5e74c8150"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "4880a8ddf24d98861d871948e2bcc08a"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "65e0536eb3754a360fd9af0090afec34"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "0418ec4afb8c3c0ea31c9a3b1ba47c95"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "c119d5428d66b05ec8bf213db3b0764c"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "ebc65eb87e11aeefb904f9639c5e270c"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "8b54074ca58167fcdbf314ce1637966b"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "3965e126247c27edf929ea8997b95784"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "8e585407f73876bd07a9b54a6c8eb861"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "c7fc6820ddace1b1a6fc1e0297588cc2"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "6c6278b692691e2d8325079da3c3848e"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "72b40b861bf95a975f9b927792579fc9"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "cdd7fa8d9c812c35e4678a04b15f116e"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "9d2cbee7d860d24a1eaba7e9b33483c0"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "de8aa6120b545de98f224af2501d98e6"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "becdc05baad85c257ab2cdb1d5693bb6"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "28ce95022bd1e3b2ebecd3dc202bea0f"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "cb873b05932477084e9c7c3310c49592"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "3e0cef16bf7cb3ed612931a7c7498b19"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "1b83a11a77182ea765e6c639a3574d2b"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "02412d028a219f82785c2e3ed3528be8"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "ce54b0da75a63debdcf3965dfc45afce"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "dbfbc1e695c72f690c31a7b03ab5343b"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "825e0a86c7e3538a6f89635e765ffd92"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "a97fa9dec043e659402399d5de4d08c3"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "b6a9bc052615fd58d34ad97fa8aae729"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "d24e0c3af51b62542666d3fdd0356276"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "64b6fcb770496e49f1d617226c6c6a6a"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "3c7d15f171dc78732d1f0f92f6cad295"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "53d7358ffe6f25f25daaebda1d04d5c9"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "d0037caf1f28016b22216bae96f21884"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "d4bfbc6f38adc37b608b03c84dbed3a0"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "691eb807eab7870f17228f0d909a9d05"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "2a2b45b4acc5482011756ef23385a99f"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "bcb8a0e99b4d8bbf3fcd8475c8d5a093"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "6162dd724e5c4ddc1bbd056d153e8934"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "811fcbb9744b6b2e155b942e248ef2bb"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "53789973ef73b7823042154c10a9e742"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "073b654de8a2475515e1d5fb069bc3ca"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "6c5d4eb01c96ea2227f686855e319373"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "0e0f2fa3b1cc0cd7fa5bd13fe3fe91f4"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "08bf17d72ddf69d85e05f8ddecbf47ca"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "2f74a8fb5e98fbde33d9e0e79b71cd08"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "62db2ac3467d5be12688fbd91c10db33"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "bfb691f721cfa537317df3f6ec7da23e"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "70258a28ca849133ab17e8fbcd0783c7"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "a22e5697ff93ccd3599db4f590057cbe"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "723e1cc471507123a1d06e2cb06a7e3c"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "0e9efdb07a2331ce45f38f8b62facbb9"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "0d1689ee505038db5d70f56d31e5e25b"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "625e2bb7acfb106fb5acb2281a4d84a0"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "d64f1cf224251b465c7d72f4302c3945"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "48a6422e6b2267aedaaf61a760bf6911"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "526f07d0a8d613fd1a0d7ab82f08f4fb"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "a79011868fd783c0198678ca1be66228"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "b8dce8cb9b7e8bbc5ce47978b2f9de65"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "e304c1656e079253c17dc7edfe578800"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "053b9851f4b84cf5ed38e985eebe4301"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "c4938e987f4e01c1f043cdaea3d8732e"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "82edb8ac51bee500c366ca9b69942f10"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "ed6e2cac6eec262de0a2852aad79fd80"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "8155e3d658547dac94961f3aa440338e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "2f3fed7c72c689de2cdb5c31043aee85"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "b87b68c2b1b22912102d843385682ca4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "acfd052c91952c07f52230c426fbab79"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "d3b1e89598c721bbdef1ae8df0dd0f49"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "91b63298589fefe03013c7224d127a89"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "3bf7389b2d88f5265a7d566f787bbd40"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "39fcf9149474eab8a3498b87851197e4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "a3232140cf1913584be39a82ea381c09"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "8744eef2fe586c9dbecc60b23a0de050"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "d7a9c344193da274980c6678e92cfb72"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "cead141c51163e1220a1e5d83598c7f8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "11a7c6745164519394095771b082d4cf"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "00b284f7253bdcd99274eb92525be268"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "0482e2d7c9c67a155664a81287bd6b8b"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "59b7f5dc6c34ec258b01539aa3e573b7"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "b2c2007dc88e896a2d238b4c8959c3a9"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "c2305533a51b22fd3c88798031711bc8"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "4aa30372f87a30c47154ccddf62f5629"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "405819dfa377dd5e94eb5747ca776b58"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "a9754cbf2a050edbeaa6dafe285553a3"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "21e9a1261b1e0b0875b7dabaf435bccc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "36367aeb33b1038fa8da76e9ed248cca"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "e88668601a9542b81f4ef80eee5cb890"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "8d92f02fe8a934bff0d9f2c421094aac"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "693aa6e0ca8f6e83a86001e7dc8ec276"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "ea7b926f2765a865bba63229ae212597"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "d1dfdbd0079ee8633841e3bcca7d46c7"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "cb1c4d9767b3257bbb96e241a8f3f9b5"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "60b9b3e5010ce0ce81e6cf1577c2bf06"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "a29153ef045edab0a2e27af33b484a86"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "3f02edeef79a4f33caa21b05e7ada29f"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "57c329a7b2a657d1ddf79db490ea59ae"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "bc50b3b984e3988fbd281ddc9c6d4861"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f21817cd147e3cf6563646d07b4d765a"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "c6d41eb125d041f7e67f456360fbf172"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "7c3aa17c019a8dcf359ae52fa42f9551"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "696136932f42e28f16ff55db1a6d4434"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "250dd4ba49e516332d20fe4db6142615"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "fae485ac13b7a6d0e50c7807906d2f6f"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "244bd472346bd2da49ef6964345ac1a6"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "da0da8195907a8d42c5d6e166a1f77f8"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "95e782ac90e2927a10247f704287d4c9"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "89e5285228aee7fe97aa6387b0828841"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "dabb58e5b31ed587622b09f130821239"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "eba2da71753014bf5c0f6818d4ef2cb5"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "88a47e9abdc66015f6c9ec70b02881c9"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "5f3258e9bf6c91cb3f2815e699722da5"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "3235baaa299056711a1e5f891c05672c"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "a0d582d34ddfd22119a72d0027b1db86"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "c97b48fc6160a4c1de6c48761586d330"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "1bee7b9c97d863e4c63068e010f998ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "481cb33513f15e2471acf9d22120e4c5"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "9e2af1bdb727dd6e0b852e653c502d4c"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "57eb34a14c0748b073fb6232f767908e"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "ef217f17adc15c827e68847d662315dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "33ea90649c7462aa94b724bae48e022b"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "770d287eb07899e349816702fe787a8a"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "ab95708271628edba209ae003a17a32a"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "547c77898e35efe352b2682ab0a4f664"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "caebfd747bc61376d903703929accbcc"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "0e6ca5c4f3ac29c7ce5e9652bc132af6"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "b218970824ad13903787778b296253d7"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "e9aac69a6553ef06d0b68bbdb4ba2f7d"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "238b66b8b66d3dd9290f8435aedce182"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "aa5d8da256f638a62b648c5f77827b60"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "3a108260ae8b18f850579de2e2763d9b"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "494045c1b537c882ab2ca244eca92362"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "42bcb428cc05f248a76598613cca1b20"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "5eb9fc186c3bb221c1d4ec1ebc26b234"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "ca1b9e875d48bc3a1cd7d5ee503507c0"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "fee6161f0f472b85a3f4d3dbbeb6ba02"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "b7d4b4efc7cce7a3dd4807caf093d183"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "76acb5dcff0eb55ca3e61ebf8927f605"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "56ed82f4124622917e11be8baf6de90e"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "a68bebcf8ae19730c585c00b9bdd7267"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "9fd2ba830163723ab1930e45d315c7b1"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8c098aeed27cd951b058e40c77fbed04"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "f7fa3fe51444325b46bcabe95c4ba549"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "94bd55ec95ff5c71056b2fa9c5b87a8d"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "a8338c1c21bcb55b0f77f0194c50ca28"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "58803741c07cb60e28a9a5a12b14bec6"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "5398625f489a587fd94c72047f8e848f"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "a18b3d1ecc2c01846954292d009bf84e"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "b3f1120ddb97095bdd02f16c84703737"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "7dbc4dd6126b0e7a96371a38ac1d8939"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "e2f05ce9d42790c05f601ba29e6a1961"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "8932fd1cc66221499d0aac6a0a83d424"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "be34dc432d429b6a85e4c7f9886c26b0"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "c43f9289502cb31ef09a3d993af78333"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "ca8e22576c64958327104dede90137b2"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "58a45ba89c3528556fc90677f12d9854"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "00295a9f7a2a0260cb42d4bc0f564f41"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c36d7c1676c0f399ce52bca0114b541a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "835e8da047fdb3f1442546ace3e51d22"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "5796044b9987ec567e9ec880f68ab8e1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "c28dfd43df6b0ac180e2b33dc8cb6810"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "aca8e0bcf6a1b3d54c94e0c5aace1d3f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "0450bea968829fa79930be11a35e2b2a"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c5e475364cbf3de683bf342800dbe1a9"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "6a2d03f0fcbb304799fbec04fe93f7ad"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "6a5a8d44b562df4afdcf50bdb57c8182"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "4d48dd8f9991db66934e657a908b774c"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "def91020f6b05c0acd5d40bb6f16bedf"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "7dcbc77b40fb1edef2880f56e2938561"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "17ce4c61ee692ae3d343070de4eb1a1e"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "1d2b921c416f700b53ddc2d2b6aaab67"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "2aef645bf11689e695dfeb7a22936838"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "3889a9d3a4830d0e30fcd4983859aeda"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "09fe6a799c54f65bcbc872bdc12f64e2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "b7c3ce7f168f919fe9ec8b290f715199"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "d6fceb2c1f6bb74c0552249b3cbfcaf7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "cca2fcdf8d7ba3bd93d9e7c5291842ae"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "9afc67d1f82b459c445887301f1da1a2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "409b75179ef6ae137adee86cce068ade"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "f72deb5b7b44c23d92df40059f09c620"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "c7fd684029a2858d11271be1be0a0130"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "67dfef25722b636208d5a15038be0392"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "9afc32e7aac7b05e878891ecdc3533e7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "8a42e61185e7f65cc6bee39bdc132ea7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "182bc198c75233b70a49c8b7e1b59157"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "a21ac0c8b1b1dee52e6a02aab2a5f8dc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "aff201f46f8ae6374e181ce53b38462e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "38dc181067a2fdf5892b96a9b194e7ea"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "02137b84952e0df126fd6a85cd5a86f7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "27cc626e4de6bda5bc7a6d8247378c64"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "f66ae96ce7088f0d715a570342911720"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "952eb8a96ee0a51997d963dcc0d4d7e7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "57c208be1ee3f97b9969ca617080b9aa"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "b84f04fd90d59d69ba6d80a901166bab"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "8418a57a299e7b422bab5a77207da553"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "936628dd89f23302c36d79b9c7393b6e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "b990d65a413e93cfe13c455e96b915c2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "b3848f3e7d0856c88e6372bb788725ec"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "42c4169a02b5dd6990fdee992192866e"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "bfa9d2227b82559a2fdb9532b1333e5a"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "9d4a99556e5db86756ece1b0a7ba33f4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "501e3cf89cf5e3125bdbb62f9419c6de"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "986be7fbd0c76351f9e9cd9c7aecc43f"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "ae9da027e290a542d9b026117d0e5af3"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "8176337768ef743a8cccf7602a6fc923"
  },
  {
    "url": "categories/os/index.html",
    "revision": "e8fe49aa1018a850fe1dd51cdaef7a8b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "6979bd8e14a2a42dbc97f285391dd0aa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "2c3ad6efe6cc6fc65c048b8c908d05c0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "508c96ee2b2efef5050e92dec40518a6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "41acbf5bf31dc1c2665d9ac1f3731b92"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "3d215c2c2d8a666d7075a9de9cc0cef2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "fbd7635d7ac5bd97b8db14e8542c7861"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "6aa9b83c77a7d0ba50c57c3c29b7ac15"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "d389befa8515873093efe934589b085a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "aa5a7bfa0808a74d0294c29431fe3080"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "664e0bce9b743938365f1e7c6eebc8a6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "580dc2137d3e44a2c7096f308bf9b724"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "bf85bd7f5cb2075d5acb3d10b5a2a86c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "d4ab197a3be1f9345d7b508d6b58ad42"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "3f25ec58098f903585cdff0c9fe8d4fd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "71e029fde6be10edc6345ff36a6620d8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "ded5ee3960b97135e3b0d8a1d821e5cd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "d9d8db1faf3a8e41d36dc2c16e7a0017"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "9015f90f2ff4f2d4221303e1f6af1940"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "c11768f866f83d0493b99ec74e2dcd3e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "a632911bfbc65946cf3f3a41ec0368bc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "91f05344c0852a092f25d82adbcda63a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "825e432f83fd507150d9dd652c801ae4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "789df4e8af27e3cb524c3a38d7b56cd8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "93e842e19fc118a575ab4bcf9bebb099"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "aac61043dd7aca1cb48362764e4bd21f"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "38fed191dace252cb68de4b33e359bc0"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "df364c63517354552fa7ef5cd2228fbf"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "412248aa76fb0d2d4263ea5ce48cb90a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "bbb945bd3d36c27be3dd14ba13a6d7e7"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "619dc6b4e24cf6aa831e94150fb9c26b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "56d135ef0d10fcce675ecdc98c9fc501"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "0c254bf298ff21c009ccac9b35d51901"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "fcd26d57b45e203db66365693b6e83be"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "ef90c6f0963014c5f3483e238b60dc49"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "e5d79943c023b09b06a98e623c60121f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "fd2bbd8ef83336ac9b2142dc2b90f24c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "45ffb254e388b566ed0ed00d6d3418d4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "4eeab6c7829ebc051d66ae7f1ec10a4a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "7d95e566d3007585b7bd3af1e145d15b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "3b98941970f9ceb801bbd6fd6f552e86"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "a119dab5e4e9fbf74ca0aec5ac9a2776"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "0a3e95f8a2eade8c1f390bf22c765c91"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "96251872e26d4314fc3fccbcf97a0da5"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "9a319f889307c53fe29412b2de79a5a9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "9c0fc776d0f7add6ada470af278146a9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "d3044b982aff154d200c4bf2255d2e16"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "f20d5a8f07d0a472e64cdc132120da35"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "6bc8f86de31e744fd6c4dd564c9a4cf3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "9a7af14942f9894a792966109b4049e1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "3a62d63dc4b9bf94c2dc9aa11cb15c21"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "be994b018b9867759abca6504147135c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "1ef42fb46935f4a36ecfec807d87a844"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "1209721612eba43628cbb2f09e3408a5"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "9e33c9492b5777f5c481a284f4bb9349"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "0b81ff0f890615bf0a512ff99a668f94"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "633e11dce0e82f9bcabae2210b8f0d1f"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "0dce7113290bc62203a3e01c23c68bd5"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "a0139bcde40fa95b0a2f73f06033c1d2"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "a3908154101f2eb3db2663ead4757db7"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "f8bc6f5f0ba466a355ce9df603e48bce"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "005497187f23657e19917e9aebf592de"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "78bcea212ce6379e0795f9d837063eeb"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "c2012af85a6ef115f5b8e0b1822b0924"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "40b012b17125856cee80fd663ada19a0"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "8c10d53694786a86df1d768b1b877000"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "43911bb2cde44848914006d6239134b0"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "b6475fcd7e4c53e112a6ee615b3bdc42"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "296428ed63e0d3eaa4613438959428c5"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "59a2d5275a289b9710b5b7b4bc62a9b1"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "54d04df2a01ae4ddd2ec012a6e805c82"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "ea06a9d2337d40c503bdd3233520ca46"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "740631a85289c8a9f060bbb26eea04f5"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "8a908dcc420f8a975becb90fc3f20249"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "dc273c1a340ced308831cd8d0e259a11"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ffaecdbd6a9740b72b53de8e9f463806"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "9ef3cdd98c6eb33dd188b03cd3da24be"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "a4a33865efbc3e953087dcb7f68ba0e5"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "1719123a8d227bfd70d0adb52ffc7ea5"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "ed4c07ca39dece9bdb60adea1652af3a"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "9821fbc913dbf92dd549284ae8660654"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "24c99c3a84598f6cd4f699916b3a1900"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "5c670eaf9247922ac3e850184cb68568"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "d33135a07eff83c58bb46625b59a4487"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "05cae31504384a2f68d804d8558b8963"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "716bc16e0171c9448e22b65005d9a4f8"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "731d07308a9841fd7a27558475adeff9"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "8eb0fadb914f2947329292c770268d6f"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "4a754ff2c2e96aed362b9f15e4888675"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "8c4062b9726d11a828401f77e337b8c2"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "b750b1db2ff3c18468a47534de248165"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "e08f0651cff9f8d30eef0c1ca8da22d5"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "d1c821cb6aada5e1bf6ee7af94d5e07c"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "6d8b5e57d788909dbe7dd9148c528390"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "9615e636fc826d5da4eae8f6992463c0"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "9beedd23d12e17d8b08549aca9bbcde0"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "ebf0fb19dac4de0bbbb1b3399a3e3191"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "4f92b61a18cb7f7c024f6f33ac7bb1f0"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "7d0abf8692745e0575b483855c988d42"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "6c08e17b1c42e8f7f919207dcd8dfb68"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "ac99668e34cd82760290730c5b9fef8b"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "e2a568a990bb33bd4ec9a3c231498eb1"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "4485865cebbdb1d86af886d381e2a34c"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "f4e600ba1dfe29c97c50040515a669d0"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "dac9be803e06e4554dece19288ede9af"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "459c95e3d2f3acbbac18a333e6a4e490"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "330210725fb1d4c29382a6d78f5f9084"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "e38c06a4fe22d0acec5d9fd7364ccc94"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "3a51333c67ad2e1ea12e9d25199dab67"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "cb59d69a7b237691e44617738d034300"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "7f6e56bd8871c4c8821772c648c3c0a7"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "72540279ed7208938be32dd4bf4d656a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "86a889d34b5d70032be2b0637cdd0c7c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "f25ad971880b68db0f40b72474e66ce6"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "94b3ebf4db76c1b09129f25ff7a69552"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "34b5f05e91dd26d0222f624ec9bb7222"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "5b34451d33e8920726548c9d9827790d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "953e851e14197c1dbf655c5e8a94f3c7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "85e31509b2a75790d2ee7ada019972b6"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "ba605046773bb9af23b4fde013e97686"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "a16b4ba40126844b4f86dcef2c12bb32"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "c5523f4ed0b7bb91993950fd36f91554"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "9f57da72ff862d56456ab584362d09ff"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "0bad5311216a212ae39dc2958d701ee5"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "df5f33d58df3a18d191ad9ddef97459a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "fd8e96aa3cb09e2d14a149683bcfb98f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "ccaac9457748eb810ff3eaafebfae236"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "4113be67bf2d8b6c6821666ba30bacc3"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "231b7dd997cac00da060231a4e7ded15"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "7e2124aaf3c3c7fcd7224ac3a00e9ab7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "8b846897fddfbb4052c072eada513282"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "27219ad3b68af3d82072fe2960bbbb0a"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "28fc53829945137304f1aadd9ed73daf"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "aa0f74a0ecf6e4631908b780041dbb23"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "1e56622b816c414513c8695c29608821"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "a3daef645e70a7ce5d90a3a06a93f83f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "006a85b6a0e00467d28255d1f5e0ab75"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "59f57713df535c3d65bd125c1c60e24e"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "3f67e78eb5d205cf56aa2db89b55089f"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "090a67e8ffa8238b34510b0d127adddf"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "898fb50575ddee114f30946817a44332"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "f46bc5ee6580065b33e5890f8c93baf0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "24f430bd33badbab24274f644625ea7b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "ec3091d616381bc931b00f9a19226ad5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "fd8425b8a3f4c60ebc9d2c77aa579976"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "94b0df7c037be0e1a266740de1b4a2a8"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "632e75e8ed3445e5069614047fef9014"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "5071f2d37b6b3fb9859662b76f747399"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "edad9cd54a5e04ebb18e6403165e3f98"
  },
  {
    "url": "categories/php/index.html",
    "revision": "988e8954a56cc87f3424f5f9b0c43379"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "0330cac2454d244bf8f7ed28e33aaf3b"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "9ab8c58bd0e5b15599d41ffaf825fd96"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "82c0a8f283bee6f9bdf9816883332f84"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "ec84d5738582ba98bcc6a1c4ace869b0"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "77e4821a3bd449674e52e1f78405d374"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "f7e78d0ce81431f5d655bae829df1b7f"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "33bd9658479387b91f07c0bea198890d"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "7d5513e00b3c244563cc27a734b3835f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "c49be7efdc7d0b72faf0fd7dda8e6e42"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "8d080b558841b32ae62972c577e6b169"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "f303ca503f96a08613f86eeceb53a47b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "35e0dc076fbd7f71a91dd816f356ba64"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "9d27b6e3a763c5698fef004e1c8cc39b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "b6b6ee27d42e6a36e3ce7bfc7fef49b1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "705efed9956442b07c91294f0eb507e3"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "7c656f89ba468cdf38746a27da51be39"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "8632a666c01e11482d66d4653ad2f31d"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "b7bc7800048301f73f66bd12bb1ef420"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "257cdd15f1f7c1b98dca052e0f33e5b1"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "2803ca0eb8aeef2bbad853a5b77465f4"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "308eb39240b13dd3dc72ac131e1b18a2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "b48bf1f87ec7296a69b81df5eb1d76f3"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "f7c81613b960545a1f353d4f3702198b"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "e772351af539b48aa5b05e1fd590a027"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "3d08eda453b855435f16c541e3f11e13"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "e97fa9b09d45b0f38fd4a2414c1f7d5a"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "199affc87ade161d6852e3a3a00fa96a"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "87b5d03698d7097c4a41ccb16148da2e"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "2a440883b6290719d8923decbdc1d976"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "de459492ab4f6a391716d2f683bdaa51"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "434c4226b4ee06661397f954ba2125ec"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "6243d32e8f53700c84b6d3d1564a3fed"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "03d26277015688e3506cf52118ddb768"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "5aa5c04baf6905cb3f351e263586b75c"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "aa9ac3f785a79e8f9618261b7f996313"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "7172410f0415f4da36a4951b13c0fe32"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "64487630b862df839d7515ecb66a3422"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "08747a0132a35beb49de86c9cc0e16d9"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "1ad6fd1f34a20640c7c305f48751bbe5"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "654e98cd22a61fd0388b7bcae4dcfdce"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "1568e7e19a14f10d184bd2aab842a2b9"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "85809b7d97eeff5fef23c76e8fa785f4"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "709ce53defa6f98639ada58514f2d82b"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "623c375acdf09761d473d61354466fee"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "f39416e33bdfc5538ae5651c7df39d12"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "d621ddad6f70be225a9d34354911cefc"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "fc204d5103bc8a750ba70e600ed231e2"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "988bdbd2350306a17eeae7677d1f53ce"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "00c4620e08c228c4f18040e0a67ff847"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "847d048f5ff5d699fb1511a651307f5f"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "7735c64d29da265ccf07cd20f1931927"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "ac0bc9a934b0f5e3a95c1a7ecf416586"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "c8c6d7aa9504e7c10da20383a20aa72f"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "11b6596409a3f024492e569406b9fb1f"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "9b94a50a77de95c9cecd9e192a4fd1a6"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "7cef1b76a79bd3cd8a46b102cc2c2ed2"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "c166040a376cbde82518b40c297acb04"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "9d7feb0920b6fbb1d1c935ddc396d26d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "8d9ac547df9d67e1e15db285458ebb0a"
  },
  {
    "url": "categories/python/index.html",
    "revision": "cbbfa6ba874bcbc5ca542e5349ec88be"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "d33bf88bda5a25bbf037313873ae43fa"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "07166c9d1dc2c7cbad7941da8c62a41c"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "41247d7028eabe779f9efd6ce20e0f6e"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "b12073a4767fb09dba2a981fe8704144"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "49c3b579d7f19623d18712f88310d2ca"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "f22bc61596ae9b31f727ee463edfb532"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "ee9c2d90c1513cf63004dc81811f86cd"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "33719f2e363f92e1bc71717ce6a5a847"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "ef42082b1fa9559a69506b1ff35e5567"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "253c79e6c2681f0eb81ceacba841e41f"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "700ec1bc30f1f5d934fcb28c8570aa7c"
  },
  {
    "url": "categories/system/index.html",
    "revision": "58b81a8762884e8079143c3e794bc667"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "1b07c5da518b1358172a098e38cc50e7"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "c01c535aa3b2fb3f278d70752d487cb1"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "20f761784fbae9bdeb475d99862d785c"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "c5afe91ca44dbf762efb58993a49a559"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "ce22e4b64ee1e6345369f48217e00553"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "cfbfbdeea8402df68ddadfc6513e4baa"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "16edaf913dd68eb492be5979f3c9674f"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "9abaf71fe817d391c584899dd104f72b"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "d94f2aa5e0e5ca7450af03ce149a0dd7"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "21d0ef621d94ea97574ebf7e8ad838cc"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "0e840355fefd4c3c63bbf3d1a064cc21"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "366103a043f3fe8d97c6f34cbd6d5dc2"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "56879c61dace01745af9be42d838e933"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "db4f1a6207c0c07fcb69b851cbf7bed6"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "47f5b2d0001914218d1b4629a6e5d253"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "036b6ce1e8ca2911236a5412f285b21e"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "26802cbf9eff7c087be333c6a5c6c340"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "4de8af725c0ff96265ac3085612a2e5c"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "6a70137d49aec402bbf7ff78c9354f17"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "57e8c13606c4b7952ccc2900cca07daa"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "b78253f291d47adb5d836ef3c05a7637"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "e445ef49e1f68c5132e00dd1b1dcfc61"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "3732f4c3fcf851dac546871c74f7620a"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "88ef91f43f3c95f161fffeb2e2c3869f"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "ecafa07a532c4da6f1fb3844720ecc35"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "ef982bb7e4c4e17a59a90b542cc2bef7"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "32afc080a93e17e9993e15643a29a870"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "a547ceff752ab8bb3cb9eaae4e6408fe"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "709d012e8da1bad0342711a7df30705d"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "81e5deba9c7774c936451bd4e0bcd48d"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "b9a5fbeeb29835080bb07a6136fedc2a"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "d775efcae809d3f9cf7026847bb5ba3a"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "eacaaed39b95d006c5ec9f7582cf8936"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "9b021d89cf42b9cd732d526bacf4d800"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "d7b2ac5bf28e2f0d80e50895e4ed4def"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "7b198bc5f06d143f5e0be17f4a8132b7"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "770329b5f80f6d9acb1ed094eade7fe7"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "acbbbe272909a5fb5a67d48c638c87f3"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "802b0dc1ed56659685ccef7fe57e5e8a"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "82b7e93fef0a289500ffb954d14b7e5e"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "9e4a352ebbe31eaef9ac81329f74de46"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "2be6f10f5fbef5989b9f65d6cb2bd52e"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "2d41c4045852ebb1b1447be9281d9452"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "884f1057651bad2c9b43cef2904fd475"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "ecab6f46f382f2d186ac03b540a26298"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "9628cb93caa527c9d0291b912a40555f"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "17cacff5f684002a081ac64bc829a8a9"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "4579e344f073d8c42f1ebaf82ebdc38e"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "2d40e65fe6ffa6f4bf9acd6571f527c2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "8fce51aee2fc31d17e887da735ef0554"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "6c962cefa48a4cf99ad36df7826df6af"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "01412a5fa5b0f2b0536ff2323a0d3763"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "26b21f0084a488394ed08802c1854501"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "da805f0866e945c772fa70f061f7b71d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "dd7608c246aa98b2fd30b16aca1065c3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "37fbc655f4eb05756b1ba01b654f4bfb"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "c98bd280ca74328ecd9ce3cd6ca038bd"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "27fb6cb0e44c8925f13b17d0766d9ca1"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "d16939ed6c62b94a719968c59b035188"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "9f61fabd2026f1c4ab3d5c6ca3e91f17"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "586f367dcaa27ddd2b18f053068310f8"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "20d04f8f7e1e5bf1fcf8b7e757508f02"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "55fbb21017bf7536eb58bc728cb0e8ae"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "5f6887467c72992956ce94f6f1e8dd1e"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "0175d859e2b781bb117b5d0d89147eec"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "99cfd21e077587ce7340880d34c8d756"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "26005fcc032e23f7cc4763b2980cf920"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "f9438642b2a4facc5bc3ed2917e02325"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "864b023794941468d9e911baf74fc8bb"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "68b83ccde1d9b2cf384f176073496583"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "56924261e962ba24133abe94a022e2e9"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "355a78339a9a87235b0da6b6ac9cad39"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "414e35df51011cb5be780f2a9d2e86ad"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "f2e0226e5b026a74174f0615a1c061bd"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "c84b61304f018415e0c8a0e4cf42b3b3"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "d115152fd589a5c3f9a8c9776cad7a78"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "ea551c4e89734888bce3573cd082c89b"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "0a5a53a0f3aa4fe16e7ca52d65648359"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "2ca11f5f121b6c7283b8874a99e34fbf"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "e9f6e9a4dae3c7b838c126528a4103d8"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "9d7c0879817cd077a153f13c2a281cc4"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "3b6317e1623c312ef622188e5de50307"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "3e74774c5a4297ec79fb560075dea029"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "25d5ad4d363dc1396ad18a7b914221f5"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "5cc343d4d6797d4673c52abb0fbbcbb6"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "f21ffbbce1689a2ede5ca474a0cbc819"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "3cb93ebc606cf18f1bfba2b1f0863ee4"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "2054c3c2bdf32ecedbb7fac999251255"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "b0fecac818ca7a2793ab067949c88da4"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "76c9d3450c98dae77f0dab41afb504c4"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "826384b5752e2da5013d8697adb93abb"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "16ba9128c371eb4a4d55e952c96e01ca"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "227f4df9c9158970c2ccaeeaec478615"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "5b94a658d6d3e3e4987a01a1e1faa562"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "010b13f1e875e9231b2fe62cc583cbf0"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "fc79001cd2e494e75bd239c243a65af0"
  },
  {
    "url": "favorite/index.html",
    "revision": "e219ebe8c02669b87c70fd52417daae6"
  },
  {
    "url": "index.html",
    "revision": "e3d79c990b879f859d5f2dc1ae544fa3"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "24a954611892f489feca89e7021890e8"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "c1f8ceb3f1e3776dcefb264e9bffca4c"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "0f066a57425a5cf7270bb01a2ab8dfb2"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "7075a598bfd019aefebe28deed7b267a"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "f7928af047f547d03e7fc7c7f19be26e"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "2b5a1f2276b033be150d760090f0bc18"
  },
  {
    "url": "note/index.html",
    "revision": "3f7356f6d1c1086ee13881c18a3bb599"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "939a7858b4e8a4fddc30e32c1772d0e2"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "a36b8bf8f9302d2bec03cb93b1b1a33b"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "cd67cd6bf240386a6a8e11bf7b1260d9"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "bcb3a5180c05972f438aa8c6c28c817d"
  },
  {
    "url": "share/index.html",
    "revision": "0d3a24d8f0f7eaf8c739fcba2be1866e"
  },
  {
    "url": "single/about_me.html",
    "revision": "48a6fa51ed3f9521a3a39565c4104948"
  },
  {
    "url": "single/all_article.html",
    "revision": "bf0f6880ff34c9b7e681fe526c85a59d"
  },
  {
    "url": "single/welcome.html",
    "revision": "f5bdfab20445aa97f24eeb284214d9e9"
  },
  {
    "url": "test/index.html",
    "revision": "0a437894866beec939576a16c167e3e2"
  },
  {
    "url": "test/test.html",
    "revision": "5187d7d1309eccac10ae0fae02db6656"
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
