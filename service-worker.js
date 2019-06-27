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
    "revision": "a1a2e7d7c37892469b53351d852d632a"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "5b99c4da081810829085e65e7b7a4bc1"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "0a15a3284287a33cf1124d4e45e62f8e"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "b6f91bf2b4a16ce1c0b60346382e1815"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "64a4059f0916c19eb06e273ca3c4a2a6"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "79393353a44b4cb65febb2e0d4717edf"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "0cdcfc54be0dc401fed307c979d86bfd"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "51049eb0800fbcd5b81ba6524248c85d"
  },
  {
    "url": "articles/index.html",
    "revision": "ff8be7455c8b5fc9b57d22a36f7660a5"
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
    "url": "assets/js/1.24740520.js",
    "revision": "3d4bb4bb9fdfa7e551bc869e0b1485f9"
  },
  {
    "url": "assets/js/10.2d7ffad4.js",
    "revision": "f60f4cdf341cb23b4fdb1684f42eaa69"
  },
  {
    "url": "assets/js/11.5b3d4a5b.js",
    "revision": "14544aa418567cb553160a9d4a68a78d"
  },
  {
    "url": "assets/js/12.f56e5f65.js",
    "revision": "64bd2db679a1b4abc86589bd0484a6e8"
  },
  {
    "url": "assets/js/13.9378bf6c.js",
    "revision": "7cdf39e93e2422baa577a7385a00f879"
  },
  {
    "url": "assets/js/14.0a844dc6.js",
    "revision": "ea2b8621e24907f14f438a319ac062fd"
  },
  {
    "url": "assets/js/15.87758b17.js",
    "revision": "304a60804f7830406b4624b2e2638cbb"
  },
  {
    "url": "assets/js/2.2c9ffbff.js",
    "revision": "fd000701720c539f3344b58134096443"
  },
  {
    "url": "assets/js/5.6c11c6ba.js",
    "revision": "017be6b8501f2fb3d1b57e7fe17d687a"
  },
  {
    "url": "assets/js/6.495fb738.js",
    "revision": "60b5903cce5980f4a6693f9e4d11351a"
  },
  {
    "url": "assets/js/7.34dd23ee.js",
    "revision": "4643d7662653b571e5268f0eeb08e37b"
  },
  {
    "url": "assets/js/8.2690e737.js",
    "revision": "d7420da3f17dc607cb16715bc255f15b"
  },
  {
    "url": "assets/js/9.316c4e53.js",
    "revision": "c2076eb2155f15f6c556e54c7099c136"
  },
  {
    "url": "assets/js/vendors~docsearch.cba3b364.js",
    "revision": "9e3e6db7222a781f34e3cb84c3061569"
  },
  {
    "url": "blog/index.html",
    "revision": "89347bca063a830078476c4d2ec59794"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "cc35a12b1d83d5e2646630dae2a7e8d2"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "93df26ed93ad4d71d54d998e7f0839bf"
  },
  {
    "url": "books/index.html",
    "revision": "bd063c06cdf87d23a4833878bc2c7e6d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "602dd97bf43302868064defa316f3d6d"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "4b2dc757b88ae7594852bf8a1bedfa08"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "95663fc8d93eb7e6dbb8774e27893f7a"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "15db39b035e68bd199835db9b9ee257d"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "e09d4b6f81caf369cc030be0981e9dfc"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "f3e2b68610706c20ddb4ef8dc932b735"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "6cc6dc5ac969edbeb403b05508838b33"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "7e7a6d286d0aa4f9494ad2103035f6bf"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "55681c234753d4c8aa6b371eee5dd038"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "5b488f535ad71c2b84b2443fb204adbd"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "bbe1c9d32cdac9affd7f06cad6a4302e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "3b30f97eb0baf4930de9ae3242b0e945"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "dd89fdb6771220fa093a7f08f5baa254"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "16a991033688da1f7a8c10e236a9cccd"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "621f267b61d075a90ef4e21449dd19ba"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "eda45b53d57daf97063fabce1089ecb7"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "9ce5c81d372d16af668d4bf17a9297a4"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "882ff7dcc8c2ba1d208ae01df51e58f1"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "2053dc35326a61da80a7cefc5ed0dbf0"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "46a7be86a40a3ef3e88992e0849153de"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "7a6bf545b05f5aa4fcea316d6fcfc172"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "38e8a54ea465a662d3783f5b1f461df9"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "4e13478cdc5d3f3344502bae7bc1f312"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "cbfd5970e8752b33058b8b6b593b7603"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "f8ceb25f031de1db237bf1f24aacb78a"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "60ae8a61b3da57bcad777316f6ab1001"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "a32eedb46e6d44baeaca902b640d535a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "94736c1a27190862b99d20f36054c6ac"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "514246215ba9e569f40a2b43a14dabc2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "21c19d0aef58779ec71a76d6e53313bf"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "2f1a6889ac63ff8ca8a19e6db79dc4b4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "4eea04e751978c26dad88df56b5f225f"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "6785b767d9995dd08382d62ff3128a90"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "5e30ac345c56206d96a8191eea88681a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "5213c5b84cd762d005e3ad8f7603276a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "9e07d671112dcc52d766bf4664e569b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "114619fc405dea69f2c7251c05a4228b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "49c24f8c055ccc4463bc9f76ca4bd925"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "63677cda8b4cda2b0dd6008822fb279f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "b7ecd31de565344d19b333efb7aa1298"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "d84b84d3b75a825d6e864160ade81f2d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "d1a5214b775623ced1b51e4c5ff4b33f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "54e3d7185180885cf19e427a370b10e0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "f1c3667f1bc916484f89a9c1e3a4ef13"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "b057ee8449c76a483fad28bf3d40d342"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4dc9a9b2252ddae324248ab2fb24aa2f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "e2ac41460ccb1d9129d62d9b4ee68453"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "365d9c65fcc306c125b2fbed6b507393"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "be09ac5e8e7bec3e315d7c2891cf78f9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "01b8a89fe188935575d952af4952511d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "cd34faedc9930e76413d8a2c6226229e"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "093c51c0284a795ec26358d4de0cd31f"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "0a9edb2e8171ba38ff3413c93dacdbf6"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "84c301e1fe2f053725a7a4a06e05703f"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "3301a6593e3d56cc19725a4b8bcafed2"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "49e56121181d61531cdb2f3399fb063a"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b9550328bf9b2a91efe73654c01afddd"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "cf0fa848e2d54679aaad133a3745a7e3"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "5ab1c4b6717069a3b56cd5047c4e5b4c"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "e9d2b90465926d700e712edde69e1ccc"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "3370c62631076c35090cfd7af4b14a84"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "647fdaec41ff7480cae50f359101fdd2"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "253372b5ec9159bbc047a4a2d6abc662"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "90967538a20b456fa36b3c33a7dbcb40"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "d5a7d5e680da496edb5502c492a310b4"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "7a2bc804d7d7c36598ec36f18c782a6a"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "886dfedc4c0aa5fcee703e0106a84329"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "cf9981a618af80423af35d43496304cf"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0773ad16d25412fe4501de533db7c2e3"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "43a1140272ed52a39a04c5d301fbea95"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "7fc56c8ca0bfd7374f1a97bca1d9baff"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "1e6d28e89b0d7a029fab2708644a8e8c"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "885bdec38e305ad96784e276de4c573b"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "8e03dfd995d20f3c9dcdc7e7d43d5423"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "d4722012ef35dd3cf78776e311529fbb"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "465082ff026f461716342b4d3b485868"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "8c75eb8848503a88da8718250b5fbed2"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "77be0408ff1ee6577606bdd45b833e27"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "331254357017e6d7c7f48cd87f40548c"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "2af93402bb1cba21b47a620504550b16"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "3a74bdb9f13d9590c854d7e08402e0a1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "68fc0f18764ced858c14b8d6f80fc3d7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "8c2b00402ef4123a8698ee16dce3f47f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "234ff6d31407d091512057efb61e4566"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "0079ef6ffb36d642861b70229c9ea29f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "9188ce7dac7f37d884de00d3f3620e33"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "8d1a4f4929408a31652249e80b8a7a63"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "6259409713d0e3bcea307901bce59d9d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "d65bae02c08329be6dee98e46c98c335"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "a378877bdbc7ad405115f92da8eb5cd4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "ddac4adf95c61e6486aab8d6ff22aaac"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "54db8954c953baaeb50ca34b9d487be9"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "568d0406ed700f3990c5647a4d35715f"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "8a872bb06caf3c247e56732d03febb9e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "f6f505b93cc71d374716d8181f6eb581"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "3c81c8f31051bf6188cf64b1d8188dab"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "2c2e2f7d4439a852b2cadbf1c487f182"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d6b780ce90c5af8a044f87ae62a8801b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "bcaa294c6337d85806fcf6dfac3be6c0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "201d2c490584222c17ce8bacbce9e692"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "7b59e74b6e1a243002010f8bd4a2a3a0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "d7e341d55c3df516ba68604ae87e1a7c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "e0a080af0873258258d17adecc5e504d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "e2c889f6d238003c1b4ebd51abec2495"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "7b6ffbe842f6a70fb7ff3129fb56bdcc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "7775df4b60ba19c490e8175f5299c8f6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "3181c979276bde7dbc829263129c6936"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "5feb3d8ff293e28bcda888793fcea6a3"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "e0582f9c7988837130f41bafd9e5fc8f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "84634adb81925b001b94a18edeb4d1aa"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "cdb3b968b5be03ba4683964c473ffd82"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "4aa249af95eaf88abde750689b06d4bb"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "e1d57e1db3107ff086a77a50fd4b8b33"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "b262c68875bdc388f16650ac9908bf22"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "d4e0a118df2bf179971fb4ae7de9e622"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "dc7f380f7ec8d186f259fde6ee611419"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "6351a6098c272e7835324d65b8e8557d"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "f6cacd986eb094a5061bfed4e2343289"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "97cd3b3381127ff77753f4fba4e3da9d"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "b86c892d1c7ecd6e078c2a60174ea856"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "50236b207590818fc1114729b3364d4d"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "493186196a4f68c8aa441ff9fd0637c4"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "0ac001f24ee8fb9ab0842b6fe43b70b4"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "d2ffa393af815d24202db77e8cfa0c30"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "16e312d2937eebe0500ab446546cc40e"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "f1e1f486b7109ba05ce982f3edfff78e"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "ed7eaf29d1f92ee4353094610fac16d3"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "aa4af9795e7eb76fbb86a014925d85de"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "01036bca799fd8263bd1488e3bec8976"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "73f19fa0c54e62a95b4efa83aeb140d6"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "ba38df2946c8d82478fcf242586de1b8"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "7d3f6db588a560940ac2d67f9262257b"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "05095204c692d52d149127079a83a9ad"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "0961c6f8b98fbf28aac552fc1d787914"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "a9e97442308138edf86370a2c7080ee5"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "353cdf87b172edaf0492467b8627b455"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "1a7191dbed77c548c3675ede3e79ab7b"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "01b283d6d566484b47d20a5522ea2688"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "f2344028efcbee3713267865edc2abec"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "075fd4ef7c4c0f024b4307e93d39292e"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "5413097fc8db0c8fce651804bd95cc1a"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "cee725b691aba90b35edd161623cfdde"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "37ee70eae61986bc4b74c7dd7f6ad7e0"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "08119088a24a8272726877cd2d572c5c"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "65b9999ba4c042553f410d656f2272a7"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "2cdd6dcee82a46d083de047aa2b1f771"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "2920f4b4eeb351664bc497f7d63cd525"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "0dbb95bc8c83b42ca2e0d9370418a313"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "177ec801748ec5a3f2cce744f385ee8e"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "03510d138209104f2a45317fbce0e9bb"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "dec2666fbfd88c5ebd7f90f8ac0c8ee4"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "ab08ace362ccfcb592ab853ba1735aef"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "d3152999fe1845c2a2c3916f0fd97b0d"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "049bbc8d938ed40683b342c25a783d3b"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "0325472d1b3d3d80745387db718a47ea"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "40ea214479bb34005398944f177f270b"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "c7c3a884a97935c088abbb9846fe774c"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "7c239acd13ee6d83378d24f135d1ae0b"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "4f70a2e149af1d762f01273c4b7d2d1a"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "6abbf644c7f70fda8e3c3145c3e404e3"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "5e3f6afc7431f190e5d042c0274d1926"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "7686c8a7483ee05cf8e256d14a16058e"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "701d06cff1a6763f40fbd314c44d19f1"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "61abe5e9a1ce72d2cd8b6f7e4971715c"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "a88448d02a66ce98c101b20c8260e9a9"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "6cbc65dbbaa70cafa32f731571cf2806"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "7b14630e3882fcdfc8c6b6623e2d30e3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "6cd92d31186244ab6d135ddd905b3ae0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "bb54fa8f178e4ee5020d41ceb5918968"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "c669605620bd9b862ec5b65f2467abe3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "f294d99cbbd8fca5479d67467c5a72ec"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "351559e900d81f774ba03f3cd67f9e96"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "9832dc6f4d3a98d213edaad31583dc29"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "3d2a04dd29db9c8dfc88ef703f0c8d78"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "f887433562a8a3a3e330cdaf6789168e"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "6c97b07118b274daddb239346cfed87d"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "fa983e5c1dde624188d5727d872ad3f4"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "ea210d26694351cfe1c9565451376f41"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "1c511279a6d7388d4b3e3d24c60ca042"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "ff38228c7cddd0898348b6547adf6c3c"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "74e273edd7ddc4d75234efdebb881c3e"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "2bd04ebbac427eb80f02537306d54315"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "f101d37c57c895de2744d9dd97c509be"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3f2d78602465dd3137daff1986d6076f"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "d98a9abedad832a41901c2a8e0f973a1"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "343db77737d92bf47954db0abb95344b"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "1247dee931256030be2347c5304bf953"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "77e40a6386ec86f44d26b35a1b104ec0"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "3089ca4030385aa07ff3a09340023d15"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "825cf09cd324acc19745e45fd20fb245"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "d04698845de21faac48ef0ef0e151d92"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "058d324d7e12304edd9defd97c0796b8"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "86cfa681f39b1f94083ec8d891d21173"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "68d6a95d27a6afb3a673d0012bea4f36"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "6758a13ee5f0448b728aa5ae9f73007d"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "270d34d0b624b5a1755f3a3d3fc9fd95"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "5698aabf065442f62e961e3782e7b644"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "aef8d61f12fea7960d9eece6d5e26073"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "615cd990fd73a4a641906fb616044c77"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "39927c96396020baebbb0dd5b9508ce6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "dd3f3400214b58fc661fee3586a8bda0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "e0cb714f6a8e64a96f99119ef03de2f0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "ee91200af85fe8688fc10f83450b7c58"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "88d581f0456f4fb4049296ab046116dd"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "32794e9f2f3ccd93d2df60d9886b4fa9"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "382eefb48f15761ba98e11b17839601e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "9e99445a02ff01fa8bd624fdff16087d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "ee6468de858aa81e97d560fab1c2a6f5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "118e8f5bf0d047500e9245adba81bae4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "7ab10b01e316b04dbd31aeb9a7d25f84"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "23e803275bda4f3421357fc74f41f9ed"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "4fb93c6338317c03ce9dcc801d5567f7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "ae2804417eeab7da5265a4a3f22c4133"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "285decc947c07f089a401f2b67d90958"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "399c7ac91e9af5ae2682508d4279c17c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "42cbd1f451a7910aedaf76d9d5421c4f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "8b76f347517a952d93e1f03cb297d0d5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "9758b9d71db589e57c69adae236505b1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "6baa1f1f52a560d5905557770740b94f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "6cd7b605c88e673c357d1f56e3dacf52"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "acbeb1750ef1aa5756026ea79eae470a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "a2a8e0acb8282c7771eebc3d97629b3d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "858e46dd33d523eea8d5ae8565d7dae7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "25e00ec78eaeb2815a954063382fb916"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "d84bdf72c6b163c9bfc9c384a2441377"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "866cb764ea5844a3308b00824304b1ca"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "59beb4e1f7b3d08694479679c5f06bea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "3acaa2b96c0dc9bd92c92f59a4a03a50"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "102f67beddeaa020e791a32af3abcb4d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "980960e89039123f0d901f96bc7ce143"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "edbe8a81c1c9e9fe773768afe79849f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "869cde581e0ce5f20492adb1e7218de3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "b99cd3c612a83f35a2f4139872629faa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "e255d9c9aaf454065bc540dd54d8a2ff"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "bc8ca5dfdbb7eff27bd750766a2a226f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "7fe6eac591c1f62afdb6fd307d46038d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "56756e227b7d34830a32a049f2f83c47"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "957a4d990ce587e7838cdca4f17acd27"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "d3fd098ee392b4178e4989047f4314b3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "afa89ef8d1d2bcdb8859363ef49e0b31"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "fdb67ad5519e5a9e84317fb04eadf048"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "85ff97d89c4c2d7236918e2df34da16b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "636a0da2d9ebbd78a43ef1ee20dabd20"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "db2e83bbfb8c386804034c06ead77e47"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "bd0b7f071722261639f1f8617fd32dfc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "91890311a5d9620e32079694eeb34e0c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "5e827efe81cf420a9da4da0dd4cbda13"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "8cfd371ebe313f81fccf786db0978977"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "7cd52df92c35803720b89c8e61eea090"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "52df1d76238e55209417f74514910f63"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "6a01b18dabafe19fc504c2a90ea58fc9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "4cb12a0400205f15ef16997f5eb17562"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "5af3581f73a1135e138e56bc274c2ac4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "a566cd77582df37b2b1b7fb753d46500"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "d7a151596e03415134a2ccf0ad582929"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "ade07954a69c019cd9ec4fe261a8e920"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "ab4beb9f379a9017ab5cba3ae33d9d8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "14b9d3570434f86e9fa911c3196cc732"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "ba6c894d7afef06741d554de33400834"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "5c95ce5bbb30f5995b4f07931ed51b7f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "b741cf749be25d075cda77ac89c7a2d6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "13e79d8cac9e020379148392b1bdb272"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "429f2ca589ccdfd2b5c41aee5f156226"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "2dfaf3b49368571aee95d61252f1cc64"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "84b1794f40475b9dca867954e4793674"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "7d41efb1eafbc457fcab3e314fd68789"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "8e905940a6910cc54869ccadadd682d7"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c34d309fb9102259cbd32e3e9c6808cf"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "a81fc3cacdc99d7d03657832e8955095"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "0812fb04237bcf4c70f337cf2e5f27ff"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "16fbcd86daf5fd0ce0b62d3eb9d336ef"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "e4bb1f15322b6d3b8d6b6bee816ec169"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "8819b440e19ec01e6140dd53c32d06de"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "ee006a9b352879e74e8cb66fae13f033"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "f88fbe06a0f130f4eb8e37ce4fa51c76"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7b6e06e2761b63caa6aca6e38b5dd9b2"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "a032a131a456464636a0a5f3a61ba3b1"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "45e73fb10df276c7849d00a72b133162"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "cfcff09e0698a66be29b56a293b15fe5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "b019d0f544fac43c950e728e0e1817d9"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "d42de5315576ed2168d02cac99964bff"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "953e95b2ac2c45a1c89ca44350671307"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "8805831297078f839b5f48130852570f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "8cab948b650a390b0d696e67f3ec47df"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "2b5c3e80d8868100ffb9377142fbd199"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "cd15ac11748f0ff95b47aa196059c456"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "67c30d85756ebb2dc49f804c4159bc4d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "88105de6f4172804358cd6aa34ec49e6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "e3b1a2d2b718cf7502843d01b97ce04e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "03cfc78dffbc7b6eac10f2bfbaefe738"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "0d6014eb27a5a4c8eefd574cce033f16"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "09d6da2e03182306a87b847c39966662"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "9200184cbc117c6228a67192d364b8ca"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "089c3bdbab9c741d3cc278e9655731a2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "d9eaab2afaa08161ff1d5b97e40f26c3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "2bad527782142e79fcfc80a68bafc23c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "ba1e51cab52719ef86e5f5f833d0533f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "d9955d8c66ee385074d04865b170ee64"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "1c85dc9c806122f283e7359dc6696ef4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "cdce0ce61a3b3e0ecb0628d10dba90f2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "ffbdf73848e3da28c87379ced51ff9be"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "3418fd72ea6a3c61ce801fb1cb10b6ff"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "f84dfad1c3a1ad688eaaad2be5757d3a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "2d38ac1e79cb86df650e1e54bd0b5ce2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "1d13d02c5b80768083c96bd98021cce0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "628a8841fd35355a446f0388c438c13b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "286edad2e8b9326637a8b0707dfae8e5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "320dedb049bb621538b1792b748dc4b6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "f94258985a6f43417bc6480854417e32"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "16bb22712957963d330e68522c6af8b6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "0b2aad3599b388ba2a8c19ab4e58b9cf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "3b18a5b059bff3d65b0738dd1f60ffb8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "4c649784f69a136f2ee6f9a0c7ff462b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "0de02f1b30f37c920b0c71d42f09fbdd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "1eac585a483430e85cbb7a0057195e69"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "9d299dda7806dd0800dc14170bf0fe0e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "72ed069a8af6d65f771868243335b770"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "7c3b36601a86f4da0dd06d2adde58ba3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "0548017d3ae95f95efc97052d04fe85a"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "b507effa9fbd2c17e38fc487c2e0bc52"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "56eb06d9fefd6a2a4a9783bffdb9982e"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "817423c83a27940dc3a1262c48d45fd4"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "e4d51bd3cdc56cfbf03505877a485a55"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "2e7331f152dc0766613e831993ef07ca"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "9bc3665e94eb4ed804ce84cb0e517807"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "c4199360627f1072f10eef665c4fd8ae"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "d53c748bb04170d4d861704a1a19553f"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "e9fe0ca69f6d5dfc2184a05675a8fac0"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "800ac69a862205d47e3ef4a429fa91ee"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "01c9ad88b228a5d1c8067fe80076beb5"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "4c434f07dd115cf2d02da6de28779a59"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "ed2825a05dbce441b658e4ce2fc2ca5c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "0c47693ec83fab83fa649c73e44502cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "7df7bccd8e2c0f7adec134b9c97c6ffd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "66b866646b774c10fb6474d4c26ffd37"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "35d202fbc39bbb7f80f924739b144b5e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "2902232e250a709b1cf176bb8eaab3cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "46035b18c9e51d3f22afe12cc176ee12"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "4dedf9a97e8827dceb1aac3586687da3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "84c155ee7bcf43bf5d2d635b4d097018"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "338c78303399a35eb5be0abaea4014b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "00e5051877fc3559ad2ec0590f47adae"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "02dbed28fac825ca890bb75a74b0b5e1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "2b660fda040c1c21a8715aaf3e5ad62d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "fa6717dfe7d1f896cb9d6b363af63298"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "e04f37440083df447aca78aab12156e5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "58195decee9873e2a793075af08e2479"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "3ade67550734d5267d0aa78f3bb1b6ed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "0eb7853bd396bd5883a5315c5f675a2b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "80da113154bac6da844c1972b0beddc5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "6c7a1cf33421258d2430471599da7d38"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "4c12fc8a3f8e0620964b8479878f5ba4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "783c2dff86ab091700c4126ad305c76e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "afa7b669fd17ecd48de8b48b529418c7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "227f95c878e6abecc2713d137672528b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "7f0b25508ada20e7c23aefdaf0cf447a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "0565f9f011408d114ec1d7e7fa01fd49"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "8e4e3785db4ac02a153d86e898053dc1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "b54f95ecd22b4ae3bff678fb7b715f7a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "2f4ce9d64019e787686bc9e253e432b5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "9d68cb09118764e08afc8604158d361a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "2a6382cb7a468b328f1bedbb05eb892e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "7608141b97834ba9690efdac6e858fd7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "21fded74d0c75049bff1bff27b11aaf5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "96cc88eb0e763cc918a04e9ebc7ec5b8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "0ee4d527d70d5ce95babfe727c604e5c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "854d03ab06fee70849efb471a2b7f9e7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "82f0a1abc71715f6cc82863da1dd5c55"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "6a19256c5235d5f4b649ee17c4255bb5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "20ab242ab9a5613c8fd8fa549f069071"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "8a31d72f007f48be17ced015a6e66f1d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "fc95ab8c551fae9edbb06ed6a3a600d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "5a18bad812da1250ce56ea87f8ec8ae2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "0d6680fdafe868a27c0c093b387e2d65"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "b5aa86802a5f51bec469902c48ae0690"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "6289d3a8f4d6b36e5b956a7d525d8a56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "041e3ba5e8519c77b56efd20e1b7c7eb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "a50ee5d574a0eddc882e77c9e5e4a979"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "c1d0c5e08d088534e95035d1bd82906f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "777e3c7eef1a6f4522383ce816c9279c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "fb17ef86c00875680382489ab42ad76a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "29c0e02ad54b79803fa225a64b55e15f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "a4e251ed2c78c3013f99acc63c8b1e79"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "558ed2609f9ad8350f2af54ef5cfe306"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "6fe4452b3586a6a7ae651387675b5779"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "d0939d458babf1e40f9c1a73b5ab443e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "87576c05b6e86c059db0dc2964d60fd3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "8cc1b3f3e40438d8cc8f8620cd712402"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "38ddb954db71165579f2a891c83d1015"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "2023ea2abea73e480ce8feab9b14aa6a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "35d14f447d98d2cba61805e3212f936e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "f41447f4c53bb9fc992cbb896e0aaf30"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "443e75cba9ea75d64f7cc099fc32822f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "bca756fdd0a6e2ce1a60209ba62f164a"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "3439b1c425cf0b42764136c4fb2f6389"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "d4b77025889d4a9fc294cd72ad53848e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "b9e4b92f389a36a7ef6f5136f5d5e7c7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "317727bb147194d50241c7ac6254f447"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d0bb7ef2d0fff989d84814a32aa7ea62"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "b373faa3c21f809ecefc8d5638eac344"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "08e33acd1d780ed6dae4b62370d558c1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "8eb503eae2e4971c44f52603fe71c356"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "2b14d345791f90088447c9af2af93a02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "5d4121ce73f40f1de0a436f486d74143"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "a9c873359a1713bad2fbe03919ebcb0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "4f6dda930203b945f8e0d777219ce432"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "f627fbde0d5bc087bd0ba05049c0c2f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "effd024ffbaca1b0200244254277dbb0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "8db0e2f487510e7c1fa27f277129177a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "bfa02673d4c6d3606041376bcadd9a34"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "47bdeb2fffeda594b705d4d37bc767dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "c5d68ffb2542ba12e64b4af00110603b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "b708a36a33f86bbe46bd04c31e0e970e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "bc1e97c0cdf28e05320b30d0132ac650"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "567f2a624493e1908628ebed0026b99e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "7d63d18c3f5428099cc3705b49591b8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "5f91bee2b7568081e0f4c7a655515d7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "100aace0ae86151ab79de23b43b74b6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "cd64573b5e99d4cc44aaf7e22f53f4e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "908bc5649deda0d579089146806e007f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "ed2b98f01b499f4fd0a77271f335502e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "07587aea26bc966cc04739cc03ef0e3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "0d130127277206654d7c9e1872a0aa5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "981b1ea1bd1e5ca6b82f45124ddeed13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "4fd316c87991f181534df6511e1e6e33"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "b7220f1380b74b306d8dc0926bb9684d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "fb203178cad77ad6af51b263bf9b9ba9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "76bbb78f49b6a538884d8f6079a8889f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "26dfccb11ec9069a45b0157a640ff102"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "4921ce3bf44f6a41aaf48a901b5f294a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "dbd33b4ed3382e9bf09b9c685ace4a0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "7206604a367577608da6481444413168"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "20dd00d6a551d568a7fe13d6a956f2e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "f0d8fb0948c451ae2270b3a139e96573"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "3c0ecebd905942a3967f4ada1db3fefb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "5795bd4b3e386f506aa7c7287c51d26e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "b0a88eb15319d92967cce1a6b7de7c16"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "bd4ca508bb36059e43ae90ebdb4a1a11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "9233db03a5524030fbb66c38e15dc484"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "d3fbd3937dc57a7ffca2961c56457abe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "223dda2ecab7c5daa4225a78bc1f832e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "13dec03a1f02fab5ad9dd3830afbfa2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "fe5488c8a31c24d14778c0b45a14aed4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "27e8a66b5aa3be18b5cb9f42b69188b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "6e43232ffe0475b5ae55d84a3426324f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "8698846686dd6d6501564f36c283bc74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "4f5c88f421d5f5ce0a00166c703afa91"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "57ef5282b9f2baf64373932d00f7a69c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "7ed35b24d9af6ca72ca079c61803b6aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "433218df194a02fda50ff9da7365718b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "e60d250020e9cf96609e64df44468059"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "cec272186ebc88a53d67cf27c91a5e7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "462c8209c80f1f850fe64aefc18bdf2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "57b469418c23682a3fde9c6631520cb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "1424266f430aea8fd9f4a034cacb1d28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "d1d6dfcd81140a2621ca21a0ea8d8f32"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "5d4162645f678cf898e7fd3884081885"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "b0840f8d2f2232bb61919590b6f9c6a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "0f632659208bd28b9f38b1cb0a15bfdb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "2faae179c2de4073b55ae106b8e6c72e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "92e9e0f48bbf6a3cd7676e819a92b828"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "69befa3caffeac1dab74a77dafc69442"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "89b7c9514298a3610e1bf13513715eef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "69c93aea17efca68deb56d25d8586562"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "1de5c3078d70e0f42289c383b350ca2b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "09382a2385008535cb8bed08188d17d1"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "62bfdcb15c40a9b8a7bb0a28800b45df"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "b9849b61f413a4d3b7ae205c38e84dc4"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "1d99bb5b89d6afd4586b3089cbbb6e96"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "3c62e61e4f05fd0323d8ba2dcd7858df"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "0cb2b5b940a0d4bcc75ee5a4a302c9ad"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "fd42aca20d7365ccda05debd497cfc2b"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "0226f1b9bdc3954589fb2d59a01439d6"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "e1d6362a79eeafbe890bd7caf28615f8"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "806bff8ddff40eff0eaa72bc19b49fe9"
  },
  {
    "url": "categories/index.html",
    "revision": "a0c60bc36605c46867b8e213ea3a52ef"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "bd3e787e84e25545288b8805eec1797d"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "98560acb10a1fbfa2fe53ad39a73d0b0"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "c8307b52987b35704361c4674d9fc287"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "56094b786c49db15ff948438b6a135ac"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "c1fac4580492da0d53f3651c0b19e1f1"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "699fb378da8780795120baa7310a3e24"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "ba49ddb987914aec6e3ac2a44872b3df"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "ac731365c150e2a1f2b94eeca2122b81"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "9d111af6c543d5a583350fce170018d8"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "b47fdad1d3707ba0e09fd6dea0537fa5"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "88ee8c9ad6d3af2e81b57382376e120c"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "fe27e27a850efbe7118e62b98718b44e"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "54f5f80cb49c7eb3bfa07e3d692a46ef"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "1e3102a86d2b317a2c1bbf5945a26ae8"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "1794c4feaa6d0099a8f23723ccfb6f5d"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "58a03681a0129647f54bf6d2ff81dab1"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "3b27b644a2a9a0056113ea0cea36c2d2"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "e52f04c138a6e6a9fd644a6e1f3959fc"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "80cfdf3caa3dc9f280475ecb3d3dcac5"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "144d692e875f002663c5badc96f4a0a3"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "2bc8fa65269fe4f635a4e4ec9e71e6cb"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "75093b3be66e29e3ced1150799b18d93"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "dac761898cb83e163b666ed6e8df18c5"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "2e07dca6c65bfb5d751ee1717a7ccba1"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "1f25b74ad2f7dde3cb42707f7f512cbb"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "692300da11bc395202ed858f55047859"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "923b2d928524a19e089c3b1365cd314a"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "9194bd0a5404be64379c4c2bf46e1e37"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "e21277f322b61437c40d7feef85bff25"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "841a8a3a70a41ce8352c14613574be38"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "e52290a8587d2525e739c824fe2b9816"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "1f39cc8857cd6e2a5ed6e8aa8b147ab5"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "5c405a10b135ee68729d7af9e9a5ba53"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "e15c32d9027855dd3895432c28da0d5d"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "4a525dca5abcd3c37798e75185b8f12f"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "e7519864230edc3c92d169c0a56e8476"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "0e99fd5502f19cb9ae4c2e96c934afc2"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "9f2c68c904793012d1893ab480a213b6"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "dbed29f2d62f2aa56315a4aa73c8b652"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "afcd37bc3d6019c2811ddbd1cce2ecf8"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "87b54bb6913fa51cf913611f20ecdaf7"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "bca1ae807da6f4e7446a1fd150de2092"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "955ded230e58e56158c071ecf1812ff3"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "31ddd31a64b12d51b722314fff057135"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "702fee42378bf3f3150fb97f2e7da953"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "9ed9c094143b1d8b7eaf21323262ef31"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "7405c4e8017ba2224ae0e9d8c1432482"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "2021deb7c54f95d712584fe91bb9e02e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "ee5f3f09683440d4a433a06e230340b1"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "a0bb007aad13126e506679c420b7d900"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "2d8cf4623bad96f1616c5bd3307b959f"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "697e682360a6940d652e3ca83726299c"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "f3ff43ec34d2c1ee4d4a38ec723a771b"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "a4652170274f3c62aeeac3cd81777369"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "116f1e3c7cb23a6deb4c61688fd8070d"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "0d205949bccca20333c9858412424333"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "1e4ed42148aadb41cdfd2e6eb1458c6e"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "7f0367416ebec1edfec79095ec6ce7f5"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "3d97e1ef5d89fc2adf0bf536ff175f3a"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "b50c6d942b8edf9c0417428180076f8a"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "a248a54d33117b6d860795302192f10d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "c5cd44fd7285b99786aa82bc0f89bd22"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "4291f5d1cccb7a2ca4cc93b9f97a2bce"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "ba86e79f31fa444f4f315f0c68ad95d7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "24d9c76fa658bc40794b69df5cb86bf7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "0402f52a2101439acad97bc5e17506c2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "bd728538f1d024b56e0120ed5aefb94e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "d35ff80765df5f9525a2c525de860640"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "6c751ce1cb51b24704948031bcc378d9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "946971ab5618dbbdc81e5cf656a92a8a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "42557b34c3ff325ba23a955ad2f92174"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "259f9a53ccf08dc6523a435c62839eec"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "8563b983df17b74a52ae2332cd2b933b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "66fdc01377d414c40c89f00692ff742a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "f59152e2f634d40179e2c4003475733c"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "4e0df477456ab3eed8bb548910f23ae7"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "129bf260f5f42b66334e8292eee515e7"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "f7ead2c53ab309edcc33d66ac54f8027"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "06f1c47c48a9fc1cda293b4dfc9d0c6a"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "7d0233d5d0729945563f11b3787f934b"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "f0463531aa660d9cb91da2ba97f440aa"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "730beaa47d143e35b3e74b2529e0686d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "8954365d2acc753a2fc4330f7ac3714c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "7172f2b1b86fb2ab761079a39c9e2a98"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "ea54be9dc24e8083cb3879b2209c2cd1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "548a39c560b66b663cf4e091a069557c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "1a91cc42c37da60ced88e3675851902c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "2384e2676fa75e24f3cfe00ed3fc5760"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "31a89f6c9eccefd4b3fbf5b081e3cdaf"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "bd275145bda01e23a20d36c8d07ff6ad"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "7e7eb9574a004f9de17a382b96b9390d"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "0e8f350b811bd6342f5a17252814b827"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "cd7923ffd783007bb720e9c5ffcf1c75"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "6d0430551dd5b70589323fecb38f20b5"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "d1a7629f0b842bd2e852c8c50d29b97a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4cd592b198677d492f8c643e16196485"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "6dc13e5cd1e48d3608bcec5f824a1642"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "2e60a16339040804ba51237fd8895ecd"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "59867a3cfed7025cf22f11edec36d726"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "bd0775c4f9d55f0e20d198fe23ac5230"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "86c0a5c1b417b740e2847c331f7c37aa"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "ac2e3c289164cfac75d8c3aab7e0f4af"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "1eb2e125af7337a39323a5f86620f05f"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "9a5834d44a13de82c0149dc89886552d"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "c59a2506f6dc0cd40b477f2372a21c11"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "90d8dd36d2fc79282121041ade54d774"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "58d87eafbd2de89f6626175efc77a3c7"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "062663a7729673229d21114e09f8b078"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "3a997d2e894e8038205e59143c26f9f7"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "c8483fb4842ba21cf5197bcf1abcd43a"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "9b0011af6e61664b951ddbbf3d3952db"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "4df8c664dc2c8ab4d9da4eafe110b6c0"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "7f7f00d7b969620eee794c5388465fe8"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "cf6aa2bf4842d4f752d956b426f34099"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "56599dc7c749d68fd900f055b160b796"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "5af195b70bbccee773707474d41633e5"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "7334cef24da9d3e44dae10bba676912a"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "241b5bbe250e7b295eacf281287e4bb2"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "b0a00edd9483251c84223257c4ca349c"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "a0f179d4a5e6e6b482afd971e5f7a705"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "84bcd7292392bd7aa14004481f14c126"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "e9679dfea968a7a9b32955580ef2a8c4"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "40c79e0bdc98ea5f01ed8e483d63f658"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "4c12463fb8307c76a89d4a0c1bb6184d"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "52c4132ff315823068dd9fbafe801126"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "84fdde20fb4f329a9104a72eed220167"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "cf14f7460772325dd4357ccd600e3a90"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "9587138a1a7b9ed10f602048f5027edb"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "218673be4dea981e6a0fbc59cf595106"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "32b03abc2aee2c116f9a66e8ca951499"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "b5b172ceae4824876afcdaa0856cc2ef"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "ec31345184c73c8cd4b8cfe779c4acd7"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "d88d8606e2ec1e92ad12c337687496d4"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "e5042914a93b51eeff16fe8da138ffc1"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "dc5cfd30d461a86edc46e8fae7d8655d"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "ea1e7c66a127368b37e9279a465c324d"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "4cca75366988e4bbb2436dc7ba58c863"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "afd951e1634ede1fba168200bcb1b401"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "77e9a7cd6aec139908fbae406b159fed"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "436cc61270f9af0693fef43834351384"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "494c967f58b8b314b2ebbc32fba65ad0"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "67bcf16d6d60bef0d00bee76cfad5c87"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "4501655cfd2739eaafb9cd66d0c23429"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "7958e3bf057d4fa95917d064b4a9c2fd"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "6bbd3e83f02b75e58440ac03a4639959"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "1b986b287b92cd8477867f706d78c0ee"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "33e53b6f121a568299c074114766f226"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "1317033c489f4085a0a71e79a520db24"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "265347814914f9e841fec43f4e7a1842"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "af965372c2b3a51cfdaf517bb8c0f30d"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "aecc38fd94aee15d86f7380dcb3407ab"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "15557b90ed51457923b71c5bb71b9231"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "cc9eb360731fedf3947c1d1b01d89cfe"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "68064f6442684e86b0caeb3709e1f182"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "97e14f9fdf60f0734309008e92096732"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "2ad6b83caefb9d4dfc7c444c3fd51f96"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "1b76d470196b26d5829cfc72ffa0a422"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "b003deec271422ab42824e8229cb1d72"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "6885b9065f214729a1f5d1ec4470c4b7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "c36ff2eb6038d96d674bc9da57068a2a"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "23e4e804267e74071807fe3ae2ade5c9"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "9945f04b1d28cfe87fc3afa880d049c3"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "d825cc059b830fa4e295a23eb89f5ac6"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "5e84033a28cdfc0d66adfd304c0a1a63"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "75a1c7edfe12ef720d218b27d4c06e1a"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "a6660e867a26c6908072b342914925b7"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "c1c4ea6e6c6c9aedfd2ed37f0be79c37"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "9826aae9371a7f3e4c5d2e41be80318d"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "2c798d736df3a70bde9a56a81e73ba27"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "85a0b23c83f1c34fc93e30f250156635"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "741571b6c1db2e557db6f421657aff5f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "4e552d4d8ae4e39388a6f4a11db834cd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "c880ed0c393290904a941e1aa7172702"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "5bee53c308ddfd12c20aa91b5b90b448"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "6cd9d2d8a59815a2dc89ee69a4fba684"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "a45eb8190b266e3ea02d4d6aa6f974be"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "ab9fd77e2c65fced4c9efc343b9ad4ed"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "e46cce5f87a910752d0e4efcb9d453ef"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "c10ad345159f485abe52248cfec7ed68"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "65f11445ac635c41cca206b6aa60543c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "33bf7d060cbd226eb4c3029fead085e3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "96e6ed2c19410312f4809ff5695c6d02"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "9616115e44c772ce54962e5e1f1fe917"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "15b389ab7cf4207fa026fd421329b666"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "228fed96bb116a798b25d0b9e3049e03"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "d41093f9e9d1cc239299b771a19ab8df"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "a1c059f730360c14ae2e624a05e5c0bc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "6396ee9a11d7fb0a7a341f837487f385"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "a10d6710b042aca2b434f37c77d70400"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "34cf0b707d9a54f48cccc7724f025ee4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "3ace87103d1356609d20ea03c85d7359"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "feec996dc3ecfb088067b6080f39bb03"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "318ccf0901235ac0fd0cd0aef5dd55d4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "495bf6be1b880ad6dbee5b3536228abb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "1e6bd2e42c55a59d850751869955a2e4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "f45f9d3434885126e7bf17242e5dde91"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "4f481e09a97aae2f194bdb37bd887b92"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "3fd65e2364ee9362ffaf55f2a70a1e59"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "0b5f1be1ad7937cb1c3b6c235836712d"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "ac679bd8288a294be22c0828a0790a9a"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "48f82cc30cf82251206beaecc82d0f73"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "f1bba6c6dac9c4b4d6ff9dd5184f1fe7"
  },
  {
    "url": "categories/os/index.html",
    "revision": "9d431dcd949081965cb3d6f116a4e5ff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "40eab16bbd21dad596cbdf28ad92b8fe"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "c4147e848ee232fba78741f886f6141d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "950dc95924728fd9a45dfd2b2e9b1e31"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "e9b7be15442b1c8dfb32703f26542d33"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "526cfc5f5f633794afcd197e1cc5caf2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "d023e3ac27bffb130485127fafd510c6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "a9cf7f8e2b5d6f97bbd16d9ef5724345"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "5cb29fd25cfef9a081885221be4fb8e9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "95bef6fbf83391d05eebb0288735ab04"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "019451b716e4bdb35f4b38b57cfbc754"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "2cd7357f027de2715929f42caa1b5ace"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "a00fe36690dae21b66282f8d0ebf3f5d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "f695a0deeba8963cd50c35015e0df248"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "86b4ea7b1e3422e2f73aabba6deefbad"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "bbc16c4b38a83361c042f46cf3778734"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "4a6a2356328658cf0ac36a95d4bac52b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "7677fe4e824a039e99be969857f14799"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "2bc684fc06eb5107841d659d044c7ea7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "102f72cbf953d8ef68b0d81de0ffb490"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "bd4c7e627fb1518442577f8cc604f261"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "f0ae5309bc9b574fdf14760c03337f2c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "fbb93d13ea015927c5a5eca019decd72"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "e83e0bd84ddf29f4c1b89b9ed4ec0ad8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "813b5cea05efe1aae6ff467d554b2558"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "683226e9767f15636000c03b407e3f25"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "796718640060dffa1a5cdb2240a29342"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "c69ab7fbf5a6843aecb0d0e79709d6cd"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "ca7dab8a11c922a7a9788b1b23b90117"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "c2b719b8887f5a1008e7a370d131f52e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "a3ac7ef0b759cd2944e0bedb0dabe7d3"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "822bcb04c388e10aa51ddacc7e71560a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "4ba9bbe6260ceb984da00233ca773349"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "1313a84ec0431d170c2bcfdaf24db1b9"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "1808dcf9f7584335c478fe8f1b63cd12"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "331e90dd7968cc1a22d96cb9654fef6c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "68a61d678ae4b5d63251c226660d61cd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "295e68204a0eb63840d5649a6b750323"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "7853b44cab3a8d3901cb1230f0eef014"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "9f181557807dfa4d5e2cb1af934491bb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "4f4c9c8568e16464abb440bc6b541cf9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "814bd4ff026acc7b79d9ccdb8a799927"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "c37056341a20921cec17f0685df3032a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "dbbf3b3671af9266fb72a23fd9b5e501"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "10c2cff7986f1b4f18bbbd26fe9a40f9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "1e53d4a947993d0b0186642cc2f1fb72"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "4ea01b19cf0e113c4e1f6bf90728a941"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "3ca1a64235f49b02e2d0ae163d0b21d0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "1b0ece94056f764f04f076b3ecaef271"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "6f24414a16164e6bf47e16fd8e0c9583"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "f585951cc6d1e2fe3fbfe6c1e407df03"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "ab73366f636d0ef8f0fe5debdde0010b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "21bb455af1275cceeeca944a40b9132d"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d7dd32ece7f1b02fa2d1fc1aa7707139"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "4857c7dce160d7d0f39acf548a312ca5"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "078d0062f81662b926cab461b3411195"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "c2af41cbbe406d1ad61c3cf79fadafbf"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "6d6f4d78960cfcd01c606cc00e781f7a"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "de71bea649948e6fc4f3b34dee7e2be6"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "1a019a6ce1e853b0f091155a69bda479"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "dadff2e8d932c5914b8439e768f64d49"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "1cda27d2e43163e77cb8768b367d0420"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "a58bc63694b3348748c04e14e58b4091"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "0b458955f592c6eee4f11f2f1fd8d8c8"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "91d80b3ce450724e7a394071d440ece1"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "1e2aeaa2514b9023bae0a654816bdb6b"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "5c4e3beb1fe70265df3ec9f82f87629a"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "e44b3e93df87c1958c82744971f169ef"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "404a4fa13ab79dcd64c25f32ea511b92"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "3b071318d307c9cee25911e0d1d4f173"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "65fa8ac4b48d8be3d8e34d54b4c9c000"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "4b07b842ae859b4b7e19f9c607dc18cc"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "2f7926a08f6c9ee71336512f9214bb54"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "f48d286f2c26a4a7f20b7d1876129719"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "a51e27bc34b518eeb29fc7e6c214e37a"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ff94f6eee35829b04447b0038f01cb50"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "8a72afb98ee589b8be9b23457f2ca1e4"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "586adcc5575737134b4bbee7df1c9b09"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "a679b909120b4865a71bced38b6147d2"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "6eaffe14ae2ee61e239fb84c78425377"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "faa233e4fe9cf950a25766848e07e5a3"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "c5a1f631c5dd3c74f0ef517e9f897f5b"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "d32876f2c7c5e1f954e72c185f45d04a"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "249d664078e8065e0a2085234f0a7663"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "395aeb5771c5763941c9d40784333644"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "63d63dd5d32675219f761d15d64597ca"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "51213283976f09b216fc4f766f47717c"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "25a67a6a44b0411a1e26cc76315aff6a"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "1c2e4a9b14f32dd4423d19252aaea089"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "fb2ba1f6af3e097cb9c556d9958971dc"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "3438830197af54bf790172ddbb48f5c3"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "71253d08f10e821c492816360526791b"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "9b406d4fa7cebcba0b05ab8e7c80d88b"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "2322326ae54a9e4631d36cfea198e6be"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "5f06240d1845159febd7dccc03e8b842"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "928790243108a8b33f80a8dcad2dbdab"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "3f9e432c2fd3d513563f85256565f722"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "1931d2c5a99becd6b843b3d426af45bb"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "8b5bfea1cae556ae16df57aeac2c2c98"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "9501010bca5021c5a36121f183690d6d"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "1507ec1f815f5d2ab45f76b86cc6513a"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "766765b812cfa89f61f240cf0677b838"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "0211688e228e2039b9c801293f473649"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "b171ec3cd30600150518b955d89fa83c"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "1105abfd874c64ff4d2192fe3d097110"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "a660dfd84582211c0d64cadf8ee4c3f9"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "9289bc3273ee44878eb3ba80d1d69fee"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "203b415866e102fb483de17fea8e44db"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "2de9576b14edb10da41c258339c9bc49"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "fd855386b2f330eb08c7d9e2aa32e597"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "9b0b5f6864ce8b50b11029189817625d"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "627a786c1feb4972a8ebc8ea02704f65"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "ea29f1d02f501654d3cdadf8a607f24e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "72d8f1fe6c3f2b5a92e24429ccf44960"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "41d26314394eaaeeae7822aa590b4c9e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "66ed82d16ef01a07dfc080a81674a01f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "6360f640bf72624fc4d2f38b704adc7f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "8bf6bb4419d108708cf2aad21fb2ecf0"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "ad8e6d2825185dcd5327641b032a1de1"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "e722340ccc60c642c1901cb4bccb1935"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "130299ed6abdac95b1b712297f8311ab"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "51e1fb7e03dd490deba7c3ab0f507a27"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "991975051b444882319c01290b831b22"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "a1e7c7a43a867bffc85eb8a747eedca3"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "cffcb9430de36e6835be410004faa838"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "bb2bb3a174350865d921643f4a87033a"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "4b2cc6866751b759cdb842471503cc23"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "1ab422a7c45945b5337075a275052b15"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "f5cac9eb7f1b4041a45a91eff33896ef"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "9a1b8973a153dbaa1eeb8973f13e8bc0"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "b01b6cc9ec53c04350f8d2383ef3b669"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "815c82d5f5771a2afcded65396459b67"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "973156cd14068ee024befc85cdfe2cf8"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "155bc9a0e9d9796b2702513abc9f71f8"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "f7531e1f10fba7a1122c619f7f8e87db"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "fbd3154d56442ac0244cd0abdfdcfb95"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "cb41cfa904bfe010dbd82cf3a3cd1687"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "2d577f433294ee55bda02b82b80cc21c"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "9610f7301ee6ee04a8fb55107732a944"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "4d251d1ca5ef3e7a3b2bbe1ab3821c99"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "90b87e82424a0434039032ad3078c8e6"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "f3cabb13fabfa31e52f75946f0b16139"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "0aa6c25381bbae07df1e76f2c1c13f49"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "260d4a399e132306738774a6e071639f"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "8bbfd779947c6c43694a772d2cfe4773"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "994f914f341c517061f9ad2b9a8de629"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "037983d16c702924327c7a2046355aba"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "7cbf10966521713e67feb4cc597d682e"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "e11fa56ec83ddd202710f5f5a9ae58ac"
  },
  {
    "url": "categories/php/index.html",
    "revision": "594fd00e29b514caa251b6993f71790e"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "11637003996028a9b6b499fcc8884359"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "4d2f1497b9e37774bbfa7c3a06d45044"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "c13e3b62cefc1fccff50badb4549252f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "a10c7e1d64753844bd5d97483f0f398d"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "5210cafd4a9baf4351ee6982158c7f86"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "6bf7d08d8fa100023c71475a1a1659d7"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "c73135e3cb5c685fdfb6aef1457074a3"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "1ccb6b010034a181a89e120ace54ff54"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "17b7c3a3e3070764b08ebfe4621f65cf"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "88eebe6ee76bad094f1df35c7ac7c149"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "68e4dae45151b56e18265a765f466eee"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "b29aaa2716a5fc0b1ad2f69cc100774f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "733afcaf58af05fb261abc551badd0c0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "2fb622cf8ee64e03ea675f45c7688a1e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "5a3973a0323f610b6976fd77fc5d9e11"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "0aaf42a56467532fda9fa55da2d630ed"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "1eee6ce6a674d8a3f1e8ba5f0302cb57"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "2d6dd3c0efe8cfae41b8d34e1ab4797b"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "c497f7887cb640feee5ec607b1f7bc98"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "43e0ec0535bc1c4d5b6e6e0cbe5757d2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "b83f0411313ff8c648c5697eb3f68dcc"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "4cede382e6544209c3882999e47376dc"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "cf51ca97f6c48e2e57ff42f03929d1a4"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "b9ae8d94d8d76b7910d8ff4ac2ed4619"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "621b7c70b70fb20e13a1bdc5d640ba80"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "71fce411ee592dd28caa5900b7b14891"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "06cae86f09b92e36603d5b80672fa844"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "94f63e339b8ab1ae03e2001f2bdf7529"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "5cc5e45b4c6bb73c273ad3b091b4ecc9"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "2126fca71fe7fdc7e0eb71c4c80c7230"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "33127f5ef072b1999f19d5aa730db9e0"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "c12f343fa7ad1185c91be4b36569250d"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "4539a643f9968203a03b0bf10e0afe9f"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "57c2a89012bc03549c3ea75d6920a4a3"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6fa4065e246d87a22ec7e9cf0c986d9a"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "c4dc5f3e5a3f9fdd623dd3946422b429"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "c4e7ffa117de94b68de550dd1fe5d71a"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "809c0884e34bf44cd53789b09833ed4b"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "394566171b2825676c92be0f8295d9f8"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "d68d4b40b6adbaac1e7c37fd2cf91689"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "24b533f948eba4519298db3ab87d7951"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "56d99dc8b51957e599b70a8c1847ca07"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "569c0ad07802e3f77d62983f5031e844"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "1144540138a89d31033e5e38e5a1fd55"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "44f0a21a689208c2b2c72c580a2b60d6"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "cfebf33960e1e0c665652714ac3a6783"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "9562f41e19a0d98d9a9ead9bbd38f5c0"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "41ff0e10dc8cf934ba35bb9089cc9e6c"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "4b13102f2767654599ca8187008bce00"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "f386007097699aad2b830d971e815dac"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "2ed7eb8f94f8d51ceb7bb434a75f508d"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "c0d529818d49231e0a37465a067770a2"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "05218fd14453c8ab3bf6ea137032d0eb"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "199d5890756634cd4a032f607dd0733d"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "b59d45b3a3807413be96e979d0c28034"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "8b1cc57aa2a323874d7468911f4109fd"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "8b046e47bec64bec8950cd810034e3aa"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "b76ca21904fbd9356f2be88daf13dc5c"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "71580cc9f43719ebf62377ff44856211"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d19c0ef4c6edc8ef2858fde4b0ce07b8"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "106ed4586098f2808b383efef6dc47a9"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "994d8b85680cc24dac8652128055a270"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "dcfb2331f47cabd3bc7eee4323fe9eda"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "a5360a49f7d8c69cbe627fba43c43f0c"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "c36bde8205059ebdbd179c7a5e91cee9"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "11bce25164ed5bf9932eec95301a834b"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "c37904c14ba021a4dbb486a5d6e5fc99"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "59052948708ec7b2e82c11917fc8bcdf"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "6bbb76db645be7a2c595e6f956732fbe"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "4393add77b5dbbacbc4df47c32cbebfb"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "914daa310a985a7b58b65fefddb9dfa6"
  },
  {
    "url": "categories/system/index.html",
    "revision": "c34fa4319a1ffa18f66b161768a5c2ad"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "70b86570fb09d031df4640e6b5b45d56"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "6482274c46f3b2384b6a8e6ba6c9f91d"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "c03549b52ba659a834a24589b370c269"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "656bc3e5d4a0bbfa091d4877233c6a7f"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "845a04a93add0cbe9e73f7564d089dc1"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "e77c0c707056558b666e1f23f9bcc019"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "066ba7aaad7c5f0f54902c775c039b24"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "e0172a5a312fae4712112cdb17ff8692"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "3efba5ab65daf8386158cc171f693f1e"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "b93f1d5e67f3836793f7d99c9384da75"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "3e86a064399a4be655d5e74e05f5a2cc"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "f4e73cce3c7f5447a328d7d1a263ce22"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "5102ad4f6ded8e59792218ee527c801a"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "008246bfd49fce0ed70560aebe5341d8"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "a5b1eae921796449bc49124d2af1f654"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "c1c7197f4ddb782f587690dfa948545f"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "9bb4cb1734cc0d565282a9f5d7e01081"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "d02e9bae528291123846a135252dfaa3"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "73dbdedb8a7090cee9e74e2e4bfbe49e"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "3e3500d1d6c519bfe96620d681070eb1"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "eafc438e628164e845e1f0f155a72a09"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "6381fd7feb6fe16d6f8348614b414ea6"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "0424578d8faa5c6a829b04c922bf8d85"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "6b3b5d8eb830cd5e735782cbeb3dc4f2"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "23be7e91a3288e76400b8e23921f5f15"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "660c867e09410e751f2049b9f4aaac12"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "a0096bb5739d7ad7bd1aa28e5d146ce7"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "46d6b48bb9198e369823a9882c79ff93"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "28591617ea45f7d08bc72f963a4b207e"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "c3ff833abb7bb2e4254b661cf12cb791"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "f1930ee4966a1b46060acdffba1eeb0f"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "0c43b8a3969a17488f294dd926bfd202"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "f13b01d598784fc1cb4ba82f65a292bf"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "b47f4f73a176005805f1db538eb332ff"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "e46a654f914729d2b8707ae3850ec084"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "564d3ce2389f7141897252740ff27f88"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "98e88744c302f8fa8f06164f05c2ad17"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "b3674ad6c24ef8f003fd83f500e7724a"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "9ef9bd405f4bcc403e129578350586d8"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "5abaddd085f7d5e903cbf2403aa1a60c"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "cf4ab2d9d65850c8bff4a10f8de7bf4e"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "2f7091a459dfaa3258000f68a6123c21"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "5d240aacfc0de1409f3e4db9f54cb10f"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "b90a6fa5ee7d55e6266985d24f188d0a"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "bdeece62cbaf86a7c5ef21fcf152dc6a"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "fe6dcfa39b412d855f2a9bf29302d73b"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "5b5bceb672d8a5a10c055694e0a78d54"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "cac7fef64a4935130353f9fe37e0fac1"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "7e99d77db53a4de2a6785f7d71c2b124"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "701502375bfcb09e7371eb78c33278dc"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "18aeae2d9ff381ace3b9e9355821725a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "5002b18ca09c047f9c8aa1b7112b06a9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "fb1a7d48d9a78f476756540576c207ce"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "5520db573ca71b4b9973276a785e9a3d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "e8e0c2153aaad5eac17e0575d2c1772b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "05abc164df62a95e0aaa501d681ffd51"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "ba7bfaba31ab80d15d10b9211c961085"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "a3d08298dbaa14d78b2b0e1fa7d59f9b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "0e50faa54655a48f63638f49872dd3ae"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "d8224c6f4c78bdb1a57eb3494694d44e"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "7a0230640679097da8170013fc80d3c7"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "ae3f4c72d986ff3815f1da5ae8a59bbc"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "7d097dcfad22538e276c2c379197c5be"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "9bde2545befbb789d93437056e1ff14d"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "41fabdc462dd2b5a68fb620cb9a3dc1c"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "262df2fca5789094a04dd32b78b52830"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "33535934e4b46f5ef6ea5ca563f7f138"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "4ac9c1325e2a499521f9415908eec3eb"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "8a9f3cf78e5e2dcf4e2237f0a2274f69"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "4e3135b321c2a4be684dbd1847b0277f"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "3324ee6641c88aedda10c42c60ccd697"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "71bc9c3350a7b0afec54676be3eb4945"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "82f0dfcd0a9f569517ba991631568905"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "fca47c678288c60119ee41f607015748"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "ed01d4c7be04abb4c85134e7cca36f01"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "81b3f03acfdb6f356c76fd6d7419189d"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "5338afdb44608478b9c7bf666d8cb7dc"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "51ecea3fbe53e8668b9b11089d24ce3f"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "0308e919e20e945896ac0fff63607de6"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "39656e3d74d6a34739036f92772b7aaa"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "64836b274953cb5264d90a072f04ba1c"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "5e29d20821320bca2c177326495c69f8"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "48f90dde6b9fe5d4360f459a3f291d70"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "3c4f85e1526d69587fc2a11d65256850"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "9f1b6bd7714da08af6145ffd0008751f"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "4c8f30898cd0476e1fafb8ea8a0388d5"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "cb6fece25a4848f3a3b4c6bf1cdd3bbc"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "3ecf184455705cb680a462bc803983e2"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "cc80e738971a7c53cf1ecd20626c4ef5"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "0e71ecc8440765c28f29e00c1504a5c2"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "9e707d78265350200e2933004093f93d"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "66aa34cb1e4d692a9cfac11e73c699d5"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "894acf76112260a84c1cf1e366691d90"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c20f56c0f03db77ebbe1a399e2363c74"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "39bb767804f3278b972d10c07023e8cf"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "f9eedc474767ccbcfad0d7b412e8de7a"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "dc29648c0da799dbf9f576d4eea19609"
  },
  {
    "url": "favorite/index.html",
    "revision": "d3fdef164aff0a7161f766bef69d320c"
  },
  {
    "url": "index.html",
    "revision": "d0370af2c1c7f7ac4c87da66ff67bb67"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "0c6de2812d6c84bf1a8370f5b0f2bc62"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "6e8a4435c5b3689e5e3d8a87a97c68d6"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "150b071b0e91f25053598eb1235567b6"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "a977136ef80359b74bc8f9fd4c66f793"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "ed2911d3b84224cb0ff45557b2ecfdd3"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "be5cd7c8f263d5e1879e3bcfe5d76330"
  },
  {
    "url": "note/index.html",
    "revision": "9af785661e82fd6928bd5a4065179ffd"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "29b0e7b6c192e118c8acd91bf41dbe4e"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "eb6c3939d043be7a9492cce2e2f219db"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "b55c2b9569e31dc2ea8f349a586c658f"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "81dac1dd9e5b8c8cbf0cb6baee98a221"
  },
  {
    "url": "share/index.html",
    "revision": "eb83a38ef2bfefffa021eb7d9e0a08cc"
  },
  {
    "url": "single/about_me.html",
    "revision": "71faac94963db931c84dc7c61243bae5"
  },
  {
    "url": "single/all_article.html",
    "revision": "4093db1e6500f22578d8f50c79f6cb38"
  },
  {
    "url": "single/welcome.html",
    "revision": "1f5c5599d90b44250179b09fa08de22a"
  },
  {
    "url": "test/index.html",
    "revision": "0591b40316eaad0018e47b3e77cfa35e"
  },
  {
    "url": "test/test.html",
    "revision": "0b031cc3f396fc961687c6b27ae9a19b"
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
