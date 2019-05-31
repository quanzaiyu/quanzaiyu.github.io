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
    "revision": "d81c25d2fe3a633e878a591b22f41bc8"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "43e60dc5bf18364fca1aeef8d6489d66"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "9d86834c5de2ee4e1171af9d981cc694"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "13293a5c8a4b1d24757e919c6534fbd9"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "12659342eff5c08b5836d5f1c71d2d94"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "1430e9cefe710620bd73252c3c6bf05f"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "e087e56afe124a34ee1ef1abc5e992d5"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "bdc44da40580191f857fa9c3f9e4fdab"
  },
  {
    "url": "articles/index.html",
    "revision": "dfc9ab0f4f3d9a2ded8329cf927a075d"
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
    "url": "assets/js/1.2d715e92.js",
    "revision": "eb95f90343296be918a05f9c311ce92d"
  },
  {
    "url": "assets/js/10.26dd7361.js",
    "revision": "a30fe085245bb17fbe9a41e45613f2ad"
  },
  {
    "url": "assets/js/11.b74a062d.js",
    "revision": "0cc4522dff15d2c9000964f79533ab83"
  },
  {
    "url": "assets/js/12.38ef76b7.js",
    "revision": "516fc6014682fe1a2538d63a04889cf8"
  },
  {
    "url": "assets/js/13.f0581453.js",
    "revision": "3fbb6ba68927b5efba2e88ae2d82a1c0"
  },
  {
    "url": "assets/js/14.8a9c47ed.js",
    "revision": "23fd4a8d89467fd4ed0c60d3f1614ac5"
  },
  {
    "url": "assets/js/15.04acda5e.js",
    "revision": "1f4a0c83dbc774605cc6aee8cdd06893"
  },
  {
    "url": "assets/js/2.a174e87a.js",
    "revision": "296c3ece421cdf78aead0843a021ecfe"
  },
  {
    "url": "assets/js/5.4d7e4dc1.js",
    "revision": "8717d00be86132d2ad07bcde0d5d0624"
  },
  {
    "url": "assets/js/6.b3cc16ab.js",
    "revision": "cf58a1f8abc999002a0364dfa52db424"
  },
  {
    "url": "assets/js/7.16e037f8.js",
    "revision": "657a2c85cdd5deaf3b6cd17256e8e027"
  },
  {
    "url": "assets/js/8.03ab0d3e.js",
    "revision": "892533ee4270203c3ca17612a4ee1324"
  },
  {
    "url": "assets/js/9.10e3720b.js",
    "revision": "1a55754b85c19614e8f33da5c51a47c4"
  },
  {
    "url": "assets/js/vendors~docsearch.1be0e0f0.js",
    "revision": "2fde3a44fb5741114130848a1b9f32e8"
  },
  {
    "url": "blog/index.html",
    "revision": "534c2e81f5b139daac64df1dbf54a83c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "7cde1636c7230b706a099dd4ea07fbef"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "7c6de94d63e00d96039ce90396229e9b"
  },
  {
    "url": "books/index.html",
    "revision": "0e637caf08f88ab83aa75a826e83fa29"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "2ddf147bd8a19768f0c0ed3f264272df"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "be4680e7a93cb9b9a601e169a36c835c"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "54dd60b31cbe89fc4728eb8c50d833de"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "872231abda21712a7635562d38a1763c"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "2076b327963bc482d384a7132ef17832"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "f0b47008fd07a95b0156971e124aab73"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "92c1dfeb8bf6f9aa97743af0a60c2f7e"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "acfaad7578492f466e5099fbdb5d53c2"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "4c0618941daff13e3c7abb418600057a"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "dce865d63febc9122e8df6a415cd6538"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "d70a5047e397791f05d00cffb357426d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "25609d72799ac10485055cd3338d3df5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "2ee5cf102e83da34f1f84ff78f6ad385"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "b916b53022b12307cc43f3ac00635d93"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "31a29b0cdb27877965ae9ec89db97c3f"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "d545ef802bd7d20a9adfef59f366f7f2"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "b22275201504bc210571f5a77f52f5de"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "ebe80825c4fabdbb9943118c3decb580"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "3875434fc697ccd2914ca6379642386b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "3f667fa25bd2895df2c85e9fa07f4e6c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "77fca49dd2f8c4303c8a6df7773dccc0"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "ca5e6870dcab570861f8bc9e98073b7c"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "1cccf4ad68e3a800f3515c31a7260bea"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "80611885c8c9683f16fb79d17fe6cadc"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "d6ed66eff017d8f71d44798d62da395e"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "7e1cab09455ec6de1a13fde0121908ce"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "f7f6d6ae2010fe7b9abec3f61794eafb"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "b07f7ecfc5fc01fafd4a218e379553e8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "3752080eea219f08c2de6ce4388a8bb4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "2e7d329fe9224bd190d385ed034a1537"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "2b192535a9fc2233b37c2bca30331946"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "b87ab9a539db6cb0d05d4c2bd692d00f"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "d150784381380d8f1ee7fb2b1afcb577"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "cbb24ea0da0abd12d83660f03b9483e2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "0d4827528976575e50c9b615ce381f87"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "0e45e3b1712815ef74e8846e2a7e6a5c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "d403f65c6443d5c387a8cd21dae17c03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "33aa1b513cd4063e61d4d226d3cd7978"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "09357e1b8998f6b9b3232b1ba0181ae4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "a7efd30fbb2877a752ea60e9828fad5e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "0475a0ffdc177beb5671b156f689b412"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "72c02339b2d83221de042cfb9e401c95"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "396a568e8003ec0ba961366d21f90a70"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "860dce73de7f7677d130d3d5a93aeaa7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "2c0b87a030d9e0b9974d6e15af975a21"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "7748a19ef1751b64193bfb8f1190182d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "84cafa1f77eb4afea1943889c7fd3616"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "e8d2b870f02bb972508f4dd94e768866"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "812b9260b6fb05cfe859ce8e2a5abdc2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "c9002b382be591f61044d412bd23df99"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "7daa95a5ff9af77b1c1d3cb93bc9af2c"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "ef87f334016f3eed28c9af90504b8863"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "08b581cb965e0e5e739bb77549ce264b"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "76773f8135185308102892a5c46924f8"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "529e5ddcc79014ea5ce90bc31af7e75d"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "fb35b9725cac05d1e835f0681251cc92"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "0de2c7894a4d94fa593a234a1b2a37ed"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "4540ae860ce507cd0e8dcdbd2870f655"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "ad9a1b57c105d75e53f300cb5822ebed"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "5f245d195220216816fa4a485aa6e899"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "8efafd69853bd6fa366a8665ae831929"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "f99032ba1b53aa504e9473fca6005bbf"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "9f82aa93198d35c9ba7c2440b6f58b5d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "ae3b6814aba452d3bf75b9beea802251"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "0c43e62f3c5e30d8fa0fbc29df2d24c3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "e85f1b891450e39873d1f70cf4c93994"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "295044a905e7f578d2da5b62354695a3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "41b7f5009fa20694b371a78a1afb2241"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "9212ddd0fb70ee8641081fe9f5933dd0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "c3678ff7457ff035c51e1fd741bdf944"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "659dce8b6c344aa55674b256b6cb1583"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "905d81f12ab78914b36bd89292413c9c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "e052a6866a692c2759d1af0b60eab92a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "a771a68d65d30a33d7eade958b7bceb7"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "c4457733844b6334827f95fdde64fdcc"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "f26bdfb0b41ece7b09fce55172641377"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "1a1ebce076dc9e992b9d07041263adbf"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "46e40b212409d20a48bc7b0b53a8ddf8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "bc00149347730445dff438c24dff4599"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "befb944f3ebc5fe7f7e221e464a177d9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d5940a6b94980121cc6374ab799f2b77"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "2de2710b36e4cbe1422f301c0d0e647e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "0dc16b825fe1afa2b08e035ae9bf957b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "ff1591f23c564b1a707d3a5a467802c3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "10deaff4aa33169baea2d6945021d559"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "988690299f97b8a2de6bc9597b515ea6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "01355f5dd14b66b818c0c2bc5493fd2f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "3f2ca67ca198181bc05efad1d7b23a52"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "06db6f1189afdbb34dad7af9bc014473"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "725ccc3851b016d979961c2beda4c229"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "91b55e42ac8ff1c1aee8ce0f8cf1d531"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "858ecbc74a0a9aa7ad5c913c1c3576da"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "e17b375c6996c66188c68d607de0b1f9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "d0a4e939a4e22fe19dfdc5934ce9353f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "bb76fa2dd557eb575488a7854e9fbd03"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "a7c4197322b65f66108325424af0c746"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "d568f722a233300af58bd622368adc80"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "4f3ce01977fad5e6845c2550e49b22ca"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "578cc4596a0fc5cf0ea948bbb5b5f9ae"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "b2fe7767b291e34591c9ceaa132230fd"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "e832abe16ca9f2724a666ad4a7331d58"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "e8f647344947238ccde7c339406d13ad"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "eac0e63a51e3ea155958ea28c83d6974"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "1f03c1e5b0136fd12e071e9900bacdda"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "9ffd309b331d6ba254b59a622e527aeb"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c3a534c55607b322281f73d491136376"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "4c6c4ae9ad012217cc71cf4cbdc5b0db"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "14839a663367944f05b83809c0e34cee"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "06951707d7a22a777ad6e56fd2abe40e"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "9ef6cb0154384373a9f91e857a57234d"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "b19a96bc2bbc94e28eb5762e12e91211"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "f9d55c8a1ead96bc13d340421a7ee484"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "89044c20d8322b91899cab4cc140eb2c"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "0a8b7fc949a01df70859f1c88a8b38aa"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "d072e4e8a34cedb29d1241a1cc475e77"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "1c99483c32541318ecb8513070d6d798"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "05a38564d8efd71c7e1a4fac6bfb6cf6"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "ee1062574b44d772bc65b9d51e1d33d7"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "0536c8381c379f2d7949b931e4d5731b"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "63a0fa4b2eab404515814a40476d7f62"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "bd369b776fe8b5c73871ab03e15e3107"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "3899ca288c36fb24542eaa5407a0f02e"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "580ea529d6aa00e2ad7fd10826c482db"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "6c2fc31ae1b711146d61f542433f3fcf"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "be078caaa4a2df11d37262721b41ae2d"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "f0e95e6b7f91c2927b1980076b31f573"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "8321be8b4dbed32a343bbf16bd31bea6"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "7150391c604bd36413be101580b1c391"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "bd2df1d591151abbfa745eb87df80bc3"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "9daa8e56986bb5b292652aa910db14de"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "e10ffb8a35155cee9dea3feab6aaac26"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "da878a4899748100405f5bfa88173b76"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "976ae23fad2092a416519b65382ff826"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "16a5d48aa55b2a64a3614098c8a13698"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "8e7c29be661649c5e045e96ce9133714"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "fb9614d03da98dc25663241f307254f9"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "39be7e03346a1a03d3433401a184826a"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "cd14fe7e4a33cac6ec3a95f16f467121"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "a443167419479fff6ad8bdf724035373"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "4fded2eb9c9c3a9a5f84a9793d877688"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "6c6faa63b953c4ed08d206e3ae94b666"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "0c18380b2d2b0a4958c08e9110ed672a"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "42693313ba5365309e35cec7b68d5ba1"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "a30bd0d585772f626c5cbeb83970881c"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "33f22396a5f78249d4a3ff755949c582"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "37476f8ba56fab3267d43920ec42c60e"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "218e9c988db40df54bea0004d86f6e09"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "383914400a48f1d597084ae9de718c73"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "87c38de00979caa2b08111cd8fec4d4c"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "8614eabf779e27b9dbcbe2b1cb88124e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "c6d8125962fd355a1b5d89301b62d0ec"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "6d6e9fdc36694ff7468a10263dbbccf2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "fd1eb6b5adfe4c40bb7ee94983e4c357"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "03954487fe1f002391d89d095b264b0a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "2c82b263680e2bb4ef0549291c2b8768"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "65995cb865d8ce394d07c079cf7d8ac1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "0cbd9b39ca763628d5f9ce5f8e3521ba"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "3a1ec9d5d7be12dbc402d2c285287652"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "3bcefbabe2c1ead5a8d1a833838ebdbf"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "0d49b5c23f328ea229a86cee0ac7e4f9"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "99e3ab0158f42dfbd76245cbaddf29db"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "99f78de7c31e7244fe7942042b8a9b84"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "1be7a6eb246da0d6a53051e7568caec4"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "b2090776a742afdfbd9f810218c5201b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "c7c25e5d8b6c347cef56ac31878d48c4"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "1694b785059fc5e725567adf2c0d007b"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "a987124dfe1d7ae7f62da829763f940f"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "e543f3be66b7b4c94236075779f6bcc9"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "76858dcf0a4e535eb644176e66deed29"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "8c7f10dff14d0a3108843e82f49c7ed2"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "3b99803b870b491b11d8274248aab927"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "37c7f0d04ff560bcfec029a590f7e316"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "d2d68d9f9ba0a76d26bf5263131dd956"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "3ebf11862bbc796e75a77cd8f2d21246"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "33e964aa13ebf1bbbe6696601fb4d092"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "260c84d935f0bb7b49def7687d0c0b37"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "221e88e4795be52356b5e3a23114f33d"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "cb885168ac80c4aee2de3ba3ed93ee1d"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "457c11009e9af0f2494e69aba0cb37a0"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "f77713aa783b184c5565f916ec7217aa"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "603e0835a10ff8e63cb44714d6e5ce7c"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "00fc82c9b2f50a15f43cff42c1bf8688"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "f083d56bd4230a72bcda27233cb93197"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "f0ed1e3838c8627ccd78b21fbd4a5f01"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "cfeccf31bc18a18b4634e139d5da1f43"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "8917837dfc31b086c065fb08085754f3"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "7e7c0c6fb2bc239bff8c7ec4e3df9d74"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "2d3632a1ab203979c88be006e47a77f9"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "d9704042ac58d9acacf8cb2438e40471"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "d50fae14ec9a76f21e6630a242b3209d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "113c9f9f7f9967fea09381da3698e0d0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "fe7f42e554a3773a70c1fd63cc044dbd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "d76cba5ff20e93b208ebc14bfa7002d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "7d9b92b6c5bf12a9671230b7d1212822"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "3bb51e1d87dc3c80591da8786c84f548"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "16d3b954f2d807ccac99a08a4b7b9103"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "e232744988733216b9467aaf4f6ad5a8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "3916dd26163b9d4f69de80f45b93aaac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "eee46ed77ddf65f12cd8fd961ee8cf92"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "62f453a17cb6ef89af4838f905607906"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "280b89cacb0ef3c5ec2ef28241570387"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "6aa2cdac6d1702b44f3440750b7631ed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "a5a7701a103f0c6b135205d8c0eb3be9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "233523a7ba27b9525481f241862e7443"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "c7496e1a75585d6ce2134ff701db7086"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e19c3e47a499fc9e0eb040c1d1553583"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "8753c5d6aadcb54cf35298e6e8975f2b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "04aab0b7f7a7f9d94ae5e7ecbe5fed5f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "fffd491a316474238e0875443454f637"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "7ed3d7b04cb9c6cac2808ac417dd0263"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "588440ff426951ffb146e090034f33cb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "c59161dfcdd6512384fa65b56e275d91"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "c98d94e0eb25aa87324bc54925a27af1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "8afd9970e525dbfe90fe3bc3ac445b9a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "cc3aa4cad2940c1269d483d9312d98ad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "fa968823c1c1cdc0cefcc02774ae624b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "054bf75602e603ac52a993a654c47daf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "0da43e41bce5884ce700b0bcab54fadc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "8a2bc8407046768b6e0167d78d56f20a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "9240b65848c1311509f84351798b34fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "9b86d15f3f9df753506e89b7cb5f1e03"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "da9e042cd3ca9b1312697e6b40b515a9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "a04df3e2cd9db66523bf46728718cc0c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "7867e57dbd143d2af71b45910d949fca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "c90a02567f5e47bfbb6d7b2ee4365b20"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "2b763cd057fe2f2120d5dbb079c69058"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "9c08b90223c47b46b3da702304995702"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "b346d597f47960288a04951ea0d499d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "d806a108e32e17f25406fc8f84dd3c63"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "c49e0d64a37ce995f78af41c270fd67e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "bb40f1a143226854e202c1e0ccbd8923"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "62c5ac8146f0e47148c4f4f50c1727ec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "5f442842282c9510e1afa41f1a34a0cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "26efd7fe5772d8cfdf42553ecd7e0507"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "e7226d175a15c4661802ba9ac16df29c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "10c6865604c0c63a010fdda6314ddc57"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "2b284bc079416539fbe71e738a15dda4"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "28d5ed2784e25d3a726485ee01cfd288"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "61a7a7c895760bd7bd2c33ed31d328a3"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "754f1d5e71409fdc710fda8f46c04e7c"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "0ae7a2dfb3d5cabeb539cfcc6dc13d97"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "37d5338da2bcc8a26d93eede8017a50f"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "3607a8d8e354b713bf0c94c726db9e2d"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "fa6a25ffbb7b2723dfee3f60d19d1bad"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "6d86f1661b5c9a1de21c02b40570c313"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "a044e66358f13149d4cd509efa338456"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a6c5ee0e18c09f2f4200f83629450e33"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "35dff024c51cf2d7ab7bae60dd9a2b49"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "57e87806792eba48c28395d4eb946ecc"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "93497150595d3bbe836a716488f4cbf7"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "5d4a73505569fa8b4b6ae94fe9de8872"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "3aae65dd88389d6c2613ce09ff82689c"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "ed7542ea92bbe573b8523a89549d36b4"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "7247802f409c19b4d613a654f54f45b8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "7b2c8390ebd8ff9c566b2a5d3c54d055"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "461d9f203624eda1cf8e182626ca163c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "b346ae8d5ee6e4f8fe55cc85d6d3aefa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "1fe54160b876a30c5b01892ed28ebd4f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "33effd7d528b129dbb4a9faa5ec4e3e3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "081e8f47b4d331e331cbf8d43b78b3e4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "4185448779edf9bd432ca55dffaab5eb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "360275a1f270c12a4b606f452d7520ae"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "4d3d732dbb4ebb53b754aa8501dc1d26"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "0c745ec2f4a6f421b3682ec5ba5454b9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "956f421026571b716be88979cef78222"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "e8ac25e3e3bfbbea52dda9748cf8c190"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "b75a1a8ec981c494ec6c4c3aaee4c40b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "5e95b0a14d8cf140d5a1e97c99ff685b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "5f6b56ec678832bebb5cf7b44ae8019d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "700db366b3cc4ee9e4f99457a510f991"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "3a52ee9d1d0f341e3c292a59f543e7a3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "5854aaf658a17ff09d03e5a697cf0381"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "2ff6696204fb756f7d27667a36aef402"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "b2334ac489c60976bbfbedb8d8d1e452"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "80c3d2c3524e6e5ba114be25b70a3ce7"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "a747d95d6bfca715895ec5bd2b00a127"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "26a3affd3e5df10ceb28d4534991e8ba"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "ccea8c57a9f42d0e86302ac53264cf3d"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "5869f56131d1047fe86e7ccfeaa2bfd2"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "20d4ba18eaf898bfd42d9ab1a778211e"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "a00bdc667075594c7438f651878ca021"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "b3ee3282c7d8f4d985bdc2a19fb881bc"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "0479ba6846ac6aff0650b79a7f624318"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "fac3f6043a914624bac325799186549f"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "ba49fcd95a108f6a3eb619479cf8dce9"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "c6e08a579bae8b561e70f4b31dae8743"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "4ac196485c544db61cb6cde8a3689bb5"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "40c8e05d4c176c572df0c53d0750b54c"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "f58a00d79cd37f228f585c2c8d87267d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "9604945e4734e08734550b6c514d9874"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "7fb8224128c797eaaded562ba0b7ea41"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "d61338fc35b0aba97e61b55353dd131f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "844b3147d927de9bbaff680615e6d60c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "dd77beb771f1a2143b4084970372ae77"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "bc6e47651de35e3b396e990bb1aa00ad"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3a8c662c602ce350edfc80bf2e61e5ef"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "9985822fef606a4b735c893e22b260d1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "aa24f0075a82b62cff6ffddb81052200"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "269c2e69a4c6baa52f99c5ff537d9a56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "bdb9b3cd43839d1ee0c526db5d7389d8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "6e4ebbeaa6f357964c9a49618deea1c4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "8c88ea7f26f6e78fe0a4781f9e19cfaf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "e178cff15d3726815ee0ca179d0239a7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "0c7290e81bd84fa6cffdb4d7e3942345"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "c5278de7b920c426a6283884bfb737ee"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "95d587ce5ad7630fff5a4880e9daa893"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "fd66681f0dc3422f083e1caa11357568"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "c81db81dca14444fdd85598bd7f33614"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "1c52225f29ddc0253fd286a4bb1c408b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "07b2587ddd065ca9996c377c9d152d43"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "3689ce3097d0ce639ec00243aee17777"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "d15c90949628ffd3ecf187f39b092db1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "eb794cfdb1aa907ee8dda935da28b7b7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "6ae0d191205747e87d9d0cb431aabc88"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "0ccc64c55e9415d7b04979a538d9fb37"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "22bea49816f57b3142c5112b15b31e1e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "b7749c8ca4ffd93bd634338e7ca36b4f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "17be382bb245718959a7c1ccbe4e66de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "52e95501c516afdd44ade73def5caa7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "d60b7269f99880ca615b97c23c2e3456"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "36dae65823194c522de2cc96c519edbf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "05f0aba9183d7f59006db64bf8c53663"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "481a0e5019dfb153f08ee65e0bdb0c48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "9ce088bed2ae428030fd1d947a8ad6e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "0808fca75125a8170a76b5f57563b828"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "14da1d1cd11a2b19d1a87dfb26efd8ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "47fbf00991d730d6a51969634878ebbd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "b31b990b74759cc249d3a6493d734c51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "65a804426425bbf552662dfff26ba6b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "d0bc4bf743d210b1814cad99fe8193c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "82226798980b382cee0fda3a426533a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "1fc1b655ee3a23a74c272a34eb0d40cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "fd6528f7a4ad09f92259e1b3be7e55a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "b6977daf83df681a3ef405535946c682"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "5d91b441a035fa5fb2553a698198ef39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "0f3893f13dd492964b73d4b0c4a97fc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "cfe4760b66b9da7196013f4d971199df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "ba887621e7ba6d5397926b31c76db58f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "717b19ced7d908a386f4d395fa7c7bf7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "5f1a693e85d4926daf2ee8f3ce703257"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "51cb844f5fe529b0508799afb3b94d4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "b33ed02373d619bec98c448d6b95426a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "b21e18e6b83f874fa938c71701fa02ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "bd295622975aee2d38d702b42ccf28a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "3c6b2809916a4d6401e46704fd875902"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "76d643e1c8c2978eeb717e094361943f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "a6eed8f8da1c7f1fa976c935a93311a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "99c156a9ae5a22f1b45815fa8ba460ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "2366786d83739a10e67734ea6e8e2f83"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "04e23aee44e938c452ffa0c41df964a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "f9acb85b6834536a4a753eea9137868d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "59e9e2b60d6d8480d58d78a5dc7cd215"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "32ce0c45bc9184ba3a9ea0ba7d9c51a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "8f90df4020684e24adbb4d3bdc398033"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "44a61c7f31afe3a9934c47aaa389ef3c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "b6220c2ec743875e70f7ce1ac3c818d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "0cb5e82659de3fc8f9023441fc1a4d6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "aa24cdffc3ee77647c6914fc01467181"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "84e1e6700cf95886d6a16b8bf958c9d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "b06095b11e642aba2866a7d9fbd7ca78"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "766c727874fac07300b5afdfb8ef03c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "3ae591f0120edcb14f5ed5076468c550"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "5deafaff3c7f7074c3196892f28becc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "ed6426689024cc912d1dcab7068ff1b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "eadb94f99c21f167603a19805fcb78cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "f130ab7317de223a3fce2d91bf881ceb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "a89c88ae571da591b0de9869eaa778b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "1ce7467b2a23bcac56d2c17460a3b04a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "6927323997b2fa940f6e7f609e363711"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "59e85f5cb70abc3f753d2c0a5111fa71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "1193b9249f050be7cae361b9a650c32a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "f4d0b60c6cbcb3c7c15a7c2767d64fba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "ba4824dcb7ec0243ab87bf9e52baab44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "aa5a52919f7d0faa08039363c223f4cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "82af588a8e33592b1a22f2a3f046eb36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "3fa3e0f2a25580355bb1e06275180f3c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "f8a1955e15e2fff02b65e855d1486b9c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "e51a92a970da0a4f8f404c18735dca9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "94155834791e9f35e37321c32c46fad1"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "5291335c82f4a96dedd8956344c701e3"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "46458e8db31cabb0eda3747eaeeb4dfb"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "178ebf5a87cb89a4cb9f034b99cf1528"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "9c613b124d9d2459f0c844739f2b40c0"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "b30cdbd1bbe89070933a3620d7ab08de"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "ba72b41d757a93357d5f40270e4643f6"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "5f6d44eb2c26fae7a879ec175c4fdd08"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "b0d7b1780deb26f0927cc6ef9fc6c2a5"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "90fd46c2783cc3c709128968073fb258"
  },
  {
    "url": "categories/index.html",
    "revision": "f8d7f29e315177b4b21b7464e94008e2"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "b5d8a9324f3250274d2c5b4c2edaab8c"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "48049452fcc83f87b8fed19b0c4c1a6c"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "605859d6e843fed3b98a9eb8e7839cfe"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "627e3c38112496a5766677d5dff48d49"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "f57edd520df2b7e8bd3b0d3926237f6a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "b3c3810e7d3989b3fa5a9db3810d9bb4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "e4c4434ad260a0abb5f63e620da16c10"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "231a0cd11beb02680b47811de7e85ecf"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "839a2737deb3210d918d08f071d7c778"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "505f79a0271e3586dd323a09580cf4a6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "4227b3a9af83102933c904bbd2cbd93a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "4cf2de8d0fa3595c197645971f48a361"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "60ac9fa4b8367e3d127541ea7f899ad9"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "16d6bfaf052a3fd7c54944398397817c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "06665abe44585ce30e8ce35a4347c44d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "4a1d53f4db00da52c0026b6c5fce2da6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "3c14b7e9b6b5dee285d93dd37d38baaf"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "38f42117b8c6d3cd2fbb4eedd3d3378f"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "2edfec45f8ec8c5f574b014ec98c7c60"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "80857d4834d25fe325e55f15d2e4d52d"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "ef9b5c5cd900eee5fd463741edfb01d5"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "050f5448de83e68e1719960646e9f95f"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "68db115937a33f27a72af3bde68193e6"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "7d54a9318dac6d72ba3252fb8506f679"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "9ffc57305375a8d705fa89ba41873040"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "8ca51c543cc0afac2ce0d1c8280a633a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e6b0f81da5b403b0de799fb0ba388862"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "e3a8d4089e1e8638bee70cd90a22a6b0"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "5fe8f6aba85e8603110f8aa12742c480"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "49dd47885b3af305308abc03ddd9c796"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "f5609c6880793adf3da8e77142dd6f5d"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "b9d011735c3c444d247d2dff6ce9d8a3"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "f65a152f2dda3994da48aeaba235ab80"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "81247e430527246b34c8dad95aac2c8f"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "63e10c7d2772b36732b103267d12eab9"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "888672da98053de0e67421fcb6ee9693"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "8a8b117ee861f6468d83582f4c9e6e24"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "0e9244d69e4f2a1faf50ea4235d5b766"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "c9bcbc26230064a2ff0c472cff6bc418"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "efced419da79434499c6118b1eb3ec0f"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "bddc0adb230448ba03ff1cfb96dec805"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "b3ef0893cab0c3ba61353fa439f097e8"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "c8d4b09ecba99b35f8418391b5c454e9"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "a17571612f997feec9d220700886bb37"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "ccdc929ac5e4d30d078f16d44c0fe40d"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "b17a1849bbbfaf53e097525ba64e17b3"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "fa7d90afcda66981ef6b362a7bccf5b2"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "dd0d36fac7ebe4cf1856d699f3ae5d14"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "989f1f21296ac21ff57b6f8c5594a420"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "a1c39a87ff32add25602142839bfed13"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "d5bbf137caa8bb3928832631023f0540"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "ec812f097dc7988f67c7a4e0aa1b297d"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "21bc9fdaf43bf2751d3ea4e4f0345402"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "828942f6684d53b468823133b55033c4"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "e4ed3f0fe9e8799ce2c58da3ba8b7b90"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "4831fb9a82b74c38e7b8ba9baee31a20"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "2568281dae7a33626897dcf43bc97f9f"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "2bb57804734bce76c70c7335dde501c1"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "5e1674145badea3c1ce76be760276a1e"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "39dda82ce210ce705d43dc32929d84f9"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "dca69f25b422531a4b6b85b5b472a611"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "31606ba84e2621258ccc7088736e1874"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "8b1a64377b0252f214eea7e3c772466b"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "9b0518e0b188dc5f420a6e38e0636444"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "7b2b04b6ae3abbfb2cde9f32baa083d4"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "e64b0f982d53e90f6f5520e9df580864"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "1c2eefa92a7f5a4519a282c98f3d6150"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "dc6b18c65c78d709094099062d66c52c"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "b016ee24a0bcc0a76f515625eb2a8a98"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "6f717cd67c8c26c12914a8b1ab3fb177"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "5c8e2cd0b2145f4b48cdbd898ec0175d"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "dc289ded31ca1be1e5fdf8fc36355d09"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "b263fa2deecb159277648162286a2b9b"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "760634307856aa1615d22dffe77d8410"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "c12316ea0f97aedfa8370530663225bb"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "b1d64b3ba5dac4b27bdff96cfabdc309"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "878667097e5776e54dc98dc3072fa741"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "55ad9dba3e092b7a27495e01bfe878c4"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "55c5fecf894094c844f7bb6799317044"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "842a35d1aafe4f4df23fad1bd2369493"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "a41aa1f7e44ef50a8e4a347b1525a8ef"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "e9e165a7a26dffffb66f50d87b7831b1"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "810bf4813781faf7c9df364277ce9473"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "3e5cf531fc6cadec4172b07c9b1ac8ea"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "69ac7c1314c10ca896fc8f439dde866f"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "e746c779abcce4be9dc0e6bc0233606f"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "ed0ca7ec230cad1e765638110872a524"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "e86ba0445acf79eab35ddf61639a5f3c"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "e31231bfcdcd94ae329cef5e7a829562"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "f2ede9c2314024730eefc8d6cc7ff124"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "620e78c65651072b2c4716d5b7f7fd11"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "78d6d0cb0f8deb82874cf644e1baa057"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "f4810af57e09a11e6622ea52def330ef"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "57211a2deb28ddeaff01d763e41f72e6"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "d42fdc11958784573709bdcef5b95c64"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "77c6a79a2da437ecfe4b2720af13ad82"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "beb3d76f4e39bac7edd1a20ac6e5912c"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "30fa1fda0f25081b736a1346e8d1d797"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "0c3b38e800ae510698e78123cbf64db8"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c3ac8cfe71b8150719957b95f519affa"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "5036487549fef9b39deaa946e1c8cca1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "e4fc3e16c056e589b121507d10df545d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "700cd6d25fcc2034c86654c02a90b076"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "8e88364535d1dcebde06e05c3945993e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "678dc7f94d043f1f3783825db2c05b0f"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "b1be38c233f5c9a61da1a00afc5ef0b0"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "55c1a390964afcac728f1480e1304490"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "33d72ee5107fa301ae9fb2051cce3655"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "ad39b41eed589f8b1d9c275ae28dfc4d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "bf164b388a58b41c50e71e8fe2905e8b"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "84e72fc841da0aff174b2d1c7638b0df"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "300fb8f5ab04f9b1edd850efcb9e879d"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "93356b977d223bf4159d782988440c6f"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "dfe19cd7fbf61ba6097fbc746e72063c"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "ffee33b3fc57a8ceb8c0994177eb082e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "9fef82657e047f1051df164a946b9640"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "4f05365db71067209bb3cecd83cb51db"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "c9ff1e14f64b7de640e807d56d30a2c7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "b32867ec0f82041a370a4101feebd342"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "c16f11e1ef2aafe4fede27f76c85d366"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "9bc25953a6eaf4fb1f8fdcc5884d692e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "bd631ae6a204261657502fd502ad56b4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "4b6c56c49aec07b0ab08b05bf08be122"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "16b67cadb29d3bec57b84f4c30a3bae8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "eb8761f16167a7137b2f0db0f442d3e7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "25fbb249addf2273e8650551b4d9665f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "bc52891a957d92f1a78517cf8211528c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "ae8c354afbd296a7a39c8b708acf4fe7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "6fdbd7755f9629deb064fcc09d7f7505"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "347cb82a8f02f572fc8e97fa41485015"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "81dd6fc313ede80368ae700f93fd97f4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "8af100967e61caa405ac061bf6e0ec4e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "d76ce0d25e21824ef3231ad4529fd8d1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "3b9e4ca811fe6a3c5e16994e55c3c1ee"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "7f005a5b4b362ba7ecb29fe205ed1f19"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "b9aa57d27c44cb60ff157c444afc9d41"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "2355ecfa2f8f60327231f004ff492e22"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "cf74bc7ee80ca380b513c3c58561fdd1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "bb4ec70eaf3fbf6dcc2a5957c87f50f8"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "3658a1c56df82ee3ad71e3494ed9a9a9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "b1707266b4c8087a20a1b1f9542cd217"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "55eec25953904fef85aedd33cb917d36"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "341ec3f444fdacc2d924e9bc2e215709"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "0ed7c0873887d06e3e44c54eb6709061"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "8277781089def11e716b5ff3aaa94a37"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "b822f3330b40713d7938774262569378"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "f9a7fe31ef3eba318a1a85a403ef633d"
  },
  {
    "url": "categories/os/index.html",
    "revision": "f19a72365c48e54ad8f8168fe8a57aec"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "c0f5244c626e9d27f1f49fe09ce7cfdf"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "e214fcf4cca5cf8e16e30cec97f37517"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "60ddf6e09a35ef47399fc0cbc686bb03"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "15f87db6470e5b23e1bc3af0d51b879a"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "f964873e33b6588e525100dc85018340"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "f0fd1fea3e91d2f18f69d1a341e69fb4"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "ae8738ec6ae11465a6cfa36897ea41d4"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "0a36f6d36117bfd747a4b82b10528d8b"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "729d51c161a22ab6e00a5c17abc6fc17"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "74ac547922834ef28c363f3bce62164c"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "a8a326f3499621defd151591e95d3574"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "4a4768dbfede22ee5498acdddca3f8d4"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "3b78f655b2ddba3f7c004659bd5a820d"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "eb038a54f42b7a718a708bfaf5cdc7d1"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "1ae39802ea3a7cc84128b027c7a46dc3"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "e920a53f4b6f00df5f6f9c9fa61bf078"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "8c61118a2ae1aea225760b9772f78f8f"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "34f4e18564ad1634328e090c524fa1b6"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "d281cb8476d5a9362ceb0143ae6cfd39"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "2489abdd8685fa3189f076f602b36dbc"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "190de26e7ae7207187044e75f76df259"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "04ceebae0a4b91067123bdbd14f89457"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "086958aa7c938c156ffe269f19faa12c"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "460ca6147c8040e76789bc609b58dd8d"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "8dd832508aeafd75437c48be5d335e8b"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "1c5675e8fc20dcd58824bd90200f6c0c"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "9d33212823ac4ac3b3319cebb28db870"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "29687138f64441f7988c2a25156d5180"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "e891e1557e226c5f54c7a3987672a9b4"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "9d9ba5e3d5aa00813e20ab9a92c6bb84"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "753bd699bbfdcebbdb4d2dfbb330afb4"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "5a426bc7b6ae0cc8324c489d92d130c0"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "cc16d6bad1291cf49b331b996621d7f3"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "c60451ea48d3857f0c969dd01db4b487"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "efb8d25316f533dc363493ebd28057ee"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "23b1a562bdce0690553a664485c7930d"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "aced7d1c901f31a1d5bda078015b9b61"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f4e53ddb041df087fc4f1816e54a2948"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "1a510e6c6a98257af7da25486b137de9"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "1f768ccb849fb057117feaff426119cc"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "bb132d410741f266ae2321c3ac8eafa9"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "19288cb468bb063c91618f2715c94d2e"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "8cf3b1fac46b9caf50e08971ec7e3090"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "70f2fb4134e3bc1955770b8bf99dae77"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "4f0bfde7fb79f718c4843b55fb523767"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "299bf252a68feb0b979a70ee01aabeba"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "af1ccc62f9d6a0e601209a8008b47e3d"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "763fb327381f0a2708d3700a922e86c4"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "00938c01ceac58d27025589fc69d2a75"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "6b345320865d65a990b6dc30ac7ddcfe"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "a70d8fc1e14d6a6373c291c97de379fa"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "37a229fef609b6d403a0885183175c5e"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "31c6bbb9338b1fadacd5def3e409ac39"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0f84fb58549254cee3bba3e7ffe027b9"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "5e4bd86dc6c1c4513eb3a1eba9f2dc2c"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "0f2213327a491c56b9c23b82254857c4"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "cacbdeb8d1a7f5cfa5160e6d94c8c641"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "bd8d2f3a3f8e8326d6a91ed580378cb9"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "6430281d1e35e13a6e936aaa25efdc2b"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "68d76253c26c194baa998dfebd1a4795"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "79089dc3e6c53e72a1fadcec637a2b9c"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "88cc2e57021f3a3d361e2f1f053fb1a1"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "f0413ce7cf58eb48f7ffd9eda686e966"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "9f4a436be803a802bba07c939ef69243"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "e660ffc9d4daf6598e478b57c9206f3c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "696cbd8b7f107d35e51ca5b292f23e0c"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "39e993f68b13937001d1c528ec51e5fe"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "00b6ae31181c7841ff1d2bb19a328f53"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "c6389cd07ae07f3a866892a9a1c22cef"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "b012ce569abe8ae426f46b32857ecbf0"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "db95c4cc8555a6b7e126c034b97179c6"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "d4666927a2f402b3a5ca9b2fb029336f"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "06667ea1feca374f6354d238993e39bb"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "ab66c526c5caa4aa1213622b9c3ba519"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "db7fa365c0e11faf2e0be7f72f058114"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "c0d5c6c9a5debda7c2902e1a1ee6d911"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "40bee974901c9a9f54820175735cf86f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "954710a0264600328f13ae575fe0b04e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "6d484dbd33a1bee4e0da9e5977d98b02"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "9c51c820430eb5d32081f400b94e4b40"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "450e581e041a84372f0e5e2669686c78"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "2465d631353777e2f4e9b88bdf6a5713"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "ed74286c61a0ba26d1a0c6541e0abf53"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "5a43e40bac23409fe2578b7662a683a9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "6ec95ff4aba9c2897143993fad6421f7"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "eecb8236c24bd0277e3d74ba93c8fd4c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "bf626ed634f71822ef8f499ab03a451f"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "09bc166a0cf944c6e2302c9fbe593ab7"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "26c89543f28f7bfd9e817e8b90b62c6c"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "6567fcb884399df156a5f3d2c7f5661d"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "9ced244c77dec50adca2b80274f9e8dd"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "8b2728659fe7af526a47795548e63ff1"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "109df32d400b418e798384e73c91b871"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "a7efa5b5d1b07b6d5c9e89934b7d56b2"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "45c8bf53558d42c2c241f408b4b7ddd1"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "d21f41983908ed0831e33d661c490303"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "d42598282312208b58c023660423ad50"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "6a3247b965d4923beef8d234993f10ac"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "2dd176afb8255f4e61edbc920d8fe9e3"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "b59e64255cd046f814fcdf85bd975e69"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "ff831728654ba28b773642ca4d3237f4"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "cd6370e4a607dd6dba4a414fc453146b"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "ef2b1ac7cdf7882407734d9624519231"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "046db8898c77b6b02049721356d3f6f4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "19dc4566ca686d5067dbfe7d0281e5e4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "0aa15c7880e79b6114667e67d2c63628"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "a07a5fe812ee5c1d41c555aeefdc195a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "5c322f726ca78a74986a87d7dab7bb34"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "49770daf434455622b007263bc61188e"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "898fdb0754d678601c8b78b76d0f787d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "6ea546359926fb1241dfe7472656a3bd"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "155472c1782766d082886b27413eed98"
  },
  {
    "url": "categories/php/index.html",
    "revision": "32834b26d2b38213fe637fa968680db0"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "145e70dcff30d3c3308177068530eb64"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "5d4fe36993293518adfe3587eb0529e0"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "e9aec83e60c21bbb05b3b8136d669642"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "3d0798ab71802b76439e95f023a42301"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "50b84f016319e3a4cfcc763bb6217410"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "1d2265ba9fec022f00cb05b91e45c1d7"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "020790a35968f890ccc5ee0d48c08245"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "e23522cc0b167ec36ecbeeebdd7a9fc3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "df6dfe104240fff0a1672af591704343"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "8c27ec4fbe57d6c005873fae33c13309"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "3be7c4a1cc4afbcbd0d2e0975040d0d0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "ab500cc1ee9d4571982b4236dbbace06"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "87fcc02bd07542483be23217cdd37d79"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "d6056abccc0c7585e2be955b5ab3f2c1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "03964e6f300bea96605de0751df38579"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "bcf198975f9b1cb4c1fbb3b8016e486b"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "5c40899c7327354a953eac723bb85fb5"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "ccc9e3c93e1675fd850ae6e20cc1abf2"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "749fb8b8872105032f5481773a29cc4c"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "c38987b9769b465e7b543cd9ebf28047"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "349f6d9f8b2b0a4e5db08b4bb6a72172"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "54cfe64d73d265e8478826252ffce66a"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "8ba939ac667edc57d254200a3e7708b4"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "5020359980fe527215c098ba51d61f3a"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "6214fb129aaaf389315cb3cb4d61b7d8"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "703d670b5aed6dedf7f572383900fcef"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "3d2d56fa351d394c1a613ec17aeaf40d"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "85ef283faae0a243a2df4f1b9f27c844"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "e1c57ae1d43a3c951fd44cc1e8485136"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "f89b86a096d1b59e863eceac30bc8b23"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "460aea9eee90abfd89baa3acf6b9a434"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "0be9c73cdf2c2eb9fec45c0ae61e4b53"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "8acbf6e2d2589003b1f2ebb4e6f8f8d3"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "82e0eaeea4cf1f20293f29c0a9c17119"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "5be2c91f36cb3b8b3199c42454417e0e"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "c3287db384dc421f82680479c68150f6"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "cf707e3159333c652e6a288d0fdb1256"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "e17ee9283939d2ef5b4caff89c7eb3c8"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "fedf54674247f88bc028f59dcbd0e23b"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "e0049118edfe29748013f4980a156bc5"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "e0718dada5b3d7bfe0822c07b879ec24"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "13084c69a6c1410142401cae6346190a"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "96ff5a26d358de4000db56bb21c47485"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "10df46a63d8ffb852b315bfdf05c72f9"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "4092d63ce8503d4b4cc0ccf6aed45cf9"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "e484b55344cd965ef9c855de7250a9b8"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "0c4011414803b3a919f6bbfadde5a4a7"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "7657ee40662dae69ab3d0bbedb8952e3"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "342561b63edcf03d0d6948204d52a3c0"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "e6086c2fdf61cb78c2343e963db04503"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "871ec3fef959317a94a928f0e79f3676"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "1c44c2832cf8669e895812a9d0aae10a"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "a9093883efa37878357772662027de70"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "9f48febc23b1c9ceb5aea36f83c95e6e"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "096fbdcee2255b1047e1abed37a7bd62"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "bb1c99866de9a697cddaef92d2e5e835"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "efc6f7f67a395777f7232511240fb56f"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "bc45116d945085d695d52ac87e367532"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "00ddbd8862575bc65e1e5f17b9dfe89e"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6ac2faacda1d3ba65637fa8518c9b3e9"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "859c2d91070c531732667e638723e98a"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "4121d669d93726a2221cd41a1e020ef2"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "61c65b5ff5d15b9f880c42e255873460"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "1091d42c5d496e35b1545b654f58057a"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "d8282e162efca2e9bd9d95c2d536fcf6"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "e423b25b66600bcd7a3e9a448ba62897"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "f111e583de39a266e7c461067b7ae07e"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "688aafe19e175a26446b5c5e339811b8"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "d29c29e855d90b811b35ebbc880afb73"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "3038531e3ee17ed36cd84249830691a3"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "e7688fcfa24d4bcc8fc8a0bf742e1b3a"
  },
  {
    "url": "categories/system/index.html",
    "revision": "a6b00c6c7bbf0045f09b37964c9a34e6"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "20ff096e1511103b041a089e6e449b8f"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "79077e12691d660af88c9635742d6643"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "4acd995b39d596b11353585e8e5c012b"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "4f85132583317122d41c4565f63e9b56"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "3116b0e9b3a27d0acd93bb44824272ba"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "5d85e8088e08c8836ff005a9bbd9929e"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "a5a02ab59d5e48bb40dcb215f645c0fc"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "042cb6466bd319e931ef3a881b7513a0"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "85f66053121f3fdb3c4804d272733276"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "139ea525bf770f45e60b24d4c891ae69"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "12de684c5fd8ce0b6b420ffd1b436688"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "75e4ae06e0c31b39d82be6b321de780d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "15e9c914c693ffdc1bb1d31916b36f0e"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "d3216a7f21c041c7875a426fcdffa5a5"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ef5c90101a5ce912a870d9b5586d9d04"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "321db2c333cc9292fe5892ecc2be8642"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "0d06a05319c6481cd66c57ec7cf424c8"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "4f06c31eabe800c48f2c0760b442ee7a"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "53dd490c4dfe7414ee9c96a0e42d7b05"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "6826d0c40138dc74a7affaf5aa1a4bee"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "112c9e575c4a994d92c36a192b9f38f3"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "ca276f1bd6df11e14d85a3d1a5bf8023"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "d36c8c2ebd745f5fe6d59b055800859e"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "d88a9faf66c1d99e084168be37c41776"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "31ee0b82f7435fbbe990f8f3c066bc98"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "7bd568ef8ffc409ffd0975a6d7263183"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "964f51198d89a794a389230469fed266"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "7bbdc3a65704c87ed622fcc39070202e"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "439cf97b77e0e410829e481042899638"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "a5841f171879ac1f16f2ed389a07b38d"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "e8abcf1f8d196ce99429262be0abe7f5"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "7463a1594d593cad90ca488d3edda8aa"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "7d89780eaf6664a1903b1712a19b7e7f"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "24765fb91bae2d64bd789ad738588ccd"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "0b96df575934c0b6d6756431c8b42ff8"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "360385fbacff01de474d166ccc0ca2ab"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "3bfd0510bf68681101ebe9c93a79bf7c"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "5536c2820e7898f55754d03258932a18"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "8843ed8627633db0ceaffc99f3dfacea"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "5fac66a1f44b981ae59876c90fda5d17"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "8d347eb640ebe42c7ce4f67d0a8e9619"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "1f30a00cc0c943ae340c5ed3524cf8a6"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "de670ad69ad8981792740ad9babfad4f"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "d9b0cd6f860576c81bbdd129d40d92d9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "7846dca211cd7ec9afe8236238c8f70a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "077c7df7c5ceaabc6d47cfafc9f72c14"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "56cac2f62d11f5f1ea985f071a796eeb"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "c641b765c4e87a6202d1b82b65f6d921"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "5903b57c031ab54b707fb6334eebc7e9"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "530df2d3a0e0e54bfb00879e5bf7d7bd"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "3a431265d6a706eae020e672f7a6ebeb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "5b76346494ada733db051c0685a669e9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "73bbe82a018ff97b851d4150d45bf1b5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "fa18bcfb2b864c133abd22795d57e3a8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "b484fb973c37665b7de32794222107bd"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "7753e2555d8cd5fd504fbc578b682e14"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "1d2bd897b4948fdf8e498c412cc1fe0d"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "52e0cd94d9a9b19b1d3660f653852028"
  },
  {
    "url": "favorite/index.html",
    "revision": "52a94a78c231a0f66e3a92c83aba7c22"
  },
  {
    "url": "index.html",
    "revision": "2bb2531ac83dcfc8149ac4854498d332"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "25aa519840ada570b3648ffdbf486493"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "9a44a70d8aab1ed94ad3c5207c70f1e4"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "e7f0b5c4ec0e53a844d463eadb5f0f81"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "230b327245da5caba7038208155ade01"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "b18860bf4f45372a74b751f3ac1afe4a"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "7825840066b75f0ad6b8130b0b0c50e2"
  },
  {
    "url": "note/index.html",
    "revision": "abffb8578cbe52121fdc49158e442c48"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "9b374c41ca3b436a4e165f95d88091e1"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "a3a91cea158f97434bddf2dd0af98b5a"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "adcdf77999d0bda6c3cf52528ce24dd2"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "037ce217dcdb06c4c0359b77e5de4ddc"
  },
  {
    "url": "share/index.html",
    "revision": "2b6d175c31b2727c66e17353f3e4d98f"
  },
  {
    "url": "single/about_me.html",
    "revision": "81b8cba4a3534e2544f07386a1298e86"
  },
  {
    "url": "single/all_article.html",
    "revision": "e24425c31f4928b8190d0327fba855a8"
  },
  {
    "url": "single/welcome.html",
    "revision": "31981d79e428a243c46c2cddd9991bd0"
  },
  {
    "url": "test/index.html",
    "revision": "edce02f5e12347a8eb766568f280fa88"
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
