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
    "revision": "6c2ed263db708fe91823123748c9be48"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "b50a7575af41cc932489373e655d038e"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "b2cd47eb161239e4f16902abcbb68295"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "49981c585e1f6421c073b8db05cefacb"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "e0af8afc932c3211363664d37a1897fc"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "53d9c81de3555e93ccdd141b49365921"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4942cb563c86b7b04d2d941e3f301310"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "42402776bd80708563ccdde80d9c44ef"
  },
  {
    "url": "articles/index.html",
    "revision": "d984e13617208919eaab13906532a6a4"
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
    "url": "assets/js/1.6715b577.js",
    "revision": "739eeecd8496cf3c10b5ee19aa173ae1"
  },
  {
    "url": "assets/js/10.a1e0378e.js",
    "revision": "e132a6b572166d690430a15501f6e613"
  },
  {
    "url": "assets/js/11.3eed75c1.js",
    "revision": "51c1440d10c90c25d2935c270e9cb76a"
  },
  {
    "url": "assets/js/12.af47a5e5.js",
    "revision": "0e7f676694fcaa1643635d5ed76a2917"
  },
  {
    "url": "assets/js/13.d3a2362b.js",
    "revision": "08a0572dac47719d68f26a92752879a8"
  },
  {
    "url": "assets/js/14.bdf63aad.js",
    "revision": "4b154a7ddbe7f572d3708325b7a3e0a5"
  },
  {
    "url": "assets/js/15.68a5cb0e.js",
    "revision": "a65c02baf391d9bb85f2d447e867a662"
  },
  {
    "url": "assets/js/2.d82574fd.js",
    "revision": "6bdf21889ef47a3ec66eadecc3c7e07e"
  },
  {
    "url": "assets/js/5.dab535d8.js",
    "revision": "6d489316b649d62d6957c55449841b65"
  },
  {
    "url": "assets/js/6.f5b4f877.js",
    "revision": "349ae6b789419ad4c82debb6fd5a00c9"
  },
  {
    "url": "assets/js/7.f75538cd.js",
    "revision": "f099a0a1fd44c1e44c2e06210ad0ad95"
  },
  {
    "url": "assets/js/8.c4f65c39.js",
    "revision": "7a42fbacfb6506f28f00b0221c9501b7"
  },
  {
    "url": "assets/js/9.1da4ea7b.js",
    "revision": "2f5154bda2be775ec4ede24dab19671d"
  },
  {
    "url": "assets/js/vendors~docsearch.73959913.js",
    "revision": "9d44020d1e07915283c1e6ab459f9889"
  },
  {
    "url": "blog/index.html",
    "revision": "07c478354d8a29cf1a541f4351c7cf29"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "0523992e3acd01101cf27638d37a4d5d"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "4456951ea9fcaf43e752a22d05f80163"
  },
  {
    "url": "books/index.html",
    "revision": "13dc963fcdb3fe90ee9ad214140b2378"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "370dea5e0dfa34d37d6979e7138f5ed1"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "e7b77bd47f68999dcd2a1a76d08c318e"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "2179b0507bc590b60bfc90b52758e766"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "2b4a36793768f462a3aad41b5afdd8e4"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "2f26355a78012d99b3ead97f46c7f96d"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "9418391f39d074a7624d938bc670b931"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "4bda5d0085e4a6161b04605312932e24"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "bb2b2687252f6611b1368a688e2e8856"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "7e3d9a4ab13636b3252700a20da39d83"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "8dcfc1f6b33a7617de81698c41958f5d"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "b20a4ed82d79443050c65e0070939e2a"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "e560b78a6e18a0120a2e14c79cbae791"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "2c0877e4a670bd0d28e1629e9f7a5790"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "5dc7b4772c4f08e545821fdc1b8a6ec9"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "5f9682595a3ed3843f1d43d61f833c4d"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "4a29cebc1ed0932a2f443cbd578bceee"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "caf88cbb364d07dc38d3e87872dcc602"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "6e5ce6378952e84512f7be2e149e3347"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "23d618966efba563a7379214fb73a63d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "88efbdbe2427b2ccefe2a34b3de086b3"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "5e579e23da84120186c7be68a0ac4aac"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "db2bf5f860d7b3e7a3e7f04011ff1f85"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "4b2a4e6feb2811bf348f3cd588bc17d0"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "004c4b3e36ace3771c2625dc834aac92"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "d2ee7c2b0dcb5f0842cf9e94ef6d26a3"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "5cbf53b8a7b6675fc6873e64ac77a136"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "f122ebe61e7ce9ea1c8af2fbd8c4bd46"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "af968c50c02ba61709c6ff1b0cc943c3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "61ac6883f7ed393627196a7746da2f15"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "00a19022d33a21389183da72878d66e8"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "efbe397ce70df0cce905440e0a96a58a"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "336f6b913520e1587d6f7c1daced3f70"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "bca8ee7ee763429b17e9e05b3a4771b8"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "9d03eabbd8bbaa9e66cab8b772862440"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "e8aae653914cbfbce59de858b327235d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "198f474eaaaeded783fd3b985d50c16e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "8b73c02f3737e0bffbad5fd61ee72579"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "a20152af0dbaf9dce1dea9bad5047370"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "a6784a730a920c8f81a827390317904c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "a9fda77b04fb7c8d4c14c8b681138385"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "745d2ac89b91f380ba72acf9beadc3c2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "d8c5c86b9d07db8fc087cded2f55f356"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "17cccad59ef8eb922bd5bfba3a076634"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "fbaaf45c57bb461a475d9bc0b15f4a45"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "ca4e8a2ba30c4d5c4f243675ff19ecdb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "3e48db745fe479c50cf86bc8ddcd7603"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "6726709f698183e3440f4aa1403d4257"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "2ae61a44ee4bc98ab4981eaaef902a32"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "153ba485fd3b6f9205d78a5363caf5c7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "a883421efa54a90b5eeb7838dd47b556"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "7c07fbde51b7b435e86b0d34f54a6771"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "1819f78b83b56b0fe38bab0635f6170f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "25b529a58113790837b87923e824bbd5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "f6c89ae50d32953117b11ef20697993b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "957071f91ddf8b380468f07767224a04"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "2e35c4694854d6c13f401548a66f57ef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "b12cb51fb28c680ce63315d630cc463d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "bc6dd214526ee0f1438a6107fde2f353"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "75259c5b978ab38c70732fae62f796ee"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "21a534aa082ffe9de9b052c27d7f5caf"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "dec5e1db2c65e19deb9d0db6129419f8"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "3ffede9a0f60002751dd6ec482d28650"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "fc56071cb45ce553eab7ea010a493201"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "78ffd5dcb7bc8473fd48e1df5d6dc513"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "399653196624590557d2893352b53693"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "e3db35f50a88f0745af50f52b02551e0"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation.html",
    "revision": "9772ef260a5e150c07d621abb5a9834f"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "bf2f72bac55c96420b86ee8151ce27be"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "3c86cab2ecf5a44d1e71f7b0816aaaf3"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "0b092fd157309f63f4f1d651d50a49e5"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "5ee2ff196132a3c6deccfc86d51300b9"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/color.html",
    "revision": "c4251c2ea7221911ceedfa9901f97745"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/create.html",
    "revision": "ae2a358bdfd8e093b6f81a93395c72f1"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "10748a82cdc0b042f6b2cc13e65512a2"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "3c117a0fc7226daf01488589f6b574ae"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "2b16daf4ea3764fee73694ec803bc40b"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "0fb6cf8a148684ebe7ed7f9bbe363ee4"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/save.html",
    "revision": "99fc389c115cfb1ab902b457bdcb7d49"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "2be215029dca8cdbd039627b197b701a"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "63c5ad4eaf8452c19523f129e8a0e95a"
  },
  {
    "url": "categories/front-end/_books/canvas/Clip.html",
    "revision": "4b090dbdd7e7534129f0922bb79c87dc"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate.html",
    "revision": "df928a037c14c166926717f2345dea29"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "0002ef54adca3427fcda41cd819e7abd"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "7e512b3bfd8cf691154535e55d9d6188"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "c49b662ecef6cc305fcce6c0457bdc06"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "58cdd89b2e3521b083a4871825796f68"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "a84b365f3183fc276377c20c194a1e1d"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawArc.html",
    "revision": "9157d572c13b89222a231aa57443f438"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGradient.html",
    "revision": "422fd161addc05e799a1f0e0640a91a9"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGraphics.html",
    "revision": "0ba1db953f3e4c79e8e2d580c3a5bd17"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawImage.html",
    "revision": "5ea68cd4cfb7ba09688389b4c787ee3a"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawPolygon.html",
    "revision": "d3b3f597f4d69cc3da9d812d5741d946"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawStyle.html",
    "revision": "b79647bf4dfc59313530e1ee7099b9d9"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawText.html",
    "revision": "0506d780b3b2e5d4911bc8eb0c445cd8"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "b79a04d5f102e0d83d8235191b503a6f"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "c7df1da3d5b075c949969aeebf4ecf87"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "33a15f9903fca558be0a703a1d3f7d64"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "5cc64d9f1a7f1539a7dfbd66367013bf"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "8082abcd1f38e9d88c6a9503c5b467f8"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "9beafa9bfd51159151f510ff0f4bf066"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "151a1d0ea8129c34eca8dff4bd8be3f0"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "7cf4cb88a9c67b020da89bd6c70002b7"
  },
  {
    "url": "categories/front-end/_books/canvas/ImageProcess.html",
    "revision": "0c00788482450aaa378b3c1ac794f629"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "0caae99ddc05f262ae850ae1fd82e8ad"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction.html",
    "revision": "c336f78eeb276c3ddac68bc52f1d35c0"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/ball.html",
    "revision": "2a492944fbd2feed0b7f4a3c299f749a"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/card.html",
    "revision": "4450cb4c6d05fdef3e19a9455b113927"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "017f1fa9cebcd753d3768bc66e3e72b0"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "17aee799d7ba4c5ee2362b8f44a5ba7d"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "2de123212c387b148adbf86c23a522d9"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "0b1e387f61687d2c54853ed5a3707995"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "8dac18e9fc43ef7cb19392012661be5d"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/spotlight.html",
    "revision": "796ee3f6db889154c2344243085c5d8f"
  },
  {
    "url": "categories/front-end/_books/canvas/Matrix.html",
    "revision": "8cc1bf906836af0dd0ae9a86ada703de"
  },
  {
    "url": "categories/front-end/_books/canvas/Point.html",
    "revision": "2e0252e0487db12f607dcf70c148fcc0"
  },
  {
    "url": "categories/front-end/_books/canvas/Reference.html",
    "revision": "916ef3ae9b4c770c6e91c62c094fbb8b"
  },
  {
    "url": "categories/front-end/_books/canvas/Save_Restore.html",
    "revision": "67dbaa38bc4c6604d87327907f4f48df"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/coordinate_system.html",
    "revision": "57912b3cac31259f89ded5f7f02e6d26"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "b7d640916bdad3b3be8128cda37f4533"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform1.html",
    "revision": "743360a366aa63e5a2c917b8c3a4f218"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform2.html",
    "revision": "d46d752058c520e5db426393b90785d0"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "b5aa01c13dcf148a99c736c16352216e"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "59796e9b712528f848531348f75b2b84"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "921150f915e51aac6868b8607b850d10"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "9d26f5b381a7908c4239292c380ce048"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "a49fe73b07c1266267e8421ddbf368b8"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "577b9ab08df6dd3728ee5ccf1772f5e8"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "a3e969562a7f5e718ee489368c4dc621"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "a8ded3d545f46816cd1446b59ff3244d"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "815b858787bdae20e0d9cf5065f4512c"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "f3a606138af93e82de4ae82be8b5d6ea"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "4c41c03e04282855aab7cd28b9a25b61"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "e857f13fd0606420ea387545bf8f19c4"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "8101c90453287e54f75aa333f04635e7"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "a4d965facd004cad298f7ba4d48a06b4"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "561a8c66a39af12504f676d231e52be2"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "425a4ec9093684d48c2a41d8a7ca47ff"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "39de7663875d6ea58927b45a4f92005e"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "794496dcd6d868b7ebcf44aa1ca9fffd"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "0575edcc4bed74231b90ea5a92d05757"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "91889d55420b5a64f0185293cc8bf384"
  },
  {
    "url": "categories/front-end/_pages/Gulp.html",
    "revision": "7a54297bdac8bd0dd74f11efb71e3a2f"
  },
  {
    "url": "categories/front-end/_pages/Pug.html",
    "revision": "b594471d517419ff29841c78ce20197e"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "22c60f51d7a134414068fc664d19cbb8"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "bcff1f08bf306f3feebf5d87d83d4813"
  },
  {
    "url": "categories/front-end/canvas/_page/Scratch_Card.html",
    "revision": "d1cd1b20ce9dbe5edb284e82d8f78f8b"
  },
  {
    "url": "categories/front-end/canvas/index.html",
    "revision": "011da7f30218d157140dbdf4192521f2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "ae17e9e752dbedea33002542d3d9d647"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "0143bcd4b082383e2e119672914e5682"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "b98d6703fa4aa32682ed04cd4fd10eab"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "3f5863401eb00ad268ef645d9085385c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "11f4a2a1afb82b0da6022fbbfbbb88a5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "0775e7307a74dfed9c0651d82ec9e07c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "8c6711f97ae76f72b2dea96653598ef6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "af076a7c381d22eb3fe15e65abcba49c"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "3fcee67e042d0a5eb54b401eca549791"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "94d889bd833049bd6f7be85b978e8f82"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "f9f7c35b28add0fd1ec57757e512631e"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "540e4db07e973aa3b3684e584dbc97ec"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "98c9827d845de5e262a0037702edd6ec"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "46c9d2ce3f8380bf754dcb7f48a38ca5"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "ac8fded7e30bdaf886fc77790ab742a1"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "62aca526fda4b772dc4272bd2a4f354c"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3af322263c1ef218663a016c081d4993"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "d9cbbd4411de32b661a33b100c2ab01c"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "20b9424d8db1640b1065db4667884a4c"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "2b672b2b1d30dd7021517be31fc43954"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "cb701729154bdc6bbf590607afd65217"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "42dffad49784dd0172564b9f5050f331"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "77a0c37b7ef697c4cb45fd125c398f7a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "9e347682f1721d24aa940ee16419b09d"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "5f5eceee142a357d7ec1189c263e7b26"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "271775c913310c95d1d819e95388bf0b"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a3ba44d63d483d555d43948d3cfa9aea"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "915b8b5952261bb1d5c20f0617642fd8"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "86b232a58030ea9106e0cb6a12d7a3cc"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "257fe4d7de6d8d5255d1524694cf66b7"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "d622f6943597c2799e3194ab9f0c1670"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "64d285bbd1c2e4a65df6efe85a97fa2c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "4d008c7cfaaaf412b6587ca79650431b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "dfe1574d634a9f310e0cfdf3e11af372"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "4db92f67ccceb6292f99f95d50a1c9e2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "8239ee4812034fd089e8035c7c5f43ea"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "98bbbd16c845ac8d05f3dfe1f42bec20"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "2c13ddf78c0ef361905cbf0321200c3c"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "8116c40e692b3b91c44559c4ae38c00f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "83a6b4b486ea521b9b8632eeda96be3a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "fe6df937ea5d21f69a1f15903fdf4d0a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "57bdc59ba9f6b3d4be3e902a70dcd300"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "7c3713944d98eb096af39af023b63222"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "4651a6a74d4a84766bccc8e49badb3f8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "abcd3c0108865cd21feec3436e5cf145"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "147d40c863667036d441007d1efb2888"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "31007b45cbb93d573f10cc9bc8cb0e8d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "69750184bfe6135b2d3ab6ffa599f32d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "933057ad1ae6a02ee88cd31de974cb8e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "98058efb0f933f20a39ea6ad52815617"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "1fa403ef777acd609a8a644468863643"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "67231caff6f12fc0142733c5243f75a7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "4259d5f08a9c7a6cbadc199ee9e59c80"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "cee627f4b8e346ca26ebe79b55ff8b92"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "1156072e71fe3d67bb7d16f731685cf6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "68675639acd1b0d5d6149ca174bb5d9e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "1e93efa435e6cd0fa70aa59146a8a318"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "daac28d6961e0ec2c7fb5ad57c413c2d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "a096471c4a98693dc5e256bf81393294"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "9d4148546d65e0ce14cdf8fa2dd5ebef"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "dae2294370010ce0e63c55e484eda70a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "37cf7a982d0572724762b4e2c1f227f1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "4699d66b8edf98455668842ae6e9fd14"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "cc5e03cd3db1d5ca41f8c481bcdc05bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "9e3cb7a1126f5074603ae71af52af69a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "1dc5db333ca88829a0a08864a7e1db8e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "87aaa772b37de8ad9de34d75b5eebb9b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "1dc553049acf5f5dda363e0637e99ace"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "29c97684568b0a8a69b45cf72f3c63e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "ce797147953b35c080f26de0a324a887"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "d60f561fc9f34c2db0795c81fa650e6f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "a83bc97b9d6dc830e4b6d79418c31e65"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "65c80868d4c1bdd21223007ccb837d5b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "121f07c8f12e5c0e16b7da4efe2e0f92"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "0c12ecb878c7096df32e15b7e8cf4093"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "372d7df49bfac309fd03241ae37c56c0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "017c238fdf393253720f3b240d6aef8b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "efd27227c2754740fce5771d77dcca45"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "28ab4b91a0e8f451c598deb70a8661f9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "fbc841d9f05a74188e4ef09904bf6487"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "c8e931ffb1f693ddaaae8023299c196a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "bd91d0bdf00a5988b1b73cb93aa6e61a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "2d0eb49a647a936c6f7e93b174a8a266"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "f5f71627a39e933d254cc8d19740b92d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "4febff48d6ee80dc5593ed790c9a7cea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "fb4aef2bb926eb0fe6ea11098843d776"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "0add564f6f42fd3e57ead77fa1d599f0"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "b4e2e5a8a3f064f5a501733611b215c4"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "f892d8e6bc6cfe81cec707ceb9fdb9c9"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "42cb68cdc6a5744facdc49999abb1c64"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "7d5981845956a960b3c53f30b7bafe7c"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "ded6ceadb38af8a8440c23c6ece28435"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "2b5b5a205f1f4dbc4a127eaf7af9b345"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "352b55f2128527a611553c6c36ce7488"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "c1f1a3191398c2e865ca80109db4505d"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "8091a7bcb4643e27465c4009f15260f4"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "d17840c9a4d1b94e081817f4080c3246"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "f84fe12bdff0b5e5aa24157bf84f1a9d"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "b85a01523c8c740d82967054ec26c51a"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "4cafddf0d97904a9d090047bcc6ad3b3"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "21ebc167697c247abc7f4a1b830ddbf8"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "9da5c77e6725e8fd883d8bf99ddeac8d"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "1cf30c46f8a54f308f21d04144af4cea"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "14b25b00bf077c41fdfabd8459c581ec"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "cff2af062a119d7e73763e3b25972bdd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "495830f0fd2138839238ca4da5928169"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "e6f79f2362eda2c0a9862a317e9fb393"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "29efd3ac2c24a06a636df674e0119907"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "9744370383ab4a650481f2c682847ad5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "2d0923bb5f97a9ceda1789844f1102da"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "26054fdf8e13d71d59a05fd0a0914acc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "276ebb8460422b6fef8fdc36ea1de4ad"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "d3bd6e65dca926ce65bdd1bf1b8b5209"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "577359cc36fc5b4b4ea66bb6baab6d0a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "62fb71215560f26446af06f87c51e90f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "b7d47f141619a5831e7d802fcc25251e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "ea9170c6d7b6c59b198002001440aba7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "595601f7ffaca37b1d31a339dcdbbc02"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "381f171395536c89061839ef020c3859"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "0ead909f3629aa36c0f1b042f07e511d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "e9839603e7f662fa91d2bf5b61bf6247"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "2eef70b76e9bf2414a0c4d40b904f78b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "7fadc5a06901fbc95c799b7024a4640b"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "2dbc3f01532aa7d298cb323f96a7698d"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "fdecad013116092b50255aac3640cb17"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "6b3ac2281edaa74de27a733c2e00cfe8"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "c571f02158686efe813b803f43dba14f"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "abe789093e7bff4059206606c2d417c5"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "831cf185812069aa6a4c31af3c0a70ff"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "5887326c47c09bcc59e4fff2428093d8"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "ab2ca2e372807151c39fb7301c4a4fb1"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "f5ff27b9622cd8b90133043fec499a6c"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "2d9bc6118bec4b8c4d605cb6f9a3ade0"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "f20e9f454c459bb7d9b41187ff30fd4a"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "e458c7bf80f1d538bf3220bea2346f39"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "0f985e2e178358aa8081894ee57147f8"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "6a79a5f10bb5d139fb0a74d5a669e25b"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "e132cc79da14c13d70ddfec0d3b1ca30"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "e1c683bba29b5bff52782638a24a4a77"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "bbe7e2d848acb9de2060fdec0a24833a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "d65b8ce5542cf2fc2f7e829c9a5b297d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "43b261e00fa847cc661e3f1324c4a57a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "e429f9925313cc6b3637f2641ca86264"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "8ab4888d67c14ffcb3cfbdcec103bdd4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "e42341cfd808920afa7b57b5a91afb92"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "552179d82ae6df43a48b300398d52fb2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "b3a5a89378d7d7d6c02192e93c25bdfc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "f1e1ae97e7118ea29082a7a75f6d587b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "fa62f496f17a24c8d9a59f1ccf3e36fc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "2d9888d650ac830a4699fe0b26f92779"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "2e0a256290e0424167744822178b2d25"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "4c56108ea671fbb7488cb21bf8d38f71"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "7baa6bcb9bb1f6a9d3cd18fad436c154"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "dfbde20938ec73cb235a64ebad1a6579"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "616bc324a3699337c8ad80b01bda4a8c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "7865330796ad6e61b33e112e8e5714b0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "f0533cd8f77ad69cc742e5589670e38a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "52019d5c1383332d39b778c8870dbf4d"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "49a48364bd0499def7cff5315e0ed36f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "8489360dc30da20a0c218abe0bb5dc99"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "f62530d5ed01fdbe49f4011f696bb461"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "cc5068cf6f1d2d88d3959ea74e19af53"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "b37978901c6c82a86f1686e75f160c59"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "a235445577b32743d3b0dee394c81463"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "1929317f07188c158ca96071145efc68"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "be1a80f40d2df2b8291bef96e47fe3b9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "abb9ea0ba6ac2f07b1b5dc9d5b1a149e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "cac2c69db41bdf8cf07ee3b43c2cba04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "1e36631f7d3a1963683d1a294eafdf05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "7633456b442135f4818c643e66217043"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "c3377a1bece44e1e27df570d1a8160fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "fef9e765798018d3e800c27a7c6817a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "b8a5ab96dcc7ab96ef37838dfbedc97d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "2da80273f28154af2b643908466d47c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "cd6cac191d6c658a5f1286ddd9b6db69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "97aae79b3f3dbf9c2e1b306d9e9decb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "c55b213f08e6c80fe7d16b3f52abb1ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "ab62bd6aabd71141c8e825845e250ae6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "272d9b45d3c7a983241e796d0f6ff9bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "cb06bec74eb56970482a06cf0b08fef8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "031f6df244703711e348c39627e8eb54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "33a6e91e34c6ec0109bfa2cd96fcde20"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "eea5ae45b041b6d681b713c3a269f220"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "6270100e75270b7984d89de21cc18b61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "5c574592633ced27f3d2078761246455"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "75b507a8872cf0ff195e66d45eb0a1b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "46c73eba4d22bdc40193db95e8a64d00"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "bc3b0fc4e4fb9afd9217e7aefb6789e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "9e9d5e6860b475caa639ea70b1d3c430"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "79f2f6934071a9bab8f0bf7ae6e46e96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "3776ee9923fe0298652734bb4d270ce1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "bfce65bf3f888ffca14451e9344d65c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "bf23fa36984750c6df46b3fec92d81b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "4e1533062928e1be14925305ff261883"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "ad584a45b596a8b06e52b7e3586cd785"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "5d5c8e2f1d5e7cda39e3d135e2d0a258"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "ceb4c74c4beac76e3161c59638db3e3f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "a1e97d3d4d50ade92fcdd360eaba475a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "dd7cd22853ed82618c735ef3040217ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "7fa4fcc2620b78fc468bdc1f086793bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "72a905a5f79cbf18bf84d075c27ca07c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "d2adea37dcdb8754b4cab4f7a48f7277"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "03c5b4fc8aa39e1bcf926f9a1ef6d8ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "f3b791b02c949cf0e4a2951c3c13481d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "4366cb25ec4dc270e270ed7a18ec6067"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "6dd45b7e04e39f0369d8a6d350ce811f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "d4eb1e1ec5b8b1aec0acab4c11509a3f"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "2a2652720e377f70278145fc68321b75"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "1ef4a7f1d9fd5989814e3c2d8980e989"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "5bfae5e6167f63fa8423d0dc814bd332"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "0a38a9a678b0f49babb9ffd0e7ebe2c6"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "52a86821e5b74acb8537b376287117df"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "c7e91cba8b34cd5bacc9eeba1ae57c73"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "1881c89f85edb1b592e82c273bdbe000"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "9b90980fbbf5c3dc884d982c6c0b37e7"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "6200132e881d828b8030f7a073ea1204"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "f091dcd2c8ae852e54cbb107152aa93d"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "6f2791d64e2985eb7d9d5706e2076430"
  },
  {
    "url": "categories/index.html",
    "revision": "06dcf59ec619e94f0536ce63c618891f"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "7d711fe36c4ce6c2d03ea87f72f9deab"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "981248ababbe109d24de5b33a4b127e9"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "ecf85b1680cb6d2f901f6a25677efc33"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "8092710265fc39e082d4161b00f214ba"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "df0cc74f3b2e956ee330c69bdd3cee60"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "618d684ec94079eaabc696a9e9dd2e3d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "53ff455742fa862c30a7cfcf3d0d96af"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "3a77b9f5e431e9b386edf783ae997a44"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "90deb77092e5e26c4bcf03b158f759df"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "9cb944fc6716c4ace3c5cb795157f7d2"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "afdb099ce3ba963b62b2a9b297871167"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "3446f1ff6993ed442603d1b9956019ba"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "b7d8f885a98f9e8bb3959dbc308bc594"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "a190dbb92100196a16fbb23a8ac21f85"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "f73283d8090ba4e14ebbb833a0b3259e"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "7169904d19ab8cdd11458b16747d1551"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "182a7b2d7ef126c02d6846c659fcec62"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "35dd1cf09939f5f8d25342b5d8022f41"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "9938fd45c875e29d350b8b2bb4711a0b"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "003fbdcb77c9ba0c2527517e866ab138"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "d4d26bd1b0084345cb736827b7e0c4e0"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "8b805adb5470bb4c63f94c3989a57801"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "033ce0cb4e82a733d2e77402d880a218"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "b2fd29b1ceea073b3374cc29cbe5a4a5"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "8c3ad7c0d5e15d5a509c43b6511e4465"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "7d1078d5e925625f41d11b931f23a7c8"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "d18d5593fe2fce3bd460d7224aa66e7d"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "22411354e19607c0493e9342a20b1857"
  },
  {
    "url": "categories/nodejs/_books/node/Basic.html",
    "revision": "81d12ea1a9443e0594461319439f1f71"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "e792ecdcb75a20e6956ebee581572433"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "97da048ddf5c5d0f5a96d3a36b5cadb9"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "17392ecf15f89f50a620e4b9e7ebbbe2"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "82b46e467733a29acb0c235ff88394a3"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "811e89e9e7a64784da1371e3e47a4418"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "827636460bf6f27a33ba635177b96db3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "3aa55270e7810bcf2f65906ed95abc7f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "953ccb45a22f113673467c06ca9b05cb"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "7de6d826bb1ec03339fa099158b58dcc"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "d8254683b64978cc58f879d87550a2a1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "ef68ace8caea88c8af051bebd056e937"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c1f588aec5bd38b4edd9043d1964178d"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "4e2470095a160bb1a1bab9ed91046024"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "f20c0b8fc7378d7b62f5bea8b7c67f48"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "6eb7c787b49bb63dbbbfca1eb2eced16"
  },
  {
    "url": "categories/nodejs/_books/node/Rekit.html",
    "revision": "c810cc6f8bdb58fcd33c47e28eee120c"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "de0b28538c768f3312e459c62bc7881b"
  },
  {
    "url": "categories/nodejs/_books/node/Solution.html",
    "revision": "24688a4827492be98acfe16949814d4a"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "5889b0a4f93a19befcdbeb8e1c0753c8"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "f49515509eb0e8ff80666f9b72e29f28"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "dc37e04386b2df223d842b4a9f83fca6"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "1ed8c9e47a9fe70e0ea340e2c5d26bee"
  },
  {
    "url": "categories/nodejs/_pages/Koa.html",
    "revision": "e3a7ce0448d1644dc22858fdf6337e21"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "e6a524936ba8d91dfe0147db0610d36d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "64412512d1d12a615ca4d74ed363816e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "9acd34ebb6426103011c6ca43140e93d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "3743d7ffc65fe8108a0f2f71a8f2c0e7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "879b3483c99cabf6a7fe75a92e0e9bf4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "2686c13e4358ed74accab2cc92422c14"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "54a41657d6c67d2071e93784f85f934d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "7a39eb05779a82c0981568d5344f4e4e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "7224378bff88e0d0dfdf91a0172d681b"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "fe59adc5caabd9a9f2c1e6cd7ab9c0b2"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "e9e3bb690d6688e48b02be4591d316b6"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "3955af6460048b81a3380da8a48f3eb2"
  },
  {
    "url": "categories/os/index.html",
    "revision": "84ff990de96ae90471f66332b6b49c2a"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "1fc5ae539bf7febcf2797516793eeb19"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "20e01f0898015134474096f3edfd6ec7"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "5fc50cb9f8758c95fd5a879f679921c9"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "34bd85367b0d590bbb5ca3ecf79ba953"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "8c58b029c43d0501526d2b30bbb124e4"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "28be9e6d65f60550157acb84efdedc7e"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "e30f0235367517c69a2e891787b12f20"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "ec38378aa7b41cba0b66cbd72c8ca987"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "bce21f31077d8244a608ecfa62e09ca9"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "b3e5c042662c8eda270fe4f54448ca8b"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "1e4746e1fbc9eb3b2fe122cafd93cd0b"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "2176afd7703e67d25ac9d3520bcb22f7"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "86f7dc3c92163e1691d818a49c17b1bb"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "edfcd5d4e5a1bbb02e5b16060045fe78"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "b7be027330a6a4a445566d5219b956cb"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "3c5705b3c6ec2a652410c76c4524e6ae"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "a2a39d45efc5308f63935d27fa7fb90f"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "bfb66ccbcf96bc3c9bf84f4d820e632a"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "c36e2d554d3b23f972e0a361f717e2bf"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "6b9d5b49acca023e0a92e3464fa13af6"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "9b3b796104c0a66109832a49cb6eba9d"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "d77086783bddfd5f2811ec025a4fc050"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "4a672f79239669c1a348153ccfdbdbeb"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "50df28f0ce3c54ed14d58f3091ddd456"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "c0e1a6ff31a5e9b0aa48f4ca507b28e0"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "f50a100678c2ff5494f127d6bec90a43"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "89a25c3d00ab55576f3b1440efdcbb01"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "84b9b3720be7d510cc0fc758c8799d19"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "115ff62fcb5cad2e771a8e84badb472a"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "68868c7cbb57ff6e8ac2be49062090df"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "83b9e0d087ccfdf31c985e8b63ca9355"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "f423725c4b144dd538255e5fce32c85a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "770a931f10238ea969e4adbb0ff851ff"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "00cb60c3ded279bee6be4da66c796fd6"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "b2e7ec99114efb2ef26f8755b6d94bbd"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f4e389985c377efef502ced01632e815"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "e6e8f53012a7e9ef30c322c68e7b3157"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "a37b707b5f34ce211fea64ee3c70886c"
  },
  {
    "url": "categories/php/_pages/基础/Basis_Types_and_Operatior_and_Control_Flow.html",
    "revision": "2386ba7e653c8daec4c04df978be34a0"
  },
  {
    "url": "categories/php/_pages/基础/Function_and_Namespace_and_Include.html",
    "revision": "290860605692f19452bde00e7bf4acc4"
  },
  {
    "url": "categories/php/_pages/基础/Intro_and_Install_and_Usage.html",
    "revision": "02a4ae55907c0eb0f92fb65fe2ab95d3"
  },
  {
    "url": "categories/php/_pages/基础/Magic_Constant_and_Super_Globals.html",
    "revision": "bde80d6ae5c9ea83668e25ca240ee45b"
  },
  {
    "url": "categories/php/_pages/基础/Object_Oriented.html",
    "revision": "3ba9dfa32f58c5ec2d5b0e1d9b5fce12"
  },
  {
    "url": "categories/php/_pages/基础/数据类型/Array.html",
    "revision": "df27357bedd1dd7c3343584c0f759d8c"
  },
  {
    "url": "categories/php/_pages/基础/数据类型/String.html",
    "revision": "5e8460c7af58a8eb6f6573af22ec8f31"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "50cd0233327b36364f5d5986edc0b25a"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "332e21d53ba3d65db45d877bb06a916e"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "bfbd9f16a396d82f83be14c0b39678e1"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "2d0d892d1fcef523e4516cc80ee0005c"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "1131b2ed178d0d469d635ca20a634098"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "a01bff91194acbe4d33d8f75f9b2e879"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "ed839a8f4045f0f067d7bc4ffd33a98d"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "8560fe1aa06e093924bb77238eba5482"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "faa31462d7b1e5928f67bc90b306b9e3"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "b4ff31697d62461401f5b0f35b4b994d"
  },
  {
    "url": "categories/php/index.html",
    "revision": "b84a67d653cf6bf284442dce66e8ea7f"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config_Detail.html",
    "revision": "a2aa51fb302fdd316667ee2423b94b12"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config.html",
    "revision": "34508741b6b003991696c39ab24f519f"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Container.html",
    "revision": "fee473e340cd3f52088773c3bec26001"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Controller.html",
    "revision": "44c6f741191b7368b55e85e7e873672f"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_CURD.html",
    "revision": "fc8883914134ec54b1716de9a942d621"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_Query.html",
    "revision": "b3cbe6eb5c8d05ff790a5153868079be"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database.html",
    "revision": "4f1e3ae529623ab129888266922448ac"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Env.html",
    "revision": "6ce859da3249dd784d2d3ef9d229f392"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Composer.html",
    "revision": "75c5c18c5467e853b86e5d471dde2ed8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Function.html",
    "revision": "e575972273a624169b8ad0fb9e0bbc12"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Library.html",
    "revision": "999e92666a9b3805ffa3e9bf394d56e5"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Facade.html",
    "revision": "08c77af65b8fc4c7bb0ffb5a9fdefcdc"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/index.html",
    "revision": "5a33037ce60bde9d3c3ebaafc7e2a9c3"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Inject.html",
    "revision": "f3ad1a69cba2339fc9a8a41188b840c2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Advance.html",
    "revision": "48f01e4a22647efda8f6ae9c28885a13"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/CURD.html",
    "revision": "41419d4e197a8cbe654600ab595b7209"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/index.html",
    "revision": "9b25923019b62327cb9b77e464987661"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Transform.html",
    "revision": "fa34085c82f51bfcda8f64d414f4e07c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Namespace.html",
    "revision": "afedb3f8501e5bce6e13590aade44627"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference.html",
    "revision": "2353959f748f90c2e31a5b9c0b161c83"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Assistant.html",
    "revision": "be1003cec266580413ea7260fbe6c23b"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Console.html",
    "revision": "19153ddaad9ef6218a28e9e8fa92b4be"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Constant.html",
    "revision": "d850a9a48c1f3604e8a11205f8c94467"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Debug.html",
    "revision": "8ac22e4910ff089d7859c7a070298f4d"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Request.html",
    "revision": "45c29fa39720131db60ea86cf3734f2a"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Response.html",
    "revision": "7db0b68795a490f7a1a305e980d0fde8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Route.html",
    "revision": "75342df7327c997d6cc07b74dc1aa6eb"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Static.html",
    "revision": "7e94ae137e0505026dd5fb9e31d155d5"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Template_Engine.html",
    "revision": "f449c40b852c5ff0079ba9039e60b966"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator_Rules.html",
    "revision": "6fcfaf10f88e98674e5277120addd6c6"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator.html",
    "revision": "4e2d85f13d2ff6cce71dfcaa3818fa4e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/View.html",
    "revision": "61d19c6b0b2c1d0a0f11004ddfafbd6a"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "2983bed9d2297422f8ef40ec87cd4719"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "34ac9dc826c57aaea1415f3bf0b0fa35"
  },
  {
    "url": "categories/python/_books/python_spider/bs4.html",
    "revision": "86a11f1199ff2028fbefaf7ebcfae5ee"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "a667efd462488ec9d53a9ed651f1bf98"
  },
  {
    "url": "categories/python/_books/python_spider/pymysql.html",
    "revision": "3a6c926015d10c339fa3d33a04ea8e50"
  },
  {
    "url": "categories/python/_books/python_spider/re.html",
    "revision": "86dd8c160e4ceee3e5dd6a41f111c045"
  },
  {
    "url": "categories/python/_books/python_spider/reference.html",
    "revision": "293201cbf0b7063c9cc613842b67f550"
  },
  {
    "url": "categories/python/_books/python_spider/requests.html",
    "revision": "03b87cd556db7f924384be8cfa202511"
  },
  {
    "url": "categories/python/_books/python_spider/scarpy_basis.html",
    "revision": "48f0ab264d4a5e154ec1ec52bbca933d"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_command.html",
    "revision": "20661d78882bfaf3d2aab855cd157749"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_file.html",
    "revision": "21e377b2fe97975fb37fb3cb4a35ca11"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_image.html",
    "revision": "f8732595bdcbf7f21ec70def03311b62"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_mysql.html",
    "revision": "cd47e284f4b17a8c61dc384172f0bdf0"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_selector.html",
    "revision": "ce9c4650ef3cb3887aeaabb9b5e40eaa"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_simple.html",
    "revision": "28b63be6462921f78e94a806a228767a"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy.html",
    "revision": "732fede4926def8cd8a378bb0bddf472"
  },
  {
    "url": "categories/python/_pages/基础/Data_Types_and_Structures_and_Operation.html",
    "revision": "dd4179efdef07e1af5eca08eba065c90"
  },
  {
    "url": "categories/python/_pages/基础/Function_Basis_and_Closure_and_Lambda.html",
    "revision": "09034a59aacf1d2a2f1b931ceb5320dc"
  },
  {
    "url": "categories/python/_pages/基础/Function_Build_In.html",
    "revision": "a56c10ff4ab3b8e7ed6404033f8e9070"
  },
  {
    "url": "categories/python/_pages/基础/Intro_and_Install_and_Usage.html",
    "revision": "8f8a6a17e9383963306c356f568955a1"
  },
  {
    "url": "categories/python/_pages/基础/Object_Oriented.html",
    "revision": "5bf362db76ab268fc0249697521eb818"
  },
  {
    "url": "categories/python/_pages/基础/Variable_and_Control_Flow.html",
    "revision": "b53db95ddd6ee05aabb66a4e2bad8f8e"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "104a96f426ffa49e3a98e2590ebc7a06"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "0aa08d04f2a120b8db3ef6796f82f294"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "44f05c2db3a0c785ac9fad34c5d0edd9"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "59a5fdb7e6d1d8d2b242dc1bb912cf05"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "840b08607283854fa6515a4e15940309"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "defb484c7c146191af801dde7bf3020b"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "02dbbcdc66dc5a3c47411bba784a846f"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "1ad5b6507825a4a54e2e6b6842ef0706"
  },
  {
    "url": "categories/python/_pages/进阶/Function_High_Level_and_Decorator_and_Partial.html",
    "revision": "cf61aa769dbd8d5341bd768935aff7bd"
  },
  {
    "url": "categories/python/_pages/进阶/Generator_Expressions_and_Slice_and_Iterators.html",
    "revision": "41e85e09762fe9af58ab5623f738eecf"
  },
  {
    "url": "categories/python/index.html",
    "revision": "689f36b8251b9a276a8eb28df31528c7"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "55d446091dac5c0c20fbe5b936d3abb8"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "9d46c8a274f53334c120ee1e9104fd22"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "ff2e7e754f9ab7e58800cc64aff73d56"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "3896a119c0f29813c5b8e810483e215d"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "1c52c229e67f64a7f638e4d92df78cc1"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "47a6c7918317f4c5a6b73405191538b6"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "99280cb21f0161d8b0ac4cda68afbd39"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "b506227e9613bbd5035b3f848324a921"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "f280ee98a321baafefce8723b65dba69"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "0266b8f89beed6d40fef43116f689478"
  },
  {
    "url": "categories/system/index.html",
    "revision": "87e048fdb74c13fdd6f6e479de33d5bf"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "4260db12d20383f150e84ae1f137d1c0"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "0881626c04e153d0278f04c821c54e09"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "d17c494df96e49735486d89f0a51d57a"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "d00b33e4a3e95ff3680cc63d3f3a9a74"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "47352bd48d3275161e28fd1fc8ec1a84"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "4ca3e25782c5740c2ef3bdb75f29a2fd"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "ea150289736235742403cab4cc297694"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "408d1e61e7082703090b23e05271b0aa"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "fc69af1ebc9c2027b0c2b938f8f77086"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "bdf00635be3ca1c16e8a0ccc3a83887f"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "7fd1d86362b096b1b0d22156c17e9b45"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "b6147d9b9a700a82ef5ee411b01bbdc8"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "4ad1bf6b51c75a3aad3460f8b124c751"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ee132fcbc9a1e663c2c8228289841767"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "9a61ad345b150befbf8e9ad04159f749"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "0a69a4d175621d6f7f4b5334024e1959"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3ef3deccbc9a6bc6d49947052e5927c4"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "f692fca0debb0b7741c79372cb183a21"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "2eee97e16cf7551bdb6239f6192337a9"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "d19f9daeccc35b2f878159b68aeb445f"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "b7c30769575a096f2ba24715e17c4b2b"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "7c88251da6f80d3bad85916a16f6b791"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "096b09eeaf2861a046108f15bd1e290c"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "a1ff440dc9ce790e46b44c59a7665ade"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "3356b281c9456c1db4237ea29f9a2bf1"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "9a5a6947e9562258e52defafd4181a14"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "b6ca7e70c598a9e0a443fd5f83978eb8"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "f41d4165c35a1d85a71791239ffce4d2"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "53253600baf40051fa53f49227b256b2"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "5cbcc53afe60b2c3ef9113e589d1732d"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "37a2f73de489c832f7c25d430b8d308a"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "6649270a2427d81899003469805bd826"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "84f071789acf853962716ec82c7f3442"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "0c3d4e7182f3e6656288256919409bae"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "f1a87f1be2fb0d022815359e0b70fd24"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "c883487b39a5777a238ed852a5fdee99"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "e235c9de0c264f31697893e9befc3638"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "5701100a9b3b916573c659e771804816"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "6c3ca532d5a35bdfd17ce38d4c0599b0"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "27cfe49e213735eba2e8798922bef6c2"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6d08a7e0404cf112a214573e98cade9d"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "97c027d08e2665e89a0d6568c1efa2ea"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "05d24b7028b3f037051188ad210f4417"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "cf67d5ad87319e4fed374653c6c5715d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "0f79883726f4c563ad84584eee781f72"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "1fec85d8b4746ce730856ee053e06739"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "fe43341a35f57605e2b65369aa3af0ec"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "a8c7f5d7efce50d4589efb737d376813"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "850d361bab6f01e6fe5441d9f24c5e7f"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "9236b1961105fb23179fb1c35f6b685f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "405f1332b614801efc5352229e0602e4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "b46c700d333c2c7ff83a29741b1e29a3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "eb0611688b7d52e43305e141b3f081f5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "82943cb73f1c4a746783674aeb6eca73"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "6454283effea5b90f7042ebd7164b8f8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "34d422ab506d849439c5524d4ee68b39"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "f2c1b829af9e208ae742cf664b23bd54"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "8eb0fe41b010ea56c5838803a03f507d"
  },
  {
    "url": "favorite/index.html",
    "revision": "54d81ac5272edaf996f34f12ffad4819"
  },
  {
    "url": "index.html",
    "revision": "da242ac48d51eb5e9bbf94830bcd3c8b"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "35aeae00f96f5b672fac00a1b72168ee"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "b2743d8b79d545a454ca9275f8f0b754"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "1e22e1e44050848ebecd120401aa4abf"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "46e12d0d8ce3aab4f849065692fa707c"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "97de232bee541f76ef1011d36e8b6fc7"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "ee84ad7b578b696b1d389190edab53f8"
  },
  {
    "url": "note/index.html",
    "revision": "45455c7939a08914b1f90285bc7d29b5"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "50173f464d85b29e0308f6f4bb1fb6f7"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "2183175801a7f7c7cd8a5560f177f078"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "8d44305a69cb2a5abc0c3a818391eb09"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "16f297ad6102b20bc4b27c34b345d14f"
  },
  {
    "url": "share/index.html",
    "revision": "5920a1578dd7e8eccf41a414e301dc31"
  },
  {
    "url": "single/about_me.html",
    "revision": "4c32053922c04e5e572366c4b65c953b"
  },
  {
    "url": "single/all_article.html",
    "revision": "78fbda033592c212b54a9f61c5cf9ccb"
  },
  {
    "url": "single/welcome.html",
    "revision": "bf6664a66e7b2f9913dfc0639636344f"
  },
  {
    "url": "test/index.html",
    "revision": "ca29fb9f66870c5ef470319049f09826"
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
