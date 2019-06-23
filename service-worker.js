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
    "revision": "217e5baa08871773ebeee82f54b806dd"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "72534d0bb2e1959b330a84f6c2facf6e"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "b2bcbed220375641d2f7380215d32543"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "f6f1c403cea6d3a5ea0b96e91d435c6d"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "e477bb51aa7fabebc75fa72e999533a4"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "983ef05b82852a680d272fcabc152d2d"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "a5704a47d2858c227e5643d381a53e59"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "4f437242bc6b778983df418352081609"
  },
  {
    "url": "articles/index.html",
    "revision": "5191f08865bab8346004ae17e94daadd"
  },
  {
    "url": "assets/css/0.styles.d5495972.css",
    "revision": "bcb66b13c944e9726091dd63ad5fada7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5dc5322d.js",
    "revision": "4855d48f3a29982b7a9b85bde2f1a43c"
  },
  {
    "url": "assets/js/10.b101ee73.js",
    "revision": "b6ef97df8f050dce58d8f649c7e23f5c"
  },
  {
    "url": "assets/js/11.b9944dfe.js",
    "revision": "33a5059703f49f6f2d6f201e05b0b5d9"
  },
  {
    "url": "assets/js/12.883552b0.js",
    "revision": "283d75a7916bc1b2a9d53336e300ed46"
  },
  {
    "url": "assets/js/13.4b5c24d2.js",
    "revision": "16748c53823c201bb2b2dcb3415d42b3"
  },
  {
    "url": "assets/js/14.ea0e7a13.js",
    "revision": "f118cca09f788c3e585335d1dac3f7e3"
  },
  {
    "url": "assets/js/15.fa5104b8.js",
    "revision": "3a4a3e03866ea46b0102e7d42793f5be"
  },
  {
    "url": "assets/js/2.0ebfac41.js",
    "revision": "f913d550ffe11d0689ec6dc4b8ef32f0"
  },
  {
    "url": "assets/js/5.68f6d9e7.js",
    "revision": "91ce5eb2ca876a8ec89dc0addc2ff2e0"
  },
  {
    "url": "assets/js/6.9376c31e.js",
    "revision": "128b30befdd564b6662199f00a9a35a1"
  },
  {
    "url": "assets/js/7.f8d43fb5.js",
    "revision": "fecee075ff8d4569a06b5b8d928e1791"
  },
  {
    "url": "assets/js/8.a7e06abf.js",
    "revision": "b4a6ffb1f6c9ab7c4c98a221aa8d0bbf"
  },
  {
    "url": "assets/js/9.b8822b0e.js",
    "revision": "d11bd1217ed70cfae49408d79467abfc"
  },
  {
    "url": "assets/js/vendors~docsearch.593c1d0c.js",
    "revision": "c9351880870d905e326198ab994e23fa"
  },
  {
    "url": "blog/index.html",
    "revision": "922df6f6c1b02ba0eec8529e7e97885c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "e26d234001127fa2bdc96220c7c30c76"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "3570d3e659312c006d891e65498cb622"
  },
  {
    "url": "books/index.html",
    "revision": "a6898522ae66571884bdfb1c1742a41d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "6947bec94ad17df10bb38fd610ad475a"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "15db1661f51dfa9d851e415ab7194e25"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "34011ecc053f9966f1e16ccdbc8af1a0"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "cb31a26e9b474c3b2c23da838efaeed8"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "8a6918ed3e7778f96e20c63b2296b5ae"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "77d2120100413303cbc1d93ac7b67add"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "85de5808b5c6372bc2ae1bf820ae4463"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "b410a98b4bfa6f98fc13b253789eb2ce"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "e52472f665fcc7a1d15bd893b5e71f73"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "24dd2e23c4011333abab0e040751a31f"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "d15eca2e4d715d995eb917ffc768a80f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "5b0089696ffb3ca8c43f25525690b379"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "0ccf22e5f269dea1a249f2b6ef5c21d4"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "7a9682fca9d1c173d3247fcf754982e8"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "c14a2af430d0ab9fdfe537e6ff18ffa6"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "5337770a5f1ad8422c8b0944211a57fc"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "15e05c3faa5dafbc7621d8b42dc01d1f"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "34235414f96b2e6fea9c14f775947420"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "ce7ea7dca35c3dddbd2ff1aba4ebf0e9"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "744abdf09db957b79e3ef77f3f66e09f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "7cb16f948f0ade86eb4a217aa65bd0a4"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "c120346c8726c5d1e28bd5dec6db69d2"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "cf729739492ff9db8da114b40a6e1339"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "644fcf408b1393eb971d91bc4ad86120"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "d1f32e007043a2050833dc36c57e4d85"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "681ea03edd0b1a0dc365e91ce0374edb"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "d42eae0a6d828054a39de107e1bad296"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "5ff9fd9ef3bc99124e4e57dcca3aae37"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "cc32ac03a5445a7cec914b333cf94d74"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "123651beff2331f67ade4df051ee3d2e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "061b89654e45e0f306ca23ab80265f73"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "d84ae66a269870e33c7aff91db1edcc4"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "a3ee7c6ac8ceb0a66191b892d0b8b9c3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "5b708796c1a885331609db0c31c49b48"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "f821b4b6f42707d0cb0182669ff41f41"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "f3b7862d764d80cd29a8d21035eea208"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "9eb3e34195c381240fdb4ccd5471ad98"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "ff2dea00f28e4525c4ff159bd6ac2384"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "7433d5fdd33a92d07727b86760af994d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "d7acd0ffac2a6a94b47bae8296ad0188"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "8e9f536bb57528d89941fa04056fbe7c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "49907ea9c539b9d21fb9cab23be3c4e6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "0efb99a3b005a68e1d53cfda2c1595b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "0c0e771eccaceac6e1946347e11c4b2c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "63eb3ca2eb8f9eac742683df19ff1bd8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "f0aae0e2f201418e4b1356bd9d5621be"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "16646d1060e96e55a056e82d508291c5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "703241882d823990febcb45b27743aad"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "8cb0ef006c4646ba28da36a5909082f1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "9c98598f446d82aa45d47368099890a3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "08bbeed4cf968adff70eb890d6499427"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "6651d074978fa5372ccc3ea1dcf620da"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "2639062ad3d9e082c6704b816ef64a31"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "8d4baf30c9f636f0d70f1668743cbd4a"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "fee49f5652f811e5f0b23b5927e2e127"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "3896aa47b7e1bc5e3e0f744b66ad4585"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "f60ca3cdf95daaba8cc730bd10c1f128"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "e9f50a9657cb01dc67e92d7a5a5c4b69"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "bc6c415d9d5914c77eee20de92084b50"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "f98bf41d09980e922e580c54c3e2b0ed"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "45fc83363f8df4fcea9b117d2a653921"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "32cbb789059297f5b054e0261d7b5642"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "f9ef200d6a2f60ce309644205c2919e7"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "75a73fe48ca45b3ba3534e4717bc18a5"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "6585dcae75e4912ddd04c851cc6ad305"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "4a2f778f846d89891997856373a77c1b"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "da5c9cc63ec23122ba0e68056a4320a4"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "8d0bb90f52e2d5ba8d34339e67c5b63a"
  },
  {
    "url": "categories/database/index.html",
    "revision": "97ba976d9abf96a3c4acf5c21b0f7fc4"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "66ab3076df45d699980ea6db47efb6b6"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "7cf73607c2d264127aa1c72015452889"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "4a39c2b4419a72a77a0cdfa55041f711"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "d5b1c5ad04313fba9b0a1261a4273b25"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "d760e43e2e45342c47f703d054c9bf48"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "8a3aaf2fcc6f6da960f94c2f39f93af3"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "2f00a78e9ed33a5b2b5d4cd4d9f9c5c9"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "249dee5e5849fbc9ee1ffccde3ab739e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "0455e9d06d7a8df079ed29456c315062"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "30a72a837af57931dd43ca10f772fc1b"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "4af9906c45d261beb3edde6cea9c831d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d772612e3d76a0c4923beab94ef68541"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "b51e0fce558aef441391b1d4ec3695d4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "418fc346f3e074d78f84d3b1c39aee86"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "236bb21126c4dbb3756526edb87070d1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "8516b071d0771d68fd065d13b77c02bc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c5f8643e8b7a47693bae2e14dff41a61"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "455c6fdd38a07e9d76e216bd42370454"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "4a6d0edf0e4ab85b59c12bdfb90cde30"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "42f47245e822fe63d82e7078f49a3da3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "6267eae6afd98e6e1ebbce1fd6702882"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "95ba1e4686486431531ea254ac95b991"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "25f51920d11acc0e917d2ad1303ea322"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "85c6458847394e43fb327e8f2872da34"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "59b06c655b999dd2ef80ef0f6136f9f1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "795b240890e292b7b2c39840c202ac03"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "c22bac27c5eb174dc0782fd7bca5aa75"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "0df8f4c02d9f2e0db4ff794f33845d56"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "bb1d56fad480fd23a3a783e72b23610c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "71535def272e4cff2f1960442331615a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "4ba76fff083f8a6961a4582ff09258f8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "8f1fb04788a90ec166db2d367f9e2062"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "6d5057c36cd16e7f125e3594751d0c48"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "941e0c5033de8086878f0197e04dcbee"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "0634787eb5b5c7ac895e99333fda5ff7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "86692be6775352aaad9e2a55371c3782"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "6671c934da2ba95b2a512ce9e600e4e8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "a57734d584b896ff68748f67113ae186"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "9e1f2b1369d0a1704664f7bf9d75204d"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "358d208fd568051f266a43710a751049"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "3f0a29165b1b0c25d0a021b3513e07f3"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "33fac5747f6e450bf5702cdcc7724ad6"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "ed0b2818fedbea8cacc3da38babeae09"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "0cfd84449c2b51cc48bfd66b1ac558bb"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "f153f06a4739a14b9d99ba84e84c0b5a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "2f733ee839c73cfc317e9a22c6e6ec32"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "4a7cb61954e024c493bc76aa962d3a32"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "011dbe28308744e84682a447cead43a7"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "430d26db7b8791fc4f7b9f328bfe1bf0"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "750b7fdb135b30a11ec0de7e05ebb7dd"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "96212bd30e1b6983a83ffc3770d2151a"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "8658b6ec7860d8fc8114aca70a695782"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "b0dd0c87e42b1bbefbfe42c4dd127857"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "77c09e374afceafa530ab4a26596ac02"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "a4d8c5672b39fb9450a8fff00a769632"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "b2b0695593b721cb8116931eeda3e62e"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "7376773f79de2e4f68d6516399f56b0d"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "fec7c1978a9ea2b4fa7dc86d554e263f"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "c2ba178160e144c8e680fc7cd2405445"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "ddec5081c1c261a304772ff8cb39a460"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "ac024b5a4bd10f25962e1ea2a4dc8c10"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "52b4254d0cc120378bdee83366696d9c"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "f0cdc59af5c02323f0abfc501bf4fc29"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "afebfe6aa53bf82c32f725c455a812a4"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "0386d78787fc338568ba3247b66c385e"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "897d953a2cb0be5fc2c00e16e67de1db"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "5f749c06d88d97e6683b22e979387886"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "1ef6b853b8f5e4f82494f26314758f0b"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "00e42f19418167e7472fdf8601d7a54f"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "af076f33ba85c8875728efdc899ff9ff"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "b51ceff94b3dc359752cfe3fa7b1f916"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "8c65c83a1c7917a6f19100ab93b1de68"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "c5b89aac117485decd31cd5fc0296353"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "05872e53ed34835107a191acf146678f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "051ff549f32157bda55f23c0b46ac961"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "85054747d1a4f559a87a266f503b8865"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "96511ab2d508167adcba08fb7d9c6e2e"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "4781c0466de8daba8e63214be9324587"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "3851843066d4204d022c45b403d5dd30"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "10720b562656b7e02ed3c38f2497f793"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "585adf21665a7d94dcab9003ecc37ebb"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "15d73e6a45b7563709a533d7aa366a36"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "b225a5d4c9d10e13d94540d7f18e75ac"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "5f272f3cd886eae3b3bfa08cd03953fb"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "d3cb0548861892b1781055bab077a75c"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "8d8bd0c421bfe2028109328a5530bc4f"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "888446c1fdb8b82d31a988b0f826efe1"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "3435a497239392f6e9a8368f5710e5f8"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "385f23234ca6cd682cda9e7a63aa5c15"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "5c6963daec760d0f5e74c71d94a78eea"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "21ebc8e6f90c0daa8248e79e6ab63244"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "182fba4e4836206b4bf4593fe4a1f251"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "35ed61b9cd682b4af701f477f6f02f36"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "04b807752955cd9dcbc15609aa7c7e5b"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "d6c2d7c5787f1104a58899a6756ff2ca"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "7f2ec8429ac351ce01c1489f998320a1"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "501b90f088932ff5c16ec76ae162d61d"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "33d9552f9f01dfc840eb87f8fc9f7894"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "9d71a1b57fb5ba32368ac5653ac480c1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "2cb8120c3cd694a8ec450b54940c6efd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "047ed78355c5b3713c44d2511c3620b6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "5eec7cb5ec3a560bd285536ceead917f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "e6ecc0797b2374a89bd096c1d9595259"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "b088c8d5c6c2556955bb95188c741583"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "aa1997bc6bcc5f591d0538f4c81d4583"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "b67f7a915c3cd0ebc22161af51f43c4e"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "7b0205fee4a66cb1979fc6326a7cc876"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "a954a3935cfcc5e0a2d683272d143fc4"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "067091d4cb6027589c0ca353a9763120"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "f8c2cbfc2ee986855d4abc487e99188e"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "7d5bee2b001c329fdfa84e09ed8a76bc"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "fe56b173b35f557ba0de2e93e93f03c6"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "3ae90baaaefab0d6ca0dbc2e55e5a024"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "fe550c797c912b159930110d85bd2ef0"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "df904a5fcad9c3e0b3e341168c80b0df"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "ad29038d4e87ad2271bce4b6daf095fd"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "dae58cac27c35f748440fd3a5ab36363"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "ab1c080c7782b7d4cd6373f52658a266"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "5e5734af9b16afcfa520beb3a85d48ae"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "56ebc0ffd43007ced4dcffb8789a1d1d"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "0edb357ead2474666ac683199ec189f9"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "cf1d51b317115b303585ce8da94875f0"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "f2f4b4c3d01dffb4db3d86b35a947c9b"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "dbdc386b1697184ccab6d27d0ebcf018"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "ae9dc2690c22dad22878bfff4919062f"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "f0f0a7dfc862a1f1f48a0e0834ee0c6b"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "28e9b286eda35b173cf86d7686afec74"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "9ea12cd0d31cd258b9160adfae9f9bff"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "68f18c0b5bee752d87ed7a253e4cbd21"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "ba1a5a9646b9e25dc9ae52e9e329f185"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "6fb32f20a8bbb40b2200e53e7cefd818"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "9811aeac216c9ad8c4662a2356dea13c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "70177c4cfa64d47c0021a63aba7753c7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "e1bc30846ad63201c0ac214fbb61d340"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "a7fdd353baabcc5aff3432cbeba12599"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "8a7908a91d96dc9cc515dc6c673e9254"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "a66c2f2349ba2224454b52fa69e401ac"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "67499b860a626c1aa5ffd592d355c5a1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "81915cb48abf551043111812c97b587e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "7653f03a806b4ad361c03ea35f0aef33"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "3128603952e798725d63bd59ee77dd6d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "4b2da1e1212335f8495781a107e60e80"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "f8a1d9277008f5f6696cf3d7f0879b65"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "cf5a584f7de344ef1d969ff7cef80fc1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "695d1c4fdb2389d4dff7ebd07293dac0"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "cedd373c87b9a2d0a7aa0cb6a63dcafc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "2a91c124ec086754d786401755b75986"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "5656e4d0e50ba7fa609063ed727fd0cc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "16c1eab5dc3b26108ea963d9dca4fc27"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "d2a6a847e8d4b37b01972f534646e46c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "c3de253f7ae0438277446c5dbb2e6634"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "5cc5801fc7f87d48a2401301ab088b7e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "ab77f0eb36026daf6f8f00720f5816d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "80eaf871277159b986f15833d16f8f31"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "6ef979fb054715188c413498798f80d9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "b7115e799b06977c45675556c095aa96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "943df5ece97421369723875d7d29028a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "a5f921789d21e86069bcda13d3bed762"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "e558ddc85826e10203f143ce9391d803"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "4b00944fba7b7333eabb0d3bbf9dd1ae"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "f0e047d1d05ed329ebbadc6723a721ff"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "17548a51fc157ef9751ae543de0f5c69"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "898bccdf3b3d9b6fbb2058cd6e6eb310"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "4e9e9fb780df004ff5da1577aac8fad2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "c20c098ec03bc21fa2613c28c1d4d616"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "0413b77c0c24f209421d1df85c05c6e5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "b200d5f1db551e2174a9489a88dd778d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "95e0c360a988057f497ccbc3c2b86ace"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "d22706d982a0a93043372b65ed8eba44"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "e17eedb4efd80a7e476408ad30489e97"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "a2b2a7c6949c224ef97a5d41d4d27ae7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "1ce6dcb64da881703d5b9d79de048603"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "a4c5d492ca509746bf6a46062e47f94b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "a7b7cddfa444e1e13c230492e8400591"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "0c5d4b6fb9b5bb8042a422570d679c6d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "4af727d92708b2694ecbba7187d2704c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "139824c2b82be4c7c8a4f287d87d9e5d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "82217ac1be165a5e93b871d63eaec570"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "64c985d55bff7d22e4c98c6c49b335d6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "c8d8f5574504196f6b0b70f2c9ae2bdf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "0c00bf3a06d2757a758ebd9d06afcc93"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "357d6209af4067123af99d1a889ad359"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "9678d096c8a52fed722661f6f9ed5a68"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "b6916c3d638bc87179ee8900a170139e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "c6fc3af5ca492307a3f71347adced919"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "7bf896184813b1bc60ee4d4354ce59d1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "5ec84b9a15df55b3e3576ff16b32c394"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "70f00a5199c0dbd9a8b0b62660090f41"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "3bb572866000ecbb9499c25f3a69f2b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "0814183bf70b12a5736cd6ab8ad1a5b4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "eda7ffe353620c50145c0ec329e80470"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "836846d9182baa6e4fb2d48434c89d13"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "6ed0f6016fe8a975310c28ad88582b63"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "fd60e5a8673d3d840933d34c427c52a9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "2eb5ae3bab141ed567c0d2dd1ed3599f"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "d7d82d2e02b71294f3039cf7f3a1c2d5"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "f3f6e90942f10b539bb517e3445474ba"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "472748f19f9527c22e96521cd956ea16"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "44f362f70d9a03c4fa021cbc6ae7c87e"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "abbfb7002a8bb64a4dc68d84dbfd2d52"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "ec1e0cd65106cd9a79ebb6ce6ed934ef"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ede4b49db5ab8ec31e5c9701356416eb"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "efc2770a2cd0a725738300d39ef6f13f"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "1e1d4d2657554da50bb1499aa15cec2e"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "65cb8da509a85d426d1c7d86eb9ca43d"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "c8e9e8db2604010426a6b310891265e4"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "c5857ed037d1d9541070f81f9edd9736"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "40b114f4758645b65e9cb07212d5075e"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "c538efb5e6ec5614663ad1da859d8b44"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "141a300ccd6f6255ea008ced99854216"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "554810b15a7854932a9c06e7ebcc44a4"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "69ebfd48632c3df32a4967472492e091"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "e631ed27a40b2e7167cb847dc1876f95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "3e2bf8132598082f4ceefa6086aba070"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "aea538a9ce85c31089623d76c8038125"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "16715b49c8be9b229448faf85a5f6ec8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "b18d6bdbaf021007b3ad573bebecc2e7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "875589444b6dea2093e413174201f5f0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "9b9521481874247e50d655e64c83ed9f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "8c55abff373457e3af4e990772fcd00b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "f8594fdf67999092011b7d530f3a1aeb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "e363af5ec2462b8259a7b8719489053d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "e1f825662c89381c9dc924c63732c965"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "b8983bd4f031dd4c27c6c423265574af"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "393ed00c1612a8b65996550ad9cbb359"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "fcacbe5c2d8083df67cc7ab07b07ab5e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "3bf5427c216b9298bb05fe6f2050d6e4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "3c7e50644a3c899c263f3dbe87efacee"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "d02e92875abb7eb7421ebbbdde5be947"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "5df12895c7181145644fcb122ec9404e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "902fc526678c5ae340ce365c410c0825"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "c42eab24488d93a781a5dc1cd6877a9f"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "ac3565b6e2bdd722dd6cbd6f48f3fca3"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "cd9d0158364fb8c7850ca61f8d453ce7"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "62c127e9ee43d6ac600922ec5cd4a3a1"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "e1398bdf182affdaad44f500a9936af7"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9b1a0543dbc74a653874bc0fb153c2cb"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "c4e3925e4ed2181655b3c94b86ed004d"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "a49e2972bf179e03aaca8628db0e1a0b"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "92518480214765ef563447b52f5450e9"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "67c4df0978093a600bd787d8fedde505"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "823dc166427d976871d27b51ae0bcd2b"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "77ff26eece21d969e7a53a86d1c76b51"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "23538d1aa45398f0df48a970d911b55a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "9171f639f623fd44f0b2f476542a6005"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "7f2ca64f91f979f564982e47e5a2b071"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "cc1b5d606c82f060900fc618ddfd65ce"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "6081b7a05caa7635cf31c20003d19385"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "2958c55a04a3f1b0115818cb4b4bae85"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "4d6d92af7121c81bd1a4e65a09051eb0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "cc255c773a0fd3593914d77f7006edaa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "bca752e4935b9d96bbaa7d726d3efc0b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "e1c65e923222b42393bcec97ebabe68f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "00bf3cb5f3ea43249763fe0aea156a93"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "2c52acaca4b342a582162e134715b682"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "28a62a85c16072826f7a7aed0113d7b1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "1deb5c5241bcd59174f591583e10f694"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "2933f64a5675e22e6f11bcef58c871ea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "f408e587a0600850115770975aa7c36f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "142a5917bdf8dc85b3c949170ec0e4e9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "20d2b522972864628b54fcbd091036f5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "c31ba6ccd541e3f44f22defdc71658ea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "d985f9722e0df7c958dc54602e2a2ff3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "c8017d8cbcca162b3f861c4cf2ce73e2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "63beb976784fec40aa3c8616f2ef9905"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "60c5a4d90c4ee5ed5c474c12cc187a7b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "a04c6a15aa7fa5bae28246bd7170eff7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "37f697af94e9ba039167cc7a4e2bf665"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "ea7426f42db5095ed344daf803326cf4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "bdb72e1c7b00766b334fc69fc45372a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "3f0609cdcb831c65ca27626e9a287b1c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "238757819c6e0536cfb1177dfef6f06f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "e65bf45c95090b1a59a0e9ba5252bdc1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "a7f1a14c79e9da6a94d5e209bef6570b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "fa951c2f46a129fd6ea5478c1f02c85d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "e6dec44a60eb84196a11eb3395eff7cd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "dce41bd2344587dda32ca6fd238746d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "5cc8bb02594f3db8ea9eac99fcb7730e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "2d98934cd06c15c1a42ff87b829b8319"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "35e638e5051019b9467a4284c0535940"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "8e13e2ff23782e78f230391b9c20ffd8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "2c8bdf4b82ea52c05a80a57b0f0d20bb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "54f8679d5ac4778b5903323b8e4ef6df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "cebbd78d5b9f098daa8c88d39fa0c21a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "adc8e68028887c9ac38ca641320a141d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "aa94c28d902437d2e256299ea423fcd8"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "c4da36ee960bf152dfca360987c739d4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "8ee607e768833304e0cecfb874e67dc4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "06227a73840480535922d3e9816b7c1a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "beea361bb4fc8fe8fa136b4a96cfc45f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "b33933fe9e3dcb1dfda90176fe893868"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "524b4ea7f670babf416fca73813b887d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "f7f9634eeedff2aca932a565ca9ed8ac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "4941d934c852d7a21c578a7adaae0f79"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "caa3a3ebd4a9f6462727407f9828a38d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "898eddc2111f4771eb366432d8be511c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "7329c158f31ae21844fd75e36f7aa617"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "b7d14d6b083b517759a19d5df7e78ca4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "4a28e9780d4fdd47643b66368b04fa35"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "5359ed876e0f5f03407b75f8424e7fd7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "1d0e345adc0946703fe748dc9a386ebb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "fbb5bee7f129e72549a0840988dc6c56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "1494f8034eda1daa5b7fe881d35e6446"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "dc47666e36b46b6d3ef13017d25eb5e8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "cb80eb9fdf1e4ff1f5341c54b3a924c3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "8c6d5d810f5fb2fb8c570cd161203986"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "3c4b09999865ed88140d981dc3f1ecf2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "df985a36f13a0b0f708b8402ae2f2ad4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "8c8305e0e834ecd20497ce19848cf056"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "282022c03fb16697bbb71332df2dbc7f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "2a4ae84e1894c52b56d38b64419cd856"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "548883a178051d9cf68072c0960bd2dc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "e7879c8651ec4215517b1aea6c3fe01c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "9d30e7ee2c0e694da783d5b519bc6af1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "39a20f35edd44673709868caa520a244"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "50df01f2aa04ec2b01639fcebc17be87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "2cee4905e592e3d812f3afbfaa071816"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "42b7a3a582329d1bcd89caa256ebe04a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "0208106c80e3231bc29c3954de814955"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "03fe417e1e0c9ac1fc57693769e5bd44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "e09666a0cb01c0c6378fb0c294d8479e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "6cc780a2e68c2f7be866d6c12de0d4cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "cf913d95d4d9ba83ed2ddea1a47c52c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "274b8244fe531ff9b2ad7893d1b0f1dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "10cd3e062d1ef7c76088cde47a4e35cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "e4a687f608f86a04b10c923842825e8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "48eb600533afa30ecf1a3bc4f3f053ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "0631edd1d96a17b34c12e4987d8f6934"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "11db031b1a89959ba8c30a1c7bc78485"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "e42fb2a04257c40cb756a16c98a445ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "871050c38ee2b738b8a7c03a920da7ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "3b052d8ae2b15476058c6583897636c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "df1aaba35e754eb02d49463356088c4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "773dca451831cdeec5e5eb1f0d80695e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "77dd5a9d3a2266d976530fd0149102c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "3366f0b855e345d35b8725001b614ef1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "f2e031e2c5726072c27f9c5dd048dc2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "99f857a69f4082470311179863a16f4b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "f4de2cbfcc4b33e9cd9ce89cf086cfb7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "13affce7ae3e37c449b36d91e8444807"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "793f17213317e9f30009da4474670e94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "68e7437ca97c4db73bc804964aac7f6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "0ca68d8e3f7645d3a8eda0c9600df172"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "c6d9b986770fbb250ffa9c031eb5173e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "fbde0d2881d3d8e2b6bf789b340daa5e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "ebaad0556fb66448b91e616f11055996"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "35a43ca575659afb4581b03cee867d4a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "bec6bed23daa24eb4ac6ae1517d0e81d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "10aba15258ec31874401950a2bdb7c3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "33aa84bac626991d214fed1cddf38b13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "595c015bb9a8dbc2bbc71470dec4b45f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "ddcbb34f969ece70824f5fbb06ef115f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "f26ea58495306767a4882a7471cb6480"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "223d567a0553106698e9be6ad0313040"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "7a87e4cca085931d755e999b3f3bf447"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "c13998f41d167cf3d423870e622bdf79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "cd38d742b5e64dee2a164790bb9a0476"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "349b1ddf3e712b5965915c99bb96b107"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "6145d46d6ddd984275dedc4fdbd7665a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "b008b3e373f8ff92dff2494405f3f228"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "0d6b97316f29bc832b452a1316850e85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "46397a6601b07777cdb9349b72b14fb9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "188e03d1397572284520b07efd2bd90c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "6828e33d42278e1d5138b2fff780957e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "9ab55080e7175ee3574bd6ecb6335718"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "af094017ca260cf7a93857939a50a0a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "5e07bfb8d584cfbe460c46e3e0ec057f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "17e49c0ea7103958723823c50cdc5933"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "4f35c0c975a47c691ce485b5a7805d3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "4aa73636fce872355e137477f9572bf5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "7fb841bd877323dcd22f2edca2087d2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "4911b73dbe4d33ebfae41a9366788d74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "23922c33486ab7bbb6130463f0b2d91d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "8018c190922b8f37c1c7748574bae4be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "35f54f663848d3726190f04b093cc33e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "77705b180950c58e06ed6e2a4da95cc1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "f6f5d7eb623f971ec4542a2db51c2223"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "643256bfb241cfd6a9cd04b05c2531f7"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "bc9658a317a7fab5417a4a270213d7eb"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "d5b922d7ad2321ec767c23e3dc5c5ce5"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "574a3f7f0782f1f773b666a5ab3e3c1c"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "54b99b5f0cc85e926efc1519955cbb58"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "4845e2886448622b257633d6e496ae52"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "9be10f1313cc4e4c37cc5c56ea81cc46"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "3580e6d102acc42d62f6a6443bf2e32b"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "462b72c604de56d3071bc641f344337c"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "e697ddfbd833e9b39fda55e1e3c53aae"
  },
  {
    "url": "categories/index.html",
    "revision": "a16f2c848b564c950ccef3fa8f83819d"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "ef6d81983a22fc886606c6061e243502"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "79eeec4eaba2ff55b56557d39e2d3645"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "7234bd6a5615eda3e193a1387dfe174a"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "21de4a128848724e8c73801e43e7619a"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "2b665e7d1f6390fa0550178fa361535b"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "0c893cc4334bbe41511e18ff1ecde083"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "6f6a4d48e482e32090293a0472038f8a"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "8a637070ee6c9ebd67e14cfcbe7474f4"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "ff7590474cec84a6502da906e0427729"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "6b55b011e3011c78043fbde5800ea232"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "bc8128690c1e0b7f864aafcccbf82392"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "189cfba496ffc315bdcbf9abcc9721d2"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "dad0148dc4ed0e9b7d13957299502a99"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "adc9cc0a6d6cfa5fda5ccc05fdaf67d6"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "f03c36487386ef060b078e6f9bcba27f"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "0f05c6318acfc36702ad33a8cb3ebd85"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "e21e87f7813d9685b22985f8897a464c"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "0a1cdf8973a0fa022e47780ffb25f8ee"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "2961e6b738ac821cab25dd1f6c550471"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "17a42a7e8bcf497e75d24ebce576a516"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "e258da0a783ec85e6a2fb07287cde989"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "44fcf532c6839d9e0fc15bbf5d8be30f"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "a1fcc702abe6a337e1103feaf3625c58"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "7983a050dab237a59227aa63dc72f253"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "f63ecd623d5258815a79996341da7ee0"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "a1d387fcbc46bd0515a9bd3a16390e3d"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "851e6b2e2ebb6f0fa80c07a40e3860c1"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "32a1a8c6ada0fc88fd5c5f0c0294414f"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "498db29a857dc9a9ebc0deca34c06914"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "1875cbd81fa202d90b22bee2de0fd297"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "7ac146e3c3300a123c0a185d815cd102"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "2429017948a4ca58cf296673d4ff9582"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "3e8a25df1021c375f63f65addf37a890"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "8e8ad862002a11c8656a505c2ace6da8"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "25a98ad5f9c1891a14729820e4dd3f5e"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "f13ca9a47a7b475c6c25198b7ac79a82"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "dcd3dfdeee4e0a305fb0b6a98c59e4ba"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "f3b84839a46abd6bbdb9117912d76652"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "abc454b7f6a13a293069323edc729258"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "5aa914dcc3b0d4f89ce1861b80c9df72"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "9b3076fa81cc29794c8f0b40e3ef282d"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "cd6a5ce0a72efa2b5dacca0aa0d4d7d9"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "b1b14ce0647e9aa12fa08ed78cf23615"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "6f73ad7fb3f315c6c04fab1b28af7515"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "141ef76e99dd0b72e28ba4b633ef11a8"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "0d0568cd8c32cc9ff5cfffa88768eb3a"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "6c053eee3853c8fe027591b3ff6641a2"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "4efccbf0977ce8c0b7a071a2b2e2f6b3"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "e107dd94b1cfc041285a7742724c044e"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "8f533ae9353906f83f255041a09381d6"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "d4c31a521fb076afaae49b1abb638991"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "c56a2a6ebdec748ab6316d8737d83663"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "0607048b251121b4c466f7f8c686bfe0"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "ea0eb5c1ba8a41923a86d8b3e50a46ba"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "403c195c0576d5c484356a5bf237f627"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "b58e3dce56c52731adcf5cfda7b774a4"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "66020b07c80240a179a5c8ad49a5d4d5"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "9f34ecf0909ec02fb773f418feb7e8af"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "043decea7e97622fb75b120db3289d05"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "da07861db3696c6ff7ec6af2a0d41cde"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "c69c5351cd9bf23259de5f4924b628d1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "3806c373d2cb09ed9765e9b540158b9c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "d18a344ca0a619e4f34834f5e71f17c1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "080ec49c38b185acecc649d958efc1a9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "9101f4d808f6204e6ca04adbfc282d48"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "afaff16a87cf63eba2a5112351d57088"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "88affbae50be9f78d5c76fd6815c7947"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "47b269af4d7644e0b3718d1bc54a599f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "c644563f7108bf0d8651f41b70028b83"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "46def6d6b7d1a412bb0abedf06b3ff07"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "b7d7af22a9b0a28844b373f29d775581"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "7bc41557f08082174ad6afb87c4e37b1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "8efa4f930b1024ce6057a9e80055785a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "557636632328e3ca1904349adc54b061"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "f2efd042c317cf2bd1e61dac2e45ce27"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "c0ece66fec9d1df4d2a77b81bfc4bcac"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "e6b1ae92fd2150513eaaf457f16a30b6"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "1abb9c3273f2e171a79a7ec7dc94d389"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "5a709685dc9bc8dbb49e17b414e2ed10"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "1edea80fad03a8aa932cbcdf3b0ead12"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "6518a9b8c02573bace8dcbc7cea5b177"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "74971a6065269455a6dc4e5322ee5814"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "446c456b5528debab984f198c764d6e0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "09f5d6358611a52365081bf96c6bdf0e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "584b3ca0e05ed880a62176f96dea38d0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "0d32799636214446433a4510b69ad6f0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "1e3f40dc95693d565f8631201dc00cde"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "5c7c9e8c59437bd07ee59725ac158e9e"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "2643ff2a49b575324ccf8930c27e9639"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "9640e051b3a3d9260cd134f7c11e2640"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "aaf8bbc98ed10bbe42da91716d7b5843"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "3f5fd7952ec69f3ce82558e6e5ed418d"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "fe7cd31a0dba9947abf2260b26b83597"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "f081bbab447132e20b00e95f49a37adb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a9a8e91cc705bc20014bde76f0ed7ba9"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "174c40e6282047e7bde12ef644f2c9ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "cddc41cffbb6e13f05ab6163bcdb9348"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "64dbe4a61d1314bda096879832dc5121"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "51952e48c5393eb38cea29567cf8b4aa"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "20b8a57e1ab09de6cfaf279cfb2e209b"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "c0ebcd1cf16038727956e3fcf20feccf"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "c142ea0ac38b51439bc94c8c368e7bb6"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "753c4928285717b0ac6a4ab20a26d480"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "358ea8bec15e5caaed5eb3aab1307130"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "1898f1f43cdc74f80728210039cabf88"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "720ae090057501195ec07dfc0ff4f3d6"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "48c2f8a8f4d575c5faf0112f66d86ad4"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "9c74142d090b02ef61bcbf26bce4c2d5"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "6cdb78808dc2456b67c5827f31c1d6be"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "5d0f85f708a954c517834149b56d54a2"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "d31462131689d5f897ca385b5870e5b5"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "dd1cda69d0b195a3bdb7a3fa01d70da4"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "f129891ba2dadc3927dd61fef9f33a8a"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "a5268f08f0d74cc5a24eded3a3b33b1c"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "fd774be6f3ede7381e18eb75f77c354b"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "13e574b8905e5f5bc2104a7f36853e31"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "ec4df55908cc18f16f28f1c251f02742"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "c499e105961c3d7e1b3a4c21c9690923"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "77d0a3890403e817d4c88b89e955fb1a"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "dfdb87ef4d207e1a2ecdc72ff92a1a31"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "4471bd167c9e25802b6d7b1951367fca"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "e7186dc50752691d560a883318d62578"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "caa20b678b1d5f303d3a267453767e01"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "d1d107b5d31c88d721aab7e48a783213"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "9c9304a85d7bb3d883f8541475544a63"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "85455be5a8d47668e0fb4b8c3da0313e"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "ad3994dfd6a9699d66de062c6e5abd30"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "842ca1aad343352bd4ab4db6e6904ae2"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "6da0b92e1e024e5598ece9b4ca7742d0"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "271781dcbe16c5128eaacf508cc68964"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "c17682abdea2d805366078bd81d9e07c"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "c3102d550d1331585a10584aaa1e94b0"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "16d652a3df7160a93cee33925fa2f41f"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "84e74d6aa0d2f3dd8666a8691f98eb06"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "cbca51294b50daaeb51c84ba618fb907"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "4d89ad24a9592630a738d79201e31652"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "4227cc9d8373779cefa4dd591c0bcec6"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "037b87e7cf62d211971e8d29518ba082"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "fb9956138213c19e1137eca40bd56847"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "ae072456d50e3483bed4838b1778a6f4"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "55a72dbc6d555396ab031b06b650693c"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "5b20d0dfa7d0ed5cbcc58b60fdd0d0cd"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "d035b0b5f9d4073ab46b94ba58a178fd"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "aec2f2dc06947bab7571e81270d1a9fa"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "4ff81bf77f86fec0f5fc2c42843ea687"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "ba4f0af05d5d74cf7ab69aa1e3416790"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "f3d0760e5ba3ea4448880e1c45e1c4a8"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "55ee7bb6127d8ed40e158a706c8982a1"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "e48a63d40a8b2e7c485005da85b130b7"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "1b2091a2bd2225682c5f461e8bf176f5"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "3bf8826bff2a5a5bda256edc848d42a3"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "034bff96f9bc94bed8c528988287eb0b"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "f9c10d4c96bc9e31a123b632e9551840"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "3cff98daa73195750c16899b6ee69f17"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "39e76d9aa795601eb2478a8afe1c669c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "d0f5c12b084464737572348a9ad117f0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "72ddac04ef0c1f54868d1217e5cc1b36"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "c99963c342b08201dcea1ffa7c55c525"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "d5b90babe2883aadb5282aba57dfb569"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c95a518c7ec925f62e49baf9623c7744"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "bbdbb5f0a84e8228cf71ad2676c8dbfb"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "8462be36abe4a642064c3199b35676ea"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "d6099f399335db35dfa56f52dfe0c758"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "9be93093aa896849b8b5daf42869945f"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "75e84b8f8fbc390b57bcac8f7f105ecc"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "1cd18a2a8627744d3c29a42e05563362"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "34ba85e8c1abdbdb7438b5439fc670b3"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "46a079e21675a0ec7382573ec5e38c5a"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "07953b163c12bd215aa4f10fb71164c1"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "dc3b448d583a196f89b0eba7b5374a2d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "fc0fa21d27e1b80de5ff5a9ac49f16ae"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "68e3b76f11047c477ca757e7ee453c72"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "f74254c85ebd97ff718b4fbf4ca31474"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "0b2647d393ae47df2783ed05ce92da54"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "a81ef41aed177fbf24c308c0244b1c54"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "8b98b070ef08eac11e1510e3356984aa"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "9af4cf84c4020792329c55377e1850c1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "92995197b0db944331ac759f9ee7a356"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "9ad204520ea7316d40d5744792546d71"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "4418c8569b5144369333759628127de9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "6016c1fa712132808c772e5f48aaea4a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "282e0a0735357fa8067c2fb46aa3a864"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "966298731f0bd2d3c713abcf406ccd53"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "4793d35f2844ba2dc30fccfc8e649e8e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "bbd927d93150aa78fd5d9e611c5c6e03"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "c8c6c9707622c5c799235d9b261a0dae"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "45e99af70c4f5f8e8ca3ac9399838bfe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "d26d0314848d4e107527091173806127"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "9d558ef5d6d92d5f08861eaf29005d4a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "ff491dbd085eb5befc077ac384e5a2b2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "5de2ae341508e5fb0adb7a703e358b5b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "f02179113b53ef0d9b2a2ca0c8f1fc02"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d0f99c21a8dd02d62a6ce547ec97485c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "07e04a6e40fec178f283d337fa5e7150"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "a4ec7c60d1629124cdddb8da5e3061d7"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "3f677374b17bb5c1f46d104e48e9f754"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "b8cb636e8d160340df06d1f1979331e7"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "32578185bba9cce6be284e3b370a1910"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "32fe0883556612c730d110df423189d8"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "16e007de47299e6b85ba9fe2e4cef97f"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "692dd92e2a2d8d2029fe68bb1cee8cc0"
  },
  {
    "url": "categories/os/index.html",
    "revision": "bb538d6acc9d6cb1318deba008e770a4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "43b0ea319c078c88c6bd0064ee28ec55"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "af34a88630f0a5e6c2e2f5600af999c1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "2920c47784c2df3881d08b705acddd9a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "ac46e1ff118f7295eb257d694d6643c2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "94754418b10bda5fe222f44f2160c5f4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "25c93098ace57d180111fac5ea38fe75"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "ef66cfe90447bed946e7cb103c4a584b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "9fb8813238c70548c55fc15a12241883"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "298fb90e5dfb35cb74ee4f8f73bc4b87"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "9b26f641e46c91a3ff89dd544d292255"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d9648a1dc37ab66f444f0e493cd222bc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "09714433b7af88b9f4303fcbe9389735"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "9d1faf8e6286223e739bf59992301bbe"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "fdd6a7b16643b6e43e22623d82d65422"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "6c76c0f236287ebdabc44463979408ac"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "bf171c5fe2ef21dc7d39dd3079eb3bff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "7c1fa621ae6f586abf52cdc834d9305e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "0eaf174bb6fdca988354cebe701f071f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "930b15797aaf175ff90b62f4cea0e05d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "343ea6e5028e2198f1599f7d83040278"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "3a96b5ffcd75f1dda5084b82a6b07d5c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "0bc2de2c9e0853163b70c93d2e29f6c9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "af10a1b92e14e282adcf061f92cb691c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "25cb44172dfaa75c3568a28f642c3377"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "39fdb9feab8d53f3ef90ef023bb6821e"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "489f919586bf7ffe8590f74e3f684ac8"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "c54bf054b42df9d9db414a624bea61eb"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "d6dfc18a0df11a9ef719b0020a527c90"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "47131b0166d302997371e299760c3762"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "99847d6b8ad1b45a0ed168373213f562"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "784e389dc74768ef99d970682d2302c5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "78e1c91ea2220ca86ece609b0272a3c4"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "6e506661618a600274a8d2966da6d2c9"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "78b7e83b20f38ba40337cfad53d9501e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "92c1da91c336b41cb87a3b142acf0ee4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "80114b098207da19d5b44933169d6850"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "f1bed63ba961234386f095b44a54a3f5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "747cacfb6654ba0f9f9aa59aa262a217"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "5359c307040948102a7317ce746be210"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "bb3b9d69d28842d0916c34f01f1c7618"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "4c06c33dd9a4fb3c15694e88f764cd9e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "70474454687794752daa1d0fe77e59ad"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "0839b467655e6ca54db9f099667d6814"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "9e83c85d0a8594f46d5949f1d5ac7a00"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "4432abefb9bb3cc2921052a765edf26c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "7f73827dede4224a74329484e85deba0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "73b4cd83cd8c6a9a5b6d4d7a35ab8be4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "0927c878dd6f98a92df9e41852a9cefe"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "915c98242d235259fb91c4327ecea8a7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "a7cad5a94aae642bcc21fadf0c24f373"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "59dcdf062f76b7092d493dee0d5dd81f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "f86f292083bf0cea58c7d0027ef4eb5f"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "b14d005df2d81e4c01b6189bc7c76ed1"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "3995272ea07cdc62df0f187340747c1f"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "f831d2564896136e3520ec3b0256e775"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "3efbb83972ed921ea33f6edea30f57ac"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "81369dc02985ec34c9c068c58f5f8df0"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "7c9844834d1ccb6c066c9e54bdff8fa6"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "99689c35063cd538764bc6fb6f4dea54"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "ca9600fe3e24294e179de600a3d71889"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "64e1387cb91999f241ed20bae769d640"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "e347b8737f8626b36b63671661e99b37"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "d4253687baa86f9d2963ecfc601e0bb0"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "121da608f130080a5cfc7627559bab06"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "0f9235f0da3aba0780b258921d820d40"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "f6c6b79ce078d261bee7283176a605bf"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "281b937773b624fa7ac66e81b187a238"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "b03fc638686b7579ca12012a31308e5e"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "2bbdac975ae034b1062d03b4d9b75b90"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "d01d41eff07891d51be2aa3953c2a583"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "ccdf77887bda8a50fe191321ed7d5e1b"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "cb46f18f6219035cd0f5e5cdf5dfd8fc"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "bcbbe70dd4a02d121a2fd91a2ac8dcab"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "cd09a1e1620afd84fe1b46e8c9bc2764"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ad5b49424d84e4859a26320dcb3d74cd"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "6f3213aab4a8a1be48b7ca72f152bfc7"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "d183af07d43437f8210158eeddb63439"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "57790f2bf5574c137c9743d86b970789"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "3f9d8c0b0badfe54c01d12c65a2d0f0c"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "e205f6e55c511ce740eb7d495d3593e6"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "a88d875216e57436af4bb2ca9f01975a"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "9ac369869f5fc912687d1105eb9ad64b"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "b5fa3a8cc9d8d45b5f19fcbe16359604"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "e2154e6c5c744f9f2b8f88f9e8e0a939"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "adfde1a6c365fbdc55718ee69cb8a906"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "6abbfa8c683ebf2e472cedca04da2ad7"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "e2acb1d1e39e019d50a28a9cd190eda2"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "f423fc99c4622a1db0e64c635293f5f1"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "02f1084a4b6115ae6916399441db1f43"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "24f9ada0a8601cbfa34473de9ca55c1a"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "47c937e122e209d36ed66e67e407e7d6"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "7d38440fa854e1c9ba8dbbfaf770ad34"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "b380006ba9bdcc474981e0182cf61eed"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "389822f55a30aaa4e28044fc4caccc94"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "badc2ecf4267c6e83814305fee4ed219"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "96f8450dda00d8e5829cc6658f3f8f05"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "89b8f19b0e98507adb7db257014d4f5b"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "f1556f54da404a79dd0f9fc85cbf7292"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "2a26f2712b028f0643529fecab1ee5d3"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "2401f2dea95085a84b97a39b9dac1671"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "3ca27e93f30337d0eda8dd9c29595ea9"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "01968567a1a96c7c6b81014eca637d68"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "5fdb42aeb9b21fd8f6b7ee9d9dd766e8"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "c850986b01c77c93e100003c2512e23c"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "f8e3c3d3459ef338554132cd8e574a5b"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "b34e52902677b009e1a93e4e8d2e0ecf"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "4352f5d5eb077cb38e0013b2e9e9e77b"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "ecb4d0047a716cc5a856a2176d030c02"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "dc2f0eef62ca3a2cf2b672f42878db09"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "058f0ecfbc49085a41b189923dca7af0"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "254c80d5e19b3a2436efc10435a9cc1a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "6d81d67030304da78d72fd0302f99699"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "a6c4b5c75421fa375f78744c7b3c24c5"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "c07e2fb1bad5e43d77833d21fb01d972"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "a16272fe3677b4754e8ee5835cee9f6a"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "28a2c8d74f38d59fd85087313f751a8a"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "fe104f717c670e5f8c8e09c13a50bb25"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "4bdff7d68b16181ee17770af9f76755d"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "7a9e1f3d3ede0a14ab398bf073a4bc6b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "bf4aae78c081c6a3a45189e8620d7b27"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "0040241489f033f5fbdd561961f9953b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "9bfe7fa882f199247167df0ac7f19048"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "71acc8b0ea729bcdb27e2b75e5fc0d84"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "5965ea248ef69aed7c16b80dacc93b12"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "3ec0a975b35d9f1275661b647d979ed9"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "8b209f9cd56946ccd700a4d178fbd89a"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "f38a9cbe9e5b29a5c6ef9b3880410d34"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "8ed9b5ae61ec74f5c661486c8b2ae391"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "f0f479b94f15d3e827e050ebb9dd2996"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "5f6c8077fe1fcf46646b0a9d70ad7f4a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "0b373d7a47c00e91b286a6aef4de1b99"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "7f665121ef7297f674f96f9e774fe010"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "5d75d4c997a68cf4022721ba480840fb"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "d8d96a60009e1d2176e4094f6ba6032d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "44ef3a4af812ef69c3cccf83014c29f6"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "cd346a5afbb5f0ff09402158322d186b"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "f1476e0a9fef2c629ca72264fe38fd4c"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "31b72e835dba9c9073f95ba1685921e4"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "4939f24fa57561d2c22e5976e8d83d51"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "c90d14cff00cbebaf6c48aa673112fc0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "082154f0912374279e1440f4d854483a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "a7c291d7168fd160a215b64d193c918c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "f8c8d7707368f9bde491b4e49a77392d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "c58e4f5ac5e13364b6a8bcd3f40345f5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "6555296b0515b670868af1d76c0886f0"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "1a578d90e4dba02eb34c004f013fe4b4"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "193036a7f4b3eb3b47498a9945aae9e7"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "99638932ca6a105fd4f2e78f601f757e"
  },
  {
    "url": "categories/php/index.html",
    "revision": "3085f4c064ab047b3d89d63edf59ccdf"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "a5a093493ee817b2b6b260e6db73a041"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "35e41ae232b796802f8cc2f0b02e05b2"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "7c03bcc6860e119dba73b417f05c49a1"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "7c8b6d455f110dd1b2144a2dc83cf9a3"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "fcff9fd2d9f9674b0844b30492174f43"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "1f337b2faa4cff3e4f1ea814623d8013"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "67766c84c86558dfb2ea1173fb78f4e3"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "1397bb79b0793363c11c40f18b244657"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "7d1c8719a4efffb467e913b9f33582d6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "72e34da664e086338f68407d00191ee2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "a7f34b6d8ea229cf63144cad3f5da9e8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "0fd8031ff0983c536ab7c44262f2bf2d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "f8a8fbcc7b9a2771940f1bb67837008e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "026cf4aeddd7854f3aa2eaf5e7a50b35"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "1f2f694fb98394fb5b71c0592c3d062a"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "a460747579f7f0f8eedfc5061fa2edec"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "168a0ccee82e0b3cc31deaf1a30d7ad1"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "89363b47bbf89bf03da8967149e93ff4"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "a11cf96e39eba5b3d0d6b460ed5c7cbc"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "196c1f0297cd8c47d689660c83cce334"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "4a91b1c807c937b1f7e3f4d9bbff0e35"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "24a8c3d7e293239cee896b3d99dd0b9b"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "12519e64e39e0854d71bbba10384c732"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "75c41936a378ec9867ab637536eb851c"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "6eb1229ef5de8042e339c26eb50fa9f5"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "c4cdb3ab948f2aff17dc3872283dc704"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "5af73b1ed18d1d231e5379a5cc08324f"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "ad476667f3c1499775a43c31f263a1f6"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "486a01031a655a6e244a2f596b1b9986"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "93c144b1dc77edb947215b2e9d2aa74f"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "fa2051114e86ad181d3fd35398d79514"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "f144d35f978251465a02abc019f64717"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "a2f9a46c3fd7c9debe9738e68924f37c"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "84d5a19e86ca001cf354cdb8b4cd7568"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "36612c83812ef0fdec7cf96cc24a6b10"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "5d7b4878c77ba633de3c06a9a5d3b7a7"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "d9f78f2d808b7c6c264ccf6ba8956774"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "31bd47212b61f90c3aa3bd0d8e9901b4"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "0243b982b464981789ef2fe9ef440409"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "2542882b5c0e923e9c346cf3aa2fa189"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "bbf2b24c9bfc1f52bdf408a140d1708a"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "b72e4feba226a85bc9ff03a2edf34de6"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "77520c80b920c45179420b9ec63fd222"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "7805a054d7c0fa3e2a9f2a4c8ec86399"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "d137e92c9c16ce8d9a445b2e5f8402fb"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "1e8f7406f5dd91eff10726703282d578"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "f4b996425be43ee5e016d5259ea2553a"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "e2cb2e070ec0f488e7849afe22169356"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "9168e5c3546af755f8ca6b20f157e596"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "80a862f2f3c3262e72b00f82b3d4347f"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "a48af5505731b69a59a6cd99490745e0"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "4b1093182764bb9f9db80bdb90188e0b"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "3860391cca701d8acaeee9724a37407b"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "63c6a9d949986911ada3d5205fa5a80b"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "013d3ccdbad26fae16e229d242884e41"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "e7407637f818ec7c6b2a9f6459bafa8e"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "840c7818df3a08c08f93f3f4b9ed3ac5"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "baec4d18ef883fb1ac4ee5730b4b9ac8"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "c977d0806dd6704759cc4b23d5312b7c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "fa3741aa5947a6a37c3b5e2b0d75d1e3"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "25454fb0ba44bb76e0d4f842619a1f6e"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "c5b8ceaef0999c30db3779616d5adc43"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "8ae1c68d0eb5704a88b167f9df647f76"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "b5f3b63b23ef66316842685a6c526848"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "a04ebd108aaccbce00b0b687a4feba69"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "19991ee51c880dc3985b0ed94e036fff"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "305236dade1e40d728aa183607d34a2e"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "44219574c0f33a25c8693dfd3f10490a"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "3fd2dcab9d45c6d780f743676577b361"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "cf8c3e064f08bdd121b3deaaf018b80b"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "df4a30df53516c9e2b240164f724e440"
  },
  {
    "url": "categories/system/index.html",
    "revision": "6c7c9bae23c57507a334fd83286e7403"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "dcbff7afcda98daefa60a96c41897f62"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "66a086cccb1b5fd447535d45cdd72c13"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "3bbab9c7cb7af95b92623a8dcc2fb057"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "5297e74e13dc56b5455f83450a95209c"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "1e7480112359ffc30272b7904d28c3de"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "94c58f219dac49649926cff07992d81e"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "1c8eed80fb1830eff1f1e12af17aa0e6"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "69c246df7ab07120d12d38f12d07d511"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "935be23998ebeb066dff8708e3c4535a"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "5ae6ba1e7ca096895e1d8baff2f9c3e5"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "8c2c30dc48f024daccc1a767c7c0286c"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "cae61e3d90f054f02bc7ccadb59c9a61"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "7545933aeda7e88d69cca0836ce863f3"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "735ada084db2f4e0b1f29fa59cbde161"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "2a101ce790e1945d30a56b298acd7b6c"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "4168f12482b0fa7ddc2dda1bce449009"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "b624a1651dcfb3e942801cf5d09b925c"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "58365816698b9d4b47bd010d7ae02450"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "26ae44688157960ab91f9ecd1c590fe4"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "c1493c031d8ffc8dc5f33673ee0538cc"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "f2773dd438f17970e9f32e086abfdc74"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "50460419afa30a48ae706dc825ca0947"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "1671f81c32b891553724d908345be55c"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "d6e00d2c0bfde0f5fd91b6c7b1e8ba72"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "5ed1ead78d5e6796923cb3f2cc229a84"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "6daef56ddcfb1e66cb082512461ebfd5"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "8231628cb331ebdb89482d5fd1c84320"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "2beb447495f23dbaedf5618ebed5c203"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "96f46974a6541f14f6a89c81980aa89e"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "20ea9c76e68d1bec8ed8a93a8f3f360d"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "3c4b26ca7f348d0201337d4e9ac941a5"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "918d724efe47be09549dd6e7af26f579"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "5bca2748477f2808b14d5b8351c8e8f0"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "5959411917b1c8f8066842d486dde82c"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "8d14432723f9c26a248e4a3c6feb3001"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "0a9f6f08c418f58c2fd38f8ccacd6f84"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "21aea6ae8b80e216ffcbaab747347ab3"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "a86d7f5d61c6154ca78fc27bef1a402f"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "2b4502f83cc3d060af70956eca02b82c"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "1ec2806d7c72f09824a21df08d9c3395"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "40fa257d83d62e3255fb74d7fe677a15"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "1a30f7690ee1631206ebdb136b2995fd"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "3eea314ecfe898a91b62f1c387cf13a5"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "e315459ce4c958b39faf07fab57df60f"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "f507bbb77187a3032eecca18d7c41d30"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "0762ce21cf488404cad8a27751c6a4af"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "6734f4e3f7d9912e8b65f9dd2b5abf35"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "91a0aa6479a69909c1e6412ef764382f"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "1e904f6299f9e72244d299731a70d953"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "3a4ddf26bb193dfa068093eadfe75f9d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "aa4844151c690db239946b0c371773e6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "5150a916b8c2c1070dd687dd5056ea4d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "885e21ef44983265bab761e1d14273d2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "dfa1198c9be1c3203e2584558a7e740b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "92faec14837579a937b6ee1fe72af342"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "a36fad569bcf4900cdbff6fd223df981"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "51a62a24e06d4a9801e7c5bf35cc3dce"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "bdc44f60e1d04c8d474df49c4d4b0104"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "e7ee90ff7f6e8762c03da90a3112e265"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "075ca1996e5a46edee09aac2a07d30ef"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "0fc535c7a8adff6ad017d8bb5571a96e"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "00fc7b7fac7182d6db6323761c5b9436"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "e4516465d29cd0ae753aacb7f38b9b27"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "2941e2e7f033624033fb27cefe68cd8b"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "cb6668a10d6c1f3e0844a786bfa49faa"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "a29336e7c71c816fefbebc9a5b196883"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "d9380da1c7cbb27dcd5022c1b99f37e2"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "92ebc91ddeba9015bb0eb127fdb7a5e2"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "001cfecd6ec2fd883ee67154b972bf4e"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "e43dd3f84e5d3a497d85128711d183d4"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "a36ffd33b5e3abf970a25eb8c1ba8136"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "a56a1e65a4f0338b65f495a66b83d7b2"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "73c690ab4956351704cc8a5d345bf60a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "e530ef7b66ceddd1a00da7a4d93ab0ca"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "6cc283e81b7c9817fc43978302fc48ee"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "d0f7ff36fd71b7e2cb430b0c52bfc769"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "16d69e010cb608c638758564cbac4a0f"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "9d16a69ffa723a70ca1ec09095174641"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "10e330541d1b279530303ea24a9f6079"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "3a245205bf69923367e2329ce6603287"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "05355ad0375d9023a18d6086bc9bad01"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "b66525387b636d23f0f3646e3bda6b52"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "40ea833467c4707841595a3dc93a5bf7"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "aa660732d13400a30be9ab11afd58d6e"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "2215ae67a75a091ffd2199a3d4788a5a"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "11079a3567fded3d306d9ea794c5c4ea"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "1f1acf02cd6258c06e16cdbde6a519f4"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "b38ab8b91d7b8e936a422f884094473c"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "88ae2b00274874114c3ab6338b9f43ba"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "efd0f14108e1864cc2fb456d41afcc0d"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "dc0c98b16664fc6386f38f2ecd6219e2"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "ba2dd8229682b8542a7e3e0b877a008d"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "5a1b5ac85bb86b05557c0db2d5743043"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "4428033582fb847d7df165397953f1df"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "946f7d23b98dd046ac77afd6433f3543"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "8930cf1cf0d67bce3afaaf1a5e90e350"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "5a90bfc83c105a2aab0a18926ce0faff"
  },
  {
    "url": "favorite/index.html",
    "revision": "8e70e481ff3de749026799e8eb8d2b85"
  },
  {
    "url": "index.html",
    "revision": "c4d70e7faa3bed7c82b88cf8a2ddd0ea"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "54ff5bca41a170247f85932bbd034875"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "80f1498785be6619dea5a4cdfbbb85e7"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "6e303e5fc9b7ab665dd4546e2fa4e212"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "44b9c96a0ba4b5189ff90656cc646376"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "7842eb2e5b38811a79961a6ba6693343"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "362f0ac4be503c0e30734a91e1af47c4"
  },
  {
    "url": "note/index.html",
    "revision": "f47d1aae42decce87a7481bdb51ace7b"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "e080c5443b8bd880ad33133571397ac2"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "d9bca8b3c2046d97f3016ae8ad5c430e"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "c0b1f90b08a561ea3ddc39c30aa756fe"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "cab8efbce59a7b2225a904782c940516"
  },
  {
    "url": "share/index.html",
    "revision": "1d1bc410836669cd922adf33d3154a52"
  },
  {
    "url": "single/about_me.html",
    "revision": "6b324a19cd8bd4fa4fe6d9fc8d1a4880"
  },
  {
    "url": "single/all_article.html",
    "revision": "97096d6cd17bee725353b3935f6da778"
  },
  {
    "url": "single/welcome.html",
    "revision": "337af6c128a78f97b46a3a06ee44d976"
  },
  {
    "url": "test/index.html",
    "revision": "21e516dbf27f963a81f921f3dc9cb6bc"
  },
  {
    "url": "test/test.html",
    "revision": "3119b7de9ffeab62ff788ee46444449e"
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
