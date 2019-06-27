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
    "revision": "ff3ae995e7f385e3086e36dac0f02cec"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "5cfaf22979a2016e989dfd9473a0b5f0"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "cac327189926236d6856724ac848a3c4"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "5976d6acaa17f347e44eb6b0487eadff"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "cb4004fbded44127c41605e11570d545"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "4ee7ce6aee66acf30c473a2c6df9f355"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "781d5e0945034045ce6daf400055699c"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "8e39e2263798dbbd05f9d30bbaf96ec4"
  },
  {
    "url": "articles/index.html",
    "revision": "84a2220ceb8306138f36348eaeb958b2"
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
    "url": "assets/js/1.afaaabe7.js",
    "revision": "98f42aebfc05e62040cdc0947afe64ef"
  },
  {
    "url": "assets/js/10.aa82e34b.js",
    "revision": "8cc4d8245bc7998c152ec2d89551d8ca"
  },
  {
    "url": "assets/js/11.8ecfdfba.js",
    "revision": "ece17c831265736aed1c82e7fd5a1896"
  },
  {
    "url": "assets/js/12.e029831b.js",
    "revision": "0a74fd59b7b82532264928b8af34afc5"
  },
  {
    "url": "assets/js/13.63420ebd.js",
    "revision": "ba2339b1d5ebc49ae89e44f07dd930eb"
  },
  {
    "url": "assets/js/14.06787ef0.js",
    "revision": "7bb0360cb5756ffe72f976c6662e66b5"
  },
  {
    "url": "assets/js/15.77a51247.js",
    "revision": "052e9722b37e2c91712797cdfdbcd842"
  },
  {
    "url": "assets/js/2.09c78e88.js",
    "revision": "e76e5d69d45d0297c64ce5200e3d5e30"
  },
  {
    "url": "assets/js/5.02c6f39a.js",
    "revision": "559d4f72755cac87ffe7b38de0f16c6b"
  },
  {
    "url": "assets/js/6.48d6b923.js",
    "revision": "a6e5a465e4f98af2e8eb8cf1a0e5c4b9"
  },
  {
    "url": "assets/js/7.341d3c18.js",
    "revision": "39384b88819dd524d5ad42a45d86b21b"
  },
  {
    "url": "assets/js/8.3dd7f6da.js",
    "revision": "132723e19e308a082263e84f6b654871"
  },
  {
    "url": "assets/js/9.35682099.js",
    "revision": "c8cad22beb15ccf17b7252b9c0e235e6"
  },
  {
    "url": "assets/js/vendors~docsearch.333a44c7.js",
    "revision": "e4e7dfc93474ff561827511f9eb42a59"
  },
  {
    "url": "blog/index.html",
    "revision": "38e39db49bbce486e19440354833514c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "8331c62e93bd595ab3e0bc9545d0d7e0"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "c6f1579de6d84a823381c53c0a51b26f"
  },
  {
    "url": "books/index.html",
    "revision": "49b26d066d6fb80af2e01c06b62e89ad"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "acfc8718defeed5fb76b76f314b06143"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "c0d8786e552212961ada731a76fd40f0"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "af56b25de34fa1d28601a53ebd85e102"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "b923d269384f3ccaec63b6c783e09b9c"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "b5fe1f28a62cffac51f710af4c25547a"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "cbfcef9e753d01a170e54a82155ce300"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "02b76ded64790bb2c9bc5a845c7b43ad"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "b6e06fe661497a73641a781232cb0fbe"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "458f2318db7a52bc95bc2dcc711993b3"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "2bbd8019dccdd1a95a8e66c122e4d010"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "b79aa75f7d52bf41970bbf8acc4fbfcd"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "eca9294063c71bf20ae37b5e93910e5a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "7d0d8daee703f859bb13654904bdde1a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "391a1e821360fb8f6247f4000b0087ca"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "ff4090425eec9a5ad1b10e107d876798"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "5cb7eb3fb238f5c96e897bb9e0e1507b"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "f9af2d0a832d9db6a02a596ca6ebda61"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "da5c23e157dff913e2a9756eb28dae4a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "2eef0209f0685d187415554a279da3a5"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "ccd5afa96880089c6713c0e29e0efb3c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "5d78b472668b88367665cb75f7920e1e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "e3d83b21cd45b103e7575e2918053926"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "e30827bb0ae267d58d0ffdfa3b4581d4"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "537bc365e08fea09d68a96f2cbc37815"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "cafaf1ce54396e60b79baf3cc4299c89"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "2ef454f715af6468fdadabd650a6f484"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "56d0f112831cbfc34c90a28705bcd2db"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "3dfc2fef9ce213eceb802a7cb7d89234"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "b5998834774540603a5c399dcb93c00a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "4b9020c52092146cbb826fefef1ae514"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "8896be76b10638d026ea0cee0f389900"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "3086a134fa11e74ba8891e5ddaf41c6a"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f31a51bb1c5c65a91c6778d011ee7882"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "34ef257df9590949c733ce727204fd4e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "db3b1b9b270017fc33b7b9f75bf267f9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "1eacf01cb3ea4acb88c02b1c3012b824"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "b37dc64b2d594cdcf2b298392ec53472"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "a008fc0b1ffd9cb45f7b00ece9f43fc2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "55e404b345fc0862d03a37ac07381d90"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "a47e2648c6016896c92e7c120a42ca66"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "0b77b42f06f66882cc3f266864280627"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "0a489de49c1f4d83a25aba4b029e1731"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "ebfe0d5d47fbf0a9cb38f4c2c8b00fca"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "68fc3b26b638a0c9006339b6b14abcc5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "6b20773c569373664deb8b21275827ac"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "b8dfd42e36f0b834a64e2ebaa54c144a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "709e3c0290779ce4db94744b1101be0e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "b587c1b2221d630d11d6837fd563eb27"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "a60cd94c3f65e6b97eb6be3be720ebbc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "7d19b06b0bf10e9002eff9fae0812339"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "b04bd1260d2738f036c6e5da52163cb5"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "d7190a60b231deb63a733eb3ad99e5c7"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "b8c5fc439eba9d4da65b8da647fb2e72"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "fe985621fd51790fc2b854d0bb0fa151"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "005b0c51a0f48d66193ffcfc4646e652"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "c8ff78bcbe02e092d2c10cd126af053b"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "8e1d8565b2341d87cbf909777b4e791a"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "a6340ebed0a2a9a13df1dfc5fcbead9a"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "a98dbbd55b0d35d4f5c975d0c8828edf"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "dbe56842f20cf3a9844562c3620b9c64"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "8db210171771d7d9d64ca4ba91e9e779"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "1bf18e4a0e36ae4c0c23f6431aa6cd54"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "b8fab42787348bf629f8c98dba3239d9"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "3c7a8971995c58cac1415dfc7b14fc3a"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "97f85f5c7b1216228b8d1486eb4cae0c"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "934f85bdd087beb71dae9cb65a3cca79"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "f0a5a0b4e39ebb03e1e4afcb79158ee5"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "150726ff486ca25c1b302938e07b7a0c"
  },
  {
    "url": "categories/database/index.html",
    "revision": "34bc22300b848f987911e9144245e391"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "7b5e6c7fb2bdfd9bcf6a373c57d36136"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "a1edd0914872f2081818fc07c7f6889f"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "ba5f56a41380dd3c9c5d1797b1e63dda"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "388ab7d497d4f9cf7165dd1305ff561c"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "e0a5b592b61ec3be9e3a960472faa99f"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "ca1ef64173b6eb0ea9ad19fc85d92851"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "95a1c6d69e6a09964142b4e3edc1a577"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "d6a4f4a95808e4cc216e37253aaca97b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "488492a18eb6c973214c79dc280c9680"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "0464f989e5b490971bbe1bc882db91ca"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "6f3a9bab84f640d5357eb7524966145f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "c6315e26dae02d3b74aee0c1c38c2fa9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "96b9a24f34d3ca097506a1b48725fe87"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "56d3e6177dc193bc11ed0a6e48c5abe3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "fa2dd335ae1e126369aaef05c9ef9e41"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "68d9f10f9f15ba4163d6a78a29b49bc6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "d8295b715aeb0f15e3b712b5b99b322f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "5a18e5098de7ac5576373f2ee9db34e0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "8ea98934dbeba8a75ca42c3934d6c8f0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "fcb3204862a86e1d7b079c3777f590d5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "ba4625c1d2e012ed0a2dc34aa1f6aa64"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "850b6b67a5499df1a840dbbe08341887"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "380becc25f0e5ab23ac0f8a180fc3069"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "8e0ae72fe62312f355b4cc29f1acb153"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "2b11880a38b84cc2fd357f9f26db5c39"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "a4e832d3683d5ab9babb0436be00c5b9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "4706babb173a65509eb7c872448f018d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "e607d02d1f9370e00ad77b68928f5e74"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "a53fdcfd59369d3dd6d08d73aaf280b1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "d22a251c26190ae6524e238cd0e4e653"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "91d11dc33e6fef376fbff8002c28ff81"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "2513c6a9bbcb179a0dce33c158d4dae5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "8bb3e8964f4156004b577ddabc55321e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "ccc35983e340600e0f22b6d36f1c0479"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a23e2b4b49bc27538339c8eba1e74f22"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "021bdd6fa19556e416da8c09a79746bc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "1254be68baf924d69ceee875d62238fa"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "f18e3f03d23cdfc510ca547484690a3f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "32ef83b0e9503d42f03a006453ccaff5"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "14e8595cf704f4a04e0f212b409e70c1"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "c89fc5bb3ecaa86b56488699b13affb2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "96b66c831035dc87da24226a82298c15"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "f3ae327c02b2543b2feb02ad3e21e16c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "73101250909e9bc66a02fcd236ee96a9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "f6bfa3d81af4dfaea87330e5b0755404"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "917121128353a59379770fab1ba782a5"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "c74883d3d1aba92873488d44952eb77b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "1d9f7ad853c5f7b54fd4849a7858e83f"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "289c2dbf22672479cca785b4b8b78577"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "ecccc3efa41d979eb382cc45a41a8c38"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "33b399be704ad663df3b87f3aecd3e2f"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "e5d23dce18dc02d15a27b2d63416dc63"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "004fa2822b60b6249677281a58275076"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "176682f0347afc75c9cc726ca82b1c7d"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "3b4cc57da1c655439df5e6a3629f041c"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "6dd62a029ec9160a298fa3aba9cfb80d"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "9677e2119631dce5efacf5e7b186cdd2"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "1af994314d076cb1ef52ade9c34bcffc"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "d7379e2def2d0f9f51ac45b2e0b00433"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "045c84cbd05411ca307df91bc3c3a67a"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "d2634e4250d8dcbf29797c8545bdd343"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "4847f3b5cd3d16bf829c88dc5c3d126d"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "306f8cb794cba616e2d9f5e6689b8bc2"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "dd6986611d4ae5592c31b4ac00c061b0"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "0d7a2f403c7063d8ba937f75ee949b7d"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "f8d27710d0aab4c7ad362fd7cf48ff56"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "cfc16d3b8da726b0c4d5417a400e9f96"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "fe9da5734a2a80a04b472fbcb0b53e7a"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "18ff10c36befe993447b49c31d4cc69c"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "d5d8b38a3c33d504212e94e7e491cec6"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "29fcf9402729725e3e9c0f84f2949f20"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "6461593a1d6085d31a2c3b4378878617"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "d72fad9214ef919d5ca9227683e6b348"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "2b35c37edd73112150afecf4307e222f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "0d8426445413cae5991396faa388b31b"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "5f559916ff6eea8b97f58e7a96e95ef2"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "a3f828a752cc5f549f54a285daeea0ca"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "9b983a25250b56fc7a7c910a80ef5768"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "430753ec78d62372344c1c799a486ae0"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "6dc9ae8da14156a364fdacd668ca37c2"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "62788a4eeb712c450a805cb98f8fc513"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "2bd1207bdd49b831232f7547ce1c3094"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "f590d36ea26d2b67219d012c45c04d05"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "baaa130eec37382079ff2ced7f5aa17a"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "b90be34b2362c7a587e45a2f6b3bb77e"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "c69907ca6767d9a7758fef4da91dfe0d"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "db8d4a0b0ce0fd92723588451c607039"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "3c39f28abef52df48865a60e7c990bef"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "1ba21a9d7832dd915760e07128b36d4e"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "fa57ded50ebc5dc541f982202c165839"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "22ada0122d5f61520a68efa7ea8a99fe"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9f360626fef604c4f4e31ab15972dea7"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "fb5d21de6b7814b4ef69943c80f228db"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "2c31a459d54ec56820f7e75801be95a3"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "a9aed297d280d02af530dafa76153756"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "b8d2bc5cdff0a0c3401d5769848594cd"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "818f7bc67d103f8ba882766648b55e58"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "5d487935facd28c7f350de07a6e5f4aa"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "235698d65ed84e2e6e991dc4a2695912"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "40f269295f64a39f99572570ffa262fe"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "0ee56f3c2beddb22729e2ff714cd72cb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ce9d751f619b0ba796d18664a453800c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "8a5472f9ec551b928c8242e0d80af508"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "462400db6803c0470c4a5fa090318d91"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "65762964462c721300c5fe080296e2e3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "11fee01df4f2a3a5b39d888a253b613d"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "f4bc4f3b94e2acf0b99733be371eb3bc"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "487190b67bda53b83399684a2bd30c70"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "cf9153878d6e4b4d176ea41c7d81cb99"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "ff61f601b9f55a0a1238809c9a8d5eae"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "0470ec3e81f9b9c7909ced1f97f664da"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "00a546df883266ca87c97e59cb9968d9"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "f7e284b8991f36d5d60006bf4ee318de"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "26efe073e11acc7160e98ec0be8981b4"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "53dea2f1e767ae6199d1ae2e0b4c06ab"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "6702397bfe29000c0a3018706ca77fd5"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "c10babde4d17d2b890c985f2240dbb01"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "ae24b49106d5aa697bd8b97832478735"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "e9bac19d7ab8133d4ef27941ca388dcf"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "43e5d64948160b99f71f0d34a25152d4"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "4f34e9168a29c81b7fb03b6e316347c2"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "96a514b2cd8634398e3bedbdd24f280c"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "0c2c7bebb9449ad19603606b2d01743f"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "0ea803ce8070390af7478557d34e4f6e"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "ed04b0cebbc2467fe3f427ac3a2b31f2"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "dc3e546bed434db2f59c27381e83fa86"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "2aab2235ffb46f64e9414142b3125ab9"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "6add84673114665b0235f1abb075954c"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "8e968854b51b42a0a7ca0025a287bc5d"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "756305124afc66844099e755ea1fe553"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "cabc7252fea30a080fdf12e63d3b9644"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "f567e1b28703efb9c1234c201f8264ca"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "5feb6e52bced2d0ed2e4d7271ad0468c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "6670f28f978853d1493f1ca569870d34"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "34dc6415eea3e8897fd7afa19e7cbcfe"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "cca4e0b4f5b267ef3a0962c55a162bb8"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "3875f2bb3cc83122a6584d086bd95a41"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "fc22d9100f944755e3fde0c023a64f0b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "47260f0723db21042a77b9868136a761"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "ab683afa7a1e064d64a7abd40b6a33dc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "e05b39626b62118e47d641c9f6a6affd"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "94dbdaa5ce6038625be15505c7f7798d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "6ad27d4b6eca1efb3e46aae480391b86"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "cbf5a4597ccd563d168085f1227bec43"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "2d4c416c2a3a1184505be2d8fa12ed13"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "a726f90b63c31180cd12b7c474270299"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "6615c641d1aea0bd23063a77c69a8e68"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "e1aee6e8341759777fec2ff3a91afc6d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "315ab1f8765e46564f7d97988244791e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "6e90ddec667a3494656bab07e64fa709"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "67da5da248efe1594a207599b5774ef8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "8ce83704e6b6f99fe6aa29dedb495e77"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "2c69ca7ee4e975fac29a3771b4c4e2a6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "af44eb4e186b3e2a9a5870f402ea581c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "402940e69a5dadc4782ec0a1203ddc5e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "73d24c6eddaf3410d668127e75253132"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "a90f8648f003d45498ae0d52b00f594b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "47be94045e62554cb8a082f5ba81dacd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "4958d010a83af0da61235a782d95e202"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "94dafe71f278d0ad2bee875ca96a3c94"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "eb2582a7167c07f56d675e951d423541"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "b14178fb7b97990778237e36d27a0821"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "73c91b79554b9c148a98670a351c4238"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "248c96d3adf040f438beff582dd2cc7e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "b0ed7c7e0083da4a53d82b685040df9a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "a51a796121c689140e4c049e7c6aad15"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "176db2865e69fba18b6aadfc6e579440"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "33b3da63687adf00df2a28a7ffdde873"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "56553368ae5bc44f12bacda3aa3d6a2e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "7f080f06835c0fda75cfe85eeaa6a650"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "af4012f6de70e36f4f5d161b5bbe2435"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "90323d314a1ce1368a9ee63a0ee17ce2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "2517ffc08aaf64e48b0d6b1fef03d4db"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "faa816988a1c34307e78257ac75ed372"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "488e4a29cde37733d00ac4b9074ac3c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "7b6acdb52da7ff374ee125ed4d3fa34f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "7a885fab37d6b0987410fa4ad17a4f0c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "254ca11fcbe95b78487343fbee9452c5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "6a1542a1b56312491bba1e2d8ec03af8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "bb024d65baa9d87f7194115ec0a2dc82"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "413639c2e3df54d235fb3434d9da20ba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "3ff8853ecfbb67500d8ffc1e3dbb6de4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "09b8f9f76a8e6a6b474a0fc96a68cf86"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "d8d0f98e7e22a1267e5dc18d4a3470dc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "05a10256d51ebfd1a088a693b58fdf75"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "0099e0edb7f4a8cef6e79667697c6c2a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "790694102d499e69a3d49efd1d9ccfd0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "80270c488de4599ad7e9f831c9bfeb2e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "e3f59c264b2fde4c1f05600985a95d04"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "965de566965784fc8bb34b0d16372720"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "31e9ac5833d36660372c476e6479fa3b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "afc1be3d4dfdee11b322d371e24f4d61"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "f81f217f89a73a70784e970cfc4a5461"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "c702bf9a9833e6341e506f9cfa2ee006"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "b4225b1070f72c13767631df8376b5d4"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "c3f8e8cbdb831fd093b37a004eedce56"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "c37d74e4a6bef3d65dfe60db4aaedbf2"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "f58a2d93c15176211fda0371dc67049d"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "f8c21b8473ea9aa798e27c891bb5dfd2"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "ccbb8baf7260dcfb8afd0ebb4f7535d5"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "25603bd578b318aab5c7ec8f2f297013"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "8e745e58de6162bfd3a9062dc3eeb2e6"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "cdaadf51979ed34c4b4cac803c0a374b"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "bd7266189a3c36ba992654305b7c9365"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "526c1afcf06787a1ab994b62a70a37d3"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "77c894c64adf9ff5772f0ff56f1c83f0"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "45f60a8f9ece1ddfc4b0b0926ad9d4b1"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "65e604987849fab0346dae29e0656e32"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "76d038c63ea547eddbb3f3cd22648a53"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "935ad72b9c12270ffabcd6ea8b6990a0"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "7bee39ec469c404ffa72f03ad5cec5ee"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "14d758e8dddb29149a56f8936a51a77d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "65fa5cc4d98794cb5835729237dabfd9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "3a10ceeaa12a41d8383c5ea93687905a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "3f251c6689959e97df3898e2a4d0f776"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "04c2435f2428008d0354ea1f5eebc614"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "b6edf8af3ca76b5c309a6494aeaf2cfc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "5028078ab3e9ae78d8c5324a3f69697a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "2902548bf046fe0aeef166a751af3dcd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "0c2ed9fccc730bfd131f72b751579b95"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "4d201d9387384fabe8ae2fffbcd1eb92"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "4833f7c27dc758af7f9d22365abd1d8a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "31b5dbc42b33f0408e59e8c25b5b7c95"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "2b7eaf44f195a14cb7595882418cad40"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "8a8371e82eba80a1ded85b2736dbf1bc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "afc4941c6f10a5c5a3e5331a0be512a3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "1e296c6bab067d4c533e76215a17de59"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "9caa6f1b072b10b0c8faff642724bee4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "5123d86a9acb63efe2eca39e6996db97"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "5810846e022223d3c6d0ed5847f1c985"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "f563204d0d91e89d8e8f07b11dad6c39"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "0034f8c7f11b7b2bd9f8f70cf04e15e4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "c6b545f3db36d43b7f813c529d13c5e7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "7ef2fe98ecac4f776b7b28c5824f67bb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "4a335f250b4c6f1a3c4b53e79d48d40b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "98ac76002cfc7e656c3fcc21b81baf78"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "b02f9af6533cce8497b1fd36a34aa870"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "b1179519e8cf1930c3ef30f73d46ba3f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "be61141eee3f5d0cda07eccdafe93ed9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "e30fe3cc0ddc1131fc47cad54f09b93e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "f0a0e72f066eb38fafc8495819c0dd8b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "9c0738173f1e4859dbba7d7b968e334e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "704e08465ded3b17a33ff65dd4961016"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "9c31e40a82509e953a81fb61ab56d80f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "2a6e68478e3195e8577a181366e03d2e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "851c67b66044fe01f74ddbe0078fe150"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "eb5bf073b0a934b147c9244f3f1c4e35"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "fe3f3f6d79569e911c51ad866ff2552f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "c70d8dfc855d23db27d3e08f4c573da1"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "15390f14b595652669e6ce6939ed1418"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "29ee4048e6a959524b7ebb6c4a3772ca"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "f67b91da116c5b553d7c0de536677c67"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "aea1adcd1c442fb6fe7c415d9e1b5205"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "04651acd10650ea5120ce025e8d794ab"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "c11bf61a4ac9e69ab856acdfb9c120ab"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "71bf4fea8a83dfbcabb956a9cd870426"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "7f29ebc1d26e7ff8c9164ddf6985aba8"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "bbab57f69a90b18403f36eeaa94138a2"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "cd4d8f09cdd3a9770eb2c94f5d05c6b1"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "efbb86c50940b8322d5ae1eb42422929"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "e4040c059c900722b841665eb548c847"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "e961d38bd9cbf03ba402eddc4b59f0ca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "32af49554c7d2b667915de47f1b49f88"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "a0bf505ab33f7b9453f15ba1d299cd2f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "f986157c8aa6eb7a41a72b183fb08b23"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "75196132a532f044813ccd433e328f09"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "6b431c5ea3f50d6aa18d9929f904ac9c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "37fbc41bef5137f8f452385c11307b13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "29d441305032cd2fc4666a56186fb19b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "11e5b9f2a89dec4745118d58df95c954"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "9028d16d7829d3d31d78ed142c4e0992"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "b307704d7536265efa36ea7834bddd55"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "51d6f67ff57080096bd47cdb952f2657"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "38d684b3bcaadfbdb6cb735280d4f979"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "6e1f3ac039473466bace91ba1044949d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "e151b8477ecae5ae36100fab8d340ac4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "d060916c2573d3db208c4f4d9046cdcf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "4c0d91ad24ee80ea95b6a9f52f23a894"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "a41c0efe9fe9c7ead9595499798f2dd0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "2000602e03e44f188202898e1e8b050e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "edfa9ff2cc8591d017f8b85392411232"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "1fa028a551187ebb960b54088427cd66"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "9f3124d57412e97382dd1114fb984e08"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "4725c04c5a05f791e74294b45417891a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "fe7cd709722785abd2eaae012b0d13fa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "af0eb0424eb5f96f4c06bbdb7c31e520"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "8acdd1dc7359e7cdfa479d0af3e2b5ef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "a7e3e6d90830093182882969e8c70aea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "6c3cbc51b92fdd8d8bdebcd1ac3f9e02"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "c8468483a6cf3118a82cce39ebde328a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "bf6ba0e881f596773d8a5e6f4a90d9bb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "f6896de74cb59245066f4fa63f21b328"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "2aae6daea3e6d16818e35a8837bc2aaa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "aa2f24abd0772e679951dfcfc0fc5e60"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "d4babf53b1033e1136f6be010b82c9d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "bf042d9fea72c8ed7bcf094b33970270"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "04f11928877c3c83b9fc66426d890848"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "a5f74832b77d1032a226337477e2dd75"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "8c66468a25f7df7a285a2f5e81db534b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "7a4dcac11eb9bfbf2f0eb6558b01dbff"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "8e873a6929f47402562d1874fa94e635"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b447fad693db2cf566b86a2511e06208"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "47e86e19a08033eb857c36a0a13eed13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "13f8ae1f7f90a21c80f88dc4b8f89f3b"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "002675963c4ff91481b6276aeef54fd9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "050089ca3b5aed3d920d90aba74d10ae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "e8fc834ac400e294dd31fdaf9967de51"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "a9cf81c83b5252a2e0322832bd2c2acb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "097e172422fc8524c995464d9bc64801"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "bf26e68c6f55dabfa1c30327a6c378cb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "298fa7b908abfaeca2388605bfc417bf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "976283aa507c053ac492a7001ff1a4cc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "2b5e8f6238e9ac0ebbb75311d2ca1ab5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "e04c18b5c90fb92d70bdbe6e86f3995a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "586d90b7eca4eb916b8363920d8e76c0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ad46275b92a8070b633255c7ae27ed33"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "3624952411d1751c95a116bf6cb19304"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "ec3c3854c11b612607209d1eb6f22417"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "8f102e4c540f4d470d5c1dbb731eef4a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "3212f688e924d5e79de9ea9b4af6bf6f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "f984d7826baaba959fbb4f5d0e029f49"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "90d28298f1e205c5acbd61953b1182ab"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "7d2b3aa83bf7344fca8b5f7f640ea46b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "9cebc3d194ea36a78fe13bd3b4819b87"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "9d9b5e95751784e4bfa093e984c929c7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "af639a7a9d94573eb11e3bf831df5097"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "ea3e07e64067174df84b2f59b0134f7f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "aa71560530a5ccda81d48182f9ba27e9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d0ab54d22df86add5775cbaa5934c52c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "86733e4cb7a76321a6c630ca2c8a2a85"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "5730e2d03780adb93c27175f4493d7d8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "923ffa51f9a0f38026a8e1221c3529be"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "74bfa45efe2e8f11df92199b617b8dd8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "0009968cda4cb2bc549f7d10627c9a61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "fd1e0e0cca66428c2b562b6c6313700b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "7486f6f7823af1b28ada0e4f62629f95"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "2c2d0ea38fbcbb8cb14c63c3af4a35c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "a47b69b2c3def0fa9476f3c9fe99cae1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "64ba46b284a55af43418708246c5e2f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "8d3e17767f8396c666a52a8d0cf979a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "196c63ca278122bb33e669e3451e6829"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "352d13270a7843b58f2a5cc18a957b63"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "15cd7577f731f2f154ab1cbbea0a3eb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "8a09286d45e9f25c69c17fdce323d167"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "87d7da2a55190382cb19a3b29ee07a33"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "89ae918b35af0ea9c286d7864729d8ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "c72b63dfdb3426c33fb451bb5d46f599"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "230c9f2492120c65b17e4bfb64ddf2c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "67e31494c657831566f2049362a48236"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "c83c411f56eacfbb5baceb9db1fb2e1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "d5cae563b43a4998d035668ff6227e90"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "fec21ef6f52eb501573efc64b52b4990"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "ce7b569f296d7acdac26eaf21a2b21bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "ee4c811bb4604c1467889539fd95c111"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "47b9c6de0d91c34bc57cf190137b85df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "4218901da5f555057f78d49cb9bbe1db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "35c9f6bcceb5a0325f8132118b78acd6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "df738778925634577015e4775ae48add"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "6d49dbfe147c4e98c6841cda1fa6cd3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "2552c1df627f2966e0a2ed726e466827"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "e5ecce4e48d392c3da041d794c770acc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "c1470d4d951d74f7303155400493dc23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "5eb3d332f5099277d9bfa55ad4f606f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "a6fd0a43c228214ce0406f97e0bd5492"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "b274b4cf218a8cfad8982c869ee0fc70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "3987d354877f78555671baddfffadbf7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "2af140dd5bb00e732a82861824215591"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "f496e2b57ff3b9b33d6fac8ac813ae6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "5935269e100c2dfc73d96f57cedc9acf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "82e89b5c3d6d019ea1a47d9dab2c755d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "8be517c343ade7aa16200d8cfe2c880b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "0101b3d49883e760ae38a0c37585946b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "8c56ab778659acd70a14bcef7509f56e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "4e608e45397e7eb251052fc4a128957c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "2b6a3ff1512faf4985995ff41c5cfc90"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "5cf939029cf1c3e25938b40d6f61ee51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "d1531da73139141986482df9d7abd9ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "5f798def422f2ccf55c236d95e293327"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "cbc095b561c67873fdb84f1fc1b5c7d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "f686aa330e12c0fe7265ea89783b2114"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "39a61b036b427cb57cce484478342d05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "cbf576f6eef2eb0b2e5d5f9a2780a025"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "e6807841fc36be7e8bb99e7f0123fee9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "0b60ea351430279ddf2d07279cac56a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "35a0375beaa6fe07c5d9156bb9d6543c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "620a6beb049c82db3574985b7eeb4dd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "fd7ed9068defbcbe36af03fc4e558c7f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "ce58acfa4d2d3d725fdd2076ea41dc75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "ac13cb130eb116826adedfa3cea72142"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "1c0483b51a2f6326bef9fdbfaf460a2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "9df46686fc2dca9b63feee9f26343ee7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "c3791234084ac721405e90fb71da9f2b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "8a9ed0e57348bff50b6a38cb31f69b5d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "1aaf860ebb67044b837d921b95a2aa28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "1730dc77918696e90c33b5d482f72786"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "dc927fe7998697efbc7fc65884e49319"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "8c03079437f3dfc00e0e16ff342afe9e"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "0e7685e7d0fcf99497105c59ec53e286"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "50c55f645b95d4c4d6ff985b57397f76"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "29332d7e9dc1a60559c501ef54e2fd8d"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "61894665a360ed70da79f2b975b388a4"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "cd5a392f1f2daf9956f8e3aff2b965d5"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "2d2a7f0c35c2dd2c7677f097df25a668"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "5229746478384ca3edafa232541b4be9"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "44961d221fb40038f49b364fab613d4b"
  },
  {
    "url": "categories/index.html",
    "revision": "dbe8ef38b2055f57fac8042f19e87cb6"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "9ad7787acc19d260dbcc8c8e17393d72"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "ab60efb743f7634d03e6fd16f55f672a"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "209ef8c210da2914a960e3162d15f710"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "fe06575b8bab28b305154fbd96cafeed"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "140cd3cf4359df6c01f1cd0c174e7721"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "2456cadea6bd443510ae7e6ef4582d79"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "4207d3e769ea060e2288d6f6f7fcb241"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "29afd0aabb374ab97a9392f69c6cd8a4"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "e8aabe94629787fdc41bbcf482079f40"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "aec5afaa77b490b2599cbfcc7711b37d"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "94f9a0d089298e02eb0eb1f03c777486"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "7f0eb48a4f2f10733f247500ccba15f8"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "d398e4e6c7a9a6b9eb491ee802659ef0"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "a22f720dc88c366f234bfb1abb211764"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "084e5f1954eb159a0be4e79122647e3d"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "50d0665d4989f302e5f9b1c1d9a98f0a"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "a1502d3ee60d209e7f036ddbd5201a3d"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "e45d6c4c61eb7d2b3458a5cfb7f6cfc1"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "6a97605661049f33dde99a94558251d2"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "f8f12d0e252d45f82aaf0d9a81554a44"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "030ad790a3dc521cfbc897348a881d0b"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "3206810f8115236a257bfc92ca1680b1"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "edba7858a3eb3dcb91cba60ac1dec89b"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "50952361aefb509a1edeee1d86dbddb2"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "18b253a88c190736e06c41bd314364d5"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "e118fe54f5503c908c731588fc654252"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "0645e14066a3e76353470990d7a5e812"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "4067e0edb5f9137267da36d16de5b5d6"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "25c999b515d890c84678a0226a322f83"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "688fcf9346b9abc77f32480d35662b56"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "bfe4f981c1ed3e6dc470fd00b8daf6dc"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "c2ecbe4b5e8525676dbf123c37f05668"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "fcb68e4b959ad4a23de9d0d18e2bd1be"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "e2b7e042a9ae4ededf2e914501079350"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "b186d9be8d1c14b490d06e0b129b6832"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "28378e2fed8d70ddefa37609f2de59f9"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "93fa39d13e002ca582bfd9f61c4b0c85"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "f854d0e4e697dd1f29a7483abe19b55b"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "9d049e64b61104abf11443dbcea2e637"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "d634d97866870bef019a5b4ac9678007"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "81a5fcbd390e9e6fccba23e72e4381ce"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "a53114aff9989fa6ff156a2b0e5f03e4"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "39e7145dec914a6f71efb871316dc5b3"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "d34fcd571abb7b47b84ea72d84605cc0"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "438fa06b82742037c51d346ff94a3338"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "97095cc2c0296201c3b0ca9fc83c04ef"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "d31d39438b9f1a5e3c90ce83f45c8371"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "e66f7a32c6b0ec15c45a50f23b3b5c1e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "5a919b8f9c3689b07c285ba2b7fbc016"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "52d848c38cc223f668bbdddccfa7a73b"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "955b0f2d2834b4f2fdbb41d2c121feee"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "3ae14fcea61f6f211c0c546182f4228e"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "a1287c009f4485c5cc938d8685407936"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "31ccc6ebbaf2990555f81f0aae5c3862"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "15d0c6633debab5011a7f6eb24bf1ef1"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "978626201aa0be6a61586d5627a4d256"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "ad2b0f04c1907cce789bc83d7bbf0e0c"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "99d6b62ceb7585dae0158df6d4958810"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "d2ffc0dd5c2b93ad3d81d548ebd02c62"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "99da8189f8d5bcf9559ce8cb87009262"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "d4e0c837332af0505a33fabc50cd52aa"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "9821f51cd1330f3d764c1b9344eea68c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "dd7814bd7606cc79fd2fed311f8efc00"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "b7a6b83906d7c832f6f3401214837876"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "216dbf90e954737c1069bf56bd7de83a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "3d7428932b06b3ae5b53ad7a3dc1d295"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "384aa2601306d040be8c36620d0d7985"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "693dabce30cfff7bc81d419c332649d5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "2c64da836ba3fb51e106d5e080967770"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "24c4bf03ac616e0771016bc8b4eb1dac"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "f77b11490a0081801c504875915464eb"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "4531ac2aef36e328936a32b82283c899"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "bf5d1282091c92309fced9c875c84b51"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "1d57c9b475e3ed50ae5812f00ad40fb8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "03279b07747fba25015fd2846a1d8859"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "fe55ef8c4129919c1340b6e8ec0970a1"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "5e151421b6b913a746163bfcc9e0b558"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "2c095f0c3fb558bc35d4838940231fa6"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "c7d53977421c47945b34e6cdb25b5a86"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "fd4f490b3943454f6325a670c7153514"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "3f7328ffab24cd5798de56701c341f2a"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "c73f400a3238d3ebefb6fa7d0c69640e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "17f31dc64a99bd42690e73ff374a1168"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "e7ecb6c8f27f3d7f6e193e73d42ab21a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "1fe78166f2e5d9a2419d934acd1a763c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "2854b58d67c75f8f937e74d2f2018a53"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "ee47378d44eeb806e1acbc85d9847def"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "91cf40825dd127bbd5ba2eec2cb375c9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "3fa47e933426b475f9ee69b8f00ff26a"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "5225f8d02a2c576f1de26f05410f23a6"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "2df7d096c8499edd948612a2203f94e1"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "c6441bf46601a71e9f9bc15044574321"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "873109e969ccc3ec43d5855e6b2df689"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "62ba2a78bd892befffefe6d3b622d4f2"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "06c6a6e2f1d9d70f55ba15cd6de0d503"
  },
  {
    "url": "categories/java/index.html",
    "revision": "357c04b228ba28a6b9890038a8ec3660"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "eb38a7f726b93a1e179add607354a9e8"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "c6b20f81131035096ea605bd9d30f621"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "5580b929ebd59a6035c55d0c0f0f3d50"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "22f4bd75a06c56bbaa1195d2a90212c9"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "05db55045a8308a4ca3fc3f1371edc13"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "c4bc0bf7877449b89328a82dc0701d2c"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "2f8ece1e45fe6ec7c63ea40a56c30bce"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "2d41c8315f033cabe707808d8374a183"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "5921a0c34468139bf3180b3531b199fe"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "6f57772c8eceb8def7edfb3960449877"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "35d8738360c8b4296b19153edc4a9902"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "ba0ee9d4c207e37ed8302177239dcc19"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "f5fe5c094d6cbc5fe3fc266a81b4fe8a"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "1dedf0bb2c34ec7bad62631ba7cb9950"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "2bac48c3d290b10fd38f36974acc961a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "21b4dd2eab4b39d1aaef1c173ca0aa14"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "a4fd91b4a9d12563c42f2f5105a73b44"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "70b7c02068c64c4c2e212925240130b8"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "f2446bb8d4764cd56a525ded8b085530"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "f89b57e6260ac7013cc56c13ef9d6d34"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "02f89112371b91eede7718e149ee7496"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "6eca409321a6ac21e357205d1c2c0d68"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "55892014acfb7d05bdf3fa6510aa7354"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "8485f28ca4f69a16648b9d8e257e7018"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "3ea94c2159a95343f5554d7112077fbe"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "70eeb1f34ebe349a8b611f80384a0743"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "cf8e63522949553feb7544f955ec5441"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "d1f015a6d5646e33c3910c3879305568"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "a9a88278896d7e02b204761e2a97f1ad"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "128778cd2316af4ba75b9ed066c6c0b8"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "70c9706df58134ce5e0f254ca303b1b4"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "f0310ee6d2cfb23f9dc1bf33afd9fa28"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "e732efa3ce4167fd4d8d269efb013c05"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "b988a521a7bc711c0403acf1c0ae095d"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "2eb01d3cc9a373a96bddace56a737653"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "67ecd835207ab3d3f80c503bc75cf136"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "8ea398b7647fb953666909a23aedf1d6"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "b7c478708d5cecaef7db026af2b41b32"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "122cd83138bdc1cdeca5e46b6ea835b8"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "3d66e689b730de32d300feb91db084e0"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "39205c323b45d5e50806d88b34e0a2fd"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "ab67f128c76977d7bd17a5e65208109d"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8be43d603342d0cc50107cf935f6c2f4"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "104f017351e57d2f51c84c726ee58b2d"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "b9a554ff25156c89226041e1a788ef7a"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "0cf60b682a4609e88ded9b9269f310cc"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "75b7dea4114f9144862d0da2d358ddba"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "97f6e50edc0ef1aba6c8a583e7eadaae"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "fd357596f80f17e550038598026734ac"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "e7118b4f63deadbe792282185296af74"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "fc3c123ff9e8af0a46611b318966aff4"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "138c926208ccef99d8085d2c1204761f"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "524f0c9b19e84cf8a116600e3399ea47"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "434768403cdc038ec824b2920caa0b7a"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "35f3c3cb2986ebaaaeccaf9566548eeb"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "990bf7c8b871d8ce92e26c39d48fda55"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "b32155635ca653bcea1f127c53e4dc6c"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "e6d754e398671465387025f800a19e34"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "e5b5ffcc1caaf7300bc73ee266ad79ce"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "f39e35f2ca530ec856ee892f2463f385"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "2f8e116411d7ffae8f34053f15be90c7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "4bdf945594ba1fc638693fb56b9b2353"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "02283872684007d943565ff2bee7650f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "8a9c130022dbd5c7dcfbe039adfd7ff6"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "e8ebbe158769aed580b9e56a1d40a1b3"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "8890d64114b407abc8fea271384891d0"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "59df044f2258783acbf9ee92f90b7a79"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "bb3ae3cf21abce247e7116b1e610ee3c"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "de8ae2350dce5cf4c77e8a9cf18a0570"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "73965e007c67bdb762005127f1c295b4"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "7027c673441b461b2e5ba2f3a935850d"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "7a86f434833af90b89b1f5552a42b185"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "64902dccef310bde866042b882a8099d"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "95fc511305ca534bc1dfb804125f3991"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "0ebe117a57a5d6d894b305b8757f71c3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "cba62b0a447384bf773a5822ebd9f8a8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "6333fc5ff52ce87ffc0ee5ffb0eb1fd4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "8ecb9df07804b55a24d1f8877eb11463"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "6db4cddd26de2069666443c7c3b0a262"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "b4f1751a08b89e80875cdc40bec220a2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "9944dfc7ede33bf406857ab9a55bacf2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "19adcbdb9b61a576440bf725f2b12efb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "7d4125238bd4611789e8ef5957dbf989"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "88b55b5c35519ba5c628021871313e8c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "330d68485adc37d9d7773981eeaa77db"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "5b0606542fcefc6260db173a00589ef6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "935ed76fd2fc2f48a8f3f66bfae3d3ff"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "8a3406459674c46a7b34adbc86b9c75c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "fdb68b7c6ff1c891303ceee140969cb9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "7bcafed822fc06c04c0ce81c65b814ec"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "618bedfb10f5672d82ca3dd1a267e35b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "49d0ff2ba127163540ef6a3cccb963e9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "0d9052b241d96d6e47e3f3b8e2011120"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "e0e99909f9a42e6dd83509aa4ac9d07b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "4ba62e6686f6e687174550e67838f27b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "578cb4de057af04745b815e8fa2e2065"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "d99b0dd9ddee622a58a06c90aa0f3f9d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "84de9174c51817af2c404b49523d1456"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "a8c5bd5b8e39a3f04a07c8ee3e564167"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "dd8234670c9d45b9e61e5f84b9c6ebc8"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "41d9581b120827946948e3f880db6b7d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "48ce5695d1dddc9116fc434a5913de8a"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "116da78f7848267bbb025466414f030f"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "799cfb11c8f5f984650305cfc75cdbdb"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "c41d64a8b34c01a7e3afc9756d786434"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "404c9161e96266e27aff14567b557526"
  },
  {
    "url": "categories/os/index.html",
    "revision": "22d52ea245ae86054052a2ef83465128"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "09deb7e3c69fdd3567364c2e63036507"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "186142680f15ca1ed20608f405073723"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "aa17377b4ecfdd652f699d1619a8b379"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "93eb5c17fcfbf0574d5762afd616c9b0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "1916706425ff2cfeda31b7e3e649f883"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "81677519834e5012f8dbef35e3c16d58"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "e036b3041b55e9484966a277f87817ff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "fb60c8b4849bdef0ff7a12920e334e5d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "5bd7439b500b8b24247fc654849bea55"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "faef81fc243ccdf1184c92fd83f442bd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "029cea9bfa456f4400c4bc6cf10e84ab"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "bf8f36b05cdd208ef9d5e81b03e7f114"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "eaf2951219768f7a490e8e8ab7130ce4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "8ee4193cfb5943df3384d42af4cef711"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "5f6813deafffec7ab474cf7a477d6699"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "2a43c59683a339a2094539e13f059cc1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "8eb85fbd37b35f2ad95fa3addaf99b50"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "4b5bcf0f6bc7e0cd331c2195ca036ecb"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "4b224c2b4eb445bceea9dc4484519bc8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "55e47da48501f4914483a2399908bfb3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "1f2e96cd531de681a842cf8ef680a3d2"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "af18dbcd54271f034df63187ea3560a1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "0f2c1ca86935f0904e253f492b74ab3c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "514dac015a247ce99725696076aa3e7b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "99a8e4595352c908b8b146cb39784eb9"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "99dd745d86f6d5fc8ab8392a17b1de28"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "cc3eb958d3981c7656526fab2ad0e02d"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "5ea8ea84cee1784c05252b5378646cf9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "613f150eecf2e0ad4d54440aeaccdab5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "d2bbae9f2694efeedc25c0330aee3109"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "c01a33abc8b6fbbfd84a5ba52ee91974"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "d9a9c9d96595d32bab8c2d6e22ccf0a5"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "a40ee5fd6b67243f9c60a5860874274b"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "c813f2aee04adc546049b77293cf43d8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "37c9612e240a816c439dcdf1e39746d3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "5bd30a25f92ae68f4b583592e5d024c5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "9f8bbafd3f6acb6761f6fa0f1f4eaf2b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "0bee670c87b2f5b67a396292ab071f81"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "055df1217bcdac11ba33a1f8db90927b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "b3fb4e28102bfbb34f01e2ba19200b7e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "58e0140125df54d185714c6d8f443e85"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "0f65043edbb6f771592294b986118da8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "5e153ef9bbdd659930fd5129268e166c"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "eff7a43cb95abfa6d228459340f4e206"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "62cb305029fcaf5c09cf1eb8a73e5799"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "8f7e7ed7bfc9c0155279874a8268dfff"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "d7b8a9e20a0c855c85e0a079092fa39a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "698235ddecfd4a1a867510c6b96d6460"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "9d1b27a0f20baa29c741f3d0b30e3458"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "37320e98f582599551c1b72ed62c6bc3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "956e47bd33a6ab632a061adc7b254763"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "d3a0c8310d36979a30e28eae5183c702"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "587a910dee939ea10a0d3d8b9dbd0d90"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "d41e89a83aaef9b3e41bb67828f6360a"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "6aebaf1a6920c702c9392ce420ee2fa3"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "045dcb319e22ae0a5acd8c64b3f57478"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "f37c92f5748eafba3bfc13cf7cd38a58"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "694f0fbacfb2cef02596de6803a72dd7"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "71d3175e545b2f50516fbbcd552fdb20"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "4001cad813148f154433ca0f8574c5f4"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "d05b853d6567433e718c7a322255aa26"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "728a19b6ba22770dd90e56877a9edbd3"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "149ec15fd6a9058a85a530543ce252fd"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "33a9cfd5e24b0a6b0bf3b1a11377fba9"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "802cfb0e9276a460367506f14e4a6d7a"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "8bf533172642782e93763bb9d150a433"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "a488eb5a93b343a2a34c646842e94a48"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "821fc5c65318569b39e76cf230a4fe5b"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "a0231af8e980f55f07b4515b4414359c"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "4d94ef19e6ae5122fa7b525d25813f67"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "06476e9b5a690bfa03ac31c157ea7e2b"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "f33cf6d921d58666b7f79518c193fcb4"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "3da205a2b06b16872b1174a48be86c0e"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "fdb404ad75fffe652fb2f5c350339261"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "12593224c80a4bf5320236c2ba0ef0c9"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "94032c8354cec4a7552c9c87ea43fa38"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "f443d53e6e4fc080e8d2319e5be511e8"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "c86fcc184a04d92e92d2086c046eab9e"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "be089c21ab6dfce0d36686e863089b79"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "c1ccb34697eeff8402e20f3db8570f55"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "3686c89bc841af6471408e3c81958f68"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "a2868adba1df604e2b07a0dc4c420cab"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "a019ffd98c07f76c79e7fa77e2336863"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "76ad4c4a1d26bbe5753a6586eff92169"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "350f105a50a7185e2b21d06c14d0f85f"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "142961ac8d3f591a737d5606cba7854e"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "b7b5e918acf805b2e41c150fdc6f0d56"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "73324900b022c8dd774dbb42866a00ff"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "3fad176191ded226cc560a9f09668c3d"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "a894b71e6e83ddf9cce5d2bbafc98a4a"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "a10d8c85c97fb2f1a9d76062931acff9"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "f3c5f800331e9fded99e142cd93ccf09"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "455ee405814984472619c90e49838c62"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "b1819c14dc9a8166e8d36671779d7f0b"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "e796e35871172aa8e102ba6c0aa619fe"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "60e59b004c75a8d966d1f328178bb0a5"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "1c63a54b419456a6afd87fec8e4a2303"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "5f29aa1afaad6cac648d4bcb0b707fcc"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "dfe96085414b8dd7aa9c2e863e67795a"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "ab301baa81cd9e0578fbf7e96a5ec68f"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "a7442c01183f0fc10a3f2d358c708660"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "0cc9277c939780815169d4af37a61838"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "5fcbd1528a0eebd638dddd7b56a89492"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "ba0fb39311f92a55896bbd5dd00253da"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "59e80ba997eb544ad39f7083b0c53b7a"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "720758eaa7398c9f7e688849681dcc54"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "bc228246a5bde98d0b64515907fdb9e4"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "db6ba5b34ade0a3abec0b425e19a749f"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "95923fc29e5174d4a64418bf4a42b9f3"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "9d8062e3a3bc02e2bcb1b53ae5761365"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "e962aa4c18f64539bddc082335356948"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "5b051b5357b27f0bd829bb12ad5e3024"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "2d12a360cc783aa7ff092bf9603865e7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "79c56a5e4c9042a55c8bee482eeffbde"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "1889e57b3a26a85d8fdd9c14d116bf47"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "b489c298bd7f2881dde134bf12221e6c"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "5cd26aa6a491b01c3f9dcd7badb9bea1"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "13347b0cbcf806e45efba8c770b066a7"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "4be626f0b0b5ca669df2e5bd743acf12"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "0bbeb6d6d2c403a56182eac5491c422f"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "3f28baf070ddd6d5441b833d048a65a5"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "4ebed9b2e89668f4bbcea576e72dcb20"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "9a28dcf3cb388e28d8cd9f21f1a49fdb"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "b0d3d021ffe528eabedcde2218cd7bfc"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "6d4dccfd4453cbbb7f9aaad316704ebd"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "f8428a16f60875d9f77201c36b9befd7"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "031ec5c6fad9f5b7a0981757c69ab1f7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "9a9136e961b38f633cc245f822ebe5a9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "b928639b674efcf1e874a93973295e5e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "60a08d150ca151d410498243ae8d5b2d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "7ff6d984431a9277efa167261bb6b6a9"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "bf41611d818570417d459258101eb769"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "db20760f4533779e024f3e5dd1c5aca4"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "13729cfb42102167552691eb087d0fc6"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "2f41f358f3f7c16ab22c7bf1a1b800e8"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "b4417afe459ab62a48516a1c351d84d8"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "fe6d0679b8e215b56ac30878a88b6fb9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "90354d31ee5b364d9305efe01ca39cc6"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "cc53af6e459bf5bd21c4133253968bdd"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "0c6675346704772dfc6a6cc2a8dba7f8"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "91f93b9a101cea05936b4f9975190e51"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "a330d790047ebc80f293254147c69a2e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "9dec5c6c407c12406da1c75dc332e54e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "cb6dfd1a79fd70d44675048980d8c669"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "ca55c99acfbd8cee00ca7dc3c027c3ae"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "d37fcd6ad77be35c17d580f6e39c64b2"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "04afeee315e39c0eefe7851071c7d802"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "bfcc6666263ea37dfe18171d352c332c"
  },
  {
    "url": "categories/php/index.html",
    "revision": "f52283bdb53e73d685472e7a853c4be6"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "96071033827ee858709575182a6fc940"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "b80befb37d7dbdc87bfd5f1a68039839"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "06a5702ee1d436871177d78fb2fe9c7e"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "e1c7bdd9e4df21156c5ec93328381a77"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "757560a809f387d913eb4582cb0552ed"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "1d074820fc354e31c98edbebebe438ed"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "c88e94e1e0b7352c567629a9b07d3cfa"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "d7098c6363231d01815936c506e75d44"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "8c87bbcdfd588d24b10afc4ad161d5df"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "a5986c0d47a8060b30ae94f32ab31ebb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "2a610cc023de0ce365837f2fca6f3ef9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "0337d78ba6bbd576af3be6bd1d4e230c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "8467a0b7e60e8469dcdf5add0b4446af"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "cdaeb4520170fb4828f290f43d9d5314"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "cea2eb6ea222715b7b4975e55d0f7346"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "2f632162616e3fc80e6467fd50f8fc4f"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "a8d46f45b9d809a6543ae09dc782df0b"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "372bfd84a20192c6d241774498157890"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "80799d7ebb52ecf3a6414c9708342815"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "46fb60eb20bbafe54a5d876f01bd92bd"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "4f4d6e8df31b3358edcea73dcb644888"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "a161c4dac3d124d61b1c84ec13c266b0"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "29880d0b87b2ff1acd62fdc5d3eb1c66"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "3b60a89650665e626634d1fbaf550f9a"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "879259a450334561a00d8f1e7625d286"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "9ad33690132c5c2d6821ef9e72a4e09d"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "2b829880ecbcf51d8d25804270d43ae0"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "a513e6d515f70a0466f61a39eca3b751"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "bd356e07090956765027a9a79777acee"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "672b173e428d1d55cbb993f306cf9c65"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "737b875d35e56eb8855d2f65e2f39ee3"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "7b902d3ebf34099143e945dcce056f60"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "6ad2099da55a3a460c5229ef4a950589"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "883a020caa1bcf4ee57fb3b7490c3400"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "321f50a9c6514c9661f89065d85d4a17"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "457b55343d10a9e1e79ea3112293f8f3"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "6f350ebf37c916cb97e454da09ebbc12"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "45e2e8eed0c511a98d51cb6585f2e0a0"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "a4232673f35e77d6ff1aa8e013e7fb74"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "4afdf11ace6ce9dbcd9dbeae007822a2"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ce8b8da956299cda26a3bb891149dda9"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "847956470a39ca39a6225adfb5175161"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "53c4f98f879555630d230d4a6e9d42e5"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "8e5d0deae14fb2211bad306861de9c82"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "082b85643e432a681ed984afae9a9438"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "963d53b22765a5887914e9e2e1d0799f"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "565a54a04be96407cd7cf77226601a77"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "97bffc63c9882e9bde3159dcc636ff15"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "b257ef315cc7a143f5c3e546d4dffd3c"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "c3ea5ed3d1cdc33bb382f558b2021238"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "9aab8c6fccc7c6fecaad1c79f6e354ba"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "17cf659e8c58941dd920eb0e354959c5"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "f6f35a61d9768d4d1dbdfd1839417f14"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "5ea50c7d5033f55d091596982b950f50"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "c532126d27e50cd013ca9810075aa485"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "7c97196ce02477591fea97f0c6a24064"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "0cf869c496a455702a2f2e463212902a"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "eea86b1c5ede2533d8dea8f95c3ca6ea"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "a5ede72b7de62d7d0332b2317585c6bc"
  },
  {
    "url": "categories/python/index.html",
    "revision": "29317ad45fd365c25ce8872dc1760135"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "0d9097ead572c628731d426f60ecb84d"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "27613672d6493adbae5c6657ecc81d7b"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "3141f7c1f90557a4626fc17fd45ccc72"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "442081e12fbd1f2fd33e5470388d7e95"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "653696934ef74fc8074d1c4ce821a887"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "42a8dd48222992c583acb9c3c828af19"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "3e50b10955cb5b64f37c23336aee67a0"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "da29f574adbfdcc277f9ef3998435d69"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "68a71ee505d1837265e59a9a4c46a104"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "6f1513d18465941a35c19bf21236b1c1"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "330b341984a0672905a0e9b038a8800c"
  },
  {
    "url": "categories/system/index.html",
    "revision": "9dbc0a159abb854b65eafea64c0850af"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "563f4efa2bf549e49349e06b5fe75748"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "ebb8fb4aeb44997cfe3066c1fbd76981"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "0c28876bf00f9bc254faf9cfe020193e"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "05cea33f233bfcb83d22b14cf5e28c10"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "84a21b35f5f175b4cdf08ea418795c15"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "90bb31a3ec46484cc6f81bdfee7b29c7"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "1df182bcda0364eb1c2ca0eda21fd406"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "2474450f51e82612390f91ef9fb27dbb"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "c8164c19287669a0426bbc1789524526"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "f92d0ef33ca3c9db000eb753ea18cabb"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "ba92ca840e18b36a885f9f3519d7fd1f"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "8b1ec6aa0f71a472fcd6df1f02e30578"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "e8694d2dea853abf9b68e3c9b5583f45"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "90ba5621528e4134acbacedd8acd2ba1"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "88b6b001d3ba3c2b685a0a5c9b467187"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "84aa0179e59c863f5f8b22a6b73b0a28"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "442e6a9f01489a2d1bb57c0bd947f505"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "0b58ce03250b2111ad1763ee0af3fd85"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "0d8e83b39ba62d3c3467efc45aaf8305"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "25b6c73276ab2aca930d32667bc2e2c5"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "0b4ee53f55c65ca9213d3352ef95fcd5"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "c47aa90401614215d21d04d9c4cce9ff"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "8ab4c8ead0a8c047943786bd4bd6eb4a"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "ae78b1cd282b8864d32756065af2149d"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "dde0296bb4e816eb83ccc5a196959b32"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "c99fcd94d0164da5d265bae4dbf596b5"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "bde4315a5a1b6577355179b4cdaf6520"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "a28fe9527671d9d6237ac3a1c27a8914"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "ae18775eaba9ce3261c199711cfc00bb"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "7282086195f4a62ea9cba6e0f46f85ef"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "754f272c042bebefe0c9503a4483cd3c"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "f6e2b697c92a35d248c82959215bc32e"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "10216edfb0b615051a6450165837d2f1"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "c1cb06394698935f912d9ad137f60e38"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "d2d958567c037873c9d386dcd5cfc50c"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "e426d6bbcf9bf91f61183e736d5d3d68"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "2289e0e8700450481907965d21e03c6e"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "65ebf8ed2bc81fbd0b14cd3ce52524e8"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "99c79d3466b646b91ffa655e4b28ea46"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "b6fc740ac4679183dc29663887901833"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "30dd0860356d0ddf8fa6b905ba49c361"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "eb19da06748409b1f50090e0e4461796"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "3bd5e3f868b2f4e1631113f5b4c53211"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "00225a2419fb3e358a7d5e63dec6b1e5"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "58550850dc0c0c1a66e9eba2c77d1b21"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "1b15a6d7dfbd619fd8dec1bc57d49d9f"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "232f36e57bf9a25ac6c2409b97620844"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "bd0573ad56fde9eb3bb59f69d7e85ffb"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "c537a8e3cf5edd300f524dff6770af52"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "c934f21f0185bedd9125ff40e2d5234d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "4b1e0fa597c9f7df92446282dcbabadd"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "62216c6ba02f1c2f47e7498b9f2a0976"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "a29d2b48c230ef985d95e65f7ccf86b9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "b2aabf38d0f86c90a4a5af582fa606e1"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "3bc01f68d7adef3a9be18cdaff17e342"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "fbe8872f3486d3726f6415c9fd883c4c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "221fb584e789cb8c1ddd77fe04f14c14"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "c7c91f2ff5df0ad0a5ca21e4f2877d67"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "64a816fcdcff31a43f0bdd832780fb96"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "c8eebc056679ea5b7d2019c74d0ec7aa"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "d06cedbda54c7151cbef7b2f24e71633"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "e7022b007e4bade8ff1352181f2082df"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "8067b8026d1301b70507f44850c9e8e9"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "715c295f1988f565d3559bc187ca5428"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "40ad25dab9072721ccd9fffada7a3539"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "5b6fe224a2543ad71b4495eadb9f97c7"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "0781f41c187e751e37c7ce780db62cdc"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "45e3d1fd98af24602c2fd0e68f8950e8"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3fa1b075f0e006cbeae83b6701ec71a8"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "886e16425df90438eb225c69abe277bf"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "2447fcb4fd0d61efae9cc1bb6dcad4ea"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "34d1641ef57214eec4c20befd769b6e2"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "399f536f5ba129413d7424ab89be3ecf"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "0e1dbf274937170e730c5063d7f009b1"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "0f23d5ec2f6b6368e1973b4df71bfe4e"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "7963681547ce44c13a1eb0e586398493"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "674ac71de5f995676b8a8b74127e1b28"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "ad4df37c26971576e9b76519c43d70f0"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "2f06f8ed02ed508e7724a7915ebd63da"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "5e1ef70d11e91e5d2b6aebb4333ffd22"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "d6d8fe70309efe5ad0172c1ba3c31578"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "1d90ccfca8bf596a51f9064922e1bb06"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "2e03fb9c50c64ceed0126b44fc990a31"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "7ba3b566c9d4602b934be0753d409684"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "1ac49fa9027ca4ad15c6d76ceca58b3c"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "86e03b7d5d0b4c9fafd46ced201df75b"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "0c9b21ec0b0c8b7f0afc7f4bce466f24"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "0067597829f52b543ee33d431137ca8f"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "3f74771f55b9a959e9d0cfbb210e2793"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "c53f377629e48015b37934453de3eb61"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "83f3a134b7f0f5d4510527330deb00d3"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "51663d0f583ca7aa3b0b26219ddbe25f"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "428d2fe46c3c812c73203712974b7586"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "517b524dfbf8d29ac6b3e0b4fd841f05"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "7291fa4bb3986760a8dcad691275abbb"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "0484d95b94dce46c6bfe646076d87a3e"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "93c6852fe06cd699d604ed091b549ef0"
  },
  {
    "url": "favorite/index.html",
    "revision": "689881475a7884bac62c05ff88d45941"
  },
  {
    "url": "index.html",
    "revision": "8a25cae67351edfe853cc04a45a19eab"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "f0d41fe94f32fb956c2ca8f00947347b"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "3941ebc4ea3cfe2a91b31a6f2ea9f156"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "0009c2312dc20613d6e6874534a1e461"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "c3e7311ae53dd5e5242fc3af7e095c76"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "6eb38cbe96cf60b8add65f6c75521109"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "91a9205d951f0189610807f01eefc6e8"
  },
  {
    "url": "note/index.html",
    "revision": "326f6922886398ddd8e748ac0d0e570f"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "b0e2149ddf0560bb0640c27a55d50f65"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "146e5502a7f480a4f3b315697fd8c4fa"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "fa3025548178f65c21fab9815779b50d"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "d7475ba8377088760154b0fdd82e09aa"
  },
  {
    "url": "share/index.html",
    "revision": "626d76f799d0ea39616d15aa8ddf174f"
  },
  {
    "url": "single/about_me.html",
    "revision": "943556096f64d1e39e81ce54da7a15a9"
  },
  {
    "url": "single/all_article.html",
    "revision": "7a13a9eb5bf7d0ca4815ca4a24ef5d34"
  },
  {
    "url": "single/welcome.html",
    "revision": "e40a15e4cbafdfc88a34751508d8c485"
  },
  {
    "url": "test/index.html",
    "revision": "7d3231035f537139e5ad5c7ab24de9f8"
  },
  {
    "url": "test/test.html",
    "revision": "0c1b4909662544de0b2937fee9f8e7e4"
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
