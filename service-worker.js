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
    "revision": "0cf4674b6b5428a4aa52ee46fbab88ac"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "659d4772824b916738000dd48faf98bd"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "8891729ce509f426b912538ff2186be2"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "ca88fd14277e32ccf7b4da23d82163ae"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "266b976be908562c0366dc2216850800"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "c01f39ed2544aebcdfcab8c932e3866b"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "32ed57842d5530cea2decccbc9cd0fcc"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "325b2c23a4be27179eeda2b97db5142a"
  },
  {
    "url": "articles/index.html",
    "revision": "e4fd3869cb4720393b709ac49c5ae436"
  },
  {
    "url": "assets/css/0.styles.24fc6e4b.css",
    "revision": "e5026005fd9f2b0a4d5d0ddc59c44131"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f13cceda.js",
    "revision": "f6ef6b4b905c5e9bc395a3866be77c38"
  },
  {
    "url": "assets/js/10.0d00ea36.js",
    "revision": "3355055ac273a39d15d37e3507efaad7"
  },
  {
    "url": "assets/js/11.aaf22fdb.js",
    "revision": "a4f10a1b9cfc5db1d1c036e02ef91bfe"
  },
  {
    "url": "assets/js/12.0e3d051e.js",
    "revision": "02a5ec9541bdb1d3d26ddb66450304da"
  },
  {
    "url": "assets/js/13.166db25f.js",
    "revision": "65b33ff14e809c7650dd38e452b0aad4"
  },
  {
    "url": "assets/js/14.b1db9c0c.js",
    "revision": "2563b015fc282a5d10f363f63c2b459e"
  },
  {
    "url": "assets/js/15.948f4d91.js",
    "revision": "a33c0aadf12d4c77e2469a77588cef8b"
  },
  {
    "url": "assets/js/2.f062aff9.js",
    "revision": "0c1e031e319ac6aa7693e3ce701f2f48"
  },
  {
    "url": "assets/js/5.06dfb8b6.js",
    "revision": "63e3d6d574ad952c791a4993ca7fd2af"
  },
  {
    "url": "assets/js/6.f8205377.js",
    "revision": "dbd63369c55196bed76d0617477fda05"
  },
  {
    "url": "assets/js/7.6dfe9f2a.js",
    "revision": "7587af13adf0dd318d424523f1089d67"
  },
  {
    "url": "assets/js/8.f109808b.js",
    "revision": "319fbbf45655a84de565bd7ccb68d976"
  },
  {
    "url": "assets/js/9.8f46dcf1.js",
    "revision": "4a790da65633abe8f431af032b440796"
  },
  {
    "url": "assets/js/vendors~docsearch.f4bc8488.js",
    "revision": "8f8850627fac7bf145b8bc5869ff41d7"
  },
  {
    "url": "blog/index.html",
    "revision": "95ac3d1508a11aa5853f623efe49dc59"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "62a4c7a9cd0584311fa9ba13fc14f114"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "673c17bed0200c16028a219abd1418f8"
  },
  {
    "url": "books/index.html",
    "revision": "8f1c3b1b955ae2a6ea8b9b2625157b49"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "5ee3a849432d2a16f1441f778bc4cde2"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "5399343606e183573767a3419823513c"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "f3a58c86416a4fae9cd6ededdec5bcad"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "a92df8a340a4a25ef604780cf60828a9"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "75e05bedcf0f7f611126eb0f0fd1321e"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "8006bcac0c0f575c30d2c0f7d04c713f"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "844aa145f0bbe4396715186ac99b2e97"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "1c7b150571cc97cfc37d0a8e41702f6d"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "6c8bc0da895476e3325a0715849990cf"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "730cb8ee0a2ee828f1a35f8e8d0323c7"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "33ffe0af004103b7cf66e58964869225"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "1d2e1397547f3078e4a157dbccd08445"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "0d8c15e974ba7e79ac154eb9d8c623ae"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "c2de99f656dc50c3543fd1bc8c9061a6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "e66b670566a8ffdc69b9c2afb121e39d"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "28decf3d314dc2d86fc05a2e6c7481c6"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "094a32e5255a18cf22bb057827f4e2e8"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "3f6b6c988ffa6b6ba738315d455631b0"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "0a8b7199f63c5becf7cb1232d2e8912c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "025c63688859b13973ca84ebd283a357"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "d01e1812ab84a7ffd22b9bac4dcc889d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "6b7b62321394fe830d85da0ca394d858"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "cb5db1c55aa211303b80dd5d93ec1e51"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "4506bb13c0c23c8c08ca853fcad68492"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "c0d649a02248282580fd5c55db53469a"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "76514b7e87529912eb0049fa0aa2f92c"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "4400f302dbe29bb325a03f8bdc64cb98"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "a86e6d3637de8469e6edf78fee3515e8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "ade8c1fc7d8e6a9380e08995d088b45d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "2f94b5295bace7a86bde048fdf3afae3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "8e1c17f3e38da630ad111162ee245431"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "08a729a24f27731305a997d6ab4f82e6"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "11a9147c8684f8d46e2a308ec68edc60"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "9c2c7091062fd60faaef95e37b703feb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "bc9548ce57a777a910de14092aba5c84"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "c274fe51012819fdbf0d6d3fe9f2286b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "47639205203d521a29c27aeae4f01168"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "dfb5ef50e6a0d4a64b0188531e4809ce"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "8a98b2a8d91a115edfb6a8c8390e5441"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "85a4f93db6300efe907d1cb7b0f48d60"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ad3ab895dc377fe7f8d9a7fb92680f10"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "3d8b29f85b4daec7a1aa36cfd359edfb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "2366c0f8f36aa8209b3bed45556d4773"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "d5d489392579c714a561ad81eff450c4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "7cb4b5f08a0c901947e2b6ae6575d442"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "ae89094926f68959e66fff62c117f291"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "4b6b225f643af68a781b35c24d84acd5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "fef9ce3056222980d4a3d0bca06c100a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "9fb47f110735c0e609ca84322ee27f03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "0abfb4c0c118b71ae6c65a1d1e00e9c1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "1a7efe049f1c5ff4f44e6e7118ec3f05"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "7eb9e029d9cd00f045b914cbbbc95871"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "45b830914b02df630a1d9eda17a2ac27"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "b8e91c0ddedc1cebac4faf1de9a3a6f3"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "4cd8abc7aeb5646e0aea11971bbf9bb5"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "0bd3fb0bbef92453dc4a1836b25e6ff3"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "2a90f90b2698348ac12bd02b8de25ae0"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "3a65cfda8d73ab5cc1bf31d93d66050f"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "d5daaaa2755dd823c884977246a2a1d2"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "bb1145e467e11b13f55e5d5141551d0c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "407900299ec6b9fa838ab82b1151c68f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "0f148a7338d502663dae42fabd14fdc6"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "c4b61680e972a1126aa47c32462f6695"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "99cc762c67e5912fbcd107ae194ddf31"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "9ba75888fde857d65a8ba79c5fdf9a7b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "d5454eaee69b0f1123f9d096a280f213"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "620ed699dcfb47ad5ec21397d2d8cab7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "3cbaf9fba9e1fd8a44d4649cab83b2ce"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "692f7f18ccb0d78791e5ed76e0992340"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "b99a6fcfb803d18b3a566c2182185351"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "f02fe1cc546e3103ef9d80dfe7d80249"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "7446d6d489d348c650f6ba0d1a5cfa9f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "6eb6157caa26e5a59da44097af2b9c1b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "37b1ec8709ba9c14d0785d8676a894c0"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "6203ed91976aff7e2b45ed9a2ac302aa"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "81718fd0391432227858183e3483b077"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "ecb2265322da7fc3b4c20bb79a73775c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "e581aaa316db8f724b42431501c4ddc9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "4ffa95ccdf228d2443f48fa507448557"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "b2db8e986e39864f270a5971a0432bdc"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "5e7d973ee3a4e458fd8fadfb0a80649f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "9d67340af027f3746b8a9956a544f035"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "7f285e1de0f4572ed42977bbdea25e9d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "00db9b8791197aee2e14a6f779be23c0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "90db6d97e27673623ebc10b38870b061"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "d9b859907e2710d6dac2e3afdfa1702d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "ee61479bb9ec608ffe47a53dca72d5ca"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "c4855eb8d4cb9990dd1c9fe7d11274b0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "472afe7bf115fa681fa65a93cd2cc845"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "7557a5255f9a79eaf698d76234fac4b7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "9335a321c0fb395fb2e698d0059fe5e9"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "1c9bcc05023d1d28bd648149f8968205"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "8000435dc012cb4782c1f39f4b0a9a70"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "be608a70f6707ebd543d8faf1f2e771b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "a7318095dbbd9f8cd50ee9ccc8cb9839"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "7420550b62f6ec29889f9b20c9b4a66b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "748fdc3b1017118465da8c3a1b00958b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "84ce01660955d6bb8a1a52208975b296"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "0b944bc0449646bb27d4ed97770f5812"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "69c252f460fde6c587b5df2d53e924e7"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "69800bb9883ff46bc3e67cf967a28357"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "b23652402785203dd6667d527068fdb4"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "e47386b20d299e1a2087439e41d09d84"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "0db8d27dab4dc5f55dad3dcbcb26865f"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ce7e4efbeb0a0d7b6e8fd953e814bb1e"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "6c48161b7b87f0e52be6e65b62f3b685"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "09e7baea1f84f8d0d854f2dbd9951f81"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "9c24564583744596621e4bf4b7e4c12c"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "e345da9fe8b48a51559a1fab49f6c3b1"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "6a500ae1f98494b01dca9602b313e61d"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "73b1b9061570876086e4d6f7e80f59fd"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "1bf6a7385a945b102c3a09c6e984c8f2"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "f689dead02eeb52920119324c36f4f93"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "8401d1b088d3e5c0b915c6fead725b65"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "dee17afdd3965d9e059c54f54031ee69"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "f1f71616d7e2719c870adff78cd934b6"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "b6494a3ba682e80312cb171ca4bd3385"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "5ee151f7bdd8334104f2a95448fba73c"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "b2e6a71d2e156577d589656fd49b9448"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "d6ec8e56a67ada0ec760a7c501964b21"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "7a046f5708fee8bc703a723976d31ee4"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "7f82d6d702892b3ae41ce60df95ad1a1"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "cb02892fd16fe2af4b5961fbb57f02f0"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "402decdf3533676158efc7d95a9268b5"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "1555ff10f699e0b925453d8173e2ebf4"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "2fb0287ba7feb6059fb4e6ce9895868f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "88d89be4406caecb0dbeb74848c672a7"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "70744767af3dde39a75aa43ebe59bdc2"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "71bb624bee0b0371c53cca05fddde440"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "eec07ef936daf0ba764b4e8416dab9da"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "731718d6da9de29a9d95e9c01ae444f1"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "5a3238579679a4bc27b162bf40816c9a"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "7363abc0b7b85a85cb871c5f18ad2644"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "cded68ddb6caebc78855f6bae27f2edb"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "bf27138bc216af0b980d6f46a6084e62"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "00c2ee50c7dcaff8be68b079bc447204"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "e4f056e178b0fd33a92b1e50b19d453d"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "ab9c4bd78f286b7da3e32ac1638617d6"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "943751320bb17574f23b4452518ca0a3"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "e685f3d343acc12dbd76bc2a4baab246"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "5f27e49be55e43770ba0d7611d10213d"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "1e4c8dacf252bdba08a0df91e50c306e"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "e534ab525fca872421024182f2cfe456"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9675d3736687161a5afe9ea5d0392a6d"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "c5421da2df9b80f4ecd1bbd80954467a"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "83c82e7f8ff3ef25cc67b0b08893e951"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "a991be25243153499a34f857d9480d78"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "0da540f8d642f85f468fbba99bb14f34"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "a3e8f7378769db24a38b979cc7a396bc"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "da7d420adfbf16c75018012a7eed9cb4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "5d176c2f3ceb3300e826f40f19849a41"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "d38d402fad201cebc178f7f5d01296ca"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "cc34a7fb2efacd9a5e899eeb090bf284"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "a40277f0fcf284916778cee75e41da0f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "021966ae858d442e68540a57c0906da5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "1bc3296b161f84d0642252d7e380a1f7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "f03d0026828b9faec04e54176cf3e48e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "01f17b402f5cca650cb56e41d91e2f99"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "762989116e6cf73c9d0246252fcc2d8e"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "2a06fe55f239caa63b5376717b6f4402"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "64248637d8606650d7c268bf8220413a"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "909906672d492570fb2057de4d3094d1"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "72da5b08fecda722faadaa0debbb2dd0"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "5d5050e9125184e4628b6e50ca29b7e9"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "bc26afe28eff1512464e77086f16cfcf"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "42e483bb970d5718aa5a58f12d0e0dda"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "dd9f8d80b435c0d85a0312156fd27485"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "4c8763ba2bb0eb6483ca18000472cade"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "241dbd866f9ed80f3952bd898333bf8f"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "e7712c507f66ca4b33830c767d1eae3b"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "492d066d3e349d2758981187331c86c6"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "6e12c6e6d4448b9d3c444a8bc6fba48b"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "4e91923d2adc60995850f54fd2e05063"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "a8f1bf66b6922acdbbfec59d8762875b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "b8a9386743b5bc271fe641b95f2bc590"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "94c7c6216feecf93aa97feac0e56b07c"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "9bd4c796c93910f45859d863544a204d"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "ef84267d3dbc15f3c9f6831ab5259197"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "368af3d1a7801e68deb970a9536f9d62"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "c0394d6a5b3638977b61887cb580c401"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "0bbc39819fa4092998160bf361f31e50"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "dd706aeb2a37b9aa1eb33aec6a49ae85"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "9bacbd179a4514bd81cd441e93da78d0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "db898fab8653a1812f7b372253029f81"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "7ff2add49fc92002002a61cded32986b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "89013bfec8db5f8f0a10f22309aa22a4"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "41dce3836ca945446d9acaafb2a5be25"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "3894e5ce00434293347b76a521b9e727"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "ecae7a1a2a3caa3469c5ac08280be8bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "2560f262d503ca098e648609a80d254c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "9b36c040f0f18d100e75e2c181021d77"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "a661aeaf0465c7326a945605a33ffbde"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "162d2757823807c57016e6580bf6a830"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "1910356bc5f567a5749bcbed285d954c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "b2ac4723fd6c0cde92527bd7d69421ad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "2005bd1f9113dcffa5a71fc9d1001bd9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "24e8f72ed7f58d528fb240cc0204079d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "dbc16bf5331ffed5929349522f0373ac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "a7c7713e4dccd2fe216835035b22807e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "3ddc4d3d5eac38035173bc50ca7501b0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "d42ffd17aba0f25a1d3085939e4fab07"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "5c777cd88992f3149d14268f811cd851"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "bf5abeb49fa8a5c3341cc8518365ed96"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "124ec9011cc2b4e9f418e1e5743ff8a0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "9a2dd548af0a12509b8f8ff25f560a7e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "d3bce7b3828f6cbbc1ba1146da815e33"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "cf4c42cb620ead7eceedeaf341b3be75"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "2af5a0fcc86bee456b289649a8070b1b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "e2948fdbd4db854ead5c60953f4d1d7d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "cc17fa994e49271f9e0c2ae7ca87273f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "2c88ef335ad0ad6f5378bada94f7c6b5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "57eb93856fecca5733742b750afbeef0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "9a8a06af0ebcc93d4284ac9871906626"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "a0960aecbceb63ee58fb310984fcc0d7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "335b5ef4f512b5da50efb21c59f0fdb9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "181ae3c1c2644a3a11cb5270079d96fe"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "8983af777d3f4e147aebac9d09faf7d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "bcef891ec58f24af7c8a038205d35be1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "22ce24f8b2725fed07fe5a235f9d7d5d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "5a55e14a4b1c8ff6d87a28d2e229b906"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "a984e639b277c5251ea54381689273fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "723b696b04cad411674498abe55b5c0e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "c5f4dab183bee6cdac96acad2245e431"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "90ec1b625492f7197a8917de4c8b29c3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "c85c5662f5abfe9cc4da9f95b5a10304"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "a3e7f5d3ec8d40ff62a2454648e72432"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "7402ba853af05ca7a1b32ebb865dcd6c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "febc754d8000e18c29a75d26a60bffd7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "ebea811cbc2e266998ab9545ae570160"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "2a19f303d4f75c5d0fadfdcda01ebaf8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "c3b04979917fe635f24b03ae3e7b41c4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "614269b1cd475127731d50be6cbb3e91"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "f4f1dc7ac7f59a579ab052ee732c5a19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "198e97690704139692a09a1927b696cc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "4b388f7243057fe2db0375c451297324"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "7b84e4ab0e2d091e3de3e7191c558249"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "5e6ef51fa6a13dd0c0cf24704b8f930e"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "5b46047df74a6c271501a82a2aef5cc3"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "17101187b06c856a87e4dfc1f7b095bd"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "4c4a6bc4bbfef7dcb537937b506f4726"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "221dc401abb6d908b24680ecb19f69c8"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "882911ae5bce40560b0d9710a595b91d"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "0320ff8a96ddc974ce5920e10402a9ce"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "e5da24271276708062baa73bbdbfbeb0"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "7f959c260590e9ced5820d1aa9049e7d"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "1cc8d253186629869c4906d7967fa36c"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "936a6968c77cf5cf17bda1649b33ee1a"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "cbc5ffa3c82a0b95db5cca283339767f"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "6f0bb6d8f40a466be6c6411dd305dfa9"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "6fe04ff90df0d2c7ed52f17b49ff5ed9"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "9e50108f9c4bfb7a744a153bf980017f"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "7e0395c8cf8df3a5865a347c00d9e858"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "f41b278155d6cdcd5f4e311db6bbcabc"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "579699a9c89501d01bac8d124e4e6f93"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "334126e6ed4b15e1a8c8fa8694772526"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "6afec7338a8e3f4de6b70f565f00d81f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "92055c7ba0ec99f53b470878824ff17e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "738a7673ba11498a0c3fb66ce178daab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "9856b46b6dfa5e0f688c9c60a6fa8d67"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "d70de3c2a69f2d40d699d5e5e0980fb5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "27c2d70c5b6315c23f39c7cc001127df"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "29546198a40d0cbf4aab6f193cb09917"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "3ad92b0955d5d32f3475ed9d215d844b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "665450ed9cc42732a6202a2b7cbedb47"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "d4f729bfeb16a5fd0e77c918b01ba013"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "681e59d27fccd94e7da78ce86bd03f71"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "79db77aea004eb94a38359f95c3f3ef6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "5bf250049a1f4f7f268f49b13aa98aff"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "d28bc9328e02821727bb6922bd2adf50"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "5c8c4144e6e6c9169e636164197453b9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "3f8edefd622248fbf4db809a4f618dcd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "557ba4486405d8ead381a55c44e48d48"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "f83018001bbac70966883a6be21259f3"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "ae52ddb227577e443640231e14d19523"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "52b6fa950f1f222df7b09e12393ff19b"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "c3b80106b190a2a7b81e6e4e28849113"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "92512a068b5f9a3540380f8782728dab"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "a0b2c9d6f9b596b05ef5662f84033ec1"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "7883a6a9d44cce2767612c9d85dff5a3"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "d1d6500f2ac0e7d4f4adae31ac80cec0"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "dd7386b5888e6d8511575084cc990206"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "cee894d1affaff191441e54f2c4a4c93"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "07e23309e1809052303e44db359c27a3"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "4e64da937f6531b5e3eb37e8e74272a9"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "69e0cd01d358d2a3af7ac1eb3a6828ad"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "2844f39c429ac06c6ecef0e447f40ef6"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "ea5bc9037adf3db77888d2a976e6dca0"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "947ef5297d5b435d2bf535a15ee77bfc"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "7b13d48c31a8c64e25714a0163debae0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "b6664c3ad7b7b6395055836bcd9dd27c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "26181de10acbc83af5891dcc12ae9df0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "7c8fc67bcdee8aacff2717c999e75f9b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "bd287a72ca7df765d0cba8e7e0d3a1a5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "6b0705d4743b2ef51de57cde84ac6faa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "bef81ef1e55185407db3156cfdfc2f88"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "8bed5e80d39906eb6f34e823e0dd45f2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "499de27bd806a84a2140af214828c38a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "2ab2767e3909445fd7aaf700717ef2ca"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "d4ba47a18be05b49ceffd61b24921095"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "408c2dc583b32e36e20996896077c7dd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "8a65ac9ae351be230f5c99683d1bc2ae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "df338472064e7160b15b91a00daddd46"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "7a5ebb26b07de482b2e61afc62e5cd6b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "1cdc15ef92eb7ec041426a1301a2ccf8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "77da4bb37024481798f715d06ada330f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "0ea88c94102e57c6b62f5bd2d5a7fd16"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "1c4c6acac205e8bb330dd8188536884a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "7512159e3a74607862541f90cb108152"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "1b0eda8879a2db594e818f5f5ae008d8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "0f98e0192c22d18c2dc8e656d71cc925"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "1df4019636f8c24e42bbec7861101663"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "7fe0226b17d211735faa7d81c6b48955"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "155fb67ce1578eb737ee0b3e33de3c8e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "d3c8bc1e6e113ab7c4a212184cac5920"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "15975181c2da11d68ed48e72820c5f2a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "0bbfd0f1ccc8445820f26e4772d44919"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "79048751be0ccd7f68039e8859af22ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "073ebaa287e3dacb996f0761680ed212"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "5adea15b42e7e3a334cbb0f7fac1d4bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "bea4e9fdc894329ca7b058caf1b69295"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "0dae82e95288baa08cbc70f62006ba74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "1a856b12f6f6aa0555510efd51abad42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "3fe78888ce3e0fc1e61a1326c0d9179d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "8b9ad4d980643ed7ae9d9dd0bbdc1b6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "216e51130bbf7d3dd437f77ddf3b362a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "d88e3911f30145d4204dd16958f2213c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "99bed5a975f40c15f9105066108bfc40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "314ea67f0b482a46f2033528b3ad93c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "bcb995fa49c1d43cfd3ea52d1203914f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "692337772b374a8ab2b0c825c3d85763"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "57046fe4285a59fd574df50a69cc806b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "d3302853cc85eaf97e25230fb8acff9d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "a0ea193388e63ee941ffeef1f7ce9bf9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "e509940ffa012894cfc757a0ebaa1380"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "6b88243d6ca5a8531f5b71765ed129ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "5bf44e1a2d110415c2b88b36d7b00e7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "9d9efb1ed5e71a1dbb29f7745a3f3d6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "fe267c8122808f2930a9d4790c340221"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "3aa9fead366e2a3a6870044ad6efcd65"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "071836178c2a74a2f9259975f0bd9752"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "49ec4776a2289419dfa1476b0b260ab8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "a4744ce257d2b404c95006835e68aed8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "b83a5096d56de51bc546f06f6e4c83ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "0facff7632da92ecb1228ca501739d83"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "b6b9049cbae0ee771555e3460f0ff3ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "226aef05a0e71f71ca64d9a8ca7a73b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "ba4436e24b07745b11a5dbde90ee6638"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "6dcdb99e0efa3fc597ffa9f9a8ac2f28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "43c91719d1f7d8a217765d394603cea3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "eb395a6691a3e482efd8a323c0884168"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "b5e547dd3c792781b060c1f19e86e0dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "75d965dcae1ef521af9aee8ee2b723ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "b148b2c67b8cfaefac8d2e9533446e89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "9770ffd752f568bb4838af0cbe8c2c7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "b00a0575f04e232c8c47dc479a52f839"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "38241aa7c14fc15c047b16d9fe55c422"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "d893b72c2371cfd54f8525cc1b6eed51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "660415ddf1b445576c66c069c2ed3aaa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "c87c166e02e606205ef2ad96a01a772f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "7c62dff4a8527efe7ed6209009a5acf8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "357d4be0399227a7cbb14bf16802efed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "8cca22d740618347477d58221df3f6b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "bb23fad008730f25fdbd99e89e1535a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "969a728ecc800e5023a9f60405dbe715"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "4eb5129c0410d3985075241f6165cb39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "4c13637db1cebdf6344211d347b3b57f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "f7e5826a2745b95c6124aafb2e03993e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "1d56ba1e1c7b5cbea90a766a01858747"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "49ec197768336b3d5e064d64d3ebcfa1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "c2cb1431761fe1cf0042f863fe0dccf1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "70c824641aa26d1f7677b0a86e7aca0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "584d103248fc6c338482b621e56ba00b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "e7d3d34441c06e513718cc4722b60b66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "27f698c71039390db7be1ea3d2e65d05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "33135c35414917e2ae8fed3a7bb08c02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "1553d03b3e34b6ef2975f1a289b46e50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "95f51e20292ea5f156773fbc180ff426"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "615a18cedf6c885a3f332f65f8369caa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "327d57d6463250dcafb74bec76f526eb"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "3fde2ad7e31b20494f30a1730811ce60"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "018bb2fedb1433741f023acf295931f9"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "7641d5c2a4c9eb4bbfc3ab6edfdde45b"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "9e91f498a5a60b948dd5bd26b645b62e"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "37df61b0482464124c72b22669da2699"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "9e96a6a560527cc6a544980ee45f6681"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "e92e95ec1ed8c78a593f8d3819454b8c"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "b1503faae2432cdcfaf01ced626d2b7f"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "85689a5ac6d9a5e405bbc2ddf15a39f0"
  },
  {
    "url": "categories/index.html",
    "revision": "a76865d914530e1b11a85bfb246680b4"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "ae7b5ce7a6ab98d92a4cbcf94abea1f9"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "f6f75fb8be8a13f6c33524e7c37d463c"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "e26d18aa29263d783f862d4530d8cfbd"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "6e3ba527cf13ae8b04374d628f61f258"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "b97776b3acba9f5d8b937f58a98a6eec"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "cdfff579dff68057e4b97b20ee9e1060"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "9f6d7c389f53107bdaba6d8ffbf73959"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "f7f2552df2db88abb07c11c9c3a015cd"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "44a19d6f26eae3f18a12b1fce83ae6ab"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "4061c141fb625c06236616ee720db23a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "e78a32d67e65f370375cb43c8eec8388"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "91b43fc459adf2443a3f7c8c95ac1719"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "075b275e29ca643b1a4b48efc6021e3c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "d3ec3069a7f148e91a16f0f64585f78c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "fb14739cd7c5d24e225589177da59466"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "f3ee7c5d1b9f005cdf9ca380eab800ab"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "f2358c3c1cbc1082dc4d800510170759"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "4c2cb9281a8a87324e251a79692941ce"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "acb0093c24f501b27e9d49996708c112"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "9aadcf88b450940b6f8db5f47e05c356"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "20f0002c3eea70884d4aef7ab9b67b6a"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "989f8069eb34b585181665c64ebb8017"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "4668faf9268562bbceb8702016c4eade"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "18a6b1715011813703447ff787311b0f"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "a7bef490bf2724a912277a9ad8eb5b2d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "43b6df482fd2397b91e0c92be5a0d2c1"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "8560f796ee9330fe0bf8803bd96eb7d5"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "f22700d08443eaa5702a2146b6f58a56"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "d47aee168702912c4c535d1c922816e2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0357e2e2f45abd45c61f361c36819245"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "55c03d4550f7921303e27666030152d3"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "4309cb81008578caf2a24fe7d1d360b3"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "6a3d918d4fda6e02033f865c4a7d212e"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "1fa25d68aeb0e80d4b56ed3013a098c3"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "466c87ebb1c15b6a948840b038d0757b"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "0db7cde3d244bef90d28156cd6633c90"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "00a51b3e56d8f8e6d63852932033200d"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "ffb8a1fcfc7e12b0bd81034e9d619582"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "0825d1d2d9f33525c1617d974768aa0a"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "68c671e4eea046699dcc2eeb9b0b4be4"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "3fa0a440452eaf7745c52464d4f3b5e6"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "7ba37e45b6a08f2c0e27095aadb510f4"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "5178667341bfa95937ee9aef34517738"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "d51c14e535e100788fa35edcf768f579"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "ab4721f4947cb911068b840f1c44e1ce"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "dfc02821179755bc62e361a633b42fe5"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "059052146c0f27fdc8375124f53d3332"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "d7bc6691fe5592a1cd0b947d7491c11d"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "2d97bd736658946c8cbbe73c7d9f2281"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "2985acd75d42c260c60448803f9f8431"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "4bdfca365d4fdf3ae933aeb9242b6a36"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "51c166efaf43efac9f05b07f8465b481"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "08f78ba3f81cf410ffcb462c19f22ad8"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "6d14d8d1fb0ee96d665f858246c6f3ca"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "1b85f504ac227139b6aa638fd5b6b2b3"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "2c1f9b91d26f303da158b2b5b358f3a9"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "6a79441abb690659a7e01f96eaa92811"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "cbf80533b213098e24a2f75ff5f4a3c0"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "e3ad4c53ec1346a0bc89c99b5b73ccc7"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "c9b33831caeded7034110c127951d763"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "8e1824a1a9b9cb8f2ac58e91dfe8a737"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "536c1293b8f3981e69cb72982e25fe47"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "721fde31778e094194b13e0d5d89a171"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "64ead6ddf5bfe3f41c6ea64ce23daf5e"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "72c814784420e45788624b494b5547a4"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "810d0b40064bb1dc322643a0c59928bf"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "0fe0ab65f282b5c6a0ac6f106ccc344e"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "6886c7468cf8dc124dd972b8a6bc11b6"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "23c6a449418b0767f1384697bc5843d8"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "38a1c4cfee079d57b2fc5aa9b558156d"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "b3030efaf90da7e7e1574d103f1da180"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "37e44b1eb36953a90e7dfadf7b4b7233"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "4846ba5bfb74e1e852a5bbecec4e2a1c"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "bd3ab36f8f4a94be08602a47642a9b2b"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "aa80762a7fb0cf6bd13109d847c107db"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "bc9c0041f585d6d65221c8ff8e5bb18d"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "9b1df8a7ad200d13327b24cb878a4793"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "e6ed35859928f6af65655be04646e081"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "ce1aed3fc818affb95117b1954db662e"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "e48d589357efbf7d0a1a9cbac19fae7e"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "ca115c0ac17a214ef850679543508690"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "e724b18f648992bddaedbcb7b2b8d1f0"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "28ed3d3237b3bb556bacea1c944f2aa7"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "8c70c7497bbd1736344e8e0731b6f58c"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "b330e2bc142160ab398402d5c48fa2e5"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "baac09ff233b13ce34806fd9d5894332"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "f298bfd2607344f4ba0043f66bec012c"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "bb224022f1a96b23db874ae630c5ee0c"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "53bff624af78253e69f442fbc4e1e97c"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "65b4a88ce52a00936609e8c1cab78b53"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "f8b0f14e3210da1b2f8a909f4cf8de40"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "f5e60075e20542b1cd41d904b42ffbd9"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "528bf0464897dc634e7917ca93828d94"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "1dc0207aec644193ec86ac9c9b2147f9"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "5a53987a2abf565e58509c0d1541d6e3"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "f4031aef923b11203133c244ea28269e"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c93c17304dc358eb16209e6f7c17af10"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "a139e5da182cbe51828dfd8cd06e7ce6"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "bb43c5cd8c65c665939f0d546b19f9cc"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "25f629118c875af9642a5f6c5b7a37ea"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "6c23607f4acb43f6bf08c8030d52d5ca"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "8e0292f80b5b67f80ff459955ac89b5f"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "ff11a6ba1b62a32c624228aad66440c4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "eb03b6eb8a13e2f3abecd61a6728bebb"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "984accaed27761902de8a15c04675273"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "6cdaa9116f84ac5dee3bad392bc40805"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ac6ba962e1aaf510667b521abab8af2a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "844dab6dc8cf9558bde1f0a94f53d95d"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "28d8368d676861b03699bacaaef06677"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "978d30e5f284aff82b38a2e3bfd22e3b"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "5381f8059884b0c80d9ff50621844270"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "91f0f3cb9bbb3fcf5ad3e56e28c0abcc"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "59d67b3c6b4a8c5a5209a8f19dee5a47"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "9253dd68248ee8911bf2c100d3da6604"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "78a14c891463b2cf460e1c437d2f995a"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "ddc0c135b2de1bc3c5fd6badb2f3a8e7"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "0018e1ad3136fd70584117bc9a2e3c6b"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "f8f5a14ccc2226981da86b3a1758b221"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "eaab125508aabc1e196cb0c146018540"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "e932d828f7bba5f11be68d6ec06aaf8d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "f2147374383fd3b7b55f003fe55fca7d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "be7c821475fc2a901c0cc9ee52b261a3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "112a51547e670a29a715090ebebf8891"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "202053c450a07a78cffde0ede49ddc8c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "fe1d6acef207ecdccf3c550f1f8a4de7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "57bf08718aff8417abf4def63e61deb4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "b568e074eb71155769054f9e318bf3c0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "9125dd3531c2f04644440e5ce9a4cedb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "fac3c6c66a72a7e85603ce01b1581bb9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "acf685ba2d23e75f0562c5dcacf2299b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "6dfddf29eeb6eac0553338252fbbe477"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "e9a7739b4a21ef65d8277880a6561a8c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "e3133df481ebcdc56af61794e9fd0935"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "9e4493a7b1424f818610c41258f00fac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "6df9df5264f4b8749a3b254dd2accec1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "4a3547962000e723263446b4b5c19309"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "c6150e9477aff964710998d3f0a4e3c6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "b1017e9c73ec66a37ff2ac07c02bc0ad"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "2d2f16c11f20c33b13aa10158078a065"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "4cfef3073a1365999e036b636ef46289"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "2e8817a980971f1c07846495abc075c7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "3ee5a69405bf146444b5b9bf9f332b88"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "814260cc8488fc29ea3081862dc3b576"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "a46ea6b12be62c84a95931a18a00d7c5"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "57ea58e921c25efac18da8fa84c9f2ae"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ef6d42e02f6d4536308a14b7a97bb1f5"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "55226d385a460f65fb936c807499d8c4"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "0bcc8b416fcd5311be4c1b13e4965591"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "bfc66753587e0a48462ff761f518262b"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "e1ac9f4d7a56d518df0dacae5140c1c4"
  },
  {
    "url": "categories/os/index.html",
    "revision": "03fd2d0b0a8c6c4c50b61b97665da5d4"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "ae13afe181a63b8a9a41805833722f15"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "d0066162002e36430ddcefd0fe8d7d11"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "1032184c2a02d9153a0478a4c35b88bd"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "d79e3f3df53714960362b49556936c27"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "70457ce65e95e51123a0350ae5cc6307"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "2fb003bfbf88a2b8b909b7b20db93922"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "4f46e86fff97fa96a1249bbc7c857522"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "755f581eb9c0cbb0d660271728944710"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "f4b6cc3ef33cd7e597fdfc165e1aa6e5"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "89a4f82b25b6a8afd83fbee7cfe53299"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "e0fb77d0a9bbb3e2bc453a2a15392720"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "31f60acf7d85b46b5f6bbde0206b39cc"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "9bd0c04878b53acc23a9f948c005a790"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "16b492a4bcffb9f345e4c6ddb48292f3"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "d152e681633b46989f07d1ea5740cb2d"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "a809248708ffe26c277a35178ce7c9e8"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "8789622fff428f18eb495d94e6d353bd"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "9c69a71392090bc18ebbee9e717c7dc9"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "c24443482515c361a501387ba8b9df15"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "d7f61c48ee4c24bbd47971c6d313637d"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "67ed0d658a4cdd10fe48b09e841da79f"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "7fd1b51900876a81c833f0260458a44b"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "3656337538dc5b56bb6e67013768efcb"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "8ef689e82d78b03b24e9648f1992f97d"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "5370ad37e345750abe74a3aa3086024b"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "fe41d3a4608f4df668530e469b3eb893"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "3dc2ea59ea6945bb5ec554786560c0f1"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "1a36780eb21334395e859178cd1e1c31"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "0d7f5145467116e4e6fcb32d0dc0935c"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "205e05dcbdc0688999212d5db133d103"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "fd322ccec4d2614243a968f77e29ac1f"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "2da8dd0973985a1c6981a98ce1372b7b"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "2b23d0df77a5ea79ef5af999fffd8ebb"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "906545e930dcdc85df2a2b0b815b1634"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "403be8ee5f1dfe5567b68eedbf767ff0"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "4469c77bef17f85c59ad675e8cdaceda"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "61cbb69617b968a98da4abd23c6a2658"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "70dcf0079195ac55ec395779da4f9854"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "6464b3ecb735ba27cf2ed9aa24870eff"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "40e401c3b5129c3cb09898feee0dfa5e"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "77c66213b90f2b215c5eeb04a627408f"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "032b6a3d106f46e002f7f309dc62edb3"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "9f08532b56f97937575ae899ce2825d7"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "50a66bcb24416ca34ac6ae3e2d88d215"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "eac70b35a58631ab037395eeaa50300d"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "d5cbffd39eddbfc4cbb4732f109638bd"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "a3dd8f80bc0052610538394ab1d7b578"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "7277ac8ee4e30416a6949189e2fd85b1"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "c4468f0168e4e5e00ba68d0fafeb655a"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "5058d04bb92f29111191b963e9d02725"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "a5e089355de4ff82cd2335dc37f16dda"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "da602d5cad4bcd3ed34b64b3285cf137"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "e055d7099dd6f91868f789ba327f9f2a"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "a19e45076bc70a75f88c7fb6bfb032d3"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "874c2803edf1495fb1948756ea16f6de"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "a5d62cc22ed3f87cc0992d9fdc5be49a"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "47558b0452a98845d98f21099440dac4"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "9a9a3b71f59db5c36089c5a3b8e3edf2"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "5f31a771dec6705091d134ef9aebdc17"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "be7260eeb92c9fa5839bf546e91dd8c8"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "7a2c7c3f46cb079f4c5acda804f55885"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "95c80f8a3c3a8505975269829b79cfaa"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "fc13f89ff66384e62fe899b7c096ee18"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "a1acf45ceb3dda6175dcfb23a35e611b"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "c583afc3f88009b1f50da3150e66d69d"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "f8b9649e7a75f5714233d9bc8c236b79"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "a149699c7a541891fdb076874d0e3f3a"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "c0e303e8a9dd44549f8ef45f99a49480"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "5268eb2d673d9022a3ff884d2204ea4f"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "22ec743584c48aa456a3ad279b0e52fe"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "54b444adf15752f636aef8b924d349b5"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "1747b90a78561f911e638978ff31439b"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "7b89e77b39e1c8bc5b96a3fabd8f29ef"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "fe84408e5f8c1997b0daaeb5263d0918"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "14e9b2cf9ffbe2743032c360e4a86909"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "2f63fc9c1045561e690ed5ee9cda59c7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "ef3ad3359e1b8725992d36404a7d3fe3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "7bd697a9776c8f1fa2fc7cf0259513d2"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "16566e0a2121684c8baf6488d8c6cc60"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "526ed996d240cc1f7c6bbc35268594c5"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "f303953ed0b8c303c51222115b1f3610"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "b24294454314448d8c5caf29d2835228"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "ef62f21ffafdebb157fc5e2adb694e10"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "08ee411049c2872a1361dcae9ddd55f9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "183ccf6de2bf82d866aaf79a60eac039"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "5e63a6e525a5b3824045f5565527589a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "1f3e03262961ee65a61b63780d01aa37"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "9e18524bb16bf89f5062ea0519caaf6d"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "9cd6ad1e9bbc0839308805183e174fcb"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "9378fea1d1b03951cbb02848593e1b4c"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "ad5600f1ae86ea12c3ac4a7f7a67e604"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "40427bfb41d8a5cf4a36582499e0480f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "623bef5086f2e78b595289e76961d59d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "1855a571dd700a9b321531efdcb62c73"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "b3384267454d4af8619a98737c35102f"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "8650650611f1d37eba2808bd5addb838"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "90882a7152c49ba65ebee219ef1f77a9"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "f6570f90bc7b5c4a393081a4ac89d55c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "420c65f72ae08c72a960dad84156a6e5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "76d6c2e675c9ac198e1b7366e16f5b2f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "1d7e26453cd39069f95719b6deaf5ff0"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "0c4eaa1135a70cdd47d7eeddd4278d75"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "fe86363a3ae2e2b6e54d06f73e875fd3"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "e88b0c8099c27797d93cc57b5f061cf6"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "03d88fbdbae4661d96fce07c40245652"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "0fd7baa0fca529155261532edda1987f"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "52775b1a31e0bba18d25b7ac4ebc5f25"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "85a3857d6609ffbec78a5ff0f5eaf2e4"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "6550346f6c9b4e46d3d3e9e540fb0bba"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "2613ac3cd14f65374ed6c183f050e29a"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "314633b61c1888c723f42fa6cf92f720"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "0febe84cda3fa3985d1b4944952a6498"
  },
  {
    "url": "categories/php/index.html",
    "revision": "61d5d29646782bfde8a4dc9b5d7782d6"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "63bbdf211b84a49fc743961882218347"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "b1527cbebb413024f480ce9d465f8ecc"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "dbeb099be2450c0af90baf7ca2adac47"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "e80c7378a7bdf5df923af68ce817c408"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "1a39482aa792ade6350cec3aaa849bbc"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "2eb77745fed9c63a0d8ecd9acfc8c7d0"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "abfb04ecdd46a29dda9474d874471f64"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "5289b138a10cddcd230f7851af186fb7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "a0b1c488e5076f81e394bd583fd8669a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "1a3b42c79aaa78daf156c92d0ca1c01c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "a8c844112f303e773e780ae7a4b032a7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "6f269af8e24ebddcaf88b54c6a2a75b3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "dc9eecd55a6775b4873c0616601b0f35"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "488e164d93e3cb65e1dae8e2b88140ef"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "d3cde121ceee5f1e6844eeb42f45c45e"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "7b13f54c3eb6f1cbc661c2db4a248d10"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "050c7e4e151f3b8991e2804ecbbe9170"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "db681199b57e2c433038e46089d7b6c0"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "85002a9b7c4f546a09720ee288dfa096"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "33ffdf8b7deeb5c8d34c140737d51ce0"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "a435dd6eb218f4359c7756230c0685d6"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "4ac7f06aac09629ceb3cd3aa421dc28d"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "0ec0c3479d37463ab19b80fb0a13028e"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "59bd2fd9cd28826a4b8d14b601fbc5ad"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "1f307f2f01a7189325268ba1e7a7801f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "7cdfbad98819801ddc2a1faf7efa30b6"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "5a7243a730823a987147a47193079e4c"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "1d06a16849e2f1f4d338383ccb05a347"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "34efad81fe7767b6d9457371c3fcc3c6"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "30a33ea29771163ec144181da9c4b4d7"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "89e7c577613d1569848d927cada0688a"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "5a9ba04df878be82d66fd4cda1dd0bf7"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "ad11e089f1d23d0688668beb21fbf9be"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "962fbe9a44e980791db8f8904d7d5261"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "35b1d68a8e69abc4e0036acf54fb9523"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "ffbe766288ce0c2b8df02cfc4d226273"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "6b4c8918b7ca656b7c6f74066e1edf3c"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "340ecdff6e9cde6861b6f50c0f206f53"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "1c99cee5cbdab26063ee08cd3a7b2b55"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "a224de7641e5966ba98a7d0849cc1122"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "14b6938400ddcc2121cf452087b7a6fd"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "03713557639d3c1e68e9f4bf14e0a1a2"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "e2a688d9a2cfc5cf1fcb5428215a7fae"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "2ba582c54f5217959fa3ee6117ddc873"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "cb93b0b028a6ce61881839cc350ad417"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "b57a26b24fc831d63b2757fbe4232a9d"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "ab4ac312357f0fdcd5d0227253fbd9d0"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "2bbfbb1f68c3b49d0cd3edd11d9e48f8"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "91f5832370783c2a16336e0beedb161a"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "300464441d1722e0aa588337fe753aee"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "a1184816e05373c4f70350bf3caaac09"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "0549ac8c93ab24b9ff2b0f9a7d58badb"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7f689ebc997c5464f4ec2420cdc41c5b"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "30834bc9ff4678bc66bcbe42ea4dcd5d"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "0e64bdbd381ab3403ad444775780422c"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "17cc548b543326ddcf3fe89c96410863"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "64b5864236ad612243e1dc107979407e"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "458baa2d10b7bb6e1f01431dd9441952"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "fac45d233905e10e243279f1c49475c7"
  },
  {
    "url": "categories/python/index.html",
    "revision": "eb4fa7f6927609a63a2db8eafa4c5e00"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "b31dd713e9cddc84467e2d83520e5d16"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "4ae518e45c7e9588c8e3c21b0c1aec94"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "7685a12120cf4898a4409722f0b7b85a"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "0d720407f4b77b9cde4125f9d3e61a98"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "8bd81d0ea350eadb27d1d95da12264c6"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "aa3fd186f541ffca19fc5d87345fd4a7"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "8b5e6429f9815a58e597effe4a6f339a"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "de24ee4666ee0fa085d9036732504a3d"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "fca436607e774ad6a90c3fff1eb16c36"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "1130eadf8f32856be9d9ee6a72801794"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "1f39cea310f2d440f58f8adfae061feb"
  },
  {
    "url": "categories/system/index.html",
    "revision": "604c5bfeb399fadccfc77bf13a78b8ca"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "be68ee9f26ccbb27db22a21e61b49983"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "2e6da1f369bdb4b046abe2bc0ed4225b"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "9edda5db2737fd4a0eb74f25d66de84f"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "61f3014044f6014060bd949525369389"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "c2adb1d1900dd69c68b5824c6fe86733"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "96c20f9ba6810deb3e2da9a66e8e17a9"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "7d29bb1bfda85d99c48fc0fadbdd89d8"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "e0a204b953998eb1d25dd68b1270463d"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "6ca46740b477bd3a508562692f5723a1"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "65c07f029865da51aa183da688698b9b"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "2c016e17f943e3a86eaeff08411795b7"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "aa7c4cbe0ac4820c6b4e8dbf88938083"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "f195bde83dbcb91e2d3a98486b276e92"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "88504e03f57c07f414a693b9c9a5aa0e"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "bfb52456022e823c675f0d6951763bb4"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "4ec8119e989caf9baedc48e93d7e0443"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "8ec3de7259bd10b6f57b35bbb90ecade"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "2ceabc6f8c4023e05cb96d340611cb1e"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "854c808ffbdd8ed7ed24a836c3f85f1e"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "4dc55c2b433bd85280a5451f38d84209"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "6684aed1b7b62cd917ff0b69a9ef4b9e"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "24b95c840717a65c0e9bf97683c6342a"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "18fe51a959da40de13add234b0e6d977"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "b7ad2648cd1402dce132d37ff62b8f5c"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "215e90993beea3ec47940d1e6b717af3"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "4b9326f208d79527f59cf138fde9053d"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "767a51aff9ee1c45c9bb20754d6a9fd5"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "ccef13e24d8a68b78564f3ba462b21c8"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "544e42501273790b025ae9a9a537f7f5"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "2920eb0176ac22dac5e0f72fa5f411f6"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "431981c78b136b5a977435f116280fde"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "8d04beca6474f49ba3c18a792f65f074"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "841378c10f8cf95c82217d1beaa3ea7b"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "6c4e7b099acce975b7d68cc931d5a25f"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "4490c54b24acf0c66c47c03171386ee7"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "15803728d3a4f6910e66bda891e6c179"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "469ed02661f232aaa988d95ac16c5614"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "311fd559a661fe7b3b1cb2b7d58f0871"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "9f0a6c661c4267aede3f0de20659c995"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "ede2759a0f0ff1a1c434f849494e4c8d"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "8a78350e34de62dda84db94270fee7f0"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "8053df3c5881e9314411803481505be8"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "219bf1974bc00f8d66375fcfcebdebbe"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "2f90df1d9eed7cc76f3eb7e467670b9f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "20cc61ebfbac3c27b834493de8eb635b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "4b181c642652c0d88b438f31085c1b1d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "20e28cef2967b57b72e7f5d79a145270"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "946ea744232343e903be4901ee4c3340"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "9170417d3efbe3edb19f001fba3e8d07"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "aa33e62317796ad44a48f5a59a3c3c4a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "7b9b050ab76ed20cb447329d9b5d3f88"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "15384e3bd5d5744b63276e233c85285d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "56f60ebadc647cd05f58eadb5ce12df2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "6310353926a0046d045dd98157c55aa7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "dc5ab9a6698c1290fb370870d1b413be"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "2e0d16530feb5350b68fb76761161cf6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "a89bf2416173fb2e76a0ec07ac484488"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "8c7fa54bfabdcfe253ebac65145e06c7"
  },
  {
    "url": "favorite/index.html",
    "revision": "dd70188fff8d63d93a01b0c3015c5c7b"
  },
  {
    "url": "index.html",
    "revision": "d24b0797cf5e0d5b88b5a1e05f610eff"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "ec5eab0b1a2dfe453cc0c36267ac2a5a"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "4fe67d71ae79fea6d31f531ac217a13b"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "6e02ad365fe77571e1c63a280c7d3476"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "9ac6fbb4fce84a345abad3acdde87be9"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "cf4572e79ed02a6d416bf314069e87f1"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "07e40113d9612341b89f8e28f80dfde8"
  },
  {
    "url": "note/index.html",
    "revision": "04e37bbe8b7f5e7b39116c042db1c7b0"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "a42ae5331dc808f535e697c336808a19"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "b7cc4c78c84192fb995df9079edeacb8"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "f371f4cba9b29cfde0001e44fc2d4dce"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "3816aaca9fcb115e85aa67ce13452b92"
  },
  {
    "url": "share/index.html",
    "revision": "2ff2c8f075d7bb084c3e4960d757b69e"
  },
  {
    "url": "single/about_me.html",
    "revision": "f7d41a794c290a5d531e917a6ce19630"
  },
  {
    "url": "single/all_article.html",
    "revision": "0839cde9ef84b3dd8e43c1e0e33e8cf1"
  },
  {
    "url": "single/welcome.html",
    "revision": "db96a1606d6ede0c1001e910c5e376ca"
  },
  {
    "url": "test/index.html",
    "revision": "47d6ccbd390af1cc28cec536ff6e8e4c"
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
