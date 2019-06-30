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
    "revision": "5b08f73f1e54928e057be50966dc8cba"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "1db4bb658cb09e6d0f79b6c24133b016"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "abd91cd6fa81b0e23bfa0197ef61b3a0"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "a67d27f1747b98a120d21cef8353c89e"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "e275a03ed5bea0f0f6bd7383820a4f91"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "5c80b53b1d0430abca5e408cc262f88d"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "14726dcb760ed92745b9cb638bce4f26"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "e2f0c944cca7834b135756cfd326a073"
  },
  {
    "url": "articles/index.html",
    "revision": "986622ce0e8616e826268c9ffdb40b2f"
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
    "revision": "36bffca700139bea3b1e2f0d7f2ec1da"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "717ff0f1a24cb99d31540e1899ad8406"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "257695fe5367b66d765d51b2eaac271f"
  },
  {
    "url": "books/index.html",
    "revision": "9cb9aea6b77d046dc5021b0e611bac1d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "09b6cc50e16f9aefa5b422bc1916c47c"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "008dd4c30b54ee233266e7f21f8ab2b2"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "8e7528ae909e64c99ed7ba763555c427"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "51b48b27eeffb4993e7a2d8dd667fb32"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "c19be99fdc04e3431ef604b17435e7a7"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "a93fc32a9eab891ca5913827360c8fcc"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "85d105667cf3cd71be7dece3fe325401"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "a295466cab16a67f6d0a475be9e77522"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "6a96a6ff268a02ba10b4e3815a712410"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "1f670773c57d2118c68222544982e689"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "f07b7e56e73cfbe915eded50f19c875f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "95050e9ac339638dc55a3c4e93eb41a7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "a76d7763d506659fe86c23751e0a641b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "96412eda51db572f18a84a6219af5871"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "78206d7551e8b3656d81bcaaa696a2a2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "2ae95da15849b15e2f15f71251c8d8ac"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "1938678c7dfea4f6947724efa2d27f98"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "0cdae0512351e3eb7ec5e61aa29cb358"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "de02b3f4b43f0c22295a611963dba2a9"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "ee8ba216966e24b083be873645030fa2"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "98d9d9f17fe26a0c34d14cd433a97451"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "7bec0ad66b7f195a69b5db25ae2ac723"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2aae43a8f47fb96da60f389032dc0dae"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "b2ec6e65638923738939d70ee8d32bdf"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "556d179d266522c9121e265b6c526674"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "3acec7c25cfb5ffd71f9b7baeaa15d3b"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "5bbd09e97cae3af8db4d0ea0f58580bd"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "02bffb366b306f312480ab0b59ad55a6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "2922f34f3e992d9fa90be7802656f314"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "681d56fcca41804039d56685d85512f1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "e9785d1c69e72ad9902ca0a61cfe9f51"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "5d91ea3e2ad47ccd8ef842d9ea8cf267"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f45d8f87830de36b4c11c8c3e96827de"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "81fc29014f89f504b84379cc1db27301"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "86a908f0eb5e6453463fa0818ca34aec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "2728d4b6eaa4862432899a73de635bb1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "ad38618ae5b164de8c4f3c763bc11bfe"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "fc81f00a4234956ce94a891c96f30354"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "a5bf764f4105c7a852d4832a8caa0404"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "86cf304d4a6e40bc2b5aed193e757344"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "d6840143ca2e00fa5d6d7ee6fe0a9d08"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "9f7f1fea59997c01569b012a2a25ea26"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "a7b98a4bdfdcaabead95b02785d9f611"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "9e07ace23545a88eeeff2702be4b2d1d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "fee846e77c798942e3cd52ffda4ec5f9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "16328255fc66b4d40ff30bb8e64ba268"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "af06edb9dc47caff93e58e07281d63e3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "c8e6d8ea385e7ba8e91a022779b21292"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "e64305765d60a44a0569cf6d628a1b2b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b420010e09b664673544c006a3a146d1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "74c0d0b212ca625e9613f853b507ce2a"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "43cb0ae4044b46e7f3d81e2145b9bf36"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "a4f1ebb86e880bf81b94fe4396814001"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "597c1ab492e04dd870fd6ea474742e62"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "a65973efdb69cd138b991876f04d4059"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "66842ba0b265ccd431a415694ee1be87"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "31ed5e71597684e74293e44cc3b2c59b"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "92a75ff920e68229ebc2a31d67ff6bf8"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "6298e96d1c4a8e59727ebaf180a05dda"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "7618e298cf5abf3aa2d3a9528dd20611"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "b11f90e70854b474afe7762650df294c"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "192d73bf253893b99550cfaee95e8f91"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "65ea22bf5cbc076ec864d09546332ef3"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "3c6ecfffd5740774b796b223461fe35d"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "a02c820949dd92772a57c16d08c956fc"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "d80dad6ef0c1066e8a5ab09493b9f7f5"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "8164629ea0bde1402b5ced1307999aa1"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "67f67bae2ed259b578210b948be65da4"
  },
  {
    "url": "categories/database/index.html",
    "revision": "ed9fe7d9335554b3cc036b6f54750a2e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "3648d9bee8b8d146952d81ace9947995"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "ef618c045bc3ddca27556b436cfd11ef"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "b9cb8052164a1e43cfa77c93f51a3059"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "aa8f25a19a55b3573a11b3c8cff6267e"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "000e279323a6dc640381f31ab8a1689e"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "ed91cfc871df91a55fcad085de2171cb"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "1dd9e4883b302dcaad7e77a84121c113"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "0d06c218937c7f83ca12ac7ff8239829"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "b38376bff09e4f6d7d13ba71d2c23d7c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "b7635b881c1fe2ce45eb218c267bb609"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "5faa44b107dbb0196c2d6663ddc1b8e5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "17fd710a7296078dfa6975a8662ef5c9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "be83e8f45c01e209de0e07caacde8d51"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "4cdb78854992a192e0fe57db723267d7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "28d37bd178993f4bd3a5f60cca731e44"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "219b4a5ba51a931359046f662b3fde8f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "99ca52b557b245d70f109ba779e25971"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "1a0fd7da73a7c89273b2671d608040aa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "3b66f6d8168e5da7f8ac22eb7d8a4192"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "c13a3eeb52d8801eec44d69cc12a047c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "e6a85afaba2ebbd1f4c5629592a79d2d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "cdefec80a02a56d72509f72676d35996"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "5d6b5959b22e54697b52a48713238750"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "2af5cf3a7a0e7d086396418a2ee335e3"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "2ec34dfe42905f62ccac95ba1e2e9150"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "69f5b30540081aabbe8f7f168868815c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "86896358c6cbaf396356494f63daac8a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "95fab970fae9584b812be16bc199e755"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "27d5290b1a4d39b79d4cd99f5f0ea487"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "aac04871228ed852905ac9ff48356c3a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "35e49d59c5e1a979f49d3ec7f121d17d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "ffd49aea583802782be0df624e6feabc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "e435a22cef0f6ef9f823aea258c70256"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "547c77dd033524a38cf53ecbf201c7d2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "29bec66c562b29a5df2e4329117606de"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "2da41b03d19f4fdf6739f5083ee37cf3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "dc1b3ccdb9440de977da4866397829d8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "8eae7aea4aacfa9a083d5d01fe86c614"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "7ec99b371e242213ecb86fb4e2b774fc"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "b466e3b0699c79d45cf13a1280b16f75"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "4f9751fe2b7be0dc88943bb34bdb3303"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "bc12f9fab35b7601fbfe462146489d03"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "7b5175e27c78f5eb0e3e8296f861a905"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "75912db8dc499ae9035281d6704205e0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "228d6ab2f2917df8b96fdc595039ac83"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "5e7b778a9b17191cd8702b7297f7bdf3"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "fc6f16c756de3c575bb0bbe049db5925"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "37b09026f8e6a2e564ad453827269fcb"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "18e2d3859dfca8a2576e1d777e7dffa9"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "f61a3309f645476a0afea67614ff7eba"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "234b1d86c0a89824e1722a98ad566242"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "b9f3a54b22e4c931074fd46d39844bb9"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ea846554de9e577fe363d4eb06c4a2a8"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "71383cee5143851bb73fcf9b6be1029b"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "a79f2380b47a08fa4da4ae1a43c4df18"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "36a75bb19871f0b32a3fc7e7864b2c8f"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "b07784bb1f198924ab513649b7511486"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "ed5123aaed76d25e4d50fac900b12f4c"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "5531b247a3f67d1e1221a31e029763ab"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "7ef48a1b2cb04a72b37cd7725e9b5a6b"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "a5ea3e4301e24ab1242e7ab1d4b271cf"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "334524ff1155f10c5ee3979e80e20e36"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "65490a3e72e914e0127c401ce790fff3"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "1ab413eac3219dbcdd50c558e89a975f"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "167a579d2fd88e2a41350030538abb16"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "b1fb5ffee5d70bea0aab640e6ab0e46e"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "8fab13cf499afd7dae47c622131cfd1e"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "9e6bec6533feb3baf09aaa929127d522"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "e964c78223f9c165a3d668e4d3e43caa"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "650715fe3dd244bf4f4eec6d786b58c7"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "b8b76468bebed919b8e4fc113458fab1"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "cdf962e4b048228f8edc34ea28771bdb"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "7e039349610629f8de10c578a95a13e5"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "51d615126536653ad855ca560df81476"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "8017389a3991034a9d3c8ad0c92cd8ef"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8c1834c4dbc57a540675cc6a534e07dd"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "03d4edd8c8b4d1a9621df30ce6665f94"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "e3443c99af39413d42facfca67f37793"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "bccfb95b2cba708d199c0a33a3a8e270"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "d567ac0040b22e092c319607a130eddc"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "9967e3bea5c63d196da1260dcc78b17a"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "06bf4fcf0290be824b37e963b8db1f17"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "b6e4fabfd547730212c5ead85a6bee2a"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "43374c6a01ef045252c0a2b1e1ded30a"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "6c2331d72203af2babfc0c6a0fa6621c"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "f03e5d41e84a2403d8a680cda7981573"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "3c48ab2924a6c3c6b792bfaad9ba2ef9"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "56545bc9e6586d1031a694ad47138c75"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "b9b175b9d3bed92b390349ef181f67ca"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "a339513cff69d63cb56a417c0d51f847"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "da53834c9e18ac9778e0a89cd33d121e"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "1d5eb0eb2e7e34d5945e9118b6bca796"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "0ae0c0fe5a12e132f7e237d322dc24bd"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "f1849074c6030a83a64007dbcd74cb7e"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "2c4bba462ae5a76435671b94eade7c6b"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "9ba702b62d32a1420ccf8914dcc5c6d1"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "19b0630c7b567453ab886cea5d8263c0"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "a70146694b1ed5317770ed637e93f028"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "28aa9974d090f308654241c489c8a073"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "9cc0048be5b6e34e72fa577b6b7c3f06"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "139875110a8a346f557b907810a6284e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "0a5f205e005a673469dc48e89dda5514"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "6a77045642ba02609f00a903e9bb011e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "70222cf33530f6e3b232ee7e56074d2a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "5639be2a2acf2a6f9d3f6639a7096cc5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "6e84bfda83e330bb5b725726698bef05"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "869e7bae9bcfa6265aeabbf2c0d39600"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "4139cbf7742bd22470a263aa81a271fc"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "bb2e5c3fede675c1dedaedad4be64523"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "7c759b822e0181f34955f02157448b73"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "7396e94250a9e29e69744dedc1469fbe"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "259ee60ffca13687d8dcc0da52a38f06"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "f668b88a70a2f6d5945dd658c1aba76c"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "e6182a9c9e342c141d77b37147a87a72"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "16ee92dd9500f0bbf138b00e9588e88a"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "204b14e7f1cd96157755db161149d683"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "93b621641637debdf035360714b3a939"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "29ba6b2f2ed1f311ea113867fac71308"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "0850b3269d1268af640d493791458e1a"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "fca354a48feee1a4bb9265bd0248b0eb"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "d4c882c58ef6c93f8dec355041d64c57"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "06178027063e87b3c537982da2e95536"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "0b117677e370a1c6d6ab5333907fe1f7"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "2cfbcb708ef26d345f9d086f2a035312"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "2791ace4d25df62abb01be273d6ab5ef"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "4ffd0ac130f68460793dff5292c8008e"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "100e30376124ddf6318249c86d7e0c8b"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "d28e0eaaae6c64ac6300a58dc18e063b"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "1f33590b8cf72e87098ed32d1ac9b920"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "7216521456fb9a705a0c1164a53cfe9a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "2173903e0708d6eaa76930ce2cc3b3c3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "01efc181c6bf1f5aeb71ea1ab5f5904a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "023889c8eaeb69b1d271308ed44bdf98"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "955c3ae59c33e94c79c7cc9da594ed75"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "cee4b958fc60762b48eb2172e07309e8"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "c04d6e28563a90f56708a9dc37988ba1"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "01ab12bb7f427ad7fef2d2829e056b2c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "aa0f0bee8e8290bac74b25d25f7be205"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "346c29b8b6cc9e06c650019ad2ce9b61"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "dd54e5e9fafc69ace5c06747128c9c12"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "593729277152d4aca36564b8c4186e7c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "cb33e682cc0b02741f25de73de907c49"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "8f052e8a6f5f5591cdef8ad158ecd99e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "dbf2f3e3bf962e910e6ca6ea50301ce9"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "284272432bd2f20a878ee1a23030047a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "7a2004cb74fbf5b3a39a3a9525dcc62a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "406211345bee04ebefae47ac38848cab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "99f76b08f8206db2a042a95cf5690f36"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "800703c0a10a4adbcb7ea2aad563d6b7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "41022ff5c33cd3120cab599520a7f714"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "ba5c2323b91f4a86152af3bef051115f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "b9e04f5e11a0719a3358719c5961154f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "295f65f4bd60e477ea19425e445e65f8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "1c30e73e1818146ea6da174e3c431e3a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "5ca8cf3f890cf44e9163b21d1e95ff8f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "e84ece9b966ae87ca8f81d8a562fdf8a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "f6f3e25087e20533ba5d42657acd407b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "a60053756dc73476533ebe828e13be8d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "f7e5631279392e676af6d2ce44c1a755"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "19e63b0a74018a968e2c4406e3970b8d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "7d32ebaf2be566392a81219b36d9fac6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "80e4f52b2fec1a79f5fb78b632be887b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "0d5f1d81985bfdb197eb3aebbdb1d71d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "c378378d6b0e82dfc8f4a1b8293deb15"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "0aa3e537e27327aaaf5196b7f2cddb43"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "eed94c8d1cadebbf6bede09f74d0175b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "4294524ec3ca30b94382a6b1b8057753"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "562c98207d197ca54045483d79866c38"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "4f28edf709772e9a8f843b7dc19054c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "b1e1653621879f0e22ab863c1639ae2d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "be06eed6a6e4fe68c7efcde830fb613f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "a19d6a55042252c92dd4030e15b5829f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "29f0648a982cb56630e2db47bdfebf5f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "690469c5be99c56a383b79b91da086dd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "16abc5feba23ff0497cab69923879016"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "c74da5a250fa7b335b00b0d65604c79e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "257697f6438ece93b8871a74723a5d60"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "cbe2aa2551cb8cd856193a46f8bb1c95"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "649548329e45c12e70db562d47afe2ba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "28691a6184b92f5d17c6fadfa4386bb4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "28fb68c6d48bd53ead8a498ba23fc757"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "cea88f3e0f1ad2d36d5d71ff012535d8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "44f2277a7c87335569fe9e750c4bfc6b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "44fde4fdc677a67bd95cc91382caa8cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "ce2115873aa638967b7030f886e135a9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "2504147aaf8742ca1935fa841f4709e7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "d61f27c3a6080a56e3c9f0a122fcf6d0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "4943dfd6fe6537b9c6169a5c13599167"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "11191f7e3c5e5e92960524a91061c04f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "11134cb64678cbfd951b6ccdd6ba6a08"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "8a32c2570b589a3f44c40aea86946100"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "2dd2e894207b13243caa475359ed4008"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "bc744cad2d210175689bdd351950c4b4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "0de7df5b2fa1aa16048b5e2809103983"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "0560a1e151dbfc45bd2d084e4890464c"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "299cf8315ab5db6396bcff9559ef4b97"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "5f5246acb686eda5e68ac19815a14de7"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "d47d6c5a6cd20d565185083d95874db2"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "f02191cefe256e21e1647736077f0870"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "fb2010d32e9084b961a70b4c49ee4e27"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "665e15bff5d9c24471dd8f9dd5089591"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "45c4fd1e2ca9a0ecc4314f45b4b041f8"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "208fc285aa5c87b63d907ccdcca3bfa6"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "28bb69b429c749acd41b372a7ccb28c9"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "779f2f4a735169ad6410c5f07b36343f"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "966ad3504041586732c8d42081c2a28c"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "075ec8867469ea4e6464137ec12e5068"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "ba054d8a405073f9b554775fbe2af1ae"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "10b2a5f1a0877e082a7d21b8c3e3df4e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "a1fa9bdff1f4a32cca42e16e779a1d81"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "6181eac1342570c6132add19e10b52e4"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "325f2db797788e3f522f405981da88a0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "b65ce3180c91190952ec7739eee1cde8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "c9c19b7bebc533b028f50e01bfa1605d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "2a4cc071c68b9f2d0f843666c0044600"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "30ceda5bb9d5ac17bcefd9d7a66c2d39"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "4c1180633eaf09f9ab6cbc9edf496ac0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "393bb48a8181eaf7dfe532b640ee4db4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "532598f73c786f8f1677500629d1d21b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "a65dbc13d6e710261a4fec5ce75f453d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "4021c7698e111b334eb776acf0095fe4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "30edd33762961d057df2cb87fbd4982c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "71ae36e5109cb7acb3ae00b048c459c9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "e39925a2fe8eed9727807cb3640cea50"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "182d421ebf7cb6ab519067259f534f67"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "b4af49c8906b22404beb412d158b678b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "b400c977944269913a7c7c12e5008f8f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "09fcec8b1b4bf16618b1d3daa8152191"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "8a4e729f06375d7fc44af1d80465a27f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "f4fba83bdcc451c4a2c4f4a521a4771f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "2841ff4055777b8e14f382f73c4c37a6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "1efd600394ac5c5b6fc0887fc0faaeb5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "49206d0185152a6a66a67da41307e293"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "9e3266fb03892cdf3eae0727543b8324"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "d94cee935497102c21f01394d1f62236"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "59bc2ae938a75b6cd1607f2682f9e3ad"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "918b48c4919df60174e63cee72765557"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "76971104630a635b5a091aec43c07d3c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "f7ccc827c5f0879181227a5014af74cb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "d4640e6066370e840f153d2bd4a32b10"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "704b7544c4e06002b615b283e7af2ef1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "e030c3d0feb8047a2008d7cbff5e0bdd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "076c2ed1ed95988daebfe87eba497f31"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "45beb0e72d3b449b4289a5f7589fe2e0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "dd2994b82ea48af5e855f4a1de09b21a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "209a611b11cd80be0619c22d0763c6ad"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "1e350c0b5f3bd4241bf95b735d346d79"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "75cde9c8c369ca3aa0a99ee0be68aa08"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "8c0f3f70b7b5b02d5141d74c2edb1612"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "0f1563efb2dc19f300fec8be4fbe4414"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "55027e532debe423ccc7c34821b12c6f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "19b8a7362374ef564968deda6f8fc96d"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "b4348235fc73937a72a3c121a500623f"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "edaf30183342b8a9f46a73e8498c235b"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "dc0dc4e02ad09753d13fdfaf353af3ee"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "e980393b4e323f2163208285e563b96f"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "28209890d7bd3dff4b13b74e613fe65b"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "05f587cf1862666967c8f2b905c4c9a1"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "f25668d0d43f7bf20dd2745d3ed3a5df"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "a3831331d20da69cbef1951090d5d5a4"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "c35cafe6de483327e44c3dc7642e0aa0"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "56697c61c3f5e86dd22e8e35524de514"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "0797b4a6b94b11602a3e9778c16d693a"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "d672b0ef9703c23349517bcbee346445"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "927dabeaf0e8a2a65bf9c8186766c242"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "42312c7553ead4c9078488a3c06f6ec5"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "076ef981e178443b7b90ba422378055b"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "17a3d243525de5bba2762e03bb41e546"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "163bce5e67004478bee3330b3359ce26"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "cada026c0591ed536583c2f86a4a1581"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "71b8118cafd2bdb07044bdf2858a3971"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "27971786e937dfc34c964ccdcdc6c98b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "f9324f82b2110f8c685c85d3f108f988"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "6ec1690a83e445d5225102ed09d3d393"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "93315cb59a93fc55f1298fa022ee5f81"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "12c4f2f34ddc098bef840762cd59ae0a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "4bdeb3c295206062664a17f75be38b00"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "e28285db096133d3bf0b5b74aebc0b4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "389f768ffb77824ea0c622a36143d30e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "1207478adac22a4ab1af8ffcd8796420"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "c7a0ae1f6bb5cf671a91eeeee5a47760"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "a9699680e6d2ee5192b450c7ef31f468"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "06dd5477ad06e0c3856c6d92f99326da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "d6c02861102e4fa7b76e5743c7223edf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "abc414fa07fdbbd5bd5e1cc69475bc2e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "9724f7818d529f8a9e4418a05ecbe5e9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "701355db0229f1dc15aaa1d0e2d0ebdb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "1d4bae25a5826f85c353ed86c2b397f9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "a9ee662c3938e4a4d168392b52732276"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "b7357dbac730f53f042270c50dc37549"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "4a9c0777026e40e66ee82852ad82f046"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "5cd51431567038ebbbf2ed2caf5eb358"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "8e8822b8afbfebd61fed2fac6d9c7d0c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "5283f65fb12df8ea5dd669e62accc5df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "867a45de85f1d17d73aed13b31ee12dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "93aea11e7ee3b9e222a4c24d1f5775a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "0f72a603e0a12f3b9689bbd3a61bcf9d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "0c6adee5c61a3ce3ed89041d17ca3476"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "ab57a358bfca2248412af617ea0d5ea7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "2511148e4ffdcd6dcd1efba178842de8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "2a715c5cdddf2b795fc760cffc38d472"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "d4ba0bd543c807bcb9ba328adc00606f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "510a4b69762f4e1d07b781196cb23534"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "706c5f792231377ec11fa0ea6c71a401"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "0b29977a21a6e49025faef9a484bff58"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "8ce02a7b86498c1f40de662788d45eb5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "976aacb294127a58c43ca3166e3eb2a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "90869f2866472399ae9c652758f2e632"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "3b7b800dc714a3bb32a306598cfc9481"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "501300f506c8a074e058d150dd29ce5a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "07a147367a32fbd3a8da12dd21193ee0"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "725da01ccd4f1498aeb9b4bd628301a9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "21e49bd4820c26a7e12a2af8dcf29fbd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "8ec0ce92767fbc6ab25023364e123271"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "1e44bfed4b6ccfe222ee55a6f78609e3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "5269bdcb09fea069c2c141e32a569f85"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "71ca282b13a617bcdc9fea31d3a6e37d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "fdc8fe80130b5dffcbce6eae4f5db3b3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "d6c8a209eb64f543030c82499a672524"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "4a2e88853fe6c798011ea0edc879ba72"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "c1593887cb50337f12582ea210c1a859"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "c847d99eda156396a5f889cd6351caac"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "6aaeb5f3b7b198b34b09b91cdaee61b6"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "95c6642950df5c8f395926f3c1565078"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "bbcde0051ccb24dd92fcb5a5861f3f55"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "19b4db63744edfa9b265388b6ea5a888"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "ad62b561092d7fae783b8e0357a323ac"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "7e20d752638d2a1c40d74c0a148a511b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "db4b1ab613d25dce927594044c7b1071"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "4409cf45e3f858e09a17d72d268e4b47"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "381fbe6d1f855c82fd96807a0ea9fdf0"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "8d218b6037ded56c68237d356058251c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "d0319fb0aecbfcdd987de86d1012e3c0"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "ea6050effd25770b772d30e1f53c1b18"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "67783ed7aa919d43cdeb45fe0d8cb36e"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "b2118e8dd8bcefddf79c07ed506c742a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "5f8cecfb2b38147f1e342e55aec56faf"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "4e92d6ad826ec8018929640dfac5d505"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "063b569175dd1427ae9a57b87976052c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "cc32e3a3de2813f18fefe89a811fd970"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "7d19cdb5bfd98d2a17f3d62f15860ae8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "3f6be84bf6cb68c738d0c87c0bec63c3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "8ab8213b9a9a26141522e7a902688258"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "3720e86b4e4f13158ff40ca076c8891f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "3e1104bea8c097d9f1e45732dd25fcd2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "0f5707cf53ad49fa830e280ad02f9564"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "e01f30ae5a7cdb370b6dd00033405edd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "617a3cbf7a53cfbaa0e4f60bfd201b45"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "60286090422ce64b66e915bf0b4b5873"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "47584798a56fcabe990af46249a0a7b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "a58c0cf21235c33aee2f651ee2bb74b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "414264ae36c54a65b04890fdcbb1e610"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "923969da5673e448397dea95f6483d5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "f9b05348fa787fca1abc7f7c99a0eabf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "884acf66eb16cb0169afd866b528fca1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "38fa03b4d25128ac41949815d15aeb0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "64d4ffc5fb458f6ba47b230fde698bce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "0452e91f424bc9f5205d65ea70b5968a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "de050e56a9562b2adebbd9934bf25e2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "aa01b11366ac8a216ad6e9eb6e525eda"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "22d5f0bb60fc2f70d7a70513c08a9cf0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "9c081533f6a12b9f911ee1163ed03083"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "cf997ceeedc9061b43537f5d96da8150"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "d97dc72643beeee02eeb1a1504e40efa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "c015437b9c841dbdf9de3a54d334e80a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "a3902477e5f8f43c7ef97b9c2de81809"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "d8a9666f53ace534a37c1fb8fefaa83e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "c7b0063cbd0f2f8d69caa087c8447207"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "bfaf49b1235af0a20042e833a4973006"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "e4e8b350b86662240988479b2ec02393"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "ea5d5e3b8a8a54de3787dd991e467f2b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "bc3fbfbf1644ea9d713b1feed8c38586"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "58554abbbbba2c7c6be01e643cb77b0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "7e4f84232dd8d99178b50d883e52d7ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "65c7dd45678fece8996a8177f6a54efd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "f314eac0936192c774315fb25699dd89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "32bbecd73d3147cb1d8ffa0b14f109f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "67485bfabcdda524917eb0687b0bba5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "6d45b8abde2fa149ffc0ec1a01d74cad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "4cae7d5e897482c5a3ff9384429ee8a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "14f8360b245442a682cd2ca9567e0bc0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "94631b779a66a516fa90e0d8e09fbbfe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "a057180dc04e24017a0e83be7b427311"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "cfe516ffab69ec4de38f99e453037b7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "e6ad49d3db95e505fd72fc07eab537d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "5ad97b9153cf79b4dfd02feb14d87af6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "0a15c2e3eace6a34ca971c66d704518a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "20270e4d74b4f97280bfa889d5b7850e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "af688df682eb74a714f969a57874e9cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "b5e2431a90c2c267078d42957baafc67"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "0e999d49046a09416052d5937151670c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "262cc712c574011c3aec2d3e44dc234f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "d5f550cc41090f88c274c08839bf8001"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "f1191fd959e5059f5b5992982e27b447"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "dbeab702a73d3d1036080b1b9113fe70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "b7ce24941c20b9d1f0a45eb4429a13f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "dba6f7549ea811783be9a226ed3b2f42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "a63b8db709fd633a58be6ce2109a6f5d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "4b728c4bf6eae946abfb1915716a7a3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "f90f7685515697556f648d2274f35d95"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "1713727dbc681e95826c580c8adb0268"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "4c31bd614b336db14cc3b302f774b259"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "471c14b3751988158b09bf53a4c95bf8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "aa56d5034f6ebb87b5f4dd61e67b4421"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "8ff59ecc1ec9f71d7952e4f8f5379038"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "3fa6c3f221a4e14ea77352e1cd0ceefd"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "ea4ad5e878c1a622d1be38e9bce0dca3"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "aa4094a554c0a4f62fd51b8e8be9a503"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "0645fc9b51c7b865a764b4e919ac47a6"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "01cb614b67ba2a0d1a45ffe01ee43777"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "2bb1a27a56c5845e849eacf8d75d2159"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "5093076c4b3e3e3a48a8c65252aa479d"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "8f119de45c174eba63acfe7cfed550ea"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "a03b4b7dc7325eb246d37ac1d796aa06"
  },
  {
    "url": "categories/index.html",
    "revision": "1a66677ce345ed73dd757964cd7bfaf7"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "0a8c4deb17fa22823178587c9bbd1235"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "f9e227862a58419c49d37d702e7cb465"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "7105f67b8768009652b84d5af3074aed"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "964029a7b5a7772e70c6a906df997424"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "ac9366e826320380349b5d67cd27d750"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "d8f693500c550ed71a949dae566087e5"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "79092c3fa67ac0ffe3a323957603f12a"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "2a9e18cdc8946f68663c525aecda54a4"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "a5ae0029bfc07efd7f76f65fb1faf6cc"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "643e2a59296f78332315d8fdd14cd8f7"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "1d618162408d2daa07b30718d5fb593c"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "7955d762c0056ada16b9bb75df0bae43"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "a0f322fcaf255082dd2b496b4ba3f819"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "6305684b87cb40f7e0bce1bcb52564cb"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "861d6c1d0789aeac38539f0e1e784c70"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "ea1d8e76402be8adbf00419ae4ed52fa"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "948fc593d14a0a9397799fc1886ae213"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "d7eef5f456bbffdeae177dfc8a48378a"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "0b67dd74a67c040386067f97de2445d3"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "d8bf4426db7f54fa9ea08bc13de113cd"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "71bb43c27f12717b42753e69f86e66d0"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "eb1d1a66f6f93193c97c24cac5d19bc7"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "f9b332949f089bc32dd263cf21cebc8e"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "745f7ebd0dccbb96b5045f3ef5576e06"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "49560a5481c875d02b90dc8e6a58c8d5"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "56ca0f21acb7f13ac15fcfe0a7c02446"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "4d3da78da3ee4072a542f266531becc5"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "edea24558b23fdbd67518d705527fcad"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "ffb158fba4032a11729831ee793881f6"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "b00cb2370ede9f9d96f3ccb5baa3b9d1"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "755fcd1abe2a117371303f31aea77203"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "dfd2bd109fd78192e447ff1541c86daa"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "348185da05566ae56c51732d3f7a6fcb"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "e269c2d2f6dd1be283364d1d5efe83e5"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "3aeff350aeb10340c9fb97633a7ca3d3"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "cf66441a255b9b93e9a28d8a74cebbe5"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "cbd3546517db8d47b1e2dd3847a9954d"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "39454b2ca04f79afe137a13bdd1f4760"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "5fef71811c1fdff26b2c90547621e4cf"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "a9ed69781ba9d6054e906aaac4d5e385"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e816bb0454771fd0994a88a8aa87f743"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "6c9db204acf1036cbc921d11bf854655"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "ac41593983fc951bad5fff5f5d0e465a"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "3510e05a29b0f0b22140e12e59234613"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "eba1514edb7dc47161b250437708f59b"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "57c54dfca36b7d1f1792a24b1e8dc225"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "ee3cc8542abf1eec5aaa1a787dafd26c"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "63f73590990bc5c92767e272aab70ebe"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "e2e1805e6ab790b27980ba1bf577f63b"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "9942d95254711e4f8af70ea5fe1676f3"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "f1bf00897aaf3337ebf4532c477162bc"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "6ef83d1dcd4cc2d84c01d16260ff3401"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "6d243f219e1f370656738ed66f5406f8"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "2cb343ee6bdfbd35a9b699844d632de9"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "b02dcf4e2914b10e40c5fb9263cbba9d"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "6ea10cae751be31d7d994b850389b66f"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "67da36da69dac9c6099f2e822d5777c4"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "bbbfe02e8975bf9934278b5d0a826101"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "924b5001cb25dee3ca8133e049eec4fa"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "8e87255446dc4a1ac9a7550de2d9df26"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "60b25e146a544953905b0730240e3353"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "02d4f4489d3bf7edd986eb2ed8b89b96"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "164b002129da2b39417dd202eee34acc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "a300c16da2d91493a89ac8836f9a83d6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "d1f9679ca77acc824c613a85d9997e92"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "6fe055d00bcc7e9a1c69c133c2b46f69"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "c4a248cbd3363fd5c4ce180cfbcdffb8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "799a44aece6c9141d3bd598cbf16a843"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "2aea1068a4359384587f14a41b174f81"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "4c5fcad9132801f0cd4d0ccbfecf50b5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "b9e98deb8f6cdd0b85f89b2884429e2a"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "f84ab2957b4d66669d21edc2728cf0ba"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "b159823d58b05fda4e1fd7704e522531"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "72967c785b9008196b6a29b0296c93b0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "ab1f5efd62c17c3a48444d8e13bb008c"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "c5572afa98df410c3003d202280bfe4b"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "59a824a64ddcfbee4d5ad9f43972d4e2"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "59a51cbe6e31aadbe17987c50ea710b7"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "c9c95ed1df5990b9e7cc915c3828b8da"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "6acf27bca51c0525c89725484228dd2c"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "9bcbeaaddcb3c9debca9baa636b6a9de"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "06de1f268254c5005543631d53711d92"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "50c3d26776b487356ef018c71d0a5f86"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "fbc1c6000ec1e22ef59fe6e8b75daeb6"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "0bfcbaed229c5ace68df6122f9e8d188"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "2225e9afb6edbcb7e7c176276b3f0b6a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "e5ea1c1aaf3429b751559cadcaeb3e8b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "45204ac7400de171f6e77d5b733a5b48"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "743878bdd275b7706f07daeadeb17fef"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "5eb256fe7dabda72c1326d8a559ca216"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "2d829448138287785024a71155339100"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "120ed972e221b2d2ebfa8922bb75b3a1"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "6ebd238f3b30c00a3fbf25b6088051c5"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "eb725aaaeeafbb899f89812f3215e13d"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "a01825f8c85d584e5c01d9b085cac95e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ff3bd0b766e1f99e63958279826a0eb6"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "07b28ec619f24cf8771c5fa3d12c389d"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "71a365051819db93e7402295f3e23171"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "51fcafc3155bdf8d3653652cd5829ac7"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "97ba76a9ef961768b8c85a3e71993505"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "e892c4319ab3e3197d78cfeb475c92a4"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "4a5ee9c27f53a31cf49bd2bca2428f3f"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "7945cfd3fbbd136885bfb0ab609adb2c"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "c0d2967e5396bfff7ad07f0e766057d3"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "fb7c6da8e689268dfa12a926a593c59d"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "d122dd1832a5ce57d436dfb8486db329"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "cab0f391eca5adcea0c3c6ca548797bc"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "5a4ac87da12859f76abe50886651fefd"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "713dc2ff3ec9c3ffb3ddd55097504be6"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "3bf124e42051b9e3deb97393cf067ca8"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "a4c073941e926ddc5e8d6b30cf86b0dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "273e6ce84b5213689777b2b0c45c3939"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "933c593905be3059a59c7f946ee1928b"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "16ad9be4b8de2ff3c8448863a56b33a7"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "6230f28e38589dcafe773b5b2555b2f4"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "5bec265a57077c8b11e184a9b5b9fef9"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "cfee36e0655ab8de6dd272008da0c26d"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "77669edadb82df7b40bc3427345bbc32"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "373cd69e30428ff4bb0c6f65fa5192e5"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "44d94a8ab4bf6a21ee2a92b844aa0891"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "0c3effdde330b38cd60d5d70273988ab"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "b33cedd8def983d119fdc2c56fe7a0d6"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "69aaf9665763e3e0138c76ae90a53077"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "890b3abe6503f3676a2caaa22c061bc8"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "dd77adcf16e67995c3efc425b023fa37"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "88ecd30cb6f150ae644a4dfff458e4b1"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "8b20f82c8a903d09cc60a1b4b95a64fe"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "96867394f1dfec712df6894f12dfc639"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "58c575fd5c5b564e6619712ae3a4997a"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "b4e2f1967fa65a14a32a9eca21c35cd4"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "f243007c9e5d3207bfa1a85849f62b80"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "986cad95bf1e889400ec1ad3abcec4d1"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "c880ea526ba4ca176b0c834e79e9caec"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "6e051336a7e2dd7a658a2592171fac0f"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "502cc45b3daa43ff92d47a32f406bbfc"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "d2d42bb2aab8e8b57eb2863439142088"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "bbee6a9c3fc341199483cc22a13e9572"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "70348341e85fa9b737f1a996e3a7537d"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "4a0e614125efbb9c7cf7e9e2f114c256"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "03c2a6c65c1df778135c309e865322ef"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "af857eacf3ec2eb666f57071cf20e78e"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "3e3d1e17a2b13d51f856e15bd8d2fae7"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "4311361b55ccdaa4852997547de58212"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "70763f2f5a2e0c8ac9ddc9bfa8289094"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "53051340a6bffbca32d268c24d4929b3"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "0aabfce8db0141fde9ebc4345e2dd38d"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "0f0e9a53ded403206364937417e2a692"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "78cd172523bdc9c8cae883f3546891e5"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c20f28c9cbc12bb664080dc185ca112f"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "e83117f13ab76116d00a0ab4d219e89f"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "f854fccefef365a773310303225cc4c4"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "cf2d988fa397fe13551beae63ec3de64"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "3f2da8d63499a9c66918fcd12a13fb32"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "cc7da5da0ed21b0aa8f0730d0e572282"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "52e9ca556ffeda1fc56b92f368158793"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "3f9c3610da7cb8d69979bc5376af547b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "b1b33c4892e3b5540691e1c584ff2f94"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "fd28848262631ed2e48c8cf9effa7f4e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "d013ddc3a8231ffbc5a46c740546b3e0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "70e9f064fd79cad007284e86ff846194"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "67d986973c06aac09a153d27a176d13b"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "6dc268dc50c8ab515261319943be5bef"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "fc37b02ff89f5acb974f852e91dbc664"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "d2039e2a7ad20a754cac8130845762b0"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "97eb813411e4bbb7a6f8804537c03935"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "0a942f015fd0e58f44cb81db93b4e248"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "d96f832673c49f3e1034f5f32ee88940"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "f1853c124bdd491e8e82e2ae1ddd516d"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "6b3bcba430cfb36349db8e710f69451f"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "fd7eb2c5e8af4878d7439b2972bf8db4"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "4191ce7f9eeb94419f10da0950d4835a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "c28169c18948d779f7b61fbd93a24c86"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "ed3cf5fe2deaf361c0d4b0c0ac82905f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "095ac49d969d04df43e5957d1889c206"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "bc4c24717581f91c262062aacf62388a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "f6f6aa8418ea561f8ccaa35944bb7acf"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "22a0ae4201f6cafb95d02215c43a7662"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "6e16c77dc9e0ed83f750c0a6a6659278"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "04db7d378cc30bfde59c4f09bbc08f21"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "43cfbe5e984fc9a1375f3af4677ab1df"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "c7756347d0e51beb40dbba7c1060e286"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "ca3c3859dc20c3b5053238a322b011e6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "7ef1ad36afd369474aa88a71eb7239d9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "4f47777ec3de2533d3f5a46dd16d3b1e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "31eadad0cbf07f5f05929e20032a847f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "a04f63cd9190706f8ab23083bb154586"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "37b34271123d182583bb8a3af35c9da2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "a92af2b4103abf4aad84e6e94e75b036"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "fdc7c5040762c53e94c9230bfc16ebfd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "ed129a10eeba126093de3286334b11cc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "aadcae437562d7dcfe80b5824d023fb1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "708d2d16a45a4fb67dfd09b14b4fa15b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "7f187bbe2912a6d1c05c8480de03eaec"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "fef215491a4f9dda3414216412dd5852"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "bac119ce4ff95b8f8be6bffd45e0b8f2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "91c200fcda97335d68b9fe4a14bf044d"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "244a982ed8eac6a51a580234b5e1d96c"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "23ad421df1c0c05ccc6fadc2ae231c05"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "5dafdd2e05c07009406668710ee0d7a6"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "17f8d7684e6510173e0402c7e4f25f45"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "c88e1dd401351320a35e3561c38202a3"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "305b36c91a87436d1ad5a5ca8c02026b"
  },
  {
    "url": "categories/os/index.html",
    "revision": "0afa398e148abc279338362f90ccb93e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "a8e6ea9d8d15bcd25cd8a1a3d5837e3b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "575a4a52248a958a9dc2efca9624d860"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "f9033a0e7bc0706f7910d2af4c0970be"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "7d0c60669afa1df88692ec41e2c4cbec"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "c7da8ce962934bab5a3f5d87aaf711f2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "d88acf71ed241aa3f2a8fd023cd19929"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "780cce41201f6a037ad186e55532273a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "ef6fae18583aca7e2c6d2df788343adb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "dd67460b886376867599898faa60e6e2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "c5a1e76ca8a6bd2419fc13dff563587a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "3e7afcc808a9799d0fa8717eebc2a83a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "89ccdc7175709d38c66b6427d3be4b07"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "1d3c717bab3d0c759a41dcc6829529ee"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "a2ee07f0e1a388753a1b5b9b42cdce21"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "6fcc2c7694825434cb2419671bcc5dce"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "30a9b0f1c29e40b51bf81a8747505945"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "f09e76d9b533313e0a5f6b321dd617bb"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "e0f830ec9ef2badfdcd7fda5986b6a7f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "41ebf5ded3c09bf6259a0857fb55efb7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "292adc9f428a27e25fd98116a19591ee"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "f4aa7a21301b523869d139c8b5a44e79"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "9a56eed15ecd39a2e62d4cccbe53d571"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "b4485f57ce5503385e75e70040e37b67"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "24148da1498817156ca73688663ebdd9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "38f29c748663280f952a78095041d9ed"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "714b217a7db38c97eb967357ca6feb16"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "987cf3f8fe946119ecae463a8ed3607f"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "e3c8126b6d179b14fcfa0cb02eec2554"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "705f816a2a18b9e73b5ceb4c9b464477"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "ef707bfa30f1fdd32295d3322bc43a1a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "9b08df2aaec2ea6adf5aa78058b26730"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "7839e5a979c5d07f5d7df7a810228b06"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "ba3e04bd666c32e29c6ad93f0facc45a"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "3532fad08e324860b52fa0a0bc06fbbe"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "758042b799e17e7fea03d93598611f7c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "e945dc5562399f07a6af2b7a41015abb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "02c984baaf79c68d4f4899e2c2096a7f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "649f68fa65ac826d59a740f72fd93933"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "3acae3ef48f674f9b3dedeb1ffee09e3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "381ce9da58552852564c936da7ff13fc"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "d639ca6c3c435031790ed52f70d3889c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "a2deab99da0bb3534018832274d7d24c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "f3410a31c4f9d24047523a3cb87a02d1"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "4b7b615daab462955d1fcc09668515c6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "ca1df1cd37a8f3f63b7c7ea84eef64db"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "edc05e9a8b677179e2ab2dff344b3b03"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "20808bccf9d8b1fc4bbdd40277796873"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "45a225f25b2f848362947daedff91501"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "a8613c1b48373cfc1ee0aeaee215cff7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "86bb402d84b5fe18c0c48e5687bd9219"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "7daedd6f172edab175f1a0fe27896a30"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "94dfac9514716cb8f6d3fa83030484a4"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "4bd6bfd1f2b3b4d7a826a552f3262c7b"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "bceb3042b68b6ceb381e4bd03dc80f3a"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "6ccbcb49f8f9d2700a4b70251628686e"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "db53c5c0f05306dc2f37f3bc545ca6ca"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "21057a2af70c123b014b91a17ed445f9"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "6a6f2906c59a38db82c6234bb60320d4"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "a666090402bd738d86948a945976c46b"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "1881bed3d1d2f62a0dd9f83e373ed033"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "eaa6cc9947fb37cc88b572cf338349a5"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "611d515a82d442edab311fdc7b3f5b33"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "17a8471e77ce164005cd1bc8bd89ea38"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "5137744eacaf9d780b6e3e1f1931b991"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "95ca498eb92614731bff099ecfdaef3e"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "fb8eceea762fcb694502ae11f151ec53"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "f137f5c36b61c251576b461437ee64ef"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "4d6373b93baa6b9e52e82fc844318e53"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "e2c27c0f82a61eef8c9c24cc4c9c16c4"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "caa348de5710f6abf89dc0c8840f8645"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "400dc089d1711f89b343f521ab9a484a"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "fb34bf2f919758139d65b062b6e2495e"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "0b889af11f544e41625667267c4ae6de"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "1c2d2275321337b7c2c311fb6b34071d"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "5fd7fd2fbfa05a7c7a7b8fa7b6a33dff"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "6363b6d06a90e8be269a6def2d1366bc"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "603e696edc630b9a2f1a5ed63c69a95c"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "fae32152b158f20325cfc6b1a2955e41"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "09cec1e0e5d0827c94ef7464e50f4e64"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "61fcde69651382669f7bd7e48b3b85c4"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "53c2f1ad2106c35b3f1c2527db8169f0"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "28ac02e65a56f59252cca818370aa7a7"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "7536ee08d96500efa2a71b3c4f9caf21"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "cebeaf669f49dce200c04765d637e5f6"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "d54ce6fca32d62b3aafd8abb93cadbcc"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "87206f8b16594d8663023f8b2cb822b0"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "e35bfc93f14f886faefaf4af585b939d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "4629a7218812c309cf1a3080eb93b4f7"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "537bbd0d0e8998b2bdc0754d7c626e58"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "cf82897545154a1b502dec10ff77c869"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "50e306500624be5766df3c1262237654"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "984de5731e0e3a86f7b327903806b011"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "b5f68652735fbae0be41fa6516046afc"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "8df8f33b78b6521cb1c1c9ded82bf56d"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "9fec005c4133a5b3c516b685d1c7d8e6"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "e1027ca14cfb6268f3ba1c124f2b958c"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "3171c5a19fa54a6c809e412ccaaddd1a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "8de7526897ea47d3c72dfcf29d3ec660"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "03de884eb305d1d290decbe26959e573"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "314bd7b9d4d77c15c29119fbe02f9328"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "602df4304923e50e5b77eca4cd0aa4b4"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "378d56001af390ed82f5fefd736c1829"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "712b8b84e45174f7ea4b82de32299e12"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "b585268d42f185d6ea6051874cbbd65a"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "8af1c25ede5760104da916fec9d2c8a0"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "c8f58279cfcb2bd24e0ef4b585224523"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "1c3a03ea1ef29b33ac81fedac85d6454"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "1c09d3422099574761b1ec51f3de0eb4"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "7cfcc46099ca16f6820d1bc6e69e8b98"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "fd5e94b07599cbe9ecccb074600bf6e6"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "6ac8fa146098ab98e8443da4de328902"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "659e0cc37c9d7cd3812c6a66c4dc9e6e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "3de173829f89207fde30ed49fd8c674c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "1d17f94e8eaa9b7735f09081fff19473"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "5ff3a50c1235fd916d9e530b98ba68be"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "21dba1addffe11e1160f6676a672c242"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "485104c3bf63baec5d334417a883cf32"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "0c9966dbf66dedb3cb03aaebd45cb454"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "1278de78be5efc76819526217dbad641"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "4650b98ca389a84afd65852752025664"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "efcc88b2a1fb733cb7ec0b26718f13c3"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "664dc287c1911a771bb38c5b0e604ddc"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "9978597ef2a08cd8714c2e8c1bda6da7"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "c338b57c7174074880d8251c0da9c691"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "c08da991f0eaf1e6e629d83927af116a"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "31262b69403ab7723e12e07bda6e0a8b"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "a48fcc65540938c552b2bbea06106ccb"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "4b9e5c7be2ba51c35f803faac3f0fce0"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "bf47f9f6bd3dce526a42e45f6dc48184"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "08cfbf41f8969094e48eae3c5bd95d8c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "c27613bd935f603ce234582ed0bbfb00"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "64749787ff7580cc7d4a5dfd1271d56b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "2b8e4d9f789198c6d2768739c231c6e9"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "2dfd4ff557f2f71e2cfad79748d40d62"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "b4e7b39ea08911a716e25defead061c2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "76cf78153760f0ebdf20944e9c607809"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "7b784fb95868f4ffe80630363172dc40"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "af2970b8884334499b4be1be647d843e"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "6ccc53550895c6a3bcf92e50a909a16d"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "d51a8a3d8d4b3a58db1275deeaa19a76"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "b2f6c98e01cdf33c6666bab8f3c2cbf7"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "805d108dca77755a511b5e27c97d7c27"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "8ed64abc0581ac476f2b4d6c09c6dba5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "d482eb4a5f381c312aa5625758e3ec42"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "f05661c3ff58540184845471c9581abc"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "602e312bc42eab47256613a3e2ad7575"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "8c4462b5eda11442b5588ec11c4f5acf"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "ad518346ddc4c19bcf6d899bfe0121df"
  },
  {
    "url": "categories/php/index.html",
    "revision": "abafd94e15e05abc39cb64c3ea486a88"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "26e425007068e19e11b410d3e09546f5"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "e248d8f6b29a16e92c893e9c93292e90"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "f0f10b26486ca6e119b8d3a8707f2abe"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "74f34ab849ffa960af061f9f60dc5264"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "6dd84bc539fbcc1a707ab945574348ea"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "ea923018d16b0e2d4639f8c7aee87782"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "1e800d6eff9478709f262563a8bb92e4"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "97ee7fe41a8b8110bdc8a57c7d30671d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "8fd0a938ceb2b0751a4c55b3ed385ff6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "f02f860e86fbd0366f476ca2a5459e3e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "fd27385523ed339b295a1c50e8e0c02b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "44d91b4c07d11a4b7c2a73f88501a993"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "d972d5d4b84e10d2dabd387f1d2cc4ae"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "17bd211cff1dc12a9e7fdefbaadf0df3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "318f5df574dda41b39b32ec1735accf7"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "f1f6f394a00d5e163274dc172c5330c5"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "67aec4febb248c7c0e34801ebe7dedc6"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "2eca31ad39f4b7d0f39ee3c100746701"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "aaa374674587d02256258359bb1c4233"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "26d678f2212fb57a30dc01e7adca1bf6"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "18496f65003e7ae5e3db9c3014a82d06"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "772256b28edb76d4b13ac56605e300f9"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "434e376a202d81d98c0320f51de11758"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "5a41e79e3438d99f6bb808a64388cc1c"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "be54642f918b6c1283641b283b919c97"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "11c5d36b071915232ebfba5c945b3953"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "c0f3e57f5a4fc34302766479a5b1d012"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "d9635a30b527423823a54752cbd5f2b3"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "383bcc741ce02dbe360193387e6ac27b"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "1e59d8f8c909e6a6a9cd6ceca45cc045"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "32b9eae358766ba1956b77d58eff5fb7"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "985bf7397aa660ee61dc93aa6c101025"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "ff1ad1a17484bbf9d84f7ccfd3f87619"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "6bbc794ad72681c6352989b46f1771c5"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6fd3eafe0e7320af02cc40bbab3c5377"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "d04df6c5ba1ecf8715f62b8d2d06ec1c"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "b16e7aab810b457c6204335249884141"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "44133eb9d9bcbf37e9389d7f3289ecd7"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "b75c247e2bad8c2d4780af5afbdba42c"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "d803bb52233ba75f297850a7c4336921"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "df5cdad06ae2a4c7b813357e091c89c2"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "82da0961c95783ece878fa1bdc905840"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "0b22be2e1a06ffa17b7e984967433218"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "705a6335c0deb6c65051f9760dfe65ad"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "7732e2ba78b60fbdd86f80a60f0517fc"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "091437fe58eb56a12e87e8ae895218d9"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "38b20e33d8c12900be6533a26af2a3a0"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "33749377564d049db679d8b89d703b84"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "b6f8b8c39af0aa4210ee4043689eefc8"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "b5c96ce31549d90639a871ad80e0148b"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "43f19a6e7ddfcd9240bdcae2d7dc0247"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "3761f8bd6c82b3e4f3c3c645eb39a44b"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "6678a04f00d831ab6f4ed454c9374dff"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "7df8e41a51bcaa6919ab07d3f7717975"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "19ee6670b6968ef0fb696c761cc3213c"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "9f336941c823e9d0b397c3c4fbbd9c8f"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "213fc41985275d6df8a919c8a9e0297f"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "4b645c9a8786a9ed9a2ecc3bba90e1d5"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "cbc775b1d956c3fa5e439dd370a6ec30"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9cba22873eceb5fb68b47186f7c49cb1"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "3f2fcce78cd3c36f0d4b23fa8c5f85fa"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "ecffd81e90db68acab899ef72794cb0d"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "eaf6935a5b109138ef48a9202a3c0fe9"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "ec1cf16deac9ad162acf576842af2926"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "5a77cc4b413f0765c10208d7ad214389"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "d63829153198d06d81a2dac28ac10c33"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "3eb1a22b3cbad223abc655ef1d917fa4"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "bd73e7ee54fcc19986f469b8413c3e88"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "91f0912121cba9cac965f55f1e330a8e"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "ce9dfa5257aee9963226a5d920985cd2"
  },
  {
    "url": "categories/system/index.html",
    "revision": "830274dfa39e3fcfdc8fd6c45b82eef1"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "4325c2d47c8959e00746ac8e21e653a3"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "5495c1345e62028d0ae32b30b2be6c70"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "e0f2cc9ce1c133a8d5dc41c847eff5aa"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "6b988a09f8f0acff59cbefa31d78fa74"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "dff3ccadb2faaadc3c19a08d06310840"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "cb58fce5dcadc8b534f3973cfd008463"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "1322da64543c0953a40f2e5baf88e44c"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "8630be544c64542024cb89ec087f2609"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "e3b6b29f2594a8aaff1993bc27371b10"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "a74ea3988292d4d59c7a706a2fd45743"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "8da33d2bafe559e78a759445738d7b31"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "18acc665091d562e63ef562320274d62"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "33371953df24f80e393baccc11b8b971"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "c150bd24f429b7bc0db2e42d35bd3825"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "f4a640fa84067bbca03005cd0506e645"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "bbd7f924a668ea2b94f52e73ae36cc77"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "500dd77032dabf4b68207ed4eea711cb"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "2bbdfec491c575199eedaa07446e5f7f"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "aa60abe1fe29f107f2f964a6987b679c"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "a3788b7285cb900d1371328e02a1eae8"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "9e94ade54d558b2402da721ddc822056"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "5cdc26bbe70c26204f18dae838176bab"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "51943cfb8043f23f97e3fa8e567a6ae3"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "bef5b202f67cad61dbec0d874754ab07"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "a1fd826c0dee8592248561434d774535"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "82aeb3c85c13f7daa24260d4e4c890d3"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "16b9423f03ca25d6f6096ea6d27befb7"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "ca388cfdbad5b3ac773ae75738755416"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "2682811e87f011b076ce3c4fad7b17f8"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "6713dd7465d50950be1fd45966e12698"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "4d25d80e34fc1d9890f9f6ccd7ef89f9"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "f104ce03001c86bdf430075e59fc56b1"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "3ec13d0a8e04d7214f63b2e01e180f04"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "56024d7a99a7c4a89879ffd29339d9e2"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "749f335bb8cf4a5e92c05fddd1a40d47"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "b4540db88e2f6bec0aaa26760b88e308"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "fa9e0ca73d7d2522e09b4feb6f272a64"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "e72aa9ab12c0d3fb202cf35e75356843"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "f113ba174f928167c99506afb89221af"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "10b0d5ff8eb9fc61df45b3fde2b24825"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "f1e560cce4ceb2b50d11883f810e8dd8"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "d67ffdb610efe591e4c79fbdd067a0db"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "16d7c3b1289d7233dd2fbe203ebe4c90"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "9c1d18da2c1b65cb02c9fbd4b99bc753"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "3a4f3fd4ce4df56d1efe47c523fd8077"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "acd635c5c0e125141d5a0adcf6750fb9"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "0fafb6a3fe455908161d374ed3480a09"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "c76b448404d145edba73dacf86735321"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "81fdf8783129f9f4be984b1e488929bb"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "7cd7f0e12b0097173d18bb502b401fb9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "2bae46298a18d2d7298b99268d88ea7f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "973adafad2d013435b30a8fd6eb922de"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "10f25cd07028c7c465087a79a5c9e936"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "5c63ca8d3f5f8bfb115864288165fe4a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "1b36e92a6a1b2c9222574db6a0e96d3e"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "ac48e9e4add15e5eeabfc3e218bcfdd8"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "0d6cf9668361a17efb47bc6cbbb0c26f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "0a0d91228915f4b36e1101b116e9cb11"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "ce2e8d412c876298cf4529c6f12157df"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "ccb13caea0712e08623c94943a208dbb"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "fd92292f49e29464df6039aad04a10bf"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "96cdbcd002e81bcbae6d2973a0fe88b5"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "81fdc4e4c832e94c3654ce22d14df253"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "3b92cf8fc1994d866835b3bd01a27ecc"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "ee99fbe600534964dde48d64d339d764"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "cef39cfb0f5c6fe6565a55d53473fc05"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "d146c46b12add261560d459bd229e2b3"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "74e61ee1b2ffb2c26c20e8bb17e538bd"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "fae627387d874778a9481ff466bfd3d0"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "ef37a644d4912dac371428ae4d80b6b5"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "ab0cf2ffb718fafacdb31d58ce3bbb09"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "122925bcb88136faa0322db64f0be6e6"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "425b1d46c0c4c2301950c52013a218bf"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "eb468d9f97471e5cb9f71f3d482c1bb5"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "2c6569d1c4116b65218bc1453c9f21e2"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "bcabf97d1cb9f09d56b25dc5c6aad36c"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "52452a1e10379b2de98a49063b715e1c"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "61f0f8d22d71f34a283733dc0679c74f"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "e0d2c2579cb34097af6f557e302bebd3"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "7f5dcf560296945b3a5c674de2f6b822"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "32f590346bb94499b8a3b8a93dcbfb11"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "f95c01483c253b717639756677d40654"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "9fc633d46c6a893f4da1f4863eff9052"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "4e4e4c9e2a70453329f1ad08140aeb65"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "247c4cca6c9be8fc1f4b02ec720eb30b"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "06876b7806002be5ca5c74900e85ba9d"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "503a8082efde22eee021f95db65c12fd"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "dd033e55aaf3a943b31d0d61b4cfae88"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "2a3ef9b61c0ee9ae515e3f4240ff1ddf"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "1fe5483c96ff0b27b6b1dcbf695abcf0"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "bda4d9ddced5c603b0a3dad499b3f539"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "fd829c4a7bc13c581537f4800bf07144"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "e1d6549d9c0caf55dd83b49fb24b895c"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "a80cd88481ff5348dd9ef13f65e6b7a9"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "d93b4b2c56dffbede88f02a717aef8ac"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "5b3b426330f1dd7e0666153f9f19a3ce"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "1f83ada90e8a795b41f23ece0400f4c3"
  },
  {
    "url": "favorite/index.html",
    "revision": "2248498953b874a61284afb7ec2d633c"
  },
  {
    "url": "index.html",
    "revision": "2409b384d931d18231a45ba271efccf1"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "c92552cc91ad5db90001ae54569c994e"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "7bb0814a21715e4f386c8bbbc324172f"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "7e79f9863cd4049e1af1770a8851fb69"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b4f5b1621633c4d6bc795fd6b4f8c489"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "87f40256e39d5186a353b0ef463a48f8"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "a2593318261adc39776b6c35e93693bd"
  },
  {
    "url": "note/index.html",
    "revision": "9588f902806fa2b4785d5d6d81612876"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "53728ab99bc935ee792dce1e28ff1d3c"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "b5faad20a9c46f0a959dddbfb62bb656"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "31ac4f8fac2e6d1f072aacc8965332d1"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "24ec1ff7d24a587d8d5fc1d1871411ca"
  },
  {
    "url": "share/index.html",
    "revision": "43743f428be40cf5f7f15f92ac956c2a"
  },
  {
    "url": "single/about_me.html",
    "revision": "c450b68122cda648db054d7bbca83393"
  },
  {
    "url": "single/all_article.html",
    "revision": "f9ac0a6f301e50d445188d528ce47635"
  },
  {
    "url": "single/welcome.html",
    "revision": "2a3f7029bfe825d9be4018cfee502dd2"
  },
  {
    "url": "test/index.html",
    "revision": "16104adf4cffa29c3f4980ed72ea57c0"
  },
  {
    "url": "test/test.html",
    "revision": "0d659f3e9bc60aeef6c849fd6578e34d"
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
