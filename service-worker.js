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
    "revision": "3e7003902e48ddd774bd5d9de155b93f"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "6ed97cbbbdcc60a58e2594d018ce9d82"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "6d3b9f3f14578b5eb74852f6018090b1"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "116cac980d787c49adf082ae5be57f37"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "d4d706d87d995e804f055b726ed37c5c"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "06a6e1703d7c6b59c372efa0fbb641ac"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "127e9c15a63d3f6d053ea182363f0c73"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "3000ebb1f96f55a6769024ef78a8c49e"
  },
  {
    "url": "articles/index.html",
    "revision": "0b2b9f195e1127acffc303538b017773"
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
    "url": "assets/js/1.5d4da319.js",
    "revision": "0b6295ed40a11d43204f4fd5e425c357"
  },
  {
    "url": "assets/js/10.99fab07f.js",
    "revision": "abc035a050b613651b296ed0f46e50ab"
  },
  {
    "url": "assets/js/11.70bc14a5.js",
    "revision": "1d231dd2fb0149745943581c253de89b"
  },
  {
    "url": "assets/js/12.aa18a28e.js",
    "revision": "11483ab66c8375f0cbebc812dff4cb2f"
  },
  {
    "url": "assets/js/13.ec4a26aa.js",
    "revision": "7d7d9327c833bcf40b5d178050fe829a"
  },
  {
    "url": "assets/js/14.600cd8f5.js",
    "revision": "2fa2dbe36fe9b36e87bab62685a49d82"
  },
  {
    "url": "assets/js/15.cee5b69a.js",
    "revision": "e3627195e3a46be565ac53140dfcc8fc"
  },
  {
    "url": "assets/js/2.ff0d85c0.js",
    "revision": "42914375c369af0ad54d777cade6d3c0"
  },
  {
    "url": "assets/js/5.4cf5a94d.js",
    "revision": "60e9a413f214e17d1e7aa5c52277153b"
  },
  {
    "url": "assets/js/6.66df097b.js",
    "revision": "3690d1c1593f7236234bf89496b0460e"
  },
  {
    "url": "assets/js/7.67eaa0b3.js",
    "revision": "0969271fa6809e715a851c695dce636b"
  },
  {
    "url": "assets/js/8.de51e78f.js",
    "revision": "49b2694ebc3eec28d2817560611e6931"
  },
  {
    "url": "assets/js/9.f8a5ce57.js",
    "revision": "56c936d5d37d4efe415866142421c9f0"
  },
  {
    "url": "assets/js/vendors~docsearch.077b7d33.js",
    "revision": "1cc58203437a279fd81f10b909c816b3"
  },
  {
    "url": "blog/index.html",
    "revision": "5774ba24847fdd0fb997c3436a228df5"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "b034c5b8988f917215957eb8a7fd7bc4"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "15aca108bb9449ad705bb9ee407bda23"
  },
  {
    "url": "books/index.html",
    "revision": "f5ce6211f1e583bc881c154d20cb4290"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "e524b4663dd3e58d0f13c7dea351544d"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "5a4e149c242e83a2ce061aead067d551"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "43535d9d447c8f7682f82fd554fc2ef6"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "b3956d9123f9ceec26ec4b7aee5edb1c"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "cf73728e328b3815f2c89a418812fcbb"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "1c698cd9ea5ed5825cf87ff494347e79"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "368d606822f9394ed5dc6f0b32da59ea"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "fc120d9a4848427c31c3ee7bb9d8b350"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "796ebd245734fa3fb3c1a1bebb16a62d"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "0ef7457b39ba467cc2896f55b0f190d8"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "b2d3f45c25823b25307f4319c4122c52"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "e68cb095ca0694d37d7a551fe3690916"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "96b2896cfb8569331c151107640c192f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "63aa29b06c0e45abc0973d1665fe478a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "8e604322f5aba2301b69996eed9ac8ce"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "a141244bc1052314d803c352fe4e3b21"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "ed86b159a23db0587d280ae470c639d0"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "e2e22c1e377119d9663cb7188235be7e"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "345226f5d73afe368e4e7bf80bbdd287"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "7c0e19aa18648ccc8d580baa487d1463"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "387b1d62d53a7f16c8bcbdfb1ccc55bc"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "743b99da16b8a12af53c256aa5544651"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2c911a9172fe1b86bd254cecb711d9d9"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "0e836c5947fd477da7ad570a56d5c87c"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "9914fe0e1c804eba8dc1f67f671bfe86"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "e647c9290052d7a099230b78310ac46f"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "e03e14a0244a07ba0ff4965c3018d0db"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "6e4909450abdddfc1e1920c1f654e8c4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "d22bc3f6ef849ac17d0a3abc64f8e344"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "d420a059eabe6175a765f1ed07dde9f0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "c26f54c69b9fb94ff81ca3441b15f89c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "b303cf3332efcaf0ecc2f72c1b4d464d"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "31c0602837838689488350da364c3330"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "7314a26c1cadfc9073b975327e4ac1e3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "ecfcc27fe5225f14807acfea918225b6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "24f5e64db7d74bb1bd5a23d84d916a6f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "bede7d5afda4a7c507b557e89e0a66cb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "ca59b609abd74ffa0f638bea70bf6800"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "e3ba3db9d21c502384949cdbeafb1810"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "37b3e21057e6d92339e0961db60bae66"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "946ded5602b3f7c63622dcefe3746ce9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "60777d82f47620573e195d45f4d12f21"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "aeec56fb3b453db7700eafe9a5c613b6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "26511aff982925f1032f631522fd15ef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "ae3eceb21c0543dfedcb43c1479c80ae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "a28c4c9efd295bfc778b77182a5b54ed"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "0740afed7939b2ce38cff7847e103863"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "6f02aa026656262356316ff3446818fb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "30362e0bc057abeeb78a87e732d67ce8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "cc4f7138a317ee0b9e301b10cc4ef401"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "05f2e337eeade7f579a88e2ea6f33fad"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "0e8cb52427cb633fb18a0a3933fbae8e"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "48fb08c49a5825653be62b6a8888ad13"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "e10b0afbc8b8395d7c8c81c7a7bf3cf2"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "503ea4513a41bf699cfd79b119f14ef0"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "38833bd72521c79412ae490f3d7957dc"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "2a587f7f7b02cab6455214b5c538bb49"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "def62384b4830abc183c7f3f1dccc8c8"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "42d3891633b508b0dced57d6ca631b7c"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "2eeb376c1950ac17d40b239ee4fef51b"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "b04e5b3e62cbcf1f408cbbe66385d1e6"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "200f568df435a4352b54ba5260699c1c"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "478773973def5e8abbfd9fecd0daaa8b"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "15bd2e3fa30726eca706b1efd9052d0d"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "16d759e60f512ffdba335b245f458258"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "d157db08c7b519d780e5817a6406b997"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "7a01bc20d0b6e1c86747d639a2affc02"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "aafaf0c565459e782f5b5bf2489df26b"
  },
  {
    "url": "categories/database/index.html",
    "revision": "649a636cf99cbf2efc0081848a993254"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "f5418a60e39efe77b0b8eb2eb86bd9b5"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "c518f08e4304cc01f3fa51b17ba0158a"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "8eda4880e0e38b8e6c691ffe60f26e38"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "4ba38e3d4a0a3bf7ea52dbba7e81e443"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "e697bc14eb83e513567f72c5d6c98480"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "746e003df12b52f82ca25d1a329de53b"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "ebedd75ba7c6a5033bed17a58b08f37e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "fe20bcf0af33fb7ee6ba194672c0ac08"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "f29902a60a33185fcbf6e60b0d3a37c1"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "93c80b8d88ef1887e6f39ec6833d34a9"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "7b529ebc39bdb3c26dea045275a17e3e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "f9a3604477cd9b5d514537b27331a0fd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "446c6364b672dee84c3c59b158880804"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "7531aa8dfccca36758609c82362b3273"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "b80b81d23dafbbc4807d7624e23736e1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "b0c33c2583222808ba5a81c6e5491581"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "e67a739954ac6a56297608f45a1b5f5f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "90df5a741774cbaa4394d9d75ec4615f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "008d07548a495d112e63f7de6e2a821c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "6f1e081dbf7942e6e734d8094ac46e45"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "60fae4d3cc1df70d823c5db32a198a03"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "329427efa247fb6019e9e972779d6708"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "1f5ae11b9bb182081d9e8d51cdcf1649"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "ccb1043ddbd220a7016edd1ac43867a2"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "ae13bcb86866f690645c7267b3fe66b4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "03c6f46bea150f2cef3996200f59de45"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "7ac1cd5320bcd01432a388b533da6281"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "1127ee9f6c73d9d52b248746031a7d9e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "e8baedfa53d5fe340e797a5c6d27d42b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "fb6b9f8be989b92f8843a5d554ca96e4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "1f6084bc94a1fb43239b0c1fba945020"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "bb017d334867a7ecfb212942c2a002d1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "32e9d8910b6dd282968759fde52f4e64"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "44e1e3ec8da6dfb342dfd7e718f839fb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a2d7005d0707a1951a2478c89c7b36a1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "b087e9bf16d0fcabd3c0da6c836a3f50"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "5b4e606d44deaeccabea7593bf96fd5d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "e04c9f89a18a2ec465b7d1bd2c6a0289"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "6016546a4bdd29ee63ae73b53c08fc71"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "354a7f5bcd20a03270ce70eb8af0c41f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "7be8d94a2717ffa6e968359b21290f17"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "5f8447235e94b7db5d55c61a28b59f01"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "920d45e245ffad82591b5488f96ecd15"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "c9c27960ed371c850a7d78b742d5b816"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "773e31ece2a8db0d431fe9111a39bdc6"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "6c9b25dbe66ced730821dc248175c93e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "48c055ab31e1c41022f2aae62c1d5c36"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "a5b745c0558b96891563d6f370449622"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "8c04aac504a67a37f7aa3c98a34e88f6"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "ee048a502786b576fe2659d8f6e73aa4"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "d8b3ada8a238dc22de7ccbe3c44fdc8b"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "f676daf0fd35eb57c5f7349ccd49ad80"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "98d11044eab7f7ca3e128363031e612d"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "afe47c9be1ea0c269f8a62aaacd3d4b1"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "387ebd44b6d45a17927a2775f6e04744"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "e73d68e1046901763cf06c361c0418bf"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "c50181ee811be6199edcb6ff32415687"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "089e4a2f2649bcc46ca67bfbe90ba8b1"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "dd7fb61021970cd2985400c2fef98750"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "d87d473582564cce020ad3c154129ed9"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "d5557ab824fa637b00c0aefd83a2fbf3"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "9aa21b9afcc1d08e1fd44493fb3f56b1"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "93b7062f4b0e433dfe4eddeb3e9a1a08"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "d760f0bf3029313dd7e1718d98366c5a"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "f4b2b96f803056f8ab876e597d5d890b"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "e1225d69a2785c8f284fde9b17aa4d24"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "ba52a8c1bdd27fa560bc115e258aa6d6"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "e6d3444b1a9c7f82519d23b098c49994"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "beca54a4852bb33c883cd03689996b70"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "6c94a3fd2715ceaab16b333c52e09143"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "dc45c14d8580db95c1eba03f9513ff87"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "5ddecc5f33bf3336f48e2a169a424235"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "ecd6371a6e084a8397e8eb54cb27d5b6"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "530597ded6eb893e915b375b948221ac"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "aa5d16249b77c0abcc3d6f7a98e104ee"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "c29424a836e6148183fe746071dbe6d4"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "d527dbfe314aa0dcf1e0c330e49863a5"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "8544a19b01ace1f3783c3741fa4f194e"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "53035f6482f155a772db46b28f76903c"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "41fd01f7725df03e7c72f3e80b964d54"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "40809937e381f7d44a045caff6e3cd0b"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "00d976d5ab60d29892b2287f63f5011b"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "1790a04fb92087a81d5d5ca5741d35ef"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "644492a36c690ff9d85a7aed18acf0d7"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "37b1a9d44526197ccc552d2de6daa3c6"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "2e1c6d0fa6ccfe5a7ae5812580952d2b"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "b603978030635ce79999dc0a8ebbb9f3"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "ad4be42218278c99e499bebfb7139be5"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "974d570c8221b549b6c349b4857fae48"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "ded60b69bc4dc11870c026c0dcd71e35"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "534fc6b334d00338b1c8c4709e57ba6e"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "4457acb1b9b115a18b8fae2f484b0bcb"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "419a129cc21a9a443616c7fee0aba35c"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "2b01aa4b63d562fd8d67414fbe568f13"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "d5e65820a9824f4cd868d556f2a11b9c"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "9e870a5c0444e8b561b01a0188a702e2"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "7bbeade910453fdae0872b991ec2dfaa"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "8de9b6d1c34bc201090e130b30e5149d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "65f1998f4cdb753b6f7a58c0e030c3a5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "7fe135ac669dfed65a39221f04f143d0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "b61c47e22ce736a1e9cf84a192285d55"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ff1dc5114f70b23164bb0709e7471918"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "268f86079adbb95fde99c2ab053f1024"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "e0fcfe502df8f0b47314658e94895273"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "980e4f221b0dac005a2bfa42f7c37d8e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "ce1f1d9817247fa832faa1cc838f628e"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "212580d4b65ab66272e67f067837025a"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "033a9228fbb09c8373bec197774f27de"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "84c96b368c0150f94ef717da7400e523"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "a45c451e57e1dae9e1dbd1c7c18c6b48"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "251eb8b3f9b9c19e90f9beaa8068d714"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "b7e0bcfb0cf909c7bcd2fd38c4ec5aa8"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "8a047bd3fae98f0ea7ffa198a2ec43a1"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "1c742e7d58eab6efdda64e329e97ce6e"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "b1eeee6e4289a5d63f394c2e2cc9d0b4"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "d2305c9ccf20ea9ffb999b8a3f499dfb"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "aeb5f4ba5f0108925d75680be12b346b"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "ea6e6ed86f6af1ec6883fc648155142d"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "feee3a25f7f564ce00822365244025ad"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "95c159f6a7d465288643987aba633fc6"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "71f8f8d4b614a9ff0112a26c1a8dc7e4"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "3a4183b19f00ec7cbd87ab2868cd1190"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "5cf037f686949329a34d16b6a38543ef"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "b52ddbb634def6caf4878ff36baa6e0a"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a54b1b92a096f35186adf557027234a9"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "9b7940b676ede7d8610da246172b27b4"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "194e2491313bf06527887b59a16e5355"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "4ef708ea5a7b23c6b3fd0e8844e2b652"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "3b9b068a7f55b70d50a016b3839dbc31"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "dac6a3898c33be8b12537854733d33e3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "752783e2693471c383f698e984e57e52"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "9c66ca620ffb4a5a8ac543132c7b3513"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "fa559508f846a3bb5d9b7b1a1e25117a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "f01706a41c8bc728b157fe7b11091fa0"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "7d1e240de1cc66c2cbd00c130c5f5cc9"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "6cb4d41a232a57dad210a3595d349286"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "8085bc56cbd25c8d64913a65888887c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "76adfe124c1f28a20587c47a62e9b8d4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "f9ac6084f565c41114a1187b2b20fc11"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "64c1a9143a1d00a7576cb1c19dc649a9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "439bcde25c3631015d8ed8df8114cd46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "f0499e2398b4c3b7a3a3f2142bae981e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "8420ef4af32ed90109673a05adbf4124"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "e4c9d25d4acd655d36d06ee090dee4b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "04915dbeaf69ab6cdf5b87294b47e539"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "5f98be8b3938047f7bfa76cfeb434eb8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "d2a2f67ca0153e398f8b7601fa4999fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "9853f7dacddad6dd4d8c3aec63b2e838"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "ce85d20b1542c318a483b332527c5bb9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "ec3b2fde7e6414c72434701ae4587446"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "b2a5f7a46eab441135911e1cfd0354bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "c4fa2593574ffdaa62b3e2b1d397da90"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "bc56cb8fb600912e0d7502dfb59916f6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2c6df6ae3a6e6696984698c57e385804"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "9a5c7682f6e87b02499e5a00edbb9cce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "cac411ddaf565d4a6a1e14fca7f1803c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "d267dbf49bc9da12bf1362b168000660"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "3f7efc02c9e942c6138411d3fea73abc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "fe89fc3c82c7cabe70a1e70663485bfb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "e0fe1d1e94c43c5e5d1d412b48a731e5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "310a33add6d233acf263e7ce616f689b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "cce96185eafed5afef4a5ae2c84336e4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "6d021c89da6fe34c1d5d2d4d03af861c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "d2b74aff635dcf89856885935155f904"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "69d873061e44e85b878c8d87831b7a00"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "6abaf61d870587ec88371e88aca8e439"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "fb25cb8dfaaf300b2ecf40266ae57f52"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "aec8617f553a78196c521662960486cc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "18a60f4dccefca406f53166b62adddc8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "2b3236eae907354d935839f4fb6b284a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "ab5cf9871a622e4d2e6f6f690b942b8b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "2706d490bba34cb34fe9cf1348436786"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "4d310928cb29a1ba63dd513e571500e1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "624e53694d203344c3d7e5db066f38a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "3e41b01142721ebf20fc8ea0ec04947c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "ca85fe2119d900f63a5c884897508dc4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "74c0bbc0e474be60f52f4da31f00e699"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "010b106e4efa63e8fec45267aaf06836"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "9c22982711c8df136bc4b466961611d1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "3a3cada7a45da8cea382a7df8b41e815"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "3805dbd9fd3440f6d4ee99d2fe11a0a5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "bf3c8c8ffbdfd154525fe248ca7ff964"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "3c045d717722d1ebfd62ae1e1a2b7445"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "48a18654d5aea7dcd2e1f7871abe0635"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "73a71a09a255efaa7058b27185e2eb4a"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "282f6a5a9c73343df88cda637a768cc0"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "50a6da43fffc8afb3373258a07da3907"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "1e020a803823f469ae461b019f09e247"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "74864a67621056e954cfaf9d9f28a3cd"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "4adc6a417ed7139cf8f21f997b17a3d1"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "a89464805f634488e783633e73db200b"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "e2af7f3abb9ed9515dfcb253a82717c7"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "cfc199acc420983f275ba7c7a184f03b"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "122161d384afe7d13880d16d3a11a562"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "995b915243bddfe43d28c2449af19852"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "dbaab1f84e66208ee0e24afaac645200"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "1f40403f66812d06668960ff7387def3"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "b3d7d94315228e032ddf6f13dbe482cf"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "bd31924117178fcf93872bdabe53986e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "6f52e4b69b1e90c3626b6461c3fb37b6"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "6cce2d2d3c2916a465ec7fd84fcddaba"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "20fecf8a93a65bba4e2d9dc4fb0660a4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "36bc0a5436e5bd600b82b7692c148b68"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "5a13fc6903ee2149a38c6534c988f376"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "ee1b6ff04031c8e77c30232207966761"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "4cd52a16ad6782fe780db0762a5f3f81"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "72154545325817c6d66164bec6520819"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "fd1a1f61c5c84bb7c4129a96d24da9bc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "8700ed3249cd77aedd3581f0dc13b901"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "f0e7f3b2089f0a30763eebdd27c5d9fb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "af97f47c43391726aa5a08c4f5d30316"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "8cb02638747d29fbc39d26fd247f3856"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "fe9cf7aafff58e1e966e50ae7e720e33"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "3c83089f8840ac77e282d1569e38589b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "f6708158a92e225a3715f3e9954fdbba"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "f1f282b6060fb1f2c97a7b50238da9c7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "d217fe48c6af6d272e783942b01487ba"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "ed615771af2e2156ca80cc3939295163"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "44ece2f58d2b7038f5c24df9451a8ba4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "c8db0db1aae64b64b991ab8e3199ddd7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "f5bd57d642a36d2502008659a507a42b"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "c81e1c413c8293cba2becfd32c4a6ed6"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "e7384a15ef13279b75e0af95b5bff947"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "fa9bbb1045f14fc90ce6bcb9aab5d64a"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "425d9ff57193e7cd3e2e313816ba0cc7"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "674d99d4b5479056eef3095abc12945f"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "0010ea026831dc5d7dc57f532f466384"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "8fb52da0b5c287f8efd014c901865f2d"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "e77fe3a5ec12f0367f60bd2bff93cf6c"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "3f243a0eae6302416b4d6c6883054410"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "e8dfeb7873ff9464e04e732528085998"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "6ec61e1ac0b65a0e0463ef06d10445e4"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "9e0796d107afa136447e6ea9d22e4e24"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "42ad8519de38e0bccb15118464586a17"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "deed286c0241b1b0ec4cbfd3a16b93c0"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "475215ade0943afd2ba2c0adf9ed30a6"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "4f125f11b5628117f0fc323b83203e5f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "1e6bd525d200ab6e9d9459b0b828ad31"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "96b2a480c541072153bd3527664f3a56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "6c02bc0c833fcdb89b41fa2cf85aa5b2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "b86a397db5a5444cdad6992272c34c19"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "6b3e72b1f99ec586dd8281810482f65b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "09172d458e4f3cbf951693431fa5a84f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3793d6429453e9832cbe51b4a1b10f3a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "d732acc4fe20953465e3084d7eee0504"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "395590bada98ce1ac4412e3e6e982e7d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "ffcbeb9a050cb1ea14dd5bdb14336757"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "c31543282cbee3b0727803dcea942445"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "65a6646f19dbec35225f9a87d92924f7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "53c125a0f78a91824924278fad4360a8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "00a9d33bc97de584ddf22e229c6847c0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "a7f629b4a5be5d35bb05062ff814f2ec"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "2557d3ea48b3b0afa6437172b63ba8b7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "476c6536c82be53b06be650342bec885"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "0fbadbfb69206c2500b54c600a6c7cd0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "fd55640185af0b09cfee257f2185c4e3"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "259a54cc89a69b3aa18231a1b4b152ed"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "dbca9cfc02c68e559d1c28105f77d327"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "d08b72b0904ff792c68e672f341a817d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "6743948b8dd8d64d3a051790d2ba8a9f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "936f9e91c3c71deb30a5fff8fd8a39c6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "c4a9b891e4179fceb899c4d53297d7e5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "988b67e2ec03149c2ccd5d6a930702b3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "75a24d03e5a41319dffdbb2ee3b20daf"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "0e6a66b598662bc76932139eca01bf05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "1d11f43c595e635a4e47af71654a589f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "debc6524074de250da02140adef2bd60"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "1a6673c6fd6416b2f441f9e707f8ddee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "febb2c77379dcca9691789da21ecb86a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "33ba0a0ff7d473f9ee7891dfbde05d4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "f34a5cba4212db712789adb3e33419ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "1ca9ba44d1de18a05b771d579753eee5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "5fcd130f93a0cc6c9a9415f35df25270"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "6207948ffb258a25961bf935c7b8ed20"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "55f74a5b51e771c429277591d6412d70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "af2eb6382f27d1008acb4f749be27743"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "ffde0cb5486483cd61273c7cf64ef0ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "e5a0676f56b4d314040aec38199ae1e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "0598029a17fef28cdccfb2d47a7a7c72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "ba56101070392730e462dbd45c330551"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "2dc7ff50de2cd137461dea58d968f26a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "39b302fd7357913ff913ab7c560ec2d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "2e2ed2d6f4fe4165076cd27390a1252c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "7126a662f6dff43760764e07cbb5303e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "2584a240608b0cef15dca246235aa79b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "0aff755d69bafe92df32a1e906557e96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "f30fcc02a67c9dc5d37d9887ffb261cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "83a231cbc2baa8fc440b3db518866c14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "96325a7b54f369a7fecadbb689601435"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "9fb6fe2be7820c3b8b5fdd1256596799"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "c7a3822766e6776d8efbc8b1940f3eb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "a9017caec36e98f892a4e8f6fcf36967"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "5e77ac1a9d276b84cc6240fe596ed8cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "536d44df5b4cc28bd64c1c44f5e40a27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "cdfb85d21d3e834bc6a4a5114b6a1330"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "184ad61d3766f10f1aa4355a98c81d50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "dc36f6dddcdc2ca10763574926a6126b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "4587a37ad26b7419914e2bf392b180aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "9b6174d50263e603c12c9169f995473c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "b992727433b4d3040e1c33034b0da31c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "b37b0b373d585149e8244d40b27baec1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "a406a18b3bb4c7e4bb1674f751f44a03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "e3677791552ec30d412604786873da7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "eafa43a7fda5c486eeb432702273cf11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "eb0bacddf3b8e5b659199560a6604af5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "effac88add0e13216ca489d02eca1225"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "7c88737187c326f8ed8b09885fd792da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "b05d96a5e77edf2dbb32f71821b5b0fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "021dc452d20925c73866de73df91977a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "74335fc8a5121f4ea4a6dbf581251239"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "27b50d0b857e0443f10717cc6b34043b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "e42cfa6adeb9b8d73f3aecbacc223fba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "3eb41df50224cfbc5eba40c627ce564b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "571517dd7e488b3735d6a88acc60e86e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "1f0e6d9e3c7e5b08d6c3eb28f19e0836"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "138e27975cee4d91eaaaaf28d9064448"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "6794bf896d60450b95cf018173e2a04d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "c8a423c48eec4933acf2eed31de53601"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "b9d868619ecff798f7e807278c5b221d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "d1de7168c4edf2b307c37159779a471e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "6b6abf2e9fb60beffa179d8cf4fa22e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "6a56a91ac2712f5b31a0278356ebdcf6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "b1277c88dea8fd9717a7ad932ae1a940"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "6c01dd8ffb3e1774d940768c66964e11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "ab5f409960891084ace8a29b5ebc8b1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "99b7f605348eab47e8dfc6f5dd2dcbab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "02a1df6fee8b16ba14006ac6bcc133f8"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "5548a8936682ef01081e723266bb00e3"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "4eda8838c0e2786f67283cc52cc59e6c"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "8c56f59e5af6e48e2b10a155ab68c205"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "efb66a568eb53bc45b264456a5de7b1d"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "dbf016bd368374a180c71d2cbaf89759"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "800b2136915c7f89483e2323ba98bb3e"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "8a611917aa200c250b6721d9dbd94321"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "96016e7606fd792529b6f929603202a7"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d2bbd0959a0252fa5faf5102f1bff298"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "a003d40e6470e3f7015327ffabeba54c"
  },
  {
    "url": "categories/index.html",
    "revision": "d2358d817107378b9b21ace3b740236e"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "8f31f0c217ba7c6eed2392ae4394f45f"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "03978f9ccf6024967021c7fa246848ed"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "a3958dd2bc673a94ec05d166f8443002"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "14ce43326a1eb1b94c59205800c8367d"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "263b2db26b2a4506d210407e2164b2e2"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "426da435e27597fb5e8ba8ceefefb3cd"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "4b3e222dd6bf873a10d26cf2aeac5402"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "09e43b629f9c18886fbe04bf689be686"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "448c474484a137e7fae93e521c2b8fb2"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "5c428bc75ff38733f9478ba0bfa3ce1b"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "bcafe59e6d3f9056c6906bb0ddd22ec0"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "42373ddc6037941dcdec8e588c946062"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "0443008ee39e9c7da72a324af7918aa8"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "86a24ba0c54f8fa079c6fc5427892b06"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "f1f469e25e942f85a3e9bd1d81c3618e"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "0c73f610337e1cb2cd9e15f203cd76a4"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "d6873a27856b72287ba24733167d4c0a"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "3d42cdeb87e75c9ba538330d669a9748"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "824a2fef61b9db5c0696b375d1143a96"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "375a436f636c913145a9c5e907cbb18d"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "d2b3897f84a20c795c4c94644f39297f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "315a675e14c3f5f57ffd76c1b2e3e587"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "f922508ed037b872eaeb389463bec7a2"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "f88f3837c4e3d53acddce087886fd122"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "f6a7ae57df5943fce0a3b88c3352c2b6"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "ad14a2e109db3e4e5557ded160473e44"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "3ce9b4dffc53114e8ce7d88d34fce919"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "04c89652a7d577241466dfbfbf1dd44a"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "b4b3797e337f6a0f49ec1ab9eb84a4dc"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "9d91165b0629e6695e35c82652b7b97e"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "0afe2b1fa7711d16d8ca74464c3241e8"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "fb94631f0bb30871b565225dc8a02c78"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "4ab72974b3d5bd64d5eebe48321610a7"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "df2b21daef6f3c9d1c84c8827b238800"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "750d0e3207bfca3bf3f6049fedd4bdef"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "9d0b8b23f1b076d485f11414a1be0f2e"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "dfbb9dda93604b496f4978b14c3e2e62"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "1deacba56b8ca88a370c16b5a9a9fa8d"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "f5dbbfe6fe1fdda292c7c21483ca06ed"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "7951b3431b477f9e66c830cbb326077d"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "7d7df461751bc52abd6e9ccc1fca5651"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "e68af074df1aa31bd156d8faf263d476"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "714d0ad1a6815d6a0fb9fd2f5bc52ae7"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "e2f5edd20a9a3d618c302adb95d9e880"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "692ccf68f8212c7b2eb782dfac3d7183"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "62813e1bca11b9e7adac2874e91ab687"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "732abf6590f669cb4636571e3508e83e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "6a5c8df3b06a41ca2f42f29b32894f53"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "99b3136d971abd7d341f7b19c0536592"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "6881f4d88e3a187cc6063263e9d17012"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "dc2bf5878b171c7bbf7d8128c8219d7f"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "137634f292fe33a8b2ab17974d1531f3"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "a5c65fa7dc515ed61d213c1cfc888d7a"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "36e6ed4ba2b12cf6a6c6862b4b439faf"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "ae148fa32c3c7ab5f67caf7e38b0d616"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "cef1dcbd8e7318282f90dc63d3d7bbef"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "76ec31ccb13692a844f839490d7ebf40"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "da605df62dd6b651730163f54afdb590"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "0d74704aa4588737d67e03de4cebf6c8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "81e68d89d441b675616f596d8a35879d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "7b51c0510a4434be1ddde8c3bf5e4e19"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "d1e9f47923f97c2b7be0da70463df179"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "b19b6402cb2e08c49f5744c5bc6d75e8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "6ff42c6db2c23c88c04602a93737f747"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "18ea61eb0fe8977aad1aee0b9a4365ef"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "16ec8e6eb1e464f8085346cb784ef18e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "7bb74985c6b2b8ac0e609eabd117d1bc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "c301ff84210fa057ca1d2f65aca25021"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "aa0b9663edb85f6e1bd907f01824d6a5"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "87bcf54f945159bf35f6e343edaddaa8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "a1fd428061f981e3f4145e85de4a7ba8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "6f28abb2654f6b6394cbcc43ca467efc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "763941edddb29f6c6495618a44c6f3ca"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "14509f40a4b0b1d9e852258d83f00dab"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "d2221725cb0aa8466a6a3d245b89a3f6"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "96713163f51eef6147f4ff3ab4b3109c"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "1e264e3881e60f102be0febe47936767"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "0c498f42e198cba781401a8e2550bf7c"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "426c4447bda3f724d801008c15d5846c"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "9675ad09eafae1417c304ed120c0d917"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "bf8cd9f54f1068ea9bd79889e2b222a2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "2ec9d921bd65dd3fb1287db1d27534eb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "675eaed86199c3567c551d9247c215c8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "19db2f366226d2dfe3388a90bc496d03"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "1c2533322e311029e10a9d106a205879"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "a93202def70552456aa81c359bfee891"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "68255399b8c999bcb59139c341aa2b5c"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "e1d5fb237b9a1c5da9babbe25e1d58e2"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "f238b14e0c3edccc5ce21edcb058e43b"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "7f0d9ea3f3dd08fc43250933594fa10b"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "c6157492fb2d780a94989776cb634a29"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "ad1addd46a7504ea32721b7dc6ac1819"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "00ce665177910c8148b12e9a1588b512"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8da9484b732b622c3d66bbe4b833a7b2"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "60b6e38b522cc91fb174e2e000a4ef87"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "b6e73eb8ccd47c8cb5497858cfa522f1"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e562c30e3a2f102f171436c179b3a76d"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "f4631edf1ffa60b4986915b783ea7e5f"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "3515fdc54f0011e4e678d8209b4637ca"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a366b505384dad52265a6c4cd70f212a"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "f0d2e12270524969e9d1cdb5a0ee28ee"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "53761bd7df924f3bc541886de35feae6"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "e7c5a70f4944e125fd25c54de5c10d8e"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "d8117485571490f4a4dab04774bd6303"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "3602ddac05e29176eefd98c20c739707"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "2628e5788c7c0c8fbe840fda4573fa15"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "dae2c74844fbec90d3b8c6961f58a7dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "577092e5ab713b86a28de6ea86914b8a"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "82dfab46514da9946159c70009e0dbc2"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "fb626396d738749d1cb110ff9b4762a5"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "41f80c1d5d6e26b5b3a02c44d2365520"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "7b47a4249fbf5e4c05b0ed3c024f6653"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "781b1ec9b5b20b2778591d8ee498a081"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "4120c561784051e6e7b6fe8d4e92a3b0"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "3b95915184b2bd80a79892beda08a962"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "468e143b35adac0c38c67b0ad21883d1"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "f5e804348f080d47a9587b3c762fcd2e"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "4b45aa486f3eb2d89567aefee538c515"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "f83c48fec6c01dae51ea0d1924f1527f"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "1dccb1336e0ebf56f33f854b245d97ed"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "0e854b930e52e02a3ca7e2360db7f28a"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "d99c82c132b7551155313e9f65fe56a1"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "14225ff65f534a0a4ecc97e43c6bb45e"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "6a212d9f90065f25f875811352c53d16"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "70c0a5499dda505b0926cd02423bb09b"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "71c65d90919df2ad83220e60cdd3f680"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "a5507f4fc076c5d5ccac9d370aa46028"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "5333e089e18b1f15d9dcbc1b3a02979b"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "729f95dad54d4f1290123a08326bf232"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "af42871beeae31ece625f63e48d51588"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "433065f98bce63c4bbd07f67f1ec5c5b"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "49d004323a665564b0b71ca587808479"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "27c74b05fadb4c6980993151f3398902"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "64a262cfc46069a47d86029528847e48"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "235e80da76c233ca0cd77bd609c5ab06"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "85c20a72e3bf523e04f2c4be768e3ec0"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "818f038d01fd22121da3d253fd3d53f9"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "0187b7bc728f86b18be381bd3256be7c"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "f41b5acf3ba4111799676d9f3776fb54"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "7264fbddd3b0531dbe3fc62f92a25623"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "87c2bf99267d946e3506fbbba7e4885d"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "5387c939950725cc2f32a2ec39463db6"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "8c8adb1bd4b8bac118a8fac3277dabe1"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "0b0a1b19dd6aa9c3b9117c8bc8a63f87"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "45a20decbfb327dae050c746a3fa2705"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "36cfdb03f1aa36f8b9a60d6fcfcf3e61"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "be0677fe95c47fe8e428a7f1f8592b2b"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "e9edb36932a7112c6909f07c2904aa3c"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "ed5b761b79fc70a3865d31b25f00c6e2"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "a8b2969fddde4580397cfb2b117ac1db"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "145a2ef87364862ba2c6a423604dc4d4"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "892db173adddea2ad1933aca1fec6367"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "5473260592634080c12eb3a74d3ab74c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "1aadfa17ebcd5549a49e61909a2e723b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "108854534da0a0307ee8941236fcff20"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "884d382ef2fb31d7828d937b77cfc987"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "118e5cf8b245a5c2cf0c63e2e2909fbc"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "1c6135e3ac9714dcafdd00ddc955ed8c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "6efe231672f48d0dfc015de2644c5498"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "4c5fc9519f4ba8c38c2217b0aa87a58f"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "afe012f7284c604982701e22625778b3"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "790f1c2d4c323bd906248438c51086bb"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "8736041936b73f1c3f712ee809f75db5"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "f4124eefe2dd1ee6d4b4407d6284d5ec"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "a6650956bad33a18eb7e999e670dfccb"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "70861597b40eeafb8b6ffe41371db25c"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "36805b86e4988873fc5a9d7f87687d65"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "b29478b591ef45e3e42426385ef6e03a"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "169902a4e4cda198426ed0a83ac4c648"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "b00957a6405ffb99e4b1e734d2d853cc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "3712866444bd783ecca276045c038d56"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "8cd8596b0427b4d839b475e6d18d1762"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "a22553243e5bcad986c7255240be5351"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "9dc8579ca4e28b13d63427c8a96b29c7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "1b0293ef77f3f6ae854c10742cc82536"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "4047e5456335d4c5c6dae65d911ebeb1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "29b237927a937eee015ecf82bee41398"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "f48bc682eb531dc5a109302e1f8928d6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "ce19058446e5368475992e0bc2b2f0e6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "ea926ea61a42f5cbfbebe48053092b3a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "2160c0f160c0e1be81df6fe72cbb657d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "0bea7f909ad1d973d4e17639f1f8115a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "40d337b5bfc8b9f45ac5d70d804b0fd1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "9b7d5df8a416217b78017721551c1442"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "ebb9cde5f6ef1f48dfdb7e3731808490"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "dec98bf6954e63fe18520fc2c98f0980"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "24f25b2dd37f161145787d3d13b80323"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "4c8f4631901ea18e274a5775e00171c5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "a1cde3efb832b5bfcce840d8b7b2e89f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "a120b630bd546db8815d9d9b6f3e0ee4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "916107c5ca1db94e4a3babc891df17a6"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "4a60c9f3a8be2dd5f2de9adfeb4fb1a2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "5295200fe803a0d063e2accef77d3e82"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "3cbf932e7c10e5e7c169ea2f32c042de"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "481a7f4123f58d7457a506691d1fdcbb"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "93ac64518cbf3955c7d50e36db371c0d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "c10ff0711d4461d46350ad9c221a4451"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "31cb434da3b52941cc562001977ab33c"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "af2552ae1048c587d59d74a642f278cf"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "a4086e68e2b5443312ba90f3917836df"
  },
  {
    "url": "categories/os/index.html",
    "revision": "b45468ce38dde7099a3307053fcb4b0e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "ea5dcf03eeed04c6bb7ccf4429d97772"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "312d7be49b1f7944a1a833a2fc2008d1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "0bfe844991e89b7f559e43dfb0b16341"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "a232346670ac0abb6e840269ca58d7d5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "b0eee60859e03db0a638023d9b104c11"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "019b9538b10a1d868213a54a24877918"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "8c8c2ecfbde7ea86ac90560b3376fc76"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "24384e00292a4d7791cac8657d277ed9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "6617f317afe4c81201f5712813d80e3d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "4bf6342856479ec666e7e36f2a21186f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "63cb873c9eccea894f5b3647f10ba98f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "490b6f8ceb14b7f96077f5814bc6fc04"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "4f47be7b31998826531e67a652b1169d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "cdfb6e29eed40f401b5ab8373150a853"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "1fe5c8b5a0a7d9cee7b2704bc5e1afd9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "6aaa9ca7cf3a5c6723462e11adf0ab3f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "222925a7cafcc3ff43cb568d25381641"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "97b8f977322765f4897a5356cdaf58d3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "e23bcfc3933ae20f327b5fed08c19f3a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "7da2889198c265d15fb0fe9ee11085a9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "07295ebdf5b76327c8be141343569292"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "43f78c05336536c88a9860c056c345e1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "70bea2d55356c2454f04ed6e4bb698e0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "d4e5c743cc00b652fff1dbb2c59c4d97"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "f2e042cb38cb7046350ca318fbee4542"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "153986d6c8611b2f61ff93b575f9752d"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "1d3bb575f84d357d866c1ae495f29917"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "3a0475e7390117667f9e67ed3d899480"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "9da25d8dea73a54a1658a98331ee087f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "87a9aa7b09c0938b8982a3e48fbd72c3"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "8f7e7c973073c11d67075bd56abe8af8"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "c5765d19224601e0f5cd4eec3af5cd78"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "983ffae96190591f8330663c5a22b8e8"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "ca26b5285dad695941b234e099a21cdf"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "167ce07b0b4957cfbafe38a86df66dba"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "7ef1e687e533ee32942accf56a0f0b80"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "6b5f8b67fc075e4428677e96c9509eed"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "f75aec44cd074effc4db8152a9facc77"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "4075472563ad2b5436486ca86468caaf"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "2aed1612399c260e0ded85a491ec3522"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "f2471ebacb47ace56d7d0c0899faba1b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "eddd64114e82889c4c586d16b4605ee0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "fa0665f703aa03b6d4a8b986121a945f"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "5a0d411f453fb0a4e5b597b8d3a2e868"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "fb9abaf1a055bb25db65a12d68fe4d6e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "5ab108532822764f25bf6e1098131794"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "5381ec2e8b56a452722c2843ee3dd926"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "ef69141bdaa4a27311f1de7c782f387d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "6e652666098a4660fccb643600c283eb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "d855de095254f6db932eef4f6c489606"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "9ec4106ba226bae931080c238e63ba3b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "0687e3906aff25f48fc891de108fca3e"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "01156f4d9ec41645fea87825db6c841f"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "edcda9aa6d25d013b21479f024008b4f"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "ae5410f59805e30396c4bdab7a04523e"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "7987bc21b6ba897439b541c85eb404a9"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "8556187feb058f1c8d7f0d1b23c9fe7b"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "4047f4b039c795389a46c6280f7e5205"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "7c3be898ad6d22f780afa4d51abb86ba"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "bfde4d8b2b5daf2e1ca278ccc9322af4"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "3cf46d5cd4e44097b930b7107ffe5c6c"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "8e807b8a465dfcffa3722fcb551eb091"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "d96c5818a2b78050501c53ae45fed0da"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "c44d4aa25eb36acc1bf2b5125fae438e"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "4613ebbe1bcd03f056b95aef755a10e6"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "f7f0e47e1903b22cad3fb4c9db02c4d6"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "a7c80261ecba193a1ba4ff4aa0fcff2f"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "78bb9b3b3518ec0c1ff0cd3c7c727587"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "49e2fa30e00f8bfe4c0715222b29fb08"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "aaf1c126267f70aa85a76191d624993a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "e174087a065115289374b234c6b775b8"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "393f821dd54544a98daee3535f88a7d9"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "216903c852ba9331961c87a4f76c4740"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "e507265db1510a2415ede00ea0a3ec58"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "818e1870b44194594d28be4e8773b545"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "f7903ef9a7707554633568b6bb88a371"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "eb2bd04c620bc49251b43ad8c73743c1"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "9fc9d2278fa54930bd5315b5ad66bb77"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "e2ab51ee75497edbd1f7c171aa9ba570"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "d9192d9e490f98cccaf3e4c31451b959"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "6cbb95241c0de63fa10f9fce0aabcb94"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "23786c0a743d344cfa0ee2c80e6bb357"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "f2211f73f254ee2f81920642550fedad"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "a63bcb6954ad41fd821db3cc0bfec6cd"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "2e94ac686f63fb5a450179b28cd55fd7"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "f18d38abbe49bb57c26901eb70ddcecf"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "7b7feb798c069ef1af85bfefa1f35f64"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "99bbf6883f41d8d143cb3a337c322ebf"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "eff89dc94a0f74a2123aba13e8a8b2e4"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0d82a79c13cb9a35124d7f1c61a76fb8"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "11676f39c4c52359316eeaabb06a0b51"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "8706cdaebdf022f0173427b373098f32"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "f8337dd95f191ded4a1c9629f78cea36"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "42eb9ef227b0e4d38e2a808a597f3c75"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "cc1f35e944593d0d5b2dc33d6ccfe063"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "ad7fc1b6d5e714fa48c60fea161ab878"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "791b681a488772061bc7e5bc66520e37"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "77e6d54d2de1269d7aff0fb3f9601fdb"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "7940a98e745416f79d9ded5f67d29046"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "a131dbc522ebff73184173dfeb67da3e"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "1feb4591def47624484205d2645e61ac"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "9af93aa6a2febe07265a4a08bee0776e"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "a29ed2e989673f7714ecb4498ac6b4ac"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "fe05b5c079f180b20fc257621cec46f0"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "b01381c75c32e09f5db81c10ab68c6e5"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "935d97ca9daa5884743579353e010eec"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "fe7019f54c24cdead4974289e52d8156"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "2ff4601e8e6b4a23779c631688883182"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "33efe2f90ecb1f89a055981d0422b9f0"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "68d4926cbb03e822ad96b0c6947634a8"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "c627f794cb3d41e457bca76dbe5d70fa"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "83cd0e7742529b577e4d04f0cb2d5c46"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "f55f10a7e38d2778ebd5e1aa97204aeb"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "6e54aa3d0b7ae4904eeacce35eda00bf"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "ea14182ad8379c95ef47ffc70cb76e85"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "0d1a2467ef999191d67641c25ca90738"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "cfc1535624b0377c5cc98234b884591c"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "243f0ce4865438ee3fc588aacacba7bb"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "73e2cb10e3d52645c8c8d71082fc7610"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "afb63c18d6c133894e80f3c7b3ccce17"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "950a0fe03bff3aee3c88f54735afd5f4"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "66eb3a6240c88d49f6fe223950a2970f"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "32c0b93ea140f63832c9bfcdd32116af"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "c47b489d6865b4c7ba7d5bb3975907a6"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "d6cd7779189aeb0383d8512fc6c1383f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "c04412ec8922b91cffbe3bc85dd09cb2"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "f6ebca238f2925f08750b0940843a462"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "cd02c004291a1f6a8d22e3b42e331e29"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "e7bf0aecf63ee8d6dbf32a8b5918fe8e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "89840061ce44c053f584d4be6c5a9189"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "b9601904eb78af58b9730218f940b165"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "f169b03916669ea030f909ef4daccc42"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "6b78ecf9a009545b142c860d110f69e5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "846e780d82015e79286795aa0a1dba8c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "c0ad1293523599ebaeac189f9b112864"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "8275d14319312f4e0673dbecf2a86448"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "6f0f5e1beea9e9762d59088007beac9b"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "8ecd5e3dbb7aef3c59930a6b582c32fe"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "7cce24b13918783a4b934c23b085a19f"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "ba7d7c6eb53227ef000cac3fc0f4878d"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "57bb966690e4fd8570628222ed50e02d"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "eccb94578fd016757a6f88d7f077ae06"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "079e83e82668e931f55d974e7e79f039"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "8ef65e46558047eec8e43bd31776d5ba"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "c155d0fbd5b66ced01c2eefe9b12f8ba"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "02519c256bacd3fed74f7c61bcebe75d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "1f66306fbea6f94dadc27b06c6b1a881"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "6077feef328942aa59ad3d72e04bfa57"
  },
  {
    "url": "categories/php/index.html",
    "revision": "260a32e01ea237f903e0606c2e4487ac"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "f04082325cea8056832d5db5f52d1621"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "31c1bb620ff8ea1013ac414c5f9932d2"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "b07fc69522cd020be59179343f200a7f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "7e7f021e7ae2f16ff4af7161dcb81ea6"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "267b3fc18048e032f802d3b207bdf31e"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "7512b6abb699033e7b852d45569e6798"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "c222924f12c5ac5e9c39652c8b0ff601"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "5d6b7ccfe007241f1e327918f9f7e79c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "032e958e369142212937e46dc6a5afb8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "5e73b1adb2681e612ffb647821bf841f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "7a7a8fdf4d3014af125a6a904e0c692e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "eacbf3310c140e5604bebf5ef2ed1463"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "7aac5b16981f4f6a69b2b5f41986658a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "24c4f2743c8ad45fb23f83a1e73130c8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "4c00df80de54dfb7694baed1e9103383"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "ed3e7c21dd729ee71c0bedf5fb055fcb"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "00c5da79f3ebe9250ea5445469f38132"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "e8f7c7b949fa8bede2983a82bfc2085e"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "13a5c840f372dfeecf550d79ee1f8f2e"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "0a1491ad1a08b47d573b583681fd4110"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "1c17c4ffce4b333109b6308aaac0a055"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "a174450066832c7b00b7ec720d415932"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "5209521ad6d679f50cf47f10b8f22518"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "00fe90741c809ab75a9047e5ab26f393"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "c16e594c8f569d861f908a5e22f87287"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "98e343a45037cc7c7c842e418600d167"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "6642af0fed1d2b694e346fe38a955cdf"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "970d32cf8208249cc1f3ffd99115370c"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "1356bf7d188d545791c4191904c41fc8"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "9ef8452a724d87b8f568513f881ac416"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "cb2d4510ec19c00cd4196ee8abcebea7"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "2ebb9e6fe76e3edf966536b3d1b72a4d"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "dfa6cf08beea5cae7a4c54b5e8392610"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "24bab662017a8355f002e47420a69aa9"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "2c9fc8de1977cb57489086dfca7531c2"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "afd89d674c8cdd737d4b47c7a2ebacf7"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "f0e85af555e588af07312534de5dcd14"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "8b93fd880a24f7155e1048967a99c088"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "a2690eea1c73b116eaefca773ebe8dd4"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "eb28dd78d5edede87fc5afada7cbf0de"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ca5f259a6ff364cb1bb8ac2362fbaec7"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "31e3c7e8f096811e3742f1eb2b37ffab"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "345cd0534a93cb19e2beb18e8c91ab95"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "c9ca91769ef767d05531cd24fad6d6f9"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "e24af3c72735bde210d02bbc02919e2e"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "0ab61949bf554e005e7d7a5a00860241"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "0f53a4fcea3a54fc776ca12f8c4f5e00"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "1cb44df3ba9631fdc4e3f3a14efaaaec"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "0ccd31a8281244a93506d5abb8f0393f"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "761321df83257f7918b8982927bbac38"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "4ca983c4ddff917859ce1f91dc83751f"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "209b06023d6657afa4b5ae405be14687"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "eb276eb89eaac5e1567d0347e37c4460"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "87853b897a1e26f930c0186216485d9c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "71769a4c6df488a37a5057aea6f08fa3"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "c68f814cc363547b78c7c89e54aca659"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "da02b6ce171ea6539dbb00510042309b"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "8019a3b039f2d7578f8110542a82c74d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "1c4c298afb0fcee7ebfcb78e0a528f4f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "721ed723f9d4bb30f94d498216caa8cd"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "ceca0c45b28cc845abdd3e03d96b8ff1"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "0c0e7e001966422d51e8c37c0672c722"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "4a4852eb166f74c6e9c422a90086a400"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "0c2cf19ca953eb284710e32a4371a140"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "3d842efd54de94c95e59840011f84e32"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "2aa438111e4e8a2a3285019814a522f6"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "6d329684d40402a5ae347b06e69e767f"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "504c1e286e423d76cdef602debe4df7f"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "b9d8eaf6660de9d475f4b3b81b4fb38c"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "417174afe20ea2c8df3e4171889f3b39"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "24462f4bf3cac6b36bd0d97e54aba45a"
  },
  {
    "url": "categories/system/index.html",
    "revision": "016fe9d6a78d12ac8fafd211cf8e79be"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "9943ae0c2c052bd6df3c3cabf8332ac7"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "b568b86a5cda8ecbf3cffc5f684e5a76"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "a2dcf152daebc9342d78eaa573b726a5"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "d5bfecfbabe46298de5e08173aecd3ca"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "adec8e390a739acc771ebe522d24c471"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "2b06da700f76c4850fa34f378a9ece1d"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "b425d77b3270ba0784f5a16ca1d7f59f"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "fafc0ebc2e7ebff8e6c07f7b04424660"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "82ad72818077d6d884936c712a2ec5a0"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "b3b4a6ce346a1c9e13d45d9836e2c310"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "050c6ead6b6e48b0627c31405f8e37e8"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "ba904f973a0a77d3020d828961e150fe"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "c217663458878ef38fe0a74e387d4951"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "8fc6047f3ed3120200549d93896dcfdb"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "d5f1e02481a801b25311b66fc3a24196"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "1a1940f276236da4f10854297dc819ef"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "2a036b21076c2d6d83f159c6fb51b593"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "551b3c49171ad9d1bf22c51b99a9ec9c"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "8cd3087c7b4cedd7a16d54d7a6d0d332"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "b30e2be5b8058a4024a856bc5a3c4658"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "cf3a41fd2f6c7b9b7d5d97c730d92676"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "74b6e67f2b97501d19dfe471a3282fa4"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "3d0212cef621da267fdd3745ed668385"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "9749c731acf25b30689d17cabacb97b9"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e55da78853f2d42a96f84ec4086f86b5"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "5c6553de02cea10920320c866bba28bc"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "c4d2eedf3b1c294f654ba16c6645d857"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "fe90b1bf9cf488bb0414b62cf1374283"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "dda127235516f786f6557f9f4ab11b46"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "e94a44b17560b85f20ca15d3e6b25834"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d018fe747d69f3531071036f835c5d36"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "06f3d40ff3d25a37908d5fc834fa5ff0"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "29883784357eeb6321e7e0106fbb0147"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "8f1b0d0b21af7f2d054f60260b812ee3"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "ce0b16a756481bc81d329c6fc429a411"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "9db50b34077044b8530d25a9091cbcc3"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "fabb0951416908afe4bd2c55df1fea84"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "bdb3bf40ecbce63d0bf07f4a4454a66e"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "4d74a001adda3103008ff10b90923597"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "9352f7800ebe3566dd58a07b157e7529"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6839a44ce5c1b350c8000ce38547219c"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "07740a371782b3876b7afed6d34287d4"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "60fb9b416381c6b9cf352e727ef3310a"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "a86556ff311f163319ede4a13ad19edd"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "30c3f0bbaca483c68718edd54f80d84e"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "9d566ad95895001f354638462ed6a879"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "ab42cb081a3e017ec89bedac78623a1e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "4e64a23844a0f6ffde2f050c1bde4cc4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "2f2208a8111a8572fa8be36467fdb78d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "42a36411cb86dcb0f16b8c7f87b4c7b7"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "437cd7411ef116ac101ae7263c93132a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "3b2c7f8d881012e3682711007a0ea944"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "758af1406a2e3b5fee5d6d5a037dc28b"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "855f4c149736ca915f1d88f00aa8db3f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "e6f616de75cc96058af1d8481a517094"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "9bce699b63471d0773090609c8abe63d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "290a34b55b2cb9b4a0447b4705bee06a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "331093962c2dd99dc55c9f51267952aa"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "6852b0a956cef7ff9d7d2b0971b29d95"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "0aa07eae40141732514c8e4e7d5011ce"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "b35e9f26dd600f6b8d7f1b49fada49cc"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "f5fdfe96523aed3e8f34607e8cfb0847"
  },
  {
    "url": "favorite/index.html",
    "revision": "94095710904cbb3080edd518d500b26c"
  },
  {
    "url": "index.html",
    "revision": "a1e66a009f531098f95d11f4dd977915"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "e40bd5f27481020b76547c832625d4bf"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "10a108e4e3843480060fc176fb0a5e45"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "56308ffeb5c5136c790ef057b9143643"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "03c8975e728f7b4303fa72c46d61a888"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "c0de318bd54382ac45b67079aa483f23"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "10fb453e16951f8a0599f57b6caa0de9"
  },
  {
    "url": "note/index.html",
    "revision": "21d8e9d786bba4b6d850c444c3eb249f"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "01518330e0094c228bfb629799a174fb"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "4ad061871743589541f7a66f80b96f8e"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "b65d943f32128aefe4112888b0a29555"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "1d6997b7951b4db9b003fb3271f28e0d"
  },
  {
    "url": "share/index.html",
    "revision": "0d3ae1e785f5abd90f42889d0a0a309b"
  },
  {
    "url": "single/about_me.html",
    "revision": "777a1b9fe65df290f1024074ad5514ee"
  },
  {
    "url": "single/all_article.html",
    "revision": "042f19b99d8809cf88890fa9d0f83c3c"
  },
  {
    "url": "single/welcome.html",
    "revision": "2404e5a924570c9da4eecfa5c30261fa"
  },
  {
    "url": "test/index.html",
    "revision": "363b62e452de5801b1862e073c33c950"
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
