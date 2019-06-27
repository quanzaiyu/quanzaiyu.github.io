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
    "revision": "b69fcd16fe5ccbba1baa144b75368fb9"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "d6fffb0738652d423378f4bf90513aa8"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "e2b9b9fa18bbd8d90dd86bc5fb8e4c10"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "78d95d1c225db8e2cf2ea2c1ef0073c5"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "ad4f5afc2e4fb1e920356d088963a79d"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "7494706ff4e9337f4034b5711aed73f6"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "be114c28680cc8427069d88ef4ab4add"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "e5cae2b8bcecca84176e9640feef12b2"
  },
  {
    "url": "articles/index.html",
    "revision": "6969f9c16b167afac5b19b0a251d2edb"
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
    "url": "assets/js/1.afaaabe7.js",
    "revision": "98f42aebfc05e62040cdc0947afe64ef"
  },
  {
    "url": "assets/js/10.aa82e34b.js",
    "revision": "8cc4d8245bc7998c152ec2d89551d8ca"
  },
  {
    "url": "assets/js/11.8ecfdfba.js",
    "revision": "ece17c831265736aed1c82e7fd5a1896"
  },
  {
    "url": "assets/js/12.e029831b.js",
    "revision": "0a74fd59b7b82532264928b8af34afc5"
  },
  {
    "url": "assets/js/13.63420ebd.js",
    "revision": "ba2339b1d5ebc49ae89e44f07dd930eb"
  },
  {
    "url": "assets/js/14.06787ef0.js",
    "revision": "7bb0360cb5756ffe72f976c6662e66b5"
  },
  {
    "url": "assets/js/15.77a51247.js",
    "revision": "052e9722b37e2c91712797cdfdbcd842"
  },
  {
    "url": "assets/js/2.09c78e88.js",
    "revision": "e76e5d69d45d0297c64ce5200e3d5e30"
  },
  {
    "url": "assets/js/5.02c6f39a.js",
    "revision": "559d4f72755cac87ffe7b38de0f16c6b"
  },
  {
    "url": "assets/js/6.48d6b923.js",
    "revision": "a6e5a465e4f98af2e8eb8cf1a0e5c4b9"
  },
  {
    "url": "assets/js/7.341d3c18.js",
    "revision": "39384b88819dd524d5ad42a45d86b21b"
  },
  {
    "url": "assets/js/8.3dd7f6da.js",
    "revision": "132723e19e308a082263e84f6b654871"
  },
  {
    "url": "assets/js/9.35682099.js",
    "revision": "c8cad22beb15ccf17b7252b9c0e235e6"
  },
  {
    "url": "assets/js/vendors~docsearch.333a44c7.js",
    "revision": "e4e7dfc93474ff561827511f9eb42a59"
  },
  {
    "url": "blog/index.html",
    "revision": "ac384835970278cf8797481ae8fc77e5"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "f3db2234b9118dbfeb9d668ce9211307"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "85acf873aea7838ee18e37c165ae0b76"
  },
  {
    "url": "books/index.html",
    "revision": "4f34046c84e6b72309b91338dccbd1b8"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "a53c6c919b420700747bca01140fbfeb"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "11f8a9bd6b5c9c3bff16badbf27171e8"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "e0fe8f3a17bdeea8e882067c5083c2ff"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "032d398b9baf771ef82fcb8cc2df1c90"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "e377a7e924b7f862ba4af84cc1f6453e"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "21027bf4e6968ea4ef778504fa50b999"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "b2362e806ab500471ea1f6be57ccf9c9"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "28babf3a5d78d155c1a8fc9f2877c815"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "85240c86094d44d18fe76363e69f928e"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "f0ac9906d949f4ab0fcc5b47f10e2023"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "b3a92443e89126377e759d87bc1f7403"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "f063f2236d73ed0646f2b2434a0f6d42"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "41bfeabd9561be798aacccd1b2cc6523"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "ff1465f8744b740b860198d2c6eaa564"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "426bf16758eb5f23fe387c53f8ce4d4a"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "d1f90d301c515fb5ff32dd0f30aa717d"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "fa38e1806ad7621fcc4d7b7351f59b01"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "d855e6b2a05454d83e82c145c348e0d0"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "64c7fbdab8789ab6301e9a9e36ef6cb8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "5cf5e93ee6d80ece026c88da18955645"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "d733e6f9dc40449c14686d9a98a62705"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "a6570c5a1a079a14570852f2d786d746"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "1ab36818dd59b4f74a8cbefb9cc3d2f5"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "c5f0d0dd9bf5c4126c20990798b86c79"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "50b98b14a3042c44e23f89787706c5b5"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "cd4a5fb3a63c8d5aa11b2dfc1395367e"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "81fa9ab89519b68432b01ffe98d65942"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "23c0b4c6e790b6342ef79b98e4b470c8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "f1ebee187e472e9b5fc3eddde4869766"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "3358c3847ad9209db15003659d0b119e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "9a9caf9b9ee4553a5f995820df4c7475"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "58620d391d059e7824f1cce9b334be54"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "19604aa6aeb354ecb55b400a6c6f7136"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "de1d9b869e1061483bdf8fb53ed6ab5a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "d613276a03fd342928451d84f7f36224"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "504920ed01283a797b30257808625eaf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "ab0dd8f02dcc23ec9fe748363b6b7f69"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "8f7f88bad3a59f089335d8c2d8466579"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "9617b4a1bba3b76bef2ebc21d5a9976c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "ddef12761b34c65e0c58dfdec08ed0df"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "d838c43a76dd9cebd691252d71ca5136"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "4e6e15c2dc2d98b47e07867038744643"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "81f2ccd8ca7174c7fd26cd830e66730c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "5b3e1e7f9a8d408f268853317ec43a87"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "b10c1d7272ef6ebc6ee76364de2d4fb7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "36afc0fdf496744adbe6920541bb994c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "d3b127e956923dd4acc849e6ab7db987"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "97f4ee119b812d61b8757068d3adfcc2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "ccbe3b90b09a1b2c6070fb26651a80ae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "99122954f1e0a64fc6a2755d411ea1f1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "6d673debbca808cfdcab37f05119693c"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "15a3947f1576e68cefdb1400ec7b7638"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "b9791ab4d8ebd96416731c8655b243b4"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "2767185930a00ba26f2354f7f49121ff"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "b86b247752238de1ad9b9aafd5422faa"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "86e7272e8571626ca49244ed72568e05"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "9663c7d667f1bbe9604cb63147fa5081"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "47239ad3e21415644e1c0c703d22e63a"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "4d7d4f5b9e0fef8c043c4cde8ec6331b"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "f77c9c26c7456951455ae44c4e92e3ea"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "03dd42f9caccf323f00e88bc73270562"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "36c990f13bc9ea4a01e2c208674d70f8"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "8aa29cc9ca41466444f6e050591d25ed"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "f50802dbf4271bcd81ecedcd68c9bb37"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "2a1b80bbe70db9d526559d46b0b26eeb"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "823b81c102e67270842ef8eedea6af2b"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "6bf210f761297fc77b0071975f180396"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "020733326020307ad1d748d15d9564a6"
  },
  {
    "url": "categories/database/index.html",
    "revision": "43a521a7753c21f2e4e717f38a91e110"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "928e7deea2edb998af2505857c2c6fc8"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "c644c2c6c01fdfc5b499748e08c6fa2c"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "7c73c322cf3d4f5dfa1aae8d47453ab9"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "9f17e2c7f000890c209c617f65027cde"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "83059d4a5031c15065086eab360dac3f"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "2fa1bab541dbeb3810f27145f57dee27"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "9a109f297ce765c6f870202e7f8372e5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "6d44eb3e7d2e1e4afdbdf4818cef6ad4"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "650ea1b9cd29b290a82c5c17790382fc"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "f3fb6d93c8fc1008ad05605c2e8ca6aa"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "1780e0e3f1b83c91ff348b72f3ab8f34"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "ba963c486b73f66d3f3348525360a753"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "0435e7039a0f4934a8b1e686dd9a5a97"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "9ed51748d2afbc90af9eae617bff01f7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "429412c2114f3074c8077ea8e1fcf715"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "25cd9f7437f4e31c735bb8ef5b41acc2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "51ff4dd18f8e1f9eac85380bcb1a1486"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "35829e644207b412e3a0f5a3179411da"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "97206dc38f8a9a6d1a8d07285eacc4f7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "d5d77e5c185db5858daaeb74908d88a6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "f9306354ba4d8935d2553b88ba699f75"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "89f011ece79bd6c6ab6abd95ae7d4160"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "aad6278a596f5062ebe9fba0f3af1564"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "f72b19e06fe8bbbd3bbdfa4957b53631"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "bdee18de1df77dcd9dac2b15f21d9677"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "5551f5726da19ccf7b8e6f7f33387d42"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "7709f1bd329cc0a21c1b8bd73d8747ea"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "18f803cbafd8253b340fbba4f93fdac2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "5b66ee0c71a37aa570ce349a2ec1f707"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "40db137dc87205edc3096d95d1c7ca0f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "2e54b833860a6f398dd8b490c9dd946d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "a97190a2ee47a5822e948a40792fd495"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "355cf01516f1ae2584b42b9da660537b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "9870b0c49f28a45bc7d9f5e3be3b9f54"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "1c1edd72f0e42b2cafb26a02b411ad6e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "b5f66efa501289ee10b4992dc85a3e85"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "0ff96f6e068f56a9e5af0006884292d1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "bdf263166853bfd77e99ed632ca8af0d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "3c6997a116d5032b602c6d08eb63225a"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "f18815a73e318cf5b8d4f27977bc69fc"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "00b926af31c59c060ec56831b043ddb9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "ae943d392fd3923d663b34d4ac381f15"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "17ff40ee2ff32f105b405effba60e23d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "2a2209edebd673acb5b19180233abd89"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "9df10acd331ee591824ab567559c53b4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "091410d184ee38572f51d81f1fe3e764"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "672296741a44b5d2deab830d0e4d9c73"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "c0383bf024feb8f4d31cdcdf1ba7da13"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "3f4f4e3c5d25de3ec8c951b660939582"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "908c8bf36736494e287c52af574e4a83"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "eebc06741882b4f060d2d933a719930c"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "d8342287632b36b184b1807b70ba5b5f"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "c6def55f7bfe2d6cabf2c586ca88a299"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "5d2811a3247a9673fa9e7adf5fda943e"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "f0b9c146779e72f6b775344554ac18f4"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "edceda4354a92599e33e96ec517eb711"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "a1ce1074a0aa07688e6839d34e6e7253"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "493df751b37f65c7cb9b8762359eb89f"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "f3e5f3abb2d4b9871ff2d2d9f8b4822e"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "1ae1f1fcd14ff842b656da80133b3bbb"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "e930833b32e9606d3d2caa7db4aaa11f"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "691bb853f0de583783ee146bea19bbce"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "ba7dcaaaa4f4e6b02e472b50286cd29b"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "d652468de92d926cc10651cbe2c9b555"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "c28d48622a24acfbc5292f6a568334a9"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "45d45e56c46f8a4c4f2b88011cf355c2"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "7999ceb129f1f3b90ff1c9e4f12fa268"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "8ff34a38f894cdfe4c910863807057cd"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "de060535e837eb2084770eab0d9df861"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "d1b460539bffb51e255361d293028a36"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "739fdd4980a704fa024fe7d12c69a368"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "7900f3edf5b30ba923a59277f986f980"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "2866391f4b67b400262aa22233484d8c"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "08b1ab1938cc58b532cac1a3224a34a7"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "9bf7c024a2fbc2a188423314c26c2dc1"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "f641e59fa65efd7305dd6331e12e704f"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "ead81adb6723720e79ce1ec5b58a81ce"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "176873979a54898da57942fb49a8dbee"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "e04c381fb5a31f899011c96f4eb8352b"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "0b15b721c8f09c940928ecf6ff139c4c"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "2b5400963d4698327f8a276c8abc17fb"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "c01730b69dbd328a16cabcf85350fec5"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "795732dbbc5b4cc1e510fcaf0f0aba4c"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "8ca62b43de3bf25578dfe18ce9be57b6"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "847d4dfef402f1c6da7f489bbdd180e9"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "e290c34f1e7bedff7364c4cd26d6d3cf"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "4ac25a8d73fe8c13c33412465717a702"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "795eaef2a81cacf29c243de33b129b1c"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "59e4cc921979baebd401cde73fad4e6a"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "6ee9928fea109110c0ac94568900ac76"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "64f91518118f6d299036b9672b500e3a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "2abc53eb4fda41ea65eb5b8c1ee23fec"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "ab347a0fa1ddff5bb55cd5599adeecea"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "963d955ae977c7887c11c26664c57cc3"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "2a23e1c2763326ad8cca3f925a3260a2"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "771e5d9edba29a40f53e722c1f486e73"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "5695bbfe2cd7a157f2122b9505c17870"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "b875e378122c2e465561d24de750a8ad"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "3b187b9818183027f9c241c776f67823"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "2765d5bbd337b1dd42a3ef4553df25ed"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "2c57eaa37936eb96771e99604d50572b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "952a8c9ac44f23f7ffb74a5deaf7d9c1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "7c9c53c5800be2ea3a6c3e6458e3ea3b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "949f296e2354fdf4813a11872235c189"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "0f41b49270c932a79ab28911a4d487b4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "81b17f647a80f0e65c3c5cba0017d1c6"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "09bac6cd6999f54100afbae1b7c48b3c"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "d6d6bca0e5c0242b56e84ada0f148643"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "1a4b1f7337c10a2aecf42ba8099df349"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "74cd84de4ef5f37727b2c4c87872231d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "957c382203112083e6eeedacb17393d3"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "80ddb418423ab36860f604832fd8db1b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "868592676d0b10a595de179a24bda3e1"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "7f38d6b843f0897c97e24f6ee88e947b"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "4d58ab02552f778722668a0835a104ff"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "9f34723383de50520e3c9d9bdb64dc88"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "cf2a632124864b67c9c16e3a4fa93073"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "f4168877132ab749456e7abb3c47e65d"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "e3683b1823f8484fc5071f4b78a7bd5e"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "ada980a171c599ba46432b262d247910"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "9972e16c5e0fea7661c1dc494f5e2151"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "ddb446c651fdbe9fcda826d219c0741a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "aefb96e44f227c847674f9e974d2d736"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "f413e6290eaa2277cac902d1281171e2"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "6411b961c2e2736be98ec022192e67ad"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "0f509bcac4a0ae67de15d4fc175a5708"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "bf9d4c152c16b8e531dad162299f5e47"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "fceeeda7c46ff17621593024869eea9e"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "84946d71f7bf070be4ee6d3a7ab978ad"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "14387fab3817af8592a36cca0f51f819"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "12c5285271d6bf8741701a1ab3a41864"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "f89cc171374e7fe3a558332d20406d6c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "575850a321d9da82ac048845d6f9fa9f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "dafe82376cf3ad262a010b6e2e23aae3"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "0596478eaa58adb418ea3a6bf3cb57ab"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "061c023ccf68265803452f8faf28a8af"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "6721e82a054b8739f49e15a103987d22"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "a8a9a4f2b5dd97cfba5656b9369e9c47"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "11a49c9bcde316d29eb1ebd08d713a4f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "f8f01d4eb255f8fb8ad192633561b138"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "8d8a50bed7b23a220ceb05fb046ca06e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "6fa95b9c4c45ef924ad3ec4a78a142d0"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "0595fa05aafa331d2776890d645ebf99"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "fb39b10b5cf05c8114ac903ad76dc51f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "7e9f56559a365987ab81644d284c1441"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "917b1344dbcb436e0f2961a6cb049c45"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "b9eab42969732d1b688cd85d6932206f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "d45e42ed4f7134c76297bfdce26430e6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "3f389a1c88c0b1512e94e739397d0406"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "37204f1a141c18a7f7f4b1299cc3b4e8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "a15b6cbaad4542a4087b59d714bff4bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "7ceaeffa1c5bcdfa2265b76e4ebae052"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "922c9823034b76b0e7eabf3fe572b8d8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "d00339d5cac41858792d1d7d99ab4ebb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "94aa5e6f2231d22d62f8545813fdf60b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "9a0db87ea121f9400bdac7c4d19028f9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "5bd8e0d373ed7ad47ec263531b5028df"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "9cb96ab684453051e331dcf798e6cf1d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "161ba31ec7b43772c233defc8bbb0b93"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "1f66ffa8bc8ceb01154299b7adfeede5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "7cb746c6b217330497573ffeacd6dbb6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "fb603f18fe51816c55bc5a8eac074e89"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "e94ffe6f5bcbb55a8c3bb13f877b4f82"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "d72e2c80ae3c69b0c8f8567910dfecb4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "7cb0c60e1427a38aabddf26d5b0c1975"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "29bbc355ce9b31a0fce21b353987fb1d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "323e99bfa0e2017fc07a2595910607de"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "9205d8628aa1de5a0fe1a9bc72fb9952"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "288d73446961114c456d92f053e499d7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "70de5ff0fc8f5bfa2c21dcdcf311ae76"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "0b16b3208b6712571b20d1f440afc3c0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "d6cc639cab1d5a1b0a70d4fecb2ec49a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "ed15184e3a5c1be3f4237fb4ba62312f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "068d1773a44aa62c1dbd54cd4b7f606c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "46067db04311d8b2b87f71f042dcb4f9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "541cfd738a66901938d049c6d6cb1414"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "b263ed14634a3c6d3e6435cc4b31357c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "60f78272f3258dc8e4fbc324e692dc01"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "64f84a1f29b43911944f2f138f39ed2b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "ba2a5dee22cec8ddbd920e36f5bed658"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "6ae810ef9499d51a55ee467753b4c26c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "d41090a2985b52b72984eb82d07cad17"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "b55a440990c9fe740bcd908f89d6d3c8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "26d7f4068ea07430c722e5b0de2c90a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "7884e4d340bf2891ddcfd4fb2adaa42d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "83b09669d1ca742ffb5b28c65c561ce4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "aca4e6a7536ae74775b7088921619779"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "53b9a818049421f444e017389afb5e7f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "9885e8f0716ea3f63aee96d56db1530a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "844bf4b517224eababbb52d15cb4db04"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "c882d3d3a5d15177f2651b9d3a31cd58"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "e72fbcddb67f35f2cca6a43e9e7a7494"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "8950959f507dbd89f26a88bf7a143145"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "922f476c62f3c2e29abe752203d9fe2c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "128b4354905f3c796187201713b14dca"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "d917a7fcd65f6f529467c1cced5fd2f1"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "c2dbcb54e9dd0024934462c695f016cd"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "7ba0b6162681623cbe433081884c57cc"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "5304eeb8019b37b70a06de1220b72ca0"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "a1fae5c4babbd17c24600748c039c7e5"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "0f5833de7841a6032fe463ed94d5400e"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "79be90a00c6996d1199f4c5b98573bf1"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "88da4bfae882d752bf1a12117207adfb"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "518ade1cff5f5677b7b7c3435d85acf6"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a44f23122471ef0f912a82e62de089b3"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "6807826ac6559666cde88f6130b7c8cc"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "183c4a7b042d84b8c8aa0d7f644dd234"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "2a774f5e9b1e6bb85627aa2363716b7a"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "e5ede012d6ed1b873e257c63f6dcf602"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "540cd4b3ae0f71693955f3262d0f4a9a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "00e659eb3e2c97fdc094992e2571c053"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "964a5f6d462680dee0aa0a978fa9801b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "99dca58a9b20011be513cdeafbe19116"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "ce35b1528032c772609d3c48b0397d89"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "c77a183b372edf6ff4424d6ec3e96066"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "1fe0d9bb2d5e8a46beafc9aedf81aeb2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "44c3b3e0ee11915e8c0144b0904214e3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "c003f29d5192ef32978ec39b83bbb8c7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "e1ef410b44fa1dd55285fac692ade26c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "a049a03416c174a952195c253f7970e6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "c84d114ead670cca2b0381cc36de7d92"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "4fc509a4ded7cd7ec36d0c5756c44f55"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "6cf48a5ffc8b5c9f443626e3657a909e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "9cf190a91cc0408e3ff6e236402777db"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "4fa6afdf848586f2fe407a1bf382ff1b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "09067fedf9e166715d1fe53892ce20a6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "f641863fe222144bbfbec550f6d20bf8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "10c91d5dd94282f495c31883bb22af7d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "45555d2b73f49ccc13e07eef836d6106"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "eb5bfccbcdb5211c6e2490de424aed16"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "ab762374e53b6ad1a3719763ed6c932b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "dac043d9bfb5f3c9464d797d78b1628a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "36d387ef06b9e2df94641c714fb1e135"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "7a54923582b16a26523210624fcd4b41"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "d5f549940c7bcfa1bff0627413a42c88"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "1fdfdafaeb6a42243db63aa3017c1ba8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "e9bfd8cb20c7d86940404bc72990ea72"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "f904edad2654fba7ef3825e5a0dace17"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "e5a9e64d7c1ac7d48897f1a42ba3f509"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "f4b5e64a8478910f9ce744a60c0d72e7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "9185311c879da4ef8371d48fc1dd09d1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "6adbad55a6dd37e56b47e48c30dea815"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "6b13153938209eba36e26ca29a4102d0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "ebf5862e6d638542ff815f5516459108"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "b41ded31d3260f037bf5ece3f5a77caa"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "3502f294c6f3cf861bf6e42a0317bb8b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "b2d00fee6040a4ecbd35316c07c3c19a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "b9755346aa3fa706a9f9cf50028516d7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "63d64d199783b4970b08cd639b6358bb"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "dab035d7431893df590216e9cd7076eb"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "727eb2fa29481380aea7face09ff4b57"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "90ec37dce1ea5437b3bb38ecb7929a34"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "4c68ba7a5876d16313260938c2ec81ab"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "41a88f28af3492a3d523e064118abf59"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "37a2347481bd590109943a54dc72f6d5"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "3444f37a90e614f3ca5b7b5ebb8314d2"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "085960639de8caaf5c934396289e014b"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "290d923861b144a4bb1c36fe73f26b8a"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9fe3f07f622fbe196f2bde0c3c5474e9"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "657a34fb07ca788c1923c483d748013c"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "ec61448b6ee90682e93978184dbc5bd5"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "a02ab1de4df7eaf2ff88b03840436b83"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "134d42812f65a1693f16210a922a127f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "875809d1feb152b984179d801bf90985"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "843f461d1236d0a851d4f8ddf5adc99d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "19df31e18107fa734106c2b08d014f53"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "d18b9fbd1a32db74ce17badde2f8d790"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "3d1ccb792b34bc5fafd7c9142ef2ec8b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "dd29839adf5e46e434115b5515b7a3a6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "3473f3ab63372509e2c7daf160ed111d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "378c0b74eef8f99e13c9dca18d580e25"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "af5fb0dfb44871a698f050a7d1decd75"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "ac7ce7aa9353f505d57c796962c685e6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "9c88db992b73e0f4134b3aeb77f9687a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "93c8f9b3a8e4813353e98d07c14f8715"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "a0d7e59a9dfd3c88975dafeb9809da07"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "d355e80966175dca056646f997c75863"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "829112c2a42409e77bc443c2a45670f0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "a68de72c7b3117f5318804492c2dd486"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "51f8499491c066f14c418bfc6b8717d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "3d413382d7ff8ff29eba6cbd79b4b495"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "7fbb4d1a8dfbde08dcd6631ff6cf7663"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "6f1ba86de01005c13fcf5109b9956dfb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "8bf66600c14eab9a5771002ba483973f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "38a291fcf4ab9d8e1a5990319e7960bd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "ddd9312108ac5d79db7bce290a70610f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "89d508b201ab4310699efe73ed49fedd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "8fac15239aca90f0c2e25dddac9773cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "32b9b9a4a17be33a99b70d481f2538a4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "51de97a30483171c6566e45d169d0bf2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "a56113beafcbacb1c5e52e7f239c6e13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "771ef88ccd857fb3b3d5966c67ef1927"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "13fe73809950a4efeabb78a84cec0ce6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "33d37cd1219c73372d6550590b9dafae"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "3802110746b1d4ecaa8ea87f2a455989"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "2e98c0a6ae0cec8c463eb6ccfe053ccf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "37ca56f9e57f9376cca46319114e6a92"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "3022649009e05e7fa000e40533dcd727"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "dacec9fdbcaacf962b6b93c8c62b468d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "42b67cfb00920703413694c68543bf97"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "cc2e56369537fb529b508b79cd6e4e99"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "789e7a25a1cd2cafcfcc7a3e9c249c00"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "787498986388b000fbe54646683fec94"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "3a108bc9b0d210ac490e2251e7565da3"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "c1c08c994441787234d9118af60300bd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "f70f36136bc6f58d1a590c1f8eb36e0e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "cbf17556a76c0b34e0d1cb2ce9ee0882"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "9507e8e864422201b11c05fdb00d6919"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "3570d3e320403517b4ab800ecf9713aa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "1ef8bcde211dc5c4b163f3c7b3e63b22"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "e9e275f0368b4a44b39d354882bf8605"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "f3a4c581f393690b08c5ad70ce1741b0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "5bfe43ffba8c5413938eb03fef365ca5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "b84f0fa3818eadac1ba273fac6bfc945"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "00c71487934d8514617894a48f004fdb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "c2d145c50066d0cd31515639af76ddb4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "ae03c82b93f49c0e71d7067731946dae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "ac200a235c751adc78d4308f8a79069d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "bd0dd6365f938eb0ca955373c524f126"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "f6076804a7b7330bee111762261a43b6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "e3388f2b63a0e6bbaad664d8c8df9a56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "b0fc88e4d4b9fe29a64c50dc0a42e44b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "5debf8f59d1a55a762cb67257e340e57"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "5bdda4f28667d30b342ed12a6ee51a70"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "bb90c126af7b5f447d38f33193b1a3fb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "d454a49800b3e81a8c69724bf59fb66f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "8eb5250870983841fa544a58ac6e510a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "b330232da75b735ecfed39c6ae5198a8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "320ec2c1b611e0a0e4e59ac7394b6afb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "f44970366ded9d608cc2ff5ead7b82a3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "4c84302250a5c5ce9bd8621cbe8fc528"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "828c8dbca42c166f3bafdb7d294f31ce"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "b38f6a41c009cd81b0e92fc407f07948"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "704bae26bcc793d9a95b6f866c4fa55d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "c51497246a27c396613d860f5dcfb065"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "2120c1ae6c4251bba6790969f8e20428"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "11e52dcaff53b27594fefb06a08426df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "e2954878696b066e19d6131bf18eee19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "e417e545ac936202263c495fa3d5b05d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "bb7b93227492ecb90207ca48a87ee1ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "8e90b3d8586be7c991c8abf5bf897778"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "7add94feb06dd8300bf9a7d084a68b52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "0e4db946e6e91dae56fa9e44389ae959"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "0e5487028dba78a678be0a2558630020"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "2101f1aebdf15c76ec39bc6f2831801b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "d7c88ba3c5c31ab0205ed949c0ebddc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "cbba770084d44b49f4f781e31894b0cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "b4faf547e7504c80b6cc3571e630c275"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "77a38e5f7ac336d068d7f96925b4f960"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "f79f7be3a70335a92b9cf7e6bc1ecfac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "f77ffb7e025fc81688441f15dab3b100"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "a85ccbecdd580e719788649aa627a0f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "49ae735e56c02c33315c9646ac6ec468"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "e447f0c15a3ce104668065a96f3494dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "8856f3931e3e528bba62e62fff31b8d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "12c99894d701c9732e487d3e35f61939"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "9f713b68b876711257ffe716180dd3a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "828d50c4dcd223bfe2575d7eeb1e3008"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "a562c6d46b4f185f5ad1da0baf17e2ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "2c161b4e4088060b90f961e7e3531bf2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "2220d8adc5298adbc4c15d89bf682f5e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "a9c3644d3c25f18ad27777ba0cf46367"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "7a68e1734269a5ab5a9c7107405de1db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "e8de5126451975258f3f0f4fb1c0357d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "62b11b633de0a35698f1ac4167c51371"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "877e21657e0bb3cb13ccce707ee3cbc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "a65d86928a3531d9f8372fe78c3bfed3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "b03b82a2656f1fa0be6fb8d0fd0756a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "0f858c0b48bf8555a0deb7eebe3f1014"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "72ac659428bb1a488d9f58caf2f45387"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "5bbc9fbb6752bb59165f34989fa473b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "c47a034521dcde42b4da6a068b9b50f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "d093effbd7e92d19df51e18b45292e73"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "43010920a8ff9b401be72c09c9edd244"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "65994a4a39ac0ffd430eb29ace1c321f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "83df8434f8fa8ec263f4b046703ca0ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "ac83c6a8b6941b26be211945aea37bd4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "4da62ef29a532f1aa6cb0496937a3be1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "5b970f704410a60141c4adb65c13f248"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "539fef296f4aa31b5c7fb2ca4bf6f443"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "8780ce1dc35215ec1bce4a62ba6c80a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "01be692a049c8b2bc00ee24a9ec6fbd8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "277cef26fa626fe623812bb427fb46ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "cf0f3ca8c9c732259fd4672cc883b4c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "21a573a8fe2493bb24c65c6e2d944318"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "172e88b0cdb5d4cd492b1e7df0fe15f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "caa1acac988c744d20441df56ac8052c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "978ef30dacf4b61db8b4857b61b711cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "1577b354b59b755758681cb32e68b820"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "0de307d455c2e8146f6075d8a83d236d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "588a616e4754aa0e84ea210582da969e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "1db5f07e8a78e99cc97a5964b3dd7d18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "578ce02eba4dbc2e28d323183be3dea0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "d93e0c55ccc9f99f0d1adedb21a39eb8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "80dc398ec6e35bffd9229e93dd5cc309"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "be65f66345c6d782593a9955f755bfb0"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "43a7c8e8346d90c0654df00e5b338d3c"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "8310f3cad80cf3e1848298d9e98b8011"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "513bdf896ffd0fc9e1b4d3f40d3ac8c0"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "4e7ecb426271ad6ced7cbe8e8412951d"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "4c56a178261fcfaed0f5d6fef295b642"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "4e899436112cc4924d3c2b43b18bd2d7"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "ab1c6c30ebb9d34bb3f81f29c793b9e6"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "c7237a734c821b0c815598e8581d7967"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "bbebd507b24297bbe7017eea969acf2b"
  },
  {
    "url": "categories/index.html",
    "revision": "d7ada805668738d0acab29c9eff194a3"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "163858ad308d8a6908b9e666c06e584b"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "0eb29d2c7465351edd67844eb5e63ede"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "f3d1cee7b6e66c5ccea8fa04a78dafc4"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "3bab728ee10d1bd5301239fde26c3e5b"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "fc8e2535cb417871fcd77c55e5eaf7fa"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "1d5652b20cca56d15e043f1adf2483ed"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "84c2429c1b1a4d55dce421f7622344a5"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "2adf41b4236de8c9de6d7dd6afc365d2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "df5d92090ebd08041c95d35bd3bfba32"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "fb3156296b1cf1160e2a96f19e9f38aa"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "08eb97d2c5954b523bd550c37dbee619"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "758584d5d662010b47772552994ae258"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "48f05b1c9ef68814a41f5e363fa5616b"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "81a594adfe2e02f84035dad0b59ce7b4"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "6164adde05bf1ccbf78ffb8d238a6d3c"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "203428f2338df8239d8e73d54f18659e"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "3211095620c91c8eb755722c40b4f458"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "59afc02565f8c7306b44b5236d323d31"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "99389cdc8638480ce40d71bf01c7cc9d"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "337edb400fd3604560626967e1d6104b"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "f2930343ef3142ac78d2d4fb04bc0ec6"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "cf21085b2f736aa1d2ce5d6f06e343d8"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "a8a86c4abbf0821be648071e0261d2a3"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "eb6059bfbbc4f5e0812ed0f881243e52"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "d20ccd9984aa0e448da07d45592b91c5"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "81f7e8e1a4774ada1e79799e5c06e633"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "e4d6a3f65749ac61185c00e19339f98b"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "c0340df0cadf71e130a762f4d2ee3567"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "68d261bc4765b5f850f2780160aeb6fb"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "56350923762e5216daf05cf9f962a378"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "46b41f2eb70e35827057142ab4f04c92"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "ee56cf39428e45e531ff029622093734"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "baf6bd415add00fd64dfb2f2dfbd6fa6"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "fff5bcef5b6df4e2df805250163ee1c8"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "39da4155ec1ff893d8d5bb149087fc19"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "8149efba45ad88f08aaebf48921ded46"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "7c41cf6b745bda49f07730c14ce3380c"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "7614a924bec0bd2daf3fd3c634807f2d"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "305cab9dfc2d08435fdf0ff24875028c"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "90a9bb30b3581fd083a464044373b3bb"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "86d713e4459a5f25bcf28c6782365ce5"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "033b4e89a484fdc6078bb12f1b1c062c"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "ab928b04f8e06c3786f9a90aa1579d8b"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "48746da0bbcac7e6b3ef16a568faf420"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "20dca3763c55bb1649a819b32ac8681c"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "905c83dd15cb748e4602d8fb90012c3a"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "98c36322d1d38f0892b57134a2314c16"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "5fed72fe88647c1e39e73ed8cdd62778"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "18df6c8ff9c2a514c388cf6e93a2e6ec"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "21183a923793537b59dc8de101533806"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "6da9d584043160d38a9d68664a2078af"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "c68d633b08fbd640e1ccf20564d037bc"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "45308c3a5be3cf4f373f5b57b851939c"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "a4cc92ec2c082d8360037bdf9ead8d0e"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "f85c58b8924c6eae1b62bb56707b2b74"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "fc17822a6c0da572d1ba243c5354673f"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "bf97d6fd7cde5ada3b0fbc131f1b4051"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "a2c879dcf78328f998af9241c8a8dd65"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "6269739547cb4e105bbfcfa3e526de6f"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "9ede255f45eba660074061fc2378c1e4"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "5a8a07c7bacfbbc859e4d82cd9e006c2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "2a35e7bd38f4628b67404e362c1a91ff"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "57c0eec479b20b6356caf5a65636038b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "dee7ac11b56897d95c90a8fbcee43c1d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "fbb0590ff5c052e5499cdc143a6cd8b5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "62c5b6d201c20cd4c6da0de83ea4bc37"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "1e8b024751d549bd5a5b40b27d2041d7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "2a7a2bda9f281a9046bca0925cf2c13d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "cff5eb55e962bfeff3691e33694da55d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "b61a3c8ac0e1c718238b70deb1965591"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "14ab452eb94aa60f56181ae7dc021863"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "2fe5c9ef3a5100a507d1434e97e7a779"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "27aa207a67f95d404f47a50e402f5adb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "0445ac45d008b37f7df58c6e84adde49"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "0217811ef1d2de36468ff745d33bbb91"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "e723221ad1cad012362ded0dfdbc3d32"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "1a764854620aae4a4cc00f08afc9122e"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "405d2f9cd5e833433aa220ab2c0055e7"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "ac904fb0da38e9aef280bcdf484bb793"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "1bbf3988bd40ca6f5bc26d47feeebdfb"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "79e523406fcee59729d59b7e1f4521b2"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "fbcf59e460a6d2e1ad661d536206875d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "731ad9626ff0d9870db37d4c7605ea8e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "c60df7a07705f609dcee7ae590c37fc2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "4a3774ed10ace9c8448f83278f8d0049"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "c0d7106d84561f466cbad837b7f109b4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "cd9261a24e5dac52a5f61bde9a2303bd"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "04d502506e78fe65d9d4586f1b50e6c3"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "0bcaccd422a0ff0ab3ca81ab5fc25ad4"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "14ff98fdb884ccf9c80dd27637c993ba"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "ad11c6399c27ab9716481b64970b6fee"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "ca812f879182531e2ba70562bd667d1d"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "700ca0a4d2570413535f696c7dd62bd3"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "ab158fe9cf3c8b0968797552708881d9"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "e27b1d426ba854bbc0ad8d4b5ab88839"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fd6b274263d656523d6bf57da8dbb8f2"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "97fe967e52c9d201e28289c4ad5eba7a"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "3b6e456c8712c8ee1770687f5c5fa475"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "958be0bb73a475d9af9a2e17ab4ced2e"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "3d22615f0bb1858d8b0a4aad91ca3a6b"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "349fe8b27f6806ffd071967126d976e7"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "c478fc623ce24600a8fca03b9ad4d523"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "c03e7de0f31b14d55cc6d0520e7e551d"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "159db9f7166a3be5bbf8bd6e8acd1236"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "a17e729007e43fd3259c311dfc1bcc1f"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "069821a89fd95a4405e99a7b7f2b03f4"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "028c1bdcdba1890296ec9752f3fb3caa"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "d1474523375f955758d09d76c54e1c73"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "3d1af7ead49efd91fb3583339a21f03c"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "cecec228e2589d9c5f1b04e6aa076f95"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "48a35bdb840254abdc5049ce440e94e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "6435f4cc816277b689328d4d9149038a"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "7aefa3f772b34775af9f9ddefb674032"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "adbbf11b9a13c8829897d4feeb23b3a3"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "da6fcbbb606d951098ad0116b62ef4e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "28b544e4d6ea9e446a7d6af17013ec87"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "6224982bc9d94d8246f6d5fe6537f89d"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "537ac23fdb4ae7e04cfe758c1502b044"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "82620b5528b48d30a307181159eaf7ca"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "d23d4906daf60617bba81b212e43516b"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "5dd465b806421e68b86c99748bd72995"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "5a38698cc0bf858e9eef97168e148c70"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "57aa490c13ef201d4779be74005f68fe"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "87756d4170709511787e420bf6e52864"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "cb9b5320d44c74e7bd85fadf370f3bc8"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "a1d219271fd49f5e09cb2755f4ef8049"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "fd60cb8293d986be0c63e06ef59f5028"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "f3c67b4fd401429141259575f4b3b329"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "7843ba5d20d9914f9ebf156a5fdf8139"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "ac79d5ebb4903e1bd6311747a31c8a70"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "80d5397ea6bc99564c5f660fe69a00e0"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "1cd9329b7a91892c931393b55e681331"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "1ef296216c786ba3b255a6c015b1a91b"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "5b43fe90f3ef7115b2a64abc9b3542d6"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "d4bdcd428a4dff5c89cc1bd327d6fd5d"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "d3f0e92a863d87611e55039ed210a673"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "f01f03f75a1eed675efa42b9add1a601"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "248e2a2b7f50da1a1f8936ceab5b6a74"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "418ca10bc6a8b9fa03f6739fe2b04ecc"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "fe87298aef5acdcdcb9ad4d6bbb24bdd"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "32743a0d5d1663da594c0a8c0b1ce3ae"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "670ce7b93a4b5d1f8ecab61ddb833bbf"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "97e5cd58e0837c7f2cde92c2c3d298e4"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "17058f03d3fa93cabbbc93fad75f4be4"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "5bcd637a0d323196afda05b859358b2a"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "fd5f02da14118e0c3d503bdf208a27c1"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "da38858f8e292c702b91295b447f5d16"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "64f783f4447b72c5aa1ef70aab4c84fa"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "9e3c2eaf78773ab12199c782b0c44b09"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "26d85b1eef2316bbddebd3de51cd1a99"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "661a672ff90c2b4b612c76afef1056d3"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "c4924c9d55513bfd5a722c6099f63c7b"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "f300a12489bbacc5c1c09a63dee03de7"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "acd8224687fc942a2eb261f607c47710"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c6b0dbb69f5d1e3396daa4d81f89a00e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "86d1dfdada680e783411bb480ac5923f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "60be6df9753332b963e984b1d25e2b80"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "4a78d032398d1b6c4ee9db8ac15cae90"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "3732aa1cad384d441ed5edce76bbe330"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "033337ca96a753ca0de4382ab56816a7"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "576d0b985599d68b33c749338d3b3865"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "339e8b3aa21cf43197fb634a400ef96e"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "d0e5d79e39773573a1290698ad455018"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "422d9a0f914d4ea934b7dee055d23173"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "24baf355dfa54ec5b37a8b7484f45164"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "3c02898b367c70fc3bbf2266f4c808b4"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "9fd02dc5fb564b24a3789eda7c229cc4"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "9a3cd4b0bb2720f8e91b79ac2524791b"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "4221c0bad84dc1411a05d7f4e41fb872"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "00536419c5ad5b01ad1037db8d145b43"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "714a7ffff34d4534915aef9d2d1cd826"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "00625cc839f08d63c085530449c6ea23"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "a2246bbbae69afec5d8070e5f70e52af"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "bb076cc210d13bb958e97acbafd75318"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "c1172c12b13a168659ddde5771262947"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "4aa239188d799adcdce1787d65ff0a93"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "16016a33e86b0ac1f166fa7be95c3e30"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "d1aa47bc790d3793be34bbe82e8109ad"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "fd697d1c3be834c2dfc45d0ffddd53d5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "90414846e6bab130e11df4b3d460b5b3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "1af2bb305b0f1cdb9cdac0738a02dd15"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "bd2cded68ac636aa9e0fc9e3bb6b12d6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "1af23789daca80f1d608a942f9c33cfe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "ff083dd95fb3d293572835f64f69ee94"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "de7b73978e1bb2b1dbd31fa2023a93ff"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "76dbd34b783648e7fc18f3e7e45fbbea"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "fe8edec8326d7618214c9e7fd9cfb2d1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "4cbcb0cb1ec2c3d3093f3a264eb2194f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "b185d0f0b5a7eda0430f0eb7cee530c0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "72bfe4a0f35c212f175cd1424b39cb1b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "c615e24ce740cbc90a3939ef0182ec33"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "b94df9a89e797a7a7b487a5cee8da675"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "e2a30d67540d72bba40a9436ed11705e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d42fc02c18b732a428ce42bdbd2e10af"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "0b1976982e94ad98e8e7d9a7801a681b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "0080ed4f8f7af8b91949f1ff23191cc1"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "8dabc334bf54f5d5a5dc5b7fa92dc4dc"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "8653cb5eb2c0f36f5a1e83fc82215c51"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "595e4f016bbbd7956c76ebd780c95a82"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "9a464fc8c663484c1cf72048d41cb08b"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "323386e7137b50db92ca4cad39ef6336"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "0071b8c542accf610bd6febe831b90ad"
  },
  {
    "url": "categories/os/index.html",
    "revision": "33e7a964243ae56fe70fffc34d6552ca"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "9a7fa8e30ba2b60202060cc2b03c5503"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "64f539f4583361513e81de48eab3b3ba"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "85afbd2715e9e6e7b613b6d59af118f7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "8e5b5023a674186d29bac28f792c3080"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "29b5954525599307f7cae52cb954b901"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "2c996987b3abd4bbded5882b1c2121de"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "d45b896c5e9d5b53eedb472ba8311e8a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "5d445f778bae15a605d5bddc6b1fc807"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "c8f251dcd6b1c06e682667a97dfef042"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "37940268d0fbaf1a5ee232247db7422d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "8811957be7375fa18f84e41a15cc39ab"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "a880973df8da8cdbc90abe6c0f947902"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "741197fe569ef90b5855b39d8b32d582"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "e135a49afdaf9c0e2d2bca2a41768dc4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "b102a5f30eb3e65dcb50507ecf9d98c5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "19fce363e844e0a2836083c4b352ac79"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "8ff26ee0526a06280486e90e22e950a0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "22339fec2e70d2c4ccb5932246e9fe24"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "21191bea41355835e5d5a1ea132d7606"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "2c05f1040e408e21970caf5a7a27d623"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "d87f0ba8cb8362c2a811a1fab71ef68a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "ed8ab6b9ad93832927d044f2589e2164"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "e953efa343f3485d71e916aeadfacdf7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "b521c57d516dbc7c29089f5ff001e337"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "db1aebfe4b14cfcc6db983dd4930b459"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "f48d721c96d361d9f015b6cdf37ef4e7"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "9a42671e9fa648d0367cb94151b5966c"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "1e51c3a8eab6fb8235bd72fe5ba93339"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "9519ca98c78f29ca38315044da6c9cfb"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "eda28aa04b412bb6a63efd936d11d296"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "5ea885cae737698ff55f4294d5cf815e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "45d3af8bbda374fb77e36d4754902f92"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "dbc0b217fac26ff4ee96638c7747d0a0"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "20e087be12207414c974ae1a7b67b61c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "3fa49fbab5f17a651f57f6a39dd7528e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "f3cced7ee27a444f26962e8c8834279a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "e4b93aab749e164762e5bbf6b08cc154"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "a0fa62f2d258b808818157c07dc2d4c0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "228996e229eab720c26b315aad340aec"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "a2d67c1598bd9b746ca53aae933c9a05"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "14d733f7825789c5e88cb3b48fd990bb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "c051530e0218edaf1de76cd8f34f5f2a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "35d82372ece92a6596f2bada21e6902a"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "e062c2abd4f2de1f0feb0736c1c8116c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "6eb795c030ad9dc8cb36872c481f24c9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "fc7d1031dc5c53b97a4c3ec24a8491ce"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "789722164a2b6bcccb14f9f95def4b72"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "35642aed411b6afcd6b3c4b10d49658f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "1d01bbc9e1a15ff276c93d7789b01b9c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "c657b7b247bf200bc8a6d97c5573326e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "dd431aeb511e58c84bb0133d7d99d295"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "5b0c3261b7d9b986de5b507535fffda2"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d3d5623c090df0e7f133039b5b6799eb"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "f6b688a2e1ee261ddd0594e7f09dd35f"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "49c18efd1a011103ece9e89087a61560"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "4e1170fd9e5b1a93dcedc1d46d006d28"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "54e4eb105d96d016327fb80685eae3a7"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "fe239b8a3da159fa5397f44376b53d3b"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "b5893643ae6a72426e4760d2a89e0066"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "5407663b7ff6a1a22fadb557f2f46d9d"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "c226cf3e1ec481955b641c9c8fd7b7cd"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "2b2acb4e51e183d685d8a73d4bdda5dd"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "fea7fe49aefffda2c6cbbdf04ebdef24"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "4ff55346aa797d39b29662ab206df3f4"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "aa497e95e49729c8fca16a12e1c1e855"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "d93e0dca40827af76f639b525445cc79"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "8abd4eeacb3ff14abe10fa3b703f8d01"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "833d52c1d071b2c87b16d2824e9b3361"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "8b7d6a7e181cc61ca6f26a7d2e9179b3"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "57c6ee1f1fc5cc71ab0049fb49ffda6f"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "d9de7471435d615e7e85e618269558ff"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "be1e13aa54ccca27d834636d9c22234d"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "f42ffa3767810a386db657bc9c2d5b71"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "4cf07d50cfc24b5a051106bfa471af9f"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "3bf4897e7d5445ceb5e537a07e428bdf"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "51c44a6aa0ebd2b8308516d8354e0c83"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "a1cf95640f0769a95f6e36b693094080"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "420f40d526d37c6b9c971b98cac0588c"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "93f578046d8c1270d9922283d0645bb1"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "75677522e8f3e457b90a5b6c15cbb349"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "163fb3e7d1d7d04dde6c3b10aafd621d"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "b8f577bc5fc3802b63ea350ecbaeac63"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "592b83bcb650ee13099829cf92289831"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "812aac18a681aead8a872cc2ea329125"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "49b41211b783d8d1177a1f6c3da66841"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "ad85fbd33b1aca3ab1711e96f58685dc"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "0d4a526fa2011dda1efb8767b82fa4e8"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "69126ebe2f192e3e39a521c633c91dc8"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "bc0f602c3a109a421de6c5cf3a0fbb23"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "8410cfb72a0440a2798c69e86e78f3e5"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "dc73e1f471b57eb193d2f0b771bacfa8"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "e7d248f14ed08614baaa438e1e40acdb"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "518eeafba08d06b2ca02c6467885b3f0"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "9ff437cf971dc70016e30ffc90380dcb"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "d77f112b72e83166a4a1034424729eb3"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "add75e6109c3bc30c05744526a24e65e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "63337ae84c935da9b2c9d3a69a9d7112"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "33ba592880e1724b447bcffbfb7165dc"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "a5fe85e894b610763241cd9a97ecd09b"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "72419191b6d9e0018df87b14aff20d4f"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "044f2febed6e5a6551c16f3603faf06c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "fc71d4a6eed635b661a54597e00a386e"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "964d322f4b4e6cd288ea48cb6c0b574c"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "19a4c6f82d0fd06980cbbed28f44e95c"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "ddbfa03dfda91937ed0dbc3086a3495a"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "cf90a3a8c39d869955c761af26f9032b"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "20f510bf62f738e951e3560e358fb19e"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "f7c683673e21491b4de39fe9f36edff7"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "e123173f3f28e009396d774ab7660107"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "dbfd8a5201eead301d2a6c9c06a81b45"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "534b446063a129df35d8b966c7341fce"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "05f88b8b7db76a7f61ce407c1a3a83fc"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "ef5761ec6ef06a568dba549dbd0f34ba"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "0cf294ccf8da1df0fd79f9f5aae5f044"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "ef52caecbf4ff7c0b5c6d78688b0f5d7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "2b1bfbdecd0248e734011ced3e8b19e2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "0f0be92ff095a12305dd1724bcb2c2a4"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "40718c9371e3dc1fba4f8c2d45a7b600"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "db7af023fc38f042d77c1506db09b7f1"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "15d2108ef612e7be6d75f615583397fd"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "f2b57dc703dd655d2b801b28e6a9ab00"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "aee6f24a329b1ea7969fb54623110f7f"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "2b63d182d6aadeacd6a0b3d80e546281"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "22c574a5a8fb51f63c9352b6b780522d"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "dc1b6ec7d16b465865ede5f85402d4cf"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "79cfae7942a6222b035a1116f4a489eb"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "5ad5bd54f043303fce9ca7d13650bad5"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "122801b1650b0c5432b7c867f91fc95b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "b32afb36cd8fddb89424fec94734bfb9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "4481aac41d655f5af36736aafe520e79"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "e1239cb9b9b3729f686f140750a511cb"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "1ff881e91446e15be21815f6e0b3baa1"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "596792166e9bcaa8e752226b669695ff"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "458d1ddd8a9b26c7b2a1982060337f03"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "c6fe0d7bbe654d122350f8f8ed5a1998"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "35add9fe0473e82ce280ba61407eb0dc"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "81610df4a13dc09a717eebfd1e86fd8f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "210c68aa64923ed8b5d498548445a6d3"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "28cebc16efd19cd08ebb786f6827e1ae"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "1eba4e5be2d79f47c6b3c22134a0820b"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "7ae448ff39b203fde24380b708c13b12"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "9adbf274fdb09c78f65633150662e78d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "13d05a81551086855a0ba90e69a203b7"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "c22b44c7504bf12b26dee5e41dcc659b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "2a1d3370c8f28907f9f34dd772d2b953"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "c076c0970029e21e20ef50f690a171f9"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "2d77b0f7b2b543a8d7979ed3f270b4fa"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "6fdd0c7ead79d32c76bc6d25987f20ea"
  },
  {
    "url": "categories/php/index.html",
    "revision": "12e983c4f4691dd5f9f56448b7f4539d"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "0957417eda84983a3ce7882c0d672586"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "2f01d4f77cc2ed3d2db331d535750536"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "a4edf5834a993150f8b7dd76be843608"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "a194fb0226ba47dde7cfa41f2b4027e0"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "0e600e1d4146378a0570cb4fdc6cb966"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "d176fcde44900cceb1b52d3882add06d"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "7fd178635d6c8e01fbc13e12b416952d"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "ccefe4312365c3218f802a29c881fe61"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "e408cee48fcac4b37032e84ce77f396c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "a0ef8758b22a1abb993d45e906b28ebd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "ad5b1db9fd9e3464b21dcfb9b6f512ab"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "a571de2c2c13514949398e16c0fe9366"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "e78e0432ddb413e0542fbf6fe2139f6e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a5f9a0e1d20387303ddefd687bc72f54"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "a5558730eb81ce16d8ac0f1508f40a23"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "489c8c0f07e6cd5fcc8136fc2997e24f"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "5c0e571ef13199da54643ac4b95e92e1"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "4618c0bdef20650fcd55460617adf3dd"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "51ccb975315881ef3f55f7a053854f69"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "af424680dbcfa32714daa1dfed70aecf"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "66bceb5ed79daf662588407a877d4325"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "8dc711afcd5068825251a04d17ae29d6"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "d864ce4d5fa16043b58bab219b26ec07"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "f89743bbe46665468c7e72039e603418"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "a312176146f2565bac7f8d52c8c679d6"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "8545e34c1b38677fcf1a159feeb1358a"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "fe14cf50aaf500b66e12effd36580ba1"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "74133d83da108aa481cd41a9eb535324"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "c0edacd66a81f771e951191ddacc8857"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "c6be05a5195aeba599872d3cb61b417b"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "c5d1bd91ef4ab4212465e6961827884c"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "37f3feb8ef1912c847f75c80a98aeeae"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "257ecee595b5d3c72fa7ae996ee252e7"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "bbf735abd5c284871b0aefb147fe53cb"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "b09b5405d52d54ca8cbe69a37e0c6551"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "71ce1824044e4a694b3816743d0f84f4"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "6c275e7807f9b3d5fdb4a8fbe8a73722"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "68761155533a191948f56578087f4ab2"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "193910bde3ddfa664a24b5ac66d008fb"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "bfe1181e7611d4e5f3efd00831ad6b36"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "8b028c6e5e96339f67e07fcda2cc2d2c"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "71e595f118463a50a59b6cd565f85305"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "06b48c80eb14770672610ccea3d9cc3a"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "c20afeffa750968cf6697ef63a46938f"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "c4af446f4698aaaa0da1d83fc42075c0"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "59b62a302284c223289474cb3ff99b8a"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "22ffc773ec7fd306a531fbe5891d58a5"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "dbfd0d88009a0fa6dc7cbae03d83629b"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "92d9b280d0652d7fa71f836de20cbed5"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "02ec8f0094f289e596f6906e5350c1aa"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "7a6903a91ec8313aeb439dfaf157b94b"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "283509421638d8f4bd15a484b843e87c"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "e3b53b70300778a9172710ab5f9d7123"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "8b3c23ec2bf3c7479fce878864f4d0df"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "d3e22ee3df031e58987f8846b30ddcfb"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "6e66e4d161ddf1082cb46e3d65d0862d"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "6b5d77d408c54dfe0043c7d89a23bf74"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "d8f1bf2abb99dab9f08e771b7428b1a6"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "d859f7ae539500d40618969554c07a00"
  },
  {
    "url": "categories/python/index.html",
    "revision": "588d75a6df48aaa998370eebeb0317e8"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "0ba3ceb75f7644c7116c90bc0c487fd8"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "c904b081b5f37ba66e2e8c9befcf6ab7"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "5e12d8344d96d96c4565b2a68aca854d"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "b8c1f3875764b06c40e2a6117682cbe2"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "eed229521d0a8193ff4b600e56e03a83"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "b69b097ce10636f40088318acff00ad6"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "bea23d95466a56a51bf800b9132b9d26"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "0e735c78cd718762c7db2ac2fe1568ec"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "06cc232a265d506e9f94a115631f129e"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "73eaa1bcddc2cfdce89d8841d72aec31"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "49b7af87eafbe07f3f5b1147399c5049"
  },
  {
    "url": "categories/system/index.html",
    "revision": "443ed57b9362771c249037db5e1899d4"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "5fdb3f686e830b4234aad7284dfe1398"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "ec4a0010eef940cba3cca68448f8a88a"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "7777380bd17ade6caa6cb1e7b13ebd6c"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "2fdf9066f1cbb809727472cd8ee076d7"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "80ddc0480e5dae7824a6833482eac7ba"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "ecf19573439c0640ececb08510a2044a"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "2cf730f679a806abe25fbc26dcb7851f"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "f8733e7276ccf504569051e9fd2970f3"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "1d0feeb4ccd6d2a9b9397efd6c30c076"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "136a67ef4b4ff2a18d6770cbeceb9733"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "a70f38421a7eed464b7e7ab3b2855568"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "3d8cd9ea74a47e27b5502d2f3f857eae"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "19b52bf21f41bba65d165a53a8f8fc1e"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "f92abeb060c9a084d4ed0802816085f3"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "24aa03d17463da90a5fd1a7646bbfdcc"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "0e9c35741247c30bb579d48322b5a4a8"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "cd4d2a44c17a56e45755a4bc8fcea5c4"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "fb63db667733e4a3385d58b0fce0c3c6"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "3dfc263ff26fc1d00b5919fc17e00c87"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "ae7d2653c420734892e555675d18261d"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "1479d2766de120afc698550f1df2dc5c"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "4eff58c5da69a6896465dbf1ba2baa39"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "cba676ddadb645b7979c236c328e830d"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "21ba765224a7aeff658282393b5ac294"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "f8a87c3c4e26f5741defd33e28cd9e52"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "26995abd34b5c97482cd5060b1cda3d5"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "b679e631f7668f700be395d271bb561e"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "3b5a1bc92d8823b25665ead9aa36b37e"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "b034863e98bb6574769681c6dc0bf3bb"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "54a4239e4686a61b3a95eb5c7204d3b2"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "1af3bebae2a7a652b79710a462c97a52"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "614f3cd33ba2c46b45cf307a6ade78fc"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "80316930cf833f5c0bd0d375e580c1fe"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "01bbb3e1cb99368623c53b1b69fe8fcc"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "ca8fd290616f907eaf5b9c44b99b9ada"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "a9cad27005012d9211c1c7af165efcf7"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "26c796edfa55a5c454673669326abcac"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "89ecef3e0c6e432e289ac4897858c688"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "e65edff9b4c1ba69e37bb8cbdda64c27"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "737b1c1e4c6af187f27d4d114240053d"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "377de81a7557c374bf85727c013c36b2"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "9ba363e29377484766afc985834d648c"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "33a1fcd20fb6a5d55ac4a1990ca7c352"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "a3a8c3dc69b9d1cfa6e2fa971e4adfa9"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "79110b1f8799c0a15827c4286af3108e"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "b7b21a800afd6902657f6a16dccebd3c"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "08d0bbacd795997c1b3e42119c077f81"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "3e3ed54bc09294f470e9d24a592f0a9c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "ada7c3443b93a324b45fef4e8c828758"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "1d35428ef5634b380d5055ed9e75ab1b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "70357c5a5093882917adcb547a6a8e3a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "6f705ced3d5a144dfb8fd1d63e59f791"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "c5833be405fb64f03eed641d8e1aec74"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "9c1eda42730b907a5075a4ca04ca5b05"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "1d27f76de21d59f15c692596e9c3d239"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "78a5c8617036cc72df2cbf4706fa9e39"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "f2955c5ca465d168efb96308ae8937b5"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "dff0e9338e919228df227fa67bb7c7c6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "413854db58abaa16d0098e665434e909"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "366a27f650897c2910359c8de720ce1a"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "76aa3aac769480822a1741eb18d052c6"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "c85f1b6310472e0077b2fec7be592aef"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "37a8262df9c49b021ca87f41e6152071"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "072a2cf908a6fe473ee156270bbd7922"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "0c9b7e0daac0f72b2cdc4b533dbb684b"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "fce95ff1344267f64927b2c54a591f71"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "6af2a143f5db1a76ba19c0047026ed32"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "075b56c066cb4c92077f50c21ef53061"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "914b206a375f00d23e3fadbd8d742be9"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "86a1d04680bc0ed5263c19e969a053b6"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "2974f74651ef60703be3444336284de7"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "de59beb029aaddeead5d5e28dea44153"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "174cf4749a4d1a549bebeed01e703037"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "1758dcbfb5f402a4961826a03d5ff3b6"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "ca2f7167d0247703ce4c168514b63f49"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "5261efa65b52723032a2130ac724da73"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "703b1a1bb144a644c86ec4b665073def"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "8fe19373a53d4eca041fb6d0865a619b"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "4a02d5b8ece4a84a839779276bbed5fd"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "1c8507245f37995f45744c41c047e09c"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "ab6f0ff285d629ab952967caaa3c864a"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "f8f444caa0de8dfc4495063e7a24d903"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "ff1392e87366b70c1c059226a40bb51e"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "8e637b933ef15ca359fe8490164c6680"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "dbb567c0435db35e4377694b4abb7a54"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "abdb40a89696c5faacbe7645a77573cb"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "cdcbce0dc75dfc4b226f36f583233e06"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "6cbd85c85ef56c0ce17c22d093f6b2ad"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "e589bb83f11dc61df52ca28aaaf79b42"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "807108e63cedafe068323ee234854fcf"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "1d6d8a2bb26c6a4166dc1866ad1561d6"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "887c808ecf306d6c6a75cbac489c82a9"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "b87c26eeb9237e7d80569cb8d3250252"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c1a2f07cac0e3639eb09a03b57f9bc74"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "badf7f9ebf50ce5c1629768ded03b1fb"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "8cff072a3c059d133a188227d0c4e972"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "025dfe2fb77fc6358608e3973b501689"
  },
  {
    "url": "favorite/index.html",
    "revision": "7ea9277ad74b1dd8678f62ecaba33843"
  },
  {
    "url": "index.html",
    "revision": "17e5206ecf922b4a0eb33d4d2636f3a8"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "8aa6702de5c6e9b084e5877b72848f85"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "6013a3732690775cd3092377618156e1"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "9709b51d466ffefd24adcd8a0b37ada9"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "81a002de1c4f57bb08457464c3fdceb3"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "badcabd864e3cf8062c6be587cd1426f"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "28055bc2540715c7965546f5496ac547"
  },
  {
    "url": "note/index.html",
    "revision": "9bde246a253111a9b0289d1f12f7afae"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "98dfe458bbbed02632775c6fd8717dd4"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "90f082549a6d4a3c4b22787b86a0afb2"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "58b73e80c797e2d510099dc0c7d6bef0"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "da69a402f35d9752bd96420dbe24f934"
  },
  {
    "url": "share/index.html",
    "revision": "6c47e0e612cf7efe2feaa1c9624d36e2"
  },
  {
    "url": "single/about_me.html",
    "revision": "28f7baddca48847c88809432e58bf8f7"
  },
  {
    "url": "single/all_article.html",
    "revision": "fd3fbfaa04bb59611a01e829448291ec"
  },
  {
    "url": "single/welcome.html",
    "revision": "5a8994f8beb4377876929651b591bc8b"
  },
  {
    "url": "test/index.html",
    "revision": "7af4edc73fd4157775a9ce24ac8392e0"
  },
  {
    "url": "test/test.html",
    "revision": "a3ded86cc7dd4941ddf15528fcb9950b"
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
