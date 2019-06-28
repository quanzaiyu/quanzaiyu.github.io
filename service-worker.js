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
    "revision": "133f01c3dbd69f85bbf7d3c2dd24132a"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "025a25ad72338a0e56389895a2d309a5"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "3731656cca3e04787ab8d68341becbf4"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "4f32d72055b356aa56afe448b418894f"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "1d0a46f28f5d4693c5c942660c96bde0"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "ab4bf31d0e5c65489e998b26e8f4ef3c"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "c1743c30b1960b077cee3ec7afb5c252"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "f266a8c89d7a8695685e40154ee3d6ef"
  },
  {
    "url": "articles/index.html",
    "revision": "d12bcbc2719db05137aa5a40a4ee2a8b"
  },
  {
    "url": "assets/css/0.styles.e2d81a46.css",
    "revision": "50427fee7dafdf12b8a17b6f347d4885"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.219654e8.js",
    "revision": "950ad42b24dc3ff8e29f021ceae5f416"
  },
  {
    "url": "assets/js/10.06c3c4cb.js",
    "revision": "e789fee4f20ceadb67dd25aec1c2b8ca"
  },
  {
    "url": "assets/js/11.30e63b90.js",
    "revision": "bfb026299ccbef48e56c325666984775"
  },
  {
    "url": "assets/js/12.125063c4.js",
    "revision": "10ae54803e1d8926ced2b576fe47a719"
  },
  {
    "url": "assets/js/13.28235efb.js",
    "revision": "2b6e31f4291079cea2782ccffca69525"
  },
  {
    "url": "assets/js/14.db34b04b.js",
    "revision": "8a1321b856e051fec8379995fe708b86"
  },
  {
    "url": "assets/js/15.d7dc2a8d.js",
    "revision": "aa0378b295cd7767b097af5be055ebde"
  },
  {
    "url": "assets/js/2.f5e33894.js",
    "revision": "fcc5e0a46ffe3a552e015c39fc671cfb"
  },
  {
    "url": "assets/js/5.076b18eb.js",
    "revision": "60a7ad095dbf4d09a704c7dac4bb97fb"
  },
  {
    "url": "assets/js/6.38488ccb.js",
    "revision": "f23ba527a28169522e8b6f63feed6585"
  },
  {
    "url": "assets/js/7.e54bf328.js",
    "revision": "7738244abf4692f955e5d47402a6babc"
  },
  {
    "url": "assets/js/8.55ce7697.js",
    "revision": "0a7fbb306b9ef2ad820d98d97745f8dd"
  },
  {
    "url": "assets/js/9.9371af59.js",
    "revision": "e3d66d2e3c2fa3baefac26833733c998"
  },
  {
    "url": "assets/js/vendors~docsearch.960111d5.js",
    "revision": "bca91ff3260a11827dc7a99fb9cf13cf"
  },
  {
    "url": "blog/index.html",
    "revision": "3526f46f4a315051041b382235755315"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "d982a6763d05815c592a890c99a94057"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1acc50ecb4c489501d26b7e4a546978d"
  },
  {
    "url": "books/index.html",
    "revision": "46d0711c394f852a7a7a563b0be68598"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "f22c8dd7c5cd8ee6a4ff2f795a065cf9"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "977774a4331fef8f3776f2e6b159ff0d"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "2a90173e9a5fd1d1ffd7342522bd8e5d"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "fe1e5ac9c01a7b4fbcfafc6556cca099"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "6ff61f864a51c8c2bc20be230364f2a2"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "6f621c59b33ee0efcace1c6a44286115"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "6d87141e26fc04a79fd22347754a7fe3"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "7f4519d1728aced70a243a33ef652f07"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "ae2ec5a7cfb1116af799ae42d8cef5f7"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "7dec2397aebc0d0ccf080c5334a4ac83"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "acf2f31639d2cce729c5213e55147faa"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "eb7450c374fcb82130319d8ef81cad5a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "1e3cdeed1d32135c492e329bef8f2ba1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "23f432d1b80b316516a95a515ff0993f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "0e5bb1323aa3279bc9ced06eb3b6aa8d"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "607b0102bd6d6e17d10776a4fe8e4bd1"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "7bad329577d74182999e7038175047bc"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "ccaa700689236d69ab8c114b7bbcf48b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "ede2a47b4482845a27ade8cdeb881bab"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "3e9d32fce8f8842cb9345b0691d60b5f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "092895914ced69c6f8820a4fc19aaaf9"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "e5279092d7cc467f26e06f8c4138ba0e"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "b93af6c99733d732cccc0ffb6b48d125"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "a7a5c683cd963972686707c6664d7ebe"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "2a18d7d42eb97d7ab734bcfc11a6ce15"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "07d043c511b2063c41f45bccd0c6a39d"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "0e7b4279cd129af2223ac4d4f1aabfbf"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "f5e3d6ae6633e7bd1caf351d0299172d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "62d1c4ee32be93f11b2031e751628cbd"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "b769523e38d71d4ca835724c47e84318"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d73c35c4ced744389341ab1c603b9152"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "5b1a00457331ed584479f3c00c191878"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "39f4d6acd39c51b67c9fa40e61399fc0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "07149111ceab2f46af59a755b4d3d0eb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "bb92d743fbdeac39ef13f9b0deb23c80"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "db240f72062437b2dd53d4d32fde4d15"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "537b4639b60d36d19742b3095c982ffb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "afb1d8a95068ff48bae4abbf4856b907"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "b71e59ecfda388ae6dbe026394778cde"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "dcc66e2dc0e2522dd7edd6ba16e2a72e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "815593db752343a26c2eedae64a87617"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "05a8ec7a75b1db97bac72cac06f943f7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "9ef3b19d9a8a3ed0f3691145ee802a17"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "9f7b0e3a4c7ae38f9f525ef11cbab930"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "39e2eee4a8c827d70065354fb1351446"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "98336068a7e98513fee853fb7c527c98"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "12063f7b2ef4909329b60ba812fb47ec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "e45e8209e9b598770e3ae1aa13f12e7c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "c678e668273259836b4b7150adba49b7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "9835b2cd75d3e70a955fffaffbe74f99"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "0b78fee133f8ce66c54b04f9822e4cc1"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "a292188444a84ddd3df29bc3eb00cbbc"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "d664b17299067f2afe49fa15acac220a"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "432d622c674ab0eb8c9f0c26369d9e47"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "9de2414e245b732a23f9ad960de7c246"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "6c7806264d8969024234fbf5822b667e"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b262ccf36248998d2486168072f7a86a"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "6c2863799bcdf745a77360a5a9119486"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "05fa2efdb3aaec9057ea4ee207a6474e"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "e0b9ec4f3676c763894b2d94df896c5d"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "44a86403b44b56db94cb0be634a46f81"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "568ed60d790d0276709c07238b683cec"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "30864b91985484a53121d195ff9c78cb"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "6d00406b1cb6d9b89e5e50b55c97f209"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "b7e03b6287fbf54f4b70abdcdd6c717a"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "024b919c879ee20b1fe84361579bc2fd"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "76d8c9c59b8f444f815ab008c69deac3"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "d0bbe99aa8daa655aa2a9866c2ee95c5"
  },
  {
    "url": "categories/database/index.html",
    "revision": "68e7c125d6e79edf8d257ef27948b392"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "9a48fd16d1f72c1aabfc17f524dab47c"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "579c1512bb33304317c2193992cda03f"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "5ab875c32a4c9fc4f7b779519c0e3979"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "64447e301e0ea20b52bc392795d81fd4"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "0cca15abe66fe9f75fdb1e00bda294b9"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "2c76403ff1c4448786dee68e5e73418d"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "d9700066c8198f47d57e38ffac9b290c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "79aedddcbb2e7baf75d7de46c32c14c5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "28c5b95bbc8f273c99eb4a7d6751736f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "216b47e24a09f17c19d6ec60757a8b4d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "2301f7ef3776738af21fbad9adbc3a08"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "7542f5ce83ce6ed22e8564d19f2874bc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "cbd3c30716a0d2764c655c6e2d2e1a3a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "b64a2aced86f5cecef9f18048153160e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "9fcee89a1e0af899df2414e8c5bf8617"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "7802a3c62fcb6770beb16229c9f93950"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "3c6444111e23ff055f080e1e6694f1f0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "a456ca7e9f10da5af51efc80c6c82cd4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "3d03f268a33588c40938d73fac288688"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "78ad2f1b06b2d5dc459312fe13833201"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "b587780144faf6a4a3d0b581d17fd0d4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "49e8ca1a016de4e7033a0bd86cfd84fd"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "302fda43f4f831986eabc32c5f70da02"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "cd059667cfd1397235389a148dc6340c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "15d374cca216e76b3a354e99c450623d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "4202a2b75407ed5661a22f8b0a712d98"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "90732a0c8cf830b379421267b4bac553"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "d0daa1638980cf7fb6eaa3479f05f60c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "780dd217145748d636bd947c49b1fd77"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "a5fd49e35ae3f8f18eca624567692858"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "d9e532209baf9c4d694f369ac2d5a09f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "e6005db2969c5c849e6cbbc462982759"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "a88ce8cb8ceffddc0b2d06a9708f3c82"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "d90344c86269ab9d0de93d8482104b7c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "7171c767c4c08ff9f030e532c7a1e70b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "c4d50f4630a38313f4ba85d8db42ed43"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "e3203a83f551135a3fd71f4df66fb7f6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "0c0f66d5df7486d0e110ac763a6eebae"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "63b3c0dd5b1e3223a480008a6b797650"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "e881ec87a1e756442ebe04bc9d0a9226"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "b60da5edd145e66b27cfae80924b4d7e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "d09f978e8313573c5729232b92d92322"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "2a7f0dd34af57c50157d90ad4768f259"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "70261e6273edcfab93d830b6063537df"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "2c9259945b817166904e5c117ccb5e8d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "daf75a05680d12c54b8f7fec8f7ce5f9"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "a6e5d5c27180564f1c76a82bfa9aaf6c"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "b26638e68b12ce9416193b27de426b0d"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "697697a5a8c8958b13c30bba0db9c90d"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "ef3c015f56c1b95d227eb19f43a1d705"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "b2ef1ea7c108cd12e3ce1443d533aaae"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "b78e6e454514b9ef1919e15a8d99ccf8"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "748cbd4a1d20263bf492fa08b2aa96a1"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "09212fe805ab5de19e95691e873c8196"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "46542328b19a9670d4b7d92cb1eb5498"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "503406a91718238d5db71d226dffd830"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "c5441d668af1673778adb04457a43308"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "2d983fda1812b5f8826d74a4081f69b6"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "0d11624464c18b0c83fe6c9a57424270"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "6c0545cb96da4c2f31b2fef023e623c4"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "c00d3330c82a0846c8e59d5556f44c70"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "3c60e1a6098930d5ee9dcd637b1d27db"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "5e4d189cb5038bc914f86679918d62b8"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "a955735a83a3f7083353d3fa7e1700d0"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "9496cbce632c034c022066ee1d4739e3"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "069cef98ce036bc1aab1a99837daa6d9"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "e0c8629c3238bf5f179f0c720b46ffe2"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "8db26ff9b722c92bbf5a208780e288e0"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "2eda8c7b93045540ddbf75b4c7a8dd17"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "a1560c181fa79377f1a7e17b8a173599"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "310e6234dd534b0052879553c8dc8469"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "c8e6e1e6b2ed20f4090c208fccf5e8cb"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "58f0c3b46dd10812d3da8fd7f894e0de"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "6c9c018cf72277116ef37ff69977539b"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "2c9d693864713ba624b5e56edef97b9e"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "05207cf86b84eec8ec1d2f03c820dc61"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "4250b2e09c554992ad5a7fddcc08c009"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "1a92531f27ac82b6fe08b209ce475763"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "2d0e0719d736838455c0fdfb5fb1c7fa"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "65c107853eee21432859e05569cdf9e4"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "0423585eb30bf9ea4647975f73abd5e2"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "73512a706d0fb9b9381c66d6f0665793"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "54ed168656754991c258492bc34d9334"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "1bb9e395e65cf6c51977eae9e9aa1959"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "9a314ba40fe0ad3540a1185df9a7876a"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "48f856b297ca8c78bf29bedd8e762d02"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "1c7cb812a92628a68d56cd092cae5907"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "0dcd9936f3fe6f9c30ba9e2a8b5182a2"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "41f0c3fd5c94d313f0289ae9cefb7399"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "7113ec888cee476d1b22cbccf267d808"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "3ebe1e32f27b69e8f03925228d4240f6"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "f371d36e5b21967f315f955390e98217"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "bab1918d4b8aac9683e715af8b501120"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "2980b0d89123305cf9977457cb2a50f8"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "04c17deb8d7103d6e42d237056e34e2f"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "980bef98fa49799e1252786978f64c98"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "0b9e9c7226932214b3c81c8eec25aea8"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "3a7f8cc2d3a56e6f5f286630c297c758"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "cf2d5c71a367a0cda0eaa8c81e6ea1e5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "8111de1fef791e1b3fa4794896cd606f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "cc299613d7fe5849c9391e1afdb7543d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "35ade48af92b229a23b3c9d306a349ef"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "d3d407522db9d8183fecb22c95b76ec5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "40c7251fff684582d373c72c19f8ac01"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "d923fac7033a92bf59cde9a5937406ca"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "742f20d8786e1961de90d2c2cfe5aeb5"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "00d49f4f8d6fd7eea5171b65c1e6786e"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "437025b9fe2d76d11f34c62f7e3a5362"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "7a8db5cf89245d4f0142d87042365ba6"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "540d8a0bbb82aeb7d9761f1b8c79511b"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "0dfba5c4016e0878fc9b4a39e59ab4df"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "7d1406b8ce037de3c1cf8ae5fc1a108e"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "6cd0c95311b3f4228dd67b053abe6158"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "f88fea676b0f01f41adf1391f357d448"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "28977ad296568b65dea428e427a25355"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "02dd41b37445b06e096345d8bf8b0397"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "98edfc64bf6da701441faef64bc07444"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "3ed887fe73fa1a7f04ab387c6e1ce497"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "e85a263a4135b997b7be17a49ba833b6"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "021c233abe1f796c0cddb304eb6ac8de"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "af9b25e95e4312c28efe55e7900f9898"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "bc40513feb254122c2c070132b5c912e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "d917aa7bafef473bf7934227d81f10b9"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "42901b95c69ba0f0b03b6ab909f07147"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "d841758ae2085b74b7e8220579c31343"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "e07d4b7cc200bd11f36cfd45840848bd"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "48a339193fec89172d1a8edc019aa770"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "ac9a2997e1c92ccb4b1201714a1f4c14"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "423fff63a54191cf9e92c1c76f21f62f"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "7cf2dfdab8751acabcf07f7e75c3fd0c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "13a60c5b201dd0dd74e4ad2152ded0d4"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "b7abd34051f08ec08f5f645fa6105c67"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "8d9483d8580da98f33a850de59de4a82"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "b05f84219c471785c015c8209020d52e"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "74156bc1860358572987e2b76c9ad220"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "1891bb88ec622066c4ee2e2b9205c0e0"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "8fcb3ecc9ce1d717c5c44602273e40d6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "5dbf322a0c37ae3c813b8615675d50c2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "49dc8d239b88423b3277e5acf9d29a74"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "f8a328f8ae7e79648cc91e743ea3f7c6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "b5f903219d9abf0d925e449783352901"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "28276d72333d1492d9b0d7ebe625f325"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "1c96941fd9a0dd90811f744842dd337a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "e89a9d65160ef89a5819f8badc87c79a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "0086b3fa963e1172081ddfe6565980ef"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "33875dbd5806c5d509d84bd0fa8a1beb"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "381e56f917cbc63e5ba8fb96c8be0b26"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "6a62a570ce86a5741e34468b1431eda0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "1d4c709368672b7c4979c5982ec53814"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "5706079a8e5b98d9421e0ce7117540b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "1e9ec512cc214d2d2d46da6689b3dbaa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "5fea7a1a032a0ff0c4e428acf7d95d81"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "07fdf7377c9fe3dd4516a3c7134cbf61"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "39849e20199e30e33cc7b0a5a53a74c8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "39d214b50bd6884cc3ca3d3b146d3c8c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "1b03321290035a781aa2fce90c6764e4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "aaf1de6100137a1fe739d386194149e7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "1b7cd09ab4d01e6f6490d97997825a22"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "3013a0b4a5d64f40a98d12cf8eb66d8c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "b467336112b96e937438b460b3d46a6f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "61ff75709ab45864fb2053a6ac41d644"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "e6d864a633173d784ed325fef7abe433"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "199908d244882835cca2a47263217d9d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "cb87cde1a69e6a0f1f30819f48208774"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "4d6abe3628af4e6410278f6137c6eb8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "caeefa20af68b277ae20a5745f9aa55f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "f2f09b40c3ccc78bec552c4a595eb08b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "4bb7d26d05fda8c9722da12d97ef5b84"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "036290b3169fcc27a39726793ba4c3a5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "0170ed9ceb9a2d39266a18683354d871"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "58c8b7eeca13335f1fb2c250a4dd756c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "e0fe25d48354419d55baa76594446748"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "1c42651ffaa8d701e8dbca3b4bbd8537"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "167bb64b26510dd7cfecf093c2ac4292"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "82d698a25455fca011ca78589e4310bf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "e024d71920ff2fc413745c35aa3d4220"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "6b1cf054b106c5e8783a5340e5905f79"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "880e5eff4ad1d5f26a3ebe4451fc6fb5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "a9097b25c0bf41a47495430e9441ec92"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "d614d87eabb3dbf1ff4ed72c09e86b00"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "44c889a7202f4f9c30f14ebbaa6b6c8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "d2baa380b3d23a01669d76e913cf60dd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "d9d766c3a51b6c5c331cdcd73fcec216"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "cceafdee559ae1ab2ed4cc2449a3c9cd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "3c92ca50afff6a9cdca8f9b4712a256d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "eb4e29a7f71a588da74cab013457eb86"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "6767e26e70a617a34517a726209d4fdb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "c908e1bfef145c0f08b666662f21245c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "06f645406150f5cf7fd6e237765d9162"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "6eae96b23ec1807b4cd430468ec22ea5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "a60d5aac34046273a442482c9909ea5a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "997082152e136ee945a06cfe63eaee2f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "41f42a16b0cf2fd6d71e2c9856feb756"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "88ae3f9b3243be0ca662c106d83ab7c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "140423cc180f047d30ede07439dacb75"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "7df27521d013b3a803d520b5fa45d2cb"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "c867cd4bb70461ea4f803622e7330632"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "a34751322c40c0f05029c2de0dd53677"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "538b5883ca106a5fefde0a004be6ecbb"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "25520054261638fc2ee2c0a6d13a67db"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "151bed5793926cbd2b4a8b2bdb98ccda"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "8f9b0809b2c884549dc6e1ab9fbb651e"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "e6dd0671b9d1fa2b52e6c786694f6989"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "293403c0d361e2e8d5b497bc0b0226c0"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "c08a08656d205a3797af65e32e6c54d1"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "9e47ed3c7ff56a2e352d7bc3f50caea1"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "6fa948c988ee8f77d06fcb6e8ed06091"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "4d547152c4e19b7bb770e85819782061"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "d7fa3260fe19d38ba5b562abd8a6d004"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "f532f78cfb53ffbf5bd441fae647e17c"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "de0774d1ff381384c74a3bc45669ef39"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "bbb29af9e98807df3c5327b39d2e07d9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "6455cc5807a3aacf40652bd3a50308af"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "dabc9604da6b259de7d37f696ec97c87"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "8d6b4759bdcba94cb51b979a1ac871bf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "c4dcdff7dbaebd8df31f047b876c2171"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "72ff84ea2128df4f326e88cdbcdff7fd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "0701b07054b9ace7d906bb5539e292a9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "3760ba8684cafe2ba347cca8989a7387"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "754d0a171dc3c22cc12af51e2ce92d94"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "b7e7e3242a991287668781d66ad9bdcd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "aaddeffa7e4f6cb28ebd2a984f20c396"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "8d295b206cfec460b42be4b7d8848a87"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "7fcddbdcfbd40cf22c874561e0834d90"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "ff8fdda6d070eb301979dad15b920c20"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "921f92c823073b07a32cbfe4d64a2065"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "fde5a41756368b2f3139a18e9616b089"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "fb8115e06f951c7374a4f283f2ac659f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "8842c0dcb835e24603d2ea0e01fc4fc7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "a9e03a80d8e1b43d99d4a1ead01f8f3a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "ac2e219b09746c501cd48fb6fc03549e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "1280038320698aa7efe7e6ba43060cc4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "6cec7bd143c14e03684e43ca87c975d1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "d55e964d98ce0d3196d75147cdb69701"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "7d8ec60cf646644f475e6e91b4563c73"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "965e56b2bef5540d193036ffe94ec5c8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "7e5aae474e96eb5a3533952d5eaf7ff3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "dc907568b4e39454146ff57daab7f66e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "2ca42b5ecc43eb17aaebaebd569ded0b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "c85d3fa0daf6e82412d64220c292d79e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "150f4aa23b4273750d8fc4b8d1c0cac1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "f472f13397a37a29a596cecd9e699885"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "914b971b882c0a71ddb8807a28151b6d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "a28802fd5e0c1baeabb7d8cd291c3337"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "0f0de6b78ba10b88973ff175aefa6b0a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "62d55050f7d4ada796519498e20f6fd4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "5c4b2c52c8d9cf4d0fe09362eb8cb1d0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "c7320b6f0d40c8295251e20074d2207e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "2524faca8f2a108d0a06628d8a501f11"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "aa3848bafee506ccfada9a0c7e088018"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "dac5b6fcb1abc83776191fa83e3ddf8c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "5147c578539947d01f3297e15d51cb53"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "7cc2519d19f4d956066757591d536573"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "2c5d7a271add12bd3c5f4e953de1a351"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "7f1c11889d5ab1691d06d2489e949e1f"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "fc6b57449318c41bf24ccf654cbe39bb"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "88697ad78bda0bdac1f316d5f40d39f8"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "c5d506d8d29807f26749eea8c43e04ef"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "f39fae3fb2b54f485d5b63d3e133044b"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "1134a20bc3c2d2223bd6b5b45a847044"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "d48d2108f6f8d92a7b2d83adccd48806"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "6644ba8eaf3b173821b0bdc306e3020a"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "1ae46e32686faa14ec70ab585b941c5b"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "438f7a405f78f48968e1122e782baf7d"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "f56a04cd088da9e31a2b82fa84ab2f64"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "e76e20c6d5d367c4d5a4d9bb27773d0a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "8df236bbb5a9c2e09273ddf2d9a12be8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "40b2328df28cc02f617528286b1c8b37"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "18b51a90d91d2e6384e6ae49d97b062b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "6aef754805ea8395b59244981794a56f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "ddf7e56bb9fe3cdba64e59d449febb00"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "73886e47ae0f91a85df8fd7010409452"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "82e9c2b5a39e21002ff7e0202a4dbfeb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "4663418c366ffdf3f62117c7668bdd89"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "4c19e20d757b21e28539461e1e08b1d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "5a40c5f40c79c2296f0ab7ed10b06ed0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "aafe658e69cf0533fe97f9a47c2601fe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "cdac77d83e44148c74a9d969da3f595a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "0cece67cd9770e6fbd16a6b43b93b90c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "20f501f3a12819dd3983933c89c193ca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "45278ef4717bd5d650129ed0dbb06c42"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "fb24e2ebeea43ec46d6fd58ac6df32c7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "b7d637a87b9828d4e33470290a356216"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "9bb61d7baa349a6991501bbdf9315cd9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "2e2f0212cc4048600bfc8bb6eb32eb1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "ee3717bc5225b2d7be5920b2d2be2ae8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "9d666f0bd81c2963ee94d9554fc6b704"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "45d3433217983b5ac07849d1845a0938"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "b42b8a74ec2a9f62f17b306ac20421d0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "e8df03669e71452ed81c8169a02145c4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "73e0f197d1e5271b1846693f994715a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "5bb0c76c479cda1291233e1298101215"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "f44778884b01eb958da8c9cb1210689e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "3cc312077aee819fe65e7d38ff633133"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "c2a457cf56031b9043d364c5e2f27838"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "6c78b5a8d0662e371996f1b0b3b561c3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "e638e388ac846f9ae487858084105541"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "0db042936659352c4ea9c7627920b863"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "86d0543e864ba0e1a074f457d989046d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "c9704bc44982a6ec9d3ff8bf6e5a4c1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "941b7981d2fb1273dcd2a645ca6b2bd3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "a3ea83f80e7ae41611fe80e60dcc540c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "5dbc78314732799fc10e5e9566bf9726"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "c59726a9f0e372d3e5566be54f7127d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "d8f00b0792038e76ba35c4c3f24fc0d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "8de3798b07b8baa27e63a384a573f309"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "adc2d388526faa2941f002af332f8b8e"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "2c43b1fdb14b2888903fd26b782dc5de"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "7155383a1e0900b98a332bd1755434cc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "79bfed2bfb4a59cc7fb452caf98a6402"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "38ed4faa1a1c90ddc01f433617b5dabe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "489fd9668a7b66d58eda7b33c2a4d09b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "efab1ffcadbdb04524de77eea8c7d370"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "fdbfc71106a78d55d38c805829b497a5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "39dbc4b6c52893f89f257676ea915e9c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "a898678a140e34bace0d45a9524d980c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "09f436601c6cf3e3fa4da7cc75ab32d0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "c7b51a1067df0af82754b38f8bade78f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "b9afa1e110ce907f6d029db89900f045"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "69c28cac0a28dbcd934d11d69976b4ab"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "a624e181f11c88e50982b5d3b7b232a9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "66740fbbbce9e44c653ad7c804f16afd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "b4ac29312bffdaf86fbcebbfa4df14f5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "8bd2e619f8b91ca675e85d19c7f46f0f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "b0a54ab7738254613caf91880372dcce"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "3059c86ea4bd8b18bd19a8288723d557"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "e9559da8a4113738547935437d4c444b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "57509e88707f6ccabcac0d8a381023a7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "4f313e06a48376ad51e8df392fa6c9c9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "21e59d63addef11fde65b16a687b4f35"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "6acede7e745c4e0308aa0ab1ff8314b9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "cb1a0bbb7511dcf3db8ba9b8bb87abc8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "1369df321648a6b41b1991dcffb6cd04"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "37c09ce2c12f89c8e5984630a49e3b07"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "2f6f4e951aaa50aaddb06a31ba3f87ba"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "ef5a564b84bdd47e62e431a99bc2743f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "c1f7428456a34ea2475f4387189936d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "6344adbd3d9503b26f5aa7450fd6f5c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "34260b5ee5a9c9874eac8785c9318d3f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "da0af9be92e38af1981f0b57f00ff107"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "8c6e31cf4b55981c9be44d39cf6d7923"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "4176f3a3c4dbc4840abbfbb257e70d8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "53b52cd93733503b07705fd235591894"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "f345f40438c654e8a6aeb88fa923a726"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "5f183e545e28ace1d2dc416baaa545d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "3df25a790179656dff568956e0c0901d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "6d3d844c1731a028c5ec5b62bcc9cfa1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "47b4790421a01dc9b4a1400bdef55c94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "aab9eda83d09b4c0c07370f251d866c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "949d7cd7be9d770ca3e8c1a9650b5009"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "efbd4c63fc31551d2731cb50523d6ec1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "19e907d3184dbae0d333196134890c22"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "b3f7b87d929d6ed259ad42d616c186b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "42bb49b80be33d182b66a816ce011628"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "8107a7aa9ce928349879fc615e87d71c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "f3e574d7dedecc7fdd1f18ebf721063b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "57a6b10b59e1e1fa71f0d09966ff6a1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "1e423689a72785d9736a7296c583466c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "3322a6df599347d90a752c9fbcd12f23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "b3488d262ab4310b5f6800d72c7e0b52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "291d873e11f7fb03d254861a56172dd5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "f6f381d0dd9c58764bcba648e00ea7ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "401edcc8b3d788f0257c694bfe30da9b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "ae7568a0a38dfe5f3d4c3773fc9fc5de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "8a3068dc3e751ea4aac8dd569c91aa42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "1e3a2a74ee21c39b3bd9cccbd6430a4a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "5b989f9555bd9e3044e5f764cce391d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "6f272d5dafcc1ca997f965f1c19bec13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "166ba27c369d2de4ca16f738218334f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "8dac3c2eac0e0ea7968f7ec2e687c2f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "acde4dd77daaa7c30d175fb797972c7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "6d388c2688a830ded01836adcc7feee6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "ac132af97d728840b705e39a1ad5ac54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "f62ac59b673d231f16c6f83fbf75f718"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "58188c6722904209f76e7729116adf58"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "655e6a09bf13bf0df920f2fae0d7a6ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "ef107944994875d3f7bca05152655e1a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "eece170b0b0d6654413655d58ac2872b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "f9b44f79ca5e5c1ea862875c56b8620a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "4b9111d0d368192ec54df0d47c473591"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "92100c4d3493b057370f4e24efc2c260"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "f2d61a8122e692af133267a46ec96ba7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "1fc91e781ccc585752ad95c04aa5d8a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "5e17add8fd9024feea3fa4bcc64ffaad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "5f11463d269a9f79b75c8c88ec0ba816"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "ac2f01c934a8b896f9e332727fc67f3c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "53bba3119e5d982cb97f5c4bebaec61a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "5b75b98553a6f7cd91cd3abaa7c8c470"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "d0e9f41cfd7ec7888c0f28864757901c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "b80b2dec891b71c904acc00a4694e4e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "6024eaf417a2067c390e9fe600c52e5f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "43c3e34d726e37f5a2c977d73f2d045d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "9aa0c0bbd1887a1f67cfa0c2e2fb225e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "77dceec4158ac11aa216aa677e0c2866"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "71587d15dc9da73b855fa8f9ed53524a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "1d761cb12f9aedd5b192a5a75738441c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "863ccb038319cae592bd8477c14ce618"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "3561ff97b1e68a9234d8a3fa37b2ee61"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "235020a3d98468279ed32890b487edb9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "77d047f6c4aa0b561200fecd4604bbdb"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "9e99fe2a8ab3f27f25f5ac463141b45a"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "9fb56e5a85d4415620c63337f2114192"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "e8166eb1e7f3a6af3309962749c51bc5"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "807ac23dbd86fdf212c3918040d47043"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "8018463a88782ade5722ba5077a6ac5d"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "34938e491341ca5465115faf0c0d4f49"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "b58ea206d21cae31ddc864f394207eb1"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "b5d59c3bf8bbe6c8e5f29dc83e13ec82"
  },
  {
    "url": "categories/index.html",
    "revision": "32f92388a6f3e1685cd918f5d4ea1034"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "ea20a7ad4383936905af333111cdcdc2"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "3a02ddc9ac228b8577eb36de8ddfb104"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "4255e3707bdbf64db889a07ecc621022"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "7a73d8a88bc63c9454f4dccab7bd36f0"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "b9d1e020afd06440d5d9b1e3f21c9fb3"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "53ae71a4cf1c3447f3c3f702ffc46cdc"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "d8533a8a4f0d905f6f72c4a9ca3516b3"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "d4e979941d89652aaefec74fe67490d1"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "3c8e888673870ac56a6cca8e7ae0f2e7"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "a09ad2201f1138f5ada9204df5eaac0a"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "861d0707d454a31bf6e36d742518c3bd"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "5a5a4ece0f5a55a80ecea4f231f5fb38"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "9a1326fa9c5011e787667c21eedb1122"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "a589cdea959933af137b73a852633844"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "d57eaeaec22d16a8f4d81bd7582b6a6d"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "fa23bf668908989840de95b89be1ab96"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "f38b1d6b6a971b9c676fa78ff4fa8bcd"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "f3967bb1a12cf349557fad2a85643c13"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "4636aa426b4ed9498caa1d2b458deb37"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "22724fed5337d9604c2abed78f5ad11f"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "5abbc051b34562957133a7ba107e6830"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "97d9ca0824dbc9e99e1efbbc828f216c"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "5ebd496c3fb711b6c4fa7b34bf575611"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "af77312acd129c4f904dca251fc496a0"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "c625799f923bb7315189b206a09088ee"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "959c46f5fc6cb3abf1f808be33c5ec7f"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "998892298b38648c85a753ac55002fa0"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "eb31e6c30d0d66bbc1f19d694790cc9e"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "74e700384af03a570eb56cc81f7e6e0d"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "50c0a45ed01570b43bcb2c75cd8993f6"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "081b3aae58cb2c1b90edb7f403358271"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "9e7028c2330857f9b59c95a0f5232329"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "0879e85ff15d07deb7c0ddc2b6708194"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "df96133a77708ca8a611c9798c9fd259"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "bbfd12574a5ce6d31e64051cfe85f5d3"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "d4e34f87e364bd96e871b8cf3e060a59"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "99e2067796f169cb240576cd56eafad2"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "68eb84788359932e31a8bfc5cd96d771"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "cb9d7d196196c457e4455b7864ab8662"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "d7071af510b92792f406a352c22f5a20"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e7f79259c9fcf71569199c6fdf1d4352"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "46540698e4d88e1dde84a12fa2a5a00c"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "93cba8c8501e8c2d2824c59f4b16034a"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "166f0a7b46e1a062799f71d475b664ee"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "e2b9cdf2875272e4141884af2a09a4c1"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "943457793b8716e9c1182ec0502bdcb9"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "4762a3bd92767eb85eeaeb79d28acc34"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "755272aa79bd6f218770347d3f03320e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "c5972d02590b596b2ad460e25d8212e7"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "0ab0c93a190080e23ca916a998fb070f"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "fbdc100e4c20b95326dc3801402ccab5"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "d231c068b6c710ea24d013710c40b0b8"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "9a82d9a4e8ea8c3f2dc73f2512829b92"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "bee857cdb866d54d26e5ce1210045eae"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "0246d31ffc57996ebd9f6bbb9a96859f"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "0fd7e7d15daf8c4955866e60918c4837"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "a57612bf33293ef2cc53316d101e8bc0"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "8e9ac5b20aeba0d805d90b9542edc984"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "3ad4050ce941582552a66b06d97308c3"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "dcc0caf76f0aec4c0f1a106d838f55dd"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "344897a8ba16a50d413440cf0df02645"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "d766a63dbedc053aed032157f32ee801"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "b81709dc56fcec418221fa1ab85315e2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "0af0b94fa16f924f4ca0d4c118dd4f95"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "11810363a09bcd886df378d7a16258bb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "83876cf8ffe12358fe16fe4c28c48cf9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "a0cacd7f0bb3d2da04180abe460a2a34"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "c942bd09dd051573a6ff37ecf74cd84a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "1d74bf855f20eb6405d84f1fe8d889ca"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "55bc93c3d3a031386e873f863eb8c399"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "2c039af09386da50da65070c6fe5b151"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "a48e096aa13554a2a764a094246330b4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "301823a6f355627998a17d43e671b315"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "f1368637616f110548790ff01f270f0f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "79368a6a4d74f82b2a174789b25d88b8"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "8aaa7e26235a0f36d0300743b68f4ca8"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "4f8e2457588f41f17304b97152af0af6"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "6b8756c2b915ef6f772b311566815f5c"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "ed98b3be1aa6274fcddeb93cd3cfc582"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "9534ac8eeb77b88ba54e90eb3f94c2fd"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "d40d268c42509f4c21aa2796d0810c9f"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "35a3bab6781474c64ea83b0a95ce4a4d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "060452771ba728e1bcda5e4d394dc00d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "fabb9d4f92ec11f51c48c9aa9caa21a8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "0ce520aadbf278b1b1b647903e1d37c7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "af0ac0c5daa5030b4693261ddd5f5f58"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "7d9f6ffd12c4cee2e291d5e87e0e9330"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "24b2c90db962fe717d548f63af5e88c9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "904131d002a0a55abe0bd5185dc26621"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "4d7bf0c34e7b9e9f02b23fe13cfe6936"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "d26167f68f785b905033d4e18d0efbbb"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "b5921546e413996247b4b6d62471a189"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "344c4706f70b76d78ee1e638122a0df8"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "03c0d51e7c29123cdd4dd30af34f5e2e"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "e35fce187097eadafef3122d10bca278"
  },
  {
    "url": "categories/java/index.html",
    "revision": "99e3c2be70849f1a0ee087897a17c570"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "0c8061b67431a3fc24b21d5da2fdb921"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "db67f690265501e2229361561cbace16"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "33bf0cc5d9b0a6679fe13ca8f59254a5"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "a58a4c3a7427419d9fc130c6b8ffe41a"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "04aeaecfdbfab28a0d0ec2a6f08fedb2"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "97144d89f6307806a328e2c57a1d9488"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "2d796f28094e688bcb1456d261a490c2"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "f0543f4874ab9bc956e8ae050e6b2583"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "4f5520dd4081eb680c8de41d1a9701f9"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "c25cdb423dbbab1d71973bb055f5367f"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "9f430308f6fa927c41fc900605365972"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "4ebf86b329ee49b820336a19ac652517"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "7d34cec4c577c5b59f2a1810a53cdf27"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "fa7acb529f89fd39e74b74c15c736ca6"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "cf8e7cee14d8e675a63edfb994a53769"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "9b382e32063ad517b838f0f5a44cae15"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c417872de694efed39cd7730f53c4272"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "6b401b501545b238c5cd3abf7746ea15"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "e63143832451d9984b7edc5e4b5bd292"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "0377284169b02bd2b76180a2c3e52bf0"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "c0db1df17a77e1836f889736113a6b99"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "ca8eb95d71f0121de89d29d6f280c762"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "7cadb380cd2f1b4f9d32b4bb75c7fc7f"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "52288381ec48f2dcdf50218f70131b71"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "968e79f75aa2f90766cd1fd30e5e85a6"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "85d5e4ac6ecc107d12d04af9587e448e"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "f36b600a3f91bbbae5ad35e9f5e2df2f"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "cfc32273bd1797fe74f061e968047ed9"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "866f0ee24164f4cec9570f15b27358c5"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "c180eb920dfed1f181c5693fb4e158f2"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "9aef49d69c87d6927a3d0a68642127e4"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "6b008ddb289f3f240c28ed6f2b35d292"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "705dcadc1c4ee6063ad7fcd477c83585"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "927edf510b95b16b4241d25dac5de80d"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "bf89ce05c835677aece141217aee39f9"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "2da4a9e5cde7c9437ec460aab409de65"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "c1149cb89e3bf456a86c0c3d9d2a7793"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "5817a277956ee4ef67262a8682769988"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "f416444cfb51cfa8de6607b204386c19"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "a56da0e0f9d4a2ecbef6361aaef0f7ee"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "e8ef6f71e06f236f2a433f7566ab7cbc"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "014fdcfebce18e4e074af3591ed00572"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "794e49dc275d6dff98b1ba67deb0368a"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b204260c78c6b0aea33da635350941cb"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "90342aee4940c48728a4919fc891f8ac"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "548e82077009e817ed1537751ce7693d"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "4d8a54c0950b9cde970da5b9543e3ccd"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "99918fdd658e17e915cde85cdf161a6d"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "804cb432c948725ff7096d6034f446e8"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "b400f7f5ed7d4009bb373edce1553673"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "9f59831514e43de0d35532ec8b1aa44d"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "4a7db6ca102035620dd2a3b82e08451a"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "346526501b2b893b9fb2d62ad3c6e4fd"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "124957cf1daad55cd1a4f058954200f8"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "8859f2caaa85bdcd404df80336b4b3c6"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "3726deade6104253fa9f25d2e3c67b94"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "24c4a2de3764fcfbd919bae261bce0d4"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "64ded2a43b9acb625bb6a2c155d474aa"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "21f410b6d62431986f95cb7595686321"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "5e4d7f8aee2904d354e3e477df19c513"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "192e645889cea676f8ddb9d190d022e0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "51030521c2ac82c754aa078cd7412907"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "bffe34d4b148e01518c4156ab9ece81f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "8aa836202f0ecd94063ac926db3fc63c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "f3c6916620cbba09e3d1b51bda1a944c"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "c01dba18e7061633efdddb1385e2ea15"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "15a5388ab9c46838e014e73ad69798f9"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "ac1834dc11878e5b1e59aa28a7522db5"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "7276a951bdfc09b906f4f53fd6a16ba2"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "40cf16438427c450624bc0d28e6fbed1"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "5f1f0eb4cdccedcd69065788a97aa10e"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "dfce4064ae708420b493add391018621"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "dd03d2d03ab6337957a890bce9fe75de"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "5009d43e0f3dd6106fc81b7ec82e243c"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "bed97e98643b3df4fcfacdd546431a3f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "80d1e288c78ced28245f4096db99efd8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "0242ee78132d7515d8afae911b5286c6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "6f532b999c494bf1c96f12d97ef06836"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "a01c5c23ed02c525ace9e9a970cef281"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "c323e7518618a00ea0422c0bc7cde9c0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "1162e79677e9d107bd28518e081f585b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "3e700991068c93fbf2bf7181b244a150"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "46605e9d276042cee66ad5aa2c6727af"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "0b08df7c102b174b4f41f73ed6914877"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "df30027e5151e4ce2077c0822b8e3b90"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "d14a8f39e1b8fe0061ddc9bb111e2bf5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "4980c3495dce6569c9c8c2db4aca5e4c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "f22179893d57707a5adee7c0302ad24e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "81a95468ba4e4ddc70f8e8f167c3c230"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "6542884a145967e507546845074d5d1f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "fbb4f6ebc97e60fe3e6a76a70d75b843"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "ba60dc051f6ce684aaa7561eed313574"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "e5e5ee4f69b592886a81cd9c52b6dc57"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "297fcb9409b870ad06794c089b3f6f92"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "22f68c159a1fedee47264b49f31fa1ac"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "90d7da3040e111f669e52314684056ac"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "e633bdfec4afbb5b2a3b4e81f3156e9d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "73351586b73a4afd8e9e63b73f45645c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "8f563018cc7400a3e015a7e285f09458"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "5abac11bd8804a8e3cbcffa4f942d97c"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "149a16baf0e68e0e6af050e2a617969c"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "bece970010aed560411e92bfda6d9260"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "22e122cdf9f54637f62069c5f6bc3ed6"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "6a9c896e702dcec6ca7673c9ca58db89"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "027bbc5ddf4962fbad8116890470a972"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "b7e13d90f3362f2a398ed955499bf779"
  },
  {
    "url": "categories/os/index.html",
    "revision": "d6a919e563673fd9c8d9177d26f98ce7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "6e125a66406896655ed88930c64f3d9f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "5baa485bb3d61ae7e94f093050bee311"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "a8fc36d9c1e747b7dfb3fa6dcf252a68"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "f37d545928b834fa4c64d62b990c059b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "e3718811ec476fed99c1366e045b862d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "544e45e2266d7b27cb9b9137bc3a9e2e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "c364bf64dff9499f246d7c4c7ac3e58a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "ceb96380721463cac07d051d279562eb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "c2410efc1d2fda472891109d255fef94"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "bb36461224317ebb17899bf58062b47e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "08c55909d6f7a82eb352766ff11ac1be"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "77fa4be2aad3efa07344d30d0ed5b854"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "8019bc4e5324edf55cd4b816fdbeb689"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "65b67bb7f415ee2aa51676d868d0044c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "475dbb38812f4363e602c60ab9c57c24"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "ad101eabee0fe93041a37fa2c13d62db"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "40a2dfa57da6d2d02fccf39a8295f6fe"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "38beb41d6694861921828f41c513faaf"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "5d4c301fced6d9f9055723517c4c982f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "1f51d60baf85acae7f9fea19f987a1fd"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "ad02a2109615e794a23da1fcf1b58bdc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "cdbec66ca174ca6f2fd4218686029868"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "26a29b04bc4861fb5d25f5288e3ae2c4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "6a77c8c4b993c7b430f8a4935d5491a7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "2282d6a5d92930cca4e9c610a7c19231"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "4d83422b5d57c2ee779c7d45bd675772"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "57e5b847a44073df83940b97d8d277a9"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "499aa5fda78d3fe0413e89b3d71dfdb1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "78b83d97e173665d8c3fb507f32b4f63"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "6dab4b3f24d7ded7690ec0b0c3cc6532"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "b3859a5d9e8c94cbaac30482cef8369d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "01cbfe61b30c1ed3bd3c087958b6e668"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "f5fb1fa40c1446b67ff621c8fd64570b"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "71fedfe23f6a92a04e3298c42272a077"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "9ffe90a476c9262bfb75178315e39610"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "58664fd935a0f4f667ea7f143525e54c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "677141a1d4f95ec51b25076d8dfd5fae"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "d1211922626eff40fdb4d24b03c943a4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "20d9ff06ee0e3294e653891c86f926ab"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "078d01a96db74da5f97c300f18e4d825"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "a263080775f7cb3a437b0d9730870744"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "a0eb058acbe9d76c596ccc06defc9d64"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "151d53eb8dbc36f93d3aff1f96c63e41"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "2a511aa2e3e2d61ad10dbd95fee9e0ce"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "adef65bb97c06c417dc7cb7391403cc9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "01e544a38ff1c5a83ab7efd15d6eeff5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "e0b6b001f312c8e3b4f34d25b6f59762"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "251a61d84147a43e0223ce6820efdc20"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "921e803e4686162e472d562584e9776b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "4abd2887ab80b9c36ceca78770f8fff2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "15f68d956dd718fc734b4a5128983a73"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "a857003bfd85c5fec92e3f38dcb29474"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "622284d0b032a93df3ef9b391d6c7422"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "244dfcbedf72513334718a428ac2de2a"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "e14f5dcc2e822796e54051c547f1af78"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "05a2d2a41bc066270fbc532b8035731c"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "86d3e4500e171fd8c77feffefb175049"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "054ea9f6efd42d4af24b45d468cc92f4"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "48a67d60c61eebd5b2ebccefe13d6b21"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "480cc6605595c253d3660248240b8f35"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "dfcefad27e5fc9d32eafa096d3eb39be"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "563a5b461503107037649c9bbb2c635b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "effd26eda57455c467cb54464491a2bc"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "12ff84531cdf8ca79a90d19d1bee6c6b"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "e27118fb0749c145f4decc5cce24a2b9"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "3b1a411167d395f5c71d59cdc9f29e8d"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "4ff708dcf0a2b51aaea23d59ca37da78"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "dac8d40bb5353efd581faf2b04fe659d"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "42103f76608644fd936c831a9f1e1b90"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "053a5bc5b9b7ae0a5109d042303c3b6c"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "e300708c310e722582593ea3a2ab0a22"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "0fff9d2ddef43962c53488dc9874103d"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "51514aab191f64ce1ff1d1166d90aedf"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "9d930fbf2406d77fdc838463b7e4aaec"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ab73d23019252242ca7c1f30ff8bc7b1"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "e46d9b60b4bab530b4bd38b76e5d0067"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "02aa31dfefd237d23de004f0f5c37d67"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "23412fc952154ea5d7aa025195213726"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "c95f1967c46a47aa6353627d580ca3af"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "3d878c8a83df1001073b7dc8afc523f5"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "c068926c465e4e678597bcc36a6cd98c"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "73de9e28282da41cb215e536f7256356"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "4440cb61b2a5574b975fae7985734b5d"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "6543be91b131f2de8a2f123dca0a5dc7"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "9405899570ba3b3fd1baa8466c30ebc6"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "e9f6da45917e1b774d0b288161dc0803"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "6e2c897f4296a9ce2537080b7c543e15"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "be5a0821f256641c6ba6ff1fbbce76db"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "18bda750def6ed3862be489a2cbda6ef"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "3d18b165f9815e21c109ff14bc9d08c1"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "09390b1f8dab37a481d97503dcf9b78f"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "8c9c3f38c40bde15b3fc72b3165fab62"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "ca3d947aa89d04a2c25d7f2381a0df2e"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "3cb71a4951d8448f95c85a3bbd162034"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "d58bf52d23bd44adebcd6290c7c82412"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "18ff2de64580e7bd83f48461dd0cd5a1"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "ef491076da15d5dfc78f17f086c09e7e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "9834fb689d010342a7a9a7661711c127"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "45a422746d87245c29d35371783f5f17"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "5347e04a9adb8dbe03df34549886c18e"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "f091ec605e63cf8dd7f7135630ac6e0a"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "ff5c335f3c8e4896482a78dfb2468af9"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "75bc4d3c30e50989ffe5d29d1df8529c"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "900745c0f10cafcba29134602ad29445"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "1024fc2a81c1eba698bf7f44b7159e4b"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ae2b59fb4a74ac6153eec5703f9f0722"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "bea0ae0874589155c23a659a70121552"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "82c0a9c54d979fa2c684a79e3950a3f7"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "6f55ae62408a5720587a62cb358523c9"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "6c53d8abb796aa2a82bc797619201668"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "bd3e3c19ca6d418a141712e29af28833"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "f5aa380470659e78d7e101a4e7154ae8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "4ead0455a17ecaa648669460253c0afb"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "bc8a53fd80f555a2af302a4d3ccb8881"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "7252da8b949594915dd43e6e00efdaab"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "a42dc70eb9deeae5979574fc687f4905"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "38870ae4ae5d544e5364eaffd907bb4d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "a661617b13a68594cb763d43b43f5839"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "a992fac6c2cf6f190bd510aee1fdf45a"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "4f3234b89ed0036fd658f10e8d71544e"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "ee710055d672c20e47baacd0e1a9788d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "f3a2e0e360b97f5284458ff1efac0bc1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "de4621a85ad2002fecf3e0a766913099"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "7d25273661c50b1820caf0137749fbee"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "fcb3846559c66183272e4acc3e40448f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "5d83f84b1efef64eab8fe357de691900"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "851ed282acea12bf50e9412e88c1aa7d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "572ef5dd812d1d7189c1f9c09bd9878a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "be0e93a90a1bb6918e404d6df3ac73aa"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "9d898fccc7a2eeabb388b362b5b44e19"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "9a4517999a1af50d8daf8754ec40b8df"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "02a864b6271aacfa285565896af97e2c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "ff88db45fe86c2135b5bdc6111215da5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "4685807d6d3a39fcb611aee5ccb0e426"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "894a8f690fb2b9e5abaf4cc2c61f2dfc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "fe70f8f8801476553511e18fadd9b517"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "ee7fa7c69dcb848bd98d81eba86ba30d"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "55cd7670f3a012f01f8940972545182c"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "3182e5729cf2c40bfa790a84b9e3ef61"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "9e1c4de23235458ff480e6b3715bfa83"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "734b3596e3a3cca9cbc5ad75584944ef"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "abff28952f6dde550a3a443a01d32693"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "96f3d2ad398af3ac5f25f6be505582b9"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "c7b06dab59c23c17e16aa9bd928ab99d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "64f7d95351a0295e69261e6847665096"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "447145cb927b9ebdc797878dacd2f01e"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "ed3755e98917873183495045aadffaef"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "1338e403ec6960f4a7ba6e2804810a0d"
  },
  {
    "url": "categories/php/index.html",
    "revision": "7a0d7dfa3b3b9ec291ace14826afba04"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "83f809660ebfe392900711927f2ac4ee"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "456b205860fb4858e8db0ece7a592db4"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "62abc3ba5df59eed3886c4320743cab7"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "c20fc497f4568b23db6b3c4e39ad4b57"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "714b7e9659e0cc3987d3979dadf2aa66"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "bc7d70646443e6fa7e1d011dc3ca7e36"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "3650a84b124f83932dd066abf459806b"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "3063f6465713fbc2cc44ad77bf5222b3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "6fa9f638322a7983d4caf4a015fa4d99"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "7ed46b8b7f98307cfdd17a4e5a8dce3f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "a390d457d7d760d5c96a01ee493f5615"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "4297e7ffad4b998510a874116c7a7240"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "0bf59d993b3dc0b7091ddbc336c0c335"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "b1d9dea4ee9b71e9d3f3120d504bd815"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "35750e1f8fe736bb5246a937b963dc99"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "0e7e1fe824510bf720675bf007c39f5a"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "ff23d007708b33a66e47c41d6bb66932"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "53fedc614af9c2b6fe29c0c12e0b48f4"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "aaebe85ca145e2dce6525e4f5fc79c4a"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "1aa074e5354e3310b39ac330fe7c51a2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "fc94af2d696cd7dc3c1e42accb2f76dd"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "dae353d1e16bb7c22a8e22738bb29139"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "4412f76d58d0c0df28135798e25d7ebd"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "b5855a1aa37104def5629a4ba75cbec3"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "9c68d2376fad2bda289943061250cfa2"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "3a08a47d7ae305a44ffadd7b8bbfac1a"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "c3fbfbe9edbe7249295cacbe87f94fc9"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "6f38100fed155088c75a581859f16d67"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "115a6b80bd4571c737263713b0554bb1"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "2549bd8d8f732eab4e574496ee40059e"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "3bdf994a1a1d9116deaea2730e52d9b5"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "6724219debd139adb954914321be06ed"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "cf98138ac262e89ddf4d03780ca5cc2e"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "5d66e4b0e342e556ea76966f668093f4"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "8e09e921309154e260663ef0711a7aee"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "e5a9619c0f5af4446296fde78e6c5b7f"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "e1fa653295757911571e418f39cd9da5"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "45f23f5d7219efbd3bf90d8900b913bd"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "d8b9007e708e8942a6c35334b10b3e41"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "91f923eec0274520624d65de1881c7e7"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "777ca441b475ec2d29e1724021524889"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "31bf2ae766c67ad4877bcf3a80cbafd4"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "9838b34f1702632bab6270e3581ad0b0"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "200c7cd2a4075137da21300042c5a47c"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "8bfa4595ac6dec749cbed7c5a17870c8"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "0fe919ad3c00794deedb3761300c2b04"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "a4482b97e1fc489dc65f22d02f03a584"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "2f8b10ba27f2d6b3418c2ca2206743b6"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "8fdb3d33233ffb2a91cb30eb1b251df0"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "c98c87054159065e689749ba1ff43ae4"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "f7c8537b1c837499bfa1c6b0a0de1bee"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "964c7eb4522bd7ba61abe9f9c76655c2"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "0b3189e412fd119b0704ee6440adf364"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "ef64bc9dd417ac5e86aebbd6c80169ec"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "8025801660f4acd7ee3f2cbb4d0e1d2c"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "d044ca567e2d2c5728d1352fd65f7506"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "6f6dea5db1916628189d6c968e93f988"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "84e5a6f9ef86cb44655640c6dba7d106"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "06e73a1c70e4e3c75b189f4dc82c8b38"
  },
  {
    "url": "categories/python/index.html",
    "revision": "8ef9e70415591106a0ab5893dbd4b0db"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "38bb709c12f0cbc03b47eaa92656d093"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "1ec99a26ca5ef144f21b0e2d001303e7"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "414687b2ce05df138b02385c414f29f9"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "bf578600a18ea512370d921b13097bc0"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "b1da260b4bd534317bdc141bd755c154"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "fe572cac75edba3692d470927a50537f"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "383e583e95d1247c2c454de8dcd86677"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "94b9e2b6e36785af4a1dd0ad61769d9d"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "b68b5dfe6c37d4ab4c653182927be14c"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "8e342608a955d95a150f84b163628ccd"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "8341157e07087136ecb58b0d1f6c2c31"
  },
  {
    "url": "categories/system/index.html",
    "revision": "9bda17dc836d0c05dab0290c9845a4be"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "065f4fb76cc44f26ea07a486294265f0"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "eaddc90c23144b83dbed90606febcb00"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "d3f882f62dbc6726220cc17967f799ce"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "f75cf5b9d0b98f86fe849b01ffb27805"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "55791cc866fd13001bbe7a32e47ce2ed"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "be5373f76378b6dbd57c4fe4070322fa"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "a9843a9bfcd267a53bd94fcac2b00f6f"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "a9e54744c97ce757e89f04c5298a2be5"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "657ee3ddb2ef1badb18d582ba39f203f"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "650820c13ab9c6eb9bfe0b42fe964ecf"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "bd7b7518d51c0928821dc8eb192f7ba7"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "8123fbbbfb353fafc017e7ec58ee6fa5"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "29c87deeb833ff1bfd0435113d24ab3a"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "030d2acbcbdd4adc0fa0d01dec5c4d8b"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "6e19e65986026d734d984a38057aa2c2"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "374e004f00063d91c57cf13f94d0caef"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "e553acd79d96b13a346a32a110acc1fe"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "92b257f7c35040c6c21c06459a51f76d"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "310db57f592af97b419f2482af8832a2"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "c0108de116b62c6d5c28dc34fde665ea"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "52fde795f91863f0d1eab8d06a16fa03"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "53c78577d78d98574c806e1c3bc75d00"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "d038d47bd8f3a9b8d2878edc5d577b7a"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "d3640dba2cad94187b4193b989de1b1a"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "7e541ebcbc1c6b8d6609dad64e76681e"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "5ab365c4856a6f0bdd85d0811a47d378"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "03f10abb7479aade57e12174c222540d"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "438542fdeb6b82f154e7b63525310bda"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "06aeff6fe5060f8f0be451faf5b334ee"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "a72ffd643fd37b0425766666283e20da"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "e29e578efce57dffd670f7906eb54439"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "8b812fa51f092104f9d6edb8c22a6c24"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "5e8aa939c544a11448e7b9b1e977214a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "b1fc74d3ca0804506e345c88b82dfbec"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "2058bce699ef646fc7e36cf1bfdaac94"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "762e4cdcfe1213967cd715206f0de7ab"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "e47f4d5a92492490c50f75168ac5b104"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "5fba2fc903f96ab5124dcc241fa98741"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "841021613a965fcc8765335e2e9d2b02"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "dab63c530b23d45aa411ce8c94473b02"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "374d3089a8af42ecab32ba61a732e057"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "752d5b3c505036c3c87964280b9572d4"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "f272bc4fb91b046eddbbfe2b692c99b4"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "b9f0fdb2d06682ad2159a729e38ff3a0"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "c8bb04ab7e0966fea00591a81c5fa4ed"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "4813a7dc4226c18b1d9483eef55c45cb"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "377c4c8cb5de0871d00d5862ba62c2e0"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "13898d10bbca11ac585fc7191d224714"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "d534e41fac7d6b4c4e95372af10823ae"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "f7cb39f2fbfd3045fe775e6aebdaf6e5"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "eb022f0fb4717a278d19a9a7e27ccd45"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "03ae94d5cd90b7e814b76e81a79a9413"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "d84f2cef7ae5d4e2df9ef84fd3ccb5f2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "0f9994faf7ee7057fe32813fee9a5b6e"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "e5773364caceec5cd9b2686e74a8f468"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "23a51449568b3c5d3977601efc817a62"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "23b45113e1e1b066520fed889f1f8b1a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "e2e91621e1ba56d7e6923408084ea237"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "8354dc72ede2bf96182f8791f2e30f02"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "971153d98c3719ab6de6a4070c79d5b3"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "b1ec4452a9f7d9aa55ea7b6fbdc2d2c9"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "8ebe3021698b38af678800620811830e"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "284c3dca28ff1c530599894358749d14"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "ac5025acec8bb52ab7bc2217f955797b"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "5d55716917e6fe80503199d2112c1c95"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "f749d942472002bbae8f31a92032a597"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "99144c208c7c1235b1674b51e7a6a6a5"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "57a24c6d944c39bcc8550555a12ce842"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "a16e0f43c1c0ca643b525eba033ab9cd"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "1b2ab0754af62d73b6cb0141130919f4"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "1fd43b14de9b8c1297149c825b8d3d2a"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "7f5f844bb47c1cbcb2f7180dfd7b5a93"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "7b56161d6c08aef13638a9b2ce201930"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "24204f99b5388d8032f121a56456d7ce"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "7adc3ea1666d1bdd1c562bcc67add168"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "815063383abaccef95d0dfb0e674c1a7"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "aa15ff21d771fc41b64ce6cd34a93ef9"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "fa638c3f5a7f50c9511bea1167f22eae"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "7fe219a497cb79231169b16314c9f087"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "155f6d5c97dfdda020fa1674686668c5"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "2cb0c397d027d9e63d4d6450229b1aac"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "8fb43fa1828456b2a5f1eb1227beb379"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "6ffc0fb44d3cdac83e51eecbcd26cd9b"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "90247fe347cf32aedd46ea259c27db02"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "64a4c6403b544a64a7d899cb3418cc11"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "70b4aadf8987297c6338dfc89c5e4968"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "08355be9a3e77ec2b563e91ac83c4844"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "dd5329cd91e3f782b476e2b541683534"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "cc33d5d42edcd2d696d011c9b6f10429"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "bf0918996bfb72b83ea9b69d8a909d81"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "3ef5fec14e59be7381e4221e36250d86"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "81f59893eefe5ab835cad2d10bc77604"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "578be41e30eda27ec0fada0f218bff08"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "acfdd9c85fa2e681a322f3ac043006f7"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "f4825645fa416c6e9a369087b9de1509"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "95e3d361b7951c7a5c00fc5f8a694761"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "19dd9251fde26b4e2acce5f8c40227d3"
  },
  {
    "url": "favorite/index.html",
    "revision": "081e96822b447b99db0511222885d4eb"
  },
  {
    "url": "index.html",
    "revision": "2e8e1e62c88e72c1c01518c5705ead66"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "86c9b3bb65f7fbeb5ba92a725085aff4"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "590e8b2db33e75b2e7ebb3cf75cd89fd"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "143f20f34e46c951512a10ab7c14b894"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "dc3094c632262353e163fa500558bd83"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "1d46ae6d9d9f450281223a39c0ed246b"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "a80cc0aff6c0602288bcddd7d814f17d"
  },
  {
    "url": "note/index.html",
    "revision": "88b8b2ed5722f258330cf540503b6a14"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "c37ba780e4b2b472f1d3d5ba80b8ffbb"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "8c907dbe87177975cca2a4dd0fb25d00"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "a287b065fa7a33797ef9b1e92a8a67f5"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "a534d8d62b86da31edd45fd8d2165c03"
  },
  {
    "url": "share/index.html",
    "revision": "730bacf6b52bbc160e103529033d44d7"
  },
  {
    "url": "single/about_me.html",
    "revision": "886d662c5bc084d43872825dc56036b8"
  },
  {
    "url": "single/all_article.html",
    "revision": "3cd71001c3e0990936167f3f0b528852"
  },
  {
    "url": "single/welcome.html",
    "revision": "0bf9adbbbb88a53df48fecbff0e4e784"
  },
  {
    "url": "test/index.html",
    "revision": "04904901e0d47502f9dac13b8a1805c3"
  },
  {
    "url": "test/test.html",
    "revision": "fa0f622c121eb498ec80b8ffbfd428c4"
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
