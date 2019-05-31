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
    "revision": "0ab0f895dc031872211401bf7a8d4b5b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "1e8c9cf7c57be7aaf63890b6ea2ed3c3"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "f4db3fb053d543a9469736d24e8c6c65"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "6c7a8441924e3b3a8a2b84c0328c4b34"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "1b147052f9a806604fe42a675a74cc4b"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "e61455e666a8d04a1c2c7748a85c20aa"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "02707deb5748fc25d930ec065e11591b"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "4ae7b2e378f8eea7a90c6fa527446abf"
  },
  {
    "url": "articles/index.html",
    "revision": "086b313519c2ed0624b947bff64a10eb"
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
    "url": "assets/js/1.eff2f4d0.js",
    "revision": "fa142dd07cb6e917752f3089e697aab8"
  },
  {
    "url": "assets/js/10.b6ee5adc.js",
    "revision": "8265a15d25ec034629ed30e149fec52f"
  },
  {
    "url": "assets/js/11.05e142d7.js",
    "revision": "446b613415071b1b6171f6d034bcf336"
  },
  {
    "url": "assets/js/12.b20dec8a.js",
    "revision": "cfc31c3501187fa15e774497a30e4838"
  },
  {
    "url": "assets/js/13.8bd03a91.js",
    "revision": "ed72e1384b606189270046134f8f3464"
  },
  {
    "url": "assets/js/14.62c8879e.js",
    "revision": "5ee658fc9bff7d782ea577ffd4b7c1da"
  },
  {
    "url": "assets/js/15.eb1ac8aa.js",
    "revision": "bcb31ccd0e3fcf8dff0e88b3bd36bef7"
  },
  {
    "url": "assets/js/2.7201b0da.js",
    "revision": "958052b484618e24e7c659dbf840eeea"
  },
  {
    "url": "assets/js/5.51d0abde.js",
    "revision": "faeaea983df04868b4e76b2f4acb7b69"
  },
  {
    "url": "assets/js/6.3e769c98.js",
    "revision": "b18ca755990bc38a01779f243e55cf09"
  },
  {
    "url": "assets/js/7.0ad930a0.js",
    "revision": "53d50ecb9bd74f88a3702f6d66311b70"
  },
  {
    "url": "assets/js/8.658548d3.js",
    "revision": "254d9dfbd20548e410b00e01f5ee7380"
  },
  {
    "url": "assets/js/9.1a59cf9a.js",
    "revision": "c8700ab58b58847e681c465b39eeff30"
  },
  {
    "url": "assets/js/vendors~docsearch.6123628a.js",
    "revision": "8f3cf586c78c45216b0f59c51b117db9"
  },
  {
    "url": "blog/index.html",
    "revision": "774de662dd76bfade01506ca55026bdc"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "87a7ba1b3a9dda0939722958e9f84bd2"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "95e8422a0baa98bb10c93578c2cf7305"
  },
  {
    "url": "books/index.html",
    "revision": "2f75190db0c62b566cf77ad85da926d0"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "cb8d861c8911206cddff15fea80826af"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "1d953d966001b73ca5616f9da3699cc3"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "36ec12292102dd0608c081120c07cabd"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "e14f187f6208c7ecd1ec9531349dd8c1"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "8d5bf490a6f9b935b1f224798d8661f6"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "01aea55e8212208afaee55f610053fd3"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "a7e916b2f69694f1c23995afc798e439"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "929917cb9b9ae4ddc98d6f840ea3441a"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "900de3627c1d1e1003f8b3d19f02f101"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "07e14446e24e2cb2b5f6f538a4ad7e29"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "2b23cece95a26c8ef97e64ca83445811"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "c24a990e506e93299054b70e3d2caebf"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "5c124bd1e014d9879122eccdd807474d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "8b01f80d94dd183fab8df02ac34cf066"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "fd9dfaaa9fa669a6ef5c286666f9b84f"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "1618b1e8db233865e90876b89d61771a"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "a610dc6098064323b4e3f9a2a7cce5bd"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "f64c6fb632e62a785a70d6d845d337a4"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "4936c75b2b607570b3195480f01995ed"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "a649e0cb1c24a8f6c7ee892bd1137b3e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "06931d9b51ade496d4477747b5e73c84"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "3d9bf0fedc9d6cdfb8bcc465a46bf5f3"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "f4273240b658de2a062574f7e4f6ecde"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "c351555e47732df7dff52cccba347a04"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "d8f0853751e3a1a1eec77650af6996a8"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "189a1b41dc22f692f53e22c6503636f5"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "ca2d4d73ab75600cfb79fb4a1fda6d31"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "58882d0eeb794965a74e8c662b86b989"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "fd3828f7579b0574ab61e9b5d98f8fdc"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "3132aa4c01910c4c656cd2f4e840499f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "0ee2d9a7c1ea1f9de57eaeab1865595a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "f04dc92d9cde0ec53a59ca10a2b41334"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f220fe768d7e5e1663031674820840e8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "d306b9d79c8c846c9bdc7f18047a37b2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "b6470560fe8f98f3209389133b1dd80d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "fc9f9f1804da776a411c61863a9bac59"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "481c9f91c8507991d6bbd3074d48dc92"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "bf32f3d283155fbc4abb63089f1ea469"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "6b3bedf86047638fd9818eafb8aae493"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "937ca1849e7dca706daa3764374c6e29"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "6d838193f95259a900d8badb36d0a3f9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "344e5a14e4f350a7687b6e4db42baa70"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "9afca084a9ac95f155adb56b79ea5539"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "4ce849bdb311d80defb061c0970ea365"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "024072bd4b228a0ebe1c198c75b393d2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "cc03f0b829508c354c53b266fddf64a9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "02e8517b3d61144013c1b8d88d7a58a1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "730f1198ae306841fd305f5c0c4effc6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "e94313afe2dc2e304316e5855b9658b7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "990c39f2e05711f4224497d34389f377"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "3d24bb1348cc21652f155f1b98a48ba0"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "981c9936f93b702eb5c67949c65f6c7e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "20e1322bc637f95d95f5be9cb2d37da8"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "c1224cd4b201e2414713135a3b919e11"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "09b82d1e80958c6df304ea10cb026a15"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "e1c662f8d11bfa595b31527be1373345"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "4885a80ca65cf6f4e98ba032a3bfab68"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "6ae6b50b4acba7b40683e0e965216a46"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "e1273e8e5a1651b8bcb8f0b79b675455"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "20aa5d5f80ba7003692c44770e0dfffb"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "f0ed4d585ba1275454fe919fc21c80d9"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "823cd4f4744437d053d55879d7924045"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "b7d6d4b635508a1dd2e579f11e63b772"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "7f1ded5a3f2921c3c1eb7e27f770230e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "89620d357480c4fe4419b58906c9a9e6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "2e95dce8114d27f23fa92f73556f3060"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "576980628b119a6333552b6de2323d24"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "07369570c024167967919788bc997a36"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "39e7d5ea29dcf87c8bc9b809093761a8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "b9ea6c48512c8cf73d59f4c7023c8a68"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "8fcc674ae24781a4d1a34d8fd8c3cc0a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "ba3322c9e2b3d8402b04d9b3d96bb05e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "fcb9f59caa73b2addf33846ec8cc55f0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "fceefd4606b6c61c008b06b758b5d51c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "fd157d21cb0a028f214be3b8200eaf2d"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "11d217f3527ea6575dc5162a42d6fa45"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "8bb06bb6179293df487f0e5b4cec8a75"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "06dc2c7c579f165b7dbc655d70ca8853"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "89fc3607c5530c9ee7133db9308de550"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "e72ced6c9718b34b560c27cdff879a8e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "016468dbd1b8c64a567b617a90fa632b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "7cbd0d1026f8144ba4517a698a1eba46"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "60d0befc8e4d887884a3758d7e1842bb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "572c37fc3dcc80594f9aa72004e81d35"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "8a80cdbd958405d8ad1571d63ff246ac"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "a046c78ebb7658fbfa3a6197f09ed0fe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "c7f723663659443b4a29b3e5d45ca633"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "c4d70aad406130aeb2e675a0ced4f4a9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "1c9c60df1e603b2352f743c0f2b6d225"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "4be872d9d04e83445194d7d77067b588"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "713994db5611bba0e7fd2e3ef8e15132"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "3befdccd56a58c56800eab38b63e2bac"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "9a6a4120d09a5e1622db4c9165539918"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "b00043695a7130cf6812bee3f6725aef"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "cfedb8dae7d3138be614f3c70acda55c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "98e6c9e214ca6e0453fb3c181f1c1b33"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "a471715c2e1e2270843b28e17bb523ae"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "e2d73dc35436dfdf91f5bd0dcedc60f0"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "74b1b8e4c55f3f6f420d4864ba2777fe"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "3bf74169f44081659bf5c845f5c1611a"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "92efb8b8b387eccd9c5982248e2bdd22"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "afb172c3492adac50340f598a3a80aa4"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "fd3df43d168b7eb9369c591cb73f1daa"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "bd64693173b50d69cbca4a97f95cf709"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ccdb8fd7414c947878be2e9bcc52eb61"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "2de089b41c1cce6d2dfa24dec3b92364"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "40499a0a8f418a4822977db1a6273ab5"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "9e7f281f85cd539b1a77f6e0a39e7a6e"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "5988ea1719540727737f937b17cc1285"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "6ff678f6c7e8209a7c15a6042eab0c82"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "f0d31e9c55d654a2918b6f5df5b926ec"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "0862c9499163f06b9ba51d595ae0fc4c"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "eb8ee9cb3a8bf7b00ca5fc6dd2474d91"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "29f3627f8d953de01c67afdf4625e5d3"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "366d56df212c35374054b5938a5ec5c5"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "475a46da4cf7bd95b4dfa544022dfc85"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "8c2a7ecbb2469afe588937c4fdb4ad72"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "00998c9543f8d7abe534e68a96c2d76e"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "e056d9dbeb56c19049e1d50ce685f054"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "7e6773e66e65b538255becdb87941ea1"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "7334561a6dae6e94eec2b7e4a922b19b"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "7f6929a6b456021220eb6fdaf866b758"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "6f10f1cd2b2b0c6bea36e41b997db069"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "4d08cab6bc82f6835a4babe9fba5a73c"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "eea989e4f5d32f7ec9ece1bfd3d0250b"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "65923c52737b302aba9ad12b3570ae1a"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "608d97aa78953c2cccd50b0a4bec9902"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "1d0a387166d2f3ba6da4f0368bbd7da3"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "6f5b362269626d3641b36c89e584fbee"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "3d1a8b0b21d21eebb2a380b471a43b16"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "23ec84e1a7f04c7ce66c863161a21870"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "0f977da4b670a425ae92af44c19be4b4"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "fd4d3bb447dc170edc6eb8df6d127b13"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "14785a713467a14036ea86a8fe2864dc"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "d7189aeb3fef7668586f64d0fe67ba63"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "f7bb34e776833dfae70b85b91ccaa4d3"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "d3c578c12166239eadb02470f2108024"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "84025cbd783574dbe2d9a6061f32e40c"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "119af6da25740f69cda185a9ca9fd2dd"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "042ac553bd3462541dc94e6bf18c5a4f"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "be163a42974955ed236fe6849ce7a49f"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "5f2908b53b888443181d1a9040a0c70d"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "445078ba6b08160cfc82ffc26d81d125"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "0304bb17a106a2d6201895e424c7b49e"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "830bc7e81437eff58c00325975d69e6a"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "ffc40e1bf72e5e443d80ccfe68bfa1c2"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "9baacd415d52594c808e3327bc3beaa1"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "dabb7ca9227b92eefff90f50e4ff12d4"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "ddb33c3a1d0938edc08dc0f04d8903c5"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "cc699aa66eedc381795051a8325681a8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b8fb9d755ae2f4b76ae0ac766dd1b4b2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "16640fd62f0609c7ece724e58e53a325"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "fd37758ae4edf5bc3f97a206d3b51ded"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "c3ec34ef5dbe7b7f2b8578aaaefdc0fd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "45dbf0ddff57c75514d84278c6746900"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "90642279fe302db65b7b3979bd98880a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "06b453e95de6d626d34ddecaf08732c8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "6b7d2ad4ba10f77897e5eb8c29ff0b46"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "571c18a5580041701f89cca55912d099"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "16d04d6e5655588f64a2280471acd51e"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "2b793c671828ba6140a1ae1062c593ff"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "70b2e7f52b02ca0fe50083cd8e883cad"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "4897618ad3ab3fd118ad59e30253496e"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "c61f4b707037e374b1d0d591ead9ece3"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "cdd6250ff30885a771e65d3c9c0a9c70"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "d1e5257ad7c6e3012a7477bb84046a9c"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "f17b381436ea76e9c263517dff511d82"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "8243f8ee102a18aa9a831730804442f3"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "a7e098313431822c82fce4cca3d64146"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "c126f686bb5c8aaf7ff6e99e59ac8efd"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "6b7bf09d9dd6e436a0ae1aae009ead62"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "ca7cf1d501e55bd45b06ff4b632f2e35"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "8e26f68bcf35a21585124c8ebb9ce585"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "1ec2b86fa759ccb56559facc9a9067e9"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "a6a6c55f0d919ed0bddfb11c31a9b83b"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "020476894f5f6785ff746172cf1c31be"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "22a0888a75542e1977f27ee352408f2f"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "d5902f69dcb7120373c07234d7b85589"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "db2d0dbb6ba3ce6bebf648cfbd6055d4"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "5f5e2e7969efa00233bf308d77c27c82"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "bd268081dddc080cc9886c6ac8455fb8"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "e0eab0a3fcc06d86335c7fdd2402d93b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "9197ea1f3ca02eef271a18f3493ee99c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "bdda4e080c9c2a98d7f06f68a1b1d3ea"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "667196c01600a61efae556b1bba9531a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "4ccb7f66dcab60874a6c29c8c4270c1e"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "b81dd1cbb4429d8c65601413bf851568"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "e643de2524cfdf01c854831ef548185d"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "8270645a84fe904aa6a3f06b878d8f5e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "927143490404c3e4ecaf8bc39d460c9c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "20f8a0afa740647b4c49e71d5b381cd2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "62beeaf356edde938d05ff0a42ab74a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "539b62de2ca99cdcb786c55dc0aa9de8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "d1c6bea04096331d786ccf5f7837c3bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "da302cefc113f804e0baa8de50562ce2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "28bceb2533cc49c5a5aaff433caebc1b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "88ca7ea795a3c2274830c95161a8fbde"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "38532e74bef1d7263107d2146efcd183"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "87a91cfb2f881fb3708b1d44b8ac0562"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "aeb848813dddd36f020b860a2f9c892c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "342a6b9e504699fb8f1bfa7b2efee35e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "a63420b21cfbf36aa19727cefa130db4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "e8e5174cc40e3b8cd445030c90bf54ee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "c0bc6cfff00b3925310033eb90cfb582"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "6b90ddfa75f61046112070c486a477eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "0450f100f69cf5c29879e732e8427a41"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "bc9e60280deac64d9cdbea6ac83445ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "349cacb78514d1b49ba3ac4bd5000fe6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "fed2c2f22ed6ae5d22d17e8ba0da9bc1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "d81e90a33f88a4a1e81914ab610f7a49"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "ff803a8bb0c1655e07a2f5c527199801"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "af9c829573082e231d71bf4448f66f02"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "0fb4f82d44dba338ff679b61658a0880"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "e3ffab6e00c6a5cdf9e5d23d0f0b29c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "3e982075643eff4de591808ff7b23053"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "96567d219649ac38ae6424624ddf1762"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "302c816e0d8f82d7440594f74043ba8d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "47be682e17a55bdd68f07bf068ae1188"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "f049c45af77cca2709dc492a61c5a604"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "007245e0e52770b07f187d87e5ecc93d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "da1fb84b400133ac360d2c74945fa139"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "f7478143b6e8ee8220a14c0dc1ba97fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "d9bf3a63a9a2dd11181409dc16a14bcb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "234f7f1c024637bdf83e0d407eaf9412"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "bcb0da00e9d549eff6ed611144648048"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "5d92ebba5a9dd44f21ded97ce08e708e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "08ee5a1cb098a829b765d5d90f75c919"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "30c557bd0a6becaff57883543d745cb1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "ff1cc911d953345260e97898d43cf299"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "93e4f39ec8bb73a990a90b42d275fec7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "0bcd3454ee9963fca743e50698332b12"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "1b262c19fb7239f30afdf9806e26a9d5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "34328db0ed3dabe729b2ba4e1a0046ce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "c9065a3a270aabd59f2c5e9ed4c08fb1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "540c63a99e55f54bf8222cd563743172"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "678d01d9026d47cac3c392d5bb1d1d70"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "bbb5239ee524f65b3383d451e32d6287"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "ca7ff5871bee72d8c7c76e6a0360d287"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "49eb27ec40d20690b1c0e9eaaf1213ff"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "5bcc51dcfda6dbab7e8d84043af44afd"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "0c9b9f53f3c58a0024283dc0d6d223cd"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "38781f5f45248661709c112837ba6011"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "8b221fd768e1034f8189ff02d350fa37"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "667aa23d4376194db8ee1fc9ba5c7596"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "5afd9dbf21ecfe72a9902d5d5d65d9f5"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "096dda9131d830ad927b9264fc909506"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "1b68191b4abbf6f0e76994b7bd6ce37c"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "1c1278ddbc16be0681885e23c5f40a72"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "a3ad4134504232bfcdc6e9b0c1d669a5"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "e6c1e952bde74161039881f9c78fb240"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "49cc5bf1519373f3bccd2f4a4824f261"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4f0ef0aac5ddd855f71472dc688f3b4d"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "94871077a8249a46e2d38b7ba5f1657a"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "b3e7a91a7dac7079d98d7fe3ad48a7e9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "754e20850e6e31247424c76dee1b3e44"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "667820f1be96824789bade25983fe73a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "ba01d6aa0230d2df4fed669cdea74de8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "0059a876e34ced59f5c6ddecc3669500"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "221bb8861c58f798fe5d121709a30d09"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "2a67a9fc57bf5c22f091258fe9542775"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "90b4c2a8eb52ba5fb0be908435532cf3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "c77234a593bc4702cc667dfb244c31d0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "37173e9194eaba6972462a6dc87061d8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "f543d4a0ac339b4b86988fdfd2710081"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "c5ae459a57297ed8da3586358ee2a61a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "fb6ba7e45b30332c967ce4d734bef42e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "26f4c7b8983556f3f909727bde145104"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "fba76970e90b118b18259ffbb360e8ca"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "68896881963f8631b75879e2ec58804a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "22e61e51fdecd5fffb07156f957cb23e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "217096ddc29e3da3f65ef195a153b874"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "8f58df7bf98aad8a4af55dc834e98bb5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "f00b3b87b1c46048305664d08001ba92"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "c51251e3dac26cbbb9b6aae9485a837a"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "113e669b15ba5cb020714e9e92b53e41"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "128c6c23433c0695b766a3fbda8e368b"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "b904aa9fa561bef858ce3ddfd52c66f4"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "dac7623a3193303878912c9a1621272a"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "f6a89edd9a1df8fa601531246f55f8cd"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "b01c49e2c780819055c99b6dde86a55d"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "861545ddd88b3143813f9c6ad1ec5ad1"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "8cdb1abbe86a849a3a6265fa5128b546"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "a04569b3924cb0477539dbcdc0509db2"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "e3af079387f7dc90b99a729eea6425d1"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "f5084d24edad77396b73c2b80d9d93d6"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "194c8506273b28a35922850442c927a3"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "4bbc4e04a9d1d22d9d1e83dd3b7eacc2"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "32767ba198c2f55f4be59ea30ae0cccc"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "8090e355c24d4378bea301e5a5a563f9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "95d414f5617577892e04f8fbf1c3a196"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "449d0e13a6389df0dd370484f7f0fa7d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "098550548d54a1769327d1e9e60bdd6f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "1e2cbcedda75300f35ed6d315e0d5d3b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "711ba8ba46b653816a59059859c52da0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "c56a60a22044c1c7d633fe92b9001045"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "01c16887d84755a6704a70c965b2f15b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "5117d1add03af723df6bf49a40d9c963"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "7128e2b4b4983bd5b284398d1c10264e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "84fb0d997a1e48cb1a41dbbec8bd9865"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "a8b76d48f3acb22799845fa7c23c1ebd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "b5ee4110056bba62c97adc5f4a0efa82"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "705148dacf7fd3457f76d0a929d634fd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "15de7b3f9f098fc51c78d7aa5c0a87d7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "918c248d4f4565f6c5bd4556e1459c5d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "0f8577406e370d9ff8bfccb8f09fdc69"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "6c345d9bdc1135f390e0daa3c70fbbee"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "08a56a48156eb58c09e409968dfaae4c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "3f10b586375e7a030f2a42dc7be466e7"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "92aa49c5730c7f9e6a08dff33320a624"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "8496d3cafbdbde7b6e21ada53e4375c6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "dc8579932260ca00584708abc5c17eac"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "fa56437e89a0faaceadaf311ed22bf60"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "79703cd59b7e1e63cb6c0c0586b7fcc7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "36b64df9a1c3107218d9fb42a2e14b9f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "a441ec05c35e923dd8a99629de9efb81"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "c7f38e35a341b7aefabd545cefc80298"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "3b9faf056151a3bedcafacec4dab47eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "ce53a8223e01a9b93d0974ff31120f31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "fad4eb244413dae6591b62550edddcb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "dc21496c157dd1c5f8ca451c418b7d14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "fd6f526c9b60c36f3b19914bd806c7d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "6bf97b9b9e80bf022149ebd40a73700f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "349b25aa99ac808cf3a89827e3a6db3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "03a3b25d78bfc47ac6d309baea64dc8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "dbda228574adaf70493769859ebe9183"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "a3913de10d89527e9c77e6d1b45a54b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "9c223d71911ab15142840cf6bf9a2ee3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "6c85f885bdc886e082372367bce9bdda"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "c83e566dc3502e1b8815ecef370d662a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "6f214e9300d4159a5d28631ad5c16164"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "31d2f492806455599d1596f4ab975ba6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "57e620bf4ef06ec830756d2988d03b6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "90beb105d1383793698bbce0d544eb51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "970b7ba697a1ba2aa51a6b212cf6b6db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "6859c2b26138c93e1e8c083c84a5f009"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "ed5e536230058564c208952acae3d681"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "a49357dd0140cd6687c2a4f2f418e561"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "34042b557f28d18cbc71733a7b174869"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "29b17df6953114d26b983abfc86c8a8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "11e64ca5eb4dcf257ba49c394415b780"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "2ae77925bc1889aa63362cc99a80e195"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "b5de47b7e7200781bdd97b48feedc05a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "c8e8baeccb91e052c35357ab45bd9f40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "a087f6cbd4c463c546c133d40189aa4b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "80fde890a92e1f0286167e36d5d79371"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "d54460ee38a86033d5d383a3af279fc4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "788f3de5c53568b2597a87542e9c22c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "f8409b20278f6df04316f54b2b9a0b4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "3f8e52a14908b0a8f033839d5ff2b469"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "b541b28522e7532b1a1506c996702796"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "ded3a31b1f0d7a046f4a784c7a2fba6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "9e3e0fdc6d0d2a67af9c3c06932297e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "9f8b4d5319110525f7547bec412a4717"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "e7ae19e60b2f2044bfe4d691883c4141"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "3b915f1ef8f4caf3c51a91ead41e263a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "1506ffb06c0af9db9fa7f5f5d70d11c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "82f0d99ec66ece88c738a9d5720980ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "2189cd5a11d47affd3adf4fe1f96595c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "10d344152802a6e72722b07b3d84ee8d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "9c1a9d5b3d4c7c7c8839b48db6c89fdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "8895a34957b30295b7daa306a3f07c54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "8b056cac033516a04a4486f112d485b5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "cedc761ead1a2836518a86ff4dbe8065"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "7b22e4877ae293e06be0f92a202d2637"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "230265ffb8810f02877efd07e686d496"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "252752d739dc846e7d8ff9b5fab56604"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "b6a727f2cbcfca6cf9badd6d253c717c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "b99c09b433fddc892317918582474ad0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "7a65a1f58accaeeeb19d0f44cf2ddf93"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "dd5d871565330a8523609692766d0a61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "368514aed4117bd33744e66a6f542b25"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "d9f97583869ba7d0868d679b1b8c1c8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "51d692b3db974bfa5f2dfaf05a9a3af0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "3105a36f14d99037bc458d4a4aab3b7f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "6736343d0fea761e355155b93beabebe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "14666cfb3c246d188754fd5de99d27a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "65169d08d8de00c0ff48e5ff62d00560"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "ea8f430ad2946886faf18894f1581c40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "9234ec762ae44108407af1c5328435c2"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "0672935440c6dae00500f33188bf7921"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "d43d947bc1a6660ec16b3abeee3c5e1e"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "835f8f9e0997d01daa1bf8db28874495"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ee7c615122b5e236e3720f5ba8246d46"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "8b3c194a48c7a45c8304f58990a9548c"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "57b7f74018304daa6edb0b35f27e8043"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "86aea357c1406cea2ce080342bdaad03"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "b3c99ea8e5fa2c246f6f8e88984ec2d5"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "529c4bc19dd362b297689a763f57c6b4"
  },
  {
    "url": "categories/index.html",
    "revision": "c00ea32c7855a6ed2779f018c0134820"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "da8aeb671fc060ac40056cfc092f577b"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "284ce5a8b0da5f25328c26e75f5d2f8f"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "fc8b3ec7ac95741f44a9a02a29a93fb1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "3f2db3741ed09d89d089b09c0e77b03f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "40eff1a00a24953fbe23465aa1501d2f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "88aa4e8d7419cbb22514807ab86ad3f1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "0bcb0dfd5aa87707d3da065d27f06372"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "a9624084b9c99326281dff44d8a7d743"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "a12e671549237724b73c2ed7f604e0d2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "71ab368609de99bdad756d944502bfe9"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "af9d8a9767c467e74c7338c873f2ccdb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "3ef3f7ad789c3d0e58002b68a3fd0b2a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "fe07b0a2b12b92593e10393bf6a5b5b3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "19731ab42f229bde2794bf2e1f78179c"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "6e4f3beecfb6cfacb22f8d1bcdfdd50f"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "5263bcecb0fe5dc913951f4779eaeb5e"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "895764680c2433086fda0c33c9557189"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "44f886ec445a5c60f1e4d97700d5ffb1"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "1ca4cd3381233c16b0f349c05cda6798"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "eb0b3a80264f381e9fe47e5878d05457"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "65b23c50f73753f574c23c72c92ed22d"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "848192a05093f884680849fdf0c50908"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "52a06679e93eaff77a8b86245e02af69"
  },
  {
    "url": "categories/java/index.html",
    "revision": "96d0920d7de5962dcc0fde667da10d87"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "d1c9fcd39f4769f835b482076c100b48"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "7b35e994b74f9f45c8bd9088b27fcf08"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "a70096bf6c027de528f8cb52a988b33e"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "18d784bfd377773ecb5b64ff0757d5bb"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "84421a4f587372e74a0b4e67b91c4bd0"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "1a934fbe02130c01a17209236e4b0ce4"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "5641dea6a2ebb9dc52d1c4ac8a21d054"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "b3ff578514467a07786240df4795fae6"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "2453a6b8e6ad0ff1ffe40d994dac1052"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "14bb0ed4790a3d0247db8741dd9cb50f"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "86d96af39c84dfc6f510e3d3a929c8e3"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "1e330216832bae914319bbfacde9e5ce"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "6a639c0f74447aae384000ea140ac5fa"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "42caefe74ed0d45faa0299108aec0e4d"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "c251749304379f5a2455e0c4f8ab2309"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "80c6f60b9028cb9aef46fce3f43d1b58"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "215cfe157da4673ac76302348296313a"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "230d26fec524bb4875a054bd1bb223fb"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "12844522ed5ce9af18b6b6689ac849c1"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "7dd258c03dca037b5e02c068afc68fd5"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "16e644332aeefc5920ec12aa93579bb9"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "3365c70e2591e1d123f13dab8a2e978d"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "02edbd47b08641b26adf39861e9055a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "4dea9895484e8abafb3d542c5fb9e024"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "d7092535352e2e97dac953470a71ff62"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "cbd4a80bdfb73043cc0380f23ed0909e"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "2b9cf0ae93c5a15bd6e589ed5c203250"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "378557d7d1b61f2d77f14679fa3b8dc7"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "d16ef32a0104712aad103eb2d42c9390"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "1f8c3e6bce1f88e6c54c2cce3b505394"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "6e74d9d32801183a28b3369b15111524"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "a680f7da2625fc027e3e4eb6d5c005e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "00ee7e2fb3c094f1c24eaf6a3e957d62"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "94ede3af93b4a477d49827a18f60c0f9"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "3f5edb936819d89779ae9310ac7087c4"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "98af9a68a0f560123af0d879b7d26e7e"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "24b41dbf451dfe4ea4b8ee0b39ebf4ec"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "24bcf2c2f0870c63346f4f3addb5e7a7"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "e267469fc989d7e23efd940761474d00"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "346c2538c480d24d586369a7f69de2ea"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "b07b2818778b31df95089ea14eb54d69"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "a671e4312298913bc812f151fb13dcc0"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "fb9f66261deef869363ff93f437b37da"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "90365ff1be38fe215622ecbf7e18090e"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "bb82e1f898af6f3c2d173168b24ecd78"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "86d4c0ad26f7062a5cab3b35ab01f6e8"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "785147271addb0b768d08b2e9c549471"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "a5c03e93b4713e0d2a1d3e92a8320876"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "bfe37bd1e0c5936f898948233079ddb6"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "d558c408da8a08048ecb3c4d7d218718"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "651aaeed1eb86790e7c4281d092032d8"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "dc917249303d2132c28fd1b85306326a"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "4f34ce678bee28c27e59774717f3e74a"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "7e537cf0bfad9d78240343764d3050b9"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "fe9fb2e5ad461e239aecfb0de772a939"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "6ecb033376389ca9554955a84ccc6b96"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "4b33368be11d5f07092a4f8a7e834f47"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b0575f4a028d7d9ce14a580b4a7973fe"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "7fbb22a5bc4d6e61623c10cb0adabfa9"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "ae52e1478fb70eacb146c64d9a260da2"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "457c890f8fedc6f091518a829232d4f6"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "69c21a10e783b387516b7c114c446dee"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "beb9b6ddbf50f1817b823021e9a1a129"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "b3fda327f0f10243f2679e6dcbe8179c"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "dca751a9338ae326febcca802bc84805"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "88049d9e5c0fc7ca08e30767b37f843d"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "b2c63257116bed75283dc9b23d21e65b"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "c32ca540c71b1b5b2807a14c6c374019"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "f3216efebfeea59ad55ac75846753694"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "696e4a5cc2d48d789933492c5bb479c0"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "7d0a3d7f4e18b221104e654615b44a9a"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "c9c7737919f47c39bdb1e6bc73a6eb30"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "fe79b294cb058ea495490107f7219885"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "8bb8040c4d6e70e0bd85221808c13a27"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "a181d7ee53322f1b2715ee711eb40ee3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "d93f0d8fa91e314933854976604a3e5a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "60213d34ccac2228f42e3f49b88de1bc"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "96e8f7569d2c4d58f3ecd20d99690993"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "0949175072e31fb6a40d2cac14977e8e"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "f9a33cd085ccd11388e23b24b8f12d7b"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "a61a0a8cd9635155b5a53edd75c54e71"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "c47c43ec7f582912ce03c612ee974532"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "3fbbab3212ef99e7d33d4ab98a2e64f2"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "36c81b38f0e8b47cb5b43a771394538e"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "7fd3a9e68cb94a26affd8705bad490ab"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "ffdd349a7c4de00f5edd1f9a0ca9c097"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "1bf5a64d2a48ca9058b792e7422cde41"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "fe0c365d4ef7c1c303a517dabc758576"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "346ddde0a7c1f948bb498f85a509acf9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "663973970eb4c0c4b180266c69545f05"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "100dbab28fb962c4d66b2801c39e1edb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "ffe6a574e42ae394c2cb23a0e819f084"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e85d251fcbc537e1e9867712a5fa3440"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "57d7a27cd3de70795e4a75b666b969d1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "1be1603e5a5e790ce300073c86e74f3e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "f631e12a74091ecb179d94fc40d8fea4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "164f7a2d18f52f420f0e9127f6af27d9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "1fa2f63111bbfb01935e62b1262263db"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "a7feaab3dab19b0e0874dacce1b68560"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "332bec8ea189cca0d1b50749adfc4b95"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "12122ffb1c5cd02b038cb8894b2235c2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "d6e507494311585a234a1385095d4a0e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "932042f2f39f7fbd63cd289198b0908c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "50fb2c353772de4de94873ca0c2c8ad3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "ae0fdc6199ea159fc83038f7e23e9c6b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "2b6977ff67c1fccaa935f3107978e5d0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "2aef061a80c846e2bf0fd5c8035628b5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "30563c925360857fdb1fa0972e0c0771"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "59f745eb78507f5b8c17eff54c967936"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "7f8a807b5296d03ff5b1c21e5ed05901"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "bfcc30b180bce236e348fbdf00c6abce"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "372fbb79881143af0b4a53ecd1bd1721"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "db4b48c9a3c4ccf3617d127e0d8a7a4e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "0b4be2bb9d7c6ebaf7030c07556e6a83"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "45c587bc9f3f6be992510a1bb158b91d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "285b4c9ee85b0ae11a9c12108b36ae60"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "284dd9874f2ff6e605b0dc34c9d1e00e"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "a1a0af91e2e2e26d71316846a7751d7c"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "901db84e9fb09205c2ffcca0b173f58a"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "b1c4235519e6fbe1b3f916cf8be2694e"
  },
  {
    "url": "categories/os/index.html",
    "revision": "f4e469c60a39fc4c218ebfa6419c03ed"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "5ce1fe4004b4047438efca407c7ff4b4"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "d9e0308d3a85b34ab8557912b81dd7d8"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "82dfda881f7c16d0f71c814aeb680d27"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "4cdddd4ad98969c26393f46df2df31f6"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "5b6eab18ae69a07944f0711c2fb9922e"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "105d4340770974bac3c4e7da67b6064c"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "e791193ae1f5eebb94d310d25fcb7de7"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "9fa718532346c2aaac35a14b53882f36"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "a477242700925ec78eb2af9529d7b0f9"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "69b10dc2537fc77135471ea676ac9a04"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "2f4f785c615f88d4ec072dee7883df00"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "0c78eb54ef56ed0907a9d0250282b96d"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "254d43fdbd80893fb22037049c8dff18"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "0640de3dec0b021b93ee535621ed2444"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "381eab2c3f55ac9abdd291a0e5a43cdf"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "14b01890c7ad963cb8552c68fd6a95dd"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "fb0dd2dd027231d99ef757ad1e1eb813"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "f4dfa45167dc547f6a115efd13bf334a"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "6bb6ca3e781c9a7e8649d94df8cbee2a"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "96d76a567db186d3b592fe951804b262"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "3c55a5a51f4a614b8e4ef14868d9a546"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "b558dffa02ddf54f33e30cc853bfe292"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "ba306689fe945835369864bcde0f6347"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "fce05cad9e192d3a81a9a4969fdaa83a"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "05515599446d340fa5cf393d8535056f"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "23aef377df2934ad866c1a32182ea5f8"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "bf9743f93b4295e2c1eeebee254aab5a"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "b68e8488fceb2b204a83167fde1042ee"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "a44c65448ebf22ec5cc6e0027115f0ca"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "a585df82459f8a58b5e60e90bd1e51b0"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "41added68c64b34a779a34a476e1e032"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "f0083a6f93b6f861b1ac7b346dad5507"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "57ce975fd6bb9f7479710856ca0552c0"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "0db0cae8def96b096fdfb683cbba53e8"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "f4c399f2597a7dc9e941cc96b842a423"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "2073139f6cd04a0d822849696eb7a268"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "d505e27f7b77901eeba25bfa0d0f1243"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "71d92457c6b4fe63bfdd6bbd9cc3d827"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "b40888c8c124a153ff5e2c4dd3f1e826"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "3aa104a38cdf722440a580a8994a24f2"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "797204a366df91820d906a0d80f55866"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "ad3485b7abee8dd48e0704091e358549"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "0f9b9e159c8a6e4aaae09bcf126e6813"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "d2011f8743b22d42d8f7f96381d3163e"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "85864ca372b58c128b29c075418bd1a3"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "cddce1f3e5f8ef466181700eb45a337b"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "e3ddd255843cfdae0c9c41f6910da0b0"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "5944d33ecc43ecaf05d449c5c4806528"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "25f0212324a180f9b26a75691346e81d"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "4996a70e1c34702f5d4613ba244f17ea"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "dd5734959dd984479d4e4d72ac72ac33"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "dd184fc47ce46f36553b7d08449b0d49"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "75491de793a88a209c5a27e1db4ee348"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "8e940c10cbb50abe92a074c2dff454c8"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "f5dcd1c5a5becaa4047e0e37efc048f9"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "5550dd142350fe0ad0c7228bb6e45af4"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "b0d4dd880d541bd74570e8ad48232afc"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "0f75b644b61ad58488b83ea311f0da7b"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "d92ab2c97ff4ba2c396b483ea2b3a5bf"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "1ce453be1687710481df61a6bb76b13d"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "7cf1107496877516b6a11ed277f7ff8f"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "e9fb3341638f06096cb0bfdd2e94464e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "0e8575726686194ecfd820db1bc088b3"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "38dfd2ae09bfcd246372afb39a194402"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "46f4598d538a711e4da17c65c10d20ef"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "81822ce64a8a7e1f5aa69cc925778a1e"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "efa205d32cb8c1a5b966228cde17c7a5"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "ed736670fa728b9896403b4fca04e827"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "796fa3e2caf4cad0ebc90db4af738103"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "797a7bd442a57c112d6b70b9e3a59f20"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "bde98742057c89040c2f043ce5badc2d"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "a610b32d788ba047d9c6b696fa595ddc"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "1ccbb48be316402339b2203d0b482ae4"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "8a87b26358f6b6c861b09a7c0e49d968"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "ad5426d2d58ebfd14759b6e7e8ede247"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "c12192207c9739587f08626280800ae0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "b18ac3152048917972c57c5fb0bb5e11"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "8fab2127548b5d0aa84df2e40389a6f2"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "82c7677ec6d4d7c57bbf5352c3414457"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "aea963a94a76c73ab1f1b944eb918e6b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "beb2b781965a7165409c3fef03124766"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "d66f353a335305f488dd16c57f904868"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "39beb995a08cd1d072b05520e7f88961"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "da347b8f6ad74a2cdfda618795e80774"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "9d110a635928224509ba9d18205633f9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "f3b358bf514ec03c9c0ed8435e2f934f"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "68688a3b0d11c2c09cfb0f7bdaffd09a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "f6fb9bdbe8a1a6de1d748b59813766ba"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "a0ac82dcb8dcbfe042ad01b3d17e44f5"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "eac2b90edce0397c1072c96e75d5879d"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "fdb596a7e3912b7c2d9598ba9bb681c5"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "7d96905de3e5284afae6db358cce5118"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "0d784577a4fce42a71eba49b7567f7b9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "ce968c8e33585b15d9e81067e115b24e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "cb7f1f15f27bc2b4ef8c63ea53100df8"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "c28337d972a6a6faa23ca3959fbfe662"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "32512ed24bc77fced9f6dea762ae924e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "8db5a3fc2f4c654f2e50c86ee43d99b2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "4a26a22d094d629d547642774b4f609f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "ec5aa45a888137dd4cfb5bb07c3a0f05"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "c4d1f7929d55aec4a251f1861f208b2f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "d42184ae92cf7c98213a868c0fda2626"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "7e487a0688df20969b2b1be29085aa2e"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "3ab639a41528f93da475722bef08c897"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "fcaae5eec39d3ed156b2600689e4c087"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "7d6f3cb324c5e7f961b298b251b4c7ec"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "fb54b37bc03f0e510b95f7dae286372b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "006f1e7bd142356962941d8aa5cb02d2"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "c25071d72576ea07397fc6b07cfdc353"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "1e81b439c681fe7c110121214263237d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "77f1dd8c0f280c5c1bd6cbfe3a633aaa"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "6c4fa805c44566ea1af94967623d3590"
  },
  {
    "url": "categories/php/index.html",
    "revision": "c2a2dfc239d5cd340d28cd8fea14d42c"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "70faaf72cf1f6db00dd9f7591cdee911"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "8206cbb0c1ef001a2388239e257e5914"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "2390caa45bf47bad0b8ad4045df62d75"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "f9906c6a182cd48ae72baf43fc57260e"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "0f808a1cc3afd9ce7216e83cc1d5169d"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "b45e20018177c2cc78295fa40715c461"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "e2fd6859d3539bc7c3c01d02290dbc1e"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "0c651dae155932f802088146dcad742e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "835178ea5d5f3bf2eca1ad2ef2c5cebc"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "7ee9f6a7bdfa05443a6a70e61dc329bb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "6d01c321dafa28cb48ae8b889004ee56"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "0c50334c056c4ed517f5f65d372caac7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "a77768fcdc207c1737d9791263b6fda0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "8ef6548ce1b260d1bd020c96aac8ec1b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "3be6ac1f7bfa5495c8b149d037076e38"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "429f2c7f0c8ce8887a828564a09038b2"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "7c05e937b0db86ef5ea9d126abb82a7a"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "fa4521032e3ca6bd9662030004929261"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "c35a20321f575c5097fb4151ef0b3bbb"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "3ff12aa49c76617f4ebe7c5bd44ef713"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "d8b67396f34eedfd96dfcae1878b7eb0"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "c0963bebbc555e769d51ed677ee86a8d"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "a99ccbe83d7c06b07303ac21931b94e7"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "72bcef0bece925d8b5bd4580fe3e6cd5"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "3d8a3f8cdddc8b940b146d8da8379076"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "062f869f2fb9a196c943a541a9f91e87"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "b495bdb6fafe4106357b3e1658706d43"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "9e3d431b0d90a7e1778fd518009a3a44"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "9663b272ca16caf97e649eb0cd9c86d7"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "335f9455fe576ce0c039dd68bcf9b82a"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "77b65cb917217e8a1dd508d1dc435ddb"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "5e6264d00e4e513bda8f946ef24910d6"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "1d34f271d43eafe2ce25c1d530cc2139"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "835174b2bbd511aa05b83eaa66299d79"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "a94add7482686f2bc6279675c33bf12c"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "08c9359f45fe13c5c1cbf50b3340b80c"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "d5aefee74a2606f22cb96a5453ded5fc"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "b3012db8d7f2a1537a3ab2039f4cad52"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "d98732f494d5404f99667b5268491d64"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "4b68c9c25451357dbeb7457242fe344f"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "6d8740f22a28954e04ff098e52e8f615"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "b67430878ad53deb2aa8c413ac621f72"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "d9cd572afd9479d6a5d0009c062ea87e"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "a4f2db59354cfb8f9f38d9490e7554c9"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "ed9c3e223b6affc17b3426290f910d06"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "24c9e1aa82714ba166f5635e1972db54"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "2f0a69e7d0899f1d6ef02cd6da4c8d1b"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "8d4f3fc6a2a86c322802855f21307b1d"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "ba736be28ca8a772138e8a8311f6d637"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "ebb78f9bb3ea81ca9ad4f7f8b46c8307"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "a6c1782ba690ff5a0b1ef59dd17f1160"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "bd3f32cb19e085aed8972408a11195b7"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "9d687cf98e21c356d42db4eb6ae32a06"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "6d266a92ef43f6cece77f495616b0cd5"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "63df773944eea6adf21914d613b43246"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "7f1370250cc7f8ca50174710c9e14d70"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "8b3f7f44fe2305aec0860e9a607ffd97"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "3cf9c3abd7d570edf37acab9586cd274"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "24a969004717c7c8dd463c7e5933818b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "bcfa54a1014787e4e177510312f81305"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "82685af6bfd77d08d92f1e9905c825eb"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "99eb6ae2731b0278f4d3364e83b0370f"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "b7586ca5976798cd5a5f3ecc7c29ff0a"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "cb6bcded5d1b8138306720b4fde44e8d"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "35527626dc38fd6f936749bda83a7d01"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "a905af782b25d225e48636dc0d9d4a5f"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "3b503d3de5b0b1c5ace8a77e498784de"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "dd2feabe68f47177d60628d55b6acbcb"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "857db5e08177bd330541aad09c2a235e"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "28ebeb0d2079e421cb5f009968c955e9"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "04cc53700351fc93e655366109f129da"
  },
  {
    "url": "categories/system/index.html",
    "revision": "c1595479a434a69344cddaffdaf83d48"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "a7aac3b326b1e5f46c204fa939563df8"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "e294658b296b7a40a962ee8bcbc2bbd2"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "9a9b3d6a2c449a8c20034d281f3a7af5"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "eb73b6b236ec413cd43b112895398dfb"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "eb85dd8d2d51a9edc17699a1f39ce5c2"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "8186dd93d32b7ed00697daab593cb9c6"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "1699991cd7aa6401287b9d572061a61e"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "19ba50732169a3254806cc3cd4110bee"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "693ed34c3f4803936aaea0db20bdd33d"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "cf17cdd27a53de94b8ad54bfaba725f4"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "88aa0318e7ef495bad23232b60d08dd1"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "867f460a6b772e1da26e894dc00b3a3d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "11b0c8428e5022cfb49b23b4c64032e1"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "4514e27bc7674a24a072e0e1f82b64f6"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a94bea59767c8b40e972f83c405bb4a5"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "19c5730064be6dd6eebaed234e1b8be2"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "c58328250c5e2cbff452cc67aa00d478"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "768e31c0b028538d8f1f10f6a0e9332c"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "b40c6045cad2bbc51b237e9894af5c99"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "f6bd29dd99bd92243f3237ec36409b08"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "87706d9b6ae24d3705fb97dfab6ef47a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "0824532a47a6dfc01b330bdbee1d3a28"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "9d453be2a51b636d017a9744b154af8f"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "90a9de572b858070a09ebd7ed1e3fee6"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "80251c70d491a6f345c37964e23e2f9b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "40faaebd9962e91b7f9c125d4d5c710d"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "64336de6792b6702a85f9240e9d68b6b"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "e46983d4b8abc5e5462e1a2222567af8"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "406e767cafe294f8cd1f9a2192b45b92"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "9de994de63e9c8b04b9239f87505f999"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "b884813ce3819d7e05620b70cb3f601e"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "d77bf1e7f8fe3a574b5a751875548351"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "d511b2b34975fdb680c40dae7b63ed73"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "2ebf28aeeed3e5707bedcb8eab24ed45"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "2bf58c7dc797bad2b28e90263f0a5236"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "3ca5b0af5394f0bec8d228e3f1941468"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "2e340b21cabf76ec6c9d58d8cf08619a"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "8a4c28b5b0a338e4c5e77957fa55f7fe"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "2557731af5c9ba65bd2569ae4471a7ae"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "2386f4a3b2ab81f68bc611855329e539"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "8357d2f98548159faa5f256be607fd50"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "abd198c248bd6583a8ea8ed31859f8da"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "a30e20a3b6d499291a5dd4e167afdb9f"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "84ee0772cb5856112284683d0dc71023"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "d341ba82c17872df6c3ac78f7c4cdf30"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "d4c87423804d8ce8a49966cfc77d32d5"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "b17cbb0afa2b638e6eea12d755b5c5ad"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "d98d6912d42ebf4c4acf4f5dfb05bd4f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "319ac88eeded9c985e07e95dec75f0fe"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "17baff3e56dea0700d0b0966a3dd30b1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "44981f05026789239509d9de57bb888f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "bf03142d4428f4f8b398e3ba6a00bccf"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "7abfd9c5cabac397c49d68072c6c57aa"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "ffb73e0e279c2d3e271743989e76440c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "1a8dd5c1ebbb3ff620971ec25a687bb9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "a5ee6e7bc2391fe5178aa010574b37b8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "88f624e800d2108c7e8a03048b240f37"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "e37fdacbbdba4866cfdfe7922e2d285f"
  },
  {
    "url": "favorite/index.html",
    "revision": "ce902d3f6b3077756ae6496ffa891e4b"
  },
  {
    "url": "index.html",
    "revision": "1eecec37aa118ea3ad54c166780f9418"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "5025bf6b814c3a70c0594bf473a16f9b"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "80875888825fd7a8108759a59004a97b"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "f997ad2e6f3d3d0221804cfc18573a8d"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b8fcf8b0f5da620d3d4e1301478ad235"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "332cb8ba8beccce17334e1584acd4465"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "c42c36295a05d769c4ab538238a61555"
  },
  {
    "url": "note/index.html",
    "revision": "5565521719f8e170853f559118f97a0a"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "c82ae4ae54ac2aeb6db085043b123549"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "53ff04cdfd0917a159f1aeadc1462041"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "9e17012f4a65686b7e54b31bf8eb65ed"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "426f4dca8a42f63729712bbe060e3423"
  },
  {
    "url": "share/index.html",
    "revision": "b8da5b79fabe7c7fb92342567d8b9c2e"
  },
  {
    "url": "single/about_me.html",
    "revision": "7d17f0dd7b20a74e9f28c4ebbb94a562"
  },
  {
    "url": "single/all_article.html",
    "revision": "be3a325ec388ac71ead95d14decd6624"
  },
  {
    "url": "single/welcome.html",
    "revision": "8f53e83162b6c8b061413f4192a3f772"
  },
  {
    "url": "test/index.html",
    "revision": "c4fe2cf44042864699f1a2dc4e54b414"
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
