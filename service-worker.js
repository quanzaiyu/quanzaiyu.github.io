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
    "revision": "adf800fafa407ffa9583d2622202e7d8"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f5f75688a674a69ff9bb7745f4e0786c"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a5735fb231e6cad05c688356209a8efe"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "05bfcc9d06a27d163f8c4f214c3daf33"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "8da15043a27d0f816239a9c7fe6e11a1"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "0c7e0843f25cc2adfe84c09a04c5b6ce"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "9f1a6ffef8161038f7aa25ea28536d04"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "75b79cee43c05cc76ec9f52390b67399"
  },
  {
    "url": "articles/index.html",
    "revision": "40cd5a481069dbd6f4247195f85d8f3c"
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
    "url": "assets/js/1.3101727a.js",
    "revision": "d903fd755509c369b52c9aedc44525fd"
  },
  {
    "url": "assets/js/10.75180c89.js",
    "revision": "f6b1ea00db1fa4d9f7da5553148f8ae4"
  },
  {
    "url": "assets/js/11.e451933f.js",
    "revision": "6d52b431862e311a5f5d9fac58aec6c5"
  },
  {
    "url": "assets/js/12.3f5d06e8.js",
    "revision": "57e7c424ce97d590edc0326b96934e97"
  },
  {
    "url": "assets/js/13.14bb34bd.js",
    "revision": "26402a5f45c9235f4901673d1e4c0af3"
  },
  {
    "url": "assets/js/14.b5851d1a.js",
    "revision": "b5110c7f213e320c5fbfd611d527187e"
  },
  {
    "url": "assets/js/15.80988c5f.js",
    "revision": "b5665e66e531955087d9b05e5c799675"
  },
  {
    "url": "assets/js/2.c8bb7a6b.js",
    "revision": "6731f640a31ad7a70360b2ae7a87a4ab"
  },
  {
    "url": "assets/js/5.7cdec1b6.js",
    "revision": "172cdc3377bc43b077ec32776cd64dc9"
  },
  {
    "url": "assets/js/6.b26fdf27.js",
    "revision": "b6f05d8bddbceb02b7bb29f4ea87c71d"
  },
  {
    "url": "assets/js/7.b9f086e9.js",
    "revision": "f7799b786399b22b7539b44db3743df9"
  },
  {
    "url": "assets/js/8.e3f1e975.js",
    "revision": "82852ce3ac79401117078733a1247a6d"
  },
  {
    "url": "assets/js/9.4e856c7c.js",
    "revision": "42e8ee48d4c424a2582bb06b7124dc04"
  },
  {
    "url": "assets/js/vendors~docsearch.22ed2bd6.js",
    "revision": "594e9aff7884b3fdb39407b265ecae2f"
  },
  {
    "url": "blog/index.html",
    "revision": "1f831881ea7f37199aee09eb3af9c5c7"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "3bbe399af4b112a57f713bd866a575ee"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "458781d5a852f8bd61348cd0fb554dc7"
  },
  {
    "url": "books/index.html",
    "revision": "93bcc1f827af71fc3f06f35164b9d311"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "2c4bf5a4d3bd69de0594e223230b4399"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "60a368b4aba2bb56205acac5b735520a"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "74e6ef707ff4a16339938b813199e767"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "52375237c0d4a9dd25d9e2157eb67241"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "9d8aa9efad02bc49937733068342e853"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "2ed73f7434aa4a9dceec70134a2ee9bb"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "36b810e8756e3cfb2089a1f756295f07"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "865837a4bd3d3c13ec9376d898a9e660"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "6d169cd05145947fb2f2d9c10d42b9fa"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "f1068468b7bf98f0b742862cedd1491e"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "af2781d5494928f64bf4fa022aeec26d"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "fffbd42a3277cd95fe45f08fa59ba4d6"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "33bbdfb50a4f3885538c36b3d0719f9b"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "7fb650ee24f04961b3f3fb24b61a8ebb"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "c779a7d85baa4fc316afb1aab178c131"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "8db8f628c3c8769fef715e463f1fb483"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "4aab4e6e29f3d443aeb25059aaea2254"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "de76ebe0ac4b6e78766a71851a500954"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "27362f5b09dc0a7b97f39935b0590c1a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "2790111dda3b00da4235cb06ab5a04cc"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "37f1d862cb848af8569a19971e83cb4c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "1d0f048ffbfd3034f07b538bf916e90e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "c686818a054982717a3b5bc2b67811a7"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "7558066726374a8a1687b4f56119b427"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "1daf6bca1c9c72768b22a81988a413e0"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "7d7d26b638304736c844a9a39ac6b1a3"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "3f6d650aa9794c64214f3d33860d7f9d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "b0cc5d13ae917f7dc4ad5b7fba9ae94e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "6c6e0ba38c37ad2c13ecaa9dc05d4872"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "54b878f5991921e9565d5826ea524716"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2f1116a2f4ff9fea31abc05700d6e008"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "54b7a9ef606bd3355b3c4cbfbf5fae45"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "a7e8b23c7340e30bbff1859f783d6336"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "6a97d4833a89629fbae4cb1c2be23316"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "5fdd80e6405b030c8e03c6c0a28c9b28"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "df317bb12d51f91cf0ddc114a9798ee7"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "d7cd7187682476e68fd2d64c6cfb040c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "c02322f8bc60ed20d5bfbc18447a8b1a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "328ae0d1366648322663b96eb4dfd413"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "463e0e9e5eef03cc7320e7446370ace6"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "32175059018b1c633cfcc2dffc1c5c5e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "189cd6b6314e91112f9ab59f0c238a43"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "ed639187568857ffcf03c45b277ca531"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "89711b9cce6256775a3c5c55387a8e1c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "ca9a9330e4e56f76743d9e2b3a28a696"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "5b928f55fe72a0603954a4f9a5d007d9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "1834d3a07f1cec9bca7c30f49f21c9ef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "ca24e3b1ac2818e7aede1e2aa28af234"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "47c553bb77e57180d58275b73a4b5232"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "772d3a67405cbb34087aaac6df327250"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "f83c3e80892dbb2951b6fde9caeee23f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "059cbffa577ab6dce0e65a9a83ec4c7c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "0d5f5c8c7f96c883788904ed819f4da3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4812af091176f8169d7a1e7e72b177e8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a2e2453275ee17488e4284088282716d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "15149544528c8921a01dd6ab98914e75"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "714fcfde45ee8949e71e07cc7ab558b6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "c8a4f0c19c1e7fee5f840b3357d7140a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "4cc0a51b356cc005fef3d09d7576163c"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "24ca226a22dffbd73a8fa330a7324d2b"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "6d28bc2b5bb374ef346ed4efb722ddec"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "8cd68f7dfb2ba4865bbf9ccc5bd5cbc8"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "7ec973f0a9ec0088a67a24eb4baafaaf"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "7902299dd29cbcd34ae07229a39867c6"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "93a3e956c4ebb13ab2173b7263b3d3a1"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "4a258dce41f1dbbf5f872faa4901868b"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "02a904464b9438559b2473b929d625f1"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "919aee4582e2833ac0035e57f361e7d0"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "19ea41215a11b49687921bac9aeef650"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "521195483bba6979d24138b4f2519b1f"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "38dc9385d41fa3a3460bcf6794df6a12"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "f7e1207b37028f618c663349f33dec1c"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "053f92b2c73b561b6cbf5b95592fc9ef"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "5951b7b1d0c31558afe8b65dda4de529"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "47f64a0cc24ed01cc7fd3355d711bb97"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "19418410ade5b71b24610684d2b2fc00"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "9ad1fd09c85c788702054490f042c687"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "513cbabb7587e79cd3c1c7d4e4260bd3"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "ee636bf87fea53eacf81b870d71640a4"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "0d5810a82576249f537d34292e0425ff"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "aa9401e3019c9126b69d1177e3826777"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "764a15b8661b3264e828a38668dee349"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "da34430828bfc238bae71e2d4056ed8b"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "db47f392a9807016759a2b8be66afec4"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "e998a5dcca383d681063cd306b71874f"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "e8cec68b0f15c6171079f59fa97ff96d"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "1bd18a3ebcd99720ec6e72c6f206dca2"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "34988848631a94e9fc36089fe8ff89bb"
  },
  {
    "url": "categories/front-end/_pages/Gulp.html",
    "revision": "1e2f520755dacda7438bf4feebca1f9f"
  },
  {
    "url": "categories/front-end/_pages/Pug.html",
    "revision": "ca7dfc52477d540ed1de9d71cc503694"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "d0aa45500006fc82f3fb770023232d92"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "3533c61e6dbd7b0576a875b014a0187b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation.html",
    "revision": "2709bbad0ee0c19967e58cbe857fb224"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/example.html",
    "revision": "e2e3b546beeab9406e07578652a9614b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/index.html",
    "revision": "cbe07fb6b8a4a18a3b577b279425a347"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/reference.html",
    "revision": "3b28dbadbbb751bbbec454d9641475ba"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basic.html",
    "revision": "f538931836e7189fa13c0e27585a388c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/color.html",
    "revision": "eecfeb08a2c3e1fd281b94aade14ea38"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/create.html",
    "revision": "ed85370aa41e3747ffc6bbc5669a3128"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/image.html",
    "revision": "4e610448d81c8c21449016ebf6d09eb7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/path.html",
    "revision": "84b86c9a8787c06063841e08fb98930f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/rectangle.html",
    "revision": "32d5c147748e3e0c6a18a0031ac2c075"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/reference.html",
    "revision": "e7fb2e3a85a9836d5914559bbb234ba5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/save.html",
    "revision": "34ef6680a4bb24685716ca0f7be8dbd8"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/style.html",
    "revision": "e481add9e11c955fcfa51e61cbc9a990"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/text.html",
    "revision": "8a5476f2ae3157c401de7f8e9440cb9a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Clip.html",
    "revision": "18c4781402f8c1f727180247e4648057"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate.html",
    "revision": "abd9898d266fa2f2b639f670a4a91d0c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/index.html",
    "revision": "ab6cf607580f910e7adf989f9eb8f7ff"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/reference.html",
    "revision": "1c4b2bd2bf5b713f837cf8988558943a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/rotate.html",
    "revision": "1dafd5aa52b230093f027a7e1475cd4a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/scale.html",
    "revision": "9ddecac62ca3f9110b3b877e95a77e2e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/translate.html",
    "revision": "0b209a872cd72488b6a4fad702ae21cc"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawArc.html",
    "revision": "11b26d8c537a31160698f266d8da46c2"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGradient.html",
    "revision": "faae0c857f4a06b14111be0f17e5e895"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGraphics.html",
    "revision": "d7925d5e29a634c68ae52e8d021487f0"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawImage.html",
    "revision": "7f2efcaaf0402f3fbb020b78e01ed61e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawPolygon.html",
    "revision": "d36a0dc08d35445bf86eb74ba522dd42"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawStyle.html",
    "revision": "fb157def4939eb0d56719000ffe17bc2"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawText.html",
    "revision": "77ddadd5ed10324df97060ec486f9b96"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/capture.html",
    "revision": "eb31513fd1eab5f71d50f592ab01545a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/clip.html",
    "revision": "a6c26e6af27545b910a9316874f195bb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/composite.html",
    "revision": "ec57729a1e919b9c67d8b2b683820b74"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/effect.html",
    "revision": "4b8a87dda52d7a1f7193ef858abfe08d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/pixel.html",
    "revision": "45e5af2308890b2313ad55ed340734d1"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/reference.html",
    "revision": "09c7ba60498695e9c45ea54cd820b166"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/scale.html",
    "revision": "de76c9ecc35e6c12c7add30eefa9de76"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/waterMark.html",
    "revision": "1a37ff2ba1288900d5beb86277456800"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/ImageProcess.html",
    "revision": "41d9ff49dd7dbf6141a35a990ac2f8a7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/index.html",
    "revision": "dcb2e2c8f12015c919f6c94f48c8d57f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction.html",
    "revision": "0355db4d0516ab390f5591616bf38865"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/ball.html",
    "revision": "e459d39c363df201057e99e57013b6cf"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/card.html",
    "revision": "00c5741c81eb48aad481795b96c1ec19"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/element.html",
    "revision": "c598d0d08dfbc05e00c5263d46bb1b81"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/keyboard.html",
    "revision": "a71615f9640dead1022a9cc98e2a57e6"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/mouse.html",
    "revision": "9a5a3fa446c6b855eba61805efe015ac"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/position.html",
    "revision": "d908c706c8236aac151e9403d048b2d8"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/reference.html",
    "revision": "0d316958464600325d7d6ff1949a3023"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/spotlight.html",
    "revision": "2e708e11cbff808428e3e996b392a2b4"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Matrix.html",
    "revision": "615304c828ad3b4b344e043c17264b4b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Point.html",
    "revision": "7be345baf40632e7a586a3729ea35b8d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Reference.html",
    "revision": "7de7c72e72e800e53dfed7644c317c9b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Save_Restore.html",
    "revision": "0b4c18f61640a840756b8e60599ec172"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/coordinate_system.html",
    "revision": "cb346bfd671428c9e107beaf5b9e9934"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/matrix.html",
    "revision": "180c39b64a0ac72c4a5963598e39d085"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform1.html",
    "revision": "34ecf76644cee3244454ebefb6fd4146"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform2.html",
    "revision": "46b84db29275f28892a44b7dc52b8bee"
  },
  {
    "url": "categories/front-end/canvas/_page/Scratch_Card.html",
    "revision": "3a629b09ff6de73e7e38273487be4b4f"
  },
  {
    "url": "categories/front-end/canvas/index.html",
    "revision": "6f5548143b41eae6f2dc0ea552cc2111"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "6a5904c4123ea1dd21a29c903aa0e18e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "03f65e340143e3c2f1b0d25de1b96fd7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "2c21287302939be162b332a077376b2b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "3c56410fc1c8d710eb4671c4291f8b40"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "8b7357146756900386c7f27d95ee7283"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "e32302d3eacc92a01508b8cd1e70bbfb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "c5e2635c9909dc74001c952aeb6ac9db"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "a14f63608b68233be3fb0925a1ed98d3"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "be5dc52fcfc04ffb63e181e8f062ab20"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "4a185632375d3aa9ea5536d2eb9621d9"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "99cbeccd9cc7268bbd8f82b070a35996"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "d10ede7dca815ce8168726bed5f76766"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "113666088b078b7779757be20175e5c1"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "b7e728b38f1575d175957a22c3331273"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "98d151daac1750c34d67a11b61e8df81"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "fe0f55c5602b9e0bf3c0ae535d0ef064"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "2dc2ba72eb1acfe71444c0b7970be391"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "43f23183c8b94d8ed7b0d558ea80d880"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "f74521112ee054641d50729926ca4261"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "6b0414081caebd7a58020b736b0b7310"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "3a7b7cfb02214033151f54c854726c4d"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e01a0d2d7519c33e2ffc6152f3c6c4d5"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "19236866ed01cbd4a8fd7adfcfa026bf"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "9172cff7e216612a00c1eba0427bc5dd"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "cd366dd08310a1ddf436f5e2a6091d03"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "a60742abc65756b2530cf5775eb843f8"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "7cf78f507cc851880a3e8a78ba07bb6d"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "da57ada732f0fa132f6f24e440626867"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "044de057a6155ba84d936ad585205284"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "3550444e90a02369271f34cf70212b76"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "028b379f061ae96d27caf1056022a3b2"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "dc88369b188b11e8a25e8314db17da1a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "f606c827b75ac45106e58c0b616787fe"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "488396cadda3358eedfa04cf7054abdb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "0b293abaec0abfe8805ab15286a77733"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "7e05c85c39c0fb0c19f7ae7adf29e6c0"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "3d1f956eef5d12f9729b0411a2078d0c"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "843d14706ec54137fccd842593237f5d"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "4262e0542ce62062e6a41b7f9f9b2832"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "37532c12a2c48787cc7da9024c07c0df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "1cd14831e18a363bf7909552c6c7aa46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "2c3cbe5c2a5760d8d74e572eb479eac4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "9af0ac313c7d90ff7fc1b79427e632c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "88c31480f8a64fa9b3397bd5f65f9857"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "59cd8b041936fac77fd18dc09d6cf8b1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "bdbccea79b29bd684e2415fe468bf5ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "f2702bd38f8e72ea36c3d7039a167656"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "39daf04e3f6f903346dc392d9cc28b87"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "98fea2e36e505bec78d1e767167aabed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "155a684bdd8aaede5b606883ccfecc40"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "6005774b84d7281acc91bbdad0a8d086"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "3ed6b04df3c514ed8b64c309c4c79a05"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "93d76de788ca790aed80add7ea4b92cb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "34acd73f01f37481c7eb014fb0027cfb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "ef916358559c63de0842e2ef074807c1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "fa3b17d222d1710f128d7cca63e5ee67"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "b4afc339520f8fa7ca6742d9f175a2de"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "c152649ac1420f1b287fd843b4be2d96"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "ba414841bcf2b887c1dd0b7aa2dd4299"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "f90455800391e88c982e6a44f7cce576"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "2f5b40fe581d5575a8ab9741394aac47"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "d5a511bc758f35765a7653f6df34da54"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "b91d2ec9ed695786cc01414c475eaf33"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "41d2e27e1d37b0b63587bf12d616174a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "26a90ebe2a1685553d36da1e649949fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "6d227ffedb6e6daef148305b1becb866"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "4cad447b95950c41ae805cf238dcbb05"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "02101896e614995c8b8a65693c95e5dc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "f76cdde311c863510ef34334d9d840db"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "76e5b40c86ee70dd6073adf0641f1231"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "7789b0ed761d273c2b3d5b978de951ca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "baafe7743a8c1bb82bf9c1d6586f4465"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "25e6cd9b21d4767def18a4f20c2dce44"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "858f0c1f4474cbae0fc661197b66330a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "0d3003f70d4d1df3dc4632a08474d908"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "b33ba3c5a2bdfc63c1789f680128bf2b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "d8553249e91db27b5099d0b1f5482b27"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "a3240f14d49ebf644d73c2db0af7dd20"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "2c1515e58b17ae335eb7c4e2983f9b31"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "91ecfdb22bad56bb5608cd36a3515ccd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "4fb98bf014d95ea878542a915efab9bc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "d7301947c53b7d6294bac1fbee27004e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "6b141afc9a52831ea257fb3a16e7e2db"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "56042ca919e713cc4e58c82bedd4119b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "de08e09b88e0a707911a6331c1265425"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "c5286890ce5fd314e2b0d4450e1d7d04"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "46f6900f99908a8a1a25d18c91c061d0"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "0bb714ee323c46b35637e186872870fd"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "b16a2412b1dedef8e069b4d1b45bd9e0"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "c9726f49cc5d5162198fcf62a75bb54f"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "5da6224d294616b27eabf2c662edbd56"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "00738ffb5a32a409b973914c1af22e61"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "b7036a86a4ff349d388b5183e93c9af5"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "bcc8ce646de267b1a8dc75c801f773aa"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "88c9687c1b5799b90ed52011c828c294"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "bb6adfc69c9ccefadbbee3d9c984f9d8"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "632eb8d4f49c3a108d51c5ebcff8fd4c"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "b88762c32fc4d3b2244a02e60bcfa830"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "83ebbcea6c2daa2766fa159060f29412"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "e38e453a770523418189a0a7d5b4a9d4"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "c7a20c5cc8025a0415c7526105f1e489"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "a7c3a07408374108295b989c54a4a66c"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "2c8e5db1d800ad3fad10c228fd6ffeb0"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "1ee732a98cb1ce55f760c9729ef3dd6f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "f9fde70ecc6459b863bff484c4a6fd4a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "e859a3fa957f7adc46f0c07630997802"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "523e72e90615402f2a5ce1a756c3a25d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "fa60d2001be477cfe2056991b72f51aa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "f6cc88e98e76ecb7b5f57fc036b7811d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "66ce29029d1738bf00dc6f6711edbce9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "74a903c8b224a12ae7b2dc62949dc780"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "064605a95b2cc6a1a5b0be08d22fa003"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "bdd1aa9ea9bddfc6555ded63ccda838a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "2c56f249bd890124eaa37fc98997596d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "5504d5dd223ab6134971554f9f44ecb9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "f7255b2daa681a7addf30df2e9c69a17"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "64deb98355a8c3ab0f15187de4736a0a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "dc93f7e98f3bcfc095487b126c0fc7c3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "80b9c7d72f0fcb2a4b5902e7c48240ad"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "8cd78608c705e192ac74a5221bc015e6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "69033343a3fd414c1670ad616d7bd4d6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "2dd933d48edd8e455d4b0853d384816d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "0e52bbe295877a6c764fb5a99835d35a"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "90cc92d8134ca125c19e49b7cee658f7"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "c0061ce46907afcffa794a6ccb91d866"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "06b7a902e1ca64714e630b024d136350"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "d2375ef76e1962e39af934482ad60e10"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "834311c5855a96051e16a7c46d919a0a"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "3f6d4671f1cb0aa34d37df5b7bb16351"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "416ec6e4d38babaecd050988a9c6bef4"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "1e9cf2a2571e3f018fc24e3025e1def0"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "0c5c443baff8bd67d68ce78a7867e407"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "8c1fae255364e95b406687818d5034c7"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "07929a3240b6848b8fa6a1d5d1fe42bf"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "cf8fd2a2b0268625d305d7397c786228"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "3491698ca3c9e0d9e955a86c98272b15"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "0f1d8c0f21bc32087e953c4b9a3dacaf"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "e0ace44bbbfc34095a1e8356fba58053"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "c3187d0a1a98b0bda47d3f7705e97b89"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "be02dc605c568d518311a4bca42d83e1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "76c04783d104db58d2f18cb3b77e4c48"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "f9b3aff9a93462d89906777f923fdf77"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "b4c80ef5d1b66dd0ed4c2da0c7314a28"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "60089bb6054d51d9a00e681f739cb036"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "06526911a5cde717f6952b363dbb5a99"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "6fc2a25e08db100c7bb2e837edc7ca89"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "c1a31cfb680e8869efcc2b48d98cddc3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "5eae8d50de24f9985821c4dd3c3353f8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "2cfae524a85535592e819f9720761ae3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "5192291156312f1a277cc1526e53e8df"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "0bc4c7a0c671aab725870f4ee5b71f31"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "497e6a4f2333a8ef0881bc17bae70320"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "d9890ba71fca9b1cf81f40fdcad4a6a2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "9b8f4c91361dd659a55d20f2119950ca"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "9ff98922403dda34f4556a54dc944732"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "53909408ffada45c84d9f872f372bdab"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "28076753d5c8e951d553ce6b84019bb6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "d02fab3f26ba3941a90e99c6f4cc13ab"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "8d1d3e0fb98b9a38f805c5d81fe2dc82"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "ec0a5c5015b4c608354b637f3d61e96f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "d989969c2eee80d5abc6db53aeeb13f4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "63613cb7cd32713daeaa7bc0b37c6072"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "511b79f7eeea0d753b62026379a8c3b1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "5a35fb1cef469cd75acbd3da7e5e45f6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "3abad1854a8d1d0ab7ce712575fe44d0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "185d0b310b09db52f8a7890d7d2ebc89"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "cae86bc4229237baaeccb0430e11dfc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "363053e7096412284670c8a7f5fee8c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "17775ead948d4247fac16a445ad43fdd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "e7568d809a1787509f2c50296d6beaac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "784f87d757a31957cf4ff44f26e8ece0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "78b4b8accfb210397549669cb424c2b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "e2f74d7fa7ded934a0d74a6173c5fb55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "754c9e8b8d9b9416ea601b7c514f56c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "75cc8a4b898260f5da90bb643b86eaf3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "2fd54a6a7518bff56a0951417b1920fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "63d93f35144763c8731ac9bdf2ef5c85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "f1f33fc0653f82235c353b1ff4d16eda"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "7f00cc611e400de35a176679425deee9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "c107ccdd116bc373ca2fa375a1b7bae0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "cf3df8362ee89dda3a8f3cfc9b7eac8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "43901f347553a6c256aa358734198600"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "9e62d3e5e69acf742379bc6781c8a5a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "07fca9e8af94f0755b724d2b0e404faa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "2e41b82035c7cf16ae841cd45e18848c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "b030562caba167b3c697aedbc5a9d801"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "e99beff057f66ad2b29444af94c649a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "0c04cbdc51b3f68129de8d14d79cef40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "88a2ca4637ddda757cde9540f57775b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "7a51d8218d40fc3fcb67962e870b3d39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "66eedc38be4c33dcdafd962bfc766fdb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "86ad3480154ab36be590498e491e9ec1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "73afaab59b506c0341cebfa3b58ef17f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "f2df37d2505373df0726ddd80f2bd403"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "a8c7fa83bffb626b2fb154bda3795520"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "82c670c43b12e596ffabcdbd02f2c346"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "fcd2d946c2d3c196ea9839133931b21c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "f1034e237a17ce648ec873786e23eb1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "6f094388d7935bf28c821f0a04c0136a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "0ae12a2ef69fffb461173e567018e77b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "3a822078a6ce2891344b2b0b002d8c06"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "cbe8245eb75d01df3f9f8491b4a38ac8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "46adb00275c20410693ed92302dc5570"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "315adf21ddba291d5dfff6a4dabf699b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "7a495ceeaa7e22057e747f8d23e644eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "2c0de18ffdc7c36a3630fc9579852e52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "94e12dfcb56758e8c3f06a5b77c21ea4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "fda3f035ec8a6bdac0a0ac4a887ddf13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "4ce6f60062e03576ab50a019e0f7ec76"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "3f0ce57ffb09078dafd2e1b6fd1e3f4c"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "e243c55f608785e98ffd97536cf05f2a"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "0cccde05d44c8b648eb470a8eca1f65e"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "dea43946fd90ea3071cf7347b0f69892"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "a82d8be4a9abf91481a4c0ae66876d81"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "17a1637a6b2474f61780b5275e63d80b"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "a9ceaf119b6b9eece65fe8aef6a681a6"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "ffa8f3761832b17e1cc2bedfc75b6054"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "208aa3ccb3642db8f9211c7aef01d427"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "d5f54913102fc0d4b428cd1f56ffd30c"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "f5fea6cefd695e4ebdd12b82e388a417"
  },
  {
    "url": "categories/index.html",
    "revision": "a0e983e01ef337664c13900147c716e4"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "593f3e64c5b7dec2563dd0a445828e9f"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "cca2399ed21e7f34a1770c3633eeb90a"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "f1ccbbfb6b0dea3ceadaf599ba47867d"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "7adc79ff18150b66a3a057ded2596a6d"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "4544d891819bc8cf7c1e856c01dc98b1"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "197b35fa9b2d2208da52923bd4d3577f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f6b6410ee323bb2f8ff9ed87db24041a"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "f153fb260a9d19c6ec13d4eed36eb0d2"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "13ab7f49d00dbba289d1c40b7e9c7f6b"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "629977871bdd8d950c46099ac3158b45"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "4e5c90d255ec6cb28877b2a5e0c355bc"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "79f03f6e7f13b547ac691351d901d41d"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "2ea10bd84cf8ebe463bbfea1dc7d0e93"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "5d71f49e4ee7371d26a63cdafe2a442d"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "3e38bd76a3efb3774abc00d96860a33f"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "91fdfd6aa433c1c4e7f68f1a16b1f6ff"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "cb9b496d426fd1c104ff72b252003f30"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "4b24c3aba6159ad6f7e3089bc9b2587a"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "c448d5f416c1d47d11b730cc2a4b84a4"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "dcd78ab3d339a5ce529b81cad178d494"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "1e00fe1a25b2b4a238826822f3ec6a9f"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "52ff3b1eec6592b353ec5c990f9ad71d"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "308d5d464cdce5f886216069c68a03d9"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "edee72409440cf5e53fc1a1d4dee9237"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "1d9d46938a11d7f9b718bab24a4f5136"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "2335c53a4edf9e0be08df4c40d9e60cf"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "6444ae5e11007a921a800b23bf239605"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "8a1f92235ba1a090269a838ff81ec2c0"
  },
  {
    "url": "categories/nodejs/_books/node/Basic.html",
    "revision": "7f51110d85a7cdb32939b1be9051f0f2"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "c69f48f4670eb9a8dd715b83639964ed"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "89b4ac8b9e7f2c9bdc552ce115abefd0"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "d983542209b76b3c4fcdc22bd2ce1974"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "d26557df26fa54ef0e1cf6d374aa106b"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "7c0957efd7f9285b1d36ee98c8c97b1d"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "d3d604ebb5ee24acb2ab2877bc5ab27a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "1a20ca118dedfe0bca54c585234d5799"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "0e3e681d122294b5d26d9dac6eed375d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "9e8face91f0d625ee99362fd832f07ef"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "bc19933d52e203946d639c758527725b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "2b74ad83b2439b7e85c181d87254b441"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "1f8d392ff02553544a39a1c666afb465"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "e6661a029f317a9b2e86646a4ca9d8ad"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "38e6fc062c4f247177ffc7d7d1c32c46"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "05763d637d02f990cd825975e21c57d2"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "98e63632b84b34e16b05175ca9c871ba"
  },
  {
    "url": "categories/nodejs/_books/node/Rekit.html",
    "revision": "a05079623e5b3a20bc460be685816f62"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "c277eb1b74ffddf9ea34af6c472e402c"
  },
  {
    "url": "categories/nodejs/_books/node/Solution.html",
    "revision": "6ac079edcd13140c31d91d3a5784e097"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "808faa8c8104997cba31c3904ac0f046"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "8a83a0ae25f75495f6af917d87c44dde"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "c68f2fe41c8c629fa01cc8a3d6bb0f97"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "881300144796f7bafbd72bf4cd92f4ff"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "b78104673b9719078ebaff828dcc651f"
  },
  {
    "url": "categories/nodejs/_pages/Koa.html",
    "revision": "ea5c13a5035c03c9ff218d425ae41896"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "d032a2cbd923cf01cfa41674d89e5da6"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "0d4c1e135ce181083695779438576185"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "6b07f9709e5480ea348e7c8e080f6158"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d3704be5ad4432216c6597517bfabc77"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "e31b32064d4dbb0dea12006fcbc47350"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "c2c6cc2ac8815f975acdbb4ea70e6650"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "bf27c93b1a7cfb6727a4c47c7b8c351e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "0dcd63b356cf3008fbf1e402eba9de17"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "2f878ecb80852c92eb1dbafd4241a634"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "7eeae95e3cb5ae56e455b85a3af6d003"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "aa7aa344f46178b39c0643306ff08317"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "ed79469e0997fbf3f92fbf7fc5cc3ca6"
  },
  {
    "url": "categories/os/index.html",
    "revision": "d54b398263e73989a0679d158224c7e7"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "e64c8a4a290928948da1ae137c0120f5"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "580c1a9d98ee0093267e90fb074989d7"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "84fbba4405fe1a4f2d220998d5eba129"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "f3135e3daa7ef35043caa14078dd0500"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "156360dc563cc955392174e1c46de522"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "9c21626d3e63ba5275ad8628ba8054a8"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "d6497d2524cfd52c944751cfb4a5d4bd"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "bc994c600f689cfbc9b4892a3a8dc62c"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "03d85d85814c47e9491e0067b3d0ecb7"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "151369a386a077b9d84b1170287a3359"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "f0daa6aea2054e77b09f08c377778baa"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "25016e6fb34c3e97b7a49a1947acc838"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "ce2dd9a3af26e16907b9d17ad30fa424"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "da298b3784a506884329e8e984451502"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "dc723d63f4115610bd8915cdd98b6b44"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "55103654a8bc4a3f33127ca69a70726f"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "04d3d7daf07ab8a97a66cbb314341b43"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "b4058622eea0879a9fd369f3a4f450d2"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "d855557654b2e6a7931675596675b3bd"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "676dee2d5d259b2f4690b799c04d57d5"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "39e107a2fd03f9994be8d19a72d25072"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "956bcf3b843f30f895a68ee4911e614a"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "19a5f870a6e56335b03b8348ba8ef4fc"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "34eae3e98534d90f73d1fc7c2ec51350"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "7507e8a6877634cdb84316586d80aa3a"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "e37ddc6c6c087496bf369736eed8425a"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "2da1c8ff99d635cf03ac2de7b054e10a"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "9365b30cf657c1df70ecd8b74a64f1b9"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "3cdb8d7d988123a42bbc79886a50ed06"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "88aded323f0dbd37bc734fe086942022"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "9746cc62e098b390350ae433e3848769"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "16ec96e73e265ff74bb65ad1c41adfb0"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "40b440d18596cd6abaa3ca527d265b1d"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "601f94501dcf70877db790b23d5be718"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "99f3fa37c0d333261ff9a551b04d4730"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "923cc1d2106ee84003136cdf657b4a38"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "daa26d15f8518463dd22e38f9039137c"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "defb60f14e3cc82b5f8b993df2b5d42d"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "e5269594e3f5a95b6cd4120bd740dc66"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "4f63a3a22ca09a83907baa92cf9cf025"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "a585160814fb884a9528cbeb23b1d1ae"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "52acff1c6bfc89d93eff8fe87fbe74c4"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "5f6afe435f8f1325dff3ddab1408c191"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "06d1913e52608e5dd1073742a15102db"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "740e9d936cdb9cb7e789520b5b7c455b"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "368f16911bdd39a559d6766ea0aea2ab"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "40c2d8b07499ac3a8180a01b4065f278"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "952ab53f57fcdb5bce2781f62995a3af"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "01d23b253037cf90efb1fbe929a90880"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "c1ba0376db56652516fa60bc49fff11a"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "4043499ab2b4e452d770600675dc8077"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "8e51de3944d951464117543a54c2011f"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "0b8dd874e91af861063b49d62c7d01b6"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "70c2da020dfc3f6df0ef21a1c8e4cad9"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "8cb0e299327c6be82d2279d90337b8da"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "cb01ed4e7b6105279e1b5b327fd4d928"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "9ff5f185a6735ebc6754e32e5590f6bf"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "ed7c7fffc3f073ff9ae918ec0e52e8b5"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "16f01829a07d1d0e73c33efb75a0db3e"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "e78077e8f25a5d0bf47bee20364ce31c"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "f5b69c72df8c4154839e60a60e1be6be"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "6de4d54be4a7c19e936264eca8f2e37b"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "8ad95917b4c77bf59465cd4dcb66acda"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "c5b640ffad689ba604e8f9dfd4045b36"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "f4ff40ddfabb7ec3a8b973bc6f8071fa"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "48050b56f6d17be257ca3a79765024d3"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "578057f1aba530e893df4c7943280df9"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "f968997fd3920ce87a81272a53060dd5"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "8679dbaf37212512e3ae72f5531abfa9"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "56f31962c2df22e17d149d6397e8cc6d"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "0895241e40bcd6d2456c26198be59ea2"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "4d32c9dc31bdc6c3c30af6c192226aaa"
  },
  {
    "url": "categories/php/index.html",
    "revision": "792abba9dd6dd81e41fbeb30c972d083"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config_Detail.html",
    "revision": "4d673b9c6d59393626cade81714149e4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config.html",
    "revision": "dee767d59cfc4000f0836305909a32ee"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Container.html",
    "revision": "984dc3a6ac3bbeedce8bff6d4ea58187"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Controller.html",
    "revision": "a7c1cce0c726b3ee9f8f462eb046ac19"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_CURD.html",
    "revision": "8fc08f8f528705cd4a5ec92b132b1a59"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_Query.html",
    "revision": "9af211936dc797591c5592249eaf1c4c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database.html",
    "revision": "8c881ce2d511fe063aab2ed96973c2db"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Env.html",
    "revision": "10c64518147edac9f6be3a5f9b83fe93"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Composer.html",
    "revision": "ade70ca54fe1d85834a3f0b73171af00"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Function.html",
    "revision": "e5ba3454fcc2093a89d8a05ec5eb6e2d"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Library.html",
    "revision": "85a97cd7e02a53dad1b7cbbe5a039149"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Facade.html",
    "revision": "a3f48687c3c3ff247751d7b567921d34"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/index.html",
    "revision": "87e90146b854d645600f62cce75bea71"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Inject.html",
    "revision": "afc3df2f50b1978ba077a1157e0f0824"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Advance.html",
    "revision": "e32802c5f96eaa6cf441bc2acfca2312"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/CURD.html",
    "revision": "b86cf00c1eff790c811f1ffa628b873a"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/index.html",
    "revision": "62b4c38b1c2ba73621a74fc353511965"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Transform.html",
    "revision": "ed9d942911f18478759eabf9d380de8d"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Namespace.html",
    "revision": "ff7948838792194c77312f38c92c606e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference.html",
    "revision": "ceb82f9e3d59c086ff06ab2b3ca6fc48"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Assistant.html",
    "revision": "f785cdc03d8a51a035946297c13ae5c4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Console.html",
    "revision": "3c16b02faf6461399eeb72092cc07773"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Constant.html",
    "revision": "a8807d6403b5ac6d3b6160523f3c32f4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Debug.html",
    "revision": "98e3a269d48a881f0d2aaa71e2992c9e"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Request.html",
    "revision": "d5c3fe91f91ef7a22b01037669753ca7"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Response.html",
    "revision": "b05dc9042104cc850f849bafb5cf96a0"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Route.html",
    "revision": "75104b2f2ca8be265e87175411e40b84"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Static.html",
    "revision": "bfca44d74b65de7365b1ec5c5f97f178"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Template_Engine.html",
    "revision": "f5d3af7f66b98942ac76cb33073c475c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator_Rules.html",
    "revision": "f7967b92cf4d4b3a8888b0c4650ae357"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator.html",
    "revision": "4c6066816d768fc18ea099aa48f347d3"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/View.html",
    "revision": "3bc643aedf29592c699a5d9f2ecc1a13"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "c9da371d2a83a7aa4873a52382f38c44"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "f51b07f55032d321acf32a8306bf8940"
  },
  {
    "url": "categories/python/_books/python_spider/bs4.html",
    "revision": "e602ebd5daf4417f20166fcd7547415a"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "4a5072e605aaa4e65eb5a66f7dfaf4c0"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "f4a7f207c1173cb9a7d8e7970eaa7141"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "15da04eb51c816ca3e0598b16459ac7b"
  },
  {
    "url": "categories/python/_books/python_spider/pymysql.html",
    "revision": "09a35d5c15c811acb6eb65faa972a956"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "7bee399e6e8bac53996f3c6fc6047e94"
  },
  {
    "url": "categories/python/_books/python_spider/re.html",
    "revision": "0b4a939d50e7858ba2d2e30ab117ce88"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "7b355f92f89480f5b6122728930d5fbd"
  },
  {
    "url": "categories/python/_books/python_spider/reference.html",
    "revision": "072dcd3452acd38edab60253f3db8530"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "4b6afc7f5f5f3390ff8e5dac1f64ea29"
  },
  {
    "url": "categories/python/_books/python_spider/requests.html",
    "revision": "7bfe42eb92e70afd7de885d1db79a032"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "ae57ccf9135b2a311acf2d1d43a0cb82"
  },
  {
    "url": "categories/python/_books/python_spider/scarpy_basis.html",
    "revision": "5b70167fa0889952f98e73f8525a6084"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "beac2880e3e3c32b8cd84d402f53f51a"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_command.html",
    "revision": "b6e185d9a8b2b17a835d35a9734c86f7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "85235ba43ad656040b81ed3779fba94c"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_file.html",
    "revision": "ab436679141ee5cec0b20ad6f668994b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "ba7071985bebe1fa2125b79e4a4c3316"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_image.html",
    "revision": "2be710337d95d7963c862a501e2a3b80"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "9d37b4387fbc7f1625925ecc8faec5e7"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_mysql.html",
    "revision": "ace6f181ffa8323365abd9fbf69573b4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "362c563cfbc621be996dc3f95a0ebc80"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_selector.html",
    "revision": "12b36c5fdb09d6ef9d2062a1a4889ffb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "2990b3567fff51bc9d41f65fa80252b8"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_simple.html",
    "revision": "7bb7ff66d8fbe0fb9d8a26230d261e13"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "2abc2b6ad5fe4f5d7aa3846995441d44"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy.html",
    "revision": "40bdf0171590c229ae2e9574c7db584e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "29752cb38fb024fc00f1054977fb9006"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "d6e9ab81eac714a25d4e2255a5c23fcb"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "a3fcadab92cca82ed9d214293a1d4269"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "ef8c4b846f9fc531ffe52cc5e95a02c4"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "296062563b2c7de4ddfcd137494035c0"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "c7f9ffc5410cf4cf993c2126071b9837"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "ba2ea36764c1e55816fb1b321a55afd4"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "5c12d9353f664937dd5399cba62639fc"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "86870dd03c6671b88a90e0101afab746"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "677d6b9d5a8adbe73f9b547bc5d43836"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "e4262033333da118889f9d98e7e7e2eb"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "29333ce9fbc95e32a872f179e26c1ffe"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "0371b4b2955577a40216cba422af1f38"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "b7c3c7983067b762c2dd03ad763b4d4f"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "b3ada9c98fefea838b89a2b4661583c1"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "98e1ae0db44b7070d15884446e2eaad5"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "2469174030cf3aee2cbf7a133e5ad3e0"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "d53c09e6974bb0eaf05272ac069b60cb"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "8109b434c978095f01a6ac4e4fac9f38"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "370fd3050a8d0b2854fa539692873b5c"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "70e5d7a75b42a4ec7bcac4b87f194fdf"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "3a1566ebb255dddefc6fb81d24a5eda6"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "25718f1b464958e4dec77b5e16d30eff"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "d01a19e3b73cf63d0fab14d1b3c804ae"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "9d8539fc01d3f5e275ed68ebc5c39d5c"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "daa898d0342adcdf4d278f4be509efe2"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "ddb150ea31f75da4013f5818337bb6e5"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "8bcd0ed7b5627f2de4eaa8952933f00b"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "657af450e294aaf0fecfd4e3dd0f3b06"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "fefdb70e7125e263115a340081e3d002"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "ad715c0ec8c79266557da6d8db8aed0c"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "30e746d83c0cfcf8fbb98612afc49a62"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "18023360b9e2d19dd47a92d31e7cd4a2"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "60c27edb3b53ff280215744d235f0dc2"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "f30e823323fc8ef7a0de978d0921353b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "919846eee8cf28c06f946e20ed506f46"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "e6ebc33b3fb0d6c7ff8ad15d1b94a4e0"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "fddbfecb94bad0e1e3b75f8a9e641518"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "0f7662eafc5aeaffd9fdcfcc7682c941"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "17ad53498fb5b18c019bfd6ecab7e154"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "a0868084ca1e6bd8af0cb226c6bf5f08"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "d8cd1c777b124ca78a073c29136bef4d"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "1104172adb8b1b10f7b28a7f6eac8cee"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "a1dec3cfc851124f01d0ca3a22ae4a75"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "d4a5e951311a90b664ef09b3e22d816e"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "232c08b48a30d9bb6c362540690936d6"
  },
  {
    "url": "categories/system/index.html",
    "revision": "0abcea3597002bcc4fe46eb8e7e07e4b"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "1cf6bf4d5dfa14443a37c2de085a503c"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "c727bb060ce8dcd1dc5075ef3eb8cf26"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "416a0d33dd82c7e44d751054f8339064"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "360852e6819888d42e3513220d2f7774"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "c7ec3137a701debdd1495f84c8c72c71"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "0f86c609361ae99b126991997fc8b7ae"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "642cdf5002eaf5fb8605bd5be66f581a"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "ca2f96a44948b9f9d292763c954d6cc3"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "d4e7c41c4c6ed655d302ca002978b275"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "c66bc6143f2bec2d8519fb1b422be78c"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "be13d3687190ef01d305ca30c6476462"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "2285121d5ec2ca4069d9cef812a271c8"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "13bf5d568d40df27a6121e0ba1b91187"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "8a6370c6715db9ddf429c1fefb9d7c32"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "c673477161f958ed7f73838dcfed890d"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "d15d7e2f151d23d2c2b11ef9d6cf0f34"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3c17210627b222a27b6648c9eda09e7e"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "eeb6da79e48f54467f4ac9fe15ed4d31"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "5c634b18e371adad9bce404e531b79d0"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "d844a7da14306fd1e70915de1dfeb78c"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "26e25c11d74daa72777fec180c9e5244"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "953882d6c03d0620f8e8780f769a8b52"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "bcf37b21aae8ce7969b9628a8002262c"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "f2faf42860195d8973d2cc7c4bda2ff4"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "f827a97d8b7b6ed3a94f35e9dea34733"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "d18bbaf171e40825963c5959ff24cb7b"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "c8fd3d7e642544458473dec15c2dcf36"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "fea70e94a2138ed76639b56c81d21ac5"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "9d50acb45b9bb31ff55b0f0c0bae8f06"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "7e3fdf2ee0f82fc7a998626b5e5d3a81"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "b1083385336feea61c977bf0da702fad"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "26529217bd40b36d7bfd524d6e5e9419"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "4437559be0cf7f03f130bf7a00ed30d3"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "a0e4a5d71545e01894da0d2f44e0f082"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "84223655f94adc65148297d3c6fbc4ee"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "93eff15e1502bc24a2356470d4a14382"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "2151812c7ef30f2633caef2088d19415"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "9f2294d6dfb6524b53a37cbb2a049aed"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "c82f2a062ca9718563c7cd92a5b67278"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "2527ac0bd33069f19240799d424315a2"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "9e5a65f7953faebed73c5477ed6ff0b5"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c948bce75626e7a309516420abc2c464"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "bda5c95ffba32ec6b6d0f3ead2b7b035"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "205e4af80dc481e6d16ae0c6be19d55b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "4eb15ce5af0893f7cb473fa42856b2d7"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "2a0c1a5076fa30c3f7da4046285c97de"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "0621ca4b26afefb8703d7a3746394d0e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "3c2cb013e6da11d92258970aa9e04baa"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "28458c6ec8784956e8f8306ab9ec098f"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "0a1f2ad7bad7bd7e8c77125a32c61c7a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "76d77e73cd2d83b6ffc4ce8d5f7f2e7e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "7bca8db1214c97730d44c17981c4930b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "632a3a668ba3912117c712eaaf26d467"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "3ea89f7283e90566abcd617dcbc89615"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "408a0d86e34e4da50691d45a220c8bcb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "11b8a61d29d35fc88417ef902e513fdf"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "3ebb3e87309f8fc7a0baabd7fc305739"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "bd8d5cf9adb35b07cf2a3734c883d753"
  },
  {
    "url": "favorite/index.html",
    "revision": "650da27ade335ccae14cc563f5634e38"
  },
  {
    "url": "index.html",
    "revision": "82176f2b1e493402f8f1a55963b630be"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "d4dcd3117739b6abeb1712fbf61dbbe6"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "58792c58c1c729f8c367bf2608e9ee15"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "646ea64802f9f25656b202aa785da990"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "d35aef65fb2774656c53f878fec8a165"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "5502c57052b2aa22abd985722780c344"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "012648328f765059ae40065e74056678"
  },
  {
    "url": "note/index.html",
    "revision": "dd401d0bb90292271fb9ea0779d32148"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "e7c902feabb6ec3ca7c99634d4745178"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "4873ac96c7f629ecbf3dde276b8bcae8"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "619f1edd29a515b668396d2726d88bd8"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "e127b8d79d660ca11f3ddac7053be954"
  },
  {
    "url": "share/index.html",
    "revision": "3800a7e1000d8da6b1d8fa48a6b2df18"
  },
  {
    "url": "single/about_me.html",
    "revision": "200dd72809e8d07f9d6874e77b339abc"
  },
  {
    "url": "single/all_article.html",
    "revision": "5e7280e2f53cb1f06fcc11660091b4e4"
  },
  {
    "url": "single/welcome.html",
    "revision": "b8380184627796afc9269d11ed543e0e"
  },
  {
    "url": "test/index.html",
    "revision": "e1b22c329ea51f40c7527add691e78ff"
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
