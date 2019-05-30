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
    "revision": "eddceb8096be7b5ccc8943644d216969"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "51741059498e817dc36a297a43f905d9"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "60929914fcf14aa51431b9f24d7fa88a"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "59ecaa630c563845b6e60b8219b71b87"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "8e4cc15c005b9a6d8f1f0215c3bcd405"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "eb6ffdf02978b5b23105762498b806a9"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4c9069ba7cd5edca069a800df63bf13b"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "fc86d069ccf4868f03689af1b1610ae5"
  },
  {
    "url": "articles/index.html",
    "revision": "1f79cdcd24943cde69da8cc619835f8d"
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
    "url": "assets/js/1.a3dcb58e.js",
    "revision": "d61ca753e282fda03ec9001b9ac13296"
  },
  {
    "url": "assets/js/10.ecd1419a.js",
    "revision": "75bd8a6f32087efa28750c8b48e6dae3"
  },
  {
    "url": "assets/js/11.a0f7eda4.js",
    "revision": "fcef0cb0bb9631dd3cd79ec738775609"
  },
  {
    "url": "assets/js/12.a9f191c5.js",
    "revision": "4346db32e73e6ccfb5c9b8b714452565"
  },
  {
    "url": "assets/js/13.34f3591b.js",
    "revision": "95a48baf71ad914374959d15229a2587"
  },
  {
    "url": "assets/js/14.d0f490d5.js",
    "revision": "21b389ffb6c75c098c807971486769e4"
  },
  {
    "url": "assets/js/15.92eafcb9.js",
    "revision": "ef9ccc3e2b5858feb1658287963ce2aa"
  },
  {
    "url": "assets/js/2.b87d5e0b.js",
    "revision": "bba3faa5f6e2b2b0f6106e2beb2a2805"
  },
  {
    "url": "assets/js/5.7bea38e3.js",
    "revision": "91b056db1f9b9b134d081404a677b12d"
  },
  {
    "url": "assets/js/6.fef674ae.js",
    "revision": "cbd99c4476eba531bf4d97e9f464e784"
  },
  {
    "url": "assets/js/7.420ae82d.js",
    "revision": "6270d7605bd8cea650f62b6337f26c75"
  },
  {
    "url": "assets/js/8.ad06e931.js",
    "revision": "7519bdeff7157f7bfa6612a04d75bcbe"
  },
  {
    "url": "assets/js/9.63a23b63.js",
    "revision": "bfa562254d756952708c7b6eaf03ddf4"
  },
  {
    "url": "assets/js/vendors~docsearch.3953f9da.js",
    "revision": "776a4e90a2828032477234e3ed0fd706"
  },
  {
    "url": "blog/index.html",
    "revision": "6c3b1e20ef560675112c8229ea4ab4a3"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "d471f18fa6d3cf2b7d6cb4e01a5d141a"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1a705a866158451607074c5df0e760b7"
  },
  {
    "url": "books/index.html",
    "revision": "d33a1b6e7ecc278198e901112eb1f8fa"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "9e02b5942e4854fc08adcf2c401c2dc1"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "4380a3e7267d5a852325933453e89423"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "6153bad7b735f040d6d5839fae91404b"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "34362082169448ad90ca2f277a6587aa"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "ee9605adec51c3c29b8b8b7880466385"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "4a1e99fa15c534a7ef05c7afb064ef71"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "21d249d52c04d04aad182b42eb596250"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "ce9fce0a3c9e263218beb7a0b41c4294"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "ce6b71854eac315cdc34654ca7fafaa8"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "9d8f15ff1cdb627a8c07b69282b8c345"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "8a4c05a884e96a973e3ef854ca0c222f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "6752a9d78aba0a084a0fb5afdd3e2818"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "f1be9c887d6597f7493026f0f435b48f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "343d631516d7ce1db70c38793b71036f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "87ea0fb5c1436e3c8aaf42b9fb81de40"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "f783693125d3cdc7f755879fb278697b"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "f9d4ba991b56483e4791696ffc85ba1f"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "36f98a948ea2fbb752ea98896df8be65"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "6e8aa401bc7b51f41e09c75c66767164"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "f696ac1d1fd05fa4c621048642cddfe7"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "1f35f50ec34815627bb04f8ba89607a1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "9bec5e7ee18e686ada1113d778104f72"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "b621e9ffb85f2a169741f0a3d80a6b13"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "3622b2bc9a2bbe04965dcd9ef593b762"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "c3d4bf74e0ff1a50bc7c885ee75880e2"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "7edbbf8d37ceba89e06c807168bf0276"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "23d97f2ce52b40957e367e5ed41ed8f3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "51e266a998dcd47b667ac8ffc906ce6a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "27ab5962f876d83758e6d315a53a2ae8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "99f27cb415024e8ce0358db39fa6299d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "04005fe0e27f70f91fadce8e846227a4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "546d306c65c12d2f9b431a6b5f316d21"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "a8624430923f245475e5839a829d9b12"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "0683e1a53e384871fcf1eaf84483dc11"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "367f9858323fdc4ad75cc85eeff8631d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "40319e3e5dec05848f05ab749a0b8140"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "e7ba6ed049134304f1808b3beb845907"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "ee789b52914b1994422882c86cfb5b50"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "e373b3cb378b30d8abe086b38108eb33"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "c241267b4d4d930bd4ccda268e5622ec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "7954afc0a72fc4e137b36d5f5f1728f1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "bd4490df9248b79af41d77cc8537e6fa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "1cb4bfa28bc35d3fad3409f1b91cfe56"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "b12e34e07d75b1913d503c2874e9fa1a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "414d59d0432e487ad7fb35562a11ec63"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "a0182dcc63b37a3a29add5214a13a4c8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "195e8826472831cfd07ce19f045d1dde"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "e63d92390f7976306bb67a68a1a26da7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "1f00b8172fe88ab2b8769f7a91b82df6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "4b681f6a2806d9cd7425ca67091753b8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "5ab0b1df0356c35817c39ea472e5e9fa"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "ea686dd8d5b7dad26e66ec37b12e7952"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "95947130c6092f53fcec6a35125dd2ea"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "7cedb0e62cca68648f90ac5249ef14e0"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "1f32f5b698f80aeb3dcc3e36ffcc40b7"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "417a2e6f8ee5d3f0c8792269d7256a28"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "8c179599c7a0c9ae154eccee8d0d8680"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "9f708d494180cb2e848bede456c10761"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "40d8b58f90a65548353acb2458fb5bdc"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "fe106f6020186d0e21e86cf476c26f4f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "fea59308f566ce6076b7a26a65a67c9c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "a986ff9f1fa004a5dc2085a1c2a448fe"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "e10bf8b516b6983ada01b7654b8735d0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "1f880bb0c015bc1fb284d1fa19de6ea1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "3ad00507bbd988410d343c98f616126d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "254c5722c840468a75c6cffdf8547038"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "92fdee17fbc7ec0602cc594cfc2edbff"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "3003750223f38ddd3252458b6512858d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c0ae8c26fc9c34020377e75492922110"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "6f16152d500af93077c6508d88dfea87"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "04c7a60c29593d22709a641ac43594b9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "9b674b5cc16c32dfa9c56904490b5652"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "fbfd8b7ce1ed7a99400db5ea6cd32a8f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "767931d257bddfe113beefada9f7910d"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "00cbdcbcde3bf9e03ac44231fa9d8207"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "07626fbb552e7443d13a75730f765c5e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "6ba4736241505647ff357ae0c70e6b4c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "334aa980bef932b5a552150483332980"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "a11dd9bb03b663449a826ab526013671"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "ece7aa83027ec0277a55d4a5ce3a75c4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "3abbdb2510d18bd604af480960382e12"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "dfd6a21e164b9639b08872a62ade9cd6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "2a35513be5cb6b5e80e06afa27edf409"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "b3a59227e83ba16529b893b139f3283f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "b7bdaea60603e02e08a89a4fec9865e3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "e072dfa5f959ae9c9ab8f5e706d4154c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "bce5568fa27886e0615582c558fe5b85"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "e676fbb84f02b2c79fe7f69ad4915e1c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "3e332584f56e7d492a34f66947d29439"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "22119fc3cc22a5d2ce3e631e6f164569"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "5e5301e967c29f54f41e0423bbcea604"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "8194c7bdcf37b4ca0f35a8588242baf0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "cca43525e9188d685af55fdaed84365a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "7a20e208a958fc02f69d175538ccccab"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "4d164960f0b29861c8567e77e9e1cf53"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "584edd5ea7dbeff2e4a78583575e0aff"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "b46e1c501d6e042788ba932b16a6a6aa"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "d12be9e7e499f6d192c389c65ef1b3ad"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "b71f50bd69473af3426e43cdd53ad3d4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "9c452bc19b9d2f7604286d3d838d520c"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "045170e0186b12d60bf4575e0f921574"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "3cf153cfb056b23e5f945041d2709795"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "8898adf9f4b24aaac02ce2e73b4953b1"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "a7125be56dc890a544e20ceb8ed5543d"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "3deec0c4eb6f07f4ad9e6659f990f8d4"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "8e0ecacb29791690994ed56c90143ca5"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "09ca8ece94c8e612dc82806002280472"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "818930ebab4cbb1e31c310861c3c675b"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "bbfda6647495ae8791cffa24adae849d"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "945204da9f106c74656a8c5f50e46320"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "f448e39791779167a290cbd08f314007"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "44b47004b3f7b4bd3c7f09ea154c05fb"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "6603b47960ea98e696f1020bd20d0c58"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "e8c0353a929fa65e038d5c03a4f4f2cc"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "67702cedcb351331e0c5fb7d677fbdfa"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "828aa8c82af0abc611ea9a2bc928b9ce"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "00acc216af2605bb74dda8429d281873"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "c8af529f4302223642c95588b5138f53"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "4d6d13eddc62718a127573a57bf9ff58"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "041a02b488017427ed5f6baa94bcf076"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "debc43f13d8e68aa10847f6a503a9625"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "3755fc92f969fe059d70d79eee82dd2e"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "c95415c0cb6459f5035ca6a58acaf7a7"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "ef914e152605121c69332991f9ae3cb6"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "cfcb495c968c03e32e8d8d1b40b85a1c"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "fb3f208a11ee311701da574234b07a3d"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "c4ae32978877a4dd7c2ac7fa26829f36"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8fb2707d0b864b399e93a54fef0c9fb7"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "ddae95190d00450ada616787a8ba015b"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "764b2febe39f363bb41706b3c1011c5a"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "55b97cd6ec7e3604dde467fa7981d7c5"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "046a847443e63fbc23af575fcb1ffea9"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "dfa5c2344912110e83c86bd9f5017085"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "347f5e4a4ba6e13156a5225940c33fa7"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "594d35d0985f53bef1e5e536fabbbab3"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "f0867dfdea3afaa237701b342e48323f"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "373f8cd05429672d569f0a3ba2fa0442"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "35c21e6b751734c16038eb21e472abdf"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "bf861209222bdaa1b309fdec69540f6e"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "c04447b499870368f8782a1db1bc9b57"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "d61cc1d079316196f4bd4fcfa9a8703f"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "3b3a661ff5de9c834801ec19e7a240e4"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "3b009f521b5280d7ec3c18ecba3342d5"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "ba31274b19de2a7673560261c188b0f1"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "1a071bac73e6f9b1226cf2c3682e64d4"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "6a390555878598d6e12bffe1093fa185"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "0cab2c8c32a1d9b57823bf8edaf9ce1d"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "5e78ec3e1a041779828509e19dd2e200"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "417e2ac60a617d4415d61ac4583e94d0"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "6e32524de2c3b113d56b21c3803d36e8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "ef4519c0f028fb3aa07b747bcc0caff8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "f92aa2ff49cec300d73c16bcd53e8405"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "0c849532b908791217465ebd84e24443"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "20f944b0d0616785d70e55ad211f1eb7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "799ee2a12b9930383d9f009a79a4aa6f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "8d9295b3c6b61d4d63a920e945126f96"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "8d0c567650c4a8a0a6f52f6ad2f89a98"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "fcb055808ead2377591ce82d76b22415"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "e26f8ec1f0a1e19143b61cdfd1a0c6bd"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "b84e64e5447946847429565ff51ff6b3"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "e917ff46a461e5bc0e945e9ecc5207be"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "cbd763e6cfd84c485caa3f5cc29bf8bf"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "9e7a9b549517c5907f1e60ced7fffd86"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "401c707b3f7abfc6014605f2a8b4ad92"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "bbacc86faafb54be45339ca0f965a765"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "389e040148c63de31be83b065e9cd5f6"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "c16e6ca416a2a7d29e0a4abeb6baba31"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "7ee1674e644d5ad4d4e5c61a4d604f4f"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "249b4d928048abea544cf7ce59520339"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "e0214a67108f2d6f21ba4f476c8e5e57"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "979963b7f87fb0104d7183ebd6bf83c7"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "5db8f52f0e0ad4445e38307c8b093761"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "f0fa0e7e247d6475739f5c946699d965"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "680e47871e6f2c8a82dec6db8b213ff1"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "90169e2c22f47a9d4afa0277551a0ea4"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "2e6a44274d132de2a203b90ee4404a3c"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "29502ea74670184a37b3dc9a922e7615"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "b0716b3d1d2501a56f5ce2be00465942"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "16c1f3f32d700fc4576db9cd96645756"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "238d94228803aa53b9908b937c07aeca"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "70ccfb81ab3439cd7401acf2ca0aeac9"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "7fe5c5cbc78d1c1115e61da53e1ac995"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "7a8a2fb38160f1ae2c342f4a21760cc4"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "14d1cbd7f13bdf292b39cb3b28101f62"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "13ffc2ccd5b86da1bcd47f3809c76961"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "9894e9e55811018abcec01ec39191f9e"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "62837c9f46453467185dd79798808ab9"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "2b597cdaa610e9be5d70793355c188e5"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "edd0609c607c4d0f0f37fac02319078b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "893f5d81adec2044045808803e9c91ed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "48b0adc5430388e419e80fc92afdc898"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "ed503d6763313fd91fce5f6805a6ad6b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "384459af30940fa43453f178d584d2be"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "7edac0e519ee02f121432ef8088c5f84"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "3b0e7212266d2fc554ff94202739bd57"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "6e7031f98348af0ece46d3e4370a3865"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "85919a0c5df92ff9cd5791c7523abf1c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "e164604e60366c352cfa1cc9fd1781ce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "9d7f6a72c6e72609d31b767aa6d02c46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "7eef0a6e9425bc4ee0e6f1822422aeb7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "df182af39bae37f749b53493da2e3b22"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "ae496baa8d5b2223349f0db3f70fe48d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "b3ff90c3b6f1939411ea57598e2f3506"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "e993a636ecf7a4f4ed0b94a12a828d06"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "9a875bfe769db5952fe7a6c142321afc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "1cfeca79ce84b530f666b77421d5b0f3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "79a35be4a1250b823a9e7d66bff98b67"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "b4176032b8f862a58f5e0a68f4bc0b54"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "0b75b8a3db00a0d19ff6f490382a9e43"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "c87bd6bc6aa8d2bfc9823fdba5248dca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "0113ee2cc51030fe6865938f65a45e81"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "971b9d9196ab7b5c32c6f2c0c12f805e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "f26ba29fe6145655460e986c0649f655"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "cd3048cfa8f3a5c31a37dc3d47f3ba27"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "e61360af8bd7adaefa7a28b3d74445f5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "760c68905a311ab4501a82f50837cb3b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "d9dd6b23d9c2b5e1c22a3536807c7f8f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "93b1364061abeeb74ef2181915bdb017"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "d96892d8722457ffa5a6c182dde39187"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "a70199257107d63c22f27a34846318a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "fa6614d438c6ca1dd68dc509d20040da"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "1ba6c476764e929e8fe48373f3fcfaec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "ff0223647106defbe61bc8b76f68801f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "21cc3420b27238935225005bde2df6ad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "2f9833ad6cc9d60c28059ea5f0cb4845"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "36d0509d65c5455898dc1f2c6291b043"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "f164aabc13f55f6d5bf4cb1b57d8747b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "ce5b7e752394363eb32cd58b3f4bca46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "18f2c65ab6f6c7fe92f2b9ec7b2e11ce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "961c0bad33320a94589c70a50fba6bed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "3936f2070ec1927e69dd02abd526ca1a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "b6263ab82285a5a09e1a7847ec8f2225"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "6baaade0b480a9e4bd1794ec54e86499"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "5bf4d8a3de3dad75593e84cec4d4961d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "095f28b923333fc2ca29e761bcdb4df2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "e841a877e505386303061558b8ca7639"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "1d727341546f6480ce1235b5f6cf7f15"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "9a7fbe04f8a4ee6cad4572d15ae42252"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "aee87ad7a07461207645a47fcb2ca434"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "60cacbe6bd91bf454c529b5114c20fef"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "99051066277750274832a9eb39bf6f47"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "b3ae68d76d541f40dfd54f8de0a19d5d"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "2d5069030c67dabac8267ceb94e1bd21"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "e438e457d0120d8c8118b5a8123c06e3"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "d09ea4687f5a3e3e0c261508a4e23183"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "2de4cb5b9706379d73759daa19290403"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "9d2093ceec82855ccc907177534a342c"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "5d9adbd39b934875e69211f70580fe68"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "6d7e35de52dd9872ce0e184e6b9d0713"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "ef26cedd7c0df34e90d685e3a1baf459"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "b259f1ce8aedbfc27f3cb7bfea7f364d"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "0c661b58b519afc54f97496b34738f5d"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "246a53828b3ced127aa5bfa27460f318"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "082dbf71a648d45e007e0fdc7de15196"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "d0cd421f91a0a9216f7d11fa6a0c91e8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "b102ed3a07ce91712b50f006fa6dd5e8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "9304e942c71163def8d36e58eac54d6e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "2b2a9857018982974f307d4b67785bcf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "531b10dda0b8ba19ae1dd8ef26c5e8e2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "6f5ef349b74fb2c1c7cf1e2402061c67"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "02a4b00f68e37a6791757878a07ecb09"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "6a8c655bf640dc481687ec9a24ba6886"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "1d216680f8fdaa762885c9123120b034"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "70ec35c94fb4f5b37ae9ab562489d84b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "4646e1a1356840242c933cd3a4b3881a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "2157201f5145afedddecccc0c75ab196"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "5d69b1fa111dddf3740c3a1f8a09c62a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "b807a38519743904660697e18687304e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "cd18a3563078bc9fa66d414220d1d1c0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "3c2188de15790fdc76e0e44be91f01e9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "82a1720a98b770899de0fee71a9e5107"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "2e9ad09ec08d4607a71795e2196ece3a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "a277d8a957109a6f7105e7ab5b52777c"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "7b791ed38ca6ff771fe510213f2dbc61"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "e1f969337db2fc04c6de9f15e1279e50"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "319f201028b11d5d411cebc27549ff35"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "b07612d97c9d060b0e550d3bdcd82012"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "daf4b03a1c12cd6207d3404960657cd3"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9a4362e95a61cc62028272110a6f6436"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "1832419c3115233cf358bf402a131433"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "b3264b0b8d7faecd818cf6ecaca5a75a"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "a4dd3c939a5d9ed27dba29db066c4733"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "5c70c6e757049333d25f4157f2080235"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "146ed4cdddb95d48191463cb823d91d5"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "bf20c86246c280f6d549140b82e4f7e7"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "27177a06d34bedbc38c6e402580ff8d7"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "8034bde5e176ff5d3f7717401703d4e4"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "cf61109adfe26cd97730fc770f392ebd"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "75c378742c187beb46aca3da7508435d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "b52bf9de8f964429f8c2e2dd4c39cdd0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "4fb8f043cedc2d753ab6ddfa79b14ddb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "c44ba00cad70ade9a2c9bfd8f449beda"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "528f8c881640f8a49213a1a05b951c66"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "da4690f06fd7ceba06d28ced3b5a9968"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "f0d333fb02956a7bca6c76b296fcd5e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "b9fade3167115457edd7cf8ba15c3b34"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "98526cee136c074241475effd088c6ed"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "22abc9c3a3d8242581794d564f962ff4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "d618f672c148dd18bda8a16fb532692c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "234ef68d4cf3d9d284582c9a560f5d88"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "14865c403976c9549cd377ba6c7fab94"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "16f0da688162d27408dfda8a0acdc7c8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "c4c6b82cf1f93b76abae326fc0695ce4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "5a33f29609e0eae8a1866a9ff8945c72"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "0bcb84e132e425e1f90055fb9662131e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "c6245c1765678764fcea137620d06af0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "4dcc5afca9f9b676945af9f752627102"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "ad154b4487a482f9209c918db98a4ecf"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "5874be4aff00076566a4fd984364a3da"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "3183028737eaa926f7a7f53658c462a4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "07c11dbc7a7b947d97d0361c75bfd741"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "f3ddfa9c39059b021becb1f20d7f8fed"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "0af226ed570fa8e0108866df2e2b7c7a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "db9d2a00266abd3f62e94df2236f68ca"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "3932fc666808c9f6700b030ae13ae743"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "6a1ab4a40a4b251370672c33e90629cb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "9e9b5390ecf1b36d9400577572d63c2d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "ce07122f90f59ac029fed0875da9c64f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "7796633d7ae229adb253b04ff7285b7c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "56ee7e925e613680d6b57334efbc2049"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "94848650fa39fde0d60d875367fb1de9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "8ef3945ff3766e7e9000509894881df8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "2142f4a7d30667be1e04788aa9a7382a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "407f2790ff84748a325a32d24969a68b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "1eafff581309e1f1789950cf4a0e59c3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "4a63d153d7940c30e1b3586e4af95836"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "f0b3144432336e218ad910041295cdf0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "233934486677e9b2ba2d5409615766b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "06d56f270edb5dac4b4c54ae05dec6ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "1c74b49bbab6d5a51f1a3003d9eeef77"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "aa1f3185a600b0c878df7ac33b5f6170"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "85f569120cef9087d9e5915af7f8114d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "3b44bd01dbd4414daf790ac3ef4bd71e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "1a154468c163b3191067a75733d893a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "fc57d2ddd1c31a9afbd761dfb83e9f74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "0753e1ef8b499cf084176a51349fa92f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "9ccbb15825127145150199dbf8fd57af"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "8bec71cee34abdb953a5129364620b6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "27e0bf0fb64d9366cf828cf4f18b8f66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "73c04ce77dd24db9f4b25f2d8f14bf50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "2266a304f3f5df74c90a42aef50fa95c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "3bbb23a10de5dc1008da162ba1ca0d03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "26fe27f155efa0f9dba0832d7af81c56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "81ff74b45f48f53df6481711f71c909a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "a4c2d9134d61734c3a0e67aa12efe8e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "bb9a995c80aecd12a6f0e5bfb2aa88cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "29878f24e930919cc8769184cd97c474"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "9e1e1be22d87f2df2cbe4ed14ae49402"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "c6fa75d3f048a38e27a336cb1c6f4e31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "65d18eef58e8cd8ba09317e8d0e0051f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "8c9b03741f4d73a6b76a938070087a4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "4b9a0021b2495a15024daf5ec2e68300"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "a6d3f3395eddf3da50f68ffbe8dd246a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "7057ccb77570d895d29bfe0f75678545"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "589c6355b9d348010d6e9b2ed8e01a7c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "078318a30760cfb022156cc1661178ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "46eeaab43fb5af1558b758875acbdbe3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "a36df2505907cc8226c114c79a2710d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "f6641a7150394fb5704197be6dc15368"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "9bf659dddd44395b509934878826d81b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "18605d3aebf93d46ba2b0f76ffa5c394"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "845a19a52887c55f5d91f2d0c3af4f59"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "7d51c9c9a49d3844b36fcf33d0364628"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "dfdf0272f65862ee5669e58e95083421"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "88708b766f6b822461a97680b7f1f534"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "e696ca27468cb8f34bbab8c5e9957510"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "f463abe850fa93350df07befbaec26ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "fd59611ca901bbcbe55edc4ac35a32ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "f0863f59d5bc5c9c3e39f5aedf47e27f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "7164eab8ea104120910ee21bc782eda6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "40fcdd0ad9312ff2e8e4d27116e60de9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "56f43d5bfffec169fbbf6956c17bb474"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "945496b7f8baa4ebe47182994dff9d74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "bb1aa9886d942186cd542f48d412898a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "97756f544e6a969b6d5cf241308de191"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "1edebd7aac8729990ae1ff86ff04af52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "450d784396e295d1758161686de8efaf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "23e0510e7316c4425f19d54678e72b25"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "54afa5a15905cb1d65e14eb2181b16ac"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "2f685e67e4a481c58544be36e6d35a28"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "028380388b4b0f36301484a95ba0f8c5"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "f05a4da4db7833d9e23ef91f43b39479"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "496dcb79a0d66f1d9dc15e13036af0f7"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "14ad3f4e5bd1dc3d44eedbf1692aa0cb"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "a774eabb447ed354dfc52d6f07bc3929"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "eed3322ae952f258b216866fe502a1eb"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "893a81e91ae5a6dfd0f191308c129e57"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "f6004f1d0d5c9751d254be4bbd469b70"
  },
  {
    "url": "categories/index.html",
    "revision": "3409fa72573b3310d0cb4eab36644323"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "1bb1af720e3984d2215a4652a6f5e5fd"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "879186aacb66b24c0fbcb6d2b34d0d3e"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "d49624186f0058d591899826bacc1121"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Annotation.html",
    "revision": "46789293a0daf3da31ae2a2243573cc9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "6d153eb9d650606606761a869d699261"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "92c8190ed796cb329a8498d262b98791"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "19d3de9476905fc009eec2a9fbc1649e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "401f4e0cf357bd199724545801172c64"
  },
  {
    "url": "categories/java/_books/springBoot/config/Cors.html",
    "revision": "f725f8aaafe282a53c533ff4109edab2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "53aa2f1d7204a84c67847629d5929d36"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "1fad6187ea07c0aaa6a8c30cf2a3458e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "e7c2c1bfb0fe4a979ee5b2d338d4fa7d"
  },
  {
    "url": "categories/java/_books/springBoot/config/No_Banner.html",
    "revision": "dc0fbd6361a7755f15a2549b8248e7bb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "1d46b053f5342d73a1dc28a0f41be429"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "0160747bbb0154db61c52e93a81fd3e9"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "58d56918b43722c73707bbd006da8098"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "1672c8c026af7c6477cd779c45fc25c7"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "34262fcab373ea9fa9500fd9f79f90bf"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "22a71c41396880d0cd8525d23fb668e0"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "1a39d02e33de98029766adb18aa2ee81"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "d22d994244fb56a7eba2ebdf30286a14"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "4d7284bb5e88a966279dacc5cc798e52"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "7ca270c25520d5354fbd6f110d9aa6a3"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "bfc0c90fefa1e0f9dc905e9437829251"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8c8c7020b8dfb3689e8ccf625f620d49"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "d91255cca980bd749302659b78d46867"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "d321eb3aa1dfce81abe60d3353d8ebe4"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "e1929af4c0710ba0d4d1fde4dde5fdbd"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "e90aa645f1ebd0faff301c9d2b11fd85"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "6452c172428f41968dca3844021532f3"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "fb0c2abda5466af920009ad303474d5c"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "f0892a8c3e4df9ab702d48a8986540b9"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "0001d1eb8895fd0f46140df5025ea557"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "08758b00db3428ac2ffedf4d849a97dd"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "60cb7265c59991c94dcd2d2cd4a61a33"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "d57f6a25ecb51a542fd3109860b57fde"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "fd41547b5596554ed4ca25e197ca426e"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "22165b13f332a9c9658a54267f41aa58"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "c8f72ef9c02e22166ae1a053ad98575b"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "ff9812126b2daf638646ec8dd8770206"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "45a003a1087bd3be4cf319b2868bbbc9"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "2b6b655e1b34d8ec988e94d297d7aff9"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "b8551476f497d9dca5f2815b0e2dc1cc"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "f07465172769ce36baf8ab5056e2051e"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "897b26896bdf3d26db7366b6f62b8890"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "984c5433b3d2792d339cf9cbbeadcb32"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "53e1c9522e03392c11aa5f97b048e85f"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "b77ba125671b82f9820d215e4af6d4e0"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "c8d8eb36971ccbb9d857a35a0dc51eeb"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "804b4fb3b976de45c228548314f9cd50"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "d00084ff2dadb87d43cdb04b473a3bb0"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "af8eac02f507ac49090972273abbe389"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "63a78e4fe83c3cb8396dbf98f116334c"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "00524e0a3c2122d0478157fbc8c8e7d8"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "12ae4254bc077156a66b77bd3e398c37"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "199b167fd438f59893250b68ab4eeabe"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "38ba94a288f8aae58c80a0a99f19b97c"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "98f91009804ee04b38b437f2c863795f"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "5137bd4aab04d178ee67a2b212fdac00"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "0af0994e9c6da29fd30212a7432b772b"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "c8587873aa681d69a5bee72ffbd661ff"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "42faed5e4949b7ed6a19845eaf6ddea4"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "d01011d8135e0ae35dba2ddf7f4a082c"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "3e5a50c2bb4e962488bb31d62844ed00"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "78cbfa630efde5f6ad143d0de237df79"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "b19aaf70b45b62716c5607f721afd8f3"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "749d4ffd6db1a2bd57d49d237d328240"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "fd13890f5ad42cc53e355a3a662aaf1a"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "e7a7799527a050143d31a8f81543f18d"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "55ad36aee1022a93f68b5e531b661211"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "9acc52b6efa24fdb01f0ba712098c561"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "a6856ed4fa48280bdf9277d842a06125"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "8d1ea9bcfcaf86a39bbc45b283afa857"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "327d10f94e4161e62b54404c041611e1"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "2ee07e6fae17dcfb1409bada8f8b659a"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "6490ecff64b83a1cc9476be963a79cea"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "3e440850d5d1ec736900d844f61bd98f"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "5249a3cb37f04e5d4a08ed166fd1812c"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "8e0622637e4b9aaf8e5dea96276bdb52"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "42e50eedda51f35bfc02bba0733fdd04"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "b0d30e4536f2db07af4569eca774e436"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "75c532551366f8186b03a6185f5b47ae"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "30475980a542b2993477ddb4620c95fe"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "429a5f852534ffa032666facc623ba18"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "f29e940383ab7df2b484c38a29633e38"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "54960b64d784bc305b1ce5c4e863e947"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "9596cff5ba3de2a8ecdb76341aa444e0"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "d05f45bac78e082d8591269f063fc6d6"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "5e4edddcc40cbe1cef44f38f89780ac6"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "7a76be746d2afbcb54e30291307f2407"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "a96396b851831fc2acf836496d75743a"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "330df2313c3036de6c2b2d01fd1452ba"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "e19e083144fd41cea64a924b6eb7dd4d"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "87b7a61ba746bb8d40bd521faa76fffb"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "dace484ec9dbf732f9ed955595a573f6"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "38d4a77b0f9cc5a97af6772b2feae09e"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "721e5f360a66a4df6fdb8d0c72693601"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "7418bf6e43f20c4b490cf822d302597c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "f41cd75638be4d6c643b0e31dea558cb"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "1eae89334f181f2c6896079432072e21"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "0a2cad9a3b1a78a21366a3169df154aa"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "669fa78828681718da705e06295b3d14"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "9770985624ee9d4188118372063a129c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "1ce9687eccb4e13a8834c0d1d48bd34f"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "c2d7c40a55093fe4572e88ab9f03c337"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "1317de674d963a4fef483218be1f3d4e"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "150854a0f30d7fc07210db03b5c6f6e6"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "1f3820f0574dbcb58eda96780a81ad43"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "781a926b384dc733a54a0af6a9c43590"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "58ea0a46d1c7a75b0b25865a551243f4"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "9ce86ee2136d2098a0df600445e37dcd"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "0a0e471de3be0dd06367693d924b4518"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "ff4ddcde11c993f07307aec1d592434e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "6eeecb384b9cc39648c5c5437749157b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "6891b8dc0ab07b9038aeef49bd51ddf2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "254f0537e114c648e6e8e903ecd702dc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "9ea206e071e8575f4a8062059282f059"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "3b24e14ccf974e1118e2e61b7127951e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "e03dc92b0abda87ad3cb57392b5fb9d1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "0c5fbc2a15a84a4f6b759f772ec5520e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "c238b7cf2217be5baddc854d15760ec4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "beac949ce79a0997ec1cf6ef95128d33"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "7a030172de324b4a1a6e340f9a7c1ded"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "46a38a232ae7d291ce2db8344aa3ee34"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "fe1a8b1d36f01f8ef401e03deb5113d4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "839ffd24bc4bb5d374e87bddcddee6c5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "4d84f8b44130e60d19f537fc22825a5e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "97db53bb3b2b76d91e702a75795971a1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "c7d92f4bd255ad5ee86818b61de04088"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "3d45d002f1fe966fcca433453cbd5a68"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "3225f032613f068a338744f14aab6fe2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "3a48b46820bad7257a4b62336ec7c6f1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "f345f591c9da167fef1f5b8ede719a2a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "c488046ee811f46bfb389bd1b8283dfa"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "5735644b2d9392405724840491a7b647"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "fd365d3bf9aa2dae3889c45b707c4681"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "7f8c9c35a9eda0fd44141dad23b54563"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "45f179e49161d25f1494f9af6f5a067e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "93578af5667531fc3723684aeefa495a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "5db36b0c31e6c0a43c1e3d1afaf27bc7"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "aa04a8ddf59cb456802a44efbbd1a095"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "91857883016ac1abb8367028893ce1c6"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "b18c4ba2aa4340a922ebc509f8e32c1b"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "90d03437c3a727695ecad9027b4b3cd5"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "907ea7ce7eae9854feade096afb00e46"
  },
  {
    "url": "categories/os/index.html",
    "revision": "3f39a6b5368745c7eef9294dfeab2707"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "bcacbe009679d5b443c3a9b28f517cb2"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "a9d982c414a7221b31fd933bd742a104"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "9cc930e3914d39e291054b260892a239"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "0d59573ab1195ab1b52c7136d2e02c4a"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "1bf00e6c43df8030d46c46f85334d39b"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "725324fa2b4e97a1f43acff4fc5bae1c"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "6f4b6dab63cbe8211dda3f1136f0ca0c"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "d6346e795a0682192039b63d38a116bc"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "2e13e798994d2b63191ac3167877d7bb"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "ba8f07eda192e4214b21026742e26620"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "5c75e2976e65f6bd478d62424554930a"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "fcc50b2ac88f2fb386aa1e02de93f153"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "c96c944d467cf8e765161d6878ae93d9"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "9a40ad634820f96ca1fa754d1151c856"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "b45806c7ab0624adda9424eed7f8c3ab"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "bca3505e7cff1f3ea76be992c640413f"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "93b8ad3868125c10fc88cfa244722d88"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "e80eba86cec1cbf55d30d11b67177fac"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "9908b1475aad5b6888528d6c693bc381"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "abe75d434dcfcb19cd8dd37ec1b9a6bd"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "b2fde71259bd0bf767dcf2465843d366"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "54f3868688184ce2798d0fe6e8739048"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "ee6063a279535fc130712dafd5adaeb2"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "769d5b7123180261c993a92e411cc298"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "9b1c409dc3d0e744fcea3b6500999265"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "c9702e032f4df135d15f128c1572b1e9"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "f72399af4906f82c00d1b7dc92ced51d"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "711fb3ec41ac6d7e6e24ca34eef1818f"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "213e0fa3cf66ab87de9918b560a49e97"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "bda884663a69dadd22f37bc07aa79848"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "bd578b18866f8b7b4b10a97a104bd78b"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "bd631cbcc9cfbec5ccccaca685c9b6c1"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "0d22f32df05c356d78531a3d12b56e18"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "933e24725db39aebd070d9cb73a4b27d"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "bef3bfcf5f8bd4b7878b8926e2db5763"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "1f875c370ae15c1e5ade97506b8181af"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "45af28a140f1205ff69a82741d65f494"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "12d07cb8fadcbcd5085492cd644310d1"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "97f277a730570c71c4a302b954ccb34d"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "c3f0f63212dea8f571879399599a0b74"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "c79185eea4e4cea6dfc124e6472d310f"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "12676290845fb71a3479a0bcb96f1b98"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "496e799ff4dd62aea6430b342339d4db"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "d6f5f27faade80017b61772407035fb6"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "cc3ce1bf5ea18a99c8181efc7ac50e7e"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "3df4f7ec84bea05c532c9a22641f32ed"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "85bb341dd9e49ae0c2b88a4a533b5724"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "472dad78d90212fef2040316231b53d0"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "c7f3d23134572c763a1392fe658bba3b"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "f31f80ec495a49336abdffb40765eeef"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "67b6bdf9876cce2d2c967d419f31ada7"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "171a8460de38f89b8c0d33ad9907a567"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "c1b60decbf2474887bfd8a5b674068a2"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "244c70871ba109aaf691d719b9d58623"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "1ff969d6340b53a2eb53e9f63c302cb5"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "dce89e6b72ea37f87bec1b141b22f541"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "7e28ac4fcab2ea749e8018f3e017252f"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "c5bdf8be9564d7170240457b0a300935"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "97bd4abeb95c5cd18b6265207faf64f0"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "863344ff3f059b2483ac2d5817d40009"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "4159503c92eae6d6ec705721a7d6c598"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "08bd5865b6faf81afeb71cf6333dabf8"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "e859f8f3b59eecd3021123b2c349aa46"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "cdee1dc1f631da89f54e58604e80c82c"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "5bfa3cbd216076b76aef2ddf15b2a0fc"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "e91ea3dcc06bcd25e43847646d9c0841"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "4f2d9889c10606729ec51f69decb8a42"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "a175502f14f5ee245b1a65f8556616c8"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "c7530651cc2e4d9227180a0b10deded6"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "89411fa1a25f0ce9b4c0293f1ba5d686"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "f1e8660ccb9f75c9c7191945fab8d26f"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "0db5f0a6e2ca6f06185ff2f5e40bd9b0"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "879055fc078af990fd0d3ca4e09bcdfe"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "8061795052eb201f2738596e1a036f13"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "4e434241c33f76f198b22343959a8771"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "20d277bc257229bf8cc71ebfb4f109b0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "3d05f221be754c44fef6f71cbe98729a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "463045405f25a774640a0f4cb773093b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "bed282bd3b0f25cdb4845447a93bf28c"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "c2feef63435c1004f99c6fe05518e026"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "a56f6b7d2377569289e86e078c04c8e8"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "7ea657d2a43d1f0d4c2c69364a6fbc4f"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "fb9676a1fddc838ab533a38fc02cbd5c"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "32e1b5256907432c8263a8bb15ca4670"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "4a48681a8474d74637f6a9bf39606683"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "4eb3ea671640d64f99f41c8955dc7205"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "1b77322a22d45a30f5f4528dbaaa6153"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "1bd4ed20a7ddb276ef8aa692a1683d65"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "a9d0973a0249b9ecca5c9b7c58aee960"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "f2ac3ef90d016725013b393071b29212"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "95d1dbe7ac658bce887d9aac43ecbca4"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "46fc5eb30ac13b15dd22a8cb9cb60a8d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "e5b7f161c6ac1a0f3a6861e70c6cc9f8"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "0a7ce22281498d5f4605a72dfba76e29"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "4742122999f9d684753c72ea8e5ba2d5"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "93255a30bf1be2c2c3acc761ba39eb53"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "dc62228cd6f702063d81714b57b6b5f2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "ec11c6aa61ba7fc17b32b0110506130e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "f19e1053fce8735bd5d10543f229b727"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "3e8a12cbd466ff076e7eb2a3fda8e43d"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "08b22e0bb3472c5eced91aac3fda39be"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "7cf4babdba1a0146a1a2a833eb69dc6b"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "0f34ec5a4e1dcdb50f70f4c9d80d3481"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "af09e29673c8623ca3e9db55f50a5ab4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "941759a0b58dbf0398519ce8a4e38ca6"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "9a0aad3c38cba5e4a7cbd64546ec159c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "e40ad4a6372964c664b530878039430c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "3e1c74265cd58e82d95d7da92d71e1ed"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "092e7fa213bb7bc75ef75c2cf98d7edf"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "9575ca83a1b07a6ca7640c29f038fc4b"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "72e164e2963e80c411df8f2dc17394d0"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "e569623530e1454723c31a4f5880131e"
  },
  {
    "url": "categories/php/index.html",
    "revision": "4e6dc518859d28cfd4e040c141472059"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "22c0b0fc6dc8da989ef825c8a9df2938"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "d7b11f618931aff9727269452665d793"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "f52f40bd4cab830fdbd461fce3413c5d"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "3410d5bf108f3ae5a82e23db6dbc4471"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "71182f9006bf3d12219fb198f6803dd6"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "3d072d23d522ebe65fc055b5e8b08fc9"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "a6856f969cff86ef749d736ed2ac5d21"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "345a1233235d7526eff533467e3bc7fc"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "d8349ef9e29f8e4454475ab3adaac582"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "b0c419e379324192f7ab1022b4c6b6c3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "2ff43e3cefe726787ea985d48fffb670"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "163fca646c6dbf3c08f91c90dd19505d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "a3046f9a7321e72d620d664edb32ddd5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a1538bbaa6f8514d9cb4052ccc2e1544"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "0d65b056cc9643a36fb8c904aa915c83"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "1c10e2860a505cfdf4eb3ba479714fdf"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "1ddad2ce964f3603f37925a5e0bc9e04"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "64bb4b6b3b3efa6cd3040bf9dbcc00a5"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "65a1dd64e96de7c093cb9186dfa8cd7f"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "df2a39d3a1a28ef79f1ce4ac5d6ef8d2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "f09ee23a36a591e7efef4ce078b7db8f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "68d7a080fb77471a24bca1587f52f473"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "b3e2dc08620c4970eb268b4e11c04ab1"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "b0592e9a80b3c9b3c432805fd1e9f902"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "4ee15a74fb2df6774e2c4436e403b60f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "55d5b834800ee15d234e9d02a7b97ea8"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "d5dd102def23311ebf9b0eb5e25dad3f"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "ab6ee8d6d64c7fe07b53d6e1f63d1863"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "13cdb0b8d5a595ac3ba8dd635fd890db"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "ae3a44f99788107838a0b1fe979eccb8"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "77470d3fd31f730d82353e4b3a35766e"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "fea22d89151ad71c1b218e0fe943f11a"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "83facae0bd66ca294881a310feb522fd"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "d20f99c7aa410170686e08d9cad87e7e"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "b9bb94ef1ec7588230f48e785ee7bf3d"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "b1fca446a32da7e50473abd422e5dbf7"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "88fac114c05197a85f33e8fb612d9ed9"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "5c10c3f586361585046fb489ae4fa6d2"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "5f0a85d47b310c8aceac46fd700c7c0b"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "fa6e5adee85e6fef4e37092057a5d838"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "b59a9df4a38ca6ee4060e946f8e414d0"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "710376be81ea660fa61ffb2c45ae65c8"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "f4871359f518234887023105afbd364a"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "2a4ea3b32fb8285450fb9aab429bbfd9"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "68d346fe236674a3c287fb44086deb2c"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "69dcb535499f49e36750a63910ff43e8"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "42ce283b80f8ad868aa0f9497983785b"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "0e1e51c6815c5d2360af30cbdb8d638a"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "6c149f4ee20163c492d3cb9a3eabb78c"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "289bf0a1261b18d1229a6b9e5d2de6c4"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "5f527392eb054aca0e186a3f47b01708"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "1b22c6ae85feb8f22a2fd59a8dc30860"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "1f0475eb0bfede76bdb539eb32605b0a"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "4516d460fcb5a6c5c0d2ff384f870dac"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "8ee725bb05b7e486cd5c10835d59fa42"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "6537ca9a496a8b796e84ab95cc313a89"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "c6fe2bc6dcfcadc8718f023d4a141388"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "c62146359a1adb4c9449184e7c35de48"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "ffa6f457562c5850f33b7946259b674d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b5070b6d634cd2eaf3f595b0419d92ff"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "992d810d66a2b1b045f066a873c8c97a"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "b3478a42d1e2c2bad30735f35d33206c"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "51b2dd4827de1e633d935a43d0d6b7bd"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "0452e00721f1609277369438ec5c7a7b"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "9bbe3b5b7443ea0f266c6f4616e62867"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "b38b52d093aab2d77cb1abd593e6ba02"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "0935892becdcafb1216d1a23437b29b5"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "08a59d8541dfd3590d075d8b62228bbf"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "3abc6180bd32123d733d15ffb43885c1"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "74d3dc06e5868edba800df2140c688ef"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "b6df47685b77637bbad0d00d4f419cf1"
  },
  {
    "url": "categories/system/index.html",
    "revision": "2fb3e4d77e46fe3776ac4575104e824c"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "cdf9787c2d01c0894e891aae6786ce64"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "c5a16c11586b7854740da857c4e9a0a5"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "b746b7946a32a36605b1f5e3c92973d9"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "3d717e8159b2cc62d8afab047779a195"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "fabeefd639d52e35a5cc392a23ffa136"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "0556c762b88d90ad0aba1e95cc5aa95b"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "45c3c559546beb86cccbcb3a3c7240d7"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "a4c1070108fd6b511cd398698b27f685"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "1d03d6948048f3049eeb35dc6a6512e4"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "e1e1e344bff13466f288f1f4b0fde5f3"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "09069dad827ab5328270dd7edb521175"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "adf45e729da948f28fa880131b9bcdb1"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "21587ec48efb027a0759b0215573a648"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "4292651e98f1e5b2658434ba77b3e90f"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "024e8f0b7f3472d990e2a3d2a0fc58ef"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "0c7603bbffe2be2649aa76b8b2dcc7dc"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "ac15eef919db987ef80e698a1f773d7a"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "ee7d0d189007185e1d0827be32aa6593"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "dfb903a3dde8c12657587fb62897805f"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "d28acccba3bc6dfa23c0734d96c9dfef"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "9e79ef099f77181fce8d29d254c35ed3"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "e4fd3b22ac45ec9682afac1826f7faa7"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "d5466280f36f55166f147bdc4bc84818"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "3ee59c89901a96cdee79c865b9d73110"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "d4210d512eb1f6a260f01a34db15588a"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "220cee4dc30b7991de0e555a92dc9cff"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "901c748e9be60099692a733a5ef53478"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "b962792f8704cc003ead248f8d1c603a"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "3fa6fd69f44d262c67ace7e7f38e8503"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "d972336167fe6e2b67149604414d7bb9"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "30fe63810fbdc93a2a8b84f0707a6d0a"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "96ed2ef21c2060dfd429f2193d1720d5"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "76774e090eb58875f072f4eb95ef0192"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "cbebec2695d044bf1316508c5b08a9ba"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "30a20d0f582854eeeba10199d76b504a"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "64312143cf5f86d106ceac53aee09f87"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "470d3424b35fa93a37a0a2b03cc342a5"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "d7c888a57c9dec1e86203421d855114d"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "2edd43a0ecab7e4e803b673a62e72cf8"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "441f180539d70096a9fef366e50a4988"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "c07ae8744a3df5c2b0bd4c56c9349436"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c67931f413d5ecfdad598f2b54a582b8"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "bdd02e42d38d9e555f0710468acb12c3"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "d864a2416142e363b69c06c31c55ae53"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "1de9ba97e8c00ea5fc633d62b11efec8"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "7cbd83d390f81ef164258685f629e647"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "041ab7eae09266da64fa591d55c58dd1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "4e6e8bada69c3c79a25f3a29a99b3c09"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "18e9ce48d36399b0567f6d63c381e5cc"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "16265e69958d02b4f8d045aea9121d52"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "3e77de0f4fef401b8756447af9a95439"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "3839521a9b2259584f0d3983055b5ef6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "d308cf70982d2f85f9852cbf05afe55b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "cb100fcb9c56481dc4f2d2931664b790"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "f58bd8b115d1f93e8db0c7e93950c696"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "fc1712d305b3185badf14a95cf1a0dfc"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "9052cc1c497e3d847b11547febb7d235"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "429918678f628487450fc56e9806beb9"
  },
  {
    "url": "favorite/index.html",
    "revision": "f0e2d8105ddbb5525bbcb7ffbb535edc"
  },
  {
    "url": "index.html",
    "revision": "684cf5f142c477dad14ff8f4e396770e"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "53d4c601476952f0f73adcfd3cb60bf6"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "411dbd0c4c9087d1bea5dc46c810e023"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "66010fd027d8dc25f47b4bf81b3b43a1"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "9dab99693bc047178663971f8ed0bd94"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "fb7c03f5c43804fe61104f3e53533c61"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "2f25cc8b4344cc383259b6017b904c91"
  },
  {
    "url": "note/index.html",
    "revision": "c1d1c5c69a7c045d0b8a8b4a29489fc4"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "bd442cbb2624579b52b5d7d8bf71c057"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "29b07f0b866a7a92adf758ac5c4f7f19"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "2d9a9e156b43336b419f9e029de949a9"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "6bd52ec18a231299134dc0963dbe2e4a"
  },
  {
    "url": "share/index.html",
    "revision": "11bb54f17a489fde57c712882092f523"
  },
  {
    "url": "single/about_me.html",
    "revision": "0af11015365bdc6df95fe7dd2dc1c74f"
  },
  {
    "url": "single/all_article.html",
    "revision": "250ca53db88d985c71822b9e17c3a52f"
  },
  {
    "url": "single/welcome.html",
    "revision": "108ec40f37ea2d32b681053e2a9f3ff2"
  },
  {
    "url": "test/index.html",
    "revision": "4f40e6330e6f95ad27e120642d191850"
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
