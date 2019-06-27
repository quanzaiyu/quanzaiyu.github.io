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
    "revision": "39c890f6ba491ebbe1a7b3a384cdfb5f"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "bfa146b6ac4dd7be3c59b20619167e66"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "89510b7a0e6d2030583af023b363218e"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "931444afba8040c021aba96ef64ba057"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "8471d9a25c9c9240523705c73088d4b7"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "2ec0e21ae2389639d74ee542287bd92a"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "a0e5645f21f5271ea4e91594f69cd4fe"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "a65cd3af14bae95f89c5dc034146deb3"
  },
  {
    "url": "articles/index.html",
    "revision": "6bbc3dccfae388998d179dc5cc2c94a6"
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
    "url": "assets/js/1.24740520.js",
    "revision": "3d4bb4bb9fdfa7e551bc869e0b1485f9"
  },
  {
    "url": "assets/js/10.2d7ffad4.js",
    "revision": "f60f4cdf341cb23b4fdb1684f42eaa69"
  },
  {
    "url": "assets/js/11.5b3d4a5b.js",
    "revision": "14544aa418567cb553160a9d4a68a78d"
  },
  {
    "url": "assets/js/12.f56e5f65.js",
    "revision": "64bd2db679a1b4abc86589bd0484a6e8"
  },
  {
    "url": "assets/js/13.9378bf6c.js",
    "revision": "7cdf39e93e2422baa577a7385a00f879"
  },
  {
    "url": "assets/js/14.0a844dc6.js",
    "revision": "ea2b8621e24907f14f438a319ac062fd"
  },
  {
    "url": "assets/js/15.87758b17.js",
    "revision": "304a60804f7830406b4624b2e2638cbb"
  },
  {
    "url": "assets/js/2.2c9ffbff.js",
    "revision": "fd000701720c539f3344b58134096443"
  },
  {
    "url": "assets/js/5.6c11c6ba.js",
    "revision": "017be6b8501f2fb3d1b57e7fe17d687a"
  },
  {
    "url": "assets/js/6.495fb738.js",
    "revision": "60b5903cce5980f4a6693f9e4d11351a"
  },
  {
    "url": "assets/js/7.34dd23ee.js",
    "revision": "4643d7662653b571e5268f0eeb08e37b"
  },
  {
    "url": "assets/js/8.2690e737.js",
    "revision": "d7420da3f17dc607cb16715bc255f15b"
  },
  {
    "url": "assets/js/9.316c4e53.js",
    "revision": "c2076eb2155f15f6c556e54c7099c136"
  },
  {
    "url": "assets/js/vendors~docsearch.cba3b364.js",
    "revision": "9e3e6db7222a781f34e3cb84c3061569"
  },
  {
    "url": "blog/index.html",
    "revision": "3f05b2a4574a9c6800d4bd97d22ffca7"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "eeef9b456f5a9c89dba5cab807179555"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "beafa5346d9d2d7fc6d97a41e8fb6b85"
  },
  {
    "url": "books/index.html",
    "revision": "25765e2089913decbc788308811bc413"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "462c00cc7c71de6f1653c058ba9ec610"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "643cce6c6e63f89764f41c2477382fb8"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "eb2d5721d35ed8bb00d544706764a726"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "ba25e586238de667e8846b23affd8242"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "bd433fb379fd1bd2e0f70121d4c7a2a2"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "dea179ea7926ebbc1792801d9483b411"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "4feee8f32bd68cbbea8c934ad6741a45"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "26f28f11c5aa0d3cdb16ab966050bdec"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "68ebb9c41b6ad2da76c83b20239ea063"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "b17e1117b11fbe412afb7cc03a197e59"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "ce4db1cd8bae0319f09ea3c678ea2c3e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d7d12397c06ff479c4b176213a3cccfc"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "5d82f66c4a81d0b72a85d49a9bf0be9c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "d712439305838a526c71005707dceeee"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "10560aed6002c05a9ffcba6503acdc05"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "5aebdbba6c22624fd9d08cc14c74d2e8"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "8992e2184ba905a64132b8b72fb34b00"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "a17fcdacedd4adc25bf51e126ea600f1"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "7668bbbdbdc2d11e18f8c1b17556f09f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "275199902d0581ec370574ecb4756dac"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "c2ea9cb01eb15abba3f30aa7520d0441"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "6b663d110321cf6584e9e00491a0c66f"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "908883eab197339ca0bf61eda09085a6"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "b2ef0b932f0e7d9ef0bb5e08f81279ec"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "a4f36ec630e8825a10eaa7b2f7f26456"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "6b81045f7641a9e81560ff4068a94c29"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "dd55821e9db73dc18cde64ea4576aceb"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "ea040f63e68df21964f0d5d6e69c56c3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "ca5e224de0318a6d271c4f79da087c67"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "fdb3e76328045a212526e190b8c88ffd"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "73d60b797a338d08d13352e5703f7a77"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "fb8e2acbd1506e08b8789f7ec4e90327"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "2015f362ddfe52a4b981e60f15f24109"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "f43cb7a0bf96fa080162ae9c08d9e314"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "48e4c290a7297f04ccf46bf4f5bfb567"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "bc0ccbe5684bcf5279df4f62ebe09fff"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "b83ec8bd48ec7bf079dc2a605f832be5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "df84769b8a0241a9cf29f6371278ec5c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "4bb36dd33f1546118f5d74684601bc4e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "a04cb536a318cb1df2134c6dd982ac03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "230e0470f3233a400f6b11d881945d8d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "c87a05f81a9a458b093b78179a1177db"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "1b2dbcb98c7c060e7ca7336d5a5c36ee"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "12fbfaa80391565842720c92bc1a5bde"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "77252efd2d41015a66a75570a8ba3609"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "dc13569c7488982328d77876eace4d82"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "2c54c2f75393048e1172008ebb8acbc6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "ebc99648f15ab43e4d02a8e5066ff5c3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "31fa1c1964e65a1a1dd3b4228509b3b3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "d8bdf2be5177e402bc42fc35042aa1f9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "77ebe3758bf3768b8a8e210c9c5f93a0"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "47daf61fd2f7ee93227adddab6d7b6c9"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "3369de0dccf52d7bb29b8d949d34b156"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "86ce93e7fe8918444b585e3bad044889"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "1614fafb1ba8a54830dc01542c4920ee"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "5d2fe5af4e166ea225a968d2697443ca"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b19130efc13cf2861f6e30fd14de9717"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "1617a9458a27524dd9f0586d53792624"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "71236eb37c1bb77907c8672b3fa069fd"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "578ed7197fd4f95cdf51fb9dec0bbe10"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "613a32879e7135af1995f69609e5b58b"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "8b53e03567936a884635532b80fb2745"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "5d81d80615fbc50b72d6520c6b052a35"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "21c841ba2a1408df2a3c19b4e172ef26"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "534bbe63c17fee9bcaca11f2dc142f6b"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "deeb5c5b241da4e3fd708591b6bbc8e7"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "f343cab6f490ec1a32b741534aae3bb3"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "0f1d9105b240bbe852f19425a6ceeed3"
  },
  {
    "url": "categories/database/index.html",
    "revision": "c1c5a6f2df182f7c5938121f0c6b16f4"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "b14e09d945a3cd4c351ddca213f6fd9f"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "6517eace10ca98f5fab8e2ed1e8b34df"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "ccc92e6152f5bd3f6913025b784893df"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "bc4b3212e5a57e43a27baa2ad7522883"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "cbce49af4774b545732f44f070cf8ccc"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "2cff1f212be3afe25c554b47f0bb3cfe"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "5d1db07afbf831a2b85ca880c8e6850b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "6a8b9a98025542fa33d57820a67d06b6"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "e7cf145aa2da0824e210521c0505cec0"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "68cffe1f781abcb82e002822d5d24bd7"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "d1fc2604db8058902ea8c219440f7484"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "3a352c5df6294b9021545cfa51e1fe82"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "206aab9224f125ec39dc51fb17dcff1c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "28ca6d0fa6fc17f582193bb0cd77dfc9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "01b99721ee106bc6ce8273644c9d4ffd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "c8d51ad99b3ff8cd3a10f64fd7a13c65"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "facedf507779dd4f6acacabb5b2fbe0a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "1dad721e0df2d86ce350ba1139087a7f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "919875f831510f6943f8962ed188395b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "21cb7a2bff4ee1aaa5b07d807f3d3e7d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "a190fa4de627822b4d8722d537157798"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "e941f3d0f7ca451fc4a0246a3258ad47"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "c7db4d07c3a0c6360d796a19a15de240"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "7e8db074a41e38cddb890cb89a68613c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "240a3598d66d044103ec2d52ea4c7b96"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "45c864761817770ba9d241ee63901082"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "229453ee0703360781f8f567ff48629c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "566114447d515398a7d56e87bd4a43dd"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "2daa3cf2eb804370c672b013d902b526"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "68bef97c703472e38e03e40994d4ee2a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "639895350c13d794c084c07054b87f45"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "54327a84960cd90395fa3be19ba7f62e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "5a012d52345b3904ba7168cdc0751020"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "3af398fe210e32ed8f12c1823736ac9d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "fd7b1080d008137b7ae3510ee378adab"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "1d3cd816407a89b12d945cf03ab8de87"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "9926b22388c726177ae095125017e93b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "4c780cfc3cf2333fa37b036a05f625d1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "bf8663a1c9f7e95ab6d6eb6c08ef3c48"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "3b7fb040d88ff824a4754daf20349c5e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "3f05153b183f7b588bc0f16109756705"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "15706032670e24c01104db4348270504"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "f18fe642128fa83863d91a32bd250c89"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "69697b147ecf44552bc0095df132db91"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "a50797ed656f7107e3e3a5f779399336"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "ac7609461a0f9fe9f37379580fc9ed15"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "6679806b9cc371496050f43381cfaa66"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "67838680005896a7e62fddb1db896302"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "439402aadf89966965b2028aeb829467"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "d4b8190bc297348321674bb7f71e42a4"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "25dc961aef51360418344400874ae822"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "3e02da1519ac3db18c5ec823be1e9e3d"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "caed6fd48ed239a48639a3797a98a31f"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "599d75a399ab88abb7c90753d5b311ae"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "c3f103b7a90a45e6623f1d57664ca036"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "92f8a988341b429582d85b6893fab232"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "a6b0ba21de1e40fd8fd86fa86608dbb6"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "5038514edf7ec5c440ff55550779e0ca"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "fc2562858a5716b941f13ed3984a55ae"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "3ddbfca506fab0874b61e5e3aaa1caad"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "6fba80c636482b8d595dab6371e9e640"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "647986fb1e72736f3a78ce5563f42fcb"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "578304d9441ef96d2c3716de83fda3bd"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "2eade0c7e04a233873178b3a0a24a345"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "d1d7e6acaa7c2488378c02bcd411394b"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "a514ac16b1701cad984af69c6840c080"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "b337a5c9d831db634f6bda5d78118ab1"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "c84258483e43439aa4fc26cd6c77570c"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "86e48ee9efdde368020e6ebbe4964d75"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "1792eb5d4ef31f1556c7b0af7250a05f"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "79395a528ae870a9fa3e9be1245b1558"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "56f88d8c1d7c47540d5aa47ca84eed7a"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "00127f51704ce2834064fbd1dea465bb"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "51917295755bd805ce7ef1b5798b9a98"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "eb78c2b1169a02678dbc208aea4bcd6a"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "c002258d2235e13ab44537f38e4463b1"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "ed8c6ef1848d0a6b6ab22aad18a132a0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "1836db208c53cb80d9219bd7fdebbf52"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "cd9cb8a46f5ffb2c2e0c33d447ffea71"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "c56226c6e12955d3d09eed7bbaed59aa"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "8a3edbca3b91e821facb217b4f5d7948"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "15c71b9b16e6cf90db1512b6b9259410"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "19f4b9548299b260caa07b3941044930"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "92f0e030cfc9eb9452726bc13a1ef595"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "688e0b62c67a8d1edad0424041e1b7d7"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "d40dc89469bb19fd221e05670e69b4fc"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "6a39141175a903df50fb09ab50561db2"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "f1b271f03ee01573885e00f9d629d9bc"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "8b3dfc3794f9e8bd2a27eee77df9010d"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "98cde068011be77483e27d5de25e47a6"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "552ba64a239119388b326b0385bd5fd6"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "37aad424be4a52d4a34f50e4cb58aeec"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "55cfc6de1e2c7bd793733ba16ca1fdbf"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "4189afcd83688265c11b418386e9727b"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "c102582bfa5d3e36fb53d2aa649f7386"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "9642e62af088c2e4e8cf1eff404bd3f6"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "7e98ba766dcac1ffcfa02f8e5d15f968"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "f528a185b9878acab72ea7c6e060ecec"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b436d87ff670a5e5825db3e25137c1cc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "4a9c3fe3e98bf2d6f0421ec4ff3c25e2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "aed49cc7774da4e738ad43a313000441"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "a7e8814093c4e2e9a3fdf73fb28242f8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "0f054f50ae9b21cb6558b0a25b83dcdd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "253e83bcf0cc9545ef5e30d1a3f8a9ea"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "f9313416c1482f956046dff2f3249324"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "0edade7637e247e51bd65f8e267bee9b"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "260868b0a3bdefca433d283535764e93"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "e00e39fa2c85481e98e42b84a298cacd"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "abd8412a8e3af69b5d5ac9312168dd2f"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "0f1c275f30ccf26cd31dc4aaf779f0fe"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "d6041080ef0cf51d479fe0121eef0838"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "7f6b02b9aa991ec23ffe4ad9c9bf61fa"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "23d6d22b4a4fb1f4ad50c108c6386a24"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "d8af9f98952f781cda9f9682237cf9e9"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "155efffd33c745601fc7c3efecd9de69"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "201c735ac337b0f8a71efd91ecf17888"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "6d1927a700053015935a67a09dac0497"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "678b506c95595a1f26c00cc5a9391e96"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "1330a783664cf10767d9dc1c2e239b4a"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "266995be2cee32b3ba21ad48943603f7"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "c7c63da2ca382c60d141013b1d6e03eb"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "721717295801b375225c11a9c0c1c398"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "103a27a34ed28fdeb95f880d6f13eb65"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "4afa0f61ab6bcc1997b73187fd9bae1c"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "08697a981b5a2e4ad019bfa207240d6c"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "26511ab5a8c0a8b19b3d3329d681dba4"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "a4cbc45037993c0ec6615ea925d9191b"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "a48eeec1c6d1678dee82d22578fccc3e"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "c8cdf3ac9c053e470a0c1f04bf186526"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "a1870a0cf012408aa61230c249cad487"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "eeaad4b4edd0f2fe91d2b02dcf91d161"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "9a6200e61a7bf4555d3b8e32926a86d7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "5362547eeda1ba4e71ae9a1b97b3bbad"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "11ce6312d8c42b48389a35d1ddf294cd"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "c3ed446100a812d71ed9b61843b7f6a7"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "6efce3883c7ef1427637ff4b57c4c575"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "323b90d832b4e924d00d74f2fde74899"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "088341aa02492ab6f9835ea3dbce060a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "cf645157db9527c972036118aeab0694"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "71145da9f5e2fda07327cd05d41baebd"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "1e6204f56866c8bbf50906f65a2a3af8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "d842876f72679162081803902008b04c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "baab7d2d28e396d98bbcd52dca698119"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "9c140ff321e8ee3d03b15d3fc67545cd"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "cec261b0c362eacc73392d086852d297"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "c9b962f991938c0cd93e3fdc53e01419"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "df97a9c5e5994f73d13a6500e384eb4a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "e59b993dc184c83bcba359fa23432a58"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "aef46715265b13fccd728f7f4ed9794f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "ba1e0c41b0beacfa0f4702f62e757528"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "e61dbdab90e31384c9284b267e0815bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "722f076b5d65480f4e3bd8f1e7b5aa1b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "c9cd89507b039d970d5f0fcee691d56c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "49277249d19f68dcd265fd2188379fc1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "79c4df965ccacb88bd27ae57b097dd62"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "2b73487d13be5565df0e9ddb3c767438"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "9d398f714825ff580b863a6f6d144579"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "34141590bb5e51c5b4ef819be7f71026"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "bb7540bf8552ed50964aea7be57d526a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "e5a5cbfb5190200281098c43f720640d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "fb4dcc7469078e73d8b96a3f5fd7c8e6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "5d48f8a412bb796c43dc2a68c18a2b16"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "b1a0c7e7b38f376c22feff83fdd7e969"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "ef9bd11d6a2fd84a8114d8a006b32dbd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "19ac7a42d7482cf16af59b8d38d83929"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "0b77b44990a47d590eb61e94de5ec9a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "b2e17cb885b454f1ae99559e68b7e0ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "d3620408234937cc83a14fe5c9b629c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "fb2e3c40512b576074b6c0161489e44d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "3f9eaeebc58b352560763519aa1a6b0e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "1fac8e646c0297375ab5e4ecc591a325"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "d93a30118b57dab89a65d257da9be10f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "0d7d62bd9c87a67a9c194cce1b14eeb9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "5c9c30127688092a052737b5685b82e1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "9ce16bd2110f913aa08048237ac6343a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "36289cf3c3fd0d0bc0ad91250d98bd0d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "04e163ac4979126084225dcdc583163e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "e54e176d17f2ba9520e06dce1aa7fd04"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "1110156288dc576f4263e84b83b2d76c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "dbfde2b9c4f182bce31f417586c874ce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "713db259ac216e9699fc46dc3552867c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "279976943ac8803b94f5ec822c791444"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "4be438ff0d405d013c1b73321f877cfd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "f4aebecb19bd7a868ac41cc61c53502a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "8040b54a227993a5b98fb13e49648275"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "8ec25794bb94b7feb6f797492186a535"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "6fe92f04f2e1d3ec3b202a448c4c375b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "e03a5bd8bac07bbe5da8c50f9b6b171a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "6e959c921304aa1a79dba28e2d14c44d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "c0e9be77e76d991e9695b747af5cce44"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "2073e33eaae2509ce4ed7fed9c17c937"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "2d13c55c137b41be51c2533683752619"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "70812e80e6472e2d75b6dccf931f0698"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "24857995ab8532c7c19b2a39ca61650f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "87b0cdddcea88aa3059a4602a5a8bc48"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "48009956261ee1cadc113550a2e0ad26"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "3349761152d6278cbb7197b3fa50c2c2"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "983f3510def6d6aa85bcffcb3fc69503"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c55cc85849353df98ab1b6ec325eb5dd"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "cddb7294a1f74858cc213cf789ddebac"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "8a32f7b593cb5701484e141f3769396f"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "3326e30a2d8804d8cbca420607d86a3e"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "1d6ac9f0dff2c2abf3a82e6d118844ec"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "1106f42dc4ffe19085608f7c19724219"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "1b7ed687bf8a9ec6916a62bfbf36c9a8"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "34fe40f0dc0e9606ce32223ee95b43a5"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "1bdab820a3e7899d2517956c9d5476af"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "08f86a57ef9be3636c2834f6794131f3"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "dbb2e003ecb1fe27f86e14f79d5ceee5"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "ce3b4ebf4a45fa0a1d50bac28245700e"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "210a3a9ef84854d7a1d8982886073610"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "f3847e3f5203e33f888d9ab07fcae66b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "41c59cc70024c821f8ced73891a19083"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "c54f678b06ddb8f2855ba0b524553cae"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "5137a6d0242265dc39541e32b5a07434"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "6e2dcb6ff258805ddbc561ced549c7dc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "c0791f59ae7032ba4944a05476762366"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "f9ddcaaf3abb5dc45019200083818f56"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "55878b2805d706879a77868a8b87a984"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "de21b80fca7c4ad4dc83d725b63c7edd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "08be5de5c5794928ecc2af2f9ed3abdf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "8340a69fded550b21964cef7df18bfcf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "9ea4e88b598778d353f0144f45dce0bb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "873c7c1e19b8fb9d45a0d3141b003d7c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "9a437f3bb4ba6f25200298b3f5de2aa8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "d6d96aabdb1737dbc88810f69a1eb3da"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "499cf8871feece1489302b3d71f7bda9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "ab479f0f71bd3229bf45bd9abfab2a6b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "01a866a8393148a4dd900700c6f692bd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "cd308eb9cf1ffebe2202c09b5272932c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "3529e31a934bd3736175c28ddfe031b2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "7a8962fcd60751c1613976fba63dc47e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "c7e7c3f8661b7e172c46546b3cc092a3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "fe7a00cf5682a0d1dd66456a818fc158"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "424f373da3f4c19fe07a401417a151cf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "f309d5a824f566773493ec082c0c587d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "9b55e89b4dce386084700f5f5400a4ca"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "9bbf5259f190aa969f25d8ad1d4fc5ef"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "145eadafe1035132e5c218597d132812"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "8993229e22dced285455a276eb0b859c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "edaa1bbd73615b09297218f2dafe0c77"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "8ce13c912976df86026bbb991fd11615"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "618e159d71fca08dd2375d2dded13a4d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "630588152dd63ae34d2186b1e9315b18"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "ad8f32b8dd8c03e0d7623f59c117bad3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "8fa9d1e0021a79d504f0e3a494ae0f6e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "6e84d73c490ea74fc57d937a2dc1c43a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "6b9a91e406121ffde3ea41b762a173bb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "49d56698926c1985ed5bec48cbf9bb07"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "14d2d7314c03613bc80dd89a4d229f05"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "c7ed860dea7bf11b1c8878bc4676e1b5"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "4bbd16d136b2e8e1038ecd42a3d0edcd"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "b74a79f378c4d080a4e4d709bf6d309d"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "978cbc4864b06f7b0ad8c12d6bd1a2b9"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "155325dd3a2a86f4c6f658bbfff53a11"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "28a45c8798251c057b71b9bc8db1f077"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "878d118f88ffd7040ad2673b23c32cdb"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "508360f85a690491dd028fd70e9852e7"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "8ad1ede9ae8c3225cf7b6b10744550c2"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9209969e6103436b2cf82d49cb2d7dd6"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "560daeabfc5934fa6b2fd5f4d7d01139"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "2d9f8362359c77e22440cc78812575a9"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "02fefb9f2d2d1cefa606de326c504ee3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "ba40869b04b63c8c9646c949eb7c7133"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "5b6e731c349a10aee127594276e30084"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "9716278d87998e8aba47be003aa763c4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "63b394d7bb780659128bf89ae20f6167"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "a350976c63c5b8dc279e826956f71735"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "a4cc2cf3fe4e805364451c794f35a873"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "0495b5e77393c754f54259d14b7484c0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "ed21a35f7197b5f141f76a5a25e264b6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "4c6ece040e977bb3ffe0b19d2c4279dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "4633a2bf4ac71535ba745877ccaf71db"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "d672c74cda44b142d19aa4b65d802395"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "3692eda22e6cb828ea5d2349dd260fbd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "92012f41aa65f4542803e09badf6a0ca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "34d9afc49e60bb08deee1a762845a2f5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "e9df6493fa8e0e77e1ef4b2b9d1953ab"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "d75d34fb4e5df0ab10df9c4225710e7d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "2d733a89e83d5d8537047557cfe08839"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "5e842e1e95129870dd1be881c854345b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "3eb1a1d0bae0553908e223fcb72d9779"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "0ae8c322d2a352dfd545f9f1dfcd0c5a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "b60541a41dbd481ca0c2aaf57ce464c1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "11ebd42207b4d3e1ec8490fd2f7b7bed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "47090c39d69af01546136720831c5bec"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "fd22060b56d48afb27978d2714c0c91d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "a0510357cecd573b7d5634a74ebee998"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "9f96e1a2e6cad9262a3a3da166037365"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "efa3b573c66ae19c01020efb4f5a2ad7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "a13996f7a32f7ce2e7a2439dcb7c1414"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "17d52709dac77317e739946ea9dfa141"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "65b429fdb62699317e61af5e28eee1ee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "465d4c1f34bca565fc1708b2bd0d5d73"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "94c07ca2766cb2981a19ec11691e96f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "f6d9fb4460651214bc71a21afae38d7a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "f5be582ca935dda2742c37b33206e577"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "05369820f9ff2c41cbf01c0afbd41ea6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "3976bf8818ca777b2331bdf26bf9596c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "6255b27514064900f2ece5761433d44c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "e22bb99da993db56436b72d9045269bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "1d7c6dcf7dae51cf02f836bfa461fa14"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "adee4cf1f0d61ec3ec7a0cb1b5b99b35"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "58cdcb9bc50a41b4189f8c6e8297316c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "3d42dadcec20c4bbaa845a25e552f2d8"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "67d86b440b81b61200b4bbe543778335"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "9f94341a9d45ef2f88f20b42eb4487d7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "20801875e79bbc984574703afd69eb11"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "92bea3d85964701fa1c284cc7af677a2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "e8bb4fdc650132d53f2089bf5e57db98"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "121e3700c3cf96e3281bff6e4194680f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "cfffe08c22d4783be52ab4b986890c66"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "05633989c3f97fed7103e8aca791ff97"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "991dbcf496fb7e4c2cbe1ba4091690dd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "a466a1bd6dbc2b8b99d4c9f85c1611f1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "747bf208e9fa018f3dcdf0f58174e812"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "eb357aa58e2dc9676c042672bb0cc25f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "d92679e9ebfc619fbef18607e3aeaab7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "fde207f583211fbaaa8232a240dc5c51"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "f1379e5972806b7982d9ac06ac955705"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "252b000cf537528e7d914989390d5667"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "bb30ca57341fff4165c2a661a1187921"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "b1c833c04db74f2df1722f7b594eb726"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "6963443228be8c1a27c44fbde3741b76"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "0a3b996904780e31eb1eac6c61ad0010"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "7579253d13c72a5bd87bd286a0a29a82"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "b9431dd9cd91889c6e6f2146335b8ee8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "375f5f9744330a379153c4c1ef756ef7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "77a91bf0dc32844dcbc883c567fc1b82"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d7cc657de780f0e206d4f8f2b97f6f50"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "78fd0d1eded13c072fcd3b87e6fc0213"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "e91cca53b27148451e7c24c2db8b60be"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "8a358fc735fd310bf30105b5d14958a0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "4d50a74a3c9afb177c71694977d0262c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "4f34d14596363d7b8dff352d56a7398c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "3cb68f663c47f5c1f7b8d81fd3123b92"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "9708f1bbde8c853aa5163fdce44325d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "375bb56a9ee14868570cfcad31c6a8d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "b9111da005b8fcbc9a3c3a13ffc50a4f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "a3187b51069cb0a15895bb4211f9e39e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "b4d526285f760e7b70ef5fc430bdebc7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "1f24eacb9bc5efc6fc9c99852c985882"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "d52d20b11bb076d3121264515e23f0ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "6e4b8ca0efe9577d118452da59598a9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "7e9eee803f1ac1deefd6c1f88f7d08c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "7a2b080af086ea2b384c4191030decdd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "63efe494b9bd4d346c72549fb8e4e7e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "b23c65cf79bf387b13efe061efd5abc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "b5172b61be28bb7bcf2efa86f6675aef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "450a104192a9fb12f545f90e4bbdf8da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "5e6774f36380c06ad1227e2ae79bd0e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "af68e346881d67c0688ce0f725c4138f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "71920dcaba18be45d50fcbad64951628"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "dea00c63d00a2c2c691e50a1b6b28cc3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "979746fe1594b45cefb10f50a2c74228"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "9489ff9de524cab1bbea487680830e32"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "7df7edf5e7f6ee8767b6a7e0ba2e9b70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "20a1b3bb5360d01204685c2ecef014e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "5d7288ac9b8859e60cfafcd6f4c42697"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "dd522b167dd42fcf30a0cfd3341a3de7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "a9e6bdce085e572ebfc1d786da33e550"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "6da0232d38202a4f9d4b7c476ec766ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "c7163e222aff1232fc55162ae7a5d23c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "de690aad1e5eca8e90a4b3bec7c4e243"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "f9b28a00b28b5bfd899bc2487abb627e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "dc5e7c190c4e973b34e390845f488bac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "a44a6f578f74191c5f5875f431f7bb54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "252811c42016d0376f8355f15a0d6062"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "0a87ef92b16e008ae87ce6ee06fa133a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "6054b80764fdf1216ee7eff5b1dc754e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "8efa62f3b44e5d6586a398a40870d427"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "0d2f1347ae08084103f369f50eb7b91c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "a8cae5942a77c2d1127615294bb100fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "36a3eed585edc0cc9deb58f96b3c8b6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "263d77e366ce626738ffbd3d8fa11c90"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "2f286f753ff514da7499d40e32a736cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "436e9a10441329a7aedf8fb1f5ae698a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "1a82f93266bdc39ca773db84bc893edf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "8080483d88ab7829e0c0cd4902140233"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "0af60e75ffd512c121461560c60ed0f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "3174ffd6ecaae67d26d296426f5d2e24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "f1d1660f57c97d84a380543cdeef7b31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "f5060f57356dc4a7c324e41a58c47691"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "6ebfe41730110d8fe85171b3406fc1d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "36e2eedfa49722a5beba6157c7fe6676"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "8ed53fd6421857948e334947a89b4c09"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "43c38b449b7050fc0aa66f4ccbb178af"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "90acbd5d94fab107754db33631138e1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "d4eef06e6ed80bf0c96c7781e4faa700"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "176a70aae7f541bed389cdcfae81fbd3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "9aaaf48eb0f7d5b26e95abcd9116e5f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "cc043692d9b4a1a46be210cbeaee865e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "1fa3358ea431ff063175e47fa09a9fa8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "55f03136e14d5bbd1dccbc1ecc7d51ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "d303cba57e62bda9f0fb5274ffb3f17f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "6544990120cbf542917a4de47dd1d5f9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "6adffe8a01157a825b0c65519dd6a2a7"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "b75a521e88ef6026d4d4b98d0a1c1e02"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "a9c5e1fd360fe0623b496733d2314831"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "eadf001c968ac14ce655d3bc7d24eb05"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "957d12a2cd9da8c129b52a56125c61a9"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "860bdfe1a5b15b4694d39154a60b3f34"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "2482003661bd5f4e944df2a03f45664e"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "fcb3b636bd09c92f672a6d97afd2f36e"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "c16e1de1dae433d3b16b4cc5b3d93b7a"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "e9d544eb1d6c136e2e6712b8f42f0814"
  },
  {
    "url": "categories/index.html",
    "revision": "4b08f233573df3fc826d24bea86b3d0c"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "c1766e69694898ad13b0e68bd2cde53a"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "3793bbb4d7a75f677098023fc751e269"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "7def576dd0e682decaabff709b80aa12"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "6f70058a1e74e9fc90c03d9f570778fd"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "2f800561163ea4415d20bb744298e2f2"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "07a9b46ff21ad4d1e086a2acbdf7c2de"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "976c6baa0ab9d706c9ed19e441b6628c"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "081a3300101235d82a2482d5d41d260f"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "bcebc9898ba95ce887a292ffe955bb6d"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "c3a94616603796338241fd32c73f41ac"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "c2762bd081b18c0764913a52a5a0e03e"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "0ca2d159510ce8ae17bc1b5605c980ce"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "f555ebb5f940f8fbc7582b3147f609cd"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "662744c27ffeb9f9b76d78ce9ba67792"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "d259a7b270322d09f83759fdc7724764"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "b0c97250201f2c53e16d9cee455ea37f"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "63ccd674f1c6b50f051ebf29246d2d46"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "56e341a53d82346f2e8e0fd342fe766e"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "9484c806a28b751419ce03152147bdb4"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "87f41186631818bdacc0673454e12458"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "af3b9ecd5fa525fa33767737d280656d"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "7044dc89d7617a8f10dbd60655aabb87"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "d86330b169d567e29fda3d89f5548cad"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "fcaa1e8b63cb6cd47ca2627382e8a092"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "90fa819cd76fb8d8f087f1e51291d39f"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "5a557f6ce070135a9e0c22b63faaf795"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "41d6edf2b92c57d2d93e9f3c5014367a"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "e4434c5653e2f8336222639e77446d70"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "589d5273e9c4b076c7a8f2defe550ccf"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "fed1eb2e1dbc36b367cec55306b1f238"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "3cbe9293407d13cfcd2ee19c98efcdde"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "77a4226493128c0c92d00d920d06ad92"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "4c3584aaec9ecfbb660d3b801163f33a"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "402ebfcaf707cf6f9c2b13aa8837c8c9"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "ebffa37e8d488dcfaf375345867b0e94"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "e902dc048c892ef5fc0169c2072dfa7a"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "0e30e13b7394acc5c5a5662ef3e65131"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "051ac94156034c854f3c9c61a740d8c2"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "0dd2a748b579641c23cd5e0437b30635"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "ce998a10324b7967a3c08724688d9a7c"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "768c039a874dd1b686a26145f8598c5a"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "fe4a182cd6c6927f4ae4098936a58ddf"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "c53698b948361eac24af098f666710f3"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "1bfb7c0afae92c6dfcc1ef98132aa448"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "00ba815c1159346329f7c00b051f4069"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "4fd7b71496179dab9d8f887fef43fa57"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "e08794cadccdeaa928b95c585ec7f59d"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "e157f38e79965f65ee27bf5c3212de56"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "c5a277c281bf97967315730492ce24ca"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "861597bb4aad70e540e383feae4e6e41"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "69e8c6d8fe8d945ecbd417125c795993"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "f9b59a627f55b1a411106e18040affff"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "923f21b28a8f9fd8b182df1b792b6b78"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "0590973c35971082ac378d9a3d25e229"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "055abd32715054867b19c9d6a506e0b7"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "63b55f018a16e70b5ec86ae08508bd08"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "29146e9ee692e5c1d14b1b49658818e5"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "952fc2ced8eea068be510b513af08286"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "abd3ed89f642b81f086cf210881152d2"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "940c10c3e523a60f33ccaad56bbad616"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "69186deff1cbe1a3538e51e65810f3f5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "9d1b29dfceeeca6e6cf5514c85be0aeb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "c9bfe7f5ac3c6deeb07b301dd959ab0b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "28947387f7d0aaeb645a7d49d057467b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "a67c28fd48b750d273d163b3b71b51b6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "4493d14a9b64d2aff8c7eec0aceb0eaa"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "514951ef571c7a56fafbdeb997e368ed"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "45e907026a5fc28c18f3f2c1231fc9ce"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "71433400e92bc405607cc2da60221338"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "b7d4dfb0a9bab19db0617488f7810394"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "972ca6c66ba0b83d542ddf245024604b"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "5014b03cce2eeed1e1ce9d89daa655d5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "59e9584ae8aad4df465a0d636d1df050"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "48436647e5744c3cadc55e5bae765447"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "079c2962a665d4345788429eb6361665"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "09fed0a022fedb592555d7e8bf51f9c8"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "8c813d68be2ece3d927cffa76e11a1f8"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "36bd320601a89de5d3b08749d87c6987"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "616584d3af29c502450b048ae9e64fc8"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "953a52c494ab150df339837047e5d03d"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "9766cf3e13bf552ac9be7f026e337d78"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "f47fdfdc3d3f6ac483787f5e70b93f71"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "6f34200d678939573340cb8bb0377b58"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "01d9ff232fce3457a20f7eb1df876621"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "12a8aa28314e7fb7c6b32cacb67c5cf8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "f22527077f600b79accb7cea48adf1c2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "3af602768900acf223b5a7893bcc3b0b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "089fa66c54c0b3225f962a84f59eb552"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "26f73250f1696d48c656eacfd40f65f9"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "e37c726e443463cea6a40658db753a98"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "0feb483709de05134845e12588363585"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "8584698804af13b6f7fafde7c6e0ad1b"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "8af503608e4de37cb4552a72470f1d41"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "df5dd4aeb1e9d2b5df691b5e1560d9cb"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "033421ad0de6b34ba3640459276e3b38"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7c01c71dd45f55ea112783a9d017b070"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "b93180839f671ad7de86c5a2e5a20b2c"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "34ec575201227e878ebcc8ec1309e24b"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "1cc6753b18f6ae4ce853e07377e2e2f2"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "d76e27749f6db78f81d324fe9e1bd198"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "375e57caec419496d0ce2f3160a2ff17"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "30030723a99b7b70639b64f8f775d108"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "8b5afc3e22e738e0479915bf72f10deb"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "aae0c0b5e0622c66e8aa17282f23251f"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "307e724eeb91047ec0f9a3eb4c428aa4"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "eb94ff961151a3690700d6a66ea1e16b"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "42c03bc0fca264fcd0df1f8328ab483d"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "7432ad996e808db0b65fc923b33f6541"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "ab2ebadf3cb97c81f73d8bccaa7a58f3"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "3bfd68c55531ff3e9d558858ba09d4dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "260850354b0de4bd327dca30d522f830"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "b590433bc913f6cb8c14056bf15771f4"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "03bb393568612bb17a2baa6341dbb3fe"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "776718341af02d7fc70883a7caae7a71"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "312d5e30471ab5e095d9e200dcfbe2c4"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "c3d9f838475e037a315e6be00a8ec5f3"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "c14d0a78e0867972b91b20f9dc939b44"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "eff59a360a67bcef70e47bd9705161a3"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "d4930cb76f5ff726132e893f763008f5"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "0f34c4f640aa8a0e3303e8b4e5f21c9f"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "aee967ffbec2b6635f0273e5a00f2809"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "2bc36325184a60f627a95a4bc03e01d1"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "e53e83b3456d313963d7372652a9e87b"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "ef5be9ef10347ae3cee872d9d2effd0b"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "2d23a5bf360e5f1fe01cf78e37b5838c"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "c1918a4bd6f0e13465b2ccac64336bb0"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "f509a9d09f5ecba2451a5a371aa61949"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "798373c6c681086dba5f0f1cd7b1b8d4"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "11ec890b5bb8b4c8619beb4faf6c4e4f"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "a6f75522db2eeda975f43a89eea5672f"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "eead83c7886415aa7669b612eec4a742"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "ead0e2ec518e74e0274f9b76d1773ca7"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "724c8f7839a965d6bfbc43bebc010031"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "8986a3abb36dd17c236ae4345749fd4e"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "8bfff70f3f03f23218b27a7efcd9305a"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "2d45647ef072c849d90043a8bccdfbbf"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "62375e16d8c0f1c04a1263ec8ad74878"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "b3367b4ac3a8e207f5ea84014888673b"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ece0f5e30763b4cc184f75370d53c3ee"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "ced44a530a727898b6d0feacfcbc1926"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "f8c65dcd00fbba115b09d7b4a597c766"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "a68c5b11c16ad39343394ec072accaaf"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "8862d756e6806acb1de9c6ea42007c01"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "0ae71abc6c7e199d085b34cc5f4a422d"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "e5360cccdcaf959ddf24f9f7edfea625"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "a243ec4cbb67da12e3773f470c4c95ab"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f2e3cb741cd2bd414b13e714ef965173"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "24edbdd650c1ace0827213a527d594ef"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "31049a793c80b4adefdb9130a90fd4bb"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "41d0ce90aabc35ed0a3ed5e2038e2212"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "2ab1a91839c90fb708cb8139ed7bb8c7"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "a83061607c709eb2252eaeb7020da61d"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "2a502c37d4db9e597a1a6819a285a2aa"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ba2fe3c9e62450f1a43aa064ed4ffcaa"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "6016626e9acc524ef5337a8bf5d28192"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "70982b838bbbf1f70f5e72a6725d0c11"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "14048749aec347a4ddd6557230a63959"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "bb0d4fc685139e76d6c826fe3f0c166c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "a808e8c4eb750a45327d47f7cf5a5cbd"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "1f29297f43f9976433bdc487c8e77b03"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "4e0dd6242295b8a9aa27b14d45e35ff9"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "14bd451ce68d8b960e2412f1e110abf2"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "e5ed64b5453912d8d96dd3c949a6096a"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "0041132a4e9d4a72ba1d8284d299066d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "bd5668306c27652c89c64a197a814690"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "645828d3f10478ad2907bc21a7dd5f38"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "7a86e6778ffeb57716eaee8598474a42"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "19eb97fd6f08b31e46b0ab174dcfee53"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "e3b326c86056253b10f7ef4297684e68"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "2fdc31ae3ef28ac1f0d2f25e707504a0"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "d9db8d3cbab1fdaf5a6327127c8d9fa4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "05af788fdf2da277785b7fa88602f328"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "df06cfaa7fb0f0848944595ab1434f5f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "a16ee9f251db88c86334ad8bf8b3f101"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "d86f282a2c4747bcb7f6a9b2b0aa2dbe"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "02f33760ad14fd10b9d598dffc735756"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "1dfadc37c15a322116379a0bb9d29d5e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "8fb6589c22dab2b6d089a03bb0e48351"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "f78dff0ab9d0cbbdca8bfdffef566037"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "4a22b5ce48d6b94c3acb611b2c8e0f94"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "aeda1250c5dd85336ef1e5b037bc154c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "799727905644d3345b1de6230812fb7e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "eaea7034d249b399c45014833112ac8a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "cf3f7fb1be610776a19b3be423f744e8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "35520f64773ee6c518262f74d43c2c50"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "17ee43b97cb42ae23ab4e6685dd14eba"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "ec52cedb2161c63c2a00e42b90127a29"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "3b867262cc7f019a347fdbd1af96101e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "2b382404eecf9a74e22d3371648f8e7d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "b908bf2b2f9629c3900cdbdbc2a4be49"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "383d198c42d9b280a3868936e1824bcb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "32c1cad2d1eb1d430535d4c9482df5e6"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "34ace61d5a0eefee99ab68633f8cf4eb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "4f0283bbb76c1345db0713314cf5496b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "654555afceb5e7c943d77c8a4f654d3b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "d033531b66b6e717514e3c9f682135bd"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "deadda38339c465259e13ae4180a80de"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "adac10fd076e2c0b82a2bc9ba727443b"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "f750d2ddedf325cc12ad90000e2c64ae"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "5c51d25884eb4688e6dfdfb8961b7306"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "220e6ac2205ea43319bdad5552ff3957"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "cad58ed3398d495b2b36b24389483eb4"
  },
  {
    "url": "categories/os/index.html",
    "revision": "dd674624aa9f44b4e68d733e41866461"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "42b7e7d573353bbf64925c4f0888f534"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "7eebaeac553ef6653fa99e07c34a46fa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "4cafb6e50b6ef406702854bcc7cc9f0e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "1efe01fe35295d2f64b6abbc4410bced"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "98a8ae6cfd796cc66f963a1500297880"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "3f65d40706f556ba10a9f55bec4ae9f4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "1a903522742d93f5d00ff457ee3d7417"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "08ac1cca5dbd0efa22f08d5adaba4cc1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "d63deec786dc76554bf3fddf601a0d66"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "9a78c6b26300d3c50fba5f244c01b8c7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d9e3330675f44319f340e00cfac59324"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "1f0c5fb4b78dba4063caa6a571f0aee6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "abc5b35e2a845ca3cfd8d97a8758b70a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "b3135a6cee2c8da569836918c0061614"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "3d7aedab42e2da42324a57f00a87f38f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "039da59dcb385cb68153d48a85718db7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "7fb6431026b3f67b0d9427becad374e8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "888bce47dc372df7614566cc3a9a88ff"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "434d50892e2492afe141022862723cb3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "a2c4dab0d59301f7f1392c4fea85cfd8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "804999ef123e5af4521a69cbe52066b8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "77f013da011f548b5b4bb789306857b9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "6b88f7d39ef8f0532d789a7777e2a499"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "51503a68e695b3f850f599591f369712"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "9c493a770b1e4f341462d62b955ef965"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "ef10276a52de6d0bd916cf436da52f27"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "216aef5da813b06e9d5d3021ab60a1ed"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "a07858dcc6502a617decab045418d47d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "7271e9e185073c326a1d322c9dd71219"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "e18696d585c5571ba8c4d33f8c26ceeb"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "c16d248260da22db3519acac9308bb59"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "48f345c562b1e3d21ebaa2065688d2ac"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "01048c1612a8950a3418fdcb9c638a6f"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "15be5ddd17e4f0a9db3bf085ee00c869"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "380bd5fad2fa079e6dfd249f0af02c06"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "10e6a31f2e9ebb52d86fdbd1d963601c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "4c416bc21155cac140ee29dd6c2976c9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "6fd8ac0bac6ed4d6d07f9c712f2bd4db"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "fe7939034800f63a5401c1b659c5977c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "df8fd0789306f0c77758405207d43378"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "bbcf89d47924ec0fce0f5d9734170a3a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "ef0665a97262c161b4397788ff1f041c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "c9a31996efd7d7117be66818e630ca94"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "1b5dc6a969d40a3e6e908de60a831875"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "a0721b1a7a1168219e92c5de20a61128"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "39cef213e9170bde8e2fa31cbfd55eeb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "2c822dd7eb9d7df7b5c22de14d3bbc22"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "dff5caaddd586a0776b07a0ca18a6250"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "1639d8700e1e5daef98c343cd8f6fa42"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "21aff55dc9c0004c770f903b09a8d5dd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "91fa44aaf2a887e2eb50d8315ceff831"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "aed352eaec42aa80a68d58bbba38d3a0"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "700ec82330936e627b505b8e5103f4f2"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "319bd37681f51b07629b29091dfa169f"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "65cb320684e6dd0845c9955810de4c6b"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "d8397cad3be3937e0b5330705981c430"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "9f81d2abcaf7b485539cb564a9f073d5"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "160ba349f22554e05238082f91798c53"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "e0b20d6b76f024f62f8087b111ae8108"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "55451f7cb6fd943a4479112632c34e4f"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "433863620572b8d50d1412c88fe8b954"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "976b194885cf6344baca63ab31a60a4b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "ecbf507f26b7ef3eb3f472272f2daa8e"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "74e10c282c11736079dc02b2c65c67c3"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "c4178cc1365ee82935c892b17321e2a7"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "0031679780d81ad501a21850cffc3068"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "4fee7b8363788e8543b66eee1ff254b4"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "3e482b0884c14de6827f428609786e74"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "f9c4567b4ec5962a826034e591c19179"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "cbbda42bda953dd9b85424ef2df73867"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "49d7dcbdc57cac42dd8b5f736b48b123"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "1668eb9e2c150e482a44e4c55ff5e21b"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "ddeecda9542eb605f13f7cbd84de8403"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "2adb51836d9462d805449391aa61e92c"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "17a1ce3e21d24323fff8f251c69f358b"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "54c4f43069767d9321d6368825087358"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "f77407909da6a6b7de472884b33f4e7e"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "3fa4871255bcee66bb60fcc334d7e355"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "0d58ff14f25833afa0f3ed09fb7e0e42"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "c08b2c4cd82ea9025c739a5c9043ee15"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "ce6dbd3a08186d9854d094211b5e8af4"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "c7f6206bf928fefe00cbe874bde4a896"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "5e19ef5dcfc9e5f76e6b43f4f9794e03"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "44354e748274278857ea07744894b892"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "4fab3ee6666df7937ddebf56b0e2105c"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "713d7790ea8c1f02e9305408ddb183f7"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "0a135afa342d79f407c97f47c0b60917"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "9aaf27fe0f565abb6dc4befd02ed5b72"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "c256622d3c7e72ae069a25281ecd9117"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "5c4ff693c69c8a0cf8dfa2123ea2f720"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "2c0f1519b8a5b10f0c907ebd7a47c1b3"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "a136afbad8d9a2a40222227d480d185d"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "7058e6902fb784919125694f78bfc22a"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "1f6376ed56e7da9ed8494c537b23868e"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "19e788494614ae9f4194e0e125b14a6c"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "61be8265a12ee5bc3b45011bbd234ddf"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "5e162d6c7dbf79bfb89515b2fef42e12"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "8c938949ee4cd75e72f64b8f8fdf75d7"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "d28ed0f2b507c7048914dd3d83c35e64"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "8b4c76fa95380e0a154eddd8c229e6b4"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "2ade9c425ea1e782fb81677a0eff4f41"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "8f383b6e750bd83f41da7c5cc9c5b327"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "af532bbf2dc2fac57ffa8d2897b2db2c"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "1a9350e885b3acc111bcb8e210f51323"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "e1168a8fa1839670150ef71ebb8cad8e"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "d919a3c1c530e07db52a4b5f27fe7248"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "9518fa8894532cd32acd8e8365805749"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "235cc7e31561f7c3902d4556b503eb81"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "84837df8496d06090506e96d21b73ebe"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "8609ee9514953c6d2a04d461127366fc"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "2c956924a3f001600a5b5770fd5bc83f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "597bb2dd15c8bf2dc8353c7fa2ecad72"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "799eca20d225748441f9f3d099e5a8a0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "8317b0e2b37843a7f1ca9a7267c39eac"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "95ec8b52d668b26ac42081b4498bfde2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "e8d10bcff517fc3cb03f57e200edee9d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "2810bba465ca53b05c3e5505da6ce695"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "929d246a7fdd541bb7ba239b59fa3e0c"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "9e3cf7542d94d2e01168dc90882a2451"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "c6a09308e4353215f2c9085ec6a24eaa"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "982c53079ea613b92048a5da5c2a024b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "31c6dc0505ed139bf474540318379291"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "ec2ccc305d44b8e798aabe41f5efc802"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "84cba463630a9a58fb02e223a5441e9e"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "fd567086e381b3a3c7c7978f2695fafb"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "4bd6ed54e2058dfc28a9c8e6785d0515"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "3913be22c0deabb526520773577a9b2d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "3f93805927f3d5de9c2ef28e5b48e9b0"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "1ac8ed0c9eb4de3e7e214af0aab58332"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "4572195f22c1443200e40aff5068627a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "b3bea4df54240725a9d21d7a39d7a0b6"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "eb63384f0223040051c16dbf5d5b350c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "6a970c0660de1fd3431ccf0ea192aa05"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "3a23d02ec14076934e53bcbeadb7d82a"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "d4de70c3a0170ed5874334a6623a0ec2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "51a90f038833c246e5630809e83d46e1"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "d85c1b1b02aa3f2e50ec5ae808e5258a"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "d812ea89edb2e51ff26035c47eee8e89"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "52a42bde2a0f88a59016acc0a49ba380"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "a31179a8581164fdb0948c4f94c42c0b"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "1fb7291da6f3bf90a112b4c6e1e51e87"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "82804bcffb5eafc55d233799b08aba0b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "363116c515505bbe3dc130c174a6a358"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "f3da4feeacf0fecfa4aa67681534074f"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "0923a005ed2dd99bc888b3c36e1ceb4e"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "4b564c00eebab925cbed528de312507c"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "d8f7f32320b7e57c108a72448aebf848"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "364791d148ad1b5db507bb503befbfeb"
  },
  {
    "url": "categories/php/index.html",
    "revision": "32ac36684aba33d7bd581ec702a099ca"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "545420d5eb3ae3374cbf6f306605b90d"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "47e157530657c5539f2ced73630ce0c2"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "7df91e43d34f4930c12b9edc3caf0b7a"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "97c9609b473977c1e009bee2cd9b0ab9"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "6bd299533c00c7aac3b89fb68ddad20b"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "adc6e69680ed6588473e17be6e8194ab"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "c9d63100c441c354a479232e02abf19e"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "0b72854da21394d3df98c4e9b3ec3ad5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "f8551960c551f022c86f5d0a83e26d8d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "e459525739849d59e47accd85645ea0b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "20f0d9ac31fe9262c2e7f383dfa2f709"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "ac8c504f4970c4ab0b75a9d38d3593d8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "355dac10f9b100f76fe1244d8195c6f6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "77fdf971841e45e9637af7041fba137f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "faa4e10a8fecf36dc84145fa06cfbeee"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "6a77221518db8ef62fdbc3ca86b1783f"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "db03fc2e94a971eca23f206ee706146c"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "b53c98e252eff08e2bba3fce64f7cb4e"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "35ae21038ab0dd389fc743375f94195b"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "d0011b02177ae536473873c996fadf6e"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "c787538b34128ec09e0b9363b0f4dd60"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "78059c85c36ed6e29f71bdbe650a1b0e"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "0e631fa3488af56fffee58b9e88c4d37"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "6d17511a9c83e99b088b0488e8083645"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "1a62384cd722b913b64500e26b32e763"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "382e405ce2766ce6f9895945cd665592"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "a74704f5b7184346ec9e89290b3263d2"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "7d88b9097c4c90cba9a46d25ed496130"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "35517083ea9e7c31068908617c6487bb"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "6e4edb44259bfbb739b840652e14632b"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "595564b8eafde48cfeebd00d56793c8f"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "061073fc2edc052ffeb65c0f9e6f39ea"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "6575ccf190844c2ca1f93e575212046c"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "68924f0c5fe3e2cf5d1d67054d88acae"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "2826ecf30cadfd77950c933e2d23a805"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "b8d8ce1ed472c798e08973d6ac804d35"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "fd138aa68f6ba3fc064bfdc5450ab2bd"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "049e5f87f21e3c23302243da23e34d3e"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "27f5a8707cb92f910adee72b841b27dd"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "f09d4e071718adeaf918da15e30bc171"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "5086df373aa48079862e643c4e448b68"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "282dd1cb5ac7d3aa8e60d7a4a9e83ecd"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "d85664250dd51501cbaf70dc68af3b16"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "acb8271dc82bc6e7fc379560fd3246df"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "9d6392bdd00e8323121716527d53f9ac"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "ec9284620579a1511f145bab6d4d6c82"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "b360afbe32ac14c08d5b7b3262a721af"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "9d3ba29416b901cdd95f6b47e428a429"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "2189bba256cab5f9c76a2ad371d8cea3"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "3b4972b600419aa10d1adc0351b0c167"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "0d6e0b9c4f355228e72934c21f2a8ce1"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "306a6357bfa38b9dc9c0d910be61810f"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "693de64782f0f1eeee6ee79a603084fb"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "21e3e8cf1916e0b7dc74abd0fb644462"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "eceae4d4548f0656169d64b50fbaccb1"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "cc2d3050bb9e30509496a220be77ec9a"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "a2d35a75b4264874353e1d8312168998"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "2fba1caa5fb8edd91aa3531ef563ee7c"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "85db6c3b429f9967756cfd7cc1c9eb77"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b8134504f9dace223e5a12eaf4f4a40a"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "f78eab7a416efe216c5996adc10780fc"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "929139c436a230592f4e36bb1741beb1"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "69a3540388e5e1c6b4df8803f6655409"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "29b418f457a84761fc84fd5f533d5303"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "5b36425336f33df9f0caab7dd8033685"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "0fed01685ab9d2c7bc8e1cf99da96a0e"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "e8f2781b20009b9a5c238f745ec8e176"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "3b633eed1b30843049730090a7628180"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "c72b8b44607443199ee05f632fc8cdd8"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "a866aecfd59afbd24d0496f99b6df469"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "13f27c8ddd9be8083c95c6859566b26d"
  },
  {
    "url": "categories/system/index.html",
    "revision": "710d2125948fb0416b026f5ea0834fb9"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "faf7a86a8320c57b0a1fe36ec547974e"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "21c032ff97167ab6931d76e9185a05de"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "691fcf485c0f0dd632c63419855b8eb3"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "fbc1fa0682723e9b29628bbe174f1fda"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "8d595ed10a444ec668f258b5e526639c"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "f6cc18538ec16e6b69d4fe40c38a2649"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "1adbb9834bf535bc4d51fc93bf40ecb4"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "20d228f631d29abddb1b0fdc2ad5eae1"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "0ebdfdd87cec8d2c66567b44727c90b3"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "b62f3eaa234040d88972dbc6950b91c7"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "eed0ddcac089e3787cf92f43b8d1016d"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "059e8aa11bb6d0f944a0cf1711af853f"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "86df7d2eb3e97f4250d4a409ca9be0c8"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "286660b5bca313a9d6d7eb8cea9142dc"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "7391a2eef7e4a5322fb32718f8b715f4"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "eab44f142f9bc5b0726025872aacb651"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "682e370ecb56875aab5d62806ac3df05"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "57f7c99dbc37e183d26a288ee505fae0"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "dc9f3df2c950e6d6a505eca91fe36117"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "2aaef5e195273394268f2ceca0f47e4b"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "8aa7041eacd228b1db681afcbe333600"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "6e83f12b41c17b74c1560044cd17ce33"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "4e7c0ba907972b9e97d16c919e6e189f"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "45e1cdbb9bc218aa56928a071a8784e4"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "6e0624a030dc9ad675bfa54cf2876019"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "66e3c9650e2871faadfbe498a5a41d6a"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "83d783f877298118ea8d5f1af44a7a85"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "1186b560fbf21f9683c7e1fef4d91e41"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "239e420810d282d589af3c758c2c6d66"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "5df111a650f90b1ee6abe9f46ff999a0"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "9afaca5634ad88b582a2d67a64c456e6"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "840800ecff447fe8b666fca616f4015a"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "5d5189226e9a90f8f7ab81ed4b9a924e"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "809d9461419e35ece1c504834d6c93b0"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "d67a20784967f8be1a9d7c4b94aac497"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "deec66d67cc846cce03d648292cc1955"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "d58ecb1089f11f3a71ff89309c07becd"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "fdf9878a715749a2fc69a48754dd4459"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "6d8187a1e4f299b6df308e7cb1070a23"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "aca39c834b6d4843b6138a19aca59ceb"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "32051b22d65074ea95d0421efd5d7347"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "bf22eecb4c40dac51ea430612aa36e5d"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "b38c6c743db7a680cc7624bac1e2061f"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "d6a038094b91a29eaf6996056dcbc0fe"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "f26e34fe933956eb91b5802eab0537f4"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "7fa9f9890a87654f77ca96490342b3ea"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "46a758aa8d06867639bad5a24400b995"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "7cc600e9f081c0b6cf1c3903200fda37"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "c40c46c129c07b547bce4f87ab952ef5"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "2c797d543b7c012f72884f9e375104cf"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "2890e5db2e49893a20da0e342f97eb4d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "1aa66699bb76de49fec53fd4281f8e4e"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "09b70c145a1f75728f10b09875dce2a9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "283c0d23dda3afdfc3d84d50ae624fb6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "b905d93ed2c0331be2b343965d0b6974"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "118bbedd1e120c10287de03f1eb46589"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "da0dc394d6f669c717e8c10875cc1ab4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "0c0d53d6900bf4cc8387decdba0255b5"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "6184c8109cc49efa60867c943c2f3b5e"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "09c5a005b4c6efc3a51aefccced1ee10"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "dc64c9c7876c05a4429cc1323d734c4c"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "56527e491e1d1e9d54bb0fc9269b849d"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "d2d4d0570b37173b7f1423586c1df727"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "54bc2f390630efa80085785c35ed5d15"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "2a79c4d0d5955f0eefb419a1189ab6b0"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "e40d2c2367ab5ed04bc277dc0abd0a24"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "959adbd2a99f79043e67295dbae82af1"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "cbb1235b50ad393aa3ec8db3a0af88fb"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "fc24838cf625764f6d2ac456c7d32d95"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "daeac6e22643043ea23b16396c04d766"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e20226cadee6239b97620430cc73d4aa"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "a1cf5e4b393bcc9c7671812f39489f86"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "fb7e2b249689aaf35d4b086b0c2dfa50"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "fb12fff52204b2d813b8642e85753ebb"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "dc9fa77fbbba46129757513576f99900"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "099b6f779af71c781a5b4dfbe0866272"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "14c8911e4aacd361fce835f053f652d9"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "888eec6b5e3f8a157838276db0733091"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "56100376897bfe72b8db35757de5bb81"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "648f7a5e184819480c5dd597ab6f6a92"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "85d61d618498766deca77e7f05bafa6e"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "3aa07a9f2492dfa74c322c0be9ff7621"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "a32e4b19a86182e46f39de4459257ff5"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "a1a8829fbbee26d10a7dd5fc89a8fc3c"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "7991faedfd5af35760be87bcabf27f16"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "d1a1fe789441dc0ac2c789f1eaaec4da"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "3159ebb4417109bd0528766ec7c399b5"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "b7fe1b4677dc1bdf7f62951df7405c29"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "e7f67d15dd8eba306083f61c994e0205"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "a2a405170951677b33ba4926d6b2af3d"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "e801a0d9a5ce5406ea3788d9e6bd46ef"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "55832ea3fb83f160ad253bfd6b0fdf65"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "889148bfbc9baaf87a59b252147582c1"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c621b48ca49b28373414a246c6ade88e"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "6989e5bf08d77eb4b0e46763fba16f8a"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "255605feab7006b78fea15bda0603db3"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "2d490d9d1aa73232704c67142ca873f9"
  },
  {
    "url": "favorite/index.html",
    "revision": "0bb0c0d27087e981ac2d98d1cbd21a0f"
  },
  {
    "url": "index.html",
    "revision": "6911e0fb9ac356e38a0867cd9af60414"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "ba03f184868db12f41b68b6140b0db28"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "d7e245341f881edd382ecb09400e090c"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "2149ca0c11d6458aacd03f680b54326a"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "7a3a2ab79ae47e761e295505ae455fc4"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "24e733b0c467fa458318619f5916805e"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "29fde297117c65149e69da7744c5b612"
  },
  {
    "url": "note/index.html",
    "revision": "6b8929fb949fcc9e4590f4759fc4d75c"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "83ab9d73fb050e515e52bdf1af10bb1c"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "5e84f9173553f88dd655ebb8f5da5151"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "bf192916cf819478893381f9f2eabfa1"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "2f7e66ff916665878e13c9b720dba6b6"
  },
  {
    "url": "share/index.html",
    "revision": "aae15c1abe5553d0db832a85cd1e03ef"
  },
  {
    "url": "single/about_me.html",
    "revision": "4a7e06dc4c059f33720d51bf1af1277c"
  },
  {
    "url": "single/all_article.html",
    "revision": "3000874e5721594e4fb3fa87a9c5ded7"
  },
  {
    "url": "single/welcome.html",
    "revision": "b919e6cc223934609909d4f8eab289e8"
  },
  {
    "url": "test/index.html",
    "revision": "8c1f68245c14a4daed018a2c76d884c5"
  },
  {
    "url": "test/test.html",
    "revision": "7291cb210850ac582e34d3bc7745c7ce"
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
