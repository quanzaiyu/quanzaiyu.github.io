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
    "revision": "21824c8d5a590793432311833f3d9466"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "844c3b2de4ceb42510149a185fc6aa85"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "57984ea084887021040b9cc473c52ee3"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "b634e1f1401c570273e16c7a9b36f87d"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "0df7ecb2ec396b3b2769ab7cccfe1612"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "68ea9e3efd8ad3225e1048141f0050f1"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "d1914fb9122795d62440a5989b5191ab"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "40a6403f4e7d62f08517fa1c91e0f0c8"
  },
  {
    "url": "articles/index.html",
    "revision": "171fad6ac67c3d83eb4b93300be0956f"
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
    "revision": "0368b4562f61c7d10857283a1ad69f18"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "29e48f755b7042af04fc748a5c9180ad"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "2e1b42f297b9a6da400fe44408137d86"
  },
  {
    "url": "books/index.html",
    "revision": "b13ea46f783cd7ec6db7810ae07a8f6e"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "bd2aea2673b1384c25d0da9878059b21"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "641413c5330f6e4adb7ecdf782b40f23"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "d00c7da1b81f09c26d181a3b094b4ed2"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "7546c6525ac3c4a08beb8916ab110dfd"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "26ad576b2060e47bea4afa09505a2937"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "a8f427cc66704d34842eaa3118dc93ff"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "f4557c5a472dda980465a7ad7df46544"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "83e40631fb9fe3996c6543217764e6c7"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "fcea7015e4b98f2e7637f472afa8c9e3"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "48a46d4173508c5af3a368aafaa4ab17"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "eb7a3c5b22438d4a671ae4f142ef276d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "7d15a98659995969077b701c2bf03c62"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "0eb5abb8e5ac4e74cf25735c814fc731"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "cba7b07c38382e0bf46ffe33c1330f86"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "25423fb49a7a71b56ee242a736d8621d"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "35c9a21cc52f2475604db81a8ee748bc"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "17fbbec2b5558306faacf56b9c5266e7"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "4143e4d5b27b326f5fad29ed3860f70c"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "b326f879923911c32a990911976fa248"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "85ca4558c18c5051c5d7835168b54fd8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "124c3b9b1d002ce15ea92c4c683aef58"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "57d7fc862f42e200b4e162105c9cef14"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "627b2c95c7be0784b7913c11ab3e51f7"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "2810e31178730d15d9416c6100464ed8"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "813ff1df4a3fb01721c7888db0fd61ad"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "e2715c60b785c796aabaee165a927b0d"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "32ed87d3a7e3812293e2cfb0e2e2c3c0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "a1cde1f6e25c6e8e733b9510015072c3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "7b63ad03b43da87235e6c33d004c4355"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "9ed2a0860adbbc06c2898c7645f5217e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "979155a93f88404ffe997d81aa160860"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "03ed08598101d77cfb06ade584a196f4"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "560c07fe2d3ed485c1a219ca2225cc2c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "668b5045b05bb54275aca1874a33ba28"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "7b3f4bed1167ccf61b4817c58e79a145"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "6ef6d3b7f1b18a2aecf6dffb27cc7da1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "b46a21eb4e4d41b787e67fab038c12ba"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "dad51458e390d2f6bae60dc0f18f9569"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "bc194afd7743d04054fc915aa7b8eca4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "531b828463cfdd507da747237603a88a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "f2b5af996cea7e7c806f3039bffc6b07"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "96a95cfb216fcda77ba392579b17435e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "e1b65a3dfec8834fba36742e5e4467a1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "4ff2188299c4e465e1ca4666a03bc1e0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "fd1b2e1fdc6c8640f96083c35241a0c0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "2e6eeb7800f84196a506e1f08ffbfafd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "d91ea639b8acfcab4b6ae44407f59ba1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "93827b3784e7c289e8aecb5ca1b70830"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "786bbd72d0d9b7aa2e60164365914276"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "ea3213864619f0112afd584166fc430b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "844e28143f15211247bdb601d8f3ba4b"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "008178e49eecb5ab0b193baf2e3f5b8a"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "1afaee429200428f5fbdd8aced689a61"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "206eff3bb7a86965b074d014a6af23c4"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "a668ce129b060bb0930d6cc1c493de69"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "0c6c046bcd207103fa91b299e8333059"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "4cfacd39b95ad77f777621a48b7d7f25"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "96bc3268c21f88c11ce257ab651597d0"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "10b7e1e39532a6426f3cede2330e7f76"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "4b13d9125196259ca6f64502cf03f510"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "76bafd97f65a6705ecdca540b00c4b67"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "a6fe2d048a8bf173355df29f561efaec"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "634ac23a7da45f34e350197dea77aae5"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "cf30fdf354f2bd255a96f0a525c76e4e"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "8ac0cfe126ba050ccb1e74a26e1e9775"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "df017013eedb88ec6a02e8e3a7cffb77"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "7f609856312ec5100d1a2c9ff8df61df"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "8dccf4a08c6465c8ad086659a29753b3"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0475f2611f1f05773166d46bdd1b793e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "43b7dc1d2fe7c40fc7d3f88befd7bf1a"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "e61929c17afcd8e5b3ad8c4e926255dd"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "a55a9110209666aebf6a2076c1ae8ed8"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "2ee6bb470d601a9842934876b7b68077"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "c466856d20055e4b1c678edb635925ed"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "2b9a0ecf2e9c97bcbb0a157b44976598"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "bc669bf2f8aa05d46ee5992f87bb5587"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "c2e7f3faa7533ee209399779561a445e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "753ed9eef2111ec66c5afe6aac651dac"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "c8fe33606ec8577ee2460d5751814f2d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "ed3de67eabbb6eea2f8edc0b9f52f8e0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "03dad8f7af8ebd57d0aaf34caf01a3de"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "9768eab8db45a4279ae3ae4aa1a279b4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "9824c306c93ca5cc515066d80f8034e6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "169249b08b98d711cded862637dae26c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "3b4dbe97f29555cf6f19b942753e2b60"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c200f4949fb90acd45245866f674dc57"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "5be831d01c2240275db4df68b258e468"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "e142783ac012c97b01d0a80b89ebb12b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "0118fe15a4c538b2831af5879e7d532a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "58b8a316efb9fb1bb420bb706e66fed1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "edd58475c59e15cffc573975d1b169c6"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "04df4feed6ae1dd0667f4b8688b451bc"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "84858510aa6e1b0ccad2ad9b58c4f2ba"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "c9bb7dd1d64219c0bcaccd7f23371f3e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "0d853b927d64baaacc2c8b1fddb40861"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "5ad0849d90905a27e5548ca48dbb2b24"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "f9f3015d1c3cab1b2cb03403e4636a43"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "b858236187dce053b3d4959e9c7404c3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "b5ff788392a35e4ea98dd75b18cf7f8e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "04afdc4e6c44eabc9952906a8144b6e9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "4540a1f8c6a510fe0e99aea9ef9af96d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "f6e70d6d9993a6a35150c57bdaf53abf"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "3fa91042e5def3ce9ba914e4c59220c2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "51e2b4ef34bcb17af273e5f4efc7bc4f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "e2b6a4674455af49e84e321d73b92481"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "993acbdfac03a28a02416e33bb7eeebb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "d9b8d3ee81d630b2bd86eabdb4bbc3de"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "911143c271f4f8f67a0d4a8105c131ae"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "cb58bb47e1c19d6a71af685ebbe4dbc3"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "4b76269c1e4e9d8873bd73916767ef49"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "3c0b233582b493a4dc133d26322f8094"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "67cbf98cd76df658319561be01b035da"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "c401fe464addaadd934ed8e21043b020"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "1c53a3e022702dcd26fc94337bea2646"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "5a8c7b2ae31f5e3d3a0cdaab18cdb062"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "25c8f3701d7a6ee48ce8c5553c89405f"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "72c863f6098544a350f8a8350b80dbb6"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "fca3868c504e5fdfd6f94111dd0edf74"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "e1b0bd4a52e6e9faddc764dba903e5a5"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "f6ae80470bf30bd33ec0618785a4751e"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "51e7862c6232a01ab83abf6af361da52"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "f0afca5d60a8c64d720942059816f85a"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c50f2b8182873eae049fcca1258ff1a8"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "342895fdd53f33366acdde0ed30fc532"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "a9f48939ee8b5f75314cba6880647cf7"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "61ff89b0595b28ced2c3494950e31963"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "312af14a6bc03276ac449e5347207647"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "e86b0dca5575b2b24e191dead323cd23"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "363e92b3d6887ff1d326ebb941f0a49b"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "c7d5779a0ffb134affc23437c5c800ee"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "6e4ef6b0dc7eb33e6dec2d59f41ecab0"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "198cf7406945ddacf42253128e0bab0d"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "5b502abf60818575f25fe7b234c7f43c"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "140c53c0ab885e50b94fd8361c9006d0"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "84a889bbac64a59f126d9e294708fc2b"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "2db40d18a62db202229a55c957ce7144"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "e750bdf3cb8a314d44aa79ad2863d875"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "388ef8e5fa4fefdee95c93d4d74ac818"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "0ec4be40e6518e936af3295c57ae15da"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "29542dc6dcd8bedae58a68149b2ccde2"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "2db2d22a8fa820a42851dd9dcf3781ee"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "a9e261443b1f56e15792482857c9fae2"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "ab9a306e03d1ac0934e7fa37415c7054"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "f3ca30de81412d24ae3d3ec18f66dda9"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "23ada3ece8b569f3c3bebb3ab6ebc412"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "c719c817725cc5c62db7d1f0f287877a"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "2cd9baa81f056bde2c0818a0459145a9"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "1ac7a960cbf2c06f990bdb58b15d4cb0"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "aafee037a2ac8cb155ca909e689152f5"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "84d4f12eb2933fe0dcbfa11660533a46"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "e568c95c07800696e7accb0a30335d5f"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a605d4e78c70207729240e744f50c089"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "67a47a8d80ce8088f37e256f71e2d541"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "57f16acc4a0ef9397181b2b93ed8752c"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "eae83d95636f599a55909144bc7cf7e3"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "3c232ee1abed198fcb9929457cc99440"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "05ce662b4dc2f0b329f4a3ca4cf89562"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "dde33ca6feb8f5f349a9ff6de60605ec"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "c7a3a3e6795584c265f711dbd9e044bf"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "aa0e6ad6a8766a057e06027b0e6a3734"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "c1cd04f174e38d434827765b45fe2457"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "932ec089447e32ad66a88523d7b7458d"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "82a10001d541c52d76043d601cac180d"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "9f4547d73e82990f59b82eb2186590de"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "42d701454ee708c4c713c25bb00628c9"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "3791ef5217c7bf70cafa0e0bf7742325"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "eb8b86a8bc00dda1b4471bd87cee5e7a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "ecc4f1bc3830f43de60a8c7fe28f987e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "5baf79f1eca4560e6c6d2b6e91db0fec"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "0bb326c5f2265c0b4cc0817c9386aab1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "6ff23bcf966e98aab3bd119c639f786f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "1a681b2a0ee8a8e4d19d56b11aff47e4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "6f48c34a225cce01accdd42cf969f159"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "e123cd950b2359dc2ff033fcecc2d06e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "1e525f573158c05a558cf3c1dbd4d13e"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "14e880173694205fba6c502945f5e6ac"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "c7ca32c2b9b2d1414f1ed96fdc6b95b4"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "76d272e5c8cd06891720831f9c395083"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "336a4c1ad8c3dab429ba442424a51125"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "c336207e05eb7b2e283659760852ef4f"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "3e9889614a78fb143f9ac133ca7badac"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "918062e04d5b424e3d46205bb62dd9d5"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "31b3ce623e8ff26a3328dce09ed8f462"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "44b3e9b488db3fe1978b69f9ec2f66d5"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "5552341217581c7d0659bca82d6b238c"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "e72748c922498ee0c649d02f9e20d05c"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "d0d3384668a60786922853c0e9ed8b46"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "3f5c07537fc0c0d5b0fce70f26bb5008"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e27348a1ba06229a108fbaf44a3b4105"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "4269ae14114013825f9f668e7d76c95c"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "e11f3bf06e3c65e529ce1c5a63741042"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "57d2c9d4ddbe0481b57e6a7f14bf149c"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "6eab22ab25acc009d5d5b73c8d3450b8"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "70772f2e944272553b4de8db4abfe775"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "147fdfa2aad40b19749586d56dc9384d"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "532c1cd469f55bdadabb889929356f5f"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "1e72d7df19b409387e00483722f7df28"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "2ba0b51b83a0fff78c3194620705fa86"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "59e19c8734091b689ef0bf491dcc43f3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "fd7419cfeeecfc2e669dba4f48829a98"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "0f48852519fd394c04baa37c33578548"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "21df2262eddc57b72aca0f3bc3eea576"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "a7f1dcb34ada5157794b7f3ebe74eb03"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "84432ffcf2511904f33d46fedefc7c97"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "f6f0a43ff056e71a7975837b4e140ea4"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "4216b86b81439a90e5296c37ed0fc069"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "d75dedb394c1de74fe330c9290087b54"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "1f0c74da8daacd650cdcf4abf820173e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "76bf33405340c6ee8b00bc2620ac837b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "68dfa9e6e0f67a1c247480d94cfc3803"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "e6a2587214afd15556178bfcab8c9e78"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "fb6617ac84ea1f634e94e4ccf2cc778e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "c899a5bf2367b6be6d506c93670492fc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "d7112aa51218fd616985451fc7ef6f10"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "47bc4db88c41717d9ebd1a25d478e52b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "57eefd31657016f7bd4c54768b5fac4d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "f6ebe448642c9dc70ce8b0e4eb6c953f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "61eced26708c6443d5073ed59a25545c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "4a5339e78082ae7b20635889eefa6a04"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "a65aae83d5f914eaad6612437a007d56"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "d4dcd848bf9096f008bfea0261f1b5ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "a354824b4d38623cd5a6be2678c0baaf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "e6573d0120b4409320b6c7c38b6d4972"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "52d23e24621591c32ce106e64c78fc96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "de1a906bc9dbf7c11b13d1b6f5c9c5e8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "67fa6f0687f9464df62b840d1ef6f44e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "00c7af9ea0b668591fda769dcc96b0e4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "99a0163d632d1dada8440c91d94219b9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "7b92e6ca29c3a121d6ef8997831aefdd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "2e8bdbe1c7f182749abd625062d42ec7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "92d2182f9909bc83c1c74345d52ec813"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "65ac78052c47d9f9c6bbeece244923f1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "9d6c861eadeb243e82aed7666e4328b0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "04f7be0243f1293c7fe63776bcccc69a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "290e52aa00ec9c03629747602655249b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "19d351f5ed88190531d0d8acd66c31f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "b2d2cb1b28c0f5a3c4fb030dd9e8ce58"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "e78418e711bdca38cda494f777cdc1cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "7c0ec1ce05179b690899b6166f3da0d6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "0ed94d1844c1fac4e9c06fb799988769"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "2701ab8fdc481ab84d3f0d6da9bcbb9c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "8de2bb22164bcdd6447a98132ce357bc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "7a6797b68d7928d2942102ac44c02e79"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "00ef121ca6360555cdc5f10c7262a5e1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "6eb860b4d18fa8f0e31d04cc94780c9e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "d8cb13a7f16b4b44737ce3b96ca938de"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "05d011a759ee4503e31dff25d8301a89"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "ce78df03eca348f1c2f720b949f87fa6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "402f8a71f26bd9deffd1df9caab66eb1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "d57a964e1a61c685d2ad5596dc696ce6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "c0c730708477ad7646703b9296f2f65a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "2ea3e816a6588a4f673f9e5a2c1efff2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "5d09e9fac83758b68cfc3ad9ba2ec741"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "a940c7f5cf1a845d58540de61f5c7ce1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "de1a44dd34e7a0c1239322d4e4beb643"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "5cdcfed0933f8ad1168ca8f213c9bfe6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "83299607180a7b7d0e6d7dcb7db90cab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "13d5e816a4f095bded572673d4dfae2f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "f89503277c469d471c8d1a90e290607d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "bd700d606454d7c862154c8077c0a11a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "fcf7ac478f2869cc75c40a37d4686bcf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "31dbf10f69a0ed04353656482f003ba7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "eec6f2ebe9a7b32d2490b9434536152a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "4ea999d502a74148493f2972cf920a1d"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "59cf76c5abbc3ba3b6ef3e8cace0e528"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "cb356b2002c72d0f3f6489030c9a6e32"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "4c3a64d89453eb0b9dbfaeb1010ae39a"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c76f6b492e76edd1ab7f6c1cadc04afe"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "a75955acdf0a21a424c9efa30a3616a1"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "3fb4a94468fe824ddb06862c4e1f69c3"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "34699c51375cdaf1fd76d5a6f04bc201"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "4eb7c6334b57419c3ae91d4b496e5ecc"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "2cd70c5fd781c3e52b0b9e480404cec2"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "34e4b71aa08f20d1cb16e3a00eb98846"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "0803d25fbd7304d815a091a021d164b7"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7bf7fc6ca679216d33f56dd52089176c"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "b7c40ed02a1535fdd2e69693e9b37214"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "c0c07a1d1fb2b8475b4a9d5b12844adc"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4228f87a150376cdb65463bfab36e4f5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "2bf6e48ec7abc1810163896ddf7c2041"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "38949c29276428f2acad515de6452092"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "dde92f960b0578704ecf785281dac5c0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "36c82eeec0511dc64d61bfe79ee99244"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "9cc1d8c8f6557818f73ed4cbf86f6dc0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "098b1026d4c141f13f0806223efb6135"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "750e159e682b77cac80b7279ef799efc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "228689c31883854f1d24e2bea3eeb1e5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "6216529be63f9a7717c10a45aa8812b2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "d3f31ea56c09582e7886f524d48987e2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "829e192e56efd88b0649586f3880d184"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "2133ebc281bb82621389c20fe7feaf3f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "2878fd6172aea7585e5a01ed3e540f65"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "d9fd2b1ce0e16b76589f4fd2fc2b838e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "b7441309787d23bb491333c49dd16375"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "3fd3e61b3153420773fa934cdfe3310d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "d910cdfa12c5d5893c7aa740fac748e3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "bd922fe5e8ccb6da0f96a290f2960baf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "bf5b88a2de5688a60606de95eae7cef1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "a5c3cadb057482c5420f5271c9cea519"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "4c05b3dafca3027964b9363a92a55824"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "b154bbbc2391146d034a662d149165ee"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "30bdca628717034c683d865fd48726b6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "661fc4fbc7a57a03fd7f871a57c1cf4e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "8f3a524092caab33b3c27749cfc88af3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "7a52fd235deb2a3f246a79c4bd09531e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "8d7bf39cff3a28f0de4d238829165b2d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "bacb497e65108a82af814a69586ced10"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "5ebe9cdba0fba1d91ab47abea9e33486"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "a7fe2213b7d00c6328454f7c1cb4d853"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "fafc511a0069d0072892517be3ea76c4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "19c185d71ae87c1b650e0d28028307ab"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "55c2eea22d340f2982f8b33775a7a422"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "8f41d18414987c9f2e7b95ddb3ddcb1a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "ba804bf4f49bff171bcdcbeb719ab458"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "dcf4e9871aeb88ea4e3b1b62bcae292e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "7bf79bff80c1130b1af75803fd78c9eb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "6dde6028a7872b140a314860db8ab1df"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "f5a1a05d34cf652304758b7a55195c1c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "cd107ebcb97b2c55e22b46a54a529276"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "dcf3867748e4ee819974c7ef8ac90f6f"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "d2059cfc425fee6c54c32ed4b006fcff"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "af0befefc94d7d652a68cfb05ccb8457"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "0cac3efe7c0798a65c760f7df1181c7a"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "f3c8e6a82cb0df1aca95df7d7f3141af"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "5db615c21a4ab49228442dc82e503b03"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "bb37b2ca741b0405d26688156303985d"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "601b60403bdadcbb8b56f82510539806"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "f0c6b7b8530dcbd4fd9a6a71d3d8fa1a"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "68c9dc468fd54f8c7a046c599f31c329"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "075d39068e3f648e2162f31139af9018"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "764c8eaa8988111fbc6c4972728d3715"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "5429ee175d19c84edc096c171b805684"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "5a85c5b88063fccb0b8f512ce8903bbf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "b0236db1490502d7916113583e90a839"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "f8e8c47555e1ba09ea27143362b10aef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "51af7e2e6b2487758964e4c78acf7a3d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "7cad4b2cd6dda031d6ec26a20c93ce32"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "0a401a6bfd675fa6ff50b780d70080c3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "2e5cef35d088e28a2da5cdb773602270"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "74de5b865bb152a8748956378212b377"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "7fe5ed54740a6ba6c3040fc721f22055"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "da57a66310f6bbd6b050e13d04fd53e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "69f6b03eb8de1539250f97958244ed4c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "df71b5f4fb9ffe6691aad0ac5366f6b8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "2b862e75939fecc09fac9c75ad1a0ae6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "7a96bd5f2bb3815bb31a43227aa15b39"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "7c3534df75c9808b2ad2f270b148ec60"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "7b9b61acb4cb2b217aa7ff76a6c1ba96"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "d455fd7aa97cb2e2851356a21df17c45"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "b48ca8401b41127c0d101544cf98f745"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "05b63027402e89669a6cfd91d619d5db"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "8a0b553846ba557bb4a0dca32dea502b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "d4660535035cfa53a5b0dc616328a8ed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "3b808ee0fcfc4141eba344a5fbc78af9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "fff1c367279dc11ee341ba8e88a6c7c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "839686992853cd3e9643356988c33916"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "1fd93ca5a71008839b2262db87a5bb09"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "c4aa71aaefd3b4f7e925af62b872f6dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "ab9e1b1c5474bba03f0b01c87cb048b1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "ce640e9301cf38e4c7995ecf3eed93f2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "d2af0defda779eeb20830b188c51b186"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "21fb5249a0329be719f5b667560d6a59"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "01c81d30aebfb96d331c60eef4b0c1b2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "fd108220478cdb3302573f556c8e40bd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "05313b5be7a7bf61de096d2127344403"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "155e8357edcf82b19263265584458630"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "abd903b537e94c94f2777ba7ad2ed23d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "a5d9c975f989f9e217db375eb369deab"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "d95eb4174cd7e893339b1a796f9e699f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "0a1a09e91a075894a3911224be989146"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "c2441b746fc5fc7342c9a3c4561b235e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "7cab83efab78a3cfbde13e0df034dc96"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "ab54af04521edf553674dab6ed1d25e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "9fcd8f002e82378584cc8e369ba1f1f5"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "50bcb28d226e85a99805f9b05c891955"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "56b7ace3c1aa25d605e9d8c3dfed3bbd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "afa2d054be951f7d1606d0cccfdf6890"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "c9c9a470c9567c2a247357692cb7dfab"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "06c073f78dcc439fe6685eb7b708dd48"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "36bf04ba3b1840817c61fee7f121d821"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "fb566e9dc2a0a6fe03b97ef155f1835c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "9a2580b5c197cd94d7fcac819ab93adb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "e22fac3e41d556f4451bf855b43db3eb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "bb45a105853bde31bc6c4482d7e727a1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "a9ebd6fd0f10cfb5babc10df4762b169"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "672f4fe679bacebc0bb68f04e9b45eb0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "42b8a9e3f23cd98349bbde09c5a9fbb4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "38b359f2304c3ccc176fcff887b6381c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "6c96bb9ce433711fcc357a6718326034"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "9efdda44e529cf015e2f56fb0cc012ec"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "b6313725d304eac73051a7faa917b94e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "5a8689b585f5cfeeb6af9d6e70334158"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "93568db120cf609d3355d4ed837323e7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "15191db8d5c5ddab5f93b7f8ffed1069"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "635ddc96407aff7d4fd7d42fc0690e8d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "927592f95efd3f8c1c7a7e7b01f6bf65"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "a98ec241db654de113b427bae79e2dee"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "aa49e17ae81387bf3bac6473cfaf1513"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "13b4694ab4dbeb4044058f65ccd12a6e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "edff737e77786f775f1a28a517c82920"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "aae69c25a9f797fe990e6c7887ab187f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "21d417ce5e2044826547a00ad1ad8a42"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "a61485ddb50c1a9518d2038e7462d1b9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "87ddbb6118204e4f813598d79ab75883"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "9b1838a6c0b42583c02c9f58066b59c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "64f81097b31f9e2528118e1041cdba95"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "37f55313cca73fb61ff85f74742d3390"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "3653235c210ff158896b7bfbe84ffb83"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "22b519920ef84ee8f006d8aaef2262e9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "ab62cb629f0c9786d4a95441d8be0d44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "271b856de165c38b24ed971f7f529ba2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "61ae89278b48fa5829aeb845e9855220"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "57339a2c9acf7109c8fe7d6f7ba42555"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "f38cebc683fdf6ad337ccb57be99ae6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "76550382cb5fff1070ebd19bd4dd565d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "0959a91a3c37269eeb5cd7b5bf35806d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "e26e364d307482c91defd37aec68abe4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0501591f17e5802a2518eafbabdd0f91"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "5dfcfbd23eb60a4432ceff2a8f263ab7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "5971b6334daaf14bc95c8ea8d152bfb7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "317c006f3477c87c941114f5953f9b0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "a501237e1594e1108270cf98cd3cc401"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "cd323014009146d4fb8d150776dbb59e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "1c26c69b956991f798ee0f3777f75c72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "576e25e678283420180e0c5eaedba960"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "27dd9aa72fa7d3cd88c3bf49987cffbb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "72087245d3647b9b293429c1ad0fb64d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "62e0a9e81592cfcdb8ddb07e33fb7dca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "387a1d8eff42b3b664ee9fc11d89c48c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "afe3fd2596e1655f0c6d33d201818719"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "9e1eed3258c87ffd54851b57f6c7a99e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "763f56740bf09d7a0dc2bd955d9ab775"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "b136a16ed3286985b0167a9893dd8b23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "69db2ab5c8a4d6049f8b8f8eb0d8649d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "ac85777adbdad61d1086f1c1e951bc93"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "3c81d027764f3af38c5c23331ff63aac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "327af102304338b9b83dc748236ef9f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "6d5514a81570458076c5c7925b1b7ed6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "d9f5fbe2a8a5a699dd733f50514d0234"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "5e4bb19e6130caae4f79a31c475c14cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "c33a81ffcc11c404df726ad0a199b34c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "1b2d5d0d168b23dc1a7152cf0d88288e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "aff2beb63cbb02c4a8ba62b41983e992"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "9604964512f03a4a949bcdc46dc38a6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "c4d753d0de68d69b0ab6453a7bb58ad1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "a53c12e612fc0b8e7f5f5f3a391159d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "08470624ef17004c4a8931ebcc3139b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "fe84a635b30d4bb7e49ad63a0808ad0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "9891a69066cfd875da53a558bf4a44ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "cf8a932d6a45af61b1b47ba8144dd805"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "9e066ee30fb1e8f1c19792bcae3b2220"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "fc7c0934ab61896ee9255b409dd9cf14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "c5542d09fa1f6377455ca1c6f0f8190f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "75632cf75b1c630b5c57a51c26048c6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "e034b5fa2ed91291f44a65e4adce9d43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "c4da68ea21eae86b55a7ae347b238750"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "a43b1d0e557175004378122a2df7ed3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "b014b61c4ba2997c3dcbca5524ad9016"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "571c3f62bcf8d84a7fa085de194d8ef2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "8cf448af9f222804e0d692dbcc9b1e80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "e06d7f4881ced0c49a6552ed8615b5a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "55ef30ca9390f401beb9c6504bdb01c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "e483bab32e218012deb4fb6df05a6faa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "1922fa331d928947e191fa6848c0a506"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "84e72c5b2e0c0d1528ad88bf54175786"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "0b2b1443fd1e859f430a480b9fd92fb6"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "852ac6575f998e0c2a28945ba29c0183"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "6e9fec7143be1b2825eeb79e500c27ef"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "fdaddbf7554cd31e8a5d9dbdec88ffff"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "c8ae986772d455939c8200e46024534a"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "01ab839b2e9fd6f603fad94c5d62be9a"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "09ddce1746fceda1d29478533c74310b"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "32ea3d31c21c1d7d791c0402678cbce9"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "606328695466f64859cc1f49b30357d3"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "b89284377e160a89d74d90157139eb56"
  },
  {
    "url": "categories/index.html",
    "revision": "eb8c51a611be5b9c32c7cca7084d681e"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "f29a4a72f494f559e13948917ec6eae1"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "adb7dfb9be75c655b1e0363226134168"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "f15571a5cf8ae2cc16389ac1f883b246"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "40712e6ef2fcb2a25fd8d88b1545142b"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "a8095e23657453406011e393d955243a"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "3b0f2eaa9dd08764135ae967cbbdfb89"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "3cd5234417d30720aff0b9ef2fbedd44"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "510c8b0fd59675bdcc800c54ad68811e"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "388d151ea838fe8187bafb449567608f"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "5f9668f8f6d220c58d9d0996173bb562"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "c7973db6766f75914775af82254b3021"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "bcbdcea15e280c1d286741c130d06fff"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "2111ce47a34c8ab590ae060a38f36eed"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "f4cd5127accf810d8cfd27bf286230a7"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "ceac92ee086fd1469b626da5dd4771dc"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "d1531c849e0942a95daccf4a0463bf88"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "813ad39a6edd5b7724bf7b7ed4f11195"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "f00e0ae003ed2de489d7674dc55381b5"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "84662704f8dba2b811ed581638f18061"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "414a89c86a7ee9d04cb2b9fcf841b4f0"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "50bc95827a6bbdae0cf9df4e7d52e87b"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "5ca26f6a768173bb786ef2ace59092d3"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "b6c4c30dc4237cc4b8070d568cbaa5f8"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "ced6ca608f46a9663b79a8a97aa8f3e9"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "4bc8bdf9924878253c18bc9904267d97"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "48c1e6a8c1bbdc31fc8626a8ed5725c5"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "32ffe9f7c5972ab302a39a302c75ce73"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "409c2c116f29e3b7f4a1fe1516c58126"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "443069a59e0ccdf96a193727213ad11d"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "055123b6e9abeb7d0baa544abc64de28"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "570e150f9e32edc1231c9c5d88807812"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "e1b7f0cd8a17436d3b83ad298468ff6b"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "0d9fea2a8e7c79ce28e796b72b686774"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "9afea631682342a3dbb390af023305f3"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "1c24d451d2b851fce13de54c66fda697"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "d8a1f3678529b76fc434302d837b49dd"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "19a4b55a4f9607891966715dbddf6261"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "1b4bbba65a5b65d990a2305d207cf345"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "01b49d3e0b27de421c755d11b2156802"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "2677e5b059fd00830c6f7e7317b0aee9"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "613197434bdf537a9bdac751a454aa81"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "21f8ec97d6f1f43f8483cc07abe962f4"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "4a827c83f7d87c8c5634f666c85912f4"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "8d0ad3bf924208359c6733923b699a10"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "de8af520676091c6d2a28279e60dbde2"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "4e853e22cac155136aa3b3d0fad862fd"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "c4105dfac1e26b4cdb36fadb343f11bd"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "2f3c7b6e68f2ec6ef5642fdd3d6a2e83"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "66ea098c527e7c845ad7f0602624b0a2"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "b7f7b7990f0faed92598efa7c4d06654"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "76b6432b92f0fab7e55f62f374f61941"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "463629979c937fde0a4b62fe64d186be"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "e465aa5c89faaa20b6c11caeb2206d7c"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "f8d6d1dfc572080a191f10d62b5b70b6"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "cf73124fbdd1d97ad471669bc505b6d7"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "608f2aac42ec26b2d09d858c402ceadf"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "d00030bf14fa6f7fe1781aa5cd9cb5ef"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "cfe94bfc24cf0ed2307ab462968fddd5"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "d7f6d6445999013002b694a745ac4c36"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "ff7274f60f9858798eae9bcc383b4530"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "66428205d1862236d0d5c9f8149fd614"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "a71906020f60758d58067441c7d1af2c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "00dcb4dfa7f8a0f2575aeda783c35a35"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "c54f24e8e160c2daad62f4798d0926b7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "6147863f27d26f7a2caa6690f8fafee1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "7cba0b8bba0559efa643db5f0d8f64f3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "01ffddc6c63e1791b555afe1d98e83c9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "0ec218ae15210274ff9fda22e9b0ee22"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "cdcf3905b80a118f60efe53090385235"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "6ea00fa754140d974470edec61b77be2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "92a2c9e17e62fb1b97d87cacb160ad3b"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "0a1036b498d71a41a014e3b98395c5a5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "8559f0ff4f5690034a7a427fb980968a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "96badecff5ccea6a4664907b4dc7ee77"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "d21a9d623da3d977116d960c460d7e18"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "870c319c990175ae33fc7414e163bd23"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "522997941faf00081cff533cf68cb443"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "f80fe009054ce24ac7df5e850c4194f8"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "9179e0bce57933fbdef1720057b1ecd0"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "01c661993737dd03091310f875866969"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "6d6a53759461d11a66961eeb6e8e071f"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "3afafe28461a765c88a8f5ffaa103583"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "f596108213e3e9ca28f816fc01246cf2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "5d86099523afecc073c8136b99499baa"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "dad88ff1aa8ab3a9e3565f2fed7d7992"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "5585915d7326a3dd415f1b51f35415cc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "22ffcd918c5573c616e96f8299def1b1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "d6d4391c88cace2543663b3607169801"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "d7d5629d0cec9a788bd1bcb7eb25517a"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "5bc62e7bf287058ebfd7ed1c79e38c41"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "aca0ab03b96c85ca797d6c2fd688cd54"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "65c94935887059c138aac350bce03af0"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "8f136386600b7e8ec41ab05dc3f08851"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "55c7018f917c71525df32e9cfb1574c4"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "2d96c0b24bb1be9a72d5adb5953ec881"
  },
  {
    "url": "categories/java/index.html",
    "revision": "26d4d9a7bbac4476373717e34bf48162"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "1ea8addaaf6364a398bb1f69150c50b3"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "a34b0a74555d4f714f600a468363e4c2"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "85d43af4572d45b45be5b31d39c0eb8d"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "8fd0014f78bf5908b0f3d92b37fd4e06"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "7464e01c66958be381b8f67eca0b9d51"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "7cb9f6afaea419c0a05c75df55aceb28"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "5404c5c9faf6a35a7e18ef3474ce0580"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "c1d9599798c5ded3a593f19beacbbca6"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "b793e900315a491235f9c192eaa43e64"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "a98a15f418e0e9761efe7018cdbda194"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "a881463b2a3213851c2679b6a7ec07eb"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "95057895c6d029069963742cef138f73"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "299d31c0efcca1007e8883fbc012d08f"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "3287f831e32175a1d200c9ac5bdb50ec"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "9377aa4783b2fc3b2b3d5d553b473b0a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "3f472e3074078fc3c4728bf9a8e2b804"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "aa01eeb8762d8582f6ed1084dd55e050"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "4b22f9ec2740663839da1858a6d888c6"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "2447a74e552a7d867c3e1b4f30e99ca0"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "737f33979d52eca80a7ed1b539ebcfd7"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "8f2ccc1cc757cd1470d9650c9f4dfe60"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "09d5bfbc0573c21a12bc0aca78c3dce0"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "9b8980b71b2d2f615c2c4a6c08f2ba70"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "9e52a233a512975875f8554a355c6018"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "0e8b14a0b3580e6730c733b66b20090e"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "7ec8991d296e91f709d5f886d6b68bd9"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "3bd8302632dcd62b758e3579261ba0bc"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "93a87112af60b7d39721163fd92f865d"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "f44554ddab603b1f20c3d98694d034f2"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "cf5cec908b1bcefee523d2cf96bf6500"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "b0ad48d1df8b4ae20324b573d25dd004"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "7c17cd182b71a2e0082a7d982e032c49"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "f05e3c8f1e399185f0d81429b4452e79"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "44c81027054f272f46a56448a2423f35"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "0b21649f98afb2be0743e3e5d420d62a"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "850321a6183be47f662f55b9ae8b7734"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "be68114133a8833c1450b7409fd560ad"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "7bf7f625c38d98b46e843d0cf755757f"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "5096da33228aac5229514568584ccea1"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "26c97adf6709795da2a49093f3afa40b"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "8f43b7bec5702202f63d1edca52ae3e0"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "02cc0d0d752dba922c6e6bbea9f04fe1"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "41e5e8ba9e81f84b31ca8feee0a6be8d"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "961bf1780fd7c9b74cdb3aee20ad5c20"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "ebcbdf4fd7f17d71309acfe5eae36c2d"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "2652d338b09f165d0f1a91bd795f8e32"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "05e07ba93144708a639d9569645e4f65"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "1c36af67d1bae4c44607a218ec9e3ca9"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "46c0213ea232dbd7eeedc4f2c7e7922e"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "9ea29e9e8c7bdd5ec907088af380992c"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "071c9cad8b7c748bb538cfd4e3c854ab"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "3913a36320e06705b9dc6424485d2f0d"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "374e3516c64d672692bcbb09882a678b"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "136d28fa3600392376cf00b9c0a830b2"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "c333a3ab5d6bde653eba78caba0d16a2"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "54ea8d5df1581509b88f129ee13cab57"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "16b2518906bf8c950b96c97025530c67"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "af92f6b14f175c5865130d149997f3f7"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "256b55a172ff977ecc51b0939481edc1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "e7f51684ec170036a3c6072ac213a0c9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "2d8e1930526d1c192fb2b9688458a8e5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "9641bb1c04ca0b0fccf8dd996258359f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "23129a42298ff6e42eb7ec9f654b6943"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "c355a3138f850dcd6dacda0c3e790182"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "853e106348e37d3b2ee21e677d721641"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "960fca1fd743e0f1c066824cd2f2ebcb"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "72a8006ab5512b93a0c74e47dc7f655c"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "25903ac2fd499a2c393a5717b95e4c34"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "03e335dfb9cfb0c8e751ec3069a1ec2c"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "a15a68d6b8f6f86c4b673a4e20b04c12"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "a009d8db41fa56a4ca600f3eb3fcd5b6"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "f22abc39f2838f2d1f8dd1be44ed6642"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "30e71571b8650a6bacdab7a5180b97fd"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "408bc232036360a2fbd41c8fc1a29b38"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "4d52e33444a8f51e61face6c70ba71d4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "7c50004cb740956b2906328dcee96846"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "4c6746c5c4e671ceacdb8dfb425d9a48"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "47fa295723c8fc572bb01a0663a724b8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "015a9b32e7923342d461cf67b51223b9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "19c6c51d9129b50aea5c6f47f993379d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "b03c5a7c7e3a1f7c7153aaae29cc42c1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "020327dcbf5e83bc067fd30f057a91a3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "86c5b66b67495d2bd22d3915b6bb5f1b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "e2374f41b1b94cccbc32cdbd5ad66b74"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "dcfdae8c6d7c31db1469c7ed6aa15945"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "0b63ae625327ef4a1e3e365f5f775a67"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "940d75b7e74b01f0c551bf12794966b8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "0ee1462cf386f525063c9705402449e5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "b8502dd3d36e301f69a17395d919b4e8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "0ed0629316bda3503c636fd5f36f07ed"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "8d61b64b40e766043064fb61c3af04cf"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "c37715e450af4428623af2815e4056b8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "b325a34564bf2f8e29efeba1d735d67c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "e69fb2d076fa2519179033d957632b73"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "79a3eda69f20ffbc9b78e0e5a5f24943"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "f63bbdf4723efba639f41663854bb2c3"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "bfcec9aa26e5988b8065005cb96c26f3"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "fe15c26319e8d4c72ca38f987bad86a5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "589532d82a1d0e444de11470726f52c7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "b2b0f58b3ee77166067d6ac6431509e4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "5079a6f5f818e494bd75f4d7ae74b015"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "899db626166d1a06446f3e8aab3c93f8"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "c4032a93ab026ee38abaeaf9b7e90bf7"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "bdc3e9ab0605953544541e9b89ba4c37"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "c5dfa8838480ab6bbff8282e2d5f77f8"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "363218c5bb6170152a53a74df8bbf04f"
  },
  {
    "url": "categories/os/index.html",
    "revision": "08e8e6ad42061ada3abf0dec4cc4c625"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "4e10cdef1a8e77634632986096de5b1b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "27c71925c3d58c2e863b64ce91ab0e0c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "7cd6ebd586ab62c66e532462a6b1d8f6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "8be6deb465382277d5a9a4e24933a9df"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "51364d5cae117eaf0ef7302d52819d36"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "3caeaef2aba5e63e0ed9270db8c59b28"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "7a8eb23ec943014b5d56decd169a9ed3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "59f178dfd00c57c4a8c2578d4df2fa8f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "dea120f454c171973030038a8960bdec"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "6337ea2dcb3a52c4197aa63050e78a71"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d2c6f65f29615d2a2614fd4058dfa720"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "797e9b9c0508d702fc470bef5078fa63"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "c251fb16569eea1ab921590aae9adf01"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "f7e62543a563c95234e071e58976bd96"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "dc6fad3b6d1f812241e7de24460fa654"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "b7226cc0e6952e6fa6083b2daffd97a5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "e24b4f87e313124bc03949c16dcfdb2c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "fc7abe83ba9a51a2099c42e5ae820781"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "4d2139eaed6c276c5e124498f5562274"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "424f7feff320e868ce83a1bb3f878bdc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "0af2aadec6d1a3e3a99e5f69215a9456"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "8d7bcf3ebcaecbe660158220144bf46f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "f0fd84f3a4f853bb0db88b8dbf64e8ab"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "d8dc5bfe262095dfe2b5e149cf01d4e2"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "52553954e520158f9f9b2a84d54d516c"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "3d023d6c5864aae98551979de89c51d3"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "7bd86b59bf90eeacf518ad8fbece3639"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "d83f4683da2e7b86e69cfd77e585ce74"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "6501cd0053e5e960e68c54470a5c6c86"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "566924584a4999010c8ff936d70c3106"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "73cf45ff4ddce0151e142fa0a217a058"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "3a1dce5998a71d23da8371249849bb82"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "573aa35f759b0ca28b3393e739402dc9"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "2ba153ef831c77791ddbddf9f7332e05"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "efceae3a601dcb47ade5f71bf88dd993"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "f2e84f53a0f535488a7321d27574a8fd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "bd726018261ef4b73bf83029f6e740b8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "13e8b0f5d732b1d789cad20ffc256cbd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "d745ac0f27fba96cd96e9dfdf7534d96"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "7342317ecb67d182821a0dd07baa13c9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "a3f85fe669c2a82f006caa0d3d4edfb1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "058cebd3857417f3dda2d19b991183a9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "e9fce593bf1971ac668a59b89270e4bc"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "069b704c5e2accaed371c9d16dd21050"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "d0930b81f6416566b0fdf24c0591652c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "acf692547ca243282159d3ad68109a2c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "4d97bde3a1808fc3a4d6123942aa4688"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "de62cd99a1e0dcbe0f08a26567e22247"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "2ecd69a13f248edf0e4fea83c00a20a9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "740e172ddfa995cd7fc1fac79df01d27"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "13bc0c213abe2918cbfac31dc082ccb2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "0678343db62453a2029d96757d77520e"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "9c9fa732c6ebd89ed28989a6887669c8"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "381d99ea4bcf96826f79b9c7ffe20845"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "b68ab60e93fa474bd1e15259a42e6f3d"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "fa3bacb9e307fdceb72a5109652ef312"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "5a4cf13008104f59451c0a2238853c45"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "8e91996bdbcb2c19f90949508712c060"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "cfa1f2089df9f53ac63be722d65567b5"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "526bea1cd399f63483041e0d44340348"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "d298922e57a039caddffd8b9e56a2449"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "83a034b8bb5b2cfe5182015348a3c942"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "58fbd1f60c6efde62870dd531db74396"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "f5594c6503a9981662c9c9d0be94f679"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "02beb9ef63b82013e27418e46648eef2"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "adc8c45805d721961bfd4de6fdde486a"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "3976bb70b002dee74f7680bda185dae0"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "55da3dc6afa1c6ac3b121e18a6ddf879"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "8e719c9d4e07ea68779f9583d7fd3bb7"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "d26f233288a3cb13e9ce292e8e7e8adf"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "15465e30f64870697f0256c4517a0597"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "5835b6daa0602da97166129fe63ed5c3"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "73b010585435875e3239ca1771f4d40c"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "1fe4c6ba16a95b4786f0e46323107af6"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "377a7eb8f5ae11f74176cbf71fd9daf0"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "39bb3b3995dabe0c3f5f944f03508a35"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "7d0ef7f430035c53aa0042456da6dc6a"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "4567b21ab8d40c5720146540bffeb717"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "b9ec89d8f247a8c70b250a6d04ca4983"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "a417f0948bf592ba4cbccce4edf017c6"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "7e9cff2557e1a4935ba06727360d8c34"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "de2b110fde92460101723f634224df42"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "02fe176972289744551be94ac4af1f03"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "35ba2eb264019b46740755a9b040c323"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "df1506603c547aa69bebac38a9c53f9d"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "218da431fb7cb07d6d0c92fbbbadf275"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "296d4c823a22bc44bc6982759ed901f8"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "c3c3dc8f890375e608f171de89614f84"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "d6bb3430d2363dadee1170fbbac24894"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "5688de01930ec190d2c9f841590e6f94"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "9a83b6a0a8272d459d6ae4f80b8746da"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "d4fb5a95236c3c44b25e1c4be49f4b84"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "38ac9a472b3ad00fa6c05a67ef9f9ac6"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "d9fba1056d5a0bc90350dc6ba5f246ba"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "56774e5e7884b8c7f8fecd5e1b2719e6"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "873899a73c3eb5ceab7cfa5fb89d479e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "69935a595830d0c368beb65372a3ac02"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "df061d541a10b00d79ac48bb66244a31"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "faba33adffba47c5ba8234698778c285"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "729a94a8ef2b2d419e6b68d830cffd43"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "c2bdae570f669dd805735a7c21571ad9"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "dd5b7ec979448bd29598a743ac4786e2"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "919e77e04c1d99ee490595715b538826"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "bebdb0a47947bea3e6930944cc272051"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "1f814719c40dfb4db870eb9c6f2a785f"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "628e7c314ce243c6205e2bf9bbcd7d76"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "45799e0ecc0109d70129c61175ad4555"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "bc98e0915415259c88cd3ebc121bb42d"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "7231982a1999c880daf4d517ca8a642c"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "93ca66a77fa293ff4b842f0da13b6c20"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "92d39652f32649d82817415ea93ba028"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "385dc7ce64f30b7208119fe457e6ce8a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "a5c020611d732063d10e2535edde3a8e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "c285d3c5ef71aaa58b79810274d85d7e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "b52e500f95e2a4f2da4b865b87b94b55"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "ad08db3938ed1b211aeb22df617df804"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "0584b5a401cca1dc3e5b367f356f4beb"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "100a9dbc842281b3508c6e505a9ebcf3"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "f484d186f44c111002143fcad3ef24fa"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "097c79d857e5589ff2adf7f8c0686b36"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "a86f34fb8e72215f65cadd79f94214e4"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "f3c5f0b42f4f33f2d470edfb0e00c599"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "f7815ef89b68ade3361e97ec77641bfb"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "5b08ed6b612af927bbf613be145c40a5"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "642f34386f033b3e0307210b81dbeced"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "f45d6247efba3540b93f09e21606a2ae"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "4e78bdfaa4a3aad305eaef7c00cc618b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "335cf067baa7950b5c5c74e3c09fc5dd"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "7c6ac221cd4b82777ce6420f649776dc"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "07611f9a3676aea9da510b3189d4fc1c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "5afc2c6363d0468ef6852330d61f0865"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "6813be4cfe2e22c7b6992ad18418fefe"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "15dd6f09b434126ac3768d949cc1c4a5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "5d81126ee59ad48d7a7be7f5763e81af"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "168eb7c3a10d7169c2583ce124800fd3"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "e5b819873e8591a50b8b1e311998ccb2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "e31e6cc2a83e7bf5433b3d55119ea857"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "c14e029c8c9c25e14e294b1ae0892857"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "dab2d368ee700dd28b7707efbf1236b4"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "3b5a3db94875e83579813a27a955e427"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "086c254e59b0d088fd148b8bcb1e207f"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "70f2a1d94f605cec58b776e9dc857271"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "95aede9136617bf028bf794e5af921a5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "ffcad568b422ef8100825c956a6a6db2"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "5fe214e4f4bfb372c07678e320ef1b97"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "6f0583b127371173a801a7d96d3a66ae"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "3e01b2433599d32b1144d24c8281d7d7"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "2cd923eb5cd01327ca3978cebaad91d0"
  },
  {
    "url": "categories/php/index.html",
    "revision": "7f9162b0961286a66c9b26d24bec3314"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "c81970332eff9e4617b086d4dd46090e"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "6b458bbc5f7751db0dd26194974e3ab7"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "9a17ca356b7d67aa3f18dfa7c031c3f7"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "1c05d8746fdfe5f669923d3de2c42afb"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "c84b9c5c7d018f6c4ef87150ee9bc94b"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "d8e07de7754c43e0e5bf9a9a151472b2"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "2ac84ff4b3a5ece8819afb32862c1bb0"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "c04f1089c2578d866a5e39ed9f350bbd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "f2501ee58e6f711d540d2087b5dc70f7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "da5cb5886176d300959e649fcafb79a7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "640415ecb3637aacb5b29e87c2351dc2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "803278197bc081fc615ec70cad3ab130"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "dd1414fdfe44c257c57ac4c48e2b35d9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "e9417d0223108c4394145a61e6321463"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "15783c334b5520d44ac423095bfe3c27"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "a7237ff834c76f2db502be8345ddb276"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "fa727297ac624db91da3e8a7ebc6f83f"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "f81861c30e5aae8ba868dd9823703249"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "aabd05cc9efa27c952a2e70f5fc9c076"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "f0776c35f907b53a00e136fdb88dfeb5"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "7f3e3079de7fb501a08f0aefaf5ac9b8"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "dd32eae66c75f06ea0c7a21ae5fb8777"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "83173f465eac2a88b4c4e6c4d02659c5"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "3fa04f5b87a4be452ea0ccc6cff8efb6"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "fe14525a42c10aa31a17284f5fd8c341"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "625090b71172a74eb3b380b6c06e5548"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "c9dcc29c3428821c553fa13432166ad5"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "1901d6d61a9f670eab85cd3fb1a00426"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "2f0e2e03b68c16a1a4b8ced0b58e775b"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "7306a4a00b063d41eeb95e9ba901b727"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "c59be8343211a61e526fa4e98a48c087"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "dfbaf85e5ff6380e922ff015965cc7e0"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "cd689ca75fde926d5bead09086159275"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "d3469618349cb464a99d9db803b5a0bb"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "1ecb3cc7d9214969adf64c3d06fabc23"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "2914171111fe0505fbc202b722bfe2f8"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "e8b95f532452701f4e9bf1be26d4ae07"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "0a39dcedca7da4f342e34f36c0cfb78c"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "3b82625005206270d747125f1994c7d3"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "20e63cb66dcb80c1c387b97b90cd029c"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "8b757b972a1c750ba31a251043180b42"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "4413bb8473bf05f29b2aa10599692f35"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "8c6515b3c4d58c7b5a8e71d04b70b500"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "0a3bc1a68318177b304e542ff1f3ac26"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "da76e174d6c0f5242e9a808e4ec87131"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "6ceb0af8bfbd0bcae6dc9ac38195b2ca"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "d0ca91211cf52e2f6b38cc31dc8c26d7"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "9591ca7a6c8ee44079fcbcac9fd7939d"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "f8d69ed553512dee8c0c2e6a450e4bcd"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "5635d17b9543965d2e544530000f50b7"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "3eb52a4745db5149fb1c323bc4473b9e"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "306e13827fa9771f4bbae16368e83023"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "716ea1d3a38869bac54c1cc1fee9a5d0"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "b935b70e0077159c525a439fc435f66d"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "a7b6391c8668efb83be0f5af2c0bd33e"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "86a101f8d1e60d7cc19a46e9833044ca"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "9468a65dd1deb4a7adddff12a9df372d"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "c214a29e194b525cf0fcb3894e151773"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "7d129bb7cd1dbd39a154c17dd7ef395b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "288fc67ee496104bd571e84135d28c6d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "6d0791d96e3ead5a36ed4b1a989c6476"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "8d48ede7366c3f97f0233ffaec6af538"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "4df005e3f651f7982dd57ef8cdf884c3"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "d5b3a4610c56e03197209344d75f6e2e"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "eea6857f1524619010988dac66978b5d"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "3719bfd1ce28c3d8444e311da71c3efc"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "75f37300d9d8592e697fe10a41f03007"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "1cd78caffd3561847cce9a31288e9513"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "6c9b67e411ead6704ea9d5cab2e4ce56"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "b4fabfd00917a1c8ed9a6899709dae91"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "e0ceb478568ff705f57c9b013948ec0e"
  },
  {
    "url": "categories/system/index.html",
    "revision": "21f3782a956630695ba6cad4d0216eee"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "ef156371f88c7ab1c28a2ef0a7a2e618"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "108d6f5be87236805130e1e5c12e41b5"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "2c89a846b49648c39df52ecc01041e02"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "38688b5a0ab06a69e162d8035f03627b"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "19912d9918435028f164a51ef9d189ac"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "875f73714ba987f901e485eb5f52dbae"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "414e2bec09e5e20468f334b1f66163d6"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "364e7b8a5caadd8bd60be25aa3582952"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "7309d4f358d0d5854ca353e7553474f6"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "be24f4ce05137f51eb70bfd1b7ffe74d"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "94ccee00f4a44132acedc82586bea0da"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "231b6ff3d5341b1a715cbe3e85de3a09"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "7829508b6bc885402bfc11c6549d8ec1"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "0970d9a35b4bb835857e58191d078cef"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "11a8c095c15d9d8fecbaae3be6f69767"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "30ab57e56f089a93915279eed6432f88"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "01ed214b37a6f44b7af0da0fe2895469"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "10078928ef3aa803994b3dc71041b666"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "ed82c7c6ab0f65814757e021a7ede9d4"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "7d55016dbdce42a3fa8d373426210c91"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "b849287781014124521d6a95d6a00592"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "3dbb03bef995814024f018d6fae2bc1a"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "ef2e4356a472f5a494f5ea8e02988b40"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "69cabfc5e0efc7525015bac7115396c1"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "15f5c1c0e7a5ec90429e5d6415afad2f"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "e54ef73e8c0807e304cc12f0b27a98c5"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "2d0f4bec7a27f12245a398d1b28adeab"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "2a4868825def9eb36501a1a76672a870"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "c08670cf06924b6954591b0276090e4b"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "ab7747f753e49bfec4ea52e325cc828c"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "97fcd9b077f6f4a8c15aec28569fdd1f"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "0c71f49e6557cc87d39f50ae1adfc7b7"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "e0948d19c0ef6e04140265577f7b058b"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "b99ae8ac5e05404bfffb69de32678039"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "bac5a70ce9a3972952830cf728464712"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "ec7d1ebc503ed0b8b6f2862cb6bb25b1"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "db5d3655dfef35d8fe265567fee74321"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "20af4bb441105fcfd446a0e6c7e716f3"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "601b26f529ea93a52ebb82e00b1fb12c"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "c9fa71bb1162b1116a9e86326060b695"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "d49f21b39bb8d8dd5ecc47c62c7ebf53"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "7ff6b7a695b5dbd6313751207be863a1"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "0c32d739b72a583bad5631ca3c610276"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "e4a05bbe14e67103c6c094c3b6ba4baf"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "7cf27d8f60fe0e86bf933ab0ffad75de"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "29cfcc20ee967e7a90bee48343970d90"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "9fa5e08e436e20f3d393bdb820af6f7d"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "3beb0bedab6814c091f3dc89f0a7b66e"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "e45c41717509a7cf5c3e0ff842eaf53d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "48422590e852bd6ab30262b3096bd13b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "cd462c125f0713f919b6742a62ea7790"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "c0049a83088bf6dd433d3fde516fbd5d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "d071697b89e0256cceb27386940b4b31"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "cc1f2130efb07027e20452c19789b5a9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "0b29e85ff3c801eff0842b34b79c6a47"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "fa57e15d17c28a17edf1204f2b214c11"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "313f08018be39ebcd6acb8fc0132b2c1"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "f22949a64a70d651422c40326fd41136"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "6afee6b1b912f923f35330293fbc924b"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "74722eeb15b18c7ccc32e89b4d2d9c70"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "d442f919bc11f9a69cf0506acfec6c09"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "ef636d3319027ae3a69f4f667e2daf17"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "499cd3213b0b3c4114fa8268b6b477f4"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "2d3ca1c36bd92b05239e46129fef4e59"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "d1c2adc739a83f04aac3135b46db8845"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "17cbecb42b6c1ed422f18aa7b0893acc"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "5a752c3204e33615198b644d793c5946"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "df8d9de0f2984261246d03475d0791db"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "cf48ff5b8e4385a80b04c11ffadb02fb"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "294b9623598a6910545c3c125996f368"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "796f0319d9d1187ba95406e35dd02a16"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "689ffdcc72015a1222495aae90b426af"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "fcc0f4f533a47bd89400ea43921c2bea"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "dc6fb850a2e27ef2985a458d3e7f51d6"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "a8732caeffbdc539925f7f276062d013"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "a9c0bf3bf16d4f4fa0b3730cf6bf42f1"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "289d041386dbae7d09a9ce1420ee2123"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "f0f6b60aeaf80ba3ace9e767e51fe991"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "2e4fe631aedc0a768df75c4d511c7184"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "1d5df3106b2fed2702035e04c8eaab08"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "78c3fcb316ff6fda8ebfa31e2e963ecc"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "4adeeee621ae89e101fa691656c4e47e"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "49b0e6d05407f233e22f43a229c8573e"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "337eccb571cb3d0edff2b2437b5fa353"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8523cd5dabc70791082e2ebdf3343b7a"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "79e0ae46f673dc8382b268efce191164"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "71009e93f6b758b9fa226a96ff875e60"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "4afc423dcedcd0327e46737680dc64c9"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "ac88fa793ee684bb3af7f08d21280cc1"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "e794b4e105b405f042267702f350aae5"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "95795f35756da4afcab8d09d8e5f9c18"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "574ec408c73a111d5716f312f0aa2849"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "0d1e71f3c6b8df890a5b7772b3f24fc3"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "95e042bfc1ecd6c147c4bca9338d5dca"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "c0142da1a0e8b97f56a483fadd82ac36"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "c2ac6cc8dc7c395e1a202abf1f0607ab"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "458ee0b3a696fc0f1b25a36e4150761d"
  },
  {
    "url": "favorite/index.html",
    "revision": "74cb1324dc92179380cd3645b100ec80"
  },
  {
    "url": "index.html",
    "revision": "fc645aa4f0790b3a3b97b0a795b1f16f"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "86914f47d8f2dec4e69325a054de7197"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "a8c48521c147d892db11a21f75e7514f"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "6bf438a249a19fc5bbb4710c36871659"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "9745676934e3a3fbfd0acd743eafda1b"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "cc4b7e0a1f2f9208e00805f7756912ab"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "938a8eb90e5429cbdcf33d79518751a7"
  },
  {
    "url": "note/index.html",
    "revision": "6d35afa8623f541ec70e50ef46a223f6"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "47a4700eef7155d36407af6486a9e5d5"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "0df0b4508bd11d772eb22c737e680eef"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "cada6283e1c5465b91aa0e6592f9a0ca"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "6028c35652df8e7015a4c3c146ef97ab"
  },
  {
    "url": "share/index.html",
    "revision": "c874e7cdc7868534add756082657654b"
  },
  {
    "url": "single/about_me.html",
    "revision": "e13e4c5ddccb16b7ed562bcb8bdf6342"
  },
  {
    "url": "single/all_article.html",
    "revision": "a9306981a0759142b075063ece13dadb"
  },
  {
    "url": "single/welcome.html",
    "revision": "f43bfbce2416da015330283706bb7bb0"
  },
  {
    "url": "test/index.html",
    "revision": "97a631e82fc9b5d6fc3634ead7ea6c1a"
  },
  {
    "url": "test/test.html",
    "revision": "13f31d741454c042cbbbc311241f5e76"
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
