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
    "revision": "113541fefc01b7febf81c2b1de849ead"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "9e067f33b5686d5631824c9eea025047"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "0237cd0f93210b7ee3ec2007708b97de"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "e16150e4d1ccfa54fa2263fe3ea31ecd"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "99e0e8a5eea78ee204a3145c3bc7eb42"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "cd31d7ad2ce7806c46e4d6776010d12c"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "f4b079c3b12ee9e41a308d53c6947183"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "5c25d74fea2812b6e3cdb637dc599ad5"
  },
  {
    "url": "articles/index.html",
    "revision": "ab695eabf9d9b6881de0760beb4f36b7"
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
    "url": "assets/js/1.6810c99a.js",
    "revision": "c222c0a828cdd2cdaadb09ada6f33d41"
  },
  {
    "url": "assets/js/10.a911e1d3.js",
    "revision": "516fabf34094ba9be2fa2887325539ce"
  },
  {
    "url": "assets/js/11.d01af882.js",
    "revision": "65db9eff0c0f97bebcae01d41eafb085"
  },
  {
    "url": "assets/js/12.93922729.js",
    "revision": "3c6da505151351d03a15fd3932e2c263"
  },
  {
    "url": "assets/js/13.a2fff3ba.js",
    "revision": "4be13f15f9e6f35c93f7891343a76075"
  },
  {
    "url": "assets/js/14.be7ee9ed.js",
    "revision": "6e1d2c1059514c72b5077123939581d1"
  },
  {
    "url": "assets/js/15.cdd5497e.js",
    "revision": "0e5f4906f000d308570b39cef2a405f1"
  },
  {
    "url": "assets/js/2.ebc8e64f.js",
    "revision": "621ab6adfc450364ca67ce034f5b90ec"
  },
  {
    "url": "assets/js/5.30b5396e.js",
    "revision": "4a5d767ee941df89e3c29699e754ce47"
  },
  {
    "url": "assets/js/6.31c553e0.js",
    "revision": "ad3624f2dc1dc8e2e57ebe0123b67ecc"
  },
  {
    "url": "assets/js/7.2fa0f7a1.js",
    "revision": "b36b121aa66ada9a57f5926a1e7a79d3"
  },
  {
    "url": "assets/js/8.8b831a54.js",
    "revision": "da9df7745a121890608bf8e72a666afa"
  },
  {
    "url": "assets/js/9.5c43129a.js",
    "revision": "95f5882f15ebc2d8868e5967bd85d7c6"
  },
  {
    "url": "assets/js/vendors~docsearch.d73a5ea6.js",
    "revision": "fea27b45fe22418517f4423d1cd4a127"
  },
  {
    "url": "blog/index.html",
    "revision": "f04619714116e0c8b8bdab1a811bced5"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "48d64b687a1620b1e31b9c6e3baefe22"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "2827a687aca0ab7df9cbaaf334128868"
  },
  {
    "url": "books/index.html",
    "revision": "ea38d60ba40a0d33f6eacff9e0febf7b"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "c3d5306178617ee9618d2acd3293f32d"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "9c9e5669bf01658c450b1cf686f067f9"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "ac44b555f45fe2e0ec45161db40af331"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "4ad055c1d540015853720dd23e243109"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "32acf1d4f1e8b8651e60603ce5d0853c"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "2ed6545857b7131123a428f8114589bc"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "0793b4dc83b4de7dbb4f1fe2cc4cff63"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "2eec28955b300e275c41f2946e1a2753"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "b043ca75ceab7fb655f17f34437eddf4"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "f7a1e2a4c732e8597a7813b70140c056"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "97c15fd162ad9501125559618555048e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "a06a8e74f011192dbdf4df683feb739c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "3e311bdc5407aa8bd22fedbd05a26c5c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "7d2ef5317441752ab33b28a113e9eb8b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "6ff5bd343a093b1c4cdbf5e29562b2c2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "d45d74e19910f00e920b27f3ceec811b"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "366dcaf2390815152bd51c8c2b7c75dd"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "5ea0ae9cb2cb3d85029783f27eeb0dfe"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "9bdea3197798c3f6439d3663ee038b7e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "966d2a1c57e01dc014a767cd02f7e0cc"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "cca48762249c30c6bad68c441a11e99d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "3980f968e361d335900ff6f4efebb3dc"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "e6a23aff6737d9dff812a11656a91422"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "d2eb4209e29f66e868c6e8b942e80c0d"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "e5a0ecdeae0c89b1738c263eaea6891e"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "3f82d954a082d359bb598ea0b75c4ec0"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "ef230be6f2d3985d4176a0144de7d28f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "1bd7253f1ed05f67e8511432f98831b4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "117b4c4946a7c5d25949cc798c325686"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "90fa9dcee5c465b872bbe06de2f22501"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "8a016d7eac2c8078dca43166825ea813"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "dc4e202205945874eb0e48eb8e6d1a77"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "b1b798eb5e7fcd414a5b3c74588f7e4e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "8ebcb440f6ba24f0ad6d3131927d17b2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "6a05eb673f421e2a186e1210a82babe0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "44349e94c3c835544170decf7ad4c98e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "d13a19f3b7a415166e2b7d8dc73d9100"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "18ad402ff2999e4b7248944c02ab3037"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "87eadb214ea682914d34baffe74df9b8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "fe788ea32d70d524a6c862172c671dc3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "f74c37b4425955146a6e90ffeed2f8f6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "05a8ac5ec55b355af0feed1a8bedab86"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "668adc570f3ec74d13943afaf518da4c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "0653f01c1018604ad43164b3aebd49c6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "4d4f433255bfa8688aacc2d0c3632149"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "c6e361eb37ae4cbe3d89fd81d36759aa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "4fcdf230a5122b3e94f4fb4be2a6a504"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "c4883f8af5e63fe81109923f688b4a05"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "ba2c3d88a97eafa86614e19849aefa97"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "16fc605f364f7aebc651aa470dd73e03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "98b24d5b62e50420c839ad78849aaebc"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "0945b41268d1a96f56b4683d6b5d22e1"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "9b2e3a64140abe25eb68959658e5f14d"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "9286ee4e69c06ea3544698f1a27a1f21"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "2e02c4add00043d697d9e531da0b337b"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "31febd724d726953df6c078c4a330467"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "9b55d8583caa1b6d549d77b6f860dcda"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "8c45ac6081d6c864e274022c716bd06c"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "ecf745c2dcbe281569e6b09997188415"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "6df5c6cba337b78d48f7a262d05f5b7e"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "537da59ae0dcd4415f5f4165ec34ec8d"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "2b700bcbda163ab10deb22ca9cb42387"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "0f30737cd05a894352c09c8e1aebe341"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "8fad3972c0a3bccdec81ccd22b924086"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "ef9e52d8e002c771ef62d30091cdd29d"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "d3bf3671e0ccfa4b739bf0652f53a5b8"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "b730673a307c9d81c96823426e1fd1dd"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "8a20db9748fe526fd38a05daf0dd1c6c"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0a41b21351e702d4603778d2997cfbe1"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "b07f4916f1e6349f76d94e22943abaac"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "3b0a95717f350eb82dd613fc2b02bf3a"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "d34459bfac54cecf4766a30ef5b609bf"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "e28e8c7f05ed73f38667a4582c021ee9"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "0e7e36b95cecfbeeceb8eed89758ea46"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "a6d39c6ac67f1ae0ef59c8622a3252b3"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "79021285243892044e222ac8552d7a6f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "b4d7c4fbe189e5af77793d1266dc59ba"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "13e1195598226abdf9625b6ef9a51c70"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "e71bae70dcd03d1ef9cf2c4736e37fc2"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "7bd1932f1e3b516e8978a1bd0678a5c4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "2fb4da898d9e328fd04563936c8cec67"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "db0c7a0a3821484629693fa886ee5d62"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "7c9cee82deaea703ca5b6f6d0df26be7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "37cceb8e77efb2932821b16c120365b5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "d721a19ad9c5ba15f4cd88d6a6beab62"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c1deda1b0848bb498902118cdc1d5c3a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "5bd6fa4c8281b98ef60c75e6e6e8ea0d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "44770d29b428f334c776619af629812c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "e8302335c21466d50d0ee55975b5f78b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "0f0cb8c7078dd3965129455984851854"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "0d7bcebbd45c01a2c8c5b67172e46c42"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "3a61eeb8125dcbcf2fee707e03126ae2"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "0782778fdbb6f3af2d07763180fea810"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "be1f6b173a578d968a41648cc0936af8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "381bc271fdf9e24ec1c7259ef658b51a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "98ad2bc75b5b0c7b738deb3eecf8d605"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "f3ed13f546eeb1cf4e148703326e2e2b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "e7053959842dea7f59fd624d1b4e3dd5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "d92739aa08588d1258d4636e8de63e16"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "281f85e9eadf3f9bb90c1541d79b68e8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "c71b285b3dec1b00dbb705d2af585c19"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "eed4c54d03fb069829bf914d5d4757e5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "a11c8a7946eb3c8e7a8297fefebbcba5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "b85e2f198fb885d1a65589e34c6dbcef"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "60ab810ae3d196f24cfb8b4423998f77"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "eecad59cbf44eda2e366eb9b5157eb37"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "db884474ae9c4cbc594e7379b9403ce2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "38ec63133ab4b80e328f39ce39b0be86"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "26cf60471c8ebe6670a3c5f9b00d2eac"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "30a10c89a079525da9aed7de0c3fa4f8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "b061d2783b5ce83b7029fec17d955aa0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "fdea2634dd54f5e98df8f7439128a0ee"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "21715707398cb9baf188ab6c089c640c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "224170d43ea3e3b0d503291252f837d3"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "bf0654b66d89581f39b836f50d5d8134"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "b51035073d4ae3720fd7c36824655ffd"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "e1a2df46f3717c7807276aeed3e0c2b9"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "2e5dc730ec2e5aab3fb72a73474f9020"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "71688af13b3f73d12da1a0931a5e9ae7"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "1bb83f2b189952c01743b76bd6f1786b"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "05109ab75d95524bbcf1eaa83bdace7f"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "90225621956a794d9f34397f515397c7"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "ca97735cbb9e98e6ed7ee9360536d9e1"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "c50438c13dc517d24f35fc2d130cf153"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "274d723caf84ff05839f8039d108f8f8"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "f7705cc41ce6f7fecd80eabf59d82fce"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "29f10f5cab0bad910188ec941c98d9ae"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "ae92010649ef1600f3818f3cf7baf3ed"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "0fca80ac81fe0fa95774aac270f4ec4d"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "252bf24de9a971d44ff4729f3a9be553"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "5fdf1ba9560cfd4c039bffa4d613576a"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "fbf4e7f55fa00a8518130383dc73ca49"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "8b4237fd9280649a56f4b554537ab59f"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "944f5c4e96c36a095447b5aa03b40231"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "d9f3bb132c71ac49c26e9a5843cb963d"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "5b52abe0667fad44e16a603548e8661b"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "7c602cf02ca025b8d39760405233681a"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "5ac47bcb366eb76a991a231bf88d8e1f"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "fd1d96107c86cce4b4a7cf582a4e9993"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "7c8f11803a55e9d198c851b851e3ca6d"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "89c54a0b173d2e3f563c5d5a72ebc1aa"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "a57b3513bced1e77c4e05cfc78fddd8a"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "854c9c5e471ceeb918d5fd800bea932e"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "f226c7f811be1075a4b6209729074e5f"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "d2274a33ec028cd74ebf399775e8093a"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "cec6f89ecf4963fcbd71cc6d3b153164"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "17590591ec83f6c263d213a5d0ff4a2d"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "58658a350b4d821efb486f2ca274fee3"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "7bf74e2f11aaaf4b86db660ce6ee2f73"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "44ea531f982987f177b5df96f9c2319f"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "74462031ee4176bb7ecdc3d96d73318b"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a1e889449666ec0a8de5b575deacce0b"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "7ba1b10ed99d324aba8f113062050518"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "b29a18e8c0cb0cde11fcf142be8a78bd"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "08fb4b805225cd6b277dcb675263c7f9"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "38d553de89b41110c46ccabddcaea578"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "bfeb90463aa2c1f66bb11f8692bfe598"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "34d9beb02171c4f8311f933359087bd6"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "023f8d8afa630d71d7538679568e7ae6"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "d19d4e490ffcb9a7fadf2bf024a051ed"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "992d882e82f0d49c153c3a61b478cabf"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "18ad8e97171e309f939094bb90b07c35"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "ab5c951edf76680f37cfbcf41dd0b4bf"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "54291728702aa11a87ea886ad0ee4fc4"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "06ffaf6c4dd6ceeb06a31e765253d52e"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "5d02706bf60f4cd48bff159d6b8ca67e"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "b0ffdada707e596ae53852b754aaa344"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "ac7eea95cd89e989e231f35161497778"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "007c50e1c296d97f3b99cdad7169deb6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "605db2ee1e2669e623f8078e184b7938"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "dbb783056aec9b002d0accc50790d3db"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "f9f6596112e5b9cb404427e31f40124e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "3dc7d63b10cd7c9e5e8fe8cecbdbdacd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "720272d35f992fe13aa71f87346a73bd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "aebb194d05f24553b8a9e6c194a8cd7d"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "0335468c7cc1d512bb76593dbfc5c998"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "e61571921bd364a868fc4598be3c6a9d"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "7dfae1fdee20e2815f25518b97858d23"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "c2ed70eb91235fa3e26d9df7e6fb92d8"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "c1fb7d59458c935e0afc7dd19e3eebef"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "cfc9a5862268f16ddf23a1171ccd64fa"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "d87cc4e400109cbcf90f8d667af64877"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "0817f6a5087a191788702651cccd36cd"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "b34f6fad20f619c3e5eb774c4ee579f0"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "70df9c24ee0106037291e36b0b8992aa"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "d84a5422156845b210f394fa8a2b34b9"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "845c212dbbc415a9836af1e28f7a1785"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "5e8dc02c76d6a432e6d3337db10e7acd"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "b1e4ac4c626481d04e5fdc45fba8f0cc"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "2cf308020c4f88b57e6612269c87fcc5"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "1b094d5eebb89858fa4f813b2fdddb54"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "04a551f4b98d8418d5bd9c31ff4f037d"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "e78c2b5e47f5eabf87dafcac5346228c"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "ca526f355b7ed5f9bb7671a016cdef57"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "899f4cea9a1192dab9ea0e6df5850b77"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "cf276a59f2a17b64ed9a5bcc81f65441"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "8485415d6fe6c76ab70d40659c5fd93a"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "7340c2496b482df13666f81405361b75"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "8efb9a3ad2f3645bee5191c14147331d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "d8253c1573411a83d6fc62d320f9ccb2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "6daa56d10c353cb78ffac17966c457bd"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "a31f3ba18a6e2938bc78a89c50ba50c7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "6cded98dc6f5bdba639b026b74096c38"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f1b0ffb998661d5b29ade4f35f783a27"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "dc760a27761da5e30a782e9238a0d251"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "7450e11e709bc489286756c06e678020"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "991cdabf411f083f372d3a2a74404ba6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "fc355e8f3bb9e6248cdfda75875dddfc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "b7a6a37da7b2ebe6d8ca4cebdba03315"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "4cb7f68c5c5a0fdd994adc5f001e56be"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "61e27fca438e8997b31fd67c8bb1da67"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "4060149140b36615cbe735ecf9f5fb39"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "c41e6445081d61da5ec9976d2291d53b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "c21c108111f2dd14bf29ca70b97ff21a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "607d3d89878a9f08c91b9e268b4fbd00"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "34b32317423627c70c28dac8f2d56e96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "2a60099135a93954009c51730e2028ad"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "53f004aa8653e10835ca8f254cba1aaa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "bdd7693bb6e263e8c05c6c8901e74897"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "f2cbd64fdbbd5bb5240fb83fcf60739f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "af7f448c9ca8e9bcecf89eb47238e77c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "c3d5af797eddda59b4db956836a7e81b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "2baf2387d0cffbceab8ffb718d9048ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "229863b296b6d59e9516eedb59f84244"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "5b4042da3342f54c8a2e46a2115da9a7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "9cedb45c3102cf8a4fb6a6c38f5c871c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "8ea6e83676f36491793480c1ad87a5ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "f7fe8bb830323eb311501a7ca7f31391"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "3fe3b9919e9b5684c649df0877d1adc1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "f515e8f7fab2316e4b958bce70706350"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "44545e23ed0a4c680b8fafa5b49c329c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "b172b7852bec6f1646d48dc82c22a9f8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "c4dec11f1f9c12e2bac81cf630792c49"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "ec244153e60bbcda3348fa7ecbebfb9d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "783a4ea5716e359f0e8088825780cb4c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "b7fc484e7af7aa582f1403c96745837c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "1216162a61fdc47db8e8bc801783d7ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "9ff8c0536eb1480b558f3715d83a3235"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "d4a15f57078e6e9d46d7c1d4b473340c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "a8312db279e1aeb232eb75bec78e11fa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "2e88579c43b4a859c0137d964d70ebd6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "e421f1cd93209cccc5de61cae1e4b176"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "ff506e59022081d853f932476580cd3e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "ca4aba1bc73779cf293bfb0bc06065cc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "c34da06c47ee2daa3e01fa1e09ec4b96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "a2f17bb83e9c31c5be4eda1a6cc51b1f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "02a57caf5017bb1d8084334aa34faede"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "4c572838d798d2516c0ab5256ad7af8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "e7fd7957883133628b0c687e0d44db03"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "0ebad97a20ca5708666cde70d2e9757f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "60578d2c0783c401e2bfd68df4da27bb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "57f274bc63d826a95f33de3bd268a08a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "b2f7cce88afe0306e07b31a67effd1af"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "92f4c160b8050dfd78914e61a4648bbc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "3074444091e61e706da70f2abc46253f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "1343ce909b268a6fbbd2092425abc4f4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "bc54c24f71f267c0d4d77137ca329aaa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "a38f27e023bf29e08577166a2409fa78"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "aa95eb379318d38a87e3291d578c266a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "0e9938f8e529baf6ebab74cae3c91a5e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "aee8f9d9429463eef039aa86075c7024"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "4fd88a8c61a63483144b274d44218dd9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "92a19c781442ee37c5bbcd5ba6bf6da7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "e6b6561e5e45944ee744db7f8af1d40d"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "9693f400e0c3dd41c8c7aa8a25f9992e"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "4aa17b0a3ba09c8f7f014bb39a4b6883"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "9944e5395a088696cd7c42bdaec00443"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "03f8ace8aeaf072d2c3ba6d1aa571b1b"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "b7c435cf29ca156cb8a03446cd061d34"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "7c2dac6caf79d418108b886895e6ec3e"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "948d49d6fbef84a132dc02d4fba91f2a"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "fce79fe645a7654fdbc86d4365f6eaee"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "d197a772ad1ee79e0dea8e028440073d"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "c140dd1885bc5248caa5528c4b1f4f15"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "2d92cd7c27078bf4ec55bd031d972268"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "8f9f739ec1f0e47bb4c146506e93acba"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "55808df43ec42b2f7876efa669695b67"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "191c0ad58b0e613e4dd3d2e17221cd50"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4c8bf0e9004225efa5670b48bc17123a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "2777a86be3efe51104f0d34985303197"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "093a2bd9bd4dde83b4b2ad27f28d160e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "5b0821ce145fa146fc2edc16ebf44a24"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "73a6b2f489e9c48a00d1d2f1e490f3d6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "7b2184b15fa3ebd372ba324ab4c2e4cf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "01fbc647c8df1862a30f22ae5717bb71"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "1a66cf3a0f01a3a09c6a75dafcb23b72"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "8918cd53e56aaf1fc1af0b04a93f5a10"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "14f3c7ee778c280ba33a69a36482991d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "b8099055e58c5ce655956e9596cdbc15"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "5807eb4965bac8ef224f17bab5016d34"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "c504b3993a2cb60ecc0cc45195818f94"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "9e94fd89656e9072fb4d2d1e737beb1b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "8aa8acea076c376bcfec6698cb47f9e1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "4a3e04d80b4ab16fdcdc7716e691fa26"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "f635a938182f61b53c9bf19f102f6a0d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "c73167f8d88e9acc4303c0073a36bcc2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "5cc6b8331e0be493cde55c00137febf2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "51e917f2e6884811b3da397f36a58d2c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "2b2a63e60b1647b37cfc5017d1b22d87"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "e57198952089c20a670eec01bfa1eae1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "bf0e0f3e20ba26f4a5799eb640e0a3e6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "bfb8d0314194ea76200bc48f9a9dad7f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "b53bb4658d29175b6eff3e8bdcfff6e1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "ee89b13da533a235c73326ca27e76d57"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "a036269faf02f0e2be8a74da8902885c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "5c7027c526f5d636d93ecd24cee5d64d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "f663f8d1109dbaf1345a14f03061313c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "887419b7ed9fae89729f54d98ac2c939"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "d27dfacd3ca36f06af687647ed79e864"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "6381c3f15d78a3ac2f902515964f518c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "d856b69900d1f4eecc395ae3e8752365"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "66ece4d671450461618230d39c1e19aa"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "67108d6bb04e5fff61e839840db0b5ed"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "f2591c923a4aef805827d8360febe549"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "94b3df931293fa5609cbecf0733ec500"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "c31ca872b76b6b15271ca1bda00b9207"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "05223eff644062c25940da2b84f519e6"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "a1f2621f0d9c5b0e2ed310a8dc64d169"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "0c06f309a171257163afee203e2d5b7f"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "4b4bad6a1281f244d7507665a191d667"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "b4ca00bf4c5977c9acdaf09863cdb84d"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "4e0689a01fa56a4f9d160e78a3d194de"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "572ba431e2d09cb682387e550292d672"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "2887d34d57ad52c793ba0a84575b39fc"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "f6e17c8163e9115f94f577e888b20e5c"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "574463a64247b3e0fcf93d4c40c196cc"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "4fb0328e0e8c2386a790076cd21b0cce"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "f2c6f2855415821ecf0db86d5636a693"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "3a764212b20d714d78d758e1a88a15b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "d1e2cab646c261e9f9bbaa51a6d71d55"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "0204a3dd7f2191b4a2e0bc4c73822810"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "fc9021a67bf078e27ceabf695c961749"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "1b5dc9e8156ed679c40f611a9e0ec633"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "97684ac307b082105d5bb3f066edb5a2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "68718ecb10af7a4e59213d83919f0a43"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "ed039336e1a83966d2726bdabbcd9d70"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "bdd62468bb836cae4edb63e3b21cfbea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "e188d4ac9ca5af02076d00f84bed28a9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "9842ce4b5f6a4d3c71fa1b9ec98dd438"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "a06a88f5105497f9e3ea4c65bbdebaf5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "77c153424a113116fda523c73c0e5113"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "be79ec800744330ffab829977b8c74da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "74d92031875790d6b1a9601ea3762333"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "1030318e7f4573136349eac4522dac3f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "73a7a84339b68fea7d74a6be7217f080"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "30e759e03f66a55503accbf501ee80d4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "2f05e492132baf1b07410bc61ffd9cb8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "42818ba4a1b6ee548fd8605fa975d951"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "00d965a69fb629f173503fd123e1d760"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "72929846a1d1143a5d07e27a22244f85"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "a2defe4c938646f18b6be00b1c840441"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "3dcf12e82b818a311ab17869c06c3a2e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "76c39528cf877a1727c12f5d03fdda5d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "2365dd9f317fe8e5b0f21a30dda6bd1c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "d9e470114bd7c8ebff6067a8b4c61fbd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "41d3debf6c2eec8cee6a064c50077d8a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "1fe9641ed736e52739b0e7f29c569a23"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "7dac8e78573a8126d6db6307a03b4635"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "e1124a9937145c6834fe88dae6b67788"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "095a9b370aafb2bbdc4182f2c83633bb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "1f710816e0958e9ff0252af90906f62f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "2b1151f9283973b7bcd2de15dc53ec7f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "eb3d20bc89071f0e5d60a78b72e4f35b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "511e0a8617eb7cf15761abcaad88f755"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "e0ea4a87b1186dd5876d6774d7cfb7fe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "27fe020c8f4bda54050fa1d4cefb67f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "b4f4f3b9e68f33925eb950295fec5ae5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "3d3be6abfd6350d5a67444bd1ffa067f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "e1fa44c47f135445bd8ddac142d26521"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "8ab741f187a4f567fa0688c5459943ab"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "7f08626a1557d688648886f3cac6ae21"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "7bbadf6e381f2e6500177f626be1f187"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "cfec158939e7e2848a848ea89a86f22f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "14ac9f12ebea53e39dfb6374f47ce8a8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "424f66a29584b63dfde0bba211a246f5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "f9b4039cb459f10a82bef8873031afbd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "ad5d167fe7f78d60cc198fdca6ac500d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "ad1826cf6b051ebab195d822d950af63"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "e1b1b176a4cb190a6d037a075625d99b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "4becae7a2515bd0a8ea9024b4b9e9ddb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "a2d0851097c9f7623aeab5e1aa644020"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "4a9d5c8352957324b028d9a95dedf6aa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ec1308e61d4817efb5f818b2d0b269c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "e2de6b31d30dd6f8b16266e43531c5e9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "42b416d3459bbbae825465d9a2ecb2c4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "c05a23142d3312f8ec6ff3216e0919f4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "1f710870b0f594b6496203b7c095d6c4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "feab36e18ca23e7d03e5e136e1f4b3fe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "51a589b065aa588f14f396745f7baab0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "78b65b563132929d419643936630754a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "e86730bc4bf9d1390968d9818c278f6d"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "4963976deead2001825c993207faa21f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "8cc6b7fb30e0a4e362f587236a80114b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "2f5ec5353906d0144481a165fbb8157f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "62ecf99dd32dfc4899bd086096840b70"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d9c9555ff82b5b696c5bedb1d3f955f3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "adcd391cd281c800963e67685ed7f742"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "bdb7a2e9d6e48edc57477d6bc03e6025"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "7303ae9be6a81efbc2c3679894e99687"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "5b877fa7406fe6452cd3d5c81c6cf5db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "ba4481c8e2bdb777535ca8406c9c569d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "d2434d6e3268e93b7bc392ae4ad33cb8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "2c902a260a32e1e03d88108361cca383"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "b4973001b924d74209a65f84c12a5702"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "7a5c6c335c3ca9879d1d4928068b09a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "8640cc2aa96d84a8cb287b7aa7c5bf0a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "530e6c92488acaf7559af6d4423de33a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "1c75039facb4cb7911f681906651719b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "cff68a2f0bb375cf9f195ef7655813e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "e57277032b8f11b8ddb113121f96ff5f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "7ea11c5ca846cb7ba82f2aa14ce41e56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "57437e0b9775cef433720cca34dc5c02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "b8642b6c41a57ff61e990ac18b71db53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "a17b773bf8a3f0a53b8baaf7180b34cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "836bb2eb6f22638385833bf23df01a3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "c8694123e42ab23c708f0f63493a113b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "3e880fea12e034ffc1331a0d028be65e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "a2e56ebab2ecd9fc99608f5c1730f88f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "2243254d34869591a19dd2cd90d48bf3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "dcde932a16e0a8518307f8d6927e8cd2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "68591f928927c585f2730c0a1bbcf1fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "7dba7405b08f3af7d4b424b5c84b6e07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "5df472d5b72be7d1de9173cab1d746a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "5f89519d0e2e8e5b4752930d352d93ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "91228b1b67b2b405461a70954c9b9189"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "097a47b5c1f0af2af79e20728cc4e2b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "de58e032b397953cd2224bf967bf02a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "9e9b18483037ac96c304220e5cde2880"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "f8700582cfbbb00fe54aefcab89686f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "412a60d5dc84817ee9d281897d2eb894"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "98c0122bbb1340a1f689a10a333391a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "8330b5e40adf60639c403bf073a3e678"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "1f806e2cfbabbca13b0d7290da70097b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "e4b27f01070ce438e42bbe6c9dbd5df6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "83d5342ae2c61ab147856b8cff3280aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "f7beb56499cfb3b1d858b36e9e365de7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "56737e3ecaecc357d5e7e130d133b0a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "588cd1ae1ec90700e5a8a84adc786153"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "e023c681e296e95b8d4ac13b9062f398"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "ded5170160dbb6f2f6dc42d02e55bdc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "8bbd1553d0905bfaadfadb84cc28b43f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "33b676bef2262ea3698c47d8a1582f55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "9a116d62f5d8a504667cb39e095b7d89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "82963c64621ed6750300c51f50e241b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "33bbaba6a6675f28ee75a30bf2e67b61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "8a4ac8892495a8af80d0458c91488621"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "37e3177c8e637358379267ff4690aa46"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "914e4dc03acbf05ba18b7ab5065f95cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "8a8206000b0affef4a31342d66613cc1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "efa4f8b42ace0a265b160ad3e928f3d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "795d03c7c4794e78a8574bd4fcd780c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "6de6ddfec541b5c61961bfb6093df6d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "a7af6bceb4979236165215319afed721"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "44750ebefe4e7d29215a5b37920c5533"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "401708505cbb1b479c90d4ff17ea5377"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "e1bc5cb0482b47a75efaca9abf88803a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "f8290d5652d769153294cd98b7dd7518"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "961d00fad78408794396c1940f264480"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "71a0aebcceec41f58e556298b841d2b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "b80986e09c2632172d0dfdc85e14f0a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "00d7f1bffe09e0dda52193ba3d5b7f52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "de4b05f28b9d40b86f56be8d8e582c5b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "20faad1252cc21266ca08485e33bff12"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "51be16554cd817d1ded0bf756a03ea40"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "6fcfdb8455b70a73257a687bb5290e3a"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "ba4fdf376d71f6324b4ba14af63e5dde"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "e2491b12584caf24bfb6945b4d2aaaca"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "24c5e4d3950838a9f93c3c89035b3667"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "16867c0e6cc886c32fc27fda670d36af"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "bde8fe1903c3c2f7e862cd85d8937a7c"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "c709dfed9be69c9781e2e070e7cfb048"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "7f3dd6b37b61968cf05b53b05080fbae"
  },
  {
    "url": "categories/index.html",
    "revision": "441ee8c7312be8d347506fc064fc949f"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "a3ee3c4abb8e631f3abd92d046e45373"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "8b18049e2af48031a9f5357d915945a9"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "dadf1319d77154ea7fcdc3413cd65adc"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "ec8dbcf9620cdf781a95b0fe42d3d0fa"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "b9387c746ac53def141d7d7ed4712c4c"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "596e39359a5051a22c5dea070e9f150e"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "2ce1cf5bae24b45e9ecf1a5a4da2b638"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "d468ee4676b9aff2df5d5cc2353e0117"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "52481de7f7abb32083097d6c1168ce3c"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "51649df8fec9aa17ab26f9037f66f198"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "a0330822c622590206f3b331f2fabd87"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "a10069128eed78aee99b49a6b925a21d"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "30b18931168b82d44b71061f8a90f11a"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "5830186e8dc88c272e0c9a98aa48584b"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "95b9221e9a8c07edc03b6527108149b9"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "f77bfd0bbba60ceecff4c007a45858a2"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "9ca8121fd95533602ab52b62ad110de1"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "0ab05f1491c6d44f0351d1d076f3900c"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "a19d8338c5a8fa555cb8e646dcb30ccc"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "c0981a99e46a647ecb1ee91192d6eeec"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "7124a708a8918459564deb494fae4d0e"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "214a71a4cfc617f3d0f4627d67481f17"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "4f043199ba4e028d2dd6db9f0d4ae7ee"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "308632c9cf47e0ba60a636cdb3e31efb"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "d938e0a58ef1019911052f6e5467ef43"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "92c77aee6de54d648a215a359ee89704"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "8710c28dfd837e441c9fb1b12e1ccdf6"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "53bccaaf786b33c444ad9d3ae410b671"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "56762f435c95ab566cba2c82373fc440"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "f0dd7a91ea0e3f05c74d4dcfaa2e32f1"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "dd0b71b6ac39ce3676026b18dd6fc028"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "4b9f3e6f0f0ca32bdcae58927fa517b7"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "5b2bcfcb29110468bfb2e4b9eebc82bd"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "fa5fb96adcf7751f69685c531b27b0b7"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "ec6152c17a6aba9e1d25312124160c43"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "dbdd73c4ad387e79d2b85073dd8f6465"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "8a06ffad80be129337373855d2189221"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "7475496884586f556fc1d6fd16d68986"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "bea1393dd6c2ed6366906d05731558b9"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "6c40daee7be1aec9a394debdd1b192d0"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "075a0e59a907a46a933544ec56e01c55"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "bba934609e9651eb4170d920ff808a31"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "20dfe549f8c5b12570c4b1b7b892dabf"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "5aeaaae184c1ea0ea90424d186cf34c0"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "bd214a206b8d4261c788bb687f4c23cb"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "ea2306ab6a8c5dce8793d5c0b9b572e4"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "8c1c46cbe08a753a74c1e817fa042eee"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "877391cac2f5d88d7697af99ca530018"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "3f37c858445d0226b89b44db4c2a7a96"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "0862f2a2826ab579608ce9afcc0c2e17"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "6e92454a6a40d126c7d7378539c0cbf2"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "69e6f37de9e8d45da3b08618cc3af411"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "71106c6143b1bf8f4d2c6be9ce0f8670"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "e97d6bbc00055782e7ea808132befc0c"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "786d31b3d9da67375efec1fd6eee77d6"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "2bc3be0f95f1d67a73fd289b36999cd7"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "95ba9ac58eae2eb6f7f49cbead78dcf7"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "f2f62549a5c55eeda2a8abf8b5f1389a"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "b658bec6b64682702c5a0dacfe005014"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "be784b0445963386339c75627b2c9932"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "055a10d21071796770d7735e85ecb892"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "30a1068e3ae3416e7abb328c00125a9d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "f1676231a50efd667e351efbcf4083c0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "31b857f319851481fb6fc2b43444bd12"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "b0cb3117413554b523212a3e48a0d284"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "9637950901be6c95348ae5f28105e09b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "6352bc30a243ba3d41e65834d21400f2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "7f18daa95e0fe04f4289016d1d1280b3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "793f52cd9019c92ef1fec57cd87a77fd"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "cd25f6493544aa43f6bd6f53303edc4c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "2f0bff1cf81bef4b8c04dcbb4e151f50"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "f122b51c7cee76e6b8cb94275aa0ce1f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "98e510da333d55fbde76ffdff15c8a33"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "9bc1680667bc4ae66db5ee1d0424772e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "034b64e21d31b055ec4fcf9a55d7d23e"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "58b9e8091e6daf0624ab8625e8e26a0a"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "ee9f6ef75c0eef203e984e480ba9e05c"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "97acef471b8e2daf223fb06d367e1dd2"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "5168982ef496eba2c8b4085c023247a3"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "903821db961732f5cca2a84e3be88e9a"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "d69766b41e05b84eed9ff41e3dee7e55"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "0c73b1f27cf9f5d927a0f0957f53d2d7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "353a9d18236a82753c231f541b11eccc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "d224782fd4a335e5345bcbf42338cbc5"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "7e94ddd56abd270341fbf532d6790dcf"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "bba25e5430e13c0ca71af54ed43478f8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "345473b6edffdccc9575dce26308fc6e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "7986526b35372652fccd4454a0aa6fa0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "7e3c68aada8981def3e86fe2faaf16f5"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "21024884051d8832a5e73ccb7a619d06"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "78366adc4edebd9d4ca0023a958535e3"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "60201401a7dac92572ff2f061f04697b"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "a3c3e31ce94c5d748345eea47f3b7958"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "c1a6c3ac90a20ef5ac1aca02fbd8ca14"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "48a94d3954850765fe58c60b630e2c16"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e6b37e04eabc9113b64ca78487d0be99"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "77d2b39f5c3cfa02117662bfb841483f"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "c05a5fe6eef439f2a6929a99b333ce6a"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e163d73ddaaf8d765d32275022dc3bab"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "028e8b144e2ee8ae36cd9bbdcf9e29ae"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "ad231d5fbb694486ae6d5675e266f88c"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "0787f0cc27a57fa90e0d43cec901ee40"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "03488dd7c7457bd043abecc598f7068c"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "b4ee12b5704b9a2fbb2dcdd0e48bcfda"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "3be279e8c9b145adff8a632893d7424b"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "4516a7f517040302fd68059c5e55500b"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "2d37888aad42a726b1ef57c26a0c8f9c"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "aabb224b1d02234ff325f35682ec782a"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "057a1c65fd2b364fb19f1b5d2929a28e"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "bd9f22d3a534ef0eb040d664dd38f539"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "62d597b7713147ed9507d4eebae8492b"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "5c9e353ed496b3e1b208410c532922ed"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "a2a9f78555d57f0864a7b5b11a1d93e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "f2593705235553993f707423093245ae"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "f782158f8ec803901f2dfb97aef5d089"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "d9561d4e8a57ddd520a3609e4ceaec8b"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "9f498314a8e156b98ebcfa499b167505"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "8125626bbe758cfcdb944f4e688e5cf8"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "1f95fe53c243e042ba1ea1a2fee5e917"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "fcdff3491983d9caee6ec3ba6c3131d5"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "9dbc01b6705360492c9326f41572c8d8"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "73740c9bdf9c06b71cbe9f985ef1fa84"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "36ba6eb06aa32d592b70502187da7a17"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "32c1e752b52ea2ea71e8b3d8b8509a3b"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "9043940f438ec2c695008e57cbf7e0a8"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "a2f8be35cd4b16a2a573e57c740fdc16"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "4cd43096a4ded5bcd4c08dc2af896519"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "05fdf1c3371a6dfd138327b0d493506b"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "9a3e48145e938292c5eaf2cc69e0d79f"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "efdfaa8579ddb43fd66c7c33d89a887e"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "cd8bde3ce1db34bc73239e14072fc8a9"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "0fd72896186d9e0a1d3f7d16c4ecd61a"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "c189261208646ce34816c52b47790377"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "6447d938dcd12fabda1ca1ba5174b8ca"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "344565083f5e7b5cb5628777f5600660"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "947be1703655a19264d31be5a58e5ad6"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "307962ab1975bd1ed9a57cb9137d2b1b"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "42030261142ee22467252e903a8eef6a"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "c426122c9b87c2412a0e19f7aded0dc5"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "c35b3dc2040692c8a1db86a8e69b9ff8"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "38f920cc3af17fffd6a46b3d809e6a7c"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "1ae0a6ceaa4f72df3a81bca69d1fca4a"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "2b00233459ea32613a65388a52bb601f"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "dd7fabf5f62047d03d43325f14e4687b"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "b56193b65a279214497d86bda96822a8"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "4fa7d11305d0e87ba2579121f7befd16"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "4cc1f7b82af2c10ada8188123a843753"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "2500471bfc809f608b420105e67850d4"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "5e468e589f0ccd5ea3f1dc51999ec475"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "fa77708ce2b680eff9bcf0d43e5a6c6a"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "ac7328427a3c1c22907c5b9f15f7b1cd"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "1fd49703a890a8569dab894fbbd73cf6"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "4ee65c7ee58e5e9499d97f3d1760987d"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "57461073d381f64f435400464e2bb198"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "7745d65a214357bfab87cd57acb02f6a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "db187c63cdb893f5f94dc42c5a19a2d1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "2b67c37f17aa71245a55c13cc5c1242d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "1dec821f7dc97bb2bbbc9ba5056bfacf"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "7d192ff91a531d9171bcd65d4c003017"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "877d808520b64c8f81fe8bba1cee5b47"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "be4d346ea8e83f3c6ec524f87576c622"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "3fdf2f0127b069ab39797503103819a4"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "6dfc453a7f171fe4105f88f07ff6cfac"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "7ed481a7bc332b9a77fc823b450e7aab"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "72bebdbba236d94bde3e55fb8eb7e07c"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "d6994c768adaae88cbefbd836766ee38"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "8deecdf6e7a54ca4a3c13ee77a5a03e6"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "5ad69334239a641702e0b0c30056e448"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "8ade140e1b8c4bb102c55b321c5cb69e"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "c69d098b4df1d20620c59625c5ad174f"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "77412bc4334d5f26f77f81de42fefde5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "8e0f3dc48831d5d482b3cb0233d7fa74"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "8c7970d1d651dc17442c490d34c71507"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "25d003adc58fb626bb4d465e68df79f3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "fee7eb3380c1c1765a678697d0c75c96"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "b89ad0be57160c03376ab7f9251e020f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "a861e084ce1cfd15e13595c25c8ee32b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2b7264192708256d98fd08d1196336d7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "f4ed3a2bba4c9d5f14ed90ab9d43ac7a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "79f58912c312a1e88f11d58efa9b7668"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "6c81c877b43c8a98e7844143a25ce166"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "e55769b919533eb32ee3f0004b727a44"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "2ac69c0b34290261dffcffac8ae983d0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "e8e60752658ee1146ecacfb62bd6273a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "5a148d0d1c8e2883fb5ac81c1c675215"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "c7a3e69a84b0f42719a3b1b560dd303e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "92550805073d817fa27a3ba406e26d58"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "1838b1eadec4b2f5c7c43d2dfd221a46"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "b033c274e76ba24c1095e774f706ad9b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "f13d019be8133375a38822938ef9882d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "e25d8f27f0f3943b70a6ea1f8bfecc71"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "80e6f8bacb1d016e0903914c52f99ef4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "52eeb1fb407f7faa88067fb2dfb0b442"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "05f1c4aa168cea2f7eec44cb7ed2073f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "7958ef66b5455ee49633f216d1bca184"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "16ba56e9ed226fa3bd4baf4de1cdf0ee"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f79e6b41e4abcd5ca14eeaf1c5579783"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "1826bb8e8b16d6a2b60a2aab0045414e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "98e186e95404e08a620593ad3861067b"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "09de85e6f482eed371515de12057efd8"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "f2e5c01fb4e4cf2bc8f730ab7ef5ea01"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "dc33c572dbbaa4289ce4eb803f6da03b"
  },
  {
    "url": "categories/os/index.html",
    "revision": "99c7b973bf12b9cf875585a57f4be28c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "44fa744e10a32177b41907c15fc706cf"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "4b1c8e830d172ba8bc6b1cb81f7e0ba3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "d4fcc1d37168356787291015df549b2b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "20303261f76e42f07cac41b1832a6a36"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "919c792f10d715ca519a1c669e36558f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "9e6d95adfa3603aeaf2275cd273d0a03"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "2887753f7c0dece25b05169340950056"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "35cf8eca824c9555e817039177d8d766"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "33dfe546dba12154bb26d2015f127f3b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "ff73e3bd43951d4ad03e5165eae216a7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "36ad86f894dccd818938934c251f07a1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "dc3ee9bedafc94836682ae1271ac5f25"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "02b89f5d9a26d809c5377517fd9db87f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "1926418ccea56d93af13f0094ead9a0f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "43d8ca4ebd5a1bba66f16a9325dcae9f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "fce2fd3d1ac442561e6927ff143a5e1a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "37ecacba44befc5c69b3020ef66438fc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "b3779085dced6f5a9c442de8442d86da"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "a14a70a5886442312d431db067ede79c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "a3b090b4e30301ec9d95681278b779a1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "57442e231c49e07c450f0e735f5155c0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "3496eb500bdc91ccdc8fd1ac3afc38f5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "27c29ac1431c72d8c5cc4abf72f638d0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "2e53763d374edac19e9ae742f3763133"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "67f1702d179d86c30c93a5e92db36f9d"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "07a08f027e3d4115d6134b81c8b64d09"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "2fe100788788766c76cfadbeb737ffff"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "e824060d269549a2f8d7bcb8146f57e8"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "f96274d37a5736e1fb83c6a75cdae1af"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "f6ff41503ea1b0f6549d8aca9021d08a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "561edb4c917c3bb9b155cb61022bff23"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "cb2372e138f8e2c6f7dc10ad410e88db"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "db4a94d7084d90de0388436f69ef5b0a"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "9d01b4f035fcc0824e6d71b2b6d5f9a9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "374d9b32492dc54a3560b695c0369688"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "974a8d2979a32c49661f001a73bfd45b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "ba6acbc2dcaf0df93b06af58cdab1c65"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "e56b30a119a8aa205b81fd97862c97b8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "e620e7ee9e44213f41909fb48cd2594f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "02e3056a19257191d479e241a12567ff"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "c016e07774731a2ea2db2c67cf79da29"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "4d22cd0d5538ca8a28e114742cf9f1c6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "5d4cca4eaa632a238d0e58eb2c480fee"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "00a2f14f8022ecf38396ac5b5a275dd6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "684cb2ca0fc31a5726eefb0324425105"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "1812e702769b04dbcf5965a788d58944"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "8aa0aeea16270103eabc4dcb09dee7ba"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "2df3840420e1b9563220ebedc0a49248"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "f2746693a701c7934f76bfc791b4c3d0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "392724c81d0762521c7cfd12fe460a4a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "15973b358f9d688ec2ba7c8797354bba"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "98938fef241b859d9f26649d80fe3e43"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d8336abb365e64cf1c1ca7dcb67d8c66"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "232bc66410c69f72b16b288e6122c9d4"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "c894030984927baec2cc184b50ab57d3"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "70c5948e725be088b17c45bf176e46df"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "7ede2f95b2081caeae98d8673668966c"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "6dbe415238be2c125225ce7ebb9232b2"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "f66d07c71a0a069e9baa5d17eda4f779"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "fef579e5dcac2dd69ea20ffb4f1892f2"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "c9cad947c8f52cb6e6e2dbe0529f359a"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "68b171cd9cd71960bd09a59f5655c967"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "24169d3f98c0f8cbf67b1f6b7ef9b6b2"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "af531dd62538ec99c622fd61f8b78287"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "dc9227c5f52ae06b6a417fb1e8d8bad7"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "53daf1070f594f2e041815d5edd47869"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "dfda1a8bfbc983e791468cf3b780c6ff"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "62557e5ec375be5002a805c138460270"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "65f30590aef37dc93b82857ce54159d6"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "af2b73a52201029e2b13a4958ebdaf27"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "9695f3f1c3dcc1cef3d3ae4bca0e6e6f"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "8aee7d4d096d5ef0bbdcbf83dd8492df"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "372e4c6a5ea89bceed4cb2c62e10c034"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "dc9223b8cdb59ed3530a01fcf80ed4c5"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "3237c784958ae541514c3754518143d7"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "62ba2f6b590e6c82278fe2b7069bb04e"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "ff98a2bbe380cbc395f914ed0e12615e"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "38d0cd9d9217e49533257759bcf7765a"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "97ae9e8ef0f141603d9f3d1cf2dc085e"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "81f6ef27c6bb9a601207999a54304c0d"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "356a76475ec92c65e0ce82422cabdc5b"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "77e90c107cbe8e6c38092dea66e66c29"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "b00d4b79d5ddf6e4ffe5069ed980dfa3"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "625b2aec585f30738fb24ee83ff85c6c"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "d22fcce06b95b806aba11bf8db863db1"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "7b76c2245ffc9ea9f59805f9694ee087"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "34a051da037f7db1eb36fe1b2029d47d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "e10d7882e670a92be3e066446e0b1714"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "49c46fd495780c58286d37149b9b64da"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "40c6d06e2f3dae980134135eeaf3accc"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "acbd09d7f59d07d3a55c572ef55179e0"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "c224dc2a1e583de1fd688a0b5655b8a1"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "d3e82a2a3ffff86b894e2e365113e22e"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "1d8ae987518f0db9b7028f0d89a9856d"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "83492745d0378e384cb2782f674fdb09"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "4fcb5873821dd3ea0fd625e01f15e82a"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "ed72671d9f586c0263b2d14ff337bd1e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "efbd3f2f91b7f0c80108fe7ffeb7cfdb"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "002d612c237e7c7e9a72990131cd83c7"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "0e657f456efc6a2690c5a60a9c1ffd7a"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "fbb68cb632b44f36dd551d3819bfda04"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "9761468ed37ebf6134e99afb796043f0"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "97d030566292ba67ae55efb1e194badb"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "abc235086c4918b6ebf6f1a7ad6e52df"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "9293ffa63454dc1745cff8f18fff1f63"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "9490dbd734a1dc478ae81b4304c5d514"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "3eaf5f27d257d276cbb24faf1b1eb621"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "53fed714e4a40ca56252050bfec52937"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "612a1b339a38e2b88f6e3ecd62d42aea"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "8f0c9ba2632d60b99a37ba12fd0ff032"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "67f996c71cd52e37fe1b8ae1ad4f27d0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "3ee3010f716ca69677ae4996aa08c23c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "c5099717101ee3af5c0ebc2159b94c3f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "51fa5605bfad0c7fb734ed2d94e2fb5d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "00ac94d1097e15458f3cf2f30f597912"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "4e068bbc90defe904718ed062e234a93"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "29746c6645d32671ef811f5ba84a7a31"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "2b63a04fcf77bc5b7bdaa0f205641456"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "017a1d0126bfe189fdcc8eda036ae7e6"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "b6dc1f656b942dca9e273d44dbc6b09b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "232cbebe3b9bff987afe91a2e8473b58"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "206e85aff62c7163e38863ddaf3c53e6"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "f8797e081c00dac78a0104e805b0a0da"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "5b81b0f5d00b28755bc78264c509ac64"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "ed59637eae84f64c4a5887e4e3422687"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "157d1bb772063247078ffa2e4929e70c"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "4e7ccc4eee706c0e2abeb98e8824f1f4"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "8b280e47a3df44ddd2e6e88b55d4a8b2"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "c6d5d87e491a5636fd933017f48951e9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "2f55a7f08ea603a015e07b235c9d6e71"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "21753a10c0688a998e56810a55158254"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "589c4af1c98ba1d198dce1205c5d351b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "3f4391a7a95663b3e6bf52ca5b985d98"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "14bdb36439346332c7a26fe2b9e5b39d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "3798076f798d81c75971becc0fc00d34"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "8cd35722692e6f0211b573b23596da89"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "ebd0ae01b9e3ce8eae153e1650633ac4"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "dacabc1903a48ca1cb2e3534272d1356"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "d2aaffc069bcd30ca38c6239ef210c83"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "9c673d4f3d2057c78d070fe47cdc2117"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "a060dc5803a11ecbc8dd9633da2d5335"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "cba491ceadfcb25c2b278c6b4306c9e7"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "174a08517e8ce5353d834c977750a598"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "71cd255839060b59914328c8fad70ba0"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "7687e2311745bacf73feb364897b964d"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "1d25f39f9148caaf3a13d92b64e35550"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "13eb32a39d6ac3c88ed67e7378d69605"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "542ae817e94ebeada67a8629a3ee2545"
  },
  {
    "url": "categories/php/index.html",
    "revision": "ba6ea2e2ea368c55b018ea2657f73385"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "0dcbdfa511744e2f49d3b06899799293"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "97fa0ea6f95bde4b7070d03b9401d706"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "e46d1acfbe8130ac88ddd362eddeefdf"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "0bf16915e9f4bb27fea78203fc59beac"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "56b962e69a28389c7e817f7734ad5ae0"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "e5ec71085301088d5c32ead1f19280bd"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "6f342aeac2efcd6cf774c6cdc357696a"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "bff77e9e918d8f46a60be61f03e3a6d8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "ab63ef6a90371883f39a08576ae3693e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "b1575b2d2677e3cb8ddc95709b254970"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "ede9d2656c10bde54786b0ab54a3dec8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "17556ce54f87678ef764fae4f9f32e4c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "5394532acbfcc744063a9dadfbf61f4d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "df99d6745a265ec92c226b568b3c6af5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "d9293533a9c206e1aecb8475d873b8f9"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "f9fa61526e174e803dfc54bb49fa0db7"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "1bd81d573e0aedcd5936e842928e0ec8"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "0871b9d7cadd51978e514f78685aabbd"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "f0152a66796426fb7379e196b6c00140"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "b3a32b413bb0adef132a0e2ef7f95e78"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "a741893a8175989cac28ab0f7e340db9"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "cc01e75518dab79dab96dc7f7b3e348b"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "c1e5ea78b4bbdc57ab281c14172f2c5c"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "9e181b3e43001b8ac6172294a87c96b0"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "2cf3294dafc0504c04fd40f78aa0756f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "71d5edea946dcccb9474fb2e3f86d1c2"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "cb7e48252281d037bec4074e68f5db4f"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "89c79cc02b45641480775f5143684e92"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "5b5d2d5143b3658ff915f77c64ad539e"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "21932b941e08a97393da10e67f497e31"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "255d09ad754693bed058ebb9e8203143"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "9fa500f04e9b7b20621d6aff17f1f52b"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "110a324602cc4d76c200ab17c529ff97"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "c635a19c12c8559094da8d43ceab0e83"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "34c76842546f68e94319f32329868edc"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "d159d33afdb47157df69a9a8e924e363"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "51a84f7b7168a043ef78365ffeef9c8d"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "5ea7f86e2b7bc161c6ff508c9bf49127"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "260a839e99f9b7b4d0d22a765998efb6"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "2cbb858677390e1c4d228c6ca2828bf1"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ec2630a7f8f2eb34beb56f32737d6d3c"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "477f189f7e356db85f64420d593f4726"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "ea50772ae2261a8c0e01e48aaae33b56"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "4619262fa2ffc39ef4e6e622f738c785"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "a599d81b5f777923242957bcdde99094"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "f37fe7e7c2f823af3847368466b7ba6c"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "e169894e8c9f59d4050faf75d910b3fd"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "30d8e2e18a1d622ed8c69605b48c5f31"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "85cf8d6096a6eab7b229e5f60cc6b298"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "dc840a6bee347c649934061f3c513148"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "5c8eb1f296a80ea771aa835603b7d867"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "4dfb097eee51c728d8f34b7e28c0ba65"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "b6536021a14146760ab85eba0892cf25"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "5c23bc502d5508840b4d510f65ea31ea"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "86a66d706370d7e3349be67156e56809"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "8b2690271198426e904c3e8c991eefa3"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "0a50431c7ac18befd361cde89912f05b"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "36850503445ee99a3caa79581df1ccc8"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "f3546174819305e10afc47c75baf6913"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f8d5debaacc8c0868fc9d62b0f2154b4"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "da3857a9e35e17911a344fa5570cd669"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "fe14415b0067302e631f32c71b965e1d"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "cb8b20494aefea960f9fdb4e2162f669"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "e364d7ba4bc3c51af9738ab9623faf81"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "491be9782baff220286a12cc111fc2f6"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "074c02db9459c45fc2a37488b06116a1"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "e36079c10cb0d257875e834ecc2a49fe"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "601f9f31c4a5c14d8107971a25b35a55"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "738e2c036f7bd82bb3a59aac74022f94"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "2be93576beaa09e0ccb176966450d400"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "8e1652aa3de2402a84aee46d87776aef"
  },
  {
    "url": "categories/system/index.html",
    "revision": "e4da09e064d5a3d4fbfff7aace308d55"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "9f8d34a5c7d877872b19535d1fbbe172"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "ca8638dae485e84b754ee1b2fa8cc3b5"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "7562e41899aef83fec78895534263c6d"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "84c664e362bab5220278d86a50fa9719"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "80c1152795b77969719e017bab99dc28"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "c3de4b8f75d15c5a198123ead65dec7d"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "8783c261305363e4187d30f010471a8c"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "d64db383ff987a8e08e8f4637350c005"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "2991955ca69a2d47f191ce2dfae38ab5"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "edc3d54e405ee138281d927d6abe7b56"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "a3e5c1b6adde0746f69d8cea5e4f9fdd"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "a01fdb73887e3120b46a3a258ccee96c"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "ddda59e7dd1bef713d99c6f4aeed774e"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "8be785a6c2c8c4ee191d71088efa6135"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "0969ba72a5e8199b43f2028b8d37fcf5"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "732340b073809156f7bdd15ddd0c2673"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "2a8bc838eebadc3198a5b9a9adaf1c82"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "a0779a04f157a95b3dc5df3515112c54"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "037d3a62672af08453e277ab6801d973"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "8f2d42645fef3c7c9a7bcfb837ab2db5"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "b34f41a28bc1221f8d72da1803afcf85"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "0ae828bc3f5923b6abe37fe51945c4cc"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "a26c04499e320268f331eaa4fe931ec9"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "d2796143735ffe16bae4a079b09e5fbe"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "b84e8278f3c4e8103f4bfd92dbb6cc86"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "0eb6e0219c4c587cc9fca66d971838ba"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "d7d26dced7cbc3847b892179b4e6718e"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "e4781503e79ea0e76704d83a5e4d2dc4"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "d74175ef7d8f08b5db886490fac562c3"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "0392a8f75c91bc6e633e1b1da9cbce02"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "31a7c916a6af57ed6979d76db139b5a6"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "95d0f2413ea2dcc8b8b4369385c5a5e5"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "7c335c21e8f5d1ff2ab8a71c03ca408b"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "363673659c06823c2f6a8b427bdf501c"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "771b4fff0d6621b8946a57262c65e98d"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "cae06efeb864865a8b2b3532d34acef2"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "f09dd38faa810330aea3d676c2fcd4bd"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "4c483382d3a5961b3ada0fb92501e4a1"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "050c45658ec7573dd0545708cf0da901"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "2bc03d4c0a1b0bdb8c873db7f804b44c"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "a520cb3e5beb81d7f65299f033120a41"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "92f832a72c19da06e1e10363a5083e45"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "28de41f03455242f1475c7c0e654ab77"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "7ee804c54c502c342f665101fff4ce15"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "2bbd1e96b59926a3b8d13386b952a985"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "e0ae1f2da23d32ff871d1aeb65e26c30"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "dad8bf1e3239177b402486a0c29be73e"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "9e7cdbc4479a953e113ee737a3a67338"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "643a3f2c56d0c8fdad7512c3de6c5e78"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "d1ec13cee3d45ab28c9cbcab6bb7478b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "9eae1cdce7a15ce5017e3eb02423f628"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "2dcc2b1abe1fc392e5661c52039dbb42"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "bd9b61a2370591da283b9a8271fa2ae1"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "a78c6967483f1b58af77b22441e41043"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "7c51f453d439587514464dbde1847a49"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "845fe604745fbdc1ec032a09deb9dc84"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "23753febb979ab40e5348e8abf2c1f48"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "f2fd5652118dc50f8582d82c141d8851"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "0755c29b60cf43b31bb96a02f5c4243e"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "83bcaa514f76b63290b0e3ef0d96f800"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "d8034fca90be4251d00b9f25ed2f658a"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "c5ecc6cb38f4a59a309471b56530c49c"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "6dce6291dbcff6370329ee2239284bf2"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "ea9027a204a1b86d8cc6fe52ef152062"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "bbfd4e36bd6587b2e32ab99aa4cc5b32"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "580d9f6cd6a92b8734d8cfe6624f5193"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "fb6c3f73894d04c3ba432d8de19a533a"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "83989923225bcbea0b27b8159bb3ef1f"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "6a3b64b259c2ea26b8b70c89e02a3144"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "5de00b9723d0c05bec4e4412b2deebac"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "a655bf22eb00c2f3b910c8f0560456f2"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "9f3cc0efed2506a5d22a71c60709b06a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "7772a40f6040737e30f9a5f7cb0f2b7d"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "522eb059c9326c78066db73a50742ed7"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "34581490bc89b979995fce64ed83932b"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "f60050bda0d4c8ad5e124c8f15fa81b4"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "b64c364027b5b961f642318846827908"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "fe26fa74e07baef98488a6530f11cab4"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "26654500a8fb148e3f028a99f7527653"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "f2175bd947889262f25943225ceb012d"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "b27eecd8f0c80aa29ba3cf93c4d4f0b0"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "8cf39757740d40927febb299ac174067"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "a8e5ea448dfc6872ab6a6d964bc683f7"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "6e6dad9f1feee64c7d201a71db43f3d8"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "235f74ee5c1345e4e461077a8fc21188"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "3c7750bc8393fb875c43cdbfe5e1a881"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "14286cb18662022c91fe5942cceb3a5c"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "2a4ed6a43db905cbc96ab4e1c8f1e9a8"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "d5de19585b807b6f83588999e01261c8"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "97be20004bf74fe6896662d402548e98"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "6677020bddedb3f275bfd7155bdf4185"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "bd80c42886ae91313b6ae62ac3886d46"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "5212288138a6671ada53bbb97aecc3ed"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "8856731efd00de253b05f4ef8dd8a0e1"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "c901367a8bb47f340ba2c4d17780328b"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "3162feb93394daa2ece5151c74f7fc70"
  },
  {
    "url": "favorite/index.html",
    "revision": "4a1c7b416a933354409789bfaabc098f"
  },
  {
    "url": "index.html",
    "revision": "a6dedf628fe4b522728dbc81ce20000e"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "871b504484614999cf26cb79caa99e76"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "ca8443f49b2d6ed77f81408a791d427a"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "24f943d619d089cbedaeb89fa712f16b"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "4a0c5717c463843c4f079ae2664286b3"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "dfb7575a778801f4a127430e8ce45246"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "45559f393cd92aa0867d87f42f4f7c7c"
  },
  {
    "url": "note/index.html",
    "revision": "647f2dc02ac34982a0c6658861ad7a06"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "0710e68bdd1a544bbfa9e46ec9b6a02d"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "6e34796f3d658c968cd543248d782517"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "d563edd083c8ed6051382d9997e4669d"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "b8eba67485e88874f9b6768bb320e767"
  },
  {
    "url": "share/index.html",
    "revision": "9ead8ed854c550afdaa1e52544449767"
  },
  {
    "url": "single/about_me.html",
    "revision": "6bba3dcd10a938bbf3773d36e307482d"
  },
  {
    "url": "single/all_article.html",
    "revision": "cf7e869debf81975cbecdf2e51229dbe"
  },
  {
    "url": "single/welcome.html",
    "revision": "d4a9de53e6a45b50717dfa790fdaa91b"
  },
  {
    "url": "test/index.html",
    "revision": "4261d035112bec96dcb059c89682a602"
  },
  {
    "url": "test/test.html",
    "revision": "08ed1f5d4e555e642fc9c163203b5d0b"
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
