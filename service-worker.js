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
    "revision": "81714fa94a8d5af19863ba4eea29f9e2"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "2accc695438b1e9d04ead6e1690f2623"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "0ed2d8c55648a058a04b0b0b7ee16ab1"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "d1e2752ad0b56c939be55509206b5152"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "2286b0ca1ffb690057b667a1d41b7150"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "95e2d4da682d2d6a59e42007fb5f58f9"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "22a0ff788909760be1f2f3cc72a13890"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "a96b891a0a378808ce2a0f7ca18b7e55"
  },
  {
    "url": "articles/index.html",
    "revision": "0fe0e6e71d7aa1809695fabe111c4ff7"
  },
  {
    "url": "assets/css/0.styles.d26a0eb0.css",
    "revision": "e3ffb476daa2afc535d789317dd2ab68"
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
    "url": "assets/js/13.125a28a9.js",
    "revision": "b678d30a1a11f9c5311fc063eb1b2634"
  },
  {
    "url": "assets/js/14.f80bf307.js",
    "revision": "2405df15aaac7dd044c41eaf91aaa15d"
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
    "url": "assets/js/5.a833b617.js",
    "revision": "6340c5286d252905de0b419fbc542ff3"
  },
  {
    "url": "assets/js/6.cef5da3f.js",
    "revision": "643217c38c5ac4325124b85bbed51dbc"
  },
  {
    "url": "assets/js/7.b6ba9c09.js",
    "revision": "971ff17a3e47f903f1697d6c01c81576"
  },
  {
    "url": "assets/js/8.c70bd9f3.js",
    "revision": "26748c4717caa5111b7620f5c1c9aeda"
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
    "revision": "e55c434fe316bd018c182391a85740b5"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "202e3cc36e7b42c43ea526c65faa3a22"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "63bdf3d135c791c6096b5847e91e56b1"
  },
  {
    "url": "books/index.html",
    "revision": "e9c667801609667d1220e60fafa42cf7"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "b83cadeb0eaf9d2fa391c578ca66cc43"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "c8bf1325fb97a1fe83034e786a73d71f"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "fb41db172927a8af12f288d7ef3fc5d4"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "aedf71a54fcdcb650c0c48cb0e6cf48c"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "a6fbf27ff9d6f953c33bc715bdb7c15a"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "5047ab371589acbfd867e8a3ab9114dd"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "903c91d61ccf86e90f86e310f0bad424"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "0f6554661088cd2cdfa37eb12edc0d20"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "0fa2111e1315644e7c838f596c2d84d7"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "35925e4d169ab7e4fc4a43ac6051fb35"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "0fcdb05201df876a033079c42d0a5df0"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "6c3fdd7525fd10aafc59d6939bc13187"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "9fb1d148d3394d48a6a1846e0413f4b9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "8f07174333b25c4eea52ca5fae893e3d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "aa1619d14ad48b284c9d4e57d3c3c744"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "fce2711936d8405918e2631496abeb82"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "6bb00b3d1273d90829ccdd6ce0b733ed"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "e5f51ea84a2a217b05d054613c00c7de"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "8492ca7478f3b7fd85590a040ef662cf"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "51a282dd75c4680a0bbe8ded6701efa6"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "7f70a977f4a9c9fd9b5c0b0221334a8d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "21bb12dbb23459cc8a5bf89ae0bda4c9"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "7a80898d3a667aececba618cccbbe088"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "e3e36e57e6b42f62205f73f3b9830a91"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "caac0b69d65ae638c494aeabc039be89"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "493b030f92c050f0de8aaf8760fa47cf"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "bc4760de51f61bed51f23449a79de942"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "8048bde8f6ffc03d4ee9b94e110f3199"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "fbcaaf81f910b48edde1f7c51f95f697"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "1a3063cd9b2e868b8a2b7782e7382903"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "e868d8ccf7dc3ede137a453e9fab50cf"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "65eb7921bc4c0a72e62cf9c561f6b702"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "a306496cab9c0770f4eb3edc0eee47b9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "a49849b96e0bcf22c9e1d080b07d8898"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "2df2d18f2ebec11f39928573ddb6dd1d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "a0ddfd94b8048f5b6c08fba981fa4dad"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "f3108eddd44b69ce7d82f405f99c173e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "8221a4ef138b21941be4a3cbf3abfeff"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "044cf830cb98782a6070bf5daff6d1e6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "eafe9ebfcb013088987c72576c0016be"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "d088ef718e6c4665ca1974b99ff0e7e3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "45d699029bc824b548c9764f13bca8a4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "f34e478645b32f551facf544af023fd1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "2e3e52b75f28d2f922deedd0605bbe09"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "2a5951fd6b99226470bce50ee13684d0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "bf49e12c7ffd6ca7a8e69fafbd0f98cb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "f29d75bea425de437599b29f29821801"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "6ba046949ecb7a6048f7af5dfe6f2e84"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "d8e0507c9c210e44fb871f42d0a6ee6d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "766f14ad22d8893b99d90af37b6dd30f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "1291d0fdcda5317675896671c89d9d0c"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "c2451b74f8497784910ae4ecd063a85b"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "37849322fde712e106075d956b1a8e03"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "34ec4ba79e9b0751148994d597236a70"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "485d3b9ea89693d78383c3cd175e3a04"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "46b66881a394a6b6ed868e1a82e376cd"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "d4a27a2c125ad47328912610ea7f4032"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "e6154054967f8178193888f8f7b4c2f3"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "5651276ce8b21c15667ffe9dfe936231"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "6349faae10275bee520602617e2c6ee5"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "343add6e12f68f7c429ff38346f69adf"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "13c6416ff7acdf4834a9f17feefd7100"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "de026a9e5ebd706800b77041ae104491"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "75888bfdc8d7e211babb872a900bc219"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "fdac6dabe667632a9d2d8f71fd4dcf6a"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "1050e40ffebedddbdcfab6906cf894a7"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "8d82864936168c228cbf213720e55c45"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "83ac5f0496cfce03a4f4bfb1876a556b"
  },
  {
    "url": "categories/database/index.html",
    "revision": "8f990f20d52d5e03fb59eb795fede309"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "64a0dc388e231f443813902988b38383"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "a947bc79e8c00a051a5196a2e0614e5e"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "4f95bf5fc459e82fbd3414b6bb510633"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "6374e47252e5222ac6ddab8ca4906fc4"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "4b3cf4770c43841930a4e9b67da92368"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "7188642a10bd0a68feca8dd36ce18509"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "f8d2d678dc5e055adbe943b026c5db3a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "e1d030446947bcf36b802d2e97b0a7b0"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "eefcaed4bf9827ed595b15419bbe1008"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "2ebd2f1430a76a0941377caeb2fc3d21"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "fcc825a0e862fb26d5bf8bb159204c6d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "ee2192c2ea3d495e37f38de406dd1fc2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "1a07fd356a4c0fbcaef7b9cd109f2ad4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "a308e5d2140180bc4237f67fc1fe38aa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "11908559f7c632aaaa70a913b3d7f5dd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "2a627ad0d017848ffe8a3a8caa9d07e6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "89f973cd3dbc3a7a7fd58a3991d75a38"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "8e2e8f281f64f6f707de5e51021946bb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "a3554f39edc9bc4770ddab6230276b9b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "3a1dd0037cbd5790f2d9e01bc60ccc97"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "056acc1f0ebec853ce75eef39ee011a4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "b41a5855d9d19496ccfb34dc194a332c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "12e31327f1a532cfb38276cb7a32a2bb"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "a03b7cea21d3b34fd23c5f3235aad1fa"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "9d41b2ab7945442eaa9e1208441b2fd9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "15eaa6a001e61c6c38d74be4cdbfab39"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "cab35c51e465c4c715495106b12cc688"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "5ca0b6893978552767f9db64ef4c7d73"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "3b1eebe4593d7e84d8e656b4c191e71c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "7df5fbd1753dca6e6833497e97021bb3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "fcad8002dc7ca29d69bac4b017f861c9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "23472e6b46ba236041de93462758107d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "e3cf35e1094b90849b42edd4edab78e1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "9a3d03a6ac5bd033cd0a8c88784bb013"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "2f3a02a2714b11e2908cefda046281e9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "a35819f01a48b2f430fa15f3b832f64f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "5166618c27522e2a529712cdecf0ef1a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "ace4a73d14b137ececd76a544114efcf"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "e5852a0201fb3c81728f58cb915202c3"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "9b2aa74bda679250099212b69e7f2b6c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "5459609277e5d9b4d319e63fa16c1697"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "199dd98ccd3e20ee46a8e6fbba429490"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "ae7b6ebb0666197c17849ac3176cd0d0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "70492165359174479075f180f66d4c6f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "8b63dbbe3656e974e2d0e97fee96b9c1"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "2eeea247b37779119fa548ae68acd822"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "f6cc1a8072f690be89675c59769d3646"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "1827e8bf48bf70f83a1362d18a5a3c0f"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "0a7bc7d775b5df683a7c285a8f754e6d"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "74d92aafcec1428d0f24137d0527386f"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "758871d91696422e32762ac162b943a5"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "5965e9c1dcf0c2bc251c305cb7f56a12"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "d8c6a35b18108b0526041df3225c7a0d"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "0aefab6c560410d2b68379b09ecb46e4"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "4140641e1c1384c5892f9ec630c7f9b0"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "a7849b1734d0bcf7f18a361d285ac39a"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "2b3f670cd672a482a274b127b773f9ad"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "01a867da0664bab7e92143832eca5306"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "8d0a382529b824a3d956f08cb8aa86ff"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "d03fba290eab98c052df6be6045a79c9"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "4987c3c5aad0cc53b58e81a61a8801c0"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "9e2c66d5dd6ae6db3463174d9eaf924f"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "748bf8f317734e406fb0d0b86a4d9fdf"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "4a4fc1ccd2d6b5243e82af0668185017"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "4e1f0065d1c594e4eae5e99493693eb6"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "2e527f5e33640a85dbde20e9207c0e9c"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "9e45d56a514d691f39a033d0c02799f7"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "dedbfbe7d06b5ec153037720418f470e"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "2b5237367de529796b7eacfe3cbe108f"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "67d91012708e4ecf53c470a0d2b4ff38"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "8ac0333e1c5630ec2071396cd6558913"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "3731b9d7d6088287fbf5e62df606e19a"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "d745819ec645db091be00d4f2d80eb72"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "40972af9ed8dc67c16c1ae55d7d7ee8f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "caff7970de24ba42eee5f9d52e4ac773"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "905f9e2c4c0036c6a7a26de86d0abf4c"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "e8ff1c4e824e740483c6da69fefbda56"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "85cd9f75e3ba2477a265f75e1f08e5a0"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "8664fded9834efa85c64eb308a9ed1ae"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "c5b8aacc6cc2055a450edfa113aa8081"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "15926ca851372cfcb11953fdcbfe7576"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "690f83f4e9093a3266b90f356d2ce35d"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "f13bbb0d9d1071dae0eb445fa6791c0a"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "09a40587f7d7b2c781ca139f4354212d"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "a649d567d7d98abc2575b4644ba7effe"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "73075151cb60de4b713a6928b269f2ff"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "d804415762a59b67a3174ca6ef451736"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "0fd71d47f99cf8d82e4a5d3a334f1ef8"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "1b4d7705fc0f114bf3d42a85881b6b19"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "c5ee1dfdf8b715d913a3b60624199d2b"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "06913826c3cf652469203b9ccbab26f0"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "62ec18fe60b2c93e395a15c09261c72c"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "318cc7f581cbd88c42d069f4fc8775c4"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "6d30b70c0566f58548dc81511485bb47"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "5bea4d30cc1fab33a61b7cefdf8e5dd5"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "cbe09b10ad533d0cae32ec5d586552e0"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "d830dc3882cd85bff830df6c51df27a5"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "c4627f889c2ef20c68476a037a2161ef"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "36df0633ddcdc1fbc80b22c148cf80c3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "8b5dc35cb30d18b3baba7d25852ca102"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "c6303f40f3e0a44d50ea2715dec418ab"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "6cd854651d68f7823dcd5fd90202bddf"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "f17810d947040e78ae6a35cbe7114d84"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "1b951ff3348601e0de8987b6144f7adc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "12162ace42b8149f736feff422270db0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "f93c34800ee474c4ab29d67575f7f0a6"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "ac9925ebc1502d69243a581a59a9858b"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "b0b5f17e9ecb9699b670dcb666d1c75f"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "8a71f1f40d8151a645082bdf8422409a"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "a560a1e5256c430e880aaeb1f90821ab"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "bc2fc68bb2600044576b272e61df6828"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "c7026d584419ab171b29e557bac89d1c"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "fdafc637d98e6e43fa7d21c71f7d0086"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "f40dba87d802e076ca56e8d37e1f5d7a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3563d81aefc842069771a5507021e202"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "d87bf2b705543db6699ea1019b1c418d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "895352898477803940ac084f9d761fa8"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "a41db249036cb91a542148f793f5bae6"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "fb56140530b70a9e0726a2e648e10fb4"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "6951c07abdca3f40c2b76da71b3b9f94"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "a588c1d36ef43b0924ac3cb5b4acbb85"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "bccb3e0747f107868f4424cead4904f1"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "1da8c87d41108b2a95a26b2906f94cb6"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "509c3aecd1f587e442a4014f513224e5"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "fb97922829e2800b9303fc85b6536998"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "072dfd40ec82da8c6ca9a7709f9fb41b"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "e54109bfb97993cab0fb3e006ef67cbc"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "1d2e8e564d6f73ad4919d8e62444c7e7"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "b170bd97fe8c699b094b09090aecd9af"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "f3bc5e0ddc41b59d9178c8eadc088ceb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "b686fb6fc1cd222f2b32ed69e2dc9ed0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "c1fa391d2728a9185f7884525c21a7cf"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "1297848e2e550c53092789b21ff5324d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "b2193816d77a11c458a3fa3e47793d23"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "52ffadeeed1aa073a16693f39de3af80"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "a70b3a0afc3dacfb6d5d876832f7f100"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "43f7562a2eecca9e7959981870825ccd"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "598232089b415b951aefe680c30575e9"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "9de6cbf81e0c501fa7f080ae2636b257"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "bf18f704a8e286e5bc83c8197f030efc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "1598791d458c4143fa9677104afae22c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "f1027d6342218481b99b136369ac7f3c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "a917f77019cfd279fe61a12f2a1249b7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "41e0af25a8e6d16f7e7c0185856f7db4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "b343bd9a412cb9d93836125876891e94"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "76d5b88d9402a78af536cd398f66eb9e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "9d31d7f01a96a398626d311523e096aa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "c9d6aa40acead52d6aebfa33e6338b14"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "3734bff008cce8f49d0daea3c3a889a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "1504eae98b4e74ef8d85226be63fa94c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "1675ff114a31e80be4e8a4cc01404707"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "6a45a4f7ddd1b847cee3da63a1d5bea0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "5e1a65dc3f5888eb28920f771f0c2ddc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "1b6235731e63944f97bdad6baf828526"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "ff0cd190daba485e9af9193b5dd0b816"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "912efd95ecc2734689fc70e28b9ae5ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "0d5e5e4ef58c7247f230a30e85820523"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "715a6a33ab97cd9c48723a966c5669a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "f84cadf3d7366d246cc64507fbfc14e0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "794eb85e1a18eeecc23ebba67236f323"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "51d0ded07ab9842a5d316b9006738e9d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "f55d979fe684a087bc5e49bb0f8d09a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "ecab7fed03311f824e070c1c3aa98dbe"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e6619b4713a8d694a8ac2ac6a6d9cb1e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "42ad729d2d3debbf180bfbf7924e3e00"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "c7cf8718a0c1c208d8617077a492b446"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "f94d629d2a40b33bd1c41dcc3424f409"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "ed1e7b8e20df6bb9e440126cb02295e0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "7c22e4b9005ff0673c1d94ed82770525"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "53586ec95c97535b49e3f3f1a82cb5aa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "a872e0e0341bbfa377b669c375508dc3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "76e2f39d052357b1c90583a4fe050bb0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "aca61da96595b8dd07d446d22682ffa8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "17e190d1dcdce46110abe3be6f5b270a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "028339d1b108ea5fe12ff8d3886a45ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "bb85a2d31cf9037cee589736748f8f1c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "66dd19b704a9eeeb5e5ecf553bc313eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "40c5588a81c910a1f3bdd8f69f69b80a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "217b23695706a53463de25ad9025cfd8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "3aaf1ddfb0978bfc3deff4367a84440d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "c844818b33dfae4e6f0e3a6f209ddbb2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "d63804b9e59cd838895655f5d7ed6030"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "dca5ff3fa6d7373e12f8d2998337f17e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "0652e520c6b495722e704cfaf4b7cbf6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "b8e4db789c845b58d584b1be018b6859"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "f2e14d9af96c89d4fe7bf9792640e76c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "6e638a347396ab324b7f29e0e0dfea45"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "fcd4b1b92222c77b33978c9dad6297c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "5f2f9dd28a01d9d7eefeeab6f8265c3c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "0cd15a7c2c98ea1b0d00917d6ef87d4f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "0f23eb5768b033fb2e644666dcc27fed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "98d1534413230d1be9eae4e1b392eca5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "1e61ecdf4d330a125f4c8140d0849576"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "14520b3d7c85e8400afce4ae4db47818"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "0d9503e1e66220657d17890ee9fdd945"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "b15553c566d3cbccb1c5ee75aeba492b"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "af87b2e8d2bcb1f05c9928376ce8f9a8"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "a1ccfd71dbf896d23b4ad1e4e5ce2d19"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "07e6919141a0279c6d7698f85cb553ae"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "a10f19ee731dc3d2204efc3ed1a08be0"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "81a54077bc607508319ba0f0b063b944"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "4fa13fd01b378c6d47941995d4413f04"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "e5d154e9375a4079a03acfc0227f4362"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "b57b47f538ae444eb114698da62d09ae"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "31e22d64899ed98f6394c8ad9c4d6cc7"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "ea8cd028a39d1101a946208037640833"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "482562319c2ca58c0eadc4c9e74ac9f5"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "f6bb509e6835641a58a5f2e6fdfa261a"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "eb18954197417f968dba6020a6aa0085"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "734d3f4d0bc195635bcec42c433987e5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "244ab7c89855483ab050e0757c243866"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "2c1736a9d07bab946ffcc918c2dc8689"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "eaebd0b26af875234460f64fbd126609"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "9b31f246b0f76dceca0bf3e79112370f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "bda77dd1deb27aa28b48240f24f57305"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "65e8c0345c2d7022f817ef485590dcbd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "091ffc5dfe35c43aa157aa96ddd75c21"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "3e996a008aa0b7f163e7729949b0ab6b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "00466c2dac8f4b9ad893f24a881bc024"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "51fe083c2fd19ce4dc64574535c663bb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "67dd00d3cf5c7466e36fa2a1a5fb17a0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "3c060cd7093828f9074e9a1018858bb2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "0f739a27a00d880b57f2225911c46c73"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "31628c28a2afbd038e6b2b5c2c43bc7b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "f86f8b21d7039072e38526493d6c634c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "0115b2f9e67b73e83e695d1a3ec99714"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "3129170f02e329c598f36717516c5393"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "5c3045ceefa40231a10c1c9b56aaf367"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "dfdaf291d157e884653c8c57b484cede"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "4398543b5571c44ef1bf74d0ab3deea3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "02ac2d5ecda51b75c5ef268f6eb771ae"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "8211f032f4f1b36516b119ed24a13746"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "b3e2f111dc24e7281b55cfe62430b8bb"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "1c57d3303756d2903361ee5074c96337"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "54e90053c04fb91142fa3bd8cb406b86"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "fecb0f5bc91fc2daec723ba9e6a17f0b"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "1a81bf8aef174859a7a508792ff1036c"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "e2b8c7e9e82869d944585b544e418ed5"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "666fa547f0fc2c635eccc817113cdade"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "b017d44946da2dd36af24ddc46fcd1d2"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "e9146bb3ceaa5c1c6ffa8b1609c14ecc"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "72203e7cbeccbe35a165a8a9ada3825d"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "0b38d9eeb9247e4e4dff71dc2922ee24"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "327beb35f9493143433f7b6f2e7f161a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "81faaef4769aa1e6f5a9f3d130003455"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "c855096d68b30bfb9e31912d81ff2b71"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "f39006d5813d47e69e1a9b1e8a9181f4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "78755778bcf4234da7ec34c2650a0aaa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "b94601b58ea70115f250043e802a4c87"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "d5e9cb5bf60fb3de06105ea2d62c0203"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "99d65f2c1d49db99567c99590b7fe151"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "9985db990bdd8aa572c963f5611b1db6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "7bcfd6629f54be867feee6074e355041"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "35acc5b9908e263420cdcbc2dcbe14c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "91849a1d7588c01b994298ead3fa5cb3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "ac7616cfe28de507656f65f660020e4f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "080ca336257af68b627b960af31d8276"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "f93dc488b56fc38c678726e00e95be37"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "627306323196ce8c074d06293ec4e1b9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "4222a2672e5c4a8785c102de24af57ec"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "3ff16e424627fb07f42dfcb01177b605"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "d82d6c594545973487358a179d745467"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "ee05cce2015f5a5b34b839c21d91cda2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "24929f53a720474a82687599220ece27"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "5ab66a2ccd804c7e442862d32f1c273c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "f3e6c67df597097442dfcfddd38f24cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "30a56e5b8bf2f4831fe668b0ab5e7b13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "74757b5ca72e6bcc951ca34be47e7c59"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "e6f309cee53d3fd0c20f8482b0da12f2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "b251474177f058e7155afd183a167773"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "e5873040d9a3dea84526cf84a7c11df9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "d2d7357f833273a65e3fa314c2702d6d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "87029790254fa965496cc0f9766cddde"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "1cbb615ae739c81968242c529c657da1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "1c0c0e743d2da5ce0e3525d5b031fc66"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "018b6caefa0cebecd3cf87091344b36c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "959544405597763e79a82d52e915ca3e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "1ee08958c38f1c7349afe4896bcc9bef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "4d1ad6e0ca9d184d6e2b33b952a63e3a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "f7d7841a6aeba03b844d2507e971db52"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "cf806a8c740f44efbc274841e3f581ad"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "5195c3db56256cfa779be9eb60d8750e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "28aa31876bcae2d07cff70d224145fc2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b912d95656118a9ec2f904cc4912489a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "46f2b8f1d5ba61dced8743ca44ee5330"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "ebb957a1e04b40b5b4475676419bdce2"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "4ee8a288a6ca5892733af2f156b1883f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "7a66172db5cdf29cc8c6ec7db7299777"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "73c077f3ca1c89702aabb706999716d0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "b081aa9cb8582774d5b5678d22e919f0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "10eec19b7cd8c49538a2fbc616fc4dea"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "8ff0fb89ac1074942aeaf022b6753a74"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "1398875e2ac5ab9c4b295bd14cb37785"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "5c11c619c945aee5f46dc55e098861c7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "7cd4d63ef369a7c32acfb402b4925ac2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "ffbcef784873ff761c3926d8d9c3b144"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "617cd3bc26128f400995046ccedcc163"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ababd55e5f4825bb41c5850ac13e71a1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "05fa01df637fb2d1be81dd9438a3d9bb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "8a721936b4bd6cdf2b4fa20276080e06"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "a3dd09ebc94b617248f054fca8c98e91"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "5b9c9cd059e22f84c57552f4393ebeb6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "d784e7c17a1c3ba34eb33eb47a25f962"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "436e010fe2ea2e379b1765fdc6860f8d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "1a139295dc1966531e2e41628c5b087e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "7c1036150819ab31c30f1b77445cc98b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "b2febf26f87220fbb385fd0426e15107"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "e55f47cfdc3a744fdd18ea4cea7be776"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "cea15f5b64c037e6b1ec6d4c89867c98"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "c3facf426ee0f7445d7614c4dc854dd6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "07f361bac2c1897de168848f5afd4925"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "654c1ad4a645ad79470b069bbfcc8f2d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "a98ec489ddc6f0b3242aa7e52e63f6f6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "28bf803d272d8eb3b0b4891a3db1ba56"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "10119c7745b5363a084af2ad89e94e64"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "d98c3d9af354abf36a70142db379bff4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "0f1cda1dfdc6e70ddcff0bcff32dddef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "ef715459c94b568f0e0e34add3010365"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "03f088068a06b949e1fb43553d1100df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "9fe92fa2e6c3b54a2ce555bfbcdef8e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "8a20fbda8c0fb5703781e93c22e656fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "ced6f182714aa1f6b638ab03c78e3d3c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "b0729118dede0524d5d3e3446597756f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "31f445070fab233ae16ce699c925855c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "950dc57cc26f636244828496d309cc82"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "df14bd1991d52d7c3b8323ff320f3114"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "11a0a64871209844c7e889471ee40abd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "54b334d66c6a3085904c5de4ceb19900"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "1736396e69b43c1e51c54c42f8d6553d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "cc089ff08c9c0c2adbdb676f439265ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "d7f11a4c644be3daff62fddb91368627"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "acba00acf5d9b32bba0cae761a66af9c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "2b18f33d5eec83583dcf612e2704868c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "9c8a9abf6baf07b78617b152f70f2e5a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "929dd34fe66f692e4ea8a13968c73842"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "fe0fd8e023fcf63259f40400daeaab27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "e7c19b3d275e3a598b6118e273f78bf4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "82d6d3e62744460a791b82664da470e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "a243837f39d87b8b67811a24e79756a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "ae05bbca01a43986c101b034d679218b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "c12c4dfa588bd3f2d1c56d7e4cd15c4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "989a6a3c4efadbd396a16fb3556ac779"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "573857d473a3b65802f28f634e0a5a31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "484fa4a4e18a4ef62b3317c84d81ebbc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "6a5245aaf504c5e1a308dba3388c3971"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "7f264681bd6ad00a2ea940e5bae22bf1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "a2ebf5a4e3a4828022c0a1f8619e2d92"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "e1b8a10d155f23716e5caf0eb5c77ce3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "08582ac5a91515645110aec9ca0c496f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "8b5969d0f6c6cb1a142e95137e1cb57d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "53ff7df39ac6080cce4bad549f571bff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "b030fca6851f3365a5dffbb78482a5bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "33debb79cc3f03a9f9d2f6809c094342"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "fd02ae0f8566467b0e78dc2d0f3c8bf1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "079eff500016a349eef0b091b5b7f1f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "a144eb36b504de3daa2ba3c9935c8a76"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "9011cc76d52203f49d0e52009cbdb0d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "e64fd9e020cf2225e23cacd2a24e908b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "0a4fb39807f09d8f30f3f6b1e589c23a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "cd95465fc96b004c113b27e427ba2bde"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "48b8e128378e5cf4415776b2f79587a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "6dca773cf703f291e304df24544c343c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "4a097344790d6c89a215b018b96fef6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "e2bbb7b26c9ff161392c31953d3dece9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "78c111dd0d444defc34a29196aaeb4aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "9cf4cce7966d0b37d02be8924de983c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "88484000bffadd4b19c42b06569a3f07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "d97b0bc878ca687c5785d491cd550f52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "6d5335c4e2b8f01416e195fb3e264cb9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "2d1996c47381056a22be40905d8b92ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "9a8e4299c539a08a2f67565181694dce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "b3c3eb2c567db8e4fdad2c2cd5b26913"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "144807bf09816e0fcd67fdad266cdc2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "a5b7caf9281efb1aa8dc9c226a10c31c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "d94dcdf0ac1abf9157891dc8bb5db367"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "9cd353feb93597f05d2b4dfd06999801"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "1d4dfdf2997edc8cbef8755a3e99bf62"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "6ead5a109e41a5c5858399d02c354ea0"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "b9dcea6f6410fed26906c935ad1cfd93"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "619a509484d536cbd43a7a7879043d80"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "87dc9bc0b473d8d964f665442224751e"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "cac217902bc2c19ca7a528d06c60df8d"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "89a11386b427dcd931e46b798f884ff9"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "1832b7803d898b1df8e97c289c2ff1b8"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "2eb8794fd69c794862d1546ec843720f"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "6121055c547294d1a977571b6101bf3a"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "1b4652df4b6152e3d69ab793a8e6b70d"
  },
  {
    "url": "categories/index.html",
    "revision": "fe0a643d2be2ae42cb66b35219cb8a2e"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "0fcea4f479285fd7ed9b828b1cb13daf"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "e4a090f222f36f21f8788ed11a043786"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "3ebdbd89a7099b03423a65fcd3690e08"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "6a1ac865babef0d9091dfa0f326a8a4a"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "ce0103dfb6a9ae7ee0dcc2d7b6af7c5b"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "0ba0cf0f08226ae2150af2834cbdffc6"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "3818d74bf768082d35c3fb12478345f2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "689a633a6b3c576e1e7cbded6e2a4f9f"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "9ef443874509c6513b678862493a7320"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "bb9a5ff2a8d6630d55d476dedcf8b602"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "13dcb4fd9693ce1441edd7b9f6b71029"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "1173d8434b02ef8bbb407dbf4d144db5"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "5073922693053fc909a847f1cb97d23d"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "8d2a79a1098d252649790361410717ad"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "b1c5e69ab9f8c4e5aafb0d5def2cffff"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "9ad77c9aaeb9fccf1afdd141831e145d"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "68d4e4c72c8aefbc75d4787e2e541645"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "54af2c21cd80332d4cb9b4ca557aa3f9"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "26132f8bb4dfa81c1dd241f0a5547174"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "e6b0d3723781c3e2260b566db04aaa57"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "1e835095d2820d58d8f2023c1b98b622"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "f71b2115aed9d2a910cd992cbe0dee58"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "08e558deca4b8756ea6ba2e6c25e4287"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "3e5c89dffc8e1deb6757a74b09f42b7d"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "4a049243d43fd8f18e4d8df6b6bdadf9"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "cf232bbfe7f0824c99c89ed59000c1bd"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "b1ff432353f790d217aeef94c5700742"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "40582d89171879e1a5a82f3069a2501c"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "a97940ef74072520257240285a015aaa"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "a38623e2b98be55eeb4d17ec7dc76fce"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "243b81fbdf7a4176381161bec5a815d7"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "b04ad9ae6fead566d2578fd37db4ceaf"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "d54e1847fa2f428cc5e1a1f21af82fe1"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "95d4e8e751a3225cef7e7a9a731e709c"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "ac4bc20dbdef9fc657f92d7675782d73"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "278074c6d1980e91e7fb3036ffa9e73f"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "664deda08aa9cb3555def85deecb6a8d"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "8d7c730d52122c249bb467051a27dda4"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "e436c7c400658280f6c694b6046cbd57"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "90929eff164431f6acaf62924ce79dcb"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "c89bc4c6e578bc191e230195dceb4cd2"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "8afabc7c11371c9ac10ae86f27499bc2"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "e952286310d21622381bca0502fff622"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "5e6fa02a6d9172eb16d48543ba77ed96"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "b77f759407f4492dbb0d24597e831aea"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "22e5aa24ba443a98b80d55031bd7eaee"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "ebb4ac2a1c2ee5a8807aa4c83d98a0ec"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "6ef94cd30a425c8d1ae9485f57c22580"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "6d32d50af949e081cc630d23d1bba958"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "de55355982172eb3ee8a778f76e23a26"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "e1da3e27fb58165a59c6c9637f38b435"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "4a619306e973b4f8969124c7a5572743"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "785c67364ab05d59a76f9d4bca22ed3b"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "7d9964121bdf377318bb1c0e713d703a"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "9e5d90e8ac49fb59cf948b183d4826bd"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "e8792f2e6991cba1c751add158a43063"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "4edd46518ffeec894c35363dac172199"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "8728f2933852a178354813662c5ef267"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "4e0a6176c66a5be52e1dbacba57bfba5"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "82e939da492fb0846e7eeffcdd7aee49"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "22afb770cdf9a410f15f5de4266f17d0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "eea50b0d3979e7dc4af18c169c255593"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "6a1d67f81020dd026a0424a2a8d3ec65"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "e5ae7a4c2b2e2ea89665c73f4f7c2de4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "fa588412fdf3078db2bf80629bb409bf"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "e3516c451b4b9653f8f1bba56b594aad"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "2fbecaf858fbf8e6d1a72ee08084fb9a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "de65dafaa28c74c077004f4d9fb988ef"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "27b9732b1824a5a859b407d18107419d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "24ce195b4766f955d1922a15179b7a2c"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "118f773a8c529c1d045ac15619d3f0a5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "977612eb7a82270ac2523f9d3a1f56c9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "6f9ff7ce4d5ccecc24aa333723756f14"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "adf70437e95d7ab61351a4ef3259d018"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "b4eb9a2a02ed8a4a9a805d942e8feff7"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "530a3fda8cd7e32118f1923555203298"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "ed6da1068767ab340490cfb8d351fa78"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "4c39175ca85d6393cc85cbb3d26aa943"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "4ac6532625d6d5dc338c51923aa3a354"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "2ee683fa9528087a035b96e5e515f55c"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "2412f80e4b6c9acfa18a06528268f778"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "844b1eb170cc469b5b8f4d49bbc4eebe"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "5789e75807fa3f0d3c3db02228ee62fd"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "943c834f36bf35ee2454081de5d5f429"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "bfeb8caf1d0eda492429d4bf923498fa"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "23034c2cc6886affd50a06852f5aff1e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "782e9de55a89fb9efe113b3c13ae1526"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "7da71a4e42413ca1c222af12cf885f5d"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "3a5b3803d4edf42859174b74be1e4c13"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "231b68aeab343e740191fddf10f34b78"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "ea2ffd6b9191d1f1ac9a85c0b8354b3e"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "942bfd83cb134f60e7054a0eab7bc67e"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "c6886f11a05f925300469e810f55e6f7"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "7ead5bafb94f23466a5092dc442c65c1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "733e97d33951c42446aaeb8fe9380acd"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "8837f3d3254e6d03cbdcfb84b9bf8e59"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "919c026e1679c38b81d61a6f52ae88ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "97e2b7c46d92dfe4652b4ab1061b7375"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "68ca40bc6ce24759d1493e46cce0c51d"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "80f9332b73c7f5be3d74e5904dd674bb"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a486b7976721b6084f361bce8f16b53c"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "79d61d0c1f19b2d7ab9875163739d14c"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "c38a7161631fa63f0148e9abf47c53d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "c79fb290776280cc907cc722f2d40cab"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "86913008bcb1b81f416117cedfc6e89e"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "849fed736ea4e70c8b838f610f9ba511"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "e2e0548b4d72437215d6e8ad3479cd55"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "e922dff0c979dbaef1e605d6bc5c04d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "5ba59aa084ca89efb08067fc2863146b"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "8ea30dbffd60a001ce0bc587db93f9d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "af73212717bcf55cbe30b75f3d51dc49"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "25eac4f0829e18a8abf0434bc7af5b23"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "5b4b9016f09297143e8beb2ef5b36098"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "1c69ed790c873e3b45eaf902c37d194a"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "43e4b55d5dcba8818d11a43d6a41ba6d"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "c19a9fd4e44e9f9d92ca43b232d83d1c"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "7d3120712a7fcebcd2a0b3dd5466e4c3"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "f8a8dac7917527e1047245c67ac9f3e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "649fb051371f3bf51cfdd6566bbda891"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "b1d378c0bb8cc7ccdba2e3cf5086a528"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "afcc7f603275cfadbbad56637466dba6"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "34e34e96683f5703509db7a7319c88aa"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "3b67a795ada3c6f9dcd89f09b1bf5648"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "7354896214b33c5c707b697b387982d0"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "78111c513b2994513fa98e35a8e260be"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "bbb221e1a8a0c23da437134b33309a22"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "9e47a50193e00f280830dfb550491c50"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "3db83e098e6cc2c03ef17111aaafc48f"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "0fb37b39ecc50fb338220b2a71b32c72"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "4eb4f92076e411d43e43480209b351bc"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "24471336503b6369c1e3c8ef873bafbd"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "ffc154517661d0ce5c3d3acdcac9ccec"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "ee66ba9565ce620f50826a5c9ed0ff8c"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "1ae0a5d795c507a75cbdf22e0b74ae83"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "041eba2709b34cb34ae11349e6765295"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "018f17538befef3de60ca926a3fe226f"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "f7b89afd4fa70e15875a34e5c1f223ae"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "7c388adfdec992a167d5633d72300d3b"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "f804a4daafcb0dfa3c4aed7b7695aa89"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "f347dc365ac26c64913639bd55fc605f"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "c50cbeee73c2eb8dd76c68ffb40603a9"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "4bc59e6eebedf132e7ddb5206f283517"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "deb1fdd55ca46896e4452eba8aac7b9d"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "ee26e3226339ff2854926665646b999a"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "61af846dc1cbc8e400e6372688b2a3da"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "77fbc3cc90bb4cd026580d98e531153c"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "389073fbbd00a63497327eb696bf1560"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "4f9e97cce4106e893ced95f65b70f8cb"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "31b3ace5b379b3dd7e84dd8391902615"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "e2107cafea3af354f9c63cd1b8f358e6"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "f5c0844fd4337bffb6037f50829ee496"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "b856b40b2cd9ccbab8bee85c42155e4f"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "f93c6d87608ee771b9689b3109984542"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "498789832520a276482d09008179bb13"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "67500b0fb89edca9d4b0ff65d2dff2b9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "661db472108a907455a5f33b4339780b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "2144c9c1a5262b0b08d7d41bcbac7f7f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "7a8f82bc58793a7857c8f210eaa60713"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "6f6d17566fb185a91588ad8c23a80f22"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "8d622a6d2b5cf2f5f524d1ef8b9ea491"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "2312233882bcf0614242a72b4c118265"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "aa2e4f83dd7f5564788a216c24759b36"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "4031be9f787f70a2c0e561eb232c6411"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "212a66c000451e06574e68b9899f0cc4"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "c9474896893f811b9187603c43a0e7f0"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "15d45b82f54f537e3bef82e06030b6f4"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "61958d84f9e80582cebb72058c23c88f"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "fd10483c87170c8a30a15b06258f4a4a"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "766a82560bfd30bdaec7527328d39d81"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "d07dd2520c5c9684d5c4d5d2e838a2d0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "087373dadea5e6b24664bc7fab6907f1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "77efdc5ad34a8c5e94c053f6e391f563"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "b033ee644620a6d24c87f7eaa2a84591"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "3509a39cab4c205df04b21b5ed9616ae"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "718d1cf0348c00cb82a30348d6c0c87c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "41672cf348302d8d169ec9f29c7fc9df"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "288b4a47dbe57e0782bd585af1677460"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "d496ad174d5b2e370febbf0b9ede49a3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "9cc1b66a97993074ab311fbe033906ba"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "548f4b879528400688bf1e6e501f9772"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "aa91dd96d114e65e419bae15773a9ea0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "70dd3907f7291ea5d75d1c38f2a92bd1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "6b16e9edf1a38aa7ce33c65e65003cab"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "439e50a1cd10e53d03d70328a5ca678e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "fedd3105c767ed6c0b01103392d6a19a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "040e11255fe6e5043f6b037cd3c31207"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "3f623a3932d979f4026612de21f07b9f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "d11e03847ff599b037b512e21a45407b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "e912b2921c28cfa64f2fccc58f69bae4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "c60bc4113c9c0036d542d8410f9cc05f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "18e34bf9e9c13afd28b6791f866d6193"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "ee42a9f7cfcdfe1bb553178f23070418"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "ea2c97b6fad0ffa1fecc08815671361a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "4168180845cbe8c6861b3e4653456109"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "45295c0d9df00f796835b50dcad93f13"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9b6aea2cd90cbb6eae973c0f67b1f724"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "4c991a86a54bb79dd5ecf92131d5408c"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "7169ca965e867f833ebf0c919e31a92b"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "b66ed3df4d5a76147d018a614c7c927c"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "671e933f558022e16b472457f31a07d9"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "320fc90f6b9e90ddf06eb64c14dff6bc"
  },
  {
    "url": "categories/os/index.html",
    "revision": "fbc08ea31aeb4f9f65b03be58fe8adea"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "5039bea6bddf20d482dcd34210ab755d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "bdfdff65004dba62e566c438ba0c9c66"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "144998ec21a0d44ba0f9ff44bff4b6d1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "e0f2b0931f45515bbd8f31da859bae63"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "887780d2dd3a36781637d63dd8e41606"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "99adb5ba81d8e73dc00a078fc2fcc989"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "bc47c0076e76a0dfff13b41ab5042103"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "e42e93dab3e6a60249013cd6466920b9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "648d84784884fe3bf904e8b25814e600"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "654de60f57cbea0f6d4a60d0758e3ad6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "5b55c15cd6a2a02dafc9949683836653"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "9044f21d718a010c667477b0b78d697b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "d27a6b855e83701ae680e0b8d345b08d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "8ae296e9eb7941b99158fbc05069ccee"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "5e95a1cbdcea75315be2ef2bea6f2edd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "53aec8d7c9cefc69c85131541b2d17d0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "c1d67a538f4ae9ddc6cffe43a3e1e03e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "65316e33cdc0df9f09e1f6aa9e3d11ee"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "bcf8a896c939f77b31347ed3fd09a30b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "faa39921c9b6ecf0a5528647cb4af6b5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "d2f2ffac8daa7e64d118fac737f8b105"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "9dc4baa4c4daf26b484beaaa7a9d9e1b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "85e3070d42073d2b8031eeb880445775"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "47992484a74cffa4d6f1a3269a9eb4c1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "87be7632b39043427e5951fa7276adf9"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "300ec502b2814b3fef17086581390ad9"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "6077a8cdfdcf702033f24ab21b5e98d2"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "e520255062b4f5a8b2cdb6151f082fa3"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "63701adc8c8fd0c5e9fb32cf4b03d55b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "ab45295399336b3f5fd948d453062187"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "28503060ec3d513f056cac834cdb9f8a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "a052a2b32ec8e21a19ee7131914416fa"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "081dc284f12c9ff2586a56d02bc8b16f"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "25fbe07e9a92e1eba35d8142f4181f11"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "4ca5e58eae1ce2c635af88f107563f10"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "d4256a59ed0b27c57477592bddf9e461"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "d805c13d4bdb676c6ff1869eefaa4a44"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "da3f1bde579c699f3c2fc3cd70338e36"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "eed109b46e329a44440be49abcfe158c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "b866dfbe5d813fe11c37bc72ce310856"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "d9784feedf6c7c500ed45b69c32d866e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "c0fd2976036644f46c983bb94d27f9dc"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "1dd8db1233c61f0a0c5cb661be153c43"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "8d9df9d91e6bf4745640ceb3ac195db8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "bd51723d339fdc0fd621b486c9746ab0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "9f0823d0340abba33dd6eb93877b0e79"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "16b2ab73b647847a9634953d9a0f591a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "02bcf0c2c0761615528327b946afe1e0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "227fb81fd370cfdce5edde805d1d090f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "658a19bf6b475ea5d319e3c436fe45d9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "54bf33d690ef49c5249b7142c7192260"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "437b43db1774574097c1107f3e171562"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d4d29ed3967868f755767d8b170bd2c4"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "dc30db1f6b1cf5c87fdf3581c067e6bb"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "598b63fd7f54b1dd6218d5fda22da567"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "f063bb28807228305b9e38519f753977"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "0fbd97261032ffdd52d6f7f64f864f15"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "18e141402dc13544d2050dc5cc8d2a4e"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "0e1f5fca87049e9dc50806b8ffa43337"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "94fe55ba2b58622666f31795765d8b04"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "23220d97251e86a0a3b1fb7f781e6ba7"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "3deb4e916fc040cc18e2525ef5794911"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "32ed0f31340ceffedb9952f415c71efd"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "fea9a71fb922ae4470d73c37831f3092"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "1e46ab2cba2d5f9648f8d9a9741b9fca"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "72ae0dbcd375ce2a207ece8c7a4dd2f5"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "57d0b003eadbdf1587a846cb3f8667bf"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "90ffc8da3284205dd836bc75d450d66e"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "6e014eefa6c01499dad8eb94e97fc4d5"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "dcefbd0b204d3019f37466584f5a099a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "e60a9b7686890d0ba2cfdca98d24b5e8"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "829d7d701a4be853fcd90aece403a69b"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "6dd3655050d4e4edb39c11718f092e68"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "ccd955a22415927f3b8a41d1cf25c5bf"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "e17340e35628b9205e8e9998d17f4877"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "996045a29ad2b56ede22b7868e638a55"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "11003f47a139e607c9a2ba942bfd5cc0"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "3277332e1dd0e6e84189109eec4c4c33"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "bcc0ee28f076026a6deef77b330cb4c4"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "1d1384edd7be889af939850977f35737"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "0fe1f4b6cffdd224212aa0ed7331962b"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "73ec6e077b3da0497798bd393e405652"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "721031a65b8de26bf54729221763a01e"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "90f9bf376a4f9e4076007e06783da456"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "1789f17cf45686075386c73752f8d431"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "c4e39caa6098b11b003419591160e94d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "f2968afc044cf76c195d9c17dc4ce737"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "624912e86f38a1f3036eb73c43938106"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "2bbb2aa3690aee547a519e349d309fbc"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "f508fd154f9cff3819e4247f2457d08e"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "065d160175b748080342b499d1b6acd8"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "eda9a8ba4369c48dd5110cc670831d98"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "a331351e279c0ef4552e70ad91201cc8"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "c3dce04b3ab754c17c7071216e20af80"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "5999f58221efa640d053ee4b0b3d1fba"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "d399ac22b5525c211acb62ca75a076fd"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "16ac45228cb0f5cc127506949635b53c"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "8c9dce0e94a3bab29164bfdcebe42155"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "4778eaed6f4234902b21806c5f60cf6e"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "d7a587e6fdc7ebd9c6bc7647b5d3be40"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "02e6c805e99ae65eadb3cadfbd86f072"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "9386d392012fe0666f3e5e479e06ca59"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "fd21a9e5090cb7a3053e32c9ef05af57"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "7d081273c1853558f21f53a597447017"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "fdaab16402d345fdd6cd9756ff0d39c9"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "c5b1b2ea64398125fd7e8721e783085c"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "aa8bfc2eb81acae3abe3f2c5ec9708ac"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "4c02128e5036579d4107ca26cf46b2fe"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b239be729b8eb862db0dedf8d68996af"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "888b8d7159a9551ec21126877dbf5935"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "6f8635f5434053ecef53ba8599140562"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "e21473fe483a1b4b0f647c4868d9c2bd"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "234ff4545a630b5f352df9d3de799e67"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "f64440695cb81055521d99c6eb307130"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "0535a678aeec9bb463d1e5c5041dd025"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "ec230dd01849a58750400bd1a32c8686"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "48a29279b3710677f7c1b0dc75136b93"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "15feddaaa1c2f0fd5fa387826722127b"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "18fc09436ffaf0a329fbf74822ce41ed"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "4c0f126a67f2d030d9c06c05ddf72b30"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "7a28b19bb9d085e788588937af67a70d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "a831dae9438ee2440acc09f8450ecb6b"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "cfc6f3b8d31dbae3af2e3a3bc15896ed"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "a37c833c1f4c2efde4ceaa972f5d44bb"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "be06a6dceac844762e9fb26615de1ffc"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "6465580d22f39bd498e71161e9137000"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "7c3eba26543d7f7674a33e8f000ac296"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "bc9dac36057ee1d9187a92223ec058bc"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "833aa67333a35b4dc56f62f2b1b258e2"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "364c7a66f3f0b794dd1c95f3d2d8cc1d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "5386c09928427f3cfc62379a73242ada"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "f357ec435a72740b5f8409abdd6d98bd"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "b3432194f7a2338b6f36d25f7580d640"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "7a2a692e3cba60aa119b621648922099"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "b0f950bcbf2fc2a35398d9e95e82c0d3"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "3c959baae494d4a11c557eafd6ecb6b2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "24abf3bd20834d02509952e04033b6c6"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "a50889816723f185765043e3e9fe76b1"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "adbec4642f74aac8724afc44db7c1d89"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "3a5f244987067b077f0acccbb76ffc73"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "e6b95db87b3d9aa1eee4a91054fe305a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "27da9bf989f0798e16fc96f30b30b2ce"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "5fbd36ed5906388d0632eca60445e8fc"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "19bb27ef4abe739f6eed059567f6d7e8"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "f355f3a794c2de7fbe60e381aa305873"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "effd0dbda5adfb6a9aabf29313685a0d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "fe04100ba4496bf3e528a9432493fbb3"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "f4bf20f7a9b2a3f296864c32c4e08d61"
  },
  {
    "url": "categories/php/index.html",
    "revision": "1704060fe775df4a94d2682dffa069ed"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "132339ea126d528b5743d3dc122ad503"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "f8b6dcbdb395df69cc2407f7f77ef9bc"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "2e654698030d18b7df57896811cabe2f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "59cc4b951c5058a37f48bae24e9cd2e4"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "449df380deee01d6226c3d3e252858f1"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "b5d6d2ec2750379f378af837e78f149b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "972617f67d65b992727284436708b9cc"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "30fbfbbf4990a08da9f6fe8a21b76e7e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "353f81b1870dba0c2b0be9af27b7346f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "661e969293a0df20516d036cac17b3f9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "3d3e82ff00fee48bd1c88a8414f99cf4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "13773bed1f4468b295d96d0c31fa0bd1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "dd67a46135252f1947ac4a8724d98c70"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a1851ead860371d80f302d0ef7f9086e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "2d633e5e970b1b423f7b77373c069abf"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "56cc3757cbb1fc8a067deaab93794f7e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "361a06753fe8f82e87c02c8af4df2434"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "2d818ce87bb5247c50ee205048a2019f"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "a46237697fb2d286e126613c9fe38641"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "379e0055439b610c8fe395c7c9735561"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "f99c19d0816fbca1daa79c3cba94bfbf"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "7412dd08653dfb0a832da422956bb842"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "9a2f3232e018d4c359dad6162d54b3da"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "0a845fb59be8231fb8f751fefd217b0f"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "be7c4177a9553d18e3334e23acec0391"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "b487cfa5da831f7e3f82c062b3480d1d"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "96e0857dc35c4d097b6e9d3ee652391f"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "8cef2594338a2b34bdf506e976a77e56"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "27915f815ca6e04aae5b5e897fc23150"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "1fc93b368f94dc1cefbbd6b587d11804"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "19fc46f22dbc4d5ad43c46deb4e6a7d9"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "e73ae4f5555f53ba7e167433d37ba7b8"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "8d5bffda01c92312ababf693a2d6035d"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "2c7615d8bb1470c500a1695bea08dbd5"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "091c39d91f1d7cb8a165ab99b84f4716"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "0d5c158cfbfae9bd6435b1d95c7f425c"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "b7666c982820d995b1c06ef9abf0a23e"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "5f988505ccee3d2f7e7683b915c4397c"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "730271de85938ab9eb9a8cc5212080d5"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "cad3a21fc23ca92026cee3fec0967203"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "6de14ef44c9ba1db6cd7c90e2d43fc27"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "eac8a8ca2638655e813a4496d11781ac"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "994826af1d40bf287381ef95e53ae922"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "0f13492484d10bb30993fda2502cf808"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "06ca253a944e69bc8dec3a5673af1736"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "255921b76ec2fb0150d81dc25254f2c9"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "d693595b0f5304da3bb7c08be9150aec"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "6fbba49eb56e0aa568d21f2ad18401cb"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "87258c682478f312095e34851a296e71"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "c08f9b9ee740cfc560bdc2947682cd0c"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "c4c92dc54d07ce35ea3c67f023025b54"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "2b60996d477da1b5ecf3793ba20c5c8e"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "1a8b6ff739fb41fe21af915991631be2"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "07e1f27f0327a6699f4ed3628e893950"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "f536028525ef83fc23d7b99afb610ca2"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "c9f5ee01e63f126eda5f87912d8415e6"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "3065364ccc3cf02640b18f3968a98877"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "d5fa43d6f4db4197f35191903d303b77"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "df03b9777ab825d062f0f845f2192c43"
  },
  {
    "url": "categories/python/index.html",
    "revision": "10be758e2fd9a472f24274107e55583d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "afb47577083eeb1eb639d4d57d84707d"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "47e7b3e26cab15128cf4f9480544d3c3"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "c7538545ea1e12978750e4638785e183"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "1a9eb2ab6ea0e8843c62f8dca3af6eae"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "aa0b5b0c74eb1093833f8d430fe2a7aa"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "420adf1adfc2fd865d359e1adbe34b7b"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "f0386582d92617a3ef58b855a7a768aa"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "097a3654cac1a165dceda71a4568c5c8"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "aadc0081a11b778699adfc2f646496a0"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "cfd16ba62841e12ebcc689cf9993de29"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "9b136f762c7c2d315a642597ad9756d7"
  },
  {
    "url": "categories/system/index.html",
    "revision": "d58191b60fea48547154379feea0adb7"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "e4ec42b0ed455b900c2095c204baaace"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "3e832fc6be33b5eb61055ede0770e2ca"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "2ae4cd9dc563439ecdaa17eae1a5c3b5"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "d2c6338f7537e053e4c0613e71eeaa57"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "408a33500c5b96d75686e0c61ee25457"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "0e53b4e25a452b70d6d43df394039605"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "9c48a340ddfb94ff079bb9fdbf594ab5"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "1a6d3281cb2eef935b23a5864ae31ebc"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "6de38f7adcffac32b16bf8ca989541de"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "a56662e2abc934c1e072049af3d2e84d"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "6a1c62902d2ff9dedbbab58d88e99155"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "53556f94e8682a56114e23615150aaac"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "d8b8130baf3d4269c67f633dca7259f1"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "f710e77e7f6c91c839eb74d3646a9ed9"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "7cd0dcae27fbdd46616a4654c3bf6aee"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "93f7e77ab43d916f13460ca936f174d8"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "93196473fa4b88996a27a6666a43cb7d"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "2cd6d76c6b0e15fea8e6e47f3059c565"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "76f33b4c81da418d42ff4adac5559763"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "99a3182491ddc5c0f472a3d7ce24c944"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "983a6f6d671e57f1cd9c17d10ab5f737"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "17c317d9b4b12f1ec0ab2346523fe6e2"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "dd801fdded4883c1b5fc4daa50887a93"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "9d668a1477b87cf82b522ef1e960b9cb"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "9a0715afc5712c3b257115de965be83f"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "cdb08cd40ee747e20dbd5c5e2ae732b3"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "f95307c0ba9786b6316c1ca665718132"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "b27c715b72182b1eeb00b3ceacb7cec9"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "b701ac042523480ef063cd36529467aa"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "76c5c42acb5fcc42f70471ec6b76d4dd"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "f7a06b403f13d4307c244822f1c6da5f"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "35a9099b5d9b50ba6b428fec8cec3aa5"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "a309a76493caff38c0acc5f1016bf064"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "dc585d6e1cae1c88d22edec2ee10828e"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "54568c084ebe20763954f2613ce97840"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "e6f6e90583769c064d927904f614dc23"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "382dbcb78f042ffbf34aeab90893a1dd"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "62c7907dff7a4c539711641fbb0b913a"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "ea931b323b349c345b8dc1c7afda265d"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "1a8e09a222014fc67c7c212367bf623b"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "01c73f89571026e40773e14a18d663be"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "51143e474c9b3f7bd96eb542d18f8f5a"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "bb510804ffe4faf27cbc1d08f6ef5e23"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "7dd858492d57470386d9034bb9ed6383"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "b5f213a5eba1839a18451f809a814e67"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "2b05335f84103102082e0c71a5ad7c26"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "00fd605d02eb4f68bb5c33cf8414e0f6"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "c8b38624507d8b5dffa0d4cef6319fe6"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "8117665197afec8778bf69436fcf3a87"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "9aad3b3d65e2d856eeefac448227ae6e"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "abfde45748d2a980da980ca67e4f500c"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "138fe6644d5c90cf6679960ea0bb6a7c"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "2df2518689f3a9193edb76b18e2ef17b"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "3d60f0da4a15dd17846c3d3be7e278e4"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "dfad6352abe99eaa3a642943a6d4a837"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "a7fca5eb62ddf5b90017237c204fdf22"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "61bc6be9479bd80206c3203b564832e5"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "0201c0060e7ea2d4c5072ac845160884"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e2882fae3b34b4f63b33ac891bb85b88"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "5f7a73d64a9537db6eb297195bc5735e"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "13f6adfc0dce670042ac28366149f304"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "dfbca367dff5f1536cea973fb4428a34"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "182c4ac17525ad9f1f8e6f35d0ebc0ea"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "60e3dd1801161f161d694b69973cd2e8"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "8ceb9d63554d20a231adcc7768d9301f"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "cc83aa1b054597f505a4f8fe4cfa10c4"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8bb286e153d1500d76f2907fbe60f1c7"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "d6ce0e46121fa0184d35e3d346e37bba"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "dc65c710e8b54e1b1b4e05ea24bf0e43"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "f383aa4b07400ae72bb599f824735cd7"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "47dbb5dbb2b73b990842e4130612dc26"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "2f9e1f32b599162293de25d74d06cf34"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "f260974221288525877819bcd3d33244"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "9163531a017a51333bd94bdb21d54082"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "8dd660a501e6ec7a6724ea67cbd11990"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "ba9e3147b5cb6d8346693cd1a5073e70"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "644ba656a2202e9f70d95e2a5b0a59ed"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "6be518a926e1253abe6af1848123e0b0"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "d0dbdac6c9c88404d78f2859acbead12"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "8e56b5b90c393360f4cdb90f543043b0"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "5cfea05e563f7cd2d346c61a00792591"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "0131ef02b85279e4f8a13ccd4e1e8b51"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "f87b438f80802651112219e0641ca970"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "59fe7a169a0efeb37adc2c3b1a8fd592"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "58b83a468ff850c6e6911673e92aa9a0"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "938e42f30679f82304d4b844278fee6b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "6c3c8ef2fda7bd7e70cef6a6811a4ec7"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "92ca1cdc65107e2d141940ef4ed9626b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "f96701b302e45986c296cf7cc42cde33"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "e68de5decdf66b9c4d373952bf65f46b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "a7be7652ae93a9adeb6266aa7a49bf97"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "3af59d9b1709525aa482d6b5dcb5f0e1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "39dc3973809e8b91ce2df96b6d814cf0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "7f192d374710f8eb8f5c40a0c211bcf5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "b17c244df733792a05a95b414b3f3f3b"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "aa2a453b398fe0453c0a1a9d1ccd1f0c"
  },
  {
    "url": "favorite/index.html",
    "revision": "21fb0e4afd7c2436263575b07e628161"
  },
  {
    "url": "index.html",
    "revision": "8964eee4d56db139ccfc8bd6ac1cf581"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "b01ca3383c4a9535e1fb1d3acdc5973f"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "716c9a2f8e6144e98c014d2a82aebfd5"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "cff4ddc37cc4a2bf880f74c10347c3d6"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "26c352f06a08393b08ffdfe099580146"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "f3652d26bab6bbf32e1a73448166df8e"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "7b154de7505698c14bed88449a01a283"
  },
  {
    "url": "note/index.html",
    "revision": "dcdaa73eef298e9d41bd8993f3487e2d"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "79f69884b7a4bb17e5e4099873944bb8"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "48b5c9a09d8339ec19dbf9bfc66c98cb"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "0ef489441a9b183d3366b38ed701603f"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "c5ff5723c5a4d22665dcbda53187d23f"
  },
  {
    "url": "share/index.html",
    "revision": "1510d77e9f8d21590ef757a29d78d1fd"
  },
  {
    "url": "single/about_me.html",
    "revision": "509f3c77f155bc002284f797b1127991"
  },
  {
    "url": "single/all_article.html",
    "revision": "add2f5cab0b4b19cba467fd0749fd74f"
  },
  {
    "url": "single/welcome.html",
    "revision": "58f94ad17143b018e24fae9d51fd533e"
  },
  {
    "url": "test/index.html",
    "revision": "bec4a0bc9b37349a7298a5b85ae3b378"
  },
  {
    "url": "test/test.html",
    "revision": "ebcc3452d777a1c80889462aa7684a54"
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
