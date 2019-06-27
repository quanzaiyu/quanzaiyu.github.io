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
    "revision": "c972f09a86d7ca1d9e4041dc6894d3f6"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "53e0b04431c731e5d2b47868291c67cc"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "6238b47e94c0b96531ce038581e4b3b3"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "b91a5f636d0bd4ae11dfc63bbaabf1f4"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "c6aa564d3dc6f0e9370494d5cc855b16"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "e95ed1faa136bd61f093d6cfb476c198"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "2e06e10837c11c45b938bea154ee9322"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "ea029149b713b7e847470c4f6c883dca"
  },
  {
    "url": "articles/index.html",
    "revision": "c043d38c5912e5a7e900375610e03982"
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
    "revision": "ce446ec198116eeb4a83eddd3c964c3a"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "b12dd0d0160041d18360a3869453d7f6"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "944268fc2c24a931a945280cf03d3a50"
  },
  {
    "url": "books/index.html",
    "revision": "0a8fce061f47c534a6b47fa1a3a614f0"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "c95d1893f36312475adb02bc94d5f614"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "89e08ddff1712d8870dd50617455275d"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "0173d5b67d8921e8500da6401dcdba46"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "4a2734560b2a0e7e1f2811dcce6819ec"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "10285011b1738917c0a71b39e75212a6"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "b7c4c85088b795cf628fd7ecb5615d06"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "a9fdb219fc0ed09c8e1dbf40b14edf43"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "bf78f1cb4fee1ed6be3016f1da459f46"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "6aef90411a2a60df5a5fc474efb5e73b"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "5a8aee533d3514d5b3dce06bab90d7b6"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "dbad0c53d830151c6f729b434b4b0f78"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "ba270cdd98ce73524e590e1fa53c0695"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "4acad54d30acd1dc9f1a0b7d95add7c9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "c268c1257f2bce9d19585137a803e3b1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "f1e2be04ba0cde866c4b42c78515997b"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "1625448b61630af574724cff83efc6c6"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "1194202eb6de60529972bbbf3d541e00"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "181d8a20d3f7a2abad74ec7c0fd05b53"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "72c413699addcaf6556687d7ed2fd32f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "bb55e846e8948b8e6269d9e8cf052a68"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "233f06181ac32ed7757184a5c4684a35"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "9b59634c0438843493c37bb20e2587cb"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "aa172248d649d54614c15e5d1bb17598"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "d9d2e98224ed4b53da48a78f2554592b"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "142a7ed206fecec47287a75e855a9e30"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "ca9de8707fe9d008bca8da26684d1c9f"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "9259bd9c6d21f81d79eab962c28fb8ed"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "be1dcedbe9b3798cb8cb9d98609fec17"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "1c58bce5ee355d61f04dc2b796a3244e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "ba9764c23d2aee75d90b151558f6b77e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "4f5a81e695a2ab0e4f195e27c8c00d45"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "090517d96bacb15c6ce4bed775a44015"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "fcc4c6db18fa439bc257ed75880d5fac"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "e4fb43934dbcd5a99caf14095341fd8a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "e3010bc00408c2cb31a80813a57d979e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "4d08eb3b3bd9f372eac58da93640669b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "5e2416b605ee2dc7356eb33d07f10780"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "7c9f8d40273e7191e06117d8624d1fef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "6e410763ffa9a6e3cb58bb49da2215f7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "4d9e3f088173ae01a40477fe08290b31"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "42d0d7f7869d0365943a7007a3c83611"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "be51e2811e37a870470eff0761ef86e8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "d85e32cec100b805345a40d63dbde00a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "6dc282940a602b4bf45b297ccb953df3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "669d3ff166b6603fd1b344f9e0ca12b8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "fcfd2e29d555279bb194c9638834f377"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "1d0c785b390ff7f453f5dc5f61211249"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "dbb550ff1ad3a200334cf0ef615c15d8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "01e40a70e16ac823835487bf4268beef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "3c9244a21bc4c5c28ae107648678202c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "558b70854f032c757244b3610076f393"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "d9bd6c4dba7e36c074b0a956730df1ee"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "7f1904ca102cbc3a81f3b03133e63cb0"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "a9a14f5237e9c63d36e4bc867c1161c1"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "e4c37dca7acebcb57d2f36f97788718d"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "6c2be0303f0e06b26c41cb11c6ce30a1"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b4e788db5cd4df31afdfa163a8a73394"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "7da158cbada783642e77f06915f5696f"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "1c9a9a498d5c95fe791933305e6c0beb"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "b3cb97ad1a93b743807a75079028a703"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "c7821379cbc0cac467d44704e050ea74"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "3b2dbd47d99b712c9ad667e0d58c6ae8"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "cb48b626379e6b47ab7235642b5515e8"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "a70c05dff2b213462c1723e6c433351c"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "35ac66afe7a98676638e382d98d6d577"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "6c32998fbf43d7499ef570b50543083a"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "944a312d7e27590108333a9bbc85ddcb"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "49c0f4a27c3ac3be75a1dab77b511be6"
  },
  {
    "url": "categories/database/index.html",
    "revision": "f6792557f74b5ed5aad5c6118a99f271"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "dc046b0d0e0336679f15b75049fae1ed"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "526a3034b3ef684712156524daf0988a"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "a7d8e48d6e062188b5f3accbf08cf366"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "3b957f2a6e750a2622ae79ae89bae226"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "e34be9a7c5cb810ce4433bb459757328"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "e1a4f7ce9ae1d905f31aa7bd81274928"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "83d126805bfc6db55b75b6753e99d25a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "b7d4f3ea719b410bf5f15e844e4cc8d8"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "d13492dc0cffbdca0c60998a408487b8"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "9ff9dfb1b92faba17687b615e7036448"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "0b5755971126d9bac1a983c251da3375"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "b4eaac4e2f57de6a77287e02e3663a78"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "1022e33f53ce8276f8129569ead0b863"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "0e920a5e4a99151cb18011f551bf5114"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "8280f057b0421c9d4c1d931f01247d24"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "b41455952c2a3e01c5209ffc3c8b1584"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "349899bf2a1a89b453ffeed0b5b5e910"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "c12b0c193116c7a9c37810624fdd450d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "87b110c22e9e2e7a460e7da93290ed29"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "505b07ff9714fe1c2ea9b666f2a06afc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "89b49004db59eb1b1bf2b795d8c0e6a8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "1dc59908d91db5136fbc4fdac15868b8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "1b121f5ab4ee98bb0fc57519f7cba7fe"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "e03832bb802157bfec8b0f61e2089a4b"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "643a60345b80ed7f02d05c0c4762c952"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "fde8dfbf9b5fe6ab465f809db884ca2c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "fe1d1e75f5d4e691d1a808198dce6b66"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "505e9290196874911d1ae73baacca574"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "30c69ca5729cf5cff7a91c2a73bb04a6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "9aa20b541ce6f9b0ecefc605f7919569"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "b73c0bfa4386d958edfc34252d6267f6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "5bcd0b63958ac5d48bf9fcbb483515c1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "d8fb0e8e8e6b69400e1e1309aab9b56d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "83a7d070dc9c227e1f6c3f68c5f9770b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "5b1a6272fb155cb7ca4c360914cafed3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "0406d9ee15531570dab0f5997ff9696b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "3e4dec72c3d4f332163fa0ea9b62085b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "238b11e9fe944019fb5252d42bc43623"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "52bd95e219a85dab38de349585200a35"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "03645c0d937e48e024da2c6b166cb55c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "b4a31f05d35ea6f117c53fd9e1858a31"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "bfcb34785ecaa2f79bcffc82cb4bc9e2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "b26ed083ea06ab90545acb08eb49d81d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "d70f6d330620eae790a364c66e71bc95"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "5b515a7ddd07434d82225f9cde4c1f53"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "bc23bcb903eb66580c88c58070743d75"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "3dc6a489fd250dd2b94c2003d7cf0b25"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "0f53c376252802b7a0c088ddf890148c"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "ccddfe8d94983722a732a5d5e536e577"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "82a655e2d89263fda11046e1cdc40d53"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "51f3f0dd8bfb8c932e4916c21be7d8b5"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "4fc8229027607d77487b887591bd7e56"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "14927bd8427e24a085d497b3ba95133a"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "44d60b9d1c5a3b29d8085bfaf932721a"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "7453c4f82fab0b2fed4e592e3cf69102"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "d323c2ce462b19e142dc895ec5b69673"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "f645ee641b4168e3105d7847ec833b4d"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "d3a330f40553124e5485012208cc1018"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "c09e01b0a0e4724479e399f83ebff0e0"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "fb82b5477ee8efe4de0cd8326c73f427"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "0160b4f8fca39e441f3d9a2c90653827"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "b7e001b509f4b5032b4a815b51077ae3"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "cc8137b4a60c6c0d4829c6027018868f"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "47d0e188f198f0ecde633aab0bf2ef59"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "aee263542987247674f37c58f0f5a43b"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "f4da9f22bb4ca2ebb7658b4dc5168695"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "5fc83f1acea64effe2296cd9f1b34ed1"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "e4ac037bc077b75e6ea3c09e2b603b82"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "96c52e0337dd99147e3cb24068951e5d"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "acd90a11457f80589ba50a6a6b716cf1"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "fe9cfa5eea5d3a0c52d62410adad2d4c"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "062eb3487e05e5422fa84a2e827626f5"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "552c0cca686dab577373961e6632f8bc"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "d820c5f2b40b9ca2f2ec7a0068d0a61d"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "fa365ade8e24f9d786eb683d8d3fdec5"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "4c60f3dd65f60818e3216720ae8f12c0"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "979136f389e16b6edcf9e72dc1ccf01f"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "2e740bc45bdd1fc922f5a7a37e55947e"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "09a7688b0be0c729e0dcdb9abb3d8bcf"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "c80027c8f49b751a7b9ce2e643580773"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "50a70e943e2eb28f256fcb480149fca4"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "fbbcdf16a09ded46c12541f91df77dfa"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "5cedbd2ab6ef8cde148d9f5e75f21c3f"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "69f3309da8270b5d713fc01fbd77770e"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "a621d54b00580b8c5ccf3b5e6051d2fe"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "0e5566c6d0b985e5b849b705f2a5c4d6"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "f475fff6e8ed2cec58f069c8674af169"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "4d33c89cd46ed4098d0a0ee0b4bf0c00"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "f5452d9c4f4e118dd1272cddc337b30b"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "51ae82cef4d6d2faeb8da4d625ffc56a"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "8037e290f99dc71480f230c2f1079f5d"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "7762b6cbee04e8b8bf47ae3937c0786f"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "177b70aabace0eb0afddbe8f79bb5c85"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "0ba636ff9353f82cbef615d3cd30abcb"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "bc5ae0efe01abcce92e2b8dea45a2407"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "d66f3221196d5d677c1bbeec4345ea37"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "026d39ea80360adbe1dd6e2987cd7dcd"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "158168bf74d2e7c61a3665f4b2a07dfc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "0d33e5d2ae9ee9dd18fdaa718215e615"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "6965ef9623ab769c4a913df64ae151e5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "8ee728ab90eb39266c7cbc165f69cd07"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "4cedff78d3e4f01aea9c2c17b7720bc6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "a670ce37c94dafb2e3e63c7a67871a2f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "e0f445faed2dc0142033dd02470c340b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "8caac52befc9d6dcd5b5c12997b839a3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "469af17eb461397380d1248ead4b8baa"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "c009d172c04cefeeee969972811f4005"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "74b688977eece3d8497c0be1a5227d91"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "7f6b9cca69258e1ea96716568b6676df"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "d2bada252696de5d7975e4ea67f86afc"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "9308dd2ce8ada3aa4bef2cd2031360b3"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "6c5f5559d31314ad361fb6a8bc7fc494"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "a4b0a3eb866dcd9685982f58f282ae76"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "6e5c364a57f01b0f75e52781a7cf0675"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "f153f2dc142344d97ff4a773437ef86d"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "19ecb40c36143ae67fa7a716e3b37d06"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "1bc2388f79be1c3b59fb268df73a201e"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "be4a9ff519d363581bd89bce81ccdc95"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "f27f829bf4d7bb5959616deab06e6e66"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "a91c4ad01d3d42fbde4a9054852f0236"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "9a3caf5d634018b6026c9adf9c792cd0"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "d2fb0dea7f8b48f0ed2d1dc131028ccc"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "f041fa96c1cd4ecd73b2df347b712783"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "9d37e76d760c96a96df303aa6e4d63c7"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "b11bac7709dc8780ef285ae259caad3b"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "1841625004f8547ff9d9e9cfe4ed1c13"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "540dbdff22b38895a911a8e8f627a79f"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "2612acbb77e076bfd3dc6b05bb74179e"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "4bc8eb6db98f6e6632144c10be08ef69"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "2259488d87ef4c27509cae5daa8c7fda"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "60e8b6441fb2c68d02ce3a4e2e6563aa"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "1b0af682b5601a24d17fce6beb56b4f3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "363bf38b918b833461fde23bf4dc64e2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "82bf8432ccadcee4b741fd850a7e2b8c"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "d2e72fdc3acc000fec83571d1cba3edc"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "a968e1ba4552382b7e12313b5f4c7d36"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "d94ce6a50bdabf5ba1b15234d4e8acde"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "2c0f99cf377840f644931eff893a8dc5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "e68b28d63fad2472f7c600f608a963a2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "39ec45646567f0f940807cafa11639a5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "917fe0728b88a691c06205966cf93dae"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "163a2a7adad4c93984a974abf34719a2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "6f69afb72c0354b076a2e99f94fb529e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "097c6850b4310d5f0c78fca329fb80b7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "d70494668618e93271aa10aaf3963b7e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "88b8bae33e1f1747ebff9f58c217e1e8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "e075db1e462d197083191759fc89871d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "d23e8611286104c65907fa3f1f585623"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "dac31ce7a546c16e887bd2fedb979202"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "43544b6b1e94424a94ab41982f2c7f96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "2fae5b2a4dee8c75dc207a63ace0bc8c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "388d22a2cca42a223c239b3532dfbaf3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "586e669ca0da08c3e0b077eaefca54df"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "04fce3499abb9aa8a8f913bde9e12ea8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "4836e6759cfa84830f142e2e7f5f5430"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "050d9f75b9bc4aae98d574efdf1e7316"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "479ca9b0e3e346462d2f6c59e0fe4857"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "9d25c9480612d7960fd31791554ef704"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "02b453a6be0f252424a71cae5308b04a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "472b14d054acdbf30dc9f29618cc3801"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "19ec6f80a7a859e1e1afa731be3d4ffb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "d82ae0fe23f7b48ffe227f6cc95f3d9b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "b94c6f919191425d7f7d0769a2ebd5a0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "75b0995f58df01265086c2d6e4994594"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "6b54179cf41d9f2045218913719d8c61"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "d085561d9c762df6ff5bd6abcf383eb0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "10d3c3e4f02cdfb36bf5692175c0782a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "6e6a4284859089342bbdf1783e6e76e0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "e96c6495dec39247cfecb80173398535"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "ba7316c3e9c7b8c83ab42fc0946db325"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "9ee2f5aadeb31e0094d3620a9d8e7bf2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "9917bb2a1706f9797415ab63088f94f1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "f8b0e13b75c63ab34a9c904ff65a9118"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "b3a882ead3647ac96e729f4ec9291a6b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "7373d0aec86dc1ebab4167627dad33dd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "8fd5775628cfcce9398e9541611b7e72"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "79d4a3b6d479a3525ee4389f840127c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "a89c91267079544ff782caf8e6f81ed2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "bb03f7482e510b06380f275b7e7da7de"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "0b03d18ea7b435f8418ba77e9fa78f0a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "bfcab1a800ff85b2cc7bd92cf8b72c06"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "1c05a57b73416b1ec3cd62c990ae25da"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "9687e341c98c9af3efb06864c2d7848b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "1e49f2d06587650e39a07b05be5a0efd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "2a89cf6871117fb22759f6cf84990728"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "347b7e32ad0eb69bb8a2fcd87fd5812a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "7c3323f88d81e5ff8e1d8e5312be41bf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "2645a09f1bac8a6207eb09b1fffea56c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "34a560c468c29f573bada8de533a07b9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "5bde704bbeb835ca5fdb870eb526da16"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "ec2a8a9f0bdbe93f36315da9fec2ecfc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "458fce74a8c1c01561322cdc95a1ed8f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "bc958062bd680f078994212e0562e0e6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "24ef420ed109280751d9b6d20b4517b4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "caff51d87efdca56cc4983bf6ff83241"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "d706c5b1cec88861a7a8e20c58a6fb35"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "f4fb4027885265b2575c3993b6401b7c"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "45fee8f67db4e667837b5ff60452b3a8"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c8a37980b45dc17e3b13004fbdbb3a44"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "c1e206c36693f6a893e013711aa609d8"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "0d370cc281150af74740615a41994b1b"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "24ad8005df79bde35456218c4dcca086"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "e8adc3150181c4b2b3dc4ea1c0d13359"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "09b2ee3feb743eb9f795572fdcc0ab9f"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "aa7c67f7b33ccda82155da6e1c25826d"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "cc09b27d405b9678b733f37105cbb006"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7d4b4ad3fa684966146bed9e42fc7f7a"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "d4d99f18c4ee7694eeb0cd1b624bfc1c"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "ca38c79db9c5d3d7eb434d7b4411a0bd"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "cb48eae395bd54543c1499f1e9eaac8a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "09d62e2daa8f35ea15192614a36d8db3"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "e2d85f7d5b4d25de0ee5e18c849875c2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "1cacc8ba41a832d2c9c0c5ac71bb9470"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "5066b5c74e32891a5d3336bc5ca1995a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "4ab9cf0992c0d2f2aabd8e1df1a00273"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "2eb153e20082d473060f9884b20524a6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "7b6cb1b63b8043eed7e1500a79344652"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "dbdf69a8d5aa72932e72ad7b93a3e22e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "68953412813e20c3ee5f66d91d842fc6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "89eb3df07c8b4143310af4eb40c396ea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "0e7aab430863057edfd4e2ecbcc4a750"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "498740150762954536884191997bdc8c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "6d39a32bdfbb94d48854af7d942c8dc2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "3cca204eef42078ca8fb4e775b6b5cea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "8718ff00bbc24fc4acf0eb425ab031cc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "69ed095ac911c6d23abde2ac8cf5109b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "1f02b0c81805b2836a183a4002c4fed2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "e9f5bcf140cbb9cebce1a2bff36f1e56"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "f0763928931532c9ec462c0c59bf324d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "9f6a3670572c7ff5140a2edd18ee4270"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "a7e342e2851f0ebf37b3187c3e380998"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "13cdbf2740fa8d286c5f1bc78eb68c72"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "faee40a3a0b3d65864a5e89640819e76"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "44455f6ca007e48326144014c388d8a9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "102776e16787bc20e5de02afec05465f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "46b78d8585548991ea03993f3f04d984"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "c6c287adb8d3faa9740909aed745af44"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "953f83cad7f6229154daa47dc3b8b90b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "05e2d31b714ba8a8775387ae51a586f3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "6d524b0a2c3bd416a60523784ff2fa1b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "47d25e18f0f1c8f3316c6a221d268fb7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "ec58030fff797885f4d02b9318c6638d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "f30555e1d0e109779df76740ed1fef03"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "14fa936a5eca7d4bffe0c55d1c776b74"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "34fa372d28823b055b60b8ec60787e2b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "69373e54383aa07146a166f8e1fd0e1d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "8f79bf6342df5f70788f9011b4fba281"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "dcec2649d17c94b588d6705609b3d4fb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "f61e2a22616dc4e4f12c47096f89ac2e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "2837e2c349b49a9f38d006ce126d6b72"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "2fd4e6686a6fcd8609f12d9fadf546f2"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "4b7347ff0c6146e827105ee8fa98677f"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "f22fd3fe91070e6529c578fb3d3ffca6"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "8417745f47d84e0be1ab5136e54d737e"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "05ad088861ddb23a254dcd9b05373b77"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "0907c7b8ef06e3993b6efde9f3ed7424"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "253b5ac1399599440da1ebe5c112dc73"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "f64d59b03997f3bb64b99a224101f0d6"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "f044370e50a42df05dc06a3747a59364"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "60faec1da770d07e65d209af101d5e9c"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "0ed3d8256b7e27280f2488bd5224b086"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "d4a6b56b467c0674dc11eadd9fbf39af"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "b88406ec0342e29d1f38f09b21b70583"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "b349f599ee2d50dd12a2bb321a824844"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "4505ea1918c739e4637e48a4ccf5194b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "2b8cb1cd21cbc821acfc51bb8bc84e85"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "337ab32bd124cf35ab2254db381f18b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "62685a6e4fa352422e44bebbb5942864"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "b1db3756e2d382a2ae157518468840e0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "5c33d3f926c653a0edaaf84b2803b0da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "00fb8887e68b41fcc91b5d91eeada547"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "04e624d987eb1979ddabfaca49ed1ccd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "549c699a32d174e15ab0160cf5d91ac1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "66a81677be48ec4b7e7360c9dc90f0a8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "6759e38f09e4b7348751c6a6dbedb95f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "a80d68655e403065c18983bda22aa7fd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "83541d0224c967bcc2f31ef0678ba843"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "8e9cc7da283a6fa7486a194a3afa52d5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "5b7f980fe9355bab23475606050680da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "0c856be40e209326f7967b475701b559"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "e439a7223136fe56827de1787c6ff282"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "8b514c96769371f0d431dedddba7f08b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "1280ae7babfa00d2c8802868ec2388f8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "a8fd3c6594afaf46b7899b2b17dedd9b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "de298d4d78187f64813e76766e2269e8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "707c05328bdedba98b34040bb767fc25"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "5f1e811dd7aac5992329f596b1bd92cc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "903119a66d236c589e08263eb1e91ed3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "42512cd01dd0fd06a6a18ba504109cc6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "26a4fa1ee051b5cb3e0fd69e880d7292"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "27a1df10f443276dc650e6d76ae1c62d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "6a4cf0ba2623c4062300887588536d71"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "1b3b73a7a4e7c0369358a6c9c986d2e8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "4557da9e6652542521381019261c5e87"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "66989ef47a24339830866b3a1a71ba4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "66743ab77f4894eae3ab6f1722dd73df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "678c90d5f70d07b94e4c82277b316290"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "96fcdde26f7d45a1047c1e9b5d475bca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "c9814a51457d148eba9b57494c9baaa8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "19140f4be759cfd127235902d88ab7b6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "f39594dee6c26c65a5821986d0e43360"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "22f794d8b02da094b076eb7c3c77ad25"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "7c050742ee882e4fd9d2e0083dd8db0f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "43c1e63a3d4d769b6868e87cd83ccace"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "eea616c4c2363b797100b58e5e0ae4ec"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "4d36f3ceef1ebfbf088ee27e02b1509d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "ff34b72fd3feaacfaafb1aa93ba7b779"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "7054e4967a7a73a956d8c0c3bd34f721"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "5c4a5c523cd6fd428317d357fa0755dc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "e204754065a61a9aeef4964ac8cf03a8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "5e31f40dbfa2f13ef6b17a41a3a8e043"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "cf7ce9177e130381afba2d7c566d5e60"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "10b348c7e23f6844badce273ab010af2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "67098bde722ef5a5d4e917992b650a9d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "4af07c2921d255f58c1ccc1fe92857cc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "3edbe11dd545cbd526762caf7d1b84c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "e99bb033c3bcb073fec05fba5b54373c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "24f4a4f58ddf46b0cdc388c3d2b7d49a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "ea9166854e1d2b126454c3c15bbf3364"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "46ab944f536bab9dcfe9cbde842857df"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "740b6fa05e0df88ff45c4354e348088c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "cf474c81572cca80c196b2129ad5193c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "6189c50b8319f0d9c831a1511d4a2ae4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "dca40558036ced1165c026193641eca9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "78e5d20b74e135e818e402f66bcfcf8f"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "0b9a6ae1667743554fe694c4e0ac7797"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "ce03da68ab4e7adb7d44fc3146138a8f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "32a3a65dae052b65c97b3461ca008ef0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "3ba221777a6370c2d437f185901fe7ed"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d28cd0dd12ffd4b5c06b56aa99a7d027"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "8e68e641cfa74b9c659a7e8d7b0bfcfb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "0d0720b670c720ed4c18d90b2c41f391"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "e4aea34e2c33b9aee59d418ec60bd6f0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "8daa25b0f479b080e56e51ad7d5e7659"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "d2070e74d18c7f8f51ad009ff84431d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "77b1aa84452171c0fa54af19d58740b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "5604071533eb621f5f6172dd4d7f0fa2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "957195ae7ba468b8292da0504f7041dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "2c7f5675468ffbacbe776fe486853c7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "75f63398ce8639078970b929eaba3b4a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "d591d87083ba79606c66c09a606afd6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "c49047481e51fd9d81ed9b1201710f6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "982f0326a218e599fee873b64259827f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "cbd2c472f7a1c06332448e2061d8c5e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "268752c42672f7423f787d4131a64675"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "f6cf9d66c87ba146362cd2d0ef1b4e77"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "2f9e74be085c3077c40787fcdb13a00e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "804b794e073356eb89c9bc0f33d6ef0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "b24e542e43f151ae977982bf0d1297d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "b97cf3faf69df0f60b31b95f7eded757"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "b5c3439b1ac46f122aa21044ad649aec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "a5eebc959e541bbc6acca8733ba3ba0c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "a40ac0ccde5de7a46c7fdfdf6d05ff62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "5cff83ef5d9a3079293946766e75a904"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "f9b5d6511c88bdb8fe2f4ae8d017a294"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "98a371fa0ad1c4b6d9ff058db3e6b93e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "b273bb1e5cbe5e0da2e16aeb57937352"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "1765b89f088e9a1c0b7dd2e2da008a53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "7bf9e3acb966a33f228b446f188634eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "f0133afa55adebbc6f1592b47a5c1e54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "59e39920a0749a7a11f15e9bf87f574f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "ade3b454403ca7e0195db3093be0d069"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "073398d719163bfb5a168407ed9edb42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "79c2037c633f78071f2c6741d3de66dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "fdb711b91c48eb56bf5dcfeabda42fc3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "f53247be2ddc7432ec74187b48d0a80f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "bfb5069c2a4ed5f0f03a776e21d6b610"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "b84db64c60f248c0ba666726c6a01091"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "582e772ca06e9da4ef6fb34ee0241146"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "0a59d308a22539b0a389c2e354b303fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "ada1bfbf4a29785aab5aaa0d222cedd7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "5809dba64ec2b3d9dff4dfb7c1155edb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "b6156d6e87194a9796235b3a1059c26c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "0b170233149119331d3e2c04a19f1695"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "097f5af11f353f981084f949b0372959"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "6ef5e3a1cd3473966ed87a479fa9705d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "61fdd837e3a9bd361c7eb8e5f3c36785"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "e2108fef533041739cfa390f65a24a6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "e1f3758e9e39ddf0ca2610416c820c87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "af14104ee9403908b6fd16f8682e3495"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "e74b128d4a1688c936e126d4ad89b52a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "3ccadf6df52bdd03c12ffb13a7449fc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "402e872e5fe9a5f19a2b657ca56ec875"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "eeecc96216a55a7f0f0735aba5b53859"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "9f74bd81a4ac1b3d6a65108b052d3975"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "c4385b81ee2101dfbcde6ba01339945a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "dbed943545decc1bab7ab1a2b9ea36a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "3891ad928f91811978a9d3068300ef4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "da36aaf4365f8d8832ed10d0185e19b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "41eff307a663992c888efd4d0a23e108"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "716bb11a802aed815923bbab9c9c029c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "efab9db48cc974d71dd6eaeb3dbb244b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "73ef7107d833879df46755ccd6f0500a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "1e0d1f34daed50a892b99a60ffc99023"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "21c51b24842615c7a02fc7282a159df3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "b66be8db1b0cdec17677cb79b2f79bac"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "bf01eb14615fc4b98a065bb030719886"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "ea277e4374344d92256f71285fbca25c"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "aa436465ff2e67c6c337635897269081"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "8e833bcf135633e7b20612cf91aa2988"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "a2f21720ef9049b60333e95f0991e16f"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "b2754d6c3e685ec8d08ec006eeb973ea"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "3a8312a5532d395fc0336ae204a4c5eb"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "390952cc08e55c9dfd324a429d78d5b0"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "4152d08dfb2ff0b081038f0e58a6316d"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "2d524a02980bb8c089360cd762bdc47a"
  },
  {
    "url": "categories/index.html",
    "revision": "b1a1838b17b90efb6cf2d50d072774c1"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "4f0b419b390e6fb7d6d289f61f387db6"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "6f346cd585b50de9d815e10fe43394a5"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "420d18bf817f3ccc0c20571540d6ebe1"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "5116f5758523a272f9614d73ae977d00"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "f982c11881c2b2904bca4fe578eb4c3a"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "2c16898879897efdcd4de874c6f7e25c"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "c019a06f3849dde20c01e21f058a43f8"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "2aa9bb1626cba1e152fe2626ba0c43bf"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "957ad521c892a5487db3e8673b317e1a"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "dd2e74eccb222289c32c4ca039be0ad0"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "dca4b13c347eb0a6c9f091dcf9746121"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "e00f0fa889624ace35504cd0cdd8bad4"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "05e96b1aa2d511daf3000f58ba1cba2e"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "0b3546ee3a955b26416940fb584c16a3"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "2ddc243d444b4ac075ffbd0b9647ccfb"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "58b52085fa2217fab5eb4629470e37f5"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "a1d0882447e79d9d7e21b05c680327da"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "90d85694b3fd2f4454630c4f405e8888"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "52d69d10b8140b8227bd7c004d1991f0"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "a60e0dffbd7a07fd2756bc41b2e7e9ac"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "d09b75173eafadf5bc7f566b7b98d5fc"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "8471ee96639319e9cd3305fac6f35258"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "15ca2557f3d9622221247b85b3fec032"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "5ff06e8ab0631cffc0d742470c6ccf01"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "0d70b4d7c007fed9ddf5c249a534d77f"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "1fc89a18854d9e1aad3552f79e60b88c"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "cf4e3a677abcdad53635f91b972a146c"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "8a44e98ee8e2f38bab0307ec22e81fbb"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "a8fe39572338710b3b00c3dec8814164"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "31f5cbb15bfa96186ff0a237e71f1398"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "47fa4d195e8c16825e152b82c91bd316"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "ec26112c99535e8f1ade97549778e1aa"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "917876a5be38a570752d352aaf96f39e"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "f9f2637dec98476b0e9738044a92e840"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "f096f3b9d56e8b0d63b031b9942aa860"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "a65372410d9ce7e1f95e70a26d88e9db"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "1cef2e16bb6faa9942a69a20665f1fc2"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "c668bd75aa93c3acc355aaf9f55cdf91"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "572bd7d5b95269936729ddeeec9f3e22"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "87f4a88aa87c1d18849bfecb922dd4c6"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "558413e70c9cd1c310ed7079cb1532c0"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "60860e9ee3c918797ae1705c78d08986"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "42dbf11d2ec543e89b90c4e73b47d492"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "334cd7f83521038d9d43b0bf282e1d22"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "f92ced2873e67d70fd1ac89119ba4f77"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "48d5d43580ce1b08c57805f1c79eae9f"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "b1d29cc021a19f83018fb9358389493f"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "10b33fe641446cd27609e37d00a29bd7"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "a97155869de8427325230346d9420367"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "dd20eb573e039811c41d41066590b888"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "d29984fe423836e76595185d7cbd0bfc"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "5b90872a618e69021cd38f2e0f8723af"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "75aa711fb49e59917876cb0ad2b3f2be"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "95b93046df1d4deff2fec5a90a1e8cc7"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "6435d2e551cc18257a523b650c651829"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "31e3ca82f5b42e4d9b0f00fdde2619d9"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "c2950db7bbdcc9722f79524111d92d3d"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "ea8b676b7cde220c7442258c0fc60dcd"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "145f574f2fc8c69e8551a1d1ebd08a0e"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "7b8f6851c8500d3823d93e961762d3bd"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "09d2ad925ca5c6e41e731471a7d3288a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "a04d8c77a6ab0c342c9a51fc86a0c055"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "68c98f941f805bedb4b5734454eabff0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "3d90f1618799a9c4803585d96319beab"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "5c23b71eeb21f69c644492dfde7d1f17"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "53f2407b9617dcf0794dabc72cd37abb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "9a0d91119fad95279c16719f1f5b909b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "b6969dddbced993be80e7e33316bf423"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "604f486156c8eb79fd142b08342f82a6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "7a78f13cd54b148d38081e493decf4d5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "bc3322bcc691588d6d97901561437148"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "8836f38e5bf9c7ea8c6049f5dc395fde"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "5e4ee46fb0975a8d0684bd7c2ab161a5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "adbbdd348b0d249187789b533aeb3f20"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "23ed9f9d264d9da5d57ff9156cd6876b"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "1285084f44b3aa70f915b1b56045067b"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "8679a358b9999220ce4992d531638f56"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "89562a945cd433daf8bb250d27a9c1f5"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "32190862ae22ae66a80ca9d999186f8d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "facecfd8e1551ae90e03f7b0e6f8250e"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "d0d948ef12c68df02cf852bf3ea9ad72"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "e93e25af25cada40d61a1f61be6d48aa"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "3f3ae94958f1214ec8e8d1ebf9c0d775"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "a6efe487c14511af93a6a6788d9ca839"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "31236a8c5273d2764dd9ba5f0fb12424"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "7846dd0e6d4fc0969e7aabebb5648439"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "9d102baf3d383c5784b77fe56bbdd426"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "fe80ea5b900aa749e1e3dbd6693915e8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "6291673bbad4a44e5bc9fb76fdec4685"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "05a814b8b4d4958978a062ffdeb78400"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "4be284dfbab566fdf211ee4ef19accd6"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "4b0feb4e18e42f1a6a90ee49c1e3c057"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "8d5a3fed298394efa953240aac10ebc2"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "a0bd2866a9b3cabbe2019217f0599a55"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "6bb8069189f3dbcda090a71671f994f2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8d58a386eafda7ad43d233837fc08265"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "cdecc7febcc46bbbbca8c2c3b80b0219"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "68f96b0b3b4dea3fc95c77b78bfc92e9"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e2bdad84ef2e6cd8b7ca9899efc05dc8"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "ba1b51e0f00302b1403fdbd398296be8"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "1e07b19b1a2a4283171b36edb9fb4ebd"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a84e48d620705f8fd4ea477502d620bb"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "d5bc83e08878a1822abd3844290f0391"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "11cfe686f490d351167c30eed4b6e1d8"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "2f1c610efe39e171e03ba1b1d4f47d44"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "bdaba813decad6983e7ef9752da3dc9f"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "2ae6882057c1bb34f1f0212cd8acdb2b"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "99a0aca085602a903514292a9497104d"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "8c9e316022cbf3d21be2735bc9d1cd73"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "e6426e245267c287a2035729c66e5e5d"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "3b349873e53a6cd83b233419a85d370a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "0b961467be903ca116652eca15a69104"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "3ea17e7653a33198add523888e9a4333"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "9b363c8886557a69badc2eb79191681d"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "a47f10ce898e7ae98be16df66c14edac"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "a5600f484b9936f110f365e23ab4647c"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "52060acac9a51870a3ca4c70d64d953b"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "0c517ef4b6edc6f14cc9458325f05f47"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "eff7f19fdfbd9bb2852a3723962395f8"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "0ebe1ef8decc994fb578534ca27a5c51"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "222cf9e0516c5decd41ab9237109f9e6"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "0cfce463016cc23614877babcfa2c781"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "0a7589afaf9724440b32be6c4ca8501c"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "8b597030b81ec8c690a3fe44c0caecee"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "3d196ba8c52aae8092f1df1ac37982a2"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "6a588a3b8b2584e456082d28c40d6836"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "00b657c5d075e7a51014254f7ddb077d"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "9f4401b40587d7de4ddc19dddcddc5a5"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "a4d6e122c479bb08e3ea7a762cb36627"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "6c85e571adf52da630a738baa7f8523c"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "3015890e51ff923d9d8ba6095ca43781"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "794572579c5f0fa0b00871a5020c9fad"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "6e4ad2fd7099bd77c2568951fdcc8eeb"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "145307582e79065860dc3ffc40ecc3dc"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "d1e165c77f802ede725d706847e283da"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "6284d406d80bf410478981419f49e6bc"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "bc8f208c359de329d58b303b29de748d"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "05b0a905391572348177a50a6e841201"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "18dd0e51a7977b34789a4c3602896413"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "a307bef20c5ba2ab6e45d110673d79bc"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "d31164dcfc26aa41605f23d06d17e76c"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "ca3de171e883de05bf7f5465ee8bceaa"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "9d0854254d1837b96e6fbab962ed7946"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "6d249e0258f203c01eed189d87bf1e1c"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "a28a6c63e2bb43f644c80c4e6288b0d3"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "2d8d88741f11b7211b828404c8780c85"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f79ef26ad9bf4c1536668038aa0b5df7"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "07f56d7b695c640757afd0503bf1031e"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "a739b828b1688e499f0202393ed0feff"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "18218394f4a9f85dff1b8a28d9e69fc9"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "1e9c580cc9deddc0cab8e3bc9501b82b"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "b9b5b1a4d5971d6c6e2e97c19bb3b05c"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "a79e833385b9aa340268604659c5c7a0"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "10a4abc0c4435166269888a9af8cdb1e"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "99e4aef25b108ef5b342f1b2276ce5cf"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "1e8d00b9adf9c3bd7b924d863a7e46e8"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "5a8f18dfd66e07ccb749b69f9474f443"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "af914ca52b0b6a01806362ccba5cb637"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "0fb9930d6b75397aa0b6396df3bd063a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "5f2f19674b8fe478cb36c674ba9dbd6b"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "3ea05353a50536453255d9e26123510d"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "b5ee175a541c22cfb7487653f11adeaf"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "774df68af9ef23407da5ad2e96201a47"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "7ac8140e4077e6559558073892856e3d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "c1c49461036142543ca49e2c98c0f6ec"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "eb1f5c88c8a3f05b4f79cc9001c2be6a"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "f5dde79d109fab427e3ba7f709e6a595"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "59a1a5513e42e8f065d129399d57ec35"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "4c89c727870474ec8b18a799fbbad64e"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "619501bb33fb6361762ad4620af8521e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "73f90d681236cfb1501a81135261deaa"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "62de18c43d7918e1ae4eedfc05d921b2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "de977291e513aa4ea2651d3ead6a461e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "7e579a3bff53f3e5f7cf8de2171331ed"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "975813b6b26637a1648b211c4bb37238"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "c43a31fa3fda831b31cc45e1b56e1697"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "467ad3c6df004d52f767d61a29633dba"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "1e1723285cd1ee554cf738a8202135ec"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "4ba2dcf41f7f0ad9efcb31cbdf406a6c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "d5c7c345e9635943fb78aa5b6047a1e4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "8324e0d9ce565d336b1d89f69b7bdb31"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "993c4b1f78679ae7400d12d0e0d9c6a5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "a8bc33c111b8ce9e3cd53ab5649d25a1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "87ef0d11826a81434efd16e8f297bffd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "e2892e9295592def464f03140c77182e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "babb47af4b6f6e40dc77a05725953a23"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "719dad921d0748d1cde0bbd46a1a06ac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "d8eaae66d80ecc9082d4044b32cb24db"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "1cc73b33083ea48474e99ab16f915602"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "924c80735bb31320b6c0a60f40b12a4c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "c3744a1a64445dde793025a5538c3ce8"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "c97b6c14e3b874ecd8954b81fabcd335"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "98726c202523af386864a9faca30ab6c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "412c8a8154ccecb3011f902ab8e9e41f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "5c6fb1a58270b4207f54fb93d83d9288"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "9f2285c7b64a70da5a33824c99527207"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "470cfb30a254414047c7d2e4a1f97ced"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ff6a14f88fb0c9f1b515f450bd7ea310"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "673f83698df81bd40e7642178d5eb454"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "749e03aebec43c6198979f947927942f"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "f31f601e757e96504cc5857aad1b9f65"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "2e099ff40cb07ff3f637a9e4f1329214"
  },
  {
    "url": "categories/os/index.html",
    "revision": "04d1b6afdd7a96cebfa810430830bc6e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "a97666b5a5b1e925fa7d7735e24861df"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "78aea7dc550f63692f936aa1c8aa5dd9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "9eb525b3f669225e69cecb3252e6dff0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "7953fac9f29e4c3a60c52bca9a18a75f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "373a65626f6a4dd8c945b0cf0c8359d4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "0382aa950e5537d63a5953e17f214b94"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "ce54c6abb51765467871ac88a7e2aa4e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "f039473a087d57a23da926d0a0c780fb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "e03ca03a538f8f87386df1eeeb72088f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "9830385868bed1700dd462f64166b761"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "1ee1c436ce1c166541b31ca5b60b33c6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "5e8726c1d1379e6cd8cda84eb39366fb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "29ade1ff3d47a8b0b87424f0e005503c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "79f55da93e86f8d183dd41d4f96a4a81"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "f02e04fdc6b1577f60225c31ea22136a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "997ce39e3e1bb8cd2e381e2ab9e9c274"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "3f2668af77f4673dee1c1fb0048f1305"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "78797450c58ff452502b5dc0ec8fb6af"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "77a4aa9e7ec04b51ccb81a9fc11c707f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "7650690dc11b0346acd909fda72f96a3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "81384f03e00ed71399e2f4328c28ef92"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "f1e71f7145cbd31a1c3c86018af93210"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "d245b862c36c11f0b63d9b15c9eb3dac"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "71a472188cf972301f36c3b04e970b1c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "677ab45290898abc2db6782b0c5a57c3"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "cf4e1f5f17e5ef2b98bffdecd40d52fc"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "2d938fe2ae902edbc49dffb695a31b9d"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "946f0fec723ef4854f9f0d129c6b02ff"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "a5b4cfad43c6d63bd0dbd638c5b91787"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "fc8a445e73ea78efcdbeb5dff7013ca2"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "df3bfce1c9d5c5394c22f9b6965c6528"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "69777bbc7839e7677c012e2cc4202791"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "0642e0f04f2af6440fbd965c45047583"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "a1d0a4d33725b1411f17d791fe181997"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "3821b99578251b48728c24266e3d790b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "2a4fd6c0a3337c00be1fb0c26a2e2322"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "1fd8ea2ab4339c7fadb31a939a2b2709"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "7d57b3b43e3604d5da6f9dd0a21f64dd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "c5b18811a03cf824059c83dbc5132e65"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "69b51d1428edd904b1fbe59ee616f50a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "58516f2e7209b19da5e82e92561d9052"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "4164b302d57a38d733cc88c004926113"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "36280eb801d670576b507098f524d02d"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "e5e1c1f4d03c59be7683223bd08871c8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "f19633f97e363a34844f4d2ad388bc8c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "7a8daf21bbb85fe41a367e747793ad25"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "f61c674ecdd8a8861c487ccd6303cba7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "d918f716c96fa6343edcb3a871ce7000"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "f462827715cd5f99a8e4f75005634438"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "a0738bb78dfb36226cac01ef67de807f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "b279cad394ff73b76855f9ca14f374e3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "c797e89d53807efed9101f11de85cd73"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "aedda8131ceb3ffce2f5eaff9588da66"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "ab16ddac83f6120fc8d46954b80e8e0e"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "01c75ffc31d642eb5329b8e70c9fe9cd"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "4fe3479cf62c7f8ed41967750ca7b4db"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "0596ea30d1ff3d63a05ad8ecc65362b2"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "7f456d109d1f974e3540f0767e2c370b"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "74e1af6b9b6a5ee004647a4ca289a47e"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "b4097c725877518139d9f23ef4b6b084"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "a9f03e748584b465f828d2f9e87a9ff9"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "13f10ff06950645dce220f5b87974c8b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "f4fe88e370c9b660a6b755eb45245d00"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "da6a79ecf436bdf7cadbc5122a5ea4ba"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "9047a29de5b5b89ce8ed3e5d493af9f4"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "26ab702c83750f1564a47157a20e8faf"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "a1e93f04331b554ab21f9564219af740"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "45d1fb3d86490f214c9a64f3a5cb571a"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "56b951894776834f28161f382f43e083"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "a555c9276977d41ee6874a665ec1ed80"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "2b255e26fb4ee6c10a55195ec78b9cfb"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "08548e0b56a2168636a75212ef236ee8"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "780659735004fc3b8a70ba7335ad6b94"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "0caa96802107f5a2e13b8d37e15a73b5"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "7d64db7d30f6b8e7ff1b2520215f17a4"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "38eaf2a871c22b5d6011bc380329efb5"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "449ce2fe3a975d99639dbdd543f0c6d4"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "d30b2da45c0a6effa34ac8287478d5fa"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "65c4c5d5cea94307b47aaf79c152ff85"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "97e409e89cfe0b64f44264a05ab865a0"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "625cf8617d39651cea72fe6a0ceb9905"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "508f813aa736efb49a0da8642ecc5326"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "78a804a0a326de6a76166d1e713efa34"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "d748804ddc06b2e9f0fea0b9398b7d05"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "686be6dfcd7b43a53270b2b3d9a07069"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "fd435ea4ee6d5c1160a0f7df9787c4dd"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "0bef49d2a53b623fc94566d9fe6e6aae"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "9d669f7b68653a907788b488b69c93ce"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "6d7de3a5a718ebcbab6603bb4c46892a"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "cccd8041aaf00e66cf3544d1e2e1adda"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "b9dc9a38a5cc41ec54eacf721aa8ea10"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "176082e111e807df1aeb02e23c32635a"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "173f11e461546f88b3637c0566a2f5d7"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "7bd0e71d11a662f1d1b0073eac543d13"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "ac4ca3c0b46b653bab5dec40c92441ea"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "ff6efb6a1d69513e6190282ecaf4fcbc"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "46fd8f973a02508819dfb060355aa40a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "04169d837e6ad037da9b0b7b7ec2a3c2"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "a6e03074a05b55db9b73c653b768b99a"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "c532cfa09f98ec3bd96f2846761e8f2a"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "1541d16c3e294200dd1aafdde36db2ee"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "a0fef56c5282e781271cc753cd9bc8d2"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "d7e2b3052849133c5c408a48bee08c20"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "b8baf943c0f6b2f81d928278ad1f96f0"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "4f91855943fcf004c8e36b07d55e8a9d"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ad7dfdbd52cbd98a0fc1ea8dc05436b0"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "830beab42194a570306802f08406e85c"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "5502a37c4d8c8bdae62379073abfac57"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "00535361638d6d835457228c7b9d2688"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "6813cff9ad1d78a6c7e8b7d69d7ca4b8"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "7ea0da50e7104632cb2fcff1b754b1cf"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "23556e1adfdd49a6dbb44d5da317e2c8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "55b0712101d768eec95436086f848e96"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "36159678da5f907416bd1079728b4066"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "9c10ef294f0f5fbc591d894f1549d2fd"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "ea30b420e8b59e7ce283158774e6ae78"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "0395fd6f38adc029188a3bb933aa0dd7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "18ada2fdf8ed7146e0a8da07f2cd0bd5"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "c13a0542dcff864b08f65d58f61b6515"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "a664d0fbd614bee0eba6c60a409dcceb"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "10fcc6d07f3b0053202163264eaeace2"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "4fa5c597f37c20c501a5420a25454dea"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "6688414cb3791840c27e7fd1c6f2329a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "79e68e6da3bb79fb10b42014039e5029"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "a5d7f7cdf8223589b8521d07357d2d91"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "0d58c8a8b04e46c22656d8f8dbbb20f2"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "cf95b1d33bc7131186e10da0f10aec82"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "cb9177e0f87cc8b7306a17afd796ed55"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "6064f74762007d8b5ec010314e5f59ec"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "265f1ca37c287465e7e412d17b7e9895"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "022787e77b904fcbb2c59c12b9c9a3e3"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "ef1634e2864e9df501cb7155e5c9e432"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "3701f516ba12691c2f3035c95df85d51"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "020ed08f212bb8a80c83c805abde93d5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "34f3dafe39381723aa9806375c0550bc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "1e52a1bf8429f83039e06e28fa8ef683"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "c8e813d2ae9cd1044ec2f1a561c93fb2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "ccd4c62996f5410d4078c96cc9252f50"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "842dae67cf46b39c4029a0f6a5262cf7"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "52a33dd6533b00573130952169737c73"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "0371b64bf3ba6cf7fd71e0703f784420"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "974900d8ea9b1f1e74b42f39f7e60b83"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "d87f0371f51ab2c75718e1521db9fdfc"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "124c07e1c2bec9d02019a5958e52af92"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "5cc3c15356e10ff9ffedf73a7df78c61"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "24a70d52f5a5cc90c99e4b97e27f7643"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "bcb5cbb0b29e37a74f193656f71db5d1"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "8f1898be5b7e8849879b2354d3362627"
  },
  {
    "url": "categories/php/index.html",
    "revision": "d41ecdcfa22327ec8f2a0c7269475d64"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "33b760de54d634d463059b4f662fdc4a"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "31c2761d861088717bec57067a90f218"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "99754985167689a526774deba39f8c4b"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "6a42b4eeaaa6de0d135b747773bc0759"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "2e8422e02a15d0e0d132b078cbaf2535"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "57d91be2ae5f99273e2dce585ed3a378"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "c09451c9299794d31611881334f05e77"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "92548177f41195378659eb267e63a0a4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "727ad1314f06bc69996e9a07d3b4d2da"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "e4e669b8dbe487d9bbc9989b4494a97b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "f2e6445c7d3f1b9002ab80d6a4daf37b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "e978f85fca7e35ee8a2481cf7d5889a4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "9840f9dfaa9d118f94cb299f8f281a70"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "667bf4f1be86c5c77f48c448c075890f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "b324540bdf783743f2d78a11cbe5199b"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "61824a9e89e3fc2bf736c0e209200d90"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "3d23572e46772dd6dd080b8274c208fc"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "ccbb73de0b68a667afb0c58db8fea82e"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "fdfbb1b12bd0544b13158ba908aad478"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "df91a482583294da07286d30825ea999"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "e5e542e1e81c5a1ab6139bb743835f2f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "f42b92f70a11b02d115db723796b87b1"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "f05e2f7a3dc49984a539d0e68138b792"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "db43d6a374ff5b1f4f7717851c589d72"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "6520808b8745f9f8ce7035d9640b840f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "920f61f2acdf01e838c1370e716a3319"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "0b250277789998ad0959f8f5e2fc9e83"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "a093dad6264967fd6d377c24eaf84fab"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "e162baa9431ecc343085d07afe8d0850"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "5fd83c72ed0537ad74ff7b4cb49a3df1"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "5d9f1f1b95ca68de86445720337a6bc3"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "48820a3227766e5b79706b5633ac1f44"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "385dce43d0292f8d4c895ac150cef262"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "8c14fd3c7108c2e428055830922e093e"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "84491bf3cc74e946c40978484feafac4"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "f8e5331222a7303b6452c33688716a7e"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "41da46ce30e4aac46fb64eccfa82c05e"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "ea56f7293af85639385eea468c83437f"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "277e0b7ea90a33eba5c43bbac50e62af"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "54f4d4cfd40b41544d1537f2f55bff16"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "9306f9a9ed7ead4f4ebcef00f2a28f80"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "d0178e1114cf3c02d705d774f1180fb7"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "ce06c11d7b40b6fc47486b5d6036e7e4"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "0a67a3e8c8345f9d09c800f20fe0d68b"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "5eee55482da1275795dfc6666509cd1a"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "a6308a89babf64eb07961dfc061d9406"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "cab5ce4fc2a8069a2cfb54d1618b08b2"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "4486ff5a456926ff495fc4e765fb0687"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "5bb6a18838671ef278c869c3b6833c41"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "0c92a0e633157578add66d3640c6ac32"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "50d96c2fcde3ae8c16e68dc1713b0975"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "f215378b64ba441139f1be63bea1a6b2"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "88343664fa45ffa8b8ad71d5ae57e15a"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "5c6d96ccac60fe633cd4bf95f3ff8d00"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "30da4607cfb8391c3537a6d728bcda00"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "ea1d06ad6d7509e019e36442bc6f9774"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "f430bee6a22f7c29cc24bb8dfb5fa560"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "c59e453e110571b5948007a045dab01d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "11a1e030b728cf2ae2da8495e5551073"
  },
  {
    "url": "categories/python/index.html",
    "revision": "bfd9b14167572f35f5f160539fe3f829"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "ba202f3b0bfff2734dfae9354a720b4c"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "d2343f197294f56b7e765db9c8d0bd0c"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "64106e0c84aa5fa6e33e1c67c88ae7fe"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "d1ccf76a7969164f715f1d42c2fabe53"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "6d4fd0b06eb3190358cca6d86c5b5d1c"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "f5c32c6aa50974b850eecd5c2c0d897a"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "31c6ca4c8548bbd1393eb784b42ffa11"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "6ecad36091de13351f90352440d71d86"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "db21b129cd306704d9b13441422ab672"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "cf1db35a2ecf331ead7a8f88c1807826"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "291894dd9f3733268b4e29f59ca543f2"
  },
  {
    "url": "categories/system/index.html",
    "revision": "82956b828cb7fbd4a1bea9d7bcec5ef2"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "1098f89efe9db482b6c1ef34b7c5a8de"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "79f582544ea3ac0fffbb90acb00e546b"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "53f4e2834f5c40e7712df292d91be2ed"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "18a3495bb1a9dd594643394a7ea8b303"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "92136c40bc7198ac6db21d03132c4307"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "df2e46abd300b22706bddefbb8791db9"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "7aad77ea6128095163fac092eea46ab7"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "164b6a2dad1725963a817c50ec83e91a"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "0d5b36503921c0c10488c66ecb0ceee8"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "e400c4ab8fbe2291cb937e5f9bdacadf"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "f434d9474f0a383e1da44037509ca7a4"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "c2791aa120a5b2fa189bc27b952ed6c3"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "8077f8a5bd7507a4e859528177864c55"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "44dcab2d6253179a7b50044ed7c55ea8"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "68702b2133e59b3e4901b5fa0b751916"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "b72397ddabb80e8323079fb64976d815"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "df414487d879637ffea68f2f8a64ecee"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "c3053343e47ca3563644c438f8842cad"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "722cb467ee38532e6a96765feb1d9019"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "11d8c6caca68c1472502130c321e0bac"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "e26a4e374f448e54a817f8e67da3120c"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "4f07ffe4a2571bd6d416323bce8f85f2"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "f5fb43fd6980b4eff048730089950b7c"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "9c998af76b5f1c64f823636632f3aa64"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "2ff0e620cf1b9f202d201320b05022b0"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "17a8beaca069b3126b3fe339521a7c28"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "ec4e325005b7658d998bb816cf2a7c36"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "88c529e222c50dfb7836e5a2ccd64673"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "8927e0ec531a5e8656f43252fe121e80"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "4b6e0743b4444bb7b31250e146993491"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "73297f715ebb89ce24dcf9562781f654"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "805492ba2af45472db4239c5543091c6"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "4ccdcdb03b06e1f7d0cef184fce9480c"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "0ba1c9cb7dd11e8bb0b05df1cabeea84"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "f81f2e345380744058f007de5395fa44"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "371af0cbc1eacc57296dcb513d798f7e"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "da50e448db726a43887db25443c11f9a"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "3a4ab9b8f7eb7751c76ba1f2b43749eb"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "fd6062854ae586426bbfcb67c88e897d"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "83bc1b426c3f6d630bc8d984145310a8"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "d679a39541670575c5841637cd22a1e9"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "312951707f7b33fba0eeb67bc55b9cd6"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "8147c5cc58a03a978b0ab217d2dc499f"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "f0b4bdf8fb4962ee0ebd3224667f00c1"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "beb05ad0f3841da5ec0b2fe9474263b5"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "197343a9978bc711c2b598c3fcd5e3a6"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "4c514c68fd60a85a082e1a88eebf54c9"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ad68fc52ec4272cc8383365a93328695"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "17f9f23447cff39920abbcb71ce5b9a3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "3f5bbfd0155be8e9309d48b74cc0fc7a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "543ffeb7689fe7fa5dae89659b547cb8"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "cbae791634d1a3d6d721d2f0a1274aef"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "e1e4f1b444f0617bdd2dfc41912f33fc"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "545bf8eb14d4b7719a85bd1aab6ef46d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "0c5b38b173e0244d958ae1c43977b389"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "7f0858c49070315197b295b4e2d7ec3c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "6726eb19d990aaf769a84d3e278dad40"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "800fbc7795b09d41c7583452bfcee8d6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "8c305c66e5952a70d29d375edd76fbd8"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "5809d6c08867030d117d3b0bda1e034c"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "1425d2944da0e63a2f16751bbff8c723"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "d0bb320ab5df24b1231dd5a2fd0eeb1e"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "8aa577578b972086101a102b33f7b202"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "c3a954be9875f372ba5257a0b415da2f"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "604306aa5390fab2e58d0db894837a9c"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "381bc974e533d344464569dd04520118"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "3bfaaeb85fdbfd87baf0f368db42c78e"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "11f16ca196e0940ad8d35763eac05dce"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "88178de11cef5679ee9bda775a58193e"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "0e7e5b5da06792bb19c2e1c2a8076c4b"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "41aa1ee006611e4e306bd0434f4f4193"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "6894e9974e5686c9f9bd61a29eb21268"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "a6d057cd01cbaed4b3c44ff5184d3ee2"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "b0b7ef7935a49ad8b0b86935e40870d4"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "6547a56041543281587a8af9796489f0"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "43079028ec6516ac834ff451af37298f"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "d24d7f7b81ba7eafeb7bbb8ce7e44ba4"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "12df7b9e45b94b89fd84f8e5019327a3"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "ae3d437fdec9014f9cc5b8cf10d253e9"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "e96e2515c70479a0d9567077d9d2a2d7"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "927ecaadb59d188f1d8c16e9a8dc3a97"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "09cd145ecb7727d50e02b679ff7bb6be"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "bd93203a480c32358416c372421a3c97"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "f5726e609eb53f4ac2a9279e89ebba69"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "1683cf9a81a420655b26b155a7696f78"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "fd8025d70724d7a28dfde3cf785c0cac"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "90d69633bc549e1003f54d7f2828062d"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "4bc70a9ec209c6dd127019f234cc286e"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "97b336238c4179d2a633c3a692f73667"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "5806d8456f807f79f5b1c2ef9cefc63e"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "8e01ab11584fcc2e06c17dba1acb471b"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "d78b70d428a709c2e44a1a3dbf6cc3f0"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "11abd3c3c5aea5730812016e2ab288b7"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c9439835ff678c8468c6d0c710bcecbd"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "f99d489768d092e555a62e40322f7b2a"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "af46f4c3cbafbaa67fa16898cd5c4b96"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "82e07560f7ae3b78bd9472087a1006f4"
  },
  {
    "url": "favorite/index.html",
    "revision": "c91a7346f9d6524736d8c8f7df49f3bf"
  },
  {
    "url": "index.html",
    "revision": "ba4fb293ee06b2fa3d4d500f45fc580b"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "a5a88d7eb2702732a3ca23500a5f7c20"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "f386d3cecacee35e5d4d629cd9ba262a"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "e9e38be4f8d29ac1822f17def623ff4d"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "6739f37f80590ed4bb2a253dc60f64ce"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "1626b637e19bf304c4c3daccb69eff17"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "450118803bc57078374c4d8e67550ace"
  },
  {
    "url": "note/index.html",
    "revision": "d98fa434adde1a6a8cfdab7cfc4772a2"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "9abaad24ad788c89441808d632b6fdec"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "4eec058f4bf4d72427716f4101c54e62"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "b43e1e7890ee03d19f35d67baac6ace3"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "2b94c4d0067d38492a04b685258c4370"
  },
  {
    "url": "share/index.html",
    "revision": "a550b460de4d8fa3e62d32dfc8cec542"
  },
  {
    "url": "single/about_me.html",
    "revision": "bb1f9cada7b4659e6791940f7c1baebe"
  },
  {
    "url": "single/all_article.html",
    "revision": "a6932b4c141a222e013e34d315e04bff"
  },
  {
    "url": "single/welcome.html",
    "revision": "5afad3576e30a418ddf62aa9fba36ddc"
  },
  {
    "url": "test/index.html",
    "revision": "bce6d4b8fde4ac312b99bc343b971f66"
  },
  {
    "url": "test/test.html",
    "revision": "9fb973b228ca2b325f09dc1f65423cbf"
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
