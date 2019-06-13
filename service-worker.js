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
    "revision": "46f01cd3caf0b77cf409b72145dd3c8b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "ef6d709542a3509d60c0244f5abe640a"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "60b9bb0c5bcfacd6f9a090207d9ceb50"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "3020e0f58032576961c9a4b2f80449e0"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "cc63e59c8eb9745a6be31d08e9bc8b68"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "37d19b776c1f619d5367841593d88194"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "73059fbcff3370db4ec7611b75adfc4a"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "95e7e17fc09a852ed5cb54ef03b0dc46"
  },
  {
    "url": "articles/index.html",
    "revision": "915699ce1fcfc9876809410170c19009"
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
    "url": "assets/js/1.3da9caaf.js",
    "revision": "680b9549b6e55abb43b1de8c00d24e67"
  },
  {
    "url": "assets/js/10.0030d769.js",
    "revision": "176b9ba67984bdad23e217c29ad8de07"
  },
  {
    "url": "assets/js/11.a942ca69.js",
    "revision": "b9468f3414cea9c2e43a7beb08379873"
  },
  {
    "url": "assets/js/12.1e367ada.js",
    "revision": "0c7059f2667b3ba610b221d26a901af3"
  },
  {
    "url": "assets/js/13.930ed366.js",
    "revision": "c4f5c4b5a20928bed0b029648aa2cf8d"
  },
  {
    "url": "assets/js/14.527e72dc.js",
    "revision": "41c732ce03ec3335a80845eaaf37c4b1"
  },
  {
    "url": "assets/js/15.8f9a8a59.js",
    "revision": "6a2ac0218185783d6e5424190573ba10"
  },
  {
    "url": "assets/js/2.8fe36322.js",
    "revision": "a0fbf0c48e8d7351cdff828d8c55c5ea"
  },
  {
    "url": "assets/js/5.bf9ad07a.js",
    "revision": "0af5411009a2c538112fb49b6c466436"
  },
  {
    "url": "assets/js/6.e84be67d.js",
    "revision": "12b828827d41293425db26e9609041f4"
  },
  {
    "url": "assets/js/7.df9720f7.js",
    "revision": "1ea1d670411e2e26e4a08be08e7041ab"
  },
  {
    "url": "assets/js/8.b12e7d24.js",
    "revision": "8da4b7a2347ce384873d897a2bdba226"
  },
  {
    "url": "assets/js/9.908b9ffb.js",
    "revision": "fae40b088c1cdacc1ea4e93878db1570"
  },
  {
    "url": "assets/js/vendors~docsearch.50c33dc1.js",
    "revision": "13315ffa144b3ab5495cb13811c8e15a"
  },
  {
    "url": "blog/index.html",
    "revision": "25897f459f251162d912c9c00cad0c63"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "3fc45bcd7677903777bde9984a4ae1aa"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "4009c3673b6e570586fc0e2250772eb1"
  },
  {
    "url": "books/index.html",
    "revision": "af07342f357be8fc8d192d4cb50e04ed"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "ab7baa861ca719dcc863c1a151a882ab"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "fde3f23c6a2cc7cbf6320af4138bcc42"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "10b5e494427284f3367ef167a46e63ec"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "99e2d36361af32ace6c206f4260b6860"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "92d9a7eaad810892d6403ce686c2febd"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "d2adcda0424781c315c40ad72cb5e1de"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "cc8e2fe908dd0d750726ce98580a113b"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "2823efa210890712918382ac7235d31d"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "1a23c0b27db8d3a9d93091c0f530294b"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "6c02d6b41bce84f0d9fd99f8d1fe82f8"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "8851d95c5c6aaffd8eebdc469ca62d4a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "a951b595a5672d87a12f40c9a35740ff"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "1006d9d4c52a1e986feac70da854fbf1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "2e3bd6d99187d61618ffe258ee40d14a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "d52935eed14ce80b49e019506755a715"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "7b23ad59ce2cc9f3f60e5f0421bb042f"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "ce58202abc2de7b810e54fcba6a6f679"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "927d3eeff1737cbd89ada50a08614fc5"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "6b92b7ab2a81fa1183d6a2e13f1e815b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "416b5b93351b54c84875b6489a4bb87e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "47d5c2559212b6242982b063e7de0e5e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "1ed4d425d6586a4e01952c220b178aeb"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "17a7fbf99f70ffc176d2e205881d55ed"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "a1e6e69eb563a50491bbd986f8b5ce35"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "3fc25a0d33010606bf15fd3e1db5ce23"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "31034604c7743662015715b9d72ccc7c"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "d967304aee24920f0220b102532f1cbc"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "27f3ba43fb8ac9c3ad6de99deabb473e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "ef8bdd0ebfc4cf513b81d3b447c706f9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "e953cdfbebd6daf87c74896d88034b81"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d0664d89733d6b8a3fc0d1f7f8b1e7d4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "e652d7f7d03e3820d7768fd101cc16b2"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "afa9d17f91af833a5925b7d31e7c319d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "370195107a8b13e34f6a8a4616b0721c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "3bd9885d1ea4a0c8f58d48dd67afa06e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "06f0d5404d083c3adbc2f3ad4495229d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "932d4470549291053372f4def51be14c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "df518ab0417a611888968ed2e99793a8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "3b4683347aef657a9517b7e3af29f7b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "abe3dfde96641572a12a0f19e44c3f07"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "c4854379ed2c4f3a30b032d992fbe60c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "50b5bc2a68d4cc4057c43fc5754041f2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "a073f4cbcaa610db8ad1ff4daccb99be"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "1cf56ee7adc2a7f23578aeb078ceca05"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "0630b73daf02bb6824ea86e6dcb8436b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "5c49e338538c4092cd92395bfc855d3d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "8d8e9264e6ee0396c1242558dce9238e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "bfadfd5363ec1576bcd958e7f548886a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "1cfc4f4b13ff0670a7a43d07bbee14dc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "7b36ef86ff72c8d3d85b2acdb18d3469"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "af5e07361025959d68120f4713b6fed5"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "0e0ce305f232c3b074a3dd7a39e9fb12"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "20be74e2e47a187bb24690e4b14bf10f"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "e3486bad6bcb66ef0f08804790492bcd"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "628645e22d4767b02ef613a27766582a"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "aae3708541716365a82668339a255a4c"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "388baddbc8eaef086562aebd648dd3f2"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "1a5e7c80a703cd26fee270be819cff94"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "1c00c72f8560e59e7245a6ca79e107dc"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "4c48e789b76d3e9519f88e53736cc875"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "7276808f462f6b93e6e163f086fe6d58"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "8d9565a56dcda8066d1035fbbf557dee"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "8ed6731061953238fc196dbd214a007f"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "721a1a07e407258a45b071273242a4db"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "7a1a6a8aea8322aae442394961d1fa60"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "6496072c25558af054fc4f5f2a6edf7a"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "699f5d88438c07595788c65b918d5a35"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "6a1e9e51bf04b512235ad9cddf02c4ec"
  },
  {
    "url": "categories/database/index.html",
    "revision": "95a83e3d5a45aec123f87cd7ff87391b"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "28807a4778b8ce84d11c4f02dc729c2a"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "092f1c0d5de92e8e97faffc2a3054ff3"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "62df3922d680330b298c6280e8357219"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "7ac7b0cc9b74079c9552886f00c7fb8f"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "966c9f43c31a8b36a58b6d4297a9bfe6"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "ac7eb0e617dba3f855426c8e3748fae9"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "6234112ed4a5474aef191d7fcca072bc"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "1987efb9306c21fd25aee411d3cb7fb8"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "e2c0bf618ad38b436081a94da9826b9d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "b872d0cfefcfd111476046546636f4f4"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "0683aa70287adf07f81903e7ed4030ad"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "30991fbce4160f146199e350d4af45b1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "0e2b29d665909ec24c8a9cbb4dc1660f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "eb4afdb50e0dc0e29d5f61ecc108b29c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "584611a83fea02ac6b22028644f7a1d5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "6747f002ab5f1ec38b24a7cf79505d46"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "376ba513458f940090a5bf1f021fac10"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "249e7647c7b1e2edf4130ace8fbdb0fc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "7ebea2413b4d65b1b3fb0e61e0f88d4a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "7fd3e5dabbcc7ed45156e3fa48a1a606"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "2b7d5ff2cd621f36b059f67e0c9131de"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "0886408e0439bce3b22d67f60376afb3"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "532c9631ae1fc885fe90e5bb669987ee"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "e14b8a469b49a8088b78eb9075fb74ee"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "277147034fda2f608788cfc83c3e1c7a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "40b9138926d2f73e1a6d17d6f74127e1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "9e7a08b308640f5250ed932dc39861de"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "bf29b9729aa2a7fc149dbf5aa0895dc0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "f6cd23812792a99758034e63f0e4f785"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "bd0b0543c51ef5898bdc983697fe533f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "653abf0d775387254a031cbf7f0eb0ac"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "9d8bccc835c7cd6eb5985b0a4a01bb8f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "eff80c362ba86999b1a607ead0455160"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "18f380b79c2dc6c73b5a99149297f51c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "384e7afb0346de8414b6a3a98190e4a0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "ccd19b4d24dca82f01d74c570148b886"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "f417dc8590f6aa40b7b15c826d1d820a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "3eb0fa12c7ced359fa362ab3055fa8ed"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "af952ef283ca2f4b7724863889001174"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "8668b24c93aaea90ef6e314e28cca199"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "b69f4140450d9a92228cc6d0c8484a44"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "a016079b2bbc9eedf83843686bb9d535"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "433967678ffa250c375c2e684604d6f2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "85f62acefc1b952ed9dd45d5cc7a5647"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "4517aace8f14d87d4009fb62b3c1a84d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "84a8641bab7def8e4ae98a225888b935"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "b439538ab0849d56d42331410c16a016"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "f035ba94daa8aa53fa779b13a3b75f85"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "fa013cfe7c706c35b661f25b57adf3b8"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "1383e80911cb9272302c2784cd8e91ed"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "99d9e5ca797a27206e7d9b5810fbf921"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "c2de2c36b0fc1f950e4619597c62c62a"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ae95a258387035750aa76faae84df202"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "70e8dcc092a8669d861fb13e81ba3c66"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "e7b54453b1a1834d91265083a5903912"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "5fe9e5da111eebd8f61a15108a329616"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "08a91a11c7fa68ea92f263b04ce3fd66"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "175d4368e00d4eeef2bf86fbd2bde1e5"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "a7adfb7c59ec54789bd3f0c56dc95d0d"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "987bdd36cf41b45bc0324ff56d8cc7a0"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "62c9566fcf70ad31cba061e38a2e20c4"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "6a5988d5ef1fc41956215310dd2ae6c4"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "37f2cbd3b4836318608e50e9084b984a"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "51b538cebf85ffa4f686ec2f2b743d8b"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "5c713f14034f36636088eb17222d89fe"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "d2b7f248f8f5ef5d7a04681011a2677f"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "06b285bbd5f4fe6810aaa9dd058e6f31"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "043a2de24b4ecf0a3cb2195ba87c454a"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "c9d109975a6005fe1f4cb037da2c80eb"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "166e85f626a1a15418327f50092c1127"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "678ae0d9c278c1249995148665329343"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "404eae5b3e1d9ec5833399a958f0c994"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "1020e286fa4a4fc14e2b0734a91a3765"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "e64df13e3918e8fe5001641f713c225d"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "cde790a2accc9872dde969e14d24b421"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "f938a77e3c87c2e326fff21d018a74e6"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "6bb101c6f56a6e81f557641824bb6a77"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "2dfc19130da24553566fbea4d331a210"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "336c34a9e055a526597bb7b3aa1a3804"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "de09fce18930325fb80544ea6f2ba600"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "5280f1be8672e9eb59168be4b98c11ff"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "78a9e86e611001cf71406ddaefe74afa"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a82db0d20ad4a989a01374991c6d8341"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "46cad2b23af052ae48df07b67ff6a1fa"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "0a71a6225b8f90b1fe11b1b7ce7e191a"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "4c92eb767b7b1a9385258173801d4dba"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "88180f0e4dde3379c36379c2e8d6a000"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "2e8d3a5a57a09b935015ea64388629bc"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "7536c2ce1ea017aa00d32ee9e9b4950c"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "3a65199ab5bfb69df0b532004c711fc2"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "c56ee892ebe646b0307bdc2d19bcd06e"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "dc0466847ef647cfc1bb28212eabd4ac"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "a688068e82335bdc701b4f299cf684f0"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "faeb0f44944fd17d1a2bd1e4be341d99"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "3d720e46c14d1a9132dec32dd8b98a0c"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "bb7670818a1e3e085eb70f00d9a58a8e"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "fde118cf680df2bcf4986fd27454b3d7"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "7d9596f10915ff9b6d685931da122c3c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "7aa5cea3e3f6ca95cd34ec6b52cbcc51"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "74773018d3afaafff008b2f2dfe6dfdb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "78f46a7ddc296d9bc1c558b58d544935"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "60cfcddbb5fbee7e0ae569f488fbb374"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "2dd42aa8379d443a33d9b669a27272f4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "d57f2783bbb88e4e5fed46911daa716a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "be6642e1ac1cda16442ebb69a14da165"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "bd377eb00182b3f768b810770b534dd8"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1cb6d7264ce86b66863f5e9a0b70c6d9"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "6e543271f3528f14adab337b4d6c1bd5"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "8adbcf56171a7cd4ebbb5d30d3f410e6"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "c4787b0f3c02aca21b4bd5cec2e58a2a"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "dd2ec7e83644ec073d629ea141e44adf"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "85d5dee859f526ad6a1c255b379eb16f"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "e734caa349fd8f0758350bd18792f0ce"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "9feefc2f6fe886a96ff7bf1b3c275e3e"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3edbb254f4a95be38fe981c2aa383a53"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "dce7c9734f8dbe12d9ad3f9172c15a28"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "647b9062658bb4a2ffdf1c078e6c92f6"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "92b486ed613f23de403afec4d61f3ea4"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "c885a8e30824ec3eb5f8254ad63a7b44"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "edc271d856d65a98c0474932ecf36b97"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "ad09291f7f29f30e515c0fa6d36b4290"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "acf01089ea29967e3dfb823579d2295b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "58f3dbc6235107f0021bd7313ff1e5ef"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "5f74ed3e88721f081a6b97883340eb98"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "cc79e5b105e6d60290e08efcb70dfb1f"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "6221940fc811006c7cfc854cce5f603e"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "b500559f7b6b9509a745187511bf4925"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "39d5b71667581821e0f5d6fa51c815a3"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "f70317719b18d014f01f6f010f995100"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "75cd76ff3ce4eef6cc7a70956802446e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "8d5529bbe36a7532be1f43f20e5b61b1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "65b4ed1f25260c14ef3fc410d2622501"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "6a5a53b0e85f266f71dabf93e8770b3b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "b93dc39bf52be9104c440a4ff052c102"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "5131e8e0ea5d915768149ab785f9b800"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "bf332180d46071fb136e91be2308b66c"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "a8add8423068e662d18d389354830b1b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "0506bfae8b0cc6b3940fbf415ee19bfd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "6921cba7ef9480b3022af8a528094111"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "6829b533a38e48e73a90c6c64d04d795"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "bf269e2fc4c41765170c32c1e922e188"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "9d2e9bbb65b35a58d28b16ff748bf0b5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "3b228028f55ce8cf336c01b42d72b30f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "30322387408ffdd8fb50754b1aadcd5a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "448eb426a337a11235c7b8973dd2ba6d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "ef69b9fa38b60b34f66dcdb40084cfd7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "44da6998b0172eabf9fe7f09e065125d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "f2003fd823ff3f4e8f290d91223dd49e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "4e4824d41f702758895af1c38b7b8eeb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "8d5856cc4766970350e691d96b74ec05"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "67c4dcc6acc01bbcb000151f97467605"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "8caea58083f922927c405b60ad05e1eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "067891129dc73c05baa4e07036b5b466"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "7c43511c40cdfc4f9686b2f76b118c7b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "864a24a95e104680a5d90ff44e8f6e69"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "efe494a82bcbfd0323afe68675c06045"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "f185edc8c066196ee450aa209257210c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "979e7490394405055bcd09f2d279a268"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "ce58583cafd31f5ef68be7c15da7fd45"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "cf014e012aa50f1f155effd9de64193b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "c6ce16adb5cd4cc5ca69246ddee28082"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "5a8e530d8d65d230afa4491b89cd7903"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "6840dcb013fd1b7ce9fc8ba9976f3db2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "abf6b9ce7e0ba418abb7f2eb04d827b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "9f6f5c7ae1bd9cdb02b4292dc9d8feb6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "6e820e04f5b113bc8c2a889754bd4b1f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "b6446c3419426185517fccac3bbc3e22"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "cd92d516556b9f8a31f0faa281fe5f9a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "32a592253a7a6af07dc37d77a84c6808"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "bdcc507f0805ae0c5270419bfa0f8158"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "e8a5b93412ae5c21b28b1b92e2fbc2c8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "fafb38a1a3b0980292a566da9a4409e3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "1b35c0e0d26f8434a179fbe286891cd9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "84318e153b646edab68c6263a450eaf3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "5aea1411f92060d29ec90d97ea9e5a69"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "779816b49374145e10a68760f55c5ec4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "a5fb9aeb535b6035bc1a3b11d2c5b898"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "510a8c36149fb4209c9bbdad741fe67c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "ce62e15e40b0ca8e2c282f4cc46164cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "44c0d881f77e7e1cede8668808700369"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "73d186bc843fdf541dbcd935eef64802"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "464009036f76a7c3c338d207aeeeec2c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "e06d75bd2b84ce1add849487c0cd2724"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "26785a096c07574fb70c23a580ee8338"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "d46f7c8c11ea93dd150ff1b110ff9f74"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "2e57db85c6cedeb2c57c176e17358c4e"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "5958b2d7344cf96bfccb1d040c41b596"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "b59df41d0aced44f9aad630adb2bf314"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "2b02839539a070ed8aa547110fa4d197"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "d75a96475212c03f5874468c5ff42cd9"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "8194722ac5bcb34c89a2b5490e936b2d"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "f72208239c9f869e660a6cd429f267ba"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "ff02bab01cc01f11ec1989bff7041fb6"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "e696d5bfb20d3307395cc0642d14aa25"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "70e35fa347d832499a544eb1c0d5d839"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "2b934e4f54d04f0be5ec8e53d01c200e"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "25228bf6022348eb6b889f32aee86e18"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "e28cd3d1203182f3f7352d66e2c2b5d6"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "68e9b37869e6375474f434fa9e229acd"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "375e546dd1a4908d28e702a0e03337d5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "df43e8d368bf22a777346519aff71162"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "40552a00bb4cb9e4c277b63c00b307b4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "911012f4265b073603b9c3c1b4e748c0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "637e7cd3a60fa7f32c17f9f6b620cb42"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "29b6639418f8fcae3bcc574146910897"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "f8166ed1b8a3eb4cbddf7684efd88396"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "42ea444622c5ced5403c359276e3a351"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "63fdf47a9b3d0f01cd6326231e687baa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "6b3163bd3fe96ce66e78d437c10edacc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "11f002b520fb384dfa4e89e935c805eb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "1551f4d66454b05c414e456866fb9915"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "0256629c8bf655873ac1fa8bd6f4c8ec"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "bac59e3c75bded88a7c7b3c7bbe0bad4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "8bb7d9bcfb00afcb6bd2d2831b765fff"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "f80b7243997b9601830b0d4b25cc8ffc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "d113124678e06d31a7b516fa4a28bd14"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "58bf79c27f2b811b4a64253d4c652f66"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "a182477c4eef6a7901003cfb77bbdb75"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "a7494e9ddf471683ca0a4121d6d1888a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "09aa56d04b9e6d642183dced49af00ca"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "43ff69bc78b28f248d70e81d8501ff20"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "81f2a2fdaffba0e65ff3f65f286154c0"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "f34bf8c0124a39d4d0491adb622e0e64"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "9d3f7086e4dad7116fe9c1e0671f4ac6"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "9b4c0b2717a1f6a5af833d77ffe6de15"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "60db68201062b5f78b1534fd07038515"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "92a1e765e4cb14a7abf90d4de8af4a54"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "2c02f2fc3451feb20324c9ab60d05696"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "ff532c638244aafcfd210fdfe0cce333"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "90d8052fc48bf253dca85b024626b60f"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "69a818f02bcda90dc741d39b9b47db17"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "5f0d401b030722c58a14d32d20c9699a"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "44bc2f246fe425efc32a986ef8857ee2"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "e89594004d6822f752362308e73393c3"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "050153c505dd298c69b276b0099b2840"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "967c3823b6bb44b5d734be91b224790a"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "b7df45cd0b36a096c462b55d372af438"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "908755cd609af9d9348777ecc12b6067"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "84527514451ce7c9c8ab50af1d745153"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "21458346bc1cc59d1ecb6ce59c6a9a51"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "ce3db5780415005cd9f8115f1f63c2ae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "943a8e5c5d1e9fa537123519f238d9d2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "955fd4a64daf8d6867a8df2a88a3a799"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3a039c4a58adc13d021242b3d4106140"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "c197a17756bba18a036c4ae3ac71fa67"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "c69b7f30d21551fa937d61582152e0f4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "28969037c72174ff0f08866aa4a3b7a2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "52e69beb7364189a6e1f278032734b47"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "c4a480d6a231f29f8e705261104aa75a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "bc3caa483bcb1afe88a9dd21c5483562"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "08c6f4b7ec8132fb90e881f9173a8073"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "014be3347924b067d752d3c420b9b6df"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "ca6e78b1f1f1521f2b11d7d96e271fa7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "1e2dcbf37b947742b9c0741531b4e5b6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "0bc24ac51d3d0adb43eae53f0ca94484"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "ad8c8780f6d409c10106a0265075685e"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "e35979d765b4673a16c4bc4fb061de53"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "afa9f2af68e505f0ce0e638517666d6d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "b86ec8033c1f51d6d39948768d333a40"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "16a55a5e7c0ca2e547122110937f5bfb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "c5f19b5467721f6d31e6bcbf125cfa6a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "777ff38e4a772b4dfcbad811528c3103"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "251f80347a7c576ff6a7d5d0028636cd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "5b2a91e06c1fe88db368f0998ac14926"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "7c47b1948825314f2096651523071dcd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "5d785d523c1cd73f549a9c9e7dfa78e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "f8d80b67ddb65146d4bf3187dd2ae34f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "c66f1f5a394bee48edd403ac177e6a03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "b0935f85fee5ba281d1ef6abd602bce2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "904b8f8edb84e6c9bd4a614a5d61a45c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "c14c1ad7ecb69ad0e3e2fb614d6a0e35"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "980063aac43d1b3110ba17fc4e1163b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "89e07d72fd2b6e9f0328ad4020f72961"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "fb00795204d9e827274994e444ba21a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "2c623011c4758cb8a826c033f4565c67"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "34fd478b0b44172384e7804fab2a8bc0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "9d6cc18d62d4798c86bc860f50b71fd2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "20972e14d74ec96636c6d0f3b156e6c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "1f159904ea70ef73e443198628ec8570"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "ac4e3177d48776ee85f776be37992e50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "0187736b6785a5f93e321795ed5eb4ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "68774a189f9a52020322844de366dc87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "5e372045787a379b13640d6fe56c9669"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "a6897d939d3a7567e3428c7bfa1c7757"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "79bd1996f7fe9e83978f8e397cd00fa1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "80635ceb9273ae5d13e31a269e648ce3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "0ec84f94b1336bea421be4262e3e5d51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "013ca3cad726bcafdcf8f8246d181dc1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "5c87caabc0588ed0d13d204fabaabf4a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "4ffa3c1f83a39b49a3f651bcfb2f446a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "fa9668ab0457f28a2391707b97c40583"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "1d80baccaa2b3eba9cb13811510a42ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "79db928f57616fafa1d3451081b2ed72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "4ebf6f3497a6b32f0aef3e7480736e9b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "cc01023cead01594172bef9f1aeecd05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "d41b8d338404cbb9fc23588306b70aaf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "47007bd988e8942c1558446c6b7c9f85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "1e2c2c6cc37b28d672c6813a68219883"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "058911a3efc45c24b99bf4b109429aaa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "aa9fd31f93b987331a5ea4947f63f366"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "5c2e7f8c1cbf0a462668fc06264fffca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "57f3c48f1b264e2a0f9f30fd2f20f38f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "50ed68a74412fabead28f1f101336d0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "454cfff9c3b41feb7f6b8a7077a419f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "5649c03285254df1eacee6359560aebb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "75d91fab331bfc3786cd49811d1492bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "f2b6b38d6dda5b304d0be4c895772362"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "84fff7db36ff3cd8d887a80ea8bad348"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "3c6ae02af7e323d5c2028f8a13b73e8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "d548c755c740d5c1df8ddbf51215cd26"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "ceecdc15b9ccfdab605330455da0989c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "7d81efe0c268c172b43ed2ec55d5aff5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "f62a2aa11c6b49db7c5a80e4b728e960"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "524216d6443165f3615c4a64ebfa26fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "f24d9ff9d505eeb2f53810942616ffff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "05efaed6eb2c0282eb1530441a1ad73a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "c2af32c1fb9725c17b32b9e0c50fc670"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "35a1a27040202a4b9658173216657aeb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "9ee15d99729c7a5ae6e6badd9c282fbe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "26df7f8ef6e8f129a6e36d966db9a2c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "c8dc4b80d508dcd9bd25c4b51e4fa9ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "e635a0e26298dc3cda7ee16320afd4c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "1d9d38096039ec43dcaa0d7010d17d39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "7c92bba284f1b23306c031ca834b56c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "5de9d3596f954932eb4404dfe3085a15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "150682c8a12fa5c49f8176784d8b7e68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "b340457786b621a66121edcf922f6f44"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "c20a7f6e7c26e86f2a421324b4a35764"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "212a8afc1f3f8e50e679f7f7b6dbbb6e"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "54adef8a452310de65ebb14dc2a79ac2"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "1760b0bb392c8fde6abd81f495f72643"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "be12c3b6bce08a1e77706255814ac9f6"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "9142dcafd760863d3712ffa87fe21a1a"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "8ed4fbdbcad5faddffbcbec3f3204621"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "e222dd2b44e29f2142651d9b119db70e"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "b2382a6790201158685d4c881a59d4d4"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "f2b4e315f7ef5bc59ab8a9e4cd40e443"
  },
  {
    "url": "categories/index.html",
    "revision": "2082f86904d8f73c2bfcbf5a954d818a"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "1465b331f3174dd2a384c26e5138ac2b"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "bc16e004e24f9cc62e80fff9df80faae"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "4b9e5d47ae829fd5a525f7be9546ee6e"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "602ec1294094dcfb8cd89ac4fb97a293"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "1b0eb025b5e37d3c25b3d36aec2932ad"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "4132a6e95645ca90c4b60b07121b2cb0"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "42eeb1d57096f2e2007391c2dfff5275"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "3563ef3cd8155a78bd50721fbeddd99f"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "1cd32068cea4029f4463b4bae292e08c"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "76c5b7591c1f095e2b3a9c5b1675a6fc"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "2df754edadae2f437d501fc07a651dcf"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "f8ae45c51dddc6c1b4ee96f75095d65f"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "a88afef056eb1ad6fcba56222ff19a44"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "1a550a59bcf6a8796a276ab4de27e1e9"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "5cee73dc33b90f5828b4cc2d4294f216"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "d6cbff3fedbbe0e2c078cb3ada1125ac"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "7d0bc3072e5f449a938b9454aedf39d1"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "ec76b9f9780e610757e32f8ec16f0eff"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "3a92fd08e46b29e4ce7f6a70cacc43af"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "d75f944bbf14c0b7df911175d5a18b3a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "4ac82b232c3d19f47e52f592a93e9f33"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "8d114f156b4eaa928cae910f7c718ee0"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "a46774aafd1c54893d24ff0d4086dbc0"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "e77990ae9b42f9b33de7788e7ef2cdec"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "1150664c79458800c312103debbef495"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "b08ae1233ff626e622bd4a57ec178a6f"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "a110f44c5a65149f82aedfcb33e0e098"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "5bf49b5e9a97a20aacce95f4df826575"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "425f2d9db9318ea9e8191c5b730a850c"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "7442085105cf5593c424a0fc6cea7f9c"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "e1025bc08444d7f3f9c5a945087e6b3e"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "c2d6f9a0b706e9b9ce3536ceaafc39fb"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "9d78f69b92e567ed5631b868d059aeec"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "17d44e78879807a39db953caac28ebe8"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "8a2b29583f7286d63083ae4e4a4bb27d"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "305fe972a8c262d8056246ac994ef6f6"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "ddd44a9c5dfd04fab5b68df988d9ffa5"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "f7240494fd485afc954c10772a7668c6"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "5302d48a01bf1d8404c58d8e92674f3f"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "8acff21cd6191ec13d02d180f59ac0a3"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "27fc7f9c896b3ede84ebb6c4af4c0653"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "de72c29239e4fece2f96a01f4b8f41ef"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "c0ceeb6fd99cb70766652a4203ac7b23"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "47a5fe2dfd74498676d08cfecb588256"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "bace75cffcc14509706e1be48e7e81d1"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "c129fae7cbc46ab7a8b3dc8c13a2ec69"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "d7ac70f8fabeef846f86ae0ab8d17b06"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "a50e8cf45b8f38328edccf43828a4424"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "3788de695705d0a0fa437689a081157f"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "a6981ae218328d5b7f9a45c1e205b4dc"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "47d0337f693d7b5093c91be6d738e180"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "ecf578c239881fb5da0fd9bd0463c2a8"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "caa6f6a3247cfd2b1b0fea601f54f414"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "e77d10cba622702411034bcc90045039"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "ce4029a4c05bda9cc27ac00dbd4b6a75"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "579ba4c2482665b35c1a30d1ae733b41"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "15ebef397a82ae76b2ab354f4eed0e19"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "a561489dfe1b2ba91ee53a507c745b30"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "e875854dca25420e81076a82c3f20a72"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "9073fddbb17a6ac209543070237ebb56"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "0ae76f8297c07f663bdcb821bf9c9117"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "e1708a0c304f639a282b5bd48a41525f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "2e7360e46d456958da674c4e2ab8327a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "1355876b9c71242e5a3a908392a5ffc9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "e0843b5bea3e2457d81b5bb7d82f1326"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "5b6742e824c8dc0be347ae81d897be93"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "e90b0af712065e23a8cfc3cb39d825bb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "dc90398edc2c1e72abb1942fff95577c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "9351af679ef7c111c423b85d04f0b5aa"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "86b0b7d9d330d35456a6a5e6a91acf14"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "dcaa66d10f41b7c573d65443e975b39f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "19bf71011bd1d51a053cd8c696ed5352"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "3fe2c404393bbd6a0e733a14c7505d05"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "d3b76203694a75983b183933123f336b"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "f0035b848ac83fc3488e64cc4746a620"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "a4481fe40fc71722592c0adddefa7e1c"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "c58738237704a9e82dc0f7003ee622e0"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "1fcc0af000edcebb0e695d56d4b6370e"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "320be7d6e8a6b318c9894c6968309f94"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "2af88e0a0632307aaaf0b208dd5510c8"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "1668f2ff992b10cb0d7a590e3d62ee83"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "6389e5843f7b7e920ba5082195ba4c2b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "caac58d5a71bb88f589b7e9853445c09"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "db433f6c87d15a669bc99cbab63a49cb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "dcf16090170102841f868767d868472d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "dc7dfa4b55c4301f644b7e7d77ce93b6"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "c5fe58d6607a73dd9cd15459815d4dae"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "90b1ac62b2d4f20d217bd35c2fe3d880"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "b9fad7632b72c5b9b8efe764f032579a"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "f2f8c68cb98e7bc5d7b8f0957b895f1c"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "614df63165820b30e175a01564fef338"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "0cbd583d1ffef4e7bb75e8a9f963778b"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "37430aab8c0727beed16c8f7b36feeed"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "fd985934167e0a073a11fd46d2732144"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c0b0fa37aa9aebbc1c0316cad47fd689"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "b0855e0e6f7bdb8c51938bb4baba6527"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "36d36cd3f864ae8ef3feee51cd0a0a94"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "f3287f281672397504f2b11eec38f3d7"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "35b0dafa786b1c24b87d67463de24d0c"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "e26c25a959e22c730291b0eec5810252"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "912681165d58be7395afefa8b9f7775c"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "bd8c2c1a07c60943e5c4fc5dc68a6277"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "906a2e2f7a5ebf74c515537b8e838ab1"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "e471a8a8530c5030970f81333b65cdab"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "c9e18767e6533ba224abb74759b560d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "40f2cd894d2c3db44d16827f209c7f8e"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "e5e43495ed1dcf522b7fb1adb877d0a1"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "899f3f0127deee8e0402073caa58dac0"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "6e08071ca13ced372c68dd78c5b6e18a"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "686eaeac2f17a8f312f414b79949291c"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "c98e8d03d5603e7f329ae6c17ff36137"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "7457c872957f0c01beca13899388718e"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "81f20f21ac7edd6526f7a344228f3db7"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "d13465685af3c735f0497617ceed6490"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "2dd45ab0574fe65a4f26034b7221fc32"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "5502f6abba7ca62d20ed9c6c0d61285c"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "d2fddd79e787381a8b7e263d6ae483fa"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "cfcd52c5ddd716d1bcfbde376ae8002f"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "0ebb83ca5475931bf7928d37bde98e5b"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "52d0b431f8b9dae04bbcfa4f02c66bda"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "877eedc365a6d6c44d18f9343ded6029"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "dc8b1c7d1cbf113f189b7a87ce1c83e0"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "c84b6dbc4673f262b3bfbf6444b2d2de"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "af91cf84f026255a3e8ed22b0bbb4f43"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "4ef95cb1b6e633aec94e5f23e8fb558e"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "9149322ad42c56316c0464656978ec9f"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "24fc55d7c97bc4f841e1eb132b75a5f2"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "b1570490627f7e6660aac9c6588e980d"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "f8059fd7d83e1224c951f83aa295f123"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "d48f7f47829909a527552ed7d7932b9e"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "634a6515e7a608d342e7bfb452e63fb7"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "ca732c8992bbea3413ad466a6203bbdd"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "f3e2aab3a9780cb048cd50d435dd02c5"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "d7ceb3565225edb6179f345da2d924e8"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "267dd78e74cd70eecaf17987fa316157"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "0d09f317f598c550c882ed9bcfc8a53c"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "fa01a056c68acfdc3f699c2d6ee7c30f"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b49b22695c3e480c1441410fad42b795"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "60b0f4e33a761de5db61f29456a65f40"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "6248f28dac736873c0766324cbed2556"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "e7dea87eb0f2ec958d58e89fe69c3162"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "7912db94adf6a4f4da89b4dcd0968856"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "179f37081089d76d98a2b6403e06eb63"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "4124672bd51065ca78883d4a7a3f9e38"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "45bd3bea150601d5759fe5b62020a855"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f059da0d7c2cb675d0a686b76508e3d9"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "99a12b973c83bb4b4c114c702b518b12"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c60f9b12c606b13b6aced3bc1ade1ba4"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "41dfc77a5dd8d0049aa0295f2d716607"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "9521cca813dc88dbd94a91be24b0d58b"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "e1c5f5232131160167914d2ad903913e"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "7e6fdefaa9acec4bde5f1b48a9443136"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "e64c4f08228d5aff75cb8a3f08bd4cd9"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "a358eeb2e3015e2f3335c87e4023d962"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "f50dbe74a1342e2229f8849ab1a55167"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "6b57f4b32d98cdeb4fc7079e1fcbc148"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "b6821e57f7ec2be328510f9077db860b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "c93a37d492251435115ee1a0a2af02af"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "0ab729de1a98f9fcc9153bb7b7f1b3f7"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "f661ffb64de38762e005eccab6a4c8a1"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "0dc566feb11851d07867c78b153001fd"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "47fdf48d2bf633c929d626bbad2c41df"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "7a3be4a12ece2cafaa9302f76213fe7b"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "0d88add345d71a38dc5ad2cb52044d9d"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "a4dcd911e9798903e15af471724adfb3"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "a334df8385411cdd2df2c85537888384"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "1eec80e3cfaf9387ac27e38779243e94"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "c6d26210c09f794fb37cec2e58a1a60f"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "f6438a703c5e1fcfb8be865dd38cbedc"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "b6c8cd9c568c58738b4f9a88dc334fed"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "4961795137d1bcc47686c40ef4cec65c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "14679e6de36347010a91876a9af1f48f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "e7dd266cdaa01e9f276b70c8b4b03937"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e08209a608927cddc2a48095d837ba6d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "c16d7c3f521d3827ae7dd9c9bbda0241"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "0ee5debccf0eda0aaf0bdc0421923ebd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "26e2465ac764092c7836d238d434c2b8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "1e09c824e623452cfea2bda740737309"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "ff42b04a1fd51573ee8c1bce416139ea"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "acbea9e6fc268ab051518c940905b131"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "04f1f434387ff1cececdc0a512aac989"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "06b046627f9cb4466c7e6e0e75df28bd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "be02e27cdbb8eb5d538a4744be770c98"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "2a5b470c14f7ef68b9c7e2eb7aa4f18a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "14d9fee3887b84220f143402f443ea0c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "586cf8bd2c0c236c1ee2e8f77103ac4a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "28a938742bc97ad452f1dbf209a5dbc6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "9c92c61317460a7cb78d0552887e1689"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "f26a5faa49c635bb0a1af025bfffb521"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "843d8bc231c3a53561f797f800f80197"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "28a0ea3827d3c5e82af3f461480183d4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "3faf61846d47c944446fa52e1cdfe448"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "a98e597797aae42c020ae3812cfbe2cf"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "10248169fe31b20dfb9c85a7220e8af0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "4b90e3a7c5203b2e04917c31e1fa0ada"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "170cda4a56ee42d69950e1e3aeeb7b49"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "c7ae118af51bd961c08bc3ce6773ba86"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "584b022df96fb9d312e59b9dba35ed8b"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "6b807b3267efe864cd6a096068c5f958"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "75880d18f9a0f32b48747e9d418d9ced"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "17033474d9322e066d08ec459f638c46"
  },
  {
    "url": "categories/os/index.html",
    "revision": "014d5c684ef9d5b02bba715ba8e3da83"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "e5d458e312a68eced7b6e7b9d3bd28b5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "408180356055b555d57dfbd8a83546ab"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "7f7e68d55ecb57143c8b393da8654d2f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "e357d910371035d279aee1bff59cc903"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "19ed3a1508666fb39f4bda117046fa12"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "2cb6d3ce2e5d45174701badc0d54c011"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "89ed65f3d14cdfc56c57639a10355524"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "79505d94241fc14b0b7825fb97d0964d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "d5b68a5954c1f13eee1bae17a9ac1ead"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "9de7a6ede596b6093bf3d0d5401d4031"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d4d3b8ba67404d0bb89ee09b91b608fb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "3a03b27f1b3b77e99de1bc36e84ebc03"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "86707fcbfa44aa1076ba49d409676bea"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "7e46b2473548124d4bbef54ca4144e3a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "3aaec0a9cd01141d79a42ae020e772b3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "5396ec587716707f0f0f208ff084badb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "aad5239b709946f7a8960c204ed8d5f6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "e144aea05c0e544fcee4fcb0c33f9435"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "c128c6543c35da9194550953f60a944c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "5d004cdc0b0eb75053cfeadec7d9155b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "d5c882671ed00e178a7231fe835ad83e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "b612319f7cf56562fb35bc9e49f56d0c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "dad929e69ca9a6daafce4ae2e10fac54"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "e790f0a9617b565af1e09ae706d69ca8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "42b95347817d1fc41fe43dd0a25d4720"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "7fa1c5e0425a893ef03e6e79240c66f1"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "8fca62facb314363b115d1a3e588c162"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "d91c7fa9ef4f24b03f1ab4a8640c3c1e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "b49f7de4e6777f8cba6db28bfa8f68b6"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "28373469fefd0f27018e33eb929890fc"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "518789ee68f10d545de53afb1afee72a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "cda7bcacbfed6efd31044a7682e94e59"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "ff6a7989680a1ecb5435eef9d82da772"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "fcaa014599f5e76462e33ae09ff5c2c5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "e4bed27b7e4984e0b4e10a05445c21d7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "8bdb2381d438989877da57593ebe4b6b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "97900219f3689a1a72c8b2c1d74b8a08"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "31ac809d1835c709918ab5c001befee7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "3475dc7c65151e53b35733d7a7efbb48"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "b95a7791a0e53890b687b470336c58cd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "dc6faa1cd89d0ccfcf4cd5b848b36232"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "e558236512f08c21e95f96540806a7a3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "0ef3eb7d64f9f7db337b1eff5d3e5101"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "0ffb22356da288ad5b6882176bbf477b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "c44ce6379738904f52390c3168647c14"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "7a7a984a424eb2acd4777207797e2d39"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "a083f7f371652c425d5ef8ecc50c9b93"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "3d7fdbdf0c3a952746f3f4c105e862de"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "a41bbec01baf0acb25993dc263432c42"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "90fa2f63521f74bafec2d46ef07ebd88"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "7470879f90a56db436397b060d7ac495"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "e23d4f6f1d05f59fd2d624afa611006a"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "c033f1530449949c3dbf3188d8f13aea"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "3851e3ecadc738055364e8ddd3b268e2"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "859c44ac7b46edf741666a0657a9dd5a"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "e32d4f8eb8b7b3c6fe3b24851bef62ee"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "7154f5741e10dc5097468b753f8ded08"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "37a1844650207843199a731485abfecc"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "c2cd691bc0bb550bafad060fc87887e2"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "da1d77ebd4436f3d60e45e19cb04d2ba"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "c4de8388919c69a8e6fef171970b05d3"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "56c7dcaeec2889ba0262e5659dfadb38"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "4147b0bc713bed66f1d41b5be129308b"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "69dd16d0ff2477fbc6019a67290bf945"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "2bc26800482da4b6471e52d19807457e"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "1f1f751abc192cb9a5a8e4fd0e7ea019"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "2342c4141b20e6d1e7e64471174405aa"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "549f80a7aa5c69f6d23dbe49f4f3bf14"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "bc393380ba9539cb73960f25c03e8666"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "49eaebc6d83b6e46c3ec1929c029485c"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "4d10fb93abd7119d30304923859a90b4"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "091d4d831c386453adfb1f1dbcb7a3d9"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "95bc2d88dae7b852e31773605d7bb428"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "896bda7cbab3a1cfad4d3ee553173906"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "c8eccfe2fab0a8da1761713a2a03580a"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "51537abfee325e9a2ddd257229e25b2f"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "4537eb5ba33779568c02b79f6b0b5fe2"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "1b752f2afeac392c513d8e744f0295a3"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "a3e072fbe8f1a304fb5ec845fd46c999"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "47e7aa77274a2a9426dc7fdbc54e37aa"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "56c34715ef547c49097bb04c853f8fe4"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "76895f2c4c1708b9a6afb4890dbf305f"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "977d43e8fd9d3c2a613bf5bc2bdcb6b7"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "47c822bd2547a5532b3fb5d5b8dba06f"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "7bc37baa40fbd23b28d825af4c65a393"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "e3973bfea2e7bc2546dacc4ec59be753"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "b8a34e4d8cb8ab340cb389eb90e3b66d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "128e306910b63e0f0b970fa961260533"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "f9130a6209948831a9e88e570033c152"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "8cf074fbeaf1391ed92aee9fc9acce68"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "e73c07cae843e3df7a75971feb2a3ad8"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "45d46b91c70940113981cf91395491c9"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "823a6279fc56a4449de89534edf9494a"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "a470594cca7aca596d47b18235b0c7a6"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "ab3460ed7fa617420fe401353be79857"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "077373cd51615c9736dbbe26f858d5e4"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "a2ecf0e20600b24b624f95a32c56a616"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "1d20c6e62828f4802beb3ecbfd682fa8"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "e2bc12bc77b926ad58dddd72d8bf58c0"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "b701b5de6dafb5f82f678cd15bc5446c"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "fd49bb3605b67bf7d4c728dc81e6f7b3"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "ba8bb999532587a9401b2077b0629708"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "cfff0b7ffa862504ed7f8e0cd4182cc8"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "43be4b837a5f181adf2658e4ed39d95e"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "79c2a627a3bafa31d95f18cf37bfbffa"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "b548cb380a220f9185f0979199a0109c"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "9e27a6fe231d2e0587fb06303d18509d"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "92c60bbef28a70b91670994946514337"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "c6cf490cd9f2eba50c69d82bfaa787a5"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "10b327f85863ac69e8dca8f1a575bcd0"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "8a082cdef098ebdb2c9a04cbeb882da2"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "f395422ef29f0fcc13b78de9478c7119"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "9f4f4a93fb8bfb017d8c5df2f751e23b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "381b91731656230c827cac20db1554a0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "3d8e8d486da9c939c0fad9e79fe03fda"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "6b4513385c6ea34e6ead32280167f539"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "44bd2454e0ce6c04b7bc4775763229fe"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "940b194bf725915bd61ced2051df5120"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "5c4ac25871be863a2acdc26861d99f42"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "8964177d8e44bbe18527ceb59c18605c"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "61f850ecd418d563dcb47c5d9a18e75d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "77da5c8757085f429372588b8f282eb1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "6fb1dc317c54ec58958e2546faabc099"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "cdd4d30d685b321d3803300f044320ad"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "42a80068e0a69cb05ece1135dcaea537"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "878ba507e9d1547351df3e2811057523"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "1973801d32c5781b8533a69eb4370293"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "e4a0bb1e5f6ed8814fae829004e22c13"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "2d125f3ade70fc72612967e7c6122efe"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "5f5fffc039f9229d6966eae4a3bc5122"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "da72f05fc9b5000091003294739ff793"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "701779e4a1824ac80d0df5ad66504372"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "391a0efbe413d5a0626d7df888473cbd"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "0187ed1458e04286ab3953302e8010e9"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "c4cb9dda8d609fd109470dcc693b3b04"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "771145cb669cb7df0c27a9e653955add"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "557820f9d8800a4b89de7149219d9250"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "d7bb57391eee29f52203360dd465e290"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "b250cc920b4f9493e69e686960ad6e43"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "3f930a1e008295279c77c0e474fa9e64"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "d0fb641cfbaa29463dbdd6d2bfefbc43"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "31eea7d8bae030c142e152e66f2d143e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "de79a67fe3b601ad7b51d92cbd66d71c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "67704e4e7a8b3abcd0b29ee0be4d606a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "87134afcbcb1a6dbf416e25037e9f925"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "365e8dc8306179dff02b8f8684667727"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "ac0e04e230538eea7abb7b9bb707cf10"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "701d53a99d0efd7bf71fca40cc60a86a"
  },
  {
    "url": "categories/php/index.html",
    "revision": "73dea80a7316e335b29e09d663765fe4"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "44ff345b488cd80c30f265e5413827f2"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "e20e558d07fa3b5c17ffdb9bdc83acb0"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "bf564eed0237a711c5204c4481322128"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "540ab3ebac9fda3968a2d84ebd61f6c0"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "8cf3139a9ae5ea607752f6f4a114d85c"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "1a50d0f85e7bf9d8203dbae9b963d096"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "03f6434f8347413db4eff814d2eea483"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "f88f88e4c1184505731dbd68d92db7bf"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "83bebebd87d9212aaf8b2afaf7f38d22"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "208a60511859f7e48db5fb14f1c31be5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "b213d7144ee9b192715bdc7f38266dc8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "751af82daa39f1c708a28958fdea82f9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "15112877c7a0c78176c1f14d11eec275"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "8c2d1c0bb9cf693217df088b38cd43ec"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "a5488c7edfd6db3674f5ed83568f4de1"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "bf00842c626a6ac6656fb9219edb1715"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "ba73b5ff2e40f9f6e15d638be1e0f412"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "6dbc198fefc2f9aac2c29cc4e0d5378e"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "9a3f518ea054c4157185264b852b4d89"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "f5b6af169dfb48193d604ecc2a454437"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "d124328856c3b503f1fd93acd431fa43"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "e5b326ad792a037c7971948ca92e41a4"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "99fab7d5357f1d9970477beeeb962104"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "4df04361073ad61e1c2e1ccad92c9b84"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "b3872df271fcc467456056e640555015"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "bae1563abc21bf3f1fbfdeb2d1560337"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "ce3c0b989a6dc0a385f2a574516df9e2"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "6d6a27dc0d37b4c7e9d8b2f535b751f1"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "d1f52df4f16d567a0fce0b4ccf884da2"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "1c791c5bb558c350a1ed2b52853bd269"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "f117a1f82f51e4372cf89f4d0755de4a"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "760860e1ef59de68a872b026d257ffc8"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "e6b4c5f5b65cce03579d9c7657617058"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "16b6655f071f12111051265c0a16bd07"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "ff33a8568a2e2664157a9e8c2fca837b"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "3d2753b2396919499597172417d814e6"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "ebd558144c8573016ba08ba032d83709"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "6b493a71ad86d7f09fed46fb27d0bf00"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "1f90b350fb1618236a94eb18f8fc1254"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "92eb589fb908f1a6d2d682649c1f08f1"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "c1776f117f98f57ef466f2a2e7bc52ed"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "6924909cca25195dd0aa86a33d58821d"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "798c85ca876a4e0cfb69af57d88cc7b0"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "8c78b0ce5d0fab60c4f4a41237273adc"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "38a5e4dec29579edb744dddbb27c8897"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "4030bdfa7d0a3fccb35c9fb79c426e0a"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "a027f99f3329d46130b49eb980c95f9b"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "81851a52b280068cba8f2852b92c8ffb"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "4e95d7b4a77e6001e3ce38beb294663c"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "4c3d6f550282fbad3e006508d01a440b"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "50bfcf1e9d4ccbe164ae0463fbd6159d"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "c4c1d509064600f17dabd6f272e225cb"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "507cc82deb186ad843aa8622e3da6129"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "79de6c36d648aa5718cad682ff13208b"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "f329df938a4cd9d44765ed3ec6dc5d68"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "b497a206e9d5d69feb639b3a7b72c0e0"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "608152db781fdba9e14679d333e990e0"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "7bead85c6a1cfb8e146ae4fc90465352"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "41b56400d8b39d69e8b7cbca5e771427"
  },
  {
    "url": "categories/python/index.html",
    "revision": "d45e6997b38120fce13241350e64a83d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "505e879e0888ac7df5de49b527bf859b"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "d086396eb50be6cea107191420784f51"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "fc74122a07d069459bb7ea21caaa158a"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "8b9fbbd91c611eec1b478959fd935a63"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "859c763c743b5ef630092a8966e0f929"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "49d5568cc8a6f54ef2d4ddd9a03ea15a"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "03513cd031f0744a6c85bf4726fce76b"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "21e058048ded61c1bea0a7a8ea3b174f"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "c0ff72b0cc0c078240d5bcc0a4bea0d9"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "5016afb63ad84d50da6d4000957a9a12"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "44f61ad90bd9cb80ea0fadcb1d881eaf"
  },
  {
    "url": "categories/system/index.html",
    "revision": "afc0874a167e65022b1b9e98e0e5344c"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "713706ab2703cb9dfac6052dac652301"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "01e734d183abe33acbe99164d01f950e"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "5f4dcf5bdc64ab9ce0fd89daeccfb41d"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "208705a1cbea708d686df1a2b2845bdc"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "3304035ad3e79ecb64bacf8a734ce654"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "e3a2e20b90ecc6898522a176b6d71711"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "0850660234b0e603bb4ba5b928f024a8"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "5ee66beeebd405824639c36ffc51aa7b"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "64f850b631dfd1325244be94ce8eeea0"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "2994f61561ee84ffe846c30c00628eaf"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "bf978731ee51473ec72de2305d44205f"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "bdb809b5fd7c75bce2ff916357e32839"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "327ec21a2bd736523a2990597431395e"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "8865af022fec4f0ad82f56cb08a2a774"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "e61529298fbe767140d601d7a9e25b4f"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "81f427856329f7bc25e288c7f79910da"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "2b296289fe36923d1ef9b32d8ffd4d24"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "2c96a76786e64c5254b8ac0c5f489f81"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e981a2a5365956fb6d86ff7c51919ec5"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "24ae7515d429362e744ffaca28d464ac"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "44df13bce887ee160c4084d268e16c3b"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "d5bfa2afff38479fb06936e3be799727"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "20bb2ebd37b9970f1f768398720e8bb6"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "b484b4f024477f667797e7d129af506c"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "a94312268924966e5b4d0cc602ff8f1e"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "b102c61fb1a0528436557b8396463a55"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "fcb31bd5df6961715bb07263d90969a4"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "3b92cc8800c54e48cf447cd300ee47a0"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "12f98de839e8bfd69c5caabcc577b9dd"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "7e187d3d7025e1ec0e48484bc71e953b"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "072a0fcdc87bcf18dc275fb2000b3336"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "6e5334c18497c2bf1fc3987b273ee802"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "86de264ac2250dcded9f280c84e7833c"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "f6964bdba9731a7d8e8f511380dceb21"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "3944048cbb726dea7b948eb98ead18cb"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "a60986a5956178e70d501f9fdae7029d"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "4642bf5683defa485b6f3a1fd2a9fb99"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "b9d18b1cad4d774044018f74305aa355"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "a63f33cf234618d3ad26e12c820c2253"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "f26935c2da86a70da64ba17ea0a54ef7"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "09bccadd6fd11360c3d2d82d5467a6d1"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "dba4c40b71fcf871208f497f4c10ce6f"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "780bad7b3ecb08dbf83d07e557a02a80"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "5c6f584fa4dfbd8d740c187775ebd5b7"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "89a7500e3daaeb2ae2337554da21b7dd"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "2d52fc1eaa73cd1a6737079c30be74bc"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "af128b1a7b1526cdf5381306cf4ab3c0"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "e298e0d39aa75fdb84186aee4ab06803"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "e30e925fac23acaec968892cc4db18e5"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "480233496779607d9b14a016930e19bb"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "d3a787d6b2e73590e431a548f8ac5007"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "098c05499d6c5ae4fd0c59bbfef3e50c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "ac97a62a433d824c7b7f8b1077fbac85"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "fa539e112388809808e676bf70dd4df7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "65040c94765c111a36d72fec8767581d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "764bf33f3a739cb6e488fc264b8c6191"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "e2477cd2809f2bcf9ce886f4c12b8c9b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "afdfea55c36e1fc870008c54afe789b7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "34b52ac5eed123f9fef92bea53af7276"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "f5e0fa5d68f7fa3385c0e7901ed2240b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "ca6e30f79109f9d46ebc667dca88d65f"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "4fdcda89f5cbbbd08c215cd277aa3a9d"
  },
  {
    "url": "favorite/index.html",
    "revision": "f83cb0054986eaceeb1ea4bed6fbbceb"
  },
  {
    "url": "index.html",
    "revision": "18d5a47f460e0746e95e82a75ed75b34"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "d738b82061019861d56b9eaba0976c9e"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "aca44f14294925afa2d40e9a24e38cad"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "4c551d0f08090c8913f3ecd1b6c1f4c3"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "5f5949abbb4277193a08faf8baab377c"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "7143a7bdbe154c0d5c703e9a8320fdcf"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "b1d5326e4bfe189193a657de53049e78"
  },
  {
    "url": "note/index.html",
    "revision": "4d9b7b0162e5b5db2abce1861b2dd45f"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "a52d9b20a486819bf6151094677cce80"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "c664bbda0575c8b4930e7c7fe2a30695"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "e1e4b61c0728991772d5d5a830d6cd3a"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "2b28df9f7c7a8e5f868d55410f5decf8"
  },
  {
    "url": "share/index.html",
    "revision": "31549a40682d429e1414abf12c9b4c7c"
  },
  {
    "url": "single/about_me.html",
    "revision": "7bd5ae62c60d64b7a960710544084de8"
  },
  {
    "url": "single/all_article.html",
    "revision": "59f83d3712d4fe60b84dee9a8052f7e6"
  },
  {
    "url": "single/welcome.html",
    "revision": "25d3c7c22b6342f6e12c589e33faf7ad"
  },
  {
    "url": "test/index.html",
    "revision": "00ad9d28a865ff574c1109d4402d7dd0"
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
