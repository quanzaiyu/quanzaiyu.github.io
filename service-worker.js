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
    "revision": "364c5c7bb74ce5b94cd9e1d693e54a89"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "b39f74133afa31c059e88d3c9c8189b1"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "fe7ab94688164c91c32530e88b645b55"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "f48bb702a865a3968126b45dca8c03d5"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "c82123d0277f57d0f47a1251bc133fc6"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "7549d7779f5818028d14815cbf8a3fc6"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "5f4d38e6862e9b6dfc4ca4fa1885c416"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "81d72569f905f478f4e1f41172d5d172"
  },
  {
    "url": "articles/index.html",
    "revision": "f9148da6cc8cf97c24eb52ccf4430a45"
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
    "url": "assets/js/1.a881576b.js",
    "revision": "80ed0dca5131be4f513f9ef59aff03ab"
  },
  {
    "url": "assets/js/10.6d59c373.js",
    "revision": "dbea2d41f35e595c9384dd5239007d8a"
  },
  {
    "url": "assets/js/11.034d2480.js",
    "revision": "8fcc94bc529870886d1dabf9e6dbca51"
  },
  {
    "url": "assets/js/12.cb739eec.js",
    "revision": "edbbbfbc33b6128bf24eadbf45e46fe0"
  },
  {
    "url": "assets/js/13.e9409765.js",
    "revision": "d0277a142181d8af713ee20b9a013e1c"
  },
  {
    "url": "assets/js/14.e1f02123.js",
    "revision": "77c709323e522894b901dc79ecd4e706"
  },
  {
    "url": "assets/js/15.be276ce5.js",
    "revision": "8e4c79046dc616a6c7552ba6de64844f"
  },
  {
    "url": "assets/js/2.c6c971ac.js",
    "revision": "5efdd3d3c2505443490c8615e3d19727"
  },
  {
    "url": "assets/js/5.86d5ec16.js",
    "revision": "33af60b90f435d3bed3d497b840efd7a"
  },
  {
    "url": "assets/js/6.a0fe7dfd.js",
    "revision": "0092419f96765498447c3ebebebf924c"
  },
  {
    "url": "assets/js/7.8c024bed.js",
    "revision": "e9ec1eef0f6f391cc2663f784e7e6dc5"
  },
  {
    "url": "assets/js/8.0e6fec9d.js",
    "revision": "2388dcc389b50927ab6d84523885c5d0"
  },
  {
    "url": "assets/js/9.ad9e90dd.js",
    "revision": "1d08cda34a3e71a35ace57f6f0776793"
  },
  {
    "url": "assets/js/vendors~docsearch.7611bd90.js",
    "revision": "2646dcf6352cd8006db5b7c5b96c0fad"
  },
  {
    "url": "blog/index.html",
    "revision": "96f4ada8c22fe0d15a7414d813e26703"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "0dc0af81634de2034071bc18da6950c3"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "bffa80f70083ba0a55d9d8ffc27f013a"
  },
  {
    "url": "books/index.html",
    "revision": "af2d01f6e19e48c89f93407f541f0a0f"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "16a0f48591f03edc81cc87283f44788e"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "84a10384d18df03efcb84bca0823741b"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "c5c96062307051671081573fcb8cc179"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "62f67c57839d63619b201ede74d70054"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "6abfbfe4d6ea96d3813658d2b0d49210"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "0a2854dd9014bb15da333d5e7d313836"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "9e2b2f6230309db0788e50f74cb4c070"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "7afaef54196f71c2c6e9573e87a74e0e"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "7c4b04ce8bc7361da86ef11ecae3c87c"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "ec5506faa67f6c92fbd6a7ab302a8794"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "2ddfaf1320c160ac6927a9603344fdd2"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "4895faeffbd403148b0510f2064ef4c7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "7e43e684485fdc700890df3183b06e5d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "3e4b7bcdcebdcb34afe618e81e705e3a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "fa17cb9079b24c70c67222e3f6e2e8c8"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "90ade73011d6647b7f671ea9f4761e79"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "efac33974ad37b36aa5c529e24a000dd"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "56ee37137fd6fcbd7b486dd0c4132970"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "325cce4e278cc8fe2e476eef956b22a5"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "2ad45767033c39679a06d0b4d03e8130"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "096765fa159dc9394a2c2460d93c26af"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "027322e5a9811925c26e8581d5e2589c"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "b877f55205e5b5b1904aef611257f4dd"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "f11355528f7bddb09bfb95a696a6a42c"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "6b4b9cfe904eb7d378e8e48f94582d82"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "eaddd3005aeeff6db442c2a83e5d4d60"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "b03147b96810a4e531469a0899d31661"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "00c2fe67d8c0f1e13f370cbb802c1345"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "56d711d4a1d9af00c5cde4f08a3666ce"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "4c32a4fe33e65c13b4bdc8b60881dc40"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "8527cd1b31a3683e5bc3879474c2ee56"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "3082ebf23842e33323ffb7a7b95fabb0"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "9c928f6ec379e1180a07232664485cd7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "11afdb8b3f6ab87d1dad4fe2df307985"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "3d6b1952649d6283f3f47fdaad617e77"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "9752c679245b23f2d2a6cec461ce4d9a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "d13fce9c5df44a461a37c8d2e942ffd1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "fe3398bafd634547871c2504aa068bb6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "e21f7b146a4c0c145c057a1c52e34920"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "aa32b5656e21b278fe5dd914a201c3b8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "032024802580c82eeb3c9f16da84cfaf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "50e63be752d5d060e68598af1e528c68"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "e6a1b813b759248d2688b651868d38dd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "2cd2dbb19a5f1e68b5f11a7d5a65a74a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "2cabc6daff4be6257f7680f1ee7bd090"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "7405211f00ffe44f8f08b8a16660dbd4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "4952aaef512eab26a22d14fbfc8ad5a3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "41ee7ec0f44e212f6f9953d93a72a74e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "fc07f78696f7400ec6f73294837e23bc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "f9150f61ef59242a0d9fc37a2a97be05"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "4ad5f1139082c928676386b69b87e7a3"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "5ad6a0c5d60df9031d515b36804f12f5"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "82d41ebeafcaa2f94b5707fe97b90202"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "aa549c524f482040e757dcc5d04836d3"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "90b72612d5587e506b89fcc2e87dc137"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "3fe18776e83e7eb0d399086123ca4467"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "e0e3c908e27bec5d1b6c4ebca46ad13a"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "e94dfc8af484a6a1fc62f00768380666"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "a8e1552ab6d183206188ec095e5456c6"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "4aeeab01afc1e047f0850e7eb1e9bcea"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "4d9038f63c82fdbac79a9c2af51c0897"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "68c70e628256116ccf399c87144ae983"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "6693f98bb5035f78ce29458aeb851503"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "324a870045267cb3c31f4d32b662955a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "50dac60d8351edcfb4cfb0378da90e16"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "ac7c129f5f853a18190ad29955269d9f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "6d03a44f8ec44d6ba510e48aea72b17a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "f107c15196ebf225b9943cc3f0f42380"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "505e7191225be56c86b70b51c0bd1e75"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "330c627a88e75b0966287f2fc17d65a9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "588f37502d41e065b125730396563341"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "8e8a2ac5f5be173d7c84ccfc56bd1120"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "948591f31451addbeb8d82d1bd7f5176"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "923f93684d95db8da49e9561272b3cfb"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "0bf8cfe81862937d04c4ebdfd1712225"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "b15f2e3978d3221bd6d4a6ebec4efeb4"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "c5694a8938f662fb8d305e32eb8bcb7f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "480dc64c091849956812a429ba2ad349"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "b29ef0afc19689fe61aa213685e7cf97"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "a19b7c3c9a4e6f24b5802d63b8f2065d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "b88dfd58c86eae0706175df5dc89eec9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "0f90ac272ab696aefa7668a655ae2d20"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "f85f6dbd6b207ea7f5baa822aa65fe49"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "b5e20b530311dcd4cd0ecd3b752df4fe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "abb115e14653da69429f1e14da3d6e5f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "5833b0b9f18783956e3a8d5609a906b0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "92c9637a3d4d91e06ceb7175d61e185d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "9d32460e10118eec1ae150fb684d49a8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "a692c6bdf92632e00eef2c8d747672a2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "a54d56f105ce411e9b94d0aca3630d52"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "3eac5d52ee629ade649f84ff5b1db608"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "52916157780f342af1ff94cfc5d12f42"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "e5e3b5e40daf9ae1ba7f7b210d5f7c5e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "71aba853dbd73346098f2702e495414f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "214ffcda111e8af7352d2ad13906f5d4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "f1c89e8d458e3120e79e669b90bfda7c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "f50004ba9205ccf067162ba0a3314f1d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "2c1f386feef57d60ca3e116cc79d2f18"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "37ffe377836eb8723d0f4f3e139b9a8b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "f234777d2d66950fd779d90096adfa4a"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "94763e2971f9dd0171c0878213743865"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "5916d33a5228093587adc4fd110ebf69"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "6cc64a715688bb1b87fe7cbddd5bac44"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "20f4c46d2b20822ee3f3c2899db3a8eb"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "2755bdbfdbe67b5be48d1681882e1761"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "50b3730bfb6bdd7f0b94682c226cb681"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "11de72736ca8b2688f2bb96871c30d23"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "ad77d54ec0c501675ab2ac0170fe9794"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "2e1c29bc64de71e21171418eae58077b"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "d50150baa3e7b93940a36b1ab748f5eb"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "544b7e47a17a68668e8973d4d6ec7d2c"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "3e82ef2c20ade399ef97055cc6013253"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "67a6f47b1ebded08cb186eb51a2e5408"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "85540f52a3877822318085d07c02e60f"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "963a4cff9dfa29106610bf71bd9bf81e"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "8b54152d663124880eb52ae4c61c822e"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "2177b34ab49237f0a5d667f8e9f8c7bc"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "73d8e7fd02ff48a43c70dfbe6334f503"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "fd148e1f0b3c96a58fa66695ff1cc89f"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "53f2334cceac032db36f56977de5f4a7"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "c486759da9e89c7764413a899e237940"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "0a633336469b5f9e06d87ca13b6430ac"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "c4a8ca04b621c1704e763ca0c31adf35"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "a89d06d49493242d733ea4be0ae48cb7"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "c02a9634567de9a5afa9daca1a58c548"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "2c6db826b306400b3ebf5529680888d6"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "747f8cfcf1e82ea77bfeb563423785c8"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "80ddf9d24cb945538a54ebc71d559b6f"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "60f55cc643ec7bffd412d9f2161700ab"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "1a4a149df739f96a0908e6fd737255f0"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "2783ece95b56deb59c7598136381f5ad"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "ebaa9222d4c6c75a20c613a66dfee544"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "73d44eec41bec2c37eb7904bb5a117fa"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "36462e1b67cd8b9bcfb29bf2bdc27eb9"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "cef78c1eaaf86e484d3bcb6528700822"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "6b787d57e090c2707bd9b741576f7092"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "4b4accf8539408dae13d79272b0d478a"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "1f444fd255692cfd6d854eeb8d286353"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "42cf14ffd470790f9a84019274ab1e9b"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "7ccc097ef103c0ddec66943442354848"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "71706e7b0d960bda809713cdbb9419e0"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "cd349b14bc083410162546b39c51852e"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "2c354321ba24224f86dcb67d3714252b"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "8125500a6c746c2fa84b8c61644a7b4a"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "50d8dcc387405ad374210a0a77b4b193"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "3d1cec108eeac77fb392dbc3bc9b0f74"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "8fdb2e9774eef17e1b78e54f20e02635"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "38d915b44372da9781f032cfd51a5703"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "6dc67254973e7467d191783dc7c1df5f"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "d5e8d6a96b5035fd88ed713519b9ee33"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "9304844f6c4a4e3b88d2002b2ea4b3e6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "44a7db65b091baddb6364d40e2e4a714"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "9567b120bad6cdd7f7b07d60cbc0851f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "a5de00e74c8b460da44f376f61cf28fc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "4afa147b28bf3c51abd12a4708eff4af"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "60413b60e467ed18d2ca7f191b21e67d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "22c376d728b31d8e405a0644333c1707"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "bfa80af69d1aa89a185d899f069e972a"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "9154192895be35177eb463f995f57b19"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "211b89b6b7e3c86e667d90b8be063849"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "5e412c1f52d09af435b6eef0d86b1a88"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "d48939d0499b5290df09bba61be002f0"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "344b035d009d5b932a1212ab11b59c04"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "ba2a1e3bee535ea859f04cdbc3deebd7"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "e21ae7dc83c21a25c58bdf1e6b056d8a"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "bd90faf108ff404f9c4012c3c40edb13"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "b98e42e77e2a6c45ca45eeafbad9e53a"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "7d44d280693ee151c30c543b1bcebce3"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "6391df702a394f41b2c0a646cf41b066"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "9306cc6ee3b36a3ecbe69c93aab88c75"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "833bb54deaf48b224ec2a5a5361f122f"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e4512a1137b91393aadb563635738df7"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "afe27ec3cd031876f82f09547320610a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "86066f5775e832724c36d619e7445a50"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "b46a5bede6f689e3c882b1c878035a79"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "bd8a7438eb9d37bfa3fdab1a85701d52"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "d97674c1909e22d43214b9117f3aa2a5"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "3456f5947a93d2945e315ee56dacf77c"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "0821ad171dbd0531c9da5379753e14d5"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "09ef4c834cf296191a6d72ac24eed9fb"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "02a0ea45b2b5cfe4edf1f21b0278edbd"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "bf4272f25808d5d7155e0b2724a048a2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "330a1408916b92d059cdb48e1b4eba40"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "e1ec58696f687d291acf02fbc84fdfde"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "077749e3ea2551c35782e7e3d08e0ed2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "32adcfcdf6f610f4c03ee2c16d86eb84"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "caee4336685ec0273b195017005191fa"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "079367858e94b72ae5bbde69958018ac"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "5c6b4e79c055475b4cb9311bb89632ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "38f43d100508ccf064cb0084517a78fe"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "e50d3252aea4dc71566e93d68e780dce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "b1161b753d9550b6e48811656db4aaeb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "89fa70462c62f5c70b28c54ead1ee680"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "973747650ec67c738560e6a672b344df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "12bac068b035536b13106ac5c2584ae1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "920ad710ec36284cde3d2a95cd696350"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "aaf915858566c33d0e4e1956a10154eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "a992b91f15902681f664140ccba40cb7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "4653b41a2f66a026a4e9e85ea8c173b1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "abf19745bb4c54d7768450dd325a05db"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "46bf1f27d65405de9519b5c2cb5acf7c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "04d4cfd8ed0ef9047844882eb0a836a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "5be9ed3fd282dc6e47e5e92750b24f8a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "2af283207520e178e265805d56db13ee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "fadc27f1f408cccbaaa1dd27ef83859a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "98eff7387ba5f51fbd2817dca906d553"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "01f8722961c21ffd86c137cbdd606693"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "a7fe0e6edabf2a26713b761c09442662"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "2aff2b65e7c7944c978a75c7c8b2d8a0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "99074a3f30f501554cf4ee7b73883c53"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "b60f4c30bb8d054000d8555da6e6ea62"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "54b8b86f6f5eea910c16d1c3ac5d57cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "785d5af82ef9bc2f751e54cfddc809de"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "cf55e00e862e8e1273f37f0ee582e05d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "3080e9e688a9548eef7e099929f05c72"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "8e55036939bf4d21a8de0fa127d92c1d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "2d44d580a8122aa9f5ab66d6735bafa6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "5126897f1a8c1f40a2498fde8da0f123"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "677dba4dc0b5288b97d2f07d2269e6eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "96c0aa50ddc4d08a0ccfb43ccb3f8377"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "94f473233d770a1a0cc00b349ea2d9c6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "b7f39a5501daf2e8522566f6aaa9cf59"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "d4069ba9af23ddfd84c48c5eda58ab9c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "2b70c39fac4fa4f33ad3be3e1c0e5b40"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "350d041a71b810e4e108cd73a8a84eec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "f91f572e5bcfa5483908e6bd41beecac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "5f4e2d67aa3b6329f0450bad082e5a21"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "2b603f6d37a27c3f70ae104671ae8022"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "19e8d1aab053e9bd79c1576eb1eb344c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "773be3729126522ea9c26dde3e541126"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "ace9886f20f892eba7f1c441807a3ce7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "3e0cdef92fc4030d13dd1ceecb642098"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "bd7706be0e224a56f7369ffb21275a4b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "59105fffd4b7bd970534d5dd6a6de7dd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "11ad5d9b612187047d82d657ceb655ee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "c10c85562747fcc5dcc81e16298610b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "8fe5ac6f036c4f35d90a31f852c1c6e5"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "250abcdb2f5ea114b17c77132e72fc65"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "1c574292e1c11b040e79ed30ae52e5c9"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "498261e3014d259f26e6f08db0e6f396"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c059824dc785967da115405f0dad91ce"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "22988884ae931e67dfca06138a7a8672"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "eb105bd1841a6b6dbded7d061a531b51"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "6e5b03b32efb31ebe8273cb1b2b6587b"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "5bc98db504646443c68f8495b33c2cec"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "b3a9ccc7ab121e5e4017288369631e56"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "98f3037a132d12a2f1944f2c0a10512b"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "c1a35be3aa88d6f763c02bc769626283"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "20aa8571c59657495578836f6c2bc99c"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "49faf6b4730aabdc439d3e3e5c6e4de1"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "2057333e80c6ddfeeee10505050584ec"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "a1a750685267d4baf47bcba622810495"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "a8a0aa08b43b3758023cfa83f57226cc"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "c7ea58d5ea6a049e1407ba3c55dc7774"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "ec821397e96c6fa5b777f6d9e33536bf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "4b2151131bc2f5faf4fdc2fc48b59a02"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "dead642694d465f23fe9c664e03243e2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "e0552ff912f08387e63bef85b654c1d9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "ec2d326b561ecc96012675aa12a8f257"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "326cc9f0c6bdfdb0f0bc2fb81752c385"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "45354a2b8f2c106e8e25b6215a217b45"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "4c7f7f46039d0687de5afd56126912ab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "dc866a54b8da451eafed10ec48dc40a3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "243dde11545a72f1ccd69d652a992555"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "a6dbf7f70ba5ec6cd11b15bd1e4dfa24"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "c3f7e1d9f713ae7de3a98048cd9ec770"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "3986c53d6e812f89804e49c6d90a1621"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "254aa425169a58a0ce2224799e515a79"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "a41b428b11409529b41de84c1f9e7440"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "1bf0bf8eeaf42a4b7ed49ae56d1aad70"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "0133f3acee4f004f341ade43d35c2687"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "647f5889041f6d25513b776794b7f541"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "c4d1d9778e424a693e7035175a4a4832"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "fa46033ba5cdcf9548057d1337851b53"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "e15e52b4fa182737dfb5d6cf6eb63de5"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "05dbbb4fafca7a4ec812f2a5dd2a4c23"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "28bffdae3d63d41aa6cff0a013d8d218"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "908d4a1473ca56ae41ac36ef526f8cfd"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "070984172c7da0c65b579d1a29f85c77"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "daaf10b85bb52312fd424d5bb994858d"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "28ef21cde24717c41fe36fb9620dac62"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "a97984d3bb3ed8c2512cd4791af279a4"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "2b665e5f5c284bdf5f246de83cb05c5a"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "a53613b5d21a83777d30f425766dcdab"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "6f9e8779ed40faea8e18a23521c513be"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "f3b68cbff383804db05806b85826a538"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "ad3aebaa2bcb3cd1b197dc05b6750e4a"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "4a94d7d8aca12ad1979ffa22ac16617f"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "b897b28867ce130b303bb2a0c748f54e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "755c5068a75065fd0cefdd1bcd7649ca"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "71fac45cb48fde2715e90159579e37eb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "7e31d4fbcfa633a0f05d107d1d87956d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "206b53201ec25b1b0b29dbd7661732d0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "a54b3dedf4121424e02da9558bbf0daa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "5ce5ed03e8bc5f4c3b322d6fe0d87223"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "f34dca7d78e7a9ba46db21f8794373f0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "f2830e8b38d7deb50dcb1c1bd711357c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "349839e4c7cff7988140e346caeadc0a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "e7c43525fccdcd555008b3fb3772dedd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "a1e02caf81d4f67cd7b46ae7d5883b2a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "9edf8df0e94d02d5108bc2a1ac40884f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "fa7a3d106072e999393b00a8793138a8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "d969dee7aaab3a1aa504ff6cba6fec0d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "f374315b017172f55e6ee18f2d79c221"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "8d41631d353522d9826c2ca9b2e6ebb8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "08e09f766fc0c453b5bab72e0e6dbb06"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "4633e2c429635d6102604402a15aeb1e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "09ce30e4ff2e2ebc9e20794a0b40974e"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "50d2647a2f49edfbd5d681fe0848ef72"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "36813065eae2f8de778cfe7617f33cff"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "a43d761b5583e5d8d0d522f573bfe39a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "4199c15225a9546f79fcb6da7c3063f7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d64197cd4e48b3b1d75b09d578475c7f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "13d69447d931c27051b4dabcd0d0fc06"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "d58992e62cd81365fc3fddb149aa8004"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "3bf3150dc8c86223c0b29464aaa5a1b8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "4cc8b929443cbee095e4edbfac3ece42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "83f845b959af47fe8357f1bf71c6a372"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "bb8a87be9806bb79ea7ec2c24370c483"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "dd3bfa2f79aafb249c30741867ef96d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "9f7d027bec1bde022602abdb121cdb54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "5e31ec98610ced15e053367c85a5ca1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "20c2a1feef4c90f420474db5a96580df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "6ac87089d4de1f2824c06a18287a2ccc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "d107229368e0cafe3314673c9c9a1585"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "0538558b4bbb488a3da28641503d98ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "489d1ce59ad85ea2f0d16a087390277d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "a09ad71cc58bb7261219c3cdf42008c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "0b374186d1eaa5099c17fd11bc0f088d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "c008352193af950f3233f97d1aa8015f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "3c7c81b0fc73b9771bf8dece714bc70c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "73ac2563a157ee78e96a97ece9473958"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "ce23b6800ebb11bd73e25c0b66988fb8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "1e5508a1ddaa5764622de4bce79d9f74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "303b3454d758f84ee6217c6b4a80fba7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "2d608255cc1367da0e2f43267184b91c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "a5ee959b78c731d7ab762dd71f6ecfb5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "91a03953e21cde6f6ad8b1c9d6680b43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "cff39d77a8f060a827b5ea168ec5bf61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "7c424296fe0d0d1dadb2530c3d513883"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "b1a826d542f9f8d641df353a8ba9cef3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "c150a94a3cdacde11806315e42560c16"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "d643e6f4ac67a1aea43ef5e3167f235f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "ba890d826a27a61d3fd26f827fdb82fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "3be30a1659986fbcde65163e5594a9ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "a19342cc5280dc74b2ae2d2f49e35d6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "0aeb19dea9ffa015bbf6c55c3a0234b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "1c47f64f3d88baa68cfb11dc7f17ef58"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "0b62a5ef2e599c3bd4357d7796a5da14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "efd35a0f7454d09248e648a6fce4619e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "94cf82f5a5b75222151409cc503257bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "306018c77559981146a8ec330faeb9bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "1df37bac31947bcadce7bd5e85255489"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "2e1fb19350be55181ee185b45151a030"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "c3732cdf6a7dea32c1d24e1130fe713e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "912f19c6a0e181c77359ac5ce01c263e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "98d5a2e16ed9437f9c1f9d9cbdfaad6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "b5284faf042abe673afe22f39e643651"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "35018318e99b0a312cfa05a0a434f760"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "aa0da4f8799a75e7fde88ffa9b256f51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "a724957a5e5d2e32fa27703c6818b8ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "3a3a57f78d2af84bc3effcaf147b70ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "47734fd865b8b2e242d022558d56cfdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "6f5768ef3e04656b0b4f48a26c708ef1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "5af5a184eca5f43aad8e62bf9c3064e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "e321d5cbeaef0a06e4de99c56f19a4e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "400aa927864123d95834d93b18d0c959"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "1bb334a003cd15b10587756f7420b1ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "5fbcffea48a17e334cc2327d44452a5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "45f4b3141eb9b0995b812a0f91139361"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "f24c2c3bea7700ed852658eb7aed7349"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "79bc33e528e29550f694d4d56dd6be49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "851a3c79498d50349667bc4c5ad0f825"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "cb0a7150e0f3076d046113b6dfa3f1ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "594bfc20fffe93ad4236878f1755392d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "eaf606265249a5d0151985db6dfec3a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "026c962afee6e850b4bd9223abf4dd2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "34095509a0c04846d0bf9b67ce7e374d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "9c6fb0056d52540a3e312835c18d295d"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "c1d57a610f25e1e6aaec4a2391a930cf"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "9bc066facbde8494711d6100c676f7b7"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "cc0e5a320374a9f0026dc5f93f01b00d"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "37f0da2325dcbcb2ea05b5a1e045a2ee"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "479d05d7b25856bfce77270bd7a08e34"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "87efaa792a749cbf8ef7cf03bd8bb2a6"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "7863cb6c0b7276696c9c4b694c650a77"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "1259d4b62c0cb2d6f68c4f587344d14b"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "3334e06c73cbadd13bbe2dd1c62a9883"
  },
  {
    "url": "categories/index.html",
    "revision": "9e6fa6d5fc46baaff5f57a2a8fcba045"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "44245047fc40dfec4161c1c5fdf6dd2e"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "64ad6f4ac1ceafbfe29362a04aaf106a"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "84d6ec8089086ba4fb5e9070d47a627a"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "cce8d5d5426d14714b5726a7995b91ac"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "cc7de871d986734e64463d2cf84d215b"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "94aa509de17aa0f7c0f4718c15a19f32"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "27546ab9dae8f961047d2096ba0662de"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "0af3ec05fc3169ee43cd3d26b2c68fd3"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "ddb155d8259c02925851e36aa427f1a7"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "10e1af6eef8704a7e4a7cfe6b724f445"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "e7b7cecbe626f8ada516f53e7defa0d6"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "f072cb50ed6d0be21a76d40f1b5a89d4"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "2af08ef8ac1c9388829dc553267c9679"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "0b0bc88d4c8d61643f9840e90c8657db"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "077280ab79fb00f22868b360f2b3070d"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "5372e4fc0f308b1c609a340dc7f212c8"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "f8acbb8e42ebc8d7a792794bfa503f49"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "a7c79296cfffa1c9b76c99f2d8949b23"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "5fc12ff421513aeedd96ab225b1afca5"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "8a63b6ce88a070d94f0d4a15e2420205"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "d1e9473febfd1c2b39f852613dbda44b"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "56af270ddd507689f0d35615a202d9d6"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "4a6d64ac53453b87ba59c0765a737c27"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "c65f196c2f913b113edae702ba1f2f6c"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "2bd7edd0ae2682dc8ce75be2591fc902"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "69efa6823fdcb36633cc8792b85cc00a"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "8a4044f33695fec281f69bcc13e2260d"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "13ac7a9d622d686604f9f2df855a5afe"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "e31ff5df85a663d3ef1a959a7ed4d9a1"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "191a40b5ea1ba1ce426540ebb70affe9"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "de7dfb07abbb66da8dec05d642d274cc"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "f801d24b37193c6f596d999e93475149"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "fef26837150039624cc5d12df80e06ae"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "ec5d0eedd2177981ee5571cc1bbe2a91"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "2ed9d5d422bc14a01b27de1e21fc9884"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "ea788c081d39e323f1b99fc8208c97d7"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "410701574b415dbb87b8d7ecae3b5304"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "70c938203f96b165455b3e8bfe2a91f4"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "3a450b36464fb186e41d3c0014c7431f"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "4f25afe75fe2f99f1f6775c2a8198814"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "f83de04412dee85935adc83b30d0d401"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "949081571ca5ad5ff25396a16b625305"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "a2fe8811aab7183b31dc71f392b69b3e"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "e77faf1b68b5c57b29485422f7258d5d"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "e0f081cc7b4bf81e653c54cae100824c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "b2412ded26dae9777ebb6b35c6e09490"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "1831abdf5575eaeb3ad9c4362020d6fc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "3b5a62d024bb2d7a2bc4163ef97a26f7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "d8e2f55d4d62dfddaf981e45c2aa1939"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "c65452a7ee9ef90993ab719002eaa399"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "6431592c92d3bdc85ea6186392e66c04"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "29dc1a7178d8ff326bb4c615f89c6a46"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "9b32487b99374461e388e87b3a2da45e"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "51423ee63024c4afef7fad8b360d7dc9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "d362a30fbcf8b56bdac7ac5cabb288fc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "86edc6c60759a484a42782e9ee9502e2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "adabd9edc9f754022a7e27e400e1c77d"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "e454bc3b7826acd0d10139d0ec5b6fb1"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "3e0cf49a2a06416580b020fa54692725"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "f3506ad93cdd05133d221dc338b36ef7"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "1cc62e17b68a5bbf2ff775cb4cd676c3"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "12f83f861efbb3f5a12a00b33fb263d5"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "a2d2073461e06f27f11cff4dc4a1567a"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "04c100ccb2eb346da535935500d8e409"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "b44109dcbdbb668999c42bc2820c7da7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "35b5cf2cb208e550071a7024f971fe92"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "94acdbb833f8cf143a56b25c79922960"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "0396e6d30b7876c9e4c665a19c720dc4"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "50af78dbf1d0a5ff4afd58ddb28e7083"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "3ddd02cc77fb26eaa75a7093c4cbf179"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "2a285fddc3d1219639041eb62f61d202"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "8d1a580c771c5912899236f05b5e139a"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "e7b913d381dcbf6716d93b943f3045be"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "3ccd447bd2ff52ece1a74caa143e60ab"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "2a40abd6e7f9ab1f73d91ad4061c6b6f"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "ec61248e4d2941441838cbee6e284662"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "47bf8d910904aff99c3fe6ec5d0f2da2"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "975951d877500f27b787be652bcb55b1"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "e5a71872df541240ae2ecbe05f623db0"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "af021ce5953fd81391129ce289f8986d"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "a99f1890cd830e928fbfae5c4a67a69c"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "4d03578527f532041da2eda40b3037fb"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "71483a0e1fdf14fd9a6a55241e31b062"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "e1f3ef0fa0048a2ac041414bbcbbc393"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "d232f988b3cdf5fbbe01f1e008859803"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a90242c319bbb5b781bdcbd4e43f860d"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "73aefa0d534d63717143e37c74783a6c"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "42d876850f2e86a4b7333bc9277c3a4a"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "8d520ff79b46ecaacfbb530c04171a29"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "1bebed66c8dbec3590661fc0203e0afc"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "6063a2c1c9d321bd888c37deb837aecf"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "0b21f9345e9dbba8b678c107285ce18e"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "fe3bc3875bb3d0f3a8048a8a35ae0854"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "6ab085a38db3787ed20fc8065624a172"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "2e914803ac94adffd368db14913c8de4"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "a8944e68923c89576cba57eecbc376f5"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "6c51b736458ecd998e9f2a6caa254073"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "83db88a3591525d5afcc8c0fe30bfa03"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "821c77ff781a6243d73b8eb61cdca830"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "afc18c99b79c699ecf4e4a3a35e1ecaf"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "ddf193a3d8fd40266a2f9f7643dfec1a"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "209a3ddc825d32ba955be13d9eab7ae7"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "4a1a5c4948a3c38b9751ee7977661562"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "caa4f665647491f6a38b89b6228d96d3"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "b892b576f55aaad90d04b075bddbd530"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "1c833d399df4b1ab07c221493c597f4a"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "2de149aa7e64ff4a828191d5998e2d26"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "fa7b56ac71ce504f5dbf2e008a91a715"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "938181180985ed95980ee9b5c9771ee2"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "47a65579731027f3c652952b1905a3f8"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "bffa93b49bdb476d2460c99733e01cb5"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "6d6b1e597e8ad4f10f8bfa2f36744045"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "7f642ce26f219e20ed5ac2644d8f0d03"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "02f82e866e85950229f80726287acfad"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "a8637e4f71ef49bddc04f30cc98e3d12"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "ee68881eb85d994759d7ac3b40b50191"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "1f17cd73077e77fd914e98d0ff6492a5"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "f54fab28f97054410ffe81cb0dd1df87"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "d0460547b9f3057ca413fa35863c490b"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "864ccd5617a260ad1ed405a97aa5e280"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "3e53a435ba1d97cb1a0c1a0f11a2cd71"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "4344b54d91411dd1a71da64664b37d8d"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "707b85aabb1ad933b4dd5dcd86c08021"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b220954792fded43ddf31007eecbb7b7"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "9f0b29c5654906e3745856281b67f0f9"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "fdd592d6d3317509d2765be2b4dc5e1c"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "50e71321434083d84a04874907ed933d"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "0a71385be8548a708859949cc0b88c38"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "14237e5f86ec60721efdc39f15bd9da6"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "9cd0d305712b5fe19f9f872d2b1a801d"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "6c319e65741ca1d3385c1d0505c7ddd5"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "4af6c1acb1c165f55bec80db45ad020b"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "eb75e9c7f873d07de8a9ecd0ddebeb6c"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "09698da529c7faa1ffda360a54404d5e"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "5a997ed4444630445abb2be3bb9bea90"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "14e34b021e6dddee3b1cee1a2bc1d87c"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "e100ff3c2c0b4fbd03da96df19f6f5cb"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "88be396e01f974f0346582f12f5f0c89"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "b17d636043cbf81950422bd3666a39ab"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "a04aa497df0d0690fe6fd39707f84af5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "f44be9fe9880b0c9040179a33922080d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "aea8c7bbe4540da41cf7609002658186"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "62f467fe2bc213132e4633cdbb24df96"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "32daa7e53fb892605e0d2c956c69dfef"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "14621f9e86542b0dfa45f65bc95a8ccd"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "61ac5bd8b579ab3d61c8ca14fd059e77"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "1d8c56c5ab6c68834f8596496e2f1d49"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "a0e53cd40e5aee82bfdd40be13f81634"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "e87582020bb065e21f19b3b9b8e923c0"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "4460fcfda9626bcbf885e6c5479bad97"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "f867d64a0a8a661e01703caf2613151d"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "ed27948f227e9eafb1f38d5c6b867ee9"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "83bb5adb865af53ca792fad7e5d82074"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "19426d96f17d1dc9704ef34a31c2da18"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "c91b3903979795abcefdd4cbce74a9e6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "347f5fda0dacc4412ec0826db717fc09"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "fb1e3702ee07c76fe18f8f084e6d9659"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "7d3093fdb9282675782adc52e1ec9646"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "4d1c724cc28951964713cceaa00f03b4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "9d767ce2bfb6a6599f7e0fde26855626"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "4187ab6498f4bd975e9597b795622efc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "42edfd479830946933bc96d78ee07705"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "ec3ccf41b1e72aa104708c153fc54d47"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "f7fa12489521d2a1c5922031ae9f3653"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "b8b834a80ca44630f7378d8893f94e4f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "40e8cc90dc8de44b3612a531049b9b83"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "609efdb2f350670d16919c956f1394fb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "7ed0902eda922775f47df9787cdb618f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "9c960d0a8d56b22cec6c7716f8eef68c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "0fefd1e29e3094e4756c0c1b3fc0c321"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "bf9d59719bc8e251bf169abf663bbef4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "7729dec13ce8880a0966ddf5ac374117"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "af4f80fa057b2cbe2bf7cbe38f42473d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "df4dadc01cbfa40a32640fba96e1eed6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "cc83467bd12e821e672c23cb752e2ef2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "e3f968b061f3d9e3e3522225c09af4ff"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "1f6030ab745ddd9acb59a873e3fdd30b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "e920b0f87d855525c3436a0eb4aa9c90"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "995db5f9aad8fe4b2d972aaeb7c2f18e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "5ccd5a506293ac5636c5ed8cdc667c6f"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "febeed7a7d631c0e1d4bb19a79860661"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ce86032a67fd1fdad68bf4d6505f62c4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "52e2c104ec6877f5dad24502c68064c7"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "58e4f9e4faa45b91de905938548fce98"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "fe92477bc6fd98199d12f11daac593c3"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "05f49806bc2951f980db06ffbb3329eb"
  },
  {
    "url": "categories/os/index.html",
    "revision": "0f04d72ffbd9e4501625e7c7af061379"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "627c70fe3fc2d1a027069d609fd6311d"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "0822d30e4bf7512bd6a8e5b3b86da126"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "573ff43bf0f517b4366532ee8736fc52"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "d6343ea55db642443ab1dce66d84358d"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "79d80fcaa045af095d249dcfaf4e989f"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "e0c0348a6b5f418f1c4deaba9b2e5497"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "d0a4e59f3998d2e9baffee4e28120030"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "083bb2c860dd2e5424b6254c55644fbe"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "82e4e481a440ae967518c2583aae7c8a"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "18c5fbf0dbfe2c073f7929084aeea351"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "81c0dd4a356afc4cceec2b7066732441"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "a52807c8f4aa2f1fee6e22d42e7e7f90"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "3d630552a8a20e4f2aa4ac970cc3b7ff"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "4ffe26564c6a43b80bbbf9d57afc367c"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "77051991b48d7950a777a74d3555dbce"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "e7efb6b41e08af1f5f2dd2ca71895d19"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "9854923961a837d1288c1787d6437cbb"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "ff6234dc3cc36c7e2db3b68fa46d27b6"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "bfb97c6c077426580be489deec31e4c2"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "853a0c50bec02818692ee5e8560a1639"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "b37c19e890fa912f5de1e55af6dd2578"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "b31788ac96ec3c9718158a3a4d7df6b0"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "6a20e7bfa5ac8d4ef9f050014274b89b"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "5a2ed4edd0ad08e40ee935dfe7c704b6"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "cb7131a3dcf08633430be05eca9bd966"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "a2ce237d2c61082866783ff2b61608de"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "d66f6046a0829572bcc10fa562149dbd"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "fc6eac3cebe87fe54f006b96459d4ab9"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "c7aa18893de866df7676789acdc07b0d"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "ef2b0f06ceb4215a5526c2aae428fe0d"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "6df03c6a0d4db1d45cbf7c4039ffdfd5"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "2c29596468158b54d645dbc6f157d84d"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "91acf118c6b76f458b44924cc8618402"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "4c87ac906947f6de9791087f908f3043"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "bfbdb7db1c04f8d08438328d3dd64c72"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "e2ed7414910369db04ca5804903e0af8"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "3ffe260a881ed88d0405d55df43cf5ac"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "5193c411d81c29925ac80fb7d0b7db14"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "545fe32e13b379e36e454a1a20a7aaa4"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "766a6388127f5b49ad56c48d83ddeb9e"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "4a34a5a071b067d5fe4b29b0d7b18c08"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "3e7019afa007779a5737d5edf4195cf1"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "c239ca2f8863b9f345c8cefa70cf2605"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "442f00fd506199c6e7a5e81dc6c62885"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "63c18f935e486cda7467094cdcf174e2"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "b1e7abfd243e5cc10b6e9c3d09ef9b67"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "f2c67a7339b80e5d801b4d35222db67a"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "2294ff72a61e0c6873cdefd9ab0a9250"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "526f7ca705f83f5950ce0bce824383a4"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "b16054ab2c69f62828cd819b77456143"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "06fa32bd00f737dc58ef6304606bf281"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "1e4c9adb571ceee9c3de681529e949ea"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "9b1e5cb7badb23e20c6057c61ea49b30"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "ec0dcb2a80e05e68b1dd426844943d71"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "cd4f0f0f297330abec0e375887f6d4ec"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "037b46dbf4d1e45ee3ef8b651669877a"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "8a6b0b8644a4e668ef5b7635181e224d"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "c9edc3f3a3237cc644081496b001d8f1"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "f967070f6d04450b6c96f8f1cef9487a"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "4f7602c0577202ad8cc30e79447473e8"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "0e6ab5772de52875809152330db82ba6"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "034aa0df7f4d2e5daf28d5e16bcbe5f8"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "c4634c0966e16d75b8daa94cd22acda1"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "083fc4e5bab82e24ec3e6c0e64f7c311"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "12de7c563cab7433a9ca3cb44791839a"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "6fdfa4dfdbc8f9ee1b271631c8e04c03"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "44b7cab673dc820e33dd5c4cdf11fbd5"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "12309550a05d511b4d8485c219cae83a"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "da9761e93b2760e15e47f393e20b36da"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "61cf5a1c4f788b51bb399aafce3c4ac7"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "d69d6199c9f4f797d14ede5410261da0"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "c743bca13047b8e6cc98b2d988f49ab9"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "1bcac50f6bf6521f41c57201ce165784"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "81e04f61afa7c17b92b6beb2ef91a722"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "8272aac17e9731d38363202326dc7940"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "66c813c564ee5e5268126c35cea7c4fc"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "8bbecc592093c168acdd2e002c3d98fc"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "cc435488f7e892a91f4a94798761215d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "5ab15316477fdad59dfeb846703098b9"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "8362eb55ccc6310d05acb33d32dde583"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "5bcada02a5d303562a509b99fd781cc2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "0e1eeda396cb86b21f4d155bcecc4eae"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "52245331893358f02ff1c2ed0109d023"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "bef71f316640dd4a4af9bf86b4576715"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "96301698ffbbd8949f29e908c1ded8d8"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "6d5391796abec782222a2835ebf1427c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "abbd91dc4a89b85bce83518e5d3ab572"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "3c231523eb2f438b8b925ec6e85c7b83"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "8e6b83492bcd29ac51f9b01833f9743f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "102b0f9f5bdcbfed105a1d3da829c9cc"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "5b3d022fd92a2a24ad2be4c39565085c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "464fd014ccb1b67899f9c7a9fce5dc49"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "1a7656f63de0b4ce90888d4dcd98de07"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "6a16862eabf61600868eb9534f5595f9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "b2e37f84e4f4a599202b5697941511bb"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "92da934b6717386c5b84752d123990fb"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "ca5c075784fd24c7ad6102cceb834b0d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "373139101f5f7f8840766784a3f1fe3a"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "dcf191b9d511d0ce2fab12e30cde56e0"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "62e80d6a38c019ffafcacdd7f9bf3051"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "0a888d5e5090ed21d6e27d3e141357df"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "abaeeb90bdcf6615191a8b66313ce8d5"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "5502a5fbe67ccf5be63a2e0e8983945b"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "cc2f07d4851323f615da36351fd28fa1"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "23f70dc2847367f28ea855c5d2158d85"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "af1ce5326710ef9ab3b3d04957307438"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "d3c8e20f76c8fe2bf90697b4e46d74c1"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "1ff0cd3e36f4b0232987954dc30b1b8d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "2da63bc63509ab36cdacdb6861060a8d"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "54e664caebfb24dc322e051269510654"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "3e6c11edc7a52d41e69145350a4f710e"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "482fb3bedc6d3f51a1a62c717266e7f9"
  },
  {
    "url": "categories/php/index.html",
    "revision": "060cd8a826ae2fba229d9610af40bcf5"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "5b6d90f2970650d5f9d16f5dadd784ce"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "d8ae7185c01a7ac3e7df7d2de3ed81c5"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "29dbfa840cf5ad78ee158b85dd450d89"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "de6730d03e5270342c717e0c5fab8924"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "2fde3d6908526c04ae216da1f35ff77b"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "9a895a8db1dfb8580eaca72f3a326e1d"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "013caeded27e8b8149e3f0288f80b370"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "f62e03f5ddfce708e9136b2e5a61de11"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "9d37bee1bfd1aaf922eb85a722007542"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "43ccfcbc6ea6c314b5370b4d143cfc32"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "661d8377a98dd9e0e8712f6425a10687"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "4af4e0df4252c5f7eaf3b864bf209e3e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "f59e9e91452fe7275613001b2d1b221c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "baf56c123dc29b4d923ee700acc8c371"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "ea9e34a702dee90a36580566b002e643"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "09ac38a35f747bad3e6d2272bc0680b3"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "c51a4be83de4e143a0f18a93edbbfde8"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "a2174e23924153135373c762aa06e5f5"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "184f9987e3b2e73fad0888fbdc1aa32f"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "a16fcae54a402ee4cdf9aef90a0172e9"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "7faadac567118726700ab9c411983499"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "3b75a58e8791e26eae2ccc9e8cb7f8ca"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "2eedafe314570d03741c5d6ae1216987"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "92cc0eb40c9a563441ac43c41314aba7"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "2cfa2cca084fb5b0b9a3b0d5c093bbb5"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "5cef604f7305ebc1c7f9968f20d309d5"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "f1177bd28c017266a2e99b42811ffbae"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "41c1bf75a2f230616ed3c282a07d361f"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "3f552c8745321d4ffa8f135ec5082294"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "001d4def88884bcba86ecb5f3a794497"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "3b890a271e8626f061051cc5c6db2c35"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "a22d51a019263dfb7a69b3fc573a6631"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "fb9353cd1a45eb6ab5f930417cb72d4b"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "f214761b4b175f8c8693b551ead30f73"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "67a947e0b8035fdda50802946fdd0171"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "d95f3eed1895adf51637049637207f62"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "3c1f56492fa45ee806f9961e89847297"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "65e22afa64f771a967cfd46f3ebf859e"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "644618b2e201a521d18e689dbc8701f7"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "c5429aa352177d8ea36182479563c748"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "8f4cf52711f6632ef00228b3dd879e4e"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "ec720bd663ea0f365061932dae9b8df0"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "a2b31fd96aba7824f693cac5d24d3c98"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "3a614de1c6b597635d42e01eab293a16"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "068d11db63c2e650b1c0f4aafdd3abc7"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "438098bb900ab536bc44d35d23543d13"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "0f1ee3137634cabb1482dc7fe67db6b9"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "58791c38ef5f36cf70ff484ba782dcb2"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "77454d54d7391115b0c0202a8b6de7e4"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "34768ad33164d25b83aaabe7ded52914"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "4b020e49539f795425377281aebf6632"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "d62be2ea7c1e043b2eb59fa53902f661"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "9efeb6dac5fdcc2fef6821fe8252fea9"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "4ace44bb15f6ece9d77a3ef5d862223c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "321c8dd694fee78ba60c95a50bb94768"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "28ab47023fee09aa5b31e8e5aa63bdc3"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "3f2c6f6935917e49f8f89a1a21841f02"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "ab7a4474eb2b43be783f9568751cac43"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "db666eea0abf834cc7e38d7786bd2df8"
  },
  {
    "url": "categories/python/index.html",
    "revision": "92df10f583e437fe6a342a65e200780a"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "e5586299737874cc511b1da615cca4fc"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "a40da743240d3e33ebbcb4f53bbbe317"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "21bbd0b92a17e5f34c69176db28fd9ba"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "364feed8769fcac539205048d90255c1"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "1f599792015f8f1dce40f6b308b81d58"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "459fa2621dcfd1b006688389c620bcdf"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "aa96abd406e028a97d7a1810c1a383a5"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "4aceb5084f68215f9dc1374611387cf0"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "8c49b8d02f61748c1525e1031f7a5898"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "113a3f368360ff157f9c077c779b4978"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "c1a743151c3f15eaf07fac6737c8163d"
  },
  {
    "url": "categories/system/index.html",
    "revision": "08c5abeb2bfa700c0d71bd3cd2c418cc"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "2f172ad7c3bf004b55b604cd3bd797e7"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "fe27956cf777a5743c480876658ad140"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "42d640c5ab75364677842254abcded25"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "41a791beb652b9f28042c200b9f1f459"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "640462d35cda5f895d4faabfabe2de23"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "f280a871716ac86f5cbd6b9fbd2beced"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "faad5d1077fe95136d3f5dead3be8b79"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "27f4687ec0ed82318e8bcb3357a9e47d"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "032a28a4db513087e8bb06de5aa40975"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "4eee6141602d648d8ac0d9b75006058f"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "66ce07c84ea8ac5706c08812a58d04f2"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "8412249c0b114a38a3c360920fb1c16a"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "3507d7a9d1b103428aa1e98dc3e1315e"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "aacaccd4c1f2f40f568bc831eb362af5"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "0e8054c2b6527a73392e55abbc725eb2"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "61fafff1d2e3c7966895d332f80ba40a"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "7f2ffd2665a69fb4dc73a7f0c09e1b70"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "6a78a97b7037002b02872e994aa2659a"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "cb9473e2aab3121384643d0c96d2cda9"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "c7a9048b94714dae43361c16f82662f6"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "fc21980d4ffdc79f57acbf481bd82b61"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "28498336fced4082fa3dab41c4420e8b"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "c17bd85cf15d64b419a3f1572027d184"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "4fcff12fd561a3a84158bc48dfcc7803"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "940a755b5f4d9343ea79ae2ba3fe4eea"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "e427376065fccbad8cc31ab14ed7b788"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "aee3dcad704bcc9a54f2d4df02cd7547"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "4aec032f9b171e692beea22405b0bf43"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "1541940d84235e0c39e9d9a8aca02971"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "e87d997cbbcd22b463906d3ec78aa411"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "22ebf6d0e6ef1a3af0ce6b2323db1b79"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "59de6d39a2846edc6e1cab8f1e10047d"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "3294be024213077d1af60b80ee17f4ed"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "fc4c6b2baf95cfdf3c31373b3d9aa273"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "c6abd758828b545a589a5be4d5dd2250"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "8aee97f640e33a7ba2b5cd2d5fd647a1"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "bd0e2f2285fb3d32121255cd2a225beb"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "1453c03c2044d868d5d92813bcededdd"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "2a374657d643715021957f2546077221"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "002ff49940fd647d4dd06174ff804615"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "25cca9a0ae3a917e15a956ad04f6898d"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "60d2664092038c5314341d4f20fb7308"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "05bc44c75cf1fdf126fc9e0494113f77"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "ac88ac7f261c1d49fe33735d70a2d26c"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "2cd798f937d1017a1ca4bb8508f37604"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "bb233e5f4de151cf8ec22f3d4b742094"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "df8ba9e1b25cc204f9361990b93f405e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "2d03b5bf8ab84aef28a06529590add62"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "e14185cefa1405eff06d36bf5304f4a0"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "8f2957b902cc731ad1b854e586dbaad1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "3ae71eaf1f9d5f2c9eb305b5ade01372"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "628608d571d74d010d9f9d0e1d883e77"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "bb9ac7a8c3de0269ee457fa5e6c033c1"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "fe47423561b1c5e5e0251654b8307a29"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "398b57577d22b2870f6b29583fbe4f31"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "3e95905dd362e07676462b2c520ce7e6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "a20975adc827fd7d4074529e70a6d0c6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "71a77f26b8f7afeadbe6afd1eb416293"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "a4edd2f4558cd9a18cbf43d6af134b4f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "763e952b3cd0b7d8494782272acdff7d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "061cac7d92c77d86548fda781c4e1c76"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "cfdbd14c6ce7f83782f39269488e9681"
  },
  {
    "url": "favorite/index.html",
    "revision": "9d3493801e8008c42b29cf7f427af4bf"
  },
  {
    "url": "index.html",
    "revision": "d0ee5dc529f5a873819b52a411fec637"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "353b728718bf8183d735173832934a75"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "1018896ba8f648a25900efd5fcd16ca5"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "8cf19c1a1f92eb48a00d7ce17ec3cfe3"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "0279d3253135dfb2e307c40af2abb945"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "d4cdaae16f19a10dec2cdc3224b6ca4e"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "4d3326ab6cfe0e73fdf30880ee27d4fb"
  },
  {
    "url": "note/index.html",
    "revision": "728ae3b5224cd9de1a69332d83c13505"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "1aafd56560b53fc6b74186c26d899639"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "266bdfb383a456a19a44b0e233e09d9a"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "953a5d4acb128a1f8cbc56a1a6220453"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "9c61b3dadbb07dce3c99dcd1ebf0734b"
  },
  {
    "url": "share/index.html",
    "revision": "2c50df1ad81ed9fdacc9f9d6a2ea902c"
  },
  {
    "url": "single/about_me.html",
    "revision": "1df47577e2ca84c76189a6dc2a4938d6"
  },
  {
    "url": "single/all_article.html",
    "revision": "4bf711d0a7064d5117c589af54614040"
  },
  {
    "url": "single/welcome.html",
    "revision": "4de8e4459b60a4d66ddd0a0cc0e7674e"
  },
  {
    "url": "test/index.html",
    "revision": "d890d4c78c06e57c483e40e099727869"
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
