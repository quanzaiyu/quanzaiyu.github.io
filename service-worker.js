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
    "revision": "0dc539492db7c01bdde9b52012530404"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "bf3ef7610111e64cce335237e5c9b68d"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "61d16d0f6f176baa61c40c8fb24d9eca"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "d2dcb580c9a458b83fe4be91787dab07"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "83ca55a02d214efb2535c2bbe7581f4b"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "0896f8f58d2715e90698410707970f78"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "d794282c4dfbb5c0095317e9882dd5e2"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "3d0e33ce823fd3726d25e445d93fc159"
  },
  {
    "url": "articles/index.html",
    "revision": "9dd5c2d0dadc2b4bc0f82a7381da5dd7"
  },
  {
    "url": "assets/css/0.styles.e2400d2c.css",
    "revision": "0d3b1330ee7e9015b4005a8423119513"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.787e0bd4.js",
    "revision": "c58fc057131e6c3030883f3ff4ca3d68"
  },
  {
    "url": "assets/js/10.a9529e8f.js",
    "revision": "4cf9944cc7ab2b32c06d2e6f909c4b85"
  },
  {
    "url": "assets/js/11.dc068847.js",
    "revision": "6dbda24166332a72abb4def0f5881751"
  },
  {
    "url": "assets/js/12.efd21c05.js",
    "revision": "034a6500fc7fd7bf969da4a0bf54b959"
  },
  {
    "url": "assets/js/13.d3224229.js",
    "revision": "e464bb8c7ffab7197c38601795ff31ad"
  },
  {
    "url": "assets/js/14.4ffd1059.js",
    "revision": "fab2b88b935afe3f297c4fa1e37a853a"
  },
  {
    "url": "assets/js/15.beedf24e.js",
    "revision": "980828661fd9e896dfeafdd9f4433819"
  },
  {
    "url": "assets/js/2.9856637f.js",
    "revision": "ed9e8a84578c8d8e82a156ebfd4f2f36"
  },
  {
    "url": "assets/js/5.f17ac19b.js",
    "revision": "8c450df304a23b7122e0a3c648c5801c"
  },
  {
    "url": "assets/js/6.386faf50.js",
    "revision": "4b56deebabf30f3f593e500725cdb692"
  },
  {
    "url": "assets/js/7.5bee776e.js",
    "revision": "a4a8faea3bce8a59d2824daf55d85387"
  },
  {
    "url": "assets/js/8.f1f5297f.js",
    "revision": "8c55a158622df6481e81851a92041563"
  },
  {
    "url": "assets/js/9.bcd6317f.js",
    "revision": "355efdbce47ce9daf377696a01f38d23"
  },
  {
    "url": "assets/js/vendors~docsearch.0989c548.js",
    "revision": "87f15776b03956f8494bf7d9354ebac3"
  },
  {
    "url": "blog/index.html",
    "revision": "a823b04ddd75fc16865bcd4e8e728894"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "fd390c8314de9bf0d963f2be93fff2ce"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "89324ddc1f3426685a375fd5e936caf9"
  },
  {
    "url": "books/index.html",
    "revision": "a7ca3f29f871fe3074936065371da424"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "e6ad7678bd3946098870f46426e1073e"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "63a9559c91abe3928cd97d9bbfbecf6c"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "87647f1079e362722b2ffeb045ed50a1"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "ad858d86051c4a007406aa452fc3c2d9"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "4f13b851845621b82c22cfbb940d7597"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "5f10bbc82359eeeca56a5f53eaf91ba5"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "12807d143f8d8e6b406494e417859789"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "ff55e7c82a971d401a771999938c4f76"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "7a35571c91fc2a55983979b4593dd0ad"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "5dd229fc1717e4bc218ea2e55c21f989"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "7292b58fac1d6b6c445cf26b3a0fc335"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "fb6290f64d9a73d9887c467b1ca00590"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "5a4f78a9b7f8b01e9bea09548209a0e0"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "af18bee629a6ce43f9116eaace16ef4f"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "2cc1a9190402c8cdb9b82c1ea0a89731"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "6b07991cfc0de345518501ee13373cf1"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "904bacfdd42df22661a01480323f2fd3"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "365db796ce1afcfe4eebbbedc6e05462"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "709eab55c8233cda3c144518f472c9cd"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "c5b9cf66e97f38e34448b77a0e6fd901"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "15eeffa3e9db2ab1ebce268a172531de"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "1cf80eec3d514d8e283b3d659d616019"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "a7a2fff6dd2720cdbcc448e455a4a5aa"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "5c033c0332a13f11ec6050c42cddeb08"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "383bbc7f005e1418d5c405049bcec969"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "0d64e37ace011bad423ba4796591a0aa"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "cccc30981e01c5d09221b288f4c03d7c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "31b07aa3ea1413e1ac68f2eb013a347d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "f44d02af7a6dab0173954aedd428739e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "6e1c4b26b6b04ebc63f2a797b73874a6"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "a89f0529bfaae03686e40db0693a8849"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "40fcdbd9e830933390d41d3fe3a78c07"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "a70cc1ad30af7d4fdb6d3c94ceaa4df9"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "568fb242bb2abdee36f47b076792803f"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "10f3c9578fb00a20ba12a9d3d1f373ea"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "6b6e243d73fe36ee160cff54f7514726"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "655a59d857371c6825bca0dafc27a3ad"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "651779cb510356ccad2eb2a72900dee5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "8195d4bc158f093cbe8a218e590f0f7e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "e46ace66e6cd5aa0703829e684bcd137"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "0a0900db1e9db9c2acb9964659d0aaef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "998aa2d00843fff6df260b99f19958f3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "e22b52aea639f62360c8a2800d9eb061"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "32f53c606c6b79fa1c77e2785438ec66"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "4a2f7363d9d88a5933008c7116cd9b05"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b36a8a5f5db9783e985d3e8bedf3c6e4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "d91dcef64698cc853760044cf23b9177"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "df47e1bb6c5386e5b3637da1eb7d51ea"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "8777b1309444073ed925fab5bfe8b008"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "aacd6b1a6bcaf337bbe0d1fcaee8cda0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "825453479f2ab0402061900b52eeacd6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "55ecef0f6680054a98bd3f6f46fd25fb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "3d1753b57a6d1f672289c93d926a37a7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "2a1d1b96b56ae6002302a0c06e2e3ffd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "877b0720c97ee03fadbdf0450ff2ca1b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "344aabbdc101ef717bfdd1a6f0909b67"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "dcf176f8f7a12859840fa3f848806522"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "663d69b6c11e922d2a69a3303b033cbc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "de811011127fbdfeeceda825a7f419d5"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "2ad8e10cf30c2d1875c85ed57e4bd689"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "147f5980a9a89f7bb88ccd246e43ea46"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "869e78d62e1bfc7957ee68ea3b6927fd"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "31441f1e62589dba28108aa0ebc9f91e"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "6c5caddafd5c9ba6b7d1e8df7a7d17fb"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "a539f7a3ff9512b36658be3e455298d1"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "83627b640612d7f3b4493940662b194f"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "37d05df86671930f1f64ff16ff3096d6"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "41fad69567004e02dd7d7c1cb58f8c68"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "2942120eff1b1ac0f87a37bd2544b65d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "e18e181e1742f4c8e64336f9c47f1b93"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "beeefc15c5a14cd65b3fee6e403bba63"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "9f0299b03dc4de52ea7fcd482ebf8d50"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "f861984077163f5e5420ccc235aa6470"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "8ed20c18187c2591f191bfa6967dad28"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "56bfcddc40798f122f444a98dccbe833"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "0ea58328ef63dc37755354762925dee7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "23ef35dbced0b896f76aede1ba601f39"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "2aab4c2845c6cc046e79f7f96c0ba756"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "d8426bfefb63a7aab5ab2a476ac271ff"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "c5ccb999c5da77fed88ac00cfa42d962"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "e88b089ef2d2a6792f3509e13f92f574"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "d475f6bcbf8e4e4b124183cc30ec2e86"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "7d0875e90f02066740e10dfbd858506e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "41c0650e945d4c95f5623f513a26a6e1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "7f6f0de33217defa5383a49dbfd04ec5"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "6a4dd7c5d862f0df94f199f91250544b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "aeb2afc65ea6c3307eb8b6ecabf7fe50"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "04c467e74efb0b698038b4536cc0b485"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "76b88821075d79fc5c10c437daee1630"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "eb1a1a892b6b970e40b8d78b89e126fa"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "054a6fced6e3bdd8dfe4ebedbc665a21"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "080d63a1e43836050f9b37a08968c279"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "84df6b15613009410a340fbf0b2e728e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "eecd5ee101ec7113a6b5913791e6e1a9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "e5bbe94a2f00a54a7bb77b1aa23d7797"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "a38da04dc67e2baad47c7a62b0549994"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "a14db33033cb9dcb9196685475b9c192"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "11bdd7959a712de059a597a5489cea81"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "e93cb65762c49451472c8f943400db9d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "40a56c46741cd6caf0dd029493ab4f03"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "58cfe31a2ed513756abf392698e5b40c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "f9e073826874cb187dc18eaec973524c"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "141dc8e6899dcbe90a512d02a91ef34a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "c9e1c762567b35f756c747c955bc9800"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "ec3b1ab4596c37739eb870b69dabc048"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "354e2cc3510840166cc250698ca6da42"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "df1b3e61e164b665cb441da4625ad07a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "cfffe6807425fc96a63cb23862e8c071"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "16f435b19d565b7657bf681de956046f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "5b7544ad6721373182bd9071a9802d68"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "d436771234e401e5e3583eed87c848dd"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "d4befb48dbc083fd0d707f69a336bb92"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "8887bea82973b0ade575350dd3bee832"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "2a0d86230dbaa4cf29ce50c4e0e02365"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "a8dbc64581ae5f7b9fc9c2acabe13cd1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "98f9ae382c78d684b3d29a6817fa8b60"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "820b21c2d72298ced2cc139f494215e6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "6ec411a85d81cbc2c89b1216f0fea8e9"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "1b9fadee27293b9f9d4d3d10ff5a8f04"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "c73d5b4920f872976534d7a57aba3d49"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "572030db6f6f6d5963c61264354ae06e"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "d2be802f3bde04e10a5a4c007d6a05bd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "32a662e4b37161088fb78b8187eddc1c"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "5a292bf0aeea09271f271cfaba685e1c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "1eeb35022f540ab0106c6e1e706ae848"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "040f133ef0e3e3d876269a53be5cb8b7"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "c1547b17ea09dd72584e8ecf354cc63e"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "4dcc6b22a1d04f68086d261eceb50dc0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "3edf22a0014162fcc5be770503203011"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "3886ba0164cb269465c06740372733ad"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "05d5d705d3a3127a560f0b3037fdfef8"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "91dc433eaae60aad0d89060784f53f2f"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "4f9dc9535dbe46425d7e774be1239640"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "c7aa1b3ed2707b63469d93769d8fe115"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "eb3464d36e1ca52f7de3742e8d94e094"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "de5618a9c5dfdd1a56477c7b72c87dcb"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "feb8f65f24b1c37f9670c5206f9aca72"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "620f9d4ee7e88daf0072c8f5b5a0c488"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "f1ebb550ff306f6ff9db8f341a04c92d"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "da7667a0e7681eb65fd47998887ea12c"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "435573e991cc599b3fe0f9e905ddeeee"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "4e8a4c0ff8c4410fdd0445d99013663d"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "433269dd5c5ddadff4e461093c5e559e"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "3bfc8132e9ff8b3e7d14f1d19c5de0f5"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "99852e39f50ba34be5d13bb63620961c"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "5cd06503292f50e05f9375920c4c3f4d"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "98c47008de74d2c724b4a96ac31c13bf"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "56725820c3b73779b52ab6b51684b0d6"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "c3add64619be9ec20d2782d529d31462"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "08b9820117883c9dccba515d3ca00a53"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "2dfeb3479649763dddfae106a644ecbd"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "2a04f6a1b624bd5729e280052ea18690"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "50b660b9280f23f7e4d0145e8d412264"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "852b9d1303368f597fd666ded594caf7"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "3cd0de75ac2bc3d9c736e38d9c9aa9f5"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "d6bccd7798c88e1bc9dc873ede34b24c"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "0ed66ffd0b1c230c1b27144e46dd55ff"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "e32a956750c8e5e8fcac235dc9d0dc6d"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "2fea62fc8592ea2364cd848f73573f93"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "78c6b48c946856133c48f1344d809f63"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "91315c71744969102885cf49948c0697"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "5a6aa45f2d2907134d48647b7fe2ec96"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "8138f2691022b51175d471d4cf4ec9ad"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "1eb0ae69b3d7be08c9d3108dbda7d14b"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "882c0f20fbd7f39029b0b58179c73ced"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "78346a2406feae562dcf8dd5dc5909a9"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "b44ec916dcaf5cd7cdd3b1e91a41f591"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "25ca498e190ff926c378f4f88023a59b"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "2a44263790a2de096ec2447bb96e4a43"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "20c93be70f64907b859c51d15e570d3a"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "89f8eae56a4c8d4ad20b10be6a15bea6"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "d27da7007e3618b4312f77d292d3c469"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "7a0410bf5827b00829a1a3f15f2cf1ce"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "6a0b57a16e1c5e94cde3e44762c227dd"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "a203b99739d8ebba3382bd001e3a18f2"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "7d184b201b1713f578176e0557c38e73"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "399d4800b9658b3c3fb3aa7051b1df9c"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "91e07cd7c1355eb50b11d546f41505b8"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "949227fc9e6f083dad7fa1b5701c1387"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "71300ea9b1f96208b96855133f45330e"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "d964c9c27e3f299658560ac6159eb143"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "ce664f67d72fa7e6e9f2c52711c3a0fc"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "1458c7142eb0f99fc9e659e0ee0bde30"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "51a45b7d0f7a2b42599d41cd3e48cf85"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "fa769bdaf6773e1c05078c1c38a7704e"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "666626c389e72d3246acec8d9ee41c99"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "5b2ee33fafb49dc9d2448ca67f988bd1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "4d22e9f4d9872c8be10c89949a8319ab"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "ec616b474310f0bba1a97989ee0f0e1a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "09884fa981113cfc5ed1212dd0ad15e9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "197b54f56eeb1a1860c7724bfe5496af"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "02c29e05b8c8accabc70775c42853355"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "598abb45670c43a0d17fd5c36176e9f8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "f5b1a780f47e4099ab96ca57e8a648a5"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "2aec8dfe8cecf816773ea40515086524"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "c86ff827cd255fc63b9a6da25c2dd1f4"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "58c6b8522ed884107bafc45137466c63"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "a429134074de8baf32a84205ee8b9de3"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "c178f3cb7069dc7a3d3c1e75929299a2"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "036aaceeb14e3893b9dcbd60c27b97fc"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "7415a74c174aebe6b5198f7b06b5b38b"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "dd00ee9413c02862221cb8cfe423d226"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "687c1df67f3e070d2b097cc49e661b0c"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "ee7418fc99961fb11e6c38191a21101b"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "8dc9830ec0eb6f77bcea0a1d60e58805"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "274f76d96117566fcca65150cb9bc2e6"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "91e4aa10cf978ec9b7027f50c09dda6e"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "51a0cafb425ecbb28ef4b4b7305ab282"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "b314345fe90d0df4b430598ae230d1e9"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "2baf63d39041d688da26f42a49a72790"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "b031166d22f2878bba75ff246109fdad"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "d7956c322ae0b94fc9d187f723601191"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "7b15fe2b2121294e6ca5567703b98020"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "65e975a775297e10de5eed109ad3dd03"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "42a27dc9ffad7bb070ee78b0ad8faf81"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "b4e4210565f0c59cde67902615e2fd8b"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "2bf9c7d923292a0be3bb8d35730d3e67"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "b792942b12bd86a4afeee8f0378a773b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "e3bf1e8c949c4205c2961628d8f26fb1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "9a446b8a1139fe8e87be47b1fbf59a3f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "ee8ec80d48c471885c4c890d1c5203c1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "0a9a29025e284d7294b311ed29886935"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "192496ffb0182c24ef2a9ff961c44c94"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "7c10a577594a0eb51b5da65c7c62165e"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "288e727278c02b99b0cddb1379d5eb5e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "d07b7c09bfd80f3855e261995533a6fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "c0c60e6684b34fd16e2f49f837b222c7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "966577d4d869cc10d93e2b69debe1506"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "97a6be2acf560a79f8a77457c8d77b51"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "684ce1332a480aaa226d34226ea327a1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "642beebbc55fa0b1fc0d966ba37cc038"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "bb113d5de74ac76a2f9d7bd270f765f8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "fd9962af7b8bbcd5cf0420f043b8408f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "8812c48b5c34eecb1089f2de097ed79a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "5e03f035ed01ae37c3628ec09d494c85"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "de514e8b94f663527e9b8912a949c2f7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "5403bf5c8c25afad3a7219c3a2ba7248"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "1b97236cc0440512c4d275aa6375e87b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "3e3c358940f62b8ef475ee9938146b48"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "331fbbb663719ab283f823029fbcbf53"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "48731949dde4cfb7d868b55aa317e0eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "289de58103babd4c4134ad789d2c6712"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "b25b1a42521d931ae1a5c8dce77c43fb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "ab25e1776b6a1d3df619eddf6d2951cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "87815e5d8f83907fe6d40ea1306fe2b8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "bfd441b61062a3ee5b65993aa734f2df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "1cceeefaf2e452a7ad52ebe91eeb85f1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "5e5ef147d35a9213e4b3cf728f23cb47"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "cecc252a50491657486c472c5f4b2257"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "5825c40cd9864d549ce6e73e93b64c04"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "a1e37af0a5441cf771d7af45134c2454"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "0e8264c7ffe34eac47302e8efe7616aa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "ff20ebb41c5dbf1cf035dd8932841e96"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "aacdbe806ab9fe172ed1bc9f271cd8a4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "d6cf48d15c0eeb4273f338f3eb7cf631"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "7cfb19e9f8a98e6ae713cdf7332f3012"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "aaa1e04a767bf0e7db0cfd21b7da60e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "c43ade95129f89fc4e2b036d6588fa54"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "f93786b221f6e812a215a2e71bcf8f76"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "46afb91044606d457cd2843a6ee45e07"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "5ba1ef815982fc44f7c94ecaffe8c64e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "097bd4357eababddd9b8169f180d14d3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "7bdaa0060f010cfa86b486d85f0b350c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "31e439a70861b053aee944069a408a28"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "f9fb1b804d0cf414915d83cad5c5f4e9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "eb486e20fb60956d3e80ac9988326a7c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "d9fa9f3df0c611e715081330d7301a11"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "9ab5ab50f37a556115d5568465464db3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "c412e91eb39cb92cd0639dea7205d5ca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "8d3d9e4a8705dde9c06b15a906342e2e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "9a39318eb18bca7586e5f5716824ac93"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "1dab88ff77c7356e4e6d0764078d840a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "9bc666ed6b54a4b5bbd70ed230c28e67"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "84a1646e85deea3857c40f2e505d4038"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "04f25100f57bd05a69b425cea5f838fd"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "9752747f52e817c50fd2c51c319ae11e"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "24a7ad503cc74ec8798489178d982548"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "4657682d7fcf50fc01b8a0b15b96a1da"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "74eea22525265a659fb2f925dbcaabf4"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "e306502cbc1637f416c42a25fa778df9"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "6af6ae345f116f83fedd53743ae90e4b"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "caf1ee2e30631303a91642cd1865aee9"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "53b64693cd81db02032cdf95fd0d8282"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "ec3b2010705343d72ad3b931770533dd"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "752fa2f99d42b79c61a1aefb9f1f55b8"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "a859b4e070159749fd4820778945424f"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "750c63e2e09c0a79b8e947669efc3406"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "52b180de79c528171f179e6d3966c15e"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "69ce4537d5ef8f614a1346b6d28f2e87"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "888fb2497cda2a10481cfc1e33ac83a7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "105faffbfd29bbf34bb059067f560b96"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "e7a42b4752711ed2b8455895430f1e20"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "da2778a4c6539b2471d448b48e3f2705"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "1fbf35a4b695c0f8fb4f7d86b2d1589c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "24ba6be884455adf03a008153c401549"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "03f6afc862ca4e2e035a4644b7156239"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "58f0eea1f93265a28eea7c954e448d9d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "c4ff74451bfd452bd5a3503525a58b67"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "505a163398e44e6dabe0f8a3a4f5c12d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "9dc7dd930067b7c8d3bba521fe44b91f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "8160ed601732a16ff62a02444fb05cd8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "94210950b4b0a9e2bf9d12affa8037a0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "74ffa2f6d7981e48e0732fc549b2d531"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "36a6d5c52dacf9d60adcc21d2150d02c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "1dbd9f785dde70e337c472523827d9fc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "45f239ddd81645618e3c03f91e152ae8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "bace81b7269048750b24a5268b7b099d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "5ff79957d6772dec21ad53d6ac3c1273"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "69d8d3085f85418575ef9e95b18d0d7e"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "dded18b9b545ab7d5e63be3ef6393631"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "1dea6315137f418eb981ec1a11abfcee"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "8e465c0364b5e0244b7798567a089fe9"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "b513d2e384134d595b65e77a597ff9e4"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "e681bce6e0563e62b6530116dde8d0a3"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "701002d5e2a711bad8dcc5e34cac4d9b"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "2ece15e9ec14e8fd5ed0cf5484a17d07"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "aa03c3fafd307ca79de68b12de37c814"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "6838b30c921df19d5332353f5a4f3ff3"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "1c0ba1600ef8f7c20bf909223df7d5af"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "c1dc8e3c3e4a6479cb630f04751c81cc"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "016720bfe88cfca73308b3e6d2af2897"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "ae4e1a0f3797b5319a84175047549491"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "34a723b3825040e00da353273ff4f187"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "ff596fd02f8abd5da72f6a558a7c689b"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "a44633afd623a765c2387916bed0bb91"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "27ab7e13b26a1ddb75afe22ab6006be1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "d5acea05686a3fdd8ab79abac654cd20"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "d973d6beaa6e81d8a35e280c6ad61bc4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "32f33762cac597f8de2c36a5e5ce1358"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "8b8e859ba3b20fb5c9d18812f126ec62"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "0dcaf80272e0583b6d4dd04e26f88517"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "1bf350a826cf191850fc301ce07b2cc3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "acac6232756e9ce885ab0a9014c71727"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "834f8d51a3801426b8b17ab214b2e4b0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "8b05cbdcfe55487749b8638d2c80eec2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "80af1a020514964b352f91de2078bc9a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "a7ef2c0c87f3a8ecda8af1f3bfb1ef27"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "94f0a8bf450d0166ad64e7b71cd43b48"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "4c37a0628cea7b75036ce86ff0364f09"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "b312327db1987b691b6619338718543d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "867f4dc0294b3ad94900fc4cb16e373b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "2de66336bd3cf5fb7459c1f776ba3340"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "432d0b9598adc13364d8d74d8865a802"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "e63144860d8579288b542fee76da33e1"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "daa8082f421c3ff849cba218e5e29fc1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "f0c38fc5f44dd77a43cf61c5018eb2df"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "0dbdc13194cfa140952617cf5ad474c1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "01b4db64ff5a54c4a9332bb6c1740c11"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "e9b7bc894609be5abc0e5cad18d89de7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "0c34d47822b790b233e2e3be66e7f349"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "7f1831ad644825b2cf7b2abf7cc55934"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "9f992f10b6ea85dfa0af9465ee781f86"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "0519d3c12840026838ed8544992a36b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "c4c5e7d31fdf44b9495afb22fe35c73c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "49cb3e5fd6f83ecf3493fab1fdd53a0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "8e15feca755e36351b82b0358e338966"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "718f34e6ec3e5d10211c5b4421fde62f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "be4c1db21689e8f4878c16ce90859245"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "8d7fa9827b1a13e89f88e1ca26149b10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "3d907bf40abd9c4e2dd4a2e01a0759cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "a6abae76253a1ccc332f56faa917096a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "b3e32637699b5978b29fad0f2361bfee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "94c8012dfd5da69e76b5cfcc98825bdd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "a5791145a7075954341a4dd61f7b4732"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "f7e8daf514d25fbd5aeed96094c9fcdb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "805c74a5819ef3920df7a98f0455aeab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "1b3528c33d99c4b70b51b687b358d7b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "2d05a79ecb2adbb451a05b38d2251e4a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "285e7717aa314cfc617f6b06e10130e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "b73a86391f01c58e970d11e0ca1f584b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "6ffbd3adbd0713a21420b42f15d7da02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "768a8cb171e15d7d577edcd025ff1f6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "23472f0fc4b0c0f385510f98ac5228b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "b9ff61e21301bf588cd1e71f8b676233"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "ecc15d535302bcc3bd58e5b03f1dbd45"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "c2c428fbe844ba46161e0e90731ba8ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "0d265ef0d6647819bab829ad0deb6750"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "5dccf7501fdbc21a6002025fa40b9497"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "0af1e695b9491940bd745e767cc4f646"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "b60a69e1c281e81bf1ac532d8f9afba1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "ce3bc34f536b64fad445f5027d44d5b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "722187680089e8c95e4201cd6f4a8ec8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "608927a7b24cd160b988f870e05d39ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "a048acd4f4eee9c4f29ec31e29a25a93"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "351b4a971c0b30b5ae84d13652440130"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "68c6d0067aad2c7ad6505382a651a24e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "e8459811ca39bda47ecc8c839f674abf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "ca1c7bff87fbe2bbe6a2b3a290e6a855"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "aaa3862eab2d2310337f819d6a3547f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "6bcfe6ab6e0b4091d995a045988242bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "a9493bfb1d55b64f1b35fbc2835f4bca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "154ccf1a26fea670beac0ed9caf3567c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "8caf0081bb27dd0053da1e3f3551e99e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "89c615e7ee68b271ab5680f8d8fd027a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "b274a2f7231caed71e1737171ae6611c"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "9e55ab02c4b332074dfb8f65e9b44b10"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "9eae8b853de4f45474f05aadda88068e"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "87a7d49e295f8c6f67374daca51235ed"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "71d48d38c0779f00f33340de1561b69e"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "6c540d62e03a68db12e83b2b612c1847"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "e212c4db77d15cd925b6ac57764134e9"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "d16919ebeaf7b6a50becf20b17927b7d"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "f094023e1b6aca9c39577f27ba4be212"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "f3899d46b9b46c25883421676d6ca6fd"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "c9ab93b3c95149e43faad7df729ddf4d"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "3a42bffdb84bd2f5d2b73c7ed48d8f3f"
  },
  {
    "url": "categories/index.html",
    "revision": "433dbd4b12dddd482a190a450f319f2b"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "9182f6cf2e498cf6fb004290006dfa44"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "3083ac1d81a5889c9c565e7cf5172376"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "3e6c8a470d84f4c4f221299eec338276"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "a046a1f3a8f42c72b5159ce29e5084d0"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "d3d5969e20d50e7ea6b112a94a8bb963"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "62d2ff700d4ef1fc39fdc01335053d4d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "97c73df02efe65fc2983aa9e64d4380d"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "563c637c864dc3062dd23e8a6df68642"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "91f906d96bd4f01dcf0574016ccbdc1a"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "0b855c3785dc2b5f558b429e3a7d3f60"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "e7c940a6b4a3d3dd4fdc247c71e97039"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "f94369a0862f334c3d19d88d0813f173"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "fc657f3e0a4561b9601bf6a44ad98256"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "9058ce32d93afccd64e265b62d6b9f11"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "36193d2ccd418fc333449cd38a78f750"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "434c5ff2aa1319e45be4dd676a364eeb"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "1fcbcd5c29b9f6b25e1954d91d5d47e3"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "858bc258d0a16c5b45ff40d23f00a083"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "2c5d0cfa4d2f6be3efc233a683016997"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "3c10e6b2c2325c6d8c36ae1d521ea4e5"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "6ea37effa62624a749843cab42e42b11"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "c85e2d91f80c255e259f74e78c4f1da8"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "5b20db4c9fc44fa8e1d76fda2393cea2"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "b003fd4fa08996d7566768b373ad9332"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "a2bef455b691b9c05c854d283145bc34"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "d4bf2ed80cf6809eadb0b9da50ae8bb7"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "5dcf98ef6b1b6c22cf77cbbce6b6b42d"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "0cb2f3cf1a2d084945cd7cda4541f346"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "c55e27bf0395227191cd5aacde5efec6"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "4ee6829c7da6cb548774a5f52f521a51"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "3072e033c1c07a25ec26f629343b5cf6"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "0325bdf64de2d51495a3f6e70157e1bf"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "e9f6260cc206cca810558fd509368eb3"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "1f812576690c4409e2540bba53409611"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "4b41be1ec373279d62a0ea4610cfa1a2"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "2e666e424bfc77c7a1d034abe7e6afa3"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "c4d59b5ac32e12749e44682f50b2f954"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "a51e1196c325c20cd20cbcfa0996d7f5"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "6ff885ecf36a84b36bf4e2bb2add1d31"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "bcbe03f037b9bef19bd792725eb32846"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "924acd3c2ee5d2650b7bc919a42d2506"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "101d9a094528be918fe422d77d438719"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "d20a352083e1583615740768d7095e5e"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "e8445115f922e81f3f15dba05c6e0ad7"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c8a6213411b49030c3a344c9b6b6b137"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "b9f6d3adee143ef3061575709f476973"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "63d200505abea3ffb2d38532d06e9c1f"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "43588f5553d636ceec1bf1f250d3189e"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "80676d1377e36e08bb1861cc1eb4cb47"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "bc2176b95bae7dab354109315e2b8e7a"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "e9e3cda9dee107f1735316c774a6a1d8"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "cfd6c5ae821ae8f0cc4126da7ec1fdd5"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "87e9975f77e50f08872f60cbcd8d8e6b"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "61a4631a02bf8217fce31daef994a4d8"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "251777f0e6771e04c88353b8fa7d190d"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "0024d30e15e5d9d34e41800d4913769f"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "1dc25224a4f112b05dbde2e4a3a6fdd8"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "fb1f020642985611f0d0279b7c2aebf9"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "3eb2bcf34c83eec20e2c1e70e2549a5e"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "ec11be3abd209340c2aa9209cbab797d"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "71a436543938a99a1b58175efd3e5e41"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "33a06f9438d52073daa5ff801798f32c"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "baa12778bcdb6d06f99756ff31c00267"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "18b0192b3409fde5e91132838576497b"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "73116287136e8e310264edc879a1073e"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "55e2ccab99527255f43ac6adedc2c976"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "e6b071be5c05f24a9115d531dd767b15"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "38d0241db9fcf74a425fc37e6329248c"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "2435de96cff90eb5276b26e3c1c4f923"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "e375be009f3fd74a827df232c2e1da2a"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ed2d7edf58fc7c6a05f92c7b5c54604a"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "5b0bc1f87921af28888bf6581c3b2478"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "60858116f485b61870fca3ab8e22c948"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "8127a76015d32a4544b747fc859c0d31"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "67cd1aaf2c8ce5f2842903d1fff36cb8"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "5dba40e4d2c453765000260bd6bda00a"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "f06e6844ad19ecb7388e129eb16e55fc"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "6ab4746fe239a2184abd5dcc43476bcf"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "2667cca2d2b05454c7121f144026c40c"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "2cd7240b2029b3939de6e62e942628b6"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "efbd19c5428c83b765e47b474d8e749a"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "8f628cfd44d118820ae09c9dc642ad5f"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "239523618590e97db4578cb170da9e7c"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "21775c67847b1cd0ce166727933a26dc"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "2cb92e3385c29ebf3cdcbe7de9e9e165"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "fb7abffb7b2b22d50a5722e7aa2b6a34"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "3cf0d3b96f74a4ae1ad0af87de1b4b63"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "48d83d6247f5e96ebb7a28a5a28d6a5e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "3ecaec46fea0fb9bf49dbf80e1455360"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "931223a7a20b904468ea506d154b82a7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "d7d06ff9433fd7bc7ce2d9fba7b0f0f6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "9ac5e314f101263c8346046b87701132"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "265d9caca296a173aada52cbde501477"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "9131c1ee211b57d3814bbda1f756d5e6"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "3c05ec87cec00c55ebe6a88c42054d62"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "65a5079e171f8016369bb3129e004f6a"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "39c603012e6ccaef1c957268d74efa61"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "50d2241f21a091bce4d29882e52f8dd3"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "e6bc51ed357f860912d6a746c83bcf89"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "3099845711e898e18ab7e17718988748"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "f575154a8223a174919b831dbc0e93f4"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "b4e5514102986d83dba8f3a50f82820f"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "b735b18d51e6aa8b50d6d02305def58d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "c7d32782188ffe15efda5b904f0950fe"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "e4ab3d668931a8c8624f28a41a5cc334"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "755447657136bea2ec4fafae761a4aa0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e568d3eb2f4a57413dfb7a7aaecf24f4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "a5cfce919e2516c7616218ec9c39b1f0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "45a771173658690af40caa1790677f70"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "3596778f0e83dfcb2cfc3c0d09a1738a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "db7ec4bd369156ea8cda2f4d5dc7675c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "55a56d27776c967d5c2ed8c3632b6d7b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "e15b0af01eb2d7302bb09617f330bdd4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4d40f3315ac2775ea100e2e65b727b89"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "88e760bb6915414a52dcbf1c84a6e981"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "c4eca3eaff3b6d9b02ce88ef23a5ad98"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "f2a25a588a786af209e60ab3bb443baf"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "e49301f57d840ff6f87110825acdfa9d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "68b07ab80d93f012db361e8c1acdb2c5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "156dcb40d14b944d88e8d9aa39786814"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "bab7c1dde0df5b14dd80b838db0eab9d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "0e7c9759e68f586382c3074b4309db1c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "0a36f4680d8e6b3e5722cb1b155681a4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "d2aea0944efe5aae0e9375e4dff79e2c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "fdd234d0ce72ee4e652937600222b973"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "e1c4d300efe4cdc90be89a7bdbc2df94"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "b23d2f2d345ba4bd06cee0a908e3a0bb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "7ec756336671303e962e0cf2cd7c9504"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "948e4c6cbd5035509d5e0db417b417e4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "377824f9e40269bdd3c73b08860a84f4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "e22687722af2ea9c2792019015865c7e"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "5c61e82aebc37ec51bbe340f4a031d8a"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "eda5f3360e4b3691406afacc422d21c0"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "65ca4c897a21bfc2993fc135d242bc66"
  },
  {
    "url": "categories/os/index.html",
    "revision": "7a14965b5f8aadcc3d8e72aed90402ad"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "ab99c830db35b11a8d29bbd4defccf65"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "a2c82692a94a4a6f58cb446e8eb63b1d"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "4baf83a88516bdaec13e92fa376df5ce"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "69c67aa8d3c2bb5c461bbfbe507cb7c4"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "57dcae05f2e5c639dd9d422af0da9fe5"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "7f612e885a5581e9e930c130991f757a"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "02d67537c0c5ec03c97847a2e08ffce3"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "d0c42cfff534214f502a1c672619a330"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "1ee8e4ce85a7e50e155da0508776e3d7"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "90abedef9b4245125ddb6acfa4dcd9f0"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "2a5e9e52bafcf0eba32e6dc132bd2268"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "9cca512092c305dbddba547fecce3c77"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "993de892c756160f628671f23a8c91f2"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "c3566fed7480315cc2a671d28fc8e30b"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "f489d523a53c0b41f83985aadbc38c80"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "3d64995125bbb2393867f2947ae3a997"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "b0f1e8adc5eb01c175ef178c3fc73c9c"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "fd960ff95cc257fe299d5cd378390b83"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "0a59e51bd20af9f3568193bce87735fe"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "3db3d75a44b7c3544c63f1b6dd7c46b1"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "df77fa9b0148a54061e40a027248673b"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "46a9b80d33f3447faaf2d1c9cdf28f47"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "21c62a8ae08ceb5594f8210e0aa49ee9"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "dd4a058cada2c8a5a27af7c1e47d49a5"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "fef8bb9073791c89ead30a0dbcafc0a2"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "651b0fd7e20e1f09597003d2f1e789ba"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "737b9653c5a3a1cba5960ca091e833b7"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "e57ba63b4a8743c9f7cc00867222e023"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "1cfa2b3238f687398f23d124022b1176"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "fa1cafc83edfb58d6a3f0a1000fb6de4"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "3e15681290abe76ff2e344ec3a1373c6"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "04d680d0a9f3dfe0d55abc5e98bc7175"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "ee4eb9298d8b0bfb1e60ad8b42ccca6d"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "5c5610d383d024d1edccea215ac0ff27"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "e41ffc20056a2ae92a96f24717135b92"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "964d4ecc2862ee2cdeabe8005627b351"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "25c8044e25706a2dd6abaa51d7009473"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "7e5e3b05ef19d74a751f1861d7b7e818"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ea9ea0c318062a847670e61ddfdc53cb"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "b9089df9e055a7eafd1043bf925b4666"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "997d8704779655f3c0eb57d52bb33c92"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "fa6ed5477f36947908d4e7711e95d2f1"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "11ff880ba81d0f5401ee98ad9af6dfc9"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "bfe5ff784738a23d6c33ee092647050b"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "a72231e7ed7bcc0bfa31f4354d215bf4"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "7b47eb78ebcd32efdecb6ac9e7f75f93"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "b27d2fc7de54f6337f3c9f41c02d9de2"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "a3724b3bc6cc75bb1da09baac0751a01"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "87544a5a175bbb9bea3af1b0925164f8"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "729fcc91ab600ff3defd524b88c4beff"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "39c08a56cbed25e0ba31b5fde6421bf1"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "dd4d4d13c55220ce2c34c99a42ad61a6"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "05fdef01c2423ec46dc9f1196d35a0a5"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "fc9ff01010e8d8f22097c13bef63c215"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "6d2a853bc4ec69b66a07f04ae9cd7886"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "4d4b24837a99c5f82a6772c635ffbb75"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "ec14db3b22dbeff7372b384fb587d779"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "cc91335ffa51c3b8e7eb39cea834adeb"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "5329eb04b469aee0899f715c1040f211"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "293c9cb9ac08189588420e6653e3f2b0"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "35525933fd2366e9040048be3266f48c"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "394a8464c702a6f6d0d19fa9ccec70ea"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "085793106a871974a4a90b48fe474e43"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "d2f625c37c4366ffb3f270b7757798e1"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "6e2a22e4c99e44de8d88af96c5d7ee86"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "bee3a54cd62e6c144fa4311e93c1f02b"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "20276d7d184dae70e7798bff6ec5e9d7"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "a69d5baaab320fedae5723105b4c5d24"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "32a09e4b0f3fed283862f4c7ec212337"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "299bc4d771faee6fe7d572cc269cbe3a"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "f28b144a419d5dd5f7064e12e5652eb9"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "5369fb01dec642731f85aa3ab4ae1d53"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "95b8d2dda72bdf1f74ebc06762d8aea1"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "656616765447c9a1afd23a5ee760d7b6"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "75622faea4154d166a8f2cea393496ad"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "d44dde65732049aa5db056fbc1d76f74"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "0c0e9e56eefedefaaf18e838a773e69a"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "9cc6e4a1492c8e2ffc3a10cb823623ee"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "d600c13a416b27bbae3db3f812c8e353"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "fbaedc988c3b22e6a98a5380fc27c6a6"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "636fd4e97b438a82bd2fdcea4c8fc02a"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "52450a73ca005466eb7bdddfbf56221e"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "8903ea07a8db2ecce1c2e960171b8350"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "1dea23c79e983785ad7b6fe30d89e8cf"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "57dc9b40757a717fad2f1de25e4b7479"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "5c3a88f0a96b43d27f1db582cb6df579"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "f4f3aba60bee401fccf9dc3ad07c1bf7"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "6c3040b6956948b296a04fb9e4818ea4"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "34c9c52a7cde3fbdc2a9f137a17e408a"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "6c562a2ac81f93d7a8bc40b56ae8d717"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "59b89e233ddc9608b4dfd7ed608f6404"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "9438fcf542114e2e43799f615a4f8764"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "3180c98ea7fc6290e12370e37e146ada"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "6f4abc64c9bd0b0e20c39ac8136016be"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "3ecf22d62be0607e0a5dc3e5c6aebff8"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "7e3e4c5e81ab37f782dfdda57ad78a6d"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "fcf027de75bb89937042bd37a93f8da9"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "026c36c05840efcf5b0fd51c90472872"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "e9504fa50d7bfc3154021d83e16db91c"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "4fe2a1e4cffa7a595a2466d54d2ed315"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "660f826828764e4a1c0ef3e67a8e5a7a"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "25e50df98b048773d024357992177e27"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "63ef757d4a45d880fc15889866019483"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "3c242d22b30ff55f92974822de726576"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "cd714812e764f34a6478c465f79adf31"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "8f0b07b5295ede7eeb5663a7befaf535"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "b449af90bdf93c405191ae9c42cadc5e"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "47e30fb4c5079a7c846ab513e8f31aad"
  },
  {
    "url": "categories/php/index.html",
    "revision": "e2bcf49300e600a0c3a7b5f55c2cc55b"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "77b4a5ec39babfa9f84f34a9dd2ca98c"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "d1ab5e0cd2e0904943109c918b3c216e"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "5a0ed49bc237ce8abbd3b170b5a83e93"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "7d9958e7d9b4239e82e502b677d4732a"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "b43035c949bd7dc68ec538a96fc593a3"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "86a4687b150096ffdac12185bb82d8e3"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "4bf1491244545c07be3f8c804b222145"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "ccda8e6b157aa34b2f02bc85763f5050"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "ce458a72f3a1a9a172d87447346f5477"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "d50443a783b58211e0b4c0dce08330aa"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "4c3031081593d9799ebcc4b55e24dbc3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "56a59a40ea0bcf70a24c1ce2bdd2ec96"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "8c7bbfbbe955e6dec8550c04abc339b2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "2c7ad3d021c27850b8bd30c634228bc4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "4cbb44c0788ad839f2a459f67ce9a144"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "71ac5e6199d2c48154e3fac8c84aa559"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "081fff8b382b73fb839292c4d3e0e36f"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "967f388cfbd9201ef98098ef87a8cd3a"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "39c7a021f157d600daaa9fd91f2e32d6"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "78ad81642542dd3654586d2e151bf9a4"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "29bfef1c21f1fb9737c2d0965107bd57"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "c58fe6769be05c9a167e84d962c6c8a8"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "21211318f44d169d98d10816df56254e"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "805201b26844720c11c2f30ff189e55b"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "f2898f06cd7d6729635a748614aeb33d"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "fc9943d08e21bd2817797d01029db162"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "4072f86807a6825de9dbc0fbb7c97da3"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "d8d7640d453a3d5a7fb6578f04c067cd"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "0caaa7aadbcb9b3ccaabaa950d3bf9e7"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "959d98127e047dd222f55da09cf65156"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "a1a1b8d12629f1f12f1c8c99f7b37b75"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "149afd16eef9b59406bc5d261abda811"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "574c27cd0b901cc97a6dc229429eb30b"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "385ee71ea0f6e81ef15ee712c09355a7"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "f06fd52e7499cadccb92b1f58f5b86b3"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "98ea86c148767a56c3814a7803a1bea5"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "2a5a7e110ebf91f4b5adf8d96fcb9aee"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "da815a66ced76f8715a9195ceb756b97"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "f1648c19f25952508f7b876d60a9c80b"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "b0ebc9e37e9ce2c3a65cc8aa0782bfbb"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "94266e6180176b2fdedd9ac97d119ca4"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "8aea3f4ca4d0cef32f80c985c72972a2"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "50279b7cd5b48132d93d5061f5d7468a"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "b423bd0741a0e676dd832832f8ba7682"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "11f370ab16120b15562f443190cefdc7"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "5f19bf18e64e91bc9bf8b5ec68de1603"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "be87e6333c71bc834a5339624b980c5b"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "245fa234cb31ba7d01346dbe4811a6d7"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "b855a7a9f2de1c1caef6d525d608e7a7"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "42852de7cc642c176d8d5524fe7a6a09"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "5a2d508bacb47855f06da80f9bf05174"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d7e3cf0eebf1459c633e99ad506fda38"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "b9c52904bb79dadef84e97be70ebe4e6"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "afa3c4cd6569fe02db5c28971bee2b15"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "4e1c106d73c0f9925b357aeab8bfe657"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "b7ccaac9064d82684b5349da8802e073"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "2a74899b066c460fde6bc42ebca3646a"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "f89cd63772b18f7ff6a1a8d43f39d3d8"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "3e57e2188913ce7942fd531f5ea1f903"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "8080d9aefd712171c0cf47383cefd2c8"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "6735506ba3bc10dee8b4afc9e333f0aa"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "dbffe42ce7800c97686bdcdbe433b49d"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "d27cba39efabc8619466c08961934924"
  },
  {
    "url": "categories/system/index.html",
    "revision": "db242c09fff395f72e4402065f30118c"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "6df5916da642dc80bce6220f06124c60"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "42d9a39f2bb6415eaf5844d4e1aa04c4"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "a7e118a4d497011f577bea1a77df767a"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "464adec4ab652497bb3897322a04fdd6"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "e38f91614ca24c908d4c77f4a0f95064"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "089183245a94ac886fc220f7f71555f0"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "11cd34cf7c7105edef8c80d31373f35b"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "8d62b7625448063333d48748279a32dd"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "3b39152e627521e84fa2690caedeaeee"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "53dc317910b95fd5634da233b8a1f2aa"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "285320143eff0d8e65bc00495c2670a5"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "88d31aa092be77438fff9d1ae8ac9d5d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "fe00eade076d07676ec3a765fd21d043"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "a5551d0e1e679301e8266b35ffac14d4"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "3562c187e22ee0089b35387c865cf65d"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "c2fb950d5b57166d76f033383790ebd1"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "dd9c3375427eb07367df7910b1262c22"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "289bceba70cb19861cade7c061215220"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "c6e16e384f3eedff796165d7a5100e79"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "58330b477d4e241a270deae209f5d9f7"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "4962b0389575ae278673ace3fc43f7d9"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "628a9936f194bcbaf7dffb7af01a63e6"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "015e8188957a91edf9109278d2783082"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "a1e2c672e63e65fe79d5983fea344c41"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "a775de6203f1d5bff5975649346ea3ce"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "7ab3394b0619c1867ded4e7f6cdfb8b1"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "f3d86c91978aec29fc82c487dac202da"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "5534b77aa199752071969ac654aa9a70"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "2192e2521f0111a1049f9631c4c98770"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "6bc540daa09a043c3f41fd1cfb6e1bb4"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d3e58ae5cb6fd80a164430b09c60a0fd"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "13a04d381c8c176ea9373a5e37402e31"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "062146fa8d5f88f473dd8ec57916357e"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "c8d68175b282b8e30b295c5c76fcc65b"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "be00f555f2fc8b73c78ee61d0bb372b5"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "8249b4accc51da8796c56c9c08f6fa75"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "57376442df9d84465b717012306ed275"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "664d4946a7bf9fe9bd379a5bd0d70179"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "adc4f02fd4fa2080c1cb1f478cf331ab"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "418362336b86b0793ecfcc1322d58459"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "a4f1e5e382a216498abbdcf278eae227"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "7ac23f90fac737f099f1069bf4fd4a77"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "7bf0e788942b9d7f13331148736be475"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "a0ac4cb5e01fc25b44a9b2b40f33366f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "ba5da2016625cd1650db4e9575a969ac"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "36ed7c7e7403034af62f0e2222702070"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "2f04778395d082dbc3b6e1d53523e1ca"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "8414ab9ed104d9e7ec78fbe4e18eeb7c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "a75f050add9b6d933b180a199b4e71de"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "432b7783b1ec6149333056d7aab088a0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "e71f5a79474eb8ab3c6cb80b04e175e5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "e1c916503e37d322ab73e9eb6b43cbe0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "dc074857eb0b5da06fadba2ec355ea09"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "da63a47d14aa999e6cf52644a375c568"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "4de0d6d00ba5ca17727ff57cb95d6cd1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "c673760acba9d410cda4fd970edd824c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "4850b8bfea45e6065395499c7439a7c8"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "0e131f113090c6dd6c0bb3799e687152"
  },
  {
    "url": "favorite/index.html",
    "revision": "194f98721467abe4faa2e8c892690513"
  },
  {
    "url": "index.html",
    "revision": "9b815c2918b8badb7df010ab8a276bb5"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "013c2c0b9e18648b3091217213e5bdde"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "d48c6c28f7ac5381976f1ad28d02b3fb"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "ada5ab38bcea97378bbc4180004edb0f"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "c956f192bc95e0531a3d6aa26d39a1e1"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "e75574ee6ae07ba0fe754612a92b3cd1"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "5a43cb3f4b09940acd1e001ef16afff7"
  },
  {
    "url": "note/index.html",
    "revision": "bc3b98cbdec55ef23785f866c603c5fc"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "696497d1a39bf8d4fa0f8e67373496ec"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "5807d8bcd9c79510cd37a21476af5ef6"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "9b7f044fe349d0981741ea0101c4f5ca"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "a7ee7842dd30b81aea53398a3d4dad32"
  },
  {
    "url": "share/index.html",
    "revision": "c2b0c4f30d700f4dd349cd0453df7583"
  },
  {
    "url": "single/about_me.html",
    "revision": "9fb736f2d3aa6d750856840e5193b946"
  },
  {
    "url": "single/all_article.html",
    "revision": "8a90b85773a2ed2d595b11d2e729a159"
  },
  {
    "url": "single/welcome.html",
    "revision": "758ef2e97c7b2b853fc71f2589b64964"
  },
  {
    "url": "test/index.html",
    "revision": "499df510e3fc5698628bff0dd1355b73"
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
