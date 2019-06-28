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
    "revision": "2dce01af6ee6b70ddaa750420288d12e"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "658bb6a2f7561ad6f49b2915127a9dc8"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "9565c003a7d4096ef7f0f90478d89536"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "62d3159c2ed2dc67f8c939593ec2aa04"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "df14ad0b4045e59cd60d972a6d18d413"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "da1b118b49b2b676716e565cbb80d676"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "1985593b7a5d290287640ba8f3b52dac"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "43327c97f27dc97131337f0a7e28cf6f"
  },
  {
    "url": "articles/index.html",
    "revision": "cf142c77e272608371849e893cba99ab"
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
    "url": "assets/js/1.52f4d734.js",
    "revision": "b95e53c1bff464083813748399384776"
  },
  {
    "url": "assets/js/10.60dc6806.js",
    "revision": "fa20063d8ce49601e228dbb0f829c845"
  },
  {
    "url": "assets/js/11.b1daf321.js",
    "revision": "a68d7cc27cfbce25c87712fe83730ffc"
  },
  {
    "url": "assets/js/12.237783d5.js",
    "revision": "13e89ced64fe8b3620108e96e12ceb3b"
  },
  {
    "url": "assets/js/13.fa400ea0.js",
    "revision": "8b5b6e5d9fc41b1d732d4af5aae968ba"
  },
  {
    "url": "assets/js/14.a07c30d5.js",
    "revision": "53687106348054d91ab1d701d86bde7d"
  },
  {
    "url": "assets/js/15.8dd13cfd.js",
    "revision": "b872c91f8be68556d279749c16f00f11"
  },
  {
    "url": "assets/js/2.1d223392.js",
    "revision": "2c075fd6a74b0d89254c185c35390af6"
  },
  {
    "url": "assets/js/5.86528666.js",
    "revision": "a5fd475dfb12f7444ff982a4031e534a"
  },
  {
    "url": "assets/js/6.28cc4a7b.js",
    "revision": "cffcdf6beb825c3cbd6ccea6bb9c4bfb"
  },
  {
    "url": "assets/js/7.4bcd0783.js",
    "revision": "92143ca4e9da4f40b8193da317aeb1e4"
  },
  {
    "url": "assets/js/8.c4308431.js",
    "revision": "048ee1e5452ef3e4fcb086f3cdc36755"
  },
  {
    "url": "assets/js/9.974238fc.js",
    "revision": "681c64afdc7b87b69d2c84191ae483aa"
  },
  {
    "url": "assets/js/vendors~docsearch.4d1562ad.js",
    "revision": "3f748354fd2d9ee56245da8e1416b63d"
  },
  {
    "url": "blog/index.html",
    "revision": "60ddc62f1817e78d503999d569889962"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "a3b2f2a9c2e934bb1529f9617c9367f1"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "3294434d20a5e7d5fbbe7281c14408a5"
  },
  {
    "url": "books/index.html",
    "revision": "d1f9645f692a56cea95ec96a42f9876a"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "4b772cddf2387e1c8c3bd97b1352010c"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "38bfe39674f843ee48573ad9f5a305c3"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "ddb10a3c5b15acab1d454f808c94ba7e"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "cef6faa5585d3389cf71dd3a8fc075fd"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "407db6816ddca83eb7ae91d32d444312"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "99a53f5966b14f0a0ddc4a1dec130bd8"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "5b086a916763741de40d7c536c473641"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "b1df21d02921029d236b1d8b2084ad98"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "b0cdf4aa041ed8591b2a5e4f513ee030"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "1559a0ea2a94fed19e5018a3e4540d02"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "88d19d947ba98b1811dec302204597b3"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d2c7c65dcc6c37e483f49eb4ca6d298a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "78142cb6d917f9bc5cfae74e22cfc998"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "171ce98383abfdcba597b9ca49c5938a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "88b66e5ef46b83c57b237d7504d4b536"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "587f7c0c664df095e759cad8d6cdd1a2"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "db12a2f3363a6978f010c90413254b60"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "3a077102ee10ad1967529f4ec732887e"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "0406a073fffbf7276becb8a98003634e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "00fdedfec7e520358c92bd5eeed4ce36"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "66e1b57591c99636d4ee9d7a585de154"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "44c760219b03b3ec13b2f69d5e05cacd"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "f393026573981fccb552f73bbeeeada8"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "72b9535cac08caa0f1c839ae72689b36"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "905dcc8fb0ab9e7070ef5d3b7b47880d"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "b205e196dff761d4069ce7c74c15418e"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "d1448257b5c4098c46c757bda6165cf9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "ff6a9176ecc8a41a65bc92204f8ff9ea"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "eaa716810b1b9cb0f6c7bcfd9ab85bc5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "d0d4dfb7c11fe9eb66d6eaa69429057a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "a6044a0c025bfdf5207c7ba45cc3b402"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "c360688db02b3f45c81cbb5709017c92"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "d18fee421cb9b50728ac93d0c80fdbb8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "8494254ab77eafad52ca7bc036ef831e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "e1558e7645c8723f6beb9263fca08679"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "219adfd84e9cfdb17b181f08aa032875"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "ab8a33279cfd4dbafe95c30b53bf627f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "f451e0f7bf09ce02baae25f62d688dfb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "c940fc9406630824340e18a60774029f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "a34fd511e83118ba99c2f6dca0a0e30d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "2f7f0d809ddafcaf97361e33fef3a16f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "9c92fa3e1462f06e77f776b175dde104"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "e80cda05de4f45565592db999d413c71"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "5ebf2cb44f055db2c6e9494615af869c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "2b12acb5ce1e6e565854fbe4063e9444"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "72b6d8fc996b939e276613a457304676"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "ccdcae6ec826f59575223992f7c2fcb2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "e92078091c728fa6be49998e64922a89"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "20e9acbde62ac77c170ca131587ee215"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "c044e3a10bc30e3e54b2abac78cef688"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "7c969e7a99ac2e18c6139dc67de27383"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "e52de91cd6a3b3e6410968f79f76ac51"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "28243502d734f048c429f4cb2133bc1a"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "543d5a00a987d72446314c4fefd1c803"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "0538fadea355250d21baf8f43320849d"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "d81ba831a7d899ae7df9f2e4b557656a"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "8ee7f044b8c9102b409eb8f9ff67666c"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "88c6d1e5b930aa16dbd84d9fec750d0a"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "a79a20996c1bb7fe3f2f86af83b2224d"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "fbef8400dda68e95d56913306cf93555"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "5be3460e0f4f22343eae70551420a9f7"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "7bfe6e2e874c432db95894014cdeb6c2"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "73d3a481e48858eb60195ad7e568b9ca"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "a57fbd612e8088d7519336d5337e4e1f"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "bfb7c73f90d9b179df8cf819b97c1cbf"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "f3ab4bdcc03a73b3a26bb7a946b9d8ef"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "f218d1fc7b14d15bbd1619dca8a1c110"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "46fa1adb3c1f558f083ae824a3db6579"
  },
  {
    "url": "categories/database/index.html",
    "revision": "f2ad2f2d3fcbdb2dbba0452f38c9b249"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "ab804b090a734dbd0fbb2d56e4a47edc"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "ceb8c02d3722e12c5f9ef29fab770e5c"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "f64eab14d4fe799b41727bf03f7f7858"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "467d19ac09e932510cbee35e69fc93cb"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "6a061c176af034ed56a1a9eb5bdc4d31"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "9ba80ea74b7cae720afdac3794f7c1d5"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "fe8ce49a18f84325abc6a342befaad8c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "fcdcacf306889ed8649d32e3bce602ff"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "a914ecc0ddb7b17606dbba4b4d4e7b14"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "7abd1fcbe6187b7625cb5bfbd8faa2e8"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "6927e61ef4d26536874e4b6533e8d0eb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "8702a65ef5323f7ab8af91061b071abb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "459719efab0b82068c0b0933f109bbba"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "ae52175e58a133d5b220ba9df1b9adbb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "b6794ebe82a51ac06865f1efc0c6b7ad"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "77dd0d99b378a929ec35752882b11c31"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "96cda481cadeabe1eb1f554287a29875"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "17c7c0ad838994e268e7419d1fdf3468"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "b6b4dd2c407ee105054d2d74a765ed31"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "328c1e9eecf4e4a3245a76e364d17c1d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "3838e727333a9c384053263c866bf833"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "9894d28bb687e243b8bd67f42f1e0044"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "22ffa4956349d20688be97fe591a66ec"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "63a502fa540422b4568e0d77a6e3afd5"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "94e72eae39422270515eb5ce98840acc"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "709459ccf96c3654ebc0cdacd047dce5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "a3b9956ec1307f468c2b8870858386e2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "a91dfb99f36a652ed3926b12ee439d58"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "fcdc8893aacf459bf2cef5136b8c0b54"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "d8061a0785c04a074c132994153edcf1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "7fec2ce04d7a842c9a12f244a069d8e5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "bc5b43d17f53bbdbac3a0389fba1e17f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "cf172df18a4bc83257048bd14668852e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "56387b0c64f757eaf072f69d8f1d064a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "1e9640c6134561004ae5b2c247b7eda7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "34f237624e435fdb0b7c1744b97f6abe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "217b08a81ead3061201994986ae14ebe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "bc647b4581c8924f10fefe70ff7a568e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "5afab55e3a6e73755104087dab2b2f1d"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "c03470fd2d4b1c0cc0358996f2b6564d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "53a1cf00515ac52455bd611162a5013e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "c704dd012491bcf0d39f5e94fbfcce30"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "a24b5ade0094e57930acd7ea5d1d0012"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "a75ff344dd8d910b4c516bc3dc577c7d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "297ba63d0a3ccf289447d3c106b65670"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "9ab72166156c85c8845b105b42751a9b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "30713f6a4cff5c789c84b29c39e0ad1e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "52a5782c2cd17fb9e7384e47f0a9afe2"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "bd172a62592592b034149c4b6a709969"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "de53879844d11d8cb8c4a16b40292fd3"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "2dd0fd7407c80ea43b1110a623cfd783"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "e1260711b2592460978fa87c88610438"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "f7dc6790acbb365e6cb17b2eaa880c45"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "90424cdcf77492591438c97833d071bb"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "b30a306bac402f5b43387db1eea3c4b1"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "54a33faf724e744f9978ef1b64ac5f33"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "c8daf3619156ee2be5c9518a75be0ce1"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "3ce88e98af994c6bb90076fe7cbc75e4"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "249f03d7a80b1a3bfd608e935ec8cbb7"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "6ddbf09856af74afcff2b66a4128ae2f"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "4a277d0ca72da5f1f367f4b16501b611"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "9aa449d7439f96784c5d1f8efbe02141"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "c49df9dbe967e11285ea08c33f844249"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "a426dded8d8ae72303c44226ab77ed59"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "c4ee8c02ebfb2ce26dff4c00704d7c7e"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "e1e19c7a51ff44f739c4e41445eda7be"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "1cac5319e8b272eb16d7f9d329583783"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "acef9681dfe66ea9f4a2aa571bf671c6"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "6927fea1dcb2213a461b0e8720599009"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "46c37240c8c816475ac81eaa9350acc3"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "ce093c0e4e7d3a90f92076ad1470b6c9"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "619f6fd14c9af1931631d57cf13f43a2"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "e95b726f268298bfefa939f6b183a784"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "2d5ff770f4d94f2c5f67ed800ec0c70a"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "024270f3e09d7b1c62d82093905987c3"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "ea0f001114fcd1425981efadbb8a40bd"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "e868e1e96f4987260e19c1161d0c7315"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "76e8761abeb894cc88970234efee0ffc"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "a6310f8c8437094a096722e5473693c2"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "384083f8a1c7f8123a6d785124cbf1b3"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "9cee50c867eaef2b31aaaf0d7d3c7b29"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "4c9a6cafe43ef2d2497fd99735e8e756"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "4013df76a70c829c746ebe209ad9a5d4"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "d3415b04f7bd3beefce4c249ba16c6c9"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "d028d11d17d93f30ef6f7814971b5126"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "4546e5012b94a13e8d56426bd2d2ff6c"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "27b627e13c4aff6bc19e036be18d0a68"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "1cc25163b680fafaa8fc671beb55cd26"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "e7feafb2358138b5c1e31bb0f5718f5a"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "7941d87c1a5e8579c2f4c6102e607191"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "859e7e88bd6a0fa941c2e56e3c4b60c7"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "1082a63107eb2153b75528d6f2bdffc2"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "4ceaba66462153f7b3ba7408ca8b2271"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "4f42a3cfbe74ea0e00419dfac37af87c"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "af2d0018ab6e254f64493ddeb71a0c6d"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "2662107da21438744ce02f1599ffad7d"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "610be3789a52b41624c49207048332f8"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "b3323d705b3f2423a6acc461c53f3ba5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "c391696097d44678b77f0a0e96656e57"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "3be1415fc76b8b4dda4dd517c5fff41f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "bd5aa654253f3349ff13ae7b0547ad6c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "b967741ebd3f7e3418e5a4b79c5e74c9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "5bf53cfa1b814238034675deb602ed3a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "9734607cc4ba3cccc2dee79c47494197"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "cc9a3e04e5747bd91b5d4546420a8e85"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "2c5da4ca3d6391071a1fd9ed138e2db2"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1450f6ffc7e5cabb1d56b7f3d3480612"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "336ff0b5bcd221f76d97520ecca7ae7d"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "ca08f86e568bac98b1899bc3bfbc5b99"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "1006f2f49c0efa8546c3fb28c73f3be4"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "ec13dfa54d9ecf3a4e8aa2aca1124bd3"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "a151b3af7aaaad5282f178b383df9ad8"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "16ca51a9d755c6c627279ccd752d559a"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "b089a53c1e575a3d6d5e393ac19e3673"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "9d4cfa7191d10bb27618f20dec50b32b"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "5dad7a98a1c6eb70fa295caef27a2bd0"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "bc65c83c9cc50c027c084e9a29414d9a"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "43181d85bb3829647a8a8781727e4444"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "760089690c7ba39d5d14ad011e8e327e"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "d18adc3a94ac5000449fe620be42cc3f"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "82b2f26f21b330caac4f5c3e69be3f56"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "331e4993881ffd4e4e8b4d2dec82c176"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "24d206a957140e593d63fa6f32351efa"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "6b4be31ad00b26668a6527922bb27a49"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "e3336e6f7836b0e551f72465c307dc03"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "57785543f5c315086c5ebd23b8995baa"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "47b564530d18216803aa8631da9671cc"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "c193bf0f6417526b161046148061cd5e"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "0c461f9b7972d874dcd5b3942362f100"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "f9b0a25bd1aef755ffdf52ca4bc78def"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "7d33e40431d2bed48c07fc5d8f6136cb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "1d56732cdd358f049e966cdbf7e1f69d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "f8108fda594dcb04e42c0e1713272e81"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "9beddb20b88229531da3d051d4f6a8a7"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "b757352beb58d5b23dde5e9fec9fd8f0"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "54827a9a5d737b7cb961fcd573251d55"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "250478199abbe89adc5d4c7e96b838c9"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "b64409c6c37c3769a06daac0dcc1b70b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "99afee419119f035b5f3b2c3841c4948"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "e33d9ff816ed2cac1db32821069e921b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "add1ae03408596e39301383f603f94c0"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "6f7f6d7f5d4b2e3b462a22e4dfe241aa"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "ece8856a46fa2faab5286c20bed851d2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "0098008512d5d319eda70c6719103788"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "ac4d7a279c01fef3763678115ed4e9b5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "4a1120f9b9d7fd56cb10ff519cf4995f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "38a23da85659e3c4f3027e50da178655"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "cc0ead87e076286d21cb08bad3777ed4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "7745858bd35a42f0894b57f3e5a5fe3e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "9ea4d03560fb6f5466e1187b095e85ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "c885e37012524cbae4770f97dcc0f88a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "202d4a0b483894cb21d6f53fd42b57c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "e31fccf981c739cacdbbb861fbc80d14"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "4e0d0334fd0731dadec904de25e55f38"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "e1a43d8153709c55bb9f8c7bc3e6d9a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "4848b7dcfb8b4db1ae25d7e4042ebac8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "efaa4455c46b17e2a94ac5a0ee9f0481"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "b8a3e9a0c2f8edecbb7933dfe902e4ce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "d4f8fd70df2c92b043b590c2d367407c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "48c6112cfef1f6a4fedc89c528da67a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "d235f3d3d419d5be1bde3a05e99f52f8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "3f4a0c0c58f241ccabbbf14840f77a1b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "ed30ac3376bc704da4c20ce5f820b5dd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "f47f3a18b75bfee4d32ba214aa2ecc6b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "cf9479bb6b2f98ccfb6044552cc5fd5c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "868faeb0e74787031ae7003cf4dc5ea2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "0c2c1079ffe9d25edc227f556f736d5b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "212e0f2e545c7a8b6d3d082f566f059d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "3a0cad4db8db57265944730076a4bce9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "0ce26e9b2a24bce68b95ae7fbff6eb02"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "75a825ef3a9ccf8cdac781736dd7e75b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "66eed3fc7862f8281e9836a140dd974b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "71aa4df7ac9e83cfc0771be94f2b7a95"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "e20333b166b6e651b6770328c3ba57a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "6b76f30d8a9fa0fe078365d3cc77b3b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "c8b4b2c29c00b8b5c0b46642d7b213ed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "08a375220fe85c6d16b7bba6f47482d0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "35069184c076487414e33f356c201b3a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "9a13404abd3fa9350c1756ab7e5d52be"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "c8cc935c4894d97d993adec7bf8bb4f9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "ce34a4a8042a95265b5e82b9c66e7b7b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "6a2e9345ffcba164dd6924c85fcfa263"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "c3025b7b40ec782deb56dd26b9c8a4c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "f12d3a6075919881eca2d6e50dc48efa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "cd9ceabf63fe5fb0e96b8220f62b4337"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "a2d647de4cf3ad4b5a67e12be8bf345d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "a8b139f1bbb53d00fc53b9ea39b854c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "0c5106f08b1a15afd4b15742d93057d1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "fbb883a6d388ef276acae279305f0da0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "c60ad145dda1dc20c38ea3299a733a52"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "c4893a90c70060b636596fb5553f4859"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "83957d4f662aa207451be9b3d0b6c0f2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "be94cee682c7fb50d8401f23025e2325"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "583cf5af27bdde6a5b118ac4c3a29269"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "ecc46ae59b8c22109d8b00ad8f4d19b6"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "58cef723d82e1793e410dfe523ccaf2d"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "f59f3e04de4d92c11bae38c75fc5c8b4"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "e833c83ad1185bd3723ae1a7956cee67"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "2808bce21dee853e73f6e7c786574354"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "a5708609370688b2256b7857392fa1ac"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "cac1a2d7db949d7b591ce05b38f41b0a"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "12890dc67f6cb059dbbf6749dcb8806f"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "90964f2d7053075aeef89f3c3d61e164"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "b784f3ebe22e3f1bcfe56b126b89f31b"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "b6445f98e2c69b66de8c12b246252f5a"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "c9aea8b1650127d5dff8a5bb868c1602"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "f6491c664cc0c1a85a5a7b6b35429ba7"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "f4e83e3c7eb12ae47e97a9689ee79a3e"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "4c16e7e9b8e663a1aff38257dc6fc8a0"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "2e1e92a12cc025f1fb30528c7da593e7"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "7936ece6fd40305ca89d69216233d9a3"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "a4c6faa64d11c4a81ce1f3c091bb80ba"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "fbdf4bf3c8d0dcc33b048fd8d271c3c2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "5c1eed417eaddafaa6317bb94c4b08dc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "08695dff61be3a0e7eed418597f5150c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "79833d30c7e7081106e346c137f831aa"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "ff2a5a9aba78a2dedd4a04219092f3b5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "e55f9eab134396b259a52943c7c8f738"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "df43ca77ebd997ecf67267c60e26ab8b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "9719bcf4b8b1a32d2610d6aed3aa4c43"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "9cf6753431ad5a6b7e9d9e945e80bd1d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "31663a6d972facd22401d5232665aec4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "81c41f193b7da8991ee7c4874f097f65"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "0cce3a1e83ed8b4492674ac0f676fc2b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "86d4a41291981eb6946dc80020f8dbc7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "4340b5f4fdfe7b87815a9239ef85bfe8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "2eac48ae5194e6c3819d36a3a1f3c7d1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "10f16479473fa3c119121c8fa517e127"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "a7649d2a61d351eacd4f3d54c80d18c0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "75950236f7f4b0259cf0b78ce6796860"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "01eb5d474907da1b38e73dfe91f1d11a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "547d9e0f418810fd31b80993b5d13d94"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "120ebfbb9900bbcd3652c183245186a2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "cc0c493e167be5e51db1fcf5c7cee680"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "4cb5724486b1181d04ac2b4e76420229"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "6dd00f38a01478a7da7c61f7c546a9d4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "a2bb24683dab17c7c7d029609199c8b3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "a63548cae8d70ac7928fc1b88b2e2d00"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "6949b4f4b09c0c5832b7d72cc2ca910a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "aac7b9b1e3ae7b74700b4ab2b811d840"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "8be4e088b69cfc9809d2c056d8798757"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "79a5fb43c079ddb452e409bb875a705c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "f678042e86035bd86047ab3997203b47"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "44b62f3a4034209feffd44d40ed18e02"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "5b4e6ecfec33ec98bd10a2902f4c46dd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "97d37a660214cc37adfdb17068219aab"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "4fb03b3610a40ab0caae2d348b7e4c42"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "c0ffbcc5b3192575c9b66361b768435d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "f1a036e0cb83e350be387b74adc1f616"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "4cff6bb56f61e71caa04688d03a08483"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "a52e7b517aa44fa0af699eb2b0151479"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "c4ba5cf60fd67b3664186a4d9daad622"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "516dceeac9be4ad1f8aaf911175d92fb"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "7f8db16f2a247e9d74459e2698ec6b6f"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "df19fccaadb6129cf4519e59df2a333c"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "e402cc7d86270dbf547c382455318c7a"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "dfac7dbe56ab0e857f979846e012ca15"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "5b9867c4911248aecc0b4946c3c69689"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "52104405a9685d3c46b48c4eb6512a00"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "7e45bae22d49be9385e744cee8ebd5ab"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "b4755aa5c638d312c96389acef4ee3ba"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "cfedf95b0810bca1d1cf9b2063c0ff98"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "262e8ad38b7b0567903f08cbfd391987"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "02cea87b9fa624569c6e931cddd33201"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "9b45c715fad690877dbb735ebd94f350"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "cc648acd8162d7b9af01dbc2bcdda394"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "6103383e5460facf262d4bc1d0162fa6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "d197852d8b96e1551198732014d3ef64"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "b791fed35bb54012fce1fe92b0a4f502"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "96fd6af8926aabe9e1addf3b2ac3d4d3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "4fdf935341013032fcfd5e21af727ee0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "e7c59bfda7eddc346b5a3f3818d68455"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "dec47a491b960cd813455bf25655a143"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "8c0ba21bcddd677973bcbca698d573a4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "24b889a4baef7022e2b888a9d001d054"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "79d4e5781ed846f9f7844b3cf2725162"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "f2605d0b12ed52d0408052c88fce466d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "a84453381f159d63bbe39ec31f9dee40"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "cd46b3fbfd218f3d323c06f071005ab8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "9bd9138c5642904974e6a1b0dc027fb6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "61298b4bf0c50fbbebd5eab25c3af71e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "5ff87d434150f9dfb095dde329770495"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "670e0924c31aad14f8e0ea4d6d4a650b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "19abf582e5c5bdd12adfaa027e99eb01"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "aebede31820a11efd8d3fc7849ca2206"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "ef083d35a440049034fa1b785414d60e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "65c13c83dd68ee458562d631c4a6fefd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "da91ea213bf19804078138c3a6a6b5a7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "313a6354d0fa672d28140aab94fe3597"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "a61dfe1925429901e87796e97e3b56de"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "920cec7bd686dd34962085b702307d06"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "c764e896f5676991156ec869428afb0a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "a79034403fa40e4c4ded1733cea3c9e8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "b1536aec78d61b66e7d1f5a5778a9f47"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "75ed48a7b8330596d59acf40561e0817"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "6f35f3c5e52f6a794954fa0c8fb847e7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "bcbb6d7fe489c923e67cd08d11aff41f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "c46256c6d02d5489c95d598d27740b09"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "d9186c4d02cd9b65c5920289b931925d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "edceb5b04770f0d0fd07b3296f1521a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "cba0f310e8bfc1358997098f4a4d4646"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "dcf778827615efa952221a36fe5176e4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "b60344767d3731075997db8943d1728d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "915a803a276b45027905eef6b737dee6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "db53ebd0dea4522026e25796f69c3354"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "dc57cdb184bbc27cac5c641c81ce19f1"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "bfde35efbb32afb7caae394d741875d9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "20bc4d5db07ecc0aef3a33318e98561f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "48558996c4f4a6361704b65248231621"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "fc98785e2b9bdda92efd5722b8cf845d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "0bbb879deddb3012340495c946bc5db7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "6837c94aa809897623f20013c8e211f1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "35b5f06951bfcb19aa272118940c2276"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "68562a36e6d66f93f66999c0eac0a348"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "ecc8520e3078b9500f10accab19bd303"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "3d4db82d0b83af26f9d1a8bef2f9415a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "60e86d2a8551e35f0af805ea8fdeaaa0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "e6e6ace95e88cb3b3c198a5cd029cc79"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "9a83055eb91bfea3a43aaea643c04aa4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "32830ab96e4dae0497746bdb56cf7e68"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "c2cb798c56515899eaca100f02092572"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "2ea0360718653233d02c004197034443"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "b96347c0da087646d4155b174b58d810"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "d9b0fbd6e611cfd1ca66d7e848460235"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "9dd4a88f6ed0c60bc3c98d31b069d71c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "b76378d9817bc365ddc70caf7e4ca3f4"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "4f2fc55eabb83300273b90fe4bb24c4b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "d0f5b2020fa1003947312985ce8ec76b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "e15f4c527fcf082e8c45754d220d2d2c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "44dd593758f6ccc47992bb28ff16c87b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "f18fc35ded835e4e2f215dc92c459e37"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "981920aee6c35221a906195c71367975"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "7f2293d48c15128dfbb2c0075a2e73eb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "abed974dfc07132c61fa0790ebfa80e1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "6bf67fe5b21b12e1956345622d8ba26d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "6c84bf7fa6ecaf8fae13ce6ce7800b30"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "9def8b528d36a3f71719ac58483eb88c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "ce605ec09af5b810a1fd3f7e24423da0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "3389796f34bd6b323dde022b7132a16f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "5729a772e320e98e73450ef4dd919a6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "a3a0a490194e9df7929e65cb9ccb248f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "d15df381eca65521a4af379d9f766c48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "206115b9b3fbf2fff9fb29c894f02a11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "57df4b0c47a107433915edfc90a66876"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "aa09a48485b95ebb2020b65fb6abf7b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "54ae6bd8775a756f261304cf20a8c380"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "80d100c9c9b6d16686e960baaaba276d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "56b769c29c485d9cf17f27407ea0a23e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "500dfa1e9296bb70194fc77efdc8c218"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "d8e807cf15b2594ce053d1c3b37c61c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "7a8eacb02d77ad87b783447335ffeb0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "3699927cdcf0edaa65f8f6902abd47f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "1c0b9769f7282ed8b1144638172dda75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "60e44cc1aee4dccde3450a235ccc041e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "e89b3e35bf3f0f7aed396ddb327b7fb2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "1f287aa61d5637623f82b1114a611b0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "87f572df15c4b0f462c4bb0ec9c03c1a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "988a3d682cb3b5c2006cfbb76ca14ceb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "c3a669573049cee896ddd19166cf46d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "aeae65c38502c9f16b87352baa335753"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "1838bc47d134289a26bcae28d4a6b1ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "791f4075ce0ef9b15f71b2bc9551d0d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "583fd5af9b3889ac8e47d0e50008344f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "3dd6feb267e36d0855824840e9aafcf9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "fb4df735c787a74f9d6e74ebe507b90c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "391ef23bf762a064aec2416e13659b00"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "f28c075481ac14bbb95a89b3708703f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "a52a44be352166cc9d6614219190f4fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "747197348de3633eca34c55e13dd8288"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "b433d7c738fef653cbab40eb26975241"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "4d88e18646d955dfdabbc33c084a1694"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "c9f4c3b3cbe192fa68e5c3f278bf5981"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "246fb763ab2a459cdd63195239662d79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "eff66bb429c5ac9109f16fdb668e0ee3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "b8c50b389676178705ec3f123e2d4cb4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "b19fc39986826378d75fdcc088f40a79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "091c2a654dd57ae7088b2696c8f7384c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "3417aa3e741870d7e6490c772ee5e31e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "c1fa20e08311eba662c394e5dfcb4b9e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "7372157c33f4143c286251a0871f933f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "e89f217078465b146a387b681e2c68d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "7a06b4075da52bd798cebc21833f84c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "6b1cf179f96775f3f433e88a42641fff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "1b159fdbf4af5ad8f937dcb33d7d311a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "48139429479f0bdbf8e75f2b0ed62ec8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "665ccfcb5e2edbeca003fc574e160a3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "26112396ab09da03219e0ea3f8e98dea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "bc0f1e55813a399c1466ebcdad725e14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "1ec4560d65959c984d974f1bbdbdee14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "49ccfddebfdfe48ccb1ec8ef60239fd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "aa318b82aca264077d6a0065c0aa9fcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "c14629369a08f0a8bc8304a694aeed9e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "aa70c29f4ce42f4cbd6efa4eafd12ffb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "945e320058bb580dbeea99a27788b9c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "41be896aa468c5c400660a37597fa4e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "f2c23204dd406e46b2eca15d94c5f34e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "f9f3f935078acfa39848dd3c2c2951aa"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "d4693e30c408564d502e0eb5cd00e13a"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "0d13a5948a5f598b5a827f64514e92b2"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "7749ea033806883995bf1e0e070cea5e"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "fd2cfc2c5462a459d0dabc561d906194"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "90b60552fcd30d03a9fd1ebd89dab9dc"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "543eb164acfb1232ccaa0b9380e04f07"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "543f067e0c52378d770ed419fbcd0a03"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "1ab8b65fc15d70ce7fe8b8c36572efa8"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "408464cce459862ea0cff5c3134d8ebc"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "36bc9826de2e77cdd4cba1ef388ac111"
  },
  {
    "url": "categories/index.html",
    "revision": "a9ea31ca8c19a2000665b6965b685769"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "2cb0c873e126a3d1947b05c6c457ef79"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "3c432de7ab1e211ab80929b14a8d26fd"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "bd81f0b798dfce98a21e807fb9f09e2b"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "efdd5235e7a91cba097d1c78839149ee"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "01eca6a122357bfd12d22a484945c0eb"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "f9121ac70459d983e98aea73d01e0217"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "fb383dc3deb790aa44e98be0e7d655c4"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "9ebc4a7019480ce60aa188465499abcb"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "cd04362837176f18b1dd07b2cd14ba07"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "7121b020dce25682724b19b10c4d1e55"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "3c868251b5694fad596b78c013aee5f4"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "3cf32feb0ccdbb427326e30f4d7d91de"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "94d99928b89d08c10fe9ad7f386bdce4"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "4d0c4a09da3b9651d6460a13aa5f3f34"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "f2242d121323da0040b0a48132cb66f1"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "8119b37a2b7e33b3cf1b501c79502233"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "c5314f6daa2d944f4bd1762d0aae4299"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "c8fa961f7c78325d0a0cac9921db074f"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "da84adea17a7214870801aa41ff8d4a2"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "d0a9adba4ea739ad6cfce878503e879e"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "54f538d8c8c7ad9159db49c5513104fa"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "e86271aa79481b3c09dff87741b3a30e"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "25227bc508fa68877a77b22d5f95e646"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "dd0a430a343db407367734bcc87fad40"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "90e65f9af708acdd851151b89ebb948c"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "e6e364343927b999da252776bd19e3d3"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "55e4e4f31b771a8f08a3cd1c0e44f0d3"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "fd29e264f119e887a6735b93e6f54e86"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "4db91e16b21045d627b10d0cfd371ce6"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "9f8adb1fa35d8f7936e75af138db2ac0"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "a092335e502b80a3c3e70cb56153cc05"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "5bf52768a54ed9acb24bdeb399ea5847"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "52c9f3ebd67157168b2630956fb0fcb3"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "9ba95d3c4fe23003c739c93e416bbe4a"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "fe23ccdb91f0003bae34e5ad2be390a8"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "21ebb27ede1702e9c6492f8de0e8f23b"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "d782c6e4000f63a6378c9d68a0779165"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "026a49179f18a5dcef2b67a777555ab8"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "c2ba57e29dc0a3034fa4dd5b2b27c025"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "e31840511456c367424b7b0c2e9753db"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "9aadd083ba693088c95252cf13c36af1"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "7214caf8f876381501a3b0c1a69cfc30"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "b4057839ab85cdbca69275c38049b84d"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "850d8c7d2970e183b23f53420674b886"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "d00e6fa85da359be46d29579631f2a08"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "e2f848bff4378e50c2a044dc54521ff9"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "e67da0ff73f1ce7369a2e7e6ea6eda24"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "5eeef12de37392ff37fe800f897f6d1a"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "16e862c305b2f8d8914201580b37aa34"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "a7016236fec50eedd092cf1c6a23bbd3"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "31203f6ee8ca4da825c20b84870110c4"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "3afa667d173b60ed50428a80b75704c8"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "1888ced9ef05fa77e14a7290c1172b5d"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "5ab97a0261a6d2cd54b4610e93f5f88b"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "d0ffd64ebd74ca86523bbc868aa4538b"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "3b01d50a9820e9f3a2cf758704206921"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "f68e1cf64cda65630bdf0dbc1bf1de3f"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "9db33f6385db6be7a84fb861c5569882"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "d31d5763866a93ed22ccdc9d912e7183"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "6ac7d6533ddc9e6a7ca8005c5dc84f6a"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "ef5d6701e7e5832f5e1fc2a019d20c30"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "e68c468c2713ca51b69ef78ab59e3dd7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "37e7d3101d152b1ed7840be103369aec"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "c203574d21ce6adc2c02028a3466c47f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "012ea24708e01ee2cdc0a48175ad3d4b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "26adda84d92cb3a7a7cca87dc7e82727"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "53c4904d09d9d12317107448bab9ee1b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "a4406922d0e511bd741dc57f0f153643"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "4410566622a96b2059ac443d6c5e763b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "892a47ef1522a239832ebde632471cd3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "5c71f07d085dba8fd03a50a4c21819a9"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "ee806120ddfa03493a8d011c58af7187"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "54167e9f48c5e25ee63d9e37d98bf2b1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "cab2b3689ac0d0383d30229557f09c27"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "eebc0b52998021ce3f7099a0f74e4f1e"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "6e1d7baffee8d66696392c855892d115"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "c04b7f3d76f8c0253b8aebcdf8294f12"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "d69e979dba743392c00329a7125b770e"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "4831e1e90a00116d61dea0fffbfc5e8a"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "51dd998266f78a3b1d4430e694f99c67"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "670a4d457ce235e5b862e9243da3a246"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "9946b072561bfc7a5351059861b10728"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "91faf09930e260095fc0962052fe65b0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "8399bff88ddf82c4fea87f380b5a9a19"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "8e1478e0eea2f2a0dd1abb8751bc654a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "4b7a4ad20ba927e39b365516c6a6714b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "0ee54b88321a0eeed3dfc663e4d831e4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "71662549fb23f86914d47f250f604953"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "9b5f1282f325c1cfb1869954feb3f747"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "c0a8dd3458afb0d6579b46177f1c5b01"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "0d186ae87a64ef8b5be33486f5394f39"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "009c67748ba0c5b21ed785e6474b91e0"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "747e20034bc4d4cff06aa1c0fff32518"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "548191de5370d59b0a81890a22773cda"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "772d46bddcc73ab58ec64664837609de"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9ce68beeb728d23e426baf549b04bb82"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "d53d44628d030d2eb9bee6ff03a9c471"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "99fffa25dcc6434c45917f28d4ce0119"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "b2da1c3d8e4d561ab01325ef26e07dcd"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "2828d053f50f0c8175a2a330c62d7e49"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "66175bdeb6461b092ca25c73541bda20"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "8d533fa2d71a3b6c8c38a7a60ee35d62"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "17ea6350321f5d4680443abdf2d774be"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "e116663db1d102f1f5977a0fa6fb943a"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "55691062824c3bf5e75ba41516e16b80"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "a597abdca500aa097fad400523c0cf42"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "17f04816fed6ac20f5b9d8d0a7aab09c"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "a3aa8339d7c09a985bbeac5fbe9c14e5"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "69df049f7cf1dcc7f11adfcc94fcd7fd"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "7e171c815bac58c4ac9f671ad675cc10"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "70347aa3b32b72a7aad280a9e9aab1d1"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "a82d1397a4ea68ba785289bb9d0ca27c"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "111ab4f533ac8c7d5f3094e5c0c03f30"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "d8092c312cc34d77413da128cfde0f98"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "5901ffaa04f0e9a78094d96dbb2294d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "5fbb693a81917f8c5a81813b2625269b"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "8d8f9f265f0b70cbdfdf3acbe6025dbb"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "92ebb0e900a43abdfffba8c721ca013a"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "a4ecf46096a89d871e1c6a59d84f23b8"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "d552f4d7ccf2f8861741f494587dce9e"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "7d3a72ad93279087bae76629f509cb59"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "ffacb396d7c223a36ab1efb2a694d6c7"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "086fd7556d9d52812a9b0a175525822b"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "e0a8bf9be7b6a9dbf4e1c620865baebb"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "c4d05013a416816a561fb4238c2204ad"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "9b4ebc3c12fb5c87c155566fe03dc4bb"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "88a2ec3e1b24fca5e38b3e2b2e61e27e"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "d8ca83c77e743f30365aa0707ec2dc10"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "446fe4daabe2d37b07cc1def8d477066"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "16243a1892de5c5035e29c68c4523cbd"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "c940753b665b60e050fd1fa0927bdef7"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "3bb6e1e9ead9b46c0ab81ebcf912ec7e"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "e7ac2311abe0fba6499b256d9aa48184"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "98f359066a016ef59d76fd5fecbba9aa"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "762777549f20b2b05e26416b2d08d772"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "d1d2e64200301521b47ade2c0075dc45"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "67f1e53f4338180cc5643de5c4c34fa8"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "6da6c9caad1c47817c3478526de56d05"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b30ddc576c8d5ce3e0e87900672e85ae"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "6943e9ce5b7f599d9017735a4c325e81"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "02b8c775d7d251faa902ce07f7bd7a00"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "5b5f7cb898dd2fdc6babadb83137398f"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "e4210c762f5b2fd0d562420338005091"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "27f58d5440934ed2071120eabed5fb80"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "6ca928db5bed19def56fae2b5311d291"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "13be21ce52a69601116b136eb3b613ae"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "9b7c216e63f74feaca80d691e4e5ba62"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "3726ee8f315220786621e8bfacf27e4e"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "8ff1854057a4595edbea59ecb9c408a1"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "92bdf15a4ead422724e98ab44502be9b"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "1f8a853b696fd14524ab282f898b5143"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "e4eb42ee3cb92c0abe4478c777c764ee"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "d5bacedf730324ab4fe147e03641a6be"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "746188304aef23d7aa555afbe812c1e6"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "4c18d79c95674fcc2681e473a95a016e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "5a6bee0626455ae9aba3d5154bb82186"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "dfa083f9af8d1d5f5b8f169ee15e0787"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "ff006bfea8903a532e51c4c51f2258ad"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "413d79846a5614cb8bbee67f975de53e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "2c821022b68fd2827661c1022516f98c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "f69c7e0b0cc7228d3188e43a775d6930"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "057d95a0eb8e7e82dbf6e926a93e6888"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "0e67439d0a39dfc2bd7cae42ccdd56fb"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "43f086110d99bc6553a0fa30e324764f"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "29f635822567f4e82727207c79c52f61"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "06c7ca4bb6443dab4e607daa27411b99"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "daf6ea5ce7c5d030e69c8c825a58c05b"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "2c1134206da84fac4910238847f0261a"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "16c987d3f61caac3f188f7bbf4e53879"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "49c486268c5f7006e649168f52cbab35"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "b5b3974775fb202ec89893b32021a1bb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "627fef72ed14faf24a2ab1ecba0dc03b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "0a0e953d172b0673d09e703f14c4c1b1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "561dfdb5c228b350bf9a0d6c9d87a319"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "71f395261b0609def7cb595042be2667"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "12e2817e7ef663b5b1a112e19716b866"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "8936219fcf5dcac9a523e9d5fa798b0c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "1089336afe15bf1fa1bdc569bb02c989"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "b8f4820441fb408db8ee33507bcb8f68"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "50246fa63bc39810772a56676bb5203b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "f4cb349f6195be32b9586a8e094ee8ff"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "e8071f4994b1d6e0c060c93f700373b4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "45338b77ebc57a437b24014a559deb85"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "0eba67008718fe67932da317cedeb1fe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "b008e9e8886c05d3b9f5a0184e2316f5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "ed0a7934b20aa60fa46986ecf67c7e60"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "9624c284112c1c509d72a27acb085465"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "99c48d5c4af623f4a8a3a87ddd16ab8c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "30594f4ee0bd96b83b6273e3c165bdc4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "e6f2db274de976a101a8aa96de8e9201"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "074b7808282a26f6f08177d81f86f493"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "d247230d05b1a92cfe531384cb6df2ab"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "5134011734ec0eafeec96d46f3f7e1e9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "113a0388457e4db10547b19fe7b23746"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "f3da1414fe13037063b35576fd057d57"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "9f18708cca98b3e9f1147187a043d00d"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a8cb8ba2993e49f588f18f6bd0e6bacf"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "762fa848555b7f49533a293e7c219c74"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "67a7af59d6cd90e6f9a4d6303cfe4b8b"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "21e2ee9165e945ce768a9d0ba4a59f59"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "5d7066464ec2de9e0ddd5f1c257b4aa7"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "87d66e8673820c2fa40a5757e1485dcf"
  },
  {
    "url": "categories/os/index.html",
    "revision": "b7fa235c86be26a8429e29eeb57c5bd6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "befacc840210c32c5e6304b2b43af42b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "acfd247fe170bcba3bf7b99876b43e50"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "e7c148de8d846193714f450de3422022"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "39378ff8bc3eb807dd8d947e1ce02f26"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "842a3f0e06e3d665eb887e946a2a479a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "21f312d1701b33168878164be58b9e52"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "17bdb216bc3d2aacd2cd5e07b6d59dee"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "259828fa2ee4620d3e922706b7098a3e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "c827b8aeec229bc68dc68717ecc2cc91"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "1a6cf96c9873babce81d0a4361791907"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "199e1991bb73188069a26ce8ad4f7b53"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "8a0ba971a9c3470033e1d3173f64dfd9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "1a0aa3ebf7d749a43bbf05fd96f99273"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "de5ad38e6718804bf0e0d88c89aff3a5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "b079ee6a7147602dbe4d53927c7a9900"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "883b02f72b1acf7bb764b0709379cabe"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "7e23eeeebd8a67935e1ce34680314b5c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "72c01d6029ce0f5f434859fc42aca402"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "a98e33a638a17606beaa138e42b6d98f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "453f72da59aac8dcdcdc96c780aed5b1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "80fe80ccd6bbcc60e4d0a9585b950583"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "3805c1b34e77467ecffab7e7ace5a6d3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "8e7fa4992a84eb684535d0d36e0ec46d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "caea19eb477029f011619ca239391f99"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "ffa8ebbd2e2544d327811d7d3add6656"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "8c3bbdad8170a812f38f75c743e31464"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "4aaa7ad47f45b416174061a222bbb0c1"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "fcbd4bacbf87f2ce624306a3ffcc91a6"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "3c874e30294f3195f4d6ba63883b27b2"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "a27d7f65e997dccc85b9886057354479"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "52b1d470c229c39b1ab6208fdf4eb1fd"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "247baf9944468bf830d00aa60c9838f0"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "862993c3868b02c3f8f445257ca7b7a1"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "3ae6edcb468e7336de0249d88ac3c12a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "2c056aded1e191888bb9f5e2b9c4042c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "c28e113326599ce4dd8dbbe580e96135"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "c324f71488f8faa6c6a020587a9badb5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "a3369ee98c56eef336851effacdd165e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "cede21b508ff4ae89b69140adf753087"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "d9c6e6ecb31b17f5b36579d5278023ee"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "fac0c6af158fedbde1962d2683611c6f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "a5063da5f783108049fd357da9560a88"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "060b1d40fb073a84eda64cd1cd8de99d"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "71928d7b9fe809596168079795a88461"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "d9fd59721770a88508857a2cab3d18e3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "d499ab2641d7167a7c76b9050338e6d9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "4dc305b3c159b44e755c7d67b8a3f83f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "f3f79a0eecd13699304781a71b40719e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "0a5b6b4e50345616520bb7612d11f235"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "fa6c26be52e615f916eff1daa08a887e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "9f93ea9790fdbb18dab0935fd0512e7c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "bf9f124ea5808fe522de81b0eb5aaeea"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "c1701fc91e283eafcf278bf08299cc8a"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "f6440b5c7ffa3b2e06d43a8ed2326039"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "b41c5a7622fa01fc52d54dd33da3b24a"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "1626e2d8d2ac8939d08b0f68316fbe0e"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "e9af6afce9d8b71a741834d8390f45a0"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "5ff69d3aac4739262e35a91e4c40de1d"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "97a7063025963a95ae285f216ef54fa3"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "67f1e312a3e52812742ea1a33af5dace"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "d6c51e10df85c15a25a3d49f8e5b4609"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "391a1fbc266d3420cf2b7b3cf08dc2c0"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "df4d183a366b621baf9daad29d892ef3"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "737477bdc541e42ad6d95f3b193d8dad"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "f927fc97483dc1a8a2a0a317a1df99c0"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "c18996a5ae4906ea48e94536ace0122d"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "b4d1eec3079e0e0ae2c304eb14654252"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "ea393337c33f959a1bd19ee97356580e"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "06c9f7260ecfa729f088f79bcd56bede"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "bd069a182d3a999c18c7198768c72943"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "08ceea440cdc31d504effeef9bcd88d7"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "43b169b1b67cba74ceaa64384d90127f"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "8902f3e0f233c324ff8bf8c077e2064a"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "7ada403519919eac5f33c6a6a3c7207b"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "4536d97549b2555e40b88ccfeb90e599"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "863b301228ebbfd2c256834cdfadea76"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "4132c844b19b7bdb76670f4ce733378a"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "df3726f3732465f7e8f24abc043a5cfb"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "5ff67a995091c86557079d3724262b02"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "8b172efee9820508ce2b693121ec9fcb"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "cab80b6e790d346e0ed70cc93f016f00"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "34784bacc6b8266746859bfe8c620f6a"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "1b0f12a1d1171a06d5eca79a0c31bae5"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "ecac18d3b7c58162d03a8918a3f5b776"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "4f89b6457b6a6bf727741d8ec891f9db"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "cc4090100b32380282f009c548628f6c"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "5ebb1434d8f04c4b4ea5d8428879f715"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "1944df91ed2692dc9712a6e12eafd8f9"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "2cb0784cffb7667f74adee0c8315cdc5"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "ed254793143cdd9e862947655e3d06da"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "73a4f5564803e00aad53c3ecbc1dcee8"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "bc6d89c58bf759799a9f9d1e21e9b385"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "3d45e6f15505d5701acf492e3837fe7c"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "78db0403420d331c2f769b8c1ca28dde"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "b9e893e759b8e42deaf8ff52bdf51993"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "b63f722ccf6ab1f9d713afa182aac24a"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "09767aaa509ce4fdfe00b796058da92b"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "3ea68ac075984d2f7668e185a33803bf"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "92c02e5ed86a3a01868eb5365e137777"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "621ba6a30a0eea7fb107a38570d1b478"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "fcbba7495a98c883b53a02649682763d"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "258643d1a4f453168cfadc5628f7dc0e"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "c16f7408216248966ce40a9609da0c96"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "a68d0d424db9a178a86e033af54d83bf"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "2b3142c57f18bbaa31896f6607331622"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "3f268b9549b9b7b4fef1129b3180dca4"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "9f4ddffefa7964ad0e7a5a073e4627d8"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "17524481e780c81d5df5b171b931e073"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "d32d3eb3bc0ffd6c11d104ab7edf4608"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "cbd7b09d655f9f8dc48bb96c9827b6ac"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "e03b4e8219433c097adbb3281a5a9163"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "41fc251e9210db8fafab661656da3b2f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "ddca2a677f2733b86885bba3962cecc9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "24d2664713dde1b8d34a77d4564bc512"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "87a7afd5d72ef1abc3b163600f1610f7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "3aeb9efe7ab4f22fe2781bc471c7e9b3"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "8c82e6b2aaf85296f465d2fb5b19746e"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "f18de260585a8fff469dac970e453cdd"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "5496ff82e26f7df64f589350bc58604e"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "0f74be4ced5572d7c7958f3470d5e06c"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "70008d5c151dfee2b4da9584feab2477"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "105c7a28b1ead4ba5cd2caeb7da0ab7d"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "a6bec4a3973a142157bb4adc793de392"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "8c97efd6b67905302f9d7af096be5de7"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "85315045ff3983a35770bd90620de17d"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "68816db7981bd7ccd5ededafbc168c92"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "278fa1f9c83d028b4c9ee0a2d59326bf"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "7b0fe89e06daa6a127524183c0e156d3"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "d2e36febf2da7e30efff7c8cc0a7b961"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "76d51149c0a3b727ad825280188682e7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "f33e52393a200b3c2e92319be8a85183"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "debfce581c045664975e94280932e34d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "909fac446ce833276c928b3efcbdad88"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "1a050f6e2584760edaf873721caceef3"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "957d87ad1260ce1783a359f6bb1094ec"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "d89343348a1e1f7a4dfb0fd52e5d8501"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "54657ffd230d0bf0f27cb501e7996f62"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "f97497599ad21e1085288823e19bbbf5"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "4a7c7fe30468473de85f766f4b3e33d2"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "6274af45809485b78b0ff3f728572efe"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "e35925c5924b643de0f162d51d7eae37"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "f5534f1e242f2b1ea2f11ff265c3dfa4"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "649ee3169270bf0a7b29745190ef1922"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "949275a0ba1d66e63c59a4fe123a8657"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "0027fceb3009e73830de0efa6feddfd9"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "b6d1be20b6625eee65d6ad25d63fe9d9"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "da30fa82decccf988c9277b233d0a2f0"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "8c8d7a6d0696c2c87b87847eaf4d0ad0"
  },
  {
    "url": "categories/php/index.html",
    "revision": "b42450d447a2f442646c45c0b2aef20b"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "ac10362b3aa5acbd07097505bfe7a1c0"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "5b09bdb2ba5f170e800628cd8f76aef0"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "e70b39d3f913816943a83b508631d2ef"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "aa64b6447750bb18493ba6b060056163"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "9653ae28ad0047aa14eb8ddb7868fd09"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "c4136a8635862038220f845b48d0ecdb"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "54df07af711e7e83d88ce599bf7202e8"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "401923b9551eb15e2115ac38653bc453"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "36178b59d8c202a0e1629c6ebdde09f9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "9a06b61e435548e94072b7250e5b6d8d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "53376a190306e1ad152c8955a4531d1c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "94d626290ed9f182619f4957bc3990d4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "440604c32f74ec8ed93ab8110daf163c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "1498ba0fc909706db1b8cb65051736bb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "267a39bf5ecddf06f8698c8c39c8b731"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "b09311b7bca8041a08efff4d4ac7fc9c"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "99911382680efe05afa5912c21d0ced2"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "923976b27bd4b3e8710c8623f36b0367"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "03d983c54e11f2502aa313ac5c382297"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "aa97579ec8c85e41d3cf8e1170ba7b98"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "8f6e9d9fe0e57d688ea8a936fd7b8533"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "e8693dec6c98e159073c04c5005ed502"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "785c397f37de70f90a1cbc34d82785a7"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "9a60ff90111bdf88d02360f564118e65"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "6794935fc79e14c799e4c78c1c990160"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "7cc2a352dde7e0d096beff9efb753737"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "f03c161263863cd34e6455c89cd638b0"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "cdfe2fbd84b5a02091e9f7a50bbe8927"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "2569555c4e5c297b54e4a98cd1d2f3bc"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "7cf77377947d4722a6466e0271bf1566"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "7ecea96421486994751f9deee93276c9"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "4e3b912e62466eba129550ae05421ebd"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "2d6ae364b2ade65b39c2948180bd01a3"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "94143b209a7bd7952e3b6ec5a2d56970"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "26ae90d5ea75900d98c13a67d7de654f"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "6468d519db9ecb3493246bcd8e65d451"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "e2c599dcf8abb577b1e446d922c823d3"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "0f4f18619efd39fa0fdea54212bd3f8a"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "e7e6e3b5a41cc1dcf279cbb54f808cff"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "dd49f58fd42e3a877102be03b183bdb5"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ac5943e25beb31e2ac08dcc284b072a9"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "14c837f87dc1e019190861774386e33b"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "5c9b997051e97cfa21abe684b6e80b52"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "189c5bc6d4a8806d74cf3889c8234e99"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "98151f89d14bc4415c1f08560fb20a11"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "207caa40c911936a4f58f37797878d6f"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "79ebfc4df935d9903925de73ebf65ba0"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "3f3b1ff673fd4c9cbad0bcf448966af0"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "c161713ee1882291fe5ae917a5b249bf"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "96b4f01a0437fa695a85f12aa789164f"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "c204a15d619c32beb5b86e635cbccc05"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "f6a1787720b5cfd60c13e21f2c1755bf"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "1d8d125a1210a063b7d6b43e33b3756f"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "b591984c4a7343d5a1dacb388ab2fe93"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "e3f4d97af463c454fc2399fc11ad5218"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "5246e4ec7b9e80127ba74941d3e968a8"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "c866327360d6581d5c3a1a0337f79ed0"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "228b33fedde1c5640f3d67333d32c0a7"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "509138476935859df4b9a7cb5da84429"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a55cfa33e6cfe89b72ce43bfeb857873"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "2f48e2d9d8b7fd90717bb6d292ce1388"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "752415ea953cdc12f33ba475015cfe57"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "5ce0274e0fdb38f9459d9b88a4b35036"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "bc28abfaeba1069d1e76900e50fca26a"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "76f9273b3c21e4b840a04cc54aa59f77"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "2f1c9221742f4dfabe148db09e7b1046"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "1160bba29327269feaf1547a1c7ddfd5"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "85c0d84ad5c178605e4e1e61ab167acb"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "53acedc1a733fec399d5b45082da1de2"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "8a87c5e2666424d0eca38777a7eedef3"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "a9519de90fc35531ad34d819dd0158c2"
  },
  {
    "url": "categories/system/index.html",
    "revision": "6aae40487fcdfab87e51d4dd7c3deaf8"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "dd8560e640a20667c1b61bb10456fc5d"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "fe64c46ffc3985cb469e43326e22b702"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "9a5867df0a60bc9d389469ee245544e8"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "ed939580c42d0d5b2945842dda94a816"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "733bf2092963071fbe98d9994551b474"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "eed843577dfe65c7a414405d5922b570"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "de11d64665c2a8b5d5922ae3dcfdd130"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "568955e8c281e4005e4c3c4079aad360"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "4737aba6184129ab3e66962a1819157b"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "15f60d6b0a3f1a686de7fb0b27453036"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "5d705e83b1048d97043aed060e9d07ef"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "70202de5f1759af85b692b6db82d50ec"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "adbdc05836c5469efaddcf1b57d1f45e"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "30cc1cda99a71e4e2d5618d5003efd0a"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "71b9048d703a73839bec90737b120889"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "16a90c577de329079a3a001c19cb0380"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "7c87a8bc90e9682d0e51b68d3db73293"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "e7d6fdf01963047ebd7f47d158872c90"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "1a6d1d35795d05c8d39834d6a113581e"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "6ea173b313ca965b2712ac2bb475c511"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "4811a5107df952e0f41194e0b70a4348"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "daedfcccee8ab993b31a329806310115"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "bd5b70016b70181ecb3ac327c4e42704"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "bef6dd90027f711824c195e36c56e96a"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "e0a11937b853a07a969af6f3ff8e97c0"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "26a1cd0f06b47c491cdc9b5da3b19697"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "d22da6bc8b1d380456bf585dced53b78"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "e5a5570363cdb4275cc6e73670013062"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "c204983f421172ebfdf41e32cf407806"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "d8874ad0a6af165d558164a2b7c2753f"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "866f2d115e741aa31604f5a1ff9bd3a4"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "838a2a473b63f632e01cba0bda18b35e"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "c0e8b1f79698df6b1305535e61461cc5"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "bd9c391d720ddd5e18b4da40c7df28d8"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "4e5002dc7566af601bffaf921ce38c7d"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "7f5f1442c1280366c1ac97724f2b8f39"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "0d53e512c400e38e181be943ce10c17b"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "62e5f214ddd9e4de91fb6a23fd1c61d2"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "c897acfd62eb49dcc6997a464c8d8bc7"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "7adeb70512f812c9b7d3c0af74d0f16d"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "48a0d0e73a8c8e0a026be033ab713c93"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "f68f3ec65e877f466f06a7809b4684c2"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "af0c52b2a0b3ae4d8f68aa018e26b28b"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "2cbb38bf43f79fe5fa097a48593e4b41"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "3c742c19ffd8fdde2589295ee9cdb3b3"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "fe3917a50abbc9041a2a903b6841051e"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "9e4a32be0206ec40885cfee7191e259f"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "9d1ae9b51a59b9c5310c84d6ba19fabf"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "c28c393fb69de2928ac25c61578ebdd3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "09be76b0d4d39e0be44a22a23126b270"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "da69c41e7bcf7803d531caeb5226d730"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "a2ff653b3477dd146f61bfec1d580989"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "b908343ef4e0971192f0af373b96e572"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "df8cb9293f15be7d5104826e8f01cc95"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "43daeb74ad75f41c56b2402865636182"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "9d041530da387c1dd01bae198fb3f11b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "900a8cdab779ff7a1c3e6efea48ed830"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "a0c8afdb6f5a5e815419548aa89e5e3c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "e22b0e04c098cb263c43ebb7a359d996"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "8ecde8df3758b25fbef1cc8944939051"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "53a874935e565008c85052f45e4daeab"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "8333a52a9dc7f381691fc7ab7f14922c"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "6b7048eace4deeb3287906388b894c69"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "b22d52ccb8befdd5c5bd3dd52a7d331d"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "7c7420836bea4e06393d2fde13cda009"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "c5ff4641447a5f871dfb4803f995feac"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "891edae3309b6b4aeaf9410c217d562f"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "35219499ba9f465af3c2163d54313daf"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "84619e61168ff2ed61e0b1989b65c3fe"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "a3beb85dcb7dc8ca982faab04e2d3c9d"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "3d054bbc6b696ed010d77f84f56bdc67"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "c77699ccad2d94ae2715866474b51682"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "a6e9386bf7390c1b4dbb75b11549fe93"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "2f3d5dd43bd5a7eee83820d073311695"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "8008eca58d6800ac0f3639077448b035"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "465ecb7cc9c896476c2ca04c6cc15c56"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "1a7bc6aa791277a806f534ca027f121f"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "50758ea393475020d837f5dd3837d57a"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "3dafd95117b8343d89777c39af41d401"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "b43c1756e6bc7e0e9be08fa61b65a12a"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "8c5bf8d31d4255a0ad0351855c219e7c"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "5e3725befdafedf9d4ccdefd11c0d13a"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "30ae46d4f3bd69b17ebec14855d92c13"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "aa5f88b762c64af3963ea7938b9a31ad"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "e47a942ac0d94ae7c62b4605d8f86858"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "801bc38ab79411b8f2f0d9f547c6d3db"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "99582fda4c434a88f1dfeb41c36ffa33"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "94a0aef6190d7d13d8e92cdc045d8f48"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "6a8d8abfc254cec52525bbec35d96fa4"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "88fec8f7d1d6212add174025ce59fd26"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "52540546d08d4c94b44bd236de9f620e"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "62784702f7732415938e7511583263aa"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "3e454d79bffe6685d73aba5a316cdf65"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "920391132367f42b86a4d27c639234d7"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "c4052cd8387ef101da4013babdd85097"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "884b36faabd07ea01e4fedc6a23d8f88"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "535023c6a068d5a14a3e27313f0d30cd"
  },
  {
    "url": "favorite/index.html",
    "revision": "1e989567bf791c5c6b09de777136f985"
  },
  {
    "url": "index.html",
    "revision": "0eded8e66d0b89acf1e4c461a6c19da8"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "16b309c6fb6ec8e88306496592feda1b"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "db270e8d0d11b7141d47e2980e631c5b"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "1e2e176b05b45de4eb4ce44dd7d8497d"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "7d2e97c10995bd5d0bc57f2a3f3e67f1"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "670dace4152884d30280dad5bcc02c01"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "8f835e27f9ec726d11cc454b39c08a4c"
  },
  {
    "url": "note/index.html",
    "revision": "0c4a7dc44e9c310f69c669bda5bf180a"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "0f451f6666a53c35d55d693c46ecdb6c"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "6f315bd1d13bfda051dcd46abba6254d"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "68250c73bb1c94a0b8e043ef40196c34"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "33fe1c8497963b09734d92737249d9c7"
  },
  {
    "url": "share/index.html",
    "revision": "8f1b8bc8b50bd46774e63c70dffecaa7"
  },
  {
    "url": "single/about_me.html",
    "revision": "cf3a2c1e824c84dc58f222caa5c4e2c1"
  },
  {
    "url": "single/all_article.html",
    "revision": "1b80203419cf3b0e683507f5d9392539"
  },
  {
    "url": "single/welcome.html",
    "revision": "4d721930032f301ffd17485c47bc9a94"
  },
  {
    "url": "test/index.html",
    "revision": "f3b56758b15f15e241e82b57fb7533ae"
  },
  {
    "url": "test/test.html",
    "revision": "233a7778e1a90724d7b0f1eaa792a717"
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
