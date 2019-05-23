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
    "revision": "83778b767d3109203479b316a90d38f2"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "66b81545309276191a93fa36b522af35"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "07a3e0dd8f337ec121b00d484f96cf14"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "a9d88f6dc33160c518504ce3f3411c77"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "b1f89d3ed54dce58557b8bf458f9b62d"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "7614cf12a74d22db437c3db0eb45f725"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "ee519b4c90d09270445c360c25615c0d"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "341a11086cfef07ca698d13e356f4dcd"
  },
  {
    "url": "articles/index.html",
    "revision": "08e910e59f6485c7c17ee625c02afc8d"
  },
  {
    "url": "assets/css/0.styles.348d0f22.css",
    "revision": "228345e067e3b0d5198ef53ed847c2e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ad83c979.js",
    "revision": "740a7fedcef7f86987d08e1ed31e11aa"
  },
  {
    "url": "assets/js/10.98de4871.js",
    "revision": "f97c6b0eee8e8aa0ce35e61e0ca7aaa5"
  },
  {
    "url": "assets/js/11.8ec64a00.js",
    "revision": "5bd4faff8ef21cc8f4e7aea82ed0d369"
  },
  {
    "url": "assets/js/12.cd8fbbc0.js",
    "revision": "9185712107a610b2f04e5c86355f0b4d"
  },
  {
    "url": "assets/js/13.a56bde87.js",
    "revision": "9835cc9b6801dcf9b38604d52f6f6342"
  },
  {
    "url": "assets/js/14.45d6b04d.js",
    "revision": "283c4231ce3e4d63c730870f1c88c340"
  },
  {
    "url": "assets/js/15.45ec049f.js",
    "revision": "92aee1d838a148b4496aee81a171a04f"
  },
  {
    "url": "assets/js/2.03da1a39.js",
    "revision": "4b767e699abec0612f3ec8cec47752ed"
  },
  {
    "url": "assets/js/5.6792f089.js",
    "revision": "84c4b8c824936c52da577896b6d765d5"
  },
  {
    "url": "assets/js/6.20d580bc.js",
    "revision": "1b59eef5bf1372091a2104c9ee06f04e"
  },
  {
    "url": "assets/js/7.f397debc.js",
    "revision": "41a271cd9daf8e53b78ca04f613ea052"
  },
  {
    "url": "assets/js/8.3280d132.js",
    "revision": "18ac71b81cf66f1d52e782dacdc6920c"
  },
  {
    "url": "assets/js/9.e99af05a.js",
    "revision": "a5c42a142cffc10b29f2aabf41431385"
  },
  {
    "url": "assets/js/vendors~docsearch.d551b0d4.js",
    "revision": "d325d73195fb7f5953fe3ae7a87b939f"
  },
  {
    "url": "blog/index.html",
    "revision": "e29d69b8ad2de774657cdaaa84cc187e"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "f28a9e509b544ad3e8dcb90e64e7ba14"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "9e6bca9214eb9dfe6e8fa49eb662728b"
  },
  {
    "url": "books/index.html",
    "revision": "22227b1b20c7cd7de1ca5c72e883fa72"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "6b85616640e98aa1b5da6c5ab82771f9"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "d230aa3112bb2848400a275e3c4a2034"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "a4b4506da40f8e0f17039cb3ca559191"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "0a7109c27b93bee2ba5569ed3c2fdca6"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "3406b164475e07b5674ed56f82a27c0d"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "98af379885c9a806a64e6035f4e77786"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "2c4b17488c876d439ad419c2c772b1ec"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "0131ef4470a121478423c27f28b64c69"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "e8dc54617cf2c3c0067fd5c01ab49b90"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "f30aa2becfe9a85f45a32b13cec2730c"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "591aab45e145a9e23567f26142ab388b"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "11e4a71736f5a9f373de1250c5ff7c05"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "b4b986cce941736bfc8db1cb0eb09b57"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "2a446a583c31fe2c662ecc530ecbe14d"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "9c75e3499ca4abc6c335b0068762d60b"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "15148067d593540ca76e039b1f5ea098"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "91dd6729a82bcaa95f6361eac0a3e135"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "afd1ac4dc9b7c68917c7769355351543"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "9bfd11c4c2f3a93554a68dd653d03cd5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "50cd128708e6a4c20b4e005f8ce71fa8"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "7f478378f33361a84eeb91b5f6a42ade"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "d8482dfec0f7ebdf93f8208c90b2833d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "1024a9e3b3982b5941b626fcea5d4427"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ef0bc75d4e1545b5183fb64f745bb5b4"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "a6854a8b1117ecfa75f02df5f7f02b4e"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "6a87a15cddd5698f2adcfa0dacb1edb4"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "349859d8ea10bc1ab3f8e56142d3f6d1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "5a9b8ccd3b6f1de3d88737f3694a3d93"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "eec49fdf1d31bea59c8560734b37b51b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "b198816982f0506b743eae61ba7e59ef"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "11d085a17df775fe6b8d9b415aa07f4a"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "fe0fc876fd74c028f34be9d349796e4a"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "a2ccffd415cd16a8ba70b66205c9e4bb"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "d808a8212b5686851174a1ec8a0cd107"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "2683d63ebc1acc4242e0fb44c8699edf"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "2a363dbe466e6824554c3282362b7e70"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "1a334dd35fb9398bd05099588eef4705"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "31fdb0a500012baf93dff3a13ba7da54"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d3dbe8920e1df69366bcfebc94456bee"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "7654b4ed3fe9672a994e2dc3b5384e39"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "e386b1e60d5983ec9e250a57bcda1fa1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "69949e3d4e268b2fc79cee41b514456a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "aff1474bd9444a7e9e8e852679c4d77a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "b3c57f6380bedadc9c1f7d0bac480b4f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "e7ad902d58710cee3f72898a63fa86d2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b5dedd5f989bc6ec5162d1d5c466f2df"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "f00fb3c981e5c066dbf55447d4f8ece2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "fe7f36c0e2b2f003f47e98538b36e820"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "7c1dd54e022750f40254f4806fc9cb31"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "8f8b58e5daefe35f0c8833f26daa3c44"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "3519d763ffb69918dd76a3a5024ed6e3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "aa83541f8ebcc8e3f77baff5f5aa5b93"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "f93cd18083738603278989492cea043e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "cfeb562b805b956b482cb141a5c98bb7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "ac4856ce8042c113a70de501008855c5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "886564b3161d1f703849abc7e1fa3a6c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "dc8a6175fc555b691bced028620d487a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "fcb4d39543025027cc84339fbfb72015"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "885ed15a2a623fcde4f507fe85640a9e"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "a5c24fb224b2642d6dde3c99f19d9228"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "392ca7e7f96ebf52aeb35cff9c51a243"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "33c54ef56ebbf7cdb389d48051dd7501"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "ac41babefdb9f2d6dd59dd2c09b935cf"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "922f98672d3215a9a2aed60082bd5c47"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "48c9736ddcd4dfa4c0048536c736584c"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "048aacd663088e8ec064eb133872e510"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "96751ea6cdf68deb4ca843979badb778"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "bff770be33e62c067942595c42710bc0"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "810ad7b304e11abc7edd150cf51ad42d"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "ee3f75a9eb0bbebfad2f3c4aa3d12ea6"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "e71f52a6122100a5194fdafa187fae3a"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "47a1c5a2e98cde5dda8ad3cd3af39e34"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "6432c2fbda93de7a21c788f74b7497a8"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "91ef0cdfc1a891e4c7100f353fa4aab9"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "e5743325648f9f124ff95a1ec752bc12"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "b5a649257e5b6634a94d1fe361d16149"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a45c5c59a72ab0903dbf76f375f3b33f"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "1f6945ad5752dd6b3bc9c34bb3e04d01"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "e9af9bc831eb5714fe8ba75d3aa08da0"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "52371b731d7840db041f224c6bd9f31f"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "f7799cb0f6c8ab78e49ed852107d89b1"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "0b75fce7d1ecbbc3243f309da247de76"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "631c354f39f2663da07d70b432110f5e"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "af4e7ef75a594b75396583e82d381732"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "3f21016bf235c93e8ddb637b4035dec5"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "f81ff1d36be23f4e692b493946aeaec6"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "7f3489a6fd115a42c4b8a9930cae0370"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "7717793ac9a0d4fe20ec1c933749d30b"
  },
  {
    "url": "categories/front-end/_pages/Gulp.html",
    "revision": "3c0c8e7ef9a97be78d38297299f61c54"
  },
  {
    "url": "categories/front-end/_pages/Pug.html",
    "revision": "c5cf0db3e92537201ff58b718ba34edc"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "8be9d0dada1973ef05f55a217e02d6e8"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "2ed69c98ab218e6d739832aa886cad9f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation.html",
    "revision": "87d8c04ff8f15040197ce9ee3a4ef02b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/example.html",
    "revision": "3e533363cd88f77c4cb701d5c5b8a26a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/index.html",
    "revision": "8c12d1e8c5e287a7178cd3431c9e73f5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/reference.html",
    "revision": "636f12b44c9c8c54e27f125fd354b1fb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basic.html",
    "revision": "4e48a4fc8ca63c7fc2c0110a0f96692d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/color.html",
    "revision": "193bb77a67f45805a8238fc43523387a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/create.html",
    "revision": "6a75092a12777a9aa89199c0538e2151"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/image.html",
    "revision": "932dbc717c64fec0e48c732bf29b4839"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/path.html",
    "revision": "aa1eee472e6ff30dc531bc362c6d1d25"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/rectangle.html",
    "revision": "7378bd321e3474f2f17b27bdb6dec0b1"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/reference.html",
    "revision": "8fae7f2f2ebf17273a174e8f1f9c81d8"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/save.html",
    "revision": "aba1535612556740d6f72d84e7bbf6f5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/style.html",
    "revision": "8446cbe710d205775992cefff51fcda1"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/text.html",
    "revision": "f616b363e197fc103d529914bd5740ce"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Clip.html",
    "revision": "20f2e5e93da115d98f2cd29366ca2e10"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate.html",
    "revision": "1be9c42e4a7a70e8743cb3da37dd3e76"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/index.html",
    "revision": "8da62f916dfbd06ce893b656b00cd83d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/reference.html",
    "revision": "1dd6b17c0ffccefedf53330f0e61cd6c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/rotate.html",
    "revision": "6b6a79c74b7fc64db8a7af5080c7b753"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/scale.html",
    "revision": "d78814449a7657a177e4fd5337e90fd4"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/translate.html",
    "revision": "9ef6ae145e131d0aef2292a1e9bb8628"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawArc.html",
    "revision": "1cf67ac1868cfdfcc939b6f89b2f06f7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGradient.html",
    "revision": "a9b89559bf948ce3036d2359217536ac"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGraphics.html",
    "revision": "e407475dfcef987328320bdf9e8c99bf"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawImage.html",
    "revision": "789fdbbc49f62a7115372a20c1809c78"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawPolygon.html",
    "revision": "fb61a176222c7302d52ba51a9b032573"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawStyle.html",
    "revision": "34d2de9406bac69f2fdc6acd6c3a487b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawText.html",
    "revision": "1991e2db33be434e3f561a757f82fd36"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/capture.html",
    "revision": "b0612daae677be74f3f34e8a6052d76f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/clip.html",
    "revision": "b80d15519bcf9af10210b3d56038d7ca"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/composite.html",
    "revision": "6cbde4ba8d379ce7f58c967fa314b179"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/effect.html",
    "revision": "9be6e81474f619e75ec46e76b2ef6259"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/pixel.html",
    "revision": "9b18bec228ed7e2544cdf52f9cf4e66c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/reference.html",
    "revision": "ec302846e87ff79f0bb9a476ddda0d12"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/scale.html",
    "revision": "d477fbbe77d69f6d1961a597df99578a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/waterMark.html",
    "revision": "f66af202d298abadce056928d6fc351b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/ImageProcess.html",
    "revision": "692a3124bc5a72d1e4c86b996a594748"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/index.html",
    "revision": "a2489d15aa6cfb592cee41eabe6a16d6"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction.html",
    "revision": "409a95f1f0801d60fda73ae41ada3a77"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/ball.html",
    "revision": "0041dac508d523951131eb82bf093037"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/card.html",
    "revision": "4d625038ecb97d302c742e9f88c6f402"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/element.html",
    "revision": "5732b729004fa00fc08c0244edd7b56a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/keyboard.html",
    "revision": "941ab8fd7e8a40bbe61dd39a9184b45b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/mouse.html",
    "revision": "c51d2f94724ad945929b75ddbadc8c1e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/position.html",
    "revision": "f5f29512543e4c046d332e64425ce820"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/reference.html",
    "revision": "e20e398a99cbda515f745bec2ad48617"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/spotlight.html",
    "revision": "7b78053602a5b5eab313c0d32fb012a8"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Matrix.html",
    "revision": "2005bf734e452e9ebbfa1dd7ec3b1563"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Point.html",
    "revision": "5102f2c313c7b5281ce557ca1f0a6e39"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Reference.html",
    "revision": "75b686b0fde3d1cab9f016e4255f4c72"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Save_Restore.html",
    "revision": "0a16000c0a2b594768d513a74f380f4e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/coordinate_system.html",
    "revision": "be8645e698561f5affa96ae35d44c9e7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/matrix.html",
    "revision": "fedfe8794e31f178a1a116e9c3df3175"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform1.html",
    "revision": "0fc669a92085fdfbd26a80d32c9835ea"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform2.html",
    "revision": "c18872b4ce06766d4dd71cbde75d654f"
  },
  {
    "url": "categories/front-end/canvas/_page/Scratch_Card.html",
    "revision": "45c134c54fbb2237676f0c3b7f0a383c"
  },
  {
    "url": "categories/front-end/canvas/index.html",
    "revision": "d07113d0fa2b53160060da9e6006d7d8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "bb6d9abb1acf8311186b57df56d564fe"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "96c8d68aef44df5d7547d9bc76280c7d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "dc50c7d6226fe4483c7ce5b91dad0b34"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ec71e97d355106db1e3a33016fe72b65"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "abd439aa20fefbefde0917f2f675fa3a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "121f041844a210f8358f2c27e4ed3ae2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "2eae207f14a20a05bf10467a7737d90e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "73b727418b8a26163a6022885dbd5ca2"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "0b23c11115f88fde02dd56317bce8d41"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "c5bc9714e2fb4171baae054e58285746"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "c5fe573bf77606e9a579a40d8e306c7a"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "70ad47819c223523b9efcfc0915de805"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "9d691785c5df22000f2d27010cb46035"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "b401db25c8a5f12268afb4fdbdc123e4"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "6279f918d2804ba65c60661a5e9d77f9"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "ee90400d108d87e74a9291932d2de4fd"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "7149a503de100505cf7d5786fcfa2962"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "8635f3a32cbc88d00498de43853df2e4"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "ed55838d383abe5290845e15c0680edb"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "55b4298728e3718141b24ce27c706fe0"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "f4d2175aa191c8798960efcf75adcd25"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "dec6489ae5a9add052988fc16eb188af"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "72e68ec896bd7903d86ba7637839b549"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "af73a82f1dc73a762a12bce736bec534"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "b14be73450fab01a7093019d4891c274"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "9558c389b085d25cb80df3948ea6f103"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "07e5b7701290f7d87f69c946924ddafc"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "bbb40cd52f13916543a3f3b7cb34a8f6"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "43b98cd2f3a9194b91e001f1de070eb8"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "9bde677bd0fe9fb25a77c1a091170a3f"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "15e8f30da036470d41638628c8a409bb"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "37729e12ad94f380ace6182995fe12e6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "52816f57723a7ade2af82a0d7f3c2451"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "405cac86790ae90501eeef9dd3650199"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "adbcbacc822c76b194bb8c695cced040"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "8fac66c785b7d9b94fe4f9e4a3be048f"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "88c71ecf518518dc6f93ef1395fb7860"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "c887fbb2ab79c4cd4dc7a916cb35e5b3"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "2a18d523efa23be1e25233e90a58f997"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "4558032392be76a7af095c81ed7e3b5d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "024c6860f972161e1d24e3c4eb509d58"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "bb50bafc52aa0c5ca4d574d3a1fa96cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "81edefd92c9e4934ddcc322827b82915"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "b299fd15cf0550e7b10ebed8efe0c685"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "a1d1128a6bfd6af30b60e87bd85ab289"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "3aba795173cb6011eb08b315835583cc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "7de81d7ce1a8dcdeb655a093c9106e0a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "edb3716f643e0e1d5c9f50894f4edcc7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "5f6a76af42b4503ffb3e8902672bfca0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "2fc8cc157d4ac1382ebfbf4507b5b77b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "447ba59b9597722647aa5fc12f5fc6e2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "0de36c65dc884c02d3a484818cb6d262"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "c4604cb299601b59d07b0c70dfdb84d8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "8b298553e3ef75fb48a5a541434456d5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "9844a1628a229d3782e577524b954b93"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "6fcf6729b1b86ac6e5d08b68c5c9ef5c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "3b1db4b68743b5a585ac07b062a14c78"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "3bfa7a17e9225ea2079d11c8f0949acc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "b907cb145d70976d9ee72a6c6e07f43f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "dc532cc9779043da255f015cddd08a8c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "dc82461f0850f1412a33674d2dc40208"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "418222c0fcbeb6fef4fa7d62ce858349"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "b9d689308a166d7ca21eda59820b4fb5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "62cc4378fe477db3c7e5e470303da7b4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "c978f6343e1ba6e894a904edf5d11979"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "5af0d3567d41b5d35abe173f9fde11f7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "c916e4b7c311d03df38d2d3ca4a111b6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "26f7d89591547bea02b23b513171c0e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "ff2be0415f188dfcc9812bf534674684"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "bfc45e97170101630ea5d41c982ec28b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "c675258d517efc2305290504621a8621"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "8692d716e3049f6f60d438b1271069a3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "dafea659ddeae2a423cda03108b0ebea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "ea1ec8d3b07ea9ae079864d897b60418"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "74fa5d9b4a70d0d69279f2d1eae7d2ac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "560ee5328d218e5d112d41aa5c2992b8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "905f6878ce7f5c0be6ffef400a21adad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "8a6160ffce2472626b9769ab94d1596b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "c0f0b2d80177040cd6b8e789850f772a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "b8377c094cf4372746eb8efbd59ea620"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "66292153b8741ba9af432be79e0f49c4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "3c37f7c496b6bc63e2a0e74ba7b5c89d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "f735528de244544f5ed54ad14bbd8a1a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "9b78575fdf47b9689c61344f127f5ddb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "1f60df42177c383af25fb8c63b514475"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "c0c8d7ba48bdfd7ad026ffb21bc3e851"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "bc0f15626353678ef9b355d9a8cee6a9"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "8990a1cce759ebc674e6d7101b216bdb"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "3dabfce601fe5f73ea4ae5ea70800554"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "7191c90a1ac5d592f12224d8b48badd9"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "f1e823c9175d3f7ab4cc02ecc399e4e9"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "dcd11cce2380c074ed5c5b9581fdb56e"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "83c172f5b356543f0ae06ce1c16b4014"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "da5b19ebe9639a29ba8efb39ff977f1f"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "4e6d4948ae53d19c9d72a788fb029d2f"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "54ce784ac31bb0cfe6f8f942888579f7"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "1db6751c6a62bd7b790d8abfb7960df7"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "8330acfe8c24c53bfddb08f1acee84f2"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "639dcaabb94f76824cf54fdace6ad69d"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "3d64241fff0c2d80a57503f0db05d3ee"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "8ed653831e4ef7bc844f48ccfb66f309"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "e36986190f45dc24fa89ba6e20e600b0"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "f8e474fea2eaa63351310a29ceac8678"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "6dd882c35b4163363e8e0ec13c934a76"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "5f9f7a6e6a1a4a5e09afa57861641d5b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "b4e3c0de5ebdbaab508917cef0b6b7b9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "fd832c0c74751c2800426940d57149eb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "7fcbe149285b822ecbe4511b1636903e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "798c8cc6f7a468cc2f89abb3b5ec9780"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "1447bdfb6e131eeeefa9a22e13aa48ed"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "bd492dfa6dc3ed9f6ee96ef33458114d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "8a98304aab36ac66021277e40e25b793"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "d074e6c56ffd5ebf61b2540774d19284"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "ae8360b8c80123276e8e9ccfc70b07cd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "cf366b54e6a6a9e90d089baddb73e8c4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "15df69fef2db7eb9e96a7643d7a57d82"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "1f9999d58bd32ae8e6e55686c7c2629e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "72d84add013bf2f3cd63b8722ffff48e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "6310acb9adfbd8212519cb8d2b204c94"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "9ae76718d975e7f96e65e5ca1fe2a31b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "ae951397b997caea44df4b5738be89fe"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "af0e0355cbe084453a8543e8a775137c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "97597b599c287f42f36773c95d1095b1"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "65a79744670904a78d8d4a0249cca9b4"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "3c12f59aa108b4440366c3e08a67f5d1"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "c306cbc277f17cb080051506f59e00c6"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "28f86548fa723f1f676b22c9ee8fea52"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "cbffc2ff550659c0bd368f06e4668f04"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "2dd648231c555b62a321d0a05d12078a"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "af668b511f4a7032c1be28021568ea2d"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "b3f58dc3e17b00d178d3a96dfc845ca2"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "8aa40a017a9f1bff07431dd98bbdf05e"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "e332d726cf78f84a116d2eb8ca6f788c"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "5894261d47024d79e0c09bfb70ad787b"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "479bca97dbc6a160ee53404c9b1bc90c"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "0a304f95d4b938b7a3fa3f12f7a2cbe5"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "290f93899b0896aea71f913854ad95e6"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "0a2630bb37879ce13bb93d70e01c3229"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "1325e4c10bd34d0a2a318d6f375e448f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "d652a6b2802ecd626ae23e34e9f8eda5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "04fa92f1ad414d15a3276b9a966b6dfe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "5d978eae73a09dec7862729ff045313c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "ec88c3b49d5fbed2ff05834b17150f8c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "cab37687f0699eee2e34266c1e29e729"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "91d21e7a2bb8b981d2e18fae0bfe4af8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "a02954b2ad9009920553e1f5d2b7784b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "f8595fb65d1f0f661dc11723ed728d25"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "7c66a893258d69b22d4e89ca5be2440c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "c1d5be39ff13988bce861c6e35bc9e11"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "95b51d4b34895909ec3df74ff1e1f61f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "07b0d5fa2bf0a5b2a71b35accc879eea"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "8fd3640c36beaf07d792538c4af5466c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "49a1fc1a0f19eeeb83c3f14dcb2eea67"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "3996d02b05c13eaf8468ce2b34451855"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "e432ec9de710af8d7cbd0af832c7788c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "f5a99dfc437f28936bdf48898ec1e85c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "dd167cb0da7a6b967f3ec529800d54ac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "e1e0a949b30cd734607266fc3572edfb"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "ca0c01fcc5d7ab23ce3220b50a8f6412"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "ee9c4b0bb940fb5ad9c74ee4c143b924"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "6487b4c7e7c49a027b4765ca85b3a849"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "440fbd7f3d91f1fb5bc6cf453de51b7c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "a532fcc2b17f08ed6f48592661bacf6e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "1aa763725847efa2ac3a909b62eec192"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "6cac53442d831711c13446b14f2a5162"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "764c40cab2f990a4c84e5425ca8f2ca5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "b6c429aac0823f330496999d4385367d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "0bbef4af0b652f8f4ea8bd5226cecc32"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "6e9064bb57031e05de55571c1a5c841c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "4405784775b4bcb2a959795bcfe6a8af"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "426cf03b49ebfb9bcbeb8da4564e4542"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "63364578d415201671b1ff7d77ba3ca6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "3f7836df680fbe9d51b7a2257c91ee50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "b5b16638ae5e78090f8d45a7f47b2e85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "d960585fa03d97ead740289186490e04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "150613ec8cd58cb026c2b27a1186db7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "0ed13c538d8b3f79eaf6bf05ae46cbdb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "9f3d53e4cd78c667d1ea3b42924991d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "388de47194aa656c19d85a2e263fda08"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "fbb78aab83ac54f015776f7c4d0a3c37"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "d5bff608280961b7b3d803e2a0f779c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "8118bd864205ed1d0df96e59aa0d076f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "657a613cb155ead6284b466a96d49ee8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "10505defc4948026e819cbf5e33b75d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "576b408a393c6186eb8fe81e5fef3e27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "07d35357d2ccd0f964cc68e94035305f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "e346942cfec360dfea941c95ef020792"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "3a64ac6e11be20a69bac519e5acea914"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "ea18a1e0cdadcd8c477599b787931683"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "5fdad7d74b812ad969e0a7a2ab99f758"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "c73b447896d7e5d294757b4559bd7a93"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "33d36638e6af9e27f98cd61060a18a70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "d6d789414607cbee15cb776a6becf6e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "4b4683ef8ab329d8240f6bb24c82616e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "c4aa102c121f2edd5de23387b378618a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "ebfe0893c5360f6970b085f7be1f52a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "8d2217fde330aa0b5781f101dd281dac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "f7ee7b221879e6679b9958bc042abdc9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "92dc31ec07b341f60ed900dbe6537004"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "73d1907182cf75c7b1031a3876bbf64c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "79e6564d53298e5b8ffd002d7420124f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "a7b11a4b41968289dce9b11e37e396d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "1ede6416f744cbb264288549d7b20839"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "76938cca1055c1429cc830d53835ca0a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "61b25a39f8340af720882328a96fa878"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "6ff914874bcc0b4030c09620964cda87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "65f1083085558b2c928c9535d2cbfbf9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "54b2d73fbff5a8f709237d3ce8e0c6ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "d2139f743cb43b7960a21b1b1a3674a9"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "f18314ef326d5a8518cec84b7239c720"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "ddb090de93ffc8e15586fdec82c1b086"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "526db299e39aa6e0a84e46cfd7770a29"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "12fbd483f8cb595682f6264e654cebe9"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "14ba31401dc4cb1e695baf60c6d52f1f"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "291e5efce2a790ecd23d530a909ead9d"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "14d8082606aef633400e1f2b4f9b53c7"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "e1a64b510575a3dc3a1058e4d8847978"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "6d72ba1f344353388b07cdeb9d31dad1"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "826c74fcc9e5edf5b461fdc415299175"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "a71e3883b165cd7327e0273180d015bb"
  },
  {
    "url": "categories/index.html",
    "revision": "5e5d67fafa0a00012a2b782dae42ec01"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "a4839e2fba1f37adf8986237cd7a738d"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "4a6648a98ba459bc8db36b690f73c6dd"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "48f6d83252d0c65c7d60967c3db7f9c7"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "51bc7962f74f5c59144b7aa0648c257c"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "5e1ae13d9b21928957082f5f7b55c47a"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "6f8cec96d0703a40519fcfda35da6b61"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f2aafbf12357b3e680e48202adf8bc4b"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "bdeb87920941c1084a0ffea973a56d4b"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "7d9f2136849420c14787cb61bb8a8c7c"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "23b7fbe9612db6af29b9e9fe439bc991"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "8e3b1b44dddaa6d7abcc3573c8c1a0f3"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "0876e1633f5db43dd3692d18c3e33aff"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "16fe3bd18f28fa6223c3fb68d797582f"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "d3295fda08e803352532bc993ca68908"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "23830e4bae44d31c8c992976df94922c"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "0de5811cb4d9bf2191497b490b308e0f"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "e763d1966ae1461eb4684363acf7fffb"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "5fa34e32b39faa0659127c7e78b2fd0f"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "28b6a1c63e9dc06c7f7fb90ec2f0ac49"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "ce153a06d6f3875e1ba0b1c2f525b0e6"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "97e89d2200edbc400f82b7ac2142cd11"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "73909800be5896055a8c70ad6ccba543"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "cb4d5328b6432801cbbf55fb0d0224c1"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "29bfa282800326fd1fb8beac6a8515de"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "1f1c32efbefa8b95b529a59888f3fc6c"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "1a8ac4dbca4341e3d06b22feb87902dc"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "41e480a9acd2870bd363d3b7dc07ee14"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "08433a32450a8c9006902db58a123d06"
  },
  {
    "url": "categories/nodejs/_books/node/Basic.html",
    "revision": "723e9f174615471d05896faef0d8b773"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "c81659e00236def1d57d90232c0792b3"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "ab4d0ba242115949faca79e3e9cacfba"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "9d7db28580da278ce376d233682c310c"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "bfc4b1b1e7669f6dfc9a52d6cf3c6298"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "0dce8e10f2f2f8b3fef84fba761969c8"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c52332e9c05ec21224414d3a4c89ebb6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "476f2b8ebd95a67892836abf5979ba6f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "30a43d17e676a0c2e21ba6b36c96928d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "6de5b858200aac4ecd93c20de5979033"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "e86e148dcb745fff6b7651cab1ea1f9e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "07e71583603969f8c49a236476ad9c7c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "fa7fcafd0ba7f2be7ccd1975fb59c48e"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "444c7ffe0a592feef000f71ae82f93a7"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "55b45e2c2152a80c41e304816a08f3cf"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "70bf6938f0fad273e88b73e7bca90608"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "c264dddfcba2abed57015fd0d74f2fc9"
  },
  {
    "url": "categories/nodejs/_books/node/Rekit.html",
    "revision": "4bf0518166f659b0d29a0231ce6eca00"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "4f2079ef65150cb7bed9fd37eb3d2557"
  },
  {
    "url": "categories/nodejs/_books/node/Solution.html",
    "revision": "660a88a7c67d7a3a53ea88d0be07370e"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "77b82ec8e46810bd3bf40a6c0c4bee9b"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "dd264c3401fa10fa4292e7f2e559aeae"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "b9a470c247ba2f1f8b679d4b16b8815c"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "4049ae7dfbc0b5ca09a4d2f43304afbc"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "c5d6930f787d7a45d6dcc2c386d5fa4f"
  },
  {
    "url": "categories/nodejs/_pages/Koa.html",
    "revision": "954aea555b14cc4a7993256f7bd12c89"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "8c145274b1f2cdc026a19ed540bfedfe"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "e8838d8d890d3354c2a86756ad704ca7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "70685513012008f162892eb2a062be6a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "36621b3d0a06a887ef3cf6c9b95efac8"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "ebffb03fdef9d13025b29ba1602839c9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "aad0e150f461a52a55b359a70b08fe58"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ff897088c5246f1e6f9843a7dbb0c4f7"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "efce19c467ef58bec733608774f91389"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "bb399c5890f3fef55a7ef020eaade875"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "621f71902e37ac1673b047110d098149"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "35481da515a2a83fdddca65105fba3ba"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "c096249d98471e5b26db318ecce59456"
  },
  {
    "url": "categories/os/index.html",
    "revision": "90087e7cfa5c3c79bf15d2c6fea13a4c"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "a64334e462f22a48f8ba910ac20d9265"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "227d4466881ee240f40128903a3d08b3"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "f829af38ce01798b30b8d090018e921c"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "9f5452b688b3862ce4a82cfe73b6bfbd"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "506a29f902eaf9eea8628023e9fa7b0e"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "3dc69eac510ff7e94ca8c996796e6e78"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "f9bf7fdfddf35d6e970909e58c929eca"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "dfe2ca44b69c3a2c1512220244986572"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "b0048da96da9b6011e4b6b75891dcb92"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "5eb607cbd317309da851e48a5428e644"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "fff6ff52d9787decc61a2e7181e0f9bf"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "b273ac3d0f3b1f5f87b14ace0a6cfb48"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "0ee44bb90bd7cb5b19fcf1e8d8d9213c"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "91fe1cd42467a442fb7027739f33348d"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "629bb6b4e65b6a2a60ff0722d2799e75"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "ba002813eee6923ed459bcde4e60ddc4"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "4a380372ec1a2a0a98b3571f52069145"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "907bb720bb5ae18479c19177544d4934"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "6f7657ab3db78b31628adc8cdfa02708"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "3d731879a3dacc5a3a72e2fa8957f09b"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "7ed644282215f5e172ce65161a9f674f"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "e485b66801eef316e64041c75c006cbe"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "988b19b1be880a36d6048979484ecc3d"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "49ce9fb49c46ec220fb40c49369d4fc7"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "3af063b97d8476663fb0cccf2a44a412"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "8845dffdfc033e93cb295d336ef9f339"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "674c0057ec092f5d031b9049f2708080"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "d043709c86ae61d073c07a0cdf5f1af7"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "ad0ce1345c59dee8b34a0d1ab9cb1181"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "81a83abef9d43a278b1394954085545e"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "30b4a1c58d08fffa27eaf4fe8002d166"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "5b9a094c85506d48f3e6e530469f6b37"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "243c06d3ae501f33412643efdc41d8ec"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "aa72de44bad6557d5c04214936ca6450"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "8ba6793049e7cf8c43b51c21a344df8d"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f24887f45a208e4bde0d9ca03a57a4a7"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "830806273a8f365d9fa22329eab226d4"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "9e4f1333907fbb67b357ecc5f7899171"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "fa6801ae8849bec26535950f87a78ac7"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "7a29a6dcf035101213c5acf1bf9c1f62"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "9627a65ec6ecdf7b612fa62fe293fb0e"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "94646d148aee5d477eb01ab4bbafe8dd"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "587c5b5edecfde79266e90dcafc31382"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "3384496b0ffd76292d040677e4d248aa"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "5077be8a7480fad1d33fa141277089b6"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "197bcb52bf55aab7e024863d648dcd60"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "563609e365dbeff4122cd617c33fdc2c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "d20d78ba5e38b95e152d51c5a4a6a0ff"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "5e35a2c3ee6938b87386f41a05f7f6ad"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "506725cf240d3ddac71a62f186e4ccc2"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "4dcb521a4416fe87dcb122aa37aca1a7"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "09e0ee9b5b0ad12c9abf22fe394cfaae"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "6616233629cd13fa8bb4caed23176e54"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "d5bce25aac950652a0848221f85207b1"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "796ac7f55019d0d80bbb60093fe06496"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "b9c26560aa761e8464cd851a962ad507"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "c3943090527dd0e0245d14edd2b2c50f"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "6d1c78d5d42ecbc0d0e501841d53c236"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "d04836dec0aad18e012f786d0a40bf81"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "452612a6b178d42e8490c58f1bc3a65c"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "95c51e6b60a739d64bddec3b11639b5c"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "89365fec106fa8586dfdf42040ad49df"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "2a34b471438a76451ffa59e29f587ad0"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "715562cd6c05b6abfcef3c86f16a95d7"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "371d142c0f59d4d93231e29373c92a71"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "9a735d836bbef26bf752aea3fed6ffb6"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "869556b5fee3f9312a14969e576a3c3b"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "baba731789330fb1556ec6ff82bc0c0b"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "dbddb6575ddc6ef6912d1fc03f9c54e1"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "e825261abed67fdcc20e9acff55ad806"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "3e5416562f9e66a8bda9ff34921effe8"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "2a50df2a2e15cf1092a49e4a5639fabb"
  },
  {
    "url": "categories/php/index.html",
    "revision": "5155fd713a769997a7158f80ea538c6e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config_Detail.html",
    "revision": "8c3366812f9f385ba1d3e9c4b236c79e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config.html",
    "revision": "71c21cb032808a47466a3ce78364b927"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Container.html",
    "revision": "928dee935d0b19b6a3286ede05e85dc4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Controller.html",
    "revision": "0c26ff859b95a08fd8428fb594d5aa53"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_CURD.html",
    "revision": "39db521f022c4115ab2d1f25c143833a"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_Query.html",
    "revision": "4747282e38ef56c404c0e27d2d4e072d"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database.html",
    "revision": "5df46c3b1f36bec78987b47b7aae5cfe"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Env.html",
    "revision": "7efa01fd3a822a14afb532bd631d62fe"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Composer.html",
    "revision": "bfd4249a03eb9b7278dd87f273bd43c1"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Function.html",
    "revision": "a96c15c4fc1116fb48bf00933d101052"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Library.html",
    "revision": "75c5b87ebcf3040e97abafe6b850f59f"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Facade.html",
    "revision": "c1379372ff28b441befa052b827ce75b"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/index.html",
    "revision": "44e1daed1c32944e7a744dd4f06867d9"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Inject.html",
    "revision": "1d8439e4ccacaddb62f6144f2afd63aa"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Advance.html",
    "revision": "8db598ac0ccc0a11961bb6b9f0a50dd2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/CURD.html",
    "revision": "80f82ced8e660d14795c5ec526f9d273"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/index.html",
    "revision": "37a10569685457ea386084c2157cef67"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Transform.html",
    "revision": "cbcb4c7beacf5be2857e04c476672877"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Namespace.html",
    "revision": "73262a99e495c3c904f76dc2032f8a53"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference.html",
    "revision": "7c8e01d30963b12d2d97f8bc785ee97c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Assistant.html",
    "revision": "d4ff7532cb7ff81b5250087acd1e0933"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Console.html",
    "revision": "4278269afea375294c21fd2bf37b8d82"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Constant.html",
    "revision": "c9312ea4d7cc07a31ae8a61b80be5d6e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Debug.html",
    "revision": "cb52478acfa06a0446d238b6b559f32c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Request.html",
    "revision": "e5ee84ebca0a808d63ae327d982b4cff"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Response.html",
    "revision": "04bcf6f981c1fdaf37941484838d8519"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Route.html",
    "revision": "d02ba8e2950ecfe162e4c135ea028420"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Static.html",
    "revision": "2f7e342b339e85fca6240eef6d847a17"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Template_Engine.html",
    "revision": "7738dab7cd0909ea88e8f42697471264"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator_Rules.html",
    "revision": "44e3e33b2cade3141aaa502fc0608521"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator.html",
    "revision": "1c3fcfaace74fa1365211997091740a8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/View.html",
    "revision": "801d7a115eb333ac6d51d35c7d0bc8ec"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "2cbfe8aed0351ebd77b697040334a997"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "cbef9564366fcf6f567adf4168c0cd79"
  },
  {
    "url": "categories/python/_books/python_spider/bs4.html",
    "revision": "e1a35b9f4c802b1e67fbba2fab953d53"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "05c918feee145ac977f05006361583f9"
  },
  {
    "url": "categories/python/_books/python_spider/pymysql.html",
    "revision": "de3ead4cd702c4db2604e3281b29eb26"
  },
  {
    "url": "categories/python/_books/python_spider/re.html",
    "revision": "ce2594d7ff4be57df9e768fbf6787e46"
  },
  {
    "url": "categories/python/_books/python_spider/reference.html",
    "revision": "e9c256f9d3b05befdd933ac1a5dc4a9b"
  },
  {
    "url": "categories/python/_books/python_spider/requests.html",
    "revision": "1d2de7c40211607ff0a9499c9a9b9693"
  },
  {
    "url": "categories/python/_books/python_spider/scarpy_basis.html",
    "revision": "108b5faf6bf9a153f81a88c37b6629d4"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_command.html",
    "revision": "1b2c4d8dedd68b7bed8d25b70bdba083"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_file.html",
    "revision": "839aef8dd34edc316b469f5c842dc4fb"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_image.html",
    "revision": "f5993ad01e0b24171eddae77b48ec5d1"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_mysql.html",
    "revision": "cbbf1209876cfd61c2b9054012fbf84d"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_selector.html",
    "revision": "1ba3cbb63c08def9ef23c151fb2bb0b4"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_simple.html",
    "revision": "14118c9e1f85b17432cc7445e164b9ce"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy.html",
    "revision": "4f8b2159614a02b26b845120bba49f42"
  },
  {
    "url": "categories/python/_pages/基础/Data_Types_and_Structures_and_Operation.html",
    "revision": "d5a5ce3607b52ec8e0962be78a9143d8"
  },
  {
    "url": "categories/python/_pages/基础/Function_Basis_and_Closure_and_Lambda.html",
    "revision": "638f3e1ee3ec917770bd9ab147b47ff6"
  },
  {
    "url": "categories/python/_pages/基础/Function_Build_In.html",
    "revision": "bef076ede267ec124604ee5a53f20a0f"
  },
  {
    "url": "categories/python/_pages/基础/Intro_and_Install_and_Usage.html",
    "revision": "1b2be0631637aba88a767b52c4e8fc33"
  },
  {
    "url": "categories/python/_pages/基础/Object_Oriented.html",
    "revision": "b59a271f89103a45efd0a531880fd6ce"
  },
  {
    "url": "categories/python/_pages/基础/Variable_and_Control_Flow.html",
    "revision": "3d237a72ef3760a8435ef47b1c59f2b1"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "bc9199e02aea7e3e892413d8f3194cd6"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "528602a63f4cd5271ac40f7f372156aa"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "c2479295dc25ab6da6eb6b8d40cd294b"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "9881a0c830d7af969209d2ebe5a97117"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "22f257b51c04106588e4b2d9254682e7"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "dcdfc66c8474ff348680e0e63f45b923"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "5fcf2e130adbef31dda34568d704d927"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "e4596c5116b2c9b931dad0eafb52b5a9"
  },
  {
    "url": "categories/python/_pages/进阶/Function_High_Level_and_Decorator_and_Partial.html",
    "revision": "ee24c5328c58defed3bedbceccdfb7ef"
  },
  {
    "url": "categories/python/_pages/进阶/Generator_Expressions_and_Slice_and_Iterators.html",
    "revision": "919c1444a4c17c91f360276d97992183"
  },
  {
    "url": "categories/python/index.html",
    "revision": "0c50aa62f4dfbb24965eb8fa6bb21f9f"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "7f4105af29fa25c85228de2d4fd43165"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "d0ca270eada081db50a54c172ef31b2f"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "f6e9b7caebd505743c69e46d4e3fa8e6"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "4b831875317457be72ba36df477b4a3e"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "61f4ecf5e5199899dd288dcbc3b6a6b2"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "c831f278574860df900a9e119f8c12e3"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "d2a52a5c915feadb3a388e5a2f870fe6"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "d4bb1cbcacf3724ca25a867996f570c7"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "5898360f7bf6c3ed28406fb851189093"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "a859038eefa53308204fb05a4d8e8a85"
  },
  {
    "url": "categories/system/index.html",
    "revision": "d0f02904096bb421435aedefaf088f2f"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "acbe35143820aa968dc34245099cf380"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "9c9049606cd9915022650fad8e9ebf6f"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "9fd9c2028739b1e9d117b554e8a701fa"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "cd87992146a098862089f1daab4b0d37"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "1f0cbc781cde2c54d6099bf4a681daa9"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "fdc51defb15ef0988138708bc2e2bac1"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "7d02af4882e16d5503b03aa3493cba7c"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "d37c8401e61887732572bd66dab68828"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "9c30e03f92880a1a92d663f50112fdac"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "73b44e2858118721b6b640b3cc9705f4"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "80dec751e3f738e32eb56c532461d1d5"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "4f4086898e536dab2d239167fb04c128"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "3a87dedb13616d50072e88f2aa3585aa"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ec49fc0e276fd96477d5835973facbbf"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "642647b36daa4b9842285dd7931aea11"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "d586035f0ba4f52cfeba28bf6b92714f"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "7edcca583dff4cff03e78a4ac7fb048c"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "e2c1bd12326d77eff3af98d65271ada4"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "cc4a31dd1510eeb00cca183d44fe2196"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "24b4a09a90b87c40ac698e7b315335e3"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "23d14d2b1d37adfec55ff90de1bb578f"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "61508a48a307fe91555e5c969b5a61d0"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "b57bad8a50cdad64791c2baecd1be595"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "48cd0f52427fa9b0c24ee96052319012"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "40e1352dfe1851ae5fdf396a0724dbc0"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "ce84efca3697574b8677bd76c40e0e7c"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "dd87786eb3c41407b34e22f2a5ab7a51"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "42e6fa93f36fbd658d603de4450dcbf7"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "f08f176640e1dca584871363ab5d053f"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "1fd34d0fc32a5729fa9af7deaf1f06cc"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "fd4f913749cb69ee29e27246da8895ba"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "c95d90a7c53f6d13120b7a23e2dc9a79"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "1a9c98d02a5cb539ba2e3567f8dc7c41"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "2210c98e1a12fead8aba0f981fa07a84"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "46c2f4a6739a2a3f2acdee17cab00aa1"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "9115b38273078e36bd0c9475a3532dde"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "15d65bd648564fe9359e5765058bc9e4"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "7645ee0245217403d2ae845ae73ae787"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "7410f68ea2329d2b2a0f7cb600882799"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "dc5de15c7eff35bf5f6c0c54a35466ad"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "cd2974167f3479db183e37863687365a"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "8cf5ae0cf0dfc318c6df122c570d2d59"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "1fad0e90d135df7736b0b9abca4b569e"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "c03c8ac6f2b112907ab4bc78a15e69db"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "c44e4d6a9f6207bd9d3a3525f6c17246"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "50c608ba433019efd62caa02e03f28de"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "58d52c85dbf36a0cd5eb8d1a531a520a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "3f08455726457c7b5a5d4943c98422f7"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "2920c5fadad70c135c0c2ca94261fd9e"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "a7a1f1b3723888f3e435f24bf34bcbc3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "1043cb9dbc39e2be676616ef7182d034"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "5a2992b405ddf5a48e8763433c960ba4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "f50dfec593c7c6d17a600a664234190b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "2ca0f0361792f1ae8c7b017bc2d9acbe"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "29ac8461deefb1f13dfcc97afc981ad4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "2d0d6893f963b9af6d0280d40801f735"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "61a704349bb2d846a42a37c663b7e5a8"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "0bf9b3792731d03bf80898de785c50b5"
  },
  {
    "url": "favorite/index.html",
    "revision": "42b0798a939f608242032ea331c01df9"
  },
  {
    "url": "index.html",
    "revision": "9c243ee7cf25bfec2fe65b7f36095f37"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "9de0cffc43d5c9ff4190cb8254995835"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "e1d951ec86b06978d64566423e5a1753"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "99fbf2c61312c7a04e5d85b707fa23b4"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "af564afc8a512780902afc2caf448d44"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "89eee23dbb7cd7174b95ae15d1953760"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "151f02c88f8089035da3a7607280e184"
  },
  {
    "url": "note/index.html",
    "revision": "8bab7136830358f9ce420643fd1b1acf"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "7196739a86ca3cbd12e4940ffb9d6cf0"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "aa41562f23a31511aae9d40bd3ea85ea"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "07a79607b87acdc1ab976a9e722411d3"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "8d144130e6a2ed3e65370859d1c0f9ad"
  },
  {
    "url": "share/index.html",
    "revision": "41a3beac3164825c4463f63c38a9ee9f"
  },
  {
    "url": "single/about_me.html",
    "revision": "cf82e9e765ff9d9198eaf56f99deb92b"
  },
  {
    "url": "single/all_article.html",
    "revision": "ce5c2b51f5b1e48a4e8d96393202a878"
  },
  {
    "url": "single/welcome.html",
    "revision": "bbbf15073cac331d2107bad6be74937b"
  },
  {
    "url": "test/index.html",
    "revision": "d86ea5c30155593ac52dd7b1caa53613"
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
