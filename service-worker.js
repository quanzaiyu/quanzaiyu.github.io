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
    "revision": "86d19d6d49b610006868822864be6863"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "2c2daddd2b75a545b68e438f82c89fc0"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "dfdaeab839c1be2e00aab9d4716d28c2"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "8ab8af84ed3e1abac7c3973ee17313db"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "a5fa7feaaaf9bb33e4750e8d298a5f20"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "4f7aa74de8c35de6aad5d562ecacfb78"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "0dc8cf0a29fb8d8b0837ed24658e2841"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "c459fc610c6895ac01e63ce6cdbc5ee5"
  },
  {
    "url": "articles/index.html",
    "revision": "29a18b0d7b1f88f859f866a05d233de9"
  },
  {
    "url": "assets/css/0.styles.d5495972.css",
    "revision": "bcb66b13c944e9726091dd63ad5fada7"
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
    "url": "assets/js/13.4b5c24d2.js",
    "revision": "16748c53823c201bb2b2dcb3415d42b3"
  },
  {
    "url": "assets/js/14.ea0e7a13.js",
    "revision": "f118cca09f788c3e585335d1dac3f7e3"
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
    "revision": "a44af7c232c817a9f94a45dc4d5e3d86"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "5e743bd1f8398bb3be4782cfad288668"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "a65dec9eddd8db2e8df0475c64ade721"
  },
  {
    "url": "books/index.html",
    "revision": "90afb95b2457f6ba04ed0a6d932a7248"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "03861290e89358995990b1ab4c6b44d7"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "7ffdcfac334eca78505c284829df092f"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "10352b1d7339010713864b5e7bf8babf"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "96ef3e3fea57681dc41b544f57c1d86c"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "bf759a1fee888c682502b8d0349ae2d8"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "46a9852db6d867808917638aa7433e98"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "2127052f0fe3678a244ca43410e6ed7b"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "e339fd60a8b8954befb5181f75358c83"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "0227748370d9e05b1998a970bdf725e0"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "4446983f36fb64b250801801d1f8f9fa"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "32ae0768c1efd0229bec963654247ad6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d668ae743a1371e28fa4b5a68bce75d2"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "cbc4d69af517b6816d1b4114bb583af5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "df8b853fceda2a4eecf7b23a733929f5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "117b92c627582a7fed1f68457c9cde52"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ee1a013cfec445cd5146ec3c35dbf0fd"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "f6e4638be32058881f5540d45811457a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "c891d1e0086ec39ccda0c730358c31c2"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "e602a1df798e2cfa8c64cad73fec609f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "51b13cafcf7b21b12c2f4c4d0260a661"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "bda4cb64d1f215263208a7894187501f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "8ed125406f7354ed9565638d759766da"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "a97a976475addbd403c5a09663ad7ffb"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "25bc8167420459a227d35905e58e8185"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "d9d1d9a79d2bb46904dede4b09d8d848"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "a7589c29b54d884b9d766fa04d2010d6"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "1c7330f95280aed4ff2380831caffa76"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "7c7565215825e646ed5d29a8cc13b296"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "e11c7fa8bb57c59957dae209bb13cb5a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "68aa7b3377fd3c5cd5e9d514eb893855"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "517e91da18c7c8b1df2ae46789406fe4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "e17004ffaf94d07950c5ac61bc8c6fb1"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "15c742ea094a78d95a327672bc7806fb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "61750c746cbbd81ef5a0493eccd6739d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "ea47cb1ed4203fef0dbd7b3b79262c4e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "37743640b824bbee5e5e1ef9b461c226"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "e452b6fd8405d9d121b4703d20cd4d73"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "3f8248d56cebb6ec93a273f157cf5b6d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "b9f9724d04c63aa9ba6ec8f85f61c8d6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "9e2df8fb60baf596982089277dca031f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "aaa3a6cb0002cdc389e4d50f6cf58ec5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "f7e974006dde94eac452fde4c231fa5e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "bc20c5914147ee4b06be8540992609c2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "d58c8350f07c71f75340869e7c5751e0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "e0213fbf6971a5c79d07f3138bafa5a3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "861e8421702915467f44fd4a412c22bf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "c8fcbe37945f039819fbd945596bc4dc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "93007293aa6561c4ea2301011979acf8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "158d2196ed675593466407169a5c6fcf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "a15d3d8568cf2f0b1e31e34e0ab4c5eb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "686d817bffdb1c2404162b8ca64cf89b"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "fb30dc3da5657901d601d2ff79e27893"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "31ebe0c70739b5ca205d6aaad4fda65c"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "fe4307a4ab1baa9ca7d954d13c938d74"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "96ff60edff53e049d2d6823c17a092db"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "20c5c1b2cbc07dba80323a526aa338ac"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "fd6bf9b5c8cf6f0489fe9089093ee36a"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "465504da3dfecd2771d4df5571ba70fb"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "57c9ff0f09839cc582bc77b54cc73e9a"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "1c88cbd5f63a38d0336ee60ae9e031ee"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "bb5958ab30774fa3333aa760e9ac0f57"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "bfd2fec5adaf3cc35a8f6507fc608071"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "7951beef29598cec32807104784a5e0a"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "f11dd7d420e7dd6040d2b46ff5725ff5"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "e3c1d6a846aebf7991fc34f1761d264f"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "8598c1c5ae5604848e48447e65609f73"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "d182d14ddaacf6213ee297be88ab1ce0"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "def7d844bc3f567d00ae2767b02017b8"
  },
  {
    "url": "categories/database/index.html",
    "revision": "1f4d9e6cf52aeebb174fdbf10914149e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "44c33a1addffb4d1d563e6520dc2ebbd"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "e1aff1d72d6a2e55a60943a2b21d632f"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "ff18fea9d930a47d984e52a47ac7a056"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "b57fa96367892d19f09e00aebda4d9aa"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "eb7a45ed01703ba26ab889e6720376a1"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "7fdd8a4f6996840502ee940f704d7b92"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "e53b92981f1e4019b51e2233f505208c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "ff9e5eaede37f8cb2cd2e1de79c4314b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "73f14e25961ff4603c32608d6560331d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "5f5ab9883edb25de3248c29bf0d113d6"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "16adbb6770a6b207112142483276154f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "19f7b87bfce18ea70048c8f1090b7193"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "eb43319f5e87b8b289efce72d2ad6cc6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "1c8f02aaab4de0d129bad7833c3ec9c0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "265e03e1c09df861c2b8095b86624937"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "a92c842bf8f71cad4bc491cdf3caa6bb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "e15df1933436a1d041c17c0894368fa1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "a05c996cf805c286d6ea290df1d3bb7d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "ef14e6290c6279b5ac00b7641c0d10b4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "2e8c532bfd5195f1ad632c4c6386e3fa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "837e7e1cfd174488e69b4f512620ae7e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "e5907ac72d311dd6fa506b3285ce8644"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "aa31f526322a559d5e5914181ca4613a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "1405a136976a6fa9ed93dc4143452efb"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "af1a20a3e06fe418324344e50ea2dbac"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "30794d1695340cca7f2068e86c80bb45"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "9fdb37fb52928c83dde81d6648c392c8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "21b7416b5f140ca7396338532eef524f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "f0ebcb1eec91d3d57fd528050b067266"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "cacf99db4583734c624e63b1a4479178"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "c2d9fe978045e47dfbc7b4f9d6b1fd06"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "88560381a62cde1f9b603b13ee9be8f3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "af499d22014f10485ec2dcc3758b13a1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "2978a0b3347206dede01da640cd0ebfa"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "8c1ff5167c6178541f0ba5821285873d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "39e353142ecbb9eabc27aa567f3fb25d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "de246bf2b62e409f52cc1c6899999760"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "d165b3b9707728c77f5af8e983257dab"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "8af2944c9dd810a1d975cf3df63d31a2"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "9e686195a33a4540881578020f0d2a7b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "2cadf11f36b6d3e3e2ee1ce99c3ae093"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "9bdbe65fac448399a40921beecb9b38e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "ab4ffd25089bf3c209dc61d1e3ec29fd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "211a21822a91356d6ba3444aa0047e06"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "fccfbd3227f3da0020ca13f619ee9a36"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "cfc3c0d5a6e445791704b80ff229aada"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "3aeaeaf6578ba8ee197b691377cc8fd8"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "aac758110740d280bdc8109c0cc197c8"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "41083bdbe57b88a964695278b03de025"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "16b7dd2af69e51692c1b66506a97f1f0"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "88ef9ef345e609b3aa3645a1016127be"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "b6ff8db0be0683df6e82650dca217e82"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "7b68d71b152646d9b8053620af09dcd5"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "41b37e806b95a5d47fea4c041c94317a"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "c50b44e1eede846f5763e8dc6a66c725"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "9ed3be77c340a1e0a6a75b54456d0cc2"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "43c58aca9d5122c62c18471b69fe0df3"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "56ce37285f708d8144412f985cfc9edf"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "d88ab9f8e9820816433926641a543b8f"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "b1fbe3f90204c439eb8c6029f86e91e1"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "7d85a2fa188130dac483f6f648f29fcb"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "fb1ce73defb78930ba59c4ddb8fa56f2"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "9501fc088c2d1e5f1c37518c2c9a25ef"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "11b485c875d659696430678536b79a31"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a3f2005c6ec9598d7d104cbec95ac75a"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "682e239e224f136c185ebdb2ba09d6a8"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "4396e93406a5757a01ea5107d31ca30b"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "91f0d93bc70429ef9915878dcfb5c2ba"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "306ec94937cd9ef4cc4f9cd68e85ba07"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "755ef45b25fc911a7b7e7beae8b28198"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "4b6585f1ddd56ae7d13cc91b4a50f0dc"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "258ea37429adefac8ddb9ff502c43f10"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "41b0a53744d0f0816d521c34cb7bfb65"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "f0dbbaf6baa47d60e291c1f85bd25b7e"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "3fe6fcddd00c33b97d8eb676020f3815"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8d8b2ba911dd642f7604f6bd3d10547f"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "4e978f2fab2a7052b3526ad929596bb8"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "deb11262a1be7b0bbbe9e42f00a05c28"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "44f65548acf7f08b3bc936689e49ac4a"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "52b9b96baf334085f5eef93ec15c3e89"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "446f3dfcb16b697a8ada60b510a8fbfa"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "d7f767bb3da928c7235855e693f2fc8a"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a8b503a78e19f6ec7bb1e23041c4558c"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "464620a8950b9930cd127e570b79d7fb"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "2b2d3b678dae1bf9d87f28242d987a42"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "f50858944450b7c9f6836a899cd3056d"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "0fce902dc3c1b23804fcced032137345"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "0940b30b2a6cf4c00183d92a8d3cb9ff"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "774e6995341665cc358c133973a45de5"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "c7037e4b18fdb763b5301bfd90d58c67"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "541cdf140aa22a23c9361ead4f91cf51"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "31d122784d4fa75f792a79f6ab9706e8"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "f39feb6eae474634f55d69a7856fd214"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "0b83e88f31e2e8288c80416962dcf686"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "07b4646a2abe4feb4cb1b5c17da874af"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "b7770c17aadef06e1d10265e767a0afc"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "d6c57e4387320aeb85834c9e45a4d64d"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "7d0f979bf77555674f4bd8c6c97f6ccb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "0776e4161a684378d0549c19bdc7f920"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "6126341b4db9da5e2e5536737e2ac352"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "3df523904a3c4a6a576c999b0fc84aeb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "55564b8a33b84f9a16cc941911028003"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "297fbd3926a0a2fefe7ed86e7d5df846"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "d13981d06403e146a699d9e43ffef9f0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "154ff3298b485852c1ecc67cef87ecfb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "4223358da069242cd1b7a589aed10b84"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "7663244c3fe0c50bed339cd177499a2e"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "405e44d65fbea24cb734cef2601c77b5"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "cd833b194c19309e8d0e5a605efb23c0"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "d38697327f60d2223246d13f0ce358d7"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "2f3ac73805345a61b77a41b6ce6edd7e"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "aad5204411ba0d73125c05024ff544a3"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "52905d9a2997550ed5894a50d9410be2"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "6814168f58d2d6d49278aa3e20006513"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "67486e096cb9fdcfb77a1a9ed91550fa"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "fe9200a12d0e8fe93e41a5f6dccd6db7"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "6dd42eaff5276aac5cabbda6b1621570"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "fd64eb2e0ab0c9366e0ca2a73a9caa09"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "72cbb4b818e847320b5534336ade0549"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "2a302ad20dff059fb2e14aa62d899c20"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "5ef4df2503b620511ba876acc48ca1bc"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "93be51e51433680e83e7f5c32fcebd98"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "022cdbd3ef61499d78675b209bb571dd"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "8cda2e738278bd080458fd1641b752bc"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "f6b05657601d6dd24ca463754fcacb53"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "2ae18fcf74beb40353dc659bc2e09987"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "0c004c003c1fce65b8741e2f09726a3a"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "bfa45ba898b1f077f0cf0840bf3bb003"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "dc7b965a560a8a64e0897caa96c12e74"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "46cdc316b44b7271176100464b4a531b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "bad0137a10222714e59df51cd54ff548"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "8bac9c3ca77c0235093efa024fad9710"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "a8985a05549fcbb6253714750d035fe4"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "9c6c003705da17f56e6f471030d60e71"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "ae6e3a93e2fba31dbd53d8e30c8cd52d"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "b324e24a4b010bd05e0cf8cb97e5d69f"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "5f2cbd805718e2c7ba9085100eaab9d5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "6e3b9886920541faf2e3c1967b48c92a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "aee7ac9e364c72ce1900b1c365fe1fea"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "bdafa51ad2f21e46dc79f7fe404c0f6d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "079464c0f05b8b27a74d60e7beed9356"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "4bd6e47287bc2048079e1c7c054a53ab"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "c2de5bb3d14d066f5ddb0f4aa02019e0"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "ceb42bf91f364f8015d06afffdd53659"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "45d012beb664845934a713ed70d29726"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "ea6f6ad0bf6377e5ecd647b33752118b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "8a605abaa2bcfb38cae62b3cbbe04b19"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "4a93d7bfd82670e9853936a2b56b1b5a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "7919013b5d18c00995476817691c1b04"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "70d8d7287e35e95e2d91530437764401"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "f90ae44153ff9bf1acd1f8c66492c2ae"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "3d3db2e8e9f79f1e351283d5735cd263"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "fa1ee39e6a81ffa510f645c797ad0b17"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "1c58e21fbbbab40b113316aba3bb0424"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "23791630d83568b496df0c83230f0419"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "be0fa47b1186085fede4fff986fea025"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "956ad0938aa8e65841d74619870197ed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "d29845609b565581b6e7d762f858a8ba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "b619fbcb789dfd7639e09bd6b4799824"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "2414d71118b5e62fa5f75332fd694928"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "8d81ab3a0a3b77b9720b2c41b01c1827"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "3e05eba379e50b9d4549ffd7bd10991a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "744d70beb938a6953a39798b857763df"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "f00cbb9bfca3c46384a7d8301f6adf58"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "e56a37e798479b353588ff5e80681677"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "2bc8ff3e95ba7b59b3c94d0e26b75490"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "f776d9ea1cab6c256a42840764e693a2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "0581f7ba55990460ecb2d2c73933e8a6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "764a3541416f14a7f04f0f7eb7d02dc5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "4f9b5f794b05dbd94fc7bf3e10cde44b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "3856337997fb49118aabc1dcaaa9687a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "728b679a878753ffbb28c5ef60fa3e1d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "b78db396be8e02c691738772ace165f6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "d5910d61065b8920b5f2ad2c228728e8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "36f39875e44a5bfea2f3a47cd523bc8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "a79564e97906fc8c6630331d2447fbfc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "e0cc94926050995d47cb46d69c08d7ee"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "01238f2f127e23b071fd7ff4db799728"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "903667586e53ef094140a2d9e8422f65"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "e1a9497a2bc705d5676b098ce2efd346"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "765bddad2f3a64d9b18b6660ae852552"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "251cad8307dd6bab1d8532398f332cd0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "7cfe0297614965e9a6e28f2c4263af94"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "aa6f2cda57b14aa84ce0f2d9fcc1e828"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "e74b69c23fc583194567f3958e926eb8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "e1831c1400f9167054f3abc6b7c84dd0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "9d013a65ed1575618bef1582dcb2a9d9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "0074daeabcd5d3993849e59a30f43025"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "b99a5ab3e80b10e31eaa35d9f779063d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "5298b4bf5cd1a83116b937d1c64f10bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "ca3c4436b1ba3aa483b8394e17ef47bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "0acf63ac1a26b2dca8df1926b9b8cf67"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "b032d19c76990f26425faa87da826f9e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "4aec163a59580c4ff052a9e15e4e2d65"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "f99ee88a4564cd31da2a907a2a650ada"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "deab961d8753bec28e9935912f1649c3"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "b902e0bf734620f84a1da2402a77f204"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "6eef87576af95f7fdee602bb6625a71c"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "d16891999f1f30a28ece00ec5592c509"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "50898fdcd4c81f2c139ff0befd23afea"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "2433161696a9fece697d2e4f4d8dbf18"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "be9da08bf27cec33575bbbcd678faf6a"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "059ede40877984a461c976354b771454"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "406d4734cc1f30835cfeeaa4007edb4a"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "10fb668ed7991b930439b4eb968734af"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "26c24603131ec2104f6020ee469dbba8"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "4a3a5d534f21c643bc9895d6300254c5"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "2a8333c31667ccc14c4c6df58006d052"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "17e1ba1605ced39d3b0f8cf4be29aa93"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "95fbece5c2eb72a35dc1d7e40f8c36bb"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "4bc21c0297ad1c2454e80c4e6a918de2"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "0da41b4d93ad193310232398e5cf50e3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "2443fe9b132bc9c959c6ccc6e4d510c5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "6091a013a8dcdbfbc987b77b4f680fbe"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "d721f2cf8d83b5cbee9892b1c85ec711"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "40a752b4075f1dad02d086b1feccb599"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "894d57f118ef024c0d261066efa9b458"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "32b8417122e2fe53ea21d92f77d402bd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "5ace43522a10818c8cfee5b8c39ed388"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "e38c25f5a25b0cef502400dad9ed73d3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "27b128da12d05f93aca6fc263efff533"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "71c2c23c13b5f070c15f01029af31e50"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "bec980fbfe6ecd1daec48b5746d70e92"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "192448ee59d1c789c00e9b8e9bd38aa7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "4937bd33c310b28a1128d26922ee0185"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "b4cdd19a3c189db95282cd1002fb64ec"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "f0e20c6e3ba99a7bcce0394a1c93347a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "b18893729af3cc5cb67d6f8ae0b06228"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "bb7dde3abe97f0236e5f731d02629efc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "8ad14a1b124370b3ffd7bab06c81a850"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "d63175bfb9f9ae2e9268523cf52ba2e5"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "1bb521354dc41ce16a6d7955402122ad"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "f7b9bce3d8e7c89cbfdbf37fc7bb24e6"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "258ef1e098489879d3cb79935fd8cd57"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "f74c8b017fd4dbaa98a2fc96f7278c78"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "0264000e4b39dccc791bbd26399544e6"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "7f9836042ef1eca29f20d1169aa089d2"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "4e9f200d43b7fb58d523549b64131319"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "7bfe2fadcd9375e77e7ccd5f1e871837"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "c9afe158f69cbbc3ca817ec38fbb0fef"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "4adbfa93cd66c98e61f2bf3a85d3ee5e"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "fc2ea90d01db84f88f88083e19750e37"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "0143cde3adb306aa6304abfcfef8f431"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "6512b3e86f7a2adf5b52cfba631f4e73"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "4ff27bccff4a6acdce0d4f9c38273117"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "9312d7c2919c0d9c6e29855ebb85c370"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "d8a7f730b4d76106fee675f1dcf7df16"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "e08763d122c1cff2f979698f9d3b5a8f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "50e5419ab931043309b02763e0f906bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "1edcd431c94be27de256df408cea4b69"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "214889c1782a5a43705f0eee819b24c2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "933b8e486c2d18814b54f2902b9d2730"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "35c066343a1b0ec62ba5a31a2804dc65"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "48883b87ad3b761467774d8cd406ed2b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "d70d263e7ee3c8cae66dd26919829d74"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "a953bfeac05fa31114f5e6d94ba045c5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "cda79371667a77d17774c4df77ff07f2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "7ea7334dd89384b3809b69b220683e13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "22c98a0a0b59ba3c7eff1a8a5745e2ce"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "840068320e4f0a9a11d4d1a9a26a4bd8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "b1fb3d0722e31519846ad754d7c8d6e2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "9bd7ef580d9e1cf2f98d93e315386b4f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "ed9d38b65746a94676ec09b5057530f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "558631fef17a56252655d8fcf796036c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "f733ed3772d46173920498547370ce16"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "bdafd87bd161e305b0940e0cb3d3296e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "9cd232ccd8e6bb3e7fe7bb7e8356308a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "81ff15a282839f6e679b7246b707a521"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "e216fe2490eaf8533c581e64fc2f573f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "b0c13d537c5232e29c59e61329598ec5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "0ab74b7f43cded8ba33e6b74962985ca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "0e27bfb914cd9a06165fcb0373b51871"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "6e339917b746018d55366bb8a666e48e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "1d329694c0b0c96ef4d696ebcc20673f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "9354c8420517fd953d122e3656e2a48d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "12307f63bc50430a673b3b559e2cfd8c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "309b8d74d62b83708fc783f1a9cd9c1b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "5d0485c56b5a632482a4e657c0f322f2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "192c38a194f8fbc6df87b753fcd604ea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "a6ed31a5bddcd23d870ae7eb82e40497"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "a57646426a22d0deee3cfb75d4209633"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "f9e17037404cbf8114d59b025febfd8b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "9a460cc84d072c654a72e7a8e66f5b3e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b622dfac4cfd4b06b8906a6d7b7b1caa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "687aed82b0ca51af08204da73a035561"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "8766fd8d8513d5d159beae165cce6f60"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "58ffc01d87a808c0cf4c3ac04892b64c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "ccf98a5815a6ffe31eadbe7c0c39f9db"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "ef5ae6d3fb99a40620c3aefa0b2c00b1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "5395a8372588457590a7b6784afe7e31"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "c4aa5d897a01f3c0f6eadfc819eafb41"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "c435e6123eea397671f7475e64848b7e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "c9cdf1d4fb51a944472f4a4873c05992"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3a1f890ad35da5ce2a3efd7f26868426"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "1e4602f87bb6a0d326aa5d8e92f8cd02"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "d34d0a33d7855bdeea0c987bd1f494b8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "0f1406e402dc0145d448a483b2380744"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "4556e6a22323d3a41acff9128f3b7d89"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "e16f7cd62f7bf25e995cefcf2e10c11b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "f3c699a665952e186646ccfba3f42c93"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "8150a8d91d0b01f59820ae4f449a2948"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "013dacb4565504931154c52243b1bf22"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "ecccb98730a352e92dbb29a4702d9fa9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "d5b07c822a8c582236f10425cc507599"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "6733d26394940e9faa5b1934d1a9b99a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "dfa3072de14070344a8428afb2a76a9c"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "d1cb19d0676be93f3e90a0e24d6570ec"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "9a5bca3e403980c94f86cb6ac0a243d4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "831f3c54805edc1760e7745f6702732d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "e56f31f02cfda128caea60ac27c48404"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "05ad2c765f3abfc95379a2b48ab00de2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "115cba6cec3058150f9b7cc59b395d22"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "d6140b71a07468557f3428d474d17a28"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "f064e590132ed5c1d5d4c33dec77d890"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "d48ff55276423bcd7216aee7c10dc21d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "0a85f9d1cfc2d9cda749e3df932e7f9c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "bd3cb234a2c7e9d390eda7156b987dcd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "110e39dc1f12f83c879bcc1287f85e3f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "343497636587b24efab906d36de2b36f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "aedc8c65b50d6b7ab5844c01590b1a5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "cbf2c8fa1695cff67a9f5ded2b516583"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "c886d34b137e3197a3ab43738cc8905b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "cf05c1139ecb9398a9e3753bc92fcf52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "cb3a228fd797b7db86d2461d03bfdd59"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "a4db33d8ebe7573e5019e322494201c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "46645dae49204b2a7fc5f05bbcd3dcd0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "0be9c5caadd11096f64546ddacd71e68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "d3f679044afe3f0ba441a4a260261850"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "8d1e9fb74bec83d1953042c8cbbeeb03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "5966d3872c4300e25bfbbd9d31bfa109"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "c05b6a2e5cdc511c28e7984f01c1008e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "df0600b8ca39efc0c5c3e6743b299e3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "a0ced5868bb27d3a8076a19b4ee3571a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "1f9a11646b39adab9ebab31dfaedb2a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "557f4079538258c6d59a8ffccc6720cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "485ab3b643a45543e80dda763cdccb7b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "a73f79de6b487f6c2edf124b2b572ebc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "60492a93f4bc753f04af11db5d87f507"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "5a7773231d15e6752a25642629a37010"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "8619df4a96ca3d486f79ba1165349a9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "8804fe2aad85a4adb32160547ad7f990"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "8e8955be1c8839796d3f138f41fb7909"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "88e0a39cc649615a1400b518255e070c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "70e192ab23095be2308c9faffd0a09ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "071ab0c256fffffc1e661a1adf9aa8e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "ce2592df2969d7400d84f75a3d49f1f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "412f6ff4d1447fea507df9b35a1b010d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "1bdf6aec9bce0e9961d738ea53b5e6fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "1aca0f646e09f29a6e63ac0adfe9546d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "e0ba50ee1b667414839c8ee97ad0da73"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "a94c95d246ad41ca0e6a06955f79e44e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "a48dc10d6a07ec72ac5a5970989d5838"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "8fa19d9af2f466cd794e75463e482f1f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "7e0bd2a3863f3a39746918e9b747a083"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "440cc90e615c00c2d0f9abb44863b445"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "e290ed81f95455b2fdd2df3137fe6eea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "6de5bac018ac4bf026636022b7d0c548"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "a8bd32203211d8a8bc9a0666786e774a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "2182d851054271604e476e7297a54aec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "bcfbcf57cc735991836ee3f5840eb5b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "446e0632b852e8ce66e7eab99b8bfed9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "d23edcbd95121c03b7d3695980c299c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "1caf84ddd3172328b183e07c4cfdc8fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "bc8663c938bc9dc41a0f0a6fda0f809a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "39733ea8482483b531848aa9c51472d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "00607c017c11ec7016b6b2bfee0aa7c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "05ca70173e27c0d401111f3309260b6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "61b0ad2f2b68b4d168e3ee7e305d86dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "a4e695c73b29e11bce50e82d82b64805"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "f4c0c81933d6ead059bf72bd5a15d79f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "48d4f060ec3088f4266c4bbbf627e600"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "5a529bf40b784e3978a8fe710087a4a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "3064303e72771b3247f5324a04bcd3ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "bd39e709d603027724dc6250d8446fa1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "cf5a0fa6b9a9571116ec946c4409eb01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "31717cabcfef99a0019f45bcbce7cfe8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "b09781f95a1936bf99ba3b667fd144ca"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "63dd6851744890cc1f15220b3c38ce8f"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "7f10bc69bf8c11355c73fef202c56d55"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "e99a98863335548f60ac07b21c05573c"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "de4943136ef9dbe6d47da69392cf8243"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "2c16cb33e858d8bfd0f358c4bbc59a70"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "d36c816fe2e81a9a965b52feb36002a9"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "164d62f3d2b8df65cbaaa3614021940e"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "597f6a9e3cde3a36d1fd9c498419c665"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "ab365c4f1a0fbc90cf11716ee953ed8b"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "36616e8424bcdfaeced495ff3a5ca7fc"
  },
  {
    "url": "categories/index.html",
    "revision": "db711fe9ed4f27c552fb3b39f830a3bf"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "b3d571df4a0674c3c616b1393ec255b5"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "8074017353fd2b2295f623d399b8eefe"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "21599c3c7e2a6875a129c9d85e24e4bb"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "04e3dcc11b4087e05626644b1a0bb6a0"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "e071616f2e42a8723eefc92d46cb29c7"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "964f19638a03d6fa5c1857a974177889"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "44fe68dd080ec0c836276d36c6e5eb12"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "955e8ffb5bd33af70fb793157683d20f"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "7fc71aa0ad6fb391ce36c8593b872c45"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "aa31358741552156079584056d004531"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "cf099ca9dd18b02f9746083f52448c2e"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "c4689d92ded7706e835b10f63889c685"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "f303654b1d841dec9e6bee68589888ff"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "38afb59eef887dcc2cb9daf6aefa3f52"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "73de46251bb68333455c31251f0ebb21"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "e2b9357db72230fee3bc7932d107f1bd"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "91a246dc5f0748609e28ed2016c4ed88"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "69f6726b1c0cdf146c207454e901f0b2"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "6713419805a4784ede7cc469965e8fbf"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "41bc870502ff8ae4db72e170b96f6f7d"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "4e954ed685b97dcac5034f630ad5729f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "fb485f11b5c3180e6d394219c0f25cb2"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "47dd954f0865fdf517d85e3edbc9d814"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "2a914df1628507c7882e4a2bf2333a71"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "4caa3bd11ec33ef2110316abe128144b"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "e89cba3197caf6afe400f587a2f2100f"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "3871921c89e3007707b16e3600a19c7b"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "fa2ae11b29bf2c5d01e6d181ed6a7e4b"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "90469e5bdd07723ab2468cf75b9f71b9"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "dfdfa1e7dff4f5326f5bda9f8ab5dbed"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "5e83638170ad599fdbd6089709ade2b5"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "db351e13cc79f63beacad48f441486f7"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "781c310c7ff402c1538c696b84648603"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "51f5091474a0cd757032f09b69363732"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "42784718bc2cadce68c8b48e82249245"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "c4017b2b45252d68e30a410afea9523c"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "2f3d0ed70ce8158e0462d746980b5961"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "8741a71ea3d1317750825b22f188cb3d"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "e1546fa22b1a97c74f13abf1f2940d58"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e03bf377445edae8f48ba4c14fce5b86"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "5b1128f5ce3486eb397db6bd87125a1a"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "71c99f08510511d51724c8aefe27b7c9"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "7c7e2112dd80e1e6506f9d4230a47806"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "6de8568852a494a6cfc01857a6e655d7"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "a4b358488d8661f51b247080844595a7"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "f2599ae6074e87be9cb8aa527eab4e36"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "171ab9558dc404926a02a98cab3d3812"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "434bc02a7737db821c32d856adc0272b"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "452cc6cb15751dd6fb3e516927c7ba2a"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "879c731b4586b68ab42900334b4856f5"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "37345c8b48b645a5366bf9c03fd5c24a"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "cafb3d00fab1fc7a9aa9f0c4f68b5e17"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "8aa77f55dfb4b8f1b1304d2134530020"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "dacafd8e8e34cddb861770ad87268777"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "0c2d043ddd4f36530fb54ce6d7dd5934"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "d51bcea35b743b8c2cf58447644e8397"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "ab9995d1a4998203334b183867574089"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "e83c0f8e611241d6576f75fb9a6db30b"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "e2ead3c7e449ba22eaf5670f946f1dce"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "be3f1488aefdb50ee286cba38659e5c6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "c7a30707cf1d4beb885150e5fa6aeefd"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "120dc3403ca7cfafd8940f9bda187687"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "595f3314d751aab03b37a4a388fddd6d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "70e03d52035ae827a633abfd1660166e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "03870139d866b28cd2ccd9b01d774f16"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "e360c9ebf07bacbfb628888d41792dd5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "4a9fce7ca11b0cdb93ed7813bd9138cf"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "e35201db88db39c037a8c18f084009a2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "f7242ece0d16510a2b1e0d8316b3e8b7"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "d175723c55c9de98803ea742b984320d"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "52d0faba28ce0f25ebe5abf9a1afb6a8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "78b9492a707dd6086c9460212edee7a6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "07a3e75e04ea07eac6641a078e17c88e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "9a5b1ed04ca9487eca8824edde46eb79"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "ba1e96069bd95142acfd81552b50105f"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "bba4e8731bd438d83fea0c1583472378"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "6d2e7ccbe0a9e8d77c753beaaf2b01f2"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "a81f6839b3b5278f54dc7675fe222687"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "0a03bc87a0989951a8835da41d838829"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "851c93cd981254f9f9a1f2b5cd9ea318"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "8ffeb6d9b61ccef84472a27d16ffb8e1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "52996d80d53017bd1b6117d37f48c299"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "5f5fd02565e2f0937832402aec5edd9d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "06d7fc16fc6e41ec506ed0181aec96ad"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "d97af441f61b183bd25bba6e9022f55f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "a04a0efa32c3adc57af02f232626d31d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "95ab57e0122845a5672308d1e939d957"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "9702734795932d0ca78a4062c2b450c1"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "c7e97737dd7bdce43991be6003df3e9c"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "d3296410c205364bdf7e067193935328"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "59d7b000948c6f36122c35256c606ce1"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "fafae470171867161a7af5e2fa31ddff"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "eba3905c78ce405dc29fc9c2ec12661f"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "751392e41530091562d298f4dd8f14a9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "177623687ac04c7f70f8b7c7bad0f862"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "352b3116fab8b600f4bbecee4d5c477a"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "7fda6c6f21df18132c5837894dedb6e5"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "b39029900d377f5b1192e1357ddab7fc"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "7c0cb29db7fbb0a3e3e12f78ba276716"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "b6bf036d047a589195b18d0e331bea35"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "d2e04f525c9630e73274b095bf22e29c"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "2f7ef5047514f629a5e7ac817589eae0"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "5e14889bf30fb0a216d575b5e5b0b615"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "0ac672793e66bf3f6ea95c14dffebd9c"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "30730d94ffd3e6995b6265b551496b64"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "139491cf39f9b27112f5bfa343a36896"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "15f1cc0724601a6ef12eb53e27fcd92f"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "0b96f22d807d61e542c457248f16b348"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "af09ccbb080cec150b3cffed983def7a"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "5057c0ded90ee8c9bc6a0fc91dd4eb8a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "bc71ba17d0b94b8b77fd3a1abfed7fae"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c0aeb3432512557d69f0fff47e81beb5"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "aae4eefa6ab77c701f465517841e3e87"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "853f7fe8d035d07a154945078c65077e"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "a92562e18199a311880493d075f0ef42"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "a122c55e49e6a3af3a9aecba88552d72"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "a32d07aadb7310a3bd6335a657f4f140"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "561414aa5d8ece6f1580e785c5d394a6"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "4cdef52f48834cc8f26e238d82c250a0"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "1c14576b4ac180be2199e78b7ee1e187"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "cd505058c2fcb7c07f5245f7d2d246a5"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "c3cb4f035ac8afd36a7d7ee0d011fd89"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "8b7b010854004d136c6d23487990a915"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "f64681f7c0aac7dac35d8a93120d93a8"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "41ab058a88065f5e19311d2fcc2bbb7e"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "b98507b7d69ccf2e42422f2e9c7c4c62"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "d3adb11a64c0ef9ef37e3d87e8c2b183"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "e09b077e8423dde8507e96184d79db4c"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "ae6d92f854b7fdf54d3bd55d5798507c"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "9739f01702d1592c7bc15bdfaf7f50bd"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "8d6e1cc684b7987cc0e6a48d82c53d66"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "5c57c954436598de3c689f4f31fe9681"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "6899401419a4cfb7828d005936d2c22b"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "21cbb1945e1fd7d1187b8d4a8ae7807f"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "bc2ab29b3a858f6227d288564e99624b"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "19dffc7d557401bcdc2ab69d1f096825"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "652f9a9f9d522fd48ed6cf004267a863"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "9620ffd06252a98540614d26a0d93d1a"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "551b15ce57cea71cc315501a3819f77f"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "e65ed2f926030d34e88676f245c0d287"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "9e9d679fb00d969fbb1f67cf96c79be9"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "b75266c894a7904072e7735a39d4f9d5"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "e5f5cfb2ea21abdeb09ba2d6e62ec2d4"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "66e9b07e6455bfc4d7b59ada5492cc71"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "013e0e134ec3e32bb92a7e68ed5dcf64"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "de557345706cdcc1468bd7f8e0b464b5"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "6ee58bf924c2021b726dd97f180a121c"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "48f9510c88799407de400534d557ef67"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "f9417df53f1e8b0411845f42e12aa9fd"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "8510caa21039e81c8e1e07931b1ea0c4"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "5a0cd452ea36a59f4ab6f5736c0a9c88"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "fff90b1a52aed113d250062e04dd3cf1"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "9223d61475c6e22764c0de6331bc3ff0"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "cd8ac16aead3a187db136b410b571f4d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "1a5373e98ce1037c6323b13e4206e3c4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "bd92a2a0e89c9c127ebad5af5a7fe167"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "f9ea2a0daf3a84e3a9479cb9aff2d417"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "5e706ab94914ee0ec3b9955effb24498"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "a3cb263a0440e1bdc2043510a3782338"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "fc3d3769c47fa9fdfe7fd595b5e2f7b1"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "005e23d43f0e0fd81094929f05ff0de7"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "d6b117b31162e85cf229d60222dbd18d"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "7c9ef1ab67c0df6e220b0ebfd2261443"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "ac63a8cad91193f4ab91a0fc82affa9a"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "35fc8ce0bc58eba14c0fbd157f397306"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "6d89e4a045df6970075c3edbfba5095f"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "d1bb6b002285a1bb133381993a3a1dec"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "dd57b1fa658bd0ea95c9d0182360b66a"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "164d2668315b6d1f535cad4dc1c1f86e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "126da55b90b756ead2a382aad264995e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "e3500abe5ae1f9179bbeeba295b8e74c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "cbf140f87a0586d8f53cd6efa1b9bf88"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "580a4f0e108609d3ced0a0eefadbcf6a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "91827d99bad689207608aa282b47479e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "cef2826af2afff3d0f5cfa163a0e5066"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "4e897f8901615d53ec5bef846852ea9d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "d626a557bddbd50cf132f77ebe014afe"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "227c4a4f8b04b5bce672144462d3ad97"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "5797f99089187613a0e57aed73d29585"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "d19a2588ab82cf7e90bdf7c3f1aef336"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "2669712d390f37c4ac37803694c74a71"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "5a0e01e5268f428d0f3fe50c2928edac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "e3bbd5ddbabd3a95bbd5c811a96ac042"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "dbdcb57d84904009ef30fbfba6704925"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "610c5bc617f179cc439ffc5d67b0eb74"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "e836855a7bceb785d28b5ab9ba12d89d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "d60b03dc17d4ab5e4a2454037f0f46ac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "a1210930a20b01c71010b4efc2cce69b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "dc64300ac34d7efb4687affc04a77949"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "afcf224a834719acb990689d447fc26d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "cc62d2ebd2b5cba828f1881281aa259f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "8a1e9f8d14720f20968b4fed8f00fb9f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "3c1231ee16e1df38a39d2ba540dfca7b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "d43e4527f5f9ec297b7929246706461d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "fbd4fd609f225b35c96503a01205e2ff"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f356cc09a9849082a8f3d4eef20c1d33"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "88d64487413810c880c9b8c8d3c4b0a5"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "883b3c61a53941e1c4dd0f8569c0aa94"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "3374b903665c3532a6b730d0cf569be8"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "a97d3064f47098617f8416b6b1d81b4a"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "239e2a56b5ba7aa9a389203e315eb930"
  },
  {
    "url": "categories/os/index.html",
    "revision": "7ac1687a1e141752bad38befb4ec95a5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "bf4ffed3c575796a93d152aae3717204"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "c23aa33dec751a17c5ae0a722ea1609c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "92b10a8e5f3e97457cc51e9fc28435cf"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "682b029ad82dea1c5c43d2b208615cc6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "6d5f86822d7a0552daa0d318926f3972"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "cb436e06acfb2b2ee6f51b17496cd29e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "83fa3bb7aa13ff66f4776f13686cba5d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "86b9db1540e07ccf25ba20142b7fe6d7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "40319d797655e418589c5bea37a42ff5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "72e4cd21cbaae2bbcc3d387d95ff2823"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "e7c1fa2fe8ac970c5312284ca9414b6e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "bfac278fb13d6a99f5770dc152e62f12"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "44e65911b362fbce363b43add0b9ba95"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "9828654e0d701413033d0ca48c516f70"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "2f1c05a7ba07a3d8f96d9e120dc06d78"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "666c2e811f0be1bfbf3d190e96e04c68"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "b69384c64578a843929c43793b6dc780"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "b53dda4288aa73dc95cc0e4e4b716445"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "ecf0e98b247c3a56fbe99c7660ab4324"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "ed688fceb1040618ef31ec7d0aadc5df"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "23fa4a1a6857ad7d128feb33fc783988"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "b8200a5ba138c50a92c33fadaf186517"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "ae8c2d16e462a93179bca41ebe66a446"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "bea69035e0ff65f1d994cb195e3127f3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "355b4371c9c3928d697cc9e0545b5624"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "f87839529ffe24ff56f6829d11b3bd18"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "48bc21006f60e1be68f29e4745e76dc9"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "4318495f84120b0e23ec56446e48cf1d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "7db96335854ebe493603916cd6e75eea"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "c1c73fc31cdd0f816a6f5d2eb790dbdc"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "0b19a82e0a5620edce0f22834302691b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "e1b7c593d5bd925b2911f6dff9d7efc1"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "33549897aad055453d69cc7e3ec6372f"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "b490b6cc76d1f2f730f88c7a83cdd708"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "d517d8233d47bc4d5ab48af3b5bcdd27"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "f2362aec2e3c56b7d91e8867a6faba4a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "ece7e378b545f378274ceccd598ef6f0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "d64c0258b7f387690c35de805a42a202"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "cdc393682dff777128aca6fb63f31e30"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "4fdeee9766a0d052a9cf59188642e99d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "a84e2ce3f30b78f5ff40d101c9bd5f50"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "4c646be74b828b755d7ca706cd26c944"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "0d0f2be939fe655346cc2b622071b160"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "24a11c781744eaf32e1f2c72b3512260"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "85f09d888a1bbe6e6154846bff05058d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "9cfc1c20aa6784d32ea84b3ae8c66619"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "d2c1f3773eb7a84bd8bb0a770b442532"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "7e40d319ef1e8a953e1b8a105d70c733"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "45f1679226b1cee986fc177d8926631b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "b82dff35f9de2e6f5d3053c6b33d7984"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "d7fd970aef6e853c9847cb561cbb4799"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "5e616bc88cacd2a9e356eab50aeb65f2"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "eaeb6faae47f02baedeedce0277723be"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "cd8558abe4fa1bb04823bc0ca06a31bb"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "d69da864c04ba022785b0d232f257582"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "9dd7d72359264da10756b2b8515c75b8"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "72e626bb6a01b36eae9385c6beba4ec4"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "ea59df1efaf164c3c794e72a73a86b0d"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "5926152e34be498913da74a449922e72"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "a56e077e9cedb1a558d597a1a025b970"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "7f4ffadc2bec9f32019881fe8a2ca6ef"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "2aa6313b860a2bbd13224154c1db774b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "f167c3c2d6be5d39377a3990473cefb5"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "12859969db4ac59780fffd5d3b379ed5"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "d9da32d273b29330cce0e6df456723b4"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "fbbcd7f8ad0b4a328ca71170fc87e727"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "c419254bbe1c9a6b94b4c4bd06def3c6"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "9d15a12f69dda587e7699d5e9fc52cdb"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "e3a26c3e631e652ab17d218d3dc5c048"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "136f5db29e4d897e0d5db30db11e1513"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "e78017d1b1171c30305f01f9cd2b3018"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "7f4ea178ee972a62f82e8914fd8bae97"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "e637c5a4aea8e648f62005f1ef37f5d5"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "7b9917eb153628ab02270dc033e38b65"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "f7f751766ed9fc8f804eaf2d8ce76d33"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "804c8db08be272601aaedf7c3b797900"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "6e567c866f2d295236629fbf22aa8978"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "ca9c8fee1993174ea98f0da3248a3b7b"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "ccda0b0e2735d2cc04e8739b72f592e2"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "1fd2dfcd82ca516040c3fccbb170c2a2"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "ee327305de5a9784a3726b079946d3d2"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "44255371e2f761cc5c689646750c6a5e"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "8051f97dc3fbc3b2027d5e2a46450269"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "751168f3c6bd275e3fcdcfcfcd0a1687"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "89d3c5605786d59dc3489b1222f44358"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "715524bc79722ae30b61e06560a2de2e"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "7acfa119a7cf29067a7d8d008b287e91"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "9cb2c68536892d4ec6710dd2dc17b92a"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "38d916469db7b7d65baeedbb351e7c78"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "22f3e2fdd3e641bce4510af534e150fb"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "d5d34c3a9f786eb3569254d9f3110f50"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "bdc936d496b139bdf225d84981bcd26a"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "412e30c0f2833e19cb53388aa0e8774b"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "c9b29dd556d40797c4332a98f53420df"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "915c6f8258e7ec2d82fdb5e0f08172dd"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "5aafc4bfd0510c6bef513321351eb464"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "dc865f5ea12c7df4ce8903b903fcfb7a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "7aa7c2130bb1d6e7b5097989a92ac0cd"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "de8a108625e9e65dcf77e3c3c9a6a6cf"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "caf690fcb990b58d6936a76cdda2e821"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "13d2f5248a26e0755bfd9bffad90e162"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "bab3323beb342b5d82498f7bcac1273d"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "16be8df42945bce8d60fd3ad75783cee"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "0392d4e2a9139b365bb7134a590b8309"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "242c6aa772a75f233ba8c0a9e918212c"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "61a747fa3e666c66aecdc3ca5a21f14e"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "827b9a4ac3bb814d7d10c628e89d407b"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "9422ad5c6383bd47dd9ea086e248d7d9"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "02b848c7a05b63d11a31a34edaa7e0da"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "301256be92d504abd6cb4cc55cfbfc6f"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "b1003e2bc86624a2225fa63b8ee2d6f7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "1660918377a8df9a24c4a979f7a754a8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "6c76a27fc3ae7a8472a3626669f944d2"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "a4b682ef33f951568538f1c5680060b3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "182dd39f06e8ae0575d06231936a8e70"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "b5028020051b57c8162342d494c76ec7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "fa4f8a0644f9584352cad9f87a31c87b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "b64ea681d781183ec64de6ce39ed00f8"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "c109fd769bb78f65f5cdfaa2171c96e2"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "f67f805fe62015529b56d6917b6a23f3"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "6c633ff533b038a06e8490aae5896356"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "2ea487aa8c736f0f0d62c82774e6b649"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "c5f18cf5d5ff42738370972d0ca54de7"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "29aec512eba2dc67888ecb0dadd39903"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "ce42452fdafff005d5b4a20c66899f3f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "8d473c33702986053dade5b1af62c5ff"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "4256bf1f8b0a50631a7b6b0d78141c9b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "b9cb4b685d844aad3292d7f3d71aed12"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "4b425abc176b99b4beebdb406b430288"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "7bac3f3c2732a8043a462735586ab2bd"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "3eaf155d97a620b432cad0908df0eecf"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "b266177f96b9715d0ccc97afce727343"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "a4633c67c32527e9cd25f143f363ee2c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "92ededb77a3580b25241d347e1bd9734"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "7f77dc878b31633aee8ca5c02ce85c93"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "76e61a3b3f2ee0c266a05d45c54c50c7"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "06d73c863a968374161d4b39a7a4c55f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "e2d8f5d5d9f37a048d0bb526273c0e64"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "dbacae01bbd5643b23de63fd09faedc5"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "fd4b24ab9575bd687f49efd9db27ad60"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "aab602c0c5371166673b6a205ce538e0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "7d37e3e46bdc669f9744a61469547bfe"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "da630fdcdac1a188f5334f16b941dd00"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "a50be24772d4159d3734bc5651f2d169"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "d394a13bfdc437235781bb4b100b2222"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "18e91736ecb6c158b180035b6cf14cdf"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "5746558c118339f09fa7334aabe71c0b"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "670fe37551f1441b9c43632654ea6f99"
  },
  {
    "url": "categories/php/index.html",
    "revision": "9baf63cc91c0828526711a7325646935"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "828c9582fb5ba71672477a2c65aa45f0"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "ae43f6f44374b162834b30aeb58ac05e"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "ad42988af6f70fccc1aa8853b186f9de"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "946a6151eb2dce4a8bff43ae9b9093ae"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "e52f3e87e3949f96266d1a084b12914c"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "4cf059719abb93ba74f47f64d740aa04"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "ece99f6e87906f81f2f4caac4aac5f5d"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "5d81a0834697de19c1e91d3720485fc6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "2707b636262e5068dc332416076c06e4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "29b435742396b47f333c5ec025f47a6e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "3d6fe300db6ded11e6b6d59b7bcae546"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "9ea2da7f050a543b957f3962ed760b1c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "519538314a4495ddecca2b966332879f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "05fd71d75cf221513c219d0188bb4fcd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "f9140e7874c4006b6c014cf1d192da3e"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "3cb7049349ba005a407bebfd5c412d9c"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "d20cf0e4e5f945ed8d9e078648ecefa3"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "cc465e9b0c629d025ee047ae2034cb8a"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "e36f2e5cca30fd15c971afeb2983effc"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "f3137f684392703ee67140e24db922b5"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "1e34bc7bec096c1c5724de57e927c4aa"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "2ca236c83cad1601ab34f8abbf15a56e"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "84c514683cb5fba28bee62bb6c1678bc"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "7150bf018fff969e0fd51f52121694f2"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "59cc921ef13d9f99daaccf4e4797a4d2"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "bc6610b47f2f7240dab037eef4e78192"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "edfd708ed52ad58235cb3e7bbed37140"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "355bff112371e6a2ff2caefc89f14a0c"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "24a1ee6944fab7d72cfd7fd2692a7d50"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "f01837ca263498b212938ebc8b99125d"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "74fee24ee19bdb4890c3b3bd16e2bfdd"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "c701bde353b206cab77675ab7b9d9487"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "91dfbbb1e5194e80adcb1b77835ca09c"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "fdad590d52976732f9561d423ce92f8b"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "368578a7e623e5ded604a4f97768971f"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "0b2882b0ba1b6812d07b1bbeb3578dfd"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "cb61e0beb5fe44041342ba7e9219c50a"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "4a362ea7cbcfa1c9b5b86dc9d3e15278"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "721fe2a06de1e3a13aa0d8f0d2769f86"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "915776db62dccbc79176de8409fd876e"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ed52a31aae2756091b494e6e37e9641a"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "89ae6dc0c67049249a7a711abfc260f3"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "c9c05e6ff6757bdae792da6b9492621e"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "afb441f084a249b9f3305cad2dd44543"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "8a54868894fe940e813576ff5f1b8e73"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "9b2b363f16280b26ee4f6890cb29451b"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "037c8f8220204514f81dcb8b4a262245"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "f637f81e8318c19a3d665a4d8aa0409a"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "29b5fc947916706c7c4ed6a883c4b721"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "1de91a8dd7018fe7741d00ce45650796"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "ea94ebc5a87443f46aa2567bc50cc504"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "1747ce9658e4d92075f8de0e7ce5523f"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "99fcb3a8134d498ebc36e236d83a8eed"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "930cbc487783d85839054d38ef22a652"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "1ad7a81ed5ff0eee16fbb77e483f9c03"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "1275327ff2f3cd0bbac60d0a460ec175"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "67d5a91ed5977a566fe2aac9db7f73db"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "ebb933f0c4040f9e9798a02ab6461030"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "acf6221df34c0ac169f0f5bc2f36cf49"
  },
  {
    "url": "categories/python/index.html",
    "revision": "213a44f83723536f2d146bfb0965aab5"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "a37ebcff6cb06d3f07431723cbace629"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "7effa8308f040dd606099feff5625229"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "b5c18ed885e06522fac0b884c7331e1a"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "523cd2366c003631cb3bd0c548219084"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "2b0ed77422fdce606c2a42a05d6a0c0e"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "a39234c2c66c2181865b9de634aacd67"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "f9a8ddd343423705057618dac6cae3ad"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "f7d02d818e7adf7b9bb1751f3650a067"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "d30ad83184432fe32d724d1dc61f6e08"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "ef363d5268cf9eb2255ea46d717a500b"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "c694fc66494978d90c0ac2ceae59192b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "e6f7d22605f1b980eaa979bdd720cd93"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "6d7fb4e55167ce0f3b269cd67579410d"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "a8ed8480c39641d865fea6eb79ddacf5"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "f8d32c74209b83014ed2ad97ec0889f0"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "49c00be10f7e20998bce0c1cadabaeed"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "7d7be8fcc84cc48fc3b93cfd6e2454fe"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "07bda04ec4431c3e11af0521c0b83880"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "1f5fd2592a6f1d2dfc4f08bff62f6465"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "c238182e1d3cfba484dcc949971f2c37"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "1842631a91abf0b93d9c49d8c8575f93"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "bb97b03de5a7627b43b023d265ae101b"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "cc2be060cdb5d46e5e20996ce22b08fd"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "9255ab55e70a3e39effe65bc5ee3f7c9"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "dd66aa82bb71c3b1dbbafa0a3fec58c3"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "a49893f5a47acfa047a19923747bf112"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "666647e946fb8064e4ccc9a3f182905c"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "54ca8c14037c9fa8a064b3044bdba54a"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "a4d3b4903386c884461cdfa850b5acf1"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "50cddaa6a8bbf6a9fb8da534c0516589"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "a61a245449150271f9831dc2005dccdd"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "b5481c780ed3b5a4fabec8c1c72ac0c9"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "134c506b5dcc7dfb60cb0e47e1ce7fa1"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "f9c74dd19dc6027709dcaae6d2dd32a1"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "79e954f9ff7246c4121d2fa83de1f8de"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "36cf172fc2582e8af632e51d473f3d12"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "18f1863148a843d4efb02da144c87862"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "c33647d78f073e517b553bbfef641f62"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "b757a03d3cce206ececa6669b833f113"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "772bcf200dedf922280e30170d89bc48"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "78e8fc817c3bd2fe22d33e6425ad2aa6"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "95f83f550212143b46a06ed3080d1284"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "965d881150c284087b379c98abebec05"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "aae7220bbe58fd4624cbfa1a6655b7a6"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "47cc5ac71e9511dfe21e13b33de7baeb"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "5ddbfae8c19f08b96df9b3d5c22b0c15"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "a5bd8443bdee7977cf37654a60af3bd4"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "9719619ad1535fa27111223528c29e2f"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "272eaa7009c197dfdd379512db29874a"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "518c5a1a1d9be4ea6ca13d501b877cfc"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "9325928417db152347ca1da6f07828da"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "87f52dc13abba8e3b19de36def15a872"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "6ae7c2d95eb8854c39946448cc8242d1"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "5ba044887178203a2ca1c79f8bc4d023"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "d0bce3dc90050be185da54e16d95686c"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "a14cc336309174ef92783d76d02f97da"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "38fab3dd164b332bf1ed5f4cdbca3cc1"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "1ed2c6e08a3225dd288d2c1f05a323eb"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "79a7f652df8819e61976fe5e15052d2d"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "1ac0d28daf3006d1bf1d4c938a7be673"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a5eb01a91f4c271c5ac8b5685d1415f0"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "a4255fa447695a8a7b061064f0b79a05"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3e177eb07ce306f89295d66c58eba116"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "8a8cf4981b690ed378cbbc693efbcb7a"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "2c661572d59efafa76763a4f349539d6"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "ea4032fd2ba6230676233a46a2cf0ba6"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "f9f070f3b442af2a376764397d025d80"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "b37d1e4ae16bd85447209310b490f2b5"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "75293ea4a8b8cd3cc210fd90543ebbc0"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "c8277b2277df7d55bff0d235901b8777"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "59980d475a030a0186ad46fc6191bdad"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "b3c25466533ce705333be9ca783f2f8d"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "97a6e65a0929810aa9d2629f09e7bb62"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "dd4f954b06199084b8ce0feabb099d09"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "64b4bc51f257c751e9ec8f6baede7c90"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "7473c1f47f124c09a9f366556b8b7cd0"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "ed442ad17f7374fb20a6218d29f8dcfe"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "96bf00e4e2ed5aad936fb9ae222deae8"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "64c848cf5c7d3fb6b3393a8d7a193867"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "6092bbcf1554dd84112220db637ce9c6"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "870f0a28c95fea43ba4bae19f46eae3c"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "3bf202f97d2d3d87fd73d3ec2debd8b8"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "2c55cbadb5da1adfe36b422bab6debc3"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "f207f2c4aac2635d73eb2c78ba6bf3a0"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "1604412e3fd0f20ce8a42e6536eb0a06"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "f9b6dc07381688ea9d4a3c8b78d3e65d"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6f5e38319e36415c4e4ce9c45e9ac519"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "6a1440f8c0a40309d457df2a71849dbe"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "699c94583b434b0d3b82efa53832bd5e"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "3ec09f87c203267aaa29ea2eabb4c3c3"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "4f9aaddc0b4162d0f2f329183516f0ee"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "efc4d358af9481404393254e6bcc1bf5"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "c11ae562ed6c3b5284d2ae0f80a827f6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "d7b9cf9ae0001b3a460a3fbaeb713c7a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "a8a20bafd32216d1146e7c480fe1ef76"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "fca7a2d3a417cb684b0b819c89c8eb9c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "88ecfb2b3b8a7e669048ab4bef8756b7"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "fdf943ad764cf47d67c25b4a66bdf31b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "2c006e81705fad26cd286e23880009cb"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "b0c975c86e56a6e79a9648c995ade3f2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "63a18bbb7f81820c6b39482fae2e5e6c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "ba8c84fd31960aec0b4486749618fe06"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "d080c1820b9afeacd1bf7a84c3f2b668"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "0b98ccacdd6fa6beb401e0c954730aa7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "ba1d1e5cd7a5c7dbfa02595b4178725f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "3d2a42ed690986208b2e2a5f90788f6b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "84b7c2e1bacc10bccdb1c03570f58f8c"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "3a689a83a2411aa4c35fe1d682cc021f"
  },
  {
    "url": "favorite/index.html",
    "revision": "5c117e3933797f0e9c6710c6193b8e32"
  },
  {
    "url": "index.html",
    "revision": "36dca173955f4a6d19347e999b120f42"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "f0c5648a45034095182d1657133242bb"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "261e47d7c99a69ab82712445be42a9d8"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "1f7356ccb1020b10ddd7afcbaea6d46f"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "3984187992572a5b1b08a9155e7e8099"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "31b65c040d544c6d216cc6fa887c7da1"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "366eb489c188686f26053864fdc33555"
  },
  {
    "url": "note/index.html",
    "revision": "ac5a9910ebcd577d52ead8865cce4ae3"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "7cfae404e12143eeacaffb4bf9c05d5c"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "799f4f1850fb0aebb2eddbbb77bfe6c0"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "73d09668e769ed07b8271be4042ba549"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "685baa70db9ea07dd17d7dd85b04b252"
  },
  {
    "url": "share/index.html",
    "revision": "d44cf0f89341f04a8c43599b4c04e999"
  },
  {
    "url": "single/about_me.html",
    "revision": "c88b6bc6630696894c0097c5d32a5fcd"
  },
  {
    "url": "single/all_article.html",
    "revision": "d3762e8164c75e6a05ddfd1629afd216"
  },
  {
    "url": "single/welcome.html",
    "revision": "f77a3114ff1b33120eaccb0aae2d08b0"
  },
  {
    "url": "test/index.html",
    "revision": "7b8f05d4d5fe4feda1f7bc58675d145a"
  },
  {
    "url": "test/test.html",
    "revision": "698ff8c1759ad50ee728b98921f8522c"
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
