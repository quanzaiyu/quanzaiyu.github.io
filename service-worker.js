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
    "revision": "0f38fecb0a4c3e9a75c9642e3f1f3e81"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "0c381c3e1976428927eff7cc1e6daea6"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "b5287c429f6f8025703b37c0576ce3fb"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "6d2e2e93958d02e7c4ec9ad459b92389"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "3af1d4e5e5155cf8ed2e3dd916cd9c52"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "da20184d346367b33a5a1acfb3f821e0"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "6c159b7c9cd7b13b1c29eca741cf6a05"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "eb888faac73fe2be6b6ba634cc0428cd"
  },
  {
    "url": "articles/index.html",
    "revision": "e62757b9e7175d3c741b3778f742de98"
  },
  {
    "url": "assets/css/0.styles.3b85688d.css",
    "revision": "01d19fa71604209a307b0e6cfbc7508e"
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
    "url": "assets/js/12.f0a2ec7f.js",
    "revision": "6c56c109b6df51ba3d4fa8111b9d43b8"
  },
  {
    "url": "assets/js/13.8bd03a91.js",
    "revision": "ed72e1384b606189270046134f8f3464"
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
    "revision": "f87c94945054776d052a2e5eca6345c6"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "25cf347d396ff309b041bffa7af69f9a"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "197e9b446340e68db94a7f7d5263f72b"
  },
  {
    "url": "books/index.html",
    "revision": "72c34ad9d3d40dc871519a21686ea549"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "14420c1dfd7a29d3515c276d3005b173"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "e62b315202650fbf3dfa1be448f7961d"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "9e21da6111a90c2c5b5c4a86f9c588f9"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "30e6a7504a5a4e471ab9e850bbbad683"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "d8d6bbc1e72b5bf78924089133ada7cc"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "01c85321adda1ae89dfc568d709f62ce"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "060fce9d49c708be65ccd457c59a11a1"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "14a091a949179b65a5078ccafeb7ded4"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "ea94093e3e1f76d468f20a2bb9646058"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "54843f44c86263e02119244bda9b8595"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "c22d6228bba290515aacdbfc6b00944e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d6e4f8495cf770f37b358f57d2e42819"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "033e77f6f3c7d30f0233821479c39ec5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "3a5aef27ce5dce83398b01289a339795"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "ec46a7a0d5d7685e7ca48910021886b8"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "bab6fcbcced3c87c40d5dfb7cad0ab2b"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "08d3f48ff82dc13d5dfacd373d6e9fd9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "866d28224f8c82bc7f55033d9bf54ac4"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "813b34cdaeb7c574f4a6d95d7ab9c19d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "9904f402ce1e30395388c313198c9881"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "9e1fd400a7d35214ef9842e3ce536c8b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "7a1a9fba9ae5ed7e5c77bddf8a9593a0"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "9034a9189a4fb34fd5a017d5fd277f20"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "c51b1d9437e8b14087bd599ad9fccf33"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "6bae3c335df4f86a52941606429ba575"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "68fd8cd6483408d5682a41a95cc99e66"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "20681656d98f4c4f4072d61b26bb01eb"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "013df0086afb2538d8fae4b38039f42a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "b1c526a96350a03035dc97c558687919"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "6ce59ce4e12336ce73ec57bc9f9e9c2b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "da9182c357014c5ac0b88b4387f17991"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "6117e42bd71bdf22dfba95dbcd32c820"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "76c1b7f258aa9abf74c61d919bfa7f10"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "5bec0fbfdc8a55645c52521075fff586"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "c6b4ccf5953a2c50d8ce26bbd4429539"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "fc2ee706ac3063d13c2416cbd022028f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "0c1a8f40240b8f2269bc6f16be408458"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "f8d86fa93ecb32cd1d9670d2fc8a3ff1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "92d5f62a49dc8fddaf2a89b20c2d80c3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "c16d19a94ee247b8834fc0a3a947b626"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "89b1a485b51adb4c91b8981959358193"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "ea6a74437d7ba497131191b6dc822f3f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "c9102e23dca8ed114afb525bda6bfa04"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "10cca571dec3c0b27164f865ed72a380"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "e6e244bc9b86cb50f16749f52bfab8c4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "11212c6a520e22f3b1a37e5a54feef92"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "af893a242d539c300b37a265dd4951bd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "80cb38c2e024d4c10c4ee8249f8b8170"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "129c5e77f4dbb22c8bc80a36450d3ddc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "97b0f9e0ae6e770d6d576762c8c1d0bf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "818b67469bc0b022d0c85e3e481a1c20"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "91f4a0d9e1182c1f47ead698849c3aa5"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "5ab4a57a772494151a5e11e980ee9706"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "1d144f15a06ba85da87459266c2669e9"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "06880304f0960fc6aa6df7d59087f234"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "943fa7cd9972e8e4fd8a7c838eb61e07"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "a9ee31493485beef1b0bbb66ece4b141"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "4afb1a1643fbcdbee154f185f2343be2"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "8eae828d75da649dc63cffa16f113789"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "2033274086640e81d1c9758aaae1a758"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "5ac432af0ef3c6b37c1b28ad0ba3257f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "f3e61e834dd0007ade652bfe549f063d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "61eb2f5e08b4073407c32d00641dfd96"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d7a766f7bb420e8aa7efe9acd52c944b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "ba7ed18425c929e560046e5e71b22cdd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "51e700324aeeb219f3cf969f24df455c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "4cff2058f7bff845413b9312e060130d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "ae8ef40911c716076727c0ad9b187cf5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c63ed2357280481c642232a08507fb26"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "585e87e4ed7cdb224ef1a6348d93e8ca"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "e4629dd3e6a5e862dc1c3006a8437e6b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "6c1aa7a0f521c9023766c9a2a7cf3d53"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "fdd55e7623099d0e2d2e322fc7ff4ab5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "420d975cc36fe54a9d8eb5e50dc609e2"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "927a0c8286f2ee42a3c403f0403b40eb"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "6f7ce5199d8610a00e7dab73bf127124"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "694cf1209e178d123bb171062f29e600"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "1fae910ead9e4edf503e2c3d103d1225"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "9101a3204ad43e8f6845f0a916b840f9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "28521d62e6caf41f190624b07564f89c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "363acc87b53e2d126ad3ea86ed6736d6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "46a594dd54dad48889aa7926323c4c38"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "74d5634966f603fc344a340775e22d48"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "093c277cc1ec462801053c4bb5d5eb1c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "4701d282067a943483baa6211a2b089c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "151ee741925ec7a663a7657781ca5a0d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "cd453eb29d498e180a7bf6f90dcbb79f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "cfcc22b234256960f4e15e80dabee717"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "2417e7c0aede38f853106c7009dfa227"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "f0eb9e7d46499e2fa3a3825e920ab6f1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "1d825ae7e6ae1555f1324eb1ccbb0706"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "64b242ae0ff70f686d65bbf33045e8ff"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "4f7e6275ea290d3d51d7dbdc21923c5e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "768c10aa1b29db5c91ec185ed2194b89"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "07cad5e4a88bedcce509fd34897b0d8d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "94a2d17a397915e4f461a9ceb43eeb16"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "ee46a25ff3c5c61043ff963d169754dc"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "a6a41bb83c83db1adc9ea707cc43f9c3"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "a0295f293533cb4341c6c1d1101c04b4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "2cd67852dcfbff70bffa7b70a893e908"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "b7e17567c975d1587507f867c28aaaf8"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "c07525d1f91d6ca94e231c3c2fae3509"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "8f0a53b9f45b4c3c94ba0ec17808d4ba"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "e85f1c9284b8745cd17d5eddc95ae2e7"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "8c27c4cc7d3b6091e465cf37c970ca1b"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "fcda32442295ea15bd3824772228849c"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "9ca4a5b95defe4e64d8b060557d85d41"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "8aed21cc48b10a7b362e10df51cc0458"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "a7bb954d9a2081b5f2b7e9a24b40da41"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "5de890cc84a451015ca2b44e7ef115ef"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "2fe4c934719641f5290fcf7e05862cfd"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "c9e7f4bdff309173220bd9a01f02ad53"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "09ba1ef74b4a921ab311d2e6999bd6e5"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "09e9510d74372ac596affc5f9ebaf4d0"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "c9876637cca4727b2cd76e7e87f79215"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "ae265498550f4c7ffc34e2ca3886a88f"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a4f316f2f91c71c8b993f6a92a51873f"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "c67464a48490d81687b1a115c9c911f8"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "91586a0bc58f930e164a0549727b201a"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "91c8039afa3f39570f88bdaf4e621d93"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "fa80808f61ce437cd743ab34a23a2fe4"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "3012c0b92eabc31ea4b4f4ce3154d265"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "a75e64e68419623889bf79f619ce6712"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "76c4c4e36ea5458bf84fdc886dcc7b40"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "f159bebc7f082d55b4d3edf0a09be290"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "7df432046202ca6f1d20450441817808"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "731999a14036d0a58ca968009f99a9a8"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "64e0c609391146a68ac30effb9e2255f"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "985930f1632d2a79371eb4eca45c72d1"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "80f19fbc4d249aec1c40e74e62177f65"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "7a147849f9e8da5e54ebb1d48abe8a88"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "38449c12383300031093228ddf3b6d83"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "9af3a616cde1acff6362fb05250a8c73"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "cf097418c37ccaa8f285e548197d5c73"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "d43cebe7d3592cb129aed4b44a311631"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "24a576ec583db1b3e33882aa2803bd88"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "3de915f4bd21b2c94062757ff05d68d3"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "08968963fc0176daa6cf8dbf6c113a91"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "65b2f9a1833e6da0e6123ebe5f51b35d"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "7045659160f28ef24a1e86d4410fcd3b"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "21a0d99c03279a5afcc3b42cdad00e01"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "84958a987e842e4430d6b2b1884f3667"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "15a6f3e1f177fd61d437491d3c9fd6b4"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "8e43269254f417452be8531c7e61c6c2"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "6f42f3bd9bff0646b9da8ee55cbb3412"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "6e2fe225173371e7c3edc9807e0b1801"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "5d640f652fcee97c10386b771b191897"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "fd323093494a66f0b4e7d6b3e43de590"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "feba350321bfb0f91ee53e6fb4595f42"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "d026b524b2171d15f0dce42a28419a9d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b3a582572f361ea3f5294f48789a646d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "d3203c544fcdd3683a91e09649b7efda"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "a31d874fc8980d64908aea0f6412bee6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "5656a1ae533b3defd5dcb900258d7f20"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "78a254e77d80d5560bdf6207787f19f6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "d4c1688055b57063d0eee584f25cabd0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "14e614906e1b39ef7f9fab44a5ebb35b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "ea31c65579e73ebc9915585031c1d269"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "e1e81df73b883f6d7c361a801a8be59e"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "bb829d56bc19993d21ec3b86fc2d71d0"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "4131ef44e3ad7367ae8619dc7099a4f0"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "a5c1fc8ef7b6cd0c99d6c4734c711274"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "1bce526b6e946ea55019245cfab5451a"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "eb3d2db4866c43c9ec45ff8bf4ffa708"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "07aea346e9723ee129991ce03b4865b6"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "49be715ab93395db53e2c054e4f8e5b3"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "8422e8ea399bcfd5d58e889cf430e7d9"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "c91e3c9bf0a4510f7368768e0f72b1cd"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "690324e8ff43eb0fea38ab30e2e4dfa5"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "5ed96d9df8cb3687ef46ad76c7543109"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "c56086a0bb0e5ccf8b8ff8b3aaaafaac"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "dffa5a55c8166b547ee344a527137545"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "1201746d3eb6803a5eedde90908810ef"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "3845cdd24f0881b7c1604abeec87455f"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "605f2eb2deb0a9472bcb2b280320af9d"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "03f11cce65338d7cb9a359d391397a2e"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "64cc1c71c583e68035beabe3e8841ebc"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "6a88ec3f647a0c4859bc65368314652a"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "8ad3cb4ff8bb877402896ec5fbe0f728"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "7300eaf12bbecfe942bbdaa99f37c42d"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "25fafab5e2bdb869d124f4be034675c1"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "a80ace29fa5639cdfd2b9f7a93b83a01"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "8e2692ce095a1f5ea6905b3e2215b17c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "635d3eb813f7d3fe08f4994929cd6ed3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "c9e8c65bde3546e0953e14b688c5b06e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "84880d870f90185f8e975bd9167fabd6"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "2a7e51515e5a052e72e66776b8bafa55"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "0198401b9cab3c5d1cb177fd01264d9c"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "1c9bd8bfcd9fdaf11384d67e76138c1b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "897cd0cfa7531a97e6c4543595ee255f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "87ba05db177cdea69c3f2d62b94dfb7e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "d828bc021667f92602a0bf01a0488d4b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "f0b23929a7c1d952cab58893ad03e027"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "2727231779ff0cfd37ff742d01251ee2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "f604c12f26719607e4326c75b90bdf08"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "fa70c0d3a6300fb68492052e62978602"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "aaf913ec9924814f8637964eccf59f57"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "1889101d6aa772ff14f613708f92a315"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "8eca3aad3e790cb1a0f0868094e4b51d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "5d445eadcc737a07ac89e6a37bf88a18"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "a9a411deca1be294e19f567dbbba1676"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "d79cb7a58add1f8388cd8ad21f92393a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "74a0931b5fa3efc93bceca7691b8f434"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "7faadd159c0de93c0b6bc8c478048329"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "f0d160c9b2377d8049f290ac9297fc70"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "0472d486b479e759586d40806b0d0c4b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "6f52cc351a717c381c97f91702a0c05c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "03137b8a92547a7c68d734d82b08b7d3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "f11e8efa85ba45bcb26ff0a862f08f76"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "6e705c5b6ce384980091facfb212818f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "8250b07d050271c410d0ba9b5871d64e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "2ba6d56a08ffd1fc47f48f63bf22082c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "807e910f1133229eab39749aa01019e4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "9281aa879890bea7f10201b0da36d99e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "c84f1ff7bb7bc4356f4d2cded2a46228"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "771abce946914458ec76bf7c48f567eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "2225c5bccad840f77cac94d1d66d6f7f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "4d279fa18a5770d56112059767fe2961"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "3e1a37db20c6bc2ca88bca1146af789a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "7af12ac44ec28f98d466bb611ea80ea3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "b1a64b5c6c449f9e933af6930cd8803e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "ff43f8318ea870181ede21bc067ed3e8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "460f195be758bbb1393715476bd5cc1a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "5bec64ce7827ce87ff430507c1e15b48"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "6ec26a46d7e018dabb63f983ba34f7a5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "fae13789ace3e0e9d3fcdf0b699cb09c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "5110f7ed15eb3c79cbe3a813d340b758"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "80c351db5d02baafdfbf119e9836a51c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "94401a3b9dd4fd26723c80c8bef66c3c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "8da2441a89cc14267ee8ef519dc6d9e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "dbc885f499c841fa2f5422e9a11ff721"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "d2ab5abd35b7490c86a5db3f89690274"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "8ae064db7dc00de6b2efbd4b0a158d0d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "e733564dc3928dc720057f9f256f9b5f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "fa272ebb3a47aa682e5e8a7a0045319e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "8994bb91ecf4e4df0e0aa78181765256"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "76189b52d63f7d7662962902548fc888"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "da7c0dbe24fb010315f70e156e85ca96"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "4a15c3390f7d97a6b0d2c40b5f9f4763"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "c03ac7e96a09efe0850a971d400f425e"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c10d197c595993cfb6830ee0ce3525a3"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "283c03d029a56bbb9386c1496ccaca04"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "64a4df6db5bc9993f8ee32e109f1c1c6"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "fb755dc7f7d8418cf972451042120f66"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "1d8a3845750ff33407c21f2eb9cb3144"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "1c04607ee1887e8993a1b0de74404259"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "01324909c4a49e7b25ae268f30dc328e"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "0492b45baf7f3b4d3c7561e8ae7e5d05"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "6236056450a3f97c127e57918ff3c4d9"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "f1f1fe82be98b4dbaf169363f619f5be"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "b8c47d01ebc6b954313b62576944bd1b"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "9d94612dae3b5cd58cb763a82259a9e2"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "856c4bf9364e3d3f646cfe0ef503f5c4"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "d582f03c23eaf91033666b57f0c89a3a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "11c07f3ece85ed6fdd03c5fae666de5a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "9624ad946ec5bd181b05df6637c74282"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "bb64641c60be9fd8e11518435f1b9148"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "fd77504ce554d9255534120f005987e6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "551f6110c1bf23cb1a2a688423e93fed"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "2404e3f178aeda823d27e6b12302ac62"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "0d8a8c3f659603f326806b01b8de005e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "1b0e896ae2ccc2bfd1e5750f534bb73a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "7af373b800778aacc1dd4f401a70214a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "4705988ecebeaef2a54dcfa26629d746"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "692b43b8cafcd9599fb93a49b5633b9c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "151561a7a8e7006d1a84e8a8aae0bea9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "912f28adc68e218a936393dbc0b15250"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "e796f42a9689a76ea70cf9d558f6448b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "3bb043763ab4c1f4d2b42a25f9059afb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "161e8dbf4814a3fda6a2ce759de13da1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "f0c7b38729d28de389221ef2ec5ef97a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "7f9e0ec259dba5d83aefc0bccb3f5c95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "f8efa6ef20fa9f94c38516205a661425"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "85fccc29c458c49ab577caedcdded3ff"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "f2b9f0d42a2b61e3c8ab75692b42e7de"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "3df1eb3224ff98f5e4acb381904f4e4c"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "3488b5bc1970893e7e6e7a56de0bb7e8"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "762cbda937a93d7a8ab6be34619b06dd"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "0d63b784ea8c93c2852ea5a59300e0fa"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "c308f2f51d89c05e6e13aa39e3f84810"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "ec85737480ccfbd19fda64e3259d28e1"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "a127a14531571d6543d066959c4d104d"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "44fd48f12b8448b53d8dc787b49c9913"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "0110f2a07ca0b3b1af1ce84140f667b0"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "1529a726bde92660cd00006793f56f9d"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "317142be39f5ab2488069dfc468c1e04"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "65b438fdaa97c7821f8bc59c5cc3a032"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "86d1eac3c3fe16f63e0c7a8cdd7ad3be"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "ee7ae37ccc82f185f4dd2dc13b150a6e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "dcbcdd07c0017f4f3f935a1b2749a4be"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "8d0f4e12b3093e03a6e5b64eef9d0528"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "42577820bec5231acdc0924ba98fe80e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "0173597e317d38c66a1d4487849bee45"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "4dd186970feb3eefddbf85c6e83538b3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "0b3e22cd188d3816ea92f83fea04f255"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "ae6e35243a959b72d07d193ae9ce965f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "3bf7859c24637edd92899a16fc56799c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "eee9c2a132bc165d485f696f6337d9f9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "c1b33822906b3b332b0f22f3248e965d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "71a213f88dad068f778b5b8fc0781fab"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "6465f046efcfdc19ea135726ab116061"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "f39ceb88e27b776f7256d6c5b8f48f52"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "22bed550dfe022e233f8d5a5cbe49cd9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "30d7d82ff0835d3209cfe907441d759d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "5e14c9ac1d9d27651c1a8d543f692033"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "6fb7fad4ada1185c85f354864eaea657"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "c03a113039412150ce06c9c90cfc7407"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "d4443f0e513d5f983f0898043a6827a6"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "17f668a913cbe4f913a7473e0830a552"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "189a761471d6c8effb2428ffaabbb380"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "4bef8e03eefa4160b95a3cac8a6f02cf"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "b1407d0e73272b12d31a9faa3a5577c4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "dadf12061800d5d3db5f4a3bf5357227"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "d2cca601a90008dd3b1ea8338098927b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "9f65df69e4f3d0bea1cdf8b16a31373a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "e0608fa58a576c456d215a9f438e1e71"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "10261ac5c2b9dfd060666fd25c87384e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "ed32b61061f1b90f3c4f10af5affe41a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "cfb3552aa09142804c247ad6d8fa2864"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "ebe1804d8a21a81e5c1932e1603d4472"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "27aa9760be84d5de5a3172955a8cd69e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "e8378d7c2421a41cad72c20ae11b4c3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "6dd45e0ce91a6a3c0e68c13eebfcd8ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "0ab37c92d193fc3d10b30ef14f7db1eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "fc55f3a020ce8cefc0192115eaa95412"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "0c87ce0b1c4d05413748b4bfa9eccd15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "b2d31fe08f90778929f5f06d03c02327"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "1f30ad0ae879e2b98f143359a1b8e950"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "c58b68e3481028c1f20d98186521b301"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "8be06a6dbfd0aeb2b2178ca52deb0929"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "86d7e7cd1ce735de72b081b95533025b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "818a74475437fd83abb7f443ec415b46"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "cdd4ebe82174247100f842627b1764c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "094e0159ac0924cc7b1334a7fc9c94f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "3b783fb93da9dcbaf54e48779d1008c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "60872e81c5521bb68b459dffce633d87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "7fffb16b1faedaa1165cdce0ffe05197"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "a1691a9117c1578219e73795fa6ff14c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "879ec847dfca7ad46223a4c0a8c9f2ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "202878474c137847ca6672fdd55d7166"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "df9ed6b8ec913f9d2f26b6c53d90b512"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "cc769353f438778b76d4259d17fbeda5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "f9681543f070c52a4ec310fe173c13fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "0a9f0b71b12937e22cef86f9786802a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "8865957da558d254bdd6989895763914"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "a80175f5d2e477b2aa6ae561b7e56de6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "3d4d01da5017ea31d280b62eb4eb9c4f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "763a78e403a57a7863ceff50a389182b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "d225073a3135fdac53ba97575bbe6cb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "db79a571f7352ac921920b9c523f8ccf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "14545f7dc0e03a71cc35b84cee1e1135"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "c977f887857d3523fcf6648824afc660"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "bdd0ee3b1bc5205cfebf91c9d3e966b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "7d258b6d2a0a33250a42253589da5148"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "5c0ca144eeff2d424decb88818eb06de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "1412339b9d26af259edbf9eb3fe3cf9c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "4e26c7c038dbe72e6c3a5ba3d8c2fba8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "56b57694be1497ff2d34261d00801bdd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "12b795e2febb57e06447aafcdb9178ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "46a84cd740e4c0f56dc12b5c5e4d146b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "995ecb6793b0bbc94d0159393cdd23f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "920d11fbf1f24ce90f144a2e73a2cf4b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "b57c8ae94f1528916fb79fd45dd052cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "85c2d19bd07ae5cea5781c453a745fc4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "ea565545ea87f444f4a16df0b0b5ef5f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "e9ad0f25353df1d41b65e8b2a7d50df0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "c5f9ca125c0ace4d05cfb28db8385f9e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "cd75f8e13bfa93a4b108ba92b38e0737"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "eed6ee3dd9f8df0657111e262e2f419f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "af58e182f10355df297911a1baca4ebd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "7c17e5d2c496552a0c2b3da03df66953"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "156095cb66bc4b24083db9c3852bffa2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "d97c691566f01184a68d1bb8fc1f1d28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "48e0d91a497e5c2cb5d31b6f29220214"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "dc6316b9a02e9aa3596fddad2fb2745a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "8f930f7cb61a8e5e8c4af3731acd3dd2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "05685ac092d6fb2c992d107e53db7bae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "f33f8a18671a6f94e91b64fceaa8fae1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "98673a2071d27027e62fae1831aee09d"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "32b23f3a1a6ee1868401037147225783"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "8ef1fe277d877b6ddaab7aa7168a842e"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "6f44243f19554dd1547bc8dd2d8d37cc"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "f239745ac3001433da6ecf3ceea1805c"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "402828284522534560e7814572996088"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d56fac9e72d050498fc3db9d555eddc3"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "f1f8f62f10b2d16ae25fe092df773228"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "96a36a340a886f51da9c9185a1870c2d"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "04501a35044cc3230af8cd4cc516849c"
  },
  {
    "url": "categories/index.html",
    "revision": "eda15a4a012efab20e13aca6c8b0b782"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "926ee52f5f7ffae567280cadb5f14508"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "bd36dd9a7c328c26a5c483332ab970fc"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "e060a471abc259647056d864851c7e0c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Annotation.html",
    "revision": "8949a6e6af9c41a05a8ac082812f9b1a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "fae9fd87a074f54d02d86a7282d45ede"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "1f6bf16d23f20936fd91f3e4bfd53d8d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "7d771d14fd52d60f87d895ce788e05b5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "83421d446eb758d0f4b80790730446d9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "5501eb9d2d10a391552fe41c08e5a509"
  },
  {
    "url": "categories/java/_books/springBoot/config/Cors.html",
    "revision": "9d898adb392a56bbdb94b6ad9c9d6dfb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "799476fa9343b8621fe95a8598a73dc7"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "a955272a68fdb82aa20a386ac7e39988"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "0118932f5a7adbf68d888597a9e9a03c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "0a0ba14762e591c1cf99614a610fbd87"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "82184f1cb051dc74f488cb88894baa3f"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "62039d443c22c6692113644a18f5c059"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "b8318076d9860d9c1edd6bbcddf9fbc3"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "d5f40b4535a2cdd0d0feace041da0cc2"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "4fa96fd89b4e26f090b00207bf0c654d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "73c1e2ec380d2eba89f1b58d04494356"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "0447f44f40b739420cf9159bc6c28cae"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "11a7a630f0b32942ddd4c9da9b6632b6"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "f821e8b8beea79bad46afd613df8e945"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "0d686aa414606870c292023a8617c8a9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "65458b69ad8e837a8a13bc3118026b93"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "ca739aee9c0a0dd59a0725e425160ee5"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "4cf8cb003aa241ff6bffb3f24fd44897"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "1c90e3559912b4adaa439a5e8da83497"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "2baaf8d711628b2b70abd5efce029e27"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "79e26a200fb0dfa881f634329b016c6b"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "d2badc6db52fa89c855117ccaee6e352"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "55e3ae982987e15ca3e1427c25b3c3aa"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "f611a1379dce223713c392e4aab33d07"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "1b500b4dfcb286fa0d3d9b3898ec4df4"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "69885189152a14cbd6c3f0afb6957c18"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "9ab483c60d05b9d1ba7075efb65bee0d"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "cdc59df0bb6b3dec14f52b7c2a6c4743"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "1cad1c9225360513c73dee76414a582a"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "be7351108fbc9c8e5917cf9c1e936a33"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "c139d90bba79a2f2624c9c07b4cc9483"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "73f56adfe670666589c4a8814f001364"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "67af6e74a769c103d4882ee33bcd04e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "e49a1d48db07abf2e6c55e3e8ba5ad49"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "9326ebdd3dec8530d5ec7e87537493a5"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "9ace7e2bc04686085affd5dc0fa66bd8"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "cbc55594d0d1466d9dbd87042b4f21c6"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "b1082036bb385a8100c628d2e0ceaed6"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "d7ec616cc74d56abad83dcb5884a0fd5"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "906b094f19452cbce79dcae82f28c59e"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "e73cca35a40ae787a38a5aa74cedd912"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "6df6e3bf5980e8450ac0d5568d062a01"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "7ff50579fbe6387120ff248770d7fb61"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "e43201adb0ef6c0576e953986e3c3836"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "0d4af32c47d8e9d93eadfb26367a82ec"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "b23b2a268ab7d268e2592a1f22a97ba2"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "1e06bd12f3615bbe0bf52c883102364d"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "6da677b8c4a8557dc75f767ebd41a89b"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "568cbacc03c2f581f3fd295c171ae91d"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "e3c27ad25a333423aa04fe9d27e8a41d"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "d7d71ba89d53367ac32e797f88fde554"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "0b212c65adac7da35f7dad722448ca17"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "894ca641fac581b197884d776f72375c"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "01a45b2d4081d9e2d51c9af7c75bc470"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "2b524a9c67880b2d53b3426d4e2897d1"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "e7564c65d3cf67cf2675f509202ccbf9"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "c53c1c2ea2980d472324f805d8b27468"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "adc88bd502e2566b7b4a898c274bec29"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "ceed70b2de5a07def0aa145d0e6204bc"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "cb8fb7970caf0a55591e23e3fb737eb1"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "16fd0a024bba283f89b5a79a0775ea30"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "bebfa0b5aa35aea25e762a537ab2d172"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "cb857a1c95ff23ac10f372c262cf72e2"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "bc10bb91a652fd3b8d1874eeddc10c49"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "a2e281856c861a61150cdc7f71b7c27a"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "cfa00aba5159456120995a1dd70455f4"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "62be8c87ab032ba513857761cd5ed490"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "6798b3c502b4e6f5eaa692f0f2bdfb7e"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "4a21497b8713789408adfd88dde96098"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "cf727687a2cb9891e298f9750f87e3b7"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "45d7904336a147f9a3628bd73f28f3cf"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "510987287edce929133262ccfded9290"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "5a00983050710f291db208868f8c78f7"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "70ab3ff1fa823d8a6e7cd0b2c882124d"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "740119499cfae3d3f09e51b294b1ff1e"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "8c8894b78ea7d41208237891cdf7eae2"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "7425e2aa81602d45d8fb0b4a3a189289"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "0a240fa93b9450845149329e92d7852b"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "dda9104b01792b18b2e0bbc61d8f8ac5"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "8503e7ce88479fee51b66b7f11d4024c"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "68e0a0aa4b893a0003cac1f27c98bd08"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "2028fd70a124e0325ad33cd1a41a1acc"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "d2aff981bd57c69a1e7e2e38a1e0b8f1"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "ebdb106497d08b1ce283beb3c48d3370"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "70a360a50c665babf2a502dd0605af48"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "2e34eb19cbc21dfbf9d40f39b90d4bba"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "5a0b1114f764e89481cd662df50e2b77"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "27a095ec27548b8d36d6e64d51ce1c07"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "4448159433c8b7d1a6c6bcb2c1a9ac6f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "aa7a8ec567cc3ef931fe41bd6a1c5acf"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "ce69febf4011688dd8128e8041d633e3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "76691ebb6e499572fd2c050e52b080ad"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "99ba552a6b7b58a3c849da8417e97521"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "d3d7e03f1d2a1198ab3ec18471f6deec"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "9606db36f9bd2566737e28d3f6f6166e"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "8f68e866bbf708bb5af412d4e2c13c0a"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "a8a83ab8d99a4a1115993b54f37c2aaf"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "36b6d4e7b88edde8262a29f31362395c"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "ec035cccda6842c43037376dc779b6bf"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "370f283f8e6e16334f823e2f864f45e1"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "8f9b219c497bd9813605866489e093a6"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "6f6f66b8654f82f4ea46ff8653f4b153"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "53514728f783a6974fb9571afb75716b"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "845451aa11a1b2e102dea0604b7f352d"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "5fa888a27907cf9e154b69bb9e2764f4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "ce9018c4dd4e668535087ead16a315be"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "5ed24d57e5f2433fe7d851368325dbc4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "f1ab15f8c83eca5ab8a939448e9ffd12"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "07e6492e380a1d696932fad9a0809da3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "0d4ad9f27815a764e5a972e0d3578907"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "9586d78d4be442fbc29a86d62e8f929b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "310e427300b9b9a7d9d62f64d7f70c53"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "07013c6a25c990599fa16ac52e1d22be"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "5e002c345bcedcc1f4f5a12e2823aeea"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "4227a692b1c2efe4ca2b77071ce29aeb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "e3fdaccd39497d453142d2eca1cea1b8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "f84fca1c01c6806987b7da5f299d18e8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "ff599d1b5c3f990e9c2ced2a09027589"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "1b8fffb3e3d6eb4e50a2e88264382882"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "bb5451db78e11a9d13e7197f92ea2319"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "73cd6430b3cae2c7099cfd5a3c0cfd80"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "3f5f059c16ceb24b1e5497124f694f8b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "5b6b4ddaa4c45e35475b521f89ac10ce"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "c6c0cb1705aad1fd0dbf30638ca2ef72"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "64deb7bc98e23a85cbed3b6082347794"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "9d6e5ae0604fba2fb1f607833bbe2a1f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "e6b9794ed2de412430dbc4124d98c51a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "57b568ff9cdd05a5df3a20c02d8f966c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "9fe1ad4efb5921c566166dcf8571fbbc"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "eabdbf0a51726b106bb4ebe8f674993a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "4c596d99318fbce6bb651b84b0b281fd"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "5adcf054af66f5875365f59695bde32e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "6c07c022a5e62d175a5c46c875a771fa"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "70077433d766ff9803332d6e1bc0e2ff"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "49867c66309a1ae0c520cc4a2c7b1156"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "6a89cba6dec4167b7db642d5c7cbeff1"
  },
  {
    "url": "categories/os/index.html",
    "revision": "92b5e240893a24e53d7209ca9700fdda"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "789b76cc87dfafcee7b2f2507d22b018"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "ea996204496e1672b5914d65e81e5d22"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "a882c2a1415fa62331db34be7362761b"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "5c1e529b4a81d0b64d169ee479d79072"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "455682fc68882ec1f2b504d7d6fb9e3a"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "9135402076f36f91bc54d2e1d14d4298"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "6d00860af5e5787731f1c178866e0a40"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "ced07d8bf013e37f960b35b0a8e9e48a"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "dafe9c05df1e83fa1c328f2aae0d7f5d"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "c41a79026042e2bbc7c6cbd0784c082c"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "a43fdd5f2bd23039e902fe0d99b38531"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "3d02a240d9a931e39c2445335c7213a2"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "225fef818d44c273927b80c089ae2abf"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "0a8e25a9bda2f931368a508aabfd5d8d"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "7658a2f43e6528523cc12804fa8988b0"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "619e8819ec2ec2b40a02c0869c4e6424"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "387a08e96febb48555f89a61ef940434"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "00c5d1099ad77b68b12b74b537b5ca59"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "59a228e206a083165cd62436c6a2875e"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "25db96605b83ce7597cab8cef24fb7f3"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "b3e9f13724929651593f6598f34f3011"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "cd323734aff265bd476fde44f5b4d301"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "d3f883e02a65e27f6a4a8a966cfed1dc"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "c0fb7326654c9591ab2c1f283ba670f6"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "96530b8728cef935aef3b6f92f9654d3"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "494416efcfcafd7d09d6777c953480c4"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "7db16d28e69004a9121377655b533bc0"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "99977704ff7be1017c74d9927dbe7b92"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "f0fefb3c90998c6ce7caad5437ea212f"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "e520f1aca1209389de464e2bfbfb39d1"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "d19dcfa981b82e69a20de0b2337b6a5d"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "267798c348f27a1b0112f2108a16c00c"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "02d160a872b3bfac7931ea45a4ba42fd"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "d17ba107c23e142970f71835acebda47"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "f0aa124f788d50558e62978e1877dfd4"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "b74bd82f388ca7caedd79ec38d897574"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "df84f7666b13012e0c0423c2558786b8"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "25eaa4a86067da0c0fe6951ce5c9a1ac"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "fca195db3453c2bb55e565bf818d3142"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "83318b04d2efd2acbcff265cd563c3ac"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "54252577a84e3e4d0efe986aa579564a"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "c635f32ff7ebed3b30b7f3bc7fc92590"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "03dbaa731a157356f123df99f41544f9"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "1f436eaef1bad8f2ce9fd59fe7fc5ea3"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "c3ee6a4aa1de417830028d9deb9d3d79"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "9eb48e625287377611ff5d5c5274522c"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "8a724b8db48d954dad47a9d5008dfc78"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "a9329b1e7b832d78cac46e79dd656365"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "6ec563e4fbd50060ef44407fb7699358"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "cbc34a3ecc11fbaa3388e9775be0ab8c"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "3047df21b0b7d74ffb285f910cbebdf8"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "cfb4a34378ffc3776c9bc6aee63461fd"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "be1494632a13583003e2ea3cfa3f2ea8"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "679fc45c6477920e635b39374135f564"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "7558b1390343423b2239c5d18b218eb2"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "d875014fa26ce1a420b281b4f8598065"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "c0856dd6096ba93e44d156bbc3d7a6ba"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "be80f2f00385783ab22be821a6ad96f5"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "c95441a3e3c1127b71b7bfcc14041374"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "9362b9b518b8836119cbe9088100799e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "77479b9910a077ce607177173d610627"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "ef594e4cb69b887738e7f2a470c7edbf"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "49db61f91db619ed5bcaa99f3dd1ff50"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "912134e547314c2c5453ab54a26b64b2"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "71cc47f153f73cf01b3415ee08a0ac96"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "37726d04d492795679f7f2c1db60f3ac"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "eb4c0833028a4c182e6c53d7482b2fb0"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "b068cf9a8b93026e264589e3594b4da6"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "87b7119cdb0fff2e0ee4ad28e8a045a9"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "c528e9f8d4c0bdf38829cecc699d32e3"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "e8c51bb8b817eb10619886d02ff326ea"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "d36d180416d3b84d4da71a43024add4a"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "2998f8138a7dc25db44610e4df1bde8e"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "fa825155e6c6a08cc9206aa5bad44c33"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "8cfe2b2920217906be34279ed5924196"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "f0ccbcd28e49dd11663517ac890ec571"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "dd7585575ef04e07e2bcc9cff56a5a32"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "df8f2325514860e9c60da9fb79c02427"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "428036f30191c1f298211fee5882acc7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "43b5cc6ced1556b69ad7117b715e6c90"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "2cf9b36efeb03385b1f2c6a4931db94f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "cf3cc55f4ae745d4deab65bc2367dff6"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "5c10eac158df460bd959b267e853c86e"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "8a9d3a7683c17a2828bedce44d2677d5"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "78ca0cd538e2bad99481dd4c54c09013"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "12847c55e556e47bb159ccb6a03358e1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "1dbdaaafbc0acf7d4959a375b2d18728"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "199a9a19ad69714aae63c73d73350735"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "d92ae71c9df321899a328aa589377abd"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "37026ae97264713557327a99df11e8e5"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "9755d6a8486a8fe9930cdaed62f52564"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "90302dd0b1a98f7b944b67f2eedbe87f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "5ff0b0a27cfe9a127c81935995fa12f9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "d07edc970ec76cbc0a1885527ed20965"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "18f0a1e19c81bbb3e1702ec00ac6826f"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "636db1b2a0e5c742a0a50fad23ee96dc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "4fd0830c965aaac9e403bd37fdff2dfd"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "d112a0eaec29baf8f3bba150fa796c3f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "035d4453e0af16f43c93e660c0212b89"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "9b9d38def320d8357edd12f0e3b5b1a9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "048e5e83a35da47e2293344f08c064b9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "907437c385445518326b2562454ba434"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "7454e3611bf70ac34507ad59cec3b133"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "c821a399ed5db4ec26c4d2d85962842a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "8fb72e53f368b29c414442faea56b475"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "e31e647745a59caa8048f49bf2ce7e5e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "3efb7238098e55e02240fa878708c831"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "f655dd6838c4c60ed968516a7c34c09b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "810d3aa769a39ab3e132939017e29c23"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "0163a4d74b757cc19c1c2359af14eb35"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "e72e30c07b35506792d71545cf5d3e9e"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "6bcff47c8efe38dc678b54aa367e2898"
  },
  {
    "url": "categories/php/index.html",
    "revision": "9b2582627377e6e3f02eaaad4dc32760"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "54f54e440bf4ad38a45dcca47b7ed5b2"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "d237849c1e569221a0ed4bda2a3f9f4e"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "ec67d3e24605d625d646c7120c043013"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "5129459dac4ff66d9f95b5c4f75e45a2"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "abe764e4e3b622776d81b140a0fca89d"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "09c92399d9b3cd562305b99917164cbb"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "d35c467436eedd1a95f8ec16eba48f9f"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "d2f44d9af3c68edbbeb81d5b51c431f9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "fc4b8bb96714c20df53879c855e5970c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "e5ee92e4d921b493a4098cf365cd73ad"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "825c8dbed1e296bd4507c788cdce5d55"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "2cddfb05cd46d6c7b147825d560e65b1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "b4b9c08949fc7d9672a8b151feb13318"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "5c5e2f56cdd1d7716ede5225b086255a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "4ef3edb27cdbf211245fdd279e37be73"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "95bd10ecf3f2df4108e822539f09d0bd"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "4ef5c2a0b3f079ebc65888fe9b9154ea"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "dbfcd319c8880beba77be20fd55c3384"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "61383da7b1e18d853052f187f29fe6ca"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "1178e99da621b54a7379c26657c9763f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "268bd92df7c00eed7580bef0e88f89a8"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "391e3abbe58ebc12e49be492c44d663e"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "fa633b5007aed4bdec2f84d389eaf254"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "6b42528bc04cc4ee3d1c4c058a6cf626"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "936cc30bde82eab4d2cefcca5021549d"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "516af1b9cd8227af981de51cb727e4ae"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "e7ea8d8c44a79585c5015d055882acb4"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "18bde37a820a632847c9458b45cee4ec"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "bcb1be1e52fbf086ba23012794022d4d"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "616ee1793fafc8253a23a3741cde2d81"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "c82f5fc5d6c962fa1089d051a45e2908"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "5da407b5bd4b04aeab49eb6ee3fc0684"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "9e561a456d7734870cc7c8ee543dc29b"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "4ba00b1edec0c530db5ba855923d99c5"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "ac2b64868700990f6057344157da319b"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "56d160241b2813b297aa8d9b50a8aa14"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "94d0ed672e142f879b64fa47da64ebe5"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "847838f7ed8b93a041cf3212ed1d31a3"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "68e44ccc02f55e5274ce56cdff3e90ce"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "5f00dc5056cefde1060fa392f87b2193"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "5aa64cbe0af0d5c7eb6854bd6a311604"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "b1a950f518df72c75eccf9477db7ce80"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "1187554d0a50a6b82176bb31f80de610"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "49f49b84fb404a6a9b92b963aa066219"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "a395e4673afe12206952b0d45c765fc1"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "e230968577505880ed92af3d28e53ac0"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "0e5b21af4e0ac562f98ab8707c86ff7d"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "ed072799714baecf0380db3a05d3fb34"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "fd16cf332a759f5de5401555a2f2a773"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "346f2335e4f98562ba205bfb2229aa90"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "8f1ef5f3b7567795ede154a07086e21e"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "8b1f073bbfe4dabc69308a46103e442e"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7e792fdc011f1a0411571dfa4e476f24"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "d41c22cdf5c1c068ee7515dcdd215dd2"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "f64a1ec2d7f4f6a7d64181d711a3a519"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "f4e7461c01555ebffe9afc1a3f044c70"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "ca20ca1595dd97626a64c301ec43f1ff"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "67045ccb7e73b7c7aa6d05ed214bc8b6"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "4af5c176ce8d9f6698b4f67681fce9e2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9134d81962a14bbf9dff518cf249cf51"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "b47efe2f0c60fbc21c11da644c7b5d59"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "c44e99a1abcc41499471427f6f496403"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "178fda0cd2686cb45edbaa447ac17ac2"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "24b23f2a9a098006a6d192a0fb9131df"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "ed6d3d1ab6149f889fc19ef3348efd91"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "c72a8b7cec8597731c68b60353cc4463"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "48ff44c285f297f90d1c8e905e5ed25f"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "9e62a45da121537e6cae3f28b2f6ed0c"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "6b617f4dae808f314b07ffe397070f2a"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "de09e64234d4c3873ab04e48b939fd49"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "7c8e4a209a3738664bbf84340a46ee18"
  },
  {
    "url": "categories/system/index.html",
    "revision": "bc2202f404e14ccc21ae0d044c5054e5"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "d141f2a611a640287648ea98efd6c7bb"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "9b7dec41ae26cbe624c5f036e22b0ee1"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "93658abb9a20da560b2d20aa1eeabcb1"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "a30428fa07f897b03e6a17f40f0976fd"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "f76857ea3f7ab5a24549c66353b7fa8e"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "ab5a3726e7839696bcca627c32fdaf85"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "4c45abb87586b3906a0b9e0cb9916636"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "dd0e2a16f4a10ddbea781e53c2c3fad6"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "ffe16645eb5e33ad2419f43f2578d383"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "ceafd5fbb5dfcd2d89a0a562bc1010cd"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "aec72e22e6d7058b815d8ca923dddfbe"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "8a1833aaae514f86828951f289912cdc"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "2e7eea3ac7843db63d1aea523e04d1fb"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "7e3301f6fae5868327e16bba3e2a614c"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "d73bf74021269f4c977872084e6a8b63"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "359ad1bb698a1ff17a5cd51fc32cebfb"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3236c1553b4618fa1eaae0a1097668e3"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "b2d26d75f2216bdbbb706c6d5e4011fb"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "08117ab06b63f2d64f3c119773016c8f"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "3976aa7f677524fd1a83a26f4d26cd6e"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "462064799a079956a474cf90d355d73a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "b5505fc608a51dd7f951a0bdd6253fe5"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "d4c7d803f8c5cfdc33c51a530486016d"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "68b904c22823145445ff8abb3517c4eb"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "7036bb329637921a64ef1ac5d39808e3"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "30d58a6487a0f2046ac42ff4809d38ae"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "2277a6819a6d4cde0254855d26daafa0"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "ed6a95a7adf275c49637c7b4416f2c24"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "ce411c761fa2c49d1c0fc7e352601e7b"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "26e8ea97120b735dea740b79ac0e7446"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d464390e0fabcd0dc8f5a8717f51ebfb"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "e5a1a753b54d039f9484578d469b42ff"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "77e726839038daf66e6b6b42f8fdfdc6"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "5e448723258b10b950c5bb632c84ad76"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "20196980ebbf55444655334e6701460d"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "4e6bda7dd91e3b7a61b159abca281529"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "cff62f26dd18e820878876b5c8b746af"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "e84f87c4af1a2b8615ce9edd2adae724"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "aa96fd61f21e6135bf94c85c11a6d93e"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "94f63cf65445c163d21979d923f67a38"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "ddc6ed2916597cb553d7f636f033f8a4"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "4850869138db2c5be3a0318a0e4aac38"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "b80e4a10b5c26d7e94bf276acf74c12f"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "940f48de76ac5d9cd03de9d1dd051b3a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "90eb8e4b51a8f4337f4aaf923dbcd3db"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "a47b5d0c296b327721a9fe88c39aef07"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "0214d42b2bacdf875b96087e30a1cc00"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "cd5e5e497f08002dd5b4333f124ea9a6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "3650abac8b021ba9edf7d84366b8906e"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "cd21d6110efd33b6d0141bcb21a3e0b3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "924a9b12e3b17701fe7ce6f7d6e0e134"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "ee90c9622f10d6e9be296acd771474e2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "1ca727106cbd1650572e4c0344fc0d1a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "07ccbb50a89877ebd2d4cad629cd9dc8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "6845380cdb92c0dca3b0f1ff2e2bfc86"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "ce31686a438e5a74cd05a87e23db1f2c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "e90fe4d5d32e0047a59a664bb754b363"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "3e04dc05d812d1cf1aa1a36d6ca55991"
  },
  {
    "url": "favorite/index.html",
    "revision": "4c84dd17c1b50fa2be8f4f49f25aa1a2"
  },
  {
    "url": "index.html",
    "revision": "716bf1e892999e72b009c2c10af45cc7"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "99859f07d4b16387580e363f2885dbe1"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "4553facaecb8b24da8469ff9f9704e41"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "be86253ec374c79ba313f76f8339e51a"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "68f87ede082f6fd1b1458975f94d4e34"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "3cbb17810279b276afacc3222709f25c"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "ef675cef2bbe2857c08bd5a9fff92da4"
  },
  {
    "url": "note/index.html",
    "revision": "06f9eaf331f0f6b19c1da3be51466a90"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "748be7f9511ce4346bdee2ed6fe83dc1"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "6c5932e6570b6d352b75e89d35991742"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "a86976cb9a7c6e337cc02d9ee86607ef"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "19e023d77a0f186bcb382dd9e2eaaeb8"
  },
  {
    "url": "share/index.html",
    "revision": "f6010c6f641bd0bda6859b711c1a157c"
  },
  {
    "url": "single/about_me.html",
    "revision": "31df9a4baf0827bf30b0a83b415d2e6b"
  },
  {
    "url": "single/all_article.html",
    "revision": "447f820b3d9f8064f26c358b9cb79f4f"
  },
  {
    "url": "single/welcome.html",
    "revision": "63ee35a7b4fe7089db752239b8c07063"
  },
  {
    "url": "test/index.html",
    "revision": "02c2ece74908869c17374db5efe2fe3a"
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
