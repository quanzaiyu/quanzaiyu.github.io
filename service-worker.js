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
    "revision": "7ef5bc27e7d97ea2d40d24343b49481e"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "73451aa6bc3e742e2ad476821803a9e7"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "5b1a6aac2db082b93bbf7d914e36af18"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "64b386950065ed466effb94be3cb82d8"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "e47b8c14315f043f510de344c14be28e"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "3cc8806396b41491373e862c1f4a74c2"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "a0ae9ccc3209ec38405ff0d9415d2c7c"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "d6b523b47dfdedf09c1f5ad16b84ce8d"
  },
  {
    "url": "articles/index.html",
    "revision": "4c187e0d99d6c00c0f6c3914f59a94db"
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
    "url": "assets/js/1.b1513455.js",
    "revision": "0a646b71ef0af65733abc4e48c964a41"
  },
  {
    "url": "assets/js/10.4cc57dcb.js",
    "revision": "eb6b3db143ef8e404e26476ab13b93ac"
  },
  {
    "url": "assets/js/11.b1ecff70.js",
    "revision": "f2a23473d49a76bd7c75fdc6ef192023"
  },
  {
    "url": "assets/js/12.85971e06.js",
    "revision": "3bb9b40c8e690730604b7c902cdf34ee"
  },
  {
    "url": "assets/js/13.bcdfb24b.js",
    "revision": "a7578a085aa672716871cf7e3f66f105"
  },
  {
    "url": "assets/js/14.d9415393.js",
    "revision": "bcd9433b958d3822f59a8355f9de740a"
  },
  {
    "url": "assets/js/15.e9522f94.js",
    "revision": "0dc337eb7ef5a128c551228a44c45706"
  },
  {
    "url": "assets/js/2.07c9017e.js",
    "revision": "bf27b9d8ac03bec297f13a75e34a5e3f"
  },
  {
    "url": "assets/js/5.ad77a6d9.js",
    "revision": "6a9ac62d4794896ff9da755fecad1b85"
  },
  {
    "url": "assets/js/6.1c369eba.js",
    "revision": "5fb3591c99c034c69d8a8b01698557be"
  },
  {
    "url": "assets/js/7.9b238f15.js",
    "revision": "12643d2d9c6e81c2717d0a08a7f4c0f5"
  },
  {
    "url": "assets/js/8.4534201a.js",
    "revision": "74d211895510c0acc5c7ab8446e80c56"
  },
  {
    "url": "assets/js/9.06e82545.js",
    "revision": "02a3dd9b2a3b55ce35723c01a843e558"
  },
  {
    "url": "assets/js/vendors~docsearch.fb91194b.js",
    "revision": "d0ecb008978faeff160d5246ebe2b86a"
  },
  {
    "url": "blog/index.html",
    "revision": "a1ad0704f4e505b9cd48b5b6a6eca9e0"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "caf36c3f19568ed7bda7bc0ad35d974f"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "400b059d6c6b0c74fe053158bb1feec1"
  },
  {
    "url": "books/index.html",
    "revision": "76bef7e8d8d7a84e90b43a30f64ea38a"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "2b294f2d580d28683d02f5390e417420"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "78f6df7c64370bd547b319b61827bab4"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "5e4b8be3cbae4d7fe5eb4a5754484fcf"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "8b3dfdef92c59584f4361523552aa9d2"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "7599677365a7134c7504851882c36928"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "a9d77c064ad1b2a52c86d17591a40614"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "fe64f89119bbe741f2d43af7c4e8155d"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "0bdfc28e464ac29842746b045aac58dc"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "4942bcf54629dae7aa88ac6904bba5f6"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "e95bcac41faa7e741b58bc4fbf5fc5c7"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "09c83825e1ebb5ddbc456bf63e464bdf"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "5b3c231ac016d8f76c925fcd6cc2dd30"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "09a118f8e15761bfc752caeb19a9e390"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "5900cf6f982d3f618fcb5e7e74425c02"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "dca45b41c71f330ef275c22451e8bdba"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "995490b5a1901a4a3e6ce71a6396f866"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "a953458e47af7cd63dde43828dfcfcb2"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "8eeac879b70e91437d2d7b1d0983e427"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "08ee0c68be98132631f7c45bc1f1e051"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "4f005a6fe6fadcf57caa2195a84718cf"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "84b7fb6ade2e4d9f6e633d678139452b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "c1b32042958e3777853c57a830cca0c5"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "685524e4110f7bbd44a9701a4076be5d"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "72ce7ee3e4a96137d3faa85dae9adf96"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "beca51e355fe3e854c8892302d02d9f8"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "bcd16d4ed456589e3101945c2a45ec47"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "e9570930192d8bc59f95e591f4d2c802"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "744f437e597d805793caa1bb513bc4ff"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "02ef045a2095fe88fb389572938ed768"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "279bda6ec8464409d8b4d4467ec3d90f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "9016610dc8b72b57d87c687242dabf9b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "d292344471c920f2df29c16012077a4b"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "017ac25e388fcb3c1cc2863da9dd2233"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "d9495beb5cd6f6380e403c01f664255d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "bc713760f7b0f354b8d5c31dd10a109d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "740602e164b35f12a7ffacfa64061250"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "f2d36c63aa958278307f85f6c2a5f70f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b4a368cdaad46c386774e99020804af9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "ed0d7aa9abf3e3aa0046998369a62d0b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "4f6a8bdc88014b82d56a09685deb5fb1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "9f58cd38c5a30344505f517a80afe177"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "ce2719dff87ea62a96f635a403db16ba"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "463ee7775614295ccadfc5c757e9f793"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "3612cba353ca0ae773c92546dba2dc47"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "73b9a0d22c3215a8559e3145d9e57c17"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "515258b27371466e753a2608e7817030"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a493b8146336f39476880d48757eb75a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "5e532c4b870c461a64881a2099e3def3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "51e1b45341aeb0b4dedcc49678e347a4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "0eb8de0993a8a4d529b0ff1513514a7b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "7ef69df81849b81b8a7d75bc725bfddc"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "1cef686d75c58b43c7afdeaadcbaab9a"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "5db6ac15b974b8e49f8d2b4dac7f88e7"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "cd167618dfaec55e39aa53cc8c457a7b"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "fda73fc63839e680d0a80f069ede076e"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "a17c9796d5b8924fbacb634a2e2b6801"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "a4244d93ddb0f019c5ee2cbcd63c1131"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "f501fd4659c0591723d744a49385da15"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "664365171183f1c3ee86de7f557f91f2"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "ffbe02b7a0099b530d79ca96a9df2b2b"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "a9bae9d8c33bd62c90d49de25f1bf7dd"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "12e717e997cccc255cfa998dcf2e996b"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "2caab79a3d7d27c929ba35090ccd5114"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "1ff00d236e035729538963ba0afe869a"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "bd1e4db71114845bf3b1c70828cc152d"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "0760c86ddf721e590363cecf90a454ab"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "292352c1962b8a760a31dc4c9f86ee36"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "7c429c29d880c2af2868f03ca2c47be2"
  },
  {
    "url": "categories/database/index.html",
    "revision": "94490375761d62f1b0032a5d9c14762a"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "a2257c72d9056f529ef27470d5973317"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "b81a8f81d22f66fdd487c5b3207197e4"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "8300f3bf7b89fb95ef34424fc848c44f"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "e324cc95b4181d72e101339a6f2f144f"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "f26a69beb5f0a488b5f4561780bd46e2"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "0f798ec60e5e19185dbc0481c9247cdc"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "d88a6e81a6be4aa96f702276815f223a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "494dfdeebe2748e4a2e3e2c8853a97b9"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "54d1181eba0195b933f58043dd4e8d1a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "fe04acb16ddf02300969de3dde0cd5f2"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "cd1cd40ba6e7641aba991c51ac56d5a4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "3629b1e4038d9519b4fa67c61d809fb4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "58d7f3388cb01d835b5829980d70aa8b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "a793e11aa0437973d25a98b574703af1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "5f7922c9215c86ca95c971f61da143a6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "003c919299fb9cc39898279cb7f27c0f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "a48ae5f97aa8245d740a663655e6ca68"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "5191eb5012cf1ade6120b8ee356d2a38"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "2703a046a3943a47d250a03a8ed97e4d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "aada2535b03e50bba52a8cdb715e8f64"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "19e3cc6a553f2640244434b6d35e1200"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "20e864435d9ef856d432eb4891e26e8d"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "8828642298f74f7beaf51ba5b1c952ad"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "498d12342d1cb36ad3306b910c97eb40"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "87239cf77d0841e00763ae8caee04713"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "e4a09e1782a075bb119eda9d7f3a16d9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "9f200faea2a30087689e18f2f0f2f7f6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "ea25cd115024ce19ab004e4159327def"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "74d844beae1fadce628d2a246278df3e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "3407cf22b8e69dcc6d121dd139d22d43"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "8fcb8f97072f753cd305265179ccf661"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "b5f57ad460cab48203aba05b2d14cd69"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "15ed55e9019fece01db72dc92bee6cb6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "1581ddb9907b670460cd74ce5123b8a8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a504db379f88f1bcc516abbbb241ecba"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "5ac9ae7554a669d548442ca6af3597f4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "db1c499fc324b438eec47ea9f9f2de35"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "c715319f3676fd297e3938c72cbe8014"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "713690829be28dcdff047bc374a1ea06"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "99cfbe22221104c90aef14240dcd91b2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "19c7999500dbeb48c2f84da9859bc7eb"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "f8909a307a60cd4f7159e8b12b87d89b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "7f5eaacf3b62ad282335eef38cdced8a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "5e6f24cf25c14347a9166e69a207cd68"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "b68c879ee9670048070b078c242a63bb"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "66d9f154fecefee17f1fc2276e99ec0f"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "c1179865f5793c57fb1e1316fe85d5c6"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "4d7ae3f71abceab6b61ae04da8a2a394"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "e829bce95359fe7d826703badc8fd824"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "747c236b0ce668b56d107ccefcdac96a"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "e3b91b0ccc240b65597d773dc5d62c26"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "1d6c59214a081726df4ddd4435347fd0"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "27f79fe93c0a01c4038db2eabe3b0364"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "89b3128917a6121208d4889aaa1b54f3"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "c2cae17e7d45e09567401a04aba87e98"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "460c111e0c9a036eefc948edce064e2d"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "33e4982b64b80a64458bb1b7931b0f52"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "2918f54a23420c2f8978919fa751e3ae"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "73a2efb7b1f03c867ad1f77c35d3ac32"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "61c1fec2f8e641ac57b85949020c44b7"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "088a80a3f6ed31394be9c55c47929524"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "a9f2ad138b47371646cf6b44691d4859"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "185984e41994160d79d9982ce475ef2f"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "47199e02954d51a53d66ea8937f1f8c0"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "1938803e202dc58f8021827c60588a7a"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "404a17af82b083dd8a0a3a6c51741674"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "69fb916530469ab5f47dedce48e1b649"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "4d323573268e17642500972564707684"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "c02346336937bac2d4137194c8cb1673"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "507e321a8c4c396c6be866cbc0340e8d"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "713df77c2b019272c565abf99698642e"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "cd84e95a8b9c95ec804eaf372c8f1875"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "389a5a7f46bd3d9f38e535be3a6bf793"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "13380883a95aabc233dc2956e87c12d4"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "09f048c3745fba280aea660b3d06a777"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "adaf6f1e980939fd77e35a61e986d217"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "1c503edf936d5f0fe0def82cda5b258b"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "9dbdd5f81e42564d3d3651a99947fb6e"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "893b1e81138367b66a3bd78bcc66de7e"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "6fa22a49960a910b685898589592c304"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "5490a8dc8caa7fe1ff258b16d3f4a280"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "a759eb24b80f43575fe027f51900d659"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "10700dc7149b4b677883a38ab76b8d87"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "31d8a94134c5a27d66b7cd7a018453ea"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "638c10d90571e37c847106a29beb8212"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "d85da4886fbed46147304877ee0f8dae"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "8978fd9f8bc29b5bd7ba30d43b9292c2"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "809631639c4062aa5111f8c2a30bda98"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "499a9cff1313dcb1ef548ab213e69db1"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "7d6864c88a2cfb3abcd6e17f25d78b46"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "2da19aec3c7cde5f5aa3759e771b96c7"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "44f9b3337d2c6b3de94423642ca12612"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "2e9e498aa736b46e4017dcbaf08b45dc"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "60764966f9dcc7e8a1397f43d04310f2"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "5db47a0277081908accfcc301ee33830"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "e4a692c95c2728705d29641d9054f134"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "2bb83ae517a54c95001ab15530f6c269"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "52d734f58d830559d3392e6778f777cc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "784d75587ad694d0b151d0c9d5e16706"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "084bc15c8593b48464c5a5bf4cccc7e8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "90fce12415411a3841e3c338a9f94ef1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "af5f2835ed50d3be823b04eae0235fd9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "afc07ba271de35963b35b620cd4a7190"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "bd4714eaa27a27b33224f1b30c3cc190"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "0949823dadb078ec7d437f6ea939d2d8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "92fa0aa75c5d844f29f23ec4cc157945"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "8c42eef76cc0e921d3d3f70c191d3929"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "813907a0e662f7d251b72bba3c5e591d"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "72bdb86fc300745418906ca0c9ab181c"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "5d3b51ad0fe2b12130c65170dace2b2d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "820fd5bd01db290f5867daf4293bc993"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "10c26e91e578b968dbd4e3e21016fdd3"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "dc5f6266eeef99f47fd5509e7c09989d"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "72f87d6ad4b1e4bf2d9d54a523d59c54"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "b6fccd6484e2acaffc2137b2a827b5a9"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "cd71f7c7cf1c158a91d0d3d1623cc34e"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "4daecdae70a9c22b2a305f7b2bcfd496"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "39e3c02bee4945e11ca965faa0fcdf11"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "5bc83dc39a3d4a45037af8610e21e407"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "fce1fe32b15b6409253fc1ffd477cb37"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "a8ee6cc550ed60275e33fa217b514800"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "6df45e34363c67ecec1ab5f11004978a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "9206bdc214aaf0833e566744c0fa4fc8"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "b1b779956791a0fc7e8e447e50044caa"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "759712b31f4a5bbb8102ee6799a4c10d"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "3a676c0a01a6aa9686635d00e44639a9"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "e297db8d485b603238553c5c9f461630"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "5cd40262a90bc12441b03e474e7a52ef"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "62be291132ca47352772dde6b38689ab"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "1297f52336ed791f0674fba6b77ce653"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "25da8513f9cdc16d744c4398abac25be"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "446ecce0d9654fc833e294373c02194e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "3c79403b258531e556b64965f18878f4"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "38b9ab13cfe2ea6f69e354344b037470"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "063326269879943ddb28138a2d0e6e94"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "d8f4a6dacda3f1ba6a70222ddb2fbc41"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "5c7278291580fd3c1fc627cd68593d35"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "e1bb6d49b983a9dd40f5f2fe232fe818"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "06e80d6deb16aacaa21ff4aed5341213"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "c03b489642186b233f04093442bde0a1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "8399ab02ef80a982223878f4a7dbd067"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "e1075ad0a17041ab2362855d14152679"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "327a966b0e7df8ed65aff689688df948"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "8c5b24ae616a9a270350f6c2046932cc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "f892251c108b6e33d7450dde35f63251"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "e55a39614e02a83261efd6d6af130136"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "c710a3e5b24234e149fae17a41d6f6ef"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "7a5a8a4d47b61d753a641d961998952a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "7b5b69416adcde5753fc78898ee5906e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "8cc5ea244a322e49c94bf1bf16f69aae"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "6c182525bf1f40bee4c9f7f15560e3fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "114c0a5ccd94f6d444aa78b94ba55fb5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "5dccb5fa694893e663290beb76faeb6c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "819c94dc435bbc568dfe9edcdafb9898"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "d0d02592f7704d0223e1c10f10e5071f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "d030a4e1f8d2fc93cd6e8a7cbe8418c5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "da5b2b6719a9271f9607d8bc83fca327"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "96307be4cca0fd43a81d784f6cb02a3e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "07ebb02aacf2864702fcb1e3081097c3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "395f0f75e1e06a609b43fe86d1c8e785"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "db81cc757675dc9993d64784a3a6766f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "898d84818a56f3da0168a5025862ca01"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "38421170fed392e53458fd6cbde78586"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e7c0803cc69f0c0c38674f62f3731f1b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "e64b979e6d0f266c9078a7c128caa5d8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "bbbe9e9073aea0c9adf8f0cf5fd2230e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "c7f8c3eaf6bb7647102db2bbbcf40204"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "cc6c6f1a25275735b93c43cbd4c36317"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "60f6d7716ace661028ba7e00d3e5490c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "b9904224934b8b9ab4f09d1c72a7b954"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "c54e6963b142d49ba5ec371838a56884"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "e56c8d4166528895dfb20a9b4cee7b5a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "33d206e3eda03874d785070254346f6a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "bae768bc970a5e9902d3da56499b51a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "bc32b306e62bb32176bd0ae3887305cc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "5c4a6daf84ba98c9dde0944fd2db29ad"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "b95569580fab213e3533e1722d158cce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "32288be96da550145f0d05f0a9239c59"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "507672301876808016a71e83072a5e9e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "caa979551f057e3f81d5c3e961085fa6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "9cce5ea50067b362f695490524f71a31"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "bf40fce49972082eff351be2918aae4d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "414834985df1623354a17fd3bf99554e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "0f631bad922ee9fbbebf92bcfdd35d02"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "19eb78da5bc10d7982a0f3288f9b7042"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "495efe68128584cf851951eee0ac9040"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "a90a1081980793a2c860c4cce99ad9aa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "17a097956051cd146298380cc85d57ed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "359264a3467140140381d81fa5e19a68"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "0eb55981929666c6ea2d807e0310d3fb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "653e01f8658c55972ec5b2b3b5244492"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "bbb7ac7f73cbbcfc4f03536156392fbc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "6079cf4c19c41d22861cdba1760b82a6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "561b277c07c0797cfc956cf8a62e4cc9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "88513bbbf1ded52eb67541990b7cc992"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "973331deecb73da86701ce4669abba5c"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "17b8f2fb6ede1b13637350d1729cd4fb"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "67c673b31f473f472d2edd35c51ecfe1"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "8d735a8572d4e07e2c33533e5430be94"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "87d18eddf5649ade3e0ebd2c6e3adaa6"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "1ba941babb20453f4fbd629160fa3880"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "66c33d0e8abcdff440f0c4227a330447"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "8341fb800fe6bcc01ae37f434fb425e7"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "6436ef511f88b5c59e120bf6e1a2c8b6"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "698834897e9ee23c3745d1205a3de456"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "5f7cc0de6b2c7ae5665eb3256a4b21a7"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "b2004498d16619fe91dbe1f70d252c3d"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "3520f449bb900b77b5ea028084d57e48"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "af19f13f166f8c03879c517074997f83"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "1827fe9afd544462849c3319005af566"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "20c7761aed98ee4176977934226695ab"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "d27ab166c8aa32f133e140dc1c3c28cb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "e26bb7197eebb872d3384a578673d410"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "af212a38911423847cb48a1d4fe0ad51"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "e940c06e618c3dc856099e0fd783ccb6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "09b700f96f0ce5cc5dc334514f155e8a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "34fbbad64b7fe7acb4c2f174e533af26"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "b70beae33612a0cee6d22a848f795fe9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "a8c1c0d9b404ac8c8224c9b0a421019f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "47c994d0ba3d6a872d2b4f26f5d1b8a0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "8bd9e11910e6e390c0073b28570138e7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "a1e5fe10e50d8ab8ca444a46db24b901"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "5061653394c844f9c5bce87a24e68809"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "f5f67c601ae923c1bc89cbf616082379"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "2e53ca66a69a05e09a3c7d979ff36e87"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "68f900a845897e0373dfc1c41d98b191"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "a67ca5e1339ac71303b5eb3af568bac8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "114f040f4ef5b0c31a322bbeb6458538"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "3636ab1f5669c2c197ac22e628682d41"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "d3b1a6d60e6f06bc3426ec945e9a1f96"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "f2dc6eda7039f264158c1949b4263689"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "6d5f19e7cd114c25870e1f0cfdb14e64"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "1ced382d5f1bf1030b8a4458d5071b00"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "d8cb8f461e523c5ce055a18e21681f50"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "002ace199288e21bee399a5a2457b6c8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "571118ed2365aceabaef94ccff4e42c0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "7d4e877e2f5e02b18c4d3d7b8057202b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "1810e68ec915d4d0b41e66f8f8fdb588"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "be6d760b6a1c6c5619c346abe75793bd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "e5960559f0f87b306c31e5b7dae730bc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "8c52493d186acb105f26cd83d3985776"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "948e4932bb34f595557422fd0284be49"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "1ebcb3fb67299886db65d242da21d556"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "dc9730da781ef7b92d20159d1822faea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "12460373675f56dd3b2cc2537b1e331a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "1bda13840fd75f22ca11066e39ce6853"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "0bc24b2efc10513fe855255ca6d4ffb5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "237299c073bb414f802ac2e01b042c59"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "fe4e7de20c2dc52d61d1bbb1ab574042"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "2ee5aaf6a102d934cfab8bd59c6cb49b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "7229cd80a109706ef3f6d8d5b229760e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "1de20edd6fc3ad8598a05fe65cd1f3ff"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "5c717a0a57caf056ac721bb738e3164a"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "ab1f62f1630c969ea5b6e792dc6fa61b"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "8c9edeb8e94b40da5f53a3dbb1674bfc"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "ccc0697bfb9f73e07ac9762eb171fd21"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "b08813f2d4b3f3132ba3a4b8dfd940b4"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "7f700d049fd105723da38db58584c5f5"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "3b5482332cbb251c3b6d73121d0ec0cc"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "8e6674bb812c9111aa7a3ccd50b7dc4d"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "0f4d5bd08b8fdaceaef836f8e428bb28"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "d53b1fa1819712637c8f4ff2fc592193"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "8525a762d4445d0594e0e710d18c53ac"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "c0252ce01422b43aae45af0432d40e15"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "e73eafc7dd95a64154b3be6f8b5f7eed"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "8adb6e7449b7e6239655b1c1f13f0a81"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "48fea9fb893de8dcc9999e9ab6c64654"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "6ba03067040959df97a2b3e328845f1e"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "53f340def4fa6c51a073582fe186d6b7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "3407f6fe07345ba316af71e0719ae19c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "b45f689f77823080962807317c46dc85"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "af1521aa8785dc676a79aa1c58eb2825"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "f16e4901d31e51d49c2722e999963495"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "dd4f880b73cc433d22bddc75dea639c5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "d58ea8a2500a13eee2302fd5c9b43255"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "cc8bf42f918599512b8c4ac6eace9b2b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "8eb4bdcbc2d58e46733ed9c2980a96f4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "2015c7ef4151e237427be7eff9a0236e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "dc22c3b9dc9423ccbffd8f47100bd99b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "a6042d94553e2f24a52659ab149e3d99"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "1e8c64c78aec212212d7e6ef43b3fdbc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "0788c94452f551f280d2d40c644ec381"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "f2239dde8511931dae3d2a1fc2ca4f8c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "d338b9124ef32ce44554374cb14c6d4d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "b4592b37359cdbaf0f056ae81c24037e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "64e9d6c0972f5fb6f917a580dbf1cf9d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "a7fbb73a775b66924e58134c489fa526"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "0eb114774ae199f60d8b50803a1a592c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "06b14ce6a22190f99c34641dbf0191ac"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "50f3e8776b1b51903535a310d987b549"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "7361257cf2587903a25827e1dfd51967"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "bae868ced96907a42ee547fffbcd0c32"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "90e9d4c940812f07dcfb9764edde5fa9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "22b867c8d549ba24ce73823759dce819"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "a94c375f983b3ca0dbd681a9131689b9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "f02315011e476407ceff1af718cbb27d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "f5cb77698a051f485e2f09ed554d7073"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "edab9359e1e93d6735e797e0806640a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "62b012acf3cf45ef93e44ddef0ceb1c0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "ad0d34e026f652c0c441a513189a8ba5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "e1842e265c81b0c76d5d116963606671"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "a2b36f5f8d648152346f782f758702df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "3e37467b7b2f7dd4b9a54db10a23d3b8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "a92ea246d1ccb1b077ed2329ba2f639a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "e09eecc4072162dc7bb24e17921b7351"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "ebd5bfcc682260bd6466fec685c3f4e6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "f63c5ffc0441f92a6abf572f73aa2174"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "a981a7add2c6bb8cd4c6ab29d460bace"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "74552c495f6456a6865c0463064cbc7b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "ce5f8fbfca773112c054d0b4df64e3d3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "acf3c904cc26e57bf9840f7d767189cc"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "c2c9723b5fcc0ad24ceb52fb276ef68b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "59924b6c9b18ba363dffd075259fa558"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "230bf44d45aac17c5882b4426abeb713"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "d87cee98d9a576b7c279d17b3f07e9af"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "f2ad9a8a82752445d8e710c47c0a5892"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "db7df86cc6325a3b3e1233f6bfdc766d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "3491b84097ea3990eec7f2613faad594"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "4270ba66861df842bf41f743adc26bf7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "dd76cce10955f4493b226acdebe6b012"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "d5f6ef3ff7c2f55b8cfb61217ccc3941"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "2c529fd60d4f5aee4fa203fbb40be9bd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "282c8ec7825dcc21bf06a90269e2d191"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "a9a35cc79a58f5bd757037fe4d325253"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "4d437dd5576864f793f5eba5a2f78b69"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "d461e5fb4b8ce6d2f39de5269376eef9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "a71f4ad444fd6e646e5a8de4f2639986"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "9c3518a3942b3123a8ac1ca253e8d729"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "dc95eff3cd89a254fa28579261fdc55a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "83aa6cac13c4496dd2be53417cda6105"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "99996cb60af591a397e10b260940bd35"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "57cfbd79f8b515b456018441d07b7c68"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "bd88f098c6dfc6e1c5d88684c79d357e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "020b1d3e469b63ca8287cd47ed768849"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "40a252b23c2b2a74d0d4f7c4309cb114"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "f9cfa3b07b6a28e1f75d23b953c4d30b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "f63389ac1758e72527503a0be0312561"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "f5df4642dae5198b7a3d14f8844a3f5d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "e91b88512a9a756823d12e759859bb04"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "c18595d906e857e76a9e28b12067d3a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "d0893eb845641a3cdb96649967f712be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "64bc79fd2c3c49a0c977776c41d671fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "b9721de879d44a92b23419f4cbf77984"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "a791b77222b49575d4f5cb83787b404f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "77d4b05135907b730c5c9fe0188fb1ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "33998df2a784e0bb33da78e7999c9e4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "aa655c76ec134ac340c7c9557c63ce56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "727668ed08cc402e03d03796ea0338ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "bd69d1e8e617a25f98d96a5e9fbfbb45"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "de743e375b07354cb8ef0d9eb103a5ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "9f33c9fb06b3b5fa2d5b2905879425b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "5173aaed09c89aec6ac474572c9bcb43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "d33782390be4f373bdfe275d019bd8e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "c82dc6aed3ebe674d19ea2bf0f64c7d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0c355553c21de02cd0632dfe598b1ed6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "149ef18ee1e41ee8983d615e69aa5ed6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "5e0f134ef45270d673ea3587a1333e96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "2bbf0f959a1f7b71e7cbb6f277efd85c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "6dcd0e822c3e5c46bcd06e15bff78ed5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "616800b4fc0fd5fe25f39d27ec21b822"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "1aa675450665aa8cd2e9916e2d3e42b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "1a386b50241783e13f15cb9abcc0c955"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "217cbce70240cb2b62871191dec780fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "6d20fc53edbde63e8c302758e06b59ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "5c5b0e86e83d773750d934b443353c5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "ba4c5882924a187cd9e9812f3a2d8643"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "b2eaf1590002fd9056472a52bf95c69b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "f04ea6a2bd6240e1173295766ee5b0d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "167c54dbb44b2ffa5447728b5e6cdc20"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "2412d2768f68660b12de29d6ea10be9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "b298eb2ea5b55cbdfa469acc74959d4e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "a6ca6a9af4a394d6b2cfa3c89f5ca199"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "9db421d6776fd80ecc15ed884f164dc5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "91437ecec08eb0e3f4427cec6ef7eead"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "41ae7c92f2672174d0c19eb34efbf124"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "0675307d0cb9632dd0d93ddadc66dbdd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "83852627853b99f0ecbdef018fd92ec6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "8275890b4d036f52b79d7b8330d0c93f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "219b99b1efea458e5afca4bb7298abe3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "bda194344692821e20c01b5c6aee195b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "b01e1cf48dfc1295e0b7ba76d5120e8b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "06a76e4ad4df32de1d9cb6d907e9b843"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "4eae7101a236c553ebf1109e87aef68f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "d37d4f18ab0a89ace9193ab8b54852e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "0732c2f1d7991f5b840331e7d7edf0ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "4489fe6b3ec48ffc5445e33506a6dcfd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b8bd2f86dc68ce318d99aed3566ed770"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "e48c7336740c69b8757d9d386d5ea5c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "3df4ed3bf939ded3c315c5ea78cd3276"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "65e6dbdc454cc3f85a4ca5b43fa44d40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "575793a810d389a9f985e214a5073994"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "58188d11569285c8a6f8f5de8fd7d81b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "067eb3c84c19191343a2a5f3887d9c70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "52c70d8c37d26004cadea3d95b55818f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "c5ff5e8343aecadb7f91f91b0325d79e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "24f07913db5aa35b855c6e331533d868"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "844a93080da336448319fe0a549b07e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "152e7841de19a03ab5458de250c111c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "a341eda7fe25508f2a4024f3286c4875"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "91873825ad988958a6dd65662948342b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "e2a204ff9a37c4466b9e2271bfb58dcd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "69c153952b2094b87904c02135ca46f5"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "5de19112cae3e0dddf279cea9b3049b8"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "571bad5f395d5471b9defedd271016ab"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "0956a023bfe29a2e95607a00e6cf1c6b"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "20adb5fe3837ad90746720b85ae39b10"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "cf245adfa618d172312689dc539e1ff7"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "7d2406c38b575a983ae23575bdbb7142"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ba73f0b81f6ff351e17374f562a44f29"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "992a3dcb8a019fca46c02263cddfc857"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "ec92a2e664e750c52123c494b1430807"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "a16ba09900686853295bcc0426832718"
  },
  {
    "url": "categories/index.html",
    "revision": "a903109b01054e020b4a200a45b328a5"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "f313c50de38354f6731f2163e9b6f432"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "f2fb87d4ba7729beb924157dcace1bd8"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "13c8aaab8778ef084c1242dfd84b99b1"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "535d65beb98889baaa66e8bdee32b1f6"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "41c39b27d67595a4f5407d70989213f7"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "5610e2accfcd0335f0032cdc2e4d9af2"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "06833580f7c1a6337a2c9303e535d259"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0f50916e51ac0b5eeb18427d219ef789"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "bec48fdfa3f966ad7e560f8a0305241d"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "76a1daa7fcf6501112823961b56eab19"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "908a6ea1ff576662b39e1a1c761c09b1"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "843ef1b584a1c87b62368d8840a96307"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "63f551e88ca7e9e4e36a85668ce567bd"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "556e4b423e6d52a7b0ceed86c1a83d81"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "4ac0685e757be260a456132662d7cfe4"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "ebce6dfd7a0e6b2df454b2c2a506a0ce"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "7277a71ca12ff111cc37c09851040882"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "dbad9b7fa11732ffe75056031ce22e84"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "2d9fe4cde8126a7faeeaf5e3e3963b1e"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "ee99a2c44b077d3625000ecd55638635"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "17ed1356281c1ad7276a9190d092cb56"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "a67cd4b2e17e3c75b88add995e9a1103"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "4ed8ae5377629a7a4b2a5eee5f1331d5"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "99066a4846c3753bf1710ad49cb7bf65"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "cfa1e5dd1522f02ab188c96dfec01f51"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "64422307a7e43b6b826d90f43bc55e29"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "396e36c18cb35cd1f649d1c1cba81ec9"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "242031d872d9fcf29d0dae82102d7d5d"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "00b1fa1c6b58a28635d249f8ae5bf11f"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "dbed11ab57d7a8d6de3026afe1d51767"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "7a44efba26ccf06514a2555a0146b595"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "13a31bfe4e9834de6cb8bc14fb7f6527"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "8778edd0f72f158699aa75737586a832"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "25872f075b17d7f7d7f2c23c249885e9"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "4a53a4bdfe75c396305bccb6d1b15517"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "d60bed6f9b4b5dd0ba7ddcf5eb5bd774"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "6c6f4b2e831a76da2418ee9b379330d4"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "58d96cb49e6c572815f68cb160f63800"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "e8a381bd5f83ce5128b983279b651f02"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "d6b00a5302b81ff7a51a6b8f1484bb9e"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "f348c4880d8d4b10a41faefa7b70d49b"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "c23d2501ab0c44eb0ff7db99774923cc"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "1718069d96bd561b25fdbe3d9f68e38a"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "85574671e34d8ff3603522f0c62d7d79"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "453e8674b490ced89d3d7a2d3addb48e"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "797ee6ca35ac9bb95a03799408ba5d2c"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "9185b06b730816550fe18d05fd362177"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "f740765346f1e9635e1ce717b59cee72"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "1ea50fdbe8836507442660c42eed70b5"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "7c97b7c5f6f59430da1d21fde807cf2a"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "c9d3765514e00b4b76fccc56e9abd4fd"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "eeeb8a708cff0f42db0592798b7af705"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "a7af82c569c969e7e050e0d52caa5d60"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "1f68fa5694c3e9d85a6e63d0193224f7"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "beab40399142384d1a397d509576664c"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "d9009552d0fe5bb1daef42cf8b8acceb"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "52ce1cdeeb282039cd7906e7be178e61"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "28dbfdeef0a4bf66d6972409d9166ff5"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "33803aa68624c081954819ac2dca90db"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "5a8c95fc24758606280566a95b9b185e"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "cef19ea865d5401f41035e28c537b700"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "5aa8d1a3c133901b676a56ed740bd7fe"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "ef148e4018871cb07383da4272b552b3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "f9b8b20aa2cd053731d81104d1f64681"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "d98a99a58748629725f142794c3cd2e2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "034fa190bb441fb3967c4474856d9c43"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "d4812837096fabd77271e997ed29d300"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "b8452d4e4ed93f840ddb3681ae5a60de"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "b2ceb973031c7af23b1a88e24ddfe39e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "e8d963b67688ad29ffd2c4216c899ef3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "155e6ac116ca2481c9862336684c6925"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "38c0ac3a52a86db61bea2e73c274d7c8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "ff08f0d07be29fe5f4d616a8f58e3bd6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "450622284897a5c8416aab39072f2d96"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "66ae32c974fc8df4058134890d41ff2a"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "f1d7d1cc4d7141b3508b229bbaa7deee"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "2a0a4d1076026389fe603e856f0570be"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "0e9f12d117c0fff3d7b299b23162ae08"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "14c7174fa7a3bf82592a8eb5d5983409"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "21686dc9465bd6a6d8a6630bd49757d0"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "b510bbb969219656f34381a49420c89b"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "19e099d1750073f57f18ec28f2c4d4d0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "8ae3416ed294d631582b9b07488ed92c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "c4f682ed2842b9fbc2fc89478e9fe177"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "ed63dd1b8b3a36b8bce767a9cdde008e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "50b950e52482c98bc4c0a084af9af339"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "7791a0ee1e326717fe6400afd538e1ad"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "d5a5c91e04b3e1f925e21ba2248c294d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "4b768ed5130c017a9776477c9a4f4e10"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "65083777031447412628b24f6eb0c451"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "3770b114648a4056b8e2b4d43942bb06"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "a4ba3b742881d19d4065890d72d8de76"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "ff05f9a8b6bfa75b2db38e79f60985c9"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "1752b76976aa72bac6e1445cad02c029"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "fe434a848a1e580d0a484939d762fee1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "32e9380b6209813412134683a3387630"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "27e7fc8d2fdc23048120fd6d06f6dddd"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "7f02cb4c47d13f094a8130ed50ef6b36"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "f3ecd356fe32ebd3272995b0c50bea76"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "5d7ec56bad988a5ba2ef1aae4b05bf58"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "c2c193e0ed18b70f2c8b3a6412b3acba"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "636a8040bdd42a61306061501f605060"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "c32cbd421330f58d44e928f4f33df7c1"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "bac50929b6987cb9605f6974404fd890"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "85e169e122e1461ae65f07cc58a62a9c"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "06a1959c585e6aabafc42c9ef85609a2"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "59a4adeead28d960a6310e68ed6b8f4e"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "2b04a11a3541e5c5497708887a00d42e"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "4575a474df7c1d53bdfb2bfa3cdb4d93"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "07df7a10cfb7e5e8f5109b10dc59d1e0"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "64a56bf277f032e6f0a2658bbd3c5271"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "e2da8434933b554fbf63ca7fdcb7beb2"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "974494159e02acda5af4a63dedc23b9e"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "a9dbb865f13e456c3e6f077eee05536f"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "159818ba75e8b79dac631cb643263d78"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "62abfea2f62d971e3ff38a7da7302822"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "1101af7ba3a097148e81bafc99c897c7"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "bc7183ab1b0982a283fdbb6cd287b511"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "f5e533340fe3bbd91b454477d34db827"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "97a31122cd46ffe06baeb28793d74de1"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "ce5c73060d5414e1e35ea579eeb7eb3d"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "6209588e9ea1b46932dab929abfd0f34"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "c98a9dab8e1c3a215d2e1eb4edb44d6d"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "844b79d7d5ebc54e13f85cde1b356ed3"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "c5df76bbcd1c6aec8cf29421496f29bc"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "4b04cb308c3a50e7466a96b7bfeeb938"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "9381a975e8dba476e546cf0ef002af06"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "a2aa44266856f7009556ed153b933460"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "1c5cd7e95ca9042163689d063862cc13"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "61ce8782d71a0a1346db1f1b22f4c7f1"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "49ae1b7429f1bb0b1715fc3000aa5747"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "9d9d0cefbf3e87210c05c507d7a78e1a"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "8a2602d7ab260135d8846ffcba9c85f2"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "8eeaecde155c70e8119eb9304466b572"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "548d19da15ee933cd64948c28619901d"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "d50d141e76f74b87e45c92e097236722"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "c3ebd0bb821ec326c5f70fbfac8ab16f"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "a7e99eb3edc1343177d4ee4e32717dcb"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "7c5c9f21bb5e62956e9dad52093a3b68"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "157b37a1d4af631c0dfcbd5f7a15e649"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "32cfc892741b92a21ba975f59c7740f4"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "5f9bccad88bf8a8adbf6b207cf5d4499"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "aed1d45356ba8a2caa12a14526f35b04"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "599de96d4ec8180c4c66197c64098887"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "f3958ff741078679837d9cb79a7e036e"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "4c6c73e571a751f21b85965c1aca8d86"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f756be29e4d7a3da5d3c4f6623f05a22"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "699f8eac8747823fc98b8beb056dec88"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "b517bc70f22d4ccb97b449bb1fd2338c"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "ae1d35b147ec51a06b610297ca9d84a0"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "3441fec7c3590c3971066740b5d5156a"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "bc9ef7a9d4da2e4401edfeed974d5bce"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "77bb72915615fd086ae4c6f4294e9db3"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "e5f4f46f3f3538f6b99d1e4c88a62d68"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "2db69e2244aad8cfe66870709d629ccd"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "5b917b01c25b19e537ab25f444cad4e9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "251faa27d035c38dde0eb095f8290e5b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "ed9da1581ea0ca0c2e93c74cdb4594a3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "09d9a9b1565dad5991b3ad486af8963c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "922ead6da113f413fd03a047611f472a"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "86944187dbb366e144e395810c319584"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "3188f8cbd26f5071467b1200a10e5aa3"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "1a452af99ba8567473854b710fdddfc9"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "d79b1a7b1e31b173bd96b3285f2f8462"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "1bf285c82a91c584df6775aab7e38ac5"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "4be67f8df1888f64bc51bd755fcb197d"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "882467c4db6644f2cb8868c77a6c4e2a"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "34525902316113618e64e54ae88145a3"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "a2e97d436b29cd2338341eab76bb17b0"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "74be70f27d219f7fb56ab3f7729d70cd"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "e064816c8211c10621065052bc22348b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "d7e3ad7b0dc9ed6792debfada45571f4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "6a607e2b4ccd19a1c75dbd2d34a470a9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "e0392408eddc757926d83468dc51d09d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "8d7093ce45b7056bbbe934079b669c9f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "323204b0416af247814af0a1cc539243"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "073f3198bd939cf94bcddd386a86918b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "fcac217a4e4e44f30ab48f534dcf5b26"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "8116b85813cfb944f91cd74d86d1c9bd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "18a195b3b0f99c99cd91f8c6e1e894e9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "6964238f8fdf65c583243404a561e398"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "8c47cab9fc94549f533ed601bf40a420"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "000d803a72a3842cdafc108919d222fe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "807c8c0c7054bfba9b32e555ed374383"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "da6e4570abc9a5083f1ca2f2761d0890"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "3a631bf883d53c2bd6cc23874812d6ef"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "607dda0d62a367b5984e7d283a3a3e0d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "6ba4c4ba04e00cd20686d678c6135f90"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "e10eb768307226c746548fb0f5522bc5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "a509ef80e8512274ade7b83ef8e9ad9d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "03f431b1ab7d017c4e2d9d9dc76c3109"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "8e059f06e71314f3701c103d15a94fb6"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "66c5c35031b6c6a2b5d5c9c0f1b53a16"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "ad61f3aad523e3b7e8fdb90e1594a1fe"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "fedd25081a281a386910bd0a285e37e6"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "c6a99dd2a9c58e1e394558f9059cb7f6"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "6b9bfbd464001615055ff4cc2498cbae"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "382f26fd9207a1e35cb8ede489fcaf31"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "2ccfe050fb623c0ac3d68a19f36237b4"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "97158285c262873aab4f34eda1105e40"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "e08ad68e9dd85b2c22a5e5f51ed7e895"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "fc8c512ec0155fa68402a215fa7201bd"
  },
  {
    "url": "categories/os/index.html",
    "revision": "7e8783fbd9868706172f359ca59464ae"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "1838ad41687dfc36407b9a7cb1e0e526"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "b3d75bf698f4e27350562720511fc22d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "58786ec9230c4afbfaa4303c5623e88b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "2a401f6b95734722dd5e05f01c1c720a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "9427147cf53a6f846ac9647991ae638f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "e16d30d2091f661ddddf3c9c50950bfc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "7eab3a01795412f3d5fa28779362daee"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "015054fc6a1ff6a9ce8da9423a4c5302"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "02b6555c74b1020e0947b1c7adcbc6c9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "1e2ceade261d8cb6247ccd2046b5acfa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "b93d04429ad9f72030056a31ef0a8aa5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "afc122c8107a113246c604ffabc74f87"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "e9b02f266a650154e214bea9bb91b251"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "4514e13723d04c9ce10d286c51799b95"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "ae4dbd9f699ac6398200b7e9c89ce7c0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "d91d74a5273daddbe68271a195424f3d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "aea21eb54ebf4e6879c8798c5536a142"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "ccbd226ff9926e0257604e1c4ce93625"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "0bc50d1cfe3e6ca02b740fadaa079779"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "2bf7b0198d09bb039ff82a02e9284ecb"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "620ed8368e338eb9cf58e5ef82eeac67"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "98ea57d04dccfa14df5bd2cec85aac54"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "e194a8c414a4c1167ca67250652448e9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "65ea8a8781b7dca96e5f152e41d2927b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "d24487885e58e61448d9a1d3a28a4609"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "988d6e6d7d061ace4431ebf97059f554"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "da6ee419ff50afcadd5398ca7ec1cc17"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "850274381bceb0940f360a63dbe04cb2"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "c982a8cdfadc705e117244b031e1c065"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "adf4aecb07a67ee2db2220d039c3d7f5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "b9e11cce94887a0d7a8c80322b3e59b5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "2e375d95fdc223ec81c57450de8781f5"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "73ba7fca91efb23a7a57a2d9a1cb68a6"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "7a9c29f7aa3c7e574ba3e37f1a1259df"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "fa6ea518ecd85c2a0f8214c070f91309"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "f9bc3c6fa20d692b7b64a0f6e0357d92"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "385403fc97df4138fd70f28b5576f75f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "59060a8b21738df0958625ad7b06cc77"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "7242b9a031e8ab982ac930b860401973"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "c8c15de6aef911cd7ecd4ae7fdfcbf12"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "76eb7ed29462a0ec46adff8ce65fa3bb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "380a455d1b9ddbe4e93a7c6cf0bd3e83"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "abbeaab18e1be2aa76874a320992cb48"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "50150a2bdad109fb0d8910ab834896bb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "175257a6fb284df26136037686d4d945"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "60c08208dc61cfa03890d5037c8f46d8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "c6c95902b191865f9fa55e28932dbdd8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "aabb1ad903bc5d46a2e5fc72fbf150ab"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "ac3bdcf133b6c66c707aa7f8e9264bad"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "a8857050b3f0572dc5c09f69771c5443"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "ce2af074caffb948daea7bb76b548bed"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "29054ca97f7d0503b930530b264c5c00"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "afd730e41a259f240b66f31ae6a62de2"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "79d5fb6bb58b6fffcf635c7528aa8a11"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "318d5274cb41f976f53ec91a69fd0478"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "e3c2061621bab00c2c9893e6f20e2d84"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "ad8f8c393b40fc9d986af4ccff3bd020"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "9f6962f134e07dbf8fb583c796de77f9"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2fb906b642503455885882547fa752eb"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "5ed941e463cd40e4228bcd8eb20161ae"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "c336271e94d7e41a9f860abfabeb58a8"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "896e1c25f3ac9c385eb1f97e9ad2f9f3"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "0ae9cf4e9e95ceb5d3c75e025b128741"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "64c8a5b31c55b46396f35a683c1c6dc8"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "ed587b5750d8fa492334f2ac3aa395f1"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "dfa1fe532d2ac03655943cdcad7e5c64"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "fb767159b7ba42ffbd149b4971fa5c8d"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "be03240c4d3e34afe28929c96d817b42"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "e536acdf0a244acf7471f370d7c4ecef"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "badaa795b5b0292e6763b2ccb3d88ec7"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "138fd6a3c9cb04164ea61f604e4c757a"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "8d8aa39c8c874f03581d8b29f54989b7"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "7a2a6c0028158911527590a4ab4096c3"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "9574b905b1f5aecaed16c7679baabe5e"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "709ef7bede567ae94c068dc8235cb9e0"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "0e9d1080705378e54fc585c734499d14"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "8f31355add70903a07395678b63c85e3"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "789bfd38b0ddfb0c4bf84cfd2a6c82bd"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "8aee9eaa4040f554b0ab63e6341d3a58"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "fdd3606136a8360894154d6c2d585927"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "52ccf7d30ffc26f3177f3c3a8870658d"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "b28aa8b6b05719be79b95d036c692e32"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "ea7d4ad41680b60136cdc51cf8d4d707"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "d4a5221ec4b70c3918e872896359f6d2"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "13581cef0523d4f6dc86427da38ab19b"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "8604f3a1036f022f58d397e7628d962f"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "3f92d0b9b1c9baf7472a22d7e12f1a7d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "1b10541082919e423879ece0bb76cbbe"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "bb97269e993b0c8eea71fefd35b43cfd"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "7a9778de19a29680086097308989afa2"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "b717d2385e1df9c7640e8ebcb2e6bdac"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "73d390abf9dcdf31c4ec52a12e265717"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "41579b08b86f35e0b4d1ba26388feb77"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "bcd98b2fbef87719ad049c762a7ad80a"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "4e20b55b16215054dbe3c26b41575135"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "3d352a318ea9e0e0e69ff2984e55fdff"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "6862b5b3fff46e3bd2b33b9b5f943cf4"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "23e99739c49848055d040bacebddda3b"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "f51501179d705e978b8728b85f82908c"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "e29ca095448f6d3e0a214acecf5f7865"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "3b7ef6ef31efe13e2b992f79a5b4a83c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "fe6f3ba3394155484184e85482744e65"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "1b3a9fa9eae71a8abdf8197f482bb720"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "7b1e66c53352b182aa58e6db6221e8b3"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "fecc77238e883bee0d113da7ee4460b9"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "b7ca40f553842adb110445c2e73c3b1a"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "c37f253c44d3912792c68c5cd731d89c"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "11f87ba67d1edefb3f573d1cde4cefd8"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "aaad1fd9389da376d68dc785f52147b4"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "3581254e739dc8d8d3425c295d4ed94b"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "6978beb6cc0301af18ec83010d4216f9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "91562398767343b102ec0e9c25103a40"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "2b27bdf5b845f973975354b8bd6986ef"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "5c57438c61a66341f2c634f83500074e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "dd893ae7904e2283f2ceb4a58ea778c6"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "4c915b665c39b8ae75cdd53e014abb24"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "c03cd0289d758f3e2161001062da41b2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "7e242301954fea82bc0233dd6431ded9"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "7e67635298d969cc43ed54ce75083e9b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "3645efdba0c3f3b423f60bb70e2f68de"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "f3e3e3688a44b23c2ee01569d36e1844"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "37a3f83f6b6b2f7281867758e4bde38c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "1986feeeceb21a37ca522db9cde8b0e1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "587dd22880ba916c6b75403b9431efcd"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "1bf67473fab373b021aa0ff0d5b1cdff"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "3b9b349d6ef684239adfcf2a66f89524"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "45661d85eaa40d164a51c3273dde35a7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "f426f58dd71227a82cc5466521036018"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "aa876e60b681d8d2fb35cbc6cacc736d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "ef5fe910767c14530e45a88a6e875360"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "63e52ffc7c87ea4bc74ecbc7b518bdcc"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "7d4d97a70fa15f68a72e347fad4d9917"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "8db488a4084d9bbbeeaedeabef492ba8"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "1c9760f51a8dd5badadd273e372191d4"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "d65f4ba79e690f9023187adc4e2f02e2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "f3c534c3dc2622d87fbf4f5c258b5012"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "549dd659b2b8ff82ee7005d660dfd963"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "c6c50d4bc9ba03f589c55e87b5fbadfe"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "5d55137dc6e756d67468bb4e2ec2a068"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "46ebc2175e952f1e2a8d6dafa0e07db0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "dad3140b5366e533573adfd6d5c36711"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "7e561a88e296b6d0b363ad3170b1efe9"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "23efcc3aae8ca42ef5ff321b29da72d5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "c93ebcf8d3c032e88d2b5517b09cba06"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "7d87f93ec776e855de2e8b0b939ed187"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "725c6b3476232bfc38198239f6754e7b"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "39a5b0c4c18b598f3c72e8eb05a9ca45"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "dd97f318f1de5d5caef8d427ad1013aa"
  },
  {
    "url": "categories/php/index.html",
    "revision": "5fefc06ae22146369c3e4333957e5b42"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "f23857d543150a8430d655d2bc315a08"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "f09011b8c6879fdbcc9bd5dd42717d16"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "a5896e3a336a7a798d8d6116d8932270"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "4c47ab8c71d18e5fce643c5f5bb599ab"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "4ac3239c0977aa30308747f5ebc90db6"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "fe4513177394409a4d0419e8c24d7518"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "1186b9ecbb1e068cbbe5a5e799df4c46"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "5a93b82f11abf9456ec18fa2635ecc4f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "7c22fc11f7b38646a59f8161f7886024"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "7e6ed42832765211f5c33b6201ee5664"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "f580513b6906ef966ec9ebcd309cf1f7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "c435f0a4fcc7f96012a7263cd739f0cf"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "5e3666d9d9256ead184a496568a116f0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "f74600eba172093bdcbe6c01227c6304"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "61a75fc707690f0229a29b74fa0a6a2b"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "7a34229d6489dccddc6a3459835153bb"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "6b868ac46f3761e31e8cbb213a256f2b"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "01de4b2319d88657581851d8ebc9aacc"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "03887b20a48306e949306dc3ece45e19"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "dfba0f672965d8b6be4dff2472b18ee0"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "1f0b68f7ae6098e25bd6487346275b2f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "b9936158398a7653512523d16ad51116"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "01a44b2a65839fb9212cd5905ed09ed8"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "ff8d53a50ed0a570183c56d6c4a3c9cf"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "6af0fb593cc987b2cbb27356d674bf2f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "a5fb7d5fa6478367841c825e4b6dd3b2"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "5f7c21a55ed53409143a58d920d9eb74"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "f71f9add27c43e9eb1fc354f9baafed5"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "a1817a9e126bae36f8c818ab69e27b02"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "ef33f47ce6f58b6977040f61430992c5"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "f0ec39c39c49ed16209b28f9ff11dcca"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "fc48ccaac2e3ba3989462ed3cdd08014"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "d84a8803024f6b707bead5d6f6f1b4fb"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "8a7531cfe5f75230c03ad5657ea1b792"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6444789239de4f3eb2c3455dcaf5288a"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "641a6fdb447a9027d382d97dbd857afb"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "4c491815b4112c3611486c4ab88d1ba7"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "b8929a74e700fa57f2a93438235b079c"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "f276b8efda2cd13a157dd860ab9603b2"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "3980f9f2d0a6b2fde8526551e4fcfaab"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "18d4005b010264157c263777ac7a3314"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "4f3e064d0c3a804c6732532cff7e31e6"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "c1a3654a54a9c50c91a9d35b07c0b1d7"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "d8d5fc8c1c3da6130e66ccf8224745c7"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "0c22418ca1ea20ca2606bfc9ae2c07d2"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "7ec06398ea17ecd4058435e95934a862"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "262a07f2fabf309284bec262abe2b0b6"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "0766e4a70e1923aaca5c42e5f123242e"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "9dbf906482dd0dcf51b1dbfa9d62dad4"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "1b6d88866fd4445c43cdffc70d98da66"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "c398c22ab339c475cde79d3ecf3aca09"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "483151b9e60a08c991009303ae0f8974"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "8d0bdd84ae6faae5f7e5810fd9071c84"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "8c0b02fc8d5842f00e73c7461c63fe19"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "8ee86ea951446d62ecbf312056466e61"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "7127fcfcfa2aae8d5748878d3cac5593"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "b8dee51eb3913760144e9041eb3c27aa"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "86c2bfb2a1bbe57d4388365c3e327ffc"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "0f0a777dbb81c7a24158673c44808802"
  },
  {
    "url": "categories/python/index.html",
    "revision": "36ebef162fdabbff0f62b75842974451"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "589b0c18dfaa131aebebacc1d5ae2bf8"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "322fad585a70528e5582c263ccea42df"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "3b80c36a92fc5c7cbbba14f4abddd959"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "a42d0094bfc9c3f92ef96cc09933ceaf"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "6453514e804c77364716bca555e92cd7"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "a8cfd534567e247289f9fbdd9ac29430"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "20f951bce8f00b3e45157df0067d5a77"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "f868d321322d1266932f2548e2948937"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "9a8aa9feb918b390b3967ff252b02b9e"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "5ed26c2f8cb8c541eb9003d1044148d1"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "f03b94ae505a488dcf7f39112fdb49a2"
  },
  {
    "url": "categories/system/index.html",
    "revision": "d47bbb836c6238e4cec547ef8ffe518c"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "1c4f10e39a5a409f1e6d77b7ecf00b91"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "8fa91de8e6769dfd0ad4697acb93a54e"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "a0048decb0ca69b5fc65a2b8234b7681"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "7883ac9d9a7ee83ec1219dce816033cb"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "d96e8bfdd39d0660b7010a393b04f293"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "db5f03ac9f6029404ade7362ef04bdf2"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "8522dda5ee853d64d507bbbb73ab0791"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "5b7f8415633c03cf0dc06edd6d14af52"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "d8cc732d7a98414aca4dd82d7c7eede9"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "cc1c648d5d8ea966931e5b7e71f144d8"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "99139b9f3d29911463b3ceb4cbe759b3"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "5ced04a2a5dcc0eb1517759b9501e1d8"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "46a656535c5956182063493a6279d903"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "97ea6a764f1fd12abe3406f41e263b89"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "606688a8949e9af2e89b14fffe3143b4"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "627223d3971398d52bdb64bbefac6f92"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "832481485d7304ebb3f51cf9e44c5585"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "a23311108dabae1e41cbc80efe519e02"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "96fd72c7fa16c2d3548719689dd30900"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "6bfd83226c3c1bfb4d0a5a71b49ced56"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "56691de11cd337e9e30888c026627229"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "b7e16f1c15a00ffb7f65d59f032ebd4e"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "27ad31105e5e74aad64fb07c03e22002"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "b4a93a7728723edd38bc6e5f8461519c"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "a3f6f0ffde7fa8c554ded92fd29a16ba"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "af2a2dcc1a43ba55f989b535b27f0fac"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "2c66723b3e1e1b2cb385c4e34c93f7fb"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "bb81a98c0a63dcd2716e8a3b980610aa"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "64915ac2f6c07f2ff21149e238be184e"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "0506fb6ecfb43532cb590cea56125081"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "3f927ab9d5d9df04b51b2e3a4afb24c2"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "c38cdfaa1242740224bccaf39aa83daa"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "ec9bec6ec872754cc71c4d63b1f85707"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "56ea69e6e9881c5407198d03f2c61904"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "7032d0b5a976bd59d5dd389d08968130"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "a67bd01204707ae5ca3138ad2df3f339"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "77a6847ebaa021e59709ff9a4a884ac9"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "ddd3182f771d51155bcb052065003e83"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "9c8b5fd342998804f28f51c14c5718a6"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "9479a79f315de79a3f8c0e17954e804f"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "ff562ba244e3a0962b1aebd5df1b7ddd"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "1a3f9c78628afdaef7903b377980872c"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "f3b48d1b4eac5c741d8b99283a345747"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "4e6b8551836c9c087a66650b99fd26e5"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "049d374aa25a4c270b117abede0285b5"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "1bbb5a2f5abef4d4f0141d0d704428ec"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "5e215c8d14bce385554f77a34bf92314"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "9b75204ae28dd62b509d5ca8627216cd"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "cf74b2c6c5af84ba5f3c5770977b6909"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "da74b9e56dd876a8929e8a7542450c80"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "492795c8e95f64e30a1e35b6d4a57249"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "5142d940a5ef015e3e69f9550300c7e6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "2bfd7d1fdadfd89ab8d2073943f2c671"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "294e2615aaf1cc3fd305aa28096ab4c9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "322aa8ab1881b40e1db2a37b8a4b866a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "a7e915de31be91d91b557deec3e387d3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "d5ab100d9d4a02dbfa90c3810cd4ba88"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "d47804119f9558a509a2c38173154716"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "f87fc233bed4d6ece97c1dcd8eb159af"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "a10bb43b1a80f1a53ddadd410fcf52e0"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "742b50a4d6e64935888caed503a93889"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "a0360c9dfd39014e67c834dbd24cefce"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "de880ab2bbeb23fd55339c4847ad3426"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "276e0351978479936263949f4c663d0d"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "4a1a5c2ea43ba855b2e9f2089c2d4dec"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "b540adf542c145a0d3cf4ad5020fabcc"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "9ca8ebb0c22692118dfa175a493365fe"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "002aa332ba60237016db05da5fca9fd0"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "2dd97b02fb1eb5c3fb31db64e963f953"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "94a4c405ee328dcb57d5a9cf189cb965"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "f0570cd629eb92b8f98aa5cc064ec604"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "64d3fed8257a47e586ae0a2dd6a71ca1"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "d3803b23ff576cdd837a4bf1b0a8d994"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "e95f7f6315795592863a9ea96963afc9"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "6f40e34e63fc4cc8d933d4353d2aa8b5"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "6d76eaf3cba0b5e0668db32e92e9c8bd"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "5c0009db42d8932163228e217c50056b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "047ec4e923b1dc5f7859fb57ffaeaaca"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "b686cfe08e517efa7471c1131142baa1"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "072cbcee42a7be38254fd4542f240d1b"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "f0c372aa726b0ceec24dc69f709658c1"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "1913a8f5d42eabecacec48839435aadc"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "2a54185d2af539b113f22a51df54a0d9"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "a5fec7561a1d53fb1779ddea53fc34ed"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "f3e07f9a96ea4a54244f489a07da8250"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "73381d1887ca56424aef2b35ba44e3da"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "cf4061f375ed093c55465968c82c9428"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "9700f2669bb54cc1cef0eaea2e3e0fd5"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "8d21e0527a114e667ed9e8b1704324eb"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "563b5c5a9fe78d345e5b2855369f818b"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "7d7311191a45135ca69e4a2c57999844"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "2ff3ebe2972623038bf34ada30538d6b"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "a75942dc9bb6559e9db4b2cb1a388ec4"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "476dec56a53954c73661ac51e7639dc0"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "30e69d413d5dbf13e8ce8a068846a14d"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "5970984e8abe3a396fc9a4e01514db12"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "0f343f592df811a38262a144bf1c5426"
  },
  {
    "url": "favorite/index.html",
    "revision": "55fcb1b541ca0240cff1a196c78c4357"
  },
  {
    "url": "index.html",
    "revision": "e3239308d6ab54509e08cf7ed6418555"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "6fd666877abdd018075a7a6fd19e0f89"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "c352650cf996f1ab3d788aedcc9f7c3c"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "179024db9eefcc37abb75bb66e1941b0"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "4936026f20925460cf002c491e234493"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "9b9a374536eb9372437afe1571be3eb9"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "c8e17e922c9fe39806c8725fde836432"
  },
  {
    "url": "note/index.html",
    "revision": "37782f98d6291112fb1959a110871cd8"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "fb9463541396551ed3918f85abb7a402"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "01373633da4dc51fb645c1c06b98811c"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "6e295493ac3e2aac10d42583bef1ee95"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "a9e3c997778bcb4eeb1f40def5fdbbda"
  },
  {
    "url": "share/index.html",
    "revision": "0faa8d328f0e4c66406cd6d24f351019"
  },
  {
    "url": "single/about_me.html",
    "revision": "7de0189472018aac8fb09e9d58fe4485"
  },
  {
    "url": "single/all_article.html",
    "revision": "2dfe24c1bec8f65ea9e253e395ff1abd"
  },
  {
    "url": "single/welcome.html",
    "revision": "5273fc6a1a2c517abe2cf0216f677fa3"
  },
  {
    "url": "test/index.html",
    "revision": "e74ddf5c59b3edb8ed5b81d86c128ede"
  },
  {
    "url": "test/test.html",
    "revision": "f97cef1dc87c4970a82ef186d7be79e9"
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
