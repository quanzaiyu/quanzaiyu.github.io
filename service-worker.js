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
    "revision": "fb949bae2c503cdc72bd03dcededfae1"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "72e531b72f3ab1ef3e0843f8a75e3db9"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "9213bbbe30a5eedc751be493807cf7f6"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "d8f6b454b45b03f0eddb19c8dead72aa"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "c0efa7ca5004cb43d66891494a2e5b1a"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "dff3d1f2692e32ecf60b5bca81b3a883"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "a4c8a0b2ade22cc59394cc6b63182467"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "09d7b4364629cb77f08c5c2bf3d77ed1"
  },
  {
    "url": "articles/index.html",
    "revision": "4b58e149b37984b4a2998cd1dbcaa610"
  },
  {
    "url": "assets/css/0.styles.eb4e4d83.css",
    "revision": "4d1b7f428f6c8ca104935743faf64bdd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5696bc34.js",
    "revision": "ad2a85015ee092c9d31663dbbfc09c43"
  },
  {
    "url": "assets/js/10.148f1025.js",
    "revision": "13c18582037569baeb2cf1d36b2e57c6"
  },
  {
    "url": "assets/js/11.53dce5e5.js",
    "revision": "eeb4da713942d461fd8f178f49c9e6aa"
  },
  {
    "url": "assets/js/12.81ec567e.js",
    "revision": "581c125d8f8ccd18673b30b6db254ece"
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
    "url": "assets/js/15.15634fb0.js",
    "revision": "9a2cddd838f290b404a6caff39834f3b"
  },
  {
    "url": "assets/js/2.18f6eb9d.js",
    "revision": "3dfabb37cda81da87d1b4a7334a2ed53"
  },
  {
    "url": "assets/js/5.3d48ac25.js",
    "revision": "7d17a108f04277cc026bd166cbb2f3a0"
  },
  {
    "url": "assets/js/6.b0dc39b9.js",
    "revision": "805c7761722ae9e697d7d547ae6ccda5"
  },
  {
    "url": "assets/js/7.980960a5.js",
    "revision": "3dfe446b23114f98435c84f301222aa2"
  },
  {
    "url": "assets/js/8.84264161.js",
    "revision": "aca6cebcba6294e24b7a801a96961c8f"
  },
  {
    "url": "assets/js/9.0e8c0cba.js",
    "revision": "20e90692ded7bca4f5301b3b91aae1b8"
  },
  {
    "url": "assets/js/vendors~docsearch.382d340f.js",
    "revision": "86c11c109d7935c452cba77904dba19c"
  },
  {
    "url": "blog/index.html",
    "revision": "432755861500cbe80d1cba4b8cbab4d2"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "fb71afdb2e72ed594e8738b3f9e50bd6"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "413133a56a6e952296b7eaff909751b5"
  },
  {
    "url": "books/index.html",
    "revision": "00c9b032f97e4050ead2942f20dd38fd"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "e79b4b21b3fe96e59d1fae6ddbfac64c"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "870f9a4c51ea2454ee0d5ae5f325362b"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "a58a1638c1881c797e0c40cdce818e05"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "f9f4f77f4004036cce898561d60216bc"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "64e92fba825e740e3394d8d272b3168e"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "902e15da82c84098f91b5b00f146b357"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "491eea223f7bf80cf83e4cf5073231bd"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "7e11afb325575721169cf18392db4ac3"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "2628148fc0b8135ef40785eb85516288"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "74b055f79e209ecdc5ebca0f71980a9b"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "90f8c0a27bea5554bc45b3920ce19f9e"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "f0d7dcbd08b20e6eedc8f336eea912df"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "0abc7806a6da1aea6c8c7796190339de"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "990fa37f6b7928d619f2fed509de3722"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "7d1b8059df98c670371008329ce65a7c"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "7a71f5dd4950e8a32ac01c7af5428396"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "dccd2fdc671e1a2f8e7a87e16773c5b3"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "177fc2d4099fd0b1e5fda3e11f4d20e0"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "e44b1e512c1ba0b12c6e804f7977176c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "7f4345eb99fb22433818279ec7232df0"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "7ad53a548bbb02657f5830fe870e3de6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "7cfeac4de3ad4b7a3812ca20968abf29"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "a95497773642902d4c94da5277befa87"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "2d362fac83fe3dd101b30d7d08dab5e6"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "7cf1b79cda3664e611d2ebbea9ce23a1"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "fd416a77747ddfbed0ddbcc1557d77a0"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "1cecef885333c42ea31fc254bfe64a79"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "a2e8edbd575c7ad0b584d704664a9f0a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "2371014957d1692e575f750f9393db9e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "68b56dc0d8126df8ee183ca3f5a0326d"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "6c59efcac5e4a26a346e7f9dcc9d92f1"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "3cacdf4491db82f92271779f4abafc6d"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "e0338c5f204ad0db4d47b277ee6c747f"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "b811e5a0b6ed57e7414494f320ffe573"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "9484907c880deb36201ad8d147d6e072"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "4f3ed0a97018ca64e385c701c004160c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "dae11d74e918ec16fc7a8c78c8224916"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "e531daf3d8fb72c4debec54b55b32a3d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "e05e8b361f29faddc12b66d306a1ae64"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "b7287131e342f85ed57da949980f427c"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "d4de9ce9ecf9dc399a8a89cdf31e693a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "9025038e76f46a467ede37770455c5a8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "b415df00b4517007eb96dbdb8a441b7a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "cba7a1933a15647454f57ba7ec33b8b7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "2af695e92759e0566e29a7792b1d25ea"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "4236fa1d886268136dbbe1db7c372d22"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "9d4c0ebf9211ad6ffa581b6afca24607"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "40e69d50023ca4031cfe236a75221f1c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "e711aa13f2a24251aab23cb5ea0a64b9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "a0e46286e2c6c498f59a6b3484c6918c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "f31c4e463cef4b55bbd8eeacaa8d7b7a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "b76c76f1aaaec8b20affe52f3b6069a9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "a9954f70b9a6168112b28db1ced5f4a0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "55480efc84b9fcdca24a76f5715d24ad"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "bc67ef86a09263f6542805bd9f07628a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "5f86a6b9b016845ba0fec5eb0e5bf47a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "4a0a6224fb15e0c20ed1ce5ee29e29bd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "1eb9fce0494310c5f3a29a5d4d6f4314"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "99d422ee7dc750fbd317c10ab0c63e8b"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "1804e11ac83841710851cfc614945239"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "efeb216532169b5df93b34e83f4642c1"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "8d0fed40ca3fcc0b13628c6d6db438ee"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "b9c9ef845c0ad9d04ba113451436c793"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "23c5e8628369ed1db981e09c7748934a"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "8de8641073d642d969f9843147aa7fee"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "eb38eae7cbd2ee465daef8426f8aa07d"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "4c71b75a18dde1e0f0345451e22188fa"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "8d1375d28144711c2ce4236f6281ff33"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "2fc93afd98f8b83a07086410b686a12d"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "36b88e7b7e77fff9e1099356a4d4813d"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "90953b90a828fe962b232b8f9026e608"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "10fe64607fc052b575a3617e14385186"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "61923ecc5c48f1841a5643a09cf87eb0"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "bb1ff67ac4da9ecbd23c2168d16189eb"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "4d4e30306a229003c9424f0b7cfe7621"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "d71bacd1bb112675eaff12d0ecc5cff8"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "3aefc53974222dea84aa6b93d613f280"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "df743160c33e375c982f3bdcbdcb3073"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "467de83454778b4a0b534fb707c807ee"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "7d02fc28d307882463ac0e0e007f6b78"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "c222b43528c25f248e47c22b6e93e03e"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "15f3a4b0aa3fb9a53d0eba58edf3b2b5"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "7ceb7d9b2e462b508ff150bd8d349e10"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "cf8f2aecf402fd7ac1e3db8f7c1e95db"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "86d3675f5fdcef48ebd1af1a35008c3d"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "844e6d853edf30cf7af57d778ac0400c"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "e4cda50414f7b2f20445b0688ad6ce7a"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "725821ebf2b1d8f94047c9390b2b33ab"
  },
  {
    "url": "categories/front-end/_pages/Gulp.html",
    "revision": "8bfef7792a300cb3622edde91fe861c3"
  },
  {
    "url": "categories/front-end/_pages/Pug.html",
    "revision": "13da7bd9a9eb308a88f7fbd9e98f4494"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "69588ed4be5cd82ba3e1c1f93928a9f8"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "ee285cc45a764970f1a20d5f6d78056b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation.html",
    "revision": "c79186b51cc4ff9dea87f882f2c78d1d"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/example.html",
    "revision": "ed535d59aeb3d59388fd5678b63ef6dd"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/index.html",
    "revision": "7d7c6d555a625f6979d4e7dbc58e3cee"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/reference.html",
    "revision": "b8cbc59495ef80f101c0084d8d1fa2e4"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basic.html",
    "revision": "6a1a65c6b768b2a0b59bd06d44ddebe5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/color.html",
    "revision": "a918fb975c4d8c322a220147156d2f42"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/create.html",
    "revision": "f4f85afa04a8cfb9c53aca2d9ddc9646"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/image.html",
    "revision": "c60473fa84ffcac42b12c65f04847875"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/path.html",
    "revision": "46ffeae73b36439644cf7d406bdc670c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/rectangle.html",
    "revision": "15a260d2be4e73d380557add8d6d38c5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/reference.html",
    "revision": "091c3290a89a6b40cc33cefb304ad8eb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/save.html",
    "revision": "e00ec7f164c7d4902bea9ca582116132"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/style.html",
    "revision": "8eac55c2df27305f26b1726f44276eac"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/text.html",
    "revision": "f2eabe6618c2f1e5c1f183ef5ffa7e0e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Clip.html",
    "revision": "a44e5e7975da20b59fc6ec6df471556e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate.html",
    "revision": "1b1cd862b1b5a16f798f238422201efb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/index.html",
    "revision": "005ba7927b04a7f436e85aa81e60c307"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/reference.html",
    "revision": "682d8113c7c8dd12f309ab5e65aa93ab"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/rotate.html",
    "revision": "f4c26340764bf773530f75650a0e1905"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/scale.html",
    "revision": "3a78fbeda50e9411727326262d654436"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/translate.html",
    "revision": "9211cc6e3aa31a55193abc40734ce6b9"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawArc.html",
    "revision": "b54879097fe8ae731dcb45f84cb19363"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGradient.html",
    "revision": "154e500dfe7e9032c1a9fa92e248e6d4"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGraphics.html",
    "revision": "9afbb0197532c1147d21183f26d02ede"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawImage.html",
    "revision": "341f4ecbb1de4b58fa4c9d4236b2448a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawPolygon.html",
    "revision": "7c6868b4d9c5529e9be21006dfd2e856"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawStyle.html",
    "revision": "477a678d9946e13ffede75704af5c379"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawText.html",
    "revision": "cef37677f784aceab3a87293ce4565cf"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/capture.html",
    "revision": "a981e6c2faf369e274421d45e2e832d9"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/clip.html",
    "revision": "276ac83b392c478ffd8daeb9e9a136a5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/composite.html",
    "revision": "19b55ec613f994c7ddf3b02af5a7a089"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/effect.html",
    "revision": "e8557354c9d454423e0f35b96e287d89"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/pixel.html",
    "revision": "64af0a81d0dd9ac9c867b038a15f1fb9"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/reference.html",
    "revision": "2bba91f174cb52b28d3d5b32d275c2f9"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/scale.html",
    "revision": "f875c166dcca06a2cb6424384e100879"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/waterMark.html",
    "revision": "917d6ba783c529cc980a352767145a86"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/ImageProcess.html",
    "revision": "57c9386ddfb0f59771edc8b629e9e6c0"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/index.html",
    "revision": "4e497af74be0d267d854ae97123fe433"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction.html",
    "revision": "e266dc34e309b7dd958d9e40b96ac6b7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/ball.html",
    "revision": "f64bb8124868c51a1dcca153123c44a7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/card.html",
    "revision": "844b111980bc36dc1e8b7eb33ff44774"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/element.html",
    "revision": "637b306f3c251ccae83c9341d3b4c3ac"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/keyboard.html",
    "revision": "5763e1e1a2007f137b6276f83fc198cd"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/mouse.html",
    "revision": "f3c7fb8ae08ade9d1d3e675e8db69f5c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/position.html",
    "revision": "d88500df1030e9b7516d8c71c8b24d44"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/reference.html",
    "revision": "bf70786d49dead057fbaa5723792cdb4"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/spotlight.html",
    "revision": "7369ef45815f24ba1a675e3a606adce4"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Matrix.html",
    "revision": "f60907f843a2e8a7bfda75f6a6dd0566"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Point.html",
    "revision": "484752da18acd7855207c5649d341571"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Reference.html",
    "revision": "4ffd62313dc03eab0b7bf709e67ba0ce"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Save_Restore.html",
    "revision": "52151ac076d7012d12689740a043652c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/coordinate_system.html",
    "revision": "977c85d3a80beba5f9e3164d2a786142"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/matrix.html",
    "revision": "1a30b6a7c73573fda0506962052b38c8"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform1.html",
    "revision": "c8a5641d9a02543e02447a651058dd6b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform2.html",
    "revision": "8a9b4d21fca6ced055afb2b66d47a004"
  },
  {
    "url": "categories/front-end/canvas/_page/Scratch_Card.html",
    "revision": "7382a9e36707a72b603ae41e1f4160a9"
  },
  {
    "url": "categories/front-end/canvas/index.html",
    "revision": "ff3f301bf0ad57afd2f5b50f971c873c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "1676cb66665a9521b7d6582e7ba383f5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "9eeda0958e2e8ea96317c4a2d51b33aa"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "447e0881b3ecb5a2b009f16b9e6688b2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "d8695740c35d5348b3b259e5e5f3235b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "1a10db13bf4774a66823caff729fe744"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "2e52aa9b89071a34068cd98893cd1ae7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "0bace88b02bf304a57d5f3cf875cb4d6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "5d0ef6aed6d1e35af1b23e49190d3e28"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "ef164dca26e416d8351d96ebc4360115"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "bcae3c29b712a0f4f7250d215d72ae9c"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "89a95b23a2f2358c249e4d7d0bd5dc81"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "2a511a2054a3cf987d13d4a3b959e6e0"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "c7e680239198931861c3892f1716ba12"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "2d6f7fdfb50cb6baaecb8b42c0fa3396"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "ade13fb7410c4f86902c36433db04125"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "6fc4cd2633352f6d5b2014039023b045"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "9ea4f14657dc9ef86177ce831372d1da"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "a525b676bab113f6c780cfef4dcc7305"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "c80876aa025896066b22235a10a37b3d"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "a2c88a5bf7bab684e9abab8ccc6ebd7b"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "1ff12e71c581449920d0a7f84340bb03"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e7a05b7c166ca66ed8a49cf34d22332b"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "7c97e6e6d8590509bc9b9baab71bb36a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "9e004f95a5d4e04c2f9a8ae6484aa400"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "0098165b3426bf9bd847fa6aa56cecd2"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "4d21e59fdb1465dc2aaa7751e4dee132"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "b0b541036cfd75a6d257549f0570cbbf"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "a57f008bd08d5df0d2ad4f1d928ffdcc"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "6786f883064900ce5e5edf8944547ede"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "1304e6ab1411f33c27e1db2b63f71109"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "e2841c976c7deef5e3fe464dbadd483c"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "9308016485d4c4106f22c66acb75b2ea"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "81d8be5af0d247cbefbe5f94d0bdad01"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "a2adfb3d912eaec0bfc3ed07de17ad2a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "cee32f14c23b63e9017012cb4e811726"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "08edbfa4d706db202eca266ebed8dd86"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "ba96949953c4f4ff56d11d67178b7cfd"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "af705b1115044a6b39b48b3cd69b271b"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "59f8d01bb0a346fc7ec9ad378ed9cc07"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "aee3337ff0268d1fb62828754c8218ce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "9375add2a9ca948cc0c33c8e0879f25f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "30a5ca7d6714fac448aa2aab113f2475"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "d2f532ae4b9d86118c4705a4398cdad7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "f0750c9d5bdc5f1c88201663a0bfdbff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "81051746e4be10018d41b6564159832e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "676763595732fbe536a63b84ce44945b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "1bdc4cd00c47f5a91d670411539974d1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "22164cfcd494101efd953d340ae57482"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "cd6bd769990871ec37a8461c364fc3be"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "7d7d98076c421f241a80dd92cef3105f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "63075c43ef71a68657e614ce39cf1273"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "c2b5997f622c3b8166e3854c4a94f223"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "2bb1c1ff95926eeb03cd2c080171ff4f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "52aeba434a347b71d0bedbc3a31d9f05"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "c97f1bbe2e3139ae655b472833cf2e02"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e6d088f3cf47c4fe3602e051682a8a70"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "412e97ccb6b3c3852bf3b9b95abb687d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "37cff1f13b6fcd9fbdebf4a78a22592b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "60d29065878688eaf15219d260ffc1db"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "9bc6541d6ce297e0f2a29521d9cd1200"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "e9730359c76dcc18075ab82370586475"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "3b3910c67273a7454ed6d54be9226fbe"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "7d7ef609cd9bbf7a610943dfc666ab49"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "eb1fea611e9a2ceef645ee553d99afff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "f754375b13075028217562355515c799"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "34e933d1e52166d11b4e03cf2ce14872"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "ea1cba2e2cedd9a0004263fbee28ad82"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "b8645e8937deafaa157b7ac77df9be03"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "34e14df0771cc286ea68dfb29298b640"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "98ed1d569f686acf9e5b747ee1f3efd5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "26700796b1fcb098abd905adcf7107ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "364d42272f03d74aaded0f96c84c26ec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "570f8deb05ffef93e302644a53d90a93"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "805fbc0c28a6a622bec88e55c1990f80"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "9b209b1ad705ad2184d7979049660043"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "04c57264756706add4971ff25282b4f3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "7cd108c78cfba5aa1111a847afc18b61"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "8c6430d7e8152ea4df3bb5be8e4d44b5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "ed89baa12734c68ff4d92db32850eba1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "6f8cd244cf06dae3f73e0c2629b91d21"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "cb44251fa183cc6bc9b6c5d24bc33543"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "c68fc4111e83bd8a0c515cac9c10cf8c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "8ce5ce630e4ada5ebf1c1c5fbcbe449f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "d8c52cc76d45f42d57eb94bd9245e207"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "01a5c42602685b66424ce56bca742ef6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "80ba2a9ea103898410ca592c4e49fedb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "537646de75614d75adff54316babcff2"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "b55b11877a98d73932a9c9d88f7f9b04"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "66ff0bcaf129896bca739b58d1b9880b"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "9bb0c7e8a149d10c08bce792b75b3d37"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "cf5ecc12e63df9d8e4d28fe2f64540c6"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "ed600c2569d0bb6ab9e65eb23a60556e"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "164e9ed035f374062f18ccda3badc39f"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "fdc385556b17bd08b727d0f71c34ae45"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "867dece874073f8d8a5802670223c6b6"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "359ad310760eff253908e67876c3f9f8"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "4dbbd5629836328044ebdbaffae29d59"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "f1b8d5d00689943f01d2f82f61c7f8cf"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "0e3126b28d655c465bd8e63a0ecedb58"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "2921ffd536812b15415880fb53d4473b"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "52c7721acfea6715601e7b12479f4079"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "97544ee0a87dae53b9cf3eea179c0b6a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "6795187647310c23f5415086174e1a49"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "1c9b6b2eb8b4ab5973945fd4271211fa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "dbef0ebc1598146ba705a5bafc12773f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "5bc824afdc21d74f18a717df54ee5af3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "b251915219c9de6ea030b52d83dab963"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "fbe3cbdfc72d30d5a6cea7bdda4f0046"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "72ce0e35ae67a260d8eccf4704063f15"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "f58bae5e7eef702f9eb382d115030056"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "d5611219eba44dad317529960eab4518"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "870e24088dbc493bb5ed225093d06589"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "8a47caddd9fbaec86fa902cef44cdc92"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "9547276f350c179e3d479357bbcc6eab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "6608f711f0a84e648cf8ca307892dcd1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "879b33943f2633921422543544b22762"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "2d4ae1037008a8fe19ad099ab5a42f3a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "db97ed0ca977eeee3054cdc7a9b553cb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "3b9c340efb1640142fcbd61089bbb732"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "f1d6e4b9d471a7688cc2a5b3bf94389f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "9be5e2cf257856402a8b53190a9342a0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "b8a26c1ea30a3804c787339bd746ab93"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "a41fedc3ce4d2963703a7e4e9af81412"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "d690fc624735a38d090482f4140adcbf"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "6d2e166f1a90efe2ab62f141d596b6e5"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "4f6d07347a157405d9b603a9e1e18f95"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "a105de31a644c675efa412e4eecff682"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "7cb33c970093dc396e6fbbe2cff06eb8"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "b5164ab4efa85295713347dd9450a33f"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "fa365498e82cd235b54ba5c4dd08b9eb"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "e88dbd2e762793ff5d96eb3826346df8"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "3fad48e7bbfb29bf1ab3a7134f654c3c"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "42fc4540545c23996e9b4b3936076a19"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "f2db56af2ad5ee793d0c17da867991eb"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "c635d59f153b8b31438231f71044661c"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "c0080a5183f9da9408a01747ce5c971d"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "8f730dedac817a36f1d668750b49ab78"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "2510c123fad401b3a64151edf68d3b02"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "b09cb8335adb16e4fc06b093079e6042"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "22fff4819c0d40c9482bd39e03ded534"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "b7c0580a184bd311effcb981dd698dbe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "2b0e9f6721914787845b9f353566c5d8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "228d2c0d52a8a55417f85088bcf1c456"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "a6f4047068d4719ed48cfbf7c228073c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "7bebe7f8e98bea39831e7690adf67ff1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "1e1d68e050a6c1b6c7481207aa3b5f4a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "3152853314a9a3442c04aafba5196340"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "d4b8b2608066ae00f2c0cf151494bbd2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "1808bc1af838ec4314eeef79ae9037d6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "4e2338b57d2f95f99c8673d7f11f5267"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "8c93375bd8739519ce0e2e146f778003"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "060e7691376b7c23095bc0b5887752fa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "abba339b5c97d4df1faf042e37153ac2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "26af28c1a8bfea0adb977c99ca4c7e2b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "eb5fcb3c39f1c3427080e6912c2bc750"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "228f23c5e91aa25fc2c40a8b4a0ef363"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "62a35a3fdf5011c62f76a1242874a4a8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "f0645b8f0cb9a7fe20d38696b8acf23d"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "18c272692e25d8c5f5b9091b279cc11c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "d910d51b5c2dc073e391f5f1917e4b03"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "2d16936a4b88903dd32451e1cd41ad05"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "af562ce374c776b39838113640284f94"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "83cc641086ae6756a83d073343a9f73a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "f0368cd9bb335b3d3f4cb10823ff2176"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "e10b19f4d6e9908a02bd062d93c6e21a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "4c6beedabdd29ab9abaea789b761387e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "8d9d68518ee814c30d1f3bef840ad128"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "0b76a88aeaa1355343d819ed63d6ec48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "42cccfecaf407f2401eba456a0dba9d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "f077494b9a6f1c5fea6d9924af0f930d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "b00b174ed6e5eb9c5e66745718113c38"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "f25f4aed302bc899df7c8ecd76232a18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "c7a56b13fb7511f9500bda694dd9172e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "7bca45811602cdb4b59aaf345f00ded9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "516936ebe1755b377d4ef69f5c1bc09a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "efa605ab721eca34bef5f577592a2ad3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "632ad59fb29348f9cb4206bbe47e2494"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "6846c6faad71c7f3a02db42eda3bf1f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "138678585206d9f958f96b0599383b03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "d957f0da6a38bbbada1dbf0a07382ffc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "a6c4949e131e87f680593bf11e683a44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "08df4bee38aeb050f3041f031b38dd1b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "8a5ab7875e883c1498a3ad794c031397"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "d68bf692dbc15a25b1c1b02223dfb4f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "5b04f2a3123dcfc61a37f38adb32f2b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "9f0b072a29aec339750825de47b55fde"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "6dd518a48a5dfa8a68e4af94a015e942"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "fb9547ee5e7f7efbdacb2f2bba27694e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "13ffbaaeb40eb660db091e59b2880b80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "2860509777a727e225f4de41b3d154e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "87deae6f35524e12a61881e270fe46df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "db9ae0c08fb5f664b83504654c6f707b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "27241ac87738110a2465cc5651a54040"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "53688c608f174954bfff089ba64c5cd0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "874a56212499eb31a96580dc8633fa51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "2dec46091cab8c3d5c3e3e914e78ec9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "4c696f18c881f053ddd32d15327e838f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "cc528130813a25dcd239dad8208e80fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "17431b358e5cdb04b3d208627ad70f97"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "f71a421cb7f8135f299661684f0ac255"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "cf9644f649db64753658609016d7ed92"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "5ec14cb0957374544f637cd3011f1c19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "8b6dc30594fca73792267c1a3af3b183"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "b4a17ad055f4c80f6eb43076860cc501"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "394b127198319b51fdf90c20f8d39ccb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "fd0536fb6b9a3a54dc550fba4a878dea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "5328380a192ac30a1d24021db39bb38a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "6aa4cc6786d47ebdcb065e762f264f2b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "2bd97381b00a5f13978f59b168e8c6b5"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "f034bc238399adaf38a2dd4723f6708e"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "e10ee6c4ec98ea4745c7720c65e64388"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "ada47a3ce284df5e17c453706d7c18f0"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "5773917d1e9fa349f23c928f1d92461d"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "300b99447c5b76eb60a8a7dc31b94ab0"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "0ab62261304c4be95ca5dc36740d7e27"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "630fb5e1f9d22ca52f122fa147a5804f"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "116b84cec419a1f90e6372372b469d1a"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "0e2e49f1f3a95a56a6d5f43a9afed6d0"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "005fe271f8b2abcabc30554583fe47b7"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "fafd86b578f127bec952a7871538cb3b"
  },
  {
    "url": "categories/index.html",
    "revision": "37b4b49a96f8a6866610a717510bb28e"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "bf2f1d84a7c79824c8e9e9841e36e62b"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "44b4eaa785daa6e38b1be6b5634653f4"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "7a96aeedd3d3717fb12bb4c4cf44c552"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "ef5376611cb17827d0998640bc380dc1"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "1f39edc88e1bef942921a1753a05e5c7"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "3f80ef2646d55d4ec32bd064ecc021f7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6806b66977cd179a294a46fd9d4ebf4f"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "f3fe80379a4ac0ff26cdf2dcdd18e0af"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "3da43ed1c1f90108a2ac22d557e22616"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "8388cd69854f824181a95b2a05ca8cb5"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "638f221343424a4fa47e906dc6520437"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "de598fd7db68504080e5b9cbd72eed21"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "cbb4c9cfb6874c73ec1b3323094f1212"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "7cc99f6aa2013ec0e5f0631c945ed54f"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "03e02c8cc3b61471e7cd6706c696cb1b"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "66eabfa068894a3506b60e0c60d3c75d"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "6c65fb2ac73ac0cc8c99b78e71813da9"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "d373a7dd988c66727206399ab73ceedf"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "6ebf3bda24228b8e3ecfe25d388206ea"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "e1603924a965e525082624e689fcb0bb"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "dd59c5baa1b1db73aa923af9f81e60dc"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "fc1bfaffc4518bbc231360d8a9a420ce"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "eb471b2dddf2b17bd37a08d8d3a61a1a"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "a1ea08c12beefcc36d86a4d026485817"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "d4ab5a37962b873b2d19e74c627693b7"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "065eb3168c490000805a579aa6cf232c"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "66d094fc1c843287d9b3103b75c0d814"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "7448637a02fb3e1de52396ebc79b33f5"
  },
  {
    "url": "categories/nodejs/_books/node/Basic.html",
    "revision": "468c9d3a153ee67504fae6ab5a62ae0a"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "c5923da23dbb69f6ede836a5dff0d199"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "9ae6d9d0161fe3ea98efb20d7f55d563"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "848179df5e83b1d7517b6e2ab82555f9"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "2f9d595741ebdc0db5011e7004ce0db7"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "686cee6f8e86f3734f1f7053c0b3e446"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "5bd7ab370c33a5e3b8998e8947d3cee3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "b69bb928d4852c4703a2e8fb401e1e84"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "46d2799731d732cd67e41e422b80da01"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "82eb3d3146261a4f120e947c0fe704e4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "3c55c5fa2e932b4edec103570349ef09"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "8a1f13f8d4f4e9c5cc77ab9d2a681034"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "ad3ad7fdfeb78b6a860595a33d62c4ae"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "7cf0e47857a1a025b7c7bab913fbf5d5"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "f27d16d7dfe38922992042f21697b19d"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "a031e67f7447e4c9face726842c68910"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "ce8c66a55bee1524d4109f82843f6821"
  },
  {
    "url": "categories/nodejs/_books/node/Rekit.html",
    "revision": "631defdbbaba2b8173b9e07123372036"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "bc13610a47f2aa1ce04e556def762817"
  },
  {
    "url": "categories/nodejs/_books/node/Solution.html",
    "revision": "153682b846c579c6817d51858af9b046"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "1541294563b029317a00f1099a1582c2"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "e330499c7b53964d7f7e3be703754752"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "6deab13e9b429ff310a023e348eb1021"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "abdf3083fb9f24ff073a15ac7d455f48"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "e3b5d1179e6b8c3c3d5f6beb83303a51"
  },
  {
    "url": "categories/nodejs/_pages/Koa.html",
    "revision": "5d0cad11708afacff58a8f571ddd0029"
  },
  {
    "url": "categories/nodejs/_pages/Sequelize.html",
    "revision": "5b9aaaccc9acc86eb47e3e752a4a796e"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "8b61c38d2f7bb0fd52f6bcb4a862ae4d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "66601a0d1a58b90f3f6abcac135a5f62"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "d1ca384b68d1e451ca23b0d7b97ab465"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d1f5910b5f4b45624f08492c33def4a5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "ddde07c762ba7f68262a7166c929cdd1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "1a17e078319c7a6030f88c6e6acef386"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "45f5439f005e371caa83fb6e45211b1a"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "8f0a095d11636e2ce042ef3b543920f6"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "2d8e836825a3f33fa542118c6d1a8ec9"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "0683f27521afad092aa271f7ca9b2a33"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "5a72013ecb37a0bcd44cb104fadcb3b3"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "0f84eec0a80db07623a01590e32f6ae8"
  },
  {
    "url": "categories/os/index.html",
    "revision": "645651e8d649308991bbd423724f5746"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "4f083acd88d593dfef5b0e96812cbabc"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "fe3269917b5279179a38d18401e5495a"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "5ca6431d1deda8889b14ebbbd3178989"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "31f3a27fdd6628b6d498e5f347ab5fa4"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "68319b2fffae090317c532a66b62d025"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "043cf30978e64d3a734bd185aa50c879"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "83e4221fe79d77dc6447e5c99235ee65"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "e38ca3a368f1b64c5d17ff2dd2af75fa"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "b9c4aa860063816fc21ab3f6c48d1777"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "d27cadef2fe06fa227c88f7b4d2109d9"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "d9abcab0d988aec748571f32159f9541"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "5df1408135d828ae4efcfc83b5c55f67"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "56afdd46e23513172bede5880cdee41f"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "f27617b823ac81c445fdf145e32638e5"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "319d6d2bbae113c8565ec2e3412b9aae"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "cf1f54d4c3e245d0ca7f5486367be5dc"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "d78d2085598c19c518b82246694e807a"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "de1848947487538ecfaad1530f6e7f51"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "7a56e2675cf8e5c648b0f6c392f7199c"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "a2dd9b4bc8a8db7f763617e4ff6656e7"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "822cae51dd0192f6496ea53071ef28b4"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "0f8614b322a6f3a8ade6686e836238e9"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "6c761b42c42eb2369932d606b30be777"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "f48c7a4ce7b7809933ea40f20ce592d4"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "8d897bea823020d54ce2b01483a15c84"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "a3f2580bbb6200aa4012fedfd59eee8e"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "f2b9c1aa5ab3a66c506fbce388e1e54f"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "d83b0b96c63e429155a8cb7492d1ebaf"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "0a8e3b93bbcc18634bf04cefc61ec87f"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "6e7a59f361ed284942e8278b3ec0c79d"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "601cff785aa1017691282234677c25f4"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "68352ea624328894a30462f543f35aef"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "6fe615df93715ef8c9eea75a817f1c51"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "9841c96b3ae5591fc2dea828808ebc0b"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "54ae52d6c9c49a68cecd7f3a3021d730"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "42b86cfef9552773810947f3ae8f3319"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "e1a6544c5fe870fc1dff87f5b28d13b3"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "422f99e12bed4a6268e9d65b9097efa5"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "2ec7c885532a063cdffdef0354b4a4c2"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "464ef2940f175bcbb4860f972279997e"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "d231912726495cf5776591ebb9be9d78"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "922ada20a30d1af17829e5a9ab728765"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "67b576a0d0d3796104f2ccfc02c17950"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "f21270f4079ab2cef0b4b60b76e1c3fd"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "e332a08ce73cfcccc8a2e00892777f45"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "0ae52727770d2664d3bdfe98825f990d"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "ad66442b1534391ff6665f19862afc6f"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "955bb030269f7edf868c8a17ac7da361"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "945ee5821e40d45005bdd46762041ac0"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "324e8adb3e5bead7deaf958fbc9ea513"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "ea529c292da4e60c48ad4797a5bc13f7"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "f5b5410294f89e0828063d56700b5153"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "ccd8d89d7934bdf3c9e0d232430599e7"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "67a49c34623a4cef9d2b6f8b08d5a69a"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "123ec6bda45f896864082e9a5f301f5f"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "efb2126d608cb20c70192203b3c91aaf"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "ab91ca4dc7c4c392c798e0c0b3768d84"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "8507a2a345c3616787c3545d6b29735d"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "5b729b0d3c00a0480268a7e386b74641"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "f4a3415ab98a29e1f94b490a62072251"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "c688865351b811a22a82890164deeb1b"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "0c10328fee1f1dc9589a9881133b5eae"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "b64ac840b3196e75d181b6b1e7f8a26d"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "7607a3730d2f570de0802bb32f53acbb"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "1eef547defb25666822f5e4b90ef262f"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "b5d6808597b41094189e41bd22c80703"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "13f5ad1af6e8b39c076cea316063bf9b"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "b2ff5e7ba86461233e83116abba00aba"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "53ae6263356d1b4e21ce95a4f4e81b26"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "c737d5d93707b68e2800ca4ef038c534"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "3ea42791e89f081826d9542f7e5d7922"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "914a1e65065076aa049c5f61f5bb5100"
  },
  {
    "url": "categories/php/index.html",
    "revision": "d4cde6e08ac248f47a62659c24f81725"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config_Detail.html",
    "revision": "56f1667e8b1361d5292e7ba0b9089ee4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config.html",
    "revision": "6b54b5bd8e515931a263eb0a6ff9fb7a"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Container.html",
    "revision": "f90d7d0e03ae82bf1f6658896775818f"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Controller.html",
    "revision": "31d55fb76f51f097642cd8b52987feb6"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_CURD.html",
    "revision": "6aa39c9659be324e2c65491e2bb894c3"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_Query.html",
    "revision": "c0d14dfe9af3ebd7ba441ab630eceefb"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database.html",
    "revision": "ec0561553a7c4f212a0dcb2397a965b8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Env.html",
    "revision": "3703217b4511cc810c4c167abbd99ca1"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Composer.html",
    "revision": "aded9bb7c40d30f31eaec403e206fbdc"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Function.html",
    "revision": "7175ed32b501bcdeb3be25e733d6ad48"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Library.html",
    "revision": "bbf5ed7aa0bae03fe4cf8ebcb30331a1"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Facade.html",
    "revision": "cbf1eaa4f9df0c5df275e2380eb98dec"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/index.html",
    "revision": "e80912f5a3757db829a1fa8121b3f44c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Inject.html",
    "revision": "4b5b42b8bc1602fdfe13af45f50b9df6"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Advance.html",
    "revision": "adf4df3f34e83e4bbf4a3207c2cf9b19"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/CURD.html",
    "revision": "4bbf18973b6925ae12966c433b275cf2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/index.html",
    "revision": "a8b771f43a4c01dc603c20c65ba57c12"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Transform.html",
    "revision": "6ff3efab97c6012b698242521e833eb7"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Namespace.html",
    "revision": "fb94d40580aa61fffee0c90890cec81c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference.html",
    "revision": "8b5d1ddaa4f58af5851d65e28eb7bdc0"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Assistant.html",
    "revision": "615d3048823cf81ead520cda721643c2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Console.html",
    "revision": "075c4a2b2869f073b3cd88b1c0ae25ed"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Constant.html",
    "revision": "3206ad8722bda2f604ef0600531037c6"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Debug.html",
    "revision": "2025584c56033a42ac8d8075a32b4909"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Request.html",
    "revision": "21d8517afa7870427c1e0fecc2879d55"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Response.html",
    "revision": "bf9b4b4dfce2e6b2c97986fc2f5471d3"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Route.html",
    "revision": "8d8d514c565e86bad545eb6a7fc863ee"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Static.html",
    "revision": "a3302934e7fbe477668ad81d574fbe30"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Template_Engine.html",
    "revision": "a3dbdf30db03d84d0a81f7e95938a0ca"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator_Rules.html",
    "revision": "4554004f98bf9bb4ee11ef08d064b336"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator.html",
    "revision": "82ca75f7a4756cf08b592d578c1e7467"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/View.html",
    "revision": "1d91610fec7a263fb89d31f4c077f0a3"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "0c029707b8e206d40545fb0c662c773c"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "4d0117ba0f5652698963d6a874f1750a"
  },
  {
    "url": "categories/python/_books/python_spider/bs4.html",
    "revision": "ff8092b01fa4bd8a9010727e2ef0a849"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "df4e128e9c6423498fdcefc245d5e0b6"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "88254a19c32f35318a79fa76ea6e2b0d"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "fb675889c0da35899bfab2413c815486"
  },
  {
    "url": "categories/python/_books/python_spider/pymysql.html",
    "revision": "2a177798f98329eb31bb2cb8d9eabbcf"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "117f098450896553a46e003491564c5c"
  },
  {
    "url": "categories/python/_books/python_spider/re.html",
    "revision": "c6c824ec6eb8808c12cc80e8e7695102"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "3c380aa41ac05511d486d41b85e9cf9c"
  },
  {
    "url": "categories/python/_books/python_spider/reference.html",
    "revision": "c6b1dba24038df2fcd76067f99d0e877"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "7bec356b361f239ce1bb255ba9a2d59b"
  },
  {
    "url": "categories/python/_books/python_spider/requests.html",
    "revision": "3e04e3be566da3d5c91d5c58ffc5656f"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "bee2be4e04f8a5207ae3165e43233891"
  },
  {
    "url": "categories/python/_books/python_spider/scarpy_basis.html",
    "revision": "67525a3301b504bc8d888f2f02d1fa91"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "afec1f9a906c2f7b7a50430a0a2d74b7"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_command.html",
    "revision": "493ef2dcbc3a3c179bcf396770166a25"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "ff666d4785a0077ba3086edb4ccedee2"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_file.html",
    "revision": "777a640bdaa7fa79c092437ab5056240"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "1897be2daf0e6e2e050672181e69b1a1"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_image.html",
    "revision": "8457b82c593a022a1815f3df61d322b2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "bb34e51fd55897789684a9fccc35e6bc"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_mysql.html",
    "revision": "f0832d39d6d8300b0f76785f461defe5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "b10ff53166f2b0c53374d8cf5a0e9335"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_selector.html",
    "revision": "10563530b4f01ad501264878edace2d0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "f306a7ee4cc21a08591b640c4714cc17"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_simple.html",
    "revision": "95e2c1f1e2535f0e8c62a56d365454a5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "5c7ffd0c5c63227bb7e1e5cb344c7ac6"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy.html",
    "revision": "05d8412ceeed2d70349453715ad5f7ff"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "3e18c11489dc9d5a56a4983c6b81267b"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "6cde3ed969e7600e8b8251187963d19b"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "9da8c432d9d58feedc589940b363d931"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "32d6881ec3f9c9d106abaee76cfd3540"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "f12acee78ad0f910572232d2f7e027e0"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "7e1c852bed510a30ff8b6bd7e1213237"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "7c873f3c34c9a41126cd298cb935a7ce"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "58c1255b24dffdc3119b3d6aabba5016"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "4e690389e348e107205327478e1a9a09"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "fb15ac34fd9edf90088dba85779d5b1e"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "b51eb81ce376732beae8ab013b220b75"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "86b6edffc8fdfaeaf61e1fd75fa3c9c0"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "ad637f56d5a838b475ea59e94a606d18"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "5d7046d53346b0e496babb037c231518"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "8fe2f8fe67c836fc41bd1fd8c1fdfdf5"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "7cc3e56a8f097607d9ffbcefea275515"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "6de2048f80b2017f8e506d4e63a16f74"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "2801e32e23eec12d30e224b287a53576"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "85dfd30a8740e9ff03d8e5353a711568"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "99ebb3a82104312f06c66852dab8722d"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "700de3243dd373dc3a0d363142302656"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "169093674654ab592c5e1d75897640e7"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "a2501a34f4d0cb1a98282b38dbfd717b"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "f3e9941ad7effac59a0b7d7b79522c14"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "2d3d04b657e17bc2fe0916afcec09784"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "e904d76ce0b1199866f6da72eba519d6"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "aa5b2188da8a70f35072772575625136"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "9738cf98b6899f52732d98f3729eb6dc"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "9317bcfcfb675f1fe496af441fcfb5be"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "26cf84c87d6d7460f60ee782dd538b06"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "b0897d07a65c9423fe3ad4b2a07dff36"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "2d26a2427424ccdae504e86c7cee4312"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "9ed7418452d9ca6abb0f07abc56d315f"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "5b45686a5b805a18df25579b0e7b5bdd"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "cf96f8b35de75ecfaec56108970d7011"
  },
  {
    "url": "categories/python/index.html",
    "revision": "61c157b087e54f10a772dbebd679ea80"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "55b45bd3065edd04031f16f6199313c5"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "c9db9a03d5c8f70e8cfa8dfaae6468da"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "7d2bad6317e69cabd1fa685795af97eb"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "95356d2180dd36221d9d3981f147b6a3"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "ad607e97109c5484c43469905ce40fd5"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "021624b861004616efe9d88754f91bce"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "366003d011bbd7c117bcee703644eae6"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "ec68d42483897e396b7d63cac0aba1ae"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "d37f0c9360650206b4883570d87e6ccf"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "090b937d960cf72ceba1a651a4bd7fb9"
  },
  {
    "url": "categories/system/index.html",
    "revision": "f0ee542ff33448d92748c4ad5429117a"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "c3b89ea9c9639b9aa3e91be773b54cfe"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "6ed749ae831fe024221b67784022f97b"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "e49f7a88059017306e611508279489a7"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "7001c3c6436ffeef50e0012a96bafeef"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "1c975eb0eaa0ba2ca48dc723f2922f26"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "084b7c8322b5e3e6293bd208f04bfebe"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "1065ef72355103609be510d9d78f4a97"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "89f295fffd34f6fc018b39fea55de6b3"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "7329a8ea955728874e9d8855cc7a2506"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "006163bf5d457357069d7a7d527704ec"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "946382b7bf9c6b1c83ed5a63f130d3d0"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "b826a9a85dc2e21b008234a4ef99de4a"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "18cba692343fccd07038f884c8411595"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "29383cdfe118ca858134c8a8a29a3eea"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "9342942c2d300380cd13fbdc53a79aa7"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "6f83053f0b339eedf5a41763a4a50b86"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "f9aafa2f7b86d2827958a3bbedef57b2"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "06ab97c54ffe96a065dc5271731437c5"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "d2f7980b29a77898c446f11f3634abba"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "7b2089fc98966883584f124717071833"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "87f392fdc7603c1f285a59869c36ee70"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "195e7e44ab408bf511c0200e5cb369da"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "ed56a536cba311fb30d5861456008cfb"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "0a53aa96321023b74d4f3292141b0539"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "daaf215b78c5761eff4c8659180e5d7d"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "e9cfcf27bf44ad5f29ddc33af83cb546"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "142ff0cf38152bb6307db368a692605b"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "d7cf8266d3f63451f567a2fd2d7078fb"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "6f451c5bd58a6f958fb16f7213285e39"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "1d28e4d7dd3e19264bd26f8c0d5e61bb"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "7b3102e577ea5f01b4766caa06117e1a"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "6302776642e83a7cd140f1e7e2ec2cad"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "a406b7dc5f604070e450d1698e90e012"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "61879544c92a79846726806ce615903a"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "717d538c5c2fdbcaf0b93303b5681796"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "e2cde8a65d3171ff23c0497c9f528b41"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "29bf12b8b89013a40e419284fac2a2ed"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "8e2ffef6956a5f504248fc67bbf5aa6d"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "b2dab4c0e620f1707b86331045a462d5"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "a52e840e741754d1a383a87eb917f33a"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "b98c88a5962418a84b0e10f8b2b37bdb"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "9bb499d272cda4d33293d9ffb7b39c71"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "6e9a6d602f212e777c068c7c0773ad1f"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "83614ec0b85b42ebbdf450af96ab0f1b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "3e0cf09cd18bb986c87621e59b9bcead"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "f36979cf815c485a28dbf96b6452c560"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "c439ec0b4357ab1762c1cf727fdcd513"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "b2a1bd859ab9df1e406863ace107e4d8"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "f38d5238081ea7c0df2fe08bbe62a478"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "e0ee1614225a205e14797ee06a0aacba"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "73ae11d5ce9af557de5869867b68eab5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "17311cf2778115b0f651c04a8a1d67ba"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "0dc7c89b2a1fc5bb05f0a8db420ca396"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "a9cbd627ac9f27f90b786fd8e64002dc"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "62bd1c83ad24f4ad03cad910b890264f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "7af99b718515df20c00a7234d79ce2e2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "ed56feb85b8d277354e522b395448cfd"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "0c75ae1313ec2e1fc88ab6c869651ed9"
  },
  {
    "url": "favorite/index.html",
    "revision": "531dd655b12542d6eaa590973a1a6410"
  },
  {
    "url": "index.html",
    "revision": "9b087b83b3d6158be19c5f4107a480fd"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "504764a40a81642f101d8fbe97816c4a"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "f66466e584ad75864208549d70727185"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "a1b0bc0af8ffc94f3da3c5b00faea0fd"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "28dc2a2f758a8e918d61d9553518b72e"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "7d60b4821ecb64d5f9500b8dc29bbd6d"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "da57ad1df3491b313f24e186f9259d19"
  },
  {
    "url": "note/index.html",
    "revision": "adc616c55296ee6bfe3dbed815619eb7"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "5a9d2b7f3c8524b5861a9f53a5a2ce1a"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e79d64832be7f349d47753e85e66c0e1"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "4cf90a27522c0ceabd7f07f5319d502e"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "ac35f9ef5b43525f6acb7f0a1458ad12"
  },
  {
    "url": "share/index.html",
    "revision": "9762cf906d201dd1e9dd1eba718cc4e9"
  },
  {
    "url": "single/about_me.html",
    "revision": "cf1cffdd0b98d1e0443ef41f58caca43"
  },
  {
    "url": "single/all_article.html",
    "revision": "f866046cff1f7bd4d31923ac3ef23b47"
  },
  {
    "url": "single/welcome.html",
    "revision": "9633dd61655d62a2f8a48be4af0e1561"
  },
  {
    "url": "test/index.html",
    "revision": "8d2d047f8576e0f51736ab47de7a0280"
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
