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
    "revision": "52c31c87652a0d2dca77c971461a28ea"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "8a3f9f975f10590b420129ee317b4331"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "f3540f013809507ddc040e56ba80c618"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "6e05b63ea03084cddcf21670bc72ba66"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "fbd66ca6a3c93b55fa2bcfa7a9b928f5"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "4f25095c5a3d59d08254485c41f54591"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "889451456f74aefa447a931ac739113e"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "4cca4a259cd9dd22df81413f4ee4d4cd"
  },
  {
    "url": "articles/index.html",
    "revision": "5eabfdd51c466344ec4319c9712f7f9e"
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
    "url": "assets/js/1.9661ddb3.js",
    "revision": "daba3598b04ea26da81b8c9b5101d729"
  },
  {
    "url": "assets/js/10.730e6669.js",
    "revision": "fe3439f081c89fc76b1f03301c919f40"
  },
  {
    "url": "assets/js/11.03a3b555.js",
    "revision": "2a7ce7e6f0bf65e82e6d390dd0a68568"
  },
  {
    "url": "assets/js/12.dea4259a.js",
    "revision": "b81c9e54cddd8f7a36dcf7b2ba0d7c4f"
  },
  {
    "url": "assets/js/13.017d0ddc.js",
    "revision": "a3072e5b22991ced4ddf3194de95675f"
  },
  {
    "url": "assets/js/14.1aec49d6.js",
    "revision": "3de1a5ec6501e2c0361733f2eb61209b"
  },
  {
    "url": "assets/js/15.54ee861e.js",
    "revision": "241adff2f543520e5bfd747765548738"
  },
  {
    "url": "assets/js/2.6b7127f7.js",
    "revision": "26579809f8a12a5b45a6e7f66e82e4aa"
  },
  {
    "url": "assets/js/5.314447d8.js",
    "revision": "62149a8ef69e24be7a8bf7d56b777b01"
  },
  {
    "url": "assets/js/6.398530e5.js",
    "revision": "c19ceebd7e62634619080a6f18497845"
  },
  {
    "url": "assets/js/7.b1fc2793.js",
    "revision": "6f0bd63bd90c8c6e1bf78865b1a6677f"
  },
  {
    "url": "assets/js/8.46eac014.js",
    "revision": "29a143886bef54011dcefb431282f372"
  },
  {
    "url": "assets/js/9.c4f01555.js",
    "revision": "ab856e3be3c6aa7162e7d1519f7ce069"
  },
  {
    "url": "assets/js/vendors~docsearch.1d9f8a8b.js",
    "revision": "3ca000d6d42f20b8cd33d12e9070e15d"
  },
  {
    "url": "blog/index.html",
    "revision": "2ef506c365eee51eecbdd80ae4b8c3a3"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "eb1d4a2a731e0b0ab225b2681e2f6432"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "bbca8e03c3b5c04aa1041e1306ccb4e2"
  },
  {
    "url": "books/index.html",
    "revision": "6a73c4149bf844ae635f4a225536ad9e"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "b11250da4ef34a66f5998cedf04b1e8d"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "7f4289d237217672a47f13d602842006"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "0c777f7781f45116f08dfcb0a36e7cbc"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "1b357fe5f061f45c5809a41b01841821"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "464a06c05585b55993ff2865232032f9"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "90bccd875ffa5089499f535ad6623591"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "06135dab6892932570b6d60da7072465"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "9cd4f0a4210ea7d974250a2833ab6f73"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "fc19db0bbe0fd69d33f154ca8d43701b"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "17e889d9e6b4f945efe8bc5dc8288e1c"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "313bd15da3e511e2493a272201cb9910"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "1d319e4917179411e331fe486ccaeb44"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "471f06274dce400908e2d368a2df8815"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "e9210cf62aa2ce489959efa0f645ec29"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "68d7738714fb48b468a39c2abb7adf18"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ad7bc6e0332e1ca33ef0400c4bc0ec17"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "2d3f37725430baba825a4e2be28621ae"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "e41efc215cb1b363451064fe2cbf4113"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "1494f191b4501077588f0967bc3acc64"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "26238fb36332262f958ce2e78f549c72"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "3289fd894f56cfcfc86f40c5220d27cc"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "aa01bae91827c056a049e786633fade4"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2b447e56da92869f18b7274474719b22"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "016ddaae9be188591ccf4fc30052d9e5"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "03457f9cfd048b2135a64ad2b0fc874c"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "b99dde036eccab94774a9f50bc2a38e5"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "213b4615c427acecd8dee89f76d622e6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "01936209904d9f53a37e9ec055b82fdd"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "ad0831ccac8dccbf40735245d214cb43"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "cabb0ff0d5e535b2abee5e0a865ea09d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "e9ccafd7ebb6304f9f037ea27e1dfe2e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "0fa189e1cdffc023b9baf2a3ee4fe9f2"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "3eb8795797badceb50a8edc0a64d942e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "ae4bd52aaf46899f31243ac136256b1b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "69dac1652a0d8aae103894f7b87ed1ae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "9a4634cc7f74639d0f007377e94a65a8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "3fc20c7ea60a00ae2af306c9519d512e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "d3e2d51a9dca202c81c68503944d6553"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "4638f8fd417505ee74111e7e0b250b0e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "e139214900174196703d1cb917eb8689"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "43f2567874e6363bb8faa0111a6f5c05"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "f339878346ce45ac779e2c586e16fdcd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "e45ddfe5c5f41cb1e537254d1c210fe0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "48d837e4a25b5f4b9c5c20c339dd3faf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "92f02323565751871fb47dcc3a7768b3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4e3419706d5ed7ffe3d494e5e4340257"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "511cbe8d4aa2a186057b13ff47d522ec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "9435a65b3adadfd29e30ea5138211943"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "eda97538e8f965f98f6c494fca40e168"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "f2e12fb5ca5cdf41d1d1c1f8d3332a5c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "ad50b0417f86241ce3e187c06be5cf45"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "205385a8e700b898b9dd3bc17951b6eb"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "ca28ee8025592c60e1c135aaca48ee68"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "679893a2e27743a9cb83d7cddbc56380"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "f362f3c53c45c7eecda43662177599e6"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "891d77caa3ca0a350ba3c294e35ad49f"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "6e1d3d6e2fdf47b8a534e31e821c147c"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "dc43fbe27799c5557f3b4d29ec5ba414"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "fc119960d6ea3a8693f8d8e420f2bde7"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "e99c2654e10fa440d83843ecc8a37b57"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "acebfff5c2262dcc2a9d6dfac053dc22"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "cc5d7fcc1fe708a51880f85db1c72c03"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "71b7efe75a60eb21fb2247cdbf9a32a7"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "774b1341489338609419636377893ea0"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "a3e1299859fd6594a3babf9476dcf3ff"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "a44a6d750a17087d26ea6074c2a5fd71"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "b092bc71c83da6b8681d1fcb98418d14"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "9ae8cedb4fc60afc748a3ddc0e553cfe"
  },
  {
    "url": "categories/database/index.html",
    "revision": "47c5c3f21ee41a4f1854a54e539463b0"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "d9aa58e4c195837482441c825ee4c1ea"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "8fe535e0c9b6ee8c533e3b0c40d8f8ea"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "b90d25b264bc528a090ace664725f30c"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "6ec5cb1bdb5978845c30b10fd7706b91"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "f3b85644a1ebe1ac6108f1ef35c54e85"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "cae1852b9f8590aa19e4449529b79229"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "6068de52c77c713299d058758ad15225"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "429abcc546c2360e3540f19cb2c7afc8"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "516dac1c7b80c2ebc47d402fe2fa593b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "14f73703e26ad67993e3155185e63139"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "af997c433f0b6a7ac591c992f27ca3f9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "8312b9c39271fb1a8fa2b846120f16a3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "4ce11abde40908e6b7ed3e86e1067631"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "2a8cbb0d594eeaa35d4f05b0e82240d7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "ef9cd05b1ce83acc0cd37128e53dbf1b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "b807727cfa3966a654cc016b4dfa5b06"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "9cfcdb9bd0ac1fa33d45a5e86171e1c2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "1e3492e636b1ed14a007a6373743cf2e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "e3f2fdc278313982598b12546c5af691"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "d43074bd2fcea5c49bd8bf338a2dcf6e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "648c11e3f03ed35985e144bd87a68e2a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "5f8dd8ffcaaa68862ddb2718481905a8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "7d5e832f33760432e1e8ca30a3a7c01b"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "fbfb06c5ecd7c0ca95c3adf42b846dd6"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "ab2edc024223c74c88d6e8087e4e8e3c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "b575636703847fe4c145aec96c4b8601"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "bbeff70e12526c82866cf9795b79fc23"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "2e955830542d34995855a763391f2ffe"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "2bda471d1d3fd19bdedf7e02f646d68f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "bba0531f88f49173b6502091132e546d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "1f1559a6460e02aba77a6d7d59232250"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "a57698648cf814536db07c906252b59e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "97dba7d13cbce60ed930ac0eda5bbb07"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "e68577a29cd1f19051c95b46c4f0675c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "dd9b4a9f9d691102749c70d25b903ef2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "d2b8e1acc207374b3c4780fa6575c304"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "8f6e7e066634284944729e7db82e3356"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "4cd30f43fee3248277ccd176ac396822"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "3d674dab1ad81b1a4783e1ee57180c06"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "ce0445255baeb44be392dd0d066d4e5c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "f68aac82252c8ab371cac8f255d12700"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "aef2e0a23bf6b01d3d37f21473974dae"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "f6d50b41c8350d8e1ad331edec2057b8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "584b44dff72588d16aa11e0fea92b209"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "47046bb4bc8d0dbabb0d08149a86ad8d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "9376f402856a0945bce8c1f286ce5999"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "afe15c49a882c7b99427f4bde1a8147f"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "41a6fbec2deeb7191a6b5a5a22d51704"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "5e0a49ff1339ecba99da976ecfc39e42"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "b0637e51677ed70f11a48453fb5377c1"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "e8cd0d2bc0c9a57164258d6e2718c948"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "da117d20584461238cd9c8692395c294"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "098795f5383462a7335b23f914693b77"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "29b3ff59b65285cf1510f223835889cd"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "2c4b31abfec5d9c320a95d9c7e051983"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "a55bda2e44b4127ba915b53994788c94"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "25657662b7d03f6edd7d3bea2d8df20a"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "2d8b66744858e55a0efdf077d40b1374"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "9ded04281f00f04f15d6718520d902c2"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "889e49c6258e1d3aa755962246161bac"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "cfaa3b2d469f873bd1cee2cee4625ce2"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "1f656047c271dc1c420005c8df7717e5"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "200f3eb3a63fedad1a441abc3f673aa7"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "970916955ed047672cd5935274334578"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a7e5b04f48626996baa9720a79e2207b"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "ca2c73efa3ee826910ff5abb3e281b8f"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "1f1e15ba36f01218731b418af5b6e1fb"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "a45c6d0c5c9684cca37dc62a725d10fa"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "95e3b4b5772f06c5ffeca2802e2a543b"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "9c5f02df124870d2b814b4e8eb854845"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "0ec9910f46b49ecb4703638da55647dc"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "bc0ed860f70c4cbe7755ca08c1d22810"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "e0f608a8aba708a75940e056b7450182"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "0f8929368b8578185a74ac51159ec007"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "ed9875efd20e958fd02a00d333f3aeeb"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "a39bf928dea68519da1195fc1bc8376b"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "62860ab71e94c3eb9a4713989fb5a96e"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "3bd822eac40b0248b465f5b5581abb67"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "c322e3f21a0f8a0416448c360ecae8a8"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "eee52e8c4c6fdfa0c60165ba28ee7b7e"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "0a2a52fe67378f1f4d69120370f9f8e4"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "500b96e508712c672cd32d90c4081499"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "21862c0cc1a284502f881d905bef2ff3"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "06bc22b74ea2afdcf621bda2a882f92f"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "43d5f0bec2ad2af32eb4bb0958138b14"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "c0d045c38fd0bd3ecbcc8a455efa3575"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "86bbfcb9bf223a007c43a5c85ef80137"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "fca7b9fa0fe2425a7ed45c245c52b5c8"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "697b8d3406f119b849d0a9f1a69871bc"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "f62ab1f139beb4a7bcda7ff118cd0ab0"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "d7980fdeb6f628bd4433c9ee6e558838"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "8ed797f1a52ef614bbd00e5b6dc7f06d"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "e855dcd9e18530c78d58a24febd250c5"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "5580b5089ea148ada8c1111dce76be2b"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "ac6dcc6dc7d20cd02868d9cd9c98e71c"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "e8903286e2beb0cc912e17fa3afe703f"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "2a9f58934281b7591486c61378a202fd"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "261806ba90befb743df0dc43b9bf4cd7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "994db1f1e7881490adc19d00467a144f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "ff487e082de3b5e5e41fca01584eb86d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "45186473343cf616b2fc06fcbe581b83"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ccebbe858e04407c385b1957f11eadeb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "c43d9858aa7a3dbc164aa1600fb2a9c3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "5aafe069f11e6ef3557db8d6040a9553"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "cc81d49c7f36d4146eb29360f335c035"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "8e90ed74fc89a84a67272ee4cb521f4f"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "dc587262e73e0d8701c3281b68512073"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "e338b641f87ef48d18efd563b58ec4a3"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "ed471790dd650f162d9a1e3be5b9da70"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "6045e5d7258e832181af351755355561"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "e6899894bb38932d526808983545bc8c"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "326437313bf498e80482554ae3ce100f"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "04491ce02d2629f0622e204c4941979f"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "f933fbace0a0d1f7ee564e469e05f5a0"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "781df460324cdebb1b625e30aefd0d0d"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "6939cbf28106084a8d7284718b437f62"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "daff8b1d6d9e907afd59b407b497b7be"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "c97f631c73b48f9730278b8a94b4ab43"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "0082c2bbabbc9e9a0f43281fe6157c93"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "a67f8b4c54485c068940c9fe9b649504"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "5771374b712f0cdde5d3b83311e6782c"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "34525f5d4c696b05b2e3fcaa36528b17"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "6c111694044337ff2d053472ea66a7e4"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "8c04e693ad02e2fd144d8188f882b1fb"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "846c70b4ec22b79a49e159a69eaf248e"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "c5ae497b4a91d1bb4b120920eae3016c"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "543522c8d3c5dd0a24eb339ad20410d9"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "f11ae4a242d6ec2660f18c8ba763ad51"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "23360e584c0dd83190c068ff2631fef1"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "ca4746cac544d8e175f2de22f7da151f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "496609723140afb1c9a04a6659dade40"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "769a33cdfd0e1b4aab3488e55f7bdb58"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "fecefd69da1ce9378836aeff608bbae0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "2e8b567d34b2b1400c4703ddef9af2f2"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "7cce8bff361f3529cdc644eb6664b994"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "62b25b4af842a7fd4827346e9534fc4f"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "280bf338af334cceeadb6cc466f056c9"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "2c344ad6dce6cc2e4d1fab799473a38e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "0701f53bb9bebd85742895c2984b2b9a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "ac6c8b37865159b5acaa41092cdd0bc8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "25da8b24201fb9269d10fed744af6422"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "7579df52a30e65a15d3bc6b870eb8d7f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "256c838bc2032f773dff84bbd04e5db3"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "2abf026005bb2a0227b3478b28ddc635"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "a1d5859e0b72754391cf5bec47886016"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "58b76f16a9b09f13757943315296bfe3"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "0f06319d077e182af715915df3d2f177"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "051142453fbd58da1c12b0e2a9097c1a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "d5b1ece3343d363c750ec7b0c60a55c9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "e6d83d19ee846a86b7ea7377dbbc6a4f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "e70cb3f3d10c5ffcbcf29d2d8d456cb6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "46f0d42639747d4f5438f21dfed42a56"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "7c6fcfc5051d2d393e5e179877b187c3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "95cfe4b3eacabcd4c2e6185e4cae11f4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "82e39e60c2ee93969d8b5411125a97ca"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "76c047f6fa006e138e7c642e569309b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "4eb1d85d187d2de70b16d75e40a5cb23"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "9c64847a1dff0e177595b7d76e2cc61b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "bb9404a9ee551620c41cbc21c45f8893"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "8e1285150a54405a58d52ea61066fc25"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "adc88f6c437847a50e48bd33800d5b25"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "12ea74df9b1bfeccf3fdf964c7f23e47"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "9ea3ba6f1409ab706bbedae14b12221e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "ffa8b5d2fc4240f5bdab4a337dc34b53"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "356d4f6ccabc2b6711f5c45844cfd4b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "49fd8ce9e42944bab9abffe2c94fca49"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "65bc2b81950ee4f0bb7c627e8d51f426"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "cccc6826a5373fb5ec3839b823089508"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "953d38a6e32d730b72943d2882be1c8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "5ce086ec6f970e24b917873bd103efab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "8e9298a66966bc44272472e017135ffc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "a3594370310f761ad24d27c446fd235e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "8a16b0bf2beee7dfb19324166e98da65"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "eb559dcb931bb877c5589d1b1cc9ce4a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "8c76ac8165dfd7a2d33fddc5eb146206"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "fe5abf5d14a92f22a6cc0cf9281f5803"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "bec09679fba501fb6c2bc360569784f8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "22cf46d28c6a538f0c15414684282373"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "f61be90755b76e6763abd1772438d884"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "aa9a8d32fcd6ec11ebcc43f040d4f8fb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "c37c75330dd9444b62e2683249b6dac6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "df1b23c9192aa9fc5dddf3e98aa6f835"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "ddbfef330d60cef35ace721a66f6c5c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "a450e4257d3b4b0cdbdc5f1e879e72a8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "651d9b8022f00393de4ad77c79ab7f3a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "fe7f15d342d682eb1af6cea5200521d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "b23e9d949ce823126f188320aacaa3e0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "1a281fa5584a0e15ec22058eb26029b5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "466c8a76d26b87f361b9ef6f0ac3ea9a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "57a94cab319aeeffa30c94418d832e4b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "1c65b1c0645da61d74340b8d75c82c94"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "299f412df2cd71a0cd904e366c6c9930"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "75763b28987c9e95c6624a67524fb15c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "128378d2ddc010139c7548e2f8ba71f5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "45ad8c47e6ef79577360a1ea7202fb76"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "1856a01756a15dc44bee4dec276de10a"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a598cad7a6e9bac87924529f77495646"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "9046efffcf8ec70833d7223a547d58df"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "177f2da6b4b5751207ab8e7dbf08aa96"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "c0393b1448bfb5ba99bc9c2a3e75dffa"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "251eaa8a8afe3a6f5596066c536a1b75"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "1b0340daca923b304a60221b39ad4c11"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "bf795d4e29898628411cf60329365767"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "9fa767e2af68d0e2c823bb65d993324f"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "f684b7286688805a0b775f0d1cb5f1a0"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "7071777555c2937af8052b7d4b0edefd"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "be38340d09cf1caab59c5e60acd77c34"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "a70119cb18626bee9aaf27f1033ecbef"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "f3df29ee87436c701343d68babc12d3e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "6f3d88c27c2757d775f4760b7974857c"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "442f046d4cdd3b70e7629fe12c948b1c"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "31efe0bee21eb8883cff6a7ef2124123"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "e8807a8019bef8fc4d385a14d6d9316b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "54fc48e02d84a7d58ca635fce1f01aa3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "3558081462cbfa6ea50720d01cd56a3c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "fecf01d99898cf24f276daee9f11b2bb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "1edefa7c7349cf9aac4a4015e882a169"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "57bff0a973003044319fec888c7e850f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "93a47e8bd075cbfc028ffac1a671aaa2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "d8feb59a2e9a76039a958c73db647c4f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "420e549f79838d6b0509ee0fd1ae274c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "387b7b735c5003fe1f67a6c2dc3b1ded"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "501597d1e2d809fd16175d1c1f480906"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "1cd60e4bef07f28b6e3672aff843987d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "ae9584dc016d0b975a9ca3d4a6d6b37a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "7789710aa6723a8316dccc3fecfcbd99"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "280367ea1d023151728a4ff44a0cf681"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "52966a989759d7c06d2f748762ab971d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "e23dd0bc75e707f5b2efb3ffdf80d104"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "9ea24b7a4fb87aaacfc9e0dd97661573"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "21baea9459907c470f3e1352eb142d58"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "1e49b21a8cd681c48ba82fb1b8820668"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "7626c8aa1ac21b1e9bc380f44b82739a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "f9ba9b84af7403719a5096fa26870a6a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "73cc4676a0195ac1df49cb1c6e149ff6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "c92bd2e39b3bf9d69f6a11158d2f328c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "b35a385fae5a7f001048e7d019eb5756"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "b72eb26df43cd20a0b6d7baade4f9dea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "0e8489d11fc38cf5a526a5d27f744aa6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "105ccb0b6ec37758a578b4a0ba40afdc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "330e4bbc8a0816f75f41fab886047bc7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "3da083bd5099b092b74fc9065f07d01c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "01b4307483f878cfab1effa5b3ef57df"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "fa7579ab3943045c29ccdf56ba15826f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "4bea5ce0d29e5dab1290ca0edae06737"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "3285908900a268c7b074828c37b6a5c0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "e56abbcf952ea01e9fb6f3f68f62ba56"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "a20006bdf44d6532d658073f6a520567"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "ed19cacd90449e647addee06d3e43e14"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "a1612c4af2afa584d9d95ab70a4fb06c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "da7e8569c4c847b01c236fbdf80d4163"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "95c0f895aaa48aa5f627f6e579b119f9"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "c7bb8813788dc964d216aa05b44b0bd1"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "abb91f8a24c42cd853ecf29ebb981165"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "be70d40138581a0a0d7c3effc162f8c4"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "9d8698c547003db509b6720d41341493"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "2fb7ae74186f35d072b57898debfb017"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "89bc2689b46e8d3526f2553885a63dfa"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "e4a91125b46073673507d610da2d5e2f"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "8327515f528c535e54a220db82c0c306"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "0cf32afd008dff85dd2bc70a1129a653"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "236b349047132a3a0f4530a652b85c1a"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "90682f1c5c7b077d3929214f01adcac4"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "6055b4c1de82ca53c8c6337c7f428fca"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "972bad90d7db272185ac4ec45fac580f"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "d100089f2bfdeacd3addff7db7bf8c10"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "1f58642b1d6dd74358b912fe2c98fa33"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "9d242d5d3fc1ee5d938c353aa5c9a86c"
  },
  {
    "url": "categories/front-end/react/_books/redux/Render.html",
    "revision": "7ad9bfe02c8f585bd24c3bb170d5a3b7"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "eaed71836060db62a148000ff7cd4eeb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "cdd3e4851fdcbe84e835e2a2d9c57e16"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "b2beaef85f6e4d826562904787ad2a1c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "ce1f04123f67a9d4a8889426f3fffbf3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "d70127e0999819a253f94d7bff080136"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "333d156a8a3ce01030af8c803ecfc86d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "fa4bc8c06036282e49af79e4b6ccef26"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "fb8e07f96f33dd08b3858e6e0ce601d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "b78ee237043f02125fef9a86707594df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "895359351cc3ad5c2e24a4c2380bd9dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "2df780ea49fff12b5fd4d52be0c52ef5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "5d5002e77b780f2ddb0a383c30185190"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "db13bbfa543362495e8bebfc4582eb4b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "4478e5f23074336bfe4c86553648bafa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "177f2ba97c7d348bb7e75d18f1c37427"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "41ac677db8347ef4508215bf4cadf285"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "00f1d3e58e0c75445109cabad1a7b5bf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "592b4ca08bacb7d23e177c73768fb200"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "6353c32123ca39a4c3026a8ae5ea2b4c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "fedd4930862fcc6931e91d270d625804"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "97cf5b7b112ec213f79debea72281a79"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "f702b28ed3190e8d111ef70d8918940b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "710ea0ca3b615e86d035cf4508a856b6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "d5688d7df46453ee8bd25a3e03434ce9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "215a0013e9a99277aeaf5767396584bf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "442348b0bc32764d71b6ea1540333dae"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "9e65080320bcfdabcfb9a8504879323d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "def1bd98e2e7ae1710c6125b01b924ae"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "40a2c69f2b73cbaf67a7e703f93a6184"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "424a9119a867ca746bd4c1b4a5bbc3df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "ec6662eab0e907dcda4a0aa0370fbce9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "ab707d2d17bbb929db22cd888d8dc081"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "81fdb2295b9e10d4b00c2509d999111b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "a0045eca4646277b51e2556945f6a0f6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "edbf6debbe5e45aae3dadd37a9d44a9e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "43b1999a4f5739b2f01236736a43766d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "06d6792bd394a92b4ca5f6cf7ef65157"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "70d10114ecb68704ff51291270fa0384"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "f81e5cb5a4c49207d2477e769610ab8d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "c24252aa71bd22404df5a5515cbb4c2e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "61f697fee1d9a9832b82fe18aee916b9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "44a1bcc2b45916035ecb418dc33a8592"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "9c6abd564ad01f5c9f67a6c60a766c81"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "0af7446b39b769ce3dee4055c29a6b4a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "79b727f78f59e94d1652f176d70f11d9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "e8367fc7339fff0203a149d9fb033042"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "99a64a75de432fdaa418a3b20b86a3bf"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "b9873fb8922eb8efe02c72064ec3574a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "56c3fb7c4c2bb2b72bfddcd255207fdb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "3171f467a625823f9065d38ac3142790"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "cc7410683f7a158f2cee3d34f6727b2a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "774bc3b144c2f06fcef2e994f4338e27"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "2f8b6612a0cd832b0929ca2714849173"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "bff4aefd0c0c369458cb78047336bebd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "5fd30fbdf500c74c7cba333df8586ded"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "10ff49b2a504a772d3a7957f7a5897d4"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "f14daa18c41677231991e4d413a26068"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "b5877f10dbaf1d13f3d78d546270317e"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "beea43c71397a7e71ecebd83a8c4b9d4"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "34d82854ecfcf7dc852fd6d6d5cd6438"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "1e1d52749c479955382946738a3959c8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "35a36d924aefb48c019bbc5c5bfe853f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "1bc825e9667c87495c3f25e12b1b83cf"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "53312ab885c410129f2237f71f087106"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "fd778fbc1f31bb9ee52b062d599dfc12"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "1adb56a1953b441c64278fbc35f00980"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "29273ca5618d8b68537335d628596c9b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "8bd2aed9c141fb04024806934137bc7b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "0e668dd61e3e7aa21b61a4e1bcd4fdb6"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "17236b1825be031ea55c11c1cbe0d9f7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "3d7f39249fa74eb4fa7c60f861c9f593"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "33844a18b4224d49e99321a829692bc8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "41f9c05b7ada8b582f50dd097fd53606"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "906fd3c26a6ac3a50dba368a0077091e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "facb8e680f2078ec25cf2369fe6130ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "8d01484773a7eae11cbae797d6d72007"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "21e3a4034ce0d51fc30c4c1490173723"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "bfd86ad8fb1a19640c91991c2b081777"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "e491b07f807d124eb41a6a2794bdf316"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "f75aa04d029fd55619af8cd11db3b747"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "8b6e443c40b400c0abc4046606b50e97"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "4293022ed20b6ea36be064710a330031"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "60bab42ac740ea5846b9fbf4fad1c403"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "2b4a8e359481f815c9e3105c26cc3ba9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "7c40fd4a161cab9f7a4e7e9a45a03e18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "1e3367439cd895e66e32c199f0400b1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "95733717f0f17a32b1aabae3a63c800d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "9ba86e4bae8b0bbfc164c65839dd087c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "14d119d919c3308d27b7e9c586cd5979"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "f1bd9139eec7d0472b569353b591ea2e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "a333c924d917b4a52c58a984d2ce8321"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "9725bd105d7fa1621d68ee1f2ffd83fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "a730b058796e4a3b6ee0510e6442f899"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "750bf91c95d1c5d819ae8172788dd109"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "aaf338a04e7eaaaa8d4ad63a5de009ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "994f520c54c40aaf99798cb9287ec0f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "6f78c0319bc0a3a69c9f35c2c18980d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "39ac8e7e7638bc5e8f6271f9fd8c7efc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "a0e757b58342e675c5ca045c883ebf86"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "fdfdafa488df7a266da806286f36a14d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "cedab82934f7078d1d1cc8d829785661"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "65c0bf6d7b568c92b9c6492000bc57d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "ba882bcccb6e6bf47003e6a1d673ff6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "a24414aff9c63deeac16c9efae5337c3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "68e686b7ca35a686b323d1b8bc72d116"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "0069ecba9a597f167d18cd1b2d6f4a4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "86e87db5a82651943a6a2e4940eccbc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "66399111192de156159d3f5f9750aa6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "aa292367bc2dcb84a536d13689ff2862"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "aeee4cb672421158e5960f62c03eb7d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "df4ea09417b48cb44d972a37e237ad87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "8c5cab26aa93882859179a7970474a24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "067d93bfafe9001019634a2584a10a02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "a024464f5eb09e85f837948bc33a8258"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "c52a06f80617ec12b66ddc265b1c5331"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "4b94f91ca2a469ea65db2751be8c7956"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "35a3a55bc637602dbae91b48850d55e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "b9254928ea72ccbfdc1965b1e396a554"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "6da557acff4dac97149231deda2e4554"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "f4b774236118ad50e5cfe4a49dd9e6b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b6486d29b69965eb5911705719c8ac0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "6ac537934e7073b9e4d21ede4faa46c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "137247f6a56c4f824ae5951289f8c827"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "e2d3e2142e5992c7076c6edabedfdb35"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "65476041ac2d41a8e863cf08fe07da2b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "770b36ee658b7f3e91b18e10ada8789d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "f92d0a53b897738ee24e98afff8bae11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "46489d68cab48db36eecd9869960dc9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "34c8e8865aa412eafcad68888c8593ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "046aa6293904b432763c5074dd548a94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "2e26cfa210273c519ab04396bd8306d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "c4c1b04c90648dc2fe4643c47f37c1a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "72e0703d92e30087e6123cc0ffdb0270"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "56a7b15511ab7e761f3cc6b73569e74d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "15a60b6eb1aee814920552ba38ee8104"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "94f8cadc4a8bb391c40efd12fbbd7d0b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "a01a569d725efb4f55f4373f2a8b178c"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "0b3caeeedd6569454a12c94fb3ab900f"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "540abca5b89dc50cf38eada54aa9cde0"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "cd7b0ed81b57738c3b0552fdfcb2ee15"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "12c9d1247591da42fca023e5afbd78c5"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "c3cd5e7787260e585d146338d17a39e4"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "dfb30d7ab7ccc4518d8a101d51edf4ae"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "e7c252dc7a31bf7004a73f42864da842"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "4c955662c990ac431952fa03108d2771"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "d1acfd5b4d4b8c130f3fe44b8c29dc21"
  },
  {
    "url": "categories/index.html",
    "revision": "e36de39b87955cdfcb181b77f1af186f"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "04a1da490484e956d6d86e571202e3b8"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "6e9d917c2b9c1bd47cbad1ff3f91fab4"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "c919aa9e8691e67a8d6b4eb35783b1fe"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "2a2af940be3771ee33a159d6eb578897"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "7659825481350768f03815353c8da830"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "74e266f6f4e005c4f50eab47d85426a0"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "827c18ac76dc9cd1b9b5f9d909b261ea"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0b3999a1afb90f29004479c331ed5813"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "6a475c178fc70192b7874e99cefdf1ee"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "2bba4eda1f8de731249b5f40503031b6"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "3c21a04f1c63f120c3a58a3c6844081a"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "2ff4565144375fe4b1539938615ebd43"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "07f347f14a0d776efbfbef784159f3c7"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "14442800ea0b2ae97ff16d5351254139"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "65f6edd050c26958be5df4e07c6c0aba"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "743fdc669100830c25257629abf2e3fa"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "4d7f01fcf075aad217ef89881c5e11da"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "04eaa678fe4b0a3624d7c68dc5304bcc"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "caedb0fa63c3ecf2f6e33cb38366bd76"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "f550148cd577d1003a20ce954e995324"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "f92cfbdae59dbac699a3e0fa73fc06af"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "bae108e78098b3373207c09132a75ea6"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "16d9dd9c23ea3a2fcef2973cfe0fb36e"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "7ee9e109ba187e2a42dfd812afcca8c4"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "723f448e62e799d68a26d6775fcd3a17"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "df19c2c6c771afe996f822fca25975d6"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "84cd9832ce54a90e6497a3ca6b7120d8"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "7dbfd9a2d74bde123ac3c74e59d87d43"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "bf6fd2898ae54bef7f1e7756b37d3bcf"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "a361962dd29e86c6a351433031caa340"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "13519521db0269c86886fbc287a70fd1"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "f0afeeafcc9c244738a1e58059b1991d"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "6509c47e96c161d8c6c584cf3b0a9e9d"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "8d1a171ecd8d20ad6bca79343354fb2e"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "d7e6da23395087ea90555ea9e7b1ade9"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "2ff5b39486ed0aa476269383a2f515ad"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "835b20e98ce64fe838f10a7fab0a0f3d"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "ec94812d5687e337e5fae932124bdcd9"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "48e31d394fb2fcbee7845d94cdcca91e"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "22e1abf16f1ae610936ebd999428208b"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "bbf7daad9855e211800fbfe75f71e97d"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "22dcf746c94d38a706487eb0f06b4349"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "80663a34af127afa3bb65bd46cce4057"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "01594b118a6f97752e0baaedde7f6716"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "33061d9b6a24525afa50933c565470bb"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "7d95fc7369e3c9152ff681daf69e2a5f"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "78cab3b0eab155d7e738d6000d91e0cb"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "80854834dd02cf7e921e01f74196cde3"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "6a1992c8ed861d9eb06614c2ffd8536d"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "ba7e9ded04c4dae435dd0d305e3cc262"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "5aaadf672463957b95daceb8840bca5a"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "c2a06c4fc64611349965f2d81dee4a74"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "dbb51a04e40c7c0017e14129979fe249"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "334cf99006fac06eb35f4e90b09865d2"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "710f93ffa115ed7e571c2d1e818ba0aa"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "10d23fbafb8c931dd53415893bf0bfd4"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "75be9803871e36601fc9bbab7741bd19"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "aa67e6fef1279eca531fdefac7f932fd"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "d67d13c83b29a20920f4198fce10b4ac"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "51be10544339a5700570269e851a2331"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "22bb46ac300570c94e5d8bed55adbf26"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "9314e510ff28ae44cc22aeb870359bf2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "3972ad0a485dcabf4649fc66cb5fbd3f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "ae02263f83ce1c373c8e83f0c937e13a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "30d45155765788e0fe8084ebd87bb599"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "9ac25e9379331df34b73396b332bdac5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "618f546e75552f23a36ca019bae894f7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "d842c54862ea1795d8d142f15eea32ef"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "a908eb6d5cb7e1f2064a8b326a4af942"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "891992842c2364f6a6930ab9bd8484f4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "02d3fecfe474618f0ca4acfeddd457b9"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "24f4439e56668cbffb26d544a943e7da"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "207aef250331e6fb5266cc9f92fd52e6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "90be534da78a34b914a8d53c7584a7ba"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "810544955ca8342afd294314a863f4f8"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "dd06258139912bbb33f768be5b772e44"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "3bfc6e906812a806d86760df7aa6e082"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "97e006bf4ed27655b8320244e50cd7dd"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "896dcf416c12fd988329c81ee7e0b4ef"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "4fbc349799cad1909279e35b85388004"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "87e943531ece71718686304503bc2fe7"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "4c0cc80b4ef5522562e6969c4499d5b1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "a7fb12bbd6bf8947b6a7ea4b1a2419c7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "6ac740f1d1e88593e7487f518f051924"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "87cdc4256a25f93e719d2b6739038eeb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "cad0abcf57871ebc0ae73513dbfb7334"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "136393b57a4e938eeee5400e0cba0f5b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "b4a0d15c3c2e38baab6712d7e9d76b14"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "96835c4c85b7ee003767338346e3dff3"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "c0807821ee39424546a1d4782bc59502"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "bd5dd68b00dda86bbaec80a42ca90b53"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "cbf53395006aaf0257972275faff874e"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "6c1bb494d333362feb4875f85ff5ac70"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "82d6538a8ead376e28399a4860c88624"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "876c45e89cda21b2064c4a7a3e9656e5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "83b75b0e72e0c6247b8578d55e15258a"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "0a21e19a0295e4b8359f0239c40e559c"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "0c88a7a63e2fda5535904bb958ad54c5"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "cfdd186d8f31e9586c25de4c2b9fa135"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "449e0afad929bc7a2b387a04c55af9cb"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "51b5898fb378e8b588360c0d4f154e21"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "4452e7ad3586914b9305a1a6e8acf755"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "8b15aa08969ea22c966da71edd30519d"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "9b758d8d5dd9a1ca8a9b04b4892e4da5"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "ad8509e65a016a5338a04970a30e2bd1"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "b21d7fff9219855b5944695c6472b82a"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "99b8f3328d91845e7348a4ac9a950fb0"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "02b291b4bb16319d3c64142ed02b3c32"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "a09e1609ea87923c7fef4c6081fe8129"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "00e7e30fd30ed8793f5e995086a9b02b"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "8c5cefe45c30870daea1f6b2a3b5dcc9"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "ae72289c59423fc26f5938f1ffcb8897"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "e001428504737ffe532691a3de9b1326"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "9a43f909fe50f6a763cd93d4a478927a"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "fcd54650335cf13a05b33880f50c1f69"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "f3d2cd0a8f2c6b2d60c1543a5e410401"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "50e4f9f81bd440ca8e0cca2bc6289d5f"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "32970121107fda60dd9e4fa0d8000a0e"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "1920a26bb9fafff5f7b77b4dc5ae614f"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "3e514d91c9d15cf1ac24cfcbc48f172e"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "cbd90ad72563a98b38ff97f90ffc22e0"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "545e22051207bc8424e6a46e3456316e"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "43fd972b100b6db51d153ed0d6d17f58"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "22bd592af8be96cd57ee6cfd91e0e2f7"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "7855c5d44d938207c2041dcd689b2d0e"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "844b5ae4272a77035f0fc13260503aba"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "a6128fb7d7853f5ef9089a60b832eef2"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "a8845f2449ee3adb08c48c3abb7d295f"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "067548cd441f84d7645ea3199faf29db"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "0a48fafd9a53f27fdca5789bb98ca304"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "38647f9816a7be90d0d5c47179f03393"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "9e1389857412c92db7a7324afaee7233"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "a0aee1c92c8132bb9f0e4d96b1145ab2"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "0baff25fff9ed012d93442dc50bf9a69"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "ad36269e3bd2970c5610ea56c08abeb2"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "259b2b52c86f04f8031cc7671fb4a989"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "37e07a5270e6dcdd75a8786c70827763"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "d058d1874c2223bf509aad93af5dd21c"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "751df36ea87b53230fa04052fdbd4236"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "5949f419162fccf5cc4f49c83b7e46ba"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "8d71ce92487ea95954969eff7971eedd"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "c28226cd1e633d50a5759471a70f0bb4"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "5dc32a94a8b7885c95806a584d8ec911"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "7cc295ddbc206faed4789b8b0cfd2a50"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "d71c5d7b10fa8f6b979fbabe91eafdea"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "037868daf82ce7c91873534854a37d9d"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "e5aabc2dc45f5c2c9e6b6f54c75ec1e5"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "ea240cdddcee8926e998be947c7d5271"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "37c2b8cd7ee7629827baea6a7680610e"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "b4959443a82a9f851886d24d2368f3e9"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "7510abe4d9c99bd04856f769adce3811"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "4d5049f3fd326434e69a5a97a9a022fa"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "9dc2e6297cd4ced65ebe8589bea3ad68"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "38628af9f43f7ffeea6ed0ca14c89317"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "a6e7bd75706500729ae02dda14495eaf"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "657c14625ee371b53a4250014f50c611"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "03db93f4d141551d7648ff5ecf9d9037"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "1235ed92d34d92d0df9163deb5982720"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "b1c311c2fbc4fac29d22fc0cc0d59e13"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "de1b4ef0d742bee03ebf1672c84d04c0"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "1c8a0cb04a604bb25c08614abf9d3209"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "e327c7c76e7097411242f86724223a35"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "6242a46f11502972cdd576f1cddd1a3c"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "e097aff2e778eb371c3d35dca73db5af"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "d4520611e603b570353b229b92d7b8b8"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "2f39dc0465df16d7eeb10248cb2eee61"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "0bd23dfbbf9ef007eb07d7739b32a62d"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "6d3108c2447c85eb93693d19dabe4e4a"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "553b7ba376be09428ac5ba41d858a025"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "ce618d8e192bf96baf10fee34ee41f6a"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "6e9f7e706c13e9b7ac2388036f7b68dd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "f61adcc2cf6fc6477e392b19d6dfb687"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "2f70dce68494001b9ba069ece0f5812b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "436a6f256c9ae23ee50f081508c9d5eb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "d98f5d32e3cfe68df5a45d4ebd314375"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "c41503678880fec72c5b742a696f254f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "d7b9b7c91c3f3ff21fbf60b1cfa8b011"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "c956dce119b1b9254bea8637d5b59123"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "d1bc97338f54f61be2f65a3be6dafc5d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "244bf19336c68be7f36acb36d73218e2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "af49366fd67227442809998bf41e8cd8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "5235545daaaa73fd98c6de14a3acc56d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "81008630dccc5b78a1ff60b9aa33bb73"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "567cf6e2f53934625a00f9b5ff1096d4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "ee34e90135ee8502079e327ff98b0d80"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "1d34cf9eb5b766eb41847b7a43b61f7c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "a8c641a1c137a1e6323ebbb5fcbda41f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "7ecc670a0455d8604ab1f72f34d36320"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "1c2b6633f608bbbf5516b8e20691453c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "b720831d9c2ff614e2c8e5344ae27c8a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "c4d728a309f89e9f66723ba7552bc5d5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "5658ab2c3dd07170fd5bf84bc0c22880"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "76171344db261749b83baf9b07abcad2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "81a880aa79e9a4ea1eaeb671363d1f24"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "8c2f1e04cfa3c8cd27dbed7bee6a9bf2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "ebe6a5624616485a322442588a1bf442"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9605bb868a94303551ceeea440114ed3"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ffa48324bcc1926430e0a4810e4c9e73"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "34c912399fa7b0c0b7b3e4d6e4a6a6fb"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "9dc0f9019eaa5b95047b8da281f36c3c"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "06b5914e5149824d4dc3809f0bafcfe7"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "7d027aa5b14630470af1df430df792b0"
  },
  {
    "url": "categories/os/index.html",
    "revision": "9b31d96db03a8b2b8d144545798ead16"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "e7d6c218b25e0f7b9961abe53952451d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "6af431635a471ef6c457edcda6d22986"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "0f4c43a22646089d865f94c514240b95"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "505297c79ea7c89e7c61d49b17b988a7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "448accc7c063cbc19d66cdee4646b9e0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "51a4972bd767a2e461b499d34aa37d05"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "e5cf4414096f599a7ca064f245eb0adb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "8da64677c804f17d443c1a741a5fdaa6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "f99a32c6f87907d01113989323ee10b4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "54fb5e7ffa190b96c5ab1cce2d464f12"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d8f1517e5b9c32f6fb0fb204183b7af6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "187a9f431c10f79b6752e43367cff30c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "f91d63c94799d16e842813fa69fb1c24"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "5918639690755e1702a386d5a6b022b6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "cdcfa01e887bb5fed8b17d8f54ba38c4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "6589d21eec1dd15d424be22ebd6c4a87"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "b5057f9f8f1a08fd9a62cacaf4fed849"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "eed84c62311418e4169aa2e3956cfb61"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "8c41738c06832efa4fb3e2783b61d744"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "520b3642f18c925762e7822dd09bbe06"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "5958e4c3324650426a8431535ffd922d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "e9974f51a489931cbdee3f2a850c925e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "b2a6efab97ec1994a22860e3113754f7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "c3594c6d911d3a004b55179605cda3cc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "2e257c0c44e102544a2e889e52b15d53"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "c578eafa8189610047bd5161df7e8067"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "1c38408c52edd6ba81ee8b4564bc5816"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "0b87cf65514732a365feded5e1865544"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "554fff2e9a5a076b17155629bd558a6c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "dd17ed8ef1a64d1f19b42ec2a72eadb9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "f540a1852004cc67e14d10ecd9d03cb5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "2ffabaacc2c166d79b8569900847926d"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "dcb869a43f7cd2ae0d21baac13ba7121"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "a644817c198ce5e087f64c383cd9c289"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "02d134e3b1f41c04a1a33e074ba9f48c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "68ac0e1c50cf18700cc072d5e1b16fe4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "598d6dd519c86098889988c29268d6d2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "54f5b783a41535caf4c2c7a35cb6c6b8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "b55d699fc98dbb7c351e0143bb3d4d8a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "f67aec45b3ae7fc9868a699105c3690c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "2a47d63b18c792cfe68a0b697a4209bf"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "941760ae7731d7651ff7554cb2249e21"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "dd03f9cbdffa10ff83d8463e9e1c1005"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "50e08374481ee28b3f95b8498c9b561a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "4532f6ec0788e43f56d77f903a43126a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "5bccb158673ff9812f83d128e19c9c2e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "c31bacfbc6b11c6587d56285c6f8bc0b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "15e4a06939b6b8bdaa1f33dd9627a5e3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "ba00f577525d0e3c3c04f501b5b25bb7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "35a0642c9eaae2258e83c4990aba59f8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "d19b49925c3d3b9341982d80e74fee52"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "f6e6941557f89e31df2bfd3333cc020b"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "2d670521ea987cbc16e3c4bb446cbf80"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "58aaf5ce1dbec23c054a7f55308ca325"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "a1da4199398caed524cdef04b9151152"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "9ebd3b72c46c095caa49ca00f6783295"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "3d8edbbbf5e427c61f72136c27480e2d"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "6b1225d513a95df95c50a3279d89097e"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "90492914096adbcc49695e36a4303d16"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "a18418007bf9e411edfca3623883db65"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "309218cf2d7570a3eca8fef521bed8fd"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "df8e9d3633a8d45dd9729556ef1fe906"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "2d9f259d46a7c37844bc66a9a84d4ec2"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "1de12033e3309754085bb7f0a4fc02a2"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "f57422d0e02ed0a6ef4de50c379a66cd"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "e833442854a57155fc9e2202ca26c603"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "d48ab196293e659d33561d23d9edd0ff"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "5990fa4d63878f0b426b2dd79ad50f83"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "44b75b6041231ab5b194b78bbec47001"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "4fbcc991b42703f9ea6e137788bc0ac9"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "53c57a69690656a24b41e8fd910d0eca"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "cdff1142682152ac0489e6f343759bd9"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "da3b501fab308608e5135c6306f4c805"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "e78c8517c5f4d3edff9b6d1b9e803bd6"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "a2d1674f18d1b663b748c400f01d0e7a"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "204280a0c934a964dde72633556b9fe8"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "9a0fb579a4afdc8f55e2f9b5cc270bf6"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "27139220eccfa7055ac4c5a84d6c2bd7"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "c1c02c96d6847643d192bd88d0a96708"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "cbd9e499e6bfd4b931797f512ff2c5d6"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "2e007906b64e90922626baa124d02713"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "4f4fc7402429621603d0fe3f7685be79"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "e060fed602a965f619db70f5b5db7507"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "47c7696600ee021caf1a8cd35f1485d4"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "1c9b0331cb8ceb199e8442e449c6c0f1"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "392cb8c4008c206eee4e291dd3106277"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "d6efd95103ecb04be855dccdacbef0e2"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "660bc33f31397eccd6829659224e718c"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "67791b03e0b8de40fcc4501d819e0fab"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "5ead389c571b7d741ea11674cf963823"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "342c1a5397fd338b2d53efd2a5205f0c"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "1e4c17cc1eebf5959ab8b0a26f6bcc66"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "accaf614ff80612ffdb7cb9858d88809"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "b90ab1c0f6656eb841979081bf811dcb"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "2850f99f95cf859e71514cc2f027587c"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "45f760cd37ce1de6300a6075ecbf3e62"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "e1f7c461e902a20e82fcc09f28290981"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "6c682828f8256f824c42cb9f13a72bb9"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "0f2147ff0673b18c4d61c357b8ed6481"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "d783f1f6a46ee034dcd738150a0ba2af"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "039ada16be4a6207ba7bd4039122444c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "2fba836b558ba004b3dc5cbcf46ef3c4"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "a9d545b404b1d48fc50831d7cfcaedde"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "f248bc4f842afaed67aa4293f6e75dcd"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "cc3ed3c07e50fbd3430e1b3e29f377b7"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "f6e47906e4024e7c167c8f6b66f25618"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "fb0f041a4c3fd226856c34d9dd2a8d6a"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "03c86c74297ddacee01f86c3ad22dfec"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b71bf413008260c78584c2b63728ea63"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "cba94199ffbf2f7c9d6cb229caf60640"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "cb31464519621fe80a0e1e51998ab94d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "0216e71d8c3980f4f5258de647dd3764"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "fcb174a4586d8eeb787cf6c4082435eb"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "dc5af313ba67b80fe76bdb39ea3cb0d0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "49d3c0a83d97565e108c1642c3989565"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "ba8157a7c36d1f1cc42f6d649a287254"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "306826d232061dcaf084ea88556f85b8"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "0aa792615ccd4665fdaabde2bb30eb79"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "395eba74f0fb04ccd497b0d58ca195a9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "7553ec25800f31ba7f4269e75d581faa"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "7695bc7689e1dcc6710be387c42dc516"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "1d5a2bda2a0ccde83a60ac0a1621c8de"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "ac310faff679b0a86686700d0302986c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "c6d418d09cfdf2403c7c058777e760ff"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "d56bc62a5b45cbd7a65fb10f205f49f0"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "700eed452645a685feb47953af18877f"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "e0989e7ec5a6d2ac230bb55c38d025ee"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "d84f672ac9d8abbc2f8f70a16590bbcd"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "70cd306805a62e40ef91666866ffe3c9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "e4c8066aa87244f72b9e511184ee8512"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "0f91d6a6b8c52ffcd1af3772c22bf507"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "1caa4bf2b80f8e11743260217f3c232c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "d12f854dab55977f224615d55b41026b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "3c9485e14d0065de3fccebd1f8873383"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "10d44128e2319a291db67bc6e1cfa251"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "874bb91e52366287e73dacd691e04adb"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "c8629f88d933de28d035b84185e2b3e3"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "5b16df54498b768e7f162b94150b9d62"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "f60fd9c4b0c5e3580bcfbb02d72b9ca2"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "ce53248f163b0c118ea05926b6b7be21"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "2b057fef6cbb12c2cb87fd319382c9e6"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "05b9e698a23f2a5e805f6955076d16e8"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "9d6945f536bfb57e6a07ddf1349681ae"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "c3b2fe99e98d852cc104aa1c65b1f61c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "f4b9291cf588baab999c63d6e8483049"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "8e1fbc889c47a0dae5d278784465e7ca"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "0ff79e178d9db767b8a30511df303ef9"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "6614f30cae136d3d17f7e2d117e193dc"
  },
  {
    "url": "categories/php/index.html",
    "revision": "9e56b4dcd05c53b79f7644400918d5c5"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "892f96139bcac8a8c2c93a218a8f5397"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "204f6ae675d2fd89e4d7d8888df864b8"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "6955ec27e59d7d6eb081b2c7240912a5"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "a0a02cc080502584ddc7b7678bb1990d"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "d20102aee104709219ae8b5ec76689db"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "c0b6b5b764393822ebeed47e04fa999c"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "a10a21dcce04d119906c3e047ece2f9b"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "a7c131ceb41824972ff18d8c93070934"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "5a591455d41e1d62ee3a3e5f79f1b896"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "eae26cdeedb5e9aed4bb1304f47b5397"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "c14c790743c569b30d1ba656c39c2248"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "1ae0c3a606ae3ecf0ac9d958893f8ea3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "a4bcd90b2d57ec21540517c119781283"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "6b5f54188805305eb01af2fd67a36dee"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "6a3512f0258403fd00311870d04d3142"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "cce5e678890f37b873ccd29db38d405e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "36f7e0e19d477e1092aa45108fe30da1"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "3dc61ed5ba3bb0b6dfde9492feacfb54"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "70b266233f7b21445e301da64a2b8eb2"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "b42a16ea78b5c88d08064e8362718dd3"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "801d5fd83cbd39907ed5f3ae42086305"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "1fdf1fd86dd7ca3789898dc713e74152"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "a965f05389bfb56d93e7fb882b54a480"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "77a8172164d7904fa1b810d84afd11e0"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "edc40cade3bdb6e2c27cc295e24ad577"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "7a576217cca301138bd30e16c45ed453"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "73a00502360fb71bceb21aa043ef2467"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "0b2df8e8f6b83a8d909f8d91291b7188"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "6747285d1ced4366aae39412ede38cec"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "186affe9722d12967cc000897f893a98"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "77d6f3f48802f352bc5ec1fae00ec0c8"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "ad55a99ebc625f32950b0c8b39071fb9"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "06f320d8e3d320ee48398134c27ec0c6"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "3397c413ddae76b17c744347d68bd2ca"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "0f3f58995047c5625bde2652dbdb5b0c"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "b92ed63ae5920d0d7e0f8cb177dcc8cc"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "3df6884eabfc1262a422ae52b086e742"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "59c3cbc233808256cfa0a65b2e41bcb7"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "6e0af3a3c351739ea1e9b8695fffc33a"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "3f0c812912e48a72fbea15c12320edf0"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "7055e39b916dd2e03fac1c5937721ee9"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "894fc4405ddcdc7bdee269efbbdf2ae6"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "c2ffe1139aa6b45ff89dcfe55887bbb5"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "7d4c6ad76f1b7d90734a59271e612858"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "ffe51349be50aa57873d116c17436b91"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "e92dfe7ecc19655f0862d2bb5bb672a2"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "2bf662274e2810992b3c307916b4d050"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "f820e79bee301a5878361472f8447613"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "67f74a7a18b6c7aa8f41d3cae3b5651e"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "6be480c1021bd31989ce7e3e777730e2"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "b53f9314d5a9661155e457c41e1f345c"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "29e3add0a3cdf3216056a90931ebe08e"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "82c17e917d3f5e66a3a8785214b7f89b"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "2a8f9df278765bd2dd4cbbe57665cb94"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "a106d8919c38181e2232e998b386328f"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "92845469b9539d670d9db0b6cc5c0643"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "a8992f2872b95b5173472ac3b9b9eb83"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "d63d4edf474ff2abf3f143c9081c67d8"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "6e5d853465610bbb23ff383f52753ff7"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a4bd53b62a2d7bfffd0d82d92855a312"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "b668630cc7eceb735265596db3ec4a88"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "69e447e6341d7efd5dca43fbcc136e6e"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "61ba5ce97dd6af4fce7fc184d81842aa"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "c84b5a5dab59c1b679583dda68afb888"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "f278d1be8e574bae1975a906e90a9a49"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "81e3d4e201beec39efa9bb3307c54c41"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "2119f879e4144f620a98863e2a215e3f"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "d79b9f97f724f7aa544dd6f234ceff67"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "5bfbb9712c1defd442ddd8fae6b10fe2"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "d3784b40d04592a81711b3f5546de3f6"
  },
  {
    "url": "categories/system/index.html",
    "revision": "0dc57375d73d76e2a090b8f4973ae523"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "f4236de3dacf8c3d98deab3d31abc889"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "bb8331393dff4812cea71854bddf9481"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "15567e457677ac656f211dc02a94e7c4"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "9e8a9912dc3e8d4676ac8b8b3bb30aa3"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "2c4eb973e9a3d49e72c880de5be12c62"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "c02f32a472c0fe371fd0580adf76a22a"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "85a48446fdad40513df6b668e4ede0ac"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "da2a05d2df6064052e5978f75a4bb43f"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "bff9f60555790c6ff5a1dfaff0318e6f"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "30ecbf4a964ba6eead9ae16288f460aa"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "2374805c90d64788338d859ec05e8d06"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "4c5827f77275de611589f131f53af082"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "3681246421a0f8f8d41e9a29847ee974"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "e26e726fdb1cc4ebc4e8c20bd2d48952"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "95efd391b4df9f36b5448ebc8e931c36"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "c54b08d24516ea042c02237a8e3207c2"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "7aa975b5bc7048ba1c67f0e2f4d3a701"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "1fcec334627c26da504a894bbe89b1ee"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "77c02d3db2353af31e32ca6a3ea2e0d1"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "2d8d5485e46f26b821660b2ffa809777"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "28404eb9045a2d729fe202c95f26eab9"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "2b00ff4fbd851b3cef49e97b4294d0db"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "281d0b1d639fbce41e0a79ce3d17bbba"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "251fc3ca8ca19be0e49d91b8790e1f9b"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "44693388cb6dbd5600c1127875e137e6"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "35dc6469f4e29ae326211628336da138"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "c4e7a1057061e8573945dfecc5228b2e"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "f04ca87097eaaa8c5cb5ad35e7eeecaa"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "29c0c957c2013ba555ac971b94bb609c"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "552519cc6c3fabd42a6e7e4c05d5db99"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "31751c41a36b9f96b865e2919a260744"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "47055ab52580e4ff309889affebef24c"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "da8304b362db625df2ba57b39a4a18b7"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "551932a19e47b0f316bfc599be6455be"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "2edd8a7841f0d81ddbdd9a45bd04434a"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "fc172e54b8517fbde0e378bc857c282a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "24b38c507d76608907d52560f1cab9fe"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "6ddcfd627a46e5d4af565fe0420c6b1e"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "d04c409a9cfa57274a5c95f16d44be89"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "97601f5f3cb8a0921f67d7a6c7578956"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "52db0854f52ff90925f4ba783b8f8f2b"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "b3a846e926068d1886d4c099817fa5e4"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "634de12cc83249b54717d814d7dc059f"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "e1217741133b78b0f8d8e2d7da45c733"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "08fd3d5fdffc28fa823cdf44cadaf6fc"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "f25621b37ca4d92eceb1b44f74266bf4"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "5e8f0f694c34791c58c6efeade9dc623"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ce4866617242344b6d768e6eef1b872c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Config.html",
    "revision": "2e6147c9d75780145a24373d53061856"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Database.html",
    "revision": "8dde924e1ef3363082ac3cd86675efb8"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "87fa18cb2d521813b2c94b894494121a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Keymap.html",
    "revision": "8a1ae2590bb113f67cf79ef54cab731c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "6b69206cedcfc9a1b95c06956b919f30"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Usage.html",
    "revision": "82f216d0ecf6c830b9e8152d8d255165"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "451d2e0c95772f8ce74c188d5d8526fc"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "c7cc24a8118ff3245baa705bd4ab9bdb"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "ed30ecc0ac912daf3c29b7dd7bc8f2aa"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "57395a24796c13c3e1afa2edc7fc5e1d"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "e557466b85f42364696120af896ca00b"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "0272e308361f79c16edca3f74879a9dc"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "8bcd3599a05456eed6d213a3a6299318"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "2a687e6130a461130e918c154cb89671"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "67adce741c7590a383fca3ffd6458552"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "a9857fe236b9bb6150c17dc73af7d7c3"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "8bbe12e8f0e026ba0d492cc03353b2c4"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "8e563e6726ee8a55ad5aef4f10cc9137"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "b2eb80141bdda30083c8f9d1347fa7f9"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "da4075fccb3205910788cf8722be98f4"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "7171f8d658ed9b49f8563b8a66f8edc7"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "6758a1007cc050233e77dfc3ee532f9f"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "cec3f5168b8c4265bc5ac4c6ca014670"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e23f12813b2e8b66d1bad831e66811b1"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "09b42883c66e03734a74dbfe604455e9"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "aaca4c72e88d1d134594306c6dca6e9f"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "4bdf2e4f4c606dc496316ae901019d1b"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "9caccbc9307b4f7eea33d416811e9bb3"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "2922d720c019c13b616760340ad13d5d"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "356da8c5727333c0906ad7130587e66b"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "1aed02ecd19ec36a31a40ad83d689582"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "ff15d1ce0832cd918d22af4b07246480"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "d5fd093e3b2a3b58d3c26ae42b3496cb"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "79b0e5ca09fa29eade81c20f2530284c"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "d807e09ee97e7d701f2abd3018a01c5b"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "5bde7088209caf69798b5898e195c179"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "5b26ca5888485334b0e5381e3f556c3e"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "35fc2d966a1d9d2421f27fc8f36df1c1"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "722019927eabf58eacda74dfbe713308"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "8490c6f4fcba1c839ae3f6c25a68b729"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "5b22c49ee62e23ed31ca286f640c4804"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "321e0d75a7edb3b29b014f7110c78d6d"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "bc1c845b48613559cbf58b92b7e487b3"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "8aa587c83a59e9caab25b3a703fe0401"
  },
  {
    "url": "favorite/index.html",
    "revision": "364ad9ad4971e2b590f363a693bd438b"
  },
  {
    "url": "index.html",
    "revision": "fa48746456a99df5ca796fafe6a00dfe"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "707ab9ae42134d431e07dd4f38dc6c97"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "7d963e1a80f27aca1e21e346533cb158"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "79e40d78fd2d0a24a87aa61b1a13b030"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "29813afc28f80ed8b31887b800fae48a"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "9b683d36f6c7e2c085524253e9ea2939"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "cdb75826c257c413c5009b14b424c482"
  },
  {
    "url": "note/index.html",
    "revision": "4638734c662b40aa11587bb26b7e96cb"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "06e3f0bb81f81bb7fed98aea41b1f2c5"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "efe74f1cfa7ba520b247a0c5ea473d5b"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "20a87436ec227f762a1f3ef6efe488f0"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "380601458c6506c4bc2ba49303764505"
  },
  {
    "url": "share/index.html",
    "revision": "123dd3d0c1af3c88578e56a18bb0d05f"
  },
  {
    "url": "single/about_me.html",
    "revision": "a9badf69472cd2bc10b98901a9cdc864"
  },
  {
    "url": "single/all_article.html",
    "revision": "5913149fa0552b5b9958758b36ab3cd7"
  },
  {
    "url": "single/welcome.html",
    "revision": "146e768a1a892515d29bf958ee7ba9b8"
  },
  {
    "url": "test/index.html",
    "revision": "26bbb9f925ffd823f49f9e3791a1cf4b"
  },
  {
    "url": "test/test.html",
    "revision": "e5d310f15e644b4f8287cba1b40f828a"
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
