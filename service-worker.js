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
    "revision": "7dcd6281833def733ebea104567f037b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "5f9a68dd91de16b18b1b185f465f6505"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "c2a887fae887eef3576e396349be3d86"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "447f789e04939994c9a31ae41e14c6f6"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "ae58007669b98af476f4d9d0d2935612"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "f4edd576befab451d722550d76a0d773"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "926b496188c26b5947c6d515a85e39b2"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "03ebd22fd8a66272f286346d68dd94ec"
  },
  {
    "url": "articles/index.html",
    "revision": "e007f485ea8f6d4b399bfb9133204f97"
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
    "revision": "9b2049d5a93717bbf578895cbf11a57d"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "61d9f676420b2e58df8600fd9f5b7b3c"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "4ea0a329cb58625333066b73d9dcf91a"
  },
  {
    "url": "books/index.html",
    "revision": "bcf81c9fff8070267e690200eb53ada4"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "af52a18f6dd2de7a5db9312a28005c67"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "b5c79a0623ef4ce57323e830448f3112"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "278da712b87ba8c5e44ff9c544c14742"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "971e41ba45a7f4db24265f6268210db7"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "8bb42b342129bc551837e6f21925e658"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "689729f53389ed3d11c0ecb6e3aae6df"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "88257bc778fa2cc8a1d833973ab45ea0"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "d3f478bd4aacbc7b3b8ee0199a9bc3ba"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "4f57d008cd74d3a3e75997c895509d99"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "b826f5ded3d65c6f16ce00f0953fd1d5"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "2b15949ee48ea46972939234e6946b6d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "71dc84a7c3ab66baa0b4dbe23b253883"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "3dd97e35ff95e49e41c60fdc7df8e5c8"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "2026777c7f8905eef6bc16c776eaad29"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "c5449eeda44935aab36191854b33ec85"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "547516688371cd8ed6789d5d8eb1030a"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "8f421999c963a1299068005f41262ffe"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "ae0cc603062d5daaf31fbbd1c8287bf1"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "8cd88d64a4651d7c087462b19f4f8a5f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "dd21e9a72760bafe9446a5731e3f019f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "9ae90e5980ca1b4e52ccd2c932e6625d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "870d5ceb3906ed0ce4cd89fdbf628247"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "fd6e6f0487b71833a0ff3dd8bbb803d6"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "9507effd5b4f1b6021a3eed770996e18"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "c1aa8564fc28a2efc8a64b5d421ef621"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "955b78dd959a69d4e7aee607ad30e622"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "403ee7817adb2b99c920ccc897539e30"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "f090a1d1c7087137c7853c9084feddc3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "f1c5999899e88babd91f546aca8cb52d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "96f539f6df4f3f50fd16c9d0120ec1d2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "1ad82d45263501cbbe802a80f5eaea93"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "e3e251b9d651c46059ebaf005a82055a"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "ef6e4a5f7ce42d6232d942e20d06ff07"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "447de600bae81d9aa305a324b95855ab"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "ef01a21f07df44851e782dcb3eb70b59"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "1bd908519b4335ca54383d004ac3495d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "5e83bda7f590728ea014e04853fb0236"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "3f6b329a872ae68c0e1566269ddd72ad"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "26d0ba4a47d8ae834bd3a712f05e36fe"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "8ae449ead0c949c662761f0c85edff7c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "a4e6aed7288bc573124782173c61e405"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "53ea0a9aaf91ea097272eaff8a911b74"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "aff961ba5f608dea799e961c73c9608b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "c13febf0441b80d396cbc7b947e4e217"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "59ee8496e37ee41e907ec7f6b0853127"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "f23488a6db063fe804453301654e4f56"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "c731012fd1528c44c79d179b0844f694"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "a1e7d93db635cf77e6ee30960c150fa2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "1afeef809d21077b9641d237e1c74bab"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "5b9c7a5eda9e4692984a096a39130bc8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "aab28fd2bd1453171e6229f9e7eceaa0"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "51f01b21446680da5b111e5bc829592b"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "9c95f7e4a19800900b449afdce90a7f3"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "3c157ca5c4f6ee35161a94d9ce086859"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "11be632269548ebbbcfd432a6724632b"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "88e1b81d5d14285ff45b36564487db5d"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "5c728e30efc5e50fa322f2c3266789bf"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "618bd2d5e3da7e2e256cf33ade4ac2c9"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "11b8980b309d0705dec08fee1a0b3edc"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "7875ba383bb2ac99e7f41c7f9ab81d0b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "cab50494eee1ee1d17019103322dafd4"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "a92f728eeeb9f1b260b0e9d2820388e4"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "0a44c66b9adf1ab7123fcfea854efaa3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "2bf6ee842cb1f6c471f3edeff9a2a613"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "fea3920bb7438bad5a2160ef7ae64c8d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "d9efa672a6c215390060b2839616f90f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "3db00793dd73291a2e741aede0b4e825"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "8c8ae8d2569f0878ea09fde4c4b8b024"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "a6c2d519c6334abd07d75ceb989f80e0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "4a072959da93e7e7ec1f9a3a46bee1c5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "f8b1d791c3b7479c3ae6af34d64709db"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "e3777a5ad8412564eb2001f72caeecd9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "381c5f9d68b1e23232b34036f2b615e2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "c012f0ac80525e1af1f264d5b34780fe"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "c227d3ffd24ef1bb377b52d131a4d103"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "a8dfc634ab94685b418303ea08f35818"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "d8d60b0943875a3d81c25b6c755f97c1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "2d14845e843a8c0709376cf758b05741"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "32de46df61322b999888727dd75d0369"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "223764c52cd99cb7d62e27869e25221d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "a68d646227dc10253d1bcc9b511da18e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "b91ff4c8448130f9a7e3c326d6fdfd1e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "55f244c672a9ed1cac22f79eaa7514e1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "7cbbf5940725edcc23b3910eaf539dd4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "2bddf9a29a43bcd454691850d0f5845f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "2a74eb4d7b40919e761becac0545add1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "bb313044d0edc26a0082ab5e729e94f1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "5422578019e2efa33b712198d6f255ca"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "619341db0565d05e154da091691f2f16"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "0f702fa82446bfa91d252d07699f390e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "fbecdcf10346ea5f0bec5b20eb0e4e80"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "3ac127b270a1f080d394e2a797fed710"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "f3643141f03489b9e6f5cc0a56f6b924"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "2e3e21d5b444423fb48b2ca4f3e303db"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "d2acb571fa71dc3857211e1495911a57"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "cff905b0083abf37e6173c1af30357e6"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "ab9f1db235f8fb3e0e66f18068d211d2"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "c4813c8cc159dc1de237bff9727b3bc5"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "79ed8ad2a36cdf6ab82ff49b7ed3ba74"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "77eae3797aa9022be8cfeed26c5f4523"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "455802ece093c01e29832d43ebc91a67"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "89a3d77e6166288e825eb1faecbfffbb"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "5ea66902d5bd45fd9c084af10827d7e9"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "1513bb7620739b1a8efe26e57d353620"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "bf9d7618917a4c9ddc4ea7130988381d"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "8baa93387f1e6112572ddbbf5e95f508"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "accc92101b1b37d930cd18ba2d84f759"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "370bd9fe4ddc3de037713b6ac4eff8e3"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "4755020b8a7c52ac60ced2f31584b732"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "d215584ea44a6d0dfad88f54d5f6b557"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "3a3f6167feccf559d354a9ef9502f883"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "1a51973eb40327d6d24208c3e537174d"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "c234087c4b197030a045ad925c628293"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "cd6a38a4e874192ef6ddd37dcab23a3a"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "9f3e52d64f8afd79c2b22b7b8ee40fb7"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "31db065d989be143fd38ace353078503"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "0b11c8fe48a3b93e1b022f237f27028a"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "05e5a347fd6f320aa27dc49b622fe922"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "9f5065056c287cccaa0b59f83a579ef3"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "b8017562aba7d6c66e00eb9969f2ae95"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "757703904e16c8975586ddb48b629917"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "459fcc79cbb2d77ed8a89e18bf54082e"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "d874691d56195ed8a2112489d3325438"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "948d4c83da7da0914d1ac31caaf3fb25"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "fa7440b511722f6380e326ec3c32bc11"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "78feb4b02e855d12443d08fbe2ab6041"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "b260121e3fa6747e089056831bd2c09e"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "4df92e642178a021526aeb17b6d79740"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "3c5fb57e7b4978e48679af967ad816ef"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "92383334d2b7cce78b0ff3f66734c2d0"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "b404574cbe17c2600cdd0113cc809789"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "d7874851a23f321c75247ab001011178"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "447632dc92ce7ac90264e542d3f2e5c6"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "95eb04ca13eb4f5ff58e9a5bd3dcb42b"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "ad96b741a0ffce335ed0e815c2abec6c"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "52b830186530d3015df935c1e429de6a"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "d626fa43c108cad31ca87f7b8bdf6e0e"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "ab9d194cc6d6bc10349daaa21d226c3a"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "a2a80bd30d007f3ef9ef1401af356bee"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "9175e58530547b56d31e01f1f91be7ac"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "151778848cdec1a36ff634938d6389a9"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "f50614f97d2e4441ddba53fccbadea51"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "bced547188ba6b9d2cf656794ab49f54"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "d88d188cfbc7344fdd367f69c8cc95ac"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "1c606ea5e047cb8d6ba61b59534d55cf"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "ecf1113b408a431d37d6c2b06c74ff83"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "92f68e0e6db9119217725fd0a9ab5930"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "8d9ad0cf86c9750397babcf66bc39a10"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "dfa4a88817754b1ff2c653511da6a1a8"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "49eeacda5cd97137022ffa9b5571f89e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "c87323d18b90d5f1f719816d042cc682"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "b678c2ab0e99b57bb5db493b2182c36d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "11d2d80b0fa8c9f93f04dff53d2f1a72"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "154b431be8aedb2e78d919026306df38"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "be1849ac8fc5b9a7deaffd282845ed78"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "19b3e4c6b608b60a1019aca128c875ac"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "d05c799f1c98b1af7c415b0abe24878c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "bdcc363f7d5a6a7b7d3df94de5d1a94f"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "d3a7d6c5bdd2e56d88f6a9134009f8e6"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "9d1a23175f161bfee5447b8c01c018a8"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "0c610f1b8ea35cbe0be0723c938ad52a"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "2a662c2f360e62332ecb0ed9f23871ba"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "01e79bf79294bfc15bc519b9b78e38db"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "1be49c73a3f2fa594a9046296ff62912"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "c5f190a5ec30f43c1e1cf393907627e9"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "01bc7d67985a717026ed17d96d5fb92a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "6fa492f07b84e6471577e6b1ae2652a4"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "dc736d051f5144618072e30189adfd7d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "b07934147211248b7f0a859a6ec31aa3"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "6dfb8b33e21d1067a60a82e491bdf0c6"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "5e2be678082a00de03c70fd2a1e44681"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "36996c3bbb527adfda549232a50ad70c"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "56a825c1b8d5af8744f9360823b390fe"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "bc4f53029e9d6c215fa22a364a2ab5e9"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "cdb9158e43bf3beac249deb553f95e8f"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "e0128054ac6d6995896141f9cde8c850"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "c51a7a6c91e8f6388940b1c7fc12f494"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "08e487b3e5719b07985e2995bd22f97e"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "32aecf9f33f0815f64ab747bd5f1cd3d"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "751e425024a38767b09815b223a773bf"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "971928bd51f58be7f94df7bae1a4a11a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "ef5c1d2618ece2d9f6f6ff0f73e8df0f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "ccdaf7d5b11183b6ea6089a9ab7bb897"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "fa8a8bad6e6355d59a67d8567105ea1e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "209734028609c8d691a4a942b812c877"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "a98edcd79cbd641a077462deba9d8832"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "15495d8b64eb0ec3be4718af7c82e7b2"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "8b7681f34a9b501f9de9ee9975522299"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "030f20ff5afd432e5ff0bee4189a6337"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "19af5a4d963ee1ba323c987bb1cc0e7b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "c86c6e64b8e6deca638f62719f4b6748"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "16c677f7870cf12a20b760292ccc3036"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "19cf9ab82fb380e860c63fab116db827"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "b5ef5288c76025cb3518074af2e91b56"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "4e8f856311b958b44390733eb5032c19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "aa7dc43386ca8fc6a8565bbe593fdf4e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "6c2c16909fd2a478827fea4b44ed53ed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "e2c230fbc6d091a8965ceec04a446600"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "2c1e6a94db4e669fae85442c9d86fe91"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "8a26a0d298f53516ee5fbf3d730f97fb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "7d3e52ab2a280e1df722eed3fbc90a09"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "a064171a23fd5e7dca669e4185cdc29f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "e5fab375523207616f2d299d6ded0609"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "9d3ba0230b191db76c0ed198ddd76f46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "bdb8ec21adec6e040e28d10ff1ea4030"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "3a045fb552fe6df1ea5733491a73058a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "ad25e92765d31b1ff2a0cdfb74d11e51"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "d596717b5661196d62639938ec63b2e5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "9151d5cafd731275c07a1c8c922d4929"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "405aecb99436c6e895ed2bc61e0398dc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "4d54fd5da0c51ff183c60e05e9ddf8bc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "2b17b1d57eb373aa8a2a8ffb85e49c82"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "e70c7afa0df10f19b675eaa4180a3dff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "c3924c3277195bcae5f882ec98b06520"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "d16025317071e5b238e172aa052cf5e2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "08d64b3692d3960b653447600049a2f9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "163a19c9aee6bff6089a6ba959e7f72a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "8811589b8d4ec3a288c834ca3fbefafb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "b0bb71b888ffd6327f5d6a8dc5540a9a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "b54b3b5a0825402b1b7c9a5fb2933ee2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "95ec06ab9dcda7afc42aaf5420bf89b7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "1412c8b90542c460c0cb12aa45ca3adb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "8b41e0e960e4a39e2c0ad9d93dabf883"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "5f97d387bbe1abee1c92851d5900ad16"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "96d090041540f0943eeb5a0079a0f08a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "e9bbb708598f144c966493a5bfff692a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "a34af9b36283b260224be8abf5108c39"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "91369f76a66ba4ad0d529652bd75e9ff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "840c0e86f29dcab3e51d67d7922c6c55"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "4e49614cfca3dcf7ae8ca18ea54ac0f5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "b66f7124d16653eb30b02741fd14d666"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "18520bd5e316e2fbb144428f922ece75"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "a969f200601069bf2933988d1ec2dcfe"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "e7bdb5dab576624c9d1459a9d75573b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "d4bedbc2fde310bd6ae51fef183cf39f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "9dc14f3dcac33d2a12db49e710d0205f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "3aa76c43794de2ceed9665bd90f4613e"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "cac9883ea05bfc76add675f722e6d592"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "5eb2e5e14b95298e08c800f9c0079c94"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "20d23362b76cbb2c367b4e414352d2d9"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "0e16c37046406ee075fb7c74c74d6a1a"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "129bc65acd614d25e6361310e75dd255"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "548d766766dff6112bcdce5ce881bd9b"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "b3e9538d409488338cf30c8caf72d710"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "4a6244f26b721ba17a358f61019a4334"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "7b837077fb7cdc6b16b7066557dce3d1"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "5c06f5cba3e1578320f35a813cb82535"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "f9d464f496f6184e480669de6c69a1f6"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "02719ffed3b3c0edd06fd0137c1c0e9f"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "ddbc543f46c352da7add60854e5a370b"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "b17aa1e2f58b966fd0c4dfb9e693286b"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "d4d25945599fcc2cd459579103ad891b"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "089e85b07fc19fe2b728ce032116d614"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "ace9a2734d5e65a8299f1260f1738f81"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "48ef9a1929ff15fed054510719e39902"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "884bf3d0a8fa8b58a48e5b783eb9a49e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "c53e8d5c1efd19693e956e4f01681d86"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "b3e2eb77549cee4c9f6aa7d4da52c688"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "64cb8913d5ac1a99b3bf43feea0dc660"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "a1d046d9f585606979ef2af3a417a995"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "ee8b9385383fe319c5d389b5e7c4bfa7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "4d5d86c762198122f848bfc8cb4de3a3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "2630da4356b7a7e15f9860501e6cd8d3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "48bd1e33ce86b36e7224d62507cd4259"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "633937e83a41b886e1000c263e836d7f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "25cb050016be2a61df14614d4067e2e0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "f00ec2d765d1adf7e14881ec182f7fac"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "8aad8e1489984a6ce1ab85a41f12e382"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "ef2b0bfe4ccefd3254bf2a0ecfe9ff32"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "e00776873a0ff6ac4d0e3fec8a9d68a2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "7d21438f33a2791520a77b6c6029ce60"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "b357beb6c986e8c5f114d6c46a747ccc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "7901d350f2dbac3d07a7507f8404ec9c"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "0c7dc02be36c089f49e87ebf299ab1fb"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "5b00e8bd66e576334d59d256d916d2dd"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "5e294ae48e21484cbc9163ae61e2357f"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "6b019d7aa616417505a54a6a832205a6"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "9f87009b3da9798f3502e49b64e6550f"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "49d385a75fd6be3e1baefddb0d119409"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "7dafee2e849d078dd30196b8f07d38cc"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "3a60ab90cffce32429b1e4d9df99f0a4"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "a5049b1d5f6a666c5da1643170384ab0"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "f8794c4bd65bab9e4c685b218812c8dc"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "c942bca816d7edbd068c3dfa1f15ed86"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "98967fc1b91b9a2195eabd67904ab8fa"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "2f761698aa25c12aede0df1db5fae871"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "b85411aa25bee82d6ee4200dcecc8ef1"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "b437a1d057f6b20033a12fb51405d6db"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "aeec09865ae901b046d822ff1d499b93"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "a30c9611e623543d6ae39701c820b0cf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "efcc0131426f6b2d109cf986f8bc4f9f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "36fd3dcb4fa178cc20a75bef7b613d3b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "e15014488bc28c12ab15b9128cee99b1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "2b753ffdc39dcc24f7bf8f6777c9628b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "d8b7e12e0a369cc82b4839fd6c6d2f13"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "9563a076ae15991651922b26a268afbb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "7ee95e2d48b103dfc4abfb38691cba68"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "d612d1552fb53f2f5e2a72f82453803b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "a14c2958272de2be3bb3dc7c137d3fa4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "d7b7e0928a37b468a4592612a69b806d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "5130bca19e24025c7eaee4d4eb01e5c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "84bb3fb06d54d9a023b776b09e231c4e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "153fd942a19c8f58fa3ef534a0066eac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "93bd1d42e8f8ede889606d9b1b08421c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "cfc8f0f8fab81a706281fa102fa8c8aa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "45fd79cf81f36fb3de26d4320ffe8191"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "8717466f1866369a86e0b717e17754c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "9e3cfa0b4d076435c8124cca818dace6"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "cc1dcbfbbf1ea5812c2bd60de76c6f84"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "4583430e94f008d477cca76abbbb12dd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "2ef3770717f3a5e62a8b66b18b3502b0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "b6fd22b2213aa62859757229b6f99fc6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "f10d69d4363bee60a7eb545dde14df7d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "9de7ed3c5619ebbe951355abe5593d4e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "cfd614d19a4269e5d6beadab37365f43"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "fda95121ce741c881d66612b054a7482"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "6515aecb45c30202baafe02b07b8f97d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "f2cd379eb529faf4c0e1f1232a052e71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "8e52dd3a26760085eef5a5e1ee9428f4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "3d09d98954065ffb157149ce1d1bf8e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "1d9d3337c598a34465632b00ff30ddf4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "ce3e1ed91d427d54fbe0d2f2af26a148"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "b20177d41ece150accce17e4d9c5bac2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "9ce5ba97ca69c582caf380b7de018746"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "59e34271de55e9827ee145b9a0544b6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "99faba127c12588fe7689e28202655e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "827211e84498900ef5716a91651be1aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "971c565de1a6b3bb8285f615ba6d4e40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "ceb5f291f962176b57732282a0ac67a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "e272643d80181a219b294b8bf4ca84d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "fd176ca6ec498d065eee240f433045ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "fc27f0c4abc8e8e321ba313cc6639b0a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "178405d45e05d5b2fc96e22ad4706010"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "5bbc2c79bd007c8847c90771751b6147"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "067c4dc9b2194dc06ac483756598131d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "b4e0b62f4da1d06d0baabe8219e26c1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "c49027039c5b2a7ceaab782dd90410b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "2070a4f29667dc620fbc366940271baa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "357ce34cadcbaa2f9e17a37f5b9e6e40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "eb2b9cd2cd76cef10415f6fc28e30bc3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "807fb8c19b24a0eaef58818366c9956e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "c2fc07b9dd9d13c41e0698efc063af0c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "a32b096ca90de975fdbdf3fc04f372d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "8039bb777a9141f53700b09f1a911603"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "396e9c2ce47e1d9c9baeac80151c2dd3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "8c0d8b07a2e777153246ceb95a8a32f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "d3869bc51cf394e97231e18802a85b26"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "e8f47e15c3db9a48b4a78c310ce5efd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "00b7a2b4bf2a2afa7b833c0007490783"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "6291de806407d82503bb5f744db6c820"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "74a2a356ec858c76fb984ce25263591e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "7371ca5ac33e0cff78bafbcb176193c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "aba34e1900d9e6202e95137765b69049"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "7a9f990e5483021725f11c37777fe9da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "a3de06a989704fa0c6fd8b69cdf96b10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "1805e193fb3e428f88e0d92b3b6fc235"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "f5bad33cbc3aa916633a0f1f5023a61a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "381715cf179c15c16e8b773546f65df3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "f864bc7132ae9a09a4dff70cf1a07070"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "f255f33b6bb751f45b64785de5b95f21"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "587d4ca195c030675ba25a25ad9b4e3c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "0c45ba46e02c8f550c7d055a5734507b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "046bbb3933adde5c7a3af22e857ce348"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "dd23ebc3769d1a5e8150f7f1b8e5f1e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "a85bbc141b2572d7cb60098099edec3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "5e4d82bbae26c017fa2bac0374b326dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "30c95ce5312eaf613432dddc6f80ecb4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "58cbbdb1390fdc1fec621bfb41f3ff37"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "522bd8550edf9c8d7ea540b07fc6ca10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "e048db8c75e27eb6a2c13e94e16e7a7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "76c41e09c0bf4b2f6c08cc4249858223"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "4cee0d7198e69276d66937c6e0c31fe8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "96bdea4467fb0f4a1b766e583c3730c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "b2dab2972a3afe843f0f4168c8bacac5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "cb95468a046d9cc033b1600cb2a44996"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "010ab31da91462b5525434617d2cf201"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "1b4cd73e0407711902a33e9969f892b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "d51f02b23bc6e6b3d0c03972a1f429de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "ed744975c6501e8b0f9a0aa62ff261f3"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "4b4fd68dc257383de54fff9c6436641d"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "b2b1e2f53860b95934e264fc3332b329"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "59fb673268d2e992c12d07268e38d840"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "7220535dbc44ba93d3e91bccdebc7daf"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "d9b26e6023b798cb6a5841db5e2399a0"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "9f3db0e99991ec51fd15ff03ea56a4a4"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "a7812bcf34f0e882f3b8e3669d150296"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "ba9824e96cf5d0cfc1fabc3578f9250d"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "0f5c3b3da418319753a38a246ff66529"
  },
  {
    "url": "categories/index.html",
    "revision": "adfd96b8a9cbb69af88ebc932341de4e"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "457db05124f7f4f63242fb89fc2a1235"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "8c14a7cbff618bfe788f123cb5010a81"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "b20ec2c56271d46834d820a7af2e1bb1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Annotation.html",
    "revision": "e61588ce07858baffc8c4215ff60769c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "0c0e8162743d4b2edded5294e19f21e7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "2a7b7ae836573cfac67b387f43474f6a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "d32b14bfe021d041487cffdfb232340a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "c8999bf09a06fab501963e1f93d01ec3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Cors.html",
    "revision": "aeaa718f33aef54758bb3c989776f5e3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "6b7cf10b06b1bb074aa583f55dbb966a"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "97df360a964f4d343842e554080222a0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "09788733d406494366daf4b70cf2a13b"
  },
  {
    "url": "categories/java/_books/springBoot/config/No_Banner.html",
    "revision": "10033f8225db7776f7c58ef9243508e8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "e685ebdc7e4280f82bbe85bfe7e0dc13"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "4fcb79f61a8b562ca759c7359a0cb40e"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "5ca0e041a72c95480cba0c0bd9cda696"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "6b44df926c4b477bd75885b2386bc847"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "0e1384483c0895ae017851c0a08ec143"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "98043aa454658088cb2c8f0a646bfb27"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "9d07bf167b362003ced61cf5014396ad"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "bba3df9c3bb0b9bc1954294555d25959"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "d5823ae784565bc0e1c1f2ccf35fb777"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "9b239ca5eaf608c1bfedcb011b3525c6"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "10a1c6d6db1b835d4b795baf8903868d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "66d9df5257f602f53d914fdb6f9f3610"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "5c2d89a09831a90584d0c5e9380995bf"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "b0417e08b4dac6558abfe71eba090093"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "b3b5af0160491439506ca6c0320064d2"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "bfefb343115791ee6180782e011d49d6"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "cf75acf94da111a13c36ac5a05fb2b3b"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "06621d65632bf4c86952a50bd8a522da"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "45447b4a88e213002af8e604bf0333be"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "69dbdea2bc27ea33230f2e52817cdf2e"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "ae42ddb779a6d010cdca6c75f3873e8a"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "d1bea53864189aa8f3b63c2f787a0535"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "c7bedbb4f8997ef15501f099804aca58"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "00bac9388528e1f861dacb071160c943"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "63c81fb685e0f5f3c5bdba958715b2cb"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "27992b388abf6b33ab08ce3e47cd018b"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "7cd3e6b5f1e20593553e861e6f652483"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "2fd36bf526729c0028382f4a2a328f6a"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "06e194a4b8613f3593e36dd1cf9f7f47"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "97159d7a8ec0dceca17a8ab2056decdf"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "9add74294d5e26727ab9918e1b4adab6"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "f7fd177c9d7db8832ed6abbba3d84aba"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "45d5704f4c363931c80c69006f45cc24"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "b8ea85356d2311d5aed67e2af8609338"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "0f0d3328418ac492672259e7f3b7f856"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "16636d5592d45e33f3e35d27637d43be"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "9ccf2edd2be23bc492d90204ed2d5edd"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "78fce97288ec77724a5b9bc09a2f16d9"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "837cbd55832319ed1c48a1ab7856100a"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "0b317fab83b1a725a0895b5c81526c08"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "314677794df0998dc0739fc762982e7c"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "99e77c2969cec8db637ae45af3b8450e"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "5bdbe7be3a2a01eff57e5afdeb338095"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "7c8ada8a0f33d2b8ff8044c52c3c8728"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "2aecf06eaff71ee77e4cf03b008a95f8"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "041e0b6c5e455db72bdfb989a9f1bd2c"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "ba6541adfe48763ceb8dd2fa0447db9e"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "155cf45350ba0e4206703e63b4ecc76d"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "768b6b98bbedcb38c2b6220b62ebe09c"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "0a81b73d724400d48643398e182e999a"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "ea0983d9a575022a2bbeade4c6349a37"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "705ae29a29a81e4835cc5c571000b57b"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "9570201018e056609378e6afc1910840"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "a11f3d57354527d0f462c7d81f7711fa"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "158e6d46dbcb50de93fdcb211348dee6"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "58bbc9118f6523917d55eb6674f6e251"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "2d2c7e3cbced7bb7ba288fe2827738b6"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "ba80c8a461453a382cbe89c9562d0782"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "425ee28e40d3bb8377a7846b984cef0b"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "c9d4eb6cbfaf3ee9bba33044002a2e23"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "1dce93460918fae501aac51396b4095f"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "65f8cb48b148fddcda3ae52ad713e13d"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "a957549ced01d8112d5058d6b0173aa5"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "6ae0f8cab66549b7bcc2c688b30f6954"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "0de54cceead2ada94141281c3d6e8d85"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "8eb79bd638bbeeef2f4323d70b978d98"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "5f5de48096cec902e31f3a18d981bb3c"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "6a32362bec40dab3c0e44f425fa0d6d7"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8cc21879d57220aee01c1e50b9a214e7"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "3d2fb9ebb3af1f41ba0167d19e906ae3"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "c90a7cc0fe9510443832e77d6e68bb56"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "476cf9ef2e6f7a684bdf76b30ca3caf8"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "9e6e05316bbb5e790648c4e4616be2e6"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "bc0efe59c998d33b1ae0a4c07911514c"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "bf949db09fcb61350905907392d888a9"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "03047f32f6c56b0bedbb230e030dbe24"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "3543a94e37103b341dc669777b54535e"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "f7a4f021e17a5ebac3814be16cdaaac5"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "ea7d3628e50b862dcbe11a7f663adc94"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "8e7b3d4ee53d9cb79de1a886c4b62e14"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "06b4bd000a7d031c61b26d0949089f80"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "da2e8f31609bd30a0ecc8ec5e54a90d2"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "08c73ba07a6073c1df298f1342def9bb"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "6f081c6111cb3a3cc08d8dc481940132"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "df6b6c65da57abb12034f57125dd97aa"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "d2238ec01257d3258fe3a8cff8492bdd"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "90ecbc788fc5c94584e1283f7b0fb15d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "3b17b5be3dce47a2adcab9897a8ce1da"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "c98b85e489d27c990e51abe10bf2a1e9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "00a9e4bca216a79a9f5f4a2081a4b922"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "169dba2002ad2f7456fad4a7d21aa89f"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "9684f54d96866a56fe1926112c13e851"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "ad6a1115ab9cdf883895bfd063a52a69"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "cd98568c90a4f3c7f45b56cc717d3229"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "14ca413bd7da1e8d2cec7cf4ef1c0102"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "863c94953ee1eb5aab5608ec31d78d75"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "870041aee32fca6022e0533eee3b1ffe"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "7f3d9756e83519ba27bb265ec2718fba"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "4259bff6c1531a67ec6650c53076eb71"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "164ca480ee55efba483b4ccb94ac2fac"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "3d6b9383ce12b8f295ecb3e45b2328a8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "a9c3179bbf12b476a2834d5eec7347d5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "ffc22b49a7cf7ce9c1f6cfe78c552305"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "5cfb3f142027b2a6dbe981f4f80a989d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "1d5451b26407a795f5eba0acf365a0f1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "9b1349c2244476ce00c33ce25bfa48c1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "933f056069974600c95bd3eb129c85bd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "93a02d316a0e8c5a316ebc9ebefb0873"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "bea7f43a340f972e23d70650374428f9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "e0cdd66033d3c592221c06de052d5ecb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "783fcde52a397b045fbdd57fcb2f25ac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "6931624b2914f3657da0e306a8adf931"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "2fad4f4bd01d31c75af541494a01bf59"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "e623ce02f4e524d7726c696e6effe8e9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "97b0d2db3e7f5e2ecbd27d7d07457464"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "67fb5aebf1f8c96675421b3bfb2ea141"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "daa70b215f6b22f3a6910e83758d18ef"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "dc991aa7ad79fc4d1dd0f7daa2b2e2be"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "a87fb808b2b4e812f07688e668bbb4fc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "1e0ecd1366016d5f8e7dac95709d5b62"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "999263f0fea138cf9a53e1a71e77f553"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "e125a261e940334476145cdaca506e73"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "6353c67bdf4335d3275fff54a2e24ff9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "28c2f315521b632a86b27b64db85b8f9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "c0c1abd9e8a47d9c734b16ba470d18a8"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "7aab4eeb9227173a6db8918057315f9f"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0cc822e52f0696353113a05ea29aacaa"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "4fce66c37118c8b10b0b01c14b4f278a"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "8453f461a9c142db5bc31a82a0367f89"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "5564cf95a72e5b60fa2cb9eee9681ba8"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "ffa29d9fdc9ddaf0221a1ad0d65e79d1"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "840480993e238bcace50939e517f0362"
  },
  {
    "url": "categories/os/index.html",
    "revision": "50388e5da4ff5ec5c71e3efccc4d178b"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "fa82c77a7a90a0d452d9d95e04fd1788"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "65e16f9776b39ef045f54f41f5f23fd7"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "2d261a7dbeeb649e6de9169452f009e0"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "bda302edf03b4a16a154eba18d28fcce"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "965e5eb73f9466352141fa029e1127ea"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "12458d39b3b689e2fa30762dada75c5d"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "7544a86a1fafaaa6def9d8191c6366ef"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "b94de89c0359889d2e5d6de464bcfc62"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "3efbb8f54002787c3e506a4dc7470f0c"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "b01a1b43b537e9239282202da788a81a"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "f11869997205763218d57b3cfd420e9b"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "d6d114a7e87735c13f356643d48e8390"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "dbf12921b36eaf8e75a041b8b8156c0a"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "abeed852f047e0bdbcbbaefe877ed134"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "b15eb1a1b411baca9a2cf241ddbb247a"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "4816ce3a1b5779b602a067bcfadaa7e2"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "dbec9cce691fdbb1116b755318d80fb4"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "de7f90deb577372a27360c038a4b8b36"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "032efbe315cadbbaba21e353e10433e9"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "9b1a6dfb04e0df37ed362451d18d313d"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "d65d413fb6462255a0aab28f7eb86347"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "2159c3bcb822fa9516ae3731a235a673"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "16443222f09d5bb97a898680351c0cd9"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "d60c73460667bef31ab6986b06665a08"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "979cc3e84d5366f529ddf5e380d89be1"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "54115af38ff731d48381ddf40b6ffef5"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "17e75982668503db131d9bc9d39a516a"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "5a97202c491424a8c188e63a1f39eea6"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "f2ebb52fad7e4d45645f82bf55652083"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "951ee4b107731571eabfaa5daa30b5f9"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "7f0a77c09004cfd1fb2299f64a4311c1"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "05557277104fcda21d898e782ab5d309"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "d18eacc6873fbe75129d3ee23b19b42a"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "0da8145a305077ca6743de5d730604a6"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "a619f1b7a0148486aa5f7d02a48aa6aa"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "eb70f3dfc12131b3b6f796cf9b3beed8"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "c43929770488ddc6cd148266cc84d77a"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "4873b2f2a0dedc5733ccbe370ebb6daa"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "b087dcd07e37437e799b796989e3c2a1"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "220806173b42e288de3d5836e283b907"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "8f72b09a9cd14f9617efa02a9d0ff197"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "1af0942fd130b747e76cc0912b8430d8"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "907cc367f9a5f23d90d8eb43c5f5cc31"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "37641dc25d6128bde392680686b04598"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "8b37a11f930b054f2fe9671bdf57e28c"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "4ca8347686dade71791c4c123f7fd253"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "83268094f0fe00cf721549eda1cf2f8d"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "b82d2e7ff3fb218bd95c05421589a1e5"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "71943a5d6541695cef734b9a34d43c88"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "a347377e30400a1e1fab33df9eb43aa2"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "6818399a38cb64a337ebd9af55a370b9"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "5534925998faaa4c05ed28f60c1d089a"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "74ec85de12abd7c2f077c8747d1ed70c"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0fb253a8ff26a4c583e7b78567015c4d"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "5e19a0b9646e516b2c8417e457d770d8"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "d38b6afbcb41f99ee028af34085cdded"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "99a24f2a8ad6b10d863824f39a1cfbf5"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "c61604b958ad080ea1956cc4582e762c"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "4ed56bbe77433e9a413aaf376f166297"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "278ac23862cd5b8551a28d64c637e926"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "c1806a85dfea27fcedb38f018534ef57"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "7bfecd03365045460d007e45e5a0d0e7"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "a0ba4b83a4072130986efe0b2cdb16cd"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "f9528b3bd372fba2772dcee7de89e900"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "01e9bcc04da9b3efd6f16ffbc9360bc1"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "68f4a3df07574b7f6fbf530aa76c981b"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "1fa614b81fb5b18b4b43c5f5381fb424"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "73b74c307a3788a6de005559d5679a1c"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "7deb94dc26018969956b5405378e12bf"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "033cc2c0933b7afa9380a5f93cee9e7a"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "d56a8f4717d01e1164dd5a7eae0ed022"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "cd090620ed7f0bc4bdf4b34332a6b6c8"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "0e89e8680deaf4f66430cb19cf3a7767"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "d42be0f4d6dbc015bf7a1acc774fea97"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "0f19f237ba6046c0a69a6a870b2c1e2d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "58270005e806f6e158be27b0f92c9951"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "022fcb5711ef3beece7cb0748ae08709"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "8299dc793d3cbc01f89af813f3c8fc03"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "0db5952728c15f5dd58781337c54357c"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "8629a65770267b9be5fe6cc57b3ae438"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "e4244571e6a9b35e7252e4f5b0118018"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "b8e9c55d7ae2305effc88bf0031ed10c"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "c688bbb758f1fa88f66810c6ec13af06"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "6620a4839c9f8d59739ee16fb8b6a481"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "50b40e0cafc2649da55aec4ed8f601aa"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "7d45afb14af0efa018632e65a03bd120"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "d2f3dfd32614a57f714e3e25c8bde7d0"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "a8daa89314eb3fc4f358d8482537dec1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "e9a8390008ce973b1ae5078628d812ed"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "dd0cfc95e13ff1399c6e55336857c5ee"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "9dbe385270b9db478c20f56bb6bd0b21"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "d833544bf484be9313c0ee30575e9e6b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "33e1bb35144ba515d79f9fcf337c79f7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "f1dab584bb0d3e1e349f0977098f8a9b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "dbae0a02eef3a25cb2cc544cda5a8a96"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "d9eea82b040b2c4a6aea945dca8cc143"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "119521e5650a8831af45069d9edea011"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "d5a6212ecb2221f184f5a1f3d57889bc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "9aca58185b4fde34dd04e9ad881b02a2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "056a4367f8575d1669319fbeee8c3236"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "5a588d2a2c5ebc1be713e7d3e0ec9d4d"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "b71dd8d96fc29d4107efe505e7e88b36"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "7e98167888d7fab2acdaa22ea1d384f6"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "a1e97710032582211b1590a251ce2497"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "e460eff470e9458bbc224a3204026eed"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "e6ddea2293ad3a295f6b417a58bdd301"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "141cc6bb3be86a1e8075629c5ea1db39"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "f2d5a76855c29f1fe8ebf282bed752c5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "892c78b30f5c962560d2e38ec3ba9992"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "1b68840f6c262a5274b5a7b1b9cbb749"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "6f7548030b354acf9528caae3cfed919"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "aa46a061f6d6c1ef5da9776e771611aa"
  },
  {
    "url": "categories/php/index.html",
    "revision": "cb452e24b08ed6ce3b0cb8ec7895edec"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "74f3a157ed4db11b190831eb5975b6ca"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "593fe0208d04d446ce619ada0152bf00"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "59d517b629f2815c5b85072d7bb05f2d"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "bad69a67e17f2a29132650ba97d78602"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "516ed558b73878ff2db12e84657bb21f"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "4b31f757b4a141579bc4150690070a2c"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "843f8fa302efb0232400dc8c2f411e5f"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "fdb36820dfbbae11bc1ac3e4827fc179"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "2b81a7ca6ae17fb89ff337be26158949"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "01d2cdb2f156ad7425352f677e91fefa"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "6eb0797d6d300e3061e9d0886a674ed2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "dc42fc118ec96b28c6bc1891aeb919e0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "55c211cdd8c772a74f22830d5c7efd26"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "d96e20afbef1082d47e784083344229a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "ea0da63aee01a16d35758b5377006023"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "e6cbd8e02712612e87b215ef0ffcfac1"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "409ac119aa447dd97ca36d81ceb7fe2d"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "962580b8eeb899dcf2578b4ddce2cafb"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "f3e8d494cc3ae91e12425f7aedd80737"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "4060ab90d1d97a34f4823a37af4c1541"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "4098b07e514481a23079c03b17e9711e"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "936461dc6861c226e79f2c20baeaf636"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "d91c5c6effdc98cad93e0afac932675c"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "ed87b8163f12a8adbcf801a268d33533"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "ad2d89829a0f83e36fb02c72cbcdba4e"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "4a782e1b7dc9aefac37c0c90b395ca61"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "2dddeb6ebd0e941dd7c24a3102042cd5"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "aa602617284c38daf8a4e3ff12283596"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "807d96ba928fdfc12f225c566b9ea9a5"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "5443e203a527142f6e92ee581dd1250a"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "f3c20114f1c029467d308abe63c74229"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "b7e3a0daf2926cecee31f8af23979d1b"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "d0278e5f3bcd30cc997513538879bb8a"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "708af14fe6d96e6c9812416046192163"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "393511dea5532c5ceb26e47a577828eb"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "522dbcd235d93ee3eeaa9a6eb39e046f"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "479dc5bfcebaf8408af0ebef134975b7"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "16221e8ac3ab030863bc3411110141f8"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "b979bcc08aa24f3621805fe688b4a535"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "98155eb381c7751521622bcceaa327d5"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "5fd0db0dcf0198ca639ea3daf543ece4"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "e126d57fb28953b702bc70d0838987eb"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "a48af92058939ee33f38a688285b7867"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "600f6dd31cfb669c94a0bad082dd110e"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "1643fcd2904792cf27a72ae6a7a959dc"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "1505d1d6f1d7d516d4470167366fac54"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "13e6d83cae1e825639b1f92e5db81c18"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "bc066861a7137b04f5b206f7810e50bd"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "104cfc55d50828822b5d099fef632142"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "75dd414743d7098620c1db5faff4a4a6"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "386f78bec7d508f8c467a00793b5cdf1"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "21f44cd79efabd470482ae991dab234e"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "68570e94f624564cdac546c4258b5a4f"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "2d36493245806548744d64a4d3cbd54e"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "a78ac1d67e2769f3a19832d71572be2a"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "db07bb234df6de3726f06fad6c54d1f7"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "46026427ac7cde4586f40a2c89aa2ede"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "fa3e2b8409e4ef5de01b8d03b655a7fb"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "4f2efd835a7bab3995f10846f1dda492"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e639e5e912b2bd53ad94ca8d4bb91d18"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "6845ff0f1b3f28c547bfee50aeb65782"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "d958f8b88bdb360001acc4b4f09bb194"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "46b0ddb68d7b60f7e63f56a39a7df683"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "92bb5d2d6fd5358e8b6f62df76aff107"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "fd95e0c0fbb3b68b41be804382923099"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "d816fb513af0100bd1397143176be84d"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "52a2a162379c709de3e5adb60710c17d"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "5138a7d9719ea6f64b435a8aa6be760b"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "8d9f1a92223419059345ce49f90c26f3"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "54c51c42497c31f3eec80ebc49f9cb1c"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "0ad63ef31f8a706291951d3a02e0560b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "066d45f51504f1f0a6b1199d039e566c"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "b3ea2a7e0a2959267c9bb2fefd55981a"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "9f8be66e0dd9f3b34120e268a533b5b6"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "42106a0c826964956aaee6950fc3484f"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "15e36233b368cce5515a65f380381119"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "2a77e0b38d9c79d7ae501cb7c0d5ee7d"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "c9a2bcc147b72ed5d38f640db3ec05c0"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "493f2fef3eeb69af50f88b9b2220518e"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "2aafc2c7008fe41f91ecb27782b63b56"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "0712192bf11654c3c5ed32730145c4df"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "c7ba3b3364d7dc0f4cd0ac7c339807a2"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "6e7a355aec0ebfc2826ad7e908f8cc91"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "3e20e2ff3b70dea4df337ac4ef919a42"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "0e478fbe14b082661ea2a809a57198c2"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "56e102d65156477270d65415601079c7"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "623ad792980d170ba2099c05cc382d4b"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "2095944e34a21637dd15ea2a3ce348b2"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "c9e73e56d99dd56a274749b3a8fc29b7"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "a62c7ba6ff9def151c6f3ea2acaba279"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "ce5f8a28584dfa816608304a3cab9258"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "b76fa9958d25d43868178eb5dfac0547"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "ffb1f8d9a4b6379ec6456a4972281b52"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "219be82ec20841d4880c045c89057108"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "96d260197a60b1634eabcf18004823bf"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "08666cecc29e4c38eabaf5570742b2cc"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "486765b858b65120199c6f6a578c04f7"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "2e1900d8e397f85b512cbea02f98ac61"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "afe704833c2b5fe42efa3d9db962ab33"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "974f7dcaef30c8747154d7bc8dd4a1df"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "56407d73428dda549d4fdaa5e5dc9056"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "050e0b44ba9fe364101df862f1b6e5ba"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "611a128dbebdf73a7f3acdf55cd8b419"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "bf6cd542c1caa5cd80ac1051e4614183"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "b8539e88e3ae1032573b14b2f8d68269"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "9e18155a8138bd38b1d0afedb09f123e"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "b0a54af420f2684e8cd771bdd5f2c478"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "90b2a430f2a297459f5fd91767d5a7ca"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "6c365f6c4f501520bfb6dac385910666"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "7087a91040f1ad2444ac20aa6c417f96"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "4d91784f9f8a231a967863687e104468"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "7c5ef64a24598eb1d92235224ab94c50"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "996fee66b73eb41d4817f6f85751448f"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "bb24957101d59856058ce92a40a4530f"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "746b5bae7a15678b42e9e5d1a852cd88"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "51c153d21ab0d04b381499ba79b1258b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "badfda52b5c6e9f658b41e5c48ad5dc1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "c4f2e83f9c2f4e3f0cbe63e68d7b8481"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "57afc6a9ac125b3385c51b18b001f623"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "ca582b7134ab2d0c83c414873d42f974"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "de279ef3776fb92005b5a453ebc114da"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "0ad765ebf9d4796bf92faf3a9a346b17"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "a8b9a982017295d7c04ee80334f6143a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "ead9284aa262759ba337a63e277e0b57"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "861129a823b614e69109d173f443bdbf"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "5ded705b02f1bdba0c30cf843c87d8c6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "ef5b1483ed8c070345f9cdf3855ecf1f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "eab6f4d271dbdcaefb3d954563ac83dd"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "c68a419a044bcef6f15af6ca275b3e6d"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "3fe17ad599e1eb4bca2c3913ecaafcec"
  },
  {
    "url": "favorite/index.html",
    "revision": "ff581ecfc036ae00006e1234863c4c74"
  },
  {
    "url": "index.html",
    "revision": "24c8f83eda72ff5f10bb4740e1c48250"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "be107cd98b1c1f09647bb87f82b9ba31"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "cf56f19a5890e2fc4a91ed6fcf6c79eb"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "04a2ddfbf97a7903fee7caf5d62b7a17"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "89c478e31b528454e1af6935dee8df6a"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "7522886bf0c451aeb5a9456a944bdd94"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "d92cb7067ac6f6d029afd5a48875228f"
  },
  {
    "url": "note/index.html",
    "revision": "8789e9f82ed921ff799ad86291e2c281"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "9b4f209da9bb2f1fb1c361addccd2c7b"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "269fa2d387aa234a6f58bf7e8e4110a6"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "336760d1f65573071fbc5f3e5d3751f9"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "ec21dd4e825968e83b82ead581528eaf"
  },
  {
    "url": "share/index.html",
    "revision": "f8d7b0d5b0cbc74e03f0010f0a29f4d8"
  },
  {
    "url": "single/about_me.html",
    "revision": "6ce3b59d080934cb594546955e1ea561"
  },
  {
    "url": "single/all_article.html",
    "revision": "df2774b2c9ebe77092d684834b200bc0"
  },
  {
    "url": "single/welcome.html",
    "revision": "eb24f0c9e1b53884242ec2ec5f289f55"
  },
  {
    "url": "test/index.html",
    "revision": "554de126de84099da429b554b1703472"
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
