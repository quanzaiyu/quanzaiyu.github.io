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
    "revision": "95dc7953cb2e6d5cc54c5fd228843d88"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "7bec4c2cc125f66e9f66e2d664213d51"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "c3cc40040f8cdedbc9b88d69b669213e"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "c58fd2c31a011285cd0bb48e9510ece9"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "4966d129e4a682b07c395d4500634553"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "5b41355489feeb55a569de04c47f193a"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "e1fbfe311858555c5a6ea9c7f6737e66"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "5a2a48ae9dcbb45f1bdd79a838e0ed15"
  },
  {
    "url": "articles/index.html",
    "revision": "29a59be2453f762c007c3875359436db"
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
    "url": "assets/js/1.251e5b85.js",
    "revision": "7ed6ad5026ce6bb3fc0d40d32f09499a"
  },
  {
    "url": "assets/js/10.aac01f19.js",
    "revision": "cec0f9768aff0195c756fe389984374b"
  },
  {
    "url": "assets/js/11.9bc70eb5.js",
    "revision": "e013d7af19ef1da46ea7cd2a6dbbb12c"
  },
  {
    "url": "assets/js/12.2bf2c606.js",
    "revision": "2ef6338d7173064467b02795dfb4af8b"
  },
  {
    "url": "assets/js/13.a4394071.js",
    "revision": "eb50f1ee80b812164f3dbb2ce22bb10c"
  },
  {
    "url": "assets/js/14.442c32d4.js",
    "revision": "168e2cbc81b0de564b0864784b08acaf"
  },
  {
    "url": "assets/js/15.446e3490.js",
    "revision": "2f6f0f2d91a357ac44851b485549d277"
  },
  {
    "url": "assets/js/2.4072e20e.js",
    "revision": "3751db7c4b25fbc2ff29e72212bd1d31"
  },
  {
    "url": "assets/js/5.579e959f.js",
    "revision": "3ed111c74ac3df2a56f4ee558ed09b61"
  },
  {
    "url": "assets/js/6.344b7b51.js",
    "revision": "975a83b3583baff7d3bf346605b1d711"
  },
  {
    "url": "assets/js/7.13e6d017.js",
    "revision": "bf911f391612d8c579b7fc69a79f1c94"
  },
  {
    "url": "assets/js/8.f725cbca.js",
    "revision": "9f6829ae3c462d6e2ded583f3c755bae"
  },
  {
    "url": "assets/js/9.39a4400d.js",
    "revision": "57cb4cf4bfd525c9da92d4df87040a66"
  },
  {
    "url": "assets/js/vendors~docsearch.03f95fdd.js",
    "revision": "3d20167a6f25d55d042bb677f7c51075"
  },
  {
    "url": "blog/index.html",
    "revision": "9072ddf46187be28b51e8463f0f20a7d"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "96c4942afee81cb624d56dad9b47a243"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1a77a317b34e02edb6701fb435e962de"
  },
  {
    "url": "books/index.html",
    "revision": "a464587d9792b76cc641246aa7c0c8e2"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "348bed2345c3f1847b6e4852bacd9aa6"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "4b5804edb7c5107e9bebc193165b4d60"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "26c7d7fec67aae669f6aa36af4afd477"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "7fb1beb2ebf69e0a15d5eb34e9b8dca1"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "3fea4485da826db9f10df044ab08f3ec"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "33c7e38264a6a13f79f578fc1a385cbc"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "700c8be31faadf5aecf0e0a07d4152ec"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "26e47c483e4937c74f2ec0f23fdba727"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "ccac6afcb1fe82f07751cc7ba8aab164"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "61ae5569ef2904c8a284d93410f1c2ed"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "4e2801ef952f5759c5769880ce16f333"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "8348b33907a32cd12f70a20875ae1f0f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "dfc11488edb39cd16b79f0ecc302f724"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "6783ec3e109648c31e8dde07a7542cf0"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "46e1624a9dc582c1399421635eba74e5"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "007b882e5f90ebbfa1ff0a5bd02bdd69"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "9d7400d16086ace1b87fc8288285f5ec"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "d2ba6ce140fb2a706c09c2ad17620e09"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "e7cc1ee0d206bcd6bc760c5778260d73"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "1e0d7994389410ae5e7acb80f449fd61"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "1713ac4fbbe3145f3a59b3dc4d84e038"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "feef8ffad919406338f44366b154d026"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "b9bf0caf89bfe633d1fb20b70bb9c6e9"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "de71289dd00aeb3e84111fbbfa75e588"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "cff25607d331eed603e82fa403b734fb"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "60da378f62beb49085e448fd320f19ee"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "8f38803914dab9d11b29842c961bf9cb"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "01c1ef58869ecbc96102416863bb3436"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "32fc55638458c0b6cd1000dd3d119a19"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "d579c3dcb92e003db407ee7c11811434"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "58331dedde604f0ccafce9237fe5ff32"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "c6f0f57268d2a404edfb9fb619b6b26b"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f6ab787a77325cefdd5a1fc611709914"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "3a80ca3a1eab2690acf0e653c54e8055"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "e4f7ba8b51c15ced048d9bad43023617"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "7b36a8c176db0b8304e9d37c9c915ba4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "124c98dd9662457a3e465fd6802d68d8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "4399ba28e62c2757d035dd5a698549f0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "41bfabc24ea0c98b5d60be3e474cd199"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "796548b3e146228831a1339357aa0c90"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "e3803692822d9d82c0d8df746bf3a4ec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "d5343e9415a9899010104c179dffcf5d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "2dec38baca3785c0d0a26da27ac6cf1c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "06d5a3d981223890be81447ef431fb82"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "1818b67169c66d299c946ff88b43560a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4a634b26c57509a5223fcf0b8abddd8f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "fd39fb7a4c8fe216b5f5fa4bbf2f8f52"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "48331597410a6e158d2b17363f514fee"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "07ade6fc26a52268cdb0792ad8b6ff9c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "d73febfac19409237bdb057013ee49d9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "5c60e9d8739151ef8bc8ffb4224d46c6"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "b04ac50343965e7a400221184d87155c"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "dffac2fd25b157ea91a6328f90205b3e"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "e37446c737e6d3a301e8410cd797e6ef"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "729fc72ff2b33aabd05eb324baba0dfb"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "581b99d5ce79216a3a788d238c7374bb"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "52a91e0d411f4a7b97927931dbe6006a"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "7fd4baa37588e9c90d39d4defc4bb857"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "8ac7ae63698581298521765d64bef2a1"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "3e6a809b5d736b11d010d88ee2e0c943"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "71cb93524e501b59f2fd9c50d98b3b77"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "a3ef6c410c60113b8b917c7ec64ed2b5"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "27122e23f847fdfdc5ccfd479798891e"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "2dbb4f451855542c9f827d53f9f0ae86"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "b90754d056f3979111eecdf7dfe03892"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "604e289b076440488c89579e9dcd59b6"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "57f99ce30373f904f043c7745a88200a"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "c8a5b173c3c5f2a91d0c70c8262f223e"
  },
  {
    "url": "categories/database/index.html",
    "revision": "2370187a35f12676eb25ffb78d7684ba"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "64dafa744d69e972ffb7c7a4aea5e1df"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "376f037e6222c584320d07f7351af5ae"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "415e1b75a6f84f63748a8048d4b61c4c"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "ac5efc1e8e5dc9bb028ee3b9a7a99e50"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "c400677d08b5d5da5e3b66809791dd18"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "99bfc8974d63b9405789aaca421291d2"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "d3ef12466f50aa5d1f8d68fe1eef5248"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "118bccbf6ef77805578fe22f0f113ca5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "c993a2d727a8ac6f81774eae7e974ba5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "43cb5708854bedfc0a88716864b4eeb4"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "dfde417f25b8f6050a68f56d32112a6f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d158ee590fb05dbc67f506c977d07d89"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "0487c064b4157bbf2c7531d601955b17"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "151d043a23dae75a25fbc8c93fa68c5d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "30f9c8cb3faa346d75ccade03ec1251c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "f444356ed3b37a3efb535194453b06bb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "22be334e4777f6b0835b8f2e8a16b7b7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "cc61e3634e5cf381d3e51a659165282a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "eacc4e95b270529d5471010444718969"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "c23a83d03447dde270fe0d1fdc114635"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "f541e668448cf3699b51e674699d03cd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "33afb2b64754dc04358dd1ac8ba97a3b"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "53280923d66edd4d4219569aa3983ca4"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "0439793a33012f4d1d823d326a854436"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "d16cc1aaacc62d1a736e6799aa122deb"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "99636e41c01937e9022dbba8a9c64681"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "b0b4dc5d338f2f10eafef025981569a7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "f3fef80a34b692c6111f62c7be6f4bfc"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "1d9e2a908bedd597950397bf45ecc64f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "cf8ba959f5fe50fc582bece6d23692d9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "dd0a5db4921e1cdd787a21e3658d1dfc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "9f89a07680d58103f32d8255b17de8a4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "2a45d990b9b973c8b3c5015976073f7a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "52f26f6fca35f9af2979a29175832c21"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a69300a823927b7bdd6e2c352756bdf9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "67b31ffb7563851413cb502001bfed2d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "1ab0246bb9efe2575edd64b57b8eb4b9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "f09041977f446faa00064c6bf5ce1ac6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "f78e8af8e16af49301584a4797822d50"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "d693e711fee27f62a86a48818b74154f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "c9fd4871cc9de00d51af1c09a861716e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "74e7a758e02ba4abdedee3ec1a96148f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "79102b07aedd7260cf65f72bd2577011"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "61482cd62808d6c834946e42c6b6c3a9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "eb33f812baa14a7f015c3e7d2e852da4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "31ad1daad1bb265327b64240b4ad91ca"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "7201744b60337eb7f81d221b5687025a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "107097f283e104a7760aee4404a0e056"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "1ded2e580e97802f912b32d9a9a3dc99"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "0f1fe1def4d9c6bebc7b37b0761776b1"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "17a7bc9bac2812610fafa35b5a375161"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "96d1ec52410ea0658bc26b89c352376e"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "1fe13d41a3889c315eda317743daaa3f"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "042fdb763ce86f716da825a76abd69b9"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "2582f3e39f4b020d9a60d441479ca584"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "ba80460fa6a88f8c1971e2892b3ca388"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "6151baad4e763501a60f29585f5bc484"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "3154dfefb935e9cb8bb160285af43f8b"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "f1ecef24276f260b2a45b8840c4dad6d"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "38de1d26d98ed22f98330db62ad0e7a0"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "15e2bfa8f33d6567475b84e4f27120df"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "9f96f1aa2887cfc46b0732bcd53c9578"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "1c0d82f78b6c15c9537e51e98ec7d606"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "c7dbfca094e3e566ca9662417bff4391"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "263f89ee2f57b8342535fc13e40d61f0"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "772642a8bfa157fd48a601a5008387e7"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "1a1b977bf1dd62657fc185c7a9577f67"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "54f7849566ead99644f0f2d1d5cd1127"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "8a720e0a3caac2d726e78dacdcd65f39"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "1d7e55bbdc7d1aab5353ec488f81e94b"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "d9d25c8df3f8d2820903d2b52c3d90da"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "ac7f82adfa48f23fc9a806ffa9ea4f84"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "5fce3272a8fd80754cda40c58dd8c8d8"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "2ba51e34b9e9ded29636cb30dd965504"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "61d5cbdf73a2678701fc83126cfeb608"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "7fb2f5d591135da60d9d98997eeb596a"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "9e573320cb69e80fca2fc31b2f99e8b0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "59d65575b5db0f1b364fc4959bf62f49"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "863e2a545a3cda198bb7ee951cf6b611"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "2964cf669b594b05aa119e3c2241fda4"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "805ff108f31222c7d41ec8b3800d87f7"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "8e5da1282656945bde50127c71a6c315"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "8bf76b90c0464eec56ff66eeb84c6f67"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "603f8aa78ea0c68fb8aa54fd136e2ec5"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "f8fc2038ddef34b115225170384bee74"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "a62433f39785122d6e8c3bf80e82373a"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "5a200c18580e74c4b5168ba48b0cdf28"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "8ed5cd851ec1ec4a41e2d1adc6b957dd"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "e096cc875d6eb054e9dd6e367af73251"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "4c5564020d71947a5ebc925029ab94f0"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "f33db0ad84dc6b1a00e1122f8d8bbdc8"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "3569c7e1e1e254750e01bb740b1497f1"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "7660182da30d77b6d07b90e9a6e152a7"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "944939c351335a6a9d12b33f2fdd86c3"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "65fcca017f9f4c8d902240c025d56c8d"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "3bfbb05a0e0f0f9e3918e7eafa67f738"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "c536688e085621c3240e9e0dbd096c74"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "251804c8c528189d9d05d0b6c263ec40"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "e3827d1f8c1bd837b89ee865468203ae"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "5581da0454325ddf006b71f12201dbc5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "ea128f2264e2847a0a09e12f21044cd6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "7ce861cf1d2221ce4770b9fefca325d5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "360609582f443ad720aa0513c0dcbfda"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "a698c3e9e0995621cf8692a61f701c31"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "b8a3baadbb040da0b1e97f7e838acc94"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "cae0c210c96a54a81caecd729796fb07"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "e9b051dbf0c47cedd1e780d435a13a49"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "b37716ae0c1934e9d60f56c30d41febe"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "86b91e2f3545f6230deaa3e2df549a99"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "b6db4078fffffabb76840dba9538f01d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "c50fa2f8fe8e238077c5d72e844c8224"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "bf87fcb4f657444a198918a8c539c7bb"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "98293ce58012b1a85789b2c1cdf8674b"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "14bb38d0eb818f5ec41d6ca31803d536"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "77256cd0c9b3f31e44511ad11a418944"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "cb11a10fe9b2e0f20bc969dfe356ba96"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "0d6a4070776a4e54496c892846333bcd"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "d113ec1288da439a2e1220ebba235a74"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "2c6ff96cd5ff1fd7c5d41b2340bf91cf"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "edb34f4bf638f01db3d34bad9a137507"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "4558c25185795e4e4796dc7d30a2028b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "c7aeedcba9e90ac23e988f92106f0594"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "7f1cdcf84c44689e43dbbeb10aff7863"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "ebd59ef48d6a0934a255dcebe948483a"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "5e62617d7b03685ce9ce013f7d07a06e"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "6ed716e288212baeb672a1b75ea9c6d7"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "c87bfa956300cae8c9d9a68825134341"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "0a4e2ac6b50755a4297ea09e25365d26"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "556dbbbfbcd49268a8c4b569a9b89ff3"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "ea1b18b3a0ba1ae28e932622d2086cb4"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "37070068fdddfda06f1a2ff8c2f71606"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "626437ecf70f319c74c3c014878cd68f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "91640a1c637ecb66b3fbf86df3efc180"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "cead99b00a7a0546953f08ab4b2bc086"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "d40d93e162d29cd10700468020a60e07"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "b26979fc901a114de942b6779f6558c8"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "c39821b16c3f475ae97f77a3dda8e7fa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "05cc934678d38ce1ee7c3bffd7cd0d19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "7f8ac25aab8d34ab05b0f34e6c021bae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "7c3c42f413450b4a5da61a0792aae0c1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "d07709e33487207168da42e22280924b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "35382203ef8cdec43ed64b37f2d5e292"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "8e74cdc133978c7cc3b6d4e9c4696ad1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "b2ee07db95402dc830984cb13c882272"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "ae04144c5b39f7584c806344190df887"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "04a5a915ba5c0af70cb02b6885ec7e01"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "75439ec0eeea42c356fc547b82290bfb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "53fd3223d9530c7e7430efbd0c522cb4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "fa7320521d3917a6064cf77a0f1e9bd7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "2b2ce9a4f8f4ea9ba21cbb57b480758f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "8b55a7a0f4c1451208167091cdaef4c6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "37da8a4b8f9384ce952ad52f46f6f631"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "3474e0aae3d4a9208b03b5e5267be6d7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "8ced95e4e1e7bc010eec814689b69de7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "99b6210c1bf3d0d9081e4f04d3ae46d8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "a82a6063f74966ff405708e0b93151a0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "1dea4c26b2b1ddb47621fda8654d3a85"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "8450834c24609339de22a43f40d9e597"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "d8460dc876b8634fbe894e8d2e58808c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "5db27a0946e72d47f3335d5c5d5d48df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "167d6b3ab79a847d6704e7cd69bd81ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "fc79dbfd4e017aceb6b6051fe0a7d45a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "132b783fff0065ceb66e42405e3d73ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "d493579035f5e6996b0f24a2e04bef94"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "eac59703a1d2fa7bc09aeb473f92251a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "9914804c10d4ce711cd115b37da4c41a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "56ed20eece35c60a427094ad765f1735"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "892363d0948262f3bf5348ca70866224"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "f4d5a1a0ef1b24ceecde22af9be2cfee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "1e14a7ef7ed02e8fcfcf10a43f86db68"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "37b46e4bc08cc5e6710566a58b3e7d1d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "2b821e612ccc39494c3272f234c4845d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "5d2fc678c3cf45ca9abbce8076937083"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "560181287fd36547c750637e662e8be7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "51e0b2f855807212edabd73f445434ce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "3803a7294e35cd42f913fea401d7d31c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "ba83393b8da26c380928a105417be73e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "3872ae55257e549ef6c27957f5863872"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "43fe02e475ba129d701be0252a3d2de6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "5bc63449cf33a5da29d928b1b5570084"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "91b157a4e5eadca27ec8b404a4ebe18f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "c1d1879deafe9f6596ce4b417fe552c1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "87b3beed94da50258946e52fbae5b650"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "c2458ec31877b53886723bd271ec59c2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "cd11198967d8d9f581fa8991c1d5c1a4"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "55002233615ddbcc63a99b7aaf8e0f00"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "6342dc0ca5697a33204cb6fe424425e4"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "8e6058832888462d83a8dddc7a625dc6"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "f054aa28aaedb8b3936d070803e3f737"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "4fb3f9e916d4428ef946571c4a2f5ac4"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "f702683a4f9e9507151f1f14dee87abe"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "401b22ad1767e90bd702dc7b2befb003"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "68a5bbd24afaf92c09e6d18ec1edac05"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "6dee90e6a86cf846f579597323d98964"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "1dc51d8e99ead4e48e2e0f637bfa499c"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "863670bfecb0910679f9e67317fa0aed"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7c2c0f885a747571b14980f83370fb2a"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "df34cc12989adda0b357e3040d663ea3"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "6ef19a1f1b306c6c19d27d8fc9a999d7"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "1cce8546050dcf850097d58fa014031a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "13bb9216e7e3cc9dd3ec4f95f9457841"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "29fb9ab9a36dc755e835bde119c9c8b8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "d405ef8015b20453079842dfba032030"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "7a9245486df48013bfc6e74391cc8c7a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "419f134dc46e776242463cbfa287c8ab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "72089f72ce36d022c8d03e36dd569379"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "85dfa577eb8b2dbde53ed440b4619333"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "bb7d4b3be555fd75a3113b309eb08b8e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "8f92bee62fb910e1102cbdb7a46c84a4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "338233ede6f2d7ba40efb514548c3d83"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "5c8ccfb086017b6f86bc27a34bac3522"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "48457f71116320ac1a3950a6781cc595"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "cf913bfe65cbc2de1674f307c28fa5d9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "fd46c9f32fbf9a81198ac7870d1e9a6c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "52e3ddcedbd7352a0392ae6b7e0647bd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "c67d4d107e5c90075ecce93b65698e6d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "d271c8b187a600843d1513d41d814996"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "41f357cf46c30a7b44ed0cdc0d745b4b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "657160ab52c2281eb4ce75daabb431e6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "86d7cb78f276bc008d55a8bc786bc21e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "d090c714904c95203fc3b88b6b7f2ca8"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "774143710914f9bf341e445dbcd4e94d"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "0bfcc18c7ccc6688eee23e4ab1ae1eab"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "607c506a79b77478243dc2cc72750d41"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "94ce9e160d13d3e6648c70fe345c3308"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "dae186fb9f7a687607f7b7bf6414db65"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "e5d1d5ff7ebb7cd8b26480805181a58e"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "7e4bc829723cd64b3250bc34d2e90fbf"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "c80a09fb0635e173068a2db2f5b5e57e"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "27d75ff15cc82d24dfcb693643781b8a"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "017d5525d52d69f56b95e32ebcef785d"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "2d6ba9bb74a359c52d0f238c5fa4b024"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "a84e90e2f911e4a4a6b99f18e4e484d3"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "56c0a6d3d3b1d4a93b6f6d5598af3126"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "2298986eb1309b26421bc4718d336eda"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "aa9c25841ab66df45d71e6ae07f4b499"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "33caa0c18ab0d7610576af77ff15917e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "0d5facf9526984fb2e7ba24d2f5bae6f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "a0ac20eec318c152b5fd35b5d3e5f87e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "4280660973df888fcbbc050403f4291b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "c94325d9826a0cd2857dca7d8b89f4a0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "a6357c7f9acc0e5711bd0ece2c62ff43"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "a2a0100ed6dd79ac8ec38fcf80da2298"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "c91f5000367c84832c557415c95c5738"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "74d0ca2ff3cfbad29a43b7b03e98841c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "f9e98db852ce5cfba5b75352166f8de5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "3f296c9c9f1bd723a89895af559e507b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "8c61933592236c4d7bdc788d527563cf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "a9c87b309b4718dfeca68c7b81fec4de"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "d549dbadb153fcfb935f101087296bff"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "d7f8d1adf66fb42b906e4f19efa5d7a8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "a83b71bf1ad9039b3889952946688044"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "58c1b28e0c0d7b0761f914ffefab31fe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "d464b01023864eedc08d0283a4e2508a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "7951af91931b1cb6f39c6b07c8b33484"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "c0b219f8c0165121bb300783dfcd9484"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "9214c81f512b63d4e473935d7ce30339"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "3b3ff5082dde180692fce9de06ba919f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "e926b427843e8c2fbfc8bb8a6abe0242"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "bc7f2611aae71bd645d397977debf0b6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "8937ff2cc1f007d16aa917ee4167829b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "1888de8706a9e2b67ac68073c0286789"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "25b7293484b0e871da65e59219a3f434"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "c8193e3d8dc880f47bab6498435cbd89"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "ae0d846b995419c89e510beebcbf9f8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "c774f2c626f48d2ec47be374c80bb09d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "1d1f7348d62ecf6eaa03b84f4532de39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "257d9c1baf3f3843e0eebfc11023c504"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "1b653294aa6f89f9f0ea1f57f3d87096"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "4a865bb9467300991efb6edfb1b3180a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "58dba3050133f9d3780cafde98d16c5a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "1fa70d9788b14fd536fefbb81f8a26da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "c3971bf91254f056a54f58442b47ee72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "9ed7622528157d10f24ea70764e81ccb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "6cc3c595646525c919a3273e7ca68fd7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "7cfb9c8ce014ce94462ecf6acae5fcbf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "c451396fd28e87354c44c45dcda7cdd0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "384971a2d707fadff8360d096b478cd4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "d6e1192da4d1e95dea39cfd1633fb9f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0103901f8432cabb844d2479028e5ef9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "b43552f3ecbf9ab5294119c5cc917160"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "6f76cac0b8083edd091da5942b9ea49c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "30d28f904480705da19e77e6f53fe180"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "b72b856a91db6b2df8811c883bca5d01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "c998601ab5b5bd20fd02c814599f1426"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "213b69b2b4d3fb9584570f6bf09167d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "c216e7f7691eed89c52233b1da2d2401"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "39d2011c0f4a59b91fa68e8a1b0cd105"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "8ae9aa249ed112ff4afd44276cac052b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "7f54b67ca5137e91e9c84464e1d3658e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "ff6116e0d3661f39d3a890d1e79e8db0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "89535da56a7019140b3b0907ffd72358"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "1ff9f43b626122a4bf7094bff65d679d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "a04395341caeb775a075ece6679aa8c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "2587f7d0ce0d753591301cbf01015b86"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "7ec77528a6a4fc1d1425f57831236d2b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "da1d2d155a291af53849060d264b5bdd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "92d7a83d5a477ad22e939ea9083873a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "d6fae5b0ba2d03641d7e935bbe98a1f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "bc713558c9f9b572bbc9c64d42bd624c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "77065bfec51c284ef5afb9e1455dea7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "fe7eb6684d0004de3ab1d3150efaa05c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "8e9773b24c8053818c84c65008fbbcbf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "d9348abe4190d419919d420fcfcf5a5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "726611a10fb88c87b096a3b64dac5fad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "b42185c3fcc6f2f9a01802781f5dde5f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "b2ba53cd91018a5afbff9dcb9991f834"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "28169cfc1f1823be577d44a930db44c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "b00b65e88622cc4561d99111317fa60d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "221e695e7749825ce37ead9b7539dd75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "8a1b20e0dbf168aa034b3b65136e27b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "cc5eb544c5263091f93f3b03ac6d8c56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "6e19c2ad8f811bf766f4532ce33ba3f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "6aafb47a8d2ee1fdec10a979cb7cf1eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "272ac50ce9aacb3ca9f5cdc575c795e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "c3dd72a86c9d1bbf2313cc0e6280f795"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "4ba6dba685dbe349a3c257a19b8cffc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "fb8d25f419b47dc1edecd363f8441c2e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "ef7efe6772dceafa7d6b1c121f6f6f94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "6d448483913904f4f9bacfc535dbdc71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "91537e8b1cf54b427088a26d8be5f738"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "bc4ef4309d9cce9d834d12bf7384d261"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "193d0e9a339116975a51b1ac2898c41d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "dbf89d0a82a71ae0ca01de77469b55ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "833d5722e391c1787753f8ec2ef836af"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "d7d4e204a38a15d92a79129102f5be46"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "3fce5d767a6285ca369e446f4e1767e4"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "54b5cdc145b362c9eadef75790f66a15"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "62d4eb2272caeb1dc2bb940b6186cf2b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "3a7693020e0874344e3b5097f2191b34"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "70b0c3072f1b29fc057abe429c2b8e96"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "0ccab18d40dbb1a4b552bdecb426d41f"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "bb8b20078e4119afd9bccc5d9dabdd4c"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "9374460f080324e024b0371aad3fc7c3"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "9d760aeab7a7bf607b7c36c699de1c95"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "6ef67afecbc5a80b14106632d028b40d"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "814453b0c2eeef03f14cafed9e3105dd"
  },
  {
    "url": "categories/index.html",
    "revision": "482f28f32da35d0e35dc70389ce0e2a1"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "2a5a3016feb35d1bc63c97a5cb69189f"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "9b5e56d2cb3db2e4087f0be9fbf02011"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "c5671573f5e6a01380d371a736eda588"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "9691b8b5f56df46be7ba96a504569884"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "8af913d5ced41db56d08d796b174100c"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "9e34c52e0b8f139457ca749a4ef85512"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "bb2af288f2aaa12c98fc21707bb1dd88"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "dd00104d8309164a9c54aad349d3f149"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "ca8167b7eab5144b3190670b6d9ade23"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "d088eb27051e6cd020a2adfb127a62a9"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "e6f0ff08d53e2a6dddcb0cf6d9267d02"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "b8d50f1807d520b4392fe2febea65458"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "5f0b5140aabf01922610d5389119cd2a"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "bad33c867eb6cd10b7849291e127c1ad"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "9ba563c02582f0fb7bcde4aa940ef84f"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "449a77794204feaa659b6482b9bdf6d4"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "dcc94b5aa7fded93d7824ba109596c48"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "feb85d2deebb6dc398993f1d5489fac0"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "d9a3150c0e93b80c16dbb8721a2a2cc8"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "037cfd17d2f94bfaebe0825f0f67b64a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "4ec80bebab824b3ef5ff974929ac5c14"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "32567398b3fb0c74a41049d9f93dae8c"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "a48b99790b3ee91cd1c47aab7271e3b7"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "641003d48ebbbac802500e0e296f82a3"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "ed8a9fcd8527b7031e39588260b9a99b"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "de7fa427a1afd726904ac612db97d428"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "edb6aca28ceae664d0cd8a01726c5522"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "1c8fa77ae2083bad6d6e2e45d6357f87"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "bc257667ddc768bfb369809d9f18bacf"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "eaaad40f735e9066bb34b62855f09a30"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "d53e503711b6fd020a70098d9ab8cc2c"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "3d65f86a577452e4d5a0914205473d24"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "de241d71dcdff010a03a31e1f7794b43"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "3b5c939bd10e20d66e9b98fe03f10103"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "ff5f4a6a69f7df7a7667b1054b343ebe"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "a3977483eb5cbe1c6480a6d8c242f2bf"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "8bf683f01fc933359befb06064994f5e"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "251e70a237b59e73349c846edef5f761"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "11afcf4352f69aec7afb569e2b4e2c9d"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "1d575c446842ee6b85b1d0c5ec608897"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "88d083b858252a39ab3580c39f9e7ed6"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "bd82d7a5d2067ddf817e259d7ed0b427"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "df3a5bba813c2b1ca12f7d07f7cdf990"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "c888234c8c863d520eb98d6b62ac6cea"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "84afcdb5aa513fb1c891073701868a8b"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "1b8328128abce3ac9e82f3e521aae880"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "886008d283715433f852d05f11e7ea97"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "69c26967285c314c0c0d71188d9fa02e"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "4ae37574a2e8b0d56710a359879c6e1c"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "981847157d4e4ba0dd5ee69f4b9aa295"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "c5b9a49c66c98379c65cbeaaf320d1ac"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "e58051a91bbbd923e44fc2769488af2b"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "a732e296eeb5c00c41da89f2aa6ef5e7"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "0c501915a3cf510b08a88775a9c4521f"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "b83fa529034d2306b4a220d72aaf3334"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "480565df69c119b2cbf52e44e1c96eee"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "7ce42cb2643113629c376e414041d880"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "54f09856b7d0d89ed2c9676b054c3f97"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "5c1624abf54ef9c98571f9df77775293"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "2e69e355edcf2954592debbd539d7124"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "c8faa92c526440df60195c4ff8b1a933"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "38ea51d8b9f7f6cc5f0f01372b30ac79"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "a345d736a995224a98397925fe9af6bc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "f2fc2f4814c9c579ce4f5725e2178859"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "26e4dc6f0e8f770ce8ff544b35ae4ca6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "4fa4c4cc94513abd4018f50d1d763af6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "7fc1dcb96e6df4a44d396703a049201c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "9bfc996af228dcf8f64f883c6dfc90a4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "737805673ee4434ea3754673c3d97d72"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "b06ea8c52352ec2a9a8ad7b46bf59c8b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "0864a9b945c796c4decf0414d3f48bf6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "cf4b358291203c1a4831eee2d7caf447"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "9c0e0003989072cb6f7a92afdb69cccf"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "d8bc2fa702dbf1e79394da76d4c9a683"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "b62287b7c82621847c0f68caa782367c"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "c8a184b05063d315b2a2e667af18ae85"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "bf6a5db4dcb054173e8562e43204d064"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "d43299270477a5e2770b8c0146be3756"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "c7db83e1368087a5bc18411f557d0743"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "e447d0b13397988544a9b6fbba883135"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "80185f4da29e4435db0f328fe76795cb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "f838d2086f065966df3c44e3adefb8a1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "25c51cb0d452418fdf47fd3019d425bf"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "40cc176b279be2f24bd33dbe050d3199"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "a35ce1e2e70ec6c18f63cb81cb30cb47"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "b466c7a7ce8cb7aaf50f15425d6109c7"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "495c1d86214bb2014a8203f8becf9fe9"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "7cd65e29ea404f54db3e932eed1a486f"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "8b04b13dafd19f863c204e51b3d47331"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "dafd56e53838fb96d5924c8411a5b154"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "8d2c033f6ce5d221757d2703175696c6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a5773c003394614b8e023f49b6540b30"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "575babe6f53c2f402d0ed462060796c0"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "9f0c5540ccef71f999e32bf4f58329ab"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "27231b44bfed01cb791dcd956bfa9d40"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "57300bc65443d47f7401df2b144891c6"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "2af456ec341308dd6a268d87cf020628"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "23bd980903958e7f895704fae3e5d103"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "9c0754caa078fe7e6370a8515c8088f0"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "6035eb030a9437777ba243d99ac7b246"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "c69271417d9ce7c6e54bd327ceb437b4"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "aafbab268e38efb8c96981ff87c1baa4"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "16878374ed7da05baa03bb1f7b6eb3f4"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "e14ce8b4aa188daaadbb90e9b7d625a2"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "8a05574c36597d2622b531dd9e6a534e"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "dc9934f6078c27331f0bed6aa4536544"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "fd374a4425d7fc0045ec1e0c58a0da21"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "61533139e19fb9d6be4fcf1c67c0ccf0"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "21511a80e13d29678e99dea463fc499e"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "5667f2955f4d280f4a4933050fc86351"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "2d1f7363d07fbd17a843078bfeb9439a"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "d797b4606aedf3a5b98f22f7a5371c56"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "dd4d0cf547a2b3f291c3cc46d3fff3a4"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "d44f0c010a070e56384b7e08f62b28bd"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "b61ee6370796920b2025c83b0f08a58e"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "349bf8c84129eaf9c319f8262ca93040"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "b23851ee630043d800e0e8fd5d783748"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "047d95069e3c66e4ce50f309a7038032"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "a3592be7e3d9e9f82dec714607f323b6"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "80adc6dc28abb3a98103b753a833091c"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "7a0451b37aa4d5b0e17ffcc5f1c10eed"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "618d5af3c469384990eae4f0d9d2a4d2"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "d20d6a207f7d5074428a17c71ee2a190"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "e0a15a85130b4bbd19a1379c9c3ccec8"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "fc42fd71dcc865cd1d61115240c3c9a8"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "23a3a4bc16fea4ab33f1466762ef968e"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "f34a65b5c19774190926d17da5e722d4"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "c8e18ef95f447f6bc522fbac51dd8b91"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "321b6d14e97e86963f33c4fc84760009"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "7820086d58955d43e9ebc4ff4e518510"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "004dcc304316d6800627502585c7b6cd"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "43ff1a51fdc79ceb29cf3fcd5642a1bd"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "5364cae01d2768a9a5c6b5c1235de418"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "a9ca861c0f43d229f2c4fb3d2aac5506"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0e3a76ac47cd27d2239b1944f6baae17"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "2569526c14449c4db08fd6e109862adc"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "17188ee817557dd15d912d9a26c0500f"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "b8874d83f22c5e7d4afef2c82c9cc2d0"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "700a907ae70799dd793466e5318bf0aa"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "2dbd7d847920bd3d73bf6bd7b0f4f157"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "34ca4521eec9d0d40d4ec80bd30affe8"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "010673d924df29cd91ef677455d8f435"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "3a53e2e29e0dc5d1b621528aaa1e1944"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "1e4adda773ec46fe12df8e57613bfb17"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "b98b1dc5293084714f4a372bc86a9e4d"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "3eafda457e63203dd7c08603292e337e"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "a9dcfae052ba0f2087ff67613de1378a"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "1f0e732acaa11da4e48895c3d1e188ea"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "0973bc4a18102fc63485fe391b797c73"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "48419a201614392a1023312e564189ab"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "4630045b947134ff289c21cb92839f3b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "785bd9d5b9b435a93d53548398a24127"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "0db58c245acf25b8276c86fc7cc2dadf"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "a5711508f62c7e0527500299f60756b0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "a1a06b36106247ac3919ceb2c10098b1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "e94bc4f0bcc7b4a2ffcc3cd8c5a1693f"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "1cfbb91df9175ac277ab06ea5656932d"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "0475eb4df8874193ee0bedc4390e3440"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "04fdc9c6d491b439c0926681cf40a5a3"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "7d73e5f444d517893351844cd94ef55e"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "1cd32683c44a45ec49740a69ce0b182a"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "ee00f8350fc65b0997b776b02959ed15"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "04e4fce4a25092331b7ea48cee503e8a"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "5c576853b1ad1338a83f5ea31541d176"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "95e93a1168c8a4e12d3a084c62c8d7d8"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "3ddd70eaec8a9f9047fc51bb11246236"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "0eec3f6533639e383b62141b19f11737"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "e168e95575326353c800ab463940cc79"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "865954fc1bd688d07bf68c4fef60f9f3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "1299bb236091f1fc61e3eaa91d4e4b40"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "95ea6619abc8e0057310bc9161ec48fd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "f49424854f52b0f2d6eae54342e5dfd3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "7cb76977d1eb98a119eea7f5087a9b37"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2d81fb784778f1129dc9350347be7ed6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "a0419fdfaec9a71153c123d60442f4a0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "b67dd8509c4bb1ea83e3ceac040f7505"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "ac71b7f25a2bf2e57f93db39d4cc3d8e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4e72dd076a4130d6f7328e9db11c1f27"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "b31a2051572ef984eb78c9959a4458d1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "1e0b58449e8bb91b63da1de6089a2255"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "853da299e189299e1198fd126e2c4c8e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "8dad9e0541033bc524e6c21dbc731942"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "57c8db888899a759c21ce485ec189fc8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "0e5150452b23f1229287203cc44618a2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "09403f1921facfedcc93f9643fd2e988"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "0f34e162c7d19d8b3c9ab5d09fb5d054"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "c180310acb3413636663a49c9c1f5ea7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "a10b918954cd3b75169e644079f152bd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "00a51a9be0e95e4dbb6f1fadf5da7a39"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "7159efb10ac34148bb9b2cc1d46c29cc"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "e0a0dcf118c948ca7d9a0e0a814faccf"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "a8057e49cbdc61649add4fbe054347c0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "cac39fb9dd54075db6a9e43a3bc0fd44"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "7d269a68c5ec08917dd3f6a25f08dded"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "8ab71c1496606f9865efd32e4ef8bc84"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "f0a0b5558b3e11de853229afec899d1a"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "90f01ec182cc78104eeb30dac6759f69"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "7f84ce6489388143b92cd64b259e71d4"
  },
  {
    "url": "categories/os/index.html",
    "revision": "5cec015661139ea8f787fd3bb223248a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "19a696a1d3e29e0fa8f2bbac26fffaee"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "65f8f5ae8d678f9310031aa67535853f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "e6de170c2c4aa627d424f6893ea9e0af"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "39a245bfc2f4a1d2af100e36fcf22c37"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "ea409322bc417adb226cde4cc2fcce75"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "225c18636c354b6a088267d73a0c4a48"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "cda69c663406cfc801baeac3bf066b4a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "56b0ae6341152e10c510232f3bb3af03"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "36dcc13596f5cb4dd5c5f523377a1165"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "4c64267eb39aa5eec6be326366588ed4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "fce2c312d9a580574bd854b3b80c88f8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "35f643ee747336edd27cf391f0399950"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "2065bf51ae8dab7b3f2ceea5f11d76a4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "2b014126cedf0be265ccd01f92e75f0c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "71cb8cf16d2e7c3d824ec126be7190ef"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "739da4247e6039afa1fe9c3f2fdf4cec"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "66d8be59a7f0a109188fc786af39e7b7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "40592f22f4b0b31fdf5449394c954137"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "ec7093e868703e4c1f721cf2fa8a2bd8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "9eb45671af3fe84cecbe5bf8a0d344fc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "92ba63662baca403cba77893993b6dec"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "b9d99d8841bc19a3a2ba586e6a093ead"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "2be068f9fb9e6ad302a4b008fb87d55d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "03d22db393b12ebfd5db60caae60c542"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "cbb4a96ed456f8247d91441fa97c7893"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "85e956844f079bf052bf00ad7fc8a715"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "791785c52f090a44f6b367bd41dba1f3"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "5c0606bb1d16c491250528705a3763af"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "d92d65a690a988aae0a86de7533a31a3"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "6cf12716a435861f75c7f8c1cc65380d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "d8323a3a0a6f77465ee09bb0363d60c1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "f45bd41de2d90209c39972308d10ceba"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "8a1fd9a5447abe0798c6c575361f2d7b"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "a7597a95ca0c89d86591202dba72f77f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "0c47bd45f6a1ed40db68af78f57f10a7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "7e10d7aeb2c514ba1c9fb6ce3352f80a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "18b8ed65f99125d2f8c299c590665a1a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "5f4f293ace483e23db7a83d55027db6b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "a49da61d0b212b7254c953f730388f7e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "7fb466da9eb9a1fdd967d59d3ffa7d37"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "0304787da8187ac45aeb439b1e46b3d5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "cb3842468f5d40088f6d63bc3308f3ca"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "0c72c9e01b6e9a84b57b7a8ce94a4257"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "509041baf80e727458989d2057ec68bd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "f187e56df79f538319ad4a23a7ad8959"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "03381ed8dd79a239d07a0a5ad79864e5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "1377bb0a98d1bc98e8d8d87e2b4b67a2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "af326b2bb2f08be09ca190e2e5b453b3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "d05d123702a3f622a44a2193a982a1f6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "311d5988f7ffec9fd4ead2298097df79"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "9db25b7caa4ad32f535d1c762e619cd6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "08a260d0ebfb0ce4d0a97f3d0e473aca"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "e7d27890bacd9d43f3c0c39bd167fc82"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "5b9d28e17d55e021b312cf23240de845"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "e54a88c41ff0a2daf44250fa5e2ce4ec"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "a7cc1928b482eba184b39d18d24ec8e0"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "fdf837fd69f3d1bf611deff0effb3939"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "53dcb7999313ca38ecfea751f2a39ea1"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "8e1aa50a23208fa672c0d0882a124ed4"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "6723b17cfa09d95aaef311ff80a9ec84"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "9881512318e65e5a67d50e87ec7f6e4c"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "5e1cab597ba479ef914675b9ca101858"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "3dffab910ed108ef5ff1b6f6606e3906"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "f6f9a41b03f60e6663d5c7ab49032cba"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "7ae9f91c3fb18230a9228be51f587c1c"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "7965cbe9186d8d84c7ff9eb93f15c58f"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "eeb6f8ea5657f964d932e1b750c665a1"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "1e2bca2d8061f02eeb2662d642fc78e4"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "fd0a2ea34f81a0b82866ff65229bd86f"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "7302b53a84d03c7c58500ce9308e589d"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "129d161f0ed3ff2c36a76776f4e60c72"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "05f924925ef36b90b0c313d550fd8231"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "81a9659329551cd588c5758e4b7a33af"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "593560af49d79bc2215dd01f46ba0993"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "a0f92ffe43119520bec7bea8bd30b6b5"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "1f220343e2586dfce21e0cacc1a54171"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "82d96c854f3b9a0f422a3c110fe435d6"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "0c7b1a56af85dbeb317b5f43e0e51622"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "8888553568d83448f3dd3498090ed66a"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "e317e8dfed336f1a81afbd53e11874d3"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "0e64e09f3e21c055a01d097e741a0001"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "0c750ddef772190c8541e90347a746ce"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "d63182f52623e859fe1c50896d7fd04d"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "445871ca7cc88afa35659fc4f3eb577e"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "3e8abdeaaa51853c8361c91050829c9f"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "8a6191c236994d6e4bf12eed5ff270f7"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "db8161752cf190cfbb9b27dace465195"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "7a37ad09de83de6de94e4aa152f2186c"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "707cc8af7321a4b6a4bd3bb9bf9d3d8b"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "99962268a982012f6c0f18b0ce9169d6"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "497faa15081eca2120e472c9fc357aa6"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "0a86413193b88c0e30f18920448fcb3f"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "308ea3804516e2cb1640c1b4351b3040"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "29338fd1885cba8b1493653ed93a7f59"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "13b17c3bc7d5c5c2ca09c702f43eeb51"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "fb0823424e74689bfa9547b1bd18aa14"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "fb3bd0426733291e3ca64d70ae7072f1"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "a12aa8965df38592271f671048793861"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "5b75fe58126bf3adafb839dec6f64b54"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "ec5ea93f836d5ed061428013a5b6ff6d"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "1c5f98dbe6ecb18a197721eba52a0e10"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "5cf58b8d7b46fd990f4ca6fae4294405"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "b43938b212b2b396b5732123821bf23b"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "389294ae8f337ea979c773221ffc4b3f"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "98dc7eca5b87030d1f0bb1414569881d"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "587136664776c8c757e53284d86eca6e"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "e1bfc5243e18d351768bdf025a33f1a1"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "5bb50d7ea44f31be9dbb42be796e3d82"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "03c6490aeee7fb4b3bf4bc36576da14d"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "9fb0e79a040772dc1abeef55725b94fa"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "9a086cbd40854d4210652e5cab2b3490"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "4c531c31c451d58ecf28e3935bd8ad87"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "f1f54f8d795f2f8433939e5b82098bc5"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "16affb637b7d3d2d9416caac6a345fce"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "b019aaf2452ff4718bd97030100dd11d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "8c663db61c0b14987f86498fb9da0931"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "dbd1b450cb7665672aad2521648ce82a"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "4505b339596779f05e14955f09402cd1"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "c4f21b5425e9663cf38163401d600ea8"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "d12def5410fcecf3889e0b3601649a35"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "4df045939bc2fb21f5ad26978e6fe28a"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "1cc0b1c04f13e610bcd90a71aa34f494"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "c2b76dfd70a1bdfddc87700a97467692"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "e12865152535088fba65884d5954828c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "bfba9550ca9a5fad367af4e70c19e6b4"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "5338087cc7b771cb9d3eacb0e6ed1bfd"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "2c5a14f7a257d9d0b273c528d421837e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "080dd67dc69755d8f16f98427265fe38"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "4c96fe19b6a41e5d4506cfc27569b166"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "d48f36ac83afc1f2bfaa40c12c89573f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "deeec3007c396e8f4d45b89901ed13fc"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "8467de9820d502e71a7e993ea15d7a81"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "600ed14862ac76415f0ca99cb3d5e597"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "2b3db91467d91df2dfbe1e3e945f5f12"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "12dc4f8701e3d03f67dc99f45c0eeb44"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "dd62ab251527d7d927bd76378f9df7cd"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "cc8e96aef63a20c34507c3b091f82fa3"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "aa8cb8b38089b0bfe4465585cd25d559"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "d8f5a3ac2321bdc75a383b81300f8d5e"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "cfffc74c86c7525b819122c4f184dce2"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "9751288fad8d6c2672208c3f00842f64"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "021b0b1ced3fef9b26d2cff3f5c05659"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "5ba588bed35e6a8094866cc027cc4589"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "e5d278ae0bbf1761b44ae244ffea3aad"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "2ebeaf9991ee870c97a65cf64475902a"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "697717da3a9c27785e8c56b94a64d421"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "141c0f6f82b05721b2b9f54441c3c299"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "140b8a0b1388ae230a9539e0c7c7cb96"
  },
  {
    "url": "categories/php/index.html",
    "revision": "6131cd5f84b6f36878e0e738b63d6ba6"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "505eeb12cd599ec7e5f71217fbbe91e2"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "f6cbf0de333565573d6e073a4fdbae96"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "f151daa9d548a7feee2afe63a28a05fb"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "d5aaf7d3ffe1719b61fec6b9b688be33"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "a89f8537b58a0d1f50d100dccb358683"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "c31e8bd26f0b5c57fb4fff3fc715f294"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "9005091905d06a3d72270d5b2d802589"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "96c6157027025cf31937362c84c8979d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "cf72cd625d4e69eb4ada57ae72f1a69e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "48d23d6064863106e43b0998cb3d2286"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "7c7b1fb2f67e0a7908f61adf66e4e6f6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "b5ac1391772d28a0738bff6de09a7dc3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "fc2aaf7f820cadaab2cb8b6303f1c07c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a763a617411f8c6c487d609846cec3e9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "966edb0f8ad4f00b55263d354aa53ed1"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "aa3440eb8a9bc8bdfd72c8fbc4bc99b4"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "22d86497160141d080dd411941aea7b1"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "910d917d1836019f169d55bb8ef5e673"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "a6865bbe9a8283dac0001bbff5eca8ae"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "f06684c9752a11e54979b32ddadbd20f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "c9846e88f38febd37b632247d75bcfa1"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "2c0bea0919de89c169ae1e95ec7e5649"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "c0d065c1f1a3cc943cfa145f5372db1c"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "63de9a1a750ef38123752374117df678"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "00212978c9613ec97dd08144a8652216"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "35c78ea1afddc94b42ebed609b6efc10"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "5d0cf6aa14b95f96abc87b0df91e7223"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "cfbbe0c5adb4dcdea8ef6279f55d3346"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "d71e4d5134c98a820f65ea0250285591"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "882949e6dc165eec4ab6b043a4bef3d9"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "d5f8d62ae581d60b454a8f13eb73e997"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "d3e17304261c33a85768587f6b1c9ba7"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "793aae2dde3ae07c697716af8f25c227"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "dc8943c7c5c1f2b7030e1e3c794271a8"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6aafea2b4302bff411e58d66e9cae3c9"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "17a3330b11632a4742140fef5e527b49"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "92cf06df6332bb8e39551381f237e4f7"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "cf0f661ff2cb9caa892a57dd5c4ca9d1"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "7d1c88aad6f512f9f675c7b20929fbf2"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "55cedbb1553e488cfdc8e5e1d9043071"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "63426a483e8c6cf8ea69b250b08312c8"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "d3e6d074c74044eb3b563152e441f1ce"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "eaecbe6302d805c62cbfebb9a35e3c89"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "3f5e7166daa57ca18f0135cbd7cc8a98"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "7b3e14a7b50375d58f38838e0789f1d2"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "667b6075fe8bc87f9f15fa41936d2132"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "e37d80a9c0623f640e4316e40a4c3968"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "3a34e69d3a0dd0bcb0e7f5b55105e748"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "b7410692b20124183cad0a83007f6c33"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "827c489548572559dc315e2c2e24ad55"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "88b24b8a2d6fb5f681b2703b88e69d54"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "64856dc1cd767214e8e6187be6cf6dc9"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "289330135daac95a896a633c81f306ec"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "64e4bdfa78120a84c831e2f5eb74886c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "0b115a6fd6ff74d018a50194603e52d3"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "5b96ab46d1e5fbfc0223afb1a8efe643"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "f74411e38cfdb4e891a156596c0027c0"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "1a8a7824f2c52c9602954a03781b36d2"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "1cc598ac3be3606d167d7c5d1be06334"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a9ca98c6cc75148a09b79d425b5ab4f4"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "98802303559ea3572fc98d907d3e5fa7"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "6b3a410bcf71f571d077ae3cf4b1bff7"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "48bfabb3f6e13cdf372b5c651605cbba"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "7b88240d35d0ca024ba583809307daa7"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "9faaf03cb9e01a6b568e677d688eb603"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "b95f7e6f778ba633876ddc0592ba3f5c"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "5ce30e7915e7e0340e2ca8d087111eeb"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "fe862572cdc365b7f8b30c6c7956e499"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "43e6e144afbf6f8df0528229813dbadd"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "4e99b2d98d6de82c6b044710d401e0a9"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "c311a0de112f72a16118234ecbc91483"
  },
  {
    "url": "categories/system/index.html",
    "revision": "86bb5725ebbaee307268623be847d243"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "b635d26c6e37896d35e2a1b371cf2bd9"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "f2f1d838196f480e099de1e27a4b6001"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "e371cbe7061cc8aab32c6c4834fd750d"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "43a35f60917f27e28a1371122e641aa9"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "2047697c85e998af3147d3750a4a46a8"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "6916879020312e0ab772caa769560a59"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "ee40c8da8dc65c55980f63d0b00faf9b"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "b1f9c14ca1c600952007243eb4d49ba6"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "2b5967e3b026a684b0871a9305ec0614"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "f6fdcb1ac17286ff6c731ea4e1d4e22f"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "806f455f9c7b50504ca1a1919a713aff"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "8c3d0f004c459718079fa9191636bda8"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "6e94b664101839e26907b34368d71ba2"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "d7dda31d36245c4a4370237e77e78f22"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ff3762156c4876cd9820225cfe8d2cb4"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "55a5ec1838b63e4068146b26b7573413"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "f3bd255637d56715216f0a334657637e"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "1fa0f88f9c3f8c1f0fe0fa2938a6bf96"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "1ee171345247609e061df2d659317892"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "48a41c7e0ffebff70fdd523aef55a5b6"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "c3217ad805414acd2c2a16b5320f89b5"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "4fd7023c1cf04c44dbdcab9fa0e5faa5"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "fc50a73e85bbf9c1bf5b8bd78166c7d3"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "36fa0977600676b335f3c86bfdc4d6fa"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "a34e9992a12dbf16e30c3d1f2a41fc2b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "3f315d362044d729672f3cbece1ce2a8"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "b893ad405b84e2f146d9ed63995eda26"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "42caeacf17e35faad1d882a5b7cb7f47"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "a4501dcba8001446f81f6efbf569fa0c"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "72a725104a0117fde24dd7207e86a0c9"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "30bb4f310218e6dfcd1b2fd71245d47e"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "dac3c24a88c5c6b1e767d9edd64b0e8e"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "f31a808fa46206387bcd32b01851e3f1"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "8e4c7cb532854690fbc7e3cc51e8b307"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "db7f6ad54ac33c7d87a06489fbb590e1"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "2720d2e272735012463585df92192993"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "6559a6f9952dc86cfa4d705420210a89"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "4cf51c723fd5c0ac360c6891e942fae7"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "1e618293fc5c7ab93e036d637686efab"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "35c0e97ccebc5badae03c9ca9abbb361"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "d52f5565047b124268069f0bc14c0b2f"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "ca9f472da45f81a7b825d3fa05cbdc9c"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "379bd8fba988b0b66c28cd1bb15a9b57"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "e36687c4a2b5ea75465425d7c42140b6"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "8f685663e8383a8d56f02514d2cd67b0"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "77ae7de373dde70d9e674768a565c066"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "700000846db69a01fc0d35678c49fb7f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "cb8b7178ed04eddaf32f21c72be4efad"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "a0186098d5ffc4fdfa5265722183554c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "50b20ed12e828cbb0cf0eefee18e186e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "dc3acc97901afcc827caf1046c0f9ed5"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "7e4970f8ca23c4a9cc01f2f3dfc22433"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "dbe93b1871c1e222c3216ee661e7550c"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "9d115b62199cb5a1aeafae59f5b760ef"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "6dab98ed78b9ab8cc304b0db0b388d09"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "01c1f952a34a7483a2225fc0de8cc84b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "e80f627ec19a3fb3f71cfa77e83e35e4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "e226abce8d0895a90f7396913ed98f56"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "20efc71a9115bb3c11f013c2dab16f76"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "d3d9686171cbce45f8825a4aced1454b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "4891e0cabe96f3eea00d2a1e27b10328"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "b31baba613032425f25b06d963cbda38"
  },
  {
    "url": "favorite/index.html",
    "revision": "75cc0ca8a63f7246584932a94d66904d"
  },
  {
    "url": "index.html",
    "revision": "95c4cc1383614e16475367b7d767f8fd"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "d9d5438f64928341e470a1d26ff89fe6"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "0d0c855a72e863526d9ae4027dc28277"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "4c3d774504cc9a598570e98759631427"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "2d0b58ef69abb4ae7f14059fa4a63ea5"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "171c49b663bbbad323e2b5c722e5fb66"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "b661d540eec47f22e9560b6a1e21ac29"
  },
  {
    "url": "note/index.html",
    "revision": "5e78283404bbee08c3644a3880dc5fac"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "8c2b23579a49e5be8ab3930388282857"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e42914ad5466562f5e0c7c4125e35118"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "347af0b446782a55617e257280b0bd39"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "ad9235674cb6c37f9fadadce91e94ef6"
  },
  {
    "url": "share/index.html",
    "revision": "cc0518666f50557739445cce464dabbd"
  },
  {
    "url": "single/about_me.html",
    "revision": "b1a9e9ac852138f388a78e682f3ea892"
  },
  {
    "url": "single/all_article.html",
    "revision": "02dc8551b5d415e89f17d7a6b18c92c5"
  },
  {
    "url": "single/welcome.html",
    "revision": "74d17ba9cfe9745a0cd204e1b8030a50"
  },
  {
    "url": "test/index.html",
    "revision": "a77c11b7f47d5aa1d1a4e72572c3ad47"
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
