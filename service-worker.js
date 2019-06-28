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
    "revision": "15fad33d8e5812d883b3266c76cc5c7e"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "2510f6d98650be93fd619d9d8c4b3f8f"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a67db970ae22c39191aa774fe884cf90"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "f0ab4d7bddc32c2ebd6b2383c3b378b2"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "76a4cf8955dce05e74c69a3fcf9cedc8"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "6a749c8d1d7d567ce4b7a3e69e92ecda"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4910b70187fafeeb1b121437487eff41"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "e6485a29127e89797dfd9b093c11e034"
  },
  {
    "url": "articles/index.html",
    "revision": "409630e2e5564f0518666de4d395d254"
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
    "revision": "140754b23c512285e9c1b89f713c4104"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "152363c64a983786f3d41ae640ab0a0e"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1a1a316684fe84bc4ce8479c05025784"
  },
  {
    "url": "books/index.html",
    "revision": "6900fb914432fd71021d9698281a487f"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "356246c68f4456079c40cd7fb645cb86"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "206b0ef4fb0a58841f44585e4b621604"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "48362f867735643d98917e18982a3184"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "87245ac9f13635488b7b8c49c5ee0ba3"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "3ea54405bb0820fa24ede8f692d21ced"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "f6de59c346c8508f2170e9c585dc2bbb"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "ae9c579e80b9fae244bc468945edb29c"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "beae1da40a4be9d02859d5fa6793b777"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "5418bdc8ea762c05a4956e71e33c506a"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "684dd72bba0dac7cf17334729a4dcaf7"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "15708e00442f75781e5ff6db0eade92c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "ba4825894005decd57dab362084fb39b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "3c1ead49e821d1365a9fa31d35e619be"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "fb0b70b26973e25fac0f4bb42a6935ce"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "c53880d15eefb02356fc4173eb24305d"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "65c99179ce09ef4cdb920f2c011aa5cc"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "cd480d10754510ea59b0c96da2a4cc11"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "c8185635caeac121a3447b0482907411"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "0a4d38b18829c2a2767fe2c57c0826e7"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "27db466a20247828f7814c91f700d4ad"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "34763fa90f1536ce3e440c18f09034b5"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "8aa180fc45e94ebd39ae52fb91bc98d6"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2e093bf4c2ed9487365779fa883919c4"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "a48dd8188aab873861eeaff3a0223a01"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "323351931d6c4e8251f13cae6658f17d"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "238e3b737b32a1dd0489d7daf18f31b9"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "13f638206aea2cbd3c164b878ad182af"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "118c4aac9b65203e653ec0e995d16a31"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "7d57ae1fdd2f1eed9a34a592a0178c2d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "cd9454f70bc9b87d89ef26d9726aed17"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "386dc13316a2b5c9215456a674be23fc"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "98596ae282982f7538f1f3dfe7412551"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "39e46996e58e1bdca5f148c652f16121"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "c98b3e1a1f2b6cf00564f0f076ba400c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "1f8b04b5d71c843a09e193936feb0e86"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "1089c907520c138f73b0cbb661d8ac1d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "0985609fb4987404798e9720b37e788f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "cc5da6edefa40724a89df21195fe4fd8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "460d1e3daf1b7c777d2dc4a28c6321b4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "bd202b40eaef258cb6003cf4787598de"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "391c7ee72553001e3d95f9759f7b19ce"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "aa00b9b972e46b1d4e0c4dffbdbb6de3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "0801dcfb1fdd88abbb04a907acd26920"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "b2692fa9cd2aca639d643c27e3b01ad0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "76ccd03df8b86439a436f35d9528c80c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "95b5c6608bf7c114fe08f75224a77caf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "2f5e70e68a7cfab2a7010c10b8d38353"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "5c354dc75cadf6c6474f7961037d51ce"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "6ba9cc4996e2a2f5cfcab0eb0cb97f20"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "cf1d2a0749eceb2ccde539255c9fddd8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "968a4c3f460104ffdd64d19a9664e8f0"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "5dc0b781ea70923c95aba9a889a5ec0c"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "535741e6974a7cb46c4d3cb2f91fd423"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "83f1eaab537b07f3e83bc2c743556339"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "a184ca3917bd74acd34846062f090b63"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "d1f6e0917cd6bd211e87f7d3baa87a5b"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "f076313336f8d07525f5d4fcf2e94fcb"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "d1d185afc90a5117984a9ecd5df456c7"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "f3a387da883c352cf49743c0a6b6dcab"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "fbb44e9b15e90835db0de52994d4c244"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "180f3e8f779b0b43bb83d9f1dce97caf"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "d5d99e83bf90edd58b10f61bb39b55dd"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "62da85f4c95d84a58ee00d0682931c99"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "3eb8c72491647f59b214464bcf04f7a4"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "ded3dc5e2fa5e3327e79df5ae30f2846"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "83b2ad326b3c81bc06903d464d4d688d"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "5caa8dfe4e8dfd34d9a3ac5ed4800779"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "93c0404975f6a9c5eeac96866ac1f0f1"
  },
  {
    "url": "categories/database/index.html",
    "revision": "3f0fcfa1944fe63f1b4fb44d321f420d"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "ff48781295012be1cfd729bb58b51344"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "19b033d24231124baa1842e7aca7ea0f"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "b961dca6bd256690d6b7b95d65e4986b"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "2b46dcd6c66ecdc20cf4475e0b3f6e0d"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "ca0f498217c7e7b04d6144bbd363abd6"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "914e1b8da4f20913c6e5c6f1b1da5bf7"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "e0d531259e0b5c2356a5e00a013a34e1"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "a72ac1ee05ebcdd11e2c4dd0052cac2e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "92fa72696126b6f0ef74ae07f4c1a1ff"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "fac8e96d3ff9301115ae885880b1d80d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "81d11eff171245f38869ea9b1ccb1099"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "7ec0038a3474f505e97e476861f300e8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "72ed49af2764c6865c8ae74a7aa73e66"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "02c75b3211df977469d394a0a91a070e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "80be4ba2673a4e3a429bba298f635459"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "5d56cbeb5d2c006036616cbf34859ca0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "f04f2e4c23fe0b5281a172b7159c3f0b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "406a23c51cf61782d72a67c2bcb188c0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "9bd4c92a4a71371ac4bd16f1b1790c9b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "dcce585c754a8144b0d47ba036c77af7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "fd98634d982c81d7297d4b2a76f489a4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "60baca748796eaafeeb9c37fb579faf8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "ffa1b0b70d7eb7b019c4dc6018906563"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "1469928e5c8b22a3e0d0b8655a44eb0c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "df54044c3bf71707660eebec76c147c0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "6acb5447b5537227221dadd7234c0be3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "131caa5fb19402c536715249ae246297"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "456ab7d6fa957a5cd4b24e1b3a5a5ebf"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "c80412c198a3cf7fdcc3c8f4d02240ea"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "e1525a75de1fb22afff5486da97a6e51"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "e803964b98c49bcdcad9d5be997387f2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "40cf4dabff12bad0e929f13dc9ede98c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "c411ba96e2c2a52a0f215215977ec80d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "31830d549b005f9c547fb78c4542790e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "b62be3e4e19a75ee968ad3caf998b866"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "87194ea1a2dda3c08397741bd80ee2c2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "938cb7b3dbddf2aee3c794add7d7292f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "a85276ef59befd4e92aa9a84030397e5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "b474ad6f629cda48f32043931d7b8621"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "d25b0f33731b0242bb28a7ecb1d11b20"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "cafaa17aa5b8bdb12b790f68eff285cd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "2e49747febdf6afe3dff42cebfff3db4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "6730b2cf1958dfc06b21481b7e042316"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "5ef42d3f859624c8a787a58032aa6e93"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "55a6fd9c0e0a26a2c330964a86523f33"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "c607302519d6ea435c8f49da68c1c396"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "95013763c1da15f7bbf202f028bf41b7"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "7f4f0a971a6e31d6dd7d7e765a3b8a88"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "46184df470b7da655a01ba7ff94735bc"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "7c2e9d74d99ed1acffede6bb37a11d17"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "04a05d72f443709d835c0fa1adb7ed2b"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "53cd59383fe0f59a5acddfcfac352f6f"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "28de733a99c4491c9373bed0e9e80f4f"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "f041d3908b89f6bde8c2162fd52560d3"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "c46313acee3d02cdd470b88fa34b8e78"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "eaaf5446b6fb781f53c0766299c982db"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "84676c05576f4de17a5a3c9e6cb49520"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "1dd1edf5baa8b2012c3bceb4a011d6aa"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "456e7f99aa5a4e2c334e61f7d0ad98c7"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "242ad4b7dd2871e1a6b52c982e15ff3f"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "2d38f8ef8cb74ce37725834cb79c37ba"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "84889ffda1600aa9e9f17ab7f68ca76b"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "0494200deb8fb1a4f5b02d48cb69b034"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "35fd91e592615bd8e91814237269d810"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "f32c460de18a13c6d85de30d262d80f2"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "7ee8de6f88bdd046bd1eac99bfd38edc"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "db1c7b6c3fd9c2629c75859acade0203"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "edb51e4ce9909d6996374249e99e4f25"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "9915232e692e1a38523bc5cf2b2e4676"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "f2bb97c7a5f8026fa81322a51c045886"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "36adac4f03caaeb6d5051c8d229661cf"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "77588be094e669ab5dca635f9f2aa6f2"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "2e9afedf48f078564267f2bd98cc9111"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "b5cbd2dec1ea6152884881823db99767"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "5ec5a5e600bf09168863d0015f86f30d"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "ed84247add4330497acb3ac178bf8abc"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "1860e6357eea7867c814d781f5dd9086"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "32f17a0c9fd90b14f9ed8d400be9876f"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "118f07f78813e45e99e60c81445e5102"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "8b9d3957204cd5cb7256e5a55382c003"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "61271c060fc553703c3510ddd62b858b"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "bb46057a1828544bddc0823df937c898"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "2e2c7a86177953acacc72ee81461ab65"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "bf6433cb91326ca0cee3630176468774"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "e76d44275fd018c507a4f274c159ff53"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "722e888be0c8896358bc9127b30f863b"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "417b35e6e59a277c246d7903c6c4e9a7"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "b1ff054f25200c2c4f6204bb202136e2"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "e516f7bc931c0f5092dff924bda84f56"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "4f98d33e4d1386cc7fbcf23bda0724b2"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "fde6e52c301c88529f652d8eb1974073"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "8ce18f9a7ed759c82c6fe18c9b84b1ae"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "3f9093827ca1a65df2657d024e3e0b02"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "3bf7e3d543813bde53e96a0cde9830e3"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "054a6197df4eb16cd394bd4b64bd3475"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "6ace61853139d206c8f5b2a0cb282691"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "c92df70e9fcf5526b57241c496c438ec"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "84e35812f6399f1b737f0d89dcd4bc87"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "545a29b4249fb400899f651a703e9771"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "8544ee9fb1d91c9f019b841374c65e6a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "42140729103fc79d585fd52d870040a3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ceb34fbce0d9c2725b74c40f152a1077"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "100d2b4f3cae70917a74fbd0d7204db9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "c63b4b4aec164a1179cb07578dc7eafd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "017eb1b52d4e9d6ca5c45c01944bddfd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "7505212382143816b407e7e7019be201"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "362dba531806170fb69fd0368b204fb5"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "fa6a7d77f16d69b92a143c0927f58dd0"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "4abd1e6212f43e6189ddaf7a678f82a0"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "ad2a985fd217894e83a76c0affa06613"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "b1d883ab25980424e83f24b36f785361"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "7cd5244b6662251a94509daed88a8e31"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "55b4ce8110ed3d9645834dd90ab4ca31"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "53a1e7c3f66f7467bfe95e61628db788"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3b24b8d17f43ed7ac0b42d1f4a55b2f9"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "f249f4adc499f4fb2663b89625ab2f6d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "f8fd8fef255e413c623e2b18ddb473f7"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "51a7c991dd79955988c6326bb28d3657"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "81f0070f61bd7944b9e52721875f0524"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "647518e72cdc4258ac99bbc40f4548a2"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "a436272d7a1fbc52e6a6c2c21db1a1a1"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "321106c15762260557cd11f9d338006e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "b3d19c7f5cf932c2b75114580fcca95a"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "92313b74b05f0b2d1a1f1b6704df2e4a"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "96e33365495f7f0fd4846343503b3f5f"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "e4602eff354c70232c697bb224ea20fa"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "d83336cf08d772b3a0f840bc7bbe3d95"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "28d50daef8372aa4a622d404d5481ea1"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "23bbc6b12cc0a309658f80d9c1d8a652"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "5f9380d3c0835545b345fa5a2a952291"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "e2272a3e57e3b64059962ab4619c3fb1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "bad476063391cdbe88a01231d8680058"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "cea768e8b2189432eb20080918a31c06"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "abffa71bb6c7d00f4112c0e344784bef"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "04c2f27548e977148797f3430f78886f"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "0408fb47780f343037b6d3de8473ff67"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "7dec0e76647a12d9470fbfcf22711e3c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "2c9415cdd0808717c942bc0efcc71e42"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "b5e9a805c0516423e592d396c7ff134d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "1cc2969967220a68a5daa3bbb1ffbf94"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "5dc90cfb41b349bfb00dc8036e54799d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "6f72425febbf4651235ceb0ec4bd9b53"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "7e37b635b726e47d9ca141ed4409bcd7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "a5b3d216b864f6b11de7be647349edea"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "fbba61329eeaa3a72dca6b3d71681fb2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "66c54e85255591681d259a5e451f2cf5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "588a9cb96e46363edb0b7bf3d017c655"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "4d8c7d1a0c96054f1df2703da50c3594"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "bcb528aac46758b2f953611d2b3da8dc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "1206eb4258a6f4f6ae548afde71e9ed0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "2b64d2ba58b886cb48b8d3f6f13c2dd0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "23b652a379d1b4eeab50ea8344dcd579"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "ded6784966ea436342285cc480890fb7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "d6d905b0c886114ec74463ed7b526888"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "b6b1d9e16ad4d9079f49438f319c9b63"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "2711c3290c325f75ee79201338d4507d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "eee2402c50d69085f9179594c3e0d528"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "f2362d69390002b54e3c296c2d1cd830"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "cd4b652fb21e8105bd92e42a79da4144"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "406776789aaf0b7d77fea5b97ebba00b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "4c0c50d18a82efbb6295726589dfc242"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "005f1e64f5850196af4df83ac08829a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "64ae1ba3a90f5876ff664790fc6fc41b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "8e713fff9aba469e971207dba895958b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "b1d364d56b8bf366fed9a5d7db951a57"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "df90162bade535b53d47242303064176"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "1095e21f7dbeafa883e5324b0310062d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "48e5eea95a1929010cc2045aec0e1a08"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "652e8ae7adb887eb105804b7ab3e8f83"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "14be333c6e4e2d5ed81f2ff09f2d120c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "eff289c4df52e037585205da1e3f99fe"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "0ff7dffe0d4ecd84500b9ade1aab0f33"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "f055ee26354faa9fc54b6052a3df8296"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "484c5a33c9421ed0029f570924abbc13"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "55868edc7d0588cbb8e9c1fa8d481335"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "2fb303323c7a1cd6fb0de29a9dfac2bb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "2279f5e9c8415d495a00b510be4503c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "b3df372a3a71af6502a71e8b33331e0f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "bba5c09227142d05e998fef91d8a8985"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "725cc23ac41a6f1feee63761537d23fb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "517e02f0be04aab056e28db18688805e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "0081531fe1a583397a177fb4294415f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "aadd02cfe8ecb6dfc7dd533a1804e667"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "06ca1cbf6844e09fb7566bc81aaaae92"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "d803588d657dd170963d5576b8aea464"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "b6d449f5f182760468c8dd130c8e4bc2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "0c2f26e7630dd3a2c6144b9490e459a7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "084a47c0d79b3444fa15dd5eaac05350"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "19fdb8c49979996750c8344168a0f400"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "6f4c0fe66e8a2f86240d91d188041405"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "20b5dc7f0877b8e06f3cc98ee5eb3240"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "181d3b6738e2f2b021541b6471f9f250"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "c6afcc61562b07d5350a2cc36bf72672"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "90d3efd1004b26cb4e5f13a263c31d48"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "383fe3b4940efafe99e36233c7b6e1ed"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "0c6fa6afeda59162904781de9c3b90bc"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "c235ba2953c639234fdf2ac11f15aaf3"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "fa54ed91d97cc2a495685a52385c7d1a"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "3b3820265360324d6013da51ce3fe2a2"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "0eb54e1e5f67532d28f21ae2a0174cc3"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "0114f9845d760ba16152530d45497de9"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "21aae8e9568c133c1e40e87ccf6a8985"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "b5a611e527f175680367d57b91f994a0"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "d7fde3356910a80449a35d5488526a9c"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "2ef9ebc7e18990e9c35bba7f5022aa1f"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "132d34119025a94b4208652cf5084034"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "df47ce20e0f1a0af154347dc2530f5d1"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "a37efe42a43d2525e572a4d6c80bbae0"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "3635bc4b35aa734ab0104de79944cf65"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "900e3f1d89fd74a29fd53662acdb021f"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "b638fae27421d438c596cb1927c91695"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "795459a877178a986d4dcbf38e719d3b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "342d6e605f222226a7a8de4bd8571e47"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "7490f9d580cdd99db920fe370eba27c7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "e6c2023ed3f6c9008d693ac13a7ab697"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "eb8a877edcda272b8761d5dcde164828"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "27b0a892c0e0cf4c3b8964e4db79d116"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "9a2cd973b350aa469f73fdf6c0bb5672"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "68d7d1389ae59b4331328b651af35a9b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "30959a9465819f6abfad5579072fe662"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "e9966b32b4fec8ab8a2b2c7406f8737a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "12cc892eae029842b24ca205c10bad53"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "bfa4615e0d312ba171b4abb62d2c0863"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "6e7e1850db6316c4a23706fb5a2d8864"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "40c5bdaf283f18746494c9d4c517f2b3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "8c88bdb263481b56f5b7f5a320e8c0ad"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "a708801bc686ad701cf6573f402bac09"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "cda5628eab5e9188694e38ee66e70182"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "85edfc923e7e691781b42642b99a6d8b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "f2405cba551ee107578ec01472d1ecb2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "c77fe03366a59eeb32d4ae601d5cf4bd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "499298a78207b9fadfcc8b2b0b0e9ca6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "2400cd56df99212181242b0cc780cfcf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "55fa1e9e1ddd6243cf937bd65e600bf9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "0bd333a38add9ff8c27b9af43090b84a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "0d153958be6ea1ecc691f22aaaf73b49"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "b7444425803757b68dd835f0327741ac"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "4f280dadff641bcc476a9fa5d27fbc28"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "c96487bed612b85f1b44418ab7e612ea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "87dfd901dfc3d2b5f70df5c24df2f3eb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "5dd6ae4f24b76aefd88e1048c2b72a2a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "d2169fb919f6168dcda43036c4595529"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "c6e51383314d7c8cdce2e425f0e4e79d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "3e44515f1756b74619344314b7514c85"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "b2ad2a39676ae37c330c71cb92df94bc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "59410f1b608fd63b8f7f03fec596e374"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "0fba222452ef62994ce410390a354050"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "9f49af41a36e31b64799c026adeca876"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "9d0f5a1987c55a2f67e1145687a595f5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "86557408c63f22050dac717541b6eac0"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "0ac026f37453ba5ea9efa3254fa011ef"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "da74a67fcb99e8e2737d1ba87e270164"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "df2df18cf64a2bf0b84a30f72c21ebff"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "f97806e3c5538c86825f8536704aa9ce"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "303107cfbe172e7908946406d102efb2"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "2164b12bc14f43b7e63929de0110c72f"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "07ec7037394cd81477421db3711e0fef"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "20d33f0e14b3759866bfa4a8bcc8efba"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "0ce69372d34b1943d84ae47d05fdf78b"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "bfe1252bbed15865d396cf73b6b0a9b4"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "99b485d9d4e46dfe93504a6981846fae"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "04000dffac738998598c9525e84a73f2"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "57ea9a867a9b877676366567c9cbad11"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "5e563bdad2f1f0cb4f14381846669c81"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "daac6125da5fed0f8a1e31b298ee6c40"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "f6bed42bc136fbeb0b69c7b50796978b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "477bd3a50848c931b52add60c924f4f8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "3c887f2f6342682ea9017ad089b3506c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "56296c3b940e598cc6eb710bbd7b4ab4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "9b645afebe33568057fb5660060aadf6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "08aa45170a87003801720072518ccd79"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "c2e2944aa077f998bcf6c3e0b5f7057f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "65274a7b7317be13d6dba40a3d1d2a2a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "d9ca79bd65403a0f576f1dbfefae4171"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "72b0e21190759fd50c104c414d713185"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "46ce998a2086497c29e22026b667508b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "fa9fc5b9e0e84b7fbd3be9cbc0bb0dcf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "874a748b773993f5216fdcf778ad5b91"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "176c3d0b74061ae07ac41899669f26a3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "571acdc298f251b805ad1843500eee49"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "dde393549329e00442a6b74ea0e6842e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "3497735694f98a7fe5f902896c2fa6c9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "ced636a80ba25a15dcdbaa8461279fc6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "54f9d41535fa6bbc2a7f28cdb960fec8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "01e6d5af8678211728ec5758ce42e231"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "a7e9376d1ee709bd66387502435280df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "bae4861eb222120eebe957811b1beb14"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "513bb34d06f9a81934d46ba27f0763f0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "bb67f1584e17004e525a98b95c9e9fad"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "670d0b689597cbd139de2206f106c6bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "6bcdba3b5ab9e52e7b212e3854a9d260"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "d3a3565d2249a81e24c75c1049fb1f1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "3c5d3421c7f4dcc9bb37b751b1bdbf8d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "0bcb4671dff3cc747633f3f5a02c1a1f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "8faf5e1c23015988e894dcc9a125f314"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "0967a555f74e180975bb863f8a428459"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "f415f2d9a90869aceba64c16fd0ec888"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "76e42325c8d59732dfc9c5d2da9f7e9a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "a99133087e72a028034cbfe1ae829b92"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "f3976efc7ceab10ca349eb5187d5e9fc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "e5ec347854309c0e351c014e18c0620a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "d68cbb77e794fc6d1724eaf73e3ba046"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "188843a54491f19326fa2be509a704f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "e11f202a62d8db2b7a36b4eb939e52db"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "0be2f17b9793ad81ac7444030fe06a3f"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "06733d3362189461b71612db3be9a24b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "9fae10b382855abce2f730c7d4b291b5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "01f5fd52c66831950db8831adaef9b15"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "10489d2083107c25722e710691a6c0b6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "96585529eb545fd36b0e30829f7eecf3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "90e1c4a027262b229eb94e87a433d156"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "d72be807b3eecd6f8ac887294243cc00"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "9fa0da83321c47406f63db42414fb033"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "70d2f8940b34a7ebb1e32be37f81a7b1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "e8ea78e5fb1c26930a478674de51b800"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "6b360f37a48e717bc43d39bc02b5c8e6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "f472df009b5d4469a108886b03215dda"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "a829bd029c6406753fe03874a26073ad"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "b5772bfe58be32bc73652413cf15309b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "98746c54e85c7deab2bbb1e62739a60d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "4de36bc526d979ea84586807100046a5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "34d4e854bb12c0070c5287a47ea1a6fa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "48d0f270f583f41c7898fd37ea946a73"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "a990da9495c06121b74b8f9782f44bc4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "7a268e5a27cecbedbcafe081ea103123"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "ed979c52ed6229819be3546adb3debbe"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "dd906fb0af01e0555f02e03ece21626c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "66644fda860d634cde73fab3564c5512"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "a80538ec38cc2c00f041af78fb43c6fe"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "23b2195eb75f9db9b88f5bcf4d4e0415"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "9f998cf8823a11e2a25a5ebd38a005cd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "6cd07422456603c673e06bb54c352584"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "c7a0f8ae12e1d6fd6216c03423cfd6bf"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "c9a99b6e6ce0d19084060783ea2bd9b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "18b690cda4a0d023a163ec9def12d042"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "e9b437425145cd5b6d856dae16d062e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "de71fcbf531eaa738a49712976363385"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "e72845bc09e4e08763e896ed86721db8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "193677d20c47f47f64c2efbd63460cf8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "af3690aee595f70386444d2ab10f77a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "c23bfacb451c47759626cd3c3227505f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "be57f4caba4afad9a481e39d5527d65e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "c61d06dba1af3cdafab70d869ea8726a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "3c0e5cd3c6ccbcd9a5128296b000c7b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "9a8b3fc794d6c34597ccab07144a06c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "c33e5c33f619290f5be6e1bebdbffdd4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "ad3d95a141a4a03f5008896c49eb2a8d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "9a13aa298092f9ec2387d48f6f075b62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "a4eb605ef75a3ee78b7b9e7e290ea08f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "a9957fa43c04b1cf83ae4adc78cbec9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "06bbe27ebaa712c7373f4f0b4945ed20"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "ffaf5a736aa1a6539154fb89321e55b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "109b840a0347d62520076d5f22879b7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "21a19a26c2754f61a0e16ff1be8a9821"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "16f7c5dcbe1f60724a96cf5922fb2188"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "01ea8fcd1a21ece21d6ea42814702d4e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "5c822b6e778fd2a3b3f5e889957e4bf3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "dbe220544465715f7f6aa0e7fc43a4cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "0290adad7de79e30907af987376378c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "9cf88a9870ff850f226ffad9e0cb8c91"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "60b40ae87c1a8449abb02b97729d906d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "b79a65f7fd20da1388e82844ad1ccb7b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "ffa7fd7381804e20fae138d471eae541"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "e6ed245517189541d02ba04b429f5ee8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "f48b4b7e9fc079ab3bb2778295715638"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "8ca71b723eed538ea67793ceeec81640"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "fc4ee7228a3a10d919a1071b2acd0d85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "cb2abb29a6fdcdfc5ffef575ff3c835b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "da7184e2718bb9706c91691171b93b14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "03601dc23f9ee075a2638c1945bed981"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "ff0e40d072b197158947a45db724626b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "cee458acbf88ee5565a4953f10e13147"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "9428ac29ae14130e5431abbf0b5769e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "2aca2fe303eebb4219e2e31fb78e01de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "768b67c62c31ced22c619c76c46af168"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "5dde36e720d12e0b7f2aa578e5560df2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "841cd3477b30b724444e0a4151d74089"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "317a501c76550622ecaa186f47b3fe3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "9220594aed56cebe9de1c4a5035946ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "fec4f9e040bd9383068abfca657695c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "c130700ca122a2709b9b0d83cb77745a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "be6fe9bf52c160d54579badadcb3e738"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "874d4b4347954cfa5b6b1f4857625437"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "6cd2f9ce9f88f46f3843614d2ac4a0f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "515d427490de89440bf057de1ea30088"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "29e0b3a3f13b8871577f5d00aff7aafc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "66d6cb35c0f39a92a94ede1d1e25b4c3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "71d6203b854c717276d5d1ebb2194c69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "fbc40fd5efedfb0137a770b5c01c1a62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "b56489fdf4ffd728dd2d2d51d652e58c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "62bff12f5ce6b6dfb50272d22edb3121"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "d2bfcb2b87cc1b0f7f592fabc4645e08"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "893818331174448038346d588a53578f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "6a05ebc819da4494c7b2839659755ef3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "e99f778e243e14927379af1079e73327"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "36e1123d805481ea0e82b6ed94a4362b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "382380a247433230a07b71ce7d022a68"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "5c0f16d900a7a2e1c75c7eefe743eff7"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "1e11a191699f506e43385b7f97d38489"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "08ba824bd060a3f90cf5e24f4badaf20"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "5e0851383ec750eba2a6f589aae7f9ce"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "ee5927bb2d9f052758e12f4d53f7da13"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "bd084a8cb8ae3ff2f4b73a9e6d008eae"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "5692511b7b7b215f6c12890e11af38ec"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "73d10b1af4336036cf876dfb172d2658"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "75c1de642278c4d93ba168fea94e9868"
  },
  {
    "url": "categories/index.html",
    "revision": "501c560cbd5b43a6b4683e56902f24e2"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "77bd53e775b98e0f0e850455e9a0ba36"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "3c15ebd7dca4a066de639cbb0eca3d2d"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "fe098cf3d1dcb53ae146da46849f3366"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "4db7a8376289bf5e918649bf0306d4b9"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "fde4871fadf5dda356c05ea4ec5313e2"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "c12f13edff569b6d0099ecf4ed9250ec"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "925b225b27ebe9b272ce0c930912fef8"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "cf9177d255790362b4ad8db05dd6decf"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "d269e678d9a5030dfc874444c5cdf56a"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "0c15f2910ef53cda59508e84e5663fc2"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "439a441cc42a51cd9d198cb4d77dd407"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "07d80ff7f8054129df5458c15ecd4c2f"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "b3b7f9d7bae427c15b0aaf11f3e83db7"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "159b43f1e02d94dad10fcbf020b0a3e5"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "43b3386d50acd136f449fa8ac226466e"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "ddb14332eef911309fec2771d3413d4c"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "6b7f2192acc4e013d23e1babed58d560"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "c78d71bbf99cd158b7ba673a8eae0f2b"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "e63ec9b7c4b27a6f92deee8047b4015d"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "08efb817b515064d2766b49f3841f77d"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "ed238af26c54190e65407b23de7e859f"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "4364c49779f8bb8dd2db7b272e38513a"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "ff11ffe74461d6d7bdbd7379ceb11838"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "24726d96bf660ada7fd2e3d085c60538"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "068a6f34a2d87a1768579491a4cbc60e"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "da538d3e99fb0a0a2958a822e8cfe894"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "49bb073f12cfbf1b93f0c5828c8c52fa"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "d9f792b4af84ee1f3620068dd23ce5b7"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "b952b5f110fbb2723750c295b7740e0e"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "daa9c8003ecf1e344991bdfd92355748"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "def765dfc827ba658bf050c68d761178"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "bea87374eb381c2a304ba485d51ed00d"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "d427d1c2ef28acecf23bf757394e490d"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "3acf7dae70398b9358501eac70380555"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "2016759a48abdc099a5e7ed0ed1ad3ee"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "5fbe2a42fb67bbf574fe04521951b247"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "9c58c16c6fcbe158015bb3198b297016"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "9132d5df34b625c28fe100c43cf76533"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "6357fe222a52a7a7c3b8cfc074141fb4"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "053406511f057a4c574afa938fcb51ab"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "2ab982d27724d6afc3449b3a25093161"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "3c843510954e09ebce01d999f9b69c03"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "eba5e43317b6ce91ac7db645fe55e979"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "5a778c415f8b205fe14436f97579703d"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "0e62feb773fb676988693c586fcfd0b2"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "42602a6981c03dea5feabb4525d187ab"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "ecb1adfbdb1eaf9ec4e2b3993dee418b"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "a71c00b138b824027839fd8dd9921780"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "2b4037aa42b9ceb49f488090c298db67"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "cf155ab6d0c00040b9a52b5cb975279b"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "011273a90a1292cd9c9a72322b0bb53a"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "1ebd819a4ed408ea15de28ef3027c119"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "cadc7995d2fccd94fb7fcdc690540344"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "1bdb8c69f013e0e5ac5927e936fa0031"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "7163697bd8bac09e6690495858b3345f"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "8597b7fcb25ebcfd5e035027a6ab040b"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "a3f92d58815154f474f0e23721af1294"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "e96ae77b9135888c0c9ca46f2b2ef4ab"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "db91e9fecbe124abbb616a287ccbe289"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "4b5d8a77b2ee5659ef38a7917c7e027a"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "9ef99142115ba9bf2982146188d366ea"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "4b81f3a81ad0060617ac4159cd8e18f9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "4e0e4ded812d696dc109966f59d25d38"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "d0130c68a6bdbae37a25a5ded22a666c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "d55c68e00b4c00e8c607f21bdc43c03f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "302111196fc92d26c606b4bf5d5c5805"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "f969dd755d9e0773d40e32eb9de3db80"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "305854974e39122250c1e99402623c0f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "eab84c93993b8b91b9e1b815c105c43a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "30d5e207b334411549e6ee07a6a5a103"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "0a7746b5921495c46307302847bc108a"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "953cdbdd57c96e1529f20f0888c9866d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "01f8983ff24c357ae5fc611ea8dd41ff"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "4886388bf7e0f891b4801d71045e6992"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "a621804cc2b7d4155fb70438da07133d"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "0e16488b6529628c89cc3c28dda483ae"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "3a4f96165d2e7bdc1643a748f9436055"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "7bb1d4cd525f914d7a1df0657e00723f"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "ee47abe756e71595a8e045fe1fc4d62f"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "326ecba7288154a935adf535473cd9f0"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "3fdf5efd1251e5324b5855b4c71127f2"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "7892262c576493eea4d01c61d2edef0f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "cc203a4866533c7e4c44ca1df35c27c9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "1dce6b8dd7d4bd3d4010612871179fdb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "e671a22cddffd3bdf1be83b1d8786b6c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "b29945bca9db86f681f32b2310b5c7e9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "37f1141ab65d62f1684fede3f0f0b0d0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "b4f81720d857e573c3ee699fee9de094"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "674da1dea929dc34aa62c413bdf4f385"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "90e89a73cc34ce167f43b90608a2e97c"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "20cd2149eccc45c6413f14c9b6580da0"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "cc1ce1868d6db7f2af3be36f761442c1"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "2bf83d58e32cba1153244bc4af574ffb"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "3e0b9c5860b398ed993927a292c9ba85"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "e194ebac25bd450fa6c0b31ddd3de597"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4d231fe9b0d64cae01e22bb2b3678906"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "ccd45c64df1be7d6ea57440e8e3ce2a7"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "ce21950164097ed1a95d8040acc527c9"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e3630d19511f269fe1f2b69fc8a8133a"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "5fb9afbddb07189135f2727035b42441"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "65b506158cd5808ed30db88abe17410d"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "e447453e4c0147566f28bdca2ff3e4d3"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "72c521baf01c3fabf34b2d1aa3bba6bb"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "5abe8b0ab910b0a4e2ea3edbf2263de6"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "6b6b8c391a69ce1e8f43b4a60ee42b29"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "2eb66a077fef4eb5b723408fff4adb33"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "9df90e6ea5277e2d3a12b4d5703012b3"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "285ae8d4383ceab2298bff1f792b0cc5"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "3f406b19220f7779434d804b181399f2"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "030d9b032c10fa4d0bd58d47cacdc53c"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "cdfbc16262946f619c90c7407989a992"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "7b5ffdc1adf07d261d5d04aa7f1c7c85"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "27c5218d48244dc4895a4524e92470af"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "3166c4c3bc5c9790aa94437d5731ad31"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "5dd4baa5988c99c300c1cfb48a4d03c3"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "602d63fe5dbf2fc07a80cb595d7795e2"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "d61a1a06d4bbab87476b6ce08b90b191"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "e755252da8fa82c78d75ddc6ea7920cc"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "853a38cb6840f6f9bf5f697c7c8303fd"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "4d35abc45a44eb5186b7c6ca06c1e123"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "df8838e9b00a0a0c123bdc4718e528d3"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "a8b9a618d62ec10a6382dfdb76568c9c"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "f3b68ca202b8b9b2a67e99d59668fe93"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "6f363e7d910a691eab0fb1824c902d8e"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "b1a52a3d5cb708c786e3ecbf22c0c48f"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "88f915f45e8056ffc7d0a00c82a0ad6f"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "6b42eab518db0c410a8e7dfe30a4a91b"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "6bbddc62076f4021723a26defedca764"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "1974ce581d1b6e7676231a89beccf14c"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "678bf2c5dd6bbf07b8cdb150f9d95cf9"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "6f74ad462aafd56169b136714eefd956"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "bfe0544f188652844c627d1f97fb4960"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "1c7db7b3ef1036d6aa88f18daff92c5c"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "bc5bc5997fdd62e46b085995b3ac9d3b"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "80d737b1af52558ab9683ce3543c5324"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "968e7501bd480e3dda738e5041e8d257"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "bc66cfd24ff1e6c575f032bb869da76c"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "0962dcbdad6c172820dfcb6fdcc315d2"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0cc5c364719dd81fd363d84d50a98978"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "2e74a898e2c9fc6183a0f0353e1e6d4e"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "a01b9b1d088f906be5f427f67fe5a01b"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "05cd498fd1945a308ddf205770738064"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "25046ae19f1a03348c7caa60792d17d4"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "9b4be3c45dbdac67193f08c3a75f65b5"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "e8b7f2e37d04bbd59a4cc1279c13d2fb"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "31257c6c25ad7d42e01df6f1b4f6ef7a"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "4052804b21eb763acb75741ddcafb193"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "81f9512c074f48db548af18ff481751f"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "129867d44f0b4bfcb3d27c6adadf1b6e"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "5e0c9c615ce28b77beee599c2bbd34ac"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "6802009b4e0d0734cee5a445ce42313c"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "bbf50b5d08663d6b8306b82b556d8489"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "a152d6a9eb889d1f8ebc9e8502abce96"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "8f1e4537a21d673be015db23d5d98c45"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "9153f90002fc37ad13c7891c42cedd20"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "c5dd57dffe58827397b14c1a7a2d0997"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "9ea46c764460fa602f20db659d8c52a9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "a4ec9e103afb4c4e209d2a5577f2679b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ab2bb81be2d25e3186bc0237d2f07022"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "632aeb5be52faf6bdf8516cf93370a8c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "aafc74580952d29c5264d1f326624efc"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "0a9bc541c9e1e04b33c7dedeaf2c619d"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "f293a57a191b4bb7b7f67985e117d690"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "6f1da2cbf7a37a4a5ad0b161f5776b56"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "38cdaaf053a82a76f9e1ae29e677d05f"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "a9c0237a04deacf4c9b58a97e1924dad"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "06d60a8dc57d4de451ace0411c638a08"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "26f0faa601496ada20b072515a8aa9e1"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "9fa40d1bfe9ae2134c7ca3cd41cc22d3"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "c2c2ad29837ccee5ed725a33618d6292"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "469fe38283dac407d532e7bfccd4f378"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "71283f182ab92a2acf45f98f1e551a04"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "7e8e924e72d6e3bd727d0db48d3bae55"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "c7acbf38db1978cb8224755e355095d4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "3c1cb7b3e620cabef103b3f65d15a2d2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "efd78ec87a906a3136ddf649e4ee167f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "3351c4407a42af3d9c1586b66f2c35b3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "9c04df7aa310d113ebdc8efdeade7f8a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "ee83bb82d89d77c383aff02feb121df6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "9f2980ccd006bcf04a24b1b9bb085d8b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "242ed9713f5b3dd7a94aa70ff9806dbe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4c2853a4fb686c31e5a9dca362d472c5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "3f4da8bed5bad78a6f5f9c03dd66c8d1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "79ea5d38418dad1f5cf81d86a2fc982c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "a94fc9bb107f0ccb922b7adbcb25fb31"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "3ac05ce650128c1ab924e3853ae30d5e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "3af8190c5d40730f19a69893dd5948fe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "40ec7397c57cf64d0eb4ffac5188cd57"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "5b535e6b30ee4f453c3f68204a803e5d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "c68ef64121eb0d865c14911fee5d3c30"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "cde4a5b64a90feb098556a960dbd813b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "3bd37d49d84946baf62bdcf45eea7e36"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "fe66a700dbbba8fc35b5f77d28d6671a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "a9db9a51c8c01d76457b68f34835959f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "415912018b0cb90541df8bd707ad93f3"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "ca485f451e83af3afc893bc33556742a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "09b16ab15dd03b286f456b284487b4a6"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "58c48b9de233921bd9d7de50b063273a"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "3807d1e6c9116bfc32855a74b9dc511e"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "d5cf10992e9172a19f1b2849c775bdea"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "7ecb6967a9ead1e57470840a9726b149"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "39656a213428d31947cc1e314135ca9f"
  },
  {
    "url": "categories/os/index.html",
    "revision": "d7656f94a69095812cc11aee34d68cdc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "25dcffef89415c109a0868931c8c1192"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "689f4c8420969e7cbe3be3bdc310bd04"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "f6464181e4feb11e8f836e20364133e2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "5e8581e13990e9d3c19af10c4fc78bcc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "26e89fe31918df47ad4af20d84d2e286"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "84711a5b249a3550db856728169e5906"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "e099a8502b2065a34d035240df930b5a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "728ac18224c21904bc0f077d0a7e1fed"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "231ae228b2b3a0dccd0c263f34094c52"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "32d88e78058019dcb926d092277547ca"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "1d5b1d6b01eca7989c7f068eee649c30"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "8d671735a44e73e40c2c4ffe332f6043"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "ec06e28a61467ecb4a4ec424eb412588"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "9db7dc7305950d40491732f76339d2ad"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "e11c87fb490771e464b9e529a853b908"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "d2236d1adf22b13f0a4e42701cb42098"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "4566d2b532b35466324047cb9116923e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "042bdf3d51f1d92712c22ee742cc7ccd"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "94cd7d5c67df66181058ee3609fbe65f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "d116e670515a05bf41e00ebfc180d59a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "0a9750760a94daa10fd25bd6c6920fa7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "5387ffc0447720874daa7c508aac7a7b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "8355976f7666e1cc4fc52a4bf14c2926"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "e9f6b875a4a0db7e993209f2a07ee381"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "cf3aa771aa5104c6955a48feb035aff6"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "9912c76140c24b39d0a85bd25cd7969e"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "e2ccc39d1fa637909ed02bc107a598ed"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "5e4cd6548b6bdd905ccedcf8b215f7f3"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "0e2cfb8b33ca41d4b482be18680270c6"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "645894946666d7625a8056d440f2ed26"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "6afede6fb6bbe4bbb5a7e2e0523960d1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "28c0905fbbc5ed0e4569871395b7a20c"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "418aa5ee27a2efca18a0975a21319811"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "55fa2647c359cc4a23524711e475584c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "e70d6bb68b64480b3076742196e5dbd4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "6828d0539f68326913015b27c613372c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "a779fa8b577fcd609ae0272bc8c3abbc"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "a536cd2399d09b8965457ca8265d747c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "522349dc8e15648abb33ecdd4952d180"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "c1e35d07a582c9a3e55b8b6b997bc78b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "ad83fcd1028c7456e0ee923ddccbda30"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "0ae77bb07be252827d2852297ae46abb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "dbcd487515dc5f579febdab4304f2bf4"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "7728d21a911abb549385f490f73feb0f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "078c4edc1a13fd45c210094374297351"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "4cfaeff5512779f89dec477c1125a00a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "eacbdc927d60c774162831a12db8019f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "5dd7ec9e1b27a82aada521f0c8647141"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "c9dece39fc93b7302eec265c89b2b81b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "65c011f67eb608e338217535334b57aa"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "d792b58789300b7d2788fd0e370fbe1b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "91442c5888efd85926d41d1db597f335"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "27c4238321ef71cfda424b454087c7e9"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "0d822f42da905950b8edaf9c7fa51ce5"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "8031358335b97b65f9d52f2591d0b8e4"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "b44e8a10a3970e3df817543af61a559b"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "6791ebf2b5a7b92c19afce9dbb0c6dd3"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "35021f9d20c815374c0376058d049198"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2abcdb89552359433289b8a76d1cac6f"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "d084004bc8e70e17b1318a81cc13fb21"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "f0bf49e4d94134ae82d94d50676f38b1"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "1905f87e09c603324762cd4b85fb19e7"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "c7cbfdda8d4941f184ca7f8878eb0d3b"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "539226a5f391b2dec97e3ad82c281416"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "964ffae0c2c5eeb2d8d37de83b718234"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "a485b0d99539189902fa297f2409f5b2"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "00445226325beeba7fd293c6c903f4a6"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "0c9723681dbaa248b28ca45e534f4b18"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "5dd013c3de5e0be85ea2452e8f3b534b"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "fc64c31ef72ab78416b0bd37096fc530"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "c276b0aa8b3aeb1ced1143e37297beb2"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "3b98d554c20a3219b65d62d4c1874aaa"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "d928d9b6ef131b69e2d593a2aeb2483d"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "bd59695bba81cb2e5c64b3deccfcda9a"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "4fe033a1b56a7153829888795be9b407"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "57a84468f9108508e08a8f38e986bc55"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "cd2b98c0ce5bcf484c8fe3277eea089b"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "8119a7eee79e18e4d58756ee49f39e46"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "aa2a669b9cef4f1b0e5a8072a3ba2579"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "8db04c7cc1b64cd72fa8449cc76faaa2"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "9c51f62e0ee01faad776e348c7c127f0"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "0445cf03bea34604dc4c929b3d02a95b"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "c999404bc3b1d4f4784b2f28286a34ad"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "ba8dc62b9a1334be3b1451531c9cdfcd"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "8a5f5ee60d878b2e032f48cfe898a606"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "237500e79f3ddb3e4185db6782790b0d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "5b85a0a4893c36c3fb88e177200a8625"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "f17c093f09e55a672b51ca7489af386a"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "d6d1f146a969c0d3b9eb11531d89f5ff"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "9fd11b80073825cfd4634a958232272e"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "00b05046fb4f73129a2d43dff031da40"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "62c5216927984fdd1215062bbf439e97"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "c68bdaf4575725c8f1608dfa86b6771b"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "0c92556875c0831faab9ef20bc1c5a17"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "7633bcb97b87bdecc0809feaa1f1cf15"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "068ea940c934929cf2757a0a43726b5c"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "54dcfead21ec1ab748ecfaf4dc950b0a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "e47db4457a5d053dd89e11bf10cf3b01"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "a726ea0d86b7770f4ac73533fb9cce89"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "25fdd71ab34f29cacbb77b88153f0514"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "aa00bd8f57b8e573cede04443a149f70"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "d5b3ab05b1ca471506dd80bea7ecd983"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "1a5d593bf431c4b26b1a6dd78416e97b"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "1ec6fa97f31688ec505170084a5cde21"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "9f175bba4b6fdf56e1ed8da9e12aabfe"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "468d98bdd2205bef92f6888db9c59947"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "034bd9e70480d7dbbaca372192708968"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "877a9876485109951b4a153ce1e06698"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "0793bbe14b3bc8f4fc29b15a6231e134"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "b78d3eabcade8cbb69cf1a4bd8832401"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "ebd13698eefe8763cb054b1d029f9769"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "749349a63acdb034b8355298d00dd65d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "ce6b04eae64b2e376dd93c1e309939f4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "000662e415299fbd81485c41c5955ef3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "68a9ce0f6f2139610222c6e19c01e232"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "e0bd14bf3fc74e0d7b78eef8af661ebb"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "2a897abd9d57ebe0e39b0690488f5405"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "5bfe1262af0980f3d7f7c0a70be82be5"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "fc0ede4da320db76a508dab5901b751e"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "598f9e83e5b41da9c2a8726553edec75"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "f69ef8ba8ec9ad0ab00e9f0fd894812f"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "d2da526da7870a59bfd0cf172527ed80"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "e8ae6940f9d59848d7deefd939cc3ebf"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "b9aa17df5232f9844b27999ddebfc0f4"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "99ce7a2f60c07d54adf78aa1a8d22b75"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "f614e9f466ff24ed555519221964a256"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "b4b0a47ee7fcea6c0264596b00f0e7f0"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "9a5628b2564635fbc2aeb1c63e27673a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "c02e3355a224a3f187d067d4e43e9881"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "471007b135aecb7d7302dae78739c075"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "62f6353c3561aec72f7b11eab770ac6c"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "ad44b1be8ffa7ec4a608bab2b1535ed3"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "b602f818e22a7e750aea658029e6b428"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "4320eef79ea9e4dd016ccaa787c572ff"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "b2dab20377dd5ced36bf9b0d8727efda"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "c9906fcc6ab4f21c54c9be3c3a1e8185"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "f668de0dc5c4233ad28b15e9992285c9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "1455ad7703b6291139b9de0cfb702532"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "5acd707317121573e6e7b295e7318c04"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "7c1321fc4a56cfa9f0d5e0b5656601c4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "8d39f95bb8e2123a666291c5ec93f16f"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "a339a01f36d90a5032bf114494619995"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "708f57aeaffd8952ed95ab207cc5e17e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "3d430cc6c6d100011274b541aa383133"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "b32e240e7fe01eca7d31da8ff5635b27"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "359675c96166685afdf4ccc22b9cb73c"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "ccc1cde8e3b2c53e4278db8c3f0c3999"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "fca4122eda510306bea36e9e06c04fa0"
  },
  {
    "url": "categories/php/index.html",
    "revision": "375047b8c1e5ae8544ffd458f8622116"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "e4a0ffe40744fe155e360f481e516d77"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "d9e99cf36b5d136a76094ef976182bdc"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "892a235d53a127b5ff774c01a0d2c7ed"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "41d574ef7e996e66ce67be5e38d0eb05"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "f0d74f58df9c3d02d208dcf2d899a76c"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "9029fd6515b23fddb3aaf4661ea0cfae"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "4066c798e48cee951238a3d8aee175e7"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "0ec00a7dada18397f633760fcad5caed"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "932b08a178374d2406638fa0a1c518c9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "f57d4a9eb226b29d172bbf05c4da6b37"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "3576f7bf61bd7be61cdd9999b8bf5ede"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "90b823f74beb38fd8fc0b2e4c2bf0212"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "da80c08fe44d841c5fb96998d73a2556"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "6c27a2a1715fcd1147f0583be7a8f630"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "971a0298745d0267640ce1f74bf49fbd"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "21245b8b98f5927a56a51f86dece00d4"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "f85e2ccaca0ce13f7506367438482a1e"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "6cbedee9d9f3addfbc35cbbbc882c85f"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "8398b0dd9227bb66e9c40bf3ffb35368"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "7aa60a94c11e23474b7dc2027f088e9a"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "f0e9a2bd82b535477badc582a01e646e"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "603a6f609cb498d32713ba4cfb370e1b"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "25626bbb915b3273bd597f28c423b131"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "32df31e8b8cbbfd58806d72771bf368e"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "49e987fd04796a18d6e86997248df11d"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "15e40c067aefea0e0af05c2c34055e1f"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "402d5a7d74df6adaaed174695a0db08a"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "6f878d0b5da26d3e4d75f097d86c6b3b"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "40aaf8eb91c2a314baf277195b34785c"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "0bbecdf664543f3e9ce4feb411f75f42"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "8936157d66cbc1ae1e28f164ae336f84"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "6f1910a690048e0fdf16c4da38a80670"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "945d1edbf1ac6b628e5c814a54a00ee6"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "44e504155ccb4a130f090cf9f8395bf9"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "8ec618554c8bbbb4be6bb13becdbc8e5"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "c40e693718a3a018f2a438ebe7efe443"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "d2a9ef917a448094754c4539cceffdb0"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "46113076042ba557deac69f22a0a6279"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "45664c4f76737431f376da9cf1e3eea2"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "e10a4125c2807cff0a9700958ed79c67"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "d1a2320aaa1387c8119e47eb5087e100"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "e5840df02ea4ad4d2419a0baf1630d4f"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "96cbd721f6f695c9be145aaf62f30ff1"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "4cf44996eecd8ae0e71f89b6c8c19804"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "d29edcf6d7ed50502e3562184e5768ad"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "6e6ba48d80fbfd067cba2d2ff436f497"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "b8f8af2571427efffe6b14e8f377f6ba"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "13abca0c7f13ad4b722d568b380a71c0"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "23046f2e0c114c9e05edba9db1af5e25"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "8d537edabc457feaa88e9645464a56db"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "482be707b24fd2a0966c888ec24a8a8d"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "fb96fcb2a220337e6deb2227e88b20e7"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "09d98cb198347021a94c4e1f86b86067"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "bf0989b3907d5dc00744e923e294351b"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "c398b8c8d7a4d790d5e5581680308a36"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "be706579632d45fb5e5c32ea159cf909"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "a07a18c4032ba7d79d444a0224c215b1"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "a96957ebde8a3df6c1be4f669b79fbe7"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "1ec4ae245b33908f4a8d22e1d1e9b75b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "7d6ebfc5e44016dfe536c210f9451f91"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "1477fea4308b116cfcba306d0c5ddbb8"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "78186df53960373226de31e8c55de81b"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "e6fa74e1feb7660cfc290d8f2477f01f"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "9c00be9e17104ca057db6a16d15420f5"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "9c2b125564a43bf3f8e318a6970d8f1b"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "c374c60bc555a22648da3ad812c1675e"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "48eff884f4e414fb641922e459936686"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "f4cd7e6a31f650228ec81039c20aa69e"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "26240e056e55619fe33ccb3d94dbbde0"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "6211869dbe75ae64eeb5e17118194aa2"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "263ce4af1b5d7e7a25bb0dd281ed259b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "115d9924195dc576e7e24198d03a081b"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "2ac31022beb4bde2d531859e610c15d9"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "ddc76bc407940ea64b8b88311dcd7ee5"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "a1462fbf2839ae778d39ad4fa67f81c5"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "5fd644a3ae899ca2b4e024ecd5ef03f4"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "83d894ee28deacae01cf960a6558332a"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "674d1265e69ef9572cbdbff85bc71821"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "2c87c08cc0dadf163e68aa44ca4cbf70"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "08880b4e37456e5cba3ed645e150bcea"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "c2c8dacc6eec9e91f7ed4f8cf665ef82"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "d3e53239056682e0da1511ef76c7722a"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "6d5f4b2928481ed2e51ea986ac8b4430"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "03231dcc50272a91efa5caca247d15e9"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "f05f43c46bf5ac2ddbd4b3ccda949bcd"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "3812d2df97ab5a6d73d57d7e30f468e1"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "f88f8360fdfdca7fc5135c3f7fd985ca"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "2da76947911370b822ae5ae07fe0e1c4"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "d3758e08b249269334a851a980719b6f"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "199fa7d45b9a7e4c7053aac2bba0eb19"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "5fb120f8ebca6197778eb8ff4b1122a0"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "15adf11b15766c81539a59376991e5cc"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "eefad8acfc78636c655badf8ac29a3f5"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "aadae13469b922ac317f7a6bbe54c04e"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "99945c586835238c3fb864c24f4031aa"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "c8845753ee7d026f610679a05888d75c"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "5f0aea3859930b5212bf30c8bc5a43b2"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "4ce80ae92d8a7d51ce729a1d03f3a640"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "1cf23165881077c3c160d547cc1a9140"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "c5bac1d8e73be1dccc7b20163bab185f"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "97bca0fc7a9f7a4fc9436b0597f4d936"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "2060683408dbef7ccbc5257ae58e403f"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "dcf3d13124f8c1d77ce8d172bb12d420"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "7287d76a02bd89f90236d889ffb6e252"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "a5ec2465c887ed73464a49364c21e1a8"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "f272a77612eaf130f3351e2cc0217742"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "8e7c15875d1f1dd098bafeb3b057d830"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "ee209c5e7d4e4fb3fa13d51cf90d9b7a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "e9686be236b97fd54f4f3bf5624e9786"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "6591f88afdaab2f19c68a01d7c71449f"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "b4ee061b4812c142b718606899dbe104"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "f5d4e6620dc66a785d39042ab6f244a4"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "084bf8e66a5eacadadc385e2cf000df5"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "26625b8a4d84be9118b663027f74d2be"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "ab4058360b9254f1acb570bb211bce95"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "db418c0ac5194e09a9d97eebcf4e42ed"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "00f649440cea889b01f0afdd4d867752"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "6da3380bea3030de14440daa377a4b5f"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "46a43792e310c3d7b7b615e805dfc2ea"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "04289ee802b5425419e8995467f48435"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "e6c411eca087a648d6e5be4da3a810cf"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "1e2784df96d49470ec84df978841c9ed"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "f21767ff7fcd5e2e5a0be0413f3ad805"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "70b5218f86665f9550ad542a890138f9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "10773cfbafd41842e87fe23ef7a9f2ef"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "0dd926d6daf06a914773ac43b0e3af0f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "cc32b7a99a4fec13cad6b68e59cfc86c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "e18c5dc16aaad8a962022e883ccd1792"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "41762392b02de67d6c51d91022dfd221"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "5db57231c66a39afb0e2fb6862c8f4e3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "6f3dca05f454b1b080c8a13944d799d9"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "b99b858cf00a86a51bccadc8ea704081"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "6520284ca892a12b2f510f88444060e2"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "00c1d60b5a2c34314a4f71d5ec23a493"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "79c10465ea6cb00f8cc664c453479242"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "2d29813f1a29c8db782b4740936de066"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "3b070fea124dae5b9b6940aeca529d01"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "6ceae191bf0b0c711d6ea1f000ab6d39"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "84e8d31da756e74136a4b4a651c5a3c3"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "6b9c7f12423aa8917e17a30d73071917"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3fbf57f18202e56d5117636a0e2f5bc4"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "7460b511ed333f0cede848ee621be93f"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e9b0841130b894e4a9de33d6f74b7773"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "30e3b83753f9193bd97b608c6932155c"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "dad48ebeba21a911a79d2628dce95b4f"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "10d144de1d4a7566b3d8f63a160d9fa6"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "f17462d3498a43a715ee77ef9bc722e3"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "d0a024bf98f1d8da81db0db729049e67"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "949557fa3ef2d4cfabb4a5026fdff2fe"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "ca2f94f9a20dc7f5709770920b91c828"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "ab4d21e379cbf346dd4152c8a8cdeecd"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "699dce78429ac44e3d765f38a10acd23"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "f003bfacdff9f429c851707008efacb2"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "b0e6ea8894cc81631ef97599b68d1f4c"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "77da59f190f04a2dc350a70299341ba8"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "30d122c064d94c56422ca2818b63b6fc"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "5af57f954b670b5455d547d8ddf24976"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "acc62f338be646f1833ca71605f32cfa"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "2ac6b3b34da5d900870148963848f5a1"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "0e54387fce731916fc9124977bfa38ee"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "19cd0b105dfd1fe3246f7c5223201940"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "652448d06d6b36a5924ad925f4e95e0d"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "ad45e102b72986f394b8a31f7c44b1c1"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "93f951955d4d54a6cfeea762e95f6aab"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "fc9b706ed37010e06203a0b63dd4c0ca"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "ff76590880af4133bb88b85e014bcf8f"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "8ec8317f4c191906b8335664f6d5f616"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "7db34cb0b78bc406247099709b06443f"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "4858300d3db1fd9300e023090d4d8420"
  },
  {
    "url": "favorite/index.html",
    "revision": "baf74f9fac3a11ac613a22d718cb8e65"
  },
  {
    "url": "index.html",
    "revision": "ea8818ed03e127f9420de72e98f6e9b8"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "f167321f7aaff4095a65737351565879"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "1074f1c839e7849eb26d474ec5c38b50"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "a35066a9a61d81b8dba4408c6fb29edb"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "a11ca5459ea1a3f934a231e0fa62e03a"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "b040ef6a7cf3fb7653d0a71c5eb536ce"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "19fc27853183962be420f8cfa6cd25fc"
  },
  {
    "url": "note/index.html",
    "revision": "ebab05da7ebb870979e40a54e1b1c5c2"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "296aa33d31fde29e6b128d1087eee76d"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "18e5be3d38c3d992f50ddcdf74d8dbf8"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "e74de4afcd1c87118e2aecb003faef7b"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "0122f5dba3737ceceb307dd975f706f1"
  },
  {
    "url": "share/index.html",
    "revision": "8885df76d213e9d604db2e38fb5388b2"
  },
  {
    "url": "single/about_me.html",
    "revision": "587eb9f17c4f13e65ddb16c20d275a98"
  },
  {
    "url": "single/all_article.html",
    "revision": "67266489b87e8b4b8c7aa606494132ec"
  },
  {
    "url": "single/welcome.html",
    "revision": "4142671627a5ec1026295269b056f41f"
  },
  {
    "url": "test/index.html",
    "revision": "344e5bddca4f3d20388dee5f5869a9b4"
  },
  {
    "url": "test/test.html",
    "revision": "3c0a6e7bb63f02dde0507fbaf915784b"
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
