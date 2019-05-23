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
    "revision": "38a5bbeea1d1ff9d96816538b425f5b2"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "c64f564ffd04359b4832fddcd7ae294f"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "9adfda980eb8f83343c75ac48f80d6ed"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "dbe74eb6d65eab32813980c5fe8f8a2a"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "5fda358d3ae8c3965ad645b0d04c7b29"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "fd0bcf71098e835e155132b10e0610f0"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "17bfa6d78490452f8838e943c75f31ee"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "2ae39bbd38ad819300970c53ae7c3a2c"
  },
  {
    "url": "articles/index.html",
    "revision": "50ae645be8d2df78a2d751ec727be51d"
  },
  {
    "url": "assets/css/0.styles.348d0f22.css",
    "revision": "228345e067e3b0d5198ef53ed847c2e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5696bc34.js",
    "revision": "ad2a85015ee092c9d31663dbbfc09c43"
  },
  {
    "url": "assets/js/10.148f1025.js",
    "revision": "13c18582037569baeb2cf1d36b2e57c6"
  },
  {
    "url": "assets/js/11.b37ea789.js",
    "revision": "03f4c4e5941c3002c837d01117490bf4"
  },
  {
    "url": "assets/js/12.a9bb58b1.js",
    "revision": "dbacf67da058e4e024a7de983ea25804"
  },
  {
    "url": "assets/js/13.328c17d4.js",
    "revision": "c5d1b05c9eabcd02e78b2d49cf7e379a"
  },
  {
    "url": "assets/js/14.35307f94.js",
    "revision": "2f8e7601b7f68beaf840b2b4e27396c3"
  },
  {
    "url": "assets/js/15.15634fb0.js",
    "revision": "9a2cddd838f290b404a6caff39834f3b"
  },
  {
    "url": "assets/js/2.18f6eb9d.js",
    "revision": "3dfabb37cda81da87d1b4a7334a2ed53"
  },
  {
    "url": "assets/js/5.3d48ac25.js",
    "revision": "7d17a108f04277cc026bd166cbb2f3a0"
  },
  {
    "url": "assets/js/6.8ac9f7c0.js",
    "revision": "41b89a9f930cc0192cdbef9461f940be"
  },
  {
    "url": "assets/js/7.980960a5.js",
    "revision": "3dfe446b23114f98435c84f301222aa2"
  },
  {
    "url": "assets/js/8.84264161.js",
    "revision": "aca6cebcba6294e24b7a801a96961c8f"
  },
  {
    "url": "assets/js/9.0e8c0cba.js",
    "revision": "20e90692ded7bca4f5301b3b91aae1b8"
  },
  {
    "url": "assets/js/vendors~docsearch.382d340f.js",
    "revision": "86c11c109d7935c452cba77904dba19c"
  },
  {
    "url": "blog/index.html",
    "revision": "9f48fe2abee1fe64f4f387c3c5096369"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "47655f9f37c3150961b30ad6b774ee8c"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "56b856ed325a8a3c75127d62e7819ab8"
  },
  {
    "url": "books/index.html",
    "revision": "87ec66a791afccf292b6b1a8f5781036"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "f86d4c987ebb27c21b187ad1b57cdbdb"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "53f6fd6221736b456a82ac1300d59e47"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "de0e5c8d7d4b074d5a7da07e539a8a6b"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "4f8ca475c9859faaf28ea4d55d7765bf"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "3ef348fd12f91a3a530f91535872d690"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "3879c200340773163d20867856253bfb"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "43d1538b37e43c8e8ef437023d20c29f"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "6a6200f52aa0538c09b705db6b226e90"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "1a2c8b99f81d4a65abc1ef809c1e43e9"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "2b88ab1161e17e7f4e3992f9dcdb5cc9"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "3f3f1546d066690851e27edea543c539"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "3b963b63519fa8cf14b6fd668b7b858e"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "aeb202f586d2841871c99f2414e34d31"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "90048d8bbf607492cb33f9971fdf563f"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "542f77820209f3f97698d48220f6b576"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "04aca8eb59a5655c0c41a2e070a09f4b"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "d1f4c3792e8f30728560300cf8a633b3"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "ab26423b4c9a570f0f764d53cff422df"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "2da1ee119439f4ab72f382439ecd6c97"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "70dec1422262528669c8e51248818223"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "57b6be7673d0e52fec8f650bae4e3c55"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "01fb3af717f479f943bd7a5eb1a28d51"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "fe44a04334e2a3007e02304bec8f3dcc"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "0ff5ba3cede27d1a8c2870082c057a63"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "67e0ede4ca4a06053c3dded41e9436c2"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "4c05cfd0332944013c22c738c814ef40"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "a823a5046d3c1025a57e78938f61b549"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "629a2673a45140fd1fb776405e85ab94"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "417e1260a0b98d490c7a510e4a289291"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "c8e1b9836952068b1a6077a7e8a80a77"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "37d54c3e15358d0158dc4623570ef666"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "f154daf057117a8ef13b8112de392e65"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "167fe180f2a759a035e467e703c1ac49"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "bff4bef1099f7d68c1106973e47e0338"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "9827e88f65a7da3c81b647c8eb7e0af9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "6f36bf381dd6126cd8a9f5b7163439c8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "a7b1200cf7bcf39b467072c967456911"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "65d2e9bc6e32074638074b51ac1ea3c9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "2f16d1f9c7e4688388f1250c2a96f53b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "200e4fe503b1c8770b926eb06dc79b5d"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "37b7bdb603aa64f5ee1f656a93de628a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "b794471a970d4e4f60cf7c4507bbb3c8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "80472feae2f7eea5e95dbe441a7669a9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "ae86a7f949ca5c997699d635319c8ab3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "cefd66db316467ac2b00a10aad945f47"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "d891da2f4d428b3fb584b053c7042cfd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "7eea2c5faddc417c33ba0dc223788035"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "9d705d11e7ee5f61a8a7bd9ff1bad89c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ac5c57f0af0f0b1e16503df7c0e5a53d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "1550b05f9710f5096f3172fd5e64df2c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "a994d889137aa40a4490ce1901940f58"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "857af086ff67bc250ec8c78d889148b3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "3cc4dff6e2f92d5e83c6256cf4487f55"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "fe152f7e1d55f9f546c2d4ccbe96b560"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "0ee02a8d80d20219c7ff03440f3f8794"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "9ee272ad3bedfc2633263dd2e896ad23"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "4476496fff80fc958e5811acbd5d2dd1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b0e1c91990f1caac13f1d0334a4d2502"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "cc2d5333ea38de43a3a72fbf1e4e1926"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "f26410945a670faacb439ec41024f524"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "2d15180154d9c07d81c2f89e17f53d9a"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "4cf3ebb8ac1efba61e2625c9a509323f"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "c22228023b767ea65702f9a118d0b7d3"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "feaa3dfc4e780bacbfb324c4d891f213"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "77046aec1706a4eeae809e386646b47c"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "52c358a6a8e91fc80fef96c7df03e799"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "f75625345cd233a03b958f6fc418193c"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "066b6fcef93a3eecf310e54fb7a3439f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "e39ab275ee45049d55c5d5a25b16a5be"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8270a50a932c96642908a857f3ea0129"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "e6d79b01291a8f8f5467c2ee10b6af01"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "54d889f1b0b7cb0102e19304606ba5bb"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "cc012910221a2de74c8ed01890e173ed"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "28f98f7a183210e532ad9220647e2396"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "45d2f9fc0c7f76dca8816d0679b67db4"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "74c2ba0a4b1d4646975fc688d4065244"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "61d1b0df3f502e9c4278de32f7cdbab4"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "d2d6f059457954eb242fe7f0a6a2065d"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "d0f842174ba3d4df5fac44fc22ad4b69"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "7efcf75455e9a956acb1e3450ba41e99"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "874c77f667ca92bf3e26ba9875d0df39"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "50b4e6f6b781b268fcb49f4da570ee9d"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "d43d91e17a3e549121410b1deb3fb6eb"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "cb16da569516a9840d9cd8c9b645775d"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "3e6b428c34cd959c18d7bdcc52dc0c5e"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "665ae65879fb0d6509ef5044e72eefd6"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "44afcf197de3c4110a9f5aad99e590e3"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "aa5c132dc96396a03b8f9dd368f34d23"
  },
  {
    "url": "categories/front-end/_pages/Gulp.html",
    "revision": "ae5c0bbc703e4b7f3a234872aff4eaa7"
  },
  {
    "url": "categories/front-end/_pages/Pug.html",
    "revision": "c6581785ad0e11b8fbb296d345e7a0ef"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "99528c844f99f7f141925ce291fe28d3"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "d600f72449ea097f6e8779d2e6a6f547"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation.html",
    "revision": "7a30bc1d1f852d46eaa6bb366340f10c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/example.html",
    "revision": "33cb48b3c1b0b4ce656a5b9f5d2b3ef6"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/index.html",
    "revision": "d2bd50f27cfb097d42b342861b6bf922"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/reference.html",
    "revision": "640b4eee1212cfba9244e656ee6f1c0b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basic.html",
    "revision": "b957e313ac528218d0bb66f652c60c22"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/color.html",
    "revision": "1c712ddf866a085920a3eb6062ecf8e7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/create.html",
    "revision": "87e93d5a6b742d32c81f144977179f62"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/image.html",
    "revision": "81e35e1cb0636239d1c37af5a5b34cc3"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/path.html",
    "revision": "811bb9cccf777f83a30057fc9bbbb74c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/rectangle.html",
    "revision": "111cc79f4ff8e7a0292224c991f3cd9a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/reference.html",
    "revision": "b02fe82a5af960498e55ee34d2ac780d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/save.html",
    "revision": "c454c3cdcc56a9ce12c03c67e87f164c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/style.html",
    "revision": "bbdd57a93367acc0d8e64e64f63a842f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/text.html",
    "revision": "d0bce48838a4583106a43839529d252a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Clip.html",
    "revision": "1486fb448c0bd1e83d337a283931147b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate.html",
    "revision": "96b519cf9324a6923d67ad0fe856d444"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/index.html",
    "revision": "a7e702408c29f19f2ea6ce3b9abee5fb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/reference.html",
    "revision": "180832e0aab0400fafce3cd2418e3a96"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/rotate.html",
    "revision": "a182a118373939b384dbcc353f436ddc"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/scale.html",
    "revision": "c866c15d53e6008a864a1626bd97bf9a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/translate.html",
    "revision": "c1155240c96a309758abb1d884bb29e7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawArc.html",
    "revision": "b6a12783d2cf1a5c8450c3d8a42dd44b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGradient.html",
    "revision": "564dba5eb9dfd3a7ae927b3667547c05"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGraphics.html",
    "revision": "c905fe52da39b067ce0fcc0cf3296b00"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawImage.html",
    "revision": "b11b394f41929de8d68063297579fb50"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawPolygon.html",
    "revision": "d59ac0ff2bd3b81f0044616d44573788"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawStyle.html",
    "revision": "ba5147dd55abd90dd0868a43ac1049be"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawText.html",
    "revision": "67e1da9910014fe2e86cde11d0f8eebc"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/capture.html",
    "revision": "a98e045a644854e420a3cb17de66a633"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/clip.html",
    "revision": "f6514aeddd0e684092a78631430dcfdb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/composite.html",
    "revision": "6d94d66d6a546ed63effa2bc2d7d0538"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/effect.html",
    "revision": "38dad72b9c83ef3efcfa8c1ef499c7e1"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/pixel.html",
    "revision": "e51202850aa21f63a73670a211ce515b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/reference.html",
    "revision": "4ee04f19c1cff812c0b8b3ac1a084761"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/scale.html",
    "revision": "11f6994e7810636a8ae3db49c4297f37"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/waterMark.html",
    "revision": "af76db67d8dd41c828d860a5f5031548"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/ImageProcess.html",
    "revision": "ec109b5427a725d90699321a49c3d52c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/index.html",
    "revision": "b0acfddecfbcabae2ccca9048c308a41"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction.html",
    "revision": "c58bfb5136b51f5c658cb739a2c29550"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/ball.html",
    "revision": "6eff56e799ad996cc4f7234ff2eee765"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/card.html",
    "revision": "6c9b1751be640c9f694be271afbd74ba"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/element.html",
    "revision": "ba4687571061c56a0e622a2e700ff21e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/keyboard.html",
    "revision": "551b667f6055b16e2a925eb671174147"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/mouse.html",
    "revision": "5234feda443bc6afb0e50a5b7bf49651"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/position.html",
    "revision": "64f7ac486614e2f97235e9a6fcf417e5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/reference.html",
    "revision": "14f7791eb0ec31d43dbf29bc85795a31"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/spotlight.html",
    "revision": "576af60b7b583f7be275dc669aacb968"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Matrix.html",
    "revision": "5bf7282d349671f0f505de56b14e026d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Point.html",
    "revision": "e2b850a197634ba7e940281e97b0a4f5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Reference.html",
    "revision": "ad38beedae50d656249a38dbca9101c5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Save_Restore.html",
    "revision": "228a65cf3495d751bf245ad291e89ee6"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/coordinate_system.html",
    "revision": "c4181a705c6d4e6312d96aec742e02ee"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/matrix.html",
    "revision": "50b2e0d435ae9a250c421054f7eb0c85"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform1.html",
    "revision": "dc8335874f5b50527f11a01981a8df4f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform2.html",
    "revision": "85ec9664decc51e27acc017d27e01279"
  },
  {
    "url": "categories/front-end/canvas/_page/Scratch_Card.html",
    "revision": "ad5bea224a21064ac82529982e86957b"
  },
  {
    "url": "categories/front-end/canvas/index.html",
    "revision": "2ee2dd3dfa29c40142355b6c72bc877a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "a5bcd8350ad9dd1d0f14992e4932c7d2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "87e502a420f64faee92d9ec8090b2fc3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "43d7e81c601176ac5b612f8c280718f7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "8ebaf093200156aef9d4f5e5359a2743"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "bffe094288f2fb0599a8f1d2373b57fe"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "10bb06d320cc32005359147fb121f867"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "9d9cf4ef72904d84fe07bff62a97e60f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "4fc0b296eade431e9f6252c51c0e3522"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "658ff810793f559f4db73e588aa48d1d"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "d5cfacd97121c5ae14194f1bb1663377"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "50cde4e0754fa2ee341592ac064fd137"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "b978f67f9f95b1eb36c703899761c0de"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "ce92650f7696c733b480def73dc9e863"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "15fc6f71583d123e519dc05cd3c65359"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "253a1c25fc69673a51910b13223950c7"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "06dd40d6fcab645b28962ead5ac0f935"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "26ace21352e8f8a54b5047efa1237462"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "28a0445b2356647ae279c60b1e9355b9"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "9f8c64cf0a49a9d86b28cedd3ffef80d"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "9dca1a91ddc16a36dbb5e7bbff7bcb84"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "30845d86a95f8223d6f43f0648459f82"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "b5edb5de4895d306eded666eda74afec"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "17ddd62f8695b42b40cab062a5f350dd"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "3a124fa8b509ec65871d74245da93799"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "68f6f2ae39fbe5c6b6374f51779d5f4f"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "6cf2ef4bbe6992d2fe8b8a46f02f83df"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "32ee877bea58b491983fbc4d563ec59b"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "5eccd3983c71d034be8b31397f51592a"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "652b89a0f3aa2fe548f7bcedbf1439cf"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "a2f0a3e3413dc8711b63cac4e0cb21e4"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "e677bb3062dac175cbe49ba52d75d714"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "91e81145e58a1e88a9573fc4490fdcd5"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "4834cb34c929c3966372b4bdde08a3b5"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "f2534d04994bf6ab92ae0f9f5caa7584"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "28a688360027e21540b79b92ec1d0cd2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "3e3ec0868745893f4f0e11f8aa810071"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "4058defa065d620a43c627c9d032a7ef"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "4e42ae8cbb02383fe22a400977c4ba20"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "dc5a0ba8872a0a2538afb66bca82cba6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "c4593c7659f87eeac09da0f25f80acad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "c4df3e050bfe48ba0a48b067852a77be"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "79e92cd5bcb1dfe190adaf95b02b41f9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "e8179fe368ea6cca6eb97e5d5885b67b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "a29e769f829f55a040ce9232c2001d74"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "629bd4034aced8d6e8c6bce192030afe"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "43bf17daa265c21f8e5481588fb2eb1f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "d0c27422621f91a218df83f666605001"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "a6874e308ff7d0ba1f55bed514aae323"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "c70e42d6d15ff9a5e4a5d6f7346ce2e5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "a7f85ad0054758766791f53243069ac6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "988fad7caf667c4e87e2ee4862fcd4bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "01beb9bb7fd6dbbed63da4d39d0682ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "4c7595c21ccd8a6e97d39428fb3f2100"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "dfd9ffb8200c54e12b233ce99757c33e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "98eee0f7fbb4496561f660ec16462a10"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "bfc578a7fc27c1da22d09bc7a3af80a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "7964dddff900a1150e127e1f35d6a57a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "a819774eefad59ef239a1c333ba1896c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "0b7a917aa26e59bc26292507fb73b869"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "860728282d7599e130562b652714256f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "46cecbba9850248ab81f116a9aeb352a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "c9ffe631d76a1640c74070513a5ed317"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "bcaeead2d47f2ef3fd4f0f1643087b59"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "33535295b52bb41ad13d9a8f96de8760"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "dfdb34b0391a9390e334a3dd8c5482e8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "3f75b5ac88d17ca5033e8d75cdbd2fb0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "f4bbe98039f3b249988dd21d2c8fbb45"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "472e4c4918c548275b700ba95eceb7aa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "67b84e6514bfdc9f50320d50b13f1690"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "e30f59211395e2f0ec1f4002aa1fa35e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "551ce1158119419101dd5cd05c1983ab"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "8ece8de99dbf6213655943a6e3637cdf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "67daf16d52713c3e8793b25d10ff49e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "38ef8c57067cc31443d898ac7b7b54a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "568de8958535b8f1d39a1efb5cb878b6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "80169977658c6c41be6d1b58c67c758a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "4f97503c220b05885554f662d77be2b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "4eae44bd583bcb6e03feae734fe23821"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "7bbaf750dc43e2bc0e4686990f0b2362"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "944a8c9069ae9c6bfd69e354fc4d87ea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "94254918953215fbc5e42ea83fca3b0a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "d4c8d68fde476a523cc627c8b52c8298"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "a84ef425313f6bb8dcd95a96cee31431"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "f0e87af9cb4db09cfcb48dfa2db6cb65"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "c5b493179daa07468c4f7a7950789a96"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "e3ef2d2062140109314c1b11467f601a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "648e4648d395e9404414201bdc9df713"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "683594c7fc9a2754f6e31139964b81c6"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "5e6a335d2c85e5048875e5dc65e19cef"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "6ca5b4578ef242c668a3a4025189ace9"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c1ee9008b858136921347631ac34d015"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "c6344bb39722febf1d91e8508c8679fc"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "47a2a7d6efd1306ec5fcf42f5e7697f0"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "92aa2f7c0e001bb89790250fd9918404"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "ef5c24a231c28733f73851046960fb97"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "50ffafac6408e24ab5b2acc36282cbcd"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "d642c14792df446e91ef1eb4dd2f1591"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "18bdf3b2b8c17150c76159ef65410866"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "783c74653a720d6e4515d466835aab0f"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "b9dd8854f70a2defb97b1acc5750601a"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "4908d0cea20fe116e6a024bff0123b95"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "d84b97e5841d864755749c54131c254a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "254503e43b53b84e00d9cbd452f41b89"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "c4e86e710b490065979844a31a3bb759"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "3f806add2675849ac21ff48250b5b741"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "38f50ff507fe61348896219c559abadb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "8b58b18222639bcb895f0f84667d31e9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "773baacf374955ba306abf4a9b1b4a5f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "6b4af5170b082624d46d4f130c8f42f7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "f27a76c403433e76d53cec5711125466"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "563fc7799a274025df7d001ca194c390"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "f6a0a74337d1f3168de90c2e358ced40"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "2a4ef3152d1df44b11a1886af84ef4a5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "df59b480d6e54dd985c76b719f04cc95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "9912492f75d7c4311767363978fb86ab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "ab17f40c264c255cc71def9809e72086"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "3990221684df24f87b185c63291729ba"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "f9e58a4de18db9a84abfd87da164a10e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "a99603492a1a9e890085ef834f298f2e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "4a86e8ecfb15416dd639ceeb993a59b1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "891c0812a2212014741d7d612f81c6be"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "e7dd5478af35e385e6a0f01bf90983b3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "cbac81adda37e3c2ab85742dacddd737"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "26d3d7b57ada755aa1f9f7d7cf277052"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "14f5979f1d0c6ff9eee122fa8a0915e8"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "f721881e4068dda52e90e406c330ce4f"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "63214a89354c29c38dd98900754499a8"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "741625e2131c8203bffffca048db339f"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "b5453def4440946f496af45ae78fed9c"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "771bcb6d438a22b91894807356558f3c"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "f4c55e661643ecb97a8f0fa3498d2a18"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "ebd2057185b6670db7e51e253f1516eb"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "99290e721b9eac3edf619a2b32831190"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "c252b073a2a2d7eecab9ca512d8d7c4b"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "45b002eeb55e205bbd553c3d761f32d3"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "cdbc375ca3ecf06e29839502601519ac"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "9a8d814f54c6e5fa1e923e33b11bd0b7"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "8f8dc8e6d73911223faabec94e456afe"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "7a5b9701492399e3be93800bc826d18f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "9251f05135803ebe82af329622f27e05"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "651fa20df643bdf8f9cc26fc2abfc557"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "4f08f19d5d3bbdb279c33864179272f8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "5a5c605d8f81c21c10eb67475d36a214"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "8d17c86cc07574072372895b74461a8a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "819c4a28239fafe1a7aa1931a4ab7d20"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3af495f787966112719d49fa7a4e4c70"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "ecdc62974f821073e711f8195aa1c155"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "1e942b4c62e956ca82d06b37f13e4651"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "67bba2951cf1348aaaa60f583866a10e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "2252b366a6dd86607014a61330ce5844"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "c65662b44eb38f7c69a92d90c1c51ec9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "ff005d097d61755f162982c94d8aa4da"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "99ae9b0689230be27c54c8eae177e197"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "99ee2f85f4d8b54cc85b47a5e8c780b1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "b48129caa28471038d5f0228145ff3d5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "346cad027f530a1e30c92c70f01993a2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "310526cbfca0bfca3b352617201f296c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "e9fcfc57ad30a55e0db0ab6991f7f558"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "ddb2c58d9d98acce8d745ce61f8cc868"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "f0500d104c78d8e01ead1ae20a7f07f4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "41aa2228db76ad47345e6c605e5facf7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "36da4237466fb5960e961b4287c17178"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "610e31373a726181d52e6bdc3f89c0ea"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "1d845fde096b7cec2d98716d9a868105"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "7d5c13d41f46aeab4c447909a54fa195"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "63f2794ae4921bc2b0d0b82c1115c6c9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "7195f6c4ada09e7b417d15edeef6cc2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "5a205d2eba97f721e17c3092c41b472c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "0ef3a28283eb30efbcf4bcd242258b6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "b0957131222bcb155379942b58eb39c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "8c096bc312b179906aa98034237f67d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "e14ed3fe8c35ea5d64e9df7622ada4d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "495f369f4575938ade8664e09310b02d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "4aefc163ae059197b4c0cb678752364d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "60519cb814f713a01db94c2e0527550f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "e889c010627122cc05df8f34284fb7a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "0f281f09e812462df7187e32cf3b92f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "c722d313d793377a4e0cbc2d6f88c1eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "ec078cca67a789c9ca1ceebc207f8cfb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "312d0da62890a56301d2bcf63ed61a0a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "51e99f50538e4b94e4f5a8a5174000cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "0ead6db9007e9a4f585aace42a99d541"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "6f6e3257addd0ea23a696a6ad87a4713"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "4289917d11a3b79bc14c37d10234f9bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "d5b0579b848c647aa68a3950c39d8207"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "36c4e1ef5bf6516830acb8e5abc2976c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "d03ad87bbaffe331023e2517149b6d81"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "c9d3c144d16922d89aa3bb7a959a0526"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "798542d2bb63051df0ecdef88405165e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "e2bd2094666ba4d15b76c6e48b990530"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "ed1f47668be7a0abfd882593fc7a0316"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "97779ed6d807b34a4b3493fcf7900102"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "221858e0f23187236f010f336e4e5caf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "e4c107b12109c38759651686f63d0e1f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "4962b674d8f443acae543dc6e57f9d2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "dcb813364dae5f0f48ea5c7ecf6a16d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "b340170472846f9f1f430bcdbf3574ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "cac0e0fb794c875cc1feb2385ca5a316"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "932a53080c7024bc095b87300f5dc716"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "59eaea2be1e844e83c43ba4d4c2afbd4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "2fc0a486855f511fc14a569e6e728b8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "9faeda84d5a715110e9b284e703e2276"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "b207c6d681d84269021582ef663fa005"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "38cfea69482a2f75812172e32e125320"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "647dd20b3ba451aaf8c4df583dd9b4f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "37c74e6c6818a1d3abdef0c8de24b9f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "855525cbd7cf25c357edb9b066e60d8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "0a2cbfa356cc8324aa5dea6b97b11f19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "ea5d7f0243cc58351d7e5769d718a538"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "37985837c6713c3dafc521acd72b1e13"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "33ab8de5f38fdc762027ce3079021d9c"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "8342d69a50ec96a0c8d75f8d5520e1dd"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "1f6b0e32941a00d227372d9bb271e593"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "07e65375ec1ccfa899868b08c5d9c687"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "dda05cd76017912184fc0b079b9ff676"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "42b4075c0c736dbdae109ee71df0a792"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "cbf0a29e8a721089649e92404ec55c23"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "d0781a9bb961ea0a7ee403eaf35c0a61"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "efc4f01f718d1ac462a67db8fc233fb2"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "ed41bbdfc502f55eecf317185bdec71c"
  },
  {
    "url": "categories/index.html",
    "revision": "ad6eb069785297701845cccac876c229"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "1d32fd19d6dd69f07d7d4abe08d38469"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "ff7dcd23dab7c75a91c027b9e82d0c78"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "2a783d36760ead5867fae37aabc39c00"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "8056c4be0d45e256548409c033bbdc4e"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "ce52ad919f9f141c9b970ad64ac6b411"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "d361703acf47d26b021445a18c071b2c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7f3c52a0b0a0687a782c860b1999f97a"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "aea0940ac917c2df987753aed747c7f2"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "c065fffa2325efcbe3f47d705aa76580"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "ec5d8364403f6adf0405d28d355fc9d3"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "7d36270fdd036ea74094e1c13ffd161a"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "fc75d61dab20b45f1c8e767265df2283"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "0115fc74ffe7831bf72563e90f4de15b"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "f18207dabb60f7db874e604ac996c5ff"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "d24fa9eca8243841efa223d262210334"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "39afea143c636030342e7c1be3aff38a"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "439ab6bd70e4ba77015063281feefefa"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "c55932825b0cf6eb875fbaa2a3df2b22"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "92b12df4a5fca454b078552790f8376b"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "0786f97426e85181c4f3c544daac17b9"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "1e3290b3f60d4e586c34369c8dbc8253"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "37044a79d063f06b96284547c02a9f45"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "bba465c95f0bee4330a3396db818cd8e"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "be9e279fa8dffc67e334e9903f8b8343"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "4fb16f61319f4584318d427517d571b7"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "8c1f796de36f5bc3a51ec74ec14eacda"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "0364abe0e3e1a149faa6e9fc40c940e1"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "205e405199bb89527c09cbe0256e7871"
  },
  {
    "url": "categories/nodejs/_books/node/Basic.html",
    "revision": "0661ceaea94eb7db3f38adb369d87850"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "972ce1d72fa781021735bc5b3be416de"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "794b0ec231eed7697fb54b046f3ea47b"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "fd605b6999bfc35d727864842ad223ef"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "48251687f3517cf3c8df7c1a101e54a9"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "6ff6f52f97e686771c3838c0f423acc1"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "0306a61bead34538056bef55199cc4d5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "e795a149c0a6552e34dbea1082feeaf1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "cc57d2212263f6deefd91dafaa427d19"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "252368611feede6c3078cb7ac0b5c565"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "1fa4fd02738d96b6b37609031d3f07e5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "98d70c3a6c9edb51ee03acae8a445f84"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "7e516c1bc8e36068eab4bef6d747fb1a"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "9af41e8776fcdcf61a0c179765bb98b5"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "950129db1f00c39940e59535a3616353"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "fab0b5ae10073fd927ac90a8711e8fcd"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "66ffe6cb2cf8625acd258b2f8fcc90f2"
  },
  {
    "url": "categories/nodejs/_books/node/Rekit.html",
    "revision": "4753f5090202399f645ff820472db39b"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "54eafda5a740666ae33d0faba43c325e"
  },
  {
    "url": "categories/nodejs/_books/node/Solution.html",
    "revision": "95d1cf695684a4bf627a62ca51b75d3b"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "07c6e59c707c50c22386989ee6fff89e"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "9dbf0d13a03cf71f6a96db46fb1524aa"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "ad5bd33594c3a14f3462a8698f543475"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "968f45fc3714352f8ea4276ae522be80"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "ea08aad226078cbad3817b8e74f35c74"
  },
  {
    "url": "categories/nodejs/_pages/Koa.html",
    "revision": "705702e81d9d68d442220cedc21b3f50"
  },
  {
    "url": "categories/nodejs/_pages/Sequelize.html",
    "revision": "b6cbe91ed38f41d25a9805881c2e6d22"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "7c5d09e57fe451005697acbd25db6cb6"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "0f58b6978d4e9fc476cc349c784606f5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "85d37e1e7bde148e4d9d11852fd95334"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d0fdc1761bcebda6919f14982a812027"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "93967c0a31a96a7ac6ed5f789eb32621"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "806ec0523f2f6e5d92334673c52721d1"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ed0b9d14fe24e65584a0d47bab371709"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "c37819e52ac2a58fd8d26ae20b88e992"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "9f7627ac6c8697d94ba4d41e672a1e20"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "3561189014e570345f2d5be09b6dc926"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "61436614b90dbf0d6c9d7ed5bad32f69"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "71f327b814270dcdda96171bb8e7b735"
  },
  {
    "url": "categories/os/index.html",
    "revision": "324ffb1aec4335444a31b59f8c0ccb2d"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "6c5bfa5a1201e339efbf54b2fc8f34cc"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "822df0e6e1fc9f831b75045588815ed3"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "5ebeea98b600cc949ee3fecdb22264c0"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "c77641f0f9bfd7afa3e8e12665f548a9"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "d6e84fbf7a54b0422b3190638e8bc458"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "3fffada21bb14158b982de7e4947a312"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "4f186e708b53512f76948c2d9e12f09b"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "b39e312501de2473f57296bfb2451332"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "eac3b9aac6446975297a94956159b892"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "968727f58a8a7a1b28fa5907c5f6e784"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "542cc0878cf66322d0978f96844f1a9a"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "1c1ec6969cf0d3058e555418c1524094"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "b8dd8d9d41272d2453e31a6f5a1c1255"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "da677ae26fca43adca4c5e3df6c34dac"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "210ce0b212fa72dc80b642604d2534e8"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "bb2490583a48dd6c8b0aa3632e29fe00"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "2e58370e211df26089c208b5a1041a06"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "6ef5525fde3521e59141621131e7382c"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "b650a5300c7f71f9d336e7e5597dbf48"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "664e329ea24c9fc9bf73854ccf9074dd"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "065a1936d423ce640c1a249528ede4e1"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "bbae8b2029ea801bb266afca42bd45e7"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "77dd6b8ced09f58a3f08539776b4b6a9"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "bf3c4ef55e0096cfad97e82e178ac198"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "9ee8186ee7f7d0a2f574f77c62c767a8"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "af32fb926a587599a1bd5c564f7ce2fc"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "384e0a59c59a6143ac636f3a909d4f97"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "3d8124b70c389fff6c6b6b68b3127329"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "714636fc0347f5f4ab27a9245e9fd524"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "0ee1e9d8e8b304a95550208acb56ed43"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "eed441e9627336f35de933d7a1fefdad"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "7c5d77ed6956fd59ea1d1a421e8e64d7"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "e534da859eaed1efdc093a0a751237e8"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "a39a47bf746313555f84df2ad871f07f"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "2acfca4f0cfb3c6306a5428df296d42c"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "502c41688c34eb61562094a37263db7e"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "6e8985909de017cea484ea66fd2f6994"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "e9446ed670412cafba87519c0f9ee752"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "afe35a2fd4f7a2c46d88873d154d6f65"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "381b79fe9304b83c0dea5641a246704e"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "26f6f28a36770f14d677add89755f091"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "0a35205d558c2132a98c853bf803496f"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "05503505b11c11d6ea66d9d1c3c64f0a"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "720234e334a55b8f9f1908bfdc02213b"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "079ff2484fac02db80a92e248e99df7e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "5024de8b614f55d51c28c608d82402a9"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "496686eac8523dc3b0f815b86cc450f5"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "fac51a0ee577ea99959fada8059f9b3c"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "96ffd3783dc77f1b022ac178fb61c1db"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "40e5952a7b38718e2fd5e19323d30f77"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "5960fb91cfc99b8bff6eb0f13dfa7959"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "ffa3e35ed92579872479d3541265c712"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "3360ea7cb62650b2331a0dff032772b8"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "067e733add292c3fd800f536dc9ff0ff"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "9629114fb2d0f367224a581fb1028796"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "c5661a7c4d338b7895e5d5e87ac73243"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "250a21ee97ded66f1571bb761055fb07"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "3a6870f6c5f05a467963a5615615398b"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "7d94444647dd602b70994affd7dd7dbd"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "230a8679cc0547886216b15756915782"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "3058f67ef5f152c48d98ab79fe9375a9"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "41a8e94a1c6a68265ac90c716b63b0ce"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "118a8cdaaa03f5314ef921957dfad406"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "4de6a9412698b4886ed76fe0d82e5f65"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "1439beef2111fd97e4072c0c41a30f46"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "0efde946292dd417538682ad660b7100"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "c8e47f27c88337a1d84e53e038a7f819"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "1032abceaa3b2cf4b34c5f3d9fd190ce"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "e789955d9a6e8bc7d15f044bcc4014c9"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "9678e21f68938b8f28f2cc4592926829"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "bd39e5700e22c3a93192211086031289"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "d312b2267d1d4da4beb1c8e89d8a8625"
  },
  {
    "url": "categories/php/index.html",
    "revision": "f6c077ff93aef3eef25d5f6f698c3cc2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config_Detail.html",
    "revision": "42ea5f22b1ffdb87d818d06c9237c592"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config.html",
    "revision": "febdf9a89574987e19d3e46ac28cf6ed"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Container.html",
    "revision": "90636490d4926edea9810db15332f73c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Controller.html",
    "revision": "a5012b68879ffba2b6a26a46abfc7027"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_CURD.html",
    "revision": "f333ec7d0ffefa8099f7c417f3ba464d"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_Query.html",
    "revision": "999fd6176207446823af1a75b856c88e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database.html",
    "revision": "ac1b753dac0547b876eb1b6ca1a48ddb"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Env.html",
    "revision": "eafe807a06bff0eda90cff6408b8b627"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Composer.html",
    "revision": "8000aa547bdff94c46bd4e201201f0fb"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Function.html",
    "revision": "9ee5046ce8b98f241d4a947ddcbcb2d4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Library.html",
    "revision": "2b95e67de1a30cea04c420c2d2300339"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Facade.html",
    "revision": "2d64226b391f4407a56747a66adee6ee"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/index.html",
    "revision": "fc235e293db2feff365cefac8e8fd1c8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Inject.html",
    "revision": "0c3cfc34a777a0efe03370d174514e89"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Advance.html",
    "revision": "6a0273a3cece07af64c3764ea1be1a30"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/CURD.html",
    "revision": "ca3e85829c13f5dc5aae4585c03eb7cc"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/index.html",
    "revision": "26d4de8b8e851c107bff33bbc17dd8a2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Transform.html",
    "revision": "50e3dc01280c88e51c6032377df377c4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Namespace.html",
    "revision": "759601223803ec3c9b6461c1da402d2b"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference.html",
    "revision": "29869bbc9f7e1570444ecdde79cf2064"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Assistant.html",
    "revision": "5057543da50cd4ebc1cc6261551ed3c3"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Console.html",
    "revision": "f5f824339b61fd456662311b22c2b5d9"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Constant.html",
    "revision": "2290e5a6397182add270cc7c86cb604e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Debug.html",
    "revision": "872eb2ee763541b21f6298c232b616fd"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Request.html",
    "revision": "72f7f8f2946fde12c4128f8db0bd2891"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Response.html",
    "revision": "b6d013d69214131bda97e6947fc447c3"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Route.html",
    "revision": "d8b3b46f6052ba38d45814c6999878cd"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Static.html",
    "revision": "58f33e7073f7d2881c5239fa56e99050"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Template_Engine.html",
    "revision": "415832a615c5ba6cc213814ed33fb818"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator_Rules.html",
    "revision": "7fb52b8d2d670bbbf47e8d14572b9b16"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator.html",
    "revision": "d3710544d41ff8d5ffe595ad333f75a0"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/View.html",
    "revision": "0e829a8db66dc601e3b47d4c967c7f51"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "3f8477ff08be3ac2a5d7f7e09d42030e"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "abfeba13082e35ed4a3d5863ee824675"
  },
  {
    "url": "categories/python/_books/python_spider/bs4.html",
    "revision": "6f0d4f7692d9d04b3e869f1d7e634bfd"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "d7bcbb30050ef83fedfdeb33fac908c9"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "cebeda89936b6fa3a88c7a0c17df895f"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "8385aee1a6cee5f6146b4f8fbeab7b54"
  },
  {
    "url": "categories/python/_books/python_spider/pymysql.html",
    "revision": "8ccd4d22225faf9655a7c1a017ac9260"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "3b1e113229fa8105777760fccf5728c2"
  },
  {
    "url": "categories/python/_books/python_spider/re.html",
    "revision": "2da5ef259fd6cd32daf96c08b9825c08"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "6e5d3f0b94e739bbcf8437ec5f52709e"
  },
  {
    "url": "categories/python/_books/python_spider/reference.html",
    "revision": "fec738a97fdc7804ece67f17b83e3008"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "32a8ce96e8e70c6c25907aee95fee7bc"
  },
  {
    "url": "categories/python/_books/python_spider/requests.html",
    "revision": "20dc61de400dc432a7021e9e512c5faa"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "960f369d606b97d3ebbd91a5766447d6"
  },
  {
    "url": "categories/python/_books/python_spider/scarpy_basis.html",
    "revision": "faf2d03b01c5f95d6c02dae7eb0ab6db"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "4fe65af2f2cde9996c3c94def390596f"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_command.html",
    "revision": "1466c50066387d112629cf1e412a0c76"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "05bee887c890e5da8b54310aa09b8f2f"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_file.html",
    "revision": "5be30bd24543f85b4dedbad1a0398f38"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "4a43663f8e7b8b3bf1a03796d5aa0f44"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_image.html",
    "revision": "fb60c993e4e78d02cf8e7a626ed237d1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "6162fbfc305660eed2362140f89666a5"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_mysql.html",
    "revision": "b5ea5538e8a41d3cdd2135be02407d6b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "8a5b016c74a95b157a829ba0ed9e9299"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_selector.html",
    "revision": "3c1e615da849c2a1699d774c5687b819"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "e93bac19b570f241203d20531eb03bc8"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_simple.html",
    "revision": "c72bfc272c6f190c8dc079ef02dc8081"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a2284e746bd7c92576f25cea1b45c64a"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy.html",
    "revision": "d6f95e8d6c70c3a8153a031574265e86"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "120ffe5f35fff0b7da60fc74f542500e"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "05bbe674edac7659cae14a2f3b31763e"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "edae57b5a1d635475269d8b030efbc58"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "7ee15389850f23e6c91443d6e3850eb7"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "47c7d840352e1b71ee010ebd8049b7f0"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "9f5120f3cd0a7513de9b5e3074f7d64a"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "ebebde80faa643c1018bf757333b0198"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "d461a2f2500c18d9ba7ce19b144c8c88"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "6b2d26209170da04e2f1379a943bf5f4"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "db8aab562986e8872e3ca07e6dcba860"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "ad36d5d8221037133ebeee939bfac5c1"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "27bbdd42e41f73d59c961c9dfb2a68c0"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "bbf16bca8434efe8f0d9ba876a870f50"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "7e90c2a55ebb6f39875be40ba7775a16"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "ba2bec2e0154366bc868f1d093ebcd28"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "dd89f5830ae18c2d6e18c39ea3766d78"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "11e6093b805fffa696ed9945efcb8394"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "b192edfc379f7cfe5dc12d57b96896e6"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "cb4fb8cd9bd6ac8813cabbb6fbd538ff"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "7337029265d3db22571bf4bccffeea1d"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "8e6614c23676ec83b6fcc7230f2977b4"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "9e919209126e37d022bdc53139894850"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "157bf8039de1846f36ed6581f18c8bc1"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "19dfa3b9cd9161f95cdbeafda85137f0"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "c25dc6de58bb07a57db681e4b65583b9"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "c5cb1a2631457e6ab49723ecf8c32404"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "c1e20a57f25839a63c9bebc1644f80de"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "815c034afc4c91ce2170fdfdfd93fdc6"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "75dc7d54371a2ddf679c1faa5015f7b4"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "757f2cbac8ef35f1899bf1f152d42942"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "f765c4584eed1e4bf1dcf75efe755ad0"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "4bc3a4cab76077c1b5437cceb7b39b79"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "9d7dfd0f1f5f4bd6bf0662b53f384cf9"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "564bc22fa0e743050be2c2ae230eb881"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "81d18eda159b66cf239ebbf9aef07659"
  },
  {
    "url": "categories/python/index.html",
    "revision": "256d3055529de8e67ede549383e78d3f"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "009c963547ca59119c9ac8b37ff856ac"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "f035a84657091caede09860ed84d9335"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "218071a5ee241783dcbfb7aefa3e8619"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "d622acb54605a471aa8556a20f151e02"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "88142301b435a1fd8f5e5b0ee0d8eba1"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "a2362edabbe53a9d8a85a7202498a8e4"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "5c2e127d72db109c76383f04c9424bc9"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "0bfe64bbf661cd0c1a20ba0a5244407f"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "19f8f965160fa1e5da03d9ace6588722"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "b02e6638ea53572719e550db4c92e2ac"
  },
  {
    "url": "categories/system/index.html",
    "revision": "e9e3561946237bf5acd73daaad5598ef"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "a54552506c00a30acf6fd430a6a58878"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "503570ff41dad540a8f84254cb2ff278"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "c7df55136b5c554783b283b649ad9cf0"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "ff687a3ad26dab1465a2442b0e6b6713"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "c9c5084ff08c15964e82d59794e03479"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "e7dacfa011cb13bd5029d78a25f11bd9"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "d138a10cb3a7c8558033a2bb7e01e338"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "a704e7eedd5f7234003633d89d379467"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "7086ba268d36662d31f4c1152fc34241"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "303ada36d98c1f173061b05c792ca51b"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "f002dbb98f27ad3983fe9b2af04ba606"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "0da1b25381da1e96b71cce78504af14b"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "6c00689a8b289edeb92fae66b4326502"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "1e72463c1ff0b223f09f3bc1671a0bd9"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "8ffa04e8a15f7985195416b513b11ddf"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "222bf45863a6e7f2ac96832f2665d28d"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "69275bc38b53faf094ab21e5d93314e6"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "2588ae327faab880f45dfd0eedc8464f"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "bb27fdb8f933df36c15cc0f6c764612e"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "2cf9c8a44dd7f3161a8b0dd1db48f04c"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "d08c4e544bf005dde392898414f731d5"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "8c9553ea8472871140bd93090b5ccb51"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "d4f2d49f55baf4034fadb64ec6f06c97"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "11a5d11d17ecae4df8f11ca25dc6cbf0"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e8036a0cb29cf0a803c33879ac4b7253"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "7a44dd86264b0a8a8934b4aa2818b9c4"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "7fb685e04e4df9c38103ade369b48b3e"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "4ec574295999316269cce61473f5d32c"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "ed225fccb31cb7d19420a22e8d0d2675"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "e6102a25262505c9089e0c529b640c0f"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "fcb8717226ce23c8a06872500af809e8"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "b6a081c32bb116c6ca6cab57ebc3d561"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "a8f2949b089cae18a08bcffdf7f12f7a"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "c8b35188e3e14bd0744b0b45a6238763"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "5418f36b469a13ff85d5dd570adc58b2"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "8a7a6cf2eda286cb452e5b93e193948b"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "40d7cfc18bf97206b415425f44056ceb"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "2fffe658ead3f240c1035a84e8cbca9d"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "2cfb0c40830e3ba696dc8dd2598cb38e"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "83c49adc96519b078a7bfea59a09cfea"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "449695c4c14d21166cab336f4500d17d"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "6a6f666c7c6d046688dd02f04be36a67"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "9fd09dd5df243909c1d5426b601aa18b"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "b4f94262f3fb8f89480921adac2a98ba"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "0d381e5427b4978caed6b4e4ce125f2d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "dde35dd8e4bc120a37bdbc35293020be"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "a90a3c6fb357d54c52367aea8447ebe6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "182244f3104166bd342d71a09233cd35"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "a1429ea3361c2f68eb549c1fe648ff29"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "9d904a6e522c108b0cb60b9aadf94c2e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "43f3c037124fb773896c8f9d5c2b9abf"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "adbec83194cb479b1de62f5d9ec22f5e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "96dd6ecf07c29d3ee846f258b8bb42b2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "399e0726199bcdb55024769f7d3a1704"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "6d3ec55aa86781334a1159a45d2077ad"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "f93640f7773450a45d64aa7d1419586c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "8c458c8a0513b8b97531897236a4f32b"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "50203ae124a1b70610808a60694e48ae"
  },
  {
    "url": "favorite/index.html",
    "revision": "e64c09fcb2b033b73677d8d9d38844c2"
  },
  {
    "url": "index.html",
    "revision": "b6825327c869504cac7fe4d4fde00451"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "b9963c2db2f8dde5f3c14d2739db9401"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "680d5bbbfd9063d222655711905fb13b"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "df983506838b78ba2604a8fcd74602df"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "02acfdf9c8c2cb064b1221675c68f367"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "b06862d7a132b8162ef4256b1aadf875"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "afa8963175566754057518c74f875ab6"
  },
  {
    "url": "note/index.html",
    "revision": "5d5066adf6c27689b0088d1d1cf3fefa"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "c3767874946546ebef13a1069af08fbc"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "2c1a1e5fa343e45321355761a5912c29"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "6918a4361c8a92d89eed2ac61519d99c"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "70564719c6c17d18a8283f7fc5f7cd0b"
  },
  {
    "url": "share/index.html",
    "revision": "f26ae9bab8eccdcbb7c7f845eb11b601"
  },
  {
    "url": "single/about_me.html",
    "revision": "3e7833e6dfdd0aad2f3933c04efa219f"
  },
  {
    "url": "single/all_article.html",
    "revision": "c9bf364390685f2567c000fe2fa32a25"
  },
  {
    "url": "single/welcome.html",
    "revision": "12dc6b2a82d04c26643ddb2c00d5b137"
  },
  {
    "url": "test/index.html",
    "revision": "5e0311f35d6ecd996f79d68564421972"
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
