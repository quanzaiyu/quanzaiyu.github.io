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
    "revision": "2b477c80d3f4f870cabdd56b7ea21064"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "1bf806d8f879a547d4889e66d2e50b73"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "7ebb5196a0aebe13e82bfe8cb08ea98d"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "a978d33898d058a98658aedf3e1da839"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "ea642537ce2e4f392086846f66555445"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "c662598b89983de45c24086da99fbfb3"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "84f4a78a9067d7e0fa3c33981f17cc7e"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "5e2b101d339dccff8d08d107d70f835d"
  },
  {
    "url": "articles/index.html",
    "revision": "6ebb6c9b8a47befa768f2d76a0adeed5"
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
    "url": "assets/js/1.eff2f4d0.js",
    "revision": "fa142dd07cb6e917752f3089e697aab8"
  },
  {
    "url": "assets/js/10.b6ee5adc.js",
    "revision": "8265a15d25ec034629ed30e149fec52f"
  },
  {
    "url": "assets/js/11.05e142d7.js",
    "revision": "446b613415071b1b6171f6d034bcf336"
  },
  {
    "url": "assets/js/12.b20dec8a.js",
    "revision": "cfc31c3501187fa15e774497a30e4838"
  },
  {
    "url": "assets/js/13.8bd03a91.js",
    "revision": "ed72e1384b606189270046134f8f3464"
  },
  {
    "url": "assets/js/14.62c8879e.js",
    "revision": "5ee658fc9bff7d782ea577ffd4b7c1da"
  },
  {
    "url": "assets/js/15.eb1ac8aa.js",
    "revision": "bcb31ccd0e3fcf8dff0e88b3bd36bef7"
  },
  {
    "url": "assets/js/2.7201b0da.js",
    "revision": "958052b484618e24e7c659dbf840eeea"
  },
  {
    "url": "assets/js/5.51d0abde.js",
    "revision": "faeaea983df04868b4e76b2f4acb7b69"
  },
  {
    "url": "assets/js/6.3e769c98.js",
    "revision": "b18ca755990bc38a01779f243e55cf09"
  },
  {
    "url": "assets/js/7.0ad930a0.js",
    "revision": "53d50ecb9bd74f88a3702f6d66311b70"
  },
  {
    "url": "assets/js/8.658548d3.js",
    "revision": "254d9dfbd20548e410b00e01f5ee7380"
  },
  {
    "url": "assets/js/9.1a59cf9a.js",
    "revision": "c8700ab58b58847e681c465b39eeff30"
  },
  {
    "url": "assets/js/vendors~docsearch.6123628a.js",
    "revision": "8f3cf586c78c45216b0f59c51b117db9"
  },
  {
    "url": "blog/index.html",
    "revision": "d376d2994667aba5603e17d716f3bec4"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "1b650c9a4bbe2eb3d40a9131c028b76e"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "c3bc89b597978ffe8a2da0b759d2c729"
  },
  {
    "url": "books/index.html",
    "revision": "4e35ef299772cb0dad040849f5fcd3c4"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "1943da0635380d292d31f34d1a4b6bb6"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "01d1e8aebd90eccb2d0f6bf198a9a12a"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "e474c95b030e5bd3ab01926657a425cc"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "9d732e09fb9eca3373fd33c16d7b6e8b"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "58fd45a88e11587baedbec2eb4651243"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "3c4bfcc9c338d690956c88644f797eee"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "7262124afc28a8a231bbebc1a98e1fc5"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "c294df6db08282ec0fda7aa5eb67506c"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "b20289e81152b0a90188304356a5c93b"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "f32a65476f55011089317b72540d1950"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "949de6100d6d37ba089e422af1a7ea3f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "6cfc85c1191bdb582fe166602a0c1db1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "2686286b4d97a6207884aae27cb24a3d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "1aede5a68690a50369562336fb7db26b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "b8ce4c728253a6fd315909ecf0a98af2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "a1ef626ac802a5962c505e9176366390"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "99df4af9553356c8d95793d369372490"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "561bd3032fd8a9ddfeaefda6b06833f7"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "5a34a4d72b46c8d6ab9f1953ced51f25"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "7f7f423066bc545f558feae28baf5f1a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "5d4a81b08c8bc4b77d4ac132f2f0c980"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "5381c0b974a5befa10a57e225735cc8c"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "df28092d4611117eb32e820cbc384490"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "85091849cb3f12c266cfd1e52d913f45"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "fa0e15faf93516305a7d36946798ce45"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "f2fdb99491dee572aa458907c2c8849f"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "bcd6a4538d05380a9d85be603278eebe"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "36c0b9b4c6dbcc71a294e9f1c3901386"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "13b4e7022e345a340945ce0b48fc23c1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "114bad3585d26e7469c55551d9faf6ee"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "794fd0e328474295e272f8d65d931483"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "7da65bd10193770a11e99b4ec7aa8d16"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "20f2f52133fbb6d1427756bb5351a17c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "d843f97729071650a0f59bc992c91670"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "e035730c12b0f710128875dcfe8c74ce"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "0590a858ba0ccb4a72cfbf65def5be8d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "cb0297e1e32bca92781a4959965756ec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "7b8d8c7ed08268ca462611a056e2252b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "8ba4ec5d3df6beafc28706294ed74809"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "54c055364eeeb54ff9544f63b202d833"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "d5b605257add9175cbc9e0d625b0f841"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "6ae73f0275ee122a51c77005039679f3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "e9175a8dd248fcb303affec2b7074285"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "f2ebb5a3816910299f77e29923e1b710"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "7b2f41f29081c0574aaeabe1be43bde0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "308604f307b6ae16f4061748a54885b2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "195caecc7eb80cfcc18847b433f4384d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "7ec0c4385f0077477bcc35ce5df616fb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "8dde1944a304739b4f4df83da9ea8c6b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "6e272831567278c1b90a72e675cde53b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "c07f17d1776bc0e823302449f88b5bc1"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "40ed5decda9e89a5cbffbc7e328e554f"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "2488400ae1a552ff1687d6747845f30d"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "2e3609c27e4573745422064b308cdf77"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "b49b0c830c3a1e1e379795945bed94a6"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "e6e687cd6204673fd743e6cb9126665d"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "18fc1828b2617fecd0344f649935b2ff"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "8c1831d04d3059de55648721aadae41b"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "3db7d4af6c039bd63a3330422d048c85"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "754e668a3eb9c14c3203ae4e1bd41edf"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "9706afe5b366e3c6634b0e11362a06b0"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "7367a2abb805b1e0ba5ba202313d27d7"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "ce37a2602e68bd4487d37bf0b01b477e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "c93908eb03732af2a44a4b341872455a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "9ca3050210514b3b58faa27ff215edcc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "8bcefddaf8208f9c9c51b3322c7fb7d6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "386e5bf6a2741c6a939e91fe590a23ef"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "71a9fe5438e172536a93af5d0f85a113"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "ce607d587be1b8505690f39461c87775"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "9748251a5f09229376e9d1c641bbadd0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "1487bf58087954b62fd68e6de707fa36"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "e082a74cbdf2bb835ce41281fe09afb9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "80be111d05a32dc0063c1748f1b82da2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "61951c21615049809192c3aff89ff761"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "7a6d7243d05bc5e5c6e4bfdd365752f5"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "a349c92453f47427972f1a2772dcc4a6"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "3f11728996526455ab6761b694754fd2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "4e24246ebb440e537dd9b5269b05a072"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "898c81389ccf1c1fc6af959587e72966"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "48cabf406a18c6a4b6993e2229f16616"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "e6690b0670f1e2f8f3e151a86fefd27b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "c9a58ae1a838338fc6a4d135b666ce1a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "63659f469927818859cd02a898bfe16c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "eb154845fb015fd3b96f5edfc6f79152"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "a9fe01cccdbc7e59a497002849923729"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "fa93f20916a3ca81d27c54829aaedc0b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "1ef6e4231571d67664a5615246be9a09"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "ad7331e6cae7c0fd3631dae57b82bb59"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "ff39edc4c89c9258efb27ce037e77607"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "8bf71afdb3b1c34816df92509c51e030"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "b71ed0d5400b3d5923fbfe8573e9c078"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "875ab3fe5c3f559fdd07aeacb9bff6ea"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "a0a4907b7dc65eafafb6939a71be2f37"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "4daddc6d631b96e979ab09b057605d5c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "33393049f7637ce534d63ae0631f01c7"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "58e07189329182aa13c2b2cce7f7599a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "9bbe74fa968c84f64342676ae117c221"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "259c6b48a4f9dd25f509860a327e637b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "0a77999bbc038b3b959228fe34d6085e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "aefb5bc44ca739fb88eb23db70d8c702"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "2dc37b3261d4378d23977b4d716ec57e"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "b3a38e040b53f915bea2b0d2a2bc64da"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "87d5bbe80bc24eac8ddac31bc66bda2c"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "4e17d3d8d5160ce406477f6153902559"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "73e020ce33266a004fb67f70ad9ca7d8"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "930e24ffd29bf70ff28b72ba8cea7f3b"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "ff954aab69242b59254896eeca863fe9"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "e34e782208cbe56eeef2aa058b08c9e2"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "52189a0a627ceab96892e36f381fb9f6"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "770e6117ce333c1ff9ac78598699268a"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "21dda15cde6625527c056c07bebce5c0"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "ef50d5b06f264fe537b25613d7eace1b"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "fa7fafb111e205fb0ce723d72fe4225f"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "51fe1c229d7b2c7595cf19c4a26d2103"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "b727702e74bb9272799f5a7c59217926"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "ddb6520bbf415dca32497a7b5562ad9a"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a88cc666698442cd9015fd866d219eb4"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "81d3e1139375a7a0176ac1989457ec49"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "17c78bae5d0ef3e88da642ab1f82d26a"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "bd7246706eafbadb91130ec63174dd36"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "e3c54265bde080c07e777c866ac6199e"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "49322a34cc4344dcddcf4db6580df3b5"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "50248c35f30b4193becbee68724642d9"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "45fd08a87830ea1d14618786b15b6d09"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "ff58ef1e585b0f1ef567f2f0ae3ae4b7"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "6d91220957e76d4cbff0ebbb16d5da33"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "1bf8f4d04ecba78e1186152841c4ab7e"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "6c79996ff422ee5acb2f840d82f0ce32"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "1261581d3545b050fc9e152993bb5e63"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "f72175e8e7adb6d8a5ff486e776c42c6"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "0b21f8aecd72d6f738a94444afaf625c"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "76776597b4ae6ad05a5e22ef8a4adaa2"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "f11d094a7b33d13cd8003e2423ef967f"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "a801c42dabdb7e12fc19c783be9a7fc1"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "46e87ca86a2a137e166e923f51328c03"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "2d8c41597081a9923d4204df3ed89ecf"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "2ae7278a0c4a7ad226b4d41fb70395ca"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "2793e789fe3a9e8c087acd23227afb52"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "ba2f3ed6d806bb0aa65bf7e3b0531bda"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "f0dc97eb783048f5a0c4c5ba4c5f7e4d"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "d473b34a50ea4333004aececc63a3e90"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "9317a4881bf7c668f08adc87ff9f27cc"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "1976c8aa91b578e918f905e44bf05791"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "0e1ca6bc7e8e29513eec85c4725d5e2c"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "1c439a0e371f6bfa6b303d400810f004"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "82cc3872b1227ea6ce938f10b8012081"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "20230b724dfd595891638573b00bc345"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "fd5a840b8ac4026e152518fbe3a79b70"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "ca01d65b5428b5deabd06d8a1d376679"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "894fec564b77a3c934d1f7f4adab7ac0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "41cb953528bd1a7313067c0af273da87"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "bfed4a36b85909ae36d5f032ee4cfa59"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "3448d2f2fc959a05d40482dbfadcfa1e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "b18187febad40b5f44be050c6c0969ed"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "e784861a45ef089ce1d6f6f155483f3b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "52590f3669f6761d09ead71b0e960451"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "f6230da75199e34a35f3e026d102936f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "39739e6d0e458546423855a9728beb29"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "9fccd630559b5c434a466a94b5510ad9"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "5de1725bf1ae7d286e8803e70244b737"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "fde001f25e4623165abf316d963e24f4"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "311480e583f83a83751de3bcca6d7b5d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "cdf80a39a33d79a417281ce11fd024a9"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "1977d53726ed4ffeb4076192e1d872d1"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "4bba87c098fb0749a3b19765bd7cf625"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "fe5e6b5880c02f3158e333da2c5f518f"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "55e6e2d90d147d0cf0f37e6f6050db43"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "9cde6216c8a21371520849c9443bd20a"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "a66ba66249dc6602457006938bc220ae"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "2298b61fbeb088a43030aad2a3e544d4"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "56b4859dfed97e114ff0f5c603eb4102"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "1d678c4ce4e77db3da1fd636d6bffcee"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "33e9138f4c4900258b313ad9c83b924c"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "0cfec21159622fc9885108544e516bf2"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "e60bbfa1270c178ebd3e2953ca09dd59"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "8d91918a2692255d5e7680ab753df1be"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "f322ed33dabbae4283dda5c43c21d2a7"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "b316c2b9ef0a5fcb96c911e15414ec2e"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "e455c6b91fc80b8a967c061f639741f8"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "2262adbf188fcc681b3167afedb43a0f"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "4414c08a992893ef90a8f7adf9264e29"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "9a72852213076a253e6419ff0f84d947"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "ed77418dd7d267d01983bac03f41bdca"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "5da56f929c51a9f88e8e539d4f96e296"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "119b76239b1eb1ecf17177321bd006bb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "8fd44ae5c351cf43752a7166ee7b1d6d"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "cc8485d9d244ccf184bdbe138dffdcbb"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "ab0c37e846c05642c6de49d8ac6ecd0b"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "39e2e4cc58be79f0d6d6b1e1e88c50a8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "76551e6f219c8df8d50f2d5208ee2ec5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "8d8d33d28631f90b7bdd3f9668852121"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "bb5f79d99dfb69a30462efdd20e51bf1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "35866ec2fe13045bd02ab9fc958c8b65"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "c9628d3c1435d5f1a9ff8e5ee74853ef"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "933b96382a0373103e8ad4d17949c9ee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "84572681d535de19c8e598ecf798bc93"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "bce40245574ec9fb4d8139b6c9db7d9a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "2de64fc278b1d3019f5c8f598a1a32cb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "29bbbd22edb2ee72b7ac78babbccd8e2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "1c1bd0a70cf771009762366802b2a6e9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "ef3aa905f255afee887a083295a07c30"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "3b12b5e9eb781feb768ae05fd7e8581c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "4a886f62160c0d91e8d52a98b07eb22b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "63b45c47033864abdc99731b2e23dc21"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "09f8cfd4f99404e4ca9685e796f7f074"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2928219151997d50e916f943f8b70c72"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "7456d393f1803e4910516bcba726b6a6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "1d05118e0a00fc4c11c39ad838551433"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "ae4755c61c0e3baedf870c5aa4d66696"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "16851a84078ed7959e7ca4f5372d3f82"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "0928570349cfe935950570586d7eccd1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "625b45aa6e2b93cb162ca032fba0e193"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "e5aa40b159ca6f2df596a59721205a22"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "918c941487e0814d1681d96fb82a227b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "a1e3c21c3fb3c01a57ade5055755d41a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "595f35fded7126ec5cd0b648215c5286"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "4890d4845b33f8d15933ee65a03f4c46"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "84e9de0b3e6680dbc8c9a6a605727d94"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "356a197bda5cd4298351ab55d0bd1791"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "cf62b1d279056d5629a61dbb02d795a5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "5976bf3e2cb94cd743bde40e4336036d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "5bdd4b4684b4336912d331efc1d12177"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "328c959d03dce8ef1e9243ef7b713b3c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "27bf70c1c5e8daaa8786edc2496bd7fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "d5d5e6d8362933c4e1eb3b1479c87f20"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "efb92f618750fd669021bab8f0a8f728"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "5b33d8fe86a6617ed76f01a921f673d5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "90e2e4fa571cab8c9ca21ba9a13d320a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "c40aecab4577881a4fb7b0440a5bf2c3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "89aa1915d063f31c75b8a2c52e1af3ff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "5ad3d3bc117bd3c92c7288fa079e7ca0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "3e13bd6f178b2ff5093d2b68035c6927"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "d132049247a1a6a347a3db23409e4517"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "25967817e47d926deda01b286ed87f17"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "b07a2bc0f380bc55e6ffadf68e947851"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "09108f2ce6a739e719cb8ddfb29eaf6c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "8197cc051dece872370612e394484d88"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "47e2be3c5bcde31819269bf335726f22"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a3ea6525f3b291119cbce4ed9ae3cb7d"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "7a82379044e460c8f608245ce56ce51b"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "6583d19121c560c9eee9a17ea35b7af1"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "3baee039b50ff267f734455880745957"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "4f9e53bd11eb11ab1533e14839ed07cf"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "23fc98a67e7c1515c4ef3cb6012dea2c"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "687c82725eb355ce790abae909c79134"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "acdc4f4604baf44e9aeb51d59f1ad79e"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "89f996e529d241aab54d7ad2f2fe6693"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "017bda83885fdaba944f465dc55d0642"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "d6e535426a87b038a51c8edbb286f954"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "96b28fa1c271434581782faa37560bf6"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "a49e3f8c7cbe9fd6eac0ab55f5855e25"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "605b14c2ed90854a6a9fe00368fc1583"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "c455099eacdf5099f07b3141b14add70"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "294a4083ba94a20ed783323891558ac3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "dddc24e809c3bf58deb02664d254346b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "30c7b3eb1ab49377aeb026b3dda04180"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "4c07ae3e1bd3b659826dfc90f213d313"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "f2d889e39992d804eae1a5f7af64cb3b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "47238d60f83c5367b2be33b332091bef"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "ed36b21f286179bb6ed19a82572f6b9e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "411bb910997475797f7aa3da3ae79fc8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "cea56cbdd403ebef4e7d9744d5af8be5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "892aa018f12f8ee98c674207fe9a4856"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "4185d949c08eedb928a31dc6365ed69d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "63d39e8ba4f2106767ff411287b947ef"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "3463bb9ad54ee6e6d170cdf15afb2129"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "3f40b002b043f052afaecddeea4e2701"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "baad95ac452fcf8cf533317a0ea90701"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "f6b33e9a2519e456946a92b10dbd5a31"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "153ab2d76ad3e4c348d4478e24301d7f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "c597821c33e6beb7925bd5550c569a9b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "9521e7ad6489e41fb4cd542dcee637c9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "e13ac893193e8ca20d36fe4e75a481b0"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "673b64bbb1b069e5f67b18131c6847fe"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "457e5ba8e9f9984e49fcf4bf98c8fd55"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "c8523caa14995c55c9a6951164433763"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "be6b96f34772031dd81ab56a1bd06497"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "67c4ce92dbfc210ccca64a6be19bc49f"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9194022bfa0778a8746b4b73155bea74"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "78a06571601cbf78e5fd50b3c16f74ac"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "c3ded83fc7d64629908686b2684ee3be"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "cbf01a5327ec87d201f60a7253f67674"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "79e5b248d0a337d6edbed01254d56a91"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "e3b70c563cc3a6c8a068c974495caa5c"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "5ec75865e7b4e4c605a3e5adef3dca45"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "d9e41d7d20236bbc2133bceedfdc984d"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "ea0a3cf675a47a3bc886967c8b6941ca"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "ddece211d723f74e320057d29d831541"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "94a8af842806b4e5f0e1905600a29b4b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "4df2b825826bfa39223c01c0cefbb708"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "e89c5b6927bf6bc935634737f7a333cf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "dd750cff5139c3d59d83dade53bbbafc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "b023122e7728ee5246e986e200508b94"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "9f18f8aa089c4949b3f063fe27e1585c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "434ce51f6596629980a0b06dbb46a199"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "f55a8af0117e2f34e1d379d70d03a9b3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "a51f5f426eb46513b929c76e731532ee"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "300d937e6b4f6d7d5b90f9a23d77e732"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "b655c316dcfde4c8fe10c1726cafb56a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ade69f89a5ac5dfcd097aefc498dcbdf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "1fc253355d7bb43f5e8f01b84608bcb6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "ab88959847ca14fd20c255566826fe3f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ec5e2a54f825b36231409062d9e46269"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "722c18ded8c6d4269c6c8ae38b623734"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "752cd2611fa44331be2dbd631d64b919"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "1562c7f0a1237f121126f605f14ee771"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "acb46e54e6c92cb1bfe6a68188325a94"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "c80b4a6123682cfaeb642487b8bc885a"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "d579d475f9f28ea2bede0642288053d6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "ecd4ab87f56150b054e78994180e0a47"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "b5ab925faa12b551a12ef465c83390f7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "53284f35729f6fdb8279230c9817e4be"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "acc6945277469630b974fb4e968afabe"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "d1cae87247e6e3ec48b7ac1f82a0173b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "d1329116f0ba76ae1bb9fd3135a594bd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "09457810e514b93ca947c2b448cb2d12"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "cea45242d38895d0bcd933c8b3c4c59f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "32dda4857698e16cb43e94ee9f36946c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "04a99bd97d066c415ce42bec67670a23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "6b4bac4eba3d11df8d20dfbf966c3c87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "8638748ea5e0fbed162e28cf3fc830ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "19dc9ad2c77c89ffcc0664b35425dc13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "d66f574fff5a052209dba633cc3de503"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "4a529993731bcd6f9830098516c7861b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "92b06be3d1cdad35f2b86768ea92f4aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "934090600a09881e14210b42cc9ffd5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "6b65932baa9dd5459b1a2588877f9f40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "2922b8eebc3ac32a95e19a5c77cc7ca4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "ac69bb33ef9cce503915bf3b11601e2d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "bfbdfd329d0ed4fb0722be9e9e9650bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "9f877a710797654204e28d58cfa90d61"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "e244f451b13b27bda16b1f53409cfe18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "a820f6a1e255ecd25373acb95b41b380"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "28c70adecea76285f400f0a0967fabc3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "8a4ac00217419dac11af77b11345786c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "0361c97dab89574868c990d72a394717"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "207978ea274d90f49c021378614dfca5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "fbabb1448c7bb2fe9d1d965532accd49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "71d8a9cb98f2b7ceb9d87b5e9c1f2476"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "77c1822781b2256fc29de1eaf25466d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "7705e261b414072bf0e91a4e33d4ae36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "6cb5dae064bb8c69816383617301ab3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "78493e6d63bdba2cf8b326a63090d66c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "d79a58805e5b7b4d7aa7e1bb76a894ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "b679a91a8a9a3d07939df7a28700146d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "7eaefb6a40f2167afaec8e96fb6d7c7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "e39b895c44a8bfdd6fe135dbc4b1c965"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "b1206c42eeff2054e8dacf61de966bfa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "0bee88e62f155e472918d0ecb5e805ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "3cde50ddcae9fc96d34279b83dc5ed01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "da3b4268b1d92330ccac2fe92b044343"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "ebdf5e03c11c3712b85c28b821a479be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "4b3b2246e4c89a0d0794a321ec7ff6f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "f281fce53b165e58a140e5e90640ef48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "db16a3ba53b0eee4619e5c12c3553233"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "160a0368b95ec0c9349c750cce5266f4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "28fe907d6f8b35f927a72fe613589a84"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "9732df1a37287ec8a0096cdda2992c3e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "2ec5a629f2dff98004e17b91f9c22ee8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "01bbe6b6b81f674a920095935c737ef2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "056d32867e7b30c88cf8cae647f181bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "440020966519892f7ce813ec673206fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "1380b6fac4acebbc8f12514ebc888971"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "da1dc5aa6ed693d90180e063e2e87af7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "be92259577fc1fadadf5313132745ce5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "57f21a1501ccfa8a5c4f364ff311e75c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "4ae8c3f24931cea7fc29c992ac658073"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "b4a35f4d4d3bb9c6ad1db776fc983152"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "8d2bb64dc489f7a1f6fa25706655399a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "1df7d6cbef0bce586d417002d70ff861"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "d89bec4ef8ab10ffefc94e3312b34fc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "0a66d9f5d68c064bac79ee1f66f9f3a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "c1ef6cd17f9b948d7b174d8a2aaa2dfa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "1d83c51db3bb24375d56af9d0302ec88"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "67cab73cad759244683440be61723ef7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "266a11b2c1e99bd580ee90b175990958"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "ab0efa7c35aa2abd6066e62a852e00fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "0b42d058bbf3955a6f7a7261d89503c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "f98651c568849ecd1b3c1fc4b680618c"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "a313f59cad40ac8c429e5413d5ef5b8a"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "08a09cae778f88270227f0df66ad8f51"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "935283a2d48331cf28f51f2c29f8ba11"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "4f57d559536304eb92268dcae9668c44"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "75069543937807e410c9837ce15a5484"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "1847f27a62ab995277038d0cf45d20c5"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "40f407aed0a03d122ac49b9d2c9e5a38"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "d79bbd5ce8a82072aed83f08d0141204"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "1a9de7898c54d8bc7ce19bf07af5e17d"
  },
  {
    "url": "categories/index.html",
    "revision": "78b1f5868730c0d4ba2a456dcecf3fbf"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "7d835a0662d2d9c919d347530c7a69b2"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "5e3cc4af8b6befad4b4fc0e90d5b9474"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "70c1cf12a61821deb46161d6ba2c77ee"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "5890e8c2215da4ae107d674474198d88"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "792a003d2ed9abbd36e656e1babb1d62"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "ec001606ed411afa308f91f229266677"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "122130b4149f1377ffb555dbc47099f2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "bd64c8de0d7f8f4c8623a646788f7dae"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "603dd9200d4e91f8bf268a6b8970b221"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "af9c0655cae3f4fac3bf5db06df84d51"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "b79a4e0faad5802323bb868a4c3809f5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "e4e59e0c03705538100ac5ba5f19d271"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "3db0ac8e80a9229c937e41128c0b9c69"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "1b3e435deb1db23e187f72339db7121d"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "d6680a41c381cf4c3ac3890205964114"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "0c7a8dd317c781d3c460093e0adfb52d"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "2a1f721daa5e399749658938ea7ca827"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "4da3d490ff45b8dd687faafb93f925ca"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "29b90d0bc472c340b858b0b72eb0b15e"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "1563358d061cced4ab6521e30d8ff118"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "4c4794db22838b0cbaa07e0885bc3da3"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "b235d0dfd415cc489da37de260610dfa"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "9297cc5fde7a0e20622ee3c5b9d446c8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f02cb221a78ebfff7abf8a662092b007"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "da4cb64274c6e512fef88edfb0fcc5a1"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "0fe32426bfa2fc2dda44e2cbe641d542"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "9a53c265e2197eb6c9af5111f69e3847"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "625a1bbca201f59349f390b3465143ec"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "6dc7a81b81a2ab0002a075b81ca0691e"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "780791301b6616373560ffe2fc71ee01"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "9a10a398ac8214471173e38223f2fd3c"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "7a6b123bdda964f9a1f7b34a85d4e115"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "0a45927ba18663df44255c60ad8574d3"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "cd0f4c3dce411005105f1a699ed109bb"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "14b3e0ee0a5f5117645f37d8ac3771f5"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "66f06b2f93d5c547e71bddb358ab7ee0"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "f2c20fdd67fd8c1b59bead81cb530612"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "a78f1a76db5981b90774eabf08743653"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "561f194ad211da66a68e412f408543f9"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "b4092a0af35561b102a10587724ba891"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "0a19835966b4de235a3d6a8bb4599bb4"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "a404ae48d29efdb7ae15ebfd2465f49a"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "1d72ad806e1bf66cac11d3e7d596d9d7"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a967d4ac8851dbf8c9e7e9dd96b23c54"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "6be312bb230456362738de45d020e9df"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "56fa5d98d17ada8c28f4f315adadf43f"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "ef8f96dd7fd199a416e512aec41e5f3b"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "df2f3c0cfa6f0c9545cf1082b886d87c"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "309b14be98df30a4c61724de3b4149a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "ff6d25232fbe7b1fd61f8c12c2dd57e1"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "e5434a9fef28d3de8265333e270bf4d8"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "660e1e0519f343e96e11e9ff1a237744"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "23e1500e67be273d17c47ad588860e3a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "2f6ac0fef3b9fd21b2916b2cdd4399ea"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "db37363d99d28809e1e67bfc28141efe"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "7e20072303baccff3547c6487751ae86"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "7beee0d54811d113de04f9c07e5deb07"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "996b0b9fbf50b297469815b0c4e17aab"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "259ec9bcbfbe5bc1969fd69e0e5cd86c"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "0a1ef1daa2ff6e4960216ac3dd6466e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "6783831d2c2e3a532aa18e2fc1016f01"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "2da49f97caef0aa4c7321b7ce0897347"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "125d32aa82b8c6ffbb2dd34950e4e985"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "1800370523627005fefc1ae1035caccf"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "2ebfa6d76731233487a2f158d5d575cd"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "844ea5451461350c455e8e9e83719e03"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "9b6a75ba187c614d64d25ac4b998429d"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "843590b352e8d428b27c4259021138f8"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "b2c8a72042591859a8e23ccd7744c52b"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "ed1c478357cff7e660bf14e570a205cd"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "1aafbe3f41edf963a29ace0147fbf459"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "5dad46e6791d93eb37d824cf48e7014d"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "dd076577c8371a8ebadd034765f51e5b"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "cc8bc9c0e147d51756263e6d9a5a7697"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "27a04b266f2b956386ea09276ae6965c"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "2176e4e9cf7464aa6deae3ddf5f72ffb"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "1d591c4887b76061d017f8e94081ff79"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "997c4dabefcb2f91f25a97c6d3925db6"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "16599a6c76b6795c534b7a3f6771ffa7"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "653ba0342addac3c1e56eb0694d2254f"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ccbdc79f18b44fe4732ddc8867770845"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "4222c97a3de766e15657b9339e690c62"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "9dd32ee801ab7c1443146bfc50f42596"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "5b476b50c30871eabba8363c8fafd588"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "31a551cbf19f25597e838228ca247eac"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "d0f24df04cc7d0b24d5b833b2c2a0b59"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "8e0e35ecfc888964a376090996233e17"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "1e97af963919b051a6026b498b120fcc"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "e5dd742c56f4b560b452c0e5227093a5"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "495bbe01c33e67450771719a30050f27"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "64589d8314c4e9eefb6a8fdbc7e11cdd"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "67b8032346294e7272c25e4141b1cc10"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "710fbfd984bc3a0eb65700f1a0adc718"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "bc0bc47faa862ef86e076cc9cd99dd30"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "c5cc84bd95b341ce66d5c2223deb3d38"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ebaaaa2d2a6846b19c8c4b75c2926116"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "761a8b0f0be9e74b1dba01ea35893c19"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "5b2906cd017cfa867585a61d5c5b2346"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "9faa9ecbe36684c5cdb1f3f1fc0a2c1c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "85ad010db964a5443475416bbeb85f6d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "da163a694a9b81a845c2a68318f2b8f7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "bed7c897e595c5e6125926908a18b07c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "be78df384fda12a711a2859c98c00d59"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "91c7a0c4f4ec10b9f00edabff60d230c"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "2f44561690968eeeac90942ddeaad567"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "916cc034684672450bc5c7085521e6e4"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "cf626dfd99eec6a25d53500e5a16fccb"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "74c8c33585e78fe004f7ec4f2b54acd5"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "3207c0383f5cca8909f0cb3c923aa7f6"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "fc9bbebbc8d36478f1112c70bacf6185"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "86fa5e1951d90a8b0bf81ce947a7cbcf"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "d86f3722bc6757b0161f654c32697242"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "edba9611d0e3d475c25f9d0bf287b607"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "7c123f5e1e7a8e22bb2d58d29220dba1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "1b2c18425ae50cbefdfe2d09a9744e18"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "9e21d02613cc99f17981045b74ce0542"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "c79f679d53183ecbc125ca1f7b848594"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "895771249993c40b24703ccff33084a6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "837004f7ce06e28ea1621cf84fec8fc9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "7cf35bf69474dba5126d32a96bb7af66"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "72182e2165d254348baca4fc75b8c8d1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "f9e8bb6238330af3f031eb220c2d73de"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "12bcdba963bd874f8496b01c07f01920"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4bea5098b9843e2791d8fc54f754dde5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "f061fe16a88f46938d895ea9b22d8996"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "3ae3ea950a7c66c0d74d3bd0528f357c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "a3fe009496bb47bbe2c1a4ae7f8748b4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "b1c82f4d007dab69021705bade90b74b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "95cbf4162a42e8f34e127d047884e38c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "600439dd9667dcea7e8303e32b4ff498"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "f01da0911ffb84457383fa76ab2bae02"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "dce9077d8823eb38657c7301f805c368"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "26e5d6beba31b6789c187f65cc49e6cd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "73bce0b3685cd3c9146d86c6fde92a45"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "4ecb8d04ff8e0f839006d4f835477812"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "eaa097affe016d7c71aaba25bf663b6f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "e291bbbb521191d4e7625a006c9bb218"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "a5d2c1e0aec39d98ff37f7868b68798c"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "cf8e6316de19e77fd476d59ccd77ddd5"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "c931630309681e0e7ab3adb4d2d85aed"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "6a5945cae15c59546dd580e8782af204"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "d6f106c9b7eabd484b00fd36d0e0cdf3"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "706f5ba37a04d680b92736a9452ff841"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "01c59574548ad9600bf7fa8ffae43ad9"
  },
  {
    "url": "categories/os/index.html",
    "revision": "89a2879b1f7645542f14ec00fbe98dbf"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "c5d4dc6df4154d2d0a0ee5eeecb7e902"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "0b358934e4b448b3131c6eda38f88d10"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "1d2b3c255953ff737ca62d795c9752d6"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "fb2a2f40757f707a1369b684e23dfd91"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "0d2bbfdd0ee4962c8c3ce6c22e611616"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "ba06b5698006f86a0ceadb050169f5cd"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "23893aa4df5c2ecb58828839fa1255f1"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "0e67bc08ba9feb55077c9caa157c2c5a"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "77d376377722711b9e20dc5075ab05ce"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "8f0779b28e9d911f46df56784bfe3e53"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "fa2caad49f39877fcc0f63d149b81638"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "77ef26c28080e8223e6dc2a1f1d985c5"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "8721f98beca0449bb7e61893fb2df967"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "05b8a9014289baf65ecc939471d16734"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "d2ee79e7e3869e8cfacf0bb41887620d"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "09c9f2a916636d5e413ded4d193d16fc"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "dde935d62e37129d0dbb54e83efaec66"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "d98fdb099f9b9a8dcfa43146475cbe0b"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "8d4cf3d56b7edd1abb5b5891a2706e4a"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "f555654fde4cddfc898b303439278e31"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "2e30cd46a1faff99f91dde31bf435e77"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "95ffe3e5b0045c1c562201659584603e"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "11fc4073463c5208ecbab82767003108"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "16f436053503cf19c95b9e40f69a8727"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "fe93fc4b151efbaf96bd6c1b5860472d"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "9d50c4d751fe645105416d15eff67d60"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "84ecdce15e8471b80d8c4e4a511d6bae"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "23214c1ac671279e0d57d1d43b5ad506"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "e2d31270831d334a62cf0cbd5ff3d5c6"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "c758ebc4bd83f12b93826189ece428f4"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "978758c6bc3041527adb7b30ff8013c2"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "76a003093f07083ba3f2cf91b659b31f"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "3521ab9705d3d534c9245dc1fa7085bf"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "0094e130903b3db8e8118ed5ac219f02"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "463b68c2f64f695ccb8488fa13d94e18"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "e138ee874de9ff30261d8584d5be908d"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "29c0b3ea740414e66c9bc823f3534471"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "30ea14df96b2e335b967bd5726f42adf"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "7fe2d7dca397d5b23ce5e36ec72e94c4"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "b64b9ebd6fff4f3febd4afa3429a5878"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "1474d33d48efd0ca1d11db0841ce978f"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "8878548478c5bf1a92fe55995ac1d9db"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "ef03d8ed93ea4d155ddb5dc9d7adc529"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "a24b0f938249907b1a238a61cd54c7af"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "4f2d4ce2bef31618ebe14e5cfbfb7e75"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "3504b5bbb9fdcc0f1112ade7b435a3f8"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "c465c1a463fef5f22f11f51f17a8f036"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "44a4368e3792e052e5ef165570bf8792"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "fcdfbd791a956a08d086b3b61d9e7e84"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "ba8d09395ac67d41daf0c3440ab7a80d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "59c91a225ca36d0af1897426d22035c5"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "6ea70ebfb384d161f60e33f5394cbb60"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "e92a427abb936862398517401447f401"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "4785f175d832bdad625fce65777f2352"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "c55eb0f09b07b5bb0a4b639966d40cd4"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "a73d9aacf3c8cf9c6f25a6219a25ea07"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "372e8c769505d78492f30319677f8bac"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "c6df24ba37d85611c8e4545bef1372be"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "dcf6c4d1246f8d3dea35482c91b4510b"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "bf6cc959f55fea1d00ff982343d38c32"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "7734f6a3967a7c1f96bc0dad129cdcf9"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "6ee4dccf3149a38fb06f5bb8f05ea272"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "72742df483c4b0fbaa4dd5e18fcf566a"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "8d210a15fb4b215ff44eb0ff45341aff"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "e937250e3759065856dbbdde1c4eb195"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "b1bcd000628cb92719c80abc16f3eed8"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "428acdea1ae40e7383f0e99b5965bf86"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "565a81ecebd0e71fff66ffa0560d5b1b"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "8c8eebd717d4744351e2315199dd9367"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "8ac209b6cc7bda2ae163c4d56da2632d"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "88096501cc0b0a123215343d9cd0eefb"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "973fb654fa0f12422aeaca06e2beb533"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b365bbae3e51006e95188a1702989170"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "db19e769f3e0b5785e4dc4b9211d260f"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "eee0fa44eceecef067806856ecc3ec60"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "0c1f55aa38d52db1b7caf3b610f9fdb4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "3d6a972295f2fdfe57fae21944bda33a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "6b4f134e7f1989ecf92912e644343a9d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "c33a9032403b81149c200f9c1cbd874f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "68c7da60d88b50fabd20103df919606b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "66c35ea36f20b9cfedc06ea4e6f47599"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "43fa1028409b73132f490411c208e0d4"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "4676ce36eb80a0c770a3d12253568788"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "48a2a1b886f274c91309a087cdb1de32"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "4cdf4c3dfe719437e928028eb1fa7b5a"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "972cf20af21e152339065a5aba160a21"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "2e8002d5944de96902615047acb1eea8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "9738381c9cba60940b23756f24b2d3d8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "3d4137f807f85e3ba22bd4fabda88163"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "50b5f71110f06e1c37f8e0007b96a110"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "2cebff44cf93cf9c1faea1ce96e4930a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "eab949a2c0f155ca2edec5b5605e639b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "230d79483e28b00de6a0f4093d292fdb"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "57cecc20e33cbdc8620627ec94d83b5d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "041feb3837d9e283e28773fdf73d2ed6"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "dc54425d41152a8fc46b72ae29f8315f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "2d0ebc73d4be52a712dce43b0abca906"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "5c4dce429df0aac579bf61995fbb6090"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "74d0764608795e9918daf3256381b588"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "4feb239a8987992ee4944cac527d18d0"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "ed039f7f0562b82a6d6a74f424698687"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "7c9928deb8809024ad1d9d0a0eb09105"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "9fbc462163d334cf5f628b26773c44e3"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "33f662c1b99ae1d4270dd47010d95105"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "7800bd9bf050e631b8bf254b1aeb9e1c"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "33770ce455ee88e0b23414309ea6aa4e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "53724101d7114cc15fc21f561c4854bc"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "336d3aff2f9aeb9e531d7a08632baf5a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "cdf2589e0310ed594e2d4e2ba40537d9"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "34714fa84f2c2a913a2f02cf5292203b"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "11ff2f57406f1b5016f51a150b7d4266"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "398885049972bc6a1bfb70613e289db5"
  },
  {
    "url": "categories/php/index.html",
    "revision": "3b44db16b744ebf14001540b49ce093d"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "1d5c64538671087234d8bc925285422c"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "bb49aab737777332aa6071895797babc"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "4f196010d837f3b8ce6baf7ea5c8347d"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "61115b395055714cb7e94eee7edf1062"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "5727b75ad5100d6724e76182ae45ed4c"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "9b7d829efbd21fd3f466f63e7400d1f6"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "49ca82455bedfd5efbd604213f8c9b09"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "84f117f50e1d0d1d96b57f80aad24cef"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "353f338812d8eeafa8d013ef7847c1b9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "3543a0718aded60e510fe12e7f813804"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "3e8327a3b7fd9eac8547e7ae533f1d4f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "55e74a0d125a36cdf4f5d15b741ae5f0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "840081fd7996330f7b031563f4988f81"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "ded19dfb6a511950f95c934b4e5a150a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "369c3eda0f0806f96de6ce82341115c9"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "52e233a723570fd9569841854d6fc190"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "6890e705f89454c7d03f0e2483815424"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "fc2c3afa79265bc8414aebc968a96d4d"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "18cae30e8200b752a46cd3bf6bdee973"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "42e431c217941a631d1f357d6a7f9849"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "9e073e5a74eb26b1fdf22476fd658f6f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "c5678e178f12bd12b44b98fc3574b068"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "2714688b072c24001e0a4957be80fa1c"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "fb85222751b0469bbe8e37afdd82c8c3"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "3db1af9dbff3f4c61545cc2c528a12af"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "e3736360fe4fa062bb2c0e09b5464bf3"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "5178dd39219d3d531bda68d62bd313be"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "5b0e6a943810c4fcd4efaff8434abf63"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "f56cb2dec36b4cc7ffb12e211ca8266d"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "57817937408ab1014515404429341129"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "1ae3815f42a25657ddfc64c3a36eeef2"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "d012d3c80724938c35f03a3f1a5ca79c"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "4edc85a92230359683072c5a78901bd8"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "df0755fac7215ff961192afae223b4df"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "34ef031c6f3b816aa57bd97c168404bf"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "eaadca18452249ca6e4b42ddd891293d"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "05526fde5e3a23d04dce5169a2bbd047"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "57642f7865f5c3c9397d8e937566c98e"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "269aeebc4026626b8b8932820341b9ca"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "238a24c797bdc742c9eb4ce124a5e023"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "a137e8ddb2e4c7a02da9d6eab9e4d133"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "804935031d9b42b8d50e7e095ef14257"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "a53f9fa50ab63b92b2e2dd367e41376a"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "c1cd45a2410f49fddca0b508173b5387"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "72641c3445b3abf7b25d4e89b3e768e6"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "16a7c2d69787b7c8f0bc3ca1b5a67c71"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "a73a2844ea3ea6659ed1e6daf5b73567"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "70afae7584bb771758ef9de8811f1b08"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "3cfb3db2da59b7c7b584d87ca073aa41"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "d3f5b7d0776db1c89f0638fda330794f"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "9fe22f5036e3af04694c78ce1095d191"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "b3d145ba0a87091bfa85c4c3650905bc"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "50aa63488ea0038eff8e498163730d9b"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "808c320a78b1301c884e693f5643a4e0"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "b89b875e3be882607d5b617c8d046e0c"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "64dc27497fe485b39bb5834eae50adcc"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "599018d716c66e1ea3d97b43bc2bc5c5"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "0d9e9d3eafea1a2209c7348b3747d05d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "0ac886d649033f295732c701410fd881"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b794fbe178f1da08ab4d27465eb7a65e"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "9c204733693e6dab6c55c29602450085"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "e174d78ba5bcf03755a8fdd471edc87c"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "78531b37d2560f6444e0e4c07d03469a"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "661598704409528ba732984a476f2d80"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "a28941e63fd1ada6af757bc23cddcd56"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "bdb69ed3350cf5b17afb1b74a238b351"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "b8fdf64ab153024a7e42cbe1bae26e63"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "2a3d5a48bd7f245cf7e9c9b096002f2d"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "bba3cba69376edbdda80d277ce6a7f11"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "4c6ad15f08bc619294a9f812b8e074c3"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "db186deaf6f2ecd778615b27bbf3fdca"
  },
  {
    "url": "categories/system/index.html",
    "revision": "26aca4ca03907fe596e9812f4b3cca3f"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "fb16e49a88a607a84aeb6f9a4a74b08d"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "b15cc3e06c94ea32b4bed05d768de909"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "7dd0a70b945ee785a76cb92d19729b9d"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "b2f6850e69b8ff17329b926732844901"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "2a025d8ccff4067f403d121e5687b5a3"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "5a813880aaa3f4c21d34314eccf40052"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "a273ea05839b2d07a8e576df33b9f0d5"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "3852cef443ab1a3545b0b6dfaf3a7e47"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "d03de98bce198747803f4d8d63a2d679"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "3389589763ec2287a2c2d77e897214e5"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "9df5169aaa1fb717f0a78d21b2a83058"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "54e2c63d7de7a00ef517e9f45b68b51f"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "efd4b507d88c86f804dacb45329ea1b0"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "08157477889f062e62e1a70aabe11246"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "abacca2d5db55478bd2de1ab86420086"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "ff05e3eda08cab521757f8426e84fdfd"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "224e807af33183e97e1faec89d177e45"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "c922894d30c7159e8346dee9b45d5610"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "1267c7959d8039ad296feb166a5d7832"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "241389887476c9387ec58bf390f87f14"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "1a0d625a2faf62f0dd8e8cd76cb8c061"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "c1884ae41369171ed7e4ed6a58876620"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "c7b7d9806791beaafeb99b84198632c8"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "9d9204a6d78a9c1c84892e1d9e3bcfb7"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "323d931aeca58f50b7c3000fc199589b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "cf0526e5af6b8ef2ab1434002ba46051"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "db344ada01c43f97b2d70a34218ef528"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "7b66dceb9b8e8b5270ab26856c000033"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "928a4e0229cfbad5a31b645e004ae115"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "15768dafe9dded8e95923e897636ab1b"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "a31a7f26653681ab96ed3659ca694b01"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "0c6463f51bc3cd263f21b580d61c5543"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "481366fecb3b49c73861b7950120783e"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "e07311ae426e9089a54d2b56965b0f1e"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "ec149579bc6c1d6435f1d1d3e9f0e848"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "b7939d651a6c1295dcaa29db9596693a"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "8610b1b127de5eb2f9ba4d1e12d8f5ac"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "c736ada9530daa7eecab05f60c2f541c"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "24d2bf81139e56acb18bcf4eced7e797"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "295037e31cc42a3b883b5493f073c551"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "8b04c90f9de41f879ee5885ac4b50eaf"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "4eccb6ffa4d8633615454a352010f573"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "7e0faedae6685491bdf349c60ade3860"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "c11db3da10acce1d59e6216ea3cbf6f9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "1d270451b3af79569df749815318d91c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "d607c7dc2114754f07b2a212220ed0bc"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "d7bbb1f09ce85ce84fa90c68c5848945"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "253d277b5d9128ec4fb05f21508249b2"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "497e3bd8816c00c268683459c1a66b82"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "73d1386d0f41c0f38f54dbe061ee856d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "1eb8d1434791e6331f121b4a29cc5811"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "d0c5caea5caa01db087885ee122850ae"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "c232fbfa0be2e74b7357c71b9245ed5e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "376b2aed71353fde12821701fe9fdfa9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "61aed3a472a1e60d8ad2b0857e93f09f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "9251c88ea808c05c62dd66ebb56e3913"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "3f51cd8d6f519b2fc46235bddeae90fe"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "0701c3369608f281a8d44f86274094b0"
  },
  {
    "url": "favorite/index.html",
    "revision": "b470d5b3e99e876799996e3b79ce6673"
  },
  {
    "url": "index.html",
    "revision": "4c4616e9bc3338802600dff49c7f0bff"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "5be63d48bac826ee3e6c8d69a82c14f8"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "39ddfa56ad9bc1e8941f25d617fe1728"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "5363efa989c93e8d5039a7ed585ecd0e"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "69895dfb73545b11fc274029572cbbce"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "dc1524eb572ec2d460af902a2fa1669d"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "21a0bf75f9ada9d2a905e8b23cd22a1a"
  },
  {
    "url": "note/index.html",
    "revision": "8cdfbb5a690002721c9591e3b44b1f0f"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "4b872ae5a78e69014ef42b78ca46c28f"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "52594f198d72dead6ed214ba4b30b5e8"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "0091b05a852a960a7dc2606c609a9dbf"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "0228afc50b0b3f7bd154ad8dbd8a6ad8"
  },
  {
    "url": "share/index.html",
    "revision": "9d7dfc2c3a5f543e0398ac79b9216e5f"
  },
  {
    "url": "single/about_me.html",
    "revision": "1792c12d197ba68a4584931c06f62bf8"
  },
  {
    "url": "single/all_article.html",
    "revision": "ac09ef286f67d1b151e9af239908629b"
  },
  {
    "url": "single/welcome.html",
    "revision": "ac35d5a1ca6d15678574cce8c91dab93"
  },
  {
    "url": "test/index.html",
    "revision": "2eafb4745e234a69a589ce41fdc10418"
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
