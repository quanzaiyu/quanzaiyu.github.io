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
    "revision": "d268aa57ac29a2c00967641b592d8a5d"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "c749e125326a3e87d368b625ab9d905a"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "3a00b2703c33093f7bf9f847032c63e7"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "56a464e63d73fa67302a686da9433ac5"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "53d6f21df918868690a0fd6ee08a1b14"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "cdef1c121ef6de5f929dbcaa9e82028d"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "8682606621a3033daa81e3670103d94e"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "2e10a44a4c8d02cbd57e0cc4402696ed"
  },
  {
    "url": "articles/index.html",
    "revision": "8cd3c32aa9ac2772a0eebff264be7a61"
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
    "revision": "8a1f3dfb1f17e0304eae759c7f719bd3"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "6f288ad9dc80e65a2dd8bdf776f86d52"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "34e0a78b1abc8319ddf784986b889031"
  },
  {
    "url": "books/index.html",
    "revision": "bc287adbe9efdcb115be59292bad870e"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "18873bfa3fdbc58b286dd80e9e7264a7"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "5428493c975dc44946fab4bf05a4e9fd"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "9905722ed92b2e13c5cefaae5dda731b"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "a47b27a635a4a344b94c198f0dea22b1"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "c3ee014ebbc1ab2f6fecd41b9d172a0d"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "404079ef5cc374a3177d5e313d7da06a"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "0f61b274930295ea223bfeaa1f1db2bd"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "dbc445e6989fc2a33df36aa2741ac02e"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "d7c50c8d77ae5160b2a6ab40d4053707"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "bcfcd8363c6d4c24d24687b8e402b5dd"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "9f5dde79373ab77cbe3d2e0d36508d6b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "5f2029e123d7262cbf9edeb53b39bad9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "8a6517b64feb8959470ebabe18a22cc8"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "f6df0d8e76db7b762e8e2fe8c8da084b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "f8095a45f89eca6bfc4325c8827611e5"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "3b2f382e2630d69a730261d1affcd1ac"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "96891da317dd25d6f6d67f4effae1429"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "efb70e1cb032a278e1ca6b21a6cfb6bd"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "59e56a17b62761ddffaf3b36ad0881f1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "2cc5c9ef92a2c9701dc8ca6db42d0367"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "0ddcb5516a0f14b8cb0f461b755db52c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "9c989fe16a810e3dcfb939a323c4ad70"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "303eca76d43684a82765e5053e8a7ccb"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "6196779b87a1e9cbd12fe0e6fce49ade"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "6a7f24f2ff501fe97b3a32483625d949"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "df893d9119fd55ff4be94a141e14d163"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "a91be07dd0565af2b7ce3a2b60e25f27"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "972d96c69fbb64ba773770f927dd3ecb"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "e4a7e507ee21b698d338729166935f1e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "839be383a1b5a225295c595a9e5ee580"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "c0131788116f1d4a847a748a88a4e732"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "74e768cb04300244b2dc157e607ff2c9"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "0dd31ad8ae03c896a1b8108249b10731"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "c75919e8c6f00bff63569732d836f8ea"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "67cd27e35c7ad5b7c10bd009072f97fb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "63dc27d09872d75509d6f80aa60a8236"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "b35534947492907fed27132c74083e08"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "c166666cc3da308f8b4cc81d0afbad30"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "e9832e0d7e8522dc109da1c0f1cea65a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "7053aa89d2806707152609f7c6b11b65"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "157832992eaa28db7a02afb036cb8a7d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "7b1ad718f88c35ad68d88c5b61b0c30c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "9f7f7a8141f5aa35c1fc695748365161"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "7908c31a20fdb13e41423a8c18a6c770"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "1bc2df6359cd427e8c588258080cbee4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "c38d33b82bbbda486abdba9a2c8168a6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "04911a34e42b84d9b84ca5a1eeb5ef2f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "7fe8eff50c73584b518bfd1fc860d790"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "834b7605791a06e12691a0fb047220e4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "73b39b9a3afd2c33046508089cd3eb2f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "64d0a88df3d46594a8061a56a096b8f9"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "87eedf4b02de0234be5ad2878d83004d"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "d496c31b0dd93ba38576ca54e4d88639"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "5bdcf1c18483756824c098712777c60d"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "095e31ae34f73b3a5f5b5757ef6625e4"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "e0f0148e64b5d4af064fca30a0159969"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "5063ae44ec5d4edc9908a256b0dffb79"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "ae00d89bc9ac9488747bfe625e983db3"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "c92516069fba356b4eef34bf2b280f8e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "8a70112718ab8b84f09d3144146b4e14"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "575ba37f3bc4a133a0c6dfa53dcba120"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "c6b2276c9a7e29fd4f26bca0feac565d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "d9069b37f9402cd9702dac920448e49f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "dc367b618adfb1ada5b31ca183da2769"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "57609e87ccf015a07fe466d3367b0f4c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "c411b62b8bd8df715eb5d8405ae5645a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "f7cd96f284691f814c9519b5c353ac61"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "724a0a19efad68202234a79e25ad9a2b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "d710215fe61f28ec8e6b5771d8ce6703"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "a35b4c9b450283b291b33d43f30994e0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "83c2ef191432141fcd48ac65a0ecaf75"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "e1555a26f74a69e3d4b483a08d906ff1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "78e9771825141199c3249bf3cb306d02"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "4a06e181142f0845b3d8330aa633a9c3"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "652f44044ac4c7484bb2fe1ca1a6dea7"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "21aaaf477d8ce9ae5f7a90ae250eea43"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "705b145942d1b2f6359e35b9baa43996"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "1bcc46e1f0ae32a46520792d8cee106d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "858c39f2d496ec9eb7a6b66384ef6c0a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "3a0126566631ec7434e436bad5b59e65"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "a9a6514e165c8fedfe779557d543b8fe"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "b6e2b85535903525414245844d6de691"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "3e601c45196bf38b86c1c126947a860b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "9c7ab68ec043849e3ba544f66c5eb903"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "fb8816973134ae8849f0afb3659371cd"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "3a3f771918e3b5720e1ab537e05c3933"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "495975273b7d7a880308a1e1fcd5cd54"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "8b426cae57d562eb6eee85d53d7c2aa3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "0e674638a7278ccd9c22ea5269637577"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "a08eb2cc92bea19938e989e153e73305"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "97fb34230edeeebf9040af981f3a252d"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "98449e760ef731852d78957f33179192"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "2320ea2becf160e87a94e4c38186e75a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "5944b58d422ba1881515542471a5afb8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "f69e9ab465d90211020083f78c394d5e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "edcd0945d86f57833820f52afb0aa948"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "1330b3302cdd1661ab53784726a1ca52"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "84d3f9a46b24f31d13b41c021b83a964"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "917c4975d10ed9ae8fc0db2962c2b3da"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "1e89eacb3be967ccd59febbab810ecee"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "a0fdb51082df027c167bdca05499fd10"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "ba7d512a798df433e41ef24bdf97c221"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "4c2e892adefde87305a4aae6bdf5f463"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "604d08f08354885acc2c867cc4943d4f"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "59abd6b3e9cae71b5e2c1bb89ca8a130"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c67fda83bfa826c1b45e3ad16929300f"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "85dac0afd265a0c5dede1f5e703e5869"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "0a60d4cb2097a7cab521fafb7fe60fb1"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "4604df2c27b6147238932d86223b9403"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "de366edee6fc263d2304ce7946657f28"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "1d950395ae5ac9a331df184d655c6fc1"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "f371ff5c02bb0527b3375e20c3bbd4b9"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "dcf7272d41b131361c572121da692f22"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "9915a5c0033736159e9d61c04d40f774"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "13309a470529129009824528595bb07b"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "9ab60105380c528c1b60c6df81eae9dd"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "f4bfe9083cfb50da74bd060f64c4ad79"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "a08846670c035adcc4c40a9d363a3d40"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "5649fb4459234f8e69bdba06cdcaffa6"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "fedff06860fd66264c83828ca971167c"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "f1c7971e8b145de97f5447ea2d409ebd"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "9008a81a0fbe6e13ea452cc3bfb63a89"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "3495d91846417053c5ff7e9a1695ec29"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "df3470c538c6637b548557ec563b5678"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "3c91ddf08c12650942b54790dfe1da9b"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "18b0506b271fe78074e0cf8bc18b1ee7"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "ce59e354446150245c438cb80fe15a35"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "1939d10ac7651c6a6a95b99d0c336305"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "da04106f84a586e57b75a9da1fb2b1de"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "f343fe4338ecbc4c2922210c4bb91ec2"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "2697e65974e6691cf675fbb29fd11504"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "fc0c3eb9342f872b384100302862c5d5"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "a4224d592339ac5a66dfcc2892b9bb76"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "2aec7fe972f95bc35b846a5bc942b396"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "7f3654142447cffb08950b0eb3a79306"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "c5f804e48f876255a49d5c02505636e3"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "5696bd1a65e9c4bba1a7af5f1ac28733"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "34856be3caf44ef60ee94ac08e1c0cf3"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "8a1e7c1fb2b355828e980a4d960df321"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "31df7596c4ef5cfad0e0dec5255678b8"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "6f34b892a759d93566a4ddbee5499a30"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "e7dffc5f33050285f54959303a35f8e7"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "b9fe298832d9287e8010364ce4e0e192"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "bb1048611d252c73c6f96c171408c11e"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "493c8662b8448d820caab7f360f66de5"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "864eae3e3f3b869f7e090ef6d1b0fc44"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "36002fc3f273fd6216a6c4706424a1f8"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "62f6c22e541513059ca0f8dd393c5073"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "4f55f98bb672e0c8aa6fa465ae432a7a"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "a7af3ff8e5fe26a6eedc185a3ab9b968"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "d84c4fe0f9ee8f3de638aff122220e3d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "51f7b792139b61530ebf55a67efc3598"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "e93f1bfb68391a6487e61780a7550839"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "0a642b6fe22841e08f0354b9ab4f0317"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "092bd2f5f3ecf9dde37d1f7cd239228a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "0502064470d2cbcfcd6ffe4eac19f770"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "ba992a8515312b7593cabab8bbb505e8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "4b5596791d2eb2a345bace705aa4acc6"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "183b9e6884fdb99201d95884f3792de1"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "3caaaa01ab1da0df4e5ecabcb8581af9"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "7acb8e748a8a131441e030ddf030ec47"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "a21b7573538ab8a849b30b028f8e7346"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "641dc93f467bda7634d72a1e5c79e214"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "44b967dac967bf652e8146c5a0e74380"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "7b6370c8f7dab2c9e1dca93c4ac35703"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "1699049957b4f9a7f48ba22f12eec115"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "d3b303260c5ff178ac8826e3f2d68bb3"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "62685679b915fbd2578ee28eb7e9ed6a"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "001d8ec0a186dbaae60ae784626625e9"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "843286b0c2bc59ea18eeab174a5b7cb7"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "f0a205b81ece0f625003c3726bb24b8e"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "9776727435cca4e0c1812aaf6b775101"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "05c3801fa08e890b1356c9dab0394e4e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "2393a6815711937caff82d2636c68d6a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "128ef8348c0d0e23647fed3d16713a94"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "30d93546bb5d2aa62a02e9dda47764ca"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "060d6dbe1c92d9eccb3d45ea956a8043"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "d7b2e7c7713a686d147791c95e2d300f"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "ba14fb69b4fd10cb42aadd4feed0df3a"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "a0dc05c0dfa012970ad4064f8c5e95cb"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "f879af8935ad7e9e661ee70af7189d7a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "6938e930c465b0b7f239582277520b07"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "fd4d153f097b6c52081171a3aa1e77f8"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "e3d62ee6bee817f7f4ce6f1e2811ead1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "f163a39ac10cf06a6752333919dcf0cd"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "896702588ac6ed647ac232ca52bb63cb"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "42d59cf87b8b11fb5e5b99ce14a0b581"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "ee1d6eb437e20696a6b4f2612148edf0"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "830a1de5d77a4e8caf444a9a9662302b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "6bbab2e0cc01bbb0742b643236fcb619"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "a9d3d6054f1bedfc334047d3e5eac2db"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "8caf288d1573e10f580c905e777ba7fa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "4d4239a747264fbde25411ae3ce6211e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "1fdf0e949a78f518372725347e5e3bed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "409822adaec5cddaab9ffb799eb81b9d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "d427bea36015f0f82111a461e89e0af4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "0833a9dd8ca9b44d8ab662a1366696f0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "df1e715e6db8ee85353f2a699f928636"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "868bc0d0ec91f794174eced0be88f624"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "09b7659b491337116508f37f6d5004c6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "bc4ceb4ac253c138b5697532ae402920"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "d8eedc7457c7aca7e06b820aaec17bf2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "e74ddec963cef980a19d0197f535e3ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "61e75d46473c5c428bcb35b3eed11f83"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "47a557b60af9c9cdc873bfe48480c3b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "ecacc52f169bdd964cd0f7a956a7829a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "db708986f0f34d4dd794c9040166808a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "b1cc52b3c152054385b67ab3798af654"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "c9055ffb3e13fa02508c27d27d1d5a46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "670264c090758a402a506a34b06ef78e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "b0449dedcc72ba12614c8df8d219972b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "73c451f3428d677cf123f3f87988d5cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "8af5c29413f5fe4942d87858013f129f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "3008a8108b352fc1c22d5fc9c6011349"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "02fa2263ed2e1b90e4966ecde88088df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "b6cb9577b452ec00fcc7ffe92156ca9d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "a0a224d52e53d2a01b653970241e5ae8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "3f4486eb04837cdef5bf1f69548cc362"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "501a37ccfe0ee05d940a71fb244cc3e0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "8377cc55f8932d4b360d234078378850"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "21bced40d4548482320fc86ffece6161"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "a2aefc711854ac8acbec1f89f5e1c3f9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "94b9242885c61bcb9113ac7dadf04272"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "4e490561bdd5781e20f250aa200d5655"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "f538f95f5fcec4e919ed93de27817f0e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "f84cfac4c77d304dad3a183a1bdd1981"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "fbb9a13db5ed28296b3b395c7816d40e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "5a98940b4de54ca05d6fbaf5ab32b58d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "bed28b4f6eb9ad1d4e8c031be4bf085e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "18b7f280860bded547c441c027fa59f8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "5b005ed6455e97ba10fe5756ac1e2cec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "4f77568d9d2a5f3f78d04302f4a55340"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "3abe1797631cb9daf0886b5ce18a2752"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "8aac5570a5517d56ba65dd839c0df4f6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "d475eab7c971dacb50a7a9879b791bc5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "28276abb09c3c1ce67beb5c012f90677"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "5ab3826448a47259b2bdccbf3ceaa5a6"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "2fb9c17c98daac77efca8ca8cea7342f"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "c759f728a32f8786a2128e44da353dab"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "a9170bb2bd3b9a68d72e62fbcc83c57d"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "506920f0b04356601b5809d02209564b"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "a72fa5c1898c87ba06cf4a9a7842968f"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "f739d3827fcb906997fa779535c3830e"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "33ee947b1b53687199dd7f422fb9f62b"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "32cb2b2c71cb8bd9985738675bc1354f"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "068606a17d33764c7279d07a10fd65ea"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a78f114333f8199cae1a6b1a6aa03fb0"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "47f0608d839f936f18d5861032ac39c1"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "f21239f32847ee9fdf3bd8dcd5cc2080"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "d54a3df84eec458d644b06135a1df0fb"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "aa9444aa44e320856cb5a31045f86d0e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "894a086673e08687e7b6ab49ce21177d"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "f37601e8645981c03ac81440d16dee0e"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "c7523e91786d3502a22f8d7885d9d535"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "0a88004e5e76898179d135a847084fe3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "7f2f1eaca2b72704e4f0534b7a4f234c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "4e48477e149ef71a60dda2b6ea51fac1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "8ae5e6813d1a25da809edefdddc5696e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "cf9b8f960001c67ad7f1a5212c2a07a0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "f47137897491da2867b5ab66c89c1d70"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "c9bc4a6726519e99042a9de17a736b0f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "302b7c158233ebf7ffa07e287c8453ae"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "16932afb8a04c22a95818b37f365f581"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "06a25502b1f486e519aca6b30595ceef"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "f3536730ca0a53d83b2462c6f3c7e4af"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "4be170b7f080d7270d0c56d39379c2b5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "07aaf2a913fc109b3c5a113fd1bd727e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "956f4846542bc37f955be67004e34d23"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "58fdb41f9ba41e204301ef8077ecd436"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "f5903e1cfbd0bafc644bc677dac65f97"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "6abee4fe9decc645ffffe49881d7bf28"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "f887765a7774e3107b651828c2723eda"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "2856212afe8e4f34115e845f48191bf5"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "06782503f2cfd197f5a7d5ad18823463"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "80992d11f45b1041a6762c9571ee539a"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "b8de93a77c913bff48c228807e8a03cb"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "749f4c4cf5948a2435195f113e741e59"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "33d3a3249fba854fe3ffe50a6372e7ba"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "a876b3f046a1a7d2d1729044e2b161e0"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "ddbdb1d2df4e487ec764040a8f965be8"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "7940439e764662f3508c358facd100c9"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "1eb4ecce14dd34d1391942b701d58365"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "4bbe3d22135c9c2468a5905ec55c61cb"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "05f01a25b4b29b6e4864a3e912e9ef9a"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "978c2823f6bfe61bdcbf7cbaf5c4fe27"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "a754631b5f85f7c3abddf3766584e761"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "b8130297591ffa0d1ca367b2e8352721"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "3dd2dfe831e65a65c50f1df3e8e67f14"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "46b1bdf89871a45df0c75f1664c61cf1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "33f5a847a36627cc486902efffa4355a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "b3fca79b6a5605ec6ee31e22dd24d7dd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "d6288ecd44f60557ceb953f641dc4274"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "27e24e33a7ba6cf3224cdb6654936f44"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "11070cca78c2e27ed23a501a01944dff"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "4fe162e433772046e457ac16a8bfb180"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "bbb9161e1501383a2c400df24b160f19"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "81a3c12f15044b6245b833a87d7852ed"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "d104faaf71b600275dd1d45aea065d72"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "3910eef9010afd66c5e544f32c491abc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "43664b3574e1f3cf04000cbcfdec7676"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "b28d48c82ce83991a45c9eea3e262a4b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "ebe0d8b52cb011dcb643fd051e5d53c4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ea9abe9d45548d0f7a66a2a01ad5eba0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "291fc9e0f48113c8622a64a027786b45"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "e1f110047e0b80b6d77110be8aaaceeb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "73cdc76c606c91bd7844da181ad4e1aa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "7f4ce5d5fc19a29dfddae71565d65436"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "367ba4a5a7fb1fe9f2f0f0ed6dd3f72b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "86fcfe38c69a62c73503c1713f7ecf95"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "9e04a1ef9b653f911ad8233300b4bed8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "123ccc937058d159f0327d2951e835b4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "40ca88ff05cecc3b61b30eba924807ec"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "6cff4b2946733524997269648fbbc87e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "872273c2160c28b26515a6f90dfae0d6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "86e26bb1652eea3ec84274ea783be20a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "292a5baa651c328ff5ad871239b62662"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "cf24968557c0144bb4563f82e372b9db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "cc96135eb69982f30f8edac28a0fd66d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "9c0c9718fbba9fd10cf1f390d49182df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "4f7efbc4986a24c0ec9adf1bce2138e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "87eae7bd1a7ee4fddf46cd5d6dc5bc0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "3664cdab223305cda35f8c579151bde3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "2109e1d6520cc8f4744c05bc3a697836"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "4467f17792f300a627c6211e62f99ed3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "9c29c4e09b59d72e2a5403cb371bb1f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "bda1e3d3ca4b9ddbfcbfdcb43da8ecde"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "64d7ad505921fe07c67f0063fdcd8522"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "69d65245457653e3a6baa7b1e7823084"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "b9c8470872b557e1e7029ecb233f2eac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "aae51a5bbe2ad588cff4d8023039c15f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "933b1a28bc49ffed4fe43adb6fa79384"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "d418f9b5fd119a1c0d7a9ef8c4e92292"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "ba8d3e5b66d1a7c48a6e0a47b0bf55bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "389d4e9e8e8c082f1bbaf1a43d537aac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "28f6f07d39e8863fafc9b0edf69ac88c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "34d34fd722107ba4634677ceb765a66e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "b013564d869df2cfc39fb4af47b5ae96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "cd60007015d1a4a6a27e846cc26ac7e9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "32c8758399b365d41a2b5ac23aef83dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "2a814ed182c667021bc899daa15cc6ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "63742674351b2751c52581d4c8a8b80f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "7dde702f8705dbf9ace87d5003245be1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "1fe42ffa7b4087d39c2ba0e5e6374142"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "58d3c3345dad22bfd309cc84fcb49459"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "1e12ef3c54e7fc84932fd27690ecd547"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "4d15889e1a185a79b354622798f125f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "95fdd81701767a55c414baf0f29698f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "6632c9d170b162341b9815d8de40b9c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "3d3941d9a4770f17eacb8e608dcfe69a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "96bfdeedaf31b4a3726de1ad49aef490"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "cf28178c89f256fe612c81a84ed05af5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "1d6204dc93ae2bbd21fcddb8d4994e13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "85abeec328b4397abf75b91180f72a56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "1608de9d8c478bf7501bcdf675741fdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "b5ab34d2f7e002688ac3bf67c3d38ef6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "924420710c856e4dd22d6ea96eb07860"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "a4efb2a2dc6a4b6e28eb78c4e7814692"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "608047951a9f66364c8e05a49a58d1db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "ffaeba3cc30a1500f523f4c351748480"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "5de90c8f2ee6aec5281d7bbae8815292"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "11044d60e1c4979efbf8710a1549f171"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "bce757e5892e9444e79754c28be83f7c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "b7fe0fd7af344e70fa193154c451fb43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "487b42294ab1aff61a5679e835e91a6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "eccf30f7746ad3185311197ced46b5b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "5a62082b5290038826492b2a04a1d407"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "a4f84a7f82cafb0348c75dc23cba4c69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "be3fef5e33b9c587b9ef301fac75dc55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "af9df40f9bc327a6f328fe45d405d7cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "101233db6595cdc45678746b471487d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "d759e5b0490be0672522feaa1d5cfc86"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "390b5caf6cc07d5236a9d4c5850a4462"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "03cd36fcbc3124694adaf79fad5257b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "dea9683d069c78bbfffa5e620ecfd81e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "11a66fd4fc7571c5b6398236609b0229"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "423799751e2362a7c332d77f544e8e56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "4a466145886a254b8c273b204252782b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "3a1e629452818c8d9dbd575a5bbdab68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "6a3e144e5a4808e2601f86a40e6c2560"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "908233cb5f2cf71c1c61f04027695733"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "f0e2b9489e0424768b235fdb001ab996"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "588de59183d50bc5593a67846051a109"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "8aa28792d3d8c650b5aababa9a1353b6"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "060d3e25bc63282c1b45b9db0dd5c4a2"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "f519846f5a0f530bbb0fec8b67e04e2c"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "a9230537439da902ba97e018e23d3e4e"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "9d5fc6b137528798162f671514c33d4e"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "6b8a97c54d29a128457a910bbf0680d1"
  },
  {
    "url": "categories/index.html",
    "revision": "116d70ea9a3eaab80a5b28ae348d3aff"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "af7b89a980d12e95e2f947c7383052dd"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "458f6a4cd20f003ae5f68e0379a537a1"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "ab2dd7defe67587b0803babd93eed57b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "344584b50aac853a3268ccdabf5c9adc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "a3fcc93d6a6915bcee97393e783b0de7"
  },
  {
    "url": "categories/java/_books/springBoot/config/Cors.html",
    "revision": "4c3ad1c345ab4b5d093fd0a4168dc07f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "62e840b471cbc4d2c62f915792d92e73"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "18d638d467d1511f2f943848ccfb272b"
  },
  {
    "url": "categories/java/_books/springBoot/config/JSON.html",
    "revision": "0083ebc3eae2c583a6f4f520f63cb28d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "50ef11e362b002b2ae4bc32e7ec6fd72"
  },
  {
    "url": "categories/java/_books/springBoot/config/No_Banner.html",
    "revision": "d1754028e848c196a141571be2596cec"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "bbab9339cafff98d726540b028aae0d9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Result.html",
    "revision": "27d1a520592fc46d01864e1c3df4fd78"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "fb402514cf5f0cb0a397cd0dc9a5c111"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "0d4b6f6241a53363ccf11a83229660bd"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "24dc1f94f4272e83b7522c0abf41d6ac"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "790ac3ba3582c506d804a3a36b9bcc9c"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "147ba909bd1761b9da5bd257131e12e1"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "c79b4034ab1859f1c90e2f1c7e47bd98"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "bff483aacca07f175bb793cef19a4eda"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "ae20110950031c08ec8899811b1626a1"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "b22d5b63787862c3ce1745eaeed97620"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "5271cd6421e577a446b975da756595c5"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "4c1623962c559b3b68f64e09f4dd055e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7ecf4c85710e6cef27201e9bccac5a5f"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "7abad7d2639aa8459e7c842dba4521f2"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "ac208bc1c38a0951714ac295f8161fee"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "a4bc2ff0aeed58ad880bcfbef5c6660e"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "0553cc23af17090379e3a991afe63659"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "2384fd1da0b3b7e9a65df7954dd50883"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "d5a72988cad8089a763a3aa9834709cd"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "76fddab081f0190eab635780e5f6b80b"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "3dc3a400f3023b244fd72f5a1512c55e"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "dd298f58460960f8b2bd17dc1fc4d59d"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "68e65b8b0df21ebb5c8c8200a822ca26"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "6eebcfec706156e11f24d84ac94736f3"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "78e147815d573bb7ad2297aab5ab9773"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "fe0894ed49d9658b498925dcefb2331e"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "1a33df442f62c5d022a910cc682031a6"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "c36522e63f13aee62b35c3bc6f829bd0"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "5db12dc8d2f66707631e16e053aed4c6"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e002cdd797c4269a81d50d15a2986cbe"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "83333c5c6a91218ca57106d343905552"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "faa3473162152195cadb8985680a2350"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "e0f852682608e25cc5e57cc57fcb9042"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "e01762d2e0ee9d837a82e72c2c9c470e"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "116df8eefe1fddf768831cf0184f42ec"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "fc9e9c3f214b3898cd957f9825c4f98d"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "219d4cd4667a6c7b0b5f2479afe1b545"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "5384faa9e82c9ee533d3aa15323b4cd0"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "305e8f5bfb4bcc4b63ed299f17a462d4"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "9ea73374c7752c7b3e54e3a4c6d9f48d"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "3c4d70b5136917385ccce81e3091bd51"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "23fb3e0c65621fcd493566fefbefafc2"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "0a0b20a101a8a21800c808b1ec1b67ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c859ebfeb1d389e50e452c37a29f3f37"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "29170e77aae10fbd6610c73923e482c6"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "a6bc22ef87f5d58b014013609aa4a7a5"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "c13336bbd51a12f5cb2487d4cb1a90f3"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "c36e0a29c1d664fd7416e04635093193"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "b8746e048683454a1365ba18b9482256"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "06b59ff0fdd39df276d934a76d587215"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "3b7ebdffb3eb1a9bdeaaeee91247523e"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "9b6ee0876029ac9d514fe7b7c8bdbd4c"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "332923cf8bfe065ec761bde6e7be351a"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "581e5cb78ef8ccb53d231d9a1d00e400"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "3122fc1648d2635c753f5c78773ccbd9"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "c8a609a5bdbfc3fe7987f09cfeda6514"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "6d5dfe15570fc096d4bf399dc76d19e0"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "8e8f00f173ea6dcd97ee66fb6a59c728"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "8e6f420c1f71b4b8fc748c28bbabdb0e"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "59a9a3cde32ae5ce60e3819678c8b19f"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "42b09338bd141fe579d82f40e5f19dee"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "ebc35eb280837fe53107796bed872841"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "445e22198d73b1602fd4de71c93c6b1a"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "589198163941283d39b48f7602b18dcc"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "e4d57efa67f671f56612ab75bd9cf286"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "58332ba87d72c7cf92658ef912647485"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "6d398c6e9a56c0355ca8fca6be5e7652"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "0921bc607b23ebbb7a551b271455592b"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "9e322c18410bc86b396efcf288a550d3"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "cbad39db0859f71cdd5f816af8464ee8"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "5754b3cade4a0bb1144d6ab34df00818"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "0c23a2ed6d0f85f9dbe1be2b6dd1e73e"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "ded343bfe7e3052f547345f9eba813e8"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "8cc9f36e100e893f27c428b250758ebb"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "9451b73d797ebddf33e70734dc2f2f08"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "6b985db1149e9d10884fe0fa44e91ead"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "b22a709ae64e9ff90935bcaa92682228"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "9482d036a4cf8b92a82e45cd95c9ad8a"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "66f28e5316d063d5d681e321d611cb90"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "ed2c918740eb7c56622c7c7442f1dcbd"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "f2636f0158d1a632a84049534a23bf7b"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "dfe6ef4f26d0724325ce163b0f90b953"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "e56c4e928a39c94fa846036fad35f8d9"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "86db313ca8e5031908d68802c8f8bfe1"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "f15757b1307bc80eb30bb73a412ecc9e"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "d4004ac3096138036b98d1f65af255ee"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "a88b51f118c6e8a973af9de79ff4e6a3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "556f627e8188e92195d8d9be52d785ec"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "19bade0642bf96f8dc7ff727c2616f19"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "0fbc9564b49577e48e0e2aa6d71e79d7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "85284f1c5451596efc75b6803b6b1577"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c0df35319a3235c2584b56037ac1aaab"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "5e0f069be867298091d5e4be1cc68263"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "5ec44bd7f3e31a5846caf0b4ea5d7505"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "fe3a23b93821b196aeba9b16ff752860"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "4244e22bbf9d96d4b3e2512b1fbed999"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "08a6f038b736d851ed4249d1aba49a79"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "d782f5c5f41e1915a61fbc004d974843"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "5cbfaeb84c7352d9528400ea1d09f523"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "76eea4d68b9834fe0f310acf3deb3924"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "0b651a24dbe4df69303b3ec8b28d8108"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "91be04cbafe824f24df95b51206e5c02"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "b9bb971ce487fb833fe4b94ab5f079ea"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "223e0854781b40f421dfc6f421960048"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "90d0a2a91520b5ffeb7eb952ab5c7ddf"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "5f1709db5afa659fae056f9828a39e12"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "25975633f35e58d7283a6c4d31abd880"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "2f118a3aeb30429be7b64c9b2c7ea300"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "f4594280ad5e4a59645728eb3a240fc9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "9ec541f85d44de9ef8b5f0d7f9088c32"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "cfa53d38d6a3e66d7ae2f6f45ddc05e0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "427aa2cdf6b9e40b31c9ede9c45faa9d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "8531aac5786d04dde515c351bb1e4276"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "9b53ac40d6330c31fbabe424c22d3457"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "7c7c24839895850300e92b388eba7034"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "2a7d3265d4c7ba79f115f97e8522e750"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "823d7083f96669a12d6fbd569392d534"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "fcb8d7c507db57f7c663fee83fa9b0e0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "2d569768164652f27e58f5d7453f1f9e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "1b4e4a06c527174cde388d968cc00366"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "5c705b909da4bf8c6a02542dc89a76c0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "bb9163be77403bfab729e50b64fb29db"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "48a1e87e313ef9278198c8cd0e764689"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "7b3873915eb566a9f230a9dee06e3af9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "7a60134ef9796928763cf6adc1574437"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "0364dad3b3f64d076994cf073d864371"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "c58cd8f370cfa012ddc85414754bc31c"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "5087443c89af2ddd58200494d08105d4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "f2aa64eeae3621c649acfa19bdc8d985"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "88b234b926187a80a0ddeec899c1e897"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "059340ad3a4170abd5e536cd176372d6"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "f6480d87d87de9d9603b45caad36047f"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "bdcac8af6f28d6e9c1d071100c92a20c"
  },
  {
    "url": "categories/os/index.html",
    "revision": "e459b6043bd01603f6b3e873ea42a222"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "3fd003e4fff9d6052f3f5d6a2969f4d8"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "f9e8d69e9f75e849fc98cc80dbfdb82d"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "777109b72ce3604c7c63e50251505664"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "4c2c1c98bf0d5f115cada2fd82035757"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "f1bdcaa6ac2ed328446bc591d01b12a3"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "fc23754be49b648948eae2693f8a82c1"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "0c432057a3d7e3b85f5796d427655129"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "c95292aabdc77cd93b3483eacbf88e40"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "29bcff4a9300b7f24257e5996a00a127"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "21d0eb88dea0a18ab7be36373f22a620"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "a57e93f41b40ee16e1381b7974b119e5"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "4f2eef5c4d019c0f35bfb31b3e0eab1b"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "8eb94bff5ebd07aef4480ea25c576707"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "0f4dbc39dbe533f01c19ead87bb9a63b"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "7a89797abce756ac3f6cf50627558d64"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "b9d9a19c064ed45261429b0abd50931d"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "5f870089fc3552843cfef97779beff06"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "0ba949e08eae287fd83098124cb097dc"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "90d6e9106972f8deedf69d7177aac410"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "955f560ae61594a36d7ebc361cb1d490"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "db4718928e3dce632a5fad996e964e79"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "415ad6a8a33100bdce4a6a48bb73c149"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "f416007bffaeacea82580efdef82c12a"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "4ed86741c65c4c99c5093ef773a0861b"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "7b3971cb7d59b0e56cd85005bf534a80"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "b48b8cd65f4b45fd6f92d42511209527"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "47cf2c3b4292ac15811483b564aa4aff"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "2cceee2bb6bafca7fd25d025f6982628"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "a29acd44ae4405f53a5ca2459470c801"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "dcfdd9c3cc3c923b67b3ad135b2fb6bf"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "388779b010caebbb02bd29731dfb5b9c"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "8e49ebbdda55ee3a5a3f58cde7239fa3"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "886c65d0c7823b6b95bf0326aa350fd7"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "0e2546973cc691a4af814d0196df0e57"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "4bec285fe44f1230c24672a18967ac36"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "a36341a8231b9aa1d75591d926cfd760"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "5467195422cd62cb5ea589043b03ddc1"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "3ff6e181cf76e584764d076531a2714b"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "6b5652a7ef8b8a9dc4b2c587a27ff62e"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "bbc4cae00ffbc67b01a4f2a5f0b0ad1a"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "f86791e64673034bff5426a1013b13cc"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "51e27f3044e070efd615835109faeb7a"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "e2f5b6bb5a702616cba10c5ab9a9cb45"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "3d18efed63d913f8a1508c4d760a5128"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "aedf9b030f627eed57bbc72ca43c0f86"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "709b92993b9e659e30404e3234209d80"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "32f69942d2aa1d57052c6ba046d86e8a"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "f7843256b23f162912179bc17f053594"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "378b82618bdc88681f66ab9ae33e104d"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "db52339390b2f4947c8b5cab02e5b316"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "ddc3fc8f02db5c40ef1aa2d33bd10d72"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "5656c5c48e9be003c2b2ab32d0ba2893"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "56cf50fa4596d9ecb40e766a66437a21"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "b4073128304f3ee98e72513ecdb389f6"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "12517ccac7b5534818f1254d282af486"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "35ea8fc0769fab316b06d2ebe47a1980"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "ac1d96e1e0eb1c3bd3bd4a1ae971b1f9"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "0a5dc00a5a4ca7e7edea2a194f03099f"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "726d591ef4b40f0b3e4b061b30142a33"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "bb4a29fa0f4b0822ac356a58ff7bcee5"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "6d1b0033a894ec91731f1865c38df556"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "1fe9fe0ea223fce1fe9d6c0fdd22d195"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "54e609fb63abfcac2620548835dc3d9e"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "a8da24d94ef836e03c4ad086276837e8"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "3035b7364a1c323a1145aebecba63037"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "aeab4d808bed936849428d6746c0612f"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "6dcec49d5c86cc814a90d50df332ac8c"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "deb92eba88fd8a64f4d108923fc03be6"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "221f65af2e97f96370611ab0f6b8e55b"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "f6363e9faee01e74b84083f29594e023"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "0c163e6362f06bc1ba6b5c605387dda2"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "bbd4f455b0fa22dbbfdfbe9922b8e24b"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b2d687453b02ec8bcb561f41c15cbe87"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "46c4ae488cf8a34f7bb7037eda52cbd1"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "4c1422d3da9edd961d012b5fa76bb9f4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "952e5871c34d97fd22f5dedc60c7e87a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "17596528bffdee4928f824fe7cf7cb98"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "44ca533b49e1994ab683c46aba7d16bc"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "849491e7eae7b259025e93814997067e"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "8e57a74520576bccfab078450c0b99c1"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "d73b71736d5dde46811e6aa6bd702f90"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "3f7f3c357e6624fe032090cf860cc99a"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "cb9963640cf2f97e22f4d4d07d25297b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "b69961949c42651f2c5e5ab96d4c92c2"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "eeb8aba807034bdcdf08704ae95bcc73"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "896ffc58f40aaa158c3c7073f56ef514"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "665419c1888569ad882d0c32c356a52b"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "91449ed5f474e0cc960920f58af44bbb"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "5d833125f6d2749e747abebbcd269836"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "f1d84b5ddf3eaa6f6779b3768bdaf129"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "0b30ca7494b8259ec62f45a7f636d278"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "944f6be614e42e9f0cbe6ceb3d475267"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "a8a529f1b87e1c059305ee4066122021"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "9cfb963c2a73cce9dcc571248dbe44aa"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "f41a6215c245a9e53f79eaae5803e8dd"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "1dbc098c067cd25f578f7d42c7cdddce"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "edf2260fbf57673c050a504aba3d5749"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "37853eef63e6e5336f03a8eb5d568d76"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "e1a094564fa616ac649ddc839929607b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "d3e71531cbd960860d904ec22bd04346"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "d2d3cc16a259bedb6ffbe660dbde10b7"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "c941a027eb7dcee30c8bfe4b46ba087b"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "ce5e4c0aca4330053b5aeceef10c9247"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "be7296e2f550ecad100aa00bf2a5db8c"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "39eadc688f77a288a11528c7aa409aba"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "add01ca1f843311f022d0fbe9de8aa33"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "2f6f6aa8347ca91a4fd2ae18148f9689"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "f4503b5985963885dccac4541055b32e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "45569df0bc07650a6fcb0044afc683cf"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "0cf4e524ef765a075d380acf67772744"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "549061ac0e368ed856380c2d6b671ad2"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "e2bcd2edaf48f75f302c1702e8f7362f"
  },
  {
    "url": "categories/php/index.html",
    "revision": "35c8ff46b51597e5e45f8a6b01ebac2b"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "0af51d779f7e825acbb1009e86bb77e7"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "4dee9121e7006c53d4f7c530ae2ed5f8"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "adf2ce94127233136e07aa6512c8efe9"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "56de005f8df20b35e9a8f3432c2ad773"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "9eaf7f8cd517fec40892c72afcd1adc6"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "521bd5d9d2bf27ab8efa4479ea5aeda7"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "3c5e1d171ade5c9779960bf5a119fd83"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "c37d481cbfc54b934c3a59ccff49a766"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "9c23068678f0061b649bf4580d438958"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "f6a09952ee3f27d9256fa84f61326901"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "6f139ee2e45a95f1e58aaefc5b373fca"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "e47918f3b6e73e078f6bc377daf698d2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "215173c277e27156f191961ad4188531"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "57d7533a7870220cb12137bd58369d2d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "c3079f63f3d56f3fe8252c7a80c3a2ec"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "b99b96bfe7c70bc358bf300b586eb794"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "f5cdd2e36189fc99b1d2552b004cd92e"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "65c4644e5229e87e2813ea5b4192bde4"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "ad940d3cd375c1de168054097dc8a807"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "e44b16a31db7fb959a8d8ca6d8d42843"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "07ad40fe3c27c0a186550bcde0332110"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "740c0320e083b688a78ed0c90dcbaf53"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "59087b9bd85bf325562762746fcfa3d6"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "621ee8073c88871a625f069340601957"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "e4e649d46d72f0a76814b5a74b529592"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "917dc6c3f91ebf471627cf8be26edeb1"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "8f6074dd7f1283313490d78dd8b50bb6"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "3e250f659d167c9038e8470ddd681376"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "e85413d39c58dd101cc8cd583453ee3b"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "469578103d885b6d10230eace7d6cb26"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "2609609051c81ef3354259d5e73980bb"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "a821ab2310a215b59598bc6329165748"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "3fbf2ceb929a81a50edd53a848a5f85e"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "4d6e1f2c50bd22adf7485554a87135a5"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "ff41deeae70902e283c383cfe7ab0ca1"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "65f2618f9ff5a8824b7ce89fe1f27043"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "48eaa6cc6992785e1be3bdd5412de51c"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "d5dd5536a254a1613b7493a2661d38da"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "a13ce24461778d279fe1c50fcba1b79c"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "5cbe410443fde5ebf7edc080216187b8"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "a23a00a8daffce6039333800685e32b4"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "bc813751dc651d71ef60a7cce0a12a9a"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "5d7b58276439ac3480c5b102e888d1af"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "809c5501be1d278789b20d211879c549"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "8486cf1844ea100428426a1443886afc"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "6ff128486e7b0792ef626d0339da7bc6"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "549aa00aa1f458f525916a2df3a8b329"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "4acbba0cd670a32f2dfbb7a5bde91eaf"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "2d3b3d268cf5f392c326d4d8f94a22f4"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "abd919c2d426a1eb7c0667dcd6fa9038"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "b7b1c28fac85a7ccf8d84134035e8a30"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "282e33d58e40a8374544b9de15e8fc3d"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "c9644cdabbed626a9f82dec0075cf0e9"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "81797be189b10fb29b37034ffa61f36b"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "77f776b328f397fa844ba764f8970853"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "a56062857fa1304a24d7636e078d1d38"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "a965d178220f91cf7517eadbb138f60e"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "2f9974a355a68428b63f7a0c504cb819"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "186b95a0a91d2392a8b0a288423241bb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "da08a33c0b8fd36f6bb6e2afb54ef18d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "79acc5f6e786d3ba7aa791e4779f2ce3"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "e8a333c28a5e81181f6c2c6dd148d234"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "1cb955520b449ced6fc9280831679cb3"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "8c2bf6d9498ade47e2878881dbf93956"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "514f7b79a98f62133adc5f51b8739881"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "25a4d768a1459891410235fd978dc574"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "3be39d715902ffca600d9801a60d49e7"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "eaabdd1b3b29f1ba0fbccba9ccecd7e9"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "323590daf7a79e33b6bfa590d728ed2b"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "a90ba81ccb9a51c46be1a7f9fb5e42bf"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "c9f57c492afafb7025606fc2343a454d"
  },
  {
    "url": "categories/system/index.html",
    "revision": "c376a01be929c1ac558277b968db60ea"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "195bd9e85511b74ce1f4db1175d2d6f1"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "e63758b3530eefef104bd4a40d1b25c9"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "921fb93892c59f9690fb37ba2116a743"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "2aad34eed12dd0c92271be6ac37ccfb8"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "961764fac75fafec65b5d2fce96c3d99"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "48ddbe36a2211c41721342e004230932"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "f68c9a51f8f7a81b852410023130f3bf"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "df4516c028e6145c963fcc2f37fe47e2"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "2c0735c8b7075dc34bc6cb736ec988d5"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "b03eece5300227609dbd4ecca9c35ebc"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "4970cdb8295bccdee7df9ebb3e743dca"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "c772555f5e00503f43c4d72ec0ac8aa6"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "c2b657745167e7ac3827694573eb262b"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "2f6fb0b9dd891fbd9436cc58c5e60dfb"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "2421578dbd6cd4e91804df6e60e0fa9d"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "bbd51217a7fe2f406b4f3d30529ceefc"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "26f602b21d81c987c1e5d6629954866c"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "6ca5db5a22f6a3641df8ea63ee767e16"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "71c16f77b3230096e87ef2494a6ba46f"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "c30782695fe5cc79956abe0147f26b1b"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "c8b7364bcda7c09b951983cabc4aa943"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "7864c9e118f0b50136642a746e94c2b0"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "41f0f3617e034d494109510d8f9b40f4"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "446c954c374fb4c1fe2964152be3b69a"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "c54f2086343844a3b1cfe7b764ac582f"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "e53307e90ac7d3e81dff099453cf8829"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "946ae611812d06b01206541eea7fa193"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "c205e42a3b0ac14209a3530804b0975e"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "ee31a9cb4e24e5087681a8cbebf32c9b"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "3eb4a21b0db9ea28373ecb904114b756"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "1937ead1f051bd0d4378122a3987b119"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "a0524e3d492c0639350b4413437dc9cd"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "dfb03ad954bfda107199c198b98d4903"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "ec4357fc5ace1d324775e8ea8710df2c"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "a93abe0c3e346f88f1aa3c6a25184f3c"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "e2d68d129e6beb5f28b68597e163efca"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "5a51df2c0c4abd2a593217e14a3c67ef"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "c5e4692bb4a07462c3d5411ebf18b2f2"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "2f904d6b34a40c7e98206a955c62d4ec"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "0dd45fae411609b089417409f237e1c1"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "eb85c87f1a8ac300e4cb5dccd79d7b21"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "93a1ddd92fa100fa4fe1759263c00352"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "959da4cb6bf6d548456c902d81e30852"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "cba0c8cb0c03ab6c1e9e4a4ddcfe9657"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "14ac07d7ebfb1751c877d16c6fc1f7e2"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "a4ae0577147e56409db564e04c4f9b4c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "1d5e63a2e34b98690cc7a7df14b3fad9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "eacde4d24b0e07cff4232c1a28138c03"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "2b545935767453aaabb8847fa4d5ccd5"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "af05c9c720744b938def927bc7db8dcb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "21abb0ebf7239ea5f3f4e33fc83fe3db"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "3447d863774af6aca004ae91cdc5ef3a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "eb3dcdaaecf45e56e5a14bc9068f1502"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "b39f7dda6a9ba180aaccb3808a5561f7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "b67541652b3bbf5367a7059b6171b050"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "ce502d4ab8ab78b87727c55a28f4e290"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "721636172857712e2f418f3b22f962df"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "530887ba80f84c0ff27c8d8a53a43b80"
  },
  {
    "url": "favorite/index.html",
    "revision": "26277dada17693f1432fd9b306ba592b"
  },
  {
    "url": "index.html",
    "revision": "4148bb57e31122130f5f397fee89c6ab"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "eaa8b2a3f442a8414fa39d625a4f0ad9"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "dbcaf6b11403cc1c80bf7e0332673819"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "1ece8b1b36d8aff24676d229d7f68de7"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "aeffb716d673125b49062db11d031c97"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "8870600ef7f02e15f64edcd29cb4f99a"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "f61728ab5ea97f8efccdc2aa30c6581a"
  },
  {
    "url": "note/index.html",
    "revision": "9c68a098a2ff4ae9bc76362180b18f35"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "ff3f291c141a83f39aae1481eacfcb72"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "1b51311e5a07d2603205e6ac4663c258"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "d36d23cae8579cd7ff483d53bdf6501b"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "0c3314bc6bf1a1803055aa90fc4fe282"
  },
  {
    "url": "share/index.html",
    "revision": "f136e3ae069012c650f09bac246de6c3"
  },
  {
    "url": "single/about_me.html",
    "revision": "58fdbe1a2ef9960f7278194cb447790a"
  },
  {
    "url": "single/all_article.html",
    "revision": "3c4b4569c1d0b5733f3e96a0b1811e2b"
  },
  {
    "url": "single/welcome.html",
    "revision": "6ba79e8b7d4a9cf13e65aa2624730745"
  },
  {
    "url": "test/index.html",
    "revision": "1c6e684fdc4cab1b6a0e161cce8d021d"
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
