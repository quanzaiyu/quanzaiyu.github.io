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
    "revision": "aa6e22a8971625666d394d4399a089c0"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "4e16166a9be03a83113547220881e939"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "01ccae7a9aa046c92d9051a4bb728d7a"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "6536376754b959d435b6149ff720f3d9"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "bd1c6b4bbd1b45862831634f20fb23f6"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "f1e767d4abd1cbc8cecee5aebcc29ada"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "721bba8401c54bf1a6dfe335f55c351d"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "7ca754e0b9e8f2f8b093857c71f70cb3"
  },
  {
    "url": "articles/index.html",
    "revision": "505b5aa9b12b59a78451a73e29839707"
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
    "url": "assets/js/1.e6c7589f.js",
    "revision": "344d3875b214e03c78ac0a3fa352f629"
  },
  {
    "url": "assets/js/10.6037cba6.js",
    "revision": "6c789f57439d6c6f0b6b7afd91ac754b"
  },
  {
    "url": "assets/js/11.d2e5d171.js",
    "revision": "144faedadd45ea4406b9a2b78966cbf2"
  },
  {
    "url": "assets/js/12.cf6856c9.js",
    "revision": "83c45321e9f2725413f6831a3dafebf2"
  },
  {
    "url": "assets/js/13.1c7c9cda.js",
    "revision": "53f43958d7e1f2c9b729c9ad7cbebf64"
  },
  {
    "url": "assets/js/14.c6a54227.js",
    "revision": "29e7efb772aaa2a80f6754e04054cd57"
  },
  {
    "url": "assets/js/15.dbac700d.js",
    "revision": "1dd7c267ce475ad962021baad0628732"
  },
  {
    "url": "assets/js/2.05b11cd9.js",
    "revision": "c99a5d349a86df64258489f3d4b25973"
  },
  {
    "url": "assets/js/5.e994c41d.js",
    "revision": "93a2c5c2838be151995dec34953129b2"
  },
  {
    "url": "assets/js/6.b9847764.js",
    "revision": "b464f1f63193b8e93a0c1d99a545f129"
  },
  {
    "url": "assets/js/7.11130b3c.js",
    "revision": "97ad88f8376ccbb905b176aa050770bf"
  },
  {
    "url": "assets/js/8.5337d873.js",
    "revision": "39e0641494438e4cb3b61762eca12c76"
  },
  {
    "url": "assets/js/9.0b967ca6.js",
    "revision": "e293469044d719b073fa4e8c92235529"
  },
  {
    "url": "assets/js/vendors~docsearch.3269b236.js",
    "revision": "00935ae5b60c4f06839d4e75bec75372"
  },
  {
    "url": "blog/index.html",
    "revision": "975044c03b5d8a8de60439c280c10c0c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "f66e1877c48bccd875b0655086937dbb"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "5ec00f127a8b3e86da3571c28533c24d"
  },
  {
    "url": "books/index.html",
    "revision": "003f377d5ea21d7a36821ea353c5a63c"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "ccd8a0d33647bb246fc35932da948d3f"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "181b86deb5853486a605ccfa68331c74"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "5f851b0bb18749f9c43948c81614421e"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "cbb07d5d1777daadb286665e20f931b1"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "c42cc89824b1e62e54ab35c4c120488a"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "ffdd1ff7f9f4b694bc67d57f2e02bab8"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "b7c5497594ffa618a0825878f76cbfae"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "c7e5aeb6627864f1d2d36a501797132d"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "72ed43f5f2a0667d6567e86da45878a2"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "36da7c7a68c1fb21e7d1b4eacf27aa87"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "717646616fd8f4abbc510a011357f8e0"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "41c6ebd23c0d541b757d9840e5dc00cf"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "ed70a0c7b2624e603931e0efcf0d92a0"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "e88c8ec005a00f8c46c809d7a90a3180"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "f41dadba518df49ccc351ab309711ea2"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "ff12f98ffe239dc6a7c9be963f13930a"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "f7bfe0ecfb244e439c335b394309462c"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "7847128455783956e10ed50e587ebb28"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "378643984415d843c7af3a07af3db4e5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d561927b99de21f7a1f63bedbe86d8e1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "b31e7ddf0482840792d94b1c66f81a80"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "c155b49134afbfac8a04c33f26ece927"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "a38c9fd0def76e44900f65baa86c85b6"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "8bf871d7357a3d151c9939f505763bbc"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "1d9f6e07e71a1b9494369536e25257db"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "c7b6c77fd8a0dbb92ec4e25dc0fdc585"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "491c1f36581977dfc45fd311ebc7b168"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "d87139e9b6ab41165caa52b11b5b8f5e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "a819bfb0fc7ffa54515132b7dadf975a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "c2a160bfd633db85ff469042247ed610"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2fcb36f637f90d697fd0bce636913f7a"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "2f0eec022b4d147f073a3695b7c3160a"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "5dc9baf256b3fb7abe04002e26e503ff"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "c0d0183219c8517b5daa91f29bbe6cfc"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "c8b63e5a42bd96465eba6c87a1a34ad7"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "f17cdaa3d166959023c039a06caf52e2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "8d7b37387d3baf9a9ff2eca6eeb326ae"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "26f86b12cdacef1ffd28de3f1924b9ba"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d7a642fdc9831c68e41d5e7b2b080028"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "c4dfd5842b85e338e77090c13a853217"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "df25bc33eb5c1b71a3e69e46c5bf2b02"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "6db2f46e71b7e3cf6ff2fa8516357b61"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "b6fd613257e45ce998b34a8b79f0c8bd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "08350f8d9c8881797c5476f1748f38ad"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "94359b3b443e8a0df4ce5e7790d0e373"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "3d935af8ea1cf9c48136836fd3a09844"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "3560704923eeac914b1a432c0c86ae7b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "7df4ef5b7874ab42c932ee96ab2a8005"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "24648f4c77b08bd918cc4aa72f7cc8cd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "707b4f4fb96731d688a83055265c8be0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "9c727971cec319888c1dd1b593adf69d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "6b603fe262eabccba4ed25b0f48b2905"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "70da489777c4262387d32ac00de6b045"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "376ce6f472f0ddc6407f0933cd71b0f8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "0a89ad2139270f8135d196d39335c0f5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "628feddad239345b82e25d153dd430b3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "6723d319da99634f342ecb53fde6a8ae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "bb616a588b0f479a600706f7e78caedc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "1f64ded5dc8d886bbfe857cc08d9d0da"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "8037c7001fa6ed0b363202a8656d6a36"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "b8d4505a43cf110e029e20fb02c88d0e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "469d8de4748416bb71945b3db231f44e"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "c1b5a01a4a9d175a245c3e11779c14e6"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "c1210ce7fe79b67cc1beeade2d7df701"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "9938f6c9d5c51f67f124cdfb7d3699c4"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "f3318cee706ede39266713108c8f278e"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "cde44ffae1b09eee12dcabb8c8a74eb1"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation.html",
    "revision": "11afce8c54e74a35a9af5c77adcdd68d"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "88bebce2f00a94ce0de20ff59cffedbb"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "f46c250b86f22a2720a79ca136cf61c1"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "80eadbff75ebf3c8333aa3476d2d37d1"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "83d81962e07f0277fa27c6a7b4800ae6"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/color.html",
    "revision": "f078b471acd037ed008308a278951493"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/create.html",
    "revision": "60067ff9f67fe494f30875aea82d8ff3"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "b273b9ac2a239911108e325096d4f67e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "b8e3668c71e32abe1bab1d11cb9c4268"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "7ccf1286121b72784c8c04d6feb0e32c"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "ebd8f78bd4eba3db942789b6eb004b5e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/save.html",
    "revision": "47552daec8db5d479d3bbdb372f3859e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "4ed9b35aa4800d303f421a28ae4d21ea"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "9464e57e8f4d302b7fc372d669b6f746"
  },
  {
    "url": "categories/front-end/_books/canvas/Clip.html",
    "revision": "01a66fccfa7e72acaa3076eebf8e5f96"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate.html",
    "revision": "267e09db5047fdc0c1fc9e0c1633eed0"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "4659cf9fba4ca0b5aa1c79fbbac871e1"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "744203f708dcb737bc41d0a495f187e9"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "29896ee95a71492247b3f03cba268b6d"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "e72adcb374e96c8a9259eb7126854f67"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "f820c9a761f143b9cae9cb012e99a207"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawArc.html",
    "revision": "cddb41fdbf6d9cee5a9cc9c0ebd792b7"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGradient.html",
    "revision": "fef90c39a4fabfe889fef72f348f116c"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGraphics.html",
    "revision": "3811d95485570626f9631b828aadf804"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawImage.html",
    "revision": "84bdbfc2748bfa46b9764d70e7fe8148"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawPolygon.html",
    "revision": "24dd0a0bd4bfd32bb2ee82576b382ffe"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawStyle.html",
    "revision": "9e6f9af52e44a39eced3bad5c9ac0eed"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawText.html",
    "revision": "e08e934e639c48429065ff33d86d4d87"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "61977fe7e88fc184dcc285191057b617"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "6e9eeb8679d699b2832dc3bbb7700cdc"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "2b1a7206f880509cc7f8b7c58c59a63e"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "2efb2cb4b10b6fc1c3e6cae721af03b2"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "d72b5585c54882f7a2fe7d554a220f84"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "33462cd9babb7827eac0910ec838717d"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "19a9e09bc97d0905ab01ca19cee8c492"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "cea0a1b2d75d907529170c0cf452d339"
  },
  {
    "url": "categories/front-end/_books/canvas/ImageProcess.html",
    "revision": "4e6d5b1876232881dd064050f1f1f3b0"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "591f954be298ceb2bebd9abbc938395a"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction.html",
    "revision": "49fa3109e76448f3d08d00e0c1766b07"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/ball.html",
    "revision": "f3bf308a2310a251042d4e7916e4e142"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/card.html",
    "revision": "66a1620c8b800b4b5725796ec87b9d34"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "4ea679791ef6b989cf281a69a1a9bbb9"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "80f5a8179147b406cbd3285fe2c226a1"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "7a9a605120505f00600b2a311c581570"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "d11543ecaf9bbdd0540af9c2a68c9e35"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "74232956f26d3c0f0c9ce9c23c9bdfcf"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/spotlight.html",
    "revision": "c6dddddf3aaa4b17ef2399cde4e44c7e"
  },
  {
    "url": "categories/front-end/_books/canvas/Matrix.html",
    "revision": "95bdba0a2130588201afa04feaaddd31"
  },
  {
    "url": "categories/front-end/_books/canvas/Point.html",
    "revision": "c7a923be6c22855d8db293fef3dfff29"
  },
  {
    "url": "categories/front-end/_books/canvas/Reference.html",
    "revision": "d26f35d3552cc24fd84fa4ec63cd1c13"
  },
  {
    "url": "categories/front-end/_books/canvas/Save_Restore.html",
    "revision": "9cfd38a95f05459103738dd385c7c9cc"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/coordinate_system.html",
    "revision": "9787c3ed5b458eb8eadb03da634fa681"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "4eaeda1cab12f0dd0388cd9a8a8edcf6"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform1.html",
    "revision": "0de6d48bdceda80bc4d462d4cd44ef32"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform2.html",
    "revision": "0104607c0c8f0c4b9b0e563aedaeb437"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "ce841c3ec67be990919fc3ff41ad872e"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "98635947b898f46b4d6b305592543850"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "4857a391cb4a5b0f53a2aab5f2fb119b"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "5c6b73289d2984bbdaa43b9eec5c38b1"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ec0cfd94eb9ed59db32a07b938bd308b"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "4b01fbd13a8631ecf9d20a35020b7a06"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "3bc75c1be0195b402183fc76fd92eb33"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "b1dbd089a20501b4b83f0f428ccb5d37"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "bafb424f05dc8a39e4715e018c80b1be"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "fa9f4dab804910920f8ca07aa2bb31ae"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "3d5d71936642201dfc45c41036ddaaf6"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "77ec584fc953aa10e20f4fc129343cac"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "6b91d0920637bea4e594dccb0a902276"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "e13ce0e86c411baff2a696d63e95bdeb"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "6f4fd66e40e863ecad0bfbcd92f40c5d"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "23f142be8efd7408ca18c9f403099966"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "4b486e674f135357e1823d6d2668be2f"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "a2971143b7e0c0ec9194d34c8d5b4099"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "5d68acb32244f6ac1a46bfa6e18c63fb"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "72d9df7007abd2f0691012cb19abfcb8"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "0561685fb7a20c4938b68bb16d936876"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "52eeeaffc8472e0f6fadb2521d582c95"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "89ef90784d25b5e8e87968a59204d459"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "8b7dffc6dd2792fd3e1ff06deab4456a"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "63b06fe90e52514ff5a0d6da1196dd64"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "0724e4b89436ad1c57e448b633ff4900"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "6d3a4029993b430010550f573721b74e"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "0e5a6a2d32d825c3f158a3ae66bb8271"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "bf14d0cd2815817202dae8dfc7aad1d8"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "5965f94fffa68f80a642ecfc88374a92"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "c91cfb7aec540599209d546463b4e108"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "3a7248d055cc30fea5db003415e66d95"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "e90ec55f25ed1dfe0ddda76ee0de9d95"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "47870c7dd5e9545e23cf057b27fd1024"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a81fa4f0a9a9cc4a88b379662dd040fa"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "a50aa843a477b0aedb95c96673d122ce"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "9d109ac5eac3e6af3caa376da9c6179f"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "98daf31caf91f9d538c4b64f8fd510f5"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "a8efd50c7969638cb28e780854184e9b"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "5e63bf174cdfe9e3dc010db4d1bbc5e3"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "84cffdb1d36f34c0c3775d55ff12828c"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "06fe14fac41bba6baf7d53fa579a3836"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "f4225799652349d76e02f4bd60cca31f"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "ef75e6421c86b4c1a14193bcb1a7ad99"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "88974dadc915d8e221d6cde2a1a00532"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "a082ee8868aac114fcef66b0a626c699"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "bfdadb28bf939d05d5884ff7438c9079"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "2d724818785bca99183fbd6880211767"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "a60a88e96b27daa8ac0af7a991dd13fe"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "723b83b36ac0a7e2d53ffa39eec5bdd7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b4a527438dc9208802dfc64e88596fb0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "22fedb68df8634ef7585d69825d47146"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "7bdc0b00fd1dde2f8ebf8464e75b46d5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "066614b7fbe38e0e4e2e48ee07355d2a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "0f6600f04ba58368c7f868264e573fc9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "3cd71bbd43dd23c53ed9638e6ddecd6c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "a0bbfc74434865f679c25048507562fe"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "d295b786ad09a3fbcd65e245d2a1ddff"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "67477a2a373096279dacf1050eaba2df"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "2c46d4fdfdf4b41e250532a0be7b6f56"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "a1bac409056576b20dbb053b2f151e2f"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "5346e1d9c276eec6b7ca73ae53ba158e"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "de2af8c80a15a52bfbcfce9d0914b099"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "4a330e9457c7eff3b113900431a28d89"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "2902f473b7f6fc42c888307d226f7f4e"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "e25815ec5eb884618fd04647ac902567"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "1ea74a065fbb6a93b2dd7d1518e6ec2e"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "a4ab783f36080704fbb7d6b028f92812"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "813206da3e450c658290938dd1b35b5e"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "be73b5b4d2ffff80fd5513d337f448e7"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "eb6e2e19466d8156b0f4018cf0afd187"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "0b8da54b892f12501ca1fd31dc6cd5d5"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "178d6132ccda9a70f2319d6b5425a58e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "0231170f5bf42d2661086a2b9c3cb5da"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "b003580725b024d37929a4078627960d"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "9b3cfeaa2d4dc43fd3a575d62f7055f3"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "0e3400ab924fee119b7bbe697da1cbd9"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "17a1edae93d00ad83a94ca908966fd9a"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "141503dc496e636cbabaf05bacdea8b0"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "93257dd4fc15083465268fbaed12e62d"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "349ee712e32b0a30f9f1550591a57b91"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "b7b7c3054e68fc451d5f0f978c81ab93"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "46f7993eaa7180fe6ef61f910072ef3e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "bd24603b6522023f9850bfc83131b521"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "30fb2b9549fd2ac7d6a1cda7a5b02aa6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "cf9df81559adbf25faa8d76291b59b23"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "1b8e7060f136c450834084ff5263354b"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "19f465e95f2f2d295b92dabca8a9bd91"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "1e53c10dd5f05e013805184fc8a365bc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "cfc8836246ab9bc425431e8edc38205f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "8e75b1fb84bc7e6ffad592feee89c669"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "9082fa1315c38917f49a86828a45f0a1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "16f39fcd1d47fa4ff9d918b23ee6d2de"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "ea4e6b7eb3bc9462b28d88f062b93d4b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "2483a54b39e7fcd2e59c3fffe5fbed60"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "b939915778c312d611fe295fc4a08593"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "02f695c112fcfa063e8b91a10d04c010"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "63f21f120a5af824df273f8985b5c23b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "89b3a1b19e9280a4f9a4291c103a7266"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "9ef37cc3d93533a8e36e4db99b2cf68a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "ca592be38fd6268bbe36585aea38650e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "7048cdd8b582b9e39794c5992bf56b63"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "9bfd1f70aabfcd3345475391d96711cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "55cfe79cb9fc77444a5b25c4b23f1fb8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "2779853010b78022d4fa5d3901325b6f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "fe048d0d18e674984e7a30e977d8cc54"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "a35429f90e03650dd07a66b058fceb5c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "e6552db10364731f5d44f32918c49b53"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "e6d967dd994342d5c465c297c0563040"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "6c2c040719844d393300fb3228153b05"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "5196b3c62f709f43849a13511807ea41"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "00391b459d71dc1a6e833d71d175e998"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "b0568bb481d191515f8ba2576ec544af"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "328310bb9814b2a7cc3ff54a0d5dd3e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "5e13c5da8b11dc585cb1c4b47faf9e47"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "edb1da6d89644233c9a6a95eae16eb16"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "b496d16907a73d99cd6437166c15bdaf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "b41f5d50ae874bf5f170386408ed166e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "26326d7eb63f1b809b281ad76272b26a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "a2977be3a7a01ddf4692dec67f6cdede"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "85272f33112d5ef36bfb98ec287e7d24"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "2364ebedde03b99d70d34574b8e799ab"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "243b5d72fee973bb5a20564f22c8fc74"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "3b8381f4c75b35c89661a9f238f66246"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "ed03931ddbfa54d854c049ef4849cf45"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "4d175433da04f7d166b7cac94a72a115"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "e1a091d022d323d9278859edd80e7105"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "67d9be9bdc734b42a8ab1e3243b9b832"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "7332ba526f575722697691ef9905c851"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "94e36a407f29683a3fb9b2b88ea77b00"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "10285fff871d2cc9e6f28020507da441"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "dd7c213bb8ff11174e687d0444ce058f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "21ec0d3db5ee5c7ec6a29acdb5fbd72a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "1f859350f11139715fc8e288acd3f4bb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "41e0e82ad25c98acdfa1e81e715f5d50"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "bfaee107b3bc1af458f58d985d3b449c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "0a71ff7aadb91fbbe58630905b75929e"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "61b42ad70f109ace365528515291bfe4"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "603a11749c03b39a75712523df658669"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "e9c182162382336741fbdf5301093360"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "d422e82c8a758e2332c3d6be2dbb0694"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "24725a3b4bf4a064bea1fe1d7d294ce2"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "6e24cbbf2dddf30244a54f4cc879a1c8"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "2afb9f348adb648e93be63d64a287ad8"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "f33af9e07c86562b55b2ec4b4c88c878"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "394568f7dc7a808a69a4bb95b70ccd01"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a20b58694645e56d83bdb26604922bbc"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "d7f480b8ec5fafc51307c6f1ba1fdc7c"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "68835e412a1221284984761975b11789"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "f3eef16cd316008dc2399ce1b547c6c2"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "0afb55ea51a085d4ca28c0d05a36adc1"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "7536addb1d5ce737aad94cb18c949b88"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "41f1d06680dcc9e75c29f722a2f996c8"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "74d61764b97a5be6e6904588a6bf1fde"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "8cbcf1b104733d35e90d5f98e1c9652a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "0c02697fd75d5915e179eb2b1dc3a684"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "cd9fe567ec3f4d21705168fd06b25032"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "d3dece9d8378380fc3bd86988d7c4bc1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "f62f5886570d098178611c1c23f3d293"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "dfc808a40715c4f7c5b1665959a54d07"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "fcdd39b56c076d7e3e8a0f4eae29164e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "b8280a3ddd1adf45610402ad5dd802ca"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "aa678751cfe9018ae36eff4e9d07bc25"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "d41489283757c34111be50f07f9cdf48"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "a9e36cfec41c124517cbe118b5b7f5dc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "64625c02547f63812076307086283470"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "f4e9f48e8554293ede9b7208bed9abaf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "fabd83612c741f2e4787851a4814416d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "4f48f28d75f4e30104297c87daa046f1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "a322c2dc22f79239693ae713933241bf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "8adfb35994387550e6633d5a819db0cb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "4b3ad366b62c14ccf6bac52ae3f88af2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "366c5e4cca554a1ef249b1073d81b2a9"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "6eea25cf1849c56d6002982d6835a21e"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "acafde6818741036d3ba375f18ce914b"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "4ee283d60111db18681e517ac75734a5"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "fa80a33cfb9d90ccb6b9c3b06485c77f"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "c57689ac4f0bb4168006ebd91552d79a"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "a30145ff690136a6537f6c0b9898b314"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "1246294f4d24601e3bac9c5fdb4a9539"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "5c756bf4eb07e4f7a73e4f318e875337"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "12008f6af9a79c1bcc7bc32c211bb5da"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "5395854515edf2447d95f640f8c2bc95"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "4209fff1f3d7626bfa03381c45f32226"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "eeabc1e48719ed9d385e562493a1a2d4"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "e726128df6dc90a61b61992267fbdb47"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "a9f13d37dd65802b1d4781affa8e913c"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "0e97836cb02ed77f8353280fcdbaf18a"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "99a894bf8da5685c4ef2bf0e4cce7ab1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "a47b785245b0dee54f517178c2ee710c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "631e9959cc4ca4959a9f5507c84ce425"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "fade97c1467ad2fddebca0613ce22a1b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "a3dd42fbfd42fae45e2676c902fc52be"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "971455d9182c0515659210697fa6191b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "ea67c51999405bc6f77c06d4de67bee5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "5729598c30b638c916e0909175de8dcd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "7fca131c7f50994e48c7c5cb8bfdf4da"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "a0794161a21fe959a57eb0ec57e7b72b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "02126fe2d0bb1b882fd3e0c88dbc6b4f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "2c7433401eb3ed2b9593c050e04e4427"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "1e6d957404617fe301227720a2f75dae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "1e8d22ba1ec846f331b63cfda0c3544d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "96dd9773cbcdc2563693d5a853930d95"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "c499629e6282500b32dac4d5a1c6f611"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "c4c4aafa6d21349f16e558ccdeafd3ac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "55ccc9cf0950577da25fa7d6f4964f0c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "8280a6e3e92a47a9f0b8648450dc863e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "42125da5b9f84e322df9ffd04bca0bcf"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "98b4453e8379f85917f91911ff75e250"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "1e882db9cf3b09cf2f7a36c24fab5756"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "e0e3dd7b9367eed0987550c6f014342a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "d2798873aabfc629a435c18d280f8b9a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "b036c5e2ce6ad94c02a44de51b72d4ba"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "6f301131eabfdfa4b41682df9513fdc1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "19f1ac41e6a431e0b6e4f3f45cffd803"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "34e6bb6c70d58afa493cbf8c93cb6969"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "163e46232133dc7a554e36c25196ee6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "3cb7a70b10a3e67708c66b58a94f89d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "e83880ab1fca3b5696dde12b72466844"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "eeec3743c44fc79889c090397081c28c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "eb16d1b906240afbce4ab6ffcece850a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "751d0b55441a572830966ff263b8a0c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "c4f3675aecd8c2e4b6e4acf6b9c85461"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "6c7121de753983e833d0498e995fea27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "80fccb56f42384f66738d0bc66394686"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "7c924534368c0be6ef4d43b5ac3cdeb4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "7ace439cbd23ddd8e2972e4719c91f04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "3226b24340ab1ba3afbfee57622ecf11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "4bf010c5638237a002eb4b373c8f4819"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "f9de16596b7bfcedec5fee544b674bec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "190f6f983e56916fdac46d573b75f0b5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "a13863e79163b0411b15e0515883b094"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "5e0096938bea83d96acfbcb6f79b1737"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "5c20aff72b0645cbdbaac2bf4dadf112"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "b899e3e3152b7756f4c1159e33edc658"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "a1a736c9562a74308aa987b29ce06c41"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "99df0fc3eee5b552676a8ae152712866"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "dab48b41f825817557a60547ba8d4c5d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "74c51e9f0dd06264e83e286a1b37d031"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "e057f16656db5ef627041d3476b47b90"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "762c7a87cc548dfe9479536969290636"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "8f4cd0c5c47a7397ee2060b0ea8d7f9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "4dfb64d762606f4ccf20c7e9eda9fe99"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "e44679f4c4578d23c6185a78cda28d1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "95b27999da5ac18f28393ff209c2579f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "a3106321c4eb895aa44667ad65becb66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "00bd2565cb8bc30eeaff16c6e13206a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "f8e4cb62c330aa176714814ee2516e5e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "7cb4e0e7f73567bd51f29b1e87db5181"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "d669c34e5c415c5abc394d8bd198b568"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "efb9fc6b692683f1d9d20ab64ecffdec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "8c2b9694eb71c1f7e57104e4bbe5c620"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "e6d330d430b47c63b6f710cd9dd8119c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "728882b3f5cced6b48790d40bc6ad1f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "2bd17906aa684325543ce222dba76fb8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "bae4a9d27448cb2361809883c3e3febb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "e14fbf4e1fbae9538ea94213a184726c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "ca5a3a35acac10b67bcaf16aff690b7b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "9993d623f1f9ae2bfc3d06f8212be86e"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "3daa0675af2288b86af889e762eaaf3d"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "3d8b9466cd40741777c61206648eaa6a"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "331a67e7fff5e2d14693c21194090fc6"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "382d141a8094734c9e6ee89aba401d56"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "95dd553dc867c51038456ade249730f3"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "7c117987f097df449e63c7fa78744467"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "1245fbb2c5528419a8d4472d52f46822"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "0dd3860da2735bf82b543a31836c6109"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "a94a0187049bfe80c1fe061c052fda52"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "fd3c5f1f839ba814b73c3b0bbf1f1397"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "0f823a84a55ab951d62b1228349a5263"
  },
  {
    "url": "categories/index.html",
    "revision": "f4f7719dd069d3d414fa3258f226476b"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "9a737bdc56bbf7f54c3a2362626a3c5a"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "cb3245f78371d411d3e7c34c2a417d85"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "de4f580fc86bcfa6ae35f1b104937e61"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "77f5ef8ef4cc502a0468b7364316e12b"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "5557413b070350e77303888a9578fe03"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "731d06c3ea3f08b891bd57833077c9cb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0803693f7786e236f82d25e9b8ad2355"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "67ed58aa20fd446b320e3e7b9d295d7b"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "16ecd65d58dd35ef728411c6ecb557eb"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "d04e9b6e77e04b6e8281d69fbe2605a2"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "102ac8b959f188dea4ea16f2ecaadc0c"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "5a6f57a9514c43eac7e280b2a3882fd2"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "fbefaf017a448deaf83874b2a64105f9"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "fa23e03aa556df357e931fa2e8a0e1d9"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "41f2550c0e06d902d15b3d955c350e17"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "d45a77ad25f17079f635a4f8155ff362"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "bcfe4586857cd3ba0fce647e1e41d03f"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "32689d31e8365b725a9e9497c4740227"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "16b47ebe4559ba45bed8e5441dc6ce78"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "28de346b1fba50dc1ddb58d46e7cf973"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "bdefb71358dd918c580cc3df10acfc02"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "9032c8c83f2c08fab3ab52ae5df5a9f5"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "0c3d90778e1fd4fef23234fc9bf0602a"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "211107afc02f0188ced833e6c9273e6c"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "3a8f1bf889d90364c00926e7aeaefc75"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "c3c5ced2ba9e32b25f4cd9ac62e9105c"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "743116cd88106cb413aed4db6ef1b409"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "a83f12d73e4455d4b606fae8c19d574e"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "58d9a6e408a44ec6e20b9c8c6f4aceb0"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "dc583348e4df575c28c3b4647458fb99"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "ee84a14f1729bdc2855716ff4ec5dfff"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "3da38574b93c4dca4cec3bfd1aad8cdb"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "266594defbb41aafb966269d7510d878"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "8a376acc664b93dd9ec46d1dd5792f2f"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "876c31b1c1834857b5ddb8b52ab369c2"
  },
  {
    "url": "categories/nodejs/_books/koa/Response.html",
    "revision": "fd4433892c7bd85a2267b2278b191ed7"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "e2da82097b8b69cbc23844335c52032e"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "8458d1b1f539e8db0a2ce232e56ad32f"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "2ce3e369f3b690a59807e0436ed26ce1"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "edfd3f346b2598d980c3d56e1b22f73e"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "d55960255617b3c08c2b0438ed78d83c"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "5999000d0687401f80e3a2aecf8f6123"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "eb329825a985b97016b09d264314a5c5"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ad6eeb2908b0d3b47103200b5757013d"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "d071054761be94f2c8956da5484cfb30"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "bb5d8a10a1ad611a30b5af8410aed59a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "1710cac17a53d81794f9ed5dd47833e9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "5e35d2d8577c8b02cd77a811750bf223"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "fc45b889a696fdebb052a1e46c227531"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "edb8a331373d6816c5ec3a578715354d"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "f02f26b458c0946b7fe6afd6efa4a6be"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "4cb76cadadf03198175c569e77f9cbd0"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "5db9da69ea946cac89b101599b8a5f40"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "af174cd5d4382f2f80fd72980f08eb7e"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "93ae9d0270d09a86710847fb89a9d36c"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "10f978a09ebdc29befc77590bd6abb97"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "df3d8d16b69d79a402146e7d6f41f20a"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "b8f43fba6bdbdc5e2ef23fb6c7610280"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "0a0ad66170d763429d5b8f77859369f5"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "e9607d2ca0fed9d715389cf7fd8296f5"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "6d5cb63bd7be2879050016a53c36857a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "de71131eb0694f3916ad08cd9e8c117e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "9a3b302e6dbf39d1640e96cb023def95"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "3b5968335e68fee022dcae849381d961"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "3e01d0bf52cbabec37d3e19d42c949a5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "43e67e9459bbf437a2122fe1099b5ded"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "3ebb2acdbf4778c08d85ac5d0ab869f7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2476619d59f70611dbd2cd1810c8ae09"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "2921130db05e5da883f591b4d76bb62a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "aae2d6c4b1ee5cdaa6fb3bcf9a12a775"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "c79e2c03166d041de9f0afce9265ffbf"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "9c779d04594fb39199650e8e82ab8a2a"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "afc5fe60552a215bd886408ff5d7218a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "6cd9a042e390e520f338dd58b31f99c2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "1e4595b29b31ad6b91739ba0f5ce74d2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "fdddf81368bc81062b449e39b109ac5c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "10c7550d7b2cba741914d208822dc01f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "a6313354e7734777478ef3ba87c786ce"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "de60f1eb550b4726424bdc985cd54c9d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "3491cea9fd7c5ce692e7dac921d2eed1"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "358e4552b5c8e039aa8ab5bdc7ae685a"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "a6147a3821b335c38d212755ee478b95"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "e27746adebb6d880595d1f0e66478b04"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "f8619261728a0c73ca21e2178855f008"
  },
  {
    "url": "categories/os/index.html",
    "revision": "0fdb423f7bf41d44dc3974a0f466063b"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d091f03cacc64b655da6202ad410c0a6"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "4dd115dd8f2ac5596b35dfbc2513d98b"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "bb34f9c7fa54d968f3e0540022afc946"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "39ed58a2a941d855e1009e8402bea7a1"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "21bbaa621899ef0437962936914207bc"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "bad5c31dfb3e2fafd6804abf69433af4"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "857224804f22cad7dfa2e9fbaa0957cf"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "978849244c99e5d789de92f3e5e278d4"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "dfd5faf6f47befa761b08b590c2d03a4"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "fb8bec542161f524772e510ff042db93"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "8b277b661a2355fa4d9cd5ae65378eae"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "921806dbccf2c7b144c74ed9790bfd3d"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "885d4f9af5dddf679c81cba1e27a8fb5"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "1d07d8c8f789358a8e535a620d5cb681"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2c4340fed46a4467aec34b994fb0a1e1"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "fdebdb85a5da917fc083c74cb2a8472f"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "e53c644950c0c35736c86af14e160ff4"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "f135fabec62bb1909047f11ba8e96eff"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "91f605989301fadee21bd78213bcaa67"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "371e16419ece6982cff24b18ea9ac607"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "66882ffbf7011f65c73558da40aad726"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "0a88f0812e3e501c31b055a8a6898104"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "10c7afcb253ba500196542fab8136d65"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "5243596c9020004d0b87750fc1e2eec3"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "62eca834feb1951d204b085ef3ba8bca"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "292fee267f8774dee62508b394e1ee30"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "61a1a451714ee5afbf3800803678402c"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "ce3ef202b9959e680752dd4a45d19eea"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "20bfc7a6e0637fa91ce096b7542f0d64"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "57a0bf8e471a494da76995bb24b966ef"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "33954f582e801d7e5a9b866ee3f88707"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "304bc6d8750677b90426c2ec61680639"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "4731e194b1c380ea5898c8895fbd5bb9"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "7bfe0b40bb7bdb94ab949177c6329afa"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "f8f1ec3b04a3e7fc30b37d7c9a977446"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "0744518ca7d1c8dbd678b9c0a27c5d0e"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "5cd006ecea620bc11a22c6b92bd06a83"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "70cd7aa5d998279ca4fbec1c4479cd49"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "da221956f5d4046b6a646988b04e0160"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "26e0e113cd535e62965bde5544896c6b"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "321a49db4d9f8b4cf5e81cfe5cb445ec"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "23f64e17d7173ed33ffe50bc548ed1fc"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "8989ff92c06d9044d46193ac6d07530e"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "2dd2de24c2b7b0ec3625d1e1aee18651"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "75b336a952592a70adc72915aca1f80f"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "f7ef79ca3e6c9b62e12298ca5230210c"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "d02b805105a731f348d7ba94d593568c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "eeb410788d2ab0aa335aae8a1d27f77b"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "68e3effd5cad674cabddbd0d95de8625"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "b95a943a31770fb69f657df285fe410f"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "c15d09b6d57afb0850b4bb3a3ae98aa3"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "83cda3b6d4fe2952cc06fa22e89a1294"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "628e349335c6c4207c54a2255048dd1f"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "f3157a8b8eded622f729ddee7b9a6b6a"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "9f757af3b052d436fc2023cc0fe1d14d"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "c6dadad97be4d30fcfffd1d84027ba7c"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "8be7746701bd10f6a2ab8430d9478a25"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "d4ce7183391d070c9392da56f0d257b9"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "eef5550a2abfd0f1a5adc25ad2cc40e6"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "b09fce86e747e547e4a77d31b06e4166"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "2219b73f7344cb580391e8a587d65313"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "fb85d73598836e2671e052e831276d3c"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "ef56b459f70a3675633aa38a8cdbf18d"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "fe08a8ad63c4e55045373b30bab3cf15"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "357919d49a751a1f1ab393c794e694f6"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "1f77efc2c779e70c209fb9ffa90c4e1d"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "6f63ed2b8b8c5c350c5f5966c217764c"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "d234f712847563ce4b5c1faa1245f79f"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "5358e49f45de3ffcde63717df3f16df1"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "0871fae7285fedb25262a71c82cf01d0"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "f92bb460bfe5af12998c8ba33207297a"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "4eae80af3fe863d05c49e1018bf9b125"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "b2a550c01c6d635b9a695ca55a571081"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "e39218c2fa211b7ea0b875157c255a87"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "fad1f26df96a5de03ec03dd6af3b3a15"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "2f5fe0456179e4bc0544b724942277c2"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "2217f39cdeb8e34b56d8038ab770de83"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "61c54bd18514cc4560cdc1a4360e3f0a"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "36c660f29bdb68f0889ca0f46d98452f"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "e7c6c15842f8f88c79c3720473dca6d2"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "f57c1e25fb40301d7a414f4163a9c1d5"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "b1f409147ab1e5d6d7120d935712552e"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "f4dc5ef42d9848b9f156c195b40f7efa"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "2a0ddf9c3140d9e9cb56789a9a7baea2"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "9a8a3c1c477aa03909af85e1fcf93a88"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "b174486505f2254fcab3d59790ca70a7"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "434a9eb23b84c0815707f842ad29dc5c"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "aa53d3a07c6639c05e3004ff3a7c1b77"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "7603aaa23689ff608f1f5bd6c4a182d8"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "533b47df81699861a3321d6abe0b047b"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "067424ed7938502569208691a29835d0"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "56e3f240617a5919c1c79d46f98587cf"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "77f485969ec1c68e301aee5c2477b14b"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "93f648a887c1b33cd8a994c3eafd3167"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "ea3b327b9e14226fe57fadb3f081ea58"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "39f804bbd6059e192838ca169a633d3c"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "c9ab9751351bfb293fb5856da54d62f3"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "6ae40b41e49ee191467dba5ed4737d28"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "7941d6f7c733cc3a7633af8fbdf75e2d"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "31af8f211798f3d9ab171394a5ea75fc"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "59ae6ea8e6ead30c12fde52f518f3be7"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "b7d21a38a7155a88983b49e8836f6da6"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "c746eececdf95154aa192632f2fd0af1"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "d537e75d6f4bcfabf162937330f3ca59"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "1a7bb99bf1e7a13f1f8223955184d0c0"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "ebf01d2e909c0ca275064568c43f0d5c"
  },
  {
    "url": "categories/php/index.html",
    "revision": "b2ced8f0ab972fb41a9cc32bc27727ab"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "dc957d2eb45dd1d9261ab34ca700ab3a"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "bb1fcf9cc835d9006a567c41b4055b87"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "1ce2a3db1f622539a3f3ecca6f984fb1"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "5c8b2f2fc75151c2919e39dbe0918dfb"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "2f5372fbea094a240bebd4af296554d7"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "96f5fc4e9aa67cd382d55d9d78f32741"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "44f8d27ad9d51c363c1114d24ce8e2e1"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "d2fb751d8fd671be99249f2e8446e39a"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "2af575e9fed44aa6e8791b219d92ff37"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "1119765970346cc8a43bab374369480e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "c0222c15e5cd3f01715c4e7ea18fcfcb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "abfccd5acbc984606ed7dc7c5e679074"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "e1e2038973364df8589c34b1bcf53daa"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "0d777898a18cf54bd7a1b9b2ae3288a2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "e3ac5f797db33600a20e9fe5919089df"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "573bca28dc656a23d2ea72c23487d945"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "e4a4a570cb5d55adc4bb6f0c17e16f3e"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "e45da956e0eab96917425e9377413fbc"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "36a5024fc6fd94a33c1e6868040fbfca"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "670d90444f014b8683be346b815e22db"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "1b38286ddfdc29ae163d6b662c045829"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "c9383ef2c1b80c6d58026757c5ba2549"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "e5a8934acc64a9042dda83e6d21d6be8"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "698ec1a2721dc9469a6abdeb9acc757e"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "aa0895d7557e3c1cb819cd5a32ebee77"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "8ede4c1f0c27251fb39140e9da95ebc6"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "39634ac99685b57c2e605dbebc695ffd"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "626ffd89128c407dc774e9cc609ab449"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "74898f5265cba37690d199b8df094522"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "7155011953daf74192f12d324f8ee1ab"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "cb02b59bd9677835766f00c74a9287f8"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "0baeb6ba9fe0539be859a52ab04ebe42"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "e64a33d128d9996f97d036dcf392a561"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "97ed066a9f151e1e27f50f9d92743e4a"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "f4d354df2dca222c7414c2f32318a8fd"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "0548979f80c99fc9ca328a2c94d917c9"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "62b60b83496f818cc8afd83309226b76"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "43961b7956dff2e390d1bc5f0ab78dc0"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "6ad9f4849e77d2cd43189de51b0f8d0c"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "35f5de08266be2c36ecd40c88563a2aa"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "96d9c180a11297fa0dd3108fcf42d319"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "1f0c4d6a33774ca741e0e69920ab9480"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "3ec47c40b257be77875ca7a3a3a16320"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "74058bda46fad438116d0ff496b8af88"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "4fd88787ad1fd2640cf6e8815d29123c"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "c85827be222075d39216e844e1753c47"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "f7a69cab82ad332a9c02caf55c416ecb"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "59eb33fcb033744b1eff5a8f9a178d10"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "4309639c8042339396b0965c609a4fb1"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "1e7f43946a4d2af7a68d8ef2556c7dff"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "43f45c605c0bd136b1d2cf34fcdb5c1c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "74bb761ae66717ad4dc244b8cabceed6"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "a7c4304b66d70f07978e60e6b35be4fd"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "fab861978985cffd1a8adda8be580500"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "b20b60eea91a4fe153403aab412db903"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "7c9b394e082264274a489e4a46ec924f"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "029e1b71c3c8e92d7d8e4169712e315d"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "1778860745822c98a0e2f91a8da873d8"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "7626635c7730a7eadda2e8c49bf0fcbf"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "16edf4d87cad92f566e6149374d375da"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "1e7d750007c0adf7355559a95ed27a46"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "ea18c73ceb28dcbffa79e74cda9056fb"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "2e7c0860ca722efd8790b343266eaccb"
  },
  {
    "url": "categories/system/index.html",
    "revision": "e050a692d8b467e7d286cb0c86c5cd01"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "db58cb770dbcb24d3debe08de01fc9af"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "7d317b8a3495114cab64d0788f342e6f"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "df62a14a7f83cd08534efb205e7339ca"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "7f7ef9a9ea777dfa77eb5911688242ec"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "96c2c1bd29c79e89017be8f49ceb36d0"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "99fe1090bd72727ac4de5a6c3643cbf1"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "cf670834adf56fc8b3c968d68ac30c1e"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "2dbf9f324eee29585ff975f7ce6a46f4"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "7b7600c1320faa2dc39fa79a0667b822"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "70a54340b9c85fb42dc57d8de3c2a5ef"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "5a02bb4c79ac5d43fa2b63e70a10229a"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "1c1ea30548edba9a0c3f732608a0e1e1"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "49711d91f2f960048617670d9a1922ef"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "c483bb33bed32bb4b2010b4a83aebb26"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "3f2c0f1f50499dd96c5d3aa41a15cb44"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "1b8db54283dfafbe7b307c38ddb363af"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "a6577a36b8073e224107c21d48b587bd"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "81b6813868d159e59eec26a9c9e14e40"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "9e5bf997886dc4a4f4196d4596b8fccf"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "556fa7b449a79c6c6cd2120848119084"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "d57a9a0630d8bab4cf482aac14e8edf0"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "bd5f9b61cb46a8ef4ffb4371d2484a34"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "4182d4a8437fe3b82bf3dc0c63f67764"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "578e32ed421344668c31c8ddb2ec5b06"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "bccc7804fe9230b55719635c6c7d4c27"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "f0430c01a4f00baf8588a44e6fe27563"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "f1bef5b6f5827134b1b1b135b975fa07"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "1bb7b04d67a6605aac6820df55e3d48b"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "5d0617c0cb7ac7ff5526aaf5544abf78"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "1e8b623229a9e3a884efa1d2b7065528"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "70c1445901baefc9994aeaa1476e1ff2"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "c18c541e1878968b8b377500767a0803"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "b702a0a4a8c28341c641647d383f2f4d"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "f05c990ce0f1d732f00ee7a2db5c8201"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "e9d99f9634ac7678bed5b30a039f9906"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "b964541b06d879d23e0d4a90914dc002"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "f20dc3ae5cec1000db922cc12ee84349"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "d5e9701e2ff3e691248903897eefe04c"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "efa0d244f962e7f7349d599c16c37b93"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "966ec28a9b2c7131c9415341a9e3a868"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "59caa974d2ef9bbec3273b1b5e777a01"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "177ffbac7de58527d743f5e275f078c5"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "b11b7f36dd832620614157a63af2d149"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "79a46f8513b08e362577a5480fefc65a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "7e523800a1459f0e27cc355c5ba78f61"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "73f26b415747342891f149f4536f0cfe"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "1c2c3bafb77396057603addb4f1db79a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "fe859ff9262191e025b5563d9bc7a771"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "5f10359469ef0cdd8c763857d651fda9"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "9a75fb92b9591f895beb2fbbef553534"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "2c754658baf7fa00443d6288154f5bd8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "db2b15befacb236ebec592492888bb0f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "e8cccb98aadcebce0b023e644fa708a2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "d570e0493e2d679900fde91bc0ed4b9b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "de5af00eee416ad13592d85603f5b459"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "3764da9f6994e587010728f78d0f4476"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "d3b625dbc1d48e6914d5be81bc54d2cb"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "92d5b98b0267bc62c605375e3799aea1"
  },
  {
    "url": "favorite/index.html",
    "revision": "7a405d5feb53de6b9434e71cc4deb8d0"
  },
  {
    "url": "index.html",
    "revision": "ae76e333e97804f6de05d7374e5f5867"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "587c9b6e99787e1431fdb1c5f6f3f518"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "a250c755aa4fd1f7c9a1e08a96555e2c"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "0840991fade801f7b735b2c0f1ce2404"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "724c6e034a186275ad19974f30911685"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "7e1192af4103e0c38ea30d1f18c0593f"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "e6c91ab6d1d313033346f210a784e026"
  },
  {
    "url": "note/index.html",
    "revision": "76cb55f01247a80fa5ede9a6ba66c8aa"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "c9c33cc593b48d15d72e5cbe26dabc5a"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "6371269ce149294d523416957d690844"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "82f164dcb299bb951d0ccb991e6ca0c7"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "902098c64948a2e440df9688632d817a"
  },
  {
    "url": "share/index.html",
    "revision": "8d32a68da7855e5ea74134e4ff17037a"
  },
  {
    "url": "single/about_me.html",
    "revision": "c9cf5cccfcedf93673309dfabb3bd0c4"
  },
  {
    "url": "single/all_article.html",
    "revision": "6ddcfed4775e6bca213e2e3504a7d2cf"
  },
  {
    "url": "single/welcome.html",
    "revision": "75d83a237e12352051a47d7f629984fd"
  },
  {
    "url": "test/index.html",
    "revision": "1f129359042781afcbbd488c161474e7"
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
