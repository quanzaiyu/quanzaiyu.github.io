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
    "revision": "29c229ea799a91dd90847a458472415b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "c93486aee85ffbfacac0afde65db8baa"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "ca154a359b05ee99ae56e509e0375b38"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "af1b841791bf068ce2ef75297bb2517c"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "1e9c4f3014bac46b1f6ffdc88b93d9be"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "d214c98a6c3402e61164b5a03f86aca9"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "dd8a77b76a147954919a773106602f3c"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "dfc58d9b82d456fb74957f6319a97671"
  },
  {
    "url": "articles/index.html",
    "revision": "790a81fc77547cdf37f9c748c95e4249"
  },
  {
    "url": "assets/css/0.styles.e7d1c9fe.css",
    "revision": "80796b4e2eda381709b6fd0e3eb04ef5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8095ab00.js",
    "revision": "6d67c4bdffe016211e38816ee51fa8e3"
  },
  {
    "url": "assets/js/10.9532bb63.js",
    "revision": "c0502655b90705f99d3405bd9f23e861"
  },
  {
    "url": "assets/js/11.2cc21998.js",
    "revision": "a59e6b1efabcf5f00708518e42e68270"
  },
  {
    "url": "assets/js/12.54b74550.js",
    "revision": "d3b78f927ef234f84f9803e27225f754"
  },
  {
    "url": "assets/js/13.3a31a12a.js",
    "revision": "384e8902f0d4334c847aa93ccb249e03"
  },
  {
    "url": "assets/js/14.fd8d2641.js",
    "revision": "1212608aaf9aa13a63df9c4167881aed"
  },
  {
    "url": "assets/js/15.f91c6a57.js",
    "revision": "f7ea2a8d91d4b26644d5f3b2694061dd"
  },
  {
    "url": "assets/js/2.12888179.js",
    "revision": "06cf20e3f05a1273ed41979cf26262f6"
  },
  {
    "url": "assets/js/5.2b629961.js",
    "revision": "5c1bc1ad86ad315bde63b130c2cb6cd0"
  },
  {
    "url": "assets/js/6.8a92dcea.js",
    "revision": "a6338eb182f2d1e17db194c1fced3ec6"
  },
  {
    "url": "assets/js/7.e1fcd8a7.js",
    "revision": "be39fff7eba0ad4c8fbbadddef6cf647"
  },
  {
    "url": "assets/js/8.c5595756.js",
    "revision": "6f8a56e2e3938473a429985f5c807eb4"
  },
  {
    "url": "assets/js/9.2f94d982.js",
    "revision": "3efc28eaec99e9e8cc0ed59883f58c13"
  },
  {
    "url": "assets/js/vendors~docsearch.ba35f035.js",
    "revision": "15ca6d4cd282f5cbadebb647182766f2"
  },
  {
    "url": "blog/index.html",
    "revision": "addbda7121efbe8533f182142ebecf41"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "fc867b58a92e57a135a892b8b4f7ad64"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "74ba28ea6d3b494d5bf4495ef147e814"
  },
  {
    "url": "books/index.html",
    "revision": "12f9182ac43e81481f906310e726cbd6"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "08869e5245eb8c6725b6e2cdb3768aea"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "84abe1795bb175864adda5d5bff62eb1"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "aa5f9563d269131f8587b52340a104b4"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "9b9cf0808ac4bf6854ba608915c7b937"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "c349bfde016bdec64220b71b1fe39949"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "aefdc8f915ccee1b54ae869533947ca8"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "47d0d096651a84660b417ab7a35af6d5"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "cf60962220989dcad8d4d7a8db093561"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "beec619b3074ab97b3fdbf52370f027c"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "a2899272c8263fcdc27a6205bd45e4ca"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "4dc1e542771bc6691301efb17780e4a9"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "50c319d20f08cbda1c172ba86817378d"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "e7ac5c694bd85746433981ec68943c78"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "90b9960d1feb5256aeef6171c1a8632c"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "608b898fe4be4ab8f02bbae69c5b1280"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "9f3308f46b2fb2683d1c840b5cc6279f"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "cad81bb62acc88dde9b75e6b0bcfd5b2"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "21abd599c438c2dcb3f33e3a7aadc319"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "8ae01493f16ed9d772c62925fdf323d0"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "a4f94fcee879284e6f1464d51a71fa62"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "8439cbe67488f830ff649254c6e55874"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "81240ef2a001d1a1f7b78057671c9c2f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "1e7828fa65827fde40391ad0fcf35aee"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "13e78ff30e90dd55fa71d4ccc33a8909"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "b04f1289a192226cca2b8824478415f9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "fdb2049569239bcdaa173fbc0a736829"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "5b268c97143eb174d023f65bac65dae8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "4be48ff99ff524c229636d2d3fbe9c6a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "a8814785c52511ab85dd170e7477c381"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "02f91919738c8683b8edab055defe47d"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "82be4f3dc7e985771ddd40c34d5b1d71"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "fe367bc7b2ed1cea1d4e61ff5c6a5dc3"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "85cd3efcbd72a8d7eb666ba4cbfd4b71"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "a25ed57347c2f37518a739712695cb52"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "d5735364f92dd2e87403354c03e2ea03"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "3c8cbbaa29379b511289458356eb7402"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "d99cd04d546d9d534082d876fa9a3c68"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "477ce9923e8284a06050380b89761b83"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "7cf32ef9d77c8db9d788edbab7cca98f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "7074eb14159f1a940311c7e1f855a393"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "01d47771d01f2c43362311fe6e4a26d8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "fb2e7bd779e713f5bc5a33ce4cc5e0a2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "6353ac48e13a1c194a2a57640a8381ff"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "1a1f8b3b94e3f4ac19f64c88f59f03dd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "750e05f849f3b80f047fb5a86ca5159e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "cefff4332e0a5dd8c9e707e30642aaa7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "94fece50f0f5a71bb8e358f3d0389565"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "1b33387ffac7521f99aa250582e1bb73"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "644aedaa921fdd3379f8a98790fbdc10"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "1de0a2ca33d97737018e7a690ad1fdbf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "4ae0447f72a91fbacea2f25a95839d02"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "a144a16a9408fe4250b27223820b317e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "e1df6fc9d36754ddf167352a278fc24f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "658619ed1319e1508cf36cfbfd9cb8f1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "0d21490bb05ae6f32ad434dcaf43b5de"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "7cd0dbe992105f2da986b8c84926838e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "8c20931995662de3182baad4b8948bea"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "751122970c3f04664427cac7a5fb7658"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "d4859a37370a5d5262e4aa28dbdc25fe"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "5c8d822e95723309ee7dfb5506555c85"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "0837fa49f6c0bef76a6511694078074e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "3decd1c72cac634012cdf0f80bc891f3"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "68a67d07729d42a670edae35829e0755"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "6f47b426c2980ab7381b25ba1b57d983"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "ff7dd8298c7140d2c3c82fcfc2e8f869"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "fc72311f92b62f72f0dadf50dae5dad2"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "cb1986ad2ec7706239d1e649106b736d"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation.html",
    "revision": "157c64785ee0528eb1a2e8e1d49adb18"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "0612cfe0ee8c5c5ae216ea0c126b5ed5"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "3c92074ee2ac09032f5afd781f187705"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "f5037c48bca7dd033d90bd2877b50891"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "1555a2d0a3f5fc139dd816f0becd0aeb"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/color.html",
    "revision": "f9c06039fb527460124f328f71de51a1"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/create.html",
    "revision": "65f1097118edec5c1e13f18cd7df7798"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "5d40121c77a75817434b612887275cf4"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "55b6ca617e84fc547ce52fd69214e27f"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "5fed78abf5007210c10087b01e7d62fe"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "2c8fb2af09d0c1852393a7b713cd8a7a"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/save.html",
    "revision": "b5c49f0a6d0a86bee9c753e81b755da9"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "6af4e589cf4f1b1a0bcb9cfca66b3bca"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "bfbaa9fb48174376b790a5e3615d97d1"
  },
  {
    "url": "categories/front-end/_books/canvas/Clip.html",
    "revision": "4f194dbdb4a1954d9c3ae9afa7f13def"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate.html",
    "revision": "b4351160c666b1965e8406210af50545"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "495b398f0aa97c975deec316a71f0bae"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "5c1615f1d67ebfc7e7a80a7bcb372788"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "936987c9fc6c2a6e0bcf0ca9ccb2d886"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "bcd0980fbfafe765ea38ff3c09a5289a"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "cb8d4fc2e2d51ae2ab10ace4178ea9fc"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawArc.html",
    "revision": "e4137db90c510a79cc93d16954f09b37"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGradient.html",
    "revision": "95a8cd6bf69c04481655d51b9e2b030d"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGraphics.html",
    "revision": "8cd756d76ec4c87a31f3847607d5b2a1"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawImage.html",
    "revision": "905189d7694112f2218325e4e6d90d8f"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawPolygon.html",
    "revision": "db34cc86f47187c02b388476b4243bb6"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawStyle.html",
    "revision": "e228ecb5cdda94b648bc4b46a2289377"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawText.html",
    "revision": "d1ad629d5038d71bf60ecc9423a576e1"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "275592d2f56bd3281cb776320a90b1e3"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "80912668e99a858854a7f45f8dbfced3"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "a894d3d5beb2296fd697c55bf64c48bd"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "5f506ddc96f2bc3c365d06f0d65a7251"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "9cf52b00a486c691d4f1a7ed8808c6ac"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "6dac927ccc1f824f16d8120920134567"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "b2c9318f4e3810822f147f29798de5b6"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "1b3a8424937e5ccfe2d4764b5df1f24e"
  },
  {
    "url": "categories/front-end/_books/canvas/ImageProcess.html",
    "revision": "c11cdb1a10b6026a47fe7563a37ac8fc"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "677e62a9af099435ab3274a15b4a4fd8"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction.html",
    "revision": "42b380d5db84035ca6819657ffa5150c"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/ball.html",
    "revision": "c42ae276b76475799f7166b912552717"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/card.html",
    "revision": "3423853d0998dc4d4ffdeb6b36ff6d81"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "2c92da9e0a3a5431e424dad46e259d23"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "72071a27c78012df8e1e5ef7d0115ed2"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "144a150953b11ef262f2f546a190693a"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "1c44c76d6d7d21e542bb406e41b9bdaa"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "28ef5cb7e2039165332ec96c6eee87fd"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/spotlight.html",
    "revision": "d2f031a64a67826b4e2a85344d88e30a"
  },
  {
    "url": "categories/front-end/_books/canvas/Matrix.html",
    "revision": "e72e91efa0d85de12263962b380f7344"
  },
  {
    "url": "categories/front-end/_books/canvas/Point.html",
    "revision": "dbeab23ea443a187af959550b7365382"
  },
  {
    "url": "categories/front-end/_books/canvas/Reference.html",
    "revision": "1d0087cb23d7655526e82531069fbfc2"
  },
  {
    "url": "categories/front-end/_books/canvas/Save_Restore.html",
    "revision": "761cbd313c30e4953128f04c1d13cba9"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/coordinate_system.html",
    "revision": "036a055b75e1af37715ea8380f6350f3"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "a543195b0806c4f00b045deb3b63c027"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform1.html",
    "revision": "036edd6f8070e3873869f27c23bc8277"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform2.html",
    "revision": "4939ad5c15f5cffb8e424fa1f28879b9"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "51a959259d9032d805cdb5d0db8af498"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "91ae18a83d364429213fd49d3f32ad85"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "7986eab33ec6062836bee2d6c4aefd66"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "0dd5bfdeadf786c0282263984a2f8e8c"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "467f97549e0410429c43fe92a64db62c"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "595e94626dfd9fc1dc077377812575fa"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "33d55527bad7d674168b4e1c66a23382"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "92b2ea38331674202233456d6f4a39c1"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "3e67dacf94d4a713268e30144224eed4"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "1b939ca324615df438ae434d315ebe1d"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "fc24271bc5ebb0c628e7682465e027f3"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "e431f24d4c29e51b968451c0ee42eb17"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "c5958022eccf386bdc79abee62ee506a"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "241e8cb9f08fbae27d121ed086b00435"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "e564df81f4a2d0fb2b5032a14ffc83f5"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "89f351774de69ee31462c643d162e450"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "2297a9d4d0cc7e84e0284687443d0694"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "944df860a99c47b75a2488ef2366756e"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "b89a30334eaeb9387e75ee905f6afea6"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "7ea8c3453574489f7c0c998fc93bde5d"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "750e565a50afa6808f3aba03113f8667"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "3174eb932afe39030343ffc64ae0b5b9"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "6e317a5989a32c6209c7e889d6608e44"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "acf2f20df36edc86f29d642d9058c6d7"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "c4273ae9b241eb0f920283c273855ebd"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "4cdd874928a86fc3c74e017b67d6c592"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "83f295a84701af20bac25f1810d14382"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "45a2758873646f09405065bf6f06d433"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "6e8bda8e929f21327c20dfbdec074f24"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "ac80c273929416ae05842ac4a70add08"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "e1bb19f8cc8c9912ce9259234a9eb704"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "c9270db73c41727a22b714ad55d3fb21"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "9e6f98f9d7c231201b192cd30e97f662"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "e06a8d581f008f74cb682c35998ccb62"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "24154e8b460503360a80d076e105db19"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "a5a863a363aeedb808a5f1163a9acc17"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "f5767248837a11a2add5bd1978407a75"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "89d7bdf38cc98997d3bbe974b3258182"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "02233f37b30714d96ef703ee8a9bad3b"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "059a6d2f1eb6db83b72b32cea04c0ffd"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "663474b597fdbeed6b084f1d2f865c42"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "623fbcd3e85ff3cc045a07b73b7525a3"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "181d009320cd7bc5d00bcb0e5cd77578"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "bcdb4e754a457e5b59cb28ede22d0654"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "dc5828adfe1d6b6c28a5926585de0326"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "eaf4dc02cbcd663fe00531e235897107"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "120a6bae164d5f47ceea78814632d543"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "efeddb01ded75ecac244f644b3e52a85"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "6c6bbf28d165e14ef7f645719db91c3c"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "6980ceff2b58ec53d4caca60731b957c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "371187ed22034a8d8166fc22c3b98560"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "79eaec915e7886f30013d4ffa9472781"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "c31eb7c784e240e00f67d4133a34ea6d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "536a8254b8e283f6b6bc59730b2b3b2d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "eacd54a319b3227fbd533e931b5eaf74"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "a5da6d96ff4e3eeb8b3f7c254e93ecaa"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "ad74614a7b3596714fa362abb47c2dca"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "697ae9dad121b9cd35f8c80d8467a7d1"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "7063bbdc2bcc7a0483441d8aa083ee42"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "b3576f9809a02d9d38253c178d5a5f15"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "c30adfc0fb29bed8c1714d028ce2912e"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "7268ffaf9269d5f3af05e843b265c848"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "1f3a996fd85601d05b6497c558d5a134"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "c2fd93b35b403689c9285a99508a5e82"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "5707357952bd0623c1461136556fe3c7"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "39dcdb1762c95fa4197f430970fce7a6"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "4e55be289ef272ada1e7f63d10db9df4"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "164bf02717c35885b60fb9b9ae492a0b"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "560164cc894f80a88acc451064b33e1c"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "cacf70dd20a77bfd952e8fc9e2f15d54"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "51ed45283c95a34705a6a40b92d38a58"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e38e71d3033223747c7f74059517494c"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "54fe5c9abfaa77736a9172a33aa2f836"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "69791a4b59e7c6a0cdbe22c01af8fabe"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "9e4a14739ba55e28443f6da3ce702ad3"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "344eb5c6a50941483a991214fd0cab7f"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "c409b0f8f7effc96cc317777046a0aaf"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "acdeec2146d2c13ed28d2f2e60e71f6c"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "6bc6441d3bedd9e907c0e04a3654aeae"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "18a638f70c382e1ff5b84e531eaeb7b1"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "043effb00cc4613f60bed91a30bb31b4"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "7b51abd922d3bd7a73281e820e778ec5"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "e5aa0df8b71c10e0aec1523bd01a5d78"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "cff4372b2860da6d104620e6fda7c11c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "64cf71b418909c0c2c29cb98ca804c4d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "99add219427e6f97be37d321b30be6ba"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "c85dde7433c09dd023ac80cab21a08a3"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "7963ddf73cd59055b5b7d3cdfa4b3bc4"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "9ecc01879208192a11f2e1d471684fc7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "6964582a320d7689137e926a5cd95cef"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "0e3fde34e7afdedd959497c8b001fe94"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "2613693e9cd311ec568565fe24d4f04d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "cab6a68206dc8489a2dcc5f16d5a2c6a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "779fe28455fd60daf293eb97833c14f9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "01c04b01006286967337e1459bbb11cc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "641353963499ef012d7d41517532b2fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "a0bbfbc2fd8a883752fccfe70707094e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "04e4746b900b5b9fd3e1fc0c4241920d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "07179a0958b850eb3927bc7e943d029d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "ec5cd9421ba4a0229cd17af2863a363f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "2182c3e0b8909d885392e02757bc9e6d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "71bd2090e644a6f0c2adc11a66565959"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "ea268c3bcc1909a7cafdbd60148d9321"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "2bc231f6377dd3f9a1d127c886b71c4c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "bb87165173afe2186db2a0fcc2fc53f0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "b78b8c72754f30e6fdee3f1cbf86db73"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "932442f6f6de59b4edf85e3aa76b2102"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "3b51c0ba15cd465d9199859c65e75900"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "3222a96f1a964f4b9382ddda08134627"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "51981c3d0b58695cd5577e85ed318efd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "1904e716833932a580c643e53ddd0cf2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "04999c31d9b9ad51254fc1cc357a6688"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "7b13b67b09ba1aa2dbf3e2a8766caf61"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "2f9845d46cb173523bf64391956de1ff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "f673796a4b9a98a554776bf97602d46a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "8b37ecc15493a2d23e1fa2c5e89fe8e5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "276f93a9165ca5e8d51fcdca7b82e755"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "3da19a4bdcee04701a77e5d8cd38be2c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "4ccee6d87276ccf3bab045f266e8ddcb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "b73395ce1735a6c65d989468c68104ff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "78356439805ab46915003d12fc7a3fca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "9bc43245570c2c43e2cad4dd9d67d2b3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "5ff546544cc5db0f15d8b5f3e511e5a5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "78d79a55f4fcadf425327f9a0eb47edc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "5445abfb875a3f062a3861aa713928cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "28185283e2d49430f1ca0badefb22c43"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "364eeded9c45969f46d3f9aeb39d689b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "2f772b87b49ab402eea469cadba09f92"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "c2a94caf4070e0ac39249efb83a28ecf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "cecf7f7ce9f834ac19cdc1b5d6bf4815"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "588f415e61def3bd11348ce87793f84f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "141367a172248b9608ca4116bf1b08b5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "e17178f509f25d98c20abea00b7ef5c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "7f1d252008955216119b36ec6308b82b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "050b65fa545277c54a956b99fc3675b1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "928fa3234a863934f9edfcd27388ebe0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "6ebb6f6e4eae9d5438a41b0a9e4edde4"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "26aba61380b10bbdb3440602c6f13400"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "adaf961183000862681d7d389add0ab8"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "74c80605f1c8cbb28a4d72a4abf9ea87"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "e8dadf2d601a6db162c2f54e2a2c27e4"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "d635b96f51ce8a23d27f141c17e71a52"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "38179f6cc2f3a7810dc37df1df3f2933"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "a3b60d972cebe1c1c6bc9d48df32598c"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "271817a2e64e9cb71697a959487f8b97"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "a30d4012b060d961dfc25d24d2d0d619"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "2476683d4ddbd1c4153813304d3d6e18"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "1ded0d295e69ae76acecc2f636697a47"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "e6b4c52874f982c6119ecc136e47b8ce"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "2de7f05f9359525a1cbccff3a43550bb"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "1bc453280d7a7822179f7f5778f9924e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4fe584589e3bfe93ee37c5158e1493c3"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "419e3b114bcbf7ff1cbc99dd839b349d"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "7b62dafb408630a5dcadd9768f0f6f4e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "a16daba8e48900e4bf5c3d7b3c7059d4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "426b9f22e088e6d540216a2703cd1a0b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "2ba8913ffe90c2f948c78201360f5e1a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "c61d3fc01275882cb315f041cf059b25"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "a298f41e375395eb71f2dc8dc3b8c80a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "8957f900ae7053f31629bc7dea97ea23"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "39fb12c468ece4e473a62d9b10fba823"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "5e01a8a18a00b956234f7d9106d5dac3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "3d2a532dcd20aa0eda3878d1d24078a9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "4a982f6c307afa329d992bbf70fa3be5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "d1acc2904401b7933b9d7124d6d3d3f7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "acbbe9bb6d73d2a8d66747a7331cfb0b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "d1826a3a8de24f79ef44caa97c0fdd21"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "13b5732f2d3eea5e358aead60fdcd966"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "02b2d59274ce61d316e0893a7968490c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "18fcbac553e45a18442d9704884b679e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "b3185658b780e4137f615b0623c5f39a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "342f14c796ee9e0dc3fb8ee313ab87de"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "12bb3fe86b750fbd8076e0f03db04303"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "2a0664a7fbaed9bb0eb33a1c8ff5883e"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "b098c04ec0b85ad2351061fe6b192220"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "2ce252817bdfa02352dee294102d702a"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "4941970538c8c91c11d3b0ec62c41691"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "34d6e66bafa2cc20916e9b49987d96ee"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "dbfe5bf6baec55461fc4ea62266f0b46"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "dedb8de948d8b14d7fe8728caf41f804"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "f341d2c7224bd18df3ba33f48faca844"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "5a01f32db7e40b3ed9f0d4f316064571"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "58a597f7ab0f2e1bd5fe92e2310603e0"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "fa035e45ead8e9b8a8132bdc2708b572"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "b92d468b77fd6604f5c39fc59597c61b"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "e259a8a4034f8961f0c2bbef5d6a60fc"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "425377968735da38d3726a95163b6649"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "781bed5dccc642facdf6253c4cbedb95"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "ebff140de6168333849e040cb67d65ac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "267e38f8a90177da461a10b3f4127ff6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "75bb4097af04266ea37288aa3cdfd9ef"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "ea5e515a8138cd6d17edc3a3f93760b0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "98ac17963a4dd238edddc119ad588ea3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "16e016146ac62f909cf24519c4fa0c1d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "c340312d7b0f336103172c5c98d8c6a4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "aca9727071d5695847ea7a2b7d3fbf3f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "1461747810711bd1f3a3396e40c3b35f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "79e73aaf1cf12cb64ab35f6606287916"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "9e9068bdf4f5913d5cb60d71e7ae1c2a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "176b0af2eeafde8e04c78f5c21e27f24"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "984b1c4f62bd6b1ec31b218682d3193c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "5f2c0d67ec6b0160e5ab53190d5954ec"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "1121d8dbc19372f3202f5c9772b06074"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "5685082de8f601c348a707324d51821b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "31852ec3d58523b62d037e3f1f769533"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "7e65a855afe42cbf9f28a441a961825a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "fc4708cf7da19045972d77252af26804"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "f35c040e85a76df3eeffd832e7036857"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "1275e18651abb41edb39f847a455fa91"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "edbc1707497e8d71c9a9cf3041d7f15c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "cd75b2ec67b41643ef55a61ca679e52a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "f3cf61d0c06700ece6d818b4c47fa8c2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "bff323fe6e9d39e78bb1009d2db7755e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "71e88590bb7e6f9786b4f34bcb6a3d11"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "d9d31d10d0be25daa6074f60537013f7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "c2c37bd3c130b327cac8094d582d3090"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "9821882e3f566922c052ded655c83f7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "02ce314dba2239df1db5a456aefff975"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "2ecb8e89da801b7639f1c0f42fed676a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "71a859d5ebd1c1320b27c45c07592c2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "a64f0268e551b0e71fc4b2d60d734305"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "6e83f516320dc58de52b395deaa61dfb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "49a39024c94760d1a2df4ededc02045a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "a74c2f06d7edd5f6215caddc8f0738db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "c1275a046a7c700a1caaf181817e0f5f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "0bd3949b9e401e1d0932bc89be75c1ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "b7a11f98d4ec734935f2262dc54dd905"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "a6c5ebfebf4ed319912e5680dcc4db6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "2348dea2c7782088a28aa2fb34111d19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "ae04d80beffef8ef16c49b2af869aa50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "52b9de7571df37b5834b0739646a2359"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "e56d1d09bca53b2502ce8d1b99a5b5d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "b91489f823ffc2024f0720338675d35a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "1446ff815fd0b1a31809e8ea0246c88b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "f983d585c6040e7f0c4fb62e649cc1c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "7b9c1904e7208b3e7e8e7b82087f9dc4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "15dbbfdfbe799bb6fbcb90df0911de05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "44b05ce1e3763e881f64f475b611247b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "ec3238930938c19e0562c2a84a9b2558"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "c6937a241502822b3e444040978b53f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "b2af67bdf3318a411bd7b4b4dfe6234e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "63a89a9864e1574983fb0181f685049f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "bf3136aba2a0eedd2b58f2b9e744d8bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "bbce10b3ffff195922123852cc4bda73"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "77e93a4606e1c14a770e5f3ad59d6a6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "68bfc75f2570e8317c4a92061101273f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "496f368ae27d2eca25a7071cc568d8b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "ddd4ba5f13c8500faa6f227414d205e9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "a4fe2a0ee888b1afa38eb34fda692911"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "821e8061bc11f09c71bcdbc7fb987895"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "583c82786ef0d4391bc7fc610597ae4f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "038659ef26cf566af3b09f3efb15dc69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "2cb6a4b64afb6c48ec4316084766a16a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "3dc80f90bff85cae09929e4b1884b34f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "747e306b0269f551e133c664f50d37bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "2543924ad223af368aa88e9831ff0800"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "787eb4625bb45bb05f17f90fb9fe192e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "ea573e03b38569ed4fe485340499f37e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "f0c4babfca979f9d35650667ed3dd6d1"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "76ddc29fe0fcf9700fc6fb59d1a0327b"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "5353eac2d263b3aa7e66b0de46a1e4a6"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "e08f02d78f1d8c066fc421e7e13ab87a"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ddf43c737474510b47fef582d90dc0f7"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "9a6c352c83a758841a1ab50fb47036a7"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d494ac1137b34a5e8cf7ae12f982570c"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "b2d758a481702fbe33ad34acae6e7a1a"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "8c583a4c29973d5286316ff73d8b80f9"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "327c7ea728bb1410e3483bf6edd2c4ed"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "dfca75c5e181b7f858366955ece6cd6d"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "0291264836b315fe37a26d429101f787"
  },
  {
    "url": "categories/index.html",
    "revision": "2156c65d7e7fb17569310649fb0053d6"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "7ba2aa6f578b0ab970abc93f4884572d"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "65c415d5a8599077b7e835b619b5fd85"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "d26f05337f575e2e6283383f04b9a627"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "d54688a5660395df30d7f9f0914b140f"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "89e018fb9ee8beef5c9b80226d49fce1"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "3b5045e9f7973a251cbcefc8c92ac50f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5b8615ccfa0c83479dc3476c3291653c"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "34c63e06e15f42128292f4349c526628"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "cf00592b1ffdd1cf1d690591872cc593"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "3b476b3a35e556cce02a4f4167d8ba17"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "55dcdb526f86c3e73425faf670554a33"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "06787bf3260400d9c7601c8b21120c61"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "29de04a4f012162a1184f631ad646c22"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "a7997984a815020bc0505c9e119e66d4"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "94b1969d900f4cccdf69c7a819f09fa8"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "628c505354e83183e598e1526bd02f7b"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "ca1a52d2b9a1012136813a79298658aa"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "94ce4f08f5894fb1dc9d51a9b6475bb3"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "0498da63b8311411bdb08e93145a4db7"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "be657d64b93e3fcb33b6422f7d0c427a"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "177b2531e6d8424769f5edbeac17934b"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "11e8bfe714120cf1d1efec120a91ec09"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "281a60c059cbd08ce382b77946f8fd61"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "39d9ab66cfa2adbc8def66887deef798"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "8912cdd08b16d0cccd15d497b43866fd"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "f40eb8a219c6fd73e4717e6db11211d3"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "d25422c77d6ad8bad4475d53a3170737"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "a550d047209e241394d8b9b0f1203716"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "ca285662d493956475218f1c9cc199d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "75060951a9d562354b87a04fd4831c2e"
  },
  {
    "url": "categories/nodejs/_books/egg/Env.html",
    "revision": "46b256ac5f58c46b637c62d7e22bf4b0"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "054cfa0bdb1e8cd0071a45987a6c5a3d"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "ed971218ce7eaac58938bc15084e6511"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "b360b93707fd4ee21cc735db99c727c7"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "07e782cd5c28322042c7e6d6f9bcaf96"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "9c72df68919cfc9a5b0521ee0430212f"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "2dcb2488ca99e1d02e3141db9d99c675"
  },
  {
    "url": "categories/nodejs/_books/egg/Render.html",
    "revision": "43d742c82ad028abc17593f49214a6da"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "749fe3e5e7d433b59ea10ce1583897c6"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "015c2f08e6e31267f2b8bf1f530beaad"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "768489dd0b246a59c9a9bbb97b015852"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "df6354d4eb4acd0d751e6d4fc7cad392"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "f813d4881752c247abc241535c7a6280"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "e7df70dff3c205935ccf4c72308f391f"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "e5641ff19aa6798062c94d76ef21b6e9"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "0c8d58ef1e01434ff235e053f6668a10"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "60d2eb6bfee9714484efbf9eb9a1db93"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "1b354bea8cecc647bb3ebe268e9d4f45"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "cbcf8fcd0544864bcda3d3fc6abc0e00"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "c3c968fa0e0755bcd6962aa307e2bb45"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "7ea2358678e63168e26b52ed67621f0e"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "e4da5bb698e3fbcb7e3e9d242000e918"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "f25a6e9f42d6ffbc0ecc1f3bb5a71b72"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "0321364f84381f351490b61aa7b413bf"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "fbeabbd3f475da0eed14080e1a30f7bb"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "36c3652a44304e429df1c4696bee445d"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ea606d2ac1b1b4e2a7f02c277bbc51ed"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c88d071ede8e60393e352fa21d2f2f33"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "1f03ad4c22514929663e845f4c5b44c6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "df8f2c89309c0040d6ac6aca05829b32"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "4d5a47a91a4962da8663b3eee87a0346"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "4d0a137a63e45f5eea3b56b084f7f2e4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "175c642fa392355546d13ff044d946c3"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "43c1a233c65d69459e28c848ea66d145"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "118bd2fed81b3daa72418f93c1dada7d"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "a47edefdd209cff61f01b6328aedcfc9"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "63e241babbc4311159eac45876173f83"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "e01a530e3c1001bfc78a04b42411993c"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "79163f591158d191d81cd5c6e27df6a2"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "b2326edf02f200eb188bc1aa815f1dd3"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "b46a097b09e718a5179f4f275d1c2863"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "eb11a3ad17055d06b2d1f6c34eec39d8"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "cd14a813ccc89a9256238a510acb14e2"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "0c4f3d2bf81fc3862e8e52ae82e0c765"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "3b7695d49a906dafd856729c80eccb1b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "4cc4cb0caed84248b25a52ed48cd421d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "57f024e062cb6da5534e262633b01600"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "4a7921a4f26ef685d20f9f880cbd1ce0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "dbc3b3cb759c8956677af6f3338276b4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "11d5646d5cbebc84065f64b17b447fff"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2da3a795dc4cebcde08e1d712c85fc95"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "ebdbf176fe619deb152f9f978538fdc5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "27b6fc4620cc76b02c8531d7832f425e"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "7807396f3ea736a97be43fced28131a3"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "fedb4109404c52e4a146b5c66ca8006f"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "da1922d9ef6c8a891517798428efde42"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "d5f314fb53689cb552c3885494a66250"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "3ca06ee3b5b84b061bdafacfde55db3a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "3279595ed9520d98257280a54910d72c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "7016df88f5c1dd6b8c527993296fc322"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "7103b7ee1f082fd4539d7432a67cd836"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "434a6a2bff981eafad5fd43e93467c7d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "4b52b9c21ab5fe955e0fe0e322e38785"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "d9c82a531820f1feb7dcd843eab35b12"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "023f19a1dbc60c41a4f459ff12bd2401"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "b29596487d172b5b630171e0bf0042b0"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "d046e2d0dec474479228606480b1c5e0"
  },
  {
    "url": "categories/os/index.html",
    "revision": "4febfad33a8e0db0e0965f4d98adbfcf"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "f642c064b613cd405dbe89bd1bfce293"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "4a57c0d91e178493238ae7215e9982dc"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "c3e07a90bb5c66ef9f1926630866fca9"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "dd00cfe69b82aeac8eb40a4135836056"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "6c759dfcd0cdc0c93767de671ccd0e70"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "76f27e5c25c32cfdf4ce68fb2fbd260a"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "c7290b928e294489f994c525454099b7"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "0279ac115236bdff748d4ac938a9e92f"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "a8ededcc8b31b39e3af4bb7230808be1"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "02ded542a1a122703ab45633387327cb"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "beb522a478698ed8d5df25ab3c6fc631"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "b7146afc64f19d1782613939b4d62863"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "1935e00cf9c5fac44d7896ca26a47454"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "edfee877ef327b5f7263611a1ee9cabc"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "4a054665d90ed405d79bc32bfd7980fe"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "dc956b264de3b9809df25aa7b54a7c0a"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "234217cd5dab26a0721d3d83d3bec24b"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "ff994f820231619ff48966deb7fff207"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "526734e6dd896c66b0043da742ac2743"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "2ce0f5bf7cbbdde1ab73739245707371"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "aa592b5efb5fbd85708a2fc499af3c93"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "d20545e294172cf21903cef2de8f435e"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "76bd84871d2dee2088c4e9934598d364"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "c5c870d77fac08dcdf4fc35944837477"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "29a7041f265759c5a284fa6129ca323f"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "ed1372ffe5cba2b83deca738b7a134cf"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "5299daca9503e7d94e218efe88af874c"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "2e983a451037e09d7b6af1495cef2054"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "68aff234c2027f4a3f7dbd3ac805bc09"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "63f73bf9ca3db07ef99365992119763d"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "5472ae9f25df6f8fda4db669f62e1681"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "9d77fec6faa0c292e387690cdba60aea"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "7776c13cdcf6da64a8b02703d1b84bcd"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "0d9d19006ce749b7dd07663ee645293a"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "b339fa239af76b228b3860f819e9b39f"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "1c435f2ec3b31b676c93de78708e1cb7"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f7c196ecb6f5a49dd30c0c33308a7c21"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ef6347ebcaefcb0c1c1a629a467b9f92"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "a427b51b845c0e448cca2fee681906a4"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "8b707d42b7e12c2ef5a2dd8b3663a847"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "440400b730adff43ea487ce9db029c4d"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "26e3b7005e3a25e38349caaf860ec582"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "70fc6bac43378b78efbd177bd08909af"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "1494a6d545fef8b326a5eb6e00881d34"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "ce99d7787e92491822ded98360878c9b"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "0442c2a89b240259b6e7981c0fb50cd3"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "957e3257e3ff40f12e07972fee73ae5a"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "b358d0f4147ad70307cc7c86d8a2e1b9"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "abbda47c15a9d505e43370be049d5713"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "7a9e4294021c67398c4b43b95a6969f2"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "e4e0d0fadfcdf6d2775e8afeebf7539a"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "bf13beec38e81069bf2b0a2cb4ca99bd"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "d43a189f9ddac29f34c6681b6f6df152"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "b8091cbc4ae2d38cabbcba03f34dbb20"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "a4714258628e0613592b85457c9ea95a"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "f6ff7a491f9fcd1004e471d32e7894b0"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "0a9d3a9c55cfd987da680420b764fccb"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "10b8ac04d8e9bb7a9be478ee8c34f4f4"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "1f6f93f24bae8074f2a1681673f24d22"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "413395d1326cd9d116dd59fd6b2e8478"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "0c5b872fab55911b608aaf9352d8437d"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "e41d835de0251ce7c01c7ac9d8786182"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "25d96da89275d8ab255b93e54983b6eb"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "66800eec6f2607f869ff9a8273afdfdd"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "cb38eeee7382c5b47e72c5738909b8b8"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "af2bb65f56c87b350cb4c8666fb12dc9"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "8cc91b10193f26a28992d9a95fd2f969"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "a3fb743523322b45ecb516dec7260600"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "f375b933a0c3a4fc4a1b4a6a1236950b"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "999292a3ff5e6dfc722029e5a5c5e5b0"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "3bd6c5af7e824eba6d46750c765ecbb4"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "ef535729be447e11af527aa3ab05313c"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "db32da88311065fefbd8086dfec09c10"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "172bc318861d988ce6f0218a9534f639"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "cbcfa4c99459c3749aec3b8d04e04216"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "6daa802a2e66ed2303897f9cdafcd273"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "6c6f00d588cb1694da59f3450413b6e0"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "feb75fd9ed2005c8c0a9c0b6e3744732"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "84007e594a42f93819ffbb9b4382e6cb"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "8452da1dc33806aa321fe2a53e8ad2d4"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "4b6f5064202f101d78209e6eda8e78ca"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "3a6e058893a09f6b1c8055b045e5df04"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "3978bd2c7eeacad297ee28633e99eb0c"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "336ee58fce398bc29075d20fd0f63f49"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "a278a67961aa4a90f7d69dee5d65c02f"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "ad0b40b42c5eb1ae5dff996b877adde8"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "cb2a904d89e0c89aa3d36197d85e1fdd"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "fb915da6765e9e83fdb4b7e50eba0703"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "04d68116bbfa68fd5c8d93a0c1d68802"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "182eb2e71b33e06267ec558fab141eba"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "1590235492e73584b9c4266ed8fa3114"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "d2db9078199f89c3e4f635fa55346686"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "3bdfa0588b4f8e7c7222a584e0e251ae"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "20b66375397b854fb79e32bafc5ad4a3"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "e4763d55ac74886bcf60161ae826acdf"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "bf5756639a2a601b6a5e6e02ac77daff"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "a735b630c089baa166d0bc15c63667bf"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "383e14878f84f44c97f67037c439535c"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "83fbcf797bafa6a2c700673441d4021f"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "e98afc1437769a47a158b8b21a64c6e1"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "27d39c42f58d292ce79545e8b8f652be"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "62075f2b5e956b85735fd103c9dfcb69"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "9b5bc79e03141c39ad51d055b3b09071"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "e996418df49f24f862f5a18a8eb591f3"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "8de9321868efd133c2ed6a31c1ee8f98"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "197ecfc21038b5bd8064cf4aeed7aacd"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "4761b5db348ed478ca09f03cb9cd80b3"
  },
  {
    "url": "categories/php/index.html",
    "revision": "1e7436bb4011dca0bb6a60e1c50dff0b"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "efbbf0e5668cfe434c0c7c030cd16518"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "cde4cfa41f7f12397be1f862d10adb1c"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "3d00d8f0630b2ff68b87b3d54b7213af"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "60aa1c372734c7f1f449a8d5788eb064"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "e3c91d2eb42e4df150dae0fe6dbf5fec"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "b130a240c625d38d1462e232d1481758"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "0994b729813de013a8b5f9cd5eda50ab"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "56eb7fe7cad67f808fb7ce46e5865bb1"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "04c20599ea21633c5a44b2e3c317b218"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "99484c3c86e7a39b1b72e6131745335a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "6b135ad4d36791f63fef1ace9d9c52d4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "99e1e31a7a8f4d12d9edf21891661771"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "06daa808d8257a63167d40c8cde1ee88"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "9b0c84c4d303aaccfed51023dc910322"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "e20d569d79373616c8e1f42204d14f44"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "2c1aeb4372aea0b2a8c1cd6ab7cdcda6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "e8306ce30dff0f9d6a79aabb391f5b6b"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "eae9e0e1ef63014645d806e11706756b"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "d4a3dfbf990fb91cfc3e3e891ddfcdee"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "108668a6bf586c42986631dff5e482c5"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "6d7cbbe657af85df390c02e51051d854"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "a0290831fa096d9d3907106e7f926a3f"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "863a1683996bf1675854f54519707107"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "0f359289eb3bdb8a4745b10040d76bbd"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "fecc84ebef1b7f1e7560ec62cbd0aefa"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "7040244c9d3d9c4e2d4c729ccd00e3db"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "95e8121d07312dabf7c3d90d380984ca"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "8abf79acdc77efc0f5b252009cfd876c"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "d259f7e758b83c6e280d13ebd0b1be4f"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "392d1f7721c5e4c4aaeeedea98526ddf"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "fc002cda4c96a80e8d9fe654d9c3cbfe"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "65e4eecb87fa5371ebc158ebb8f91604"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "28d0245431ea898efc480b7ce3aa6c7d"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "cafa01e6741b2780d43f8b9b27e734c3"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "c24fa4fea51c909b08f0a70a83fe5c6b"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "db8411fbf6d86ef1414faed1f7c4bb3e"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "125e678b56b3116220c8a9e6c8474562"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "7bebdcf4eec5fd02ada993970b47574f"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "51dbe9454eee93be84ca29a787467ddb"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "338b7d68c7dd6b96c6fdbd71b1068473"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "0d9b362798135171c423ce8ea53dbe2c"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "fed2f46ac2fa0c1b59670c57b08e1d9d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "ee5d437a757d2279a7b33b39b7eb270f"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "bce3911f181b13573de8149b33d0d0c1"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "85d042df50244f01bfb72126e5d487a6"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "9af354d7f2a5215fd8b86153807cc791"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "3ce7d414ac90c5b9ba8afd4ef5a3090c"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "5b1cfb6b59baa80c63c2b03c17d963b7"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "3d0007972821e1243e84a015d0a48bb0"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "ddd99b6858ee311f4cac0d017bebed6e"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "212f82d3a8752e23e639ae733cb47cee"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f649d59e305a3b77e0bfd54f9b688a9d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "bd47bab07703d70255a6999c37088fde"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "9669398bcb9bf71eb3e3a0f53465cfc2"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "d7f9db14abf02e048d3e48eb66447a5b"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "c80154ff3ea658252b2ff9d54badc1d5"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "92d6158fd2fb20eb6144888c97b7f1a5"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "f18489ce3b28ed8fc52abd433ae31222"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "09e14090d62a2089c5f30677e2de2345"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "c6da9f954137944a47fd019c507c1f68"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "f93986be9ae56790f741a043a25b17fd"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "eaa9c0c0f971f27022c8cc34dd1a0608"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "f0261c0f54b0f25e2670923752eaea26"
  },
  {
    "url": "categories/system/index.html",
    "revision": "0eb04aae1974248da16f2e5c082fdc85"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "f253eea0db70324a49d799ead253683b"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "22a020bfd26386fe9966e693dad2ad94"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "9421dbe5a0b73deedab010b0d1e79391"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "41d411f3776eeba387af789a7e1e9c88"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "6a40eaa77c1cf1686e7071b06ce8a641"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "b244e03b411a09e4f7b195f0aa272e01"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "34ac72f9b1abc43d3eecf829961669df"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "b868e68c8b8a84afd3db11d94268f7ac"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "1a87828c83560dc14c386847cdb36176"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "f90f8130d12b3b6d72bda3217cd70fb0"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "6bd43388f69b256812a9cc116f42acc3"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "12d55c5442a0d2c1c962fc68a9effc3d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "aa5e2e6e63a222cdbaa9f61ddd407f8d"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "b3fa57232280a581d095bd7d44d047bc"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "6784c15a31c04a6ca7b351eade9b5147"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "a01311e1de366d1dc5a97e5c3ed234d3"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "04eb0fc90d95e4e63ebff50abc7566d3"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "4c951a0d34c570c6e68a82cb0ce65e27"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "3984ec868da633dd3a29cb22576ff4e7"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "39be83c6fb9f5d60151bdfe4e18521ec"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "89053d47e1bbbf0e6ceca2a52a4ac5e9"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "f505ba77a58b97f7f951bc368e2641e1"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "c2df447e9930a0415797bb786c2dff7a"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "23e275b33295c1efc2cd329013fcf9ff"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "4df9ddd7c3465879e79bbb03947db651"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "ab7644ebecb9c1c8612c8553447c0aac"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "ff8b139d590b703fad1ff987795f89de"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "40100b0c2a9902203cfb9cc9ca286b42"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "07e9d219c8d85344ed12eb88aea40ec7"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "4584fdd6a1531b2f03a2d6025be13c04"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "80bb07529145a53802f3c6bce40a546d"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "8e6f8610a5ae5cf5d57c6221bf77020c"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "4b6975a144c8f59fe9f357f218142b05"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "5f7aa2cdb56c23b67e2165f6980c4a45"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "8daf6bcf6ee743bf880079b2f9f97ae2"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "e5e46422ffe918ce5ecc05b647cc7958"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "567874b733bc16996c2b6238a6e2180c"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "b3cb8584284483f2fc6e85a4be749d11"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "b06ab9834e15e1e33c493bfeee2609a5"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "78d2276a94f01e28d3835cc54eb29d05"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "5112b137675ba56548c13e65b8ce67f2"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "9c4353bfeb0e45b07b31c4123703f597"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "8f1bb64c3c1c0a4bad829ae084918c98"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "708dd8049ce3ed34633e6a636abbcb60"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "11005e1b184cc46a7f07bc64523a1488"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "5a4a018a96827580a5fbef50007295b2"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "6b91c881703e0c663349ecdbe5d375e1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "4cd2187e776731d5b535cc3354ad2df4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "3b19184485f78508572c7f8e97d8e614"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "d5ab8e848d640d5f37d1e5cff9402f37"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "6d84a591c64422f236df9b0556b6916f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "1b7435711bb0839fec26ef79f6d2a13a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "ef2ee2a6e989f9afeda63a8fb045669f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "6ab4e1e239a93ec7922fc5d06c4bfdf9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "814bc6ce6ac723a92f4c931c56e5d588"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "6da9b61b0c073db7c5b512d5f8f2759e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "880156088d6322b2bbbc723bb3d18ae4"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "8335b95643e85f86c510b29cbbe2dba3"
  },
  {
    "url": "favorite/index.html",
    "revision": "5ece2c20f3231cf6abfebb09d53aa515"
  },
  {
    "url": "index.html",
    "revision": "9537d49838b6ffb3b7f59221dabb6e16"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "ed61afc4aebffa471605bdc3b60f23ea"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "614dd318fdf3c03f57587ce2239818e9"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "dae9bddd32ce4fa300a7c01550e5408a"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "44fb2544a73ccd9e2db173eaeb80ec36"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "5dcb5e882bd90143393100b6f493e040"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "027aeccdf2cc362a76bb2dd562341b81"
  },
  {
    "url": "note/index.html",
    "revision": "a5e40c23b856545d889d514fa8a84f9e"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "988b9bbe77766c63387a28f8fb18a9a4"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "d01ed40f5a92c599ddcc0fd9e3e99e8b"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "4ab67336ce79dc8ca971207d914f6e39"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "8e74c4ba5a83f14637d622fd6b449519"
  },
  {
    "url": "share/index.html",
    "revision": "b3a478df4e971f9b5d627e60b673a123"
  },
  {
    "url": "single/about_me.html",
    "revision": "d27fe61707528eb9917164d3a6d8e366"
  },
  {
    "url": "single/all_article.html",
    "revision": "689869b5b862668ba6f7dfba5bc1c3a2"
  },
  {
    "url": "single/welcome.html",
    "revision": "6e90631318a889c08045e37a8cfd132c"
  },
  {
    "url": "test/index.html",
    "revision": "b7941662b0d56969fc19a316a9b9ddd2"
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
