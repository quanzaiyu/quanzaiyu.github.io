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
    "revision": "6d7bce1242632d8ca2680d315e245633"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "1320eee2fc24be187ba462e5124536fe"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "8153d10b840c5f20c161c0ed669a6511"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "3044fb1adadc63a593cd6e97ce671ddb"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "ff22ece023dea1a3b2d662ad1b14b36a"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "16dcd5ec5852dff9065868697157c88b"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "082e2c1fe17196ceb19b212c10eaee08"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "12b2489b7ce446e90ba681cfb10eca1c"
  },
  {
    "url": "articles/index.html",
    "revision": "21cd5ab1cbd4b25113b8458f3c27233b"
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
    "url": "assets/js/1.9661ddb3.js",
    "revision": "daba3598b04ea26da81b8c9b5101d729"
  },
  {
    "url": "assets/js/10.730e6669.js",
    "revision": "fe3439f081c89fc76b1f03301c919f40"
  },
  {
    "url": "assets/js/11.03a3b555.js",
    "revision": "2a7ce7e6f0bf65e82e6d390dd0a68568"
  },
  {
    "url": "assets/js/12.dea4259a.js",
    "revision": "b81c9e54cddd8f7a36dcf7b2ba0d7c4f"
  },
  {
    "url": "assets/js/13.017d0ddc.js",
    "revision": "a3072e5b22991ced4ddf3194de95675f"
  },
  {
    "url": "assets/js/14.1aec49d6.js",
    "revision": "3de1a5ec6501e2c0361733f2eb61209b"
  },
  {
    "url": "assets/js/15.54ee861e.js",
    "revision": "241adff2f543520e5bfd747765548738"
  },
  {
    "url": "assets/js/2.6b7127f7.js",
    "revision": "26579809f8a12a5b45a6e7f66e82e4aa"
  },
  {
    "url": "assets/js/5.314447d8.js",
    "revision": "62149a8ef69e24be7a8bf7d56b777b01"
  },
  {
    "url": "assets/js/6.398530e5.js",
    "revision": "c19ceebd7e62634619080a6f18497845"
  },
  {
    "url": "assets/js/7.b1fc2793.js",
    "revision": "6f0bd63bd90c8c6e1bf78865b1a6677f"
  },
  {
    "url": "assets/js/8.46eac014.js",
    "revision": "29a143886bef54011dcefb431282f372"
  },
  {
    "url": "assets/js/9.c4f01555.js",
    "revision": "ab856e3be3c6aa7162e7d1519f7ce069"
  },
  {
    "url": "assets/js/vendors~docsearch.1d9f8a8b.js",
    "revision": "3ca000d6d42f20b8cd33d12e9070e15d"
  },
  {
    "url": "blog/index.html",
    "revision": "8a9ad71dc607f9f8c0b65aed37b4cd30"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "3e6203a29a37a41c38600fc7be067434"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "d18fdba6d1ba78539354d1dca6abc898"
  },
  {
    "url": "books/index.html",
    "revision": "eb208f2e0503c90607479bfa11153f0a"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "0ab955e3faa9700736f2e4f0b46568f7"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "5871aae525fbaa8ba74f73a2d6a158ad"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "fd8c703266b3c35b18d5b8f2fa320c7d"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "21ed7f54eeb15a4629a8164542de9407"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "5554a68983f1ebb0c35befe79f2ae8a1"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "5c95887306fed27e92ba4e44dcc33395"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "e3ccd3df3997888e0a47b5990d460654"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "d50ea9ee488b7191e5ac2faff3d2efb5"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "159893ed944306c3cda6ef75e255c307"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "9557e881f3add76ece0c50f36e30b369"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "cc4408c35a5bfd0f010786b02f9ed160"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "e496ecdf41fe89e124ed265ff55f8005"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "53b5212d9289f9619375c68ccc182930"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "b69170cc2d5571e744ed2e40c4663737"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "7ec4d0d14f4b7fb7a72acf7e572eefc9"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "d418e9fcd7850e44534bb510ddb92f05"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "99821e9834da165c748b6e2afbba3aad"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "109bdd8533168e1e84bb23df4365dbb2"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "bbcf726bcab3b724d6269b3d2b4d33e8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "55ddbb73c1a78ae7d46ea74c725e2d7f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "130414d0b716f68a1a94165895be74a9"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "3a15f5a9bb3e6f3089da841dfadc8bb4"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "42955d69efcebce08da847d4a24f4a55"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "8c9275108bb31c58c17e78dfe93d9dde"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "e94407c0359879b62142a1546a512191"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "5270fe6f0b1cb7480a14a519699b2f55"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "980d555ea3ab7031546d545cefe8e46c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "93ce549cff385cf0ad1934e7904e3484"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "4c725cb46edb2d5d7e2daf2898fa8999"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "3bfd5586b8633a4468eb1d3ecb27f58a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "b27c3e3e052aa69ef7423fa9379ff996"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "c4e3a4952011861ebe2154f8c434d61c"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "020fdf5d6b64ed224496afa75a48d2d5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "fd186fa5dd671d2247cef80e965d783b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "e92d33db7ef2c20d2189422ec07daba3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "7f1b3ee32e9669a95b661170f179f376"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "62c15c8569552237d204eb9f54a26e71"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "87ff791feea7e903b8b5e683ccf4ee32"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "be0f0e702da803024dfec45fc1711777"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "2fa994afea0e9884d89c0ea824cb2704"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "caafd18e8b0adddf66f8bc19d193be7f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "b33724edb4bdee36effc043c606c6779"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "a5c61f9abb8898aa09cbf5315bff7c7a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "01e40fc49f59a6f8778cd78033dba9eb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "fbc3dc0314959387cb53c286dc538619"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "e23b0d782fce39bf8d0843af3651a87e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "6b46e996a09c93a77bc2e8c92ea30a2c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "e0e1b09ba8d4932650de2c3b4d9d63ab"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "a5f434f86eac0fa2508f789dda790639"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "9eae8e0ecb38ce1d08dd540972550a97"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "86c3baeeff6c2c23ad71fe2b18949052"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "20fa160f40ca720c042e330ddaf3a99d"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "9f62b20611c563caa3d68f712b8c2bbc"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "a9df63de22f31e0d37bd2dcb3ff60d6a"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "b786d0ff2af93d216d5df9c180e51097"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "c8a77bbe8aa6c246f721268ac4297efd"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "a7ddbffd30028c8ddafa514a4e3c389f"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "fc6098b861c3abeb97d5ef0d839a2ec4"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "dc4d75981672871b4154e90b3aaba63c"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "7b888d890f9ee2911321908d82b07eb4"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "8f722d308ce5fecda2bd06008da1f7e9"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "ff787019aa3c7c19dc4be8b7a953d0d6"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "f0c425fc434deed7c2d7263c791f04fa"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "264b278faf1918c03c9ecf9347beeb1f"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "7ab4f2718b0b03f9a45741f36883386f"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "53836a453374258027dc772045b87042"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "8260870a933060c24a83e956aa9ec0b7"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "8d60ea81bdc061bb1ad086b523158065"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0cc55afd88a5d6af8bba3f42e51956d7"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "447e9b0422e9cdbf77e988172abbd06f"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "21d218217c7772d1dacce5adfe80e59a"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "21205cf8790ba15e2731a19c2e6a791e"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "ed5c77e31b5f704112761a0c8b2e8746"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "80e1213fb3f44934fea4c7f0973e2e5b"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "954a53c1deb2ec37cc2e9f5512ce633d"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "8114d0d86ce32410ab6056252507baee"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "fecdd00ddfb97ca434b5121d3bf918df"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "7f46eda87d80a26d4bea86ae2ebd6197"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "7057399dda2f1e60612a6f7ac600e38f"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "912289977145301060e41ba1fb272c4d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "e842f3f616e90d8da23e019c3fba7c60"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "e3bdb1f63c692c91d89917d2c9990a00"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "9de5826fc4cd15a592993dcb511a06fe"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "14e5e3cd1bea187c6d5c4c2b912e8cf4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "5a02f7187a67dbfc8387773da2f0c57a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "451f07f79cc5705f7405149ad5215573"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "ae15ba5e91c48503865e20fba411fc00"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "485f295422f0072651da089837330865"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "87be65a696adfe25e27cf10169aa8eca"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "f7351a3fcba5c7d81ff5f1cf26cdf198"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "da482716f9d35b2d8064e1aaf5f647a4"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "f8d114dee64c4d56fd91ab6bb87f00ca"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "2878ab04680cff25f23ffa1da312dfe0"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "7ac37d5887561bde51d8f816d449d1d3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "c401ca05e0702b0af00ef130f5b410b5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "6d5bf99d2181d6a1d4af20c326896ae7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "98e1b6d165993bb441124e5386056bd5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d24936e37367e23417c47d434206b991"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "e3279ca6842fe6f0af2a0800a92d320a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "99004231d7e4d25138049e4028d76a57"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "79cc2d4b4c2af1d284e7dc78d3d61245"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "8707e1e0f1f54099d1ce6100ce98d658"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "16df8cb8a1b81fff6298ac4ac96fe0b4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "84fc7bcbaa3788cbd335f529e742928b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "33efb500a2c5e07617af9934d23f5edf"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "e4280d5d9b1035046b6b1048537efb78"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "24e298e83a5850e3f71f09f2a793602b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "f9a12057653e555f63b854591064f4a1"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "b00f96f199823edce5e9651b6d947683"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "a501bd508e1d465f6e45b4d61b7648c3"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "75debfb428f053926ca404e42b7d85ad"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "e3827adb98607031281eb796bc681a2a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "d87f2dcdf60e71f7d86513299aa6bbc6"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "7a886bf51aa256693854286794377095"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "61d2702787c668fe0557a4e73d4f6032"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "51e484f20c0fbafda8be15618a53f5c7"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "011896a23a30ba7af3b2196718b38eb1"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "ea6e13a8285ab6725e8e9097b818380f"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "6bb9d2b1096a66ad0fadfe84af6938fb"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "5ac4ff34fcbfa64d7de49d4d767580a5"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "2abea83edea0fad8004d9cefd9e007ed"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ff1e346f80670c81eb0602f9bcf8e302"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "1609c545815c3e58f1da3d3ed86b7762"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "b41e9e99e2691c3561c7acaf22c41ce3"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "5dc599ecde49e447abc767915ad32bbf"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "b2def6ccaef5564c4400653c33b5c7f9"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "51de25fc04e44564788a333f7d854290"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "d3aef56ace111afe752ab8e551f016c5"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "27fe5296430d266f95057a8ebaacbc4c"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "2e53fc54e873de53be6978df0f37fe17"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "86f7e81ec92a66dd1485382f7ec59ef4"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "7a9fa6601f07c36d9db5f05ddf85ddc1"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "4803bc7612588efe0f96e6259951f09f"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "d1be3533593a7890a816e7354bea587e"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "b6026db994f3a58291ddc152a1e3b7a7"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "a2ee933c2fef2a12df664c9007f2d2d1"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "f54f8e7e7026ee1045c2509c2b6ba349"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "02d93114dc315e06b244c6e20a457294"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "60fb4ec3faa479cb36a3a88267f2393f"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "dfa3f904c01d95ae282a5dc193ce21d6"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "3b068ec6ae9f0245518221226d6fa855"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "93c720460e6babb3f6ebbbabc3cc8677"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "f343dd964259b84d41a610712c1689aa"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "79672716c3d7ce0fe1a0ff418e001059"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8225c6380eb781958480227d7d7f2c96"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "36e34eb7a4e9f30ab9fc965ca099cae3"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "ea8fa857da2cd0d290c5ba22ab805f96"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "0ce3445c131487ceda10d1928bf8965c"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "142c2a23ec8b91211f49c2d750484094"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "f385cd041ece974efc2b27a89097de7f"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "acee3225309446227f254accad0aac54"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "5810356c47172c84770315aabc25bd3c"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "5139cdfb6f1b7ca7d07073f397b32503"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "1cccfafb2a914b62154d67f85ed8f3dd"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "a120e17bd78ec091b09666b5bed61502"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "7265dd9a7862d55781bcd503f251f6a7"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "454b68d12d72b3d9dc5d321a065acb93"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "878c48ec6d635355b97237e92691db6c"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "4c38844574dc2006ae7068f9360f1328"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "280d70fd9c8d8397d367440ae0cc51eb"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "565fab0b7c05de3951e89aafaf4aa1c5"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "be9802c449ee45e0a135ffc275322673"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "a4090a1e19bd25c036826e61505177a3"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "d3c223d2453792ebc4d33f62727b8e0a"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "e03cd60942558389f074f97c3568f120"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "750368f03eef5db2207a2115228ca7fb"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "68b13eefbfb4ed46fd7dcc71f60f5d8b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "41f36ff35b63081c5b8a1ee1ec089406"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "abfe0477b1aec5729221df23553b1c0e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "0180038a6c81ad98953ed379688f18d7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "947f7d19ecdc70b8a6748632e2fc2ad0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "47d13adc7f620504326b62d7cfb57a72"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "25a53b63bf7ad8a23b1e9ef0a0d74bb3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "c3f9337bba21eabef7a33c551026be2e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "2a5a1a8c878d45ad30fa0d833583a36a"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "b7dc176dc09427d0791348508bb08933"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "581d9c5a1730e0a92c52674e9fa0c65e"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "3ccce835f0bc55a39300307529b34510"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "7106094f683b0737c69aae46a7e5b1cc"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "a748e301743ad02cb30883900f4c94c0"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "20e58a8ba688676e3dd37d562f2af12b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "a5a0cd5e28c02386c09c2754eed9865d"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "90f9e19a4cfbf0cd1a3e7b34ac66eff4"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "9f0266c5d72b8b6c01e9e4c740879c48"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "ccc9cdd1f82b84b06230f00a2996415a"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "74d6f08907d6a4765bddb28001ed71c6"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "e0b1c035d22525053c50c0bd393dc298"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "a779f1d751a2956040e7ea7ee60cf0e0"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "9c0856b633b4a7487c65c08fc69ea1c8"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "33690ec8d20622fa1fffcc99ea7d1e09"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "faaef9a31b18dd64eb9826611f7465a3"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "027d5c01e700789562cc77b3e4eb3db2"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "683ea7714c843af2cc96cb7b0931bc23"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "696b343abe8d449ae2526060c6585c07"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "84ae44f779ca489da31e28812b201e19"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "dda9e2184b505919c5f47a791c1fad42"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "6ba2397c30765af6b2693357317d4639"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "6274d5e9ae0d040b17094c9aaade4cee"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "05ea44f65551624f3dd88b073779f57b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "2c6aa84c437085c1bf2179c96c6d6c20"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "9d7c88c376cb084dbf30df4a836f3262"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "43d8b1a71dadc7ee1b0028a017604b8a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "f4261455000a7416a5399197a877f054"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "37ab8aa78427f739605bc160c1b7a7b5"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "2a1d75c14e5aa170f5543f99ee1c0732"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "51883171e88a97645b8b96baaed3594f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "d80df9f7893186a0523b3df23ebc64ae"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "16d135fa514b40c7cbf89dc99c0ed3dc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "0978de83a3dd3ac0305baba91edc3c0b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "78144caf8d61b7e5e16ccabbc93b383e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "e5f156aea14cb96dac420af17c44f238"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "3fb1d1c357c14f179cfaa7d464422a56"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "94d233fd880fe103b5cb876783131cba"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "eff0b579d2871e2f7eeec58e35a3d3ae"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "046525fb83d4e7ed37b5b2c93865e9ff"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "dcf82b6399ac43585a32f60139138e25"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "718cee7ec5d2ee29ae041aa289abe81d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "b3bbed11bab41a6ca9588171aae7cff7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "ca1b1a35c720d51c9bfbb8b8657e0caf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "0be0f7a22829791ba852a95e76f1ae9f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "b230323dd068b5a0331c50b0be34985b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "f5bf03c1630b92a07753340c818bb0c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "149c03f81f399ecdf02c0d8ddb1e3f3b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "f453df92197725bba6b3c76dda02c1e8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "466e1dfe0c9ffd774b0aca9ef1c530bf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "1e89d92b673099ed0d557672e6054f54"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "20a7aca2d03c0f3af0e879bcf1840d8c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "e8b3321e14e9b4e4b39d22ea3cf56751"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "0478d3b3c97b2cdf38e650a5fc94f64b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "3a99f355bea6d3e41cb9508cca1bf1a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "0de20f1fa05731437dcd23d6c66296bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "d0a1a13b365d07c1e1b374612efd8f86"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2973248970fbafa9dee387dc497137df"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "021b9fce02fcd4525b8737bfa6a4d3be"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "7412f57bd25085d2ff9b074f1ac31894"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "8ab72ce663889f0b7e8000907b28a992"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "5abe6c6509a1d32c60fa5280b698c0b0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "7daf041fba52cfd7afb08df66c08834f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "f46bb24fdbe9ec666e31d823cc9c0287"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "858cf807b745b526da133771f8158fc4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "acf11122381bb1c23d97bdc3f4537ffd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "b30da17137f3e4a8b86e3956869b7d98"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "742f65fe4621d1faf4fd94392666f63d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "57aeb6860cbe15d417dbc5e59a2474a6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "706f13f2af49596381ab7c63f7babcaf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "6ebc04781c350952ef1bb151cc5e72c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "8fcc7bf59fd1a53734c56f675c518562"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "07951275ce4e2964320f764e795fda2f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "b3998cc701503eacb44a53ffcd7ddf52"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "b24f932954d877999525eae27239246d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "0fc2994f83ef455fff649de9c82f76c8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "ab1fd74e706039a1c6477aa985fc2690"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "0a6f8766c17f7431bc590b34ba87133c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "40894cd5b1df0ec758089b0c0435ab9b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "172ccad61a951066024d8d4ec901c3ac"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "d21c6cf04be45ab6f3e613e005d31d90"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "8de98cfd4958d40222bc9d5a24faf006"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "de4067e17babf70a051f219f91c62eef"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "0477bb0206c624f03da9229c6c0395a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "73c7554db709416056e4fdc78165d8dd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "6f7e04bb2d65de7f68daed15d04f3a97"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "cc60bcf03565058a3712033ce8ca0308"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "0a05520530828c7f99848a5540b89d2d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "28c366982b63c53a2899e5d5a4fce238"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "dade91428358f2e359bd8cccff11450f"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "4a977590ae989c6045a50ef485c19211"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "a7a29340c3fcd5d32907638330d40d48"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c2c9e264883ac0fd9ab38008c675dedf"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "fd6c415bee5cb125a2a5b6d02c6e6e4f"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "08a4499a1ede267e49bd547a4b9d8d1d"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "d79826b73df1e1568de7ad5230c402d8"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "923ce719dc18ee2196fc882382f02902"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "7afc5f23f1925e91fdf001f98378e5e1"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "d55c4de70c7648fcdfbda8c62ad98876"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "10b0745dbc5355f4f21b4bf85758d87e"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "c1fca1845cd32610efc2f9d0030840f3"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "86edc84bfb39e2134e7c8988fbf213ba"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "1731b95e5bd6435ee989faeab6b4225e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "c1f7ff2744875ed527819419192b3671"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "86069493a2d48c59ef51a272d717c445"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "29780e1e5f2bec18a3dd790470374088"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "4b67cf9ff8b17bbdfa9c1cf5e56a3944"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "e74d1b0818056fef3aef426f798f859e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "334119b17249512832b3341d4f1317ea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "e4af09e631d5b79f1d9e558c98bada4f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "943559204cf80c6f8ebb805e16899106"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "dc6b95cc242c5c56ef3714871ee75762"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "f85586d3516db3fb2bb434ed2f420572"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "ada97f435e9bbb531fdfa63301114d17"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "4a6ebf920356735020512e1d187a14fe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "6d2c7d50709b513ce0867f6de4039c2b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "d908c5ea4680fff828e76c20e48c5637"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "1c5769b98dbaedb1be5183b984aa181e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "fcfa705e44a25721f39fb177f3e69181"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "6b37f9bfc91d79da0231c39f808b6a18"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "5bd24f671bce4f9b6e6f890c6246695f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "f06ced35c9d4cdc41f785bdc5190543f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "28463da52f29992275129f22109a5b1a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "61e5d1d042778c550473eae3b10d8d7d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "3dce855280101e8f6108f70102b1f7c4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "683d8c3b845a0495d6df7cc7c316f5ab"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "84bb73d3c2e2da62da464da5ca224e60"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "cf2ee08432c0c1ca0b316341ed9711df"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "331929af59a1f954ee81f06464561774"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "e42187812b61fa92171f7836918a5909"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "de804936200ddddea2d9b2ebf935fd9a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "524793f75c296dadfc414bde73ea0fad"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "2d5a7fd85451fa5dd0ccf27ddcaa471b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "1b649c832d31b6db061a4d8f5176ce34"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "047b4bb9c66c047b8c368046dfbfe9e2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "4e5a55a2972fa39638e06069c8860a5f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "6bb8c25dcda4c8f0b161b93db79d74aa"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "af209aa58c8ee93b39a5991121bd936c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "d16e910abf884db5b488d9499c66fdb0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "f8154a67dc0730a358a7021b72660c82"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "04c0d5f32bf28009f6b7ea98fe319826"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "e015e6c464299f41626113c20633cf59"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "1301ad3100773aedcf5b28736a63b837"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "7c9eaf13f3685933d569fbb1c9066b2b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "83d1b6cc03291e043b9cf7421756fe22"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "0722397b4556ab3f8c4c4590aed560db"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "b78ec559bfd5e642baa7d6936866f5c8"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "7124125fcba3bcade35574f5d407f15e"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "be48dfebb23b68e05dbe1c2520858c3e"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "56e33dd1fd267ba53bf0e8e3c487e467"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "2ef55f9d60c78e1bb2a85ecedb0fb01a"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "d05e04224b612b260ad202527fcdfcf5"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "29ebea31c3a3a4be07b1bbe3b5fab876"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "546622deb84830b52aa0ef035c918bcb"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "273904beca626ac3da2fa4f7e7ba71ed"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "a020cbea1ff84f72b114d27d6a6ed190"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "a50f3c653feb14e8b1c2edc6bf45587d"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "53553020df67be8f9710780f3cc1bc75"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "2daa838e38bbd23a8e9d46fbc7a77026"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "9287086356d3bd23beb91bc6f08819bb"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "31b4600926bae2a9278f53884a1e25d2"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "4973f06bb5abdd2d3e6a52b69ceb28a4"
  },
  {
    "url": "categories/front-end/react/_books/redux/Render.html",
    "revision": "5bfcf89c8da0cc14ee477b13670f7044"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "3e227b49d9c569b81a8bfe265a2e9a70"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "0c22a808d0df600ea995345b7eade205"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "e055318b86eb47597e63137a2e3620cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "d50b4a4edc97e5d29a3d0783c622b2dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "66e61cca2f368534c5d72e184e6de84a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "6e747a00c1837f44914df4e1839c4723"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "e01fbafcc3a9843bc0ffd7b60c011175"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "04bc99d12d1d46eda02216cbcd09e391"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "947ba36c407dd434eb41b9ac7f9189c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "0b82f78e5383143aba9654dedb24984e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "843d48ba69274257874017d7d19da85b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "226d92c34a3c852493dfc0c052bf08f2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "d71203fb5ccd48fce7a939cdf88fdd72"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "39b24f6dc95341a48d17db88cdf13f2b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "4df9bfa12a7fe92912f4510899c51bbd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "b6ce324f98fad8c30e48e9f9ad685289"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "55331e34543e6e7d17c2d7b633d104e1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "ff59ed2415c50174632c99b99e122dd8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "5bd5b894020bc4e659a44c630b9e51f6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "85a3ccdb5827667876580d162bc964b3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "aa96d07799afdd0826430d50676d652d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "431a6318d99115ed812e8d348a7c4cfe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "657efa5c4662126f5e1096b42040c7f2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "f006a4563bccee57d902064631bdeb94"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "6b8e5f368a6736bcf95e67dd808f5290"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "f7ac993ad69c2f5784e98667deaab8de"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "9a0a9c667e2549a57f022cf6281d7c7f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "d25c82b26fff2a5e95c92e0095258f4d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "202440fbc69f83261ceee072aa612cc7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "3ccb7965cbb5d23c068e4fa0036d5f6a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "ea4ec005909448d9676724b80c1e65e2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "4739c45f44bcf2d29ce687a3f9eb65f8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "2946124f28c8a57661b9416a7e018325"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "81885e19462728379255e0bc59d4530f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "e574f26e192c50a391efc43bc8c3a400"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "91fcb058c2368f9b0c1bda1f77d1a212"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "6818b0538a1897ad3af25ebb20e24b6d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "f4ef19bdb134a79278f747c408c97a0b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "4ab6c056e0d58fac1c518a4e2f801701"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "caeb7008a36123e508b5aac034e3edef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "2eaab1444d3888b90880607fad390fed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "6d206bf5b7d11e62f164260a99c94dc8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "921c5d99e30577e6a9b5186767bc020b"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "429a3ba97e9c8122c66156d35255a00d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "5ae83267db119dfb666351bcee3530d7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "26cfd27cee3a85737c8f05ba74fd877c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "25f4f81cdccbb576186d6446b19dcd7f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "f90daf1415ae5ceb58c51ab19eeb6a7b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "3f1a8e38bb8c7f09f120aa4ee71ce5e2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "9c0c63e44372d316939c09c580d1a29f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "273bcf87e5dc221d0794de2d63386c7b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "5be23e662f7a5244d197e9f1ec3768e8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "1bdd90e5bed17db73f08bd2cd9428a1e"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "d64cdb986e93a23ad8ecaf67fba38437"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "8ab9ac299bbfae71fd27c347254e03e3"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "baaf3355567520f7362df7c2b714ab05"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "067d2c630c1ec75491323652ce3c1f1d"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "d2c87ea9489a4c6cdc3801091edb0ee7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "55a4258463a661ca5d847539fdcf65c9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "081fc47632a316d5fc57249559752231"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "54ca011c45a0d7f3048630a0aef39fcd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "203f8f018c099c15663729bdb9167187"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "889e9850ee03263908644480708e2481"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "2ce6ad2bcabaedd0b0f55a6e63a19454"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "fe71094a787fea47757d6723386e5f92"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "73cdfc0a050d46416a9981a25e1e605b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "7be44461f6c8ed154c3eb612aa27089f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "94c60879c33b29fdd03984b238e5ab94"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "8d8fbf4e15f196e52830b832d1fb3f61"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "9c428f24d2b055bb43b7ed3aaaa3b9c6"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "0352afe81f44f07e83e6602b77ddcedc"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "41d0799ed80af82d86bc5c8cfa2cec94"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "bc6b40866b5922034c70fd4206557514"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "f640496a58ebc1cb408a651dd0e75424"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "e621a195c9ff91d1f4293976684499da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "9467d17a86b6132b6a2109396b6744c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "a98feaba94bb5b155457f08ba0db5a06"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "5974e894b6aa5ff3c86513289f1154e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "8f85f6c3a98380a5c2a9f79c24c3cc26"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "abcda6a94b8f43dccf34072a5c35f059"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "6bc63c6ef976c5d9d1594faddd8936d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "ce404d62ddcf048340f4fcd5389e1381"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "d45d3953a05eff320ada9a9b89f735c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "8d781021bfff4b579b6142264a158ffa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "ad41935eb354fcdabf14b815eda5f11d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "ee51ba892c9fc79f62ab69a5835402c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "67d5d0235e9bd8450a16c999d6ce75c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "ef347c137f0cec48f162cc4dd5d2baba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "b300735b85a7cfde029be747fa837e75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "094bb2ee270583ce0484c32aa140db63"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "70cac7ae71234c2eeb5f92836c0fdbb3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "bc59876b4ec8106dd8ff3e5f16551bd4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "f7010570752e007ee5607f554f7b6a89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "c44d618f9bb94a12aa914539bee64e73"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "fe636775be8159f56d1c43fa7ba2a738"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "5a4e9b06564b5f4e36804be43f3b8310"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "6073acff6f0cf7c0548f43f0e8a41f41"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "6036ab60bbead3e006981dd60c0ace9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "7d2d925a9e7aad5f8d5af7acd8c575a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "29e43bbe1b90e139abc80e9bee734ac2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "1c35b762c53a19c3a4a1cf079ff9e37b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "abaa78d90dc40e10f7e80770f10b01ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "c2c40c2ac40e480beb95230c09fd0f13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "78f9d4511b8f66105f8f46cfdb248d9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "c2754c4e26df9e176f20f277a1310797"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "56c730fc2e05bb07785f95e24d8df2b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "bdec3b002abbc10e1e260350c8d3f78e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "56a83134394ab277a3ea8f15e6002740"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "063582c803fd2781da7c03087533bfab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "922885895d6fb9f7bb1a3663ca7b1b67"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "d7302252706ecefe092165b3749061b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "c334bfb4ab4a507113323ec4a624ef60"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "57fe951baaef520c8452290b11a333f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "6ec746a3126edc3759b06d17f232f577"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "2c3b19a9551215cbd17d2620d44bd6d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "3b6ea2e7ec007dfa46d0658ab7304cb2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "3be9a270cb5a65c5d1a24eae82496d67"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "69027f0a0b45c6a03bbc0b89b0538df9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "364abf13a3e388777a619eb1b65cead5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "8ffeaa27077c3b469df55d54eb025423"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "09ba64428a93e75f71615931be482e66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "68b478784711354f07ed506d8da23b80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "da25f56904d2393cfef25fb61277183e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "5966dd3122a6d53ec8174deff3e55ddb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "9695232eab058a917bb18af773683027"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "164cdd8dc2bcdd943e3745d1796d6796"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "1f1eaf439aa3a7aa12a8a39bb036624d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "350421df7ffd2a5ded6031baa4021add"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "38bf2c21cd3403b3d86e13b6cbd44da6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "94ad7329ae3ac7db927004bef241c50c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "36615a87bc8744ced0c3b6d36177d3b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "70c8308d79bacbad4d8b387a5bc19bcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "0626e74c631898a2c91fc658268c1819"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "00e48f7c900ff46c9d613e366ff7d1b5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "dad867e08982bc015122e797c2eced36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "179e17c2745d257eb789ecb7ba85ce93"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "de10fde40bf86bbe24eec9c6e9b7ebdf"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "bbae26452fe5362d7e142e055cf1c769"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "224165e7a92d8edf29872067446f0885"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "11a95935eb551705b1aacd2fe88ebf17"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "fd77efe39d2e5f6ec4cc93fbc02df39b"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "29137e3887fe9eb187474d2b5115f241"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "3610cdde845165774dfcb053a6ed7037"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "e8f98aca66f99fb3812e9d9c5aa8f450"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "7fdacc42bdc98771dbb9313d4af57389"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "c1ed4f96f62c0e35c4f2761e37c31d4e"
  },
  {
    "url": "categories/index.html",
    "revision": "45b1f4e72c03917e47c0d1584b4dad2c"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "f8147dc46393d78cd063119eaff2bc96"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "ce211abae959e2bb2c5bb563fb869454"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "8ba478a6002fa8206174695387f7c038"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "01cbec2adee51af55014a5c1e9c8721a"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "e865e50153e7fca80f47200066223013"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "6f0389b4a75cc7f2d0cf80a0fc402912"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "619cbf70d0a3d4ade6a2fd046afce700"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "263d10949e4eaac184606dc5887c687a"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "02391cb24c5102f4142f9ec52b6202c6"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "8698d140f6197d9e485fde504123a329"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "64906eefe31e975a01079a7e6d04a26e"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "f0ae1c52880a2a46bd2e583afff4df54"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "fff6ac450776cc914c2e98be259e38d4"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "e48e2250a05b281c12e418069994323f"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "23ea4088dd3318f65f457645d868e8e4"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "296fcd41a828995a81d5d0eac8008641"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "f58b4ac78b394d19da8cb318875f3e56"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "a8311e38e21b74563b6025058612b134"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "5757a161e84c189ad2e0b7784b8bb0ad"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "3d2321bc650c5ec5b2ab14625ad027dd"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "7c2cbb45e92c562f180a5b2cbabd32e3"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "443fe78b160764932bfb8529889595b0"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "7fe185597098ad76a0b0aa9059a69f28"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "f6f48c4549fa0b7b31a8327509e59e66"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "c191dc17740d877a9424e2fdf3bc8198"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "727d248eb2f0d12e08a3aea563d328e9"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "006a1ed204aa2886eb526e24c670d39a"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "90455eb964135d527d49d277846ed15a"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "620aeff014fbf5088682a88f13ca297d"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "5f9c8d5b2fb63668f2239fcbe90fe94a"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "9627607c650cff134b90b9e14d278245"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "357281166d85864ca1ee5134a34e001c"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "ac531c5ad7de10e9ec711c2450426b0d"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "c798fbea1b85cbacf1630e85633bc8e4"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "e8b32960c327bc1a684e6b698bed2367"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "d760bfba31cb416ed0d2968d1d698b70"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "202706122cfca2a6776c73eb09916980"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "5976b88e583ecad29c143a70d72733f8"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "5e59afe901b9490371c006510931db5f"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "62432b93052bedf5f6e8c7a6a225d50e"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "ff9ae5e8711ed28dc6d4e484bad6fe14"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "862bcc32cfded33c52b8b29338a23123"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "4fdfb0c27b3104dadda0a1a3367f6275"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "3a14fe295563077967a577f1a78adbd3"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "e41cf09bd1fb29f8137a1e7519e08da6"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "de9310687a8adff08c42f63d70c00580"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "c780928c4b1fbd18374c5c9f3d8d768e"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "218dba89fb127ec6d30af08f62e01cc6"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "72a7f92974433e15437cdf2c239fa4de"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "2dcae731513b97d6a1f9ee947f07f26d"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "dc428a3bdd5a8b8c4fd59e4ccb8cfcaa"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "712d24f989cadfd3e0c674567aaf39d0"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "83fa3c701ecff2632e31f43e1302d08d"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "e1114487c31a20c3c1af313d2dfff03d"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "62c288d3b87925b76413a2b2cc14abcf"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "74be7c35e7ac7ec4da20e983f5b6343f"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "3c49de2773f1170eedc0fe17f1b10cdf"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "c99b47a2f70a4d823f51ce5dc86bd3bc"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "001f59d047d6a38261bed5368c830f2e"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "5cc1aace37c95ef320fe967e183ffc58"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "e46ba37f0f630fa8ef519c639e7be704"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "d39ba48e887bc2df9436a94c824c7f63"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "14df5f916123613fd53fecd33cfef097"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "b0722a8ffa99d780771d1537136fa023"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "2355c1b610020efe8da2da92e7cb8aa4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "f46f1dc188a99527773106775df11e58"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "74ae7bb853c0b127d6f3442ce9af4794"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "611f9634e38c6e7bce66d430237b168e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "7ab8c0982d7d0a982c865d4484cf0184"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "980d76d159f24086bf693f71ad03643c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "91064e9acc3f9127c6734d512a89d3d9"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "cf6da1d86ae0d37eb2d8ed8eeb924ffc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "03e0f7e3960701e69648f35c90096c5f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "d738370232f2583f88d9b143b9c733f0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "408d745f6eb20a4d84a9032973b15ad9"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "1b5703703d045889dedec3980db66ade"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "479680dedc4a25be730b319185787b27"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "5be9a1147efd9d3d409245397c61bc71"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "3833d15cad7acbd0242e3fce90459e50"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "c2ab32eaa129f2ede771b801a4f95602"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "b708b982d1b6ec512eec0c74686ab210"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "e08dc5dfee68efb9a96c972bb8c89cf5"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "211ea12550dea37733a2157fab0c0b0b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "e1361e853b950ea6976944e9ba3b83fc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "01a29e31cf2a42c642c1c48db7770254"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "769cfb8438c0de4cfff1f75574325163"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "4c6ca87eb519da562fb70d82141b8e98"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "bc27ba790cf488a91e271ac91c9ce97c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "09aeaa3baf7a8f894030b8b635a02255"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "f80620ee2ba63cb7ed2d71c37b87b40b"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "a3779d5dcbdf01de0baa4916ba2bfdbe"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "165c6ee3ead193a0c82636007bb3fdae"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "f794e9c4f4c3e182bd81e907ed759e7d"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "1b4225f738f528e8a77c8fa68dac821b"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "915831f968784a6220f2a93a74d95f53"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bd0c41f2c1f4cce07bd711ae0421f732"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "b877c2ac00412aa425d150faeec4caf2"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "df00ef319c223dcb35ce27689ddd6a4b"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "3f597c8f523676e1940425966b0df5ad"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "ef58d46213c644f00375b431b2a9d52b"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "e8e45e36b87a8064981d0eb90f8525e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "209d646c32fbf6b4fa5defeb5b0f2926"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "ca2894818d644ebe55b762d6d2e8ab93"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "034b3ad03390d4d09426d7a8784ea1b2"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "10762dee1c7a8b9e114bf15d03d34408"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "8b91e473181b3abbd92dd287234177af"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "f4a136bf7d065a0e17e487a49be99a3e"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "03bd27c92fa89cc9026131881bc4d3a5"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "aad1beba801c05488064ee8e82e19029"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "c9d3bfc473ec5d275f97bb9d807d1f28"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "9ef63d80929b86313261a6ca248b758a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "056091ac08295752887d4c5d1295aeb4"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "66cfb536e6e09c1b41c7e8cc741d2244"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "f627f6a0c5ae17793fae74b316d9063c"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "344e93697bfd7ad25c085859c8749546"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "a8edae7a0ad9f4009ffda0a6705f2d83"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "ce27d206631b2bdb96df54e4196b1188"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "16231da09d935308855d281f200b8f91"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "01ed8b865c9104e079e8167e868c18be"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "170a37b5733171565d800e0ea636cd25"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "ffe873df90e1e34b0bca2d656b125568"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "5f25cf2d133d50bd3db00684187869c0"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "ab705bba7b6901f612a0ad160b1d0953"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "10b2e5046e91241a7f8b4aa0d235738b"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "b6d07f84865feb374a6c802668c44858"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "b078a2ce87fdfbc48f7c8a5fe54dfc2c"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "1ce79704deedf274b6cf586152e14b9e"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "06f66abf96ab43a96d34ce5401d38fae"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "30b646e4105bc64883d1244dce2b3a86"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "817e7154f02bf9934b94c67f262ae292"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "e707bdfe60c132709f24007a94475c8b"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "7bc89b8d7476dd671af34896d41a052b"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "dfba6afa84ed946e0c1208d8671132f4"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "a79206fad8728fd9c02c5c3cd873011f"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "ec0518b63c491c0279ddc7ba4c70f701"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "517ef42127aa4e851b801821c779f691"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "a90b829eb76b29390e681f6712b4a820"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "4dc0e78dea623c69dc69e0aa5e41cb07"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b2e1876cd23cecf7362d73c15c5fb3d8"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "1a081a2b19b2740122639335a3ba8871"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "e7132d0a1689347b413825f47da3d6ff"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "754742d4b0ea512a05cf6c664489a081"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "8d99c2a1ca49d5f7edd5ea748c1f4685"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "bd5a1aca5b30951f51c0562b5b45a794"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "8a8b7923344163b46373ce700e9a5abf"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "2b3213905ab592eb62dcb8c088fb8427"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f96fb593d7e74720600d87df582b727d"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "8e1491aa361eb54067ac398a0907a122"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "58754debb6a627326838c10ccab266d5"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "1cb0afc43e2392bbe2ceab742f607da7"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "b1cface003f341b76ef2541dcdcf7819"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "e8607ef6d36bca1b434f9776b922f85e"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "e85d699312821e5b1366a5bf0947a606"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "f6ae9381f83c47447ce0421551e9ba34"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "73e50a901ffb3598d0bdec435b1bda08"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "52459e1bf4b5e847787e5eacfc37e026"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "35abbba042b8602b2c080a4829b16333"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "77d3e15f9b5ffcd15634cd21c85d4a2d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "2cdf2df835eeb292dd10b39928f123c0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "3570d2a36cabe67650f3745f2543330a"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "699689d213570a8a3a5758eb4a090520"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "af196db60d57676f6b3ef0f1881c48ff"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "8f08075c1b1d5ff59914c6db3b666a4a"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "ff9a63f1446449c34e1c11cc973e43e7"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "cc19564cd6af190040ee07bbc3705aa4"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "13a349461a78c06b14b1186a75e06da7"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "61b1b7166d7db56df1756482ed00ccea"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "8ab564bd7b494e2c0e761b6fabc22e86"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "5abe0edecb8bae7e007350329e27dcae"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "1fe30a25b2f8c46f7467e1507079a4b6"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "ad466c012b39f24baa8b79159f6334f0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "532e15a9807d6c12019a3c6cba4a64ae"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "6a26b5e9418a287c237fc53f53106892"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "f9da9e00fcaebfc82306b95f9496ec84"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "907e7d60cf22706c47f4b213348001d2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "cc74658b695a28e03ab50ebd6fc6ad44"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "ac82659e9377371d9ed16166f70ed7aa"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "8ca4e7bf67dcdd5c5db5b91f7a426321"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "41cc43061bb7637da4d0dd4c9c92cc77"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "f64ee41558612ce3628c6466c31ef260"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "8adae2d7438f8fc29f1de01d537bc608"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4d7f5db96031512586f55e1cf510ec0c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "fd83598e506857a4fbb94d2890b34350"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "ea871375bf0e9367708828fb51238792"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "a614e264df4b09e508e21892f936ff43"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "c6785586cde4fc26421aea242903d107"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "0107f8050f320e37c612c87435cd9090"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "971004a3da4f8486513628d92c238c22"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "67e584149e2f5d90886fdce3e6477f47"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "ea89f5baf4b81ac54cd6f65a23ab9bac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "c0dcbf17631ca7f0dd08b0b127634f75"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "db5d71c8f90e37c625286342000fad8f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "7b64d2b39fa3e653198d1b0b58f51830"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "7adf6461def11a49cd3f8674773adb7a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "26cc446ba0fe0bd5306d6f62271553b0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "07f9aa96c1be256803ba9aa3343321f3"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "74311e58a8fb2d8d6acc30504b0d348a"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "d26fcc4e101c270a433b55be50ce0ac0"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "383132a4911ca3e84a44d4bddf19cef0"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "36e65ba4600411d161e9188e96dcec82"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "eed69713443c4d2ea6acc86b290a2ef0"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "9d0552f15bea272a380c4f2c5b835acd"
  },
  {
    "url": "categories/os/index.html",
    "revision": "cd94ea640ba6350b96bd442d37aaacf7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "b7f61119d1d89486e30f8eb85eb24b52"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "618f1f4b11fff2fc6c70ec1527565bc3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "e42a184633bf9ad142231ad866de8156"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "46a26ab8757f3459041248526f1c0a60"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "6332c69077148e7dca710073dabdf2f8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "bc14932f3417fafbe3341436c8af5609"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "56186e03a3a4b420c6bb3a2800f88258"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "da5e6376f1e6d09f4d9b55e03e327047"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "890b9a7b9e6ee9e6a8a19e7ea4659cd9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "321eb55d0141ec5844e1a2eb4e77211e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "7a32e5784c2b227d1c1d13149ae09f24"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "3589c5d42c02feed4892480c28288329"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "c5edbc01cf18e3c3793a5bdce98766d2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "a80f615ad7793a18c7fe4e727f577289"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "8a70f997a60fc9a62ec43e590f58f667"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "9997b081e9bf27351efc93ae2e7abd56"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "62a7f7127488e837414da15c651a86b3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "0c9c77ef2f9bae34e2d459f17a6074a8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "29b661b81747f1b1872dc65af2c72e83"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "b0b80f35db9842d5d572840a26f1c7ec"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "3efe32d16fa756cf9ca3a3b88862317d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "79825fb84a8c87384ca39672555a5393"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "d13b734e8cf723cfd74d1056564eb3f8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "0e46f73f3520853964b7d732d5d68f58"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "69564df9e0ae282ab7ee7a290ef722cc"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "99d2be0c4ee22009397e14177fe4f3f5"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "d8e2b141f607fd87518af79e13c810a5"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "274a793983c0816ba2eb2adfc0b5c34d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "d819c1ba916b76ac28b63b1eef5d9aea"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "1a7dfa3c2f054ef6d08bfab52a5f2bf4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "cbfbeea600605ae36b30419b2a3e5f8a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "6360df51987fc5cdf7faedc554c52025"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "2864ceed1d1f25b20cbafd7ec48bee44"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "96927de50ccb559bb4aaa4a0770ef21d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "4429aca8743412ebd72798ade01e6476"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "6f88d19ebce3be675129c286c0ace47e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "da14486e500a8c1c42c69340221ce5cb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "f43dd2ce4bf3f37c2bee993219fc8546"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "abab64c3aa8c260870c16f81ebeff5f0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "a0bdb3f476db506db9dcd09744de7c94"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "82cfd31e6539b45a07a32f77f4f5b819"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "06c930643e0bcd12e1d8145e5a562da7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "f0aedfa633a44a2698a0f2c19293abe3"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "f5442d3ccc436121c2d8490523e5b097"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "7f3f3eda336d349759a736f617e797d4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "036ffecc381eac2928c1b5a3e241f87c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "5b81de0fd4a8b4db14fc1f6eac61eb52"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "f49927d2dd3e972385a264f67a90cfcd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "8ed515dcfa1dd8653eccb2955c6cbcb3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "0c8f06549dc247696eb75268578497e2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "92ea705b5269738a10b12c6730a5fe6c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "a307da8a6b6dc95db9d922263168f139"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "82f92c81d0fbd219ae04033e7c226c62"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "976f0ce09dcfdd8f307da5194ffdc4ee"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "2e013dba2c55ca43f2d36e0cba128fba"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "7c19a46fd7e8fc2a7eecccdd307c021c"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "8b5add3d9e03c79cd25691cf84f41e5a"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "948876866798a3db81cd9c6558147f75"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "61cbf5b09748eb4b6bddd0c8204bba58"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "ac230814606f1695b91b8193702c6813"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "3fc225f291594a74ae86976d2c6b4556"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "880f3ff92b6eaf21dba133d47ca8b373"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "59cfc325f22c48fd79004824e334590b"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "b5c1bd404f919d479046883eadea83a2"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "422c41906e8b91fc6a4611c000032b4c"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "f679ee594280929c51e6e4f4abefc87a"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "9d90fba1357088aac970bf7a88b8b1e4"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "029f8cd717aac8e525983ffb0499c5c2"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "319da7d0d066b6fc7bc9a8a4d098da14"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "3b2ad6b43116313a780dea0a29b5cffb"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "cb5977faa6c244906a701623251c1635"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "7cbd9ae0385d7fce909df6edb8c863de"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "9c162ec5cd15631158ec883e5ccaf5c7"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "00921638d6678c1a0f8e09f2d74018ff"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "8fa23cb0aebd71e96283d6bdf8db24c9"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "bcb760e07e9a47d50c32c45f10208b66"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "20f5faeb8fca0ec7dcd2eee8cc913a0c"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "9b6e9c4335d9e5abb87612f1fec5aa9d"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "53de85c3d82555dac1fd6699e27ec426"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "09728ba87e41923a5db794c120a9f881"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "ee1b40b2059229d84ff03e873c011043"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "9eca218f3112797e33c99cd6dc493486"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "e49f2731843deb79f82860dcae34e0b7"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "0d9fdd1e81e1a7c06ae6484f82b910b8"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "09ff409c9819c94c8c15aef90ccce324"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "0cdc28c39480329fcd2668789cde3c53"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "89e9eac792409d56128be1d6a352edfb"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "3df0b3bb109f418314135b7e48efeeef"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "6a227983aa2834f3dc3918fbfd69398d"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "7fed7819479ca411c3b95d6da907fc56"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "f807fa988c56f946837b4198ea398409"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "bae57fa53e3322a73dd482b5879737bc"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "34864801e10e2b73cb49be4e91f5dc0c"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "ff959960f6a1d0679fe17222a240721d"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "6a29dd565bf1f4be4185fcabbccd79e8"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "114bf5f6ba4fcd60857196e0322e5b0b"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "a641eccec7d6441b0a004364fa885b20"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "0a08fba9bfe53cdd07b3436c3a24f04e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "c16c345dac219d44d6f9004227ff2d6c"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "13c71137d7074a67920615cea79d38a2"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "5a648ff5f749ed35e47cba09e0524ef3"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "6e52938bed883bcae6474264bad1ccff"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "c93e6634336aafb447c57a1b871b0ee3"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "baf0810515b79085464e756ec3c37d72"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "10afdeda22399e6a897a78ef3d81d391"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "d27cff0f53a78c9d6a1085be22a045db"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "5ada6a00b79c79ef81840e82c2c12bb6"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "e7cd73c32eff02c8fe309b3b4ccf0f78"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "1ab29af081ab75b86ca63a3e08feea4e"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "2bfcbb093f8d28903ddd5c172b5ec960"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "55718aeb36649aefb05932a04be33a31"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "92f43bf3b829d485c55690276a53709a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "7ffedaafa71a659c497ea7ddb4a24476"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "32ae1d13eaee51e6387fa67053f9de76"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "a95e48a2b3e430152c5e881b7c703b4b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "00cd1757e8ffb477809d8a6a958354e0"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "84125bcf1ead7403de22bf68ac362e01"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "b2f2daab86812ecaabdc84b693cc9660"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "af51e9d17972e7090f60b7978a3ecc4c"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "adb81f4c3b90e04cd9c5a05fe6b9994a"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "1d69cefae030a48b1a7db68d506cd8a9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "aad6268fc4d8c6badbdb9bf2dd246aba"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "8d7d31880b4e070323a4e6e98f9d3356"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "01d3053fff58f5c3da0eef6c8b03b263"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "1e6f62bf3a6e098c3cc35e4132994102"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "a7d7467370f17c5481d4764f52dbffce"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "a0eea52124f6f1e703e0cbd8b7ec1fba"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "a7921706f342bd16e5d3a72ebffe71dc"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "b458b90de3ad883f62ae0e61013d26ef"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "3d4cc5f6582ca0bfc5e9d4265a6f7a8a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "a5d582ba5b0256a58a1de99358ec9d6c"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "9475e5df55e0ad411e7ad04ef0efa475"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "5c66929549b15f2c36d42a9308ce2c54"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "453f392ac7aeb8475c744dc2e5476424"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "fd66a2fd25b1199a6328f820e78d569d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "2f7f810e68d66abdb3f61bacb7e133df"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "e8f93b745e9f082d4927c6626dde1a70"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "e5edb95593705773511747b73f93aab3"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "ae95deddcd4cc700262dda01c038d1f1"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "097b643e9b3bd1416a1732e8c9d94bee"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "543d820a37fb6489b91f8952eafb695e"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "6b387a9b8719995b940ab802129f4033"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "c58449019a4ed27c393b3656358db298"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "fbff48ce47dcef904bf321b06e70dcf3"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "50f74acacfbd2cbee4e6338d0d836c9b"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "96f67dffd07c00eea828cc5f59c8c503"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "86b380322a21d983541b880f9675ff2b"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "ccdaf10bd781e0d9136d0b7d7aa7d32c"
  },
  {
    "url": "categories/php/index.html",
    "revision": "3b0f54db00aeb156e2bf017ad355f82b"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "90a02311da294cd527d357c25cb56e63"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "f335d93e076055002e094c8682d0f48d"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "84f69b67c7d7af2159c0708dc92c4bc1"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "eaa11a4bc8bb25b2fdc69775fb7fc57d"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "7cb657db4a28e39edfc4883c76885fe1"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "2ef41a4797a57e346a014a0918adefb3"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "b9e0b8579526706ba0925a68091ad7cb"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "ce6f47ede0e6ad5e28defb12097fe5cd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "91321ed6c4d08b187c5ee095c764c93f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "7486fc5a9df9a6ff9464ba1f15bd82d5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "d2458c238f247d1a440e68dffd59e5a4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "329d8d56713b5d3137eced520b915fe6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "2b760fbdf189b15d43bee73737a263fc"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "97781d09fe2736eca3c223093d59ac78"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "fe92fd804863692c14d14379810baee4"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "463307ab1a77749d4dca47c7cd571979"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "7509aea682f1a82b3dbec7010ad96943"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "453f036a8a187aafcac64233ff06bcf2"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "612e2f6555eba500f1897c6c6d4595bc"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "f7b99baedfb9fd0aaace2f3147f1165c"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "9d126285e3bb607f34bb22e873b012c9"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "c1e52e65dc14af7868e7a337ef206dc1"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "bbdf6f6f6a6fd87f780ff9be0734cd7d"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "97a26437915cd74f2ad777f55d3ee56e"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "d90bfdac507a4285158c3a5873501114"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "6a67ec96ad9b75711acad9ce03a9217a"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "5d85f3cc1dc7f66b086c4695966dce67"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "a3e7c397db842063f05a106c0d98168d"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "007f2b2aa3860f81da567f4004eca642"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "cc95fb252080baffe1103ac3b23c741d"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "26bd53d9991adbd7b152f34eddc4c031"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "6ccd472adbd161923929786f143ef121"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "1c80d41d5ee6e2a3bf17b630933cc07a"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "4484ae410fc8252109fcf6e00da36bc3"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "23fee83133f8513b1ec95a7be0055771"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "778922a16199f947ce36d020dbac2b96"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "64ace590152055a28b5164ed88b0fe37"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "aec18750a80658bf17b15ed82a1137d0"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "470b32e58962d50b2f9a2dacff226a31"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "fd6faed88fae618b5358f949ad6ea704"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "6e9b91c38dbb4ddd4363c63beafa0093"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "586f6c648bfcadae0f1a8e42dfd5a4ea"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "830c1254806138dfaa0b3f4d8f6ab399"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "73bac812562c00fb98d6f0bb8bb50ea9"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "f71284b3f1841d4c8abbf2c51f6c7a33"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "3fcf5b335804bdb9a796a145aa08a5cb"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "995cc048a43c18097b93796430a52e34"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "3fda7a2505b48e1d6afdad6bcbd6ca91"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "9dda79bfd3f98e214403b5c28985519c"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "95aa294ec1f45c2b8acefe957a9617f9"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "2d4b3e2867c567d47514eda30468f18b"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "a8da86d840aab726e9fc613aa5014d14"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "c6b3351de729c2f894e723ec5c0cf571"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "247abf91fffdc66c555a8094642691c4"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "457f4c54509e8d661eb471e1671f6dc9"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "eb6862652985b31afe02e6d362f4aa24"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "7ee34f5135278223ea6c811e2d2f8994"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "5df3ea40b24426c24d296d86e02257f5"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "35628ed1a2e938673e46ed0f10f60e10"
  },
  {
    "url": "categories/python/index.html",
    "revision": "992464c262203b4156e26c90765ac1f6"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "ec0ca65af29e17f514b8aa5f94b781ce"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "7788340f0d4cef838a23c6ed68a67b11"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "7a280a8ca0fa1823a64878c55f182226"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "8cf4a9517cd6e1efca9e3e88d9899ed8"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "831d76eae0fe3f68ea9f2b65e0e95e04"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "9c21cb4f94b07554c6c752c0e1c21258"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "b338eeb5c7bf6f9ad57d1ce9f12df9e3"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "3cb581865fdbfe5e0d108d4208df7126"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "35d6ea4e1aa655d7c37581f6635160de"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "cdeead7d8e1d58024eec048ea5d85f95"
  },
  {
    "url": "categories/system/index.html",
    "revision": "c2d880b28d9b0deb16eabbaba4b235b4"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "f3ddf25cf886d67002fbbb16c0d18c40"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "65f942c3f487019b1a5cd8d32419ac14"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "0babc03f2a563084f6bdec1326d8736e"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "cf5c98873eb70d81c1925485d6cdd28a"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "4af15b597b6ba5a05aa5eededbe98a9e"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "3f5cd2170dfd4715c5f10687424bc7e3"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "a6b99d6e5449e97e2ed206c5867c5038"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "b718bf43b26fa5f0cca1a9eab531b937"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "770fa2c17b279212e40f3ce0ff9c9db0"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "60aad6c27b5d4dfb280723305651c805"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "9e8159db9ab08b8822dc602602101f2c"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "e9de0064390b6ea70c791fc3029cf93b"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "d3fbf2a7ca964de24217f1ed2bc9c6a1"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "a0dae7c7a2c1ba93d5aa1f6fb1a25491"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "8578517afaa176b440aa5a546335c888"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "747a0069b5467708b47a9ca9861ef5ba"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "18a43c8535a8349747b354420f8ece90"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "b86ffcd14220cb2459daaefcdaea1ab2"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "87445e9bcaf1ef885b4552ab896f4262"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "d7e2ec9580c67fc7727d4d2c92b72b5d"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "ccd70fd3704e6629cbd382ee8125878c"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "84d2a429b41119c4d480d01718955f60"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "d68e1cf9bfb6b2da1ae606d0b6f8e4e6"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "51a803f9d63fcdd62ac2e82e1c7857ae"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "91586d40dd05d9132f89d43ed07de832"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "d700b0809fa3b6b81cd994e5a41bdfcb"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "e1c4b6330fca2ad20fcc6ac1f57a5ac8"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "ccc7086a05dac628d5530afbccd469ea"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "93247bef1c772f2eebc36319ddede57b"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "01bd8a242cd9df4e5a2e1b0443ae3641"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "38dd7d5f23aecacefd5e93302ab75778"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "f73884f9f8c457ac0cc6ba55cf2aa5ea"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "29230e83a90f2da85eb0b5991428fcf4"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "5714fe8cdad276658776b85b1e54f65e"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "89ed9b6744d7b0d19d82ff4f547a731d"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "b5af153054ec2ec0985714bcc7094b52"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "06d559fcbd95b8543ced740a825d55d2"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "fdf6fae61ae3bfa2fe27fcfeb6352c22"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "82cf99596f2a707bd902fbde3ada4a3e"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "43085f27fdcc69ec2806fb5218ae64b5"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "430075cc387c89155c10ace3c0c73c98"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "e17ab6610030e9af7f78f5ffd693b46e"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "8fe6ce63896a6c3a3f5593f42668b560"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "8e532dfb97b2a9af46a539129a600178"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "ad541f4c6c2092c0b99bade855279cbb"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "2ec4a0e386ce0ed546ccc933f09aee99"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "8ee758ddffaa29c45d0073a068489644"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "caf3a29fa03e3315e4b14afb423a2d04"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Config.html",
    "revision": "ed23599240e61a8d392f0e7b2891060d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Database.html",
    "revision": "d828269d50fe8d6b1e5f69c1d1e575ed"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "cebf34704d4eb2d6c26afed78d0ff29a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Keymap.html",
    "revision": "0404e0b50045c40c99a361e244dfcbc4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "205fa56c3afb643beca8787be29270d9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Usage.html",
    "revision": "b7f2ee8ff05a345c960390cba6d0a15b"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "fdd43c9ea4117df8d5c30e86c7c71ed5"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "5fdd4945fce1e1054db84d7da5adda6a"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "74377b15c7883b5f27926bd39c5ccbe2"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "55bf9b64235d47fc5b7a65c577d5a035"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "8b0e594ac57c9625e10e88f11bb438c6"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "621725db272b0cb21aa2f0f83de7388f"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "95b7f69145947138b494898b16e421a7"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "0d8ad6176f3c36c3e69c1ec197b7e609"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "07e90e92b7d1f03be378ff3f70efeb59"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3e48d4392b400adb285947d86033469f"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "d1a3e767fb484151ebb8559689008607"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e41e0a80063988662921926ea747e455"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "d7ce902fac2784451aa89888dc285f36"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "81f52a5c5d37842cb16f063dde8e682b"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "7e8b1926fd7ab78c6434ae081ae99dd6"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "eb02e663b1ae3469efa912b713dfc5c6"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "bd17cc1bd1146ab069ef26c762ce5353"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "0d7629d8a6177f4bdfe035ae3e57e046"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "55c2073314a1067ee5a1a4a66252bf7d"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "38ef811fd636ced2c9062e5923840268"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "0b65ba9410593d6e3356c64526bef5c7"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "bbdfd6f8c87228dfdba16d43d7a9bd25"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "6d8d782c6bbd5fe62b3132c06e92801a"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "09529de1cb732cad93cd35ee38a66356"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "335dab5acc4159a942c06943f43402d2"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "5b039942f0cf04e8dfc921ffd2eb42b9"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "a56523d5a8bb6f17d440b3344dd54083"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "c2a90f4e27277a18de73eaf84da8aa56"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "8f20cf7d0c7d0a88b12dd57ee94b58db"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "de37b23855a95d18ea0e830a209dc453"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "1c51cb93dd5b3e535427f7b56c2ee190"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "aff959dd56f2aab70f5bd81d82dae3e8"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "e45b6eced67f6d128153d9829e85f761"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "0cf9fa11b7041931afe119beb3d98b9c"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "a7738232bff0d06f7473c7a266c25055"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "7593f384a63aa7e7a6b6700835228a3f"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "f45acc45460c63679cfc0c126033639c"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "a9e384e7d14ac7739457fa2cb3d38515"
  },
  {
    "url": "favorite/index.html",
    "revision": "c64f2cd6a6f466d7cf3b04ba095dbf51"
  },
  {
    "url": "index.html",
    "revision": "5dd4bebe8ec4b7648c717f392c75f133"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "91858ac1a43744183cb12063918c7285"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "5acd1837210c2a1d5509d9b3d2d5f5e4"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "56c5fefdbd09c59b369a67942603d448"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "f1239308e49202807c410792e70fdcb1"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "7d563aeafede2e02dfc494b81f09d940"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "c72d45a19443fc677aaaf77bb325cc72"
  },
  {
    "url": "note/index.html",
    "revision": "016e1b223fa10b07ebcd7c044e837f4e"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "2c617d0aab3292a1d689cae7c31e7ad3"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "274a3b8bbdfef44192001874d33fadfd"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "49e9fd14cd3b9aeb42fee2ba0db6211a"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "4461c92696060be99c583c179f442a2d"
  },
  {
    "url": "share/index.html",
    "revision": "31033575ae09624a74e24293b3266a58"
  },
  {
    "url": "single/about_me.html",
    "revision": "8d6a9a2169e241a68c9105ca56daf209"
  },
  {
    "url": "single/all_article.html",
    "revision": "6e54794087d37bdd85fc88624193c8bf"
  },
  {
    "url": "single/welcome.html",
    "revision": "3d4872ebfa482e59fcfd792abcc7bbdf"
  },
  {
    "url": "test/index.html",
    "revision": "276910abb84fa88e8b29b17cf5e75a8e"
  },
  {
    "url": "test/test.html",
    "revision": "19c748e3ed22c9981c8bd588196ebe5f"
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
