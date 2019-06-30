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
    "revision": "9ab157b0ab5d4a5afb1841363e60b0c5"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f00906f60ebcba68f6af70b6739cd6af"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "060e92491c57ca1221bce39b6a58675c"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "ca95e2f9c60c32870ec26b644a4ed1f3"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "1894b3667e0b01ec94eab18d20b518f3"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "b850f3d4d4b77f3d89155bae71c23eac"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "eb0a7cf72a58f2c8aa5dd37bf8816e31"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "8ff20a2c446a547e55d38b4b9b678ae0"
  },
  {
    "url": "articles/index.html",
    "revision": "85540fdf8535ed5b31adba024708ac2c"
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
    "url": "assets/js/1.eaa33edf.js",
    "revision": "0ff827af28de2fc7cba9e942e33b5fec"
  },
  {
    "url": "assets/js/10.38acf979.js",
    "revision": "b9e4a5fa05e3b1c2ba146511b2a6c1c5"
  },
  {
    "url": "assets/js/11.fc2d78c1.js",
    "revision": "11d52529f07e925cee1ca387dc1c6fc5"
  },
  {
    "url": "assets/js/12.127174aa.js",
    "revision": "ac30e7d8e7a10e6a91df051c5770088e"
  },
  {
    "url": "assets/js/13.9facbb15.js",
    "revision": "645246998eba7a69bdc53209dc700653"
  },
  {
    "url": "assets/js/14.09023cd3.js",
    "revision": "9e2a38954134410c62db1b17093692c6"
  },
  {
    "url": "assets/js/15.5e3bfa95.js",
    "revision": "fa9c03ada898277e4aea10387b0c86da"
  },
  {
    "url": "assets/js/2.8690f1f9.js",
    "revision": "39d4fe0ff3cc5de4f44f6a8ff9d23eda"
  },
  {
    "url": "assets/js/5.b2d88b04.js",
    "revision": "d5c68d23b0cc8d4ae4e2bac5b775a00b"
  },
  {
    "url": "assets/js/6.9cfaa079.js",
    "revision": "326e78b6679f8d22deddbffe461b4294"
  },
  {
    "url": "assets/js/7.12d7389a.js",
    "revision": "1f86876bdae3eefba994965c64565d17"
  },
  {
    "url": "assets/js/8.2a2bed59.js",
    "revision": "386ec3b516a301d711e779b909ccff27"
  },
  {
    "url": "assets/js/9.38d16243.js",
    "revision": "2e13a6f3bac27d77810a842e193ecf44"
  },
  {
    "url": "assets/js/vendors~docsearch.9ca4b8ed.js",
    "revision": "ffae475eedd9319be60a48484c5541b4"
  },
  {
    "url": "blog/index.html",
    "revision": "342326da6ba6fff5b676ab203a8e3e0d"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "6bc8745f18268e17d5fb1a83b739113f"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "fef62345b7551798c83b6104df08ea31"
  },
  {
    "url": "books/index.html",
    "revision": "134c7db4529b5304504248cdd806cef8"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "12e58526b237f00cfebc54c3220f6605"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "c45c228b6f6bbeefa9d1a1da0bf177b8"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "662c22ad4d904ed78904c2f33d66b43b"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "82597d967cbadc01065f968c6be62e25"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "d675d79cddf36f2857e68da209f33be8"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "ce147ae55a916d0dfc7b294c111c9701"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "fdd0fed13dfb8529e5667267a602bd13"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "2666af1cbc90b1ec61445a9bdace2832"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "a9c11328363793480a358834080d0723"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "968f37e693e9096bf4edda06778a823e"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "5d3fc74e922cd540952af9bffc6c27dd"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "1a033d3cf5af979b3a98c492fbaace2e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "401dd2d21bf60339325b7f59ccb63768"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "a863c7a3db47a2cefbe9a3c0ae0fc8d8"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "ec0fa2e473dff37fc873681e8188f09b"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "a0bca77468cf2bc26136e703dbcfc467"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "ab7ba323c0d756b63ec1c44109517dc6"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "2b9f3b0afb521f372cf1e5d4ffc8fc6b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "22a3720aecdaea685fab8cd6fc968ad9"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "2f3f4d06a31ed5fc1921c468d67d0023"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "e8a209fc7e48ece42b1011fd9526a6d1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "1062ef32dbc3f014dfdda7a6503ddef4"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "d7f75ca9309e56edbbc6b53666d29704"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "12be453e4bfd02770c27f4082d75604a"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "35dd8f9591e1ce7f1ab1a03c123853a2"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "e02c9c44cb84e1f1f85528b6fbce3f58"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "6be67f49a72c5faae6238f79436103a6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "e23a3a718e84642e26bd6ba6f3a71b5e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "e8e44751df02ba2603634eb3ad195c07"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "1a2e18e32fbc7a6d814e8e0987889331"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "a87c5bdec51fad2f0f940ef1a0252d00"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "c7ef0a954f626dba6cbd09daf57a231c"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "a8c1c67770e7db10b3c77e930c3acc8b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "6bba1f77322935dde288299d8a88aba0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "7afe5123fff9e6bd6b03199becb241e4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "a9383785c78324aa55647a327beeb810"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "ef29d7e518abee6378ec679e8adbc043"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "ecac40077992c7341f9ad5abbda56657"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "b70646599e1ea300901748982279fb40"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "37e90c16252afe2c9d60a43d6ff804f8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "1f483f6eac4d2b266bb2ea9737bc9997"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "48c4a0b51d800bf7fb2878d7b1731cad"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "8ef948ac9a0c71b31de7d032017aa543"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "735d0dc4f5a20952ea74c009e23b6495"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "1fd0363958c9968a7d4c69fe98e67fcb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "ac5a87b90b336718174e62a05467bc52"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "104667cbf94486f254fd0f75fa845c64"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "45001dd35dde2e009a393695d4b0203b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "b3148bcb63d658c20da3e4acdcfdfc74"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "caf5e9bd6004f1cc77378c688a3e04eb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "df46dbfcf5dee73a3edbf11c5ae2f2f6"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "d041bf3be3b2661c13517472068892db"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "93651d9a5a17b5d4e2605068a97b2e0f"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "fe87c02f84342aa03d15703999047483"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "8c0a1a11116dcd40f5e43651264654ee"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "3d497d464ad85f48aa853833d2d34962"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "bbecfa40c02dae71fc1b81f3d7bd2eb0"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "0560619d12147d267a15747d3ac757a5"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "e9fc055a7865f22133e130977f958c12"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "843f2f8ea94fda037c1010a427b6f8c1"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "7ce91beea34407074f86088149557564"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "adac7f172017109da22edfd6dc968ec9"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "348907075380871c77a67f12bf4a2411"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "af109d47f20d40959d52bb368b03baec"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "b409fd2897bb3550b1e6d0df8e8982e9"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "348c7bb803cfae06008fd6d38c74f0be"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "87d7323608b6dbc423a0e80022206cc7"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "bc2fc1b4ea8b90c9fec9f0cb93c67e85"
  },
  {
    "url": "categories/database/index.html",
    "revision": "6d17f54710b4ed68b8f5695bd38225e2"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "1b7245b3848e0a07ff4b295a16587ea2"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "0bfff45c8b96d250e3e3edef807c2d38"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "f44fa71d332608b8c53f4285d169b806"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "879c069cd9aaa88c1bdf98db575f9715"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "d393f2d3d32b48f49748eb02d67f902e"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "adf45695e668275f73d13a1d53e9af5d"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "0fec9c508676798fc9546955e9062bd3"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "9c8da83af295b6be631176b66837b561"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "0bcc346d100e0951ce5f8bf940b89a90"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "108fb3b0f613a42415d6254c5a9ef650"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "041739347e6f700275c23d79a8028e5a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "69d09b71c68b79b43afad69c45676ac2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "ddf004563ae89ec0226b5c918f3bc1fa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "0f3a52f08225b2c4274dedccd3eeda16"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "5c39cab67392a8ba17c1ce6ccaa97bcd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "36f27c9c37f7ddab3a4e758fc76fc47a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "f85589534d542a5d224dc335ad7a0045"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "fa31ae0e8f21006de7bd122b7b8b2d63"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "73d4843915377ae719a6df5e08585b9e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "debcc9892aff4994414afacbed88e1a1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "9273e08e80e769cf2c194c76070aa1be"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "7913296859b4fb51bd5cfa2bbcd389cd"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "a0eab6d6049c04514ebe828fa3659400"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "f3c48fe801b4f22e6644131b20e30c5a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "b2435b5ddf22b63a76775272ada94893"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "8a17c077c5bdb6e79abc0a6825bbfffd"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "76998928c7ee3256018d2d5248d6e861"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "188e5e9214f46c47d50236ce911034ee"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d7fa3a491500a904cdbeab49d2069375"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "b71dfccf53ba30f810ecdba1257336ce"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "cfd066b0a74cd864ce9758307f91dcb7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "4aa7751b6d0f3ec784cd7fc0238731d3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "da67de868b760f186682dde95f39c278"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "d69303497f1f9800b30e2bb76dd3fcad"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "c37e4b21de5ea03d9c59019c08f4d996"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "0477429996c8b6a4308f812020c9d3e4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "2896ed0a89e62290e3e9c1dd73aee473"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "fefe1767e18c824dd324686efb479512"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "e6e801c8dd4e1ac2ba9dfcfd2c0bdf0d"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "b540c2f7418182cf1e7641dc28100940"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "5d4a3d4de100c456aaf64fe8d3e992c7"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "aa25e48d8923db4ad0916680d9cad2b0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "4b82bdc382ddeb8285733c95a432f8bf"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "788e772a4ef9f620d0b5a1677739dd28"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "d6987b3408c8ad71feb66051316162dc"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "5d8f7cb545b94450fef7920dff4f20fc"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "cc7037535482da583bb44369357ebd3e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "2d57d99edbd419c9708d6ee148419da1"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "12e50ed600bd70eb51a794df052591c6"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "c89f44e707b2dd766475164c9822c6ef"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "d18734a4dd1bdd8de63af4ec943fca6e"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "77d65307c48119860fb394f3b7ecb5b2"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "db7ee32b32d9e3a2501b6a00aab4f0bd"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "a7f9469c80783ddeb8ae2381f8469cc8"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "4670a545cfffc9bc51a6f2e02221fccb"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "6ef8a7d525f8a265c71466ba7023450d"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "2db7ea93bdf2e97e9196b0bb397d7297"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "1a82ea4d9783e8741157d05732414cac"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "d1fee0bd5d1705174e9e2e578d5ff6bc"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "6a951f1871ba58af351211d072fe4cca"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "587f2584183d885764725c599227fe84"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "22a7761bc607e5df0fa65cd9efb7ecb1"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "5e4f5cc7ed9fb562dd400b71574e69db"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "ee56a85287bb56c3a0c413803fb876e8"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "11905708bad876480ff36a5776441dfc"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "ea3d50ba73bf1469ae0be360e977171a"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "72a0bf6171dca56cd88d1c9734f63850"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "06f47175de218dac5abb26e6549a43f0"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "19a160bf8ee6fd8247468c068f953a2f"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "8ddea240b36ad4d4776b9a5c52763f8a"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "5106bc785039e67978d03c25f14cd958"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "3e34f2791b1a1d172c8c05c43042da03"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "7175e0cbf344a95e7053651151290074"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "2b6d7f1a93370715fd3530ec5311e5f6"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "316ca6ccc05f84f6fd7d753914db2c4d"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "600759f2421c52dbc9bcf67faad39dd5"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "9286e95bd142990ea5911ee96660807d"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "54d100e8660b204d1294954bffffa353"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "a350540829b8148931501ffadded4281"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "c03c61d201ec2f904603fad211011fc0"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "1cf82074f8196822cd2d98290e4fb0f1"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "6f2a1a282f2f59887efbab639baac685"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "bd04c253cd4047278f86082f3e8c922a"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "037ecab37c978b89019d2de54163eac3"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "e833c20cadf2a7538a580f26030a792f"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "45b34cd7085def2e6db912961adbfd1c"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "f023cfae455792ee052854bf05d44de7"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "cef420faed99f4352dbc978e98925056"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "a94d1b81f2fc8d9c81019330aa7241fd"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "496543640fad4443b1bc8095fef4841c"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "ab39c9470897b7bf43fda78f73c57e61"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "82de3e3726a1465c572932602f44f1d1"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "a31fc17a0d3abaed3daca161298fb7ed"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "060584f33de0bb13dc144c6c2fc15afb"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "5e2fffd6a2bb4bc864c668a9633f4262"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "0c6ae0a8720e6201968593430d1db3b9"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "039917f3c011e38a678caba733bfcce0"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "ef1270e81b4f404de8a25896e78d51dc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "56361d3c1830fd0fcdd69fe59cf1b57f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "d8ce36f66ae0b09f6e69684d4159a95a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "139b72f1c7578a489b0beaf12ca58d4a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "8c90393027e33a7cf5b991ec55953c6b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "241d7594a257473d1cf5e29a0f37f66f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "f64a876b95b5a1ffd64b47053c7a2d93"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "462b1306d7925143f227bd1802a4423f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "ca8efc21377a726d49a055fa8f4e4065"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "a9426124963d686efcf7352b5038f38a"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "a412b30cc28d01d45427a1afe4fe5a96"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "a8e61e7e69a8ddee1e9e8dd1835c5797"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "d81a4b137139e3baf0826562bc6c5ed9"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "8783d4249f033611826d5969420def05"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "d5ce2ee724a5b32052ac2d6cad157afa"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "dc9969526bcffad70fd8391758996d66"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "e04f8cac1e7db2bec72103fdbcac8a4c"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "74eafc81373c81d207cef49960251147"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "beea6f17b709c454c8b1c9034a6ab2a0"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "d294b01128c7947793c8bab8763bc466"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "136769b3ad51fc71ba1e7832abdbb77a"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "5c42fdfbaa826a09687db527bbf29406"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "352506b31cd6716a55fa818a565263a4"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "f9737c7e427bbd174017aa8fea6116b7"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "4a2580502cc31e0b7abcdc6d3fc9df7b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "6692e0b1d69879d52ddae0538075bb8b"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "d90e6f539a333ef8c25b1dc98c1f9a96"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "3047157f73602b4cce521e10932a2727"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "7ff61531afe3ed0f9de9a373f9262b8f"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "8a8315c54f12c8b398df4a947d298fa3"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "04bcde200c438d974b3b62fcda29a55d"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "7d7e59bcc05379a00a13300bbc678a6e"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "3e68bb8bf900bf34c55ea18ea3dbc284"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "50d5711a895379a24973e34cd059b657"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "3a280cf5776b2fe42bef3306d2d40393"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "292a1de98e817a212bf6901d5a7f2484"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "1704d448e963a15608968e1920a6e6fa"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "815691ada92f3521173fea2cc98d100e"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "eb696ae96312aaaa343c667a57ef9c14"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "2a056586c9b076a38e4ebbd77cb85a69"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "59a5089efe07de19518c18bba3812ea6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "2caeb3d98870ff87bc7f960400c3fe5b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "5f3cb9c19304fb67a0c01b794cbb0af9"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "97af34e993e0cff8255c414070b2f51c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "dcfd299187d68001ece7e0bb3617011b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "b663319df2e20a8453f4eb391aaf80f0"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "9629ea47b3205247268781c1888da398"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "58185951b270b1aa9a6db3ec4b96ed6c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "762abfeed369c877ed4f930f20a67915"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "5455cb9580b4e1b5ba7b705b3b67de4b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "1e9a048081db7c512b47476bf4a46311"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "b868d93e192ce54e058068d84537a71a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "ef00de9c021d8df1923050150f6d1288"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "4fbd941bc526bcac138b53680c631fb9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "859f50b57f488818e5765bc9d7c0db71"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "626edf3c06880ff1313e7217ce6ed028"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "cd19ea0545a9a643a417ab50606079c5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "4d51601f867a0124e405b39b7948b998"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "abf7f6fb2b95189b15fa8480d476cdcf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "5cd88bb2390cb3781b5e67c1692b1379"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "fc1ba8a824e8f8b9483ae7748ddd23cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "972679d122f99bd74f32b643b64dcc3e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "1a579d0d2c2cd4e9823cd85b74725be1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "e0f146a701c1aa19fda21981b5a23c19"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "0626958f544bce6a35060bddadab6c4f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "79e3bdd84963f01a7e34b0816cf5ae24"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "62d4fb5d161babe9d36044ff406f425c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "4a2b5eb748884efc6f6a3dd8035960f8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "e93e155b2de08820a90cbc3f8ce9d936"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "93ad5720f3df9831ff75e8ef55d22103"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "8314a99df7629ef0002ec713136418a2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "143b5ffafe05a92bc6c6b433669a62b2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "0c3b1a732e786c412250505e2bf87824"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "4e06e261b350e09e6973c1d1dfaa0a16"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "bf3f633b2150dcbd2922586173bac6a8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "021b22d6f71980c5385be6d5a0ead3df"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "2a2f7bfce313aecd0a5416d217f61751"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "bdbc555592c9515cd6bb845acd45f2eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "c008312c0e51947ff3ca489a8836ef37"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "18b0cf0617d7347e3c46f4476d040f43"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "f76a86878b3a272a43a601807da99f87"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "14e03e0725334f5c0ec60e95854b5128"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "d36cb71ffb8797303f2ad28388ae2c86"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "81363bb40d86397c76e8080428a6cf4f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "66f99b985542e97d1f4930301e61e11e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "e6be2d12ce57e27740479662fce94195"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "6dacd176d6937c67f0ed66c88242fb57"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "81e25b3064c621252d521d0f0a0a8263"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "20516b0ef7eef84fbbaae56db28de1b0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "1701c1879d59abe954641ca0baa8f9fa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "e882f2e26add58eba9e0b7c3f510e894"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "c432edafb3609027bc40cb825765b334"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "934e8e91f791b0e37d7dba054138f4ed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "26d913a4bac76f4f64ec8d2c60563566"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "7957bf7ef162cf060e3ce5ce1bbd9c16"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "48820505c4d1dab3dfd79d5528e6a61b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "60cb43e37bdced25e298018e26cfe563"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "6e6240f196ef0a40f2b2ece5a046596c"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "42dffec7c6198cf89097feb0c675071e"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "46376790847760dae89c763afdbca809"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "6dd4e6ab95603626b2320b70856798d1"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "605526bdeea195d1397d20cb594b18e4"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "37c3461c37ada3f3c2d0ae149bd453eb"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "2ea0553939f216a7c02027a10dd12422"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "0381fa17aa669035705bc66a25f493be"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "66124af76da0a79bb6a508d3b30df3bc"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "301bd6cdafb3474fd802ccde87095b04"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a6b7b6093ac811990f970c374104922d"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "08278ca2c0ab2267333205c54eb2220a"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "0b230c2a12ecd2beda7be797191404dc"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "b50faeb4076b078d7cfe04fd7e807055"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "4cea66753eaf26a8ce9e79ff610dfe62"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "0c5d42694d26ce439f4732e2f11d37bf"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "435c7cf24ea4426a2b7f10e4e82cae98"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "5dcb19bc02fa287783d3a238e2c4f364"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "61b7732032195ca5e1ac149f83a4d287"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "05a4df1640d2f774ce990988a9a34809"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "74852129460a62187d44cbeb49964c3b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "359e46ca4b72ab42f3ed4489938fa376"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "02ce2c0c8d24ef25523f32324ce3041c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "700c53e8c76ae3f2bb21ac3f0db9f1b4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "a3f9eaf77c0ccfdd2501d4f051aed6eb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "e6d0c22ec7943a9d40484429c6f9baab"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "e64d26017517d017b7955fa393ea16b1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "fb0df5873af14758aff37bca08a96b3c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "069b3d3f2e95a738bfbfe2d1bdd741fc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "72ac96a5051e769afb14a32bd8b08b11"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "b620fd2369ac2a578b2db032b0ade47e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "357320cbf0cada4c2894307b27eb5423"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "44b368c27e79a62d98e45a39a89491b5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "29b1448d9b5f73034257ae46496a0f45"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "ea5b7d6bfa642b0336d1026464cd15e8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "14d322dc167fb745c255a835466ebbc1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "378a094cc8252a121f401dfd75a6fea0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "c1f95c6eed80dd9439c884f672a21dd5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "9d88fdc6b9a2326b88a33350660701eb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "e96d0c971b12d9800fbd87661ab4330f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "c3adb5bb9033488974237dbb7754a7f8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "95eeb58c705df29d9fa58709b214b6f4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "b33b712a315d9b16f86a5e07453d734e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "6cb38993fe2b8bbc1d750369acb1eba1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "b1c2c0f73286fbb2f67aed80e3acd2bb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "29fb3d5c776ff46cc2b6bf61f5cc4795"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "93bd82bd3c18f16594d26a98ee7f9432"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "cecc9cdeeb631cf658655dedfba5ed28"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "1e21a0d1317bbb1a8f757f38dc148e08"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "af3b30bde077d641a8ef03e2907f49ab"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "87245e8222d09b447c4f954bac67acab"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "79a21b996682e56b5ed9f2d6ad9b161d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "55965473a7414fe3e1ee9f5e565cc783"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "3f311c8e80e531028eb30b5795fef8fa"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "52c3e6be5170b22dd664612194b65b0e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "b10dfd155ba1331052117d7bccee6036"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "17f125a6c1ec4820aaf6f2a0c3daec5b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "1ef9d7dfe380e15e544c2a3c5c6b2659"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "60687c7887c335fbc1c154c4b49e3b84"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "9b003a3dc2d5d7331457ebaaf337c1b0"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "b455202bac8ab178a5d694c07a874b30"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "fab44a04dc7a24bea84c20d241ae37e9"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "704a5e9b3373a8c27fca2e2e0c5afcc2"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "149452ca65302a71f17619cf6f6d62db"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "0a781196328b79ca6dbe7638a06496de"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "76b8504f78326560f3cfaaf428e573e0"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "4a55783b084ed5c5945e2cad13408f73"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "c5650310bcf5fdcc846253698a3d4afc"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "62609b95ba58acbd29e470a666d63a14"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "c8e74b08c68def1b8556b31fadaf7021"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "e13ce1d74018ed16e036df72f842b5b6"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "a67e417faa06f27a2189f06aee1646db"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "e47d9bf6c3439d88b97dd3c735ef9ef0"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "013843b3df007e0e83b76f7344bf1910"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "2a402cfdbcc45436117db0108ab82f8e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "f81e780a763ce36fa43669be24b51d92"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "baedb1219e3957029041f33d1d942416"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "4bade3112fd8e9b0ab6ec865736246a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "b655de9a908256c735a3decfabafe946"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "40fe44309dfca499bc076c78806dfb4a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "2e72e37cba9ce2c61c775574563387bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "a6774052d2f951119287aa5b52abb830"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "1ff38ce8dcb89882591d875908671df4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "c8ff8b2ce34801f9ae580ee02ea865f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "af15c3aa6e2d65aa2b656005b1c6db84"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "f96a252dca99be94f5c8de671ab0c2d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "50eb5b7714913e97d08e7b2a33fad9d0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "107977c8b8a808488d718d35397f3b8d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "dfa30c7bb3c6a3f24a37d23bdc183fa6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "cbc837724908b2f293bf083d9d4abe7a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "bc09ef04c59e1d5cdec0ebdd770141bf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "2bcabb129f8f9c981173d2b91b9851ec"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "571ae35bb5bab8a3e1ab6d96b8a54c5e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "6d141cacce13ddcabadd8c12ee95b18f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "3e43f9645bcb5fbd36ec8aa6fc102b04"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "6dd5eb87dafa04cfbd9faebe70ad157d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "1aa9bdcdda8f7d3fa644bd237b754a36"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "814518f5b992cd0e9ec76f1ea625875e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "e2a66a1651a122751429ff569df59bb0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "612e54d4b3bd3208ef0580bbfe84fcd9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "d415bfd59cc2a561eee2b85abcc4abfe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "9a7a8f5594547427467ab272ab003ccd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "b7d5d5b9b92e4fa2d0e829986e953ade"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "4f296161932161d2c0582d056d70964f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "5c247d4e6596cbb0fd0c1f6edabd4154"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "e4c8a338bbbd118c49cfc1c56b5f749c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "7c7c65e5d6fc2c6d3b47131ec406152f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "8f3e058e86a5e7af9cd3db1bddb3b942"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "489a7819700e45a9bd0db2e6dc252cc7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "5ffaa3d519c0947ab3df291444c25506"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "d9a05035495bd2ab955ecad1f03c3717"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "a1508ef195c1d5676e0c34bcdde954cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "b92efb881ae530ede68d12f99f8a3ec6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "71d7b14fed6fcbe71a665b48f96384ca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "4fd7c6598f4494654ca3d912d5f1bed5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "c7d5c749bd161e9243c772522311e5a4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "f75efa4ab84f6a66ebe1ec76cb939126"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "5aa9ca12e13d4cdcb510df49a51994e4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "0f924b50f2153fac2fa406a3681c5a7d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "279805bfdb9dbdb52804aaabd58560c3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "e1f751da6752789f4e7ffacb285603df"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "39c336bb3ba1636260dff2d5893efc40"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "d7b3b0596a1b17be2f0f3789ee742951"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "66da185f82932fbecb4ed8917196305b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "b8ccc33dc171c8daaf9cf76fdfe44e79"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "5a7cea74980a82988be50f9a74b7cd94"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "615c16693fa55e2b3246cbec31c6844e"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "f4b288012e3c7b184922f45cdcc47281"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "b91426d5263b937d00cab6d68f7ced0f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "8d6d1ca0e6ebecdcfdf769619d40d1e2"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "165b55bd2533ea5c70a33b20d936446a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "49e6a4593a08567fdc6dce3f64c915cd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "2a0f167d8e73f92a260c82d64cf418cb"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "20025fa2620f3fef20d6a387c18a4b50"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "a33f5b8c808a1b81e588017e564245a5"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "6b4801693668ab3d314d9c61cfc14807"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "0ad0763b92b30493605fac10aadea37b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "5d3def225a054a6ff74cd2c9d2dcd58a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "e297e24e46a1c0f800ce22f59e8fefd2"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "7e7f40ad1f2ba5335049d1c83ec73239"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "e2f94ab6b3c5fa2bbbde7c62a9d35c8c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "94caf71c465fc4928a07aa7bf4a52eaf"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "97c8125aa7eff0f0a1148163a1b29b3e"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "fbe48602bb750160b79dc45d5eee8bd6"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "5c517334bfb4aeda27ee7bb7b12da6e9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "904b8e7d8baf77cac6cd0e66d1c5ae92"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "8c693867c819a04ba846dfaa612a85ce"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "e6050d457b3eaaa2fef8831ef3229c26"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "8e0832544e6f958e47bf2dd972d1b12c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "c13016c7f08dc5bcedccc81cf6fd92fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "3f04faf9fc43a430fa2ce3526387e15d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "fab27478e91c08eee91e4fddf6efab32"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "f24099531287a6622a4cc4535d1e8b83"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "d1ecfa2ecaa2be16f1a62943657aa258"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "2b3cd17a627a68f046068fb140645915"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "8f71caf0209ae5732e232135fce67329"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "0ca194a7bd5c555fb1bb569f6b677771"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "8087cef7e63dad34dc41c3f827696987"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "cb94e1421ea99aebddc357584bbfd7bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "2c3dd07eef244eb129a555495f3fa732"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "c590fbc3e6a0acf9f4ed94cb49083d92"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "863e7be5bcff2c836dc5dc0791d07a62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "c38fbf50d854c769ac91f1a898291cf2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "e6be9937156b3ff6b6c49150fa3e16a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "4da409dead98e0ef2a6e01783fdd43b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "4459a14230f092df6cd4d07055289427"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "c4452d6d720588e71b80af17024e6124"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "0b05ccb456f2f138646108eb5e52d4f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "2f0bc29f98d07834b3eb0f2780e7327e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "3be83bcfd339b1a096aedde3c9e5ef5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "fd92f37c0bc162fbe6a30a33539932e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "524da1d68a77356b255b375ee232c378"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "4056c92eb50cb2a45f5a7b2de2548029"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "9e017cce0784cd3ee61b924bcfdfb322"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "8cef55b17c245efdeeff1adf53d49224"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "85f61754ca8a995af8b7e7b48cafc24c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "7fb89b96b46785c52a80681d54767b1b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "df89e22e161d425bab31022bb1aed54d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "a032993afda2948ebe5a4d0d3370aa60"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "0e0e7cfb8f020edde574a7fca1cb0b07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "492538e9ad59e6618be93d03d42e4bff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "f48bbcb00df77e12396e21637fc2a231"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "6c3758405fb56d21ea4ec863e67d8b8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "10b0559dc77e05b2d7b953a8a8c3fb66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "235499767745efade71b49c0333b929b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "81c0da0c275d37a4eca9c13646380654"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "97c1b9da55c035141491fcd952e481fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "7f3d8897245b51d2f69cf3b481a7a558"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "266bebf00014c1be6907ef2be1cab19e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "a897842e1ee0552ca6dc32bed1a0cab8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "ad8acda62dd9d4e9d3c38fcde2e9c0aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "493668b6e41776749bf7f08428679bdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "d6defc15a8c07f58a2de733362161b69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "e0cfcd66a8c8cc648e9afa1905f26cc5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "18837ad4387e9e86e4ab79988dfa8178"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "039ec2bb7b55be01ed0480f518659e7f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "df2f536d4ef15aab00f9ee46a81fde55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "9258e521baba98ea5f1bb4beeb0f9f42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "4ea2f879bd3462125669f3e204673fb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "2e251671b24bcc7b4840362a298351e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "5f84668eb9a2fc0cd4dfe9a31f461cdb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "5d25bccd9f9ceb394bc4a472eece6cbb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "31cb57a586ef4158b756e674eaa91cd6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "adc16e9d1ab6e25a6108c66b23b97bca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "32631651698247208f239c0a58c7b92e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "f74915b2f4782bc7903eedd38e2b602e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "4043d1b5a3399402e83514d87f96569c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "69b6c644d7f57ed80e12609b05600227"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "2049fac4315ab48a7c558b1cbd6a71b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "71c3ff625a1e197b894900814a655f1d"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "215e45b99c50826fa2913363b0a347f9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "b0eb23ff8abd1fefd52e7c63ec000e19"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "82e5acc0cbb433a1b852ad8b67d544e4"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "8f2921832e06511c8bf91bcb8bca6a58"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "18811de28d919b0b5f10bc4de4b43f0a"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "3bc39460ca575cdbd739faade355f459"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "8a257100e7af02f2e68db557320c4acc"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "7b03f0e13f79e065400a51f3445df7c0"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "19b7594a6ab3a999956552ee1e1c0e17"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "aa5f63da5d76128bb113ef876a4f0e57"
  },
  {
    "url": "categories/index.html",
    "revision": "ea2f5872d958c17063ce96344c82077d"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "dde2de75a1f30883b604bb08a87e0c04"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "a08e4ef15f47a03888043944ee87d607"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "8522c8f432a74ea0b30257e683c675c6"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "1ccde5bb055c035f2ce37656ce5b8916"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "a9bfdde52e48c82b86e177b88897c589"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "2d085fd71555b1718902e26740a63d7c"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "a831f0e291556368b19a69785d337317"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "8f5043c229039a42253be2d07fe2eff1"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "74fda52f7835541c38a349d30e011b94"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "3ca30cf66052dc42f3699d29623b3b0e"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "9fea8893c5bc9dd972f3f7014763e3e6"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "35c2ba3f7e23f88f3ffc7599fa9eeade"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "447b548b991200fb7e4d9254a46a245c"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "0e9ee3de53bd2ffca5ed7627bf84095f"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "071754b602a5101c1108227854074d21"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "0135d539f1fdffa3403a62c791d0d120"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "bb4e372665dbc2c899c65b239e90e64e"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "78c91a85c3da1b70d4e8a42e0d931000"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "3d6706a505a5b98ff4e277ad141304f5"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "c57a198f3c94194320bd17cc51b854ae"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "fd3ad2b2d86a53223267490ef1ba1116"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "674bb29925cd1463db4a5587b65a4efd"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "646099f9214183302ead85753ccd1b8a"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "6d480d4f62fb8ee1e5bbebe56817a051"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "bd9e3cd2012322b6daea2d6cab9f5601"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "3281ed60229defcd9397e03ded8192c8"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "d747f7f5363ba56d45389654f312a468"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "bfa3c7aeeef9c001d96a980bb584b231"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "30db267bed5394d5f98b493ebc526f57"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "eaa02ee2c7fdc1996e954d5188c635b7"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "e0090096e24fa0305164ddeaa9956ca0"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "152b22eac3ddeb67b20fd79a22ba5f7d"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "9bdd0457ca5a7204e9d5607616fa6882"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "d00e3aef4422922f489ca067a74787cf"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "6ac68b993bb13a2c44c684be00ba831f"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "7a8481fb31499aab3f3e2b5ed52cf95f"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "c49e5306d6ad7ddacc64ac808e214e89"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "15b60188a869b23f264cd5dfe7755f2f"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "e937d6cbc8ccc9d5f44bb352291ad5c8"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "57e3f00e5031db61b34a5eaf883d9230"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "b763b0debfe68323a0e158af66a4eb58"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "9570a14f7c8274a24c7da06abc6b549d"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "d891bd8e7590b20bfaf4256cb8446f85"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "a3dd36895304f9968899f9bcdefe92eb"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "d23a52fd607d5a6ad9bb8dfb4712fe27"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "a60c6976bb4075d79181477085128f43"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "54d364fe9cf6bc25a2bcb290e54f85f9"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "5181321abba3c99bf177794f3ef4fff4"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "c4aa209a507a39af3c8ee9d81c436d90"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "fdb07de887f65e08ebb22084ce234935"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "9a7458b83aabeb2ae16564eb4fdaafb8"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "20add612ccc9347efe146a55494a2798"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "578bb66bcaba05c7a727d8bf7fcd0220"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "6872be9f692e7c9a9f02e54a88b1ebed"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "02eada99998ddd18ad968f22da3e1e64"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "11b8b345c98e58c9cdbc716ecfad62d6"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "b6f1eb3f94cd4fb0056111784953784a"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "3f38d419ceb42ba89470ba8830c45f65"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "42e73de3aa2105f36be84234766108e0"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "a53882276ab20aee9adbced679cf8f48"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "382e9c8ef5341221c37fc5a78646cd45"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "4a1b1fad4b34c11d4bb859f765b28a2f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "a200b87914693f38dcdbe9496e8b4640"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "4cdd814c837e860fb05fd122b3900ec7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "78a1ef483ac8535453908587479c378e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "b6be7285c2337b1168d53cf7568a34ed"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "31346615ab01d555fdecc5248129beba"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "8597cf394205feaf7121d9ea50663181"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "4e6e98adb017ea9f6c9be3f078709679"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "9d30efbcdd58d16e67c7ef4596d621b1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "da07581d20a12886fd6fa85b3b466e9c"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "2ded45c681ae6afb7e710127afac9cec"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "9b133a2b7f74f77b8143a596bdcab988"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "35c484755f659c4d9a29653db3df7512"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "4c3f81e52c8da9c9a67a7e9e1f870897"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "ee5184946cfd9a9e07e9b5d42f2117f3"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "cb29195fb6a04a61cf4e7ca2b67d2f6a"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "a342b8992c98f6f9476c957a9a10335b"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "19ca98d24eb150d98601774f28580d35"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "e046fa71ffa338f507d8c56035af9c28"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "e23c5bca26e1011283b9e4150588b856"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "d7fb40162d99872242d20935cffc2d1a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "b8384218576ca52dbbd41f1bda5b1012"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "78c12c097246ed393c1e5d3e79cf44a7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "d95e67251a98be85f3ab95fca7bce069"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "0e527ad511b70753de40ab9e13a8d099"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "06d7ded2d140063ee11f33982003e3f5"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "53420525eb1f06b3717fa1a589d539c4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "5eb14d92da514583bbbae2c93098e263"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "9be4eb1c655b0d40e475fad0a171c686"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "cc069df797979c0b8b97f78965ba0156"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "dd08bc38b4fd073803a80ac7e0fbe9cc"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "9667e9b7b44c88390ca9d0617c2686b4"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "5373b1c7384edf191bbd8e68a83243e6"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "f18c2e8715d64187ae6b207838315683"
  },
  {
    "url": "categories/java/index.html",
    "revision": "607265e65ac24c4e136786d54f825c9d"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "551bd9f44afc3c70c52113395e79e9df"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "8edc729f08bfad3a265d0a498cec8582"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "507056bb3ba25f95349177ea9f650d8c"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "0174b37b79ebb03d592e14a65553b95c"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "fd7437df1b0541c0cf739fc8fa9e9ccc"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "8941fb3c0c7479140a996d8b85ce56df"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "0b1646bce7751df519141b14d86391c0"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "33fd49eb758b2289a8c69ca6e4e61eeb"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "f3e666b7b021b86375b21ed186e5b98a"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "b1fe6c6a1e7cbb6d67c0b93761f79fba"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "4a72af4205983a8b434ac1172b080899"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "8d66225aa9eac1dd301c77e3de8b3ab4"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "eace7fd382dc4eba3fc893a23af75499"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "6117647606e9d07318231094bdf1b35a"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "3b509ed43b9591d74c90604e34e852cf"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "282569f80731e43afad70e330afe5c48"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "9a4772f3dbb48e4771f1ae2951c335b4"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "afb1e35002b4d83b47fc04fbdd1d10cd"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "57ba5f2cbd16cfa2d7848271b9c7d20d"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "a4acf98bb129232f593e0fe5a69c1c85"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "c2a41c77721c7cd315a6e420424d3081"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "c9b15e66568d9fcf7b944aec9a0a08f0"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "a009c89adc1dcbca50c0cf5a3ccc54a5"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "9888d505145c76b71a55f02da607165f"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "38c7c03d602ff0f43c0795c9f563abd5"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "c9538b325a774e293df8a72c57ea6e02"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "3c1d4eb620633ed2e5fd5a659b0b3d77"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "52a49936f1d2c114b91eb18126baf9e0"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "5c8be9f66ff9cb4b0aca44fc63316b24"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "1f7c79b708568ec73a2184f3db6c5d57"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "ac8a2d163f43d7cbd0ce77e36c0a6c22"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "f9413e77936f96dca585084737c79145"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "d6de1478cd5f915d3fcd7abcc2f85c41"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "0214429d2b9c74e5f8087b5d0ed1c901"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "c56ff2bc02a865b755529c49a58a9d76"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "715c3695cf0f9777b203c51774b21602"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "4ef726325ef237a7abe1c8890bfb36d0"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "2ed216c18200db600c4fa84696ac4ef3"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "e6e4e057835eb8e7db2273279efb0d09"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "340ed7fac5be493697456da450ae5a2d"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "005987aad575734aa3fe3cbaec207a3d"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "95984295168e8c8ef5ba39068a3cc4c1"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0543855f32ec5135c30b931f8f21c735"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "67a5a50857ebcc47c73868cba1117cde"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "e96448a632513a26617230ce59413e25"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "c7fd106ed23fefc255d6da64f947b5c0"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "ab5a28ae130ea8794af1baadae65a993"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "a511d884d83f1759870426a73d69e9f1"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "99ca288d6d19bb84b440bb3141680a99"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "9a0d7ed7b8f20077601f04d6344a83ad"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "481e34e758e406fdf9af00c37bda72a8"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "b701e1fd7ea3453a993c77299c767d03"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "27f997710877e7550a6896cb9f525141"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "1ff774d16da2f0cd9f46fd47ac671168"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "195a43b46c53392bcb605da86e609a51"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "92dff5398933e37cc898d0edc02811e7"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "1965e0e60e741991505e31105ec5223f"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "cdc9aa44e72768c09de5ad8483e2f70c"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "29a03edfb332835567825bd9c30e31f1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "724d5235c888b9414db8805137ebf237"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "e8c70bf915723c4c4cc0bae313b08433"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "62e445032316faf68b00ce2ee18d6616"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "02dc142c44fb4b2d6e15006c66d5789c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "ad992ae43f9227e954b379a31db3ddd7"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "38afac019103af8f6f1224b309e80369"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "bb5087d44ae115a3b55e6cab134471a6"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "704b16791e3860e3de43fc5e589fbc6b"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "64bc7e8a48a4392d63408a629196c6ab"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "23ce1db744ebc3805e645fb2bc07fdd7"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "678fc8a053ea23cb59cbc7ac6b894b40"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "fd95c7e205b63188eaa212c44ef73656"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "a9ab7a43c72ef7cd84f024729d933230"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "93250300d5e27006a79af11b9b59c18c"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "4f4b71ff4b325cc321cf46987c91f000"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "702be7341c10bf40c3c9d32bea5b1281"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "53c16e7ae477a3c507955b1b1fb9bf7e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "64c508aaca5d82e86c576fe1dd5a96fe"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "f2d80b2272ad00a96a03dde27bc9691a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e80d513ac941eccb65e027544c861832"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "b16ccaa55d687a88b001674c2313a2b1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "4f85e39651d7fc254e64b438e4b84dbf"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "e8848516cad1029033fa1bba2b62a9f9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "ea8ce3482d2a34b03ea226e17f260460"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "cef084ea44b67065282c846cdb1cf8fe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "5ee6db5562be4c752fdf6bfb0e00abbf"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "504228333ebbf2604da33ef848e1455a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "32442d4846faf49aa7e3cae3855e6765"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "b41a757baa592932fad9e6902245e503"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "116b94f5f1848c26cec95c48e68fdb54"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "5395f5cd6d2393309faf057ca3ecc0db"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "cd0ead5ff74ee72c5fd54b4c631f7d09"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "d5bdef79e972cd71a8b514f3bf4c96f3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "e03e6c6ab6ea38da2b45c387062c3a8e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "3172fb66526e8010d634b9c10d20097c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "752252648d921cb1e44d9706ac9a9404"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "078aaf6b698f026535a2f6d3bceabe29"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "0bc38c0afbc195dc6da6ab03bfa9a2a0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "8aa890a0ef2eca6635aa80b29137a824"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "87e0c8173451d1118cd64d833c56605b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "0ced9f39508c1f323d6fa8a820917d58"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "25d7be2877749f035a5a31bf839976c3"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "02af7afeeb9a234c7331bea4e4f71bb8"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "d96a77ffa4f072a11dd862ec19c8e6a2"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "6b9bc2441195c334aa30407c26136be6"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "603521c067f06534a1b6affd1840187f"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "f0162a9e18d4c60f7100b193660de691"
  },
  {
    "url": "categories/os/index.html",
    "revision": "5f820bfdc80ac2b47d8ee34c1693f123"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "85ead55d5665584b0c9ca4985bb9b9c8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "9e53c75bcbe0be6c96edbdede7777b0c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "a4715a58b6dfd77f767d488fa1edb310"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "699db99038cfce63fb5fba49afc609bb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "6b6c47f1470e4d677685814bf3cde8fb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "5ebd9d10a178930045b8d236b1666ff5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "8b13f480b173537f2e746e4e0e4b2453"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "e1f7868fef0aca58c9d75edb3b7957c5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "f1a72e17a2b71528fb27fca1630a2a9a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "994b09030e0afde51891a17c0a1a78e1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "849c6f4abfdb4c37e38680dcec2536cc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "1d70b110c5e926a7b1e6ffcffc0022f0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "c9bd205021defcfcf9d8fa350f67433a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "60c129e725eca55ee4c2f24b73735873"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "1e14a9d4fa2ad730ee1ed7b502081af3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "6fced03c6c57dfd29a8271b8dab46ba4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "816bad3892fc016dd1b5f5f9a35d3618"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "451b5f1b9dacf9185c14bbbd139d414d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "99d111a10df4941cd7744d737978534d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "59fa3881af96dc77b691cad3cf98e87a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "6ca211610a09abaae38916dcdb70544a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "9414c0c52975763ffc7443b8203bac38"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "93b64044eb20dd36ff95ccc5ad5f0964"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "0edb9c52ea043a486e2bd984d6f98431"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "58b62eab95750c187acf589263342f82"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "49b26e61caa792d3febbbe2c53d5fe70"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "4f13e8d0dfe15c305958e8767333caf3"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "6318fcff21980f65d8b9ec69a2dbccb4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "d8e08ba5127a85a080ac16b6854414e9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "16df59da9ed09bf7b7ecf51b8b1a11d9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "51a27a532950ffd4fe1bd45dc58c1b72"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "88664e973e788fbabf33c77d522556df"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "b86b75e4af57824946e49bc8fbe4091b"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "7d998dca9f55c6a11b5ed0e56d7670d1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "b04e6968a957dd9e58a7f6f5d7fe8660"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "377bd40edf5d41c690369028a78c7493"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "b777bf93e10791bfc69556f972f208e0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "562cedd652e9e4380699ca1268e08154"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "4b94d9060dff9f67a1c1985326191b29"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "f0e2acea1a94ab069d75bac3e37c7a4b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "519132e03163b455c52d69b3c316d6e1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "2733d1ad220a4e548eda9e402dc67257"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "f34cfe85cdff9e32de577c34dd7df0ab"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "bd138f824c24cd05bb1651debb05864a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "a35c5d52f45160c68ad551f5bd65ab46"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "f88994dd521268701e9e2b0d51ff686f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "9c537c4c17456a8463086a6b72689c29"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "bff19de96804105c707cf113c29ff484"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "22408a45cd5733be42f44bfed5fcce31"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "f26dacf84e86be833012cebb645f93d6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "fa79a8ae20329d7674689cf9fcad75bf"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "36ace8728087aba77524cad828b05fd2"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "3718b86f7125d4406b95c4e1f3f715ca"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "082056e2caf126bb14e91aa89d7e186d"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "ecceb8a81a3fb586b56109659f0850fc"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "b467328052b16fcc051ed5b62df245b2"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "80050a8879ead265afc35dae6b747217"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "070522bcd62fa22d12878ba644dd16f4"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "0df4287c48d982fd472aaf57f95c23ee"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "26689313557132103e686e2d864f45ce"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "ae225f45d8f3b5da8bb5a6799fad9464"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "a18ee79e52d75909dace5d963292679d"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "d2484734e9c632153f5263414f9446e9"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "8eee9332c5948c346174cf6ddbeb0ed1"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "4b7ce9c67995c79f1dd4f5b572264446"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "9fa9de3693fd17d9430b65d70dcd0774"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "7160e2400e8d5150c4ee1f519fc1ccea"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "717c45d604d896cbc5e052bc2e12976d"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "900256022c8df014fec43e32ae484802"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "be147bae79a66a5c7049695f73307b57"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "ff81611f683f11b49b3083356e6cfd63"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "fa635bc136f8fdb396d226a25ded7000"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "142d3a800ca9c550d120bda8ea5f4b5c"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "4b6493ca1220ceffcee10da30d9ab724"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "9f689861a65533664d82d6c18cd81757"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "ad3b828506e013f2037bce84cfb123b6"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "a99ba5f059a7124fec9914253a46cd13"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "7ff3400cd1269791c301fa8b0dfa09cd"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "76c1baf297eaf924b27d17931c2b1ad3"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "a63516b72c667644b77bcbe45706caa4"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "8bdffbadfd56eb916bae2c0d33ec10e1"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "e9b6384403f85c47b0f51fb2044a0889"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "784f2a1d991504d437ab9af8eba0030e"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "6dad4fedc8f1e8ee8502b10babf02a73"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "3ace1222233f8dbe510240b0a8e7cc81"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "ee33ebe107ec4a406674711d5933c2c7"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "e6032f79854cf02748d33c171ffb17ab"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "f3f61d9c9c410c149438c32eedab41f9"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "e95d4bc0db923fe89568e72f285fca9a"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "5968c1b1646c8b8df3bd3e4e3273ca5e"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "879375219d780ad864cb86a96038de5d"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "64be7ab7ed941585702c19074a0582df"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "fec34b3ccbd00e095ac1ffc2ea4877ae"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "7e200df6251fdfe210f72f32bfc2a54e"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "3f6e546c5fb6e98ac26c6822fef26dae"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "efd66bcb780aba63e0de710df5ee34c3"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "6a99e2f73c55477d930ac5f716902dab"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "63eb8b18d03b0aa55255c137e7927896"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "fd8704d5cef92a15db9a090f01b23956"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "0e91407b73fde8c64b953acc07ccdff0"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "0ddd7d1d87238ae4738724f8234292aa"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "b06235b780074929da93068adad095e8"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "5cb189331b5ce4c031c5f979a4675403"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "40b88b527dd686d6ec6f99ea96f883b3"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "405e76dbd364b130bdb8ee0406ca3af9"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "4b9028c44bbff7c6ab4213d7d70c2707"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "ca329de80eaf6be5a2d4231de51b73b7"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "49baaa10ab3d041165e4331f31639942"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "3baefddb1748adbcd7490fabd5a5f129"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "aa40472d9fbd1b38f9454cde78d90a17"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "d2b4bbac6c4fbe494b91495a5970d1f3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "1e5947310cc8f74300c76462b8c72598"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "21b5e11cbc32db5ea9690e7e22e82435"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "ce12128206e27638e1860326b11162af"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "c4b623d78cc8882ecce72f52f6ea232a"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "3576fb01cd13bbd860979b48f494edb3"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "a9b887fb3b31a98dcd8fa1a536beab5e"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "67f324cd5a2a0a3c1c7d86bcf51a631e"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "921f6810c5b21f7eda5e12192fd32e4d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "3798c9dcfcfea2f5f20898edaf2ec12e"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "be119af943681c3342ef3cb50e2c0d69"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "492cbfb4ac415d9e703d502d9e261104"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "ad3e4d761560419e7cfd8086cc03c036"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "b0f333972c850ddac5116e6d6e611ff5"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "254b4e2f4c172750007e83840c5caebf"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "4f9ec79d926c85827be6327240bb1fa9"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "45517fde11e18b9354a4b3d417643d2d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "34ab8e5a8932e2333a405888b3ad4ced"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "27ffb9cce0e8a0af6314d91cb2162231"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "c7f97748feda6fca7b63a0cf0e849804"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "7daac7531a5627efe2d682f6afaa7222"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "588d11134fe7457988224b70daae865d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "d4cf206fd0e483ab6d27127a5fecb246"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "508ed05d3b06e1afad2cf0a5127f0136"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "89316eb4ce3969d5082058f70d0cf32f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "e0d70dd1a010e2637c1e2de2d3325b98"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "08809308b929c586ba122b6155640d26"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "47a3e464810495b0d316279cc0b0172f"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "9d4b1789bee5578b67eb12e34ae69308"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "dd797d03d730549b0c5f47681fddc3ba"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "ee1b7721c495d36f1b6745a017d2214b"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "b710bfa12d3f41e74b46d7ddedd77364"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "6ff5a4bec4447dd752c64aa68ede169e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "813f8924221448933d7ed4a6c120f5b0"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "6bc91fee4135aa24144ea01b4aeee243"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "a8367c7d22ffde93b298c1afaf3f831e"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "6463cbbc4c89107f26459f3be709848e"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "94f546f9ace8329e69554c51cf292482"
  },
  {
    "url": "categories/php/index.html",
    "revision": "b9decf4ee7c0b2eedfc1c2b303ccb2f0"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "deeb4a81e6db388351105ffa342f3a73"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "dce33e17afebb9846365efcce19d611b"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "a47a946d2b2879f2d7b891368ebf310f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "c4bd9b079b474359ea7209780c2bd757"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "a80be56e1eea46371f5f4b16cea57ca7"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "1014ce41b5a34afe33e0c28d6d3e45fa"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "6cce51c4e1ad9edc25311cd334b14919"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "52fa42f1f1887f486abcf266cc868aa5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "232c5673333a625509af349b5e9c5c5f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "c75a5d1bd2891c1a9877e5b62cafe989"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "06de204568a316e77555fe0f5d350b29"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "6b462331f91e4c3e9fb9e5e7cb49e570"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "4945ad84a8c26f365b36d98d9c791ef1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "8e324a41271b331ef0719d4d80e46202"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "df46cfa09257b8013d5485e5f07ea7f7"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "4716b8c5f67bd24cad6abab8fba4578e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "8e9d41efb1205f1f6d4d0c58ac0a1487"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "292777eaa98dc925c41017e91985264f"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "016d1578d66f51ebebab9d5bdcf82ac5"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "d3ae76602d608ef629af019bba87ab7a"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "54d2437ddc5c6db6085453d94cff66ac"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "932da1e1649d95daa23add00aeb5c8a3"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "5a2523fa18c2a140e1cae13dc47dabf4"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "76ad7d44bc5186800a034de69a1b4bb0"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "56ee3ab3d3808ff189f301a20dc4e089"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "0f6bdba1aa3298c3ce82c9017beda80c"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "531ffb61192207c7da831834c4e6c974"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "d8b3d9c3039274532994ac0c0912ac38"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "b2c40efa7e649b16990b2a1bf50318bb"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "db9c7a391224ec28a97759cac9f19dc1"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "42260bc7c60acab0c3df1bd944084021"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "000329ac15639b800ffebd47b83361cb"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "70574f4764571f8aad4a4da0fc4f5f88"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "555e67509d63be4b27942a94e10a4506"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6391c83e4c54a719f7e47ace4b64c3f7"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "574d356b6a915f11ecddb6de65bf59ba"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "f6a4e4a9651e18d658331ed5c047ab97"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "cce93828934bb840eea19ec50c64555f"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "65e295e9e738810680a99b128aacfdde"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "cc96cba1f39e2b452dc60457537e98e5"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ed869059476b10df6804f8b868736c48"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "f690e89b9c105ae4e3f1272b6852aa08"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "af3884f82fbd629a6ec2a094a6da2f36"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "fd4ced7c21333be63ce6f284f34c54bb"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "60bdd17c4c012b7936a39210bba85fc9"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "ce2942bee479d0329dac3b2f7a206707"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "33efb84f7f3ceae86aaaf30e5240d875"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "20f7fc2bef6793dfe3c1d049b438e01c"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "eee015c0ed5268bc58e2ca5d15aa5b72"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "68d005c7e02f9623afe6f01dcd0ec261"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "cb92862897910203d9a88aadc8645650"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "c09fe4bf1e5cecaeda98efded896d03b"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "9c2b8282d90df6b39c1ec39c724f08d2"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "88607db582378dda8afead95ff3a58a6"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "d9f4f8b46c4aa522b42f2348f69ecf49"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "31491b5c9c6bcdfad58f9415bb64863f"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "54198bfbf7eb0b4dc5fa708187652ce4"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "22fc4975402358b2a393f4cb73c02e1f"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "90cfe537b97cf7b0c073ed6f42046e22"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6b9ad814877aebd8a2affedcf579b51c"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "0b491085a8871f9ef616b9e6fa4f16d4"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "156c34a342cd628e8dcf60cb24e53765"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "1630a48502fec5f9cae486998ae5bbd1"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "877064be8c9a6e48b8cb94dfe372c79c"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "55b5b9c5e282859835138f1aa11cdbd2"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "3cd999be96da7d56c0163de969779bf0"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "04942e1b995451959c7d9a27e50144ec"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "7c9e0f10cf36d50207cc421f7ab5c583"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "3697bb3b80c34fc6bc835ead19912af1"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "4230871544307c3130c80680690f6724"
  },
  {
    "url": "categories/system/index.html",
    "revision": "0f8e6666d18eb332a7013a06a6758751"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "5634b0810390c35321f36c39105873f1"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "1ab46b0123493c0aef7912463f2990da"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "79a3fbcc5877cf7e97784d28ba7c6dd9"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "63f698b99f6649ff0e0185f0f045c556"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "cf106750f38eee6c1a415833f2e67448"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "0a9ec705e685a8bbae251279c14d82a7"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "f8719222f27ad6f8e32215eae4114283"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "a085cff64d82f5037e88e7030e1efe41"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "9c46589a6a1d918728e9698603e06332"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "4d02c21f40230446d7590957ed13be0c"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "0ec017f65576be41ce5c2d5d6f461e87"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "882024f34339ba166cb53a5407fe578a"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "1298eb1a9396f5b52a2ec797297b9087"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "ded419dfe3a053495b70b6563ca6fd0a"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "5b149d9bcfb0ad1adbc28d8b174d7470"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "15e9f483da7f9487b1f8b02c37803b99"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "1cf38dfb45c0254043f65e92bee9cd97"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "880b9277a5980108aa8a3f2db6f38de4"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "cb1e7cc2fa2be74d36c782e2b27c5d56"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "47680b3311b1a40e32d97a06e970c946"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "fcb13b5edce43f1cc0ff706f6799402a"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "117625b295b2d5c55c55abdda6022844"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "0f09ee94680acbe56c9179e4a2f830b4"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "0a4079ef91cebe8d407e7c7df07c161e"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "590a16bba2fce062199630b095338307"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "6b4cbf91857b5a30bab94634694a8686"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "cd5f11ed9c83bd49eeebeb0651af9ea9"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "7396a7c8d82afc42e902de148ee7a676"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "09bf8e0c7b7d71164862c72759d8737e"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "e370f3e41ad6022bf668631309211d9b"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "722583509d4aa48ab477b63d09df44dc"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "be561de8eecb6388a714d8eea3d30786"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "059b8f4e17aaec24cd2c4411fbe768c5"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "dabe642021612585017cc9a1a985aee1"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "66dd943e64d5a992f0bdce65e0baca08"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "75410059aae9502d0a6c50eafdde83bc"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "91d80dbc52afbe031701d0087775baab"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "536ea3a4c3372a0e0de23b9198b96d92"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "0017eaa22d9d12a4e420427b47240909"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "55279dae1c3ee65d346f18b449f53786"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "d0093cae176b5559eb04576c1399b72b"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "a7dc24b11cbb86dbbe5686deb04b3e01"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "49a545869d9d489fcc97848e60920fdb"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "ba09f3252ac0fbac4ff920353c3dfc45"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "084361f78bdcb4d656d7d45547851de8"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "509bebe3e3a650c0983c0031de86b425"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "2befed8beca065bf85e87e900cf02e86"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "7e16edb04e3ed00ffa050a68cc2901df"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "10d5c0505d3162855817872e2c2bf5eb"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "01529963b42077b3b86c2ca411b82fb2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "7014d088a3f4b00c74487602deef6ab3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "a9036c04949b0830f01260f41a7467eb"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "6ea8de192bf71f1da6eb975a7be22116"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "8b3ee303d4033eed7d3a1e927d495d13"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "cceec901d7da26d203c8b750a3a4a37d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "e648364532a090adbfe258db8314dbee"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "3e3b753ea2bbe44e1f35193e44c17b23"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "b04bdb35b24e1fb479038de14d4261e8"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "4985710e3c5d37c8fe846ad214c1c65e"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "3db443a8b9d1820312d79264dde71217"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "ccf1e476962add17705472ba0f9ac7a4"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "5f45b4b9e6c3c4f044cd421e94b30023"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "f81b15f7a8d4e476788fb2d45fc11180"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "271c18be7fdb72d4d1801d24cd266889"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "46f2696b8b4a1ecd75205c7b1e9d82ce"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "95659961a4606f2978ced6b78d84687c"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "bdda6c224007f163ddf5684dcd8d9e9d"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "fb2d08e253b8c1eb98653a0161684923"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "859110910f6fb8c250833cd3c610c303"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "25e65c8ab7b5b1c84807f040106efbcb"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "c02f3925b0aa9205631d692d11580dbf"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "0c49e9e53185192974b1863dc466c4b3"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "29db50d14b748d6327a2e8e81ede4ab1"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "c8eb4b9e8e2ba125713c5c8f9a62cf62"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "5af1ea84645449acd1a350256515097b"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "272d3d2dd77f4312fdc44a26002e37c4"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e6a9fc0e73252d76bd21910f440c472a"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "217a0dbebc6e6da14ccc319326b28655"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "418c4adf568e916ee1df09b9c0c5763d"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "95d5010614b049f2897d0fc2de87c50b"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "443dd306bc0c66602c54160463f521ab"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "43cbd495c7b686245b3c3ae4c0ef0628"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "17990b485e095545175cc6d243414686"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "ba3b9f57a1375e47586abfa54f14d9a7"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "60ae0d03744754f122519ca6ffb5f63a"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "fbc620e241d95b944917685bbbc3dbac"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "14c8f314ddff0eb408abb265cc1b5c42"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "65be59858e3d26f331ccecd2a08303b1"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "30851f4b97680300359c3a90ec2733ea"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "38cccf5bf4fac0101e56a0e14c763513"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "493ae6972613f716413c6277002a9b0e"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "aa0bdab51cb05428a8336a2362a8e462"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "b3956a536522d15aeb113d0c328fa62e"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "61a2b6799006bc3842ac6521e8fa7b84"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "ba8cc75bd6bea57ec169b9cd9179fa6a"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "b474a79b04c3ad590e431eba478b253a"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "4d53d67331d6ec43d123f5f3ebb372b9"
  },
  {
    "url": "favorite/index.html",
    "revision": "a30e46b698f526e66fd2a8560d85e29e"
  },
  {
    "url": "index.html",
    "revision": "09fc0caf6ebe892c8e82b05a3e0df773"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "bad3389daa651f3aa1542bc7ba54be88"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "88ec3c43b4bc87cbe3eddb4300db86cd"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "4c81531d19bb68eba7790f621bf174aa"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "52d446cd10b0803d1c83fe29790d6179"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "a066ebe961142825c8f50dba330d231f"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "124344a4491f72fa81bfaa0f1fe5b9c4"
  },
  {
    "url": "note/index.html",
    "revision": "facc3f937f6c6499d13c44f89dee8288"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "7769ea41c41f3528091af040119085a5"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "c81f3f9a0645f985db38dfaf1dcf6cf0"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "fa94482fdd904574a681bcbc95e61542"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "414fac6ae77c072b335054a2223cae24"
  },
  {
    "url": "share/index.html",
    "revision": "92f18eb34583bbebb5f8677692d122ac"
  },
  {
    "url": "single/about_me.html",
    "revision": "94dca11d1c4475964292a7ce55a10fcd"
  },
  {
    "url": "single/all_article.html",
    "revision": "524b3e9afb9bc162a73d83f4e1e70e5d"
  },
  {
    "url": "single/welcome.html",
    "revision": "0c596b302c0df9472e3f2d16d51b3261"
  },
  {
    "url": "test/index.html",
    "revision": "fe7ba8c7841916745d22b2c5e96c81b9"
  },
  {
    "url": "test/test.html",
    "revision": "657ca4413bcb7bbe922385520e19c93b"
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
