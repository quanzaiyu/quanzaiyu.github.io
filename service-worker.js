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
    "revision": "794bab932329b756f939cc971f52fa46"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "861e122e34a6d5d78014a4716e17f9ee"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "7df1958c43f3e21027146990d361e43e"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "8a3450aba24bef0b1ef8b2d275dfb592"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "efab8d3dba8f5141ff86a2dc9e87e5c0"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "1e855c120bb538b994081be6290c9a00"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "364837ffac8de5edf6024e5d662ed4f6"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "255c6f50d935d8a6844083564b177470"
  },
  {
    "url": "articles/index.html",
    "revision": "17aa87443c98d41762f3414bcc121163"
  },
  {
    "url": "assets/css/0.styles.24fc6e4b.css",
    "revision": "e5026005fd9f2b0a4d5d0ddc59c44131"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6766e46c.js",
    "revision": "08319dd6c4f39024a99671661bdc562c"
  },
  {
    "url": "assets/js/10.cd67ab66.js",
    "revision": "4a3d41aca8e2c1fe1567d8493ed05a63"
  },
  {
    "url": "assets/js/11.0e0c96d4.js",
    "revision": "fd9f55bebebb644893c0404300e9cf12"
  },
  {
    "url": "assets/js/12.77a5272c.js",
    "revision": "3825d1949f46c42a5b924f1701daec0c"
  },
  {
    "url": "assets/js/13.020aa75e.js",
    "revision": "277a087077541774719430ab228f0e6a"
  },
  {
    "url": "assets/js/14.be9684bd.js",
    "revision": "60759f0685a4815d46b93cdf4bfcbf95"
  },
  {
    "url": "assets/js/15.93b15c41.js",
    "revision": "de347eeddbf2f5a9d6d50476d2f3633c"
  },
  {
    "url": "assets/js/2.1e91aadd.js",
    "revision": "d78caea12b8786f415096e67034ecacf"
  },
  {
    "url": "assets/js/5.6aba5c5d.js",
    "revision": "59ef3bb541a8b3676c8c575a05c2c9f0"
  },
  {
    "url": "assets/js/6.95e504f9.js",
    "revision": "d3d9ad81619cb5778105c5f5e02cb2ec"
  },
  {
    "url": "assets/js/7.7f17940d.js",
    "revision": "37f9e72e02c4db40d978b62c0cdd3873"
  },
  {
    "url": "assets/js/8.7018126c.js",
    "revision": "b1a3283ad60a05ebfe2b31d291b752aa"
  },
  {
    "url": "assets/js/9.f938e4d6.js",
    "revision": "e02460aaecbb449008b04948674eb895"
  },
  {
    "url": "assets/js/vendors~docsearch.35071570.js",
    "revision": "5dab2406726b31e8e64d230af372097c"
  },
  {
    "url": "blog/index.html",
    "revision": "058604ea91d261e95419f4f1b731c33e"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "c1f19cf06de9d1b67e50e8ea0ce60b23"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "75f10de2abcaf083cdeec35ef8ba5fb3"
  },
  {
    "url": "books/index.html",
    "revision": "7a161b6ae6fcd9645258431851a285dc"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "e9a8370357cec3945d10186acc5aaa3f"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "a0c5b88ed5fae4c06c58ddfa88689465"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "c5d3945c809e56ad2e0331d295a68965"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "8591b2728dce012aa842599e2e214b46"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "b4a5dbcb0bf07f53de9675d61d21ba70"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "521f079338e5c6a621983302f278b9e1"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "0d5727a6728e8b41bf0d87feb5d09ea0"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "5e388c9770817d1148a142a31e896d42"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "1d944079a53701a685746ac0e856d504"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "e4544c28ee1bf7a69a714336621257d6"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "fece79aa824363b39d47d761c2d8ef0c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "0ca5233b5bcc13cbb68b65773560dd84"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "2b2f89a2c7d93119257dfec14b676304"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "2d38eb30d601f9e7ba5c5343ccdff6b9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "4b6e459dc855f08cdab154893b23b614"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "71a0e012317eb9e6c9113a98d29d5e87"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "75ece8776f22f14b893f202462d0d009"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "040a43056662a2569e6ff91b2b61e388"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "0eb55229324f7e9857eda89c298f65af"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "572c44dba018ebdfd88520fecf5d1ce3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "fd2acce292e0bc22d344d1ebb4bf1124"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "56439d6eefe5f249f7fa2ba05f04b635"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "c68c008766eaa91e847bf0a67fce208d"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "482693905c354e0e09e3bb22dc1a083e"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "f6a015833772d2c56eb8c56833d163d3"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "da877f0163ef415c71f9dccdea342442"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "b629514afef2ab25a37f3ef3b140121c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "1139bf88986910872eacf34b246c0af5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "01051b38b355a91632a78cae9c4d9ce5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "e95a3457650da8949955f9a7914dc573"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "aab5d8c85df6c9d97b7e6b20e33119cf"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "4744664d346db0a23cda8cb0008f569b"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "16129593ffd81da38d8ce8a579e56832"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "aae6f195155aa0b8b3e9e2a1f775bc2c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "90615f1fbe7627b4726758c1ecdb15ef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "5363ffd9b8e86132ee1c2c7d4dd25c5f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "7d7678a6a5b513d22593b51fc2c100ac"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "7fb3f756c4777e76a1abb8c7a2c516d5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "53601d7555fcb1a03a34338706108f05"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "50b83587b2cc010f712c1d6f0c0cdc10"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "0ebbd276fc5a2ba486582472f24cb343"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "4960c08f3aefae689b720854eabf9344"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "4fe9f7fc160aa64466ad3779577fffc1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "736f067f466c21a1216a0efaa97649dd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "3553d7d956ce185498183c51e2cf2a02"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "b84397cdd8b7394369eb2aaadd951bdd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "db29633c83f0130c0aa04ec25c436eca"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "93f07128b166ce1c500532763d13dc6d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "0b88f1e3f3b71e3610453c47931dde73"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "9ebc4b018ffae2053b04390f3b9bbd47"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "334710cb22e7e500bf3e1a9901a62e2f"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "2d3f7033ca9fad5651e8a29c3da5f8a7"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "2e7d024e97174ce9caf1736a5ca9796e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "1857d1d249a789b7f5281bf607890b91"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "6ee4c58b916c5fedbb6ec688da7e13c5"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "495da9423014d71d2efdb2b3a03f6641"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "67af07614038ad6cdbfd5f6a94ee4dbd"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "6342b29587094ece36cf928f78cae5e9"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "6b153700209f84c3621db6fff4c725e1"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "e32a9617b4e3b909b8d54c3c1d0961a1"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "05d5d5ffb8c0592c8853e1b103ad91aa"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "d689852fe36a9478793d14ca9e431f67"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "adb16ee5aed60be436f980447f1411b9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "373681ef3f04b8a5bf369b34811a39bc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "180ba5e62cc70d6fe4a1801e11774935"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "028f815b366aa1f920bd0c21d400e9d2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "fd319ff152da84af6b99efea68f8a283"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "457bcf812bcc794cf4d47d949d79233f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "18df6c906449b0f301e0a155e526006b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "8c39c6ecbb284c741e4c3e7382328332"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "9548f46caa95c38d2074773138e2d0d8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "6d010dd8a91e8eeee45c7bd98a956a92"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "55c8fa2482ad59590ba2f1f640146a0b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "e5159beaf61628470dcbc9b260492449"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "c9da28827b7e0bd51831d8b69df485ed"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "8407d808e2a926a80e4a55cf483c353e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "9c00d885b45e802f60b9f0e297ffd9c7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "6ac5f513579b5ac6bc6fac92b6263461"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "3fe9d951900a22df2df600d8ba4c83f8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "28bc96df5bf8b963a8a8bd291b1e997b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "38869f068f9162a6d12915e696645043"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "c3bfc835d98eb4b487702e1b93fa9a61"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "46fbfa6ba216c0556251111cd201a0c8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "bdd6ec9f1e3877691e5fa903e625c571"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "bade21641cd36b6ad55029c4099fb527"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "905866e668e780dbe6cf383bcda8ac1d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "e2039c92f9ee5e54d344b460670f11ef"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "f64bf1a98dd2097835a135e88e843bf3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "aa412f970a66afea9d0172d5460b61a6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "59374f47085d3c9fff8747265bc73ad5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "10a929a326b3048c74bc1baa1b440485"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "8569a69136f0052cedf96759cb0214ce"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "47e8ddf575295dad001e6551c96e5214"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "ab7beaafe89226469e810329d590dc52"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "88a4106c3f3ea3145ef410abd4fc7e64"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "c07339ffd41d403d81b889e96a91dbac"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "7eafe71688a0d0a14748cb37ac4b8af4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "705c6f3b8b4c2dd13dda1bb9d7b1e7d0"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "95609fd60b91a06dfa042fc9e3b1ba32"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "8a8d29faef2b74487a7069f1616b990f"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "214b6cdcd8a38d22f1deac4a8661db13"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "404226d0aed9463d91f60b4c6dc395bb"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "5753afd51e701452dc030814194183ea"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "e6f7db51f946323cbeeca8415c771063"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "f0e6d367114d410f8706ee21229b69da"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "2777165b1046bec124bc49745cf7cb75"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "ea7fc076895973536ded9615962c09cb"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "73bd8d2929d34f038092c103a103c708"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "b5e8ec5e2e5e16bf4a00e88a4b9835b2"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "38ec1366714702d205a3402d42f2b4c2"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "a8d145a85f3087cfa204532a289dd563"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "c195f9c030b0caf2bbaa0f860b9433f0"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "c62e8b6fd29d653507bd702647507013"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "da0a7ebb996cfa4f68cb7e851fdb3550"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "3a299ba3d737dac19fa99a88d03edc18"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "8aae4c54ca35313d94761d6188f22187"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "2872af4c63a8349a678cd6dc9796d62b"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "d29eeef4b2415653064a3ca0dfe3e3b3"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "3edb5fcd927d5392cf86a3e78ffac0c2"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "de79b251f463f867f5105ad3279c001e"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "c34f1f80105e20d016adb60ed0f9732f"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "f12996215de424ac1bb54d2aced1a399"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "894c83083a70831d63198048d226a99a"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "9d51ef9fd0f3d279f4545bbe98d3e3ae"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "f72dc23907f23decf99e955c160ae712"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "6a3b1d485c7c2f86cde4e37e56ce7fe2"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "36d1666dcc43c09018e9ee380803def4"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8b3667ce93f1280305a0279350830098"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "ea9b4662207967d392ad47750daeec26"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "b952f9ba71189b2b2152efe292c03f37"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "559554d828078699e9a07a966dcfb8bf"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "9fc8d88ce3064e91e0261005db38dc9a"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "bda9f70768cb268b0342bc223fb79fc8"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "c903e62af95f2473aa92f29bd22d8607"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "57e4fa36f1dc33703ed33b2a33d24ed0"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "083800efa3b79506a22d1649ed595b45"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "0ff760439015007b7b5398c5b3b16758"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "3afe190b592874bff9624a52365879a1"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "acef318bbff5007c6897d7e226d8f181"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "aa1da46a6edea6c1e4dff886aad79ed2"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "3349bc52033f3d13cd3c90b38320d2ac"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "7be738260619ca4206e780de039c8390"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "003f4fce27b0632509a18101b57386f8"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "afce4180c8c6a768ea4352e55ca6f62c"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "77f851723f7b638393276e072daff5df"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "9c34cc643b55c262c3a5ab1c8fe5c7ea"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "07e8279270dd4554d18725bef6b2a623"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "06804e7fdf1812ece54b3f69f5fcb178"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "cde5076f1cae3d467c33001f94720566"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "d516f6c7005cb038fbe1be7f1f80aecf"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "1bd365bceddbc86ed746d5d748080897"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "e8e584d81135b6db428094ea35b9b639"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "566ef403f627a88fa8554754be30bf00"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "2ab0e408661f9a9b3684a272b6146cd9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "e8fc9b4245401f4317737eb3ccdb58cf"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "6c5a1f6e2a5e7c5380637512c6b4a00a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "ec270836268b2c42354594f664da5f21"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "7d42ce5e40f2e36367a98e6af9393183"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1daacbb4e213e0a7c77a2878cde751cd"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "663059129ed9c9a470e4325dff75b0d6"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "4d460dec175ccfe1c8d7a1cc48280d42"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "203151bd6b5415e0cf03fa83f1da92c5"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "b6fece39f5fbf9f7eed91281d8c8ad06"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "54d70dff02154824b9f26a1b785d52b9"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "2ee7a2afe21affe3650574854c5ea82c"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "7f3243cc8988354a96fb4b5ad8c86651"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "f4f9a5960703e9a58947a48d8da75436"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "85c3a9140606a196326dd325b627f0b1"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "d66db1873b0cbbb3879a4e470fb7501e"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "29727f9178a883fa5b5e994f4ffc12bf"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "a19f148604d05148287fe5e00f1776af"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "3f1b19b8e7a9e61bf490da03a1995f32"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "6d8ef138efb410e41a40f8898a18ca64"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "bbd7a33b1b2cff18b25d6c1239a7bd0b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "77acf5c741952a81df23ab0c88ab92f8"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "90df18ed4a7147e43234abe686f76ff3"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "5660ef6083cea74e6c9c04c2db69aece"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "6b84f541295455b2413438959cef3ba8"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "e144ed275f68fdfbc627af89dc38c02e"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "4d26efebbc17006abf3a82b06ca75484"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "ed82e31c0771d85c92594772baf909e2"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "8e4ede7c9b4024a5306eaac7fa110d2a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "0feba1561f8f344ee4d111993fe1501a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "96936601dffb094f65d3eb2c92a7d823"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "87c2bce475bd81a2aaa7f9014483ae96"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "c111d2d6156fc84bb68ef616ad922ab4"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "1a2c297b6a4932d1532d0ad0d92ad54b"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "db1d7db82fd8988a091d5e91b3466933"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "45c102495ab3ebbb36199cbaeed7341c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "0f09abc4a25af30a18fa1950c96af53b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "cec5ab7a27b324dbeff071358e660c2f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "604bdf78a19b80370b80c42282b534f1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "dd86f04229cb117f4694ae7db1686cd8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "8798b66e3ee9f29b28afdeebd2be614c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "685ac7883b26a4b43103643ad6236244"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "f3fa3be73a21bcb8967af337c7546f32"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "72af5474ee670007d1e7f7e5888177f1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "f9dfe566999265ac87f3cc42a485fc62"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "5643a7bed77b48c146f0b3b60ae57614"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "915272d80803c5c5b105717a4292fe06"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "25edab1462bbaf4d68a75af09c794243"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "5dd8f6e8c676e304ea4d37d783d214be"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "f962f94c852789ebca46e1abde2b5982"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "5c32434be94cca29d9443c284eb9a7ea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "5c47020c6c1799cab47275c052d42a88"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "ea7c299e33fd092104faf036bf94b5e5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "00ba15e75baf0f1a0c9b276b23b85df4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "ddc3b8a079b44ddf477f4d2c97ca6622"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "9256f843e2c80ced5657e9829f81a38a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "86ffdd966f6b64e597b626fd3197f887"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "dfab9eb290eb0dd5c6b87f99e1278128"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "d39b4f85e99750f9780138aaf4489a02"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "8e287d7db8cc519fd116549ed7596628"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "c76bb13aaa2ccb8de7a8520d21af5e36"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "266de47bfa9f45eb770ce7ece90cea61"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "affeb31f85dd9cc269821a20b8207766"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "c171538090a9ce1ad559f8e1e6866135"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "9d66fa53a662d49fa9ad2d7a823ae79c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "4aa513f9d6abdcd71422210a985bae67"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "b7a256ed6e26190d8d87a8ab76be846e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "2bd2808b6fcd8a030da9b3900890fdb7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "ed81fa2f9554df516757dc5af453b7c2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "00b20543c8e1dc5bc2621e6f48c823b0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "a9aa12face03986e8522497d81cab228"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "7f4cf3589c56dad580de945da1239ce5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "c31cf87a2d436f580e40a9870d7bb929"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "f0ce25beb1a42f6542c1809ca61b1324"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "18792bd66ad3083bee0e9e3407ec3332"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "120cae58737bd2e05dd8e4c88605da19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "ca67cf33131ad0d1e03493716090a4ab"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "d6a652e0599754534a542e60044392bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "dd61c7e58b143fd8aca0846ee4d068b6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "8b8fef0ca294fa874ca7426df191326b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "d63466935fb2ca75827f0eccfb533401"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "0d02c66a7a631b1d33649296920470ea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "b6b84e78d0ca6a8123115ef0689a2c5f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "503bd757d15041680d53476fc744150f"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "d689ae5c962f3e7dfa2c610ea0039d18"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "8b7fe3b6e2e97158931d3e8282f22fb8"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "9441a532e337ed8a7987db235c3f0a86"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "a6faa61ad9d76952f0ef61c663d78af2"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "1b0a65e1c7829473d92b6c4cae3be726"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "af45f22b0dfbae51f80bf42fa36250dc"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "acabe18e7320c84d89b793e145b70d19"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "d25d21606d7fbeed9c53325893fc3437"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "8b248636c04163f9a3d46a2c499f024b"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "18e4122c0ed88a91dd4d484334959f67"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "f9bbdf9be0f2d10c4fcc0ad46b19f7b8"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "251ee0bfc7e9d42e03026fec5d4c6065"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "70d95ad17e2a902364f056d2622a8f91"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "5fea8a6b94ebe241ec151f51b93d6fe2"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "7a1fafccc37055947b3cd6a6860bb7d5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "229ad566b5eae8fbe634c66ffabdad30"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "7cf094648f110d2c7e172d7a02134387"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "f5428ca7de05a55dbe9fd9fba990326b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "3e984f95879cc194fff361f38c97bb0b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "c0c7d1603735a4e05f4e5167ffbe1337"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "ded5e98993f2b9e7769fb47087b97d23"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "080f733363ed2daef03886d084631c6d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "336cbe873ab5bff9658d56e11fbb7a95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "e1f8ebe4bd740cf9e28445b508447500"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "408b0d35243100aabcf408a96c6a2ecd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "cf6507dc146ebd53e58e3379160886bb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "82d8c7cbadbf10f5e9aeae073737b543"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "2f9ae95d8e088f92e86d80615fc8cc56"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "1237ba97d2a44ae25d892649982607a6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "83d675e821cbf3972dc923222e38f4b3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "5a25b8f064ffbd71e4410f8229bf6bb3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "38d27d7f29b161a374045551f61290ef"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "4f246c34aac26681e49ec974b86f95a0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "2d554faef5aef0f980320c42ca27fe95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "750783d4eed8230075e2bd422c0b655f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "b5e33191bffc27c6d7a56fae6a401ccb"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "d3c180a3ad3598ea4cd2083e39098f5e"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "4a826b6b868ac762383026ddd2ecee68"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "a0fd4e392cb9c20ae2728f8b1445795d"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "9052dc75326e868b2202761cfa8f0f6a"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "37f32966fc538876c87823a99a4d120f"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "ab44ad235248dd3cf1fba87f8b271818"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "5fb09d039636c4346688950010e643db"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "e5ab499266afe05ce36767b0cf72a618"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "c03d33d69bb87f1e45be19d8334461aa"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "ebe857939ef5752e081e17ae7b6cf4a7"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "7cfb68641e0f67748bf2166bf1796aa2"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "97c13a7c50ad973386fac269d5fc73ae"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "318b556d1578f07f682ba092898fbe74"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "60d94a5de7159a83a820b41210877ed9"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "80512bdd8f47221cc1038fee4012c77b"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "4557740cc8100ec52f541517bf9ec529"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "bcf1cf74306c5b2866311316574e3fdf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "ec5042e672db5fb77929e925b099427a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "a81e659c25acee31d246b79a4ec1a138"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "8718f533ab4ec7038939f1f26d5173c6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "7bcf32f09eb1cc272d1aebf6edb01e14"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "9a6261c88ca5c43642cc803012dac837"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "317929fdc9893d0bc9445d687d73a1ef"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "81860e05c1ab59ea8f3174880ccd02b4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "35be1e19b908cc2da89c30a0a57353d1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "7b3bb4f3401f8f9356f2e4491e338371"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "5c8c4fbc90725f2ca3db602f581638b2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "e95a7285628d0680941853809b3fb417"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "46da1c60a2f87ff7b6849c9adbfd43e6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "d3cb4bd37003dffd7da5e384a78ed851"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "b9285e2358e0be5d53ab2e78b19a7486"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "bb53a4e09db482e204fa404b41494192"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "418ed2855e0a50bd875f4fee7a690f36"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "176be129e249d1000d5526d68ada9ace"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "6ae6175d318db687588571318aecd24c"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "abadb05a70e46cf9fc5f8bc50774563e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "3ef580583fe62d5a9ae71a6b6574cb3a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "f1ac8737ba5a80ba4839deb3960926f6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "533be3996480a274307c8d748cfb52e9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "405808a5c82f3c4b790d942944846a5d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "fd2a9b13ccffd3cd32e54fc81e0557b5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "d11152e8c3608c9938319731df0ca320"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "4093310a511a407a540ffe5652dfc79e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "1af64941a2adf6c64db2d7d6b7205ebe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "667c09d358fad6de497baa969ef45e37"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "49319daa01a029b4e61a1e11d0b3e18b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "13842170f795de4305a631eff8b6720f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "fcc9209b5bd3a3e371cc2b8d04afdd7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "3edc0b01f6b3f7f9646e375f3acd4751"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "00af19aad7ee22acecaaebc6b1651895"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "309564c1dc5ad640fe0e1b454fbbf4f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "2c2b734324431d2d18d79bd367805af5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "bca416c71fc9f10095b79947ee5148b5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "d9eb6d968f25ef3d52eee7c58b8c577d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "9d189470c4946f13f84b113cde3f8934"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "5168b4a92fd2b7410b0f22fe786f70da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "a5730868b92b1a0c4a10b4cf12519b80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "f8fe3aa8d2003d1b38d4023006f74832"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "22a6016676b0aa5674b9fdb69fc873c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "a24ca0595cc38af5541f09d9494991ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "f1655dddbc1a93bbaa2d85a196651638"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "f52f5a7eee0fde3a860787ad150c9076"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "0a9efd5f3d02004480e296a2357cab42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "92aa0515a09e9081571cbd4a5421af38"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "06c0a948894f2c3a8cc4071d8b1853dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "52f82aa8dde6fe0caaac9d44a550859c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "a1dd12175900324c1f93ef874b711152"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "75ca9156de7274b563f7f7a31f507186"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "572412da20ba952a105fabd01c31a31f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "043191fe4391f926825a39db97dbd824"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "a2db4e5d0e51aa4d8464d872b47d3323"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "aeb50e16b6a2b0c2c27fd4695e00f5da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "585f4e690abf1c031bd66a90a839935f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "a2c3fa8aeaceec4a52c0246a4927b5d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "000661585e7d366a28543eb0485ee90a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "2300ff1db2beb3e09d52a219b2b2ea8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "e423d34517d1d80b41827b964350186c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "1f37ac622d7d5a175a7f3c2c04b7d2ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "d3d1df9ab6e4e13144fa3f1154ce40ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "e07f16fae23a2d4e1ab3e48b8124e48c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "9fb728ad9813e70cc85c033609547508"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "5e7bed8064dca834d9a4a81706dba0a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "60d2263530e08773ce0d4d7a17f9e7bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "0d283f105e52ccea8f3b8e92e1c165a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "3621456c3af2af9b9b1eabfcef439639"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "2f70c2921c543d77a7c1cc8cd99d71b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "161e41774d963f2c0864d18abcf4c879"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "03b3ea463cbeb2a54e1c3fd89dbbfa30"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "31f4bd01dceb4945d76a0d6b48b04bef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "34b03822734fc9dc94acaeb20f5d6883"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "14fad59bdf3fa9aa86f2172cb2574bea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "d8d4d368aa2aa4f076529b140d57a857"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "793b084efbca01b445344cd0e16219d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "fcb99eceb5c8ad978fd12d7ee9541b53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "8a40f287c414bdda0f2686f0e53cd0eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "d47c0a73ba2eb10cce9db0ff311f7b12"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "3e9679cd76f722cf80151fc9eb6bc41f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "708d1d89d25bce5c826630d8a2b081bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "b7e6e1e3fcb6d2bc4772ba7dd426e34c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "e85ea52412f9b185ef40db0fa80c5fe3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "77f75c1b6efc89ec6d907d95e483588a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "901e908a440b6ef4efb2c08194201101"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "13019ffdaa25e951886aec662e93ad98"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "8e30901d7654cebba619a2e619567703"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "a84f7b3bea01df1fae2e9d661a7a5f81"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "1c2188eae9e4a469bd9374f00849bd0d"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "9857261e4394c2bdcfba4ca81e2efc59"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "8e09eeff650360fe1958ddd8939b7551"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "a9e58b7a6e01746d9f3707cfc50008f9"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ce6ae11ffdc86636f3242ef6886be763"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "1549ddd9bd2c72672ef15e514ff794e6"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "b75ab6eb056ee28e4c6ac88b76f10dd7"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "864eb488e422148e5cb19087b6785281"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "1da13a75e195e4a2c2748dce6757d26b"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "62cfb9410dd954c3a02368cf559088ca"
  },
  {
    "url": "categories/index.html",
    "revision": "8d0a9948b92262b23dcf2bc6454d4662"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "aeeff8798187a60a6c262599e839ae02"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "663574cbf15a32d4e5e3baea58677000"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "3254c4c27d7d7c6a426771d636ddd214"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "ecada03add52f510cd3fdfc42a52f524"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "2bbfbef1d33d220fabc83fd8fca3300f"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "a49ee84c4f3bdb0199dbee7c6edaf7a3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9c6de140b70bc9aa787307c740ed4dd2"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "77c8249c1f06083d4073abd85fe30ffb"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "85f913000ab907b7eead13ed3d778483"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "1193059dcc0bdd46c23c9ef34adab459"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "23bc55e8bbbbf2d7a7f6772b63bb5165"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "9668ecaed9d091cbe56deccfc79620d2"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "3be83f6f674cfd09b1eb6ef5ebccf843"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "f81d7c475941bb4e082a9e59b459b9cc"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "2cab4aff566f0511b93a12ff61a73199"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "ea04976b64574ca7d229142ec4a31466"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "81d7d9228e43fb3c4bacb8db70b507cf"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "ea9b21cecb8177ee05696e9733f57679"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "863f01fbcb75fbf333256e2877d0643d"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "66b19ba5e460d2112c0c396238dd2269"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "d62e8e4b4bd16e743688c44d268f18bc"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "adc6bf50b92ccb7219a64a68bd7c6e4f"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "ff35491fecd771cd037608bed749354d"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "9725bdf1c94517afb5e8dcb1c39d391c"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "122ebdaa13494b91865fc384498e4225"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "1ccc2e60c982ec2957e4bf208402fce6"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "e55d27bd42ad6ed3a5feebb44f045e9f"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "7e2d0bcf21f751473e05d301011a4faa"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "194e3766dd1f449b700b9dc814bc4710"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "c8d8c484c1cc41fec08272669789f421"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "a9724a9db31f6e6a343f2cb3bef0d325"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "c76fd3e37a20be650c493cbb77c27eb4"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "d05df4e68bde741343a8af911cce1ebb"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a354e4a425028439058f7a0d589a98ef"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "9fe6124b14b5f490a0987775cf93c8bf"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "947f28a2648cec86b8d03cc7d8749414"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "85394e463aac22b4adf01b69b1ac2a8f"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "fea119e52800b4dda92fdbaa6b865192"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "01c0d840849a660837bb043476beee97"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "cc72a47a946eb694e386f3b89803c927"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "227055a5b93f776b09a9ee4b77ae1b14"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "65fbb9cc159f5662147ca26332155521"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "8e2e79005c629b2ac05d41e366584d59"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "cc5209f6fbd27fb2ea54f5335ba76860"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "56082df3753fdc5cab51c43f29753001"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "87d454f83117d47c69dac1916388bcb1"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "75e436d27949831385659eb754bf3be7"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "1825f867ae36aa233e40efa6ce54d4ed"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "d626f0fa534eea320a0b04455b2d590f"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "d1e06ad7c8c0cd66a1c427d3fb21401d"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "aad8b730c57b420d0eca0527bc2b5a1b"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "47d484a6ac50575297998899b7a0c03f"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "9b05311893edafdff03b523f39cb0ab5"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "7d5ff3ceb31a32ce6826bde12b30f2bb"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "007c597b584c83760a4d5ffd9db7e067"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "6e6b665678a045bf862ded3567b1554b"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "6791a9665e25645d2f646b7effd02577"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "3ba161b91840bfce36b7338abe9214a1"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "7c620ffda068a0abded9cd0ae103bb5a"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "a022aacafc8bc00fe60609ccf8be1e52"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "a5b898ac971236f7b7c4c6604d9ddc70"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "04af68577212b63af69ee11304be0237"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "959dfc4e4f0cbc985a13f1cb457735eb"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "6d9f59f293391adbbaedbc8d12e30440"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "43aa80908011c6741af2b421af1da077"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "b8c66b5e36eafebd214273ec908e1055"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "8611aeb6db25e38df1cdd8718e0de302"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "6edf9f70542d20c228350452d5697b6f"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "abb0038b27b3d7a6d9851b7dd0dae866"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "d7cfb26c6522346696df0e8346223fc1"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "f2fde991b6d02a1fe34baf18499ae1e6"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "a7f827548e5430904944c165967b7020"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "163e4887c3e12541d1f5bb45584dac69"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "85b51d52a816fcb1a32cd92429f48d69"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "b5930d6cee47a74e81197d78739c7910"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "8b27b039e14ab85be67e41c31b44174c"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "c9cca263d8376cb91834c0584b84f7a1"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "fa43c406e24c68fc6cf3256d88de2f05"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "42c0b338b2868693699d82245525624b"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "3188b103856d049b16ea3fbb317ccd0b"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "48979bc7a8901dd9aafa1d16f69db6f7"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "a309730d694c8822cc62745bddf05b59"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "b8c29081a5e10af9bbe0a2ee2e0ec583"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "503ad1aa4d3c196efe50e432db53ad51"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "0744a8f41beec8a7e97d060dc4b1fa46"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "f10540d0b02013bbe295412b306d6f2d"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "cc8a04606d67de7a48b16a1ba86f3f41"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "48dab21eea58a51f027151600f7bb446"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "53e7078016c4601263833a6f3b59e901"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "6a3ac4d01530bb6711ba54d0e20f94d2"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "c9db331d75ba8d61f7b6023d5ad8305e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "ee33a6d15378870e6eeecc18d69d12dd"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "1ecfc45177c81986711253e0a4ebd926"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "055f9594231584ed9abf6730fd044c25"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "ba9d8e894dfb11743710d19680536eb7"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "fd01d1f7f52fc4cb57b52fa61b502a19"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "fd6910254b21c5c66d4363a63673b6f2"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "856123f0fc3b63e34772a70ef260a0b9"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "d2318b57075fbe7d932cfccaaa2e9389"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "4ad2d41d5ca9cfd9a3283b4ae2d51cce"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "989b9a64e7a3f2ec3da838c42e112e5a"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "bbc6c65be73eafe17364b94933250125"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "7e49ba07429d7a1b8488cd6a9344f4de"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "9e72689d1f66c9a143210ac5fc2a9e22"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "9057ea8c3272cbc231f0c574f544465d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "ebcadb40f32f09d8ea3b2e4b46d52c26"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e8a6cf6b9825c5aaff446af2dd1e58fe"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "f40077d0b11f07134cc96df55f156860"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "cbb7a9bde14a291322ea6002de2b9a0c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2cdd9c3724069012733f65ebdf0849c4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "c970b87e55b3a5f790b9f55a6710dd50"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "b916cb868a34bc68d29656bd77d8d15c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "f07ac838a2d78e35336c52d1323d28dc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "bd455bca909c2f8f48ff4c640022e192"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "c77109bb881ba900273e5d5582dc8cb3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "f76e13e1ba82452cd7e1c5b0eb009af9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "dadbaac921f353e5421cf5f6aa11ebd0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "6c6e098dff5ca4ed38df29886e47f1e7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "ef38a3da749e1d65f861dead16030385"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "8a365d4a59707b9c1b6cb677403bb7d0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "c371ae807498f5ac8dc31701c09dedb8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "ec897f5fc9b9da874ecbce13e7bb0fca"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "357fa27f0e0a8888f23e077359731150"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "e717d3eff95225142288ab24d4d0e28a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "ef0569c86d41da6ba5bec030257637c2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "5096298e1d4ab46d0f7860f3bdae6280"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "03870c8ecd9fba26c135238b3a2e94bc"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "90f66cd9251de1f8a184d19913af6571"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "b79990cf4fca456d98c461c4d16c5975"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "8fd2553d366a3d0c979a83b400ee68cf"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "c5460410fce4b492b813f5b3f7306f85"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "5ab17361752a072bd9a3700a4616333c"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "51499a9084ce1a37a97f28ef5dc80690"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "63b5942e20a22fceeab14499fb0fe834"
  },
  {
    "url": "categories/os/index.html",
    "revision": "7616fafd8aa08ca92b7f3faf8cf199b4"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "4d3db36ed608f68da5e7b674682aadc4"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "2b832d0f83a1d39a44e917105b23f56a"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "8e51001436c17a3a223e5ef155947dc9"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "9b464016258d2f60e886616f90ca4c8f"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "96cd300a2e808993cd1e0764054ef99d"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "7852764c47486aa6fcc987a6be3f5ef8"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "6c74384f5140693e6e4bdb610571e366"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "0ee1d352c54e3f353b4df0ff0ee7e664"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "b260c6d1f735980d9efd38c7c20f311d"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "032bda74de6e355ad82c968c424b407c"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "9dce8200ddfa3da9d7137d45fdcd456b"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "0d19927c1856b14a0e571cae9bd924a6"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "193a0db6732e603dc127abd0d637e3a4"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "edb6e2e823f76a8cdc9e01d8e8fe8af7"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "2421c012a28a0b1e145c0ff5003df3cf"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "57cb46c132c736f2c870270816a1bfd7"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "1bdb668d1fe26c2e20f878ccbb4b19b9"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "826fd65dc1b723833bb81760ea26dacc"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "e594c4b37b2655859503f3172c4d91ee"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "5e350b66898ef636128af6270f3e6016"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "59840435e2c674d4f7b90fec9436cefc"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "90462f63f9513988bbc9ee8d6a119f81"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "4689d6f2d4340aa72cfd6aa8ed57b315"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "86f2d00bbaf8ec9b0e01646bcf1353e6"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "14b4b5ecb3e82a4acd5e1c81e9452ca2"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "c4d71d9721b35559722f4acb1ad0fb87"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "e0a685fdbec8c7e495f0d711e1b6df5a"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "6887fdcae9b25de5636cfea999fcdcae"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "06d8236606f1bb3240b5d4b5a2d712fb"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "ffed47af4943c254d4f96f9f3aab11bc"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "ee4a81aa29ce28611aec3229c786cc9a"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "dec16253486b449f795e644805e92317"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "27fac89d9d680f78848ad51051862943"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "209e30952e378077eb648009133bf962"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "ba6eb3f7dd601d2dd0d096f3cad4848e"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "f94406950395d1884ad7c316507300d3"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "3c3657c91189f7b250cdaaa3c4a53a84"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f6dc3030988431f31f49af789c99cff9"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "54e809defefa7615bdd2f658c93cb4ce"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "6e4863f884de0e00d1f6ed532816c5ca"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "1d48a2f1925e8df583cf3d0fd84c62b2"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "6716369f8c2df47051099b7488a65268"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "e928d557761e2a76dcd845e2739bde3f"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "8cac941e7d26db9a6f9feb7c25b48d10"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "db4b4971a2c40973c4b9c2679cdbe0ca"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "3ce7baf3dd3eea65abadeca884fda691"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "8fbe8565e1a6c1b8608ff4ac622b2b3e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "f88b081ba0f98d87897ecf207fcab8d4"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "d10cb59de82158f3044e6b8bf03963df"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "0d7e36dbf42e4f0fbee7163cd18ce002"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "970821a34f359089a8e94505584d4e4a"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "cb0cbead540d50911eccffe04950dc46"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "9c3c8c35ab39dc5b786f977b3399dd8a"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "349ad73514a318589c06d399a4807e4c"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "d5d0a4a97025ff509c5c233791b0d717"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "7574c57e3a11d9ad43606c42186979c5"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "5e548eee513b0031f902734e05e74917"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "a61b90e437121e6987d657a213aed58b"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "2e7f870de0b47de4cb3a83c7b3c9be23"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "a3d200ad0b3dd4a5626b1ab07e81e998"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "db3e3ff3d22abec9723f1e0269433fb3"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "a846d44be970e6814b766e2b120f2d9b"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "3455e9f77ff0b6761b8f2d4cd1fe43f1"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "612982d43069e448f0b3da05742338cc"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "eae2e25f13f71c0e6cf416ede74d3e64"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "fde6b091b00fa4b6ff05c31ccafab61f"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "20a1dbd98a536168fca08fa943ced5b8"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "8c85bec903836f5052656d463a274d09"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "6ec01a6684f4cadafc46f7322db862d2"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "56e85eccf331091ee5faa07ed79d0b1c"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "e5963a1a3d9cd1a50fb8f528d052f124"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "81959ead54622574317e501cd7036751"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "9fee8886b8c4409851d7181bfe94e792"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "4f5116f06f60e05d65541e6ae40c1ffc"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "2a256851e2de271b980b1178ae3354c2"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "c27c1751c0aee0b3a1be8714e3bed346"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "ac17e71052d746145ee51c666270d721"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "d6ad55e9d088a6ebf89cfa6f2ee88b7d"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "5eb4486b54a55d47e0cb13ab311e8d61"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "34f1b0ab69e51be24dcf3ff5c0e74a02"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "782bf7c73fba63336323907b05d620ff"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "4810a287de05e1493df06a994e4778a5"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "7340716eadbeb32c8ff6c43549135a99"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "a29c120643d1400a95e8eac550f6d87b"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "b7a6eba1928a29385af60e8fe9852b5b"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "fbc8d0aa654b2a35b29e14aa3398711f"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "b3e4facd33fc68d61d9d04d781ec8c43"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "271440e3e553ff15d90d78ee9a1c2cbe"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "615a739750f5b86c7a1bda4366b2d04b"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "6765fdd612f59af8efc37a9c4358f2f0"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "9895ed7e8ed5ebb4e823268c0779bf24"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "121507441e41b8dbc11b0338d8440b44"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "40848c4f27470b08d9d23d2206528c6a"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "fb0a210ab391647bd4d5e6a387d86ad6"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "87d64da458faf013bf3a0f197551cef2"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "ee01030d668930454629b60e9c41472f"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "745aad22d26e6f7d3ce75e98f8ba3ab4"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "efa4b6289ab9642fb5a45d0644ac3084"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "f1460484f1d1932a6203e8381a65b8d4"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "b241cdb9885eb7062129f291beadd156"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "9fa45d3c3dd57c63b2202e0ca1d50bc9"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "0a243648b725cac171f57b3a618b1a29"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "aa15e56a88d223c5c5027bdc27e1519e"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "a5f870b231f29f4102c35131aae2bf49"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "6798e378348849df3181a3ca938f8165"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "110fe51b2454d41d9bf1238b35e20b6c"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "1e2677ea095d6884d531be9a0b50a1bb"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "34c406ae5df9195aad387bb15b6a6d77"
  },
  {
    "url": "categories/php/index.html",
    "revision": "dd5974c41e36c5ea1854e02dafef1b2b"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "045bc9a6cb47a3872ee47893a6c277d0"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "2d8f0a49aa2c305b3eb86dc04ffdfddf"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "32c067606207095fdf58198275ea6729"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "5e5e77332dee4cc7431691a2428b94d7"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "487d520d6b08db386e71183182dab6ea"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "053e6887983cddb0a8e5d81d7745ea2c"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "0e5d0966de6647c31839b622eb90a9fb"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "a755c5959535126c50fb3786dd75c44d"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "a8db2c3bb8c57a4feed0b304dd1dd1f9"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "3c59c22774afd2481c4d55891af5a08e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "1e1f559b4612f07d349896a9f81ce5a4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "95b60d4822a38c6c939873ff0877fc78"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "0864ae31c5d54cddb2556bebfa254759"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "b6e719a651e3c9d07640e3cf40e8be18"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "71331dc9e035970da1784827be540dfe"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "beaa72be0b88c269b55775563181a4a6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "41122e4a02e062d3a1157acaa087f5f0"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "5a86cba9b5e13a41012a70c3f05bc2ac"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "4eca9d4690954e1b2857afee8114d05f"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "d61b04e5541d15e0f2785ba706d7d5e8"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "63b3b8ebc9f57922d44ce6e4cbe9c31f"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "5cf430ccb6278f7b6d3bf4d419106cca"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "8494cbc18ff8ae2a1291b674313393cf"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "f51e420648d34aba224e231320b9c1a2"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "2785e23c9de6dfc5787f90fb6c2fc4f4"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "91f28eace1bc8a17a6684348dc7216cd"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "86c71f2e3bfa01b951c943cc5185c144"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "9ea1a34bf3961aaf7e448154bf6098d1"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "2bdd7b5be566bdbd80d50f5c80ac7f8e"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "9f06694d85c44f07d907c7a309b6ed30"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "82124fbc8e4305253476e1d3fe47b6dd"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "b20c6c59fac95498898537a00d704afe"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "4493276a562f5c23d75268db74387745"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "1ec4f225b81dcf82cd5aee63df3d0afe"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "d980209cbee8757edb067ebd75cfcfc9"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "5278099ab9caa8a61bcba9350d4512b0"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "bdba4f7fc9793c455c7c7a36d4f646eb"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "889e7133cdd493263110f08cd34ad446"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "dcf2ff1fbfc523a89af33b5c61cf6c72"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "4bde63eafafe176fd8b4a36f113007ac"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "3d55c280aa2bcb8d42c55f7a3fa3f6ff"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "8b9cd2ef8241c0faf16d672625feeffa"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "3e18203b026e36a77dad1be200cdff07"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "2830f062e5f6550c92f81c8075055704"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "d7123aaba692986e9585db2aba4f4933"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "f22fe4c90e6a826b320e71766162935a"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "8aa505d9eb62f35ebb2d507275bc2006"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "d22ae915f1241c8f09cf5b676c792fd0"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "565355c77c79b6faf0d7ef52561716b0"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "eea14f45dd9332d7f3f95bf36bee4356"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "a994d2eae553651ea3d752752d1ea2cd"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "f4b28c392393e33a6d0ded5be694f39b"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "cc98c32406cfe8c06ae93d2146c1bafe"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "04a60661c3b18dee7bf870ada0673ab7"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "ef156be140f77742aabea8543c8f6f2f"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "412b20f22f1b3d2f075e60689dd20154"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "9e8a3be6541996226cbcab783039ef84"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "a3877bf5c8401625abf614e2c1a04f16"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "f9a9cfac57b039854de7f6740d457b73"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "bef4c44dec2b95283a71cedfc5b5bf73"
  },
  {
    "url": "categories/python/index.html",
    "revision": "30423e5451ef22ed4efdafeb7ab6bbb9"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "6539aa10c076e101233318db6384d23d"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "ff09c395d1e40416398cf435bec3268e"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "f973e4c164ba7124ebe2dcc40828b2dd"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "8ec8fb9c20f57d0718f0575b5e671d28"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "da3e36b015b76e21fa1da454ad9e4c46"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "8583e3c05753bddb1b667d65738a6a10"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "6e4dfdac6d33ce643cf4e36c258164b9"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "67f51e3baa4a1d1af78227e05810451a"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "9388c40b06aa1192719770a9fd989b73"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "15b0f60bb61b28724b8d45f2f89c4b74"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "1559224caf201c839144e1048132abcd"
  },
  {
    "url": "categories/system/index.html",
    "revision": "a4a7c865b62e88e53be20922f9bc99f8"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "9b6c4d5864e1aa0cf182901d45f78243"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "7f4490b1f90f6a3bcd35ea0d1db87974"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "f9d2a8930426d8f9e148ed3f9e01744a"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "139e25444a4da4538c32f5134971cae4"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "ee753667cb98b4ec2e9c2b8efa178817"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "7de1223e0916c1181501334fa2a37683"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "5319337f32f328ad8983941091561fb1"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "f8cf232a3f286c04dc6b2e7fc437fee7"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "25384ae4364e79e62b3af1dac556c7f2"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "53422591c16f5c55ecf97b2a166a4d35"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "90c3226814a0b37fdea4c3ef4ec5bb5d"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "48e0ed82cbf375d5cc2942c461292710"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "a19a6372b3be8d1634d284b4d763ab66"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "96494b59aea0d876ee76d422809b7760"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "85a70d88ddb9053884f692db6e6121e6"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "a777861e9d2af5a66786c105859aee27"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "6cd490bf02020a7ca72ab0d7f7b9cf99"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "96e04435b69fd3e9bebee7120ad3f490"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "61465ef88011bedf8325bbc3bb85aace"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "be75e15800366a399a5d5c592fe82b99"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "1867df9015aaf63533326260dfa652c9"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "40ac36b7feadba5d8ba793c851f8a0e6"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "15884087ef22b2d35141119a2dbd997f"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "b456c47dd423c04630b9acc26c87c367"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "2dbb2d08017a5e435dd94e790527a81b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "902e8ba03d80db4a1e12996fe52daa7a"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "30c5ead0b0615926ecda51c103bc9fb5"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "38cd69431bdb44f9398b9eef595603f2"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "ea8fe647d6b4af03a43f6d98912fefd7"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "144f746be98a86692abe8a147b66f766"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "27d3d1a447cff7d58925b6a7ab9f2813"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "9ef0f27a80b7419fde1d93c34db14c06"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "e53aca931617fa632418f48d3b4d7f7d"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "749b05f28ff4114678118536237390d2"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "51fb9248585d46c3a276b4b5e5dc02eb"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "d69250f58796525cf49cac554f86ff23"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "a237309d931896238553a3af7311a10a"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "e91aa48774fa717965bb1a1878fd83c0"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "29a818ab8678d2964b624bae9614a289"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "8349583473cda8e29ec0d838fd26d37c"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "e16005a0c4e1213bdd0831bd278232b5"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "0aa6cbf1e1bc0465f78df4f5715b8cb6"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "85da5c8ab7b799453c26e956ce39c093"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "d89fa3bd2df06060d630c058e3978b35"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "67c17fefdb7b7a94177519748e692572"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "1f769110a428f37fe529dedd03c35b34"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "f62ce1060ecba93d0effed77620c2cd3"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "fe15f89b3abf1c7a056380861f37c9c0"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "a2ec2232e01bcf3f81beec40343b27b0"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "89086ff8dbb4ee28a817abcead21f262"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "ef05995a0c5f0a786f68488ed90eb6f6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "9c11506888fb7c3d659e796336c58f09"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "f5a5c438968963bcbb8a152516bc6968"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "e8b58d5f3f3de463909dc596bafa16c0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "7d3b53161978dff46ec25da6154dd571"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "fe07d6651a89691400a2960b0d0880de"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "835af0fa5785db7511bf4dc9c4695364"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "8bad10aa75fb844641378e219dc564c6"
  },
  {
    "url": "favorite/index.html",
    "revision": "d1578b677efe709afc97b1985c8dd9e5"
  },
  {
    "url": "index.html",
    "revision": "95b95c2e1caec443e2206727de84cb0c"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "4ad74687cb846ab1f700dd3eb8b65736"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "4a99db9c00bcba28fbab40bdf3d93826"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "cdb429fde1a4734f1b93838ea10173e6"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b1819899bf6fd370d9a354113d71cbc9"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "9c6de3d85fd82fea516ac546c6b45976"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "ca0f90507891e064e4fb1e3dc7b4faef"
  },
  {
    "url": "note/index.html",
    "revision": "4802737a8b024e903cc8a313563ca829"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "2fe5dc264c8818c0ff4573c9e47c0a43"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "318f67e5ba758d933601ea083adeaa7b"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "a4b2503b516c0f56d4e6354a30c195f5"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "c5209d9f3c4b04ca62558d07bb2b92df"
  },
  {
    "url": "share/index.html",
    "revision": "9f357ce42d2d6f29d60a13f7700a8ec7"
  },
  {
    "url": "single/about_me.html",
    "revision": "c5bf0a20bba8511f917c5959a97e1585"
  },
  {
    "url": "single/all_article.html",
    "revision": "b4877db85a76584cc8339bf954b969fe"
  },
  {
    "url": "single/welcome.html",
    "revision": "267e396073095927552e431f0700356c"
  },
  {
    "url": "test/index.html",
    "revision": "ec9014a9a3d85d0e9fca8edd0f7ede15"
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
