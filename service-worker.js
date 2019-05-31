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
    "revision": "477572032a6e205df767046e8c4378ec"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "22e05ed846c409bbbad2810c8e2fdf7f"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a6e201662d78e519e5ab8ce5f9aa59cc"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "36ae2f429a9e776947296fe8164f0237"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "a057662034bfb8e7fe87e877b8eeecdc"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "d42ae701eb1b94c698d72e712373a898"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "0dddd1a550010c76b28ceeb240bc32e5"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "9280a0c864930caee00d27307c037e83"
  },
  {
    "url": "articles/index.html",
    "revision": "96492c4c29790d0a9926504a0f624c06"
  },
  {
    "url": "assets/css/0.styles.b4f00dfd.css",
    "revision": "d5126b7ba157bcd8f4c4360edd240d21"
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
    "url": "assets/js/11.a0f7eda4.js",
    "revision": "fcef0cb0bb9631dd3cd79ec738775609"
  },
  {
    "url": "assets/js/12.efd21c05.js",
    "revision": "034a6500fc7fd7bf969da4a0bf54b959"
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
    "revision": "0beb70bdddb8e60ab7be302e6f46d5a2"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "e8956bef7f76346869d7f6f91ad1e802"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "8a5c77803c7a5c2e8a9404e48daf7ed2"
  },
  {
    "url": "books/index.html",
    "revision": "a90bf6f7785bac26acd1851c9492d296"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "5d677efaa0aaca4dbb62ce9e5e597f85"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "f6d3bd11b52a8a7befd532475a83ee11"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "8a3c9e8deaf54efdd0e02d2f0b48034c"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "4c5fb0733ae69dcb0a8da78595bbfed3"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "13e1736245eeb179339b29ae42bd62cf"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "7862ac803e36bd8e02c991888d1a1109"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "ddc9d4f66887cdb391cbc06ed7bbf49b"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "3e290a0d8fc746f14c3c8ed60c1ca5e3"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "ee9d56be20011f82c61df2dc7c8a1529"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "25ec4a90b90a495e7fe7d4095ba6e527"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "41d8030af3e4beea79f0c62892ff8c46"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d7c956409760e6caca2d0f4d8aad1197"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "da8004e6621527b613cbe074117d4c0c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "1083a0c7a291fa4b45fc7bc04fc6a52c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "752ac38caf70be65f5f806208882ef2e"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "a68e9b11cb447c9018b827876e6a0e72"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "85364999fed7493d9b0a399d21e35fb8"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "ef2493450cff86b942a15ad7f5575519"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "05472032433549726dd85ba80bc94c97"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "d7b320a260d3ec0109eae4bfb3ab7719"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "7b349e8257128fd89738d97665738ba4"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "23b721fff2eb456f35a880626795c3ac"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "0317a88df5c82689fcf7b1c7dff16f94"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "a90f12d800109afd9ca8d0d6a65ea301"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "d3284f152dc5517e12d631648bf87450"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "a00b9864b1d306291164befed9fa78cc"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "e50eb8d86e7afd17e28473795aade8e2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "d5909d124049dc75715388d4b2f7c726"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "0df71ea25ca02ce5c09b16daa20f04b2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "bf220d114386995e83b37060370c2fc3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "bda827e6da1c39fc4d443dcecbbe8799"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "57e35c542cbad8b6650101510008f9d1"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "7531c83968a245e1255797c47f7d1652"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "061d83ed9877a820a8df9056ca00b51a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "2df83738b724143464b3fe719d4a4cae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "03b8fd1389f76fb6a41093ed6273130f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "ed65fa5bee79309aa533289e544e9edd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "e8f5b93acd355b4eed10fdf5444b109c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "413320035aa18899b0bc11fd04f7f0d5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "db3e0e5393b95693caaa96ee6157b976"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "b4a6ae3762c19114e16f196a31d3ca08"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "efcdce04c6382a3c34a9bee981661cc3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "6d26f3bc8bb317ddb156aad4107eb9a2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "f60f4a690ea51c96960e6686e77b8f9e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "ea5548116782ca46d2706bb3ef760d8c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "95cbff88264b829e6fa6d64f16b5ec41"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "aa7816b9015dff1a5cafb1a5f5f5ca7d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "53b9fc635bb5f85b700d8f94db75f22f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "a84136748f6e6a0c7c0ed09fdba7eee9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "939114686a10f423310bc52a670bba92"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "9c8481a9dd153c0ec65183e6555303f6"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "e215de518a98e7c52740b86cce12789d"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "0c612d48a72b4a69774cc47b0530fe80"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "2e20fc493a8c9f481bb9c85702e40bdb"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "9806c2756d714ad5a587da12b002e851"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "bbdde79e0aea375c7a90e749690bed34"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "30320cb9c34593aa32dc6ea2b8ef2af9"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "08f72b8f48d3bed8d11c85920fd57f2a"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "d31ad51c27d5f5a7c3bc47beae0d194d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "68fc11cc91b4e4e40da08c51b54ebdbe"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "ee97c0201036950404d805cade7db8e1"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "4aef275d4991f99843fc120e688fe8b5"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "835943032cfdbe277faa88aeda9055db"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "defa891aa2a9450e599a080926259b1c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "468d768d53b4dc10b02fb2cac73bd913"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "dc3855f64b4a7e01250f63f50725b3e5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "ef646009b3d12523c9858821c764c65b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "613cb1de06a4690ce71b21a75222dde2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "1dc3660b450d4b89bd2027cd5c7bfdcf"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "acf6088b9a112e398e62e42e977cbad4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "f9d20e27a5b90afcbb33040f959cd8b0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "098507e8f95d05dca2efa447bcc6741e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "ffbde65bd578be4fce7210bb6fd648dd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "05889666f4a4bce4f71d944e05633047"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "0798b304fbd92e8bd9de0d38c03621d0"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "03e82e08d270017308a3cb40aac2a63d"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "b98e49c15d9f5e35aa4176b7349f8c02"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "b6608987f8c6465b995b72638aaea0c4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "f1be55a88262b4d0ec71a6a618c0c9d1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "99bc774b67fed973921c993e66a5808d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "80402986cac94a9a22803d2e5dc8ab10"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "3a4e51f9bd5b789113177d3d98b69e20"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "076fb22f4d78671274a2fea8443e3079"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "ff1f7ca718e780bab73ddcd4f4345435"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "0c07814cf7eabb448767813c2627d73f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "a301fd2ce9124de3240e4bce029787ca"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "6a842509a012b5a5b1f1b3c906122e97"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "505bb7df1d126f4b529c98476cabc2a5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "cc9b4a9797451d19d91984212fcc81d4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "718f87226a702afa9b1b3f1ffae3f407"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "6247d1662a7ccd0bdfd23dbab2fd3965"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "30464e05394a0a24e95416acf37d6fcd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "a0f3ff0ab238a81e222fba91a74304c5"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "485145d13463e69f1253938fee1b3fb0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "d7f39240202cfa32fc5753989bdc2692"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "a1ba1150f0ddf0af58f4365a2a64c2f8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "740ee078d2c892b0853855ce22bfa139"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "8d16e815fe068fbeb08e5fa1b0da9348"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "8597b7ef502af73d17eec6096cc111d2"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "d933891e2acb2ccd5ac060c03131f68f"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "052ed8989a13c15fde18538dcff8918a"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "08b63760cdcb1bb8b96f5f6260645e97"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "7d80942c2ba591d4cc9c3a48077302e1"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "6614f9c139b8f7627beaf398c73ad99d"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "2ec5e6f17009ba54c9be265a27c787c6"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "5ef812f66bf7e7cb8ac544cc834c4b73"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "20a402faab09da7469579284c8f87de4"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "47f258692259ea321fe0dafc53c887b9"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "4b5f6ea3f5ceeeab2ce26fbba7ac3cf2"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "7a8b4564743ee5b3647a266f4ba51dbe"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "eaa75a9bb49642b0770c09c218ce6952"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "187ae7e1e30635dcd6cf1c4e41ec0cc7"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "cc2c49554fff2fdb4421dd18c9fe1451"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "11d0cfba0f5f2a5d7ce70ab4b5bbd483"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "6e96d090b7ba2c24ba91107efb1547cb"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "d96b332df5f90db6437f8339508db282"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "4f8dee15fe44e8afee7d841fc16fc1d6"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "a5db0451428c05c58e0874e9877d3338"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "f273b523cc9fc6dc7c23ca8e4e563535"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "91e29a096cc1e1476eac182b0584dc50"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "e246659b5c95c73942861da85e0b95c1"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "0f9df20f3e88475cdd278a0592947542"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "982611646941b243917f5be1accaa6ea"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "7f3355b8652b6a9366f2602efa2fb1c6"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "edd6950dfc717f7efbfc7859b1738015"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "0426e4c8d686ba0b8bdbc80f1f186f57"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "df246d3721479d0006f289c9a264afee"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "742d146152e1d921d07d3f74df1a68ae"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "e7d1e05d44fa995a2bfe2ac0c4827dc8"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "47a103408d08cd57e3901e1065321a8a"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "8c763554fdd7c81d98e308eee0d7705d"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "847ccdcbbc29fadde09a3dc0da050812"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "c8b790e5aa1661907753b4e022df348a"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "4c46947b8f9191a15ed7f50a4a883e6b"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "749faff16a2f8a6bc297cecef48bbad3"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "efe907b24f1ae43e5a74e66d2c65db66"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "e32e83f8595a096ac66a99bab66ff867"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "8d5a7ba704e886b601492708e91b6105"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "91fd94b3716c1267d19393463727e20e"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "c7fdd84210a36a813cb74612622d1962"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "50a2fb88789f02d103680f8b1213bc87"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "73118d755023106737b7eb1e27cc869e"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "19a6043afc8daee079cdc8a40ba3d30a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "92bfb8f4819e010ab56cf3dcfe65b607"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "cdb184a287bcb93522cfef56c48d5c35"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "ab19fae5868dacffc599e2eeac6405f3"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "dda0a48075b269656b8ae9f0202393c7"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "8a07aef9b3e5bb62947fd7459728a058"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "957055f8bf187d61e482bf8425ea3594"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "363218ca9ca207e63e53360e3e04a0ee"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "86cfbe814840a3aff3f7f36eca17c873"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "5bbc4a5346de8e02e2e5f0de4f7849ac"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "db5d1e24db7212e88c0c44bcc780cd27"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "fb1c9fd7890c3e9aa2b49fb1b7215944"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "e73d6fe56fb3f333455a3c29348b3648"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "1071427c81adab6ec1da533948847f1a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "285b9ceb6c49191b2cce2fda02d9565a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "053f109a0d60460fdaa0d310797bbc84"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "8462dfa71df826b93565dbf874378edd"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "d77cdcaf46f22f0bf413caa7c50cac2c"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "cea837ee45ec55f9d3fd4910633892d9"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "4509a3734f04865264fbdd9041dbce5d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "fb6fb6248a107b16e8030209f7ceafca"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "1dec6170bfda6fc9cb104c76e1a7b351"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "03dc1f6341c0177745b69b41b4e44a43"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "eb94be6e5c4993e8d114ef78eba26c3c"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "f48fb22192eff0919248335fb8a907df"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "970a44a424fae02af552f8ae810cca18"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "37ac600af41844c258ffbff1cea60390"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "5a5a5f2affaf87fd36cc582135b654a4"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "820893324e3122c9df32d6d647fb7a09"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "37681962e40dfc054bb0a5783c1a9bdd"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "ad6a31f96e37a2af91f2f4a57923c033"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "de7325cee76cd22efe26d2a465909d8f"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "29ff33f29056e34f5211865950871e6a"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "4ac8250042a2e1f82f664804ae13751f"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "4779ea5fdcd9c566a83b556365c21cb6"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "c7776382bf67b8b13cfaca595b58ac30"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "d896ade09a719ddb15165967f55d7f56"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "9661c7bd0cc2c5a0332032b0bd03880e"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "ab06386e9c83846c1d223f86648180b6"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "bca50bcd7551f98535a8b54b41ae749e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "bdc5b0e0c26264a92d60c75b26b3a9de"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "8fe74b2bdab3bf83818ec56a9ba83224"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "2085f27670a29bc40d25871df145a921"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "b0a64c5c9e986ed0cbc4cca924aacdb7"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "23e64e182975699b44840f1cc06aa7ee"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "8e8088bb6d10a96ac63fa004c6c781a9"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "083d39006afef39ae2a999f226828ef3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "d5eefb2daca68606c49a679daaba327f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "cfebddec002144192a0991d207dc226c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "814a65c740a41cac35cc98d41a586585"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "98c4461020339ca294a9de7ef79e680a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "c24c332be914d237b4a27ca3d7a5332a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "242d3eacff58dd4a4c5094f2ed0d0b32"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "657cfddfaa02b3343a285e74bef5cfb9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "61210c44c6dd9985382dc27217ffac1c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "54e2cf7caebd3927cb21fd327c0d8ba6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "a2d8647ff903f670e9340e026f4e7e7f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "f983a16a6bc3f8f2a9c76f5b10038e75"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "983eb35ea196ca27c389a53ad6e121e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "d1495ff660cb4ac7a558d06334e92fec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "ef319a2741746e78e16de7e751f46b7f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "f999563e10685d35e08d065c0328f957"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "3cc3010fa09107da31e65ae18dc01bb2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e051c9826ea966b3e0cc136569e8b130"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "2bebf73d7bb8eb5d5589ac78900452ca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "0bd70e4e8018318cc13558ae1781a4e0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "9c06b5f1932028d4830ad56e2a1b321b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "4870bab6b6bdf28b33c49e5f458a37bd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "eb2e155500ee5ff7fbf04b2ebfba7d51"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "75cde9e80f43b0eb609ae472c6700159"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "2181e1e2d1984900d3b898c5284a9e37"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "75560540a74ddda7f2e3a267e4c48ebc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "7b9274a7bbd96e0bb1bd2ada1d28a881"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "f0ee91ae168bbfb98d571a8cf7a9be1e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "b9d9547435b386617a510f1e03ee91fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "6dcd7a1dc10bba548a6db1b6f1a8a637"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "9691afc8f27084a162ab244ae5cd9e3c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "ffcbc16fb09abd982a1729aa4de57ba2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "c585cbc28f573e4d5bab0db8e73db440"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "2626979420610dafcaa4564e6751cf47"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "b00aa52c76d767c7c8da866316207dee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "eb78640e5c0c2d27afe8dafaa6662545"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "ed7860365a7c7d0f6ede2c43a8b2295f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "aa4e1eee88d530e362d919a02b602256"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "218153be35d2f3f5e476e11b2dc8b688"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "b3be41157b4f97ffea0e7ce0e80070d8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "d583ce83b8de15c07a0e753e99bb4979"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "4117923329479ff83cc6d9395e669998"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "f28fd5427e90c4224fe21199b24a0568"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "a905ab18a4b2708e5e97c4a08c50d9b5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "d80d8f6052fb9bd7dbd263b54fa3911e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "5cf8274289774ce60bf728bcbf5944a4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "1fd47725eaaa8af6870be5854345d69c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "fe3a8fcab51cc3177aea962989b21b90"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "50551d18e1264c43e052562cd2ffda00"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "3298203eac3cfb8babee26ac49e9aa70"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "9d5b20630fb7be92fca698eeb2d48c44"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "d6108672586f0e9295688ac843e06cd7"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "a03d05eda1e4d0362d8065f6a7205e39"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "21a8a3c8347c05efad9a16a56365ec00"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "39937b59443b5afabb4ab10e79863b30"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "c064740c840e8a68d2f15e9295bf9707"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "43ebc16bf6468302043bb60ba970e766"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "ffae14b00d3e00246165789582f3df2b"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "d41da535f2684ab4d9b530b6abaaf770"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "30d62176b5ab1c56ce769395c18f83b9"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7447a14d9223728f3fed7f0f5458c978"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "1425ba5a6ffafbeb0086d9b9a2e40131"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "a59dcc63e6fc52b3f81a076f7bcec264"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "a050f51dedcf04ba941d622fc599b85e"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "921285fecc1d6d5867965be41ffdff00"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "2745ca30be1c26770d5bb5ab00dc22e1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "0e9bc5a9f9ca680d8f69df6547a420bb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "9d21f28fcffa842bb5aac3d7c2b9322b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "49caecbd91db63af018782e1b3597b46"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "addd44c52997b42b30b6bbc603ee17c0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "54253cd2d9f4c951a0bbff2827f11ca0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "7efbc270a093a13460207b0191340f21"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "6925820b8b21f5a9e375c990b3036c5c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "418b668097f5850dbce409bd43875eaf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "e9dc8fef23168c2ae6db4ee7e1dc9795"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "be02fbb0fe1e5b1f488c986f110bd22a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "18329b412b2cc50954143891b861b596"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "0e75b8c786d2e59323cf9d4a0c5a550d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "0fee5e466e2c0378cb2f4b2f49929d50"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "31b440ee670e5efa6f0a0bdcee7eedeb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "b828ac0457d58a5016defd72e1343cf2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "2219b85a43d4c6dde7e17fe3f162d777"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "c6e306676faac0782eefa3aea34ced34"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "ddb7b07769555334e7faac843dcc3dec"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "e9a6c923d78aefec8234e2532a6f8102"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "353f1bb678b16ea13e0a406ea2151f8e"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "c236a719c62412fa2820980f0fc9071c"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "e77935dc7cc27a25f8f50c6741c2c537"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "ab6f38c389b76b3caac65c469f530f16"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "a3660283e2e510444d12ab06e5922204"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "8c2e67b22f475890d7f76986cc5d02ed"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "d3b70c295cf5b164dc5f26d1d8ba1fb3"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "08671b2aa81ede7529307a27a484effa"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "79566c1034cd7213330085f9ce470aa6"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "149fafea82676be87e3a0343abde6d87"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "ce98ea1bbfe0967259dba4eccad0e007"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "09c693478280c06f545a04bfc9e20a8b"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "5acb0f90130da91c934dd86d4aa856a7"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "a7abdb58e6d02f4e689b58c9dc7ed727"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "d16e8c23a7b841148e049205ff26d9d1"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "adfe2692b59c94b2f890b5d259bd92dd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "2b94d97db75409b8c7286520605ff86c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "f6c78562b1d21c593ee62cf9bf0a04f7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "c66b25134997bd6f6f2cb5bc7db14a9a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "842d881f80c572b3b0cdccdd0ede2a2f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "93a64e35df5463708c49e27bf38ee72c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "ca084e6bb729ee74a48c27338e571f6e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "a237ba33770a06bbcb6be6077cb68b22"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "818d287989867c22e3147b60ae7d00a5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "0f3a6299d4f2a30c7b1d5c8aced94549"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "ffb0be8b5e7aef6577688273eaf47f3c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "07120ad2079dd61b49bcc7300fa3b253"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "b0802b41e2fa20a19ff4a9a66acbe8bf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "827a80b0280af81d955b92225bd36050"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "5685d8bd6cd7c5bc4f4bda503a65d4aa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "efed097371c7b33e5ae3d8e8f8906ee9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "52c8d8f05a1192bd8d9566537d572e6a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "dced17f7ec40ded7424441acd79c8f5a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "c2d496328c55ddada5c2a0c6dd0771d2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "ea15949eb036df7e89ca9f59c356c1cc"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "b8e50f055564a9c20d893eb95629abfb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "b654ef34f016ffbdb828e6d66c394a67"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "74dfef89875947d02e37b3b418a44d1e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "f476675bc278e28fb312b536e8ab83bb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "b62985b316668932037db4d71883a3b7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "6425fcaf929f9374aee5a126afdafeb4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "a4b5084e9221ffdf49ea9aa093ce5891"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "0c9bddba94c06d0bc3aa3010b2a1d6b8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "871ffe65dd54a8e7c8238935d812ac5e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "8d61415e8d7150e013ec648788a2f6fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "e34d43c0bde98821162b32b165e569c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "844845d66c4cc3ae92cb169ff5cfd900"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "f957a9aa8b768a82e9307b0a770e0ea7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "11eb3a0aae846fe795f8e97ea10f1e8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "19df3514454316289f770a601b18de6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "8ede50dc5519c7a64d56588046f44b28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "3df8d368c199ecd3b426338f80b55c2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "e503c12fc073b9de4287fafe19d24e60"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "ba359856bdad2657927c05ded2e1b48c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "8bb3a8c721bf42bfb87c9980a1822253"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "c49673b742063dd7c7657865504ccbf4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "67026683d25477a1561b491f2c17403a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "76be1eda3fb65aa132b373a658ca6722"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "f4abc79be45ca97f7c7e7a72e24e6de3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "2e76f6cc954e1d861c884c926e1e7175"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "211d1c6edd4edfb39cdca3d0998c8fd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "ceea24532e4462e34279e622321bf110"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "31d5211353013dc04bedd6f9c90b3660"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "5f1b8b787922c2e19d6572e4fc053267"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "7cd122d25937c1f89ea60321024c7f06"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "dff591ec019523a19f13ba424703b86d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "befafceb6527fe47027a160b1e0ea918"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "1e60ac69bb21d4564079c968e5fc5118"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "12a92ecc1041e8741b43aeb3c78704bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "ad7486ec0e85a02615b18f4191f29e18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "262320afc75b256e47c8cff10ae53af6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "7fe55a9c8cc4d9835be796710be41e6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "743d81910095e05749c5f903cba50e01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "b996d471dd8b62bc34f35581147f7f4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "3ef2d70ec3849bda6173ff93ed3a6496"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "4a05b69ccee75f6e884d89181104fa2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "37315c426374bd7644999cf6a6cd24af"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "8ffe97185fb12786ccd88c199b9c6041"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "0f4a13ee19ff4ec5c5d35bd927f701d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "6e8800c9c6d8d15b8aef2a095ecb271b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "a8e9863afa514daca520bfd4c6917154"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "2372ed56e701a87875656db305916d0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "a9464c5d41bdb6af9bf1b37c90fc4c22"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "7db2ab44767fd35d75e9c5c43bf7d54e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "d4c51a6038f06e20d870e39cc68ae833"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "83bd3d6c85af7f474a564e8fd0c9ab48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "292b049b172b5919c015a673856e4ab5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "0b2b04125795960c9656920d18dfc033"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "bf58c90ddbff505f1bb9915ddf10d40f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "d905a791a49a326257bd7d21949705be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b6842a484ecb4e3e950ec675581dc98a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "a2c5eb9cec7e210e1e15c5d6a1b71d78"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "b8e6ed74becb7a91b7064ce219b090ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "126c851315fd77c3c485390905f3fcd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "1782fbe185e50f6036290c9dfc727174"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "f70440be15fbbb3368dab2d8bc8182f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "7dedc33f31b444944197fc32b97fa6be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "214f9943c0d8cb6b809903313874a208"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "59a4eae7b761d8347c03a55fba2d4014"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "143bb1a3a6ebf38e58558a355260712c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "c514edf687fdf8d4ed725492dfeeab8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "ab1f5ed738ef2f33dce9c4383322b319"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "2814b2b37ce27216ad838f8919bd7da4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "19791d7dfe2495996962dab1cb1ef967"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "0069a921ae5b4a7a781aa21986a75205"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "ae2ead03c0ff0244ff83e1deba8d8062"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "e2d0f3efeabf5e6b1de2ddd0015fe421"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "cec4c068d90a692936873a080e7fd639"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "ad7c4b379549a7350dcea993663adcf1"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "c400912b40db5b283fbf27aa7e048997"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "6938b943ff02237005904d81faf201f3"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "1a6b8bf1e74ee407004667ed632e4f5a"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "69384088f96ce06b3021a7f3f10a1258"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "719d5b57f1868dc3d6f1d603b8ceec04"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "3c2b98d580e48896f05eabfeeab190bf"
  },
  {
    "url": "categories/index.html",
    "revision": "f4cbc8e87cd2fdfff64be79d1a63c5b5"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "f3fe248d1d645265779b75e4e73799db"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "46911196f413ab1995ccefca60b8aab4"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "faa5f5dffdce2b38090e970290ba9d91"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "9a26e3ab822d655df0bf4dd535e7996c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "908dc56572a37eb8c1922218699843ee"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "b99f716acf8f7937b4c3aff5a5cc3f21"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "f34d190ababd2117f8de95f20c750066"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "59226487ac48ac4025f86ca2c9dcf383"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "4582ebcf1f25f046a4c1c7ae021386fc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "c44a82a86d1e4d512218cd3ed13243da"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "16db5a5eae087fa92481d530317ac773"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "a64d944483d94ac1007d741489209991"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "2169a15ad2da625c17adda356de03d0f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "1ff4aa2946c71355c1c891fcdc46c4ce"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "eb1397f737c76bc47357f2ad89f651e2"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "47a369a06ba6f8c2bf4c50bda063e478"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "4dbe3e75cce1d1e1bf0de9d155a32117"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "b5c57c36dea176e310a5014f7a94c0d7"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "537721b5790785d5f838bdf766e5e2fd"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "cc9744c9d8291d4b7a46972b21174e8d"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "f59fb37cd3a185733e093f0e70530845"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "13498a927a9ee307d527387dd1e2a749"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "bd609cf715ada12f331cc36085b3b2d5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b5bb2b93d523160f185ba41675edf3e1"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "69fc031f09768a04a43a334c0c81e4db"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "a58b4c27f9b3f4215f56de4fe3858818"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "4e870bddf22c6e819a5e716dc453657e"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "0f9f57fc093f94688d2fe03197e7e2dc"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "360cfbd1846eaae7aacf2470ba60ef67"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "fb2b1a77370b62e9a74c604ef043eeec"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "738b2488c21ad6537da6da98f2c529bc"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "f3418a4a92800a54b3cd07c43871b2f7"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "1c777e52b9ae0b804e1f423e2cd48c3f"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "4c410bae7c0a04890a99ac542e8817e7"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "0af9ed3a5091f73f64ab5980da86ab96"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "83d048e1e0ebf2feec7a4720cbadeb43"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "95826f01728f61ad7fdbd26b61aca21f"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "4b6416618030532d38304855c8b682f8"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "7c78b2126568a788bc5a6105bb71925e"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "32c7a1a1912df376653146c0af5708d6"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "731e86ba1b5c7248daa3420701124f52"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "f122d20ea304e44d3157e887fd9f254b"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "1446aba642df986e40d9f15978d06718"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "90b3e06859955189cf4f99ad1f56d223"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "84c18454fbe7618ebe5fc2baf5b0d6ea"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "54858923a4d4d7446c1344b247bd54ee"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "c53a49a21fc5439d2c6c5fba410b3d55"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "8d1972d57f2734a6f8973db7205c4ddf"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "d9987f00ffd4d12e1d03940d37cab435"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "d0cd2e65bde9d9f5e12640099f5ddc7e"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "df6782e47cfeb11b362b6878045ef05c"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "ef115962caec651dbb0d666f16977f3f"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "ea694bc32e7eac337c8b574ac1c5c7a8"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "22666cde533c7eb4e4637beaeb464bd0"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "ecea6bfe45d1ef62121af7aeb6c41716"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "a165f629542f5a3426ef55393667ad83"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "137c2f05a687c0d0afe0dcf43a98c454"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "a697a1f672c241614ee515d21c653708"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "38438b2e8817fc8fbd8596066ed8b690"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "a551ad5b3ce3039032e436a883afd5a0"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "c6621936fc673554d7c642089b2210f7"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "85981edf11a4cc0205883111539b3258"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "30c56db55321048dcb683023566c1934"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "6b9e9b1dbc94954c798c28c12221c3d1"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "5d887e9fb45290a494e8440075128a41"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "213982ef735424dcf26f772344e0cba0"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "c312e18ac53e13049b1817bca1546170"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "f313187102114c782fd74f4639be7725"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "295be3da3853431d685fe4aeb63261b8"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "b40ceeae723c00702c784789f1dfa984"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "fe41dc1552fa17db33d9e0526f8bfe95"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "2a67283d36b83ff77c83aae75afe647a"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "bcd04727dd914f9d5df59172739f1a3c"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "09f1a5365737d7f2d31eec1f00ca14e6"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "5a1b16f596efc9f50a4a9bd918b1c06e"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "be02a02eae4ffc2987d022920d4e692e"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "496cd5e4d07114a2366a2be0c4f6c960"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "0d11c961eb6458213e08618022144937"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "6a535eaf77263fba745db23559298bbb"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "336143b63dd6d31fa6c76e12889564bc"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "bf24ce286c5d7410cf35ecdcda8b90e7"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "fe7bcef69d9747eb186ab696d64b8050"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "9208a17f8602ae86634ff9a8dd814bfa"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "0e72d23bb2f450564a7a52746d99282f"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "24c9ffd6c9279a1d8148387ac06481f1"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "c20156c4c7ca7ed411fdd7f1205b0ff8"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "ded80ba00bbae6c5603798ef829c6ab5"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "ad24cd191e1de0b45c4a48a8f6d54f14"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "eaaa54c9a4dd96e1d138557fb4e93963"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "2f81fea22a3989f9aad228b4d234ed34"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "4501a6fae69e7e72263632cfa9d41bc1"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "9cfb79b78cf998553255bf341cf2f9d4"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "1a2ffbaaa035cce9e31ec324108a17bf"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "639cb13b083dbf72f344e3039a430db2"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "931afc5a1f4016bbefc5d5a8c99c38b4"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "fab416a9f542524da0909f5341531128"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "beeafd92a4fd3cce57ea9d892031e08c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "476a2604368a3883c380a3d87e5d65ec"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "93b0b8c93d101ccc66dd18fe3846c33e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "16fc3b56ed6a34797b94ce23b3dc553a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "9299740a0f413650351b79e8eefddc1f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "031d709a81015aa7e7a3e234aabbc67b"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c97a2daf66a051356ef4bfc48d97d6b9"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "854e424b1dce11adf44168020ee4b021"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "0b607b4fe6da272a1e2cfaaf741f02d9"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "bbe9c23e09bcadb9cf4d9b89c7629a4d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "e1789793b019271ef0a8dbf2e0e0138b"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "0b85fb972db912c8155ad0e4d31bc5fc"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "37f4ca76ac13fa8097952b7cde4ccb1b"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "ae23513560cc944fe4ac819cc46b0fce"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "d63b94dcc145540d0920179505969be6"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "0a3594c312b368435cb7eb3352ead73b"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "c40f586e16b8a0a73e4c11009121f555"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "6501d2cd9d643f5e228c9051adea22e1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "05c319957c037981fef021072375c208"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "2ad91b7ac676964b6d7fef88d03de8db"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "2f13d1d3dcb21795bcdfc0b533c62fb5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "7ec60b7d5cbabf3d72556baccdbc8fe6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "48fe47c288831fa1540ed37036959a3e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "92021ce6e940599657ced390ad67c925"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "315b873f2f47d6d8d3e99b7eac588265"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "42c8d0c29b933fa0cdd5ad3b42905fa2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "4f60b8de61c1d8b8d81e3049e51ff123"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "eef4950a532479a2f51c2434dfad5042"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "6543205ba5383b12e0a8eaa73eb98000"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "2139ae7f31bff69f1c7cddc5b2f4e60e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "8262a390fcf89e4249cd7f99555a4d8f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "06a83bbbcb7080b13cc7f9d6fdc82b26"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "055aa0ad0d85c9f4a1ac4e96bbcd5536"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "509adf30789a1904c5a84ddf1e0cb5ae"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "d03d872f26389162f96fee5237ca5df3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "a9cc3ef210893cb5140893f8a393c816"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "a7f3110454920e8cff16a23333f32d1d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "1399e514e6ced6719350fc7d4d1110e2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "b3ca35903ed5f9d414c9fe08d8875cca"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "6bf7594807a79dc001ab832ec109833e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "8c183a4f6ce70c4a0a68fe78772875cb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "4c23245e3223f3cdb678d5e8e7d9285c"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "71ae49b8adfedb06f3a172a11e65c649"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ca17aad3ee3b370e95cb75603911b78c"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "ac91d1adec707af7d2cf3c586021d738"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "8d8aa0162d6620ca86f4ad4cbf0729f4"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "312eda637e3eb4087c7c0890b33b90cf"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "b62eb405acc97ed900cd0af4abf82260"
  },
  {
    "url": "categories/os/index.html",
    "revision": "60895fb986353b5cf7314d284605f8f4"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "6d67b0402cfbcca7a62c86a1446fa880"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "867ae2a114a606f008e6f50a22533d10"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "2f24859573ff325bb962e50a2690b3e7"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "e808eaed6cbacd932293826d2c892611"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "2f84facfc21302538c61e1495ac3e08b"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "1d1484c08ea7e6eca741b70602212b59"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "d1e6bcee28dbbb0dd84d6492720679e6"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "2608dbc08fcdcad99e95055770fd5ca3"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "bd9ae1247b5087caea7aaf03ce761b9c"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "1c3f9463c245d6ecf80a2abfeb224cce"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "25ad3829c7fc83ff8a49e86ec2752c90"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "f57bde99db7baf0accb01fedd63f2a9e"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "74c490ffb53f1ec9531a89a55df5fb29"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "b83dcf671d011e2b0ba5df3eacd3c389"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "1b08e72db2db8829cc8bcd452890e843"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "e80cecc902c4fea4b2397f9dde786432"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "a4e312e3717085ad1b96f72e52b06b66"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "dfa56af1a0907616291d43f3a05305a7"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "d72e845237a0dd28da26a93f2bb214a1"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "f6f69194bd2dfe5057def0f578e766ee"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "a463c28331f3c34345a354fab62b4f17"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "1e47484fdca0c9b88409ee8e90869686"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "d0edd870771ffe832919df055ecbc094"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "cac61340b266073de2ff8558defa2d62"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "a619a7234bc9293f04d8282052fc5dae"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "bcf9923971a523e9c30cead995b1ad97"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "d3972e2547be131b01f0f80743bd3d05"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "93c6570c59f314d280fe76c493309830"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "e835bba9268a6c67c977124ec3567eb4"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "3eb7e845431094622a8315d8ddb3ffd9"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "024be98bc04625d12c3e5fec75578f6e"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "cc11a71e629eb6588eca2e0f94e1109f"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "96cc7cb6db546d38d088bbd7c007bcf4"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "b13921ecbc8ef4c67cc768c060f84da1"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "468ad63059303d1aa7321553168778a9"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "13ea64011cfc105e9a9e69fbd9f66c84"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "6bddac3ddb045e4a115089d423280df7"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "7cef0fc6ed416dfea0484ad039a0691b"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "bc377ede06b3877bbc9912b4143dfc24"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "1f96bdcc16f3d13efdf22731216f146b"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "24f674f1f84f542767d52d1be55d702f"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "e2da86cf5af9ff731814653f84b99c23"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "91933c47e3a868c7030c1f374650c9c2"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "2c666ec58d1385e980834027be8e207b"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "c17832b77ccb0a7cb39143ff1a1d0e44"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "c5c5eaf4ecc195ccdbf209f5a46f5552"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "aab895c4748fda8a6197868b900a88cd"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "4c3039bf9fa4400537ee1fee6625fb45"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "d5727975da0ff43d258f7b4ab44b3be4"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "a820c4b2b6bb0f5cfeca48d18e930c25"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "675c8158257ef24d62f6106298bd25e8"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "67b232e8706388b94711de4e98162126"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "3120c4cc4112a28f4bf445a7429e0abf"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "6033a1fc1df80c3e5690adf455c88383"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "7e73c3da9a853e3a9be49731472b9e66"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "313c1df5c53187a6b787b481299bdd35"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "009814ddb31b5cb3f0e0439f013b52e6"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "ca9a919fef5292651886aca85b3e8596"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "1a7fbafdaa59b23bd33efde3d2b881f6"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "dc1cdf0d724076fefc117e007506ee73"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "329ca23d438ec3b5b32b72e17b4d05c8"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "8975b3068fe5255e07b132528c2e466c"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "da75cfc42d9ba75e240db8c9f5972818"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "da5b411a294f4377dc3fa1900e0e45ab"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "429d6ede895ce91d416bbf2f25642ac1"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "470d7d373d7874312b41db65259d869f"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "b3f6ad68dba264ff68e1d374380dede9"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "33a4bf572cb6ab857707eae191086ef1"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "f632f3821e390d1eebc35aced20b089c"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "dfef77d463fd4c575a1270a9749e591d"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "fb2b4d2fad7fd7ef687899f057f4d603"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "d682b5856596f8744a2ccbd49704b6eb"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "7e7c8c9020b15a45e8df80ad5d75c77e"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "dd057eaf2efcd792480d176afb8b9de5"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "35396fb823baa08ae7a3a7f310713249"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "ce1f3c45c1689ee37b8b40262a6f45ca"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "8a9f0c715f54df3587b29f6dad66631b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "bc6ab63774888d83a3b46b0bd9d2276f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "d11ba3c3a98e77c31995e22d90cf4a57"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "3f4d239abeb9db3bf8e8dd7c783fb4c6"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "83f77ee36ead306ef9b07145621ba1cd"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "5981ed70d1817a9c057582f023f3a130"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "93bcf908c3c8ee306ba8b36c7fa3cf64"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "871c27a6dde56cc1aaede715c4dadabf"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "beb28ed2b279275ef1a3bd035e4ab2bb"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "7a026dd2deb98f671a25214ccc9ef4a9"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "dd7b9fe5fb1aa6f23bfa5a4314af07ef"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "9f059231a1c2258e99d483ced5b8ae84"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "281570da765bd7779cb8dabd4c036129"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "7091ecd30e09f4b04ff2c1a923a5c97f"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "a6052bffc2bbd577c96861061b792d1f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "624131a39cde8dfaa30a345ad3acfc03"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "bb578c715b7e7e69a1496d73d3c2d136"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "e6d2e348dcd0be535e9fab4458021108"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "0908475ea2a5893f0ab460176caec2cf"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "e9e1cdfe07e0bab98e49f648d4a179b7"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "25e88a5531965541b82008a89cc2f9be"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "bc7fdbcbf5ee93fad5494a179916bd2c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "9e069e641d4087623fdb361da1d1c6e2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "83557e994e905f94af0bbf6b62b0a0d2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "f43a2955b7c73e49084c98f57b21a75a"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "a05d0bbcbb97fff2c3dfb436d57857df"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "85ee1cec1b5e448a06bef5373d7af3d2"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "3af9df3e186b8f6a1c8a4a4b5b0aa1bc"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "321a151c73d12d0cf53a2254d209f6f6"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "66b50f072ca27dddbe65f995c45971e9"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "e20f0e0ba61dca1cbc942c75a9529593"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "2bd06f4842bf9ec8998f22a5d8b44663"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "ef7be5c69ccdfb969f2b79488ef64fef"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "d249684c691a7c008e4e3758b3817547"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "73ff50d08ea458b9c067855c2575dd8a"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "e2475d956d64991f63322b6ee1d343f3"
  },
  {
    "url": "categories/php/index.html",
    "revision": "173afeed688a8a279578716a428bd0c9"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "c9b17ae31e2198d51bbe0819c4e17160"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "e06fb3e6ca419849ec8eb273122789aa"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "dd531ca3f853164b3ba8dbe48178863a"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "efbe6c58d6b089c8be97252e31265e69"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "1c2c169a78f76862406ae6e6c6938489"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "96447bc1dbba41138d170f0dc13d2bb0"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "8bfb2782a8738f8dc3217e839aaa4f31"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "c2b0392d07138c3e2f58cea7b1d8d1cb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "1b2d20a961e0b9f42c7a8e4bba320292"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "73c63298233e2e711f15d399a796d302"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "1710918b6bfcef8588c4a7d8f193e6d4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "6f1e80ed6d86a8f7eb4b17ff67ed7a84"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "e499a86cefe14bbe279eabefbbd408c7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "772e8c28a713c35e0b20d3b98934d769"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "d58bdee412a716204b1803dd5b05292c"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "0803954d9606e5df6fbe40c41f623dc2"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "575398261961844d8bd64dd7540cfd71"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "0191d0a6364e514cb23197c7fa3911a8"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "e64f0761988a284a877737fe0b425b0b"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "7d14d8ffb5452919817f59705fc75f80"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "1a935d508fc340045b767ed267b1f56f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "460dba87caec63ce61d2335e6514e637"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "31aabef9042c304248e244f9ee7680df"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "fa3680524322434006a6b6fc16a8b29e"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "4ac95893001ba5a8b7f8bce15b7330e4"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "294f9940c63e041021772eabf213accc"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "129338eb79026878981242e56a66f7f0"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "6e7ee4beeea9fb163385afd5d82cb45d"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "91856fba17f4b2479f98b8d19c99d2c5"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "805fdc3ea1e89f482520b49cb6c1c760"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "f2245a4f6b5035babd6a7129d095316e"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "229df565d031b42a1ba307a74cfca199"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "b8c3df160aad90cddb6947976a377631"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "a12f34107f15584ea1800099fd4254e8"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6f878fa3e39139ecce9c55f5c4e87a8d"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "5f039f1224567673d11d446d62ac547d"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "dff6dd1d2aaa3713a4f5873ca12f72c9"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "e2f476fdbcc7c76c09484bad2f23f6e0"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "56cd9d3cee79bd03d830deae79e49f95"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "d02954e2f8989b8b8032e7325f2d30a0"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "3defc49658b89ebc0f18e5df8df613d0"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "52cec87dd5c83aed603ae58f20a5c257"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "c81a82ce626e44013344e4d0c8be93da"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "4b225fba9b4f3fd1e9dc38a69d9c75b5"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "044e08ec9fbfd11c78ae9ad66531f147"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "02caf88c04fd3211c7b40f966af1d68a"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "25511312a1e9d1a44612cccd076fb324"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "83e5f346ba4c5ba84adf604fc0384c9a"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "85b656a59cd769e2bf477160c77fba79"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "ec04dd63b4944b747ddf9292fe85315f"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "103db5a9cc7aae34ad82ffef159252b8"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "373aeb9dc86b3bc7160793a975553db9"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "44ef8bc4ec18db4081bf5d52f207ea3a"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "7adc0229128ddf795e193f964140225c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "04df1c2aaa54144f709eaa32f326108e"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "c840a108fee55921f61b96fa59466470"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "143370dc9b44eeb8cb3984eef90ad517"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "c251f4029320048594f12be944afa11d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "46803d69387aa04225cc02df10a2e47b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "a40172a0417dece4abfaee260b520186"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "49a7f80f12a473521292eea9b89ec86e"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "c05e68822aeb2908b736c1a869485809"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "03d075539a76779a8a41da2d71d602ce"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "1a5b1c19f40921f5ec6a72d880e998e8"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "d5c42c3c80092fb5d33e45630b6540af"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "e2e4a87f1196a056ddc3451ae35d358f"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "5f8d024edb762d6c6cac6565360cf6e1"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "36b591d44d3534b139b30493952fcb67"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "542f8744625167bf86642863ab3701e3"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "940acab646e846ea1856b662708d0feb"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "7b09d82fd859c23847360fc7887b8f15"
  },
  {
    "url": "categories/system/index.html",
    "revision": "72d16ad1a31c7a1d74de53329c82a7ce"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "a9cccdd157b46ed7035db16123c61980"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "8748bd78538ba1e989e437682caeff7e"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "eac3f13c8945a486f8e3d7a49a9bb01a"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "80aafe08b234d361a09cc929277ce193"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "da4d0d1a86071f6520f500bc0082c9f6"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "fc6788d9dd59cbc57ab23948ca277547"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "655c450cecca5ba89ed330adb8b77fc4"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "81b4261bacce3adf2149a14a809cc751"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "05ee389ece20cf740fd071efcf8a8440"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "2e1d5a8973d48b9d6fe6094816f863fc"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "caf6904b3bf02142b4bc590d756b1e05"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "571e4654b40a3c7031161f869fb96cf0"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "f70da02c15397bb15d5183617f600aef"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "10592bebfbcedc3484691fe505bcf85b"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "3ce63f42738a058c1dcc1e091986ae03"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "fbe288a5a6f2e9c7fe89530099e583ba"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "4ea7b4fff8dcaaf333eaf2225a26bf23"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "a2ab439803ff5a9158f8103934cecd81"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "cf090d0aebe706a7c0d6d8154bb10cc9"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "a9e862fdd0e4f1a38079fb7156f0239d"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "4a735d6aaeecad6994a938787ed4da8a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "cf2dc5c4457b137f35783138c9a2d4bd"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "610a77aa902d355cfdf582a192ef9997"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "227da3f27cd9eb6b84c56e9b371a5402"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "f4a277fb07605e5e4dc14f75e0fd9abd"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "d2c6a5388405e39eb77ed73b40aa92d4"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "73d942c885130bb5de71c5e0843b853c"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "27d6e61fcfd3a4a7766c38e892652408"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "593001d728bed985c2436d48904d0928"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "39d6a9442c7994cafd9435450b68ca88"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "4dd18d1e7f7cb1d5addcdad032beca4f"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "465a2e794e0483b7cc6bb7ec97d2b2c0"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "b864474fc4d53cf1fd7263d4528811d8"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "78b625071d17502f8fbb922f8022689e"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "3bba7317694e3e4ea9f5ad4ca9348299"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "97171037120255928c4377f6b9717b6b"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "b30c79d02be9edaf888318793ba624ff"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "d0f84f52dcdf0a3212ff4e7041e5ddc5"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "5257fe6a1e312ea26795a019a626f702"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "43e85d41306e0c8dc25e5b8cf5805c22"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "387fb3900c21ba00ce59457c258d3780"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "62ab254fd49fcbd5f5e99fe43dde766e"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "550ab77e5376d15702c1acd4a2a6d357"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "431664016612145221ef39d708c9eac2"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "d6394e21306be3ad07bb93f073702f78"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "fc3e04eddaf365bc43635f6f9fce0e5d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "c69c2f492a3068a283adb644c61ff836"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "357c8d8e7e1678b62df4389648345170"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "fc10bf22e696844f14c77de616e86255"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "d320f22cb2f24d15041f5125f6056027"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "a0ead26440771e7b01438d2b07007d16"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "f85d2451d660a211de09d00a45046e59"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "70202dfe6f732d317d1e4b8ca2649661"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "437592f23a13c07e6391f9459953445f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "814f585f93bf740b8b9d202053e5ec74"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "ca424256c8ccc30d92a96d2f820aa472"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "55f22862ce91aef1c4818798dea61aa9"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "d97ea075b2323662115fafc6a68d6875"
  },
  {
    "url": "favorite/index.html",
    "revision": "da77dab77a98dc66b1d13ccc5b8ef987"
  },
  {
    "url": "index.html",
    "revision": "04ceb95f3d2c60c89674b942402a7e61"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "269fa735dfefd58fd23a1b5660750b8e"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "7d992f4d93b0c358ca3a79f44cde2524"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "aac667d47b5b06dc90ffc38e7b80b3a2"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "c17fcb55dd70281046841b409c127669"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "261f9944816c3bd20ff1a70f7a5cd100"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "114465794b85f762f7b625438e5f4668"
  },
  {
    "url": "note/index.html",
    "revision": "f890d08a713659ee2e1405457c2a94ef"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "c92fbb7941c79269df2c3dc4848f6a71"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "f7c594bb40453f09ac4800659db8c256"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "c6a428ffb72acc8a417851373bd46e89"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "f4e484b5c9f5778472b1133e4164c7f2"
  },
  {
    "url": "share/index.html",
    "revision": "d28556fb769080bf08ed738c57b7b0f7"
  },
  {
    "url": "single/about_me.html",
    "revision": "7b9e6a5070a3776aea3a0de7d1b9c643"
  },
  {
    "url": "single/all_article.html",
    "revision": "11011e27b5d4215baa62513d492bbdf2"
  },
  {
    "url": "single/welcome.html",
    "revision": "916d95a4305163534345c07077332f08"
  },
  {
    "url": "test/index.html",
    "revision": "406841ef05357253665e6b44505ad678"
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
