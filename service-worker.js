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
    "revision": "ef8bbc38837dc5cf8355ffc2125ea1f6"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "3fac7d44d44131436a108df3698c2dae"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "1d0a7b5ecbee188ec46c1b0f277a96d6"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "d47342055e88875688f55454664fbd43"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "ebf33eadd3ee40c438b873dce1a1a252"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "5ed21508a5cdc8988f4a25d6086b980d"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "792c03798b5e93cf60ce52dfc8497588"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "408d01eb65d6fc5fc3141885483308f6"
  },
  {
    "url": "articles/index.html",
    "revision": "183d4fba4bdb7fa952786be773248611"
  },
  {
    "url": "assets/css/0.styles.a54b61f3.css",
    "revision": "2d48b2215c6be385e30f8c761c9ae334"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2cb830ee.js",
    "revision": "f598867a2f7d69947c4644b89d2d3713"
  },
  {
    "url": "assets/js/10.f3bb5d91.js",
    "revision": "d72e6ecff9fb8c2de35df625e0f28523"
  },
  {
    "url": "assets/js/11.d13ffc71.js",
    "revision": "616380dea12bd75015f68108e2d6a821"
  },
  {
    "url": "assets/js/12.639423b6.js",
    "revision": "d81edf39a3cc62cd9663b5a491ea1138"
  },
  {
    "url": "assets/js/13.6c8fbe4f.js",
    "revision": "bcc357970460bf6392ef074bede4d634"
  },
  {
    "url": "assets/js/14.16fc02a7.js",
    "revision": "183d56b8298e278f7da6134da28c2621"
  },
  {
    "url": "assets/js/15.a165c394.js",
    "revision": "e2702f3ada81cbee0734bd61d434348f"
  },
  {
    "url": "assets/js/2.901af9ca.js",
    "revision": "d20d85432b5b5256fa1e39ff55c732c2"
  },
  {
    "url": "assets/js/5.e25ad6bf.js",
    "revision": "06b9c5ba42e973bc64b690a852f09337"
  },
  {
    "url": "assets/js/6.d5d80e00.js",
    "revision": "ffa24e3d732f404d60e80182f747871b"
  },
  {
    "url": "assets/js/7.91d3b94d.js",
    "revision": "65b0410d25e55e8e4db2b10be64d4eaf"
  },
  {
    "url": "assets/js/8.cd076b1e.js",
    "revision": "f8de00abc7cb1798c6d0ba1c54739aed"
  },
  {
    "url": "assets/js/9.33398ef4.js",
    "revision": "1f7bb96342c1a771d6cb1c571145f0d2"
  },
  {
    "url": "assets/js/vendors~docsearch.c9e42ec6.js",
    "revision": "21f4742f3249069ede7ff0789585af5c"
  },
  {
    "url": "blog/index.html",
    "revision": "4cc93ee3b50ca36e335295ff1e1d87a1"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "d8b1a6bcc4b71cf2a95093d54690ee91"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "ffcb6c84e7ec088c4cdbee055521d638"
  },
  {
    "url": "books/index.html",
    "revision": "0314e3872547ed78356f0af864c0774d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "e7f5c0de8ac5a5ba47126d1c6654bc9b"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "f759744c94e4e3e0c47e3d80bc515fea"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "3bb56356979f55cf2b7f90be948c95ce"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "4142ae0e483c2e4fb96a56749a343c68"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "228a4bc326600e27628ab9759fcadaf1"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "44d6d25083e9b857d2707f494f36e78d"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "705136bc684032e8b0604794c9c092fc"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "64b32a679471eff6a1b17b381f489e04"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "869d4ca04cf5efb4a6787fe686f385fa"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "5b09f7a7348f59e61014a867f45651c9"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "8268cb443c82f345b0ffc309fa446385"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "47496336b4d9d8dc618ca25632aa2d33"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "ab82a2000a29bf618ce70a4c5af66e54"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "b689d2523a5331b6839f676a04fc49c3"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "c0f73952126073cd840056cea9523ff4"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "6e16bc46815fb10b975f5e6716ffdd16"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "58aad7af32f3decf891a2b49c264bcef"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "dabd2a479d98c268f07f8065034b3a89"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "4f051b24189606b437cc22c675375815"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "07cae9cccd964809a6717665b83d9f79"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "38410a3ca4368a63d473637379273e22"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "a14bc110ec340971d4bb7241403dfade"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "f907615f46de86d1044366ce1a94196f"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ddee0cc1f4f2bc519f7a2c6b4a636492"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "2181cf29e0175dca88e5741791dda0d9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "135de0ab2229d2009c6edf57db5b06b6"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "82cea126281df49cd6bc007195392819"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "cf2f6f62533bc0ac773e70ed223dfe18"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "4af8e27cf8ce1efebcb2ad9ce1861909"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "e73c21843229d6695172f736d0625480"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "a6207b0a2296e7f6966784d53d030247"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "3f66d8ee924e6e199cbada04f0dbe48a"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "a40e16f07b0f571c3643f2c47e53d298"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "72a7a289f5a1e4d5d8589c110a9d44ff"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "3a1b2f2329d75800c0088f2bdf8b2740"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "96ac69f3fde39f42c8eae4dd565d4f25"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "2d153b68b9b4d445bca88d6208821051"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "b2c37818d1715ab7bed51348d0e0478c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "1a8345da5b2c13771b009232847e4412"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "8429b259a2339a5961f875c9f9a91a77"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "5ec0e12a756937aeca953ac94b19016d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "e4603c95e0c95e3ae1a1d441c62b9604"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "caf1649237d9e7090f958b961710382c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "407de981a2e360044ebe737d220238e5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "d7e08a0c6b5e461919fe9fb881f88b87"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "d9d6bc138dbadc14ae6a8b5570a6339c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "7770f4f7bf99a8d91684dabcc50fecf3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "665aaf47e8c45c41ef7dc1d262100f8c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "27931feadda5cecc431617b7a450ea07"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "2a276f62c7c66163aab079485e41bb3d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "e346df38936704baa928037109bd3653"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "77ebd4b7a48c78e939da75b81aaf6327"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "bd86736c65667167f8c47b2cc3aeab23"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "d27a470311551aa0f3c177c182bd440d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a5a0c2b438003e6898a4b8fd327b6a64"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "a79a0950874913e9397a3cb64bdee06c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "a2389a5edd6129df43c1fb57165daaec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "15b73543dcbe93bf8d5dfa4b9c6232b8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "fbdd45d483da8d10c2b2948c5f443254"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "28f9cdefecab825f2e9337d91bc23f3e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "ac5b82268817edb01dbe12be3664e75f"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "3a6e77ba660a73efb1979e5bd997c695"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "e9a2093e6dbf05933b8a3c078766aa14"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "40f00961a215c2cc61a5576f0d22da26"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "e6b6f2fa6909f3ff709b08f3c0f1f6ff"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "0a49112f4336b737a7f463e364e32bcf"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "9b79daf59517b1bdce052688df322050"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation.html",
    "revision": "5a653374f7a73fd0309c19c056450d71"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "d76e49e5548e3f03233da74cb7064ef9"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "a80ca82e8dcdf99832361503de7c1d2f"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "12d0ddf64417736f184a058c31048f9d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "a8414655c0198dd33176c79cbc5c649a"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/color.html",
    "revision": "35e6fc5a4d30944187b9a13e8f8f99d7"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/create.html",
    "revision": "dd229ff98d037326bce09c0707f1c567"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "9c1b575cc212a7fff8b3b23d1881eaaa"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "0d1227d13a1f307b76cc794cdd9940e5"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "15bf570df31e3ac4d44d3e3f76aca61c"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "0197bed0621f496e19dee617f2e57b84"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/save.html",
    "revision": "59598b720cb12980839d046483052908"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "757c7eb20fdc49e4b3a78cb3cf48d22d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "c2bedbbdae00c4374df715454a9c4fd6"
  },
  {
    "url": "categories/front-end/_books/canvas/Clip.html",
    "revision": "e0f88cd0f47d637c2765d1168f4928d0"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate.html",
    "revision": "b8d23805b69a26140d31ccfb20d828e7"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "b9e63b7cd4fb7a678e6a1db061d15a6a"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "989906c89a9656233bf92d8e97bd4c7f"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "96b186d0aaa030864bc65e3fc31f91ad"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "947dd248f1e39b1e7f5ad5abc71f0e44"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "44abc2630d02a63772cda63ab1ef35fb"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawArc.html",
    "revision": "7eb3da04762a53aa02a01d351273d54c"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGradient.html",
    "revision": "55fb8b4c05ba483b87a8e7a7162bf269"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGraphics.html",
    "revision": "1635848ab87f4304290da5a1229c9fbb"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawImage.html",
    "revision": "e0fb2375fc3f62b8e7f3b113b476782a"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawPolygon.html",
    "revision": "6fe22de530811e2688ccbb7cbe91f179"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawStyle.html",
    "revision": "3bb64e07ce58a7ced269c07f4e3d0500"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawText.html",
    "revision": "5b161a79a2ffbc302e66d7832be9f077"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "27bb7645f5e73d9e05aa411ad19f0ed5"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "a349e125ceb4ddb7995e2adc9dbac386"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "8742b3af9dfa14dc1cb4c706f18872a4"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "2e1eb5809478668576596b50ef39b758"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "7a8a3281679d674a622e1e333c81d78a"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "bafe0491eef63a631270f3371b8a675c"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "612450221c3d7a261c739a52eaab02f5"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "16ca1bea328fa3481daf9c6eda7f29ce"
  },
  {
    "url": "categories/front-end/_books/canvas/ImageProcess.html",
    "revision": "d039bd2e8eebee598866529178075030"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "0cf70accda7784835f4b753c15410c2a"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction.html",
    "revision": "52822ba60ba9c41242e44d0b1052ad15"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/ball.html",
    "revision": "45948f9ac59f7c806893c06fcc68e78c"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/card.html",
    "revision": "e6b87032a2f8437e8403841499d17b36"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "ee26cffe486b8b5c9fa11d498a890ec3"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "949e65060679cc513faffa7ba372b0f3"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "dce0714f6d80a30c71640de813337172"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "1f0d86236621de44963deaccf5746cab"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "39ebc0003f095dc8e8d36d95d3d41067"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/spotlight.html",
    "revision": "eedacdfe34f056aee50e1e512f6d9409"
  },
  {
    "url": "categories/front-end/_books/canvas/Matrix.html",
    "revision": "156dbf33818696e2cffd1cb4c8854301"
  },
  {
    "url": "categories/front-end/_books/canvas/Point.html",
    "revision": "8d625987252d57f0650811e6017129f4"
  },
  {
    "url": "categories/front-end/_books/canvas/Reference.html",
    "revision": "982b00d02c9a17f69b4eea4787ee8311"
  },
  {
    "url": "categories/front-end/_books/canvas/Save_Restore.html",
    "revision": "c9bb845e928288c9dfd4ca23f8888884"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/coordinate_system.html",
    "revision": "67030913fac696a7428a54a5cb762fff"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "01cb61356836a53364b48e290347e2f5"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform1.html",
    "revision": "eb44a6241f6423f2b714c19c70cae41c"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform2.html",
    "revision": "aaf828d834d75b8748be2c35e769f526"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "f8894a32b3304e2d4c57cbd7c5f9d755"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "d8dcb75532ce2260dc33ee035df10fd1"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "18a98bec1a55e292e6064219daa89e0d"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "c7a3e1d9659dea2e93395dbad236482b"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "b4ef21104efe05754b3160bff3ff6654"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "a9cc2facea5380c6854010ac6430b3a3"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "104d8ef82f328360e5762dd40eecbd40"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "6f2b503b8817896a5700320879ca7dde"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "456c39bcc0ef1d1bcd80af8dcae6a9d3"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "d67fe328afb1b4594ff7e2c689e87253"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "60c95cbd5aafc40ab6424d205d84ab70"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "2e239e498a7e58b1a6cacdeebce2ab22"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "58a2dcd3b2187e84b27056feecb9ff6c"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "f176c4ff2128d55f31cb91043c863027"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "d1eadb2a954069c7ab04e8a53edb417d"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "70187a5f2aca3b6300ee8f0f225d8935"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "04e011e9293d4344836dab7591daef48"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "670d21388ca982d322b1fccc79825314"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "bc7e2dca76746acb851cbe3e63d69210"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "2d8693c49ed2eb14c129875e6d4da3be"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "27cc63ecb1d8136cb692bb63f38ebd9f"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "2fc3fddf5db9358a69aa039a7685aae0"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "b845f4fc5fb6b8ec1a75f3597a72da7e"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "878a8577032a9fd840c925742c6c56d7"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "4e52930d56f1433c7f418c17ce8582ee"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "c11af7d06f1ffc25967d4f306da8c101"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "f4a1f44f618152a18f9f6ed812335658"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "e19beae0e41844838ecb2aaffff2ce7e"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "ad3ca69237c2be43090f1cc077458cec"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "4c6560c99646c5e7acfe987933fb4639"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "197970c9731911fbc7c467cac7069a08"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "659a270bdf6ba878ce8e4cb363c2b7dc"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "1c72f02423413e57e856e0d576f0025b"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "c129e096cda8aa7ca63ac4796a8f2cf5"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "740d79ad048616fd466632c96c204e27"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "97c62d03714353ac3bf648b9cbdaf08a"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "5d2f024b8545e8e941a54a2fc75a8636"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "31db9e7b08819a3750e61943b3e9d177"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "9674a647cf39ddbb9aad3773453c7f32"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "13a28d92d7d47c93c59c3d77bca6ae04"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "5ecca5fe9d3f2ad9f30133aa946ce514"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "d6a0c7dfa5c6e21ac21e3a803a42b599"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "384a8788d85adf5d257fba3d6ebedf80"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "5c64809184d8801798db534fd85bcfd4"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "7868bd62a083ca21ce9d6b2452c1a306"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "be4cd9c85090605173cf836ebcb22f8e"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "9d7457f0181d4f3949429346599af43b"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "9b8d36b71e26d05d94c27b3110bee050"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "ac3f320cfd39bd7e9e80d59fcce02f45"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "d5b1bb952afb84c235512c3db3d5d48e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "737970d27bc3b27543fdb4abefc9c5f2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "8f90ac7c8004008aac8e4d2ea1fc1189"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "96d36181a4e532dc0b4cd6e1e0a7d1c9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "f5a2c1f047180276c220de8f6a28c6c0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "a983cf9f26c475290920aafcb8cadae1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "c8299a9e850ce7e718d5c2b95af27c5a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "bb22a529b715b4421781cdfb2aba45e0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "9127b852a51387c0f2e7589f98742d99"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "ebb8354e3054af70daafc141296c718d"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "5961145ef561393e143ad7021a9f5e72"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "289b21cc12c51fd90369bb75bb5f6b9c"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "65e6599b90d8a78531dd083d9a224a09"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "1436aae530c045cf019c44c3d1be3c43"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "a3ed9bc9a337c59244934923fdbd7c60"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "35f78d9bb0073359a2df95f7770ba0b7"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "33daff095a68a9b1f385a8ff51a2adcc"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "0bdd904c62b3c9c3455d77cfb38171ef"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "f1e40f833bf38e633a5e32173ac1a6f3"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "5b6a3af39349672a7cb2967328e5f62c"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "6f0e6fdd14a7bfd540c517c1ee63d58e"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "c5d2704de2164711e1ba2f9195ac7c58"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "90d207787d4c365f9cb332fe246bccdf"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "ee2f51a29214c9ff0b7242498a16f5d5"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "7ef101938dbbe02df48edc75c06bca67"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "a67f697aa67c4e0f8772c4ae1b9deac4"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "be355e47e6f330b616c6a96a63720df0"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "746e7059dce6d3e2832914a57a87a972"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "32a3825da020ab08b9454c7899bc8806"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "4757c7c25ab34818d0de5dc6f566ec2c"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "ac3b3d832d9e80565b2371140af5e81e"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "d5d88b22123d9683cf1f447d8799b846"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "f5515724be1464324d5438e3e5dc60fc"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "c08d702e28a67262842182d6776f7dc1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "081b05367b8ee8cebfd8064c5a39cdf0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "637cdbd03e0f23d5c92a7dd4a9e3be33"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "6c06af93a27457b539b7461d5e3a6f0d"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "3a3fa548a4877e5bcb4da2fb6ffd26b7"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "aa028d7fc819317325a8f5f9f3e4353e"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "58a779881b372549da1c94ee3bc4df42"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "b36939e977042c1ec93bda8d4f892f77"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "f3380ede33b0f0a7eec80690d0f52e1d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "ef270d3c1afbde03a48be68c830a1a69"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "203693029759f1683746d8711bcbde56"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "816e50b1fc2bcc3f3d9d9ee162f6527d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "01a3fd25921998e90a3ceedc4655658b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "f14b5c3ca6d0de5bdf21828ed7811b91"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "421aae590ecb16db1663eca0a833454d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "adc4766a069d5087b895e099ac73c535"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "a8118dc3d450fbe6253f57b38b8fcfad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "f42b9685dc844c1cb8af8fa14e2ac1f6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "008866878bebfd81aa01f020b882ffd3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "7c64e1ce43d2ae462d25477e34f37601"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "a8b20a97117663e6bd702acaefd6e59e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "5d377c5ae3bc3a067b3bc4fc675d47cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "c486a6fb0adcb85de7b15d09a524e3ea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2e8a32f5a4d975ba2d01eeccc14af21d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "ea5677e978fa2f54ce2b334ff32d4b33"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "616852c03c83ed1c88f8c9c1dcc4fc0c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "0f4d5860b8ea295e438f6c54c67af26e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "76a423127904602f653552d1d27ce2ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "2c6913a493659bfed371accc5408ce4d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "288e3954b460d3bd42855fdad6201efc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "810b596bf54ecc6262d4ef9641117884"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "f48c6fb03e4771cebfeada96f748da0c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "c558e25569aa620d88a50691485fe961"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "5a9ddfc063d7ec5f0ce3000231946b3d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "bfeadafd70acdd885649c5f98e3dbd71"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "2cd3c3d3ac7fbb0a9bf894ffec5e7a56"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "a47b5ec44df19a9179a80f46215a1c9d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "3b28d0feb1fd92d4d6f0a5fa07695617"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "a72d01be74c5c73c6e1004a2793ca955"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "6241e73bbb5303343b1dd03a446f5f71"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "eb4eadea967d7e3b2e52885b389c5032"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "b67a8e0d196743ee0af1ea0f886342de"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "c5503e8492b9808e34c1d5ef4f9889d4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "795236809f9d90cb92e565f6a3742319"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "8866c5064b399e35c1276155f02f562b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "ae163e2ea57cd9e1acd254b9103cde0c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "97eb6402d49f85f0c798f7a5952f1f10"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "bef2ea6e5a1b80ff254a79c5fe985883"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "011eb4afeb13fec39b0ef622b4165f69"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "6a0216224a426914601cfb8e233ffc64"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "2e694d99a9f0c8313f9f930d51852144"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "7a15556ed7f1ec17f66eaba322cae0b4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "4bbe1f2e90fa73b938fdf569a143aece"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "06ed3dd8483889bee87e29ab91676695"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "cb145a757235127c1cbe0255720202ff"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "2e020ff5ca6b4e8f84a971d2d690a1df"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a37084c2d5be76e1a032462df8091b47"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "2dbd77156fdcf7952b23c719d26110be"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "8d0ff92461ed990cd403b2c5d42e34af"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "a167db55d015f8e26707368fdb87bb41"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "daf0dda55916772fcf795bf0f8ce5af6"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ab0983158fc7a3da203a88e59e6205c2"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "b5fb0f391ae25a6cdcab3836b844c3ac"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "70022e70032e74351dc8d58e7695708e"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "f66ae3075aeb68baf35af51e320a7002"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "c80da0ba8a1fd282555e1d1edf70316a"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "f97f1604295dc36aa37b47b0faabc073"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "1939ed2c7d9b86a9ee5062b52780bff1"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "15afd34ae66f267c3fe3b6e8b2ed3ad9"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "3e34c187a4435be03f4a8cd2970d4fcc"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "669a87fbd187f370d915093461cf6fbc"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "6435c5a8626e08b49fdb307c34672d21"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "10bd55641e40779a047dc701a246ec62"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "716119af6c23c78fde1eaeb27cd5ae96"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "55b80480596ead9e490c6167ca6956c5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "26a4b19214922f799fa5faa184186670"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "e26cf85c0e9a9597d6d30012761bc09a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "7893b8713a567989936537b49021d3fc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "b28779e5e7eb159c2201dd796d283629"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "b368e8cc4ae77b7236f7249a8d7db6d9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "781c02f3f4e8682495dabd1656b6ba0a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "8616fdf5b1493725884ffb68ce66786e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "79fe6424241badbe0fc49bbe452ac993"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "53805d580eb5f5cb87b638ac4f80dd2f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "60402cba232135f2802803e4b6bbed1f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "04e2d1c2524cc655111275fc24e65bc3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "431e41ee3b973269bafd7021cde32b49"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "1499c90300054f1a3946ca915d8ce8c2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "e4e0fd9ffe369b300a69cc0c2ff2962e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "d93a6b0cb63fb1e2a37e42d4d3e94794"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "44fdf05e73da9e01838e9d1083c17272"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "0f70c383d18c03c027b4b1d578c7e992"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "da74ae64bfc4351b58bc459d76dc0182"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "29d1da112d6aaf5f1ec293e3f9ed9e87"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "4b057e8001715fb90068eb64464f1669"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "cec527937cafac3333cc5ee9c78cfe76"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "5eaf4535e5b712f1b6b3c21ddf796389"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "594a460e25ffd416eee5cf371eb4ca20"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "576e7857cee09375df6d36699b826d29"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "cb9fa7ff21f6e51a08e07dd614e40c32"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "ff3d6acf8d4604bf30d6d132e25c2792"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "c3e44b8d4379a48e12dfdbe779ef0cda"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "7b117e8391b56a30a70074147bbdd1db"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "a388edf72dc5e995d14fe803d6b930c7"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "7dcd0d8b5d0495f69e2035a59fb0eeeb"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "a397f230530faedea18759a1f5f76341"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "e395439cfa8f4e74a2dd04c4740b479c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "9f57c3f20a499d50de97edc0305cd2f8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "0434a69e89b705e57f00e9e8ab8688f3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "240a194d9fdd5463076920a0775d85a1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "f5a4016ca39d8b47acecc7c1fe36382e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "e8b02e54fe39bcdef01525a6856759eb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "922d8f1410ed65db36d09e068b7adf63"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "42d16261ddf404836f08b3096f55444b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "847672549697b7d5fd2102de256e76ae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "dfb02f1aeb2d97de86933659d663c454"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "2fbe37473ef83ffd15f7815d16d292a1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "c59b2617bcbb16d4bd2e90a07163d914"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "9eaf3e8124fe81e06801eb2008b9154a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "9e1a083a82f6c1ee35adfd13bb35e38f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "b7aa616051e015dd0fb516492f9b8a59"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "26939cd550eaf353436a76889cbace8d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "002080e96bd59596ee6e4c5b239a5067"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "3d369705f88f353c7dbe92688bb737ec"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "38fb46d9c666f6c958589f4e3373f7a7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "dbed59052cc8f2842bd069182754a3f9"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "4a177529979f9d0a06555e7f584a6e9e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "da45816a24022e400063bcafe647b0a5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "d541c96f83ebd937ca94ca04c9e06fd6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "31f4f43919640e019e99b451a231c095"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "63ccb40cbbff7bec46ff785a1f7e76cd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "7397d443fc1bdd151e1ddc0d0a1c5d0f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "95038d99ba5bf8d416b47d7d9f9d8aa1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "a89bf9d68e76f72e4fafd01bd639cefc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "1e84facc7ebbe1f8157f2c7b2554ccb5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "b14badbacda8f31c2fdc110e1aff6ed4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "9864df652035d6112a3f62b6181e24e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "26162374bf02d786f564918640cbea92"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "8f6cf17a4a9fa2ea3c00582f45f8cc9c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "bc4d742b8bbcc02eba63cda780705675"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "0ca6ea210945ca9196e4b7886768aa77"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "5cc948d6a80b373fcd9938481ab5f665"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "3690d359293f1cfd9f185ce8751486ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "07ef22b6f4e721653794876beed3abb7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "69f3af0faef43a02cf9aa90159cbe893"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "90daeb8cb764a99cd456951f82275192"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "2449ea1ac0a229b8c3426cafb404485b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "fa9d68e1623126e6a13df9946e0edce2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "f379a363fb1f28a8d81653b5ec0b8201"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "c202a3b629998a0eb5afb2e2cff54fcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "53f400c8f53fa5e73db9ea5d56af5531"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "5045016695390047e08cdf7952651452"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "878a081d1d216180eae1436cd08b7fe6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "4afdbb81fcbf0e1e2ef0ec886003b5a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "f22a2fe81f14a4e9db600f92b917313c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "7e20794c7bb08a8879cd0c523f78140e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "bc07d3a5822600381e5d195db81421f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "701067ed86dd1976e28ec6c8077a3d43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "94855f9788bf047613eae19e000458e9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "5c3640a6e6014fa96b093c7b2544bf8d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "ebc77a329f341a315318aa21976b887c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "e39217db74918c48ac01406d664dabd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "41e7617acd45dd4db4c8477291911cfc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "cf4c20c8bd93f1a5185603368b7cc054"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "0c41c83fcd6a995abde04fae848b0a08"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "e35df8c6ae240e062fe89acf06e14493"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "7a7327b2b71ee0f32b8e2a2cffe94fea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "3a01470873683efae7ed1aa00c4f4c57"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "aa913081cc930b1c5e1b01f8b321a4ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "bf429d6b805eef6c4a699b2b0e6ce51e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "7f07b5eda5dd8fc996fb2e892ec8a87a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "648918b7b0efcbe15a19cb9379d04f7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "b912d483863ce7d907904c6de8389568"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "8475116046a76ae9b0c70afdf73d1c1f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "267b27e55ae0afef80a4208daaeeaecf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "01353f9516c42f11ea6f4505ceb22138"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "c18148a53f9cf5f78117b8d9b1f08920"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "a3c65ce49d228980e5ac6214f8d65104"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "2581c7c349d86cf6c5efa713abeda899"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "e91be5919b5ce163f039fdd2d22e6b6a"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "3d6893af809de9b868415a4542232f37"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "6149e236e4e6396759f932e05fec0eec"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "e95fa492053e0b81dceebeec009464de"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "880a06b624e61e1a18e3b98561d12cb5"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "3c099ae9b11833d9f64d16c6ba84756b"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "853c6db5b5d3affc69591eb1f73c158d"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "38de0b221a6fcaeb38ef65c10e7125c5"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "2b304f8236677d0b40e2b976219716c8"
  },
  {
    "url": "categories/index.html",
    "revision": "22c19c87c99c7e2b4265ec3adcbc56ed"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "5690435d5c1f25bc2cfdd3a076fd1b18"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "cf435be3e5d454ad269cbb9ed262154d"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "3bc61f907a1ea44c484573be27ed9dcb"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "2a10865145e5091408c929caad730ed0"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "478cfb73c791127ea8fc9794820c6c73"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "7d5a1fd36d7af3427f99be8078a8ca70"
  },
  {
    "url": "categories/java/index.html",
    "revision": "14ea83e0f032cb27a4f64719a34c43d4"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "35486b0a53ff4e7c41b8a3e267e7409e"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "827e911a00baeb3afd97482e332abaa5"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "6a63220f33c00fba27bf86b53fd116e8"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "029ad2819b79188a9f106ea6ebcb3c24"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "2e5679fb8885622d83a32e35c94c20c3"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "41af957ef2eebff3391340aca23aba92"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "56e34437f207fe435b4a4a3d579e1418"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "b2b5f10e4d5825bf85b402551618e2cf"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "67fbb916379945fbbace0acee1f331a9"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "2068f411613de20fee28a0c2b3e1f0db"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "812ff31db7b93ceb0b65725eaf517c61"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "b5c20b3f3c8736b71255e3a112cb8be9"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "e03647438c8158e16e1f83562b915a1e"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "acf2661c2fa842f283f4277a842a37df"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "bf4f368209a01a4875d4d404cc72a061"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "24b7141de4c5f18efbc62d6623845112"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "4232a085c362c8f3fb436aaa090f0113"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "2c377789cbd59ed6f8782b0eca71c2bf"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "a0fc5facc669bc081ead79e9e20129c7"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "dfff36ee95f96259d329796ad84962af"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "adfab55791317ecce017dbfe44cf96fb"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "a50762d4256e521d3a909ae30a3fd990"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "e830f24a5954715364b2bb60ca4c9ee0"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "d1fe2f663c3c853ab0a332973b82ad0d"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "ea191db6c7a0e90a75c8674039373f60"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "4fe47475fc4aa0a29eded558c318cafa"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "6fa413cc61f903ef760df0fedb106b36"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "97a452fbbf7f6329c769bd6ac6fe7399"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "d52bdbef33ce8ab9d2c034cc0cb8e92d"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "ef05188e6a3df6574df9ded973835738"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "902ad5fc8bf9f1089a08d3d20108f7ab"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "1821d8c256bc9ec7e2a68f7af9611ee3"
  },
  {
    "url": "categories/nodejs/_books/egg/Render.html",
    "revision": "493a6546f875c7c3d8708d8a2182b355"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "3b65cc72f16ae37106570f2e95369ebc"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "32b5c8d02eff65e6eefa6cce39f214cb"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "e28dd00eaf612e9468c084f835d0472e"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "1f793c6ce3020e92c073144baac73345"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "a4e1fd277b4e4f74cadb8d4907f41260"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "fad2b761eacf5224c6365fc5205d94bb"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "e632ff2602db9da390549811a0690d93"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "fabf14ff9fb13d3f320c7562a893b504"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "eb18d3b7eb995e527f30d1332c03a72f"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "d3a77c04ff71990255260656b812f34e"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "8c73894e95b112675e304dcaa6cba954"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "11c2882fcde23239a10e1cd42d4d8689"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "43c7d0dc55412f90bbf38910d5c07090"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "306c553f4eb4319e1db90701141d321e"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "2112d7cc5cdc49df2cf4479736a75fe3"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "91bc942eafe9180e635a0b8499b6cb7d"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "1ae37aaf2ccb0ab88f5dc8ab0127e66a"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "8db16b2da90624f4913265c84acd1ea0"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "f65c608e9d0e6da74a8fc26455081568"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "92d83301f7c68357976dcdce48a87ede"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "4b70f8ae1b0a7259c7a9d8adfea1700c"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "5341ddb7c1edab2128db59162e7c7eeb"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "12f94026f7fdd2712a37d5e7cdd5874e"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8e39a8fe8e73946e6115d66b424791db"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "885368f1c2b37ba0832381deb207a0e6"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "ec088e3e092ec0173c75dca7fba31066"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "e68e98860d8dc5823cd00f1cb9ed9329"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "24e1710f6534aeebf838cd75fbb5697b"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "4e78d9d2080c50a152e7cd4669aa9fca"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "33396966a24a1fab03094a5f81780f39"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "988d29c2d64daf274d6687ebd6b068e8"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "206b9d523dd5572a38df0233e543daa8"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "d1e3858242a581fe5bd76832521d5bcb"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "34bf13dddff1bd6ae3e233b0261a7b8b"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "04704cc02e442f35f158efc67ad00e10"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "2e25d456419f2e23c7995e8d72da93f0"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "c6f4472624b90db697f453a538ef154c"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "c1c64e8bcd490b5c522c1eb73f99c659"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "e964a0fffc649b10feb948eae37407f7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "d0d7f51cdb0e67026c5a5a0940882af0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "a3e448c8559e965f5025ecdd21cc30c3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "b286de06cb3cc7d94abd0b614c90f2e1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "5fd66975357d1ca8184432289a5f8d67"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "b6d4ef137606dc248d4434424b932c97"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c78e4068bd1a9c3c64a77e25f6f8dff0"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "74c1a96b053b7bbd87e2d52483251efc"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "346c2424745d098b87a2b05e76909887"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "91c8e150992bf090e6a3ffe06be163cc"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "17a00693fb444ceada3edb5975aa0ee8"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "9d34142c11df102b127b27d78c596a0e"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "1fd411a99a1414e47db745b597ce8361"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "9940dc985dcd9e73b9ad8636181e23bc"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "d278b7c5ac0a7ca57b870d110e0c16ea"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "92a53f5c83cfb1c5e65c20b468db3897"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "aa705f76cc7d4c74027254545f3e171a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "ba4404dd8c4ec6dda443edadc9524484"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "4fa2359e1cbd87eaf0ea3a5b4443d08f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "70717ebe6c8d4198a5c483de5f2a7351"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e8665b3bab10be9109efc653e5228395"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "99ef6036ceff181a43e7f8b924b413fd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "7f0f0c2791787a446aa0e695e7cd6a98"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "f1f395e65d30144a093b4cbf65a39a11"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "47a532591dd7c9dfa8343402be555d14"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "cd0f07b6c5bf73f8adfeb6cac2ebf033"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "210995c3960b4b2558ecffe4349741d0"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "ba144036c4da16f68efbddaf991a02b1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "ff19f6facf4b76c2c094181649a3bd40"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "05a5bb197e12be313d8d79c3260e795b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "f332d697046e82725de9b5e73a6604b4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "ca31d22a65898378c00d878ea86ccbc1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "7f61df691226dfcd58cc657eb7055873"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "513887887d7f7efa69915850002d097f"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "7da2bec4b8ed8812c4e03297d6fb8a2b"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "880a274ab79c9f7496952c582fa39c4e"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "b9c75d2080c2a24ebd2a5c2f878de9df"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "a99afbd35315c1d4f910174ed50d9f52"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "e02ea00b5471e1c78477bb43fe28a012"
  },
  {
    "url": "categories/os/index.html",
    "revision": "14e6c2fa673b411fcb2c73a9f96c0a68"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "f85d2f8ced0be0d68196345a06e696fd"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "15b8c64c2f46c1ca075b3f28264950d3"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "6bc351554a48f5df9e6e8bd1cea362c4"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "c2409fae905844baceb0afbe0fca43ac"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "5af4b965b68d9590f1dc1947fed5d155"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "9536cf3a6b64b3a4d8cd07cf7662c3cb"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "ce83c20523e9dda1832f24801165c304"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "7fcce34607c17e4e28ddf9082e438f88"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "8b9ec4c09a607ffebcb9752ce5d7a1d4"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "cae2db974041eaadf0af7bcf7db61c09"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "d06b784e5bd165baa8113954c6149cb3"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "fdc84d0f2bc4ee49c445838a715f63b4"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "dacdb232298c0e6518ad86c0d5f29425"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "83815882a3583d01fca2e578033726db"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "db0194625b9ef817a451dbf188c72038"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "b1cff477b127e41e9af84d5d73a51600"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "2315b942f00d18ec464b67de00f57909"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "87fa28709791662a74e122715e75afd4"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "f8f1ef7e28dc206f1169c9bbd03dc1d7"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "1c46d2e711bd18c7d537d7fcc82960f3"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "7606bfaeb677c5465e3688b9ddc221b6"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "7c63b77ecbdded0d2db37b6f825b4746"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "191887d105332c7184dc1de8b8eb1f77"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "91d75c5ab4c07cf9cd5e66b61982a36d"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "92bc63b58ee6d1a9eca465af07a999b0"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "65009249e27b43564c1dd89e09e98b85"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "17bc4fbb43a82c57bcea825bdc4d2594"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "a4d9623a7b4beec0987b5aad06c3bc21"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "14096e8f95e8193aad48dea63d936374"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "b072478e40ae20b3334659053fcb185c"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "9b88733102332ff215e9cd1c19cf6791"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "be3983f892f63abf52a4ea3fb134b3a0"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "5eaa20165ad880b54fc89f9570cea779"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "32b5bf46ad725529a63739a34a6d9b10"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "ef251e4232e4391cc2a8d852410f0da6"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "dbbbd862786e82926eec582bfc74e186"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "96cc31d6913ce9c154b9af158823bc33"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "6cfc89f7c434bed0338eb2b4722cf1a5"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "02c8204919ffe419f1f7fb6a4fea9868"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "8278f896dde2e602503f347bf8d17927"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "52093ae78b463d740402632e17c7cdee"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "f182d8354733580ffecd6c26fc9447c2"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "a93db1aac1c30153de2c13aa0e68337c"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "fef06410bb27aa7aa7bc53f1260bd35a"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "dfe2af89bde6a62ddc8a3a96e1642a5b"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "6ea0eb2aad275d593b4533ea7e06185b"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "3b8b624ac895b064fcd5fa7c030f9ae7"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "c227193cbfe23621fa518258515ca6e6"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "28b27b542670da5fe90137387ac59164"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "9cca89e59047c8a05a311f9dd82383b0"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "8dda68472fef22b3051c8372f699b548"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "1018cd54d834a9c124b0f66f43adb25c"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "94942a3d9063898b4433066e4c58d1ca"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "a1f2b249570ceff9f7557d120e4f1560"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "f6f8fda554bf859e0e8a5e5c4ee1f96b"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "1b839a0fb9d97de09833b99baee97dd5"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "cc3a854f797b5cf162da493a2d8d8b5a"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "d3da84df4cfeff30eac19bddad93688b"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "d1a09c00c8a9bff01a75d6ef5f10e3d8"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "c7a33083b785e3ad631d10aede418ccc"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "f34b128e75d1a43bc78404226330c6c7"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "68b7c1ffad593ba6f59edf252aeed60a"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "a827928b0974ec1493823d78ccc6fdd4"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "a448a05cf5e5b61c7661edf9ac930ce6"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "83ea11c4b91b0292176e9f7542b49d3a"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "0a026429588edf74e6f274fdac653236"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "18a56e2e478cfbe73c031929ac099a9e"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "1b43eb20cd8fff9caef54136da87f786"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "ca951803e073df5a46c1648940285c6c"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "c66d359fb2927de022392fe9e8595d17"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "54d469f13e739934ad9badeb661c05fb"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "9d02456f94b0260e4769ccba39e99a8f"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "1e93c9589e50ad045859d70e5c4ca3de"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "4c702957ee754fc5c885b89344837549"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "38a3e3e3ad7eca7f7b746c0c64243761"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "706748fc74a1b06ab93561f4a526f4e1"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "7eee48e8e26b8e242572def6b9563fca"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "38c42e58c2407aed2fa3e78cd3bb4f59"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "42cdc5d6720c99c22f9f7bf6169d96e2"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "484c8564df738e30d031873bbca3629f"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "044e0a3fbd4b9f3f7d03bdbaf623a1ea"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "88a635f8bb8285e2aa587a92b9cd1edb"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "6d2434c5f5acce005ebc2cc1582c8bbe"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "c40ac1b4d2baa5cd07c0781dcf3a61b1"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "4a8f4a7816849b958b988ea5c685f7d4"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "e562c2e9e90d6bb295149834cf53dd30"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "9afc8165af3df1ed7b6ad1f07d5aefdd"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "30f6e304d9c1420d84aaea9a4eab0cce"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "e3d69fa6769e7e5de5aba149a691638a"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "699ed6a0717d8e3c9217d04dadfef170"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "c1a7a99ae4a5ec2d3e8b755da68569d4"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "de508eb0706d0ad136a7d3277102fd6a"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "80a10749701ec0d2dfd218e4e1f51100"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "d51bfc2bf140104b7bec0cad075f059c"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "ee91160b136459191665321e6759af90"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "3f59971a9a2aa2e432bd5b3dd334417b"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "b07d463e0749e43fac2c84f0566036c6"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "dda4d5441e3e5ed6eb098f5237f60a5e"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "83498f78c4a56d39f25314ea60a9062f"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "887f400def93e0e7fffc203eff3e2121"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "0f3af4d4719e3a91d0996ed054fa16ae"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "55cba89677f4199d2b48d5dc99b49ecf"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "3e88ab60ad5c5db3a332e43b30878383"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "a1bb4dbad3ac3ad83c290329e159e4e7"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "2aea341e1c718a19a1da03c1939d860c"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "f164e3f1572a2ea1c3ab7716b9b42dd5"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "12be1cd71caeb5db4c9c937315ff8018"
  },
  {
    "url": "categories/php/index.html",
    "revision": "370815845dc5b456df54d494fbaf199e"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "41f21fec7eddac7b85980f8ceb894015"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "0ebb95c8637da47656edcc2c8306372a"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "6e43695b166ca899a55838944da91982"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "aa6ff94ccfdad6bee4d5f6039b10b74a"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "53d756491f6a42fe636ab34715681e5f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "06b6a9af21836dd1cffb21f6bcfd2323"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "19d4f89070f603b31ad024ce56d6dc98"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "459bcfbb26905ffef6accd48250f389b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "11ad1851a23328c6b0e1a813d222d6b1"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "bdc1af7f37e894f8adbb39963c92c5e6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "ddf43247aff0113a2b4f361a22796c92"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "20363095a2496f108e1976dce2299a26"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "fcc8f7041914bda3b3ceb4307e9f7bf5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "24686fbdd1c58c6338b4e70b64ff85f0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "ab360fc22fd1ec3f3cb957b2159a6ae4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "56428d0b02c2f67f86cb01ce68d43861"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "7710d1499ebc8ff93f5368b44dab9c4d"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "d670461fc6cd9a07d5eac530b31283bd"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "0f88695d4c3d27734913e8b46507c1cc"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "f91ea58d442529b265994d737f8ccf85"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "87bd9840714356bb82a082a5b46e3e6d"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "87e9907eef61f4a3333d5ed138e7c008"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "c6777420c233cc98a7b0264c69045e1a"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "fe591a9516625fb933bed34d6da27ba1"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "d1c896d1d66dd95b2b7d3adf228ddba3"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "9d2ba1bc6f5e3f4b9ee999c6330dc284"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "a554962475f33160be3319032913cb0e"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "773c9a9867a8fdd4a2d1ba8625102639"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "f04c029c7bcff48ea9b64e968958ab58"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "0b04b35166ad2781d5b65178f2eb8bf6"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "60db0b5401c50048d43b50859fc589a1"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "173b6f23250a677b584c583c289aac44"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "fda28ccd9de7534e78f954e6cf87e0e2"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "ad1f0ed5fac303fef82c7c2cf0278100"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "06d518bdac60169e1308601674b80970"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "8075c23be3eb5baff3231e47e1e69a15"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "8e840711c56732489462fddaba35aa4e"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "e47c03c69f3b643a3e3b3e8332ee86cb"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "757bb04c0488b272e0cf60c999a3126e"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "a48913057f18db19452c2665cd4bf500"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "110d9bcc178e7ed7930ac5ae087c5f48"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "7342cf496fc4de952797040a0462bbf8"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "ab575e5ae84e7c02aa1a8200581a09eb"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "b83ae6b79a51ca04d467ea21e22bcfde"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "f73297ba8879b07fb12483ad044413b5"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "9ae7f0d11d755315799d397bbe823005"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "143c33118ac06c03d6042c4fd54357f6"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "02b799e1ecb55dadf2160f54ab58e5f5"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "ec65b1d93b6f7b33c9ba6571ede928d5"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "790faf5114cfaa293511087fb4695965"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "d66493730174a8d4236863bf1fb6cfbc"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f7c570d3f20972f762065122b8872004"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "cd067c5572bda156e8721c22282e0c8d"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "5452797995ff11e69f0dc6b4eb742bba"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "5da54d8b838ad87f1412cd82b88d14f9"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "7c04bd4f446aaa7757790b4e1a751549"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "0e04881462743da4a226416af5cd0858"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "63018edcc961363c190251ff706c12c4"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "9e41d686d017c07bd9db286bba885d1b"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "7851d9667a98fb989fd6b8b5744f533e"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "ce0c5dc787db2a6392c6591d5c2733ea"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "0fc8ba9c4c49045e08d309be9f3f7d1e"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "9d5838535ffa5f8a6da0ea45738699ee"
  },
  {
    "url": "categories/system/index.html",
    "revision": "6709f06f6bf35bda9bf7ed430ec8318b"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "fd62bd8c3e0af38d217a12054c2ff2dc"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "3198c23678cef65ecc97ca4d722c78b5"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "8467e0142fdc50ff0f70afe5d0770bba"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "b46ff7893de1ee12cea06eb6e5a9c43f"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "3ea35a831143c01ba3ccb3f5fea677e7"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "478141f3ddc0a7ca7cca3dab9fcd7228"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "36ed5954e88beb4940c1324d1f429cfb"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "62209c5da40dc955add5583a50de4a34"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "7b01e8f7b8f24ead9a5ec56a8923ba0c"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "0eb1268d58a229108bbc4b771fa0a9d8"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "ca2e178d0b930dc04ef7a2afca62848e"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "0338ee4e30d220ed120f0b4fdd4df769"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "f91f53c68071e54c55625ba426bfac71"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "f829b4a198b39343c3f0481aea769c20"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "b1b42625ec774a178ba87af4d3d111db"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "95727a7538dd03be25c87d54b7d459a6"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "7b69de2cb8cbdeae59ab1b837f6a4e48"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "10e994ecb2d76d5ca2a11354a688d38d"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "8c4b799df07c0bd3a0a14b9b3a1eaa7a"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "6e796205c8b9043c9251397fc01dd148"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "baff1eebcfb3da889216ceaf48563ffa"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "723060428a0161b7db1ba904a531b169"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "862b9543b34be7a473fa301c23818c61"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "77a59e487115fcacacb0836eec1390e9"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "c5854d5630a27fd01617b87217747b83"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "60bb6546f2abb3be05910a3581365143"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "5c79ba80c0c59bf2d362c1bb263bff02"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "cd12966db9a5e66872f20b26df381bd7"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "1edbb19f6e3611993ada7bb20ff85a87"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "8b4b7563cf5ac0a1a19c017632a255ff"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "257e4135d873c9c94e77cd7ea2525131"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "9490520d6fac28aae621b97a7033a633"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "f24fbf358aa175615afa2675db781d69"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "848f92645db5631d0fd8ba72f7dcb03d"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "5395293eabdbf0ae8128004094d717b7"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "beb4e94af939d34ef55c2ec3907ddab7"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "d0563cb1351f20b4bbd50627537ec41e"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "518b2a966d2a1b077d4a33c1df9c2163"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "d74ad470b249c252e54d9bd49b9f9d95"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "e2a36eecc710eaaf77ef7a22c452df49"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "af3500cca4f6f2ff07925c4f6b0095ba"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "320707b65c69694203eae2831a8c4b26"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "53abeaf6167b7cc4be46ac1cdac3b65d"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "d1ac30ebc53d8e5abc6a0872c24b22b6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "e016784e6b6e6bbb10d6424eef3eb58e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "3d5d28a276750ca74695f68c8e7f16db"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "f71a18eae7d5b13c0e8309a72e1c3191"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "76d2f38a32ab4c17697f0467d720741e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "258b31095e2f542f694ac14d1454ba8b"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "a86a0ab9b643cd994115f7a7081b36fa"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "dd7a97addafa58f1cc635452d3788442"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "1c69a6e84f27d2c2bb7bb04b2e9ad136"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "0c95ca537aa318932f9d49528a1274a4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "cab4a5cb933aa6791806fec49afe92d1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "144eaf21ce77170e3510ab91f1201cdb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "749d37fa8f429bec593c8a5f92482347"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "28eb6dc7855b8145b24805b6580ba5a0"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "3fba722edde427f65a062ad556204790"
  },
  {
    "url": "favorite/index.html",
    "revision": "3cf73662468c4e1340a3ca8a8fd80d80"
  },
  {
    "url": "index.html",
    "revision": "2b0d906b3eb0b74238e5ccd6d798e3b5"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "4d2666f58385e3a1196b63b9207638e6"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "6386aa9a682f6f164ba6746520756f36"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "a9af40d8b2b414792a3a1681c78d61fe"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "f9c79bbd4bd5a76ca9d3d1593d95be9a"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "82b6c190f1057a7dd4f0920e0abb09d8"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "f5e46f6371b72a5a72fcf08904ea1b75"
  },
  {
    "url": "note/index.html",
    "revision": "4377ccfcc36457cb97c2d0138a928a58"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "0e3a16ab4b551a1958061cd1bf6115e0"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "9c79eb272385a62988500a23862cc665"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "70a636d87ec3fc371230fa7eae62d367"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "d56574dc86bd90d1fc7fc3abaf597e44"
  },
  {
    "url": "share/index.html",
    "revision": "d751046c8f6a9d05b08fd1e2eab69a96"
  },
  {
    "url": "single/about_me.html",
    "revision": "5d3d1de07798f703d63279cb590a788c"
  },
  {
    "url": "single/all_article.html",
    "revision": "1ed3b579bcffcb5dd96fc57c6f3ac155"
  },
  {
    "url": "single/welcome.html",
    "revision": "66206fad732f567ae1b852a2b156e472"
  },
  {
    "url": "test/index.html",
    "revision": "41c29e118846fadd6f625bc68ff1c42d"
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
