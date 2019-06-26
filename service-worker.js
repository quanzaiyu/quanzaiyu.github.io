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
    "revision": "cad0fdf3500481321a0f8e22101cddb3"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "128cf169b2f773a462d3174960b118f5"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "ae0114d49cbeb5f06ddb354243826011"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "1fb5456402288d36e20eb3c9f759ccca"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "68e383fed54c92288994c796c886e066"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "a66f4153253157c23ca3255b03a20ab0"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "7e66be539e11a9042cab827464d320e4"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "5122bfd3b9ce1f1562a9a2a39cf1c2c8"
  },
  {
    "url": "articles/index.html",
    "revision": "1c0338a69f42f3872102884755663ded"
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
    "url": "assets/js/1.41b56a0d.js",
    "revision": "03975365ec937debecb49723068fd875"
  },
  {
    "url": "assets/js/10.6f51d06f.js",
    "revision": "7c20b88106cdb3a76f369e9873d92882"
  },
  {
    "url": "assets/js/11.6e5938c2.js",
    "revision": "cb76b568355dc29e46a49758df2e4a3e"
  },
  {
    "url": "assets/js/12.3680287d.js",
    "revision": "1ac4a2dde6d5cbe89665882cee7c6681"
  },
  {
    "url": "assets/js/13.97ee14d5.js",
    "revision": "0cd20de895d52119a938c135251855fd"
  },
  {
    "url": "assets/js/14.28e21a82.js",
    "revision": "97d856c14e4f2a14dcded7f7ad7167b2"
  },
  {
    "url": "assets/js/15.c3fba8e4.js",
    "revision": "24ae6b82cf5974b4623f59ed540af1d1"
  },
  {
    "url": "assets/js/2.d8b15707.js",
    "revision": "ebc09eccb7e850c7840dc947fafb0695"
  },
  {
    "url": "assets/js/5.53de4218.js",
    "revision": "69639fb776d32373e036b48bf71bd0b3"
  },
  {
    "url": "assets/js/6.5a4d4316.js",
    "revision": "8984292f98f3c0b238abf655644f8226"
  },
  {
    "url": "assets/js/7.6d06e94f.js",
    "revision": "1f34119d18c18e2533fc1f5b9b57371f"
  },
  {
    "url": "assets/js/8.857cda2d.js",
    "revision": "19e5f77562063d53f47e69f4bf9141fe"
  },
  {
    "url": "assets/js/9.cf562657.js",
    "revision": "bda26e308efc98c37517ab899eeeaa76"
  },
  {
    "url": "assets/js/vendors~docsearch.c9f203a0.js",
    "revision": "949780d4c250706ea8ba39367cdbdd3e"
  },
  {
    "url": "blog/index.html",
    "revision": "1e2bba9c5945d31deb2406a5aa535c7c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "7f71e2860af28a988e7f21b42d718c0b"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "47aa7709cb39f0d3831648e6edaa60d9"
  },
  {
    "url": "books/index.html",
    "revision": "86247f08e2209903898301d792b8cfee"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "da2daab4de2017b85a309910448a3677"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "d535c4dbbc8f48a1acf1dfb0042dcf8e"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "e0c48682966316a180c0741ae36d1cdb"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "19e874ecc1570cd69498a9ecb0acc3dc"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "10dcd3c35f8e48c302313b3f27ff584e"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "d5d198a481405b0264f5e57fcf43e6f0"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "fc2bab59c20a4f41c2de213230e1c654"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "9676fe6bb7a67dc14d7caaf03fe1eb1f"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "0d96d724782277fb719fb83e34a8d55c"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "0e17320e686852f7e05bd69f26c63094"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "78f674e54cbf68956c8c87d09a08ad00"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "78afeb6fe0e555204d6a2978b50c7717"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "11bca408d617a371c8e6a670ea9b76b1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "3ac14757a6b0628b8195ccdb338b5ee6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "4ffb51e2b01c034deb2a5dc8973cdc67"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "f418e501adf2f27c7295ed6840ae6a17"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "181e0a683f18a034d4d66f0911e8bd21"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "4c41ff3fa51c626ede6de5d83b456eef"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "a37b74059eb02bf4bba515b5cd3cddd1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "96c686ca491fd12c6b63536d15628638"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "04fe3227bc802d7f4153e830225a6ef3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "1911cc8944076e32de2adf2fc64394fc"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "c7194aa7bf8811722b5f5b52709f9632"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "1822c3465a86015f33507db38e3c1fcd"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "34dbb0001c34edd1df6b0ff955d78b7f"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "7821d817b08b0ca45ba5ea540b8941c2"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "ce39a950b28c70e0a4fc78c316ecd92e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "dd014ed95d8dbf16dfabe48f6524265f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "5b10f6d4959a5cf8134b5649bbad619b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "739f002a69ba0af4cf17f47d6418f3f6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "c4e8ce0ffa27a1f75fe55be6ec2c57f7"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "74e52d1ac439af57f317609c4a9f0250"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "37e423f2f81dab23ea539493d8057a60"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "6b5cd0713d8016332e1d396bff8ced9f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "498bf74a263f89fb52a68859479c266b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "ceb74fef6a5b2c8188dfa66283f0991e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "f5f870a9a731c43980880077b765bad3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "263c4ef7173b9504c2038c8c40309e54"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "3a154fd84a9f6d056d25fa04af92de3f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "fde3a69652f2f44e3cfaaf93be6018fb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "f5d5c8186619c4624f402f824e1cea82"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "65f8ea95674c12706d918d0e694b55ae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "c03a2d8ab79e2aaa352e136b6f0a3aae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "3e203bc7a7c481bcf79bc582700d3faa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "7a2d772468b74638488c5d74824fa3fa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "d5cf991b8df517518f8b54c17e1c3c03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "5abe33c252363743bfda57b993de02f6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "39c46f27759ab15e9516ca826df8ddcf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "4726f539b6b403239aa0664f107155a7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "ce41d4dcb92db41cc784f5c9c72d3254"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "747ee25a434688a0c335c24d135ebd31"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "8183126f475fa03288eba54e9495c3e2"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "6ab199f4f093f2fd7f996907d55fb504"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "7985a243f75c1442c4c5aa17f908c4f0"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "2b80c15d3fd39e1e05e5bbc8923e648b"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "a6b8423830c67a4d3f163d815c8e9f09"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "eb4046cfac4e7783fe45b645b6216952"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "58ee5dc2ba3b49137272facda3852669"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "99066c8e60fd849547015b1747de5ebb"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "6d03b9f7ac7567be087a439ebb8e66f9"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "cef6b86e0a231fb6c37c33b1c2ecdd2c"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "959f307244b6a7b8bf2618671c3f1819"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "819ded4cfe14690426cc03f27e9f60f3"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "9789bf84a0d0cfb5083f7a705b41366c"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "920dce7a10967e75a4b9594a76dc5bcb"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "13fb3ac0b869e46c188c5dcde402ccc2"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "19fdfb37fac42f70477ad6aa66c9300a"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "626d1b66e3b5ae6f82acb64b8f3aebb3"
  },
  {
    "url": "categories/database/index.html",
    "revision": "368337d756b168a5c66c0b4fff4a51ee"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "95748a896a98ef5edbc675859c68beb9"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "fe231ea5fb6534111d7ef6a90e67a2ea"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "827ba56da924deab421e6893a875a593"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "bf573e684a763676121c99757d7ec7ca"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "85df832efebeb1ae8321f539d90b3181"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "6c22d54f5b8bf2572b194edf104a893f"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "b4bdbfaa9b3e9b64cdcc7cbcf205501b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "fcbc107e1a08320cccd65b1d81ad5177"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "1a321af1451f71001f1dc15f783f3316"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "a3fa54782571013b36c75a3e385e25be"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "4d054c009431243ec110aa12e48aa445"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "c01870662d8a37499ab641b504492f54"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "dfd9fcc0e704374ab0e11efa425614d5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "a8d51193f3c68f65d8b5983214d49388"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "3d52f901ad5689f3082a8a9b944540e0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "641b0df7dada2a0123641479b80afeff"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "428fd4183e49c3d0fe9d82d2df310b81"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "53e9a431cfa3da932cffc8891aa67bc4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "25c5fdbdbddff23ea7b2cc570317105d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "60c1a3c1e4c2fd19538b3fa9af2eea4c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "fb001a904df8a29432c5a3b7406053db"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "21a14641b07e73c1806c4e7e0de77eb7"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "643068fcd08a63f15c0b094b8fcbb924"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "85e5ee2a2029013777fe7c82bd20a365"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "5077591dd939fc6f6123603c5f97ad3a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "36ec03a1a64085ae7f721c3418c4d7d1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "a5fe53fc081077e17d46775cefff6420"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "bed4686881d0c47ecae64466a2dd597d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "e82ee460c8b798c1da71a9ed9f6c74b0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "28f61edbda182a807ddc3fe9e728f54c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "414cdd5099ccf133005d998db29f2f12"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "b595719afd72e99c9f499789389267dc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "8952b51ec0c6401adbbfd25054549f6a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "92cb099f94cdedff7f80e38f5edd04dd"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a05150ab3143c84eed9e13812b263753"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "c1e63aa54a3136a5dd83618b0fb05555"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "a737f10fa26697c7592a3d503697e8df"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "80b8c29974f7f1b884d33bf873acc87e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "8202159368cea06a17ce9581550e7b37"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "8c6b834e8f0f844314552e3854ece736"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "1cac9422863c973b4deaed0dcb04cba2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "4737ef5556589381a2563d8df744ec50"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "ab306f0b06cd947bbd7df48b91429a5a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "83bbcc83496109686aa39cfc4ac33bc3"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "41d526492fa97d1b0576d457d773f3aa"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "5b8ad291f286c879432879277136b01e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "617ca9bc56ef4a64af74140c3271f59e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "37373fee366cad9ec84e80412ffb1fcc"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "b7482c3f91bd697d042f9d5262e000c3"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "efc782f65d590d56039b3e77bd320860"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "dfc59da233f2ec87448558caa730c8cc"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "485feeef5e6757d471a0a092705ac05a"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "92d94edeeff4642875bde33e04353f20"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "cc11164cbca1fcdc80f0f60d9546b6ca"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "e95004970736f4b4d1fca0441fa75f9d"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "eb3445155cbd4f8440ba73119a26894e"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "8a8e7a6aba91d7034cc217811c44a715"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "e74a88036684a6a97dc42e24d1043c1a"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "ad7bfab3e8ebc384047d43b057f5dfa6"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "8473abd34185607fde349563244098a4"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "85c8406db1112e13ca1e5cdd474ac6a7"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "68476b14f78dbc680f490fd059c53d09"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "00e46474abb9910e0df929fa7d24ab3c"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "5714f50a2f2742582ca198eb94089272"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "31b61e6d237504a4a5d0a0a421c1e7c5"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "bd6011d3f6414d66485e316af8efad73"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "247eee51a0c1922a788dc957bdff4f8b"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "9dd5fa58d6780702d0576322ebe71282"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "d75595de4d71e8b0142a1f9a8365bec3"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "0a9425dd5faa71f2917c8ea9355a9b84"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "d5a53a2b67f07faf3fe3b388100f1efe"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "3da8f0df33486909f5727c13d0688de6"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "955f5b5fc58e43db4142dc9674af20bb"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "ec0b8adf86bbb482fd9d74f9cedbffed"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "aca7058b8a7eb8d9fe90037148892716"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "a96f709e28654d61c0cdcda0b8209c7f"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "d707be3b47fe7a3f758478ee1f1fcced"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "cf4c68e2f10fbe829a2b8e3334c99ba6"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "24429cb53e1771fe07d1d7bbc1a590ff"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "e9cae76acacbb9743ac9c7967a4dc1cd"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "09bbff10588dbeab4a78cf7f5a3d7e98"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "c3a2324d57eb51123658da499652afc1"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "5b8c3c81e23450cbaa949b7b6d52a448"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "dba1fd2d3094b61232d5ed75f5a8fe6a"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "ce094aaf0607df99e48c5eef61cbbc5c"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "5aee70ad8d095b4d678092755ca74e47"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "b85e89a6e33583c246f02e84cbedd0d5"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "94e49cc8405918182ad79baa08b1dc69"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "775def02496e8dd99985266835551336"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "6f6d1b54d46829f7459d826c241b0c20"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "370c934a1aa134bfafa13f0e32a24a0a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "4d32f8c65e861ad4464c54f24b4de712"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "804d5073286acb0ca62b2b8b3086f25c"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "e78ec24a97bd7e3c42f83d943db0618f"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "9c13af24cca8b5a41a73620b8d39a655"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "c1cdc6cc307ec6d7529ef303859a939d"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "1c27995538eb9c1c1b72382991acbff4"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "5c87495f47ce7f703c13346a48ff7809"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "670f3b48c1688942ee9b565489a33d4e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "7368491bae281e4a58c4c2ee51db99db"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "7e9515f597ccd1f68b156fda5157919d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "fdfbbc7aeec778eb9925b5efdb8b836d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "d07e509312e05daed3322495bf03a26b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "1c8adf8b43c83aca054ad66bdb5c26e7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "57a57735ce900f3d717783e2b59bead0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "d58b58d577e9303d529456dbaf01cf5a"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "8cccfe4709547bce85cc148522942bd1"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "2dd2d2ddc9fa68918b49f3b5c7e50d8e"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "2928cda0fd400fa3cae49ac693320b80"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "2b15d8f35fceebb20a7c937ddd4289f5"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "da3881436034101c7653b792ec27aaef"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "3fd791d8d43438274fd0cca813e94a65"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "6cc68f0afa474c19938e28b604d5cf3d"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "2e4dc2d028389f329b49d77d7abb6fb9"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "b650a7f4e0bbc064f2ce891988fe5aa9"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "13e67a4c8de41c7cbb469f3a22d486fb"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "1da559ae16b10844529b375e28e42522"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "73214c1345d003ebf46161b3957c1cae"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "519bcb7ac510b38122ca3f777d5406d4"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e7615f52c0152c616a7cac3b2d7a4d30"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "52f181d0bcf239cdc1b7f9d9da637dde"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "4482c6e949f5b4826a647d1d28c28106"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "7ec3a05ba39dc7f32dc4520c521043eb"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "810a67db82d0010e9c741a932520b7ec"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "1d6e9a98db0a6a766f8140943fa8bf0a"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "51da6cb1a27ef7061246afc2db14ce59"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "2a65e7e21e87e0d0ce251489c4ad2cd2"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "ce0010b1a5876a631dda6a743a4a4380"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "b632de572ce33dead0654eef3da95db5"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "4192df85f69d0dd7a3ed1125dc46b815"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "7aebff4b14db9e35c31dee5fb518987d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "52ec32145cd4458161652c897db9ca73"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "494fb94367f2e1391f7864315b827d73"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "0488e835edca590cbd29c3f8f4a9d84b"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "39470f5936a33288447680b2d392ffc6"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "4c28ada792eefefe28a21b38139ee428"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "76f2257d924dae40cdfe81f3c0a12b4a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "d0c41bf6a4eace9db21c684fb91a01a1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "a8c92dfd6ec2cc3ef2ca1ea0d668717a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "990235d6b98edc121ca58455e4a1f350"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "28406d3a549bb25b24b7349ccfda7cb6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "adc0ed8bc28becea5c9d484eeeeb941f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "dec2fa47991240ba50b65def6741abab"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "d8b791fa1090bdf904a22abd83c723fa"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "fee1ca34efa292dabee188e57f7eaed3"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "b4d2c6360527ee1186154491f1039566"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "f42ba32ac34183a200048420bcd127d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "d229236aaf05bac1f9450fa3acbe5664"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "b36ad42661130a798c5a901e5090ae8c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "a3397c885f5ec745a7c879739b8f08e0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "318059c20d98aac32ff5630e7ff77625"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "6ee31c96bc744bd442f00891be147aa9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "9c027c4faf44b630f999fc9505c724d4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "31e1c26dab31aefb706e0c26cec51be7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "df56a8568c3f1d35ccdc7ebd7654db76"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "58b87243702e01807ef9d3e57f54075e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "a8a929814b3d2a21716c2e2268974c8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "c28cfbf9c011b8c3a23e924fd03feee6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "a5d7da3799b819725f801a45221f8f3f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "ad4b11cb74f334c68fa7cbbd0c67e561"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "5afe2af96dace701c2670041adf8b354"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "658267a3e604effc9ca0021d023e5a8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "0ec7c273f8dfb9202ebb2a38e61b3bca"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "9b60c3f5399fd682e6c63e0e68b11397"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "98fbce9b927867866b2fdc8b79b9968d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "5a06d2b791f7bbf220304018f2678601"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "4c63e6c69430003bcb79607536d64eeb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "813c532095908318dae126b768d4b79d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "9b0c7e9f76541ac15ca225baeddcdb06"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "11a160188d8337affedf268e452df7ce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "c20f09667dfdac2021bed0685d8d5f7d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "f2700ff6959cae47543261e3b0c1d449"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "b1254610d3010421f649a3636e6fdc18"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "6c89c2475d0feada501b1500e4a0c9c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "db29b43756ad4dd4dbed456855117906"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "92586bf86d7f69b54b51e6b86d01333a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "e52d1716604ba246593e8d178423ce72"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "fc854f348238cc091fbc3cfcfe180c5d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "465fc7f20604f8f57b42690df3f3a9ba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "12c6f814f977c62d86652fb2af7a15d8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "470cbab0793cacdd2d61225dbffeefd9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "2aa71f2a81449c6569fb1d817fd6ad4f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "4e339bae2e86d0d2f59a3a681be32526"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "4a82ed3671618a311de18146a7d153b5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "e2b90b87a57020c095409033f2884f4d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "67cec0ff8503e7a421cdf5520b27b9fd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "c1213e4ab3d5c3611dcb1cfbbd0de088"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "9539f7874c771ac6fc3fce39cd84aa43"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "eb16d27d89d5eaf7002d20b8c4b2afcd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "24eed85fd83230bebefb7257681efc50"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "8d970c912f2b9e37cdaccebc4dabbc6e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "072df49794a2cf69e2ed6f73279cfb1c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "df3cf358407bc5b7e0cc353353e2aca3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "b6242cdef82888d2437d4f6dbfdaf020"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "7d0c0cb8cc726f03fb97c00cc6a42f72"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "464035a40e2c2677d4ab785e3c7dde86"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "fbd769fd603827e72c6626911a7d9a01"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "1668ad8ef979917dd78cce04128cd487"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "54675527abdd6bc1bc88c8cf9fecb9ef"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "1fe30aa4fef3c3a797e7ecb0267bbff3"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "42ec565bee38ee17712e8480a0759b9b"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "3458c270203ec782855adcf3107acb06"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "5fde52cd98f1a26a819a148e80a79308"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "1c365c3b54d425090d744f9b1ddff957"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "3be0a22582ebabcc69c6056c9c9435b6"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "7e9ab8ea99f063b2dc2e0663f5c5d5aa"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "c54c3aa1f87e10c7f6efaa2a09c16209"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "8ec10724ec5500ae2766eaab0066ba00"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "7dfeec12dda9f9b4b73dfb213dc9cf70"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4013cb36b16ed1e5856254be72fd763b"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "6c1efc97032ff3bf5f85083738cb7e1f"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "65c3bb7047c6cd0e15a8eaf601d45bb9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "3b42e4cd606a506d8b8ac7dd3a2e30c2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "63870255f1a5b86b0530ce33d1460b5d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "7203cbd1e463c04d51a5850abad98aae"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "7ca214814ac08f661d6d9c45191a8ef0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "03f3275c47a78a64bdf33e2261f455e4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "6db232bf97bbc7aee522c6b981ddc199"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "4c463cf903d2daa0152090b3f763a944"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Audio.html",
    "revision": "48fee2daa93c7d0c51f32b8c7195c7eb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Camera.html",
    "revision": "1be0938851146506aaca8028bb5a2690"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Icons.html",
    "revision": "a02f009fce7cdbbac5885fd7baca9ddb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "85cf883770bc95d22718b5fa2d79339f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "220df27d920eed45951715d858057a41"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Video.html",
    "revision": "fdee1477e9ae432becf847c090bd894a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "21dcaa1afe99f974b1d5c3a19710e183"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "ec370049c4b0d1153774179689376328"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "e3b7ade3f2c387f8e38f4e32d606d897"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "290980957a1959b5804a9caa7f363a6e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "55dcd59805abf420dda5939b68be7fbe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "f1e0f3d44931a3163121e7388643d74a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "548b7af809c4668c5d1d18cb591c700d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "b602e962b91aafd1736ae695a01da6df"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "34d3648990cd7d3c5a7b0b5d04de4822"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "84a70f2bbf3a9e244bdff2ecadd60861"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "c9b2eb4e0f1e7ae3fa7510bf1bc6dfba"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "e281c93b22417e6b76b27ef13c283135"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "392eee2483db4304b51eab1adc00ef47"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "00ec928191551b020f30aad42be03963"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "bbe91b74ef5b7b9ce8bda359611172cd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "7f8148db9a9c809bb8087f5410d3edd0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "b3278072a1029ebc46c207092bb8fa00"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "d341d73171bf32a2a3d61c686141eee6"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "362609f6498873e4478363ec944c6431"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "8f2a0ee72858217c9041bb18491be266"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "43bbb8caa6f4e09e510ef8d44653fad9"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "6e4c65685e2ae78a471afaf7325fa2ea"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "d0e1afc7197de9fbc783704e07e383d3"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "d2ad77d11d8910b7a381e084644211fe"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "e9032ac39067c8e79180993d7fcfcffb"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "26d07e11d7f8c663e6278e6441d964ca"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "a5658f61badc6ba2b7da89d3e001221f"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "e9ae5011fb86f3b52aebc5007b6762c6"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "035f0c074fe37bc91388e44ef9eaca06"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "51d0983e28764eb698e216b75e0a7e01"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "5ad302da0c22b1dc426bd40a6fa83838"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "014655f3cde29b072697992ad8cf74e2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "7cbfb24eb2abfd0faa2d89d695bd40ef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "04b5e2fffcf5602440b4fdd023015ee3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "8e814fdab3e627bbc4081a9ab5528846"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "5e2d2d7efb54eb4b45938553768b19eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "9fbf129c96893f5f5d79ad68832fa672"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "fb99e8ce1656764b178216f71997b88a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "501b091cf5b8ea220089bcc97b17cc79"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "f9a20b54bc43b28f4131a9341a5fdd8f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "55dd68c4139df7b0e631f2945d9a68ca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "88350c9c99b3780222ae821d5e30bc53"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "f10b4ed1b629893d43fed2e04f9338d5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "555f8d71af2f8e1d7d06dcde7d14e50f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "0d21fac28b9a57c4decab76f51b1db47"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "0472db5646eed7adfae5e7b47bf1a2d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "4478895c821d53acd296e9cd070dcce7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "be481460983cedc2e7b3523350e85071"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "da2ed620f7bf99248e0d126793b0dd95"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "fd9a00d996ad6e74eb5ab7442d8fa692"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "087cd8a760d61795343cfb35d7195838"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "36c8d26902d5b987be3ab2cc556b3dbb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "632948e12d156ba5966be4cd6610a411"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "10cc938b658ec9db75c7e7ee77553f33"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "472a383772c666d57b0658a630b9a01b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "ac50f0ce2bfb04d43a2c456aecd080b7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "e6921eaf9a55cb0f66b3b2316ed07f77"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "dd993dcd34d980995b5230e07f8fa6a6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "8a3f5544b4d4a597b1f86eefe22e2e17"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "bbf509a7f1880e739a3404f5922d4a35"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "a6f8ee5c58bbdf6cec9fb1180be4255d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "b572642fab5ac81d34d9539885572d2b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "11201aeab7ce6f7c33b3ec5bfecea43e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "fba2e5c812a12ae6581c604ccdf93cb7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "43461780f230d77af9b008c3bc7e5145"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "b441efcc7d8063f48de75cf971b15a4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "654975ee0486d24a8428d8d2479524b1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "171ecb730de181169ace4018544fca97"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "a3969cc31e75d74b86b8f20e63987fbb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "03f63ce21a13226a3e3d01ae75c820d5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "d096d0625e82ec22bb9b9096e09f60ca"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "cc2a1154f23ad175287e40b6a9eb3f7c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "5df4e2f09d2c53a53cedfd41ba2ded51"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "e0e71d2a1fbbb385ffa74e062ccf62c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "2e617d86ce723a9649365919280aa4c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "028839d02cfdf31cae6ecc297ac8fb6e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "24cd827051381929748a61eeca36373d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "65f0cd10c0ab341080d469b6ec42c1ac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "4db13d4f88f920db6b06804f44392b99"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "9ff44fc045a8f228c3bbad2ed3766a57"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "4cc6db1c5faf18af3c4e3edbc96b2724"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "d91bd1a7590158a7b77d27d4026ecc9e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "591bf1c80e1330fd4080aefb842b1a53"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "04c4fa8430c2f2aea114eeddd2ff1ecc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "68417e5a5d9bd5e86f829b8c607bef13"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "27a242a879f969315c11477edb5ce7c4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "47ebaf0773927a8041a7569d384504fc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "61d887a7cd932826fe3f67c4018ced63"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "7a72267b54c2cdc606b0b7f6aeea7b4f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "63d47ef715b2e752bed8341b6125062a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "e69d215c08da878b103897f349663aae"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "681b4f2b50315fec812301c2234ba7d6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "87051865d3534488bd85057c79af26ac"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "6622f8e36ec64f8eca175b8eb0adfc4e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "de65a53a2d6c710aa50364cfa9dc2305"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "fbc91f749d2ab85eddbb739e0b79ad77"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "eab7ac696124d5e02adbe458aa4be5c2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "8d86b95ccb68e5652811b1a6b1368cb7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "b6be70fd449d4e649e6f57ae1b440054"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "f00cbdb201b4c52e95f7b5dc6166c45c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "6474454f2ae813695b682f5565564b41"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "13372c23f81d6b2b1688c69bf74de674"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "6ee98417f66f4dc7a663e62dc1efa95b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "9b0dc8a649b2a0c6f0859e6b2dc9e45c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "5fea38a78fb0dca49dea104f24a3bdb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "b4c6fc1f46aa50f609e80d071dfe147c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "0eccd3718c1b1d8e6306f9adaf487235"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "57600d304b3cebc4aa8de6bc6e64af66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "6100f7b7f2f874e5b3bea104a7978c34"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "97241bafb289dfe4f1cecb08ff0b200b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "d635e656cfe7349cff9f999ed200d8ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "b1106251c9eba798ebcfa3eaf769be91"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "b888ecca3af67b994a61261298a9d507"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "610a70bc1a46c9d01b17326568e9aa39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "8b7aaa3ae73d4680cfb20025e8961e55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "4f5a769162cef8866c8699953f9a64d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "4bfe2ccf634008e47b2e311db1f1d97e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "9073a076bc97e669f117f981b4f4b3d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "8a46b3f4b6ccb31fcbb06d4d021dc5d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "b18286a0140183be95e1a274455b902e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "dc7138243fbaed1451d9551aea05e906"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "f9e09a214b6fefc0ff75f8ff05b5952d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "58ff3f89976c225226cc09ccff9eedd0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "216b70951334fd5dc051433adc23e4f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "fa7ac8d20531f8231e94056f804ba2a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "e6917edf893088de91f57906543c72df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "88a7e4d03a179bf899c45e5207a04fc6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "59c0d1e4983f4ff93e698e775c1bec7b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "fe7dc1f30d769da5f43bc7f242057099"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "28665d37c95ec4d8a24606160e2d0c49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "efe60148a5f06a266d857d1c4ed9ac28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "182f977471439dc235dabbc6080b42be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "c47b4a61641669b570885864879e36bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "6a81afca9ba34ce157fc333cf3255bab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "ff988cf2b56189d3e09b6946d55174b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "f480784420715d00ffb4f8415111053d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "e538e6f91a01925c8fe5d0f380b67711"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "ab6f15b7a646afce15d08d91226198c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "3daeb9fe0baeb829842c9648d12fdf0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "238245e8029df92f708967f5a82a5a17"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "2a2112b6a0d74b83add442b766f4dae0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "635e33ef7aff1b4c06739a0d2fadf068"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "de752f67fc755b4b098999a06d632e1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "a9a620d7575cbe3f0cd3ef428001006c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "300092b6b8501cffe6c5559ad942d0f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "9e572bc55f9330ce8f48e3875851fba7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "7707a98e6ab2e6e714b8c05ad32af735"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "f1b38ebb03f4a032d47edad068aa5792"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "2d05ddab8e8e49642b080c9d3f95083f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "76cf1c62bfa47ea623da00bc7746348f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "b7ef8f1806b196255b8fd81b7a6eb67e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "435eaf8ba37b3a0b31d1c45b2bea7257"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "eccfbde070745270eef2f56576f196c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "443641e2cfb51d2f544a3a90bec77d3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "0051cc2893aa136375050289730256a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "57d4fa277e7093dea79f597f7e45962e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "9c30ab3574a8ec0ef476d314e3c11792"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "03223aa19744983d8d6507baeebb56ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "5a00b70d5c4d3dd909cd42faa93b07be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "54f6860005e3da9974fe2f20d8cf18d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "2afade732f3a2d9712b673e716960213"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "d8d98a475775ec5f2076c0b51949d26b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "f9a8ca3a0cb8abc1eadcf0ec853f9fc6"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "e688eebc7bf2fb9ddac66e8e8f418e02"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "212d38b0e2396519831c9465370d75fa"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "06c061ab246d68ce2086c9c86c919b39"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "adf92bca758b68de6ae08cfc2b4ef984"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "f9dd61ab2144dd4b62a2c24e34b33505"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "e609329de0f96ede6d0886ea6aaa9abb"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "358cdaa68a426b03e5b9cd71af34f511"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "2d8e17c14b99a482118abc09e27c1066"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "3051e430779bb98d630d0fbfb7ff13e5"
  },
  {
    "url": "categories/index.html",
    "revision": "4d253d1f3f8498fa949d788afa9daf7d"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "604c6172b66b32cc7fb33a17cff81d22"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "7f37588e8fbd46b1ccbf02f5065b9f34"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "01ade2dcf6e9e746a305d2aca46c81e3"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "79e7af4d92a4a6e681da08b49b10cc76"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "0b871292ef184f31cb1053abbd06e292"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "faf0b3a8ddaa48c4c694681e80c58e4d"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "b03948b364caa1430205c831986566fd"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "8cda197469d07adb6d2ffa8e4fc3a5c5"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "634999458bad937c562ec6923a8f2e20"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "abe8d8ed3a308f72e56b40ee500a8a7b"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "b0de52c69f77acffa8fab0a6ed6763b6"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "78a2ea5880397f041c2e7e7a05a695fd"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "a9b91d3fbd22191fcaea9b82fb45a97c"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "9d002919197b03385a55fb070a06ffd6"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "c2deffba31134d9e04e9ab9da4139211"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "67b9993f5c8e8e889eb55a53c21d9fee"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "4399b865053fd47b1d282821488e72ed"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "8545e6251d03f932cd5059d243b5662f"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "5412e7a93fa220d3a33c2a4027691bfa"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "ff106bb0bfcd3bc9a3e7401c35189a20"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "4a4f36415b840768b09a2a25c8201a13"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "033678d6f6abb5674fee3ac13cd88399"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "322ae9723e53e1a2ab544d15eb871cac"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "515bef9c7bd80dea4ee09a846e08ffbc"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "72f1ffc09cf2440937f3d5c02176464d"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "b0a10c2418d6ced49fb0d92cfa112343"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "41b1628ce01a639048533a992662ba34"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "e10d2b72e34a46652eed09fef88df5de"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "5f4215ca3434aadd433e8937a6677522"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "23013dbacd1a4399e7fbdf783adade66"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "85c04635fbbe1e43dafe85feb841b647"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "489ce10e46cc2708d1abcf5dfa8f87fd"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "d58272e9760e2cd0f07bacced0fd7f0e"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "422912df7cfce8e650e436ae94de0427"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "698e795522c7c856c97585d2ddac7c67"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "3209ea04bded923dc92a2a9c31399f1e"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "1ae3be15e62931a961dd8193f35d541e"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "fa9946211e12f87d9c67f98f4af93901"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "7e468dc04de8276ef1686d1349a9b36b"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "678ebc5725d6b375b991eb1b3e4c68f4"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "a44d758c76404a9df78b650887f4f9e9"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "81bb00aa7778ea38e9fba5ebafc8faf2"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "f375642aa75f43771b247ef617b58116"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "8a57c4348e337c790098f787b5859fc4"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "536857558754f134cd022683a37a2716"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "3c4a58183bec6cc26bd20ae7f88b4d1d"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "4d4f4c45f3d9819998e03167d93f4c06"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "4925efc1cb97aff966745124f88a7bdb"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "7f689fbfcdaa7a84f2912d96b6ecd452"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "020b5f5f6399b465d7494b94ba8a9e5f"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "5ffebb49962a4f94333a8750726fbfc2"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "6f6df61d06c9b9455bd91475c7d00632"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "45e7dbc19811145a0b19b9c93b19fd45"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "63bed27d1f8882f9893baf6953d8dd8f"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "d5124ca799e3cfb29ce09818eda66268"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "4ede9a8d299ab231d217da30af59467c"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "200b254e154d4073f231d918042b15c1"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "4cf200a467008acc03e2da18dcd10f29"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "7867d36c756514d3d3ca79bb973bf0e4"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "1aa6bbff2bceee6d0447043d533b6946"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "37bb68aeb64ff3c89a56d7d403557982"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "29d46128886dca94d2a6d4e807676f71"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "fc678dcc97bfef9a1ba9f06441fcd6af"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "d11696a8610a7014b557032669691c6c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "827fc43e03dba6e3f81020dfde73d482"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "4583b3a1811f5408e06c26e80f5a3733"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "a69e02a7f4db13b680c4833dd610f191"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "7f7a2df3f3d18b922b8f6fe46cb9bc98"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "7cfffb5c0709ac314e716e41fe82d22e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "265b059b4f59820431f43ec6b113417e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "ac7d3689291366f8d2cd4577b08d1d81"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "e4429c7291aefaa97380a143b737f3a7"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "ddb1127855e5561888cabb27c7d48b1d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "246b9b98e634bbab77ac945463c90084"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "a3de85e4b061fb0e53affcbad65b21ff"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "0b2371d896277675bfa3cf287e27b330"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "e438bc7375ea0cdfe2406b2b765ba4b1"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "2b0e051a76617339534115e381a5ecf8"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "e700b69d37ee8aa0c57549b9dbe507f5"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "0ca0a54b8078e7d742c38ae08cb7a679"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "62cef376f58d76906db6e707b3e8d6a7"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "f6503a096effe86ded554ffc5da84eab"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "11286ea426e5d5870b96bee35bf5a3db"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "f53adb369569536fd2f44df42b15eb51"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "89fe4998b9f9de1d98476c89966ca199"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "820d5f5c428cc7a36ba791b19163b526"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "4d119260a5147b42bed22fe8002af819"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "e3dd38926b32ab78ddafb9166da00d75"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "191bf3da6cea039e20499fe1a6d0b2f0"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "dbc25d91dee74995abde943bf2f1dfc9"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "1e0e6f35d46ce9e2ae1799c2dcd051bb"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "5825a122b80ded3f0b7deeb646aa8edf"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "1023903fa9863291f7d6bd2c9066732d"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "7e589c315c7d4ad3449b8483ab257f1e"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "7dc46ce79c4de9bf2e02291abd75fb72"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c6b62441337362a93d3bcc7bc7b5d00a"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "65911665a2d34c4005f281c3d45a020f"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "cddc8b1cbf4d0f9c972e4a8a7f8a570b"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "61f33d7ea834811025727ed03b47384b"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "96ce8ae36960bab5b8dbcff7b735aed2"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "6d8aedc28e8e1259fe4938b4e0757a9e"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "fc20bca990ef86ccccc6439424e52890"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "1d5b7505910eefd91313e6e41cb69e1f"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "9ae6c7cc8ac8ad7b949632fcd97cc829"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "c588e64de1877edae508a6575faeac1f"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "ac6400ced921f9f5e1264b63ddd236c1"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "df8ffdc1ef7ad879849068aa19da7c3a"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "2ceeb428afa707c13cfa1a1ada133845"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "2cdb405a95cee77561b52c7b26d174d6"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "8a617fee1a7cdb401b4c7573280e35e2"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "5a2ec96e930ba196e8a8e3755636d50b"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "9093cb47c6c73e64b841dd56f5ef4a34"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "0d57d641da76ff98169155194acff442"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "936214b6ecd8080a3768972a9ab8f803"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "91bf85e46ccc2ae3a4103db95a8f4ce9"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "8ae3846a5dc6bd8cec58d2b80daf33bf"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "898c0c58b82bf2db36f79429be90f521"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "16f7c24eebdb0b9b9696622128db5d40"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "cc19807ed2eba85d34578c9608b2ae16"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "8a1c4983d7eb1d8894e5d82bfdd5e0ac"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "362c388c30444f24ce8cc7d21af9b43c"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "c54e2504c2f03be7a2ffdd9c34055ba2"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "1c4dd24773c5bd1186911650b4ddb379"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "aa5c41e63ee0625a9108bcf3ec2d5f11"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "5f92d5ee22000f876cf356f1e2c0afd7"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "4f8ee8d3ec7d54e3778368ed8ad7ea6e"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "07f16613cccc301e5aad4e880d067ad2"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "4f5801d9efba116e19788e2514c65dc8"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "cc3fd7043fd9d56f7ab5622e52542594"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "50e55896ce9793adc972e41a7e261342"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "f3ad6a216edc4fcf1f1480f0b874563a"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "0438df2e661163af18a70e4e5dcb8f8c"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "80ad42012883986d1a0f2962f6a586fd"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "ef82984301fad2c027f5c13562be4d59"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "0c451326c68fb399dd84aceb9fb03e34"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "4e04da6bf14fa95ad541ba96746e298f"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "4ebb2c6556e784cd36a5675eec0e8a20"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "1df34249ba0aef35ec9c63e98026863a"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "5ecbeaf23ac1deff9917028622ee0ef3"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "0ae1a270133736dbcf49efa061c93b98"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "48f398eae3f9d4e17a2992941aa50345"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "c81af4da44f7002cf37d2b2453aa8417"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "93b2dba1191b329ecfd0c9051af50edc"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "24f65c045ba38c5300d9264ac3a51312"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "d51d9c64e64a305999d33d210a5b9280"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "c97a8e0258c00d8aca0eb2b708c2d9b6"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "42175b66c5475d837a5402c71f45e21e"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "b2d52f8ba9688dbafc89a5ab1964bc66"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "3b24f6abe50b37d11ac7568541788860"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "71bd5c2935db69ca1e0c87e4702a2415"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "0d1ad9158694d32c0f75d1cb8319cdaa"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "85d8b2a8dc127857cdcb2b32075fc3a1"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "297a8f3d2770419ac3be0d66a4bebc39"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "a4b2a935901e4a5095b2ede46c41e114"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "f0480421dc6fdc3a5301810ed17ab029"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "94341287951d3803c04993bc4236df90"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "a3d9499e24f37ecb0ba292d8c7eb8a9f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "643a8aaaca5803c4500ffc6f8badd8ba"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "027f08ed870a05d542f081899af8e1b5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "6887dc74a429340fe3d095cdaeaaa90c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "73835ceca5ed22f8a09d7ed72b8688ce"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "9cb42b8b0046bcd2a9542974792cbfd2"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "12ea0c00d0418ee5ea3a002358c8c523"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "80d3c4fb5db525b54deccd35b69bbd76"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "e54d0778d286c1de8176c2ead056937d"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "d3a9a472e36a9554d1a1e5e848d9e851"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "28fa4b2ce42693b01a544f89d9917010"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "58fe32016588355ae31f25bdaa85e19c"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "50fcf57e2772fa1b0ba45ae979c8f358"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "8b7d61aea46cd346e32e8bc988fef06e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "2b81966335753ea550f383329cfdcd8e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "86810f30e7d1d154c247e25aff1383be"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "d856e7159df2409f551d7a3bac54c525"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "3b25931e6c0d338bab52d9537b20aaf5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "266515fb0c3d4f5f3e778b83338ee290"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "2ec51caec456a779b67d676609fd91ee"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "a8a80a332d79b3e729c28f36ae3e45e7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "72f93df1fa37f8ff4a65dd534265296c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "ebde5c688633f0f281bedcaa9d69f0f1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "336c9c04379e13c56d101ef1646fcd28"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "dde02fe6eacb617be33f42575b84e06f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "11030f6761b1c9ca6a377f13c6baee4f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "4ee896276b030d7b4d278c23bd690e49"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "8537b25f2219e504dd9c1605b7be95a3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "0f1326448c57814501950c2474ce796e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "3736dc92445632d69e217bfae65c340d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "53794183ed1ee8bf027af7713e9d8c45"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "41f752c71b5e41299c30c53151a037d7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "0577703da96ba7c32aa5c242c383f90a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "491fcf20226d28fc769e9ae2f4f3da8c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "5b49b2782a1014daf6cb0c67dd20031f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "3866e8b81334d77f837db2178483d8c4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "79c9f7f0e9fc0d179a9aa03c82b51d8a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "ea8f63ad76108c66d46a99ffcc87baab"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "568e37d502821326c97370239b90ea67"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "995ec414a76a51809881551ae7f113a0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "39afecbda9c94f0af12df5d5f8622bec"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "d6a9519323e10d350d048fdbf662cfcc"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "6a62f0282408e05c360825f4541c8cf1"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "f45147b336e71bdf467d7e312542aa8f"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "7269e63b2493664ae071d28f9745ad9b"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "062ba6cf12d37a1ed8a7a78e288d11c2"
  },
  {
    "url": "categories/os/index.html",
    "revision": "73504933bb3a38ba4629c24b99c08da8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "5b15e8ced52516e7f4149fdbbfa87bea"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "f165dcee9b64262ea22f5a1169e42008"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "34f61e1e8366cc6d9c56c9ddfaf31a6f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "9d4a546b4bfd149534a5ce89ac2c3e6e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "70fed83dd0ec9131643036ed3313292f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "97efbaa50ad32233785f46aa394d94fe"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "0a8f1cc757fe6b41dd719a30c94231b1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "874fc8301de63b7e9334d5a93a83d40f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "66b96dac3f9faf836440f7449fdfd495"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "d88cf4380751ec538901a88173445fa5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "35aada0b6b168f2fc23c9564fd048ae1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "46e997b123805da06db551c08f71747c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "d307c855d5cbf0569a18e385a4c131d1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "7f8ca8cf32090f0cba410f67a5a77ac8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "56491fb464b1afc79ec6fc02686be07a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "b4132e0912c30882d8b88aac40e4f3f1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "f8738c883c24a242229fbea86d73dea6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "eb1efcc764d867e06bb367f7bf8ffbb2"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "210e062ac351a8abce8658cc26bf58b3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "9e32ad9721bba25ab3766e24ce88625e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "ec165c9fa4abd2f1934ea9d671ba5f7b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "4c2d0dbf47300a87c00b05683db193ca"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "fbff1aeb4e540e4f7bded6b2eb35e835"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "2bc086979090b490a87b21a7a508a01d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "fa16b74d6fc2e0e046069418c5ac5df3"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "bafb8dd1aa1400f7a454e4524daf85d3"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "cab83c1509d333ebc16eff3557aca21d"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "5f5ba3f59fe7d2664a19abe5f00ac4b2"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "e20df0af70804f95a2c2bf9e2c501433"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "7431b754d8d942510fda21ab85a683fd"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "fd6b53bfa367c1e4191226e9c983cf04"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "531957e301d30c24cb76ec27084ae438"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "9e5bf67d13ce6b138ae13a6277c18ecf"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "581037fd0dc0f45a00e889d6a05fff16"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "fa70da268ac184790a8948ed15007a9d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "58e66fceb15737417b86acdbf0df361b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "36854da9dd3b8358db31001b9c3006da"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "bac14dd54627f27c68a94ac1987ad91b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "3d2b64b4f3ccdfb5619e3fcec2d0a0c8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "bd543734fe8c2601ca1d209a1ff15da3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "c2c4c2d2fbe9e7cd88d7ec4bf5229414"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "2ec94e50bdd1dcdd7d25b998fee9eae6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "98855c6c94266c4db6e9883f171cdaf3"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "046edacb5fa6f6ffa29f45c7e6cfd5bd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "1a851e298f1166b2f48e066333e55dd0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "9c5eed0fedcde26fd7490c9b57e9fc00"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "73f5b3d2fa17e01a62963d603e8c7090"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "58a3ad5c9c0aeae524e8f278aa8837e5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "300b241edeef071f6de2a5a16d05798b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "c9266617ffd61231c96355ccbce56ca2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "bfa529066ef8fb635369812089fec35d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "426db36abc9608aa716cd06b9fb8caaa"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "e669349f4a7b82d9f7541a1861106a54"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "c5228f19133a4d9eecb592d51d66cbe5"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "5886c648b581c9c9da27b266ad75fd79"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "18199d8b2fd0fe598d0360f02edb4841"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "6a162f59bb283c0b7ad263a09bbb8331"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "fbc20f10fdee91de55617e935f423884"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "a6f4f0f7137d7cefec709e9081f55a7c"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "1d544b37e78391a74c30cb543fb5ea37"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "c255a96860b1011a0e9c13370ffe1437"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "3358dc24a8df6b9aa33a639ce8f9f16e"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "1afed36f7c56d1908942ca51e58bfc33"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "ac69ce833c64f21cfc0cc1e73d4c3c89"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "abb55ea3b97c0982e89ed5a5f1e98f6b"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "985f99618e7d9545c449b1926ed5a8f2"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "fe6c3ca7f5a26d4bbf4e83bb4cafa156"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "5bbad564b5503d41872861fff3fa5316"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "db1347e2b1b25947c569c6f50682fcd4"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "660dc6fa2ed14a6f2ed685c7d033490c"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "5fd3cea3bab06a0277e555f6abfa3117"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "36665c0a2217e437268bf9c433ef95ef"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "2c0eb97fa842d1222c9569c46643a2c5"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "c9dc7b846ecf58c146d7dee27238ea6e"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "9ca02545ba21bd378689fa322f24579d"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "4f69f7e6b54859e23717841d90368978"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "bb9c51bb6a175901ba1d7942dd64c51e"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "5b8456c1fc7a75af4dd950da5ca0befe"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "b2aedc022913fa58d74165bc2aa582f0"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "7d39f839adefa3f5f85fb10b2527d4a9"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "f3efd7f2f327d1af8e49ba8bd330be1b"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "8a488616d9daa5da7425fc77d39ae306"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "b4ad4851bd7eb007ce1ce3061d7d644d"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "9594dc7ad6ba535606d3d216a90c6558"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "0a0636eec1eb5a1c40c413a6695f4ec3"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "047f68dac2947e4991d79ec79c816461"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "633be45d5e834d709427710e6e1e9c86"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "1014112a717e120b2430c2780cd472e1"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "b589e143147d26a329008c88e0ef3140"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "1f377de87487eb992b248e772f76f73c"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "769b127a0e0d8419d48e5eeac5354ee7"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "2cdd5c7bbb75f6904e9ea36521935d80"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "826e5fe2568778e64ca6a83b58662efc"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "7ba4dceed5d5e61f0294e5ddcda665de"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "9e7f77e8296c67be3c49f73c65b02b88"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "c371110840b08c4ac20e515a80dfe0bd"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "a120b8c28944e19a66221c2f3e7c6e02"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "1488af26be6435d86ce46057ccee69ae"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "0d44eb201d3a479c9c3c25b5afe8056b"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "ddbb185e43035522c506ada1ee9eb611"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "4b15b7163c0f16dcc520fefdedc300e8"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "b961ec2166f84c435e595a8543147003"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "33da67e52c7dea1c9fba03e5b1be82c5"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "f760eb42f1203bc73e290c8b17542f38"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "9bc43543d89b5e8cf6e0b8be33be10b8"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "808a7b4aa1e087fe8e8f7bae790f84d2"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "075d31db16fa11e1c7b3da63506a3349"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "7482bcd27ca5f2d2c2b2857f9b5ba4b4"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "e882fe0da746b632c2329c2eb37a1a9f"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "e159132e91eeb0454ae7c145bcde644d"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "cf657ed1facbbeb02a0f2b1ccf72b826"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "25fdcfc2327888ae4d8c548f96fb5aed"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "8df1722e2eb8a27f179cbc2c1c4fc746"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "a3ae2b4e81af1781663468b21eac41b8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "6f1cb2af81e16c825ee25c91568809bf"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "faa981b778e002f988f6c04f300708d9"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "1882ccac783392e5519e23bba1c8b925"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "6d98300ef5cb9020cdcb839ba0aa14ea"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "b2945846654aed7102d225de2ccbe9c0"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "a6f1d4069b5ee8c939d0e36c0414ce5e"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "398b12877b2d8a35a02c6211349f2ee6"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "1fd3ce30a84f1a30947a175e5f721d74"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "888474a2e598c3be07ad92cfb07ee815"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "5672b0b856e41c7c7da9339dcc6c7e45"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "ddf16930492200638fe6ca889ccf1a3a"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "132d72b6dff13372f36160f7e5f222a1"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "75b497fed90c9d592e836689e35dd047"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "033fb55083f9d4ae91265cf20ae468a5"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "d0822ead2a9b8880cc75541f4e70a70a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "c56631f8208df6493c4a6ce0798722a1"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "3b252d9524f06790ace798ba49411c2f"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "10d4022848ba54155f828e74dc6c8d3d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "0bfb3fb55de7b573e2f6a091749de9a5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "90cf071d8887be20ae032848e564f428"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "fb1b8f7a3c2a3361394a6e03a83d4e78"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "ba6ac6c0267c50f194d59f4d5c3bb473"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "7959a3105c9e4f82d901c24e57695af7"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "5800daf0d3f0b70dc2a58882af1977f0"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "935fbe469b7c75e216485c5633dc3c52"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "aaaf2b579c92aeb24e896a83551698d4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "d9b01827f80e893604dafd59c0a18be0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "1bf40f4e342e2ce5182e21725793f3f5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "d4a8d07adb56c2d2797a57aa59dae18b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "e1b9c1f3902152f1f3b3c70311ce7960"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "5e9778a41121b21514c49e5505b2024f"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "06987f73992af31329d8220653ce678a"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "78cca266b43da361f68ad6a31adc9150"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "e6f485882b12686c5a2519c2d814e0c2"
  },
  {
    "url": "categories/php/index.html",
    "revision": "9fe5da6b63d6b003050cb02e4318c3ee"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "8660d4419a025ab3a217f9d958b906c8"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "e2ce955cf42e89af664d6bad4851742c"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "ff4418eec982a3dac5ab414ef3382864"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "966aacba542fd54303a85960bc5f3170"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "b996897368d07afac8a2e8d550b4321d"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "1376a8e3582c173c661329a5629a841a"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "bcc4a848b8fa840bd95711744686c2e1"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "ef1d614c0fa86270f742b558b292a4e9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "356408a5980feaf01ef1893afcaf8e9b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "fe043ddbba82e46fb1b414f300bb74fb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "7835127c167858d307a9e98bede57ac9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "45a4d0e793f5adbda7eb157c30a5be50"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "af47df0f1e90eeac8e9ab7aecbebd2a5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "245af60f26a8ca4d9402fd70dc4bc73e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "4e441b8d971e38d60fa324b7c30ee9e1"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "967cd82cf86612fba728bbb182214a23"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "5ed7c2526b52a308545819b6d2522f5b"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "c7d82b96731b4f2d32c7fdb779ac7bd5"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "7056dd10b561bb103469b87b5e7dabe2"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "94cdbda17d3ba49c446988e5454578b4"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "e37fa18c6f2756ab098242e5175999aa"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "17ef87de7295e3043d7719d0bcfdaef0"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "309298f93f118014d1be155b2b359918"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "1f097cfd5b3fbcb3bd1b78a7dd502bd8"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "dbdcd19ace9a9c647fa85ae5798b12cb"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "10815e22a55b1fa73abd6f2f97a05b98"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "27116e86eea754b49e868debd71533e6"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "a5f87c9405e3469a2c556fa03accdab6"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "de1c5f5aff8769d91fdd8b48793ce7dd"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "c1e34787dc40df06ca630a7355ea3d5f"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "6395fc1e1082fb7c2a8a820d066e31ac"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "a0060887f2a0ca7e15e4227884c4b6ab"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "90876986d4905f886e61b00f43f81c78"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "9a1c98871421801d6edf4b49ec62f7aa"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "dd6b2366cc50f9b65e832f615a6041d2"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "272bd88a7c389cd9a743e9accff9866b"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "bf330c2e76a71f1d03de90348ac1b08e"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "23cfc7c577151eba6f2af650bb2abd39"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "d73f105bc625d3cd9f3b13fbea8c0588"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "a160342c0b4d3c8b0cb4f5e64404bd5b"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ea08d4e8d2367dc1f8a04518a65c1399"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "f2fdcbcc821a83c6cdf837b0ffac9ac5"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "af110ceee06cfb4273f9ff15c8ea50ed"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "448eabb55c93a6fecec29ad796b547b9"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "24f63fbf8333b902365252ae46240f10"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "3e2db7b30f8e0d28ec75d9d4aa336a09"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "7df0e0d49c38c4337869e7d5a2b8e466"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "6aa09ea43d27453f7ff86a3307f207fe"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "81fc1d73c743d2fba3fe1d3febb9122a"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "08b01e3b0d2e49cde5514e0afd88f274"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "9d6ffc0a690bb72fcc2ca3feafff7a38"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "c7b92fe54c52c42b017fe1e9b88d2176"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "51b6a448876e28d92200bf494854c815"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "5921cb1ee049a7919ed8a42950c3d492"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "78f12f0eb3f45f09504ad369bd71f7a5"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "a805b5aecff5f5335b8d819540ceae71"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "d1912f76855fdec9c2e09ba3d7f2d1cd"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "6cf6eeb601a2b7a51b80dc92a7f420fe"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "768ad30cdf45d004cea103d41e94c190"
  },
  {
    "url": "categories/python/index.html",
    "revision": "97b9e02e69d618b31745697b0ad81156"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "2cf5140a006e6695ac6a55055a36bfd0"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "83951cf8b9eee7ac26fcf096fd0aea79"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "2cc9a54c6eac1df291b3fb92a9667aa3"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "63911152e9d99d5188753035212d7d3f"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "8c761818186b3985608df3d1e2c3cfc8"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "596c7275ef7bc6aee2b89a128cce494e"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "e6323042ddb4f22069023d1f6cfaa4a0"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "985ca1abe199e7f70a25ddbd3f14c7ee"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "98ce5e9aa170ada7d06a5b4f8eb65283"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "c6cfe3181ac5f89fa62e709c9fa71c86"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "2565bda93020ff07fe3a48daca6ba21e"
  },
  {
    "url": "categories/system/index.html",
    "revision": "727461d3176ce7724c89fbb33ce2be4b"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "0754b2f9b581437eadd545817197ab0b"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "ecb00e6b7e31420aa88ae9c2a699c6ab"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "2e03e3cbb57a07df214ca975c66752f5"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "db6a850c0e95e3a9dd8750bdc52672a0"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "72741f0a64347da06fb0fd6ac4587b1d"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "021727dae607f6a5770cee9e2a450810"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "94409b60ac3741bca5496f844a2c6a20"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "8b3a8f238de64be620acabb9a50c0b8c"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "a55a282e3e5c5f12c43a5f9473dc44dd"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "16b60c0d3d5fec00bf3ef882f4581d55"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "e283f9ff46b08a9663139ef6ee039e0d"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "13c6ce8fa4f03e56dfdba02e63a6c4ac"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "95244e887f2ecb1a2dccdc5e7fcf8b93"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "a4a284c4ab400ce82788e10768d20cab"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "130ac7fccffebe8449d6d8de1200b405"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "21d25ee39197536400ffcb367b0955ea"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "b13399de7903aaf890a6d0122bdf94fb"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "a51c11b26416324e847be9a22acc688b"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "adc9805713288ac44223708f18a17f1b"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "6448f2c4b20d499c434d89a978054e1e"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "57faa14c24bfed35dbd14ad4e4453a21"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "743cb6c0700d64c8393e8db156ff8a56"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "df565b853fe82dda5c2823451a2edba3"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "72ed67ea62591b82c86193ec62679066"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "a67fac0941c3e431b6bfd6b497c01f6c"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "689af03d6d52cb7f59c963d4a9e99c81"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "c6cc031a2a3e35d228bb2c3c031bc24e"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "203bf858fc33b9125c25e145d27c9a4b"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "879da4fcb423b57276b4c728e8ed88b4"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "cf91cf955dda51d75889d0f6000d3ed9"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "735639642c359bc09f6dab2c71c28d0f"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "dfd6560e9c8a5f6e4d7a747c3ab4c8b5"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "c4cd67c5d05f92ff68e250b740e55e82"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "2b69b6c91272a049ae0a89dacf70dbfb"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "4b7827657ef3fb3e15d517e043560992"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "d8ccfd423acf015a7c62b3db4f6078c8"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "556e4078d4e7acf4ca8cf5db2a2b352c"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "3e6851c903dcd0a4393a0be1d56d6908"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "0ce96ee102c61eff76b5bc9d2cdb349b"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "b4560bfb19c385ced9cd6cd1b9adf7f0"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "2f98a23a1aa607c5bdf1caa5dcfba9e2"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "dc40cd607168d280d6e34f93e56bb0dd"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "9445e720dc5542dc026cb8eef5b85582"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "120c2c09b7878ac6eecb95b113ff069a"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "7d99f9afd1d7ad656bb9ceb51dc20d7e"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "6afe4076b21cb735a32767c9d9eec1ad"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "638004a785ee19301691a8b6e416eeb8"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "5669cc8f873be7c8f28af1f6f48bbf1f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "40a6e44c7034b56f32a77a3b3438e736"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "51635fb3cd48c38b1ba370fc9f735552"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "a822a5d8d0e197194e0f582d4cf606d8"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "2fbb3e53df692c59029d63b640d5d383"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "77cba96fc2170628da3f20f628a072ce"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "e6ff2faeff1566286e01ba1c3d7afa12"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "7cdc93a30512f026ad999586cfa747e6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "a95e479e495bc7e0a3ccb11b908d5e16"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "bb3517cfb247997cf5f894f722e791fa"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "d2b8e80ad60548bab1eb80f8482cdc78"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "120a59e5b77a9d2b3be3103bb07cc1b7"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "14f63fedb2cb95017cde28db65973fd1"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "3ca5650ff1ad5068f8da581cbe5cfc38"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "a9b560199feefa10333957e7a081d14a"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "5672f8d6e62bb5f4772a9c1e4bad7981"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "58b530b7b6b61b7f5aa99bc4c3c347fc"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "47c3955b8885ccc9f5f4cdf2efcee247"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "a1021943906eb24efcbc71760aeef55b"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "8b69d38d47335dcb2380964c081ce9bc"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "03f0723217405537204b615969184d1c"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "c85ec87c4ac58fc94975e3aa1ee731a5"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "84cc72eb2deb115300f9775a442581c8"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "9852b2f3ebae62121399e31b894f485a"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "facb1f4dbde60c3fba71318eb41a5571"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "69adec4f14b3625af447f6469a7df722"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "a1480a7ee1dc35a09e3a2bfbcd54cbd0"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "f0eb6831b220a5579ea3cf3b0ac0b2f3"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "9a64a3a046932bf46339b337f500e438"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "81d3c953d291f3b3f228b3f78665c0fc"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "8d9183f3491f460dc88fcd5192367b46"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "d26d04847a94e683730f21c1ef2aeff9"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "ff6b2864553642b82ae5e34952bed13d"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "25872ab9b84be6024fc3693ff48b8604"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d8dc50a43b90f00207bb0cb8b606816c"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "3923ceb8e1406a4dc9c9ebb1b8b6620a"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "6a78722815205bb1dcc8bbfdbaa823f0"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "450ba5ed989dad231f0175dc4cbec42e"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "621c60ca1c49c143e862445cb6d38a69"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "d84145eca54c667ff3db7c7fd19edbcd"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "1b91a38f1fbfded9abdcee5e80fb551e"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "a83238b6369dd00fec7a9c1c6484f003"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "ed0913a3e1f16c88c7359a87ccb6b127"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "21a8f1e1a23e22967d087a345e18c1e3"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "bb6ffe926e5c6a88761a96c2db33442f"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "cc055f5a648051baa4ff8ab55c30fda0"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "79775c17cfb0305f5905dd0e0a390ee1"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "3f5027085d8bd3745745c864b9ebb7ed"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "4781dd4893a67f45802a9f5f9c79f83a"
  },
  {
    "url": "favorite/index.html",
    "revision": "30e074aac7592659d3521b8dad624e89"
  },
  {
    "url": "index.html",
    "revision": "62ff924b585899fde1affd62d9e39d54"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "26b1b4bde0dba787a8f79d5b277167f5"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "2b7629b2a688ed7e1bebeb330bbba8cc"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "b1fbe882233db444888c01818a7740b1"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "ae400f7359c9fcb1524f30877b61611c"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "9dabfb97e4f576a9b2bc6c83895c8727"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "cd0757ca23067886eed7a56c647c2111"
  },
  {
    "url": "note/index.html",
    "revision": "df85d6a2d962f3cb12b5a48298079132"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "4822926bf4cd87db44888bd06c0017db"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e15f7d032b6be5115403e2a04b317dd8"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "bf2c67f2adcac7fbbf7a38b801585760"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "764cb7017daf45b469ecb310a94a4bf5"
  },
  {
    "url": "share/index.html",
    "revision": "38b6a0aa547ddf241e0c48068fa02eb7"
  },
  {
    "url": "single/about_me.html",
    "revision": "a7cd04e95fba8d623a8914871479e81e"
  },
  {
    "url": "single/all_article.html",
    "revision": "99264ff0959f6433974bbfb3950c76f7"
  },
  {
    "url": "single/welcome.html",
    "revision": "7e80a47b04522ca4b1b010a3709f9844"
  },
  {
    "url": "test/index.html",
    "revision": "ad9bb403ac7dcd267fd39c5eb9ef1012"
  },
  {
    "url": "test/test.html",
    "revision": "bd5bad1ab21f5e63a79f825341ad9580"
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
