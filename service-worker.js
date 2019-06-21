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
    "revision": "ea9f73a608b555f76a1251aa38f3fae2"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "b5e125200aa945285dc05b5f37579256"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "eaf103df342c53787d83b81ac9004180"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "39ce53beab2194d6cb3f5bbb48483c39"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "89ef1b53b77defd64e32231bce8f3ed8"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "ee6020281841f90c69cd1d0c8f52da77"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "8fc5c9020bf49633d5e31cf83f693469"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "6087ff58a57c5758f6ad45aee96d452e"
  },
  {
    "url": "articles/index.html",
    "revision": "8c58767e419f0ee266163c0038350e3c"
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
    "url": "assets/js/1.2d47e53b.js",
    "revision": "b011f44d5117f840dafe03d0674b3277"
  },
  {
    "url": "assets/js/10.90d8996c.js",
    "revision": "176b6c3d88adb2fe70f68df884b9a95a"
  },
  {
    "url": "assets/js/11.dcb10fc3.js",
    "revision": "ab3c0dbe2b6b4243e0369dd1edcc2091"
  },
  {
    "url": "assets/js/12.76af0b83.js",
    "revision": "fab72377c579eab1cb642ee633d7ebc7"
  },
  {
    "url": "assets/js/13.d29d541c.js",
    "revision": "cbcfb4fbf5dfbd4fda5502d081d970d8"
  },
  {
    "url": "assets/js/14.7dbb0e10.js",
    "revision": "99aa632e63200a5213d5ba8e8d70d6c7"
  },
  {
    "url": "assets/js/15.4514738e.js",
    "revision": "70462f2d37e857ab889cc0c75af23c2e"
  },
  {
    "url": "assets/js/2.f0c186c6.js",
    "revision": "a03f306d40f20e4dc4cebe8b36d87d36"
  },
  {
    "url": "assets/js/5.6335082c.js",
    "revision": "216ca92972c305143585fd9602196d3a"
  },
  {
    "url": "assets/js/6.440c87ee.js",
    "revision": "71883e9564f4e1611282a4cab6327f2d"
  },
  {
    "url": "assets/js/7.b2dc231a.js",
    "revision": "df5b5a6303c247829239ca47908b557d"
  },
  {
    "url": "assets/js/8.11f3be4c.js",
    "revision": "c08b455c391b3d889c9dd6bc69b60c84"
  },
  {
    "url": "assets/js/9.949b3689.js",
    "revision": "1d16085421ee06e4f6090cac94130c98"
  },
  {
    "url": "assets/js/vendors~docsearch.e1f08eae.js",
    "revision": "ebefc8772bd4cf593d8aa2a137501c11"
  },
  {
    "url": "blog/index.html",
    "revision": "a16d3963d99180abad31efc16a06e077"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "04a6092f19a87f7c594a3a646bdcbf26"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "10fa15f9961e90302738614534712137"
  },
  {
    "url": "books/index.html",
    "revision": "e2361caa753451d5a54748fb9f9e7cc0"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "cd577190a5dc6f989d2cfd415a198bae"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "2f25fc59419442dcfd8fb345ba9769db"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "119bbc5ab65c3fd9080c8cea6a8f165e"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "4500eb32fc409a20f349b863d928e618"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "f511fc3627c459d97a94ac7281a13725"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "49997d92b293f8eab56d65e43e175c3e"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "76aeda155da0fda67c9b6f924ddbb247"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "24d4c18dfdd1f1ceea67f09beaefd97d"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "2593c668e6ae7fef4a3d4833faef5fa0"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "1bc8962309d93a1932c1417ebdfd3a25"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "b128f1fdf8390a20155b14e39eded3da"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "91ed811c15345612bd4d889f43116794"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "7ba66a4ece35c386468b706b3c085081"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "a9c300011ab1521122f6b60bf4fa89d6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "7d20288405005f3aae27757ae040034d"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "b897f72eb0a324d93ff3d1206cc502e1"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "03ef68edb0e45da32124ec297aa3c83b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "ba4ceeb3be5d74a7a81d662bd70fe3f3"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "21d7fc4f617e0b5df089b498867d9329"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "9b3b1c1875d6a526e56f135f3f271dcd"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "b15ab2e18737393219a3458ffa6ef535"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "dd55f2e7725377998418b9dcddbeb091"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "0feed706097d8a2faea08a56f8406285"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "0639888d5cebecc69c6d05550c1ba3d1"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "942d927b6ce85c4cf2589102d2c59040"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "db1cee3d675838efb543a912ee5fab7f"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "d49003fb4b890f336df983c47b640090"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "7bc612a2a14a19a1d57e89a6aa1c466a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "95348cd1a1cf36bfd3079df8f5f5e3c4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "4af15d526f1508d82cb0fff79f5ef9eb"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "ac45cde90164a6910fb3c6c3eead1105"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "113b74e16a55f632093656b8b7a9fdb4"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "e339d5d2a503d7e91fb66024fb369813"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "07fc8d65b8e8f5cdc422b7df96ae20f2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "be0e08e1653a78872b0b91dcd3ad951a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "9fa2b636af2e51ac5ff8e025b7b0a873"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "136f39299ea8754133a641e4f6551ab5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "12791bcb100ab7f9d2ac48bab6b5bd0b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "933b9192a1e3729d771c88fd8968ac23"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "8ecf288c452e299d93cacc65195129fa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "9bfccd719b4eedfad9cf19bc3e0eef90"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "525de9985b1f77e1f2822fcd44b2641e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "5c453921c5bda5c43b8c080cfca3e4ca"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "aca6980e5fe03896a2c2b52ddfb3a111"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "488c8575f40f18c606c5efa16188e051"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "6f629c02583c896eb386faaded39ce1a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "502227865016ed82f773afa4a64409b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "cf3212073898a4a0076054311978dd29"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "0880859ccdb18e14deea1243a1be22c7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "d2b8d23169f87f9c53df029c318cc385"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "695fe0cceab749b499a9e8a8dd6d9e91"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "bbfaf10cfc5e92c073ffefd823a75271"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "2d8c9ac3eec8742b0556ee205b6c90e8"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "96dde70fcc56c3211b5f4e33344a2def"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "67d94e88ea4c86ae6620dda1fc5e79df"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "3f92437082cb6291b4149f84ed935538"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "18ec54e36becbe1ee07306b3635a776f"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "58ca1a5e06d253dc9b27faaa4ddf4efa"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "03a5412e0751ff603a62fc46e761d398"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "81d9cf3fb7a561e096e3b612a6f79b7c"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "7e56a2ad025eed256c118c8ef95b2260"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "27c1109e6895047146b75071cf186421"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "19786aa28f0c7154f16630774cb08436"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "6ec1dc21ceebd1451d8cb17915c223ee"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "24613016a8503ec76cdfd4eb96c321f7"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "6d0039abf5d36d9151831cb3c0fb4e39"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "9ed58af21053585cd5ea273d84eea811"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "f02a4d80daedffce77b4bb7cf5d49bcf"
  },
  {
    "url": "categories/database/index.html",
    "revision": "a35968d0fc9410ff7bcafcb45496106c"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "7bc6fe219a8ac881b2d9592ae5f5e3f9"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "104c9b4f65f4ffe68de9099871cae622"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "cef6c2fe6bfd5f4c5ae2f49c3a3f100d"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "628c5ff8d942ecc85a1120fcc89cebb1"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "da2cfed84820291b18dca993863fddf0"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "2f580f021df7f2d856bacf1833299b5a"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "efb4cd4e88d6324430a3d11878e2c40b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "ca77d495998f090316ab1e5d607d2ccc"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "92850806143e73de3637d48ade01dd7c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "65941568b3c85ff25c3d95a8a85abe3a"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "f6c002d23a3565ed8929e550416cb3f5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "b2218a448d739c6aa6fa7d44653b784d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "33e4d6333b133282a628c314caff497e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "b7ffa8e3e4104fa5399f827b0c045109"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "d48c29122f8907e120f9fc62694b61bd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "def07012c684ab3ba37f79ae532dafc4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "0c08ccfece800209e913238bbd0ce4fd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "8c5a93149fe559d7e31d0228ff4c3b47"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "45a9e9806f61a31ed6d695895d59371a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "6f75f6daba7be07f100fde7af7fa6c28"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "5a01b07c92469e8705dc8020c3d41d4c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "5cb9780a3b64192feaf6c89f8b345375"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "5e5f3ad97cdd2b028d87d8b10d5a20f3"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "61958d2eb6e86ab18da1005875ad911c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "4df2b70f8270a4d85de97c30bb67812f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "92203b48ab377782733ba71a6d3a8035"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "d2993a96872b5e2487f4a49dcb1e0788"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "09ac30c62b8d2d3e7f03d920e2aa24a2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "c45b00dfcf6b6f1e8d70e864655dcdb8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "9a7ebb15b88a084b792ff645f1642d36"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "7d7bf332c150c55b4303bc2ec90796f4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "77d3bb3ec1c2c08a428754404c340e77"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "625d9021119a85089691e2275cd7dc26"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "7279fec4d13d385ffda532876afe6e94"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "36da06845a03217b7ec0b0744af00dbb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "5f06a7056cd4add02ff10cefb71c0e0d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "2d8ee9e9ee9fddfb0fba497f25c8e957"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "5c8420790d985087a5a25d7a42c931bb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "b5f0caf0d870f0e67b32a9fc8e1e519d"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "f0235ed4c2c02d40b4f0ab11e5e3a4c0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "4b47d426894b974edd595439fcd91028"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "455121bee4ac058ee6cc95efda3952e0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "769b7d0bad16961d0d2e20a095cf23c6"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "4bd831dbec34414dfbc87a63dfa80fb4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "6bba0bfe406efbd17dc1727edf54d001"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "532172cd6498f4687bbd3be7c14b820a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "60e811110918861cd76f9d4fda51de72"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "f3f3b8d60f4ea0a9a9fca84bb3b61a8c"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "10b7e63c05365b3378ed7447f9869c37"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "212b071f32a6c2e3b5aff0d594ffd39c"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "973f3309cdf0a5ef3b55109c31491fdb"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "7611bea01ad9283ac0a4b1d034714e9f"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ecb6b3818e86d1eb5c1ddcf66515e006"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "cab572a9f393df365f30462444828a2b"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "a45dea9fb819f3bd1469736efe18a8b5"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "b134f60ea9de82d6cf8a891785ec66a5"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "57b352bcf9263aa0d230903415d64b3f"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "28ccd67515620f9f4328325fcd11e349"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "34d02a6f5188179f1b06c6bea0d25a35"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "a6776a55858072843200c76bece6ac16"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "a86ef0821e982c8c3e7cd97bd2d26882"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "253c9ee0791d86268f4539009a4634ad"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "668d82c594180b3056c0f54dd255e6fc"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "c9a7dc3d662bf9c949b1701941a5a949"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "f655bff93d008e2cbf8dd9d656842d23"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "0f0dbd5f7863af134e785d5a9fe6f0db"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "9a5e2f36a8a485ae7f1bb090f2bab3a1"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "0ca0cc1cf363e3722bfc7166a38a7660"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "cbebfc7485aedf2113971a4a7949ae76"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "283525033291b0d206d185f3e0f92be8"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "476e368ad0c9c94cd1029d53fe174bf2"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "3e5b68f2cca2e9a575aa66cab4b39bd2"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "d5b1f5808b44988dbfb5abd721049e25"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "822279f9bc34467f2272867db37fe8e7"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "36b41a4ee0b20373035603f56a68a0e1"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "b6944f3aada58e37c4d623431320a8ab"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "84c444f21666286b1d3964526fcbaf8f"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "636238b778853ef79a48e409468122ef"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "992e57559c9e30426b1967cf8e39dfa1"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "33d42f431054c44e9fefe726b6c6d294"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "d1073a00ad6984754b57502a71e1dfbf"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "c7d2880c0c07fe070f8b7942ae272768"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "f313c8b2385ce7920948dcd63b3fd43a"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "814c136e0bb56665ed7af1ccfac7f627"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "248c4b16af56d3db28e7960553f0703d"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "bd2f5895de3e51ac793094bc85638aa6"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "2d6a82e333a2e83f20f03fb32e23f651"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "4f0078c5fe84d8ec8c22ef919bc43e2f"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "62ad6bff65a277cfbb26bf1b4ef1a2ed"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "facce5f5042ffb98770b3c3c7f4cd9af"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "3e6beb71ed7f242291765e1eac14ccff"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "6fad530eb451867c3ed4a67a66c2a239"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "db6ddd6b183be4e296e085fcc581ec84"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "0fbd7f697d1c5507994ef82100592906"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "bd9b11807e19ab3868a85ac64adb2d57"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "650656784b4f7bcf66db857c1aa9b9e9"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "71762f73f0aedebc3347fc7a9722af6c"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "c4e5c6a0ad5b51f4ba0802573fe9e5d8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "941a9675cc9325b032282ff9002e7885"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "2f398282436d7e5d1747220607c13eb6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "33fb4f405134becce0d3c79b95271f75"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "c75d500b9013073ff45772b88333a5c7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "3c032e0b9c4932f0792f9df165f6d1ef"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "828b02b9992d85d5ce4fbc84d9de1a8b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "e82a168b372fa872a6c9c104d15cbe26"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "e4f3c8b68ee7bb4510e84e6961475fd0"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "70cb5d47036661893cd689c8f50719c7"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "2f3f2d8c68914ff485b367b822afc002"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "014027561d550ba63f62600ff14b977e"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "4c3bef2906317ebcc6f3de1650b0f82d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "fbf62fe28176a1d7a0a004edac40230f"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "cf8e88d14f03094844786641a03deba0"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "16ed5db60b8d1ea17abc2e25fae43813"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "76d06cd01ec430a0a6efde4c9ef5ce4d"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "31071bb8f63bb4238ad751f23a45a494"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "5417e2dec9a919b0d34f46d9c0090a54"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "c9bacb6b06d1e8805e79e30631c6e34c"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "f8030b445d8221c8dcc0ec0d564827a3"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "099a91558a6c050cf3cf2a0c1b7a9bac"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "17c50a4a9822666b73a2d3bdc90518f5"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "1fe0bd54ee39030040b220302bd7046b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "a0c0adc10c007cafc1ffddc7f242df43"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "8beb316fe5f706b2588c2c282b34b552"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "5b01aa2ec378c9824a03ae90fa231cb8"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "4d1676bdae318e22ebd4cdf3cd082d81"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "a565d532e9104def72493fd5d9bb909f"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "28b773e7d6cea5693a7e6dda77f98111"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "2191d15929bc16cf47809c659b89e9e6"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "801a634a34959b16a35df0c3d50d9f7c"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "186d85470756793686de60c5bcd5cf6e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "df37cf85d5bb160260eb897ee7b19c9f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "1ca444e0aac987f7585b1deeaef028e2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "8049740e6c2c306b7f5e42e2b0b83a4e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "137f21fbe3c4a8034d672de6d917b401"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "e7b933afefef2599ac4a98951d6ca130"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "67199829d760dbf3af8052500540a9fc"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "21385cf526479780cb7ec165691cf5f6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "0a980d325e4ee07f69ee920cc9f9540a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "f43a21c8c053569eeb7c9afa06931a6b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "fcbe2ae66ebaf98d330b98cfe4b2df14"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "2e9a7cf4948e184c544d59f724548495"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "c1487d115c72e8e352719b1fbdd8579a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "5f3c307f8292d9b5b6c8b53f6edaeced"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "6b2409edc84e7e4109bc72bec474e7b6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "de22ca9bd12d9f18c2acc22cf6419ae2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "1487e30e6620400c809c95ee899a2da1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "ecd3242a827312e72c319b23faf741e1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "b109a2d8fc6f5efb70e65fa815f3606f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "3eb6a19d953f46dee0ad49e967f1d91e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "d320e1cac9251c29da1f745bd61ebd9d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "5f5b239aee1b6674d98b6d69a808d756"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "e7d5f8a71402d44769649127ae434ebc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "bc23f8ecb407530a03d4a96f8d5addd5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "516ac97961fde86ef9023ee41ff81047"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "66209efc7713fe4978f1f647129be3c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "fb7e9828cb5f0787c06577023e70cdce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "513dd01c47a3aa5a543e509a8f584020"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "368e6a44237435179cb36c872f244ce6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "214688e438932a773a49c28115812893"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "4e54da2aeac14c185123025ba2cc8956"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "522f725330370316b2e256541e2e3db2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "cd7dd4a3063a02fe624abd3d3448cb8f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "577447ce03ec8a4f762943eebe57fcdd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "34ee89e7e0f0cde82d16c51bbdecb63b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "33255ccceae756ec25ab26e62c6ce060"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "ea8fd3098ad848842b97a0eeadd838c4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "d20d6a3e187f8714b614e20a9ffd39c5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "cf528308b53237e8ff0901014fab638c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "703bc4b3b7f080f3da7a3e77e437e4da"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "26572347998dea469adda449cc500324"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "e31949e0477f6ff2821363d7cbf12900"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "a3cac41b32f88a1780b546c430cfd729"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "0275c714d0e433fb3377d3fb27844362"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "f9078d1ec7afbe170cd2aba6ab57be29"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "93194d996aea0fc0826eb916b5ef070a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "22bced820cc43fd65b9993bc8c3e6b81"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "3ccf300cca7a8617602a1d68d504fb27"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "06865bffcc029866c659e33691c3d668"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "c1c4d349470642f31e0a99cbe4c3f6fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "43989a8471188ad174a92fa7a7ab907d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "dfaafa748f1b81114429b7645b287794"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "241ec261a015e15a8d6d99c46697ab6c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "d040b3324a78cbd28063857876558761"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "434444a89bfda5b2af8ec5c0e9b8a968"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "ca4c60999d12c1253350271081a5bf11"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "583bfdfc3af2d8bb21bc19d24a6446e1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "197092c18055d6b03bda0849d35fc229"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "ad72fb6b0c7f3ef9f1d434683746f5d7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "5e121ba78aa8d7d2f0ae24e71fdf39cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "d2387ea960ea86938f99dc7b1134c392"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "7dbaf0fb1dad7441278694ec9e74a2a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "edd69869722d94857b306389566ee31f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "268b06e89f6cd88cff256d0d63d4aca2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "f686e6d708802893e844f9b718c31231"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "616baaa40233c85d18323406c62a62d1"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "bc2ab378dc954153a79fcd444f2ac31e"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "3d0373a762995aca632c5a9510482040"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "cc461314ae29072c2f3914ce5c6cf436"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "25545bb71fd19bf30feb4b4b92d1babc"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "8b0ab0000df2a131b6fa2c556cbc39f7"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "f7035cb500895b79699b0a20dd19332a"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "8774a5d1ca676951624c331fc41d13df"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "c3545ac6ec7e32b579ef650058228790"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "ad93fc09f937e62afcff5d968e4cbce8"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "47cb9f3e8dfe0789a3a5bbd3287556ca"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "c44d66f8b2ffce7a3d6c84ade0e7ec4b"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "f5dc60fa92f327c5ca7319a3aec23586"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "355ffcd3aac19144fdd0425a9487d0c1"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "75332525b8ec4c5dc14d0c12ed589492"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "afa8a7d848b555c767f2bebb17125ee2"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "faf17bb22396ebfc2c6a52647d027b0d"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "f6b310049fc2e90e013d7027daa333dc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "1b386514d2a44871841e69ece96ceaf0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "b2db0ebaafda8a64662ddf00c568faf7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "4e95dc18d6ccab05f31e85e110e6f82d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "18ce028fdbf15baa43b330579a184c60"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "19b13f3dd5541ef2a62017556a3cbf02"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "dda2ad8c55a15dee55a2e0558e14951b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "b1f7a843ea24589987fe15f84021376c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "b5a504fe13a9487ca3602ce34ae04812"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "daa27899fe3fd6f927b0e54975fcb422"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "f4040402ce79f4f8a5dd7a98c239df91"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "624a67c5457eac44ca2d1ec45df6e2f9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "f8bbb329103865b23e4a399f59ce1006"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "761e1fd9ff509e0fc8233e03bc0ea368"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "58c2a461597442735db4ff966ff5c9e7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "7dba4a34c953807cb2e83c2c4278e196"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "8c8770f1b3970c2fcb3a2c43b9282c17"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "987fdb0030922ce7b660434d7b2e1242"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "21c9a40a08d79450dd022d2c60339fb6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "9776f4bebe97f2475d4658964cf06bb6"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "3a6ef586fe3cd2a9b2692a1d8579a7ec"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "0878e2e054222fa284f3363d553ca70f"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "a12db3ab91e24ae6378fb8dc71b3117b"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "19902183f3d18969e7fa5c2deebbeb94"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "e0ced8fe4f3474c12591626f2e96da79"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "3b05076f9907bf4ad7d25c5f0f8bfb7b"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "f08ca3e71ba5697c2a7fe180ed053368"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "a2fee9e094a98ea2210697e445b80d09"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "85f1e409dc772f304104450e6e4c78db"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "57382da526b6a1e33b904a4d5c2d2fd9"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "f1c917ed44b708244b448610bc4fbf72"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "45d6a404fda1d4ab12e371ee41cbac28"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "6acf68d3affe7b32007ff156f1ab696c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "4b33a03f9992a72df47a196ec8f0dff5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "2dd132e54b176aacb213a7f7a471a4a9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "2ca663acbd2ba294690922ce7a7965b6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "d1039c4294694b4e5385a08dec9277bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "356a5a099dd8a03cf30e5a3101fe1638"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "f0538bc61bee351da128d942b979dfee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "63f9c8d63bd3b9298363b387626e0241"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "73e03784f624c3c4ac583f40894c403d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "d306adc52af150cfa976619978c0f7e8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "05ef08f8dc868c78c9ada99843b827b1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "09838b2406c28a9bdd1c66611a210e54"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "f0e5f03acf6f6de73780f06a5cfa083a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "adf83b79da98e2d5ed062f7306f13f4d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "261733c97586821553e349c3224607f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "e0d679249edc0620c70376f6e755d6b2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "49774b347583878e2b623593c1601b97"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "ffe5a41fca8c25f36be6f974ae4ce7c6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "1cef42afdbcf65ecd6e900ce90add06d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "d80de421171188350e568050c1d074c9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "ea13fa276111931606054376481505d5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "ab102b831065473d8b0f3abe65204d45"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "bc0d79b0f4c0c29f234dc50eff21698f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "a658057551876df8a1673e36a92aa48a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "f096d95492b8078fa3d42940a18820a6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "4bcaab62c90fbff68d12f07ea943e0cd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "b322db59372dfa6110ebdfb68b4bcca6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "340962ca6cf9f8751c8e895fb8abe353"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "2aa16e3c33bdb51989f05015c77df5db"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "0db85562bc1e1f3445eb83bc94699f40"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "a60067c3912ad822b092f0b3eac67527"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "cdc9aff83033d27e89f6c21458588801"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "1996fdcceebe38f7eff4bfde0cbd163a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "f6d0c734ce7291411830472388170262"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "9916136dec5a96a133adae94e29ada37"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "4f51e4db7e77fdc1f5c02de1c51ae2c5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "b952e50f65ac472a2658b79d9f4ba00a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "3f67f92be919c480101bbf2a68bf018c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "4f4cbe576b49fac1bc42d482f27cff74"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "e0c0f6941486e30637b5a235a6b4c528"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b659fc4fee0e17ee606a17832d2a3f3e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "659e5aff5711d6dfac66dabf2a48a958"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "b6e1c5a00ecfcb1bc02eb9b5de841ce1"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "8b94b25e981f04d69136cd8a2eebe28e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "c02a4d962c58fb6c91085fabed07d83b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "30a34dd7ad83c67a766022f5ed229c99"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "ef3b86c0d9ca65ea8bb4285da3c13580"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "660123d75061daeb9abdac441b9a8489"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "65720d93787e360f8af6675344b9506f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "344eac6a1a922ae413f5e21701206767"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "057a0f8c3c20fa044392c05bd7eafd7a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "3874d869a16d567c8bb79dd038e53ece"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "68ca974d3229da8522b62d9e3f8c44f8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "9e68e6bdfe21815cf0e60e44ade4dfc8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "01dad2a72bbd09f5df83da82c6c6ef12"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "68b38ac41393e1fe5484074d22c9eed0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "2147eed774edbc506bcadbdc2ef6023d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ec62fba5100cf78bd3ea7fd88718d5ae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "5f868ce29457955485913896aae91a9d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "10576c1b0f6edc111b61231daa2c396b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "b9fe8635bcc8e3e15fbbff23f2548cb4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "814bf3e540eeffde1469206c4e215140"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "cf36fdb8737fc143d767bf60a6a2880b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "4a150947d47555fc22a4e017d8f7d947"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "8e86172b03395427a410d75cbe7fe0fc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "7f7da40f96c9054b98237ffe7eea3e10"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "6fbc138452a1ffc80a061c7ec78d99e2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "254900868f9abf829ed1d617781c33ce"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "4cac70b84681a8f6cd87a3b47f9ed64a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "085aff13e213a4be33cc9e84a416f328"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "8dc048241d168787f83b21924bf8eb31"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "8cf20ec172f220adeba09a75fa4c5e81"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "e7b841561cd4d6bc3e72e08071ff7cd5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "e779ddbaeacc6c67205bb1aa7ad40a78"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "42dfd0de3e1ced5725a16d4c02ec4808"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "61d039cea15f72e7e279243807f0c70a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "37e487b62284d6330bc4a920ce942ff0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "b74f19401383e019592e1f335ef92d84"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "f5f6f0e122ca3f54650063f0ba3dea5d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "1bf50dc6a908cf280240e8097cffc5cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "1217a51c0e464fd1b91621739b712c9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "386203d40e11bf36e8d8951d5985824b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "d67d9e8bdf1cb630f019697d58216d5f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "a8648dcf28186b5f1ec12b87e2cdce9b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "7a14e09e096c37cf58074323e2ec985f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "3ae7f7463a48ec0263f09ce0db6c58c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "4650a9944fd7e04d21f5282fdfb35c66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "e59ccad016bb2ea8315a9764740559ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "bc888e2f3bd3de49c759c068f2606b31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "764dbe2664fc8a184a222092bb99d132"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "957bad6d1bb3afe11d4bfa7e4e7525c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "95898869a44c9748abe4d4baabac91d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "6133073fcdb64e3b586918519ed072ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "9e623972aceb714c4a128d92b201c3c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "c7326999eb847679b0291c98604659d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "3b9cfad54435190c9b728363379c802e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "e27fc83e092123c63cac68b2507026c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "ee83554bd5505ca5fc2059eb9908072e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "fe08fc0ca1608e1b0c1d0eea9c5f59d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "97b6754546b8a4716149cc16d8856969"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "adace5e08a6e7eb7b2e833043d4c4878"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "786f9cbcba2c59dde3575c44f7a178ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "663ce71c3b3713556e9b6bb12f18d2d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "4fb063b3ef54156d7e45ff58bb31934d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "c70ef41891b4d0fd549b3c48bb97ac64"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "8b13ca667c16dd94d5b6f412e3aff7f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "9d1537aa52fbce426d9657a18cf6f3d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "11f1ee4a7e93e7006ddcdb3df75e6d79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "a9e8d50476e65b92a24b577a204499a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "b980aab6f431b4be712225f4f18345c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "968a5447cbbe15e29c7f6bd89fdd391b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "d636e59004048671b254215f6ed0972c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "624bb963f9e2e8dcaa8cdbea121bc351"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "9e5b59cb7d642c9ee8f5e43af507ae04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "e30b12de8f1667f37931a918e8a10683"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "55963fd46606a1fe2e61a6b3a18aef7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "446e86fb77ecbd2f595631f1e107cb40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "2a41f2ee87a93ebe16722978386ba772"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "ca55337f805e8c9bd6426155662a623d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "e8c726e1f2811a6b27cda906dc143846"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "724cc15296c083648082ec81c9e52d57"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "c35b1f61fe8be5782bdb26b71a60df5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "11681ba2c79c73fc140c8db3205d103d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "4530db6761807b7f5c7c6ff28e4e6a6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "70dc2dadd9d381ee1526a8ca7009acea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "3029b283a49ffe6671172a7d9b600d06"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "adbc54d3ee2f7aed8a8a9f1586e3914c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "8b6b7768555c777b7e914e3b01594a7f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "c80df290b6bc69ceca709dae760b7dd8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "a9e60d237d724c394e271146005e37be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "20f3dec8054dbd96dabf8f3b44a77d02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "aa0404612f9387909508fe9564c7cf9c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "f4465d4bb3c31e65f9a8401c959fba79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "99c6abe7a294b04a92474d82636ea319"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "496999b265341a0f9eabf77d146edb33"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "df9a554d0cc5158b9160dc04fc4267f1"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "b50920e98b85729dbad1353f60f5ca7a"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "6ec01b35106f77ac25291852e42c819d"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "fd412345d3510fd6505b619c9c0e5607"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "5f6c61d97cbdd88a2a8d2c6bc24af948"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "3d81b2ad82f1e13523bfbb6d7d1cc3e0"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "7f1fb0b74a2d3468406baebba5e705cf"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "f5d009d96e3df026d9611dfc0b86d3b2"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "215df5d2a31e840e503aeb6f88ebc715"
  },
  {
    "url": "categories/index.html",
    "revision": "3dd7f50a40a5a578b734827b1ef05c33"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "821180c07a8f9843604d8d07bc333429"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "914daada207c65507d63d1476684f720"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "e5b24c89e00ae209555663afd49263af"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "e76100ec24bcc724ec0bac4d1a107da1"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "df37282d3b4969f99e4dec2fe732f6d5"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "de0e7fe3bb6c9f81db76e8c6c8b6b030"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "e1a2d84da3236381ca1d7e2a371870f5"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "377d2f53eb3ba9c8a24ec307d350efbe"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "3bd7d77f4f379d718980500557b65f1d"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "67216c8d1f2dcb4094dd98a229bf9863"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "b821e5a147e4d501c699961c4400a518"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "723983bfd455cbf23a5c0ac230844812"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "d4221c0dfcc3c8ee5e53334a440a3887"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "64b5f4dfafa05e5fbdeb039bc9197d20"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "3325d3edd543edeb99cc94f8dba0f3ac"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "1fef67dcf6630a7c8b52866f971f65d6"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "ad9c58cb8db393962e92b1a75eb5fb05"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "96a0a884715004bd6a99492acf764b44"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "1c785ee982dbe256fd4cc560a96a74f1"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "c7be0c5823bd6c3d0a777e6338d6d63d"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "01ce25fd15ecb1e2108958a487d5ef88"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "dfbd2b10f1dffa7852cad20112d6fc59"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "bfc911b7f024928291e1277688d0c056"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "fa4082c126f90d38f9c6c9a92e898170"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "a6fec37ea5e1c20f110663f931fd0ae9"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "2b117661414ce4f69f954f1c9fdc638f"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "9561f7c477833e18e530aec4c57b5b94"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "477fcf128d28674ea8c6cf50f81a191a"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "8e2588a22c268e65a733ff5944911f17"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "6f0da04eec50d89c020cf764d363cbad"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "8e92883d5bff4347dc69bfc89a400773"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "a1b337bbe907fc1ec96a70fa695bd128"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "07132ecc369ae48a16c3f9a1cfce82a1"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "94812237d75772e1716ab3095b0173da"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "b99b7a83560cca98caf54557ffc2fd1f"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "e3a284e5ef2b011d2634277ce195040e"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "e9781d7cd26a819937121568de9d78da"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "13b56e5d7091699da1eaf7f55930e83c"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "e4d6021c40e0687b69cdb0052146ec19"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "6044aba79fac03408c244b3879a7aa81"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "8ef42cb0efc895ffb9ee79d7b9a6f811"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "163891951f175a6f8abca86abae102e7"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "c0ce7c54474d410cc0c94005bbf46446"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "40ad87394a55b8327137ed57f9b059b5"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "5a8f7cc583bbf9a567730b697aee66b3"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "62e083faaabdbe8acfea68cea7a4d2a0"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "94f45544b7d25b55fc449981c1ec0a9e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "509f2a95d59c82fb445dc8d4533485f8"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "0fb67cf7058e799abddecbc548144563"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "28bccb15d3288c2397c28a923adbd5b2"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "3548da2dcee920b249b9772dc018fce4"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "0a410a89089e71d9a875d0a5675696da"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "838caacf07918b487b7968dc036a3706"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "a36ca10e61150d2707a3304b377fd24b"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "8598524d2c48160de9b8743ce101c347"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "737c6ff45eb8b5fd4ea97f432b403276"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "b26178d28c098b6a5832cfc5c341f294"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "cb7d6c0c7507dca75a9b237fc181e6ca"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "7ec48c0c1b11d8323c13997477aa6326"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "e48c2516b61bb54efebe0812e9448cad"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "17ce3bf8b284f1ff89cc4ccd0b7a8f2b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "753fdc259d6fbcc9a8f02809866b840e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "b038cc16eb96925e9996146d83a21277"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "33a9c06ef453a7291214584097b44624"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "d2ccec4325e93f41e4e1d12d7ab2b9ab"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "c4f8a4a01c956d55c88de03b9e322beb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "9228f4f767593ecf7f89270ac71f285a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "4f3e93a30ecc942bbd2a7139649092f3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "150a94b51f7efa0264f47b89ed117967"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "ec24680ec586e052ce5ff5b8b0c95b84"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "b5b280021d612a2492cd81c4057384ca"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "40d94bae831349e97a4b04338871c3c5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "bf49fdc2934cebe1892f352032534373"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "5c6fe850eedcf325390b7595d136a57a"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "926a62286db9093464ba2cc7a58d6ddd"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "a8daf67411a5117494aaed0171813772"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "ae81018e1bdef5bfd1652ff005a5494b"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "57275ab1da466502ab3691033271d2b1"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "5e638cfbb9bcaee7257ca74cef1ec53c"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "ae4be47b2d76773b8d5f97a6fd49e654"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "c9a0d67344ef736989baed9fc2739233"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "17c34a2da6c70a931541cc02dc94a5e8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "bedc4733526fe8d5f4abf57c1bb6b4c7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "9c75668e05543826ccdfa63db14fe8b5"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "b6cdd4aad9830b335a1b8d0696b69b65"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "bdc35434fb75c1b768ca652bb58e2bff"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "0d9d17e8e537c05f5457656ffc215552"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "9979fe2ed539149e4298820048cd1ed1"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "5a5b2d8e6d6f08da5312fb4bf9826045"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "bc84fffe1759a870d0f2725fa61a30a2"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "ec4b198cf6690c40c756b7d0fa5fb634"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "d163901bba694f1fbcce818e9157e1fe"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "0a6e0b1bfbb7e9fb3d2b2ad5dadd0862"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "e7e1b454c6d90d806107a5b25643d65a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "03b41054da94d6eab7d4505e36904908"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "14cda4305f94beae0bae41f5e27771a4"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "47cb71e48d4c6d0c2272eb81157dbecd"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "b4a924c4723825661fd391af9d5fffa9"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "c934c901b9c3310e8a8369cb53e2cbce"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "af2a35d952658c2c1c8e86837e1810ab"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "9447241cf9472a3a8ba29e45b1c1e827"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "087cf7a3976c8a3e93f09f06c77199f1"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "5b09f84d4858b6967139f151f7c4e5cf"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "4a468ebcda815f9224d874732428732c"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "4b20e4d57edcaa9113c07b597b571005"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "a0388e0383b9220e3c1d5dfc9dc4e194"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "d437b84be265a35c554c7de54d2fcdb8"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "b369466db27d5295b3b8e6722d043ff4"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "aeaf741b8dc0b1409fbb4cf74abff43b"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "78b4484750475988eb8a5d2a37466664"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "cbf6f6fc15e62b39611225d1fc78ebfb"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "3bc080263f3fca8971a4b1cd5abd745a"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "9a0a352869852f8d796d4d8347f7e1eb"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "a3bf0ba7036bff02c564861b745876e0"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "a26609ad311404913dfb1120228ab234"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "54b03f6061e46e4d19d2675d7fc42e7f"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "3e09b504ed81fab5362851f9390f4171"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "0d447cad754f7918ec411129939f6e97"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "02e029e184be85d3669a68145cf57efa"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "0d0d240e0cbda0e11d745a674616b38b"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "a3fe5f38233f647da676724c522fe4d4"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "ac82b985619637469d68e248850f937e"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "b6cfbc01906cfe89f5064fb8204a593c"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "2c9f807a094cdedcd18cf9d2c424d30a"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "47ea919ebc135de8e9b9d3668a0026a9"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "3ee091f352968592c175c270a1475921"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "5c9fa75e5cd3edf1fcf30bb3af42af7f"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "7fb111b6c65fe2dc49951ec5f6d63398"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "53b3846ed581b069c144d25a66bf31e6"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "e58fd298d360784027f36dc459274fa7"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "e80fe5c96a699f1f44e5da41bb5e8799"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "2ec2a8623630a96ebedb654fb0a45f3a"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "b3395ea02c34f4550b1388df37103a67"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "812b6a99e75291ca755b0dd932d78918"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "a2b2cffebdb7739c2fd34a459ec2196b"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "f7fa31b21fbfb85dea85fdd4a99ba07a"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "698fa2b44c09a7501de769f80955b50a"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b5ffe2296b0aa82fb2b55e7b7a77255a"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b69be547fe14f1a5a0696bfe1e882d62"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "d8675bec3e9c6aae3459d8ffdd640b84"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "dccc914a747a61e310afff3889dc399f"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "245a66018ee02a1971b463d3e64a00b4"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "ba641867623815b3632fef14f8e202ef"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "04f3087472ceed9d7091570294334445"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "fca56d61bf41b2c29fc130add6c1a5d8"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "e5b5eb710278edde2fd43c26311cfb58"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "99e390d2b51c2f905785a87740ebe208"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "6c89c8ea7242b8440edf8e38fcc5e9c8"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "b85b62d24c8d2864c7d379a2237cd491"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "b87c7589e6eafa0adf9f3f9a1f1ffdec"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "17e4fb58aded431dd650eb42bcecdf7b"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "e7acd9a4a6eeec73ab10c511e40c426a"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "aee1095fd52aac8c0b4f42b328558183"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "7e780c50824b561559368141e1addab5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "f096f9fc5947232e46d2d546141b0ad2"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "f4fd04201012acdcae58f1a83ded6731"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "eb7f5ad96b9be8698a7a9e8bdd63f164"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "a2082c64ce11e30d50cc58ac18ec20d5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "e3ba86650f4f74c7fedd22bb3a00d610"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c89f91a86170a76821a02b1e458d5fd1"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "61c226caa6a69812fc9f5eae771fe2a4"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "2cd99550c55753a8023f8bf4dc0b2444"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "b002ed46308cbee261f94c11e5c84701"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "463976c0aaeeb94610141f82e8ac2e79"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "46bb3d7d4d5f6808b845cf6af481403e"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "828985167e76b1d196aad833106f2c13"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "45579c2293f9f62a18987a422f8203d7"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "773440d36f163e0f4dedfced160ba77d"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "7a471475377f4ee340d7ca841cb06fc7"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "66cd4c504fa7163b0b1405354c889c39"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "1cc29572e33e0d7c7b58ae22f3a7b62f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "af30d9f45bbecc7d8ab469b110761290"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "30d75c07c756fbd15f8894393efb00dc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "db951b1bc1a3136c98ecf5cf8b7579b9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "ef88898e4d56c846d171cef409df68a4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "169e1a48fa3bc5142dcb5ad758e8b918"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "e3877b4300188e673a43e8335911cc18"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "b7a4d0b4ab7c434375c4b1ce0e68b4b6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "019ec2dfcd77aafe4aeb7bc676633c98"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "65d377c040ee02086f1086c02ed267b3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "510dde33822e3a648142922b9e5eb2c2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "2a7fecbd3094f15baff307a152b4a3d3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "c0139cbf0526b6dc7edcd1ba6cf59153"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "39e778c77a020658608698594efdc351"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "a2fc2fdb11c4d695d881446110bc7b1e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "476e245f41ba2bf9f01e292efb2d51dc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "b57dc990bafa82f43cfaf1ed0d468f06"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "b3fc013320b786fc054454c4bfc6b080"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "6cc13f641b2b71eff3681f43f12eecfe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "a69e8c4407f0480b2cdc693083e4944f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "886bb648ef77632226bc7996fcde21b0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "4c9e8c4e9ec429bb16f70e00bdf79817"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "7bf140ebec07c56d6ca62fa7a8575415"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "3cc7094135ee78e632356cef07c132b7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "4bc55f2dfbed4c4a7c218d03f2dfd67a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9e23de5e7d1f3eda113e3e4ea9313561"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "be71deb5fc9f0278574e8566af1bf1af"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "de5a5bb555e09764b20b46e98af5b091"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "f3e48d6755ef90bfc50e622d6343ca2b"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "715791bc477ae46655c2314cd4446c9c"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "0e0c22febb774720d669ef13f8acb481"
  },
  {
    "url": "categories/os/index.html",
    "revision": "392b9fcceb85239239a35984c7242367"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "309f21ae89e6ebdeb4ad77bc44b2df57"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "272150f94de071cc974bd0fa0f3cbdef"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "80d31d9ae25949df8f62ca5526b11725"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "8a6c69c58e0c11caa89187c7a29ea84c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "3d5e085c07ee195426efad7c2cec98a1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "4b5bf3e19d0cc72109721fa905cfeb06"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "9970f4bd9561f342baa6cdecb8a99fb4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "6a5e2a97d9c07cb796a94bc0d5a56018"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "530d6dd46d1e10a349731dd04feb6416"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "ce8d2b0ecd7a75d7d885ee0b70bc6425"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "098ff8ee8995d7c4068737ac51ccd1a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "8942b6f591ada4d74624ee741d045220"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "eb4dc0706495a7a17294f7ee00f01538"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "bbbf040291e49213e3517282f2714ee3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "fb8408b915c3840557dc24b3aeba427d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "ff619bbb81a1276d04d6c70ed63a2124"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "28b3b70e78fd0b1805110959164327fc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "4574f4ec150fff53bbe6a0c5f8611c7c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "53832246ff863e91cace6de4dc561c4d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "49194fb6ec3fa86110f115ff81980c57"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "e251d54d87f9af14d4e4300d31ac7100"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "d1de612b8dc1047b36a7752ce4393018"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "f1b444877971e2a5e5d27452ff43e6a7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "2c213618b3b17ecb77467047a3387b23"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "7fee2dda858f3a7639cff90f3006dd2a"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "360874e697e1c8de5375c10bc650ffde"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "608f5386ebe454659ee1190d468b3b03"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "395de08fee2af27f115862bf20c81d2d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "2ba5cbf2ece0b372e47c4cff31ac7981"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "c381f75d5be7947310cf261efb39a9de"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "1581155b5829c2b62d2a6914f1a28ee8"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "a0e7ac69cc39e7a04b78b6a01be47d39"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "bb5dde7d21ec4a2ecce5742dbcd1602d"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "86b03fc6053b89809aa74f8293a7cfb2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "cebc270f91d6ac56a6c7d062c7dcaf3f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "ec7d56668cbd938929cf33bf78bf3608"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "6e01db729824e870d028c415299e7526"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "0812fcd188d9213ab833c6d3ac0cd7c7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "a2388b0486ed43d99532625625a0ced6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "0b8470f7ee81906b4e9caa4e6c5cd403"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "c5ebb0113851dd180301600d017a32e9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "a10a8c5513f0f738d1c374c43bcaf9cd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "b10a3a5bb46b978cd4da66013e4c6e97"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "1b7959f481b9ea02c894a5d1aaab4507"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "cfb53862d01b0142901a93e4be5ff071"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "576bd22ea1c5d7f8f6ff373905203cd6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "2a617a58fe8962e9231e6cab65bf692e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "ab2f8e7f02296bf05910ccd6c1f8e6af"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "400e42f61fd42fc43dcb7c1141693675"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "f99cdb577879d87229d3c1efdc927257"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "1593a53e3f513c58db9d04c784b25e20"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "d3da4f57627542400760f9fa1e23b424"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "4b42b512b7b0345af024fcd88f3d5974"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "e1807116da72c46f1c96fd8b984f4395"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "4409a4972d98a93a368f1090e270555f"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "1a50c585d68d30b0082795f297b92a87"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "3b9a2e471e0e655a8b7d5fe645d0b2ce"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "8894cc9eae8859f13ccce2b5e39a7cd1"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2f179546116ccf2aba479aca40896a46"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "0307a09f7e65edb0b013bf4ef85cbbb4"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "4572104f989f3936514846c231f67c85"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "1b53e644d46338b094b669aad4a64494"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "d68203e8eca1052f35ce60a491d864f4"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "b0eedddeb1205392ce6fc235c9aca38a"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "9697da535b0f58af6b853e4677471c42"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "54be66655aa267177adacaa96f46bc2e"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "14a122dacb29ca50a6af9eb90e887aec"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "f89eba166e2a6bd253fc7f31db5461d8"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "eb95e7653f0a2ca4de3d343acb267957"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "1e6d068d9124a8e4007779c9d071d31b"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "d6acf9fc17a7b303a08a27b7d48155fc"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "2cae640cda26bdd7bb33acb5b6f50f7f"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "970339ef542fed3554927ac373817000"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "94c546fc00d2ca67c6f002265270d7c9"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "9b447e1f85f1d34a892e51c3d90aec0d"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "56d33785541f13456bbc939279ae00d1"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "d37214192c9a297916efb5b84124f6c0"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "04d80ffe5ff089e3a2781e66f23b70e4"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "db27943e229621aae651765fcc316eb0"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "433173146a26a389f6b20342de182236"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "67ef2ebd1333d02a225c06fddac678b7"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "97be3d06a8a9a44245fc65e149c5e247"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "d096ef7109e6d7993a22d5b8c891cd00"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "c93beb49781856c20399ed5dd2e1eb78"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "d81d6ce8f2cefa0986e73bf10ca9fbec"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "e501248d4ba07b78282bc1a26bebb516"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "3b62afbea0e520de11218ff40aff4f89"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "cce05fe051b5e8a71f465cc4ac2a74e4"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "6419f34a8d84c89e325cd08a0fe56bb3"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "88e9097309aad1dbd5f953eed8d0221a"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "fb0e1984df9f09a942299b2bcd530ddb"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "f28282cf3df9be9da1ce9422e9b3e5e5"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "ccb4846eca36b34a63cc1b058b9df9a9"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "8ee2f72ffe919f55cbee5bb7b1db1648"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "14c0091f4ac122fd4f8767cf0ba8fa3d"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "7839d4be4c050561a8c8b0c3a72ebace"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "4e580120761e00229d779ed201907a2b"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "ad31c0e2b338320ef9956f9ccd876bd1"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "22b7c806227f6a19ddca084e3e341292"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "8ad233da71c92ac84448002b58a04f80"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "30bf706040a1f6c77a35f40b6295e0bf"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "cd5760559bb1fd572b969d9cf6493f8e"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "8a1423ae73a88938159c79f64a786a76"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "76545f6e5a581b1dc86e14172da508cc"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "b565735abe81e8e7cbf1a149bf027244"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "6e4c807abd58f8f99e385963d461da62"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "2f419a64708347cc7ccd2713a5814986"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "53faf19c2d45dc038d5a54d7c2c53701"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "ca2ee803e02b766d38429b188ec38e46"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "1dc351fbf5d72a2ee350ed7a5b485fdc"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "c34944594852fa71a49a2c84090c9645"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "91b571dc78b2ddf840b6f8fe5eac6cf7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "4f19a77760f57a96fe42701800731b1a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "314bf804abe1c15ee535253a0b0845d4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "6ec4326429bb4071b30ed902f1cce6f5"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "1f5d76697cd675d3d993105d71682b84"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "8397d93837c65124138f64224ee1583d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "6d079c1537fababa21492ddf1b0ef72a"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "1ceecedb61b360e9cc26f900cce9f618"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "c78b30684235b03f1532504f924c0233"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "5a0022180fc575609e3e20ef4a272a51"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "af17d035c51087f9050c9995965e8734"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "1e08e6b811763804f26c1f1d7e45b01e"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "c67e90f165f3b58350a67e9b7e4b4705"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "061570cbb63ed86682f102a139315ac8"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "07e4c2ad9f98e8939e81383c7068e3e0"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "9df38fdab3038e8adf3636747d8af968"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "72b9b432c7e30330644acd14a077be57"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "7ad2f0cb0b7f8afd661ce53c3101ea3e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "04639a263f0d64894403c4721589ea82"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "ec049d37beb1e6adc1aba67d066bdc38"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "58a3b37a93b5aa55b6cabe52d53ec17e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "f2cab5f44420f6769813c976361f428c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "9565de0107a59446ef490865f0a2a242"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "b394b3f3124e4d6457b8b3cf7fb0697e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "30c2f2ab853221c9d3b5c4147eb94972"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "7ed28b902dbe1631297f3f85b91094a9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "631d1e262cb48a2a29bc62d5b509cc49"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "dfe6f9aa219cb8414ac56f74951050cd"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "e2fa56cf9e34b44ff9dd3b3cf9ad5d5f"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "9b9962882be7be2157ce519248e264a4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "90155ed4553a30c6bdf4076fcd62864a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "c52f41f9496838c06add6bd5cbd8cb5e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "42b95a821a467c0c452906e51afba59e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "51e5c701f4904109301f85c01d1ea856"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "66ba2095db42055eaf37c5d953cdd632"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "2ca1c2aa6d0bac8d92c8c3c4ed413f2b"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "bce3c04db1a5fccdb74f7143b561d9c7"
  },
  {
    "url": "categories/php/index.html",
    "revision": "71e73a5b5236d891efd779840364f8bb"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "a9c81a8f09fc976e6fcc91dcb341e2dc"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "e1b2db82089f9b330c28bebf9b249560"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "3d21a0873be4b3574b87fa69f0c79292"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "c03020edd18f14f402ebcc747dd40e65"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "4ebfa2e46074592b0a722db28b772323"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "565addf35617eb3d728ea28f32c10580"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "c21fdb8dfd864caccb4e6b10c22905b6"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "ab829428f71dff7a795dc3e7ce58c936"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "818f64b40ee18e476a639ca092e65487"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "acf8cf087a2be6718e02d4b2e0f35fa1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "eceee484ae2c1fc9d0cbead2a60a2b26"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "5f5b39bc63104cfb20c7d1590c10dbf9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "4ca91595e85639e7f910138718c2ca13"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "18dd367d66ab9332f03d06c59bbf369b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "736f35e33bb3493809f444cb5f26c383"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "ac0a020bbef9df6d180183a85aa2c673"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "c39aba130cbee73be0f5e7f2039a65ef"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "4f00bccda6d723915243f08263577417"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "0ca95e8d0732c468932a5e02f9036ea4"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "313eab7705c9c5162b932ed37be690f2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "bbca594766d9169cbd6c32b96373d63c"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "9edda53ebc4f6bbfb813c6893e402ac2"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "27183cb316e3650c03aacd0233521d3b"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "c267a14d52765474255bcad3c5c5280e"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "a27f471cbaacf80807c0e353c3ac7ff5"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "034faef765ce9782a00274e8a948a090"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "2603b49f4ae7435430b9a837e5ce6676"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "670377855e1f32dda6ee2290223224ed"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "690936a4286c2736651b9f26647edead"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "181f135b0b9b1681ce6ee9657b09e109"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "9d17be533e7afbcb5b85e43d0250434b"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "535d274616a07f0ab5f4b0446294d993"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "231605ab071fa727494afc6437a530de"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "b22b1262f92fc715b6dc2d05556705f5"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "e8bdcc7204f857f9dc964ee01762fa95"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "2243831cb840a4e2d79ca4d9bdc243de"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "8ef08e915f86ab51778d420e939d88fd"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "affd073d7f1b0c2a0ff55c5c002918c6"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "5665444e79fbfce76df9f34201ae7459"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "854163391ca2e90e9629beead96a8794"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "da93254edc27839dee15877597969e95"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "f8151b6b954fc57cc8e07e9f1299ba1c"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "4e7b541b0d6f8c9f96c4e1dadf47cb07"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "69c9c51a8940a3c70bdf181c896fc27a"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "d3488ab34c8a2592e0c352d872f99aa9"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "ab891ba0344862ee886a33e57e50f53d"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "ff7475bf0c77da4ce10b322164a2c577"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "f8cd64fa3dd4f315d73ccbf3967836c6"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "f7f4b08a46a2e0c0644af8530d5d9cd8"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "f2d75f5bb189e70ffd51d70fb2d71b2d"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "374c78aba451870c00ed2d02e78777c8"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "bc3a12eb5a8748cce3a5abc5f539fad5"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "731c3ba4f420109bf41919e8f530e5b8"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "92533c7e4889702acf469572268f54f8"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "73a8fb3fc28fa580cffeb8f4c3ad7d9d"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "8d42aa1e35757ce81316bdb21011c940"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "3ac209515ab92810b5dfef30e74cb9ce"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "dd9d245fd01ecedfa5481129571c9cc9"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "9f911864f38a3b3c56213548a11da7a3"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9e7022126de4c16fa42163833f96a778"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "22827e108f0dd330e195d5b2d7532c59"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "f168cb576ba04490694795ee01c0cf56"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "db39e342b07d188d94f6ca1ad2e6330c"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "c0f7265f63f4dfc7553ab2b80503b8e5"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "4158ef19b0530c608fd76cf409b21b91"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "2ecf7d2e66f3457f7fe5c9bdf60c3ed7"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "ef8cd757dbb15fdc1f4ae0e10740aedd"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "7d1840a7b6b706db3ac4b67dfaadb86b"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "a8366cd9ac56f8662e3db2a06014ec30"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "4b9371130efb223f3fab77b166a39bec"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "c0d4bdd009c659fb6822dafc37cfaa10"
  },
  {
    "url": "categories/system/index.html",
    "revision": "a07274fd728afc6bc23d74b5331217ff"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "2797f0f83f4ac513042a45a8559c18ab"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "35d1be1c4d2f0ab82063b3a6fa7899e0"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "a75bb867108138b1ea3be78859053a4a"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "eb7034182019d4026e98588ca60e8167"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "14955f1ba28e83d0c224041d4786483e"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "7b6d9dfd2b90dee8a1479a56128a901d"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "7b93b35800b8bf5ae025a4a7824e2402"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "8da7e0c9b5529822b89ab3df3230191d"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "748bbf2e6d8fa50cd67d3ec8a8e504a9"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "d0d789363f2b770299dee5369c94bf7a"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "cb0bc2023de0246bf14724ef13b47f73"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "53e52a70b4d463032301a2963108ab4e"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "70abf0c99d272be16cef1c1560470a87"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "ea4123f7c13e1c1890c3a9da7475dedb"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "a8c25631c61c57f97268bb81b56a3935"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "494021af73035a6884b2a85c40b806ee"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "3559dd4e1730a2f253e3bed189985e08"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "ec2227c57eef37fd0ddadecfc9577302"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "19a379cffd45ef97b4874662400f382c"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "c209591512f7d1a3de0e434ed6ce6525"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "68a65296a0f42cd5f90c4da4d8dcb0f3"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "68ff31571852385897cdf5400a283ce9"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "c3767720017218bee72f50ef39b0d01b"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "3c1dd7a2995ebc8fcd2a53fbfd10cf35"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "c37ad5f12d06d1045c9b0c91c20b144e"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "79c7e3893165fc4b78de0f9909d49118"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "c5444b87013f42bd2f74aa86ce6cdc7c"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "7680bedac33d5b7d246e4bf8ac0953fa"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "0677d04f9f24f440df0df0de6f48be59"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "a692eb79bff8fa60416b4fcc35d6e7ca"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "963ddb950fbf2f2522fd3257d8bb56ff"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "34933bac4ff36285cb78e4c4d1acaa71"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "6ead2046116133423bae54036c06530a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "6761d7878aec1fab03dd76c10c28b5ce"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "5988d60e5b8390fb08e74daa6d490ea6"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "5b5b6926bdc6cd27dc5d075ba3c205ba"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "b0ef551e0d13d0df8ed9135bfb77977a"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "ac751ba11b38f2b0c790b861b10b7d8d"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "b8ad6ee94da35b36c257bf2b21002a22"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "79a48fef52cefd5ed39f2d8c2c36ebc6"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "4d933670a7c081b061bda111aad07dd7"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "6700e3a04fcd12261bd076d9b117f43e"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "607e7e4b9b7e52a540b25ec22afd275e"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "281a53b8757ac10971bcfc5c0c8e72e9"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "dfbbed87d2ca722b594c305fd1c4b039"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "a8252ed7fb14f52ac30e96564851b57c"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "6cd5d305f9331438daa472ad1ae189e2"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "91c5251b5cc3ef392f958b3a1d83164e"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "6cd58dfa64c1d52400b8c8108cdde131"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "7c1c56bee097252b61930cdf884c0a75"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "fc97f716e03419f2febe9fea9700a97c"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "7841342aa946e7101c471724cfa8e52a"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "4eab4e9e64cd810d438dab82ad607033"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "73bea4f19f89e084b3d4a3415d988cea"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "e85d39266397aa2c31e3ba844d5fdbdd"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "4b712666fd7e7554c619b8848ce2c7a0"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "a9e4be4b6e0889d13ab4c5cb6e3dd1e9"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "c19135c7c5c5fb71205ac28758c87bdd"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "cd163d4035e32cac998cd6653e8092f5"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "84c1d28b7e7ae7f0214766d7f0464078"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "c0a9240bf11a2a9de2f2bcfa509b5e4f"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "ef6e416e9f5a185ee32292f03e81ce3f"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "de284737a23890c68516d2b30f391d64"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "92326b2b0fc1285c6cd0b8c8454f17e1"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "75e5ec853c5e29af5fab9dfc1e96fe68"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "1fdbf7dc8894c33b21c12af59877400d"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8e89b67eb726bad04387da4b6dabe4c3"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "08f7aee6b6e6500b85e14b569f639c58"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "b92667c20424753f3e4bdfd234d9c56d"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "4f7913e40f851267c540b023378ae8a8"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "56e7f6065695718f7450d13236a188f9"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "8dffd3e3c803b45e315050aa20b8e896"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "29466c2f9fbc744d6401ec3b6ca9f353"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "fb01a5a098348b00736a6bb7948b42af"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "a00670c9196aa1d0dbd6677dda7c6f89"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "bef70bf754939897c58ae378bb93dbe0"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "52cb01e78dcf3b17e9bdf578d4c5ffea"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "56e1333eea9a10728b8a756d22dcccea"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "e01fba32affa1572f8626bbb4d55701b"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "ca56be7322dbd71d4c0bb9d546090c7c"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "804633b82c80636a2b09b79cbe55655b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "c208808d3abb5aeeb179da159f80189c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "9be1905d542339094c55a87829fbab56"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "834a887fa71e58c6584e1cc0fcc080db"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "69f8997abcbc5a8b359dec8015d2344f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "714a5421cf12a51d53a860d1fbcbcbb4"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "d453b86a030906dd8a74791fb46d2da0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "a7bbd21b806cba92e316145826ac2751"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "e3668402f5f7a5a091e256c4fe10e7e0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "4972a0afb6d8a396ee85b473fc534547"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "0d9b1959ad23d697e394e6604ba3b3d5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "6598943caa7078df227f7628f41dc93d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "f3839cfc14d708113b66af888fa5fe72"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Settings_Sync.html",
    "revision": "560a4d1ee6c8bf5b017f7087c3ca588e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "e07d455b36a4289f77fe233b9a40944d"
  },
  {
    "url": "favorite/docs/Tools/Webstrom/index.html",
    "revision": "bec385fa6733d999d0e3b4770b295957"
  },
  {
    "url": "favorite/docs/Tools/Webstrom/Shortcuts.html",
    "revision": "c389afbb7644a15ba0fa26fdf2caf047"
  },
  {
    "url": "favorite/docs/Tools/Webstrom/Usage.html",
    "revision": "30b99a1a6e4a28f460d2c91abd596ec0"
  },
  {
    "url": "favorite/index.html",
    "revision": "f44d1c199a99200a2719ad2c1d7bbbda"
  },
  {
    "url": "index.html",
    "revision": "523fa2979971944d4ad7932fe47e45c9"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "1c60c74c25f2bf9f6a3f992ca36dab88"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "ade222b74da5b5428f29d8f844ea9123"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "50b86e258be1a81f0caaab335976af43"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "798feb18e98a77a770d39761bf60f1a5"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "0c213a4e523eab030062cd331b3f50db"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "d277b206f221ef58879a7eb6ac24e907"
  },
  {
    "url": "note/index.html",
    "revision": "942b158f8d58227dcbba164e29a2e0cd"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "65fb2db6354bb666004953f2c592949a"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "412b22fc624518f90872a1e602c68e83"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "1e44913f36037127c5003fe33fbde4c5"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "108b2211374c2481971117124f0630c4"
  },
  {
    "url": "share/index.html",
    "revision": "8692b27790a16dd28e6b1a364fb2385c"
  },
  {
    "url": "single/about_me.html",
    "revision": "6449cc3cc8febe644f844d689a2fad33"
  },
  {
    "url": "single/all_article.html",
    "revision": "bc5336e499bb17139fe3272873c78d87"
  },
  {
    "url": "single/welcome.html",
    "revision": "2007158bb1b0635970bdd8bcb77e840e"
  },
  {
    "url": "test/index.html",
    "revision": "090d35a1cf32c2c319dfa7594d952157"
  },
  {
    "url": "test/test.html",
    "revision": "0e32cdf3603497ebb8ac679fa8884799"
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
