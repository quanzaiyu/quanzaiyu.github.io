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
    "revision": "07801f4699476a3314e6d7417e8f0b48"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "8244297b6475d22eb994e601191b9f55"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "1a78ba363060273a33c2a3f5ac7dc913"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "96a374c0080181798da41fb29b5ace21"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "2d8dc51841b9100c620bdb2ddb568cc0"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "111f0ab77fab5ec1336a5c8ffee89083"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "912a470b1d9c5d89f61a252822d3aad2"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "10b81f6f3ec66ac13fcf72bb234e4c75"
  },
  {
    "url": "articles/index.html",
    "revision": "74978290a5251e13916879307358d46d"
  },
  {
    "url": "assets/css/0.styles.b5359a37.css",
    "revision": "24d3750aa69042818ed90959de4c992b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3530781f.js",
    "revision": "102972f516c4d38e7128488eccf298de"
  },
  {
    "url": "assets/js/10.7feaa554.js",
    "revision": "5c0648b5b7e7f40f3dfaf966b89e2834"
  },
  {
    "url": "assets/js/11.e1ed45e0.js",
    "revision": "d9c064afe5a32ab350dbc963a79f0b69"
  },
  {
    "url": "assets/js/12.bba83620.js",
    "revision": "352f1f1d12aefbf356ded0c920e6de24"
  },
  {
    "url": "assets/js/13.db32947f.js",
    "revision": "3db204985d6b2bc5a05608429a0b90e3"
  },
  {
    "url": "assets/js/14.774986ed.js",
    "revision": "fabe48fc75db067d2fbea30e2f120ddc"
  },
  {
    "url": "assets/js/15.2e861408.js",
    "revision": "aa473d0e0d7cb9b621aacc7033b1557b"
  },
  {
    "url": "assets/js/16.866ebf81.js",
    "revision": "4ac08b3e3caad0a3fe2b38009420b22a"
  },
  {
    "url": "assets/js/2.78c40e8d.js",
    "revision": "bb29228ca81fc8458359a5b435aeb4dc"
  },
  {
    "url": "assets/js/5.11934866.js",
    "revision": "1c7a7f9066040c5b94fbde1ec17c336c"
  },
  {
    "url": "assets/js/6.f9ce77e6.js",
    "revision": "20438969bc504f382001f7ea7c2cc592"
  },
  {
    "url": "assets/js/7.5fc22304.js",
    "revision": "f630f9cfdbf7aee783dc666106ff45f9"
  },
  {
    "url": "assets/js/8.650bc90c.js",
    "revision": "b76700060a7e556461ec14cf02df3559"
  },
  {
    "url": "assets/js/9.9ceb6f45.js",
    "revision": "57e0f86f7799ebecb31f950221f2d2fd"
  },
  {
    "url": "assets/js/vendors~docsearch.28d51d8e.js",
    "revision": "80a28fa993fc2e64a560467ca740504c"
  },
  {
    "url": "blog/index.html",
    "revision": "aac42a25fc11e753c03af8f10a432cd3"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "0cca0c558f2291a0c4933694be14f3fc"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "94f03bff4035b35e46f96efa38483e83"
  },
  {
    "url": "books/index.html",
    "revision": "e6f47d82f86c695ca6c8cec5ccddf9cd"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "3cda9f218fa9056891acb8af6026f853"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "e98412dd321c0bbc8b8e70dce4dfb71d"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "53f00018cebc23980e4431046bc0b42d"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "241132b0ee247a3fdf484c5ba836139e"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "4cd3cfbc3095fe643ed9c5fd0cd4eff5"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "00b5d49a31dad12da054ad4ac0536975"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "c17d620d13381cf730e6ab1f6b872169"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "9fb262598a404eb49a0c6544d1e53f52"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "c98efdc58a40648bd375507ccda76008"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "7023c5ca1b528c7b3470e0b072310f6e"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "34d0897e32f5b93cb6e4db3cf587d207"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "7747782addc88f0089f5cf96cac240b8"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "999b75143916cebff910b3673b3c0816"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "06b32cfd36c93b9e41d45ddd86d55907"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "a3e4ebfdf98737c682ef79005278e83b"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "2f32f8ce31057043e89a38a3fb3a2e2c"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "5348df200bc11c75e3828e542fd44f4b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "9af06a86d1480b1b5248d705ea52ad49"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "2d6c07ccb02ccdad67e7f1f0c4b3b462"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "bbbbf4dda698b252bf1bc0acd28d1416"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "1e097c3f23b463ef2284073926e54c4c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "d97e06d33925b756cd9b2043add7ad82"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "e2f0fbd43af63ccf4b867d9cbb6db962"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "54fd480bea2d78070cd93b4842d054ad"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "031a6a17b8266d8d4443960208676d51"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "a08a9236e75c7c3a65be6c3327fe2e8d"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "f3d1bb31c1b129e212740f1d33a3c4d0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "3770d5f0dec905cda2ae1bafe49f2d8b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "b2d7971dcd70992becf711900c92cca2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "b46a797ee23d2f595f0f2aff0dab72fd"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "2130ccec0b4cb39125b142dce721ea92"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "abd8fcb5528b9d5fbf79b35ebb0bb969"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f51a8893f80e881c4225f4539befc497"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "1cd8417e8834539efd169b266cb8e743"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "d745adb86c8079ef945eaa84256515e0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "0204d0542f455159460c1f0d7fb021ac"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "4bcc910ecfcae64b2b7b1dc5b3045a37"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "2bb54342afa4df1f5e257da84c9fc37e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "2b37f10789b2d2a1427d3edcab98598f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "75631b912f87c970d169addab76eb946"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "fea0fd1959e83fe888c601f30e365a97"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "a4a882cb64925b8fc04cbb69c6b109f8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "0781ada1077265018bc7be974cb21a91"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "0c780e09485fcb51cba4cf56d0c4f11e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "fcc1e39c8738415e044be340fa018458"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "67bd9bd9e003f9c23f289ff68aaa6fd9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "21abb45ba63fc7a5d3ec6ad74ffafa72"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "ddf0c47272474444cce8984a240aa9d9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "26b02fd0bf09c9d0711007ce87192b61"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "f3f73885626981479504f9a528049ef5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "421bc0927446d6f6fefdc602e45c29ee"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "c5ce84865f2fcfb4588f478bbe907a88"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "82fcd166e8760c867cc6d5b515b87fb1"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "5a4808a22e10646067a569d7ab86bd27"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "18f348535cd8a304ac76a8546b0eb2ef"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "0f9b2af5a6d6e3018555fa1de1c847bd"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "867930fc78a89ee0056bf23594818139"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "1b4878e1be22d440d7739ad6a9c494c5"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "63c684fbfadd302a947ff487b55e31ef"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "4d233c40d25a9f46028553f6a91ef221"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "11e9593177c2c5a4fa3558d9c83e4193"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "4e4b7bc37995c73bcb87c29c96d881d2"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "5a4126e3a50b4dd4346d4204f633b4d0"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "51e1354589ff5cafd11a46d07ebce5e3"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "a8e25ec0a5b71e08fda2146d7eb82c61"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e944af1199297a63de75960bfd3dfa2d"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "a8e63bba8d09de994d54726fa0f5c420"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "e047dc113f7ed432285a79e9bf479309"
  },
  {
    "url": "categories/database/index.html",
    "revision": "dac6205f253040a86bb0978ab7b7bb9d"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "8fe95bb9a42e8489310c02afee508ae7"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "f0992ba5b9f72a1ab306b0c20e489a3d"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "bd56218955e926f74eb3b555e583f1bb"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "f4bbeace18a9aa9b4231663c2900a913"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "a9e777023ddc4fadd7cbdcfa07b9cd7a"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "71402894d608b6996c868d7c5ef836b6"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "53e4a4f3d05d6220e8286c56f8218160"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "c22ecd78944be78b0de03b1e3ae92eb0"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "50f300d3e6447cc352f9ee2b62f6824b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "329b37d0ff2b68c2cae5ecda64893653"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "78aa52b5b3a321ce296f145f80bff040"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "657c9e33c7058bf730ded52bd4e98453"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "912213a41db8e4c75d49a67f143be149"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "3bcee487de1390f007a38162e8dc3a80"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "26a2cbb6c749308b9068e850b9486804"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "b72b4ce5a45e99a86e5e2f2de57f2d76"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "09bc35a2e0d34f8c069784cd0ba502a6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "4a76397c6a0efc67f65d68d3166ea9f7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "e3c937a3e989ad0b278c93d83b8bcbe1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "d146071733260441ab6f74178e29db80"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "46ac63e8a5ea1e96a41dde39be67a317"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "0095a7919bcbb1fc774fa3fdf9130c47"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "81bf1e0c984741e4630c522ccd61e71f"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "95c87dff2f9b824eb9c4afaa32676c9c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "9626017f18645a7db4ebc040cca5a550"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "2d724136c0903befe22af21312618666"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "d134fc4a12d42436d00eb32f9c68b4c8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "678fb1aac64d900d2a1bb1cb9f5e5e98"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "eae8d52b01f5bb35a7c7d6a87ed1be1d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "1849a1b00bb4ba51054d9541eaea8fff"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "af4f8d95c4d789d032232ffe400e6131"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "6b4c143c7657b04083f19b9df99df407"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "80be8d46b546c2e9a8f880b34d8aaae3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "2b99747a9923765e0cee207409853e3a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "ac83c20c2b89586e0d9be0d50c287264"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "8ad366691fce6f987abff96433551f63"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "87bf431ad9350928e2742844ed12b463"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "d4b60d05be1c5e4abeaf370ba7ac0618"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "215ea05e902923213b6ded77b892c7ed"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "23e3b0fca24119bab5032322e63ab253"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "098b45084673bfed078a90ad655fb507"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "a85c8f7686f90ade921dc72f13706515"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "2b78bc268ab305728620dd58ed7a3037"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "e10835c5a3d3dbf93461a2904b6703f0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "d7e8c9c836085b16e118dc67104558fd"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "f55fcd9cbdbaff8b1af0563810caa1db"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "d185d6488c6c1eeb22d7f36432af0969"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "d4cfb3019e829761e55d8a5158358e6b"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "66310cb93d5a7d7a266333ab689fcb8d"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "537726843d468f67727998ec17647a32"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "f997a45a8d9b3f1268c5b2defcb38839"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "f749724a178df3c1a9a1b767cd3e437a"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "3cd1d6602756c61684484a65956e7784"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "38ad36791f3afd1d17843550ee6a059f"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "92fc5d4a17cdd97ad061bbe1ee534abf"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "8955dbdbbc8d2858c03e161d522145e5"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "3e54105766c14d73a68c47e6abe98418"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "45d9a39bd1375a6ae5e2983b37df29b7"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "c98c1d94adcd4f043dd6014642caf5eb"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "ed8795858916b4017c79b59cc9450b7e"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "856f365bea1eda257c60a7daa0de092b"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "2f6cd03771a29657fca54c6e97361068"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "1ca2a6ef9ff49fa11470f79f4ed2bba3"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "a96fe4ffeafaf42298d576604109659a"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "f285b9e7fc9c494a6dedd8cd8b3c3cd5"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "4b7b2f303502de20be675cfa81b3309a"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "e91893f8324c3d6347382b637caf3ec2"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "b584c288d024c527be18cd97b7fd02d9"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "12394c4c7c7c95fc93b612baa90309b6"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "01d5909b34b383b9a1e9ef1840dfb618"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "590ea1919c2b11adeb20b5810b98eec4"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "68a96ee3dd87b16e6be9aa1c4b4424ef"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "3a8fa9f45d30c9134229e50eb536ea13"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "a03a6a960b1b69f5e035a00c0b62f40b"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "61b2b32785c0b781f32bd3040e0dba8f"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "d8a3abc93f3cc1a53c802d17e7ddf550"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "9d6123325783ba38a34af2bb7fc692e0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "0c865eeefae9c2e9fc379c8ca09afb20"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "a45cabfb7c4ce1d2716c7b8331c994f3"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "bb1d13e633961094e866d4f63c5a1874"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "fd95f116661c77987095f969ae203535"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "2a5db1e1e2790ad6c5377d6464de936c"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "3ad1b153c82e0177fd430605770ca136"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "4418e045f900a08f89efa00420670a8f"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "ed74db1845331d1e3e4fc204f17ab4ef"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "83c4245f50b366411892de9a8c38eee7"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "3a426cb545acb8acbaf86cd28d530ae4"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "277040b2b75a3dea4606e86c3c1c21a2"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "e9d28607c1d3a69122c2719b0c4b812d"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "88d6868e6b543e7062c43943370994ec"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "7375123ed0a475b014c34c143f454ec7"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "50fd7fcff6733b610331f39cb97ce510"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "ee24699cb946335fbf25d91ff3bec2f1"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "f00b494b61c399976ca50ba0f1e8fa35"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "1df92362e872f7c22adb3beff4653fd4"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "bc85e7e805326492a8f395575d879f3f"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "60b81ab60bfe1b4624d42ef567dea424"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "6f8e9a5d700ced9449bf04855f21fa76"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "bd30ba79378fa5dcced953cdc2b4b4c2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "7f94b2654e047b7131b5eba9a38973b4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "6d237610bdc51ed3528e7cefdb771184"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ecc9bce5bb050c795470a25d2d8f3b6c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "04add72a0bac2061a53450e308a94b21"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "bed7a1e4b4b3327eac54dc7d5f7f3b9d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "be16484ee7ae7583ac5ab1b6f1c33d89"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "eeb9c069d011f12da649b32846e0575b"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "52044a8108c22c4f2c43f0e87fd5a12f"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "1d7f87024150ef4d493662ff971bf3e0"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "f7efb94bee83e6d7f09fbdd4ddf206c5"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "636354f357e06f7242ab5dd6778d60e1"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "8c18e13f5e510248510faea30f34ed2f"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "30173c43151e2cb4ee0f6ccbb282fa8b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "ab2cba325c04e73e24b5ba2beed58618"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "26caf8c02e5c4b5f5774f3e65af94ffb"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "75d91905b5d417ff084efef5701764d7"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "34a0ddad2c4480f47c8408aa00b3a112"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "1a6f4da5e70fdd382568643a61f5cfa4"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "030c73358d1cd5b6f453ef3764491c69"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "125475b5ad2830f7ae2678d271c2b395"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "f52b4fa3c23e3a752e8e9ae9b7774916"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "808508fcfc330e5e20043bd1c7d6a10a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "b45b82b6d20c1c78770cd3cf84bf7dc9"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "a52c68a01a2929e2fead696502b36194"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "e801dae67eb58b460787ffe9bbfb9861"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a528811329e1890d46f9568b9ea971fc"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "7321f35214091d0a3e8d78e1d0bd8df5"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "49c362651ceb4ac9eb1223782fd738a8"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "1e16673f534183defe469f9fe01ae055"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "1cdf1765a625ef4cd3a2f5200790a23c"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "9a863c2aff0c0412ce6f99c18bc8b638"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "f80c06a1831557d0bc442ee85460bf65"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "895468286cfb040c2b8e358c4d2001cb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "8bd113a34643cfbe713155104c24fb9a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "2e44857db809e23c9ee189a1925a0a20"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "43ac299bd3024822687c119709c8c43e"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "41520dd5bf64f79c5ae59f01cab57b31"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "270423fa567ef4f099ab2c1f734493ec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "1d4a373d118c59ec0e00a495bcea85bd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "00ecfb597e0796c1998a15b3c4ffd0bd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "a8c9da6b2888d9337dc08a6143c98cfd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "f7fec314bad279d3ece6c07cfc75408f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "94630f68b477596c6ea5f19438a55be3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "e38785820db04315f9c9c1a7adc182b1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "6b934c507a8b5b045c9148d1afb7f1cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "521d90a899979c7567fcc1c9f543899e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "92798e133e877355c22d6af687c36ff9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "3366ecd86d65cb61596c1a1a1e447bdf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "c1151c0e539d1254e9cc5f2abb9c0b25"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "2a8b5083b7fa64cb81424c435c4ef7ac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "54e23cdad06c6f9656c0a0309a71928a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "b2fac9839abfd86e2ef2b00b4193cdd5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "b23701c8bb068fe5f7cad5544a3429d1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "650396027ec2c5e90e5da59f4aa6f696"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "d05944fc253493d0feaf80bd578ff429"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "384174000b654210a74b9169d6b1852c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "afec4716803a5bb4b55a46d04da6231c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "d5952319ed39cb9fb1c46eb901fb84ad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "9987bc7d90f63db4b6ff06bd3743cab0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "3f5b75c1b3fd3d4c538b0a2a458c487f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "beb5c9242d34941a3a13d50f1e257125"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "8f3e5b79bb43a2bc8926968767551b3f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "e6e8a8d54cdd8819c8e2a4be058b46c7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "bfaafc76eb2c52e4478f3fdb7589966f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "147cfed6ca04ac3c53dc5293735eee5b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "cfc0715bae27b140069a92f37490bdda"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "7b3ad23e54cc844dd46a41c4e61eff24"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "c9a327e3defb3665221bc9e683953728"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "1b882cb0bc5eee6f0ff54ffaf0b04e5b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "517af844431e214a190e45231115c69f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "792997f11aea39023214da01387fd35a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "df91ddc8b0819dc2c44ba83092f8644f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "181e29c62b640707eacf26b92dc705dd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "09fd5608d0c746d02add25bf36196727"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "d33c31aeee07fac977a4d3bda36411a0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "22d6f76852cd49ee71a6f6ee648a647e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "d8f58c27de343e20f1812ed476ad0e68"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "bd5a457ae79233fd710924bc7af4e080"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "f8f8c2a107f07849be189a0df167e321"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "aef2ef9df38f987e2752e58404a1476b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "85971617d0142a3c3e1bbfe8fe9e8b92"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "e361775171332e68d52ea80a0a6d49cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "c36a6bc1a9c9b6a85c54d6bd51e0968e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "a67f39e3e0e21abab3cb80d1d62589d3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "aa2b408860e3cb69e5efc09b2117bca0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "c89dfbde61ba2ae59adf7a1669b828f1"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "42e903ad719e706867c3be8b68d50011"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "d17fbca53a5103f14a9d3fc6dc82b1e5"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "d8fb287124d427981396553fc733c4aa"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "760150dc3d02642fa3d1465172f5f526"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "cf025896a020552fedd6dfd2680db5e2"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "63725e8b11c1c8009e10fcb36a78d2f5"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "fc7922f40a0340a3975be937ffea977a"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "71c4762fcbe6244a42cdf540aa0610b5"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "e26ae645d7d9e6c6256ea21fecaf0233"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "52b35045553cea97f563f753455b5d6d"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "0fdaf950d1af4309f160104a721eb6fc"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "b0f4408dc02a8933aca9c7932ca3d063"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "eed875d207e02399c66f121513094b18"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "051ae57124d05e409efb9e53680a8df2"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "e0f48166b7b32c142c4f09237ea1ce18"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "bddca6bdb8f66c18457a7c3bac76f58f"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "c05fa883533e038f9f3f340aa50cf800"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "44e650f4426502535ad060231b5a39f8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "8f31e36e2b0ca7ca756d23a8ed90218a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "313ccf9dc3a3363240c2b0716e8daaa9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "bc2d50aaac700844ccf1a1dff1249b1c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "463cbce76422fe939080b368d67e29a1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "2d4a55f7c628d1e085a8f66f9872b140"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "53f3e1b285b18956e7c5cd625bb8ecdf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "144bd6790b91b8f964dae7b3b7f2d645"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "617177aadb7605238797c687ece51415"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "3572fc342d439aa71b5cc245b959eb95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "ea67791d7b72017e8801ebec0064944b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "2e43bea5836f5134d46321d8933861f0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "7263e6460982301c31d078e3cc2fa3e2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "d47e7206e10b018fe918ec9d73f3cf95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "c40de9a3d3d0fb5193517a188ad4b154"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "2c70d58252a46563a5c91e597a9c6d9c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "2e2e826c609f9e100132b416d8474aa8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "fdacdc3e341b7b2f4d75cee07e8a5822"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "c68c4729d2a5ebf6195fe4cc83a952be"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "60acf4dddd17289348cc813bd5032b77"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "054850ff361966027cfa658e58fc3347"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "8b9abb434873e2a279eb5db0638b559a"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "3238d69c33e499649c73d4e93703c053"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "0c8d1307f74583e5a9311e0c8d95d0c9"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "7c74899f3956eb7a438846664fdf9313"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "04af9f7da48953fa1fc899a7beade8a3"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "4bd7b0ab1d16f90f62df85c8c1a374a3"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "37c06676de9537abec8b26e2ae87534b"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "3fc011612ce01b78e574ee0d83c47dd9"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "b2e83de70e94a72119d3597054c2b299"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "46a55d58de5af5a9f8a65711c4532b43"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "2ba05bca603966bb7199e83364e0bd15"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "5731129da24a53a819dab530bc6e3c13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "15489eb81c4791197d982de7cbdae2da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "c73a53dccd8c9a3139af9e92be0c4343"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "bbb9d298885eb603d34d756ca842c893"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "58635178c445a2b76630e0c0806d38a0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "f242b0e5369b1fe72f872a508f2c1c90"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "388856b622983c0ca15bf5c9a8cca5d3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "2d9ade25adb8196d1e12be1c465fe406"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "3251fea3307c64d33e902820e38c479e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "fab6b38bb81f7301cf1633b1acba8aea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "389877d8b57c27abd1e8fdbb69b59882"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "9581ec64618ef66eeb4bc21252e60f47"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "4ba07f879aed03d070b8bffd4ecb85b0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "7e601ab9380d475774f8bfba146f5884"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "8142e4dec24f2380a3c87de79198dd08"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "cfe0302d0251dc63fd81f179bae0b6c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "75fbf7a1af2d5ab3f8c0e3a86253181a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "fbc0fd9d2d971f8ee0c3ad35e7042cc1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "cd10726cc943da86075749b406b96369"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "3cc1e13159a24d349402274a754df0f4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "4c4c35f7aa0c620f908ce2eb29d09ed1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "b594bc688b49e87158426fbae2eeaa68"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "e9dfdce8cea1495b4cac68c0d5113c55"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "61a386478e1ef6fb1d17e146c1434c0d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "628780845637091c6426da6aa3c8339a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "c36d939fdf6773dc13bc0721c1625572"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "d082f438eaa546ed01e7d9160f7d4f59"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "eba8c93e6d93a355d6cd8769d5365837"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "633af0d02d52fa64821dd1d4088032be"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "b87034c922b7eed611201d307bf0bfbc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "2e10308db5a976ad630536912e363a6f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "6ed0768cefbc31f7e03fb4d1fdff9bb6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "175792fb19713c9735804986e372904b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "71334a97c7026c2f27ae31c62094ba02"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "0409d7bc78d53d8c8ad20774a1bf4ab5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "56ca508d13d85f652796b7d0b8a3a0fd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "aebf626fb75833f6a979aedcc7b2e1f7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "848d5a23d4aeb1503d8eef1882aa40c4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "12e182c96cb09b724b37efcb8c8df9ed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "626bb005a26e427ebca7464efba3d766"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "959e14b5b6599223cbf7583288683042"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "b443e647f4126d4b14737fe71619aca7"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "7fd267d322fda24bda4f037ead0dc46c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "2661ad0c26ac5df50702fcab52879be4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "473f13d62fa0f3a74e1e4f052e24dcc6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "4afb2a8fb6fe04ba5e490b997ae813bb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "ab0354ecd8bb6719c704a2d9108fa2fa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "b9cfa453f6071e027ae2be55467550f4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "97cb35ff816ab307b007583437f44712"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3186024fdddc3c25f7acde3fbd6c85ca"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "2e0c293bd97beb2334f593226fb1a11a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "d8a67808d97c55019d79159c7ca63208"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "0ac3a629c5a453c3c640034c1ffad8cd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "38d423e2cb7cab14a2cc7f4e66412b37"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "65a5de7638534bc79b512cb1e079d62e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "9aa020e6544b44b06628a2eb8b90bb2a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "94ade9b547ebc609f39ab2f27de805c6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "0813119c5f3e6f929c95cf2a1a030ed1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "84a4c02eefc6f5e66e89f9fa7d318ad2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "f00bd82ff9fcdf0e54fff506ef797b5e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "c3cbac93e5fb653afaa686a37533207f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "a023a1a64fbf357f3fae7ba695c31d00"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "f268bdfd8dbdddb84e748449d83f5230"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "309452e1494a98ed247f381865e08070"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "38ff5574e797d0221e6425725711b98f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "0aa81f601bbc6e984dfca054c7e8c1c9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "4634400f424b77d5496d6975bd6fc1a9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "fd1e12383eb8eb9d1ed94fbc10ddb55c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "8220667fd32b5c7309cf1eb7ddcf5dd4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "c436f165a3065ce8f36b8310b48dd4cf"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "04f030ae8beb2733275667e65e37d020"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "cacf5e704f0d1e914cc0aa64dace091d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "83fffef0dd5b152c0066560d5b612c7b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "ded66aaa35d29d184e362500cd39c266"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "e637a094ff46435a502206aa9c1b6e2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "d20685935b6162fa2562bcfea8dc3944"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "5f249df921ff0f714734e25f62e2dce5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "0acb1cea896109c335102f99954fc7f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "54737beba6e126a9b79cf5ff98b2f802"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "d082e937e2210015219305a1a0bdb5b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "264b8fa7f5e60a30f6d4199fb2a87770"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "a02286a92daa6d035854daef8140f163"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "c214e8b144d49f204757d02eb156dc3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "e15f9cb4bfe9469a556c08d2f5bced90"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "d7df32d6ab09555c6a04cbb589416f69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "c0acd3e1c954031122e3dda4fb54fb28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "24afaef172fbf5643fcc8ce500e16b2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "a7866fb5538290b9e467a7d241bbccf7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "f5caa9de5c1f55936d2897d86ee2b6cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "e8bd119c069c788de2c319b2ac0d437b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "c29d6fe587d4b618710d278680ffc9fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "d9b47e1d9aee0eb5d3ddb0f35d1489d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "48fa403b339c9c7ffbc4965c53d430c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "bdac47f9cc3e62bb2613a3d7765012cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "b4f7836260810189c72b8fece7db52e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "62b8b140d2ab7db3db7164e9b0ee688c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "99528a850d7d4febdb1f168414fb82be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "593df81d5136b1a85e1f068d74686c5a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "57a27020783272e0148ca4df9bd2e866"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "58b52fa7afc361c4fa8cefd53b56fc03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "74d4bd6266ad610ec9aa05f33f17f068"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "0db96805232ac4b4e1f918567992953e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "981228b91f2956c8a1a5eeed1a6c919d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "25d02ba680ff046e9aca4c70c8426c79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "689f52fb85ba2ff79c71d39776708d6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "aa9b897a4360d1f3ce43b9674ec0dd8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "5ce5c6c4b09bb3c05e5e55f47851029b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "ec5bdfa474e1d3603fed0e8e4f948729"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "c57df05248c5887d3d4d3d92cf289a71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "8b78ba94249b753e0c06d32045bfc821"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "a958af0d059a5eb2f988d66691ad7b57"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "2e78df8e703401e17bd60988c361a120"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "c663e7f4875c2bdfb328d24d336ae9e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "42b384c3a11862e6780de506da967bd8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "8e2f5c504863420cd19f0fc7b473ae9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "dd52f061084a1cbdc31737f100479dbd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "c11c07d0c0b3559ee722841edf336109"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "0cc819450d30fa440843888dc32bbdd7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "d981af240cc777c93a0d90455e8825ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "2cd0e22893ce02defa3c3076b789e052"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "106942a5e5b0bc1f11bfbd92789414a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "eb2f0d34bfc714a0eb9b70272cb9b832"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "06bf00792dee9b6b7e294bc586f225b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "b58583bac76b299bba83a94c2b944c7f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "7ff60bff89fcae0fa9d3e1245c7fb50c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "76ed50c3bf2359dbb77f9cedfaa6b441"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "81f786276ba522645de5b33ba7eb7d07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "e8320a2534369e2b2ab6322e55c3f697"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "e6e5250f9a4b8bb2c43ed83b8aed5d31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "1a536ac66b8888c6880a29956afea6c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "4b83ebd19051cd868664af6a1df434b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "9b3f6c892d9917e60f646868f2e10be8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "80811957b7023fba298668e7d1fc1aa7"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "189ebe3c37511b6e8dc74359623f5f2f"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "f00dc464949bd4ef4d0d165160085043"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "4d11359e0493ae6272a3c3cca20859d5"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "87bee0a0110e01fd210d3ab8a3b2aa4c"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "abd33898c3a7622702fa1c202495ac24"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "a10629a439e3dfd64bc5463c65d30a53"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "000fdd8f9621f156a2cae13169ceb766"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "9326cbef8b1c599fc2b79ef77d0fff38"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "f09e1299a2e48be4cfae3987f805d3c1"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "35331efc3b3cb7189d8ff2214fad2138"
  },
  {
    "url": "categories/index.html",
    "revision": "86a4679f3cbd8e3980b9c409d43ed272"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "44ade159c203013cf927b5d47c8bce27"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "e0b0046cd2f58defddc14f53d28f5b1c"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "13c7de1142800ddcd4c9927d7a29ac4e"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "af918f3733aa6003ce3be5631f37f0fc"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "391e56164e13d6d547f68c4993db3e3d"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "58d83b2f986d581d117740d88c9dc281"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "ab269076ce86f958f0176512d3d172be"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "ccd079b3d76feefa57260f78e2bd11b1"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "1710debab640d7f78fc4a421ee6991b6"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "dcbc17962edc5073e126f08e376c7ef7"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "cd8848808db2d682b9aea521838126f2"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "a4a42d29a7a35223b72441ca3af6a1cf"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "7ef3d123288fd3775becc244f1fc5c84"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "b454b6ebe4b162cac244c0849de549c0"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "60a65012d3c70ad4145f03b5fb8153a2"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "b7ae3b768273265592b5ed18c93294b2"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "f9b03d729a281d08fbfa1c94499f284e"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "216256b077bc4cb301b8377fec271735"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "bf85eafba73c3001d880407b3758b868"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "ac9fa43bc2614c4c3157f852c0849b4a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "a85179486a875da0c0d19cab239007d5"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "3902efb7be201230db7ae1a51fda3a53"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "b33353fd139588de75cbe5590efa5624"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "89802594600eb0493c3026ff02a3348e"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "e9e14b33913aca005276801499ffbb9c"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "9e8c61962963a0dc1da22fee2c25a1b3"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "f65a21339c7d35c2ff3c9a25f283bb8f"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "aae82e21d6debc2ba80fda0b62b0217e"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "a6a879785ec70b27b97605351866dded"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "28ebdaf04b06f10dae2f1581c066c947"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "18817f115eeff0c45ccd0aebaa590f68"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "a16645568651512ee7954b498b2f5567"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "90561e1fcde6929f074144263fb2c1bb"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "a1ce1e5cb8f974e4bbfed5648d0af620"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "804ada096a50c26083b746049868c20d"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "2cf8563553cc16158f6bca658bb5d97c"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "e6376a71f974a40ce965cec1c19c93e6"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "b5bef031dba7489a8cb44e03e8a5dbe7"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "42335fce6371d48dd22d89e2b75c2459"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "ab906fde4aa496d6a03c5ff89e16ad1c"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "9a8310bf68c244d0b17563c244324775"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "d691ae1d63dfb07fc96365546df120fe"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "70b101bd474c2116decd0f570b1dd2c0"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "36f788cb40dbf5911de5e1a543763762"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "968496f22f505a9a041dc567cb57737e"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "e526924a425bff5cf48ea8bc13b8d9f9"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "d3c73ee28f519c906aad5033724fd339"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "7826e0981c5e9bc87d9446f5b4d72808"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "2570b4c5366f882770d394875b6892ee"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "e5a2d1bfdb44671712d03a7139242d86"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "fc7a6493003b5fa12299cb84cc17d354"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "e5a38cbf428ed2d81408de1405c871a6"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "e7a230c4b3ac568a05728986c54a91f7"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "0423dbfaad5d6f70078b10fe801066ca"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "48e0eb72292e7e6b3cb750985b7add98"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "3eb1e5d209efc1a4eb42838671350f9c"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "893621db37ac642f26a571549b05bad1"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "ec671b46dbd3e8b582948d56e974420a"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "94c330b492dc52877a5cc1e56302252a"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "8992438cf3295b0ae707ba0d44c4523f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "0a4d9e411cb24ccf1bfd4ea6b1d4f1f0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "93cbe581dfa3ebbe789524ea1579805d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "5f16feb15bf024d549d8ff924a49f206"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "ab567d273eae9169c9a16fdd84527276"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "e656f6d2f56e897bd7f6906016fa9464"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "72f4a7f4456f07a4a3c2121a74502aef"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "8ec94f2a02b253a88b35fcb931fb86f5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "4cab9c2072ef0dc1f1904dd5d2c099e0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "81983b99771a5c8635857ebd513e81ac"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "b6c466dac9d9cfd4094e3a2cf313096f"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "2cc6aa64bac2b22bf6a928511fa3e7c3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "69583bb141a0021fda84421b5651cf98"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "12313a668458549f0eb6b939a9215c3f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "3b70248706d5261c96c26b941cbb7ba1"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "aa8b669ea36d8e410503c490aea438d3"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "123051f7510b5864271881516c6bad29"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "8f20b884dc0275a8bedde0a322165bdf"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "29bd5a7b830fe2b3c194322536589ee8"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "09dee60591590ff7aff7492ddd62d70c"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "d73aa53638745d9b94ab79d73d9a67f4"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "2971eb81d9d6e1423d955e1aad91dab9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "f219611a2bcf1cdbd7f6b4fb1301b8b6"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "847175b094c65635d7bddeaa80ae066d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "43f58e18861f0479e5a3a94eae2f213d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "57e7d17f4844752c600e44bcfc6cd625"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "e896b61f24857223cc1dd78db68f9650"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "568a75d4a808643822e196c3b0a85f36"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "bfc6ea6e191992d5a12de795f75107e7"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "7b07000c7301067d2b380d20e47da0a5"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "a969f53c2e5e5d6d646dfdc34b71ea82"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "b2bb9effc20248328bf3b0800a0e4161"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "b68444f3cf15f3990614e8b8ea546c23"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "b9f7d5cbad193676bcefbbf71bb338b8"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "75852fbee6345b82642426326fb4094b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "26632b381fedd7f5cdabdb37298efc08"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "1e8b687360f8524d9772e5b17bfbd9cb"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "1b54b43e427747e7e0e1131cf1708931"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "3ab2e74ebc5f8059d97845a087454590"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "3122371e18487cda6da69ce5149879d5"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "43f555e61da45b9b9b0bec813d805392"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "b2cdd6416b85af7a4318254a28d454e7"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "be5ca6c711e594f96f6b8c08de3e4f40"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "38569a0495557a823fc9db391ee24b0b"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "f1f4b2eb2c835ed7dfc5de7d3a32d4fa"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "4169b7c9e9d7dae8fe1f723741e7f632"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "b93bcb229de596530ca1082a10807339"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "521c1b7f5882a7f444a6454f8364fbbd"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "94e5dfed157fc4cd112a1a01fa103904"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "9016a93ef550c427d56abcb48a8b636d"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "15b27a6e19ba75d337918d7b65520551"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "ca1ecdd210c9d1bfdbae214903930d98"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "4dcfdaf991cffc14e722416268af87fa"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "18ea8a40a9c5f089e5d53687e1709410"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "3d423ef3d2329b86bdd75f3d2ba2a983"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "ae091f1bf78faad0669b24a420d8ebf8"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "2ede748a189c01cbe8c365a142839a58"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "5ca441cc94573cda036b16893f9fa840"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "9c95e3777c6d81b85574e2d9c3a7bc7b"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "058b697abd548bee9fd13cd125bbe833"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "c6299294d352350d4277564da92d4b0b"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "76515401b2529ec3e39c17045e0befe6"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "841c395de49a45543195cb1324165848"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "2b242085424f9284f6be7f7d52c169a5"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "3ad4b4a036e2e840189a0eb2b07f6b0f"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "18e66405060163424d979d6156942932"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "9bd6733b69af0a1f6cf19aa7a0e3115e"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "a39debc7035b272bf52a38d2703894b0"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "814c9bea3aea13d352bddd3ca9d6df6a"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "0a5dd9f19c5b6092412b7eac4ab50d4b"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "2a958a85662215996e7a8e43638941bc"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "5b0c0058b009e03b5c84826ea6593dc0"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "088c486e8f38b8709f633123d9a9deb9"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "323926d8d42fbdb3a1a639f37b2bbadd"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "93b8c2e897760242908ebbc7946724eb"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "de357f808b4b53c21b926441a2ff7d6f"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "be8b7fcac62f65e3b7f4cb752bcd4982"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "315ab0248ffd9cb9e8c0f1998dbbef87"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "59790dc3b4c9a051a8e8893d8cb0d036"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "d80f0f9d00f74258cfd3db7741f3d8c4"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "a3f949ab9f3f523b7fdea37f115ce0c2"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "c15f392f0c1b4e9861fad89529d6cf9b"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "b85fb996b18dc7e2b8503be35671d3e5"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "b10089b7d52dd749f6b5d4b10dbf60c9"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "ee3b209ef5d3f951b992a87144017862"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "8e948e5abe46951681de9ae46ac87506"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "8cf871ec4fdc700fcce817b9c39915ee"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "aa47db84d0716c43f0aa9799a8de7c88"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "38f9c8e9525d65255e8e934712b9ec18"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "6723d9d8d62162ac6675c15cda2eb0fb"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "aeab062049b4d8dee3721362569ee7f7"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "ec8e2ba0125403d7a2ce0d8b2d305662"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "5ba2aa429f23c72425b267acd333b26a"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "3415a7c90d43bef368ba94b0f380cbd2"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "5791d33a417300509aa7c4abfab35ee6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "1b00da6d83f54f409f2f6b7e2e823c52"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "e0ecd66bee97673e891370d90b18ec67"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "f598264ee14a92368721865fa74c98e8"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "af7fa9cf21bbca67348e663c9c8efacd"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "f03661223227a8af73ffdfdc36516e72"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "72f02aef9dccdf5fe8ed8c6f26fdb2a4"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "e82cd4b962e8bd2375feb89449493f7f"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "3234d265be352598cd61e2afa3c79f1e"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "739903ea1d1ec2130d40ab0b13ba3770"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "f8757103cf8c3932de3a18b862ca70dd"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "61c22cd73949a1ee23edde44dbe7622b"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "02960eb5ee599919b8b1d38844727f2f"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "3deade39636ec727d119cc67b03e58a8"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "f4c110565b30a16b2ce267797503769b"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "b2a6b3aa125b5efabd0e65eee2624610"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "243284a30e6824550f39c6a467088f97"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "b4a02870349c35ee44c33fb54e1db01e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "c500aaa25513735c3c8411512802b33a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "62813d9ee884cd6ca2b41efb141e1e6b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "2f5d5ccec35b3fcb7772c6bb3423a42d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "56704466a27e47e809a9031a217e90cf"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "af3c05d22a632354f19b25a10bb92d59"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "cb6f00c9f84c795dd8d566a642b4b445"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "27e27747308f0f14248117c82aa1712d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "4420a83d720ec504dba82f8ac6311e9f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "39567b4b063b9f8f453a5c55ee6fd8da"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "57a4a2eec78a1747cd1bada986ff4458"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "c2a196f5e74074c0d29e18352df20382"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "c12937b5a689313874c00bd7cf35281b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "fe4fd0a67faa150b7d37cddcb105ce7c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "67105c074ce6b260ae33ec44352b0a4f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "372266c37db27e3edd9db8d34f9deeb1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "003b23ff5cc70f157ac7e383294feaa2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "53e092945aac195a585587fc6438ebf9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "357c7418e1ef9f132816b89d88095cab"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "99bc3e124a0e36e71a7e897e462bfa9d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "78f072cb2d5d5fbc949205ca4593737a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "3aa7a4fdf68ac2de2921798a44f4e764"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "ca4b2070e4823a10f680dbff50bddbdd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "82013ca3e0c3a52cd04f28138b5dd1db"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "fc06731f62c8f02566b6260ccea404c0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f4ed60e78296d41228a1195b421e9a75"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "f82c11eb2e5c6d903613b2ff040163a6"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "0d34954c5a9a3987c4d7a71abfecd348"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "7db6df1bd9f6471d74ee89c886309b0d"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "b776467e5b9a9c2a1c081964f7590ddf"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "b863b445bc40b8a72d7044c8a366d7bc"
  },
  {
    "url": "categories/os/index.html",
    "revision": "1c13273f4b0961d201336451518b42f9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "17aedac73c0a4261dd4be189ef548e6c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "1899048d8428eb85283ebdd3f71c7228"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "66cc18eb4cc40489c2ddc76b19a0db7f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "cbbf4423fe28d2ee050ef018a3e24375"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "943055554fe963ce4f95146478b57613"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "ba063b070de157424470b69b7014607c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "c80144de14917e09753f35d119f673c4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "9a3919b8c2d0533ea0dc6ca69a9818ac"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "c86a67af0b25dcfbb11019a8fda53395"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "c9fe98dbe0f74eeb13036dd0f3a14fe4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "472db34d35f4153dc2096107c19112d6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "a58d960d65415c19a15b436a2b7d343b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "4923980c1b5a86fef33a868f0f6f8a6c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "f0440ea06cc004c14a57e6185dfae6db"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "9420bd27640ffa64f13595cccf7e4dcd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "ca13789eddc596946f2447f222cb62c2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "6dcf23c357a69543fc4fd53f67f15251"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "90b29e441e0e3a35bd453fbc9f90d545"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "d37624f26a7919252dac8c05dd1c6ebb"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "b773f9ebf4d0d96596075ec1f9179a28"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "21b695fbd6eb7d14783b042285372d5a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "be0208e37a9fb4d4001f7acc4b2aa083"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "e0089c905cf4ff904358237bda754f5f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "3a8837e558d3e939481e97766ff6d736"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "46f197faa7751be61dbf7fca8ec80642"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "3a4337ad9c419bdf28439f7cca86efa4"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "65f8a9921cce0588cdfb9cd2fa93e8ef"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "bc4d0601b356663ab3c1a050c3a10629"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "255a5a2a8346b88fdd939240ea819f6c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "9da2a374d2e05804b53262337140ed85"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "04845d6504c4f0801a1f1f0ee7312655"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "472e2c10e673f5dac3301116aa6e04d9"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "867b909a5da46a7d61ef5c91d7769b79"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "5185b45203d30ff0fdf085995ab96482"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "a6d594ad1dd80328a1623b96e8bfa577"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "dc107fad9136a5ac12dc6c02bc246253"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "a50993ed711330caedeef36e24eb5932"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "6dbe20c1ac5c8f929b5ab4c31f38d6a2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "259f852b4e10fbc3df7ad59afd4948a3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "a744237c91e18a4748e0fc4e795d3a66"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "d09e746330da69db74d1206779bc0207"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "7ce3b788fc1bc7df085058223d0e75a0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "c0e9c7596137a2b254572fcaea095e42"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "7185ae09b98ca55e3d5721b779a3e966"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "c4c98f7526021b2784747bf7c8cc6327"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "b06b5da48c281c566685e050e9693cc4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "b4d98c1bf6541866cea31f478a9aea45"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "4a740796d85eb1e523de8dd3eca8f09d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "5162559eaeb98c574a29dc35679e144a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "db367fa4b95e1912f3d9079c53d4b1a5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "3d9bc4b57797c41d6e3146a57145c880"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "53833e27110016bee83249a69bc233a2"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "6ebe0725eac667781e45e19dd4157321"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "37a1320a9faf11900c9a10fea8598fc8"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "390a16474c6037883795dd513414a4ee"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "fec7f218a854e38ad812e79f78a008e7"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "95017231e4a6198d667ef33a8234260e"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "ef32893c11bed3578bdb2d5704625e73"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "31191ba66b4e16aaae7fbdaad57087f4"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "e5b91c4f96497b36bfccd0627b194db5"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "6eb8de271e89ce2b2a094e5fc470205e"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "59705a25540651a15e0d1b190ac51cbf"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "03e4061489ec7223c98602b084e8e36c"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "e4fc3ebacc4731d8eddc9135f8b57661"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "49d761e8352860b1c71bba5e46df7c0a"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "5df0ba29e8801635ad98bf533db0d51c"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "1bcaa03fdc51f4cc1ac7b023f371ad4f"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "7328b76e880643576eddbf70384af88f"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "83a40b158603d10819d8afe2f993cac3"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "fc5d906116c32f2f1bfab9d6e463eb3b"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "8e0930f7eff54ac4b7037063acea3005"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "3f0456722e986757142976e18d128693"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "35ea09674e2a51625ffbb082ee90c23e"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "ba3da547f44e8eb5083de0fe84913ace"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ab9eb8d3e5a8e33a44968de54f61b687"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "cd5f823a7d2b6c338fb1bc376638222f"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "720ae40ef0d5eafead8ce5a71699073b"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "ebf3bf8381ae4412489caf30c9e02b39"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "a7ceec31c030c2573271daf2f3e0b49d"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "7c8f45c2436632c15644df8e5fddf450"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "6c83013a1fedfd313095c0d73ea2f062"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "ad994f77af2b58e6c486279cc7b48f61"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "f662f7e7a511291e68879eb9b29603db"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "a209da4550f899932b9b2e9472657edc"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "e49d44c3115a8e63fdf7dd7b75c917aa"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "cdd158c6b4f1c3b5661ad41c69cf1ee1"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "c9accd8b61c88aa8fdfd72f9d44e2b88"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "54c9e93c2841366fd1622679dd2510bf"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "f9ef264a01f914cb551c6fb9c4ffe3a4"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "143d947b24c98c7496119d7b4bf54186"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "4302d261b8ac2b2c1d06785d6cf20fc2"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "1806d4f8dec2c13e98dc8b30e26397e7"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "c6917a852eaaf6d099cc3a5af2828eb7"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "6d45da3ba932ae695946fa83f24a3438"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "569c37335d0cd9b9cfd3b334f5741336"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "a73ac93cd22cb47df8822b6e7cebeb48"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "a2297bca7a320f1688ad5c002c44fc25"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "2a7a4515ee1e08ec6b7cab0ead0f68a9"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "d293ef2962d7cb0b98c1a2cb9ae38b4b"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "1b36a688b5b89c6e7aa62bedf30983a6"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "45bdfe604443558f29c75e5acdcc5b7a"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "7a38f8b8f935077dbed3d7d71a144498"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "75897b9aef70041dcdd55b08b5fedfa6"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "fef1d030fdee7a437a528b988952b92d"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "298df73be7ce7a073fc247fc29023707"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "18840932b55fba8ae2f9105e268214c3"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "83a5afdf4b194b380d3f771fd57843ee"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "f29cfb3deb0015af47fe2f3e325535bc"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "0ca4e4409b79dd4c04eab31c30c0ccac"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "1b97fd692b895a6d140d7d881f87fef6"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "0050267f240ea5ff41a9dcf835f75d86"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "6954e0bbfe28a1c593e46c4e8686d52c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "411cabf4876232d74ced2e9105ee28d0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "07d01afce33fd08851277439835783b2"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "d646cfa728a03a8459ef88ef6eb09408"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "23fafdeed3d8cc820ae9859162c77999"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "a443eaa6bfc794da786a9a7c5726aaec"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "9b029bd8857747f45b792d122881f16b"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "5c0bb8a381dd77e58c75e27a2cf002ac"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "c44560cae22dc04db5468bef11ce34be"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "7d22fec8bdc3fd0628fe94870d65391c"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "fe5e1ffbc7b530e55902e502ab8ffcde"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "40911ea1fcbb765516cdc991e26e6415"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "9d8138ea2eb5e744aff2c1162b5bc9d8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "021310b1b5157e0ff44278fe23ed3041"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "f6431cd2a651a24fb5bb94344d0f5764"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "67af125504c4a90b5abf544b6d59bc01"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "63d98e6170d48a9451842644f3948940"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "a842d9dd4a94dfed5fdc3aa26eb1bf6e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "ef3cd6b0443281a2cf9098e82fb68898"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "a3d5c696bcd169ea02ac39e232fa410d"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "a8e6058d0345be2ea4c8445544c3e599"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "4ae4bb224c4fede139da1b71279de072"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "b984bc984d1fda136d5a406c8a37e3e5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "d7c074f59663737c96030e4f83351324"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "a47c89177a88c946450021ed3401a439"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "da9e5847ebdcc62bcbfd39e50ef5758c"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "8223451feec6fba73d9c51819df64d74"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "02a4820d80b21bfcaa0c24f61696e671"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "92495c71cf5720e66b04de15d8057cd0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "66173d32c2ab0687e16cf83367192908"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "cdf5f7ea65072fee4a4c640c19692880"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "f731980524b4f7adac00bc1089dc6d50"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "27effe213ffadd554e8ee0a341bf67fb"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "b9c425cdf4c346b324184e508cd529c1"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "87ab9a802259bbed0fcaa26db4c30290"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "7375b051929c9bb306586149451359d7"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "036a31d8ee1d73a17bd9d9f0407f4470"
  },
  {
    "url": "categories/php/index.html",
    "revision": "940747dcd29e1e9df407613ca216fb89"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "d86de85c611472437109d554ec239f77"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "33c7e1c0677983cf50c6553e0c805105"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "6f0f34de825f51a55c6f8736819f6c06"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "7e28c3adbbb328b65f4548f1d38216a1"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "cf2898a3f61547f9b21852712727738f"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "f33ad4750b3835b5688737999faf6dba"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "8ecad87ddd5c62ed7b9ef45d4ef8bdd6"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "7b9dee94e6ee89518b6b8213f4d35d8c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "f1b868330e9588b2b19a48ceb55d8759"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "81604eab631a4ca21d40dc66e4063670"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "c71344c5420111913f90971f02aaf9ed"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "b1eab08a2ce886c6adab5e85e876e97a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "327ddabe6d21e2bde0c9d7166dc743b9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "647c76685f58151aec8fd319da4c6442"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "e9dc4fe50f9f71d616dc4e5ea583fc6d"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "533ff888b443a242dc7fbb6b9d54abaf"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "9a10123e8c42e166affe224a6ca69499"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "6815c54be341700f3e5cc4d70599f34f"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "2e7af9f3b1a9632bf9edfb15304dc6f8"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "a200dfa1dd552c70de0fe18ba0ea29b1"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "9cd0f585e7ef7d621ec40dd11a95ecf1"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "dddd8d4b68e9c4301a20cfbf7fcf14c4"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "88cc22e4b53924312f6dffd458daf5f4"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "b00c40b03453df41557adb88313b4471"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "9a2afec45e100e9510fe389758d056be"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "0c95ba22d063fdae72538d944d366dca"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "05acfdbddaa66bf1fc9b8aa3e83e2f6a"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "40f5e8bd61177198f795d6653da7074e"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "898257cdfbda5ed963b6bb1dbcac1a68"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "c62314ffd7b45d172b2c4e8d2808c683"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "6eed6f1a69ee36037db1937ce4d4aa5f"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "4701b82a55c20442f0ae4df305a7ac59"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "4d144f695b4f184863adf3cf19a2fcd5"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "647ebb6ba6da5fb5db2eff7259db45b6"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "5e77d291d67d756687799b14dc4488b2"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "1824649d1ae9796b03af9dee88144916"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "765e9aabfaf7818d5cb580537630b8e8"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "40704f2f1d3a637836ef664270218673"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "b0fcc7e3cf42d3df11db8357f149fd4c"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "6b715b7fc3b20d54b05c622e2006985c"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "7fd2e0873b2217817653c7c520ed0580"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "8c92ba478c04819326f09ce6bd1468e8"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "82e2e44f9452aae82cacfa6de03f7216"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "5b976759d5e6ffee229925ea8900a98f"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "a87d18912742ade0c892aeed584ed0bc"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "c523c5dda18accfd7da66338efb16ce4"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "cd60f595cf6b08aa9f3170fb5678d428"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "98f049c41e2fe58e78b19c9009043e2e"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "e7d38c6e6ad5b2a2572b23e6f4d7eb6f"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "1253c89ff9558b2f9fbb57c86926069d"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "61817034e663f282790947049df9386c"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "78b4e635064403a2316c7c25c21b0c49"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "d0dafb45cbfb21e1a6ec62a557f77f74"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "1b9f5809c81776d04f8d7510a4f0d745"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "2f481397a08098aaa6f9cf31bd3b4cbf"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "6d5d7906b839c9cabc30451f6f2a1a04"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "3d6dc4bce0b77f4d8d47e351c6c8832f"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "86ed2c415908598d71d73692b712892c"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "b143413727fb8c79804ba85d156c7262"
  },
  {
    "url": "categories/python/index.html",
    "revision": "931c8c0c1900cdd8e993993346cae84a"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "7968ab9a42b7defd5743f8e499fb9b2f"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "eeea204928a4f57825f69f82328d118a"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "10e65e6c331e4254bae92e76102e8f34"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "af51ce66b19d9f13795f188902cd3a4b"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "b04adbef78beffebb96d7e5b63d267ac"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "d042f8e96f3e892f569b6a320734229f"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "f6b1cdc8c99535d69fa3e67601a06d45"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "bdd072ebfe2907b9f5098d832c19e1d3"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "ea3a8c3932142ba0946fd1e6355d8d61"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "644cc56869ab73a8861b2fc9527a77d8"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "63ecd7b9fb0df27c6d986c0994bae43c"
  },
  {
    "url": "categories/system/index.html",
    "revision": "0ebd1f9eb10fb9c99e467e29cfcf7b05"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "8c4ca5fc3d3557bdbd1db49a50c8b3c3"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "7cf58ecfb0b9c725fd67469cc766bacf"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "dcb70f4f12cf9a030513e592cd2008e6"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "5cbe0ae5f1de66d481c8f04d3935a70f"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "498c50217eeb1b08f536581d0c88fa36"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "94cbbb34fd0d9b92c988c3fff2d95450"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "8a9dc81724f916bbbc18437772b6c11b"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "22c6a9298845b208dd79afb06c1a4968"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "c2a99f6f24754b4e4878a41b1888f231"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "02d48de1b8d6e049dd80c9be3330ddc3"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "e1f9fe7538cf7ed8df5e74ad3c3ef5bc"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "cd5be6fb3c3de8c2530b458bece45b5b"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "6931f5e7866126bb96409fea8f114bb5"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "c2a19e723f29892032cbf77295a699ba"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "0cc55b4aec8847548fbd8a55db0ad19c"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "5c1cfcdc7fd2c065102a51a1ebdf672a"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "234d3c082ddfee1d54f47d7ace2abcdc"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "16bd0b66086aa9a48ebfa20f0276e17a"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "a4fca2d87d03aa589d1987a713c83d3a"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "f4ad18c3884965330606eab8bfd38d89"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "b7fff09579c7a1a178df89f6a20f81bb"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "bbd54d43fdecacc02001c5adfa38b12f"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "98883566a615bafa4156f307911c75cd"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "c961a9fb1517256e7b3fb873e7bcb534"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "4c3b1a486cafb3e67ee546a2c6f9d00b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "d04295b1a42a8642927971a2ccbe7349"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "87e9d77aeff138f23238f2128ef4b487"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "055f0910b456c9a17671297105a2b2aa"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "e95094ad0e6257c7533f881437e91994"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "0cc0cb3d0e88e02c34cd055cfd507464"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "a0b2a5d53e3a71e862ded927c1188472"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "e73d8f4151b7a14d010326380857500c"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "53afc2474b484adb60f123b0c50723bc"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "0dd5a95a0d35948d7056f7195b3c1966"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "13164679195f892810690d46e3876082"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "e4dc6cbb7c313d11d61eff50842f7f43"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "44904fa317f73ac1641fc5ecca2e34cb"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "24ba54a133f8644f35464c4210c0a4ff"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "093df4e63555cdd621811cdb3cfa6f41"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "0088a2bcc6fe90ecfdbc0301202e0e16"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "2557f80cf9083543dae5973274ef9a17"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "2e9b0c6b0059fc6e5a6e54d1b6c1b56b"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "8b7a4865fb04e610542183cdd00ca462"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "20c9952f7528592a067782723430411a"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "96ee2943edb7c805ce5b1b1f22962aeb"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "200ac8258a94b9ad5110d8f780f29133"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "abe34cd1ea1709efc899a5c64197bb86"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "ea0d484cb05ba539f35f406f20f1cbb3"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "1d6d9f94c4da1f3a7eb6e63f483f80c1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "3c4a7cf60e93e2736f8f7de4a5059ad0"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "245367f6aae79e5def97d003f154da8d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "d07088a583af0bc99e2414209ffcc2d2"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "33819d2643ca1db17df3fb77719149ae"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "b3a259773f6945f3283f0838ec0dd392"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "ad97b747f4ccf53a40a11c4e9e21223e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "20332f24301f672d0a859fe6a827b399"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "2f013598ff6d2a390dcbf3debde5c3f7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "3b7797facc6b5a14deb001ed9e4ae924"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "607f88d036ff9fc34162f93411d8dd5b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "d90e83b8760131f5c04543569afe17b2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "975bfea62f9e12303befee1a72c24d16"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "0144e4df1f205610f5ce227a031a92ba"
  },
  {
    "url": "favorite/index.html",
    "revision": "52e8c9f3a700e96e4da41759aa918597"
  },
  {
    "url": "index.html",
    "revision": "3a477cd667285988d5ee82876ad56b21"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "d4b59004e45dcfabde49ab3410ee354c"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "4995dfad10fb777d8653631a5064b756"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "2fa5b4ea58e3901b2e88c66e54a7962e"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "99e2953bbd668bae55d90ff1a5b6556a"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "14e7c90eadf0839695e5d2de6f71a69a"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "e158c9b387dff6a9035143e70a514924"
  },
  {
    "url": "note/index.html",
    "revision": "1175ea6207fec8773eb6e38a8f94f766"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "092827d9c8a0a7ab223d515a7741a476"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "4559d76a487cf45bb7af1921cf83d8a1"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "9e46aabcf840337c065ca0c778b28a69"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "c489f16f70c6cd5c34a579a63fefe288"
  },
  {
    "url": "share/index.html",
    "revision": "a6a188aa9137ba9228c094b7a6117c81"
  },
  {
    "url": "single/about_me.html",
    "revision": "87ff75fddbc6d2272387eb15fd7d1d2a"
  },
  {
    "url": "single/all_article.html",
    "revision": "b360b730f1e1c7216fe03c795a39a3ed"
  },
  {
    "url": "single/welcome.html",
    "revision": "c869f011dcecc7858fbffc2ef2440291"
  },
  {
    "url": "test/index.html",
    "revision": "6e3b7c2941f8ed155be1c14cbc757560"
  },
  {
    "url": "test/test.html",
    "revision": "3dd1d282a8db3a78c27af28af3a4499f"
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
