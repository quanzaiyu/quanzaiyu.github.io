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
    "revision": "b946153681944c5b4eaad6ae109b8971"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "719aeb29fcce3b5c13056a77b51c6155"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a2e105c2bed088027fbc470533fd8870"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "c89db1167bf5d5b30decf7e496f67722"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "678b8b1b44ff24ad934559e82748c98e"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "dd35d9aab53bc9690393c917842e9249"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "fc04d7f352059afb944e45ce29d199f0"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "71b45f72ae2601f2d7717fe09c16bd2f"
  },
  {
    "url": "articles/index.html",
    "revision": "52ad433522ee3d8cc07c20425b7be3b3"
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
    "revision": "61c956879c907b88e225429c3f27a7a7"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "80d91023f3a91487477176603bf261d2"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1caa149903d33e0e7a5adacaff97e295"
  },
  {
    "url": "books/index.html",
    "revision": "6f3cda157d1196587a641bdff0ae195a"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "44f61fa6371a552bb2f229591379ed4a"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "79bd135be1a158cde14c85afdc9352f1"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "b52b9865416f7091d6f554533c1f3b00"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "39ff101b78f45e545f3a4ca9a640e43b"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "1b03c76bce792d149b1086d2964fa9d2"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "26277598511b63706c422ff7a07b4f05"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "8e3122de228040e1354af644282baffe"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "eddd248aed2446bfdb83caef3e229ef7"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "4332bc7e3e03b35109cbcb66fd855f02"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "5eca26dccbcfaf938161472aedf19cfa"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "60cb8162d2b6d0ead1d69c535882defd"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "14669fb51d3f5acfbf568fc4e4d8c91b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "8095dedbe2da6856d4f3769d7eeb4d79"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "72939eabb4f551ce0ff55d86ffc10f50"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "e746d4be2e04850b201bbbfeef26ec54"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "3ea26bd2e619043982b8892b43da3a2a"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "b7992ee07050ad7c1cb5de7b96d78790"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "f7cf4c54e341a406fa4c71dc8ac9bc18"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "087f2dc9fd633ebd34ad0e79bfaf55b5"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "9cc4b24191d14d88e13eb1842ff2fa37"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "2865f42813b0b0fd7980a04052b79bcb"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "5ffc049c5ff0af8913df01a65beccadd"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "98ebe1040e9cd8ae55b3d26180eb499d"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "290d3304bf57ed7b087a9b2f8b625a06"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "783d14a1db58a9fe7f5607fa61647da1"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "9403ae0767d014517436df9ffa236046"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "e7187a76c0101599b2116e7346fc2f8f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "b95eeea97617e6dce5d33d8998ac1d93"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "4941700ffe9b0f37169b3700b2859039"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "5d447abaaa76f2551dfb0352be078ca3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "e21835d6fae4824d05b36836f339a5b3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "f19ba9c3615f93419c5035c9a377a030"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "0a184a1d270c10faa032ce75d42e4690"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "dfd9f82d0e9ee79be6ca5d59023ed2ac"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "40f785b8dff83f33b2e364d6fa7dbee2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "cd750db30c77914fd83700d59371d8b8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "5769ddae5a8bea4c76d37c67be440e05"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "22ebd55e1315249cbd12152ce8f54e82"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "7e9e1ca878bbc7684ecdbb3d177baf6a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "04841f389b76d8cfab9ab16c690b3a4e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "4823335e3e9081d40b5f1dec1c5d3923"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "dc763a8d039954a2e825e20f127c6852"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "c2cf6600623ede3d37e6acd9c75b6265"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "2474fafc0369dde8c21a9776e8942fc7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "79eb4506d558d4df7308f2923341e535"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4a0bdcb045ab2533cdb77687ff5e2019"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "d9ad5592d00b4a08c866c2340fada1bd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "f0d645fea7123c2494ed6d10acb6d352"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "c789845534aaba1a60c72e145fa41518"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "6e3c6a1d7f61e3d6878c1c72d1c97081"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "6eac7c68caac000d0a5aa5ffc88809d9"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "fb4c865258616b3f2adb4b852a2f7876"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "50b2c256e60eaff167085ace53a10430"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "88a857461d2bc314e5d61f4cd8b8e105"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "2b63aa6da8bda4b264febddaf603527c"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "ebf67693a4b79ea004ee1894100814ec"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "cfee51731d98e922a21e5fa9e4e07a4f"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "58ed25ef683422c6a23035301dbaafb6"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "6ce4a64cddd455f041f109873591f840"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "a09f6e5d70b9a47eaf99b14644a1c34e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "f4f380f5a521ce5c3839959efec5e5d1"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "770f6d8ab38317932a71b79182f6b282"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "bdbd652af70be4efbf4e0f3ce3225024"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "942261041b7dbb9fa20dc1b58ec0b978"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "5ffd25cf87a68f192d5b646919bb1003"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "da006994af9231c774c237cdf5e04115"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "1a5529c87cfdc851ae327c2f82179b2b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "f88d0f188c727ff3d4e03d6cf78d574b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c2bdfe0b3e37277cfc3f26b6d40c5ee9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "f804cc966bc52b3a7eab005908a70aad"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "c938ee4b7e12b0a4163eb9b9d77dd1b5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "b2b75a198833e1add88ecd46b614fc7f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "9c5cd1ef44302c0389897436569bfb6e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "72c812fba0622701db4e65fa25261c4c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "aab497aa64e983d708545103ec5cb488"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "d81a31dbf24436e56ed364c461b91327"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "925cb13cd10f08496c6d8418b35d4444"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "c431aefcc277d507a3604123c4a6eef3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "7e12cf8b0b5fa7a03651920a8c818d07"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "dbbaa849d5f32e9eae8417d928d780be"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "14b5f6965a1fd237ecb36bcc6f4dbf4b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "dabce597f4ecc17422b53bee91ffacb2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "5b84bac9222b59d889bee76347e45afa"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "f5dc8a06d64bce1244e1543e1bbb503c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "69c31712039f3e11fda5334f1c0ece53"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "3a9dc2b2919af34afb0dee963020f135"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "3949db4789caccad10b70b18d7ca80f9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "34270e92a45e20de9a205f9d2c2e8876"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "42bcf5bd5ad3a9a8a7f5e78bd55216f2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "1dfbe4bdafee337e5fc6c4526e0cbf7d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "016da5dada88026521bc31af326233a6"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "a2d18f9b0aa613a7b82caa9783338d0f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "e3c7c916ff05e5c122913b25cd4eca69"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "ecd88cd50a78a1837dfcc2d3a439310f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "32a1caa2f50ce7ad5a0f008cef35e29d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "44da170c7abd452a5f24ee05e098db7d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "36c5cc353fc4cafd8f04f9685b821879"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "8cfd02b063977b8c32a3d719c7343108"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "ad315083732907635a860cb23566a755"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "e13b89f62b03be5d82a72d0a8916e1c8"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "a4533e4cf09004f37af7463a6d3af674"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "69c231fd7a49a304a11cb9c2a04a3503"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "e236cfd18da571786c4127c18c9e0485"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "73aa801e6eaeaed2088ee3701360c0d5"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "2634ff611c7fd0889cf5d2b4b2b7c9c4"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c7bfce8451f5788f3226156cdaff9ebb"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "3a640560c52d27e12bf25c3c4704c823"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "be4eba4b1fff58ce50cef81b0d8e53b0"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "8ae72408ee997744fb0644d207f1bae6"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "cb41d6bf1486e42f2dcf2bf8fa4d3bcb"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "a8098d42b5259596d330297c30a2c584"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "aa1d75e1801f6e9f23015e7bfba6edd5"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "499d8bf5a697fc6392c23a38d3d84669"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "de235ed6c061420074e45613885f9b46"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "c0412e35a26566594a92b64203f5035f"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "f833b65b3f1d26fef26f10885bdcda12"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "4d412ad2af2eab4640cd2abd16d677f2"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "673970e1d6653a8e4ee30cb3db4e2ea6"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "6331c3c186f5b041e0e64a840a6c79b1"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "224bc1667d24ee7b3352bf0e3de5b644"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "035b001b2a855508807a8fde30fb5e2e"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "0089b48edb6d61eb5b244a935fde5bbd"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "e9e6547c3a6e30a1883a8452b4ebd3df"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "64a5d35208b85b0aa367f080ea9e04b2"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "ff66fc539a4d631efac8ad75f5d36d2c"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "deb56cb84ac755eb5cb150d4fa7f217b"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "e353f79cd63c7d1fbebc446686044d54"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "92a56b5abe102c29f3584a80298eb412"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "2435228aafcb824ecdd892097a0f91d0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "3b196a029ad41c8618385246615efc75"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "8fcb3f82a94de19ff5ac9e14dad3b88a"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "aa891fa02622724bb6c0e9eb4ffde952"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "49c52094743a3c0b44cf5e979b42a392"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "c403450ac8c5339e0bd1e09563aa9023"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "09b68c522cd86f754d86a5e11b22e071"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "a7401159b7ce8b90091e87199d06ac44"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "f52071d3f541561e32ba260d3f631556"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "ae929c292688e656077c7dae9b5eebee"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "9782d3994e4468c0bfdd66cdb2908391"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "38572288cd99b00a8e49a898f225c6f7"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "ae1399c243df02a3ca98860b58f5d133"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "9c80d1604da38cf66002f3ab6b59694e"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "07339829f198ad4822c2c67398f90817"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "d455198c866b58bc0c2195720c77a67c"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "eeada346d9cb7e818f33a340e154d7f9"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "d1b213a76eb41f46f3c81a99df49c868"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "3fdd0eee33f6e1d342d26be1ef4f7a85"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "d82db96e002c68a735475b3a3ab8b7a5"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "904fb3b8a9c5fdc3aedbaeb5c1826fe8"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "2978d8d663ea3a72d86cd09540f67102"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "afe06e9d87dcd29479e4ca64a0836e06"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "50296d5a387a640e066ac05b32cf69c9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "5f27ad5f829e4f1fb8d728d3d77aeb51"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "2a784a18d4bb9de1cc71c89bac7432e4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "fa11a1d343b3e1b077e4fd14d6f421b4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "87bbdd7f9615c62e0a61c2ee5428be13"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "1147bcc61b5bd66de7e326c181f7a551"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "a06ec2328833ecf6ac6b4a116b62b53b"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "0034228470665ea0603dc9b438dc92e3"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "f53df32cc50a00f1c6b08b8124682bd4"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "464accc012b88d76e79f068984a152b9"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "6668d084e0e29ceb294819b91c8b2ad4"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "bcdfe3c004c22779d4a52736ef3ab7f0"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "1f5c13caeefc5b7face9da68f7f35642"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "685e8edc39abe674c33f4991ae0676f6"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "0357a2d61b7860d7f803dcf44eec7854"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "eea9d36515eb1d058a64c43a5f616fcd"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "0a3358ef1a2f382fda91f27c72589b2e"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "aad299d014a57a29f901b7a8ace41cae"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "be0a003507c0c227c6653ffefad193c2"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "1918fb8de500f8eb231807909e0464b2"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "70d3cc5b17141798d15b5bd19bd82620"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "2ebff60c9ab2e83b02e2738047329673"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "456a94356bc71d6c5dbe0f6084476432"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "2bd26938785bb078e6f14b4d4e6f9593"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "4d96a527d2c6c12c605f32d8fbb4cced"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "9b854233930f5ff0ec4260eeee2738b5"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "254687dc686f65dbe9466877d512ba10"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "45bd2cdc068492be4c09cfa76b07c0ff"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "4d064341c440a44b6895483893544832"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "98ec00d43d906810b748099196f515c7"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "798b30783bf80845ff29c3a8c2733083"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "63a19c43e5f196fb710cfd84d7baa18d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "f9a9d6854b7155bc969586d209f2f112"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "1fceea25742a437717996d0c8b809d1f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "f829b0ddd85f25b5ab4326f51a29a24a"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "acb3471a01dfe1a35e28ce0231c7e1ac"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "62db21cce74079e5c9f187de1af8dc23"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "66f1eefb2d905070927125ba8b1bcadd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "71c531608d8e35e825a3781dc0a8cb10"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "72424a0fa8f0085e9f2bc0db9c2dc6cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "5f73e905fde35f8d33b0df7b357f3bbe"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "51cca6b10f91060a726bf9958f826145"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "cc4fa23fdcf42c2b13ef096b68404f89"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "63ac93d008fd2b8c485fbb57089f38c8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "ba6621cdddef9b67297bb828eaabc20b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "2ede8e51b904686c5c37145a25ff51e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "08e7036fcf13f88bea17fbf738a2f375"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "fdde5f587693dd5e3e963f799e03d349"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "f5cb4f29749056fa4e1517fef4163582"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "43f77098b7c46236a79ede923923ebc4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "41ec0a04ebe2581c75802257ebb088bd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "52dbaba60ea9fd96e419ea65892e4555"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "a4cc7c97b0a9451cd26f57e101f5c1c6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "b1eb83420f72a8863a5feb23ef6ce7b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "97ccbe41ef24e13f4b192dccf5d78b1a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "dc517e2dcc20ee7c1456ffc2d2551932"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "5f8752fe0997b5792e26d8d41eb644aa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "cb6633515559af5df6b0da31dc24e2be"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "25cf5051936fa26cad0b3a7f0ecb39cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "e3510ddc81318f90bafa493af0b4a11a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "8e43e487de81454a0dfc2bc05eb3cb6f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "b58246bcf998bd72eb968b505c963005"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "a17c89ff095b8c893169e738e08cbbb2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "f58afdde513a79c4ed771167c4935782"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "0ee676764842c6dd301e1c0bf3078dbd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "c29e25b46e288efdb0c461821419a2de"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "283573ba011b134487d76a7ae7ccd7ca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "07be84b324d5fea41cf0a63ce3097729"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "df0779e8dccff5dc190d377491d68eeb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "46c70ee02f8d414efce0647d6097b7b4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "4af6f5cd6af857e2e7b6be9f6c7f7adb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "58df9981e3923cae923cd1e86428abba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "4f20e14f2fd0e49f85cae08cec78692c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "1036e068640d78bc7753a6428122cd92"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "426949e2390c3980e4acc8c7c909f72c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "51129f8535fade60f0c4d8a17e13d9b3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "5188cfff3f93d083d431faed06d0e62b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "3963a0acb6e5caefe463929e5c0c06db"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "83d67546727ddb65f42a983add9f9102"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "e9a5362a23ae4f3e445bf718155e1f56"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "2643c37c85bf24e51d8f2ee55b5941b6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "33c00294fbf19241b7217a73db973a60"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "5dbae6ca01dcc628e666e96831ef5fc2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "326b6b499074bafc0756ec62a2afab86"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "ba389f2bbf02d2f3eb15e377e6f094b1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "7363d0cc35bded4fdc2338bcb503acfe"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "df340ffc2596e4dfd38d98f826d8bd45"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "ab345d90889c77cdba8fd5ceabe75a84"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "0dc76ba9ba69bd024d4ce59715faff0a"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "e6c46ec31c1a017edfc7a000cdba8a2c"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "c5f9d8c8ec303e3d7def77788ad17806"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "7de388b10bc6b78f990ffd2b0840c69e"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "8e56f6f38b32add197597a4e6e454922"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "874a759a78c15ace6ce7e1ce4757c48c"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "11c6fc37c880b87d10b594aac011dbb7"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "4e2b3db2af7e9039b97e3878ebcc199b"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "2266eaea198df40ebb7622db4452e9c3"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "52e130a65d5c339e3a6edf6caa3880e7"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "422934381d44f9978a4874dccb7631fb"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "7970103b72278854a853dbc6bd803090"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "f4bafddc5451439be2c8cdf3ae193c7a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "62a8520f0ed6054c4e426dbf4ddda276"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "3b61bb78bae64b55f7b0e6454584bd10"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "ff37476867bb0e39f7decb865a267e54"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "fc8e3a2ab1e2970d1bd943bdb678bfe4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "f790d50a42843fbce13bdebd2c84ba51"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "28461e1cc7d44abeebfd119581a0cadb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "4bb6773747a0144cd620227ac60649a6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "7933d1ee99c36ce9883b694f42e3d355"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "332e6b7f40cfdc4ccf928c16ae8aac47"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "3b1beb9b727f651e7be8dc7c6784957a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "ed5bea2138ad9b1c8ef00a827e63b40c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "c211d955e493b5bc769e2fd86236718a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "e6d501668f8a010cef2f46b3b31b8923"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "9d6ca1ead612ef236a6b36bc59544e20"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "965e43695dcce9d964f3e2b3ab9f62dd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "334609003a44d847f011420910789779"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "33f07b06c22a0d9701fb1f06e48f63c7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "f8b245fc9f8b9829a11767c43a9061be"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "9f1f2bd1af72505f2e965327e1f8c7f1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "3e622533b4282be110d44811b915cf7c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "42d808b095625d3982784d1bcd238215"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "abece125d29b0ee29d41ccd7a6e8386a"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "8e25cfb17b25c32b9dd78e410bf89b21"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "68826531e4da6795c3f30b68e666cb16"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "131a6b585abf2b46219e571f3b4ef685"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "8b343f3e6d55428f1c4511f3c82e9be3"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "1a3ccf75422c6914b7f0f95fd98441c9"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "55ca52fe7c1136850da42f24119788ef"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "30cec0cce68eb99ed31acfca6c8ce44f"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "b7cc93c34b1f124bf8e47fb8e66ef2d8"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "bd83b94d8d37ddbe5ac231d08a0460a8"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "647411bbf0b1e267814f61c6e81c7998"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "500c83c60f8467263e9dbaaf7c82741b"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "482300558a717a0d689249388c1c2e24"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "9d2d8660069d8f3216813544f7fe26b7"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "a10cc72590ab46b8d795fafdb8f06986"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "14ce92f985c5921ee2ea457483a55ad1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "d249a8a8c1ae7ced822baf46360b4533"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "4fa6bb34084f81f1eccbde19dc52db37"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "0626858f717ea5ea6dacacc20baa5392"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "7e4493a3a79c9a100fd2c4a2359880e9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "102fee27438a5b70d17f6ffa89a24992"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "4c9915759bf8e56c3d58d86b0412a18e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "777d1cac697cc8470004567c98d0b590"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "011972b10cb6d09dd6302d1ef1bd5044"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "893762d5787f6a487791c13aff9e7355"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "2d944ec90d2f328f84e7df1dc286c2a5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "b2b2b2c17de4c476217302c3896ae449"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "f3881b574a6e09358571c33fdb270a1c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "7fb2ff12b75df8f7513995d60a3a2f05"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "20bc6578193fca8d8afeb0f391be51c1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "e968b8f219ae7afe5f858aebdf3303c3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "258a3e2da334303f8a6366ff0868e085"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "505b258643e8d2eefef36d792d8b0053"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "c50cf71781cb743cdf747b58345b9112"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "dfcd13ae81c265d7fc6e3626d8eb2391"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "4533a7bfae855742f1fe42426d9edb3e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "d45c9c223d669ba4c24f618d294d31e8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "db09bb918523d4d2fb570ea624f4ef64"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "969f805f01dcb30bf771e4ebc756c60f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "710552d23503f2534f414cfd40eb7e8f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "e91c795900bc860ca202d05115a82359"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "491018026e111ef52379b2a4ffde37e1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "72569fbe53414a540c33c82da92d5a15"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "ab7dabaa76f942053b6974a6a04400ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "ff2514c6a801ea796b29e361e97570d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "e91d4c0452333caa79b659be7b0b193b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "b1dcb664845dd68b38c48dc2edc35c30"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "e7ec4375f5a098c61a4e6b03b190965a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "3e1cf12f587cbe22123d213dc4da7e41"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "82968f0924d3f8bc046889eabb8a08d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "d180e4a3cf67afcc7ad99c566785f2cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "14f8f70c048475bf50eb7c91c3372efc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "69ad118ed07f9e72d86e6c44d1346f19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "cc91cffe16b931982f807944a542ee39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "8d1ac09a53759aaa07e2849f55c65064"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "d7b91a37ebb77e47a9d60f3434f89bba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "c0140fed5d6606489de1d02419702b59"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "3953a899645f56aa0cac9cb212117c9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "a9e5b8d334b1a94788611e5ef21a1d7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "2dea77b79737655fdb09638c182a4d13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "08a252ffd4fbb2a41b5d8f9fd8d70f1a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "587ad20b1e064174d87ffc23d6be0ff5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "d081992749047bae588dc02107ad862a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "83ab4591f5eb64268182916d8c199c34"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "8da32e9a67576f05a1494e2bdafbbf5a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "80dcac4476eefebd2c208042a4e89e61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "9073c122c227a412a65ac4bb98a04c2b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "07b7148db0db2bceeca8a47d385ca71c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "9a4ad0cb10203f1785348cdb9e6641b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "ed938c34e6e5d8f03192ed9c0fc545b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "865256e6f3807d788b420548cde6474b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "bf5403034ca0506f6b4a799658483b9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "b83e0251d438f99a33387aab7a3b78b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "2880ad52111d3d0fbd3ef44964732465"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "55abf2ae4fe01d39719218ad2c969b2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "6cb8b71e2bd6ec198312e1b8606e6e8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "308915f0f31d89ca9c2a561731eca87b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "e0deced06f2cfa1f87b127eb34a8c68f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "d49bca5f773c658a85ec73078d6d40d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "b2633e06fb292fff802ee47fe259cc24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "9b7d373c4c97a95a37d78c9dd17a2505"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "5c9aa9d5819f042c685de8490c59fe8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "f2ebbf2c089252a12aa202fab8a0eae1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "9ba857b27739dcd6a33bf9d2799217a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "226033f1f6e84cd37034ea70e4b1430d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "6fe03c65617c688bf369d8d3ed3d8099"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "629e3f5a9ad8efecf9f499d82d4d46ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "114cdff59796b0d9f4aa06edf7fe5c85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "b2df355b45f9bc76400ed2fb89ad59b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "a7d8e2c4cf748b7073e928ffa89a727b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "c2cb89359f5a98ea893800b76fb244ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "d7e19969bc92518a19a1939b22c2fa9e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "efe0651c41e87e5bb23691ea6a072bb0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "3298e7aa7c713671c60e5beb3a16713f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "4fca7daecc5b47fbd3f4bb255a6bf1fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "0a28c9b403e17e8a9de49f37fdeed1a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "300cd4bd28ce9f0d9ec8c12a5d654539"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "62b8dff6f364a607fb95b3b31a336171"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "bd7bd4b5f57be4fcf357e2ddf6fd1421"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "dfeaae859d75bad6fb4fba6f1c0761ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "bb3dc95146151661f23c500def2b017d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "f6b5b24efc5c5e7dc5534f34456a77d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "27b0f17ce387220857cfade2d1cc8d5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "fbcc5a806335f8a54bc319cc9ad9b82b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "c2d569a1c306e4bed8ead35655d89fe0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "170866c4fcec127545c0e44c5a65ad40"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "f6a4d3f1abbd1a24630eaeb1144b98a3"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "edfdc4f9a78ac6984e0409809ea8bd9f"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "1b51035e935448d1683c642510435202"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ead52341a54e21b48a4aa68308d9c868"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "2ed5a17a9aa2f8af5cbee78e8aa51137"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "93a8801d00e5fae18f015a465c7a9c8a"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "fe170eb089665237154c530ad32c6b4f"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "163716df7dafb145487d900014974766"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "2f4038706d9c2ba3c28c68694b668403"
  },
  {
    "url": "categories/index.html",
    "revision": "3fe272d77cd519e1a6b979ae01fc4ec9"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "0f08baab36d01528c49c0cf0da78d219"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "dde3b20754344275558690dbac6b5f1d"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "2bfe007d95a7026192892ff937a1a58f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "75d1230ffce34daea3636a07be588720"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "80a39a9a9a8d12fdbc868a462aae4271"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "b7fca95901f87cc5b3123de372dccb18"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "237bc7e9288fa66505ead902c6635623"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "7ce3e9bf974a5c0da602617e93d9465e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "e0d904b4d9c58e27641ba6becd9765ed"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "3cc4e17bb91ec6d4393620f5167e10a4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "006a495628c2938446a38cc445b10ad2"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "5ee2856377e36d133551ad05044ee5c4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "e545777b830e2d4c17de7524270a0cca"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "a4645b6e608935ae2f77aeeba3d6ffbe"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "d4004c68f6f58d3b4ca73d3a9188b9e8"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "b751a571fe337eb4c401f0ba567cd483"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "216994b1f7669f32cbe32fde70a15857"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "fd76c525d4704fd22130f77a8da0f4ba"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "38b5d4137eef570bb97d359640cbce24"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "1ece53fd2707ade910b5c7ee26bf2023"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "3c032b3e92143b32d4aef72bb5297812"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "6ceacc84e37b8fcbdac79f47f4ef6303"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "2f83615c2e8b3a9b825dd90dbee82418"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "d4bd53d72a06cf58c5701f0a506654b9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a7df4711dda10590e7f99c7b4799de2c"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "3a6a7a20026b5311d65b2cf8c96c2c45"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "1f981e42eef6ee4b31a79e5429583529"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "3da8db18282b831b77ad1842a34f27d0"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "0c5bcb5e9506d96c5f57bdee779b02da"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "aa9ff08cf1278d3799e900af7bb06293"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "74e22462d9ff8b718279f1b4f3950c40"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "4d13732f9bbc95d79b489d1783ab0f0a"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "1e712e02c853f7e1ec1b7dc58543e208"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "c3c2753995bd78d56ce0512e241e12be"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "2e2219767b295989848244171aa4d0d3"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "8f9187ec6d5efc9ca4e233e9b8a635f9"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "c511f2c9436a3ce21e77186165cdd9fe"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "8f4ee32a23323d1e334cf8ca3eca3fd7"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "2f0c6b2c24cd007ec556090983adb7ff"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "b1c1c3750b5631419963e12f265d614e"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "a75513f63082ba9d2f94187cba9f67e5"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "a6cdebea2e855837b38c21b4aee0ed10"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "f1f3f8dd3e9785e6cc902632472d6702"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "14258956b79678ec678cd48a670f6ee9"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "cfb560d4295da3fcd5f0fea5fef6a909"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "839adc114e75cb978a9e8e867559e822"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "b65e2960b2417681b33059bc1483b31d"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "11bdb44c8f80b876da46832fbf85834d"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "53cf8e41c110723241a0d531a6c51e53"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "bb489851f919c9e912906e5d67130abc"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "9d4c8848605411ad63b3dacc6c13f9fc"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "dd69a75f0dbcf43c88b75e2beadea08a"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "537ef8d96791bbf5d5beb4ef07391c37"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "fa84d852b12781e127a67b4fdf91712c"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "612e216aec71616585a33ee19aed1e57"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "fda87e23750dbd882029c490085d721e"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "4f545cba91f72474b9528b006b057cab"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "e00a15ab61ca49d045f98dc4ec83180e"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "311065f6b54ddf7beb3948c3dd3c10dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "3c470d410ec31961327db1f06bb1c55c"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "6919f01f7822357ab91a653bf48bccff"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "f0cd8db9aad4fe35e6529248211d3c8d"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "5cce43b6f1d3ed357d8ce996104ca428"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "6ea951f97d4977e45dcb36ecc2271559"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "9e39760499f3af24a5d9e611b0b3660b"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "1aba1b9af25967b1471403a76e0998e6"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "6f1d95b3d6790352db0bbfac7a085447"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "a4a08532d0e10d9fe848ac8ac4110125"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "e0846eba97fddd810bc99b9868e0f53b"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "5bafce9fd54ed8fb4b24ba69a5cb10f1"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "2ecf02b25a60eab0e6df0322fcbba075"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "ea63e2148b14356db361c0ac10d456fc"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "d0d6c673c1d23f50d3612c765b20ac99"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "a853438acc67c74f1252efa827d0fcc5"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "3300180bb6fd7a9a88bfded0e725b706"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "45106f4fb5013990457b82d24b4bd32f"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "b3da4afc2f54e60e2c8533ed038c815d"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "7391337fa34c2b09d8390e187a4bc050"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "d301ab3e2862317cb9c30838b2814153"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "23074c2d07570e862d3b5d5cf257f54c"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "b98e57dbe4402a2f36d552dc2a406707"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "a56bf7254b88fd0712c37fddde21ca7e"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "9a77974af9fa7608861bc206b6830e5b"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "4cf5ca60223814c17bdbc130fab41f19"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "4a2654de4766d5bcf57f69ef32a1f9d7"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "c149318b6b8afd0842fab4dd6fbaf8c3"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "5b0214695f7ee425580fe6064db9883e"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "c7a0fac050012c56973f41da623585d6"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "3a71b6b866c2971037aa7d2274a4205c"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "1bd7cd4bb3f6447e70a63249557ae2ac"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "139d555d734ec5be308362d36c293736"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "5309a2a2bdc2f1a34f3f4877aa6468cf"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "da6e296c09021d243e756c0c2ed898d2"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "26b20c412ece54ee92cd634e6697d778"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "62b8e25d559e430250e0683a1b95de25"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "f143868c8b51c1cf3e2e861def9387a6"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "58ec4bb3f16c2eb05bdd84d6e3987a5c"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "5dd14fbb514b6d0f2c3cb4b29e4e763e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "e933d0bc554a1b97f57927ebce683277"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "f49ba100aa084cff5093aab899e233f1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "3a0e74fb13de50086de86374d319423e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "706fe3a020a09e05250f90f85bfabaac"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "390bc782a0ca1df56f14d21830f3dfe5"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "648ffce6fbf541ec273bade0bab13bb5"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "7399879c1d0d03faef5f1eba7b4503ef"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "a87e289d8b2f2e154a621c8dd81cf22a"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "57997e3618c5987a858848e6f36fb124"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "f065be41863367fb97c9919021596152"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "de0568597c5131566c6137ca34828eb2"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "7e48a504d6e3963e5c5259bd8200d194"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "b6a5e82947586b3e77e0ad467e67f681"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "99cbc46b7f57d0d303e1a5b1e49a3282"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "4be69a00a579c2abecf15eb3c5b599f2"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "965860832c7b1217064dbfdf352fc662"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "0af0ca0f559e0c035b1462137785d0e1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "7503829680e695288439eb5b3cd3bd71"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "5a842e7a4764d5dae45a00aac1ec54cc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "a7aa6200a289766a8b7eb4b1034dc9c5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "c1f32af7293727a7ce222d5cc9037970"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "010b56335c517ebffdca73bf00bf144d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "7f6a1def2f9b5328b1411e2ae1a0ee1e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "1d430a477edc731c3b863d40225d1402"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "b8a50a5c0a68c576cc6d3e33f0d5748a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "5fb606032106fa1dfdb02d92941ed7a1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "08ab7d5201167cdc0f1d29c13df3ca7d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "82585045483b28df6eaabe7fca4d36b1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "67a098dec8641a23ab61b452c2314255"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "d34ffd61cf8e119537ffbcfd702657cd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "54204940a3ad1717c76bf5528214c2a2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "85ebfb9af10a5d148582875965823a91"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "e2df7113b9a99384e55bffcc004a5563"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "773a55a3e26ca13fda6b0d89fc096e04"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "75315abb034ca5b6456ce8a3a876e96c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "ad9d626fad4243245e4ac2b99cfaea24"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "79ba6318bba6c8a89efd12704c396d8c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "cd0c193fb96983790f66d1bb2fb3efa2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d48587d6ffdbbe798d775d8e7caf7bd5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "ce116873b2f7a578f61808eb9c6abb77"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "a2e61e23d3411c375147251c97ee2cda"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "3a509b1d99d03fda9619a78ef018da8f"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "d837df25be23d1ca4b7db9108a3742c4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "08d15747288bea1a5aaf571c1a4eff7a"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "12922b6f2fd1bc86fcc805194521548f"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "929d384b26c21c889e43a3e09d16c4d3"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "bfb10672b85360e3fb80054447c46424"
  },
  {
    "url": "categories/os/index.html",
    "revision": "1abf46a66a9443c9781e0ab756d42d44"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "c63b69d59f6f0407d9e59ac88b60895f"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "2ad3e167b6d5bdba14f761907e906b08"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "6ed9e6b29b9098ea1e34df2837fa1f9d"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "62f9e85d33516677674fb83d40e21444"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "9236a87b7a1e8153110fb44faa854cc9"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "3ac898292aac010f480e7de035c3fe5b"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "b5ce1a6620f8abbf075da2ddadb7aaca"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "2bff62cd0f1eb230a53afed03a622742"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "78d2faa76b8ebafc9e29a897d0df9156"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "b62a24843f52356cf321377c49cac2da"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "f2bd126651fc5dd93e708a94cf5fc2d7"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "d5db66c52fcb7e812dd6c5748fa85309"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "7164c8edf50bb7687cf770718b16088d"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "268cc1bec17c94b0bb9e8837529676f2"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "39158175b7b2dcb9d6384157696f78e1"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "56b06810296d5f3c36322337072d20bf"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "e10e4429d54bf923027be45595289c2a"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "310de61012ae43a7a0f26a563088077b"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "3e4aba294969087487ba233eab0f3b5c"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "5045ea336534bb21a27606dbdce6d349"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "3faa737755f0ec55c1e607b55547bce3"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "dd74f5db8451757486e6c253629bee12"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "60d75d5d1d024778b836f1a53a0a0a9b"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "6621ca8f76d4afd88f7af9958f044e4d"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "092dd48896fde692f890775a295ff462"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "89bb1d592185513e8d2e83c4cce792a9"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "a65fb9844e9d9383ecede713ca30171a"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "0e57675d0edf852469425cb2058f99bd"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "2474ab4fb220fa4b804c7c0476bc8556"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "3a8780203e299122fe7ea8af53a0c836"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "c4e9dfa66efaae39cf7c770e71775ae5"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "729c019a9926113ab28f7cc0dc697ecf"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "c1e59b69d784877f64f5eb3581b16c6f"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "5ef84d2fbc4e6859d8ac613291937d8a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "24d4c6469bb4cd00dfe6e0328d0bd2ea"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "336e8e8612b92dfef3f01b4e7ce15f2e"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "6548ffb72d3b999854da5efc1cd3412f"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "4ba3cb799898e29413ec2a0795d64c5e"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "b7384272fa0bd0cf79af4c396cf52b70"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "8df9b446b18145ba270cc97dad4e2654"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "c4eee0cc5ce913d34077ce5ab516b6f2"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "5571acac754f0fc7ce6b95b59d3459c5"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "22d997adb9362dc5cd3cf7d431c9143d"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "2743f1ce46733853067dabe227fc8abe"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "0df9fdf64ff516c1bfd1b75ab82aa449"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "8bbb6081b6819d313475b4a1a68d14f6"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "c410000edec4cd9fe3089ec4972ac4b3"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "a36226114f86914329eda12e669148b8"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "ec960f0b792a7560710dff253e5d1e30"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "f5f2d2c3d12940f561abaeb1f0fe9d2a"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "4da4182720da30a26c521a964e25c482"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "56704bcea6589fc11e743d45ccb94b1d"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "1aed0d001a2156fb9360ea403f13cc44"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "dd61cfd2ccd32077390243dddfa71e91"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "4e4df52cc5b4cef80c870701ab6515a2"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "26a8b683bc327843c78b92874cdc5865"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "eae49d2c9244af9f8a9cf1e3539c8237"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "843d109c72655be42424e7ae2fa162e9"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "32bebaa81132bd7219aeba4113090526"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "da10fbd25012c3dffa15e03cbdd54586"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "90016dc327b0122a8e69998834274e01"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "89b1007588cac76d529c059d80ef2bce"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "ff534c31668f50bd43be8a0f74c3dd04"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "990dc59a9a426439949a339dc2d90800"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "11d9d62d528a58564e150e8a729dbfcc"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "c3d30f4ad8c1e229dcbff4a66d214965"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "766aaf433d18a3a03c392a3a5f7ea3c9"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "72d6622fab609af0eac8f12e55852b68"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "41bc207f58907613db38e014e84e51c5"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "49e20929793e6347a9cc4ac61e93a87e"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "55d821cbd2a9f09cda7788545bced8c7"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "92f79e980794ee4ac94323ef264b72e2"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "ef2285f2b051e6535f0329bd77ec06aa"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "31a03dcc3509ad08edb43a9f54614f31"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "9f38482f86e91e1af954da94d9876a50"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "96e7268378d41c4877ef4c9a0ddf234c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "46fc4f79b7f4c85dfddb428586c73c6b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "27ff2aff909fbc6f6dd8875af7905611"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "0c96f35d60b15e4bbfc88b8f0923b206"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "cb444ed87570a084a4c1127d41bad336"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "3d8cba8037b5d33c3315ca7923e49fad"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "29c9c8e165f9242354967661acaaab2a"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "dc5a91a21f0ff6ce60b7e856248b9d87"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "e596aeed54c00da43adf128b3fa31c1a"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "fd5ab8da9d7466fda070aa090e6e2c99"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "35ae8e8b7861593fc8b734d44abcb949"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "2eee515d7ba5b9c186005bb237820737"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "0443b04ee4d5834755cdcf3cc33a049c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "24458a447bd9d086aaaaf2d6fa640512"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "e1901e217badf9848adcfa8b5bed4f6a"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "a6fca3fcf9bbe13e51ed3ce82f5422f6"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "928d68b6a97e86fd1fabb44132344c25"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "d9a3942b5b653b9401db59d980cb1c7f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "b4b5b2adb48c6e2ee3dddad559278542"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "af9661b1f441fa3c96a66aa841fa8eb7"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "a0e09d5e97d67ff5815ed5c171b06684"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "be82b6c4ce18100c71890f83454a9174"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "e8f6661cfedfce8bed9d02afaca26a8b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "6276d38f41980d077ec19db72e40e87f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "5b4eb34c8588474d7e4fac311aa4481b"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "335ff3f4d9e1c73c692808ad7e3311f2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "b0f20063ac263433be56092eefb38ad1"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "6ec7d18da440f076e091fe425440583b"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "6a280ba103d18a88a57db1a8d15a3ebd"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "ca1a575f48110e1e254db00fba6a6674"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "4b3012a6d180786da781d72902a5ac32"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "8969921d8e6fd982a1e61d986bc639ed"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "2dde8d62f169b5604227eddb1d0d58fe"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "eac334be736e6dc55b1a9c40a7cdbbf6"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "b73c43043dc0e6ba253a55c4c89cef11"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "4f9e55571d849085f0165a5bf4ac5925"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "fd17f41d7fcb9b4403c4378d71582852"
  },
  {
    "url": "categories/php/index.html",
    "revision": "a336800d242080148dfa4334acbfead0"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "e3e7d817b55604dd7a75a627e8daa0f6"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "3c96cdb60a6febb29a9f2d639618a85e"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "8c783701f68e05beed945da75d3669e9"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "74b81491e0a614c039067fec5fae1d88"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "ad7669fc1c9bb49cb1de5c8187685ed5"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "6390e9c981f334ffcf086cdae89249e8"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "fae2ebe2bf4e315ad3667ca013ee74bf"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "27fd17b3e56adc3397eafa1cd2778562"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "4e99910a8f02e81617bcaf7ea165cf38"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "c7fb8b549549e497092983ffd31aeee7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "f723c76c8ed45c626f5ba5ed4326aa40"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "4b294d1f1d6fd0db28cdc70b389755fd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "3f38134c5c4a32782065b2bdccb8505c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "93579a9b81291357f1a1b364577285ff"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "61a5e82c55be24a0d9372bdb756f9200"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "f4083a0c4d0baefd56fca3cb30aed71b"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "a16431151d90de50906bc2373ff3a3e9"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "d5345093c47045ddb49ee622ce562a57"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "d16874cbb97c88e9531a19292afc4402"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "04309158ca10e6ea1d388e93cfb966c2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "d6972c2ddd100fe751561e2e3253ac80"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "58b1778bf07149202f78fb2bff3be34c"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "18b0a0091fb16a7b0c9526399dbde55f"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "95767ff2242ec08899efa2e1703e75bc"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "c46df4b5aad7ac174afb4a464fd7646a"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "87b56b5d4a8b2c66cfee6d3f9cd62575"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "eb4d18451826b69263a7e9cbc43b938e"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "3a016f2d70f81a05211b27262e03247d"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "31bdb1957a1011ff2388a67abbdb8998"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "be40bd9f4c55083beac8e6bdda392dbb"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "3eb3300000b3fdbee885e66c12ba3c9c"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "39512a4c1ee566ebbf44d31fd11a3f5a"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "e6896e3f5af3718f4c719f77ddfef737"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "d7f7b7d386ffaac74edc63b1b4f60f23"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "cb03ffea8659d2db75543cd5a4806cba"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "a467e2cfd0fa08283ce225e03fb17c4b"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "7a973dcf03ef574ae74ef7936521ab14"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "fbffdd1a255da21928e19e065da3ecaf"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "08f4b04d6c44dc5cd9134a141902c701"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "08f0d466c1ad1b4d9f75629f7276ff92"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "7dedfe55e7d8054a29617475d8bd0304"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "d408ed9a3f7b8d97dc3fe4bda15b7578"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "7d0466bc653ab5bea2741e74030f53dc"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "deab2b7397a5ee98cf8122b748440472"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "47bcc224754e52601ddce94826a13162"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "75934593521bddbbbdf2174bd0a8911d"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "1bcf84c579c3551d05a7de65f476372c"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "4522f833bd5a63ca8e802642ea7c9a68"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "9ab2fcd4f56b7e410caa2e67792a5bcf"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "f6063f45db364f56fcb5756d1763f68e"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "7119d91900e13c322f566ac5dca110da"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "c463981e9bc89633d8e8b80d739f2f5c"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "6fcdb7125d66b65809c21845b6dcf3cb"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "b080130cad1c159ca7ebd40b03c534c4"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "ab07ca38fbb25d17bf1a40bad22a3b8c"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "8f957809872f07e37ed4f36d4e7d26c9"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "dc9302e4781e4c9d4bca58cfcf7a4b5e"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "a2724aae3b70f0e1903c80045979b01d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "8010cdb23dc1daed20fbac8bd52ddc34"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b7fc9e02545d0bf545893c4b1a88289a"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "2e3dc7af596b6a750eb5cef85f638d7b"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "7a4d0a9c3578676635c898f71b68e469"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "0fcbaf97ecaa086486da56ee44b0a8ce"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "94a0fc9b111a4f343cc719296e228b1c"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "18ddf37a88a2ca886e88048d3760eafa"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "ea76ac15c252b718c31c091370da234d"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "3c6712ce0df2f71b0092c0a421bb98c6"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "6685b328068726a134cda7a54a8a8226"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "bb2d4050c1744f03a4ec8cc23f19ae1d"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "23f1a087aeca95919c73a34402f30b4b"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "cce571ab0e7d77049e47771b94f8c4d9"
  },
  {
    "url": "categories/system/index.html",
    "revision": "cdac5ed9bc57880077a08e69f0d76029"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "dcbc368e8243ffa7438c99971e7a270b"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "6ece43e23ba11c52c0eb8a3c9edc7e70"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "8911e069865b3925f674f0688ec2203a"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "877237a5d5fb15263c88a1024b63acec"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "27eecc42aecb63551fcc0c185f5b7480"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "09946f8305333354595a4d01a2ad2ae6"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "3921d5483aaa4609fd2400d12583d87f"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "b5b1c6c912882e26b9464f3b5efcb647"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "2dc94c4f6d575851131eafb32bbf2580"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "983f6dd95cbf05212aba126ce4f2128f"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "20798410376e5e8044b90eec0c6f392c"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "f633a9dc3183e7cf941bc85046031b1d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "4a5cb32d643a8ff73bd664a2047daea3"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "025d1b577e6a8783360d97bafc0bd206"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "e4d6444fdfce64295939f61738863c96"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "a5a196de9c015879c30fff8424b77ee1"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "1188c86db1382c5603692d4434b78b06"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "8ae008ee2d4c8d374233036f32543ef6"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "06f9d27fc696d26f52f18c532d536d1e"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "5f9ebf5dc22d1c928d64404e5d2dd83b"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "79af95013aec9bd63620fe3c8814d7cf"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "f42439a64544cb85c355a445940f15df"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "698197707ac1f481468e552b844c1924"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "b3ecb30de9153d71647c7fb241bd7bca"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "ec6291221ff9b9f85e7613e70b8a2877"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "bef3ab8e950f0cf0fb70ba34f1d1d1ac"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "53b494602959b9466fe4abcc63b8b8e7"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "514c429da80cf165ae3e0889c2e76aa8"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "4abc161f5f05da86a1d699a923d41dc6"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "92bbc51b68b04e235e99bfcdb1c4e754"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "9e071cc2cac37d098d8e050b0f1310ec"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "c83902cce80dca6405a20483b6501520"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "b822fa71c3b5a5e7e526dc889d036201"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "da0557d9675272d4c260246021b0be7f"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "b8095a7160935edd4d498dfb15b61c02"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "581040f38cd7d9bc83c242e0d1c7288d"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "87c71228e65ba27786e2aa4a77b6cbd0"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "5234d279bb87483bc24b44543afa2444"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "61c48711713f762117b9542c2e7e6c8a"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "2916c79ef40c077e48f03c1b673d2897"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "0055d8c93f68cc74b94cacbc402839b7"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "4ef3dffc6dfc696a6348f82befdabb53"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "d9ef2ef5241d3c9b6c49ad5a7403b6b0"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "7e8073f2d1ccc1c5676b5d2cc6da4076"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "3b5bf56386752cccee37b832dec77fce"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "42a1d705796f7741dd8b72ce9b31aa8f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "11a558d007996d7250a35d94f719e194"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "e556a53466d263c955029a8e25723abd"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "fa508ffda6f786c74cf2703b7424dce2"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "d1793e3b08169e04f2a51ada62a60819"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "4376d2b0d84d887f9e39425d9f339cc8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "eba5aff4cd8bf293a5fd105d2b57e76a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "3d53a76439b0d5300071b3ebb52df32d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "91290a6bbaf820044ed8fec5b61ccb66"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "c2b467608ec22f552d7d689b991f482c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "130a1d2d1b9ce34cf9a0b27375a3c254"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "a01d2b97b54ac86dd1aae1e9e8aee755"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "3edfd2b0046b83fa6734eeb4251e97d2"
  },
  {
    "url": "favorite/index.html",
    "revision": "46bd6590b065ed39149b2bc2313c576b"
  },
  {
    "url": "index.html",
    "revision": "36b0adf301109a5deab5a44b087b2a04"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "9832c0afe66313db8b5c138eafe3159a"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "f3efea299a286a859d9071e1a20be375"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "bf6d936fc4905c567a0b7b83563ee63e"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "4d010bace55db06d91bc5960e68ff462"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "bcbb69c7e81cdf4bf2afada8f460cb86"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "34978bd5771d7e294aa683fb5f1bdb4c"
  },
  {
    "url": "note/index.html",
    "revision": "7c92b6004570eb28eda51baebecf87cc"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "35700ff99275fddd655777140764fd50"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "c53086bfc885dc6fd794e3481438d7cf"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "d96836155490a10163ba8c515ef33a56"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "5776bb448275e9357c0184c384c2f4ae"
  },
  {
    "url": "share/index.html",
    "revision": "3f49a6bf5f77a547f2ebac82b14d9a68"
  },
  {
    "url": "single/about_me.html",
    "revision": "0b598037ac9ef626b4301ed65ad50a60"
  },
  {
    "url": "single/all_article.html",
    "revision": "cf1f5b879bd1a2b5c59c3a0e8546e58e"
  },
  {
    "url": "single/welcome.html",
    "revision": "53bccfcb13d2a6989e89e651e426a28b"
  },
  {
    "url": "test/index.html",
    "revision": "a3bfa598e3abac32908e2966709d8fb1"
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
