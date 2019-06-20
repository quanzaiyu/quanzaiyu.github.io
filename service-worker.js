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
    "revision": "90bc592b5340b5f60058aa34e4ba0c38"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "6bd016d285a05afe33c6ad943184dd54"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "87e1709e9fa214d46f87ffd77cdaa093"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "9789f6200893579e3c261ac2db745e55"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "629ac66f8c88eb2df1a7fe59c50a1465"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "7907a0b1b2c3f699e31d7327243ef68c"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "01d1166b484f60e7f7edde10e5f87ef2"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "0f9b325c221494c5a265bbad44e5d646"
  },
  {
    "url": "articles/index.html",
    "revision": "cbf904a8d582e773ba54cb465c6a189f"
  },
  {
    "url": "assets/css/0.styles.d5495972.css",
    "revision": "bcb66b13c944e9726091dd63ad5fada7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.378518ef.js",
    "revision": "21a47daae831adc21aff27e397e39faa"
  },
  {
    "url": "assets/js/10.04cd7e5c.js",
    "revision": "ba8f0a580a768df05ff23353ca902d00"
  },
  {
    "url": "assets/js/11.e8f650f8.js",
    "revision": "89c2f641104f6b770f087cb2afdacf5e"
  },
  {
    "url": "assets/js/12.3f0a31f9.js",
    "revision": "3db4f09a1d62ba8dbff08cfb841d682d"
  },
  {
    "url": "assets/js/13.dff829ac.js",
    "revision": "1d6f1b62469fe599abe058e161fcfbe9"
  },
  {
    "url": "assets/js/14.19bd0264.js",
    "revision": "4962df71ff2a95a1141e754c84fd319d"
  },
  {
    "url": "assets/js/15.cf438027.js",
    "revision": "64f78cdb93cf18a90f33b4af6252e894"
  },
  {
    "url": "assets/js/2.a9cf2e98.js",
    "revision": "2913e74cead42a677a1d2ff332092c04"
  },
  {
    "url": "assets/js/5.23db9553.js",
    "revision": "b348ade8c67a8ec658c98eb2d3b24381"
  },
  {
    "url": "assets/js/6.c606b4cc.js",
    "revision": "53a0476dc08e548f20d3915439bdd100"
  },
  {
    "url": "assets/js/7.13d14a62.js",
    "revision": "549262499354e5fa898e9e3678a8756f"
  },
  {
    "url": "assets/js/8.c73c0352.js",
    "revision": "bca0d6062f9e0b149f800facf0ceb5bd"
  },
  {
    "url": "assets/js/9.96b745fb.js",
    "revision": "72cfbd3989e10fed566ef80fae032d51"
  },
  {
    "url": "assets/js/vendors~docsearch.d9627615.js",
    "revision": "ce3d1946d1a9dc7d06b37d1972d57b61"
  },
  {
    "url": "blog/index.html",
    "revision": "89f642316514a742be33476031c9bb53"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "8bc9775934fe1e3700269f578cba9125"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "22ad88f9ba34a3b3bae7d0d83747e01d"
  },
  {
    "url": "books/index.html",
    "revision": "00d02c2846fff82b2df3a135e69edd10"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "aee62ce03ddd0ea62c12a8c4eb37eab3"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "cb9545cf8599368f191b7b2ff3e23f8c"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "1c9e051683667ec5bbd2b03485627bef"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "161df099ab846b9d5ea270d536561550"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "4e1284f23c11dcfb77e2ad26a7cdfc68"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "01f91c4d6a912dab75e6e523da5e5aaa"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "67aeae58617b6c93527fa1007b6d4c6c"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "901b1d5576c697712f55e213bd83dd53"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "68d8591664eaf552f403ac8117c14005"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "99eb9151fdc6b692c199a9f15192ea36"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "36779c423ccc00ce961b0595464fe8ca"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "98ba19c8d88036d2c6b52a3947ae0f1d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "2156501dcf7e04a743d57ec3c3f09df4"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "4b34e7177f0e9cd3d3e6015f655352d1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "842143ae7ead2be7848615a3162a7554"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ce6ea5786630771489fd2205ce7ca742"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "7f4373446900f519868cfc404eac8d4a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "db77ddc0d53e551eee6cc832c2103c4c"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "c646ad3b1ccec0a5c118113b996319f7"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "d3ddb8ab2747b4cef5da9a793d4cd4b3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "5ceedda0df302dbf325cc3024edf536e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "b5102b4f59dbfdb43297e8bbcb96d1ff"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "7fd25b657886e3557b5029ab3942fc20"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "473b1fde63d50718de856c5fdf393dbf"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "774e40ba93e8a7204c727dfc4aa261c9"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "5014e343fcd8f21eca86a4516fd82bd6"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "396688189c68fb2b7da6b9e866a50b20"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "8baac5d4fa4eb9f5ed6b5fa434992036"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "89115465b13c419c5ea8509ff56b75ba"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "2c780a03cfcd8189898c871c13c59a7a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "bed0ff8dec215bb440d2dbf64dea9a02"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "07548c748ff3f900795f78692f6aee76"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "0fde083a72abfb6823e8bc1997899599"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "a0d68588f15022b5d07664a7d7766047"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "da3d7890481044a5855bcf7c3cd91d6d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "36a7f9267c0fd519cd30a7a2d4f9a8e3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "fd4dca657eeddaa5ed0fb2da5deb4bb7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "84a6d2e9cc86361979b78ac1f7555d31"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "db0c99caf43a32a9531008dbb6afaaf2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "d92fe42e67a869c77dcdbab336466668"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "270454a8b2172004852b37621e693367"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "a0b537d2a37f159408f4e6cc8ea2ce62"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "8cca6ec5fe31ba71e9b30754f85b6228"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "65b8757e3287e2f25e0aa0656dff4adf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "735f4807e9fe3958a2acf7f4496c21e5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "00246bfbf1ec93478d5229f1cd4120ee"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "eba0ee1c0a5cd058cdd195fc9fda689b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "50a8f835265860b0ecb8455293bc9630"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "e0612bfba39cfae474d741b659d8855d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "a554180ee24a40caf8d96b20be4ab801"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "ffc4684e0eddc137583b31afa0ee5ddd"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "ef38703b2a7f547d53a0124082c9031e"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "6ab771e95f08a9968fba44c2421bdf03"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "ec6443ab4f450af44679a6ce2cf60e25"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "64183fa9eb7f4149601e62b84f11ce7c"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "7a81a53909de543da427928153cc2821"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "191ab582e5a3357b85c811e55c65830a"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "b3373cb6f1a7e171ed01cb1d10e66ff9"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "8a307a45924b0ecc7d851151849feb91"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "741bad0087c333741dc25a8f182f7804"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "3e802956dc250a4530ca1bbda7cdb68e"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "5d724fcca39d4c880c0ede03d3946dd1"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "ec6985a845f26aa4f8d745e20e11e999"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "94b84ccca29e4d6567f8572e51d8dc86"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "aaf51ab89f28f568a90d42eb4ebfef4d"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "7e791dc68ca2699f1aef1d43e60a5a5c"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "cd6f1c4ff002ab082c98bafc9ed82df1"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "189e0bae9db651710639552150c25f4f"
  },
  {
    "url": "categories/database/index.html",
    "revision": "74cd1362aea4c5bd6fd4282a45448ab6"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "77ab36ec625de9c92af45c3bd0ead16e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "58f690a37b72bfbd9c58c6230570d82d"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "7e28acd0368d741439d03dbe1736e45d"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "609a600be4a675d5dd56de879a00c24b"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "f86915f5e85f189e6f5f7bc87a7159d4"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "5b3e430d1b070666797cd39e012f1654"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "4777e2c28716e9b89812690081517395"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "bf73b2b11f694d0b4edb8603f2866177"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "0c1324652ab456627ed16b2a54e58529"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "b7feeca83875b90826b21400130ba4c4"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "f4c3f8d088535ca186041461d83fed86"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "cee77e670119e67eb6b3912c8ec44af9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "f4b32363e0a5d163225006674ad7e158"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "6109c4530983a439304456e64adee879"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "1e8d9b857ae90465ea9c692adf92f0aa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "c9b65ed984224c84d6bde5143805b0bb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "a5906d8cc379e43ad74726eac29d7a37"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "7c7f5435c1029f50bec77125bd3a4169"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "dc02dcea04c5b90b6923a98ac8608010"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "9c9876d8866eb6205b50129c4789c5a3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "20cbcce520597ecbfa1358d2e9df168d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "0b09915f7094528662477faaf128f6b1"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "e1ea0b40b7018b093d5f6d56d0b9f78b"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "4e2d8a409f247e88ff1ca2668ee8c06f"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "3fc6d5dd26b8e5a6f9fbb8bb4921851f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "f34187ff45be01e8cd3a25f1d03af533"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "e23191b15a866530150655c35fd5db6f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "01f5a5846fbc9d6484198a0eb4e0d3dc"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "ce5ac485df49db119b800e7ff0fc1087"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "de18bdbd1d4b8d5a36aaf98b68272950"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "fa94b49b6faa30abfb5a9485a36b5853"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "548e8b8b1c34567bd8ece295adc25ffe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "9c8829b9a3eeff0aa1603cb476e80dd0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "9ca2f3507404d218791ff2376f5aad3b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "00a93530ff412756f16e59aaf891ec46"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "a7b0cb890b86e8d859342f6266814d23"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "115c2d997562e3c3299f8ceb51dd1e10"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "0929628c10fdcbeaec43648773f2ca46"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "6db0c00f478e151edb25254e8815c4d6"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "0b8080b552155445c60c57712201caab"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "da5f5db10e687619bd9551592484293d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "83f30fe2948b1b9e1c745497855d8566"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "800a82dba4c55e2d88d60908eed13508"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "ed2647dc034395377629ac41764c0d12"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "341ed494fdc1c0091cee53e94339f499"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "de9a81e2cfe5bd9c0164b1b943d9133d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "41374918bd77af162894e975a47eccf8"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "302119afc0859897ee11faa668478c7c"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "1b44c9469df77a0dfb78547121df23c4"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "af08001e50db96c09b775566d5ef097f"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "2356343ff4f9dd96f43b38ca866226ac"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "fcb581a8b13a6ad1a4d22464c0f263f9"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "a81277dcb611bcc76497cb6e3abd2ce9"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c0263e31188a56c74a5b90208dfa73c5"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "8a2932d8ad051ce6ca7927bb1595faea"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "f42f07e9aa744ad24e56ca1ff7bba83e"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "af59a93933200223d9a227dd66c73098"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "eaa2b119c69c0d27584c37c7f6a52a62"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "f1a2d76dc052060c4801a6b921e3f5f2"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "0380f9bf1bad8a67ff7a8059796c44d3"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "5724017b649a4630bc349ff6a18e30a5"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "3dc756f4e4597cac19043aa01c19b9bf"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "d86bcedec2815d4b9e4d9de65c0d3433"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "a957f1f89dd9f351fdf9b12e9b07cc2c"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a2c7fd2ab6863d2f830837188cc96e72"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "99e9b918d9aeeb4a8320c9d42b68d6c9"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "4f0145b1ff5fa3f11a1aac195d33246a"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "b9768e0387b9563241aab12b775a4e00"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "1035831926c2df7f08720d01e6c1bfd2"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "9b0ce3d89a231e2a7ee92cf2d5fb5c8e"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "f8c32d44cf373c6eba077543951a45e0"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "15fb7369e18d4c4e060266b9c7e93756"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "5a2e5a8b1756c5fc4f89530b01cd5a0a"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "85adb187856d6f3171eb869b014361d3"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "f409b1b36306a310d533792291fc533f"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "4d499d73202d7af051a6ebe37d420040"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "9f1aae3e0a9511f47de15e53f70e6054"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "86e292c49384181754331baa9de577fd"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "0e36a53b96beb00664f26f996e8f29a5"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "abe38d26038ab3bd4c1d0f01f33ff414"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "88d961fd1325a4a2bd1ffb53ff7d9a3a"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "fd092fb1bce2cfca976532972ab6a587"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "d137bcf1ee7e9c8c7b4b792a9c0a6e1a"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "7935787fb1418b543aec00c50bf47f28"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "a9ec9f1d91d026d844eee7f371f5b94f"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "9d7cfa02976a28b544a8982e3a359fac"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "0cb15cb6b08f50a5d8b8f0a7481ca288"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "04f15b40f758861d21142a88a50bc3b4"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "70b79f665fd31e38f37bde2566ff0510"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "8c641de4695d8b86bda3560f2792d24c"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "20e620b99ecc80f08a7046493945c29a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "0755612889e23bd4d6655ad7b7a4e2a9"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "c22ecc1aececf496f352e93c6f5ed6b0"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "2fdb07633137f00ce080966360778b31"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "4e788805f37efca658c318163b27e0de"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "b7a6c93149e7fff37fc3df9092b0242a"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "b25f8c685b48b52265aebb920d929670"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "b528e9c0f089619ba16226e0bfd29dd3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "18572eacdf97b7d16104b12cdff4b62f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "59bd935158a7dd1aecceae8ff7b29d34"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "2d98108af6ec55dfca5f2a35f9e1ec87"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "f50411c53bb8cf91eb8e983c7e4e4322"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "1c299a5f7a54905a5fa052ba9baf7d42"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "86e9c5dddf929e5eba539a6534cd4d0e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "bb127f78bc36d89749a3b507ff13e770"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "64e164fdf27b760b183505638723da1d"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "5142b18930dae33e9c7629629a637622"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "54e7520792827f3d8a66869b83f9272b"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "b134ceee714eb1dba9aec73114c7cd3d"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "be835ecb2fc91e3d8df5057d4baca113"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "ea529767dc9831a0f1a7100da0946e4f"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "2bee4b968f7503da916a57d46ff12d45"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "053098fc03c5f66895228631a386f56e"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "0b6d4a382c9d027c4c5fccf8cfa0e711"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "9a748cf0449d55113a7621eb86df1a4e"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "4003086dc92f4e011c09eed21bd64710"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "f7d4fea433ae56a057b0b7fea33912d7"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "304debada3daf9a4e70ef27d893e06a3"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "417cc491e9f881012e4999e199006442"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "9d97f3551c1e88327aa1e6cfb4415bb6"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "6fcb46b13f17c3359bce9a57dc650cca"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "91f562ebc4a54958e2dd1b9586d8bdec"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "4db56fba0f4dd95c76e78f0320887b99"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "3dbaa077ab193af8980cb61e8edf7358"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "8a3778b437ce4408c5628890f6d66214"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "8daae8b82f2258ead2bf8082cf7df72c"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "72b33da05125a790a5700069c833f3c2"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "07a4f5e1ed993dcafdd9d1a489b3bb42"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "ff9108a356e3b7e6d1c02ac21af5d95a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "6a577aeda986247e35a2855e5d2e8a64"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "ffdef6b95849f3537c7b55d6e93a5edd"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "85c6e8e4cc07545d165c82dbfc766257"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "036b94f82a798ed996150da3cf903553"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "369bd327953f97ab02aa7cab2272ea44"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f9fa75fa4139d01d22876fbf82287b78"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "8c1396c4b14915afb739fe8aef068049"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "9f454d832fcaa9e8fd906771c7130093"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "76855507f6374d3042e301a7d1970ba8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "cd21cded4dcd54eac248028b0acf0cf6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Container.html",
    "revision": "3f6056c01432d3a56518c681640787a8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "f7cc9ffa939767448226f5255f7f90e8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "f0aeb4022a96abc7cc23080b1a5c08c5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "e801ce84981d237f776ca55d86d88ebc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "819c3eeda2e12ce74cec533752b0102d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "ffa87d96a63fd0a5dbe2089311bd1577"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "1eed1df373206bfe641c9994742d9427"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "a2ff1c253b0567ec28d628bedfc0858a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "39de558b1a6e1043dd815a67b7a08e9c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "f653503adcaaf9627dec3707e09cf21b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "ec9880ebfae71ad2f2db83f9c5fc5deb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "d78e9eef8ff9ae96258bbf9b210508ed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "aa78aa6fd72f29a4cd9e8e2d4e94b576"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "9baf67f7d8ecb4710301b0b010b17e05"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "37be3f1bdf490148245cf55e139c21a9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "d5b637df1fa04f68b9e3afb403fa85cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "8248501bde72a41af0441f1df16357c8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "b56f608f396858b16e4c013da2b8d79a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "d7a48f18e1394f1fef260a39e0dc7467"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "e813f4d89fdd773141a207abfbab468b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "7ceaca0ceac0539f31e67cb7a6b5c6e4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "87d48626f1cba6b27e33fcc30c8d3560"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "6857617920e19850ace0319fd7927a48"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "4f9e2f21842c6b78f1645cf4cb71a737"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "1c1c142cd47a9a5d0b889299b4a81840"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "73b0df13b3706d4ab26654ac821d1ae3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "1a52193d57144e0175bfdf4a25cf7e1a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "8f0b3052ca948132c4c95c42fd763404"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "6108c83592e62470432f3320ea293832"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "01bf1b1520bf52df74fea4a4e2119ee2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "b5061c44b9d9a22213c27d2196f5ed96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "2b8104c3650976244b5079e784a87ef3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "3ce9f628fd0731308efa0878cb9ee986"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "50d60e7caccb6d831978481f61103d44"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "030620467b93d659543c589eeda8918f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "27c774ec6036bd7f9b8e087eb46ad63a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "bc9be70d246ea303f42f1fc14f870905"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "896f7d894bb3dc1068a20946c2a24464"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "127555ab10a4d8e04569f94b7ae09bd2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "b5f8183d9d43a16a66aaa29f357ea943"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "7e197057673a9ecfb13f509e9042e710"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "a2c7dc0854e6609007584e5f283a69e2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "8d68d12c8eaf1f3242aabbc54389c9fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "d7b384a7a174548cdeb1180b2b18d082"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "fbfe69fad0793d346d2bfdb586cea7e2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "621078f7569ab8db084d664db370b834"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "80d7cae797be6dfbbbd04710f7d1260b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "db970d60f6c55cc6025aa53cd6e37fc7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "9c2d5ca8d105487fd0d00e181addad22"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "37753e2741f75bafc64504c9b793b849"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "6d079cace7b1986f4a3075ec7e09905e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "e5d46e8b387eb76e30018c7d071fd0c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "a6e5ebdbd58f267ffe5dfaf0e90a2e70"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "e92d33d8aef7ab37aff9fe2a352bd60b"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "8d3e6f5739738d717a126eb9c3d10cbe"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "d347cf73618047c25a1afffb01939cb2"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "eb524fb0f7569e978a6ddcaba70532b0"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "d4a43d829641b7a4c1a5ea9b59e8c392"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "5547f7c0ba327ea60415dfc195920ea3"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "c6addbb0676267798f3ace2522e3b7f0"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "bdadbcedc4951d1a0c303f7999b1ad21"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "bffd248d063a76a1bd82aaf180ed0f11"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a184175aab0f91c9837fdf17976fb503"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "e9e71bbc0b4ec02c3ff40bd757b0b643"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "83d0cecb6679e999316ff5c21bc53217"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "3e2fa7bab5fa9e9fa8a61f11ac960a97"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "7183115340a3292b23c10e27347c05dc"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "24a164853204d49aabdb8798197e5638"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "a08d63a957e9a625f5dcfff8671c1875"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "6963937b03db75505cf1e9b76c6fa478"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "290c1588f06acac0e74850c9089fd04d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "31a5f7dda12d61ab40ed1eb8047e0ccf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "c212aebde0d77d73c8e47ddfae590975"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "dc1737f6b6865e1caa89390f69923ab8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "b4e8aa615bf84c29ced6c63593bd5b27"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "c86473c71b815fd8e0ee94daced2cf71"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "a3184212dcf124323887208f5e61f1bb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "0d0f90feafb7509570cbb51eb8d427ad"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "88ca4a3b7c8931ac042f115c8aadfcbe"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "4161523e4f68415e8e5595d83d52c8a2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "bbe1db91ea1d2f1344e4c360726548b0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "f0602e2052e2c638792d6065e7bdf46f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "6dce23311a399b5377c7a4aa590b9b50"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "43a29619ef020952a8df5284d0436f4a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "6446e93c0a8bc1c1fcfe9612315a3499"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "c1f5e53d96a808e3c577b75ba99b3794"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "b2c810cb01805033ac4aab45ace8d454"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "451c73ea2a2a2ac554611c75b59743b3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "0eb1a398a3aba3688c28559be4d360fe"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "f1d41cf05e4718c044027db862936a37"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "10ae7bb42e2dfd3c56174931dae6084d"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "01fe1c9621552d59f42f95e21be89873"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "5fc5745e06a053d3c2b38f8a146df52f"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "6eff374992ada839a600ffb24539e57f"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "8fb6a1372e105f75c07e974dfdb7f181"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "62f7abc50b8b23aa24f161945920985f"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "5c0292d5231b6b2fb46fcd8d44bbc3ac"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "fe217400e534934e3b5a1c7e9dab73c3"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "42b77435613f3bc681fb4defc07962b5"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "14a5ea23a937e0a5ec1bcc332e97fb80"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "be066a5b285a56d37b24b67a1a3995ba"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "7370e2f9dcc0ef99203683897df6520c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "c58771da034af0ee127e2007e959da81"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "56b877e8753097f20f5daa8e1e1e2709"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "f237122abe9e2f10c5f3b1a9694d5620"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "66ac0e043fe4ad6552dc80b29c990e1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "6a62c00ef6bd4b6c2310cf05507e0bd6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "e17868c165324aa63005e19af9ac1d12"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "3fd08dd3a44414ffdf14e440a5e7c9bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "b88d49dcc40c8ff3e1be9946b7f2fa56"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "4edbe7c258caff26d34b6ee8841b3249"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "8ed331a6f03574a1a97d4de1a270745f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "16aac08ef0630d86e2c076779d56735b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "cc252575db5ab95c2e25052373cf7a99"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "2b3679fd13d5d32a3dedf8c698477a04"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "5677750ba91af6b609a4c771836cddeb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "206f920c051518c1fc036c6b3adc3e7c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "ec84dc3f83cf62d3afa217974fbeacfe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "678085b0499496c396e8aeafcfed078c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "624efbdab8787460a42dba9ddbee9c5b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "36a2bfbbb9086b4ce79a6b1cd188ffc1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "23699e64ce4a9384cfb4b4988b99013f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "95cfc58bff5742829e941f0bae6a25d5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "6150f6e66e43927a32bce4121798ab77"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "9f4dc4d14fb601086d8ecfbf9592986a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "3c19cfe14f34b25c8b9206a604ffd38c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "5a390b2d6b6d4024ed36928cf68a02c1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "f635963211930c8f6159fd3ad2fa446f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "fd2ce8c104b7e95c4b589767ce60acf1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "99dd543d939c4eca7003c6b1fad23115"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "288a2841379026fb0609aa9a145bafe6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "1a1dc28220985adb6d4c6983a853dc99"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "600cd6fe16715bbcfe980b6b973389ac"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "c2f78f41f7bbf501cd34dfdd44fec1f6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "9702a913d911aeb1d992d31c10c507d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "d63c6a090786696969eb839739f3e9df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "0d42f30a55b7989c1998f602036cdffb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "143fe0d63f5f1c251eef34e6f7c7ede0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "4cf2d64739f3cd04025e5d06eb82b003"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "870832f564c8c37dd922d7c506e12811"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "b80be265a6a43e4885ee15c9e2e80ad8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "a8df8e047c85bec5073275ab4519cd98"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "a905d2c45786e9e9180fc158e2f82322"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "2a3dcd8160b31505bbea7dcf3a7a51fb"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "b90d69dd0cf7dcb3c20f3415fb85f50a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "c358da701ed49c1452eaa2746811f91a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "79a4646b2b5293142aa866045c257083"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "0a521f7bd1b86b6fc8b1ad01aba4a29e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "7d6af7db349182d1bc367e2bac36c43b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "958ba45bb934189fd3c89994d8021175"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "820c4d4acd281adede18952f74dcaf23"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "445822c1660bbdaa3c5970255bc02ac1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "59f8aef653198fcc1e89f002d8214029"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "6a07707dc46f1b054653b53e51c09b9b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "1a56a0938c4fe1254c2dd0e1eeab758c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "d146d6075e6756803915afdc12c3fb70"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "bda052ecfaab5fa4b97c9477a6e829c5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "e3297df9d4e5a21ff48b807dce5013e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "c39199cc30335a6095af5319ea1557cc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "be5601c4960aacb33b80426ed982d0fb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "f06e7034b6d599042c2a07c0d6d0758e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "4b70452cf7d4c6264af35d75430c1d9f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "352ad4bc61fb64c41985684e0f1c89cc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "2e417f1a03b18462116e941c561e80a8"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "f39837d55cf42b9449e97c21eb3d26e8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "f3d799c5b27ee9702696c9a876f08c4f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "334386abf785bb8c0ffc8635f4bcf4cd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "1475de60f469686d8ea4fa37b1e6cbc5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "a4b215551a2aa01050c1e5ba57b17e40"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "42682cc88ba5d7abe0013d4d0df2b2ff"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "b55fe0d3b22f9f92c2832c0e33df142c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "efbcada6bcbe07ba39182690e24d118f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "1d4e57bd1bbd4ae1fbd202ec4af20240"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "60d1119021e1687aad12e8896291950f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "3647db281b9760d65afedb155ad8744b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "773c548526ed2d245c2f21ac5bc634fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "8feda5e2249eee029c3b7a42b8558907"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "9e40a72a86082cd45acdb26f78bbfa8b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "9ab5961becbd5f7dd34060d325b95d04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "c93c4f22c7481d8812b85a4768fe3b44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "c4519f04a7bbfd42c2312044b5aaf889"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "9817f97f1b15789c03f88edcc2326ac5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "78afdfc8f4b52c4783a41d46d3e8560e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "5f200ddb511deb75d29d5b4f22cdd625"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "da44a045bef4c1458670a7f6a8bfbe2b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "b8114778bce56ab62bbdf92eb0f40008"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "39de7110d686b103bde5d28c5c1292df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "f01e3d2cf305c982dd097b70f091a6b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "0241d84ad252b294d00bf6e948ef2653"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "e973f9119ec54404dc4854af99b7890a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "f3171a28a5b972eae5f75cec77297c7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "b963c839fc934f0516f904b95c3e4247"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "4b24e2f8d541c0b17a0bd38dd7c8f956"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "91889b8cd6eff4ef5a22d885d86f68c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "beae743bfa15528eee5c694bc56e703a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "dac33224cecce3c8d2f174cd8f10b322"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "1900e8a1bef16af73889797e09dbffa6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "6916cc92367f8f58a1d95516bbf418ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "f2cebc3ffde1e0caa6d1ca68ca014ecd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "2edba5f5e074de37766e9098b1fc7b89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "86be7066441ac80874ab42906c3f4f59"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "779da0aa7177fe012e9ba2d28d5d776b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "0f3f211f9f85c07925ab0aa7c52bcd2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "648e0d53a9f860e353e0d3e056a24dee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "98476699ba7cd24f0efdc1b8cfcacf33"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "573b74d55d8b75efef84789ec01e75bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "2f79aa7bf86a421e20c504beddca1b8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "1651c92f342bd5c55657a1ac242714a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "8081597d0df537667c25414a2229bddb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "58083022465e0644637d9fbb3adbdc99"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "2b5f9e0070bc2dc7b74c0c9c2d571c1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "e4c135634d906b650f46192637b79f0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "c124ec2e7ec59ce0b06c0e241292bf1a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "f25ce8b32b16431a328a84d264acd77a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "dfc68da9b1ea7f6909bfd1b40f371039"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "2de32ca41f84dedd8f0407cf7c28a733"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "d138735fad3777ef36a5910659176408"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "155c329138ed6368ff4798054e774b5d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "61477e744aed492b59e036b5a8cdb402"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b2653c8a885649aba8584691dda6d26a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "fdc5d165ced35b7747becb0c11fbaf4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "90f6d2eb5fcbfbc4b8b94456c4120e0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "50911dc53753a93937a9635fe6feb77f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "2a587632c31b7de979c2ad288de1b418"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "69cc0925ca2605a3c5a8eff697ceab22"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "5878f6511c9161f026321b3ae9a5cdd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "cc1356bcb8f920ce1c786462c5c28cac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "f450c71c93a9f649554814539f5bd6e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "82dfda95a16890b6ac0664f9d9f8f1bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "8d7ddef20472f5614de25c8fdda5794b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "b2b0e6bcbd88da1dbe9ea2f22fb6d48a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "67c213d1bcd6a128c79d18f090885571"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "568725a0eddf52f855fb97f9ec1d93ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "d0765cf0ea107efb173247b478cec821"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "4b3b201981f95c806f00e5361ca4c845"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "820e4a2bfce91d482038f19ef94ff7b2"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "3a2a3fb63fe81d75e48b0a302be4c7b8"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "8a9384f05a2a3fff8e96756fbd4cc36f"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "d49866a43456bca69cd43e0e04a34c1c"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "f1eda3be6654d2c5270382736aa07eb3"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "a110c44c2f3520967904a38dd7f72943"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "c74d059c2180fc208bd798be312a5772"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "dd77c6a9cacf537fd969a7b1743228c6"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "69f57e99f0caaa06f4f3b3849fb1b5c7"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "4190d6f9dd8edcb14787918779283182"
  },
  {
    "url": "categories/index.html",
    "revision": "67e03950eff7a32acd999b6a6f37decf"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "4c3a501f6d1e3ed434ac9ceb7713f1be"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "23bcbb6efca2658d62c76c0f02e2d777"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "49cdecd5f173e849a7ba95fe2f892043"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "dce41c46c75e858c209d658804aa480d"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "30546da7ca114f0864cb2e328deee101"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "206313437b7354397fe3b2d12c47e626"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "343f32ac11b97fbae7dda6aca27cfc2f"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "ba556825d803a8cb7bafcfc58b05d037"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "4d70194fd888580b1962a6ac078010b5"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "5f2b4cbe5b9c5c05a162b6107bc2085f"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "5d74e38711c0670f9709196d6cafd111"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "50dc5f3ef02c8abb4353ff2da3c98ed9"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "8510538f5d3bb51069933549cc2e2cc8"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "0e8be6ffabff804164fb23d94d901221"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "796c6246f2cf1b6782ebb117f7fa37f9"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "5ed3966a247c09061d1089c069ab4276"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "d2c3517491cf8786d2df939ec8791556"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "280b9e976a0d31c99ef9838e5a63da5a"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "11fc05a3e5c9c59defd04510465f82d3"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "17a025546c9636eabaf27c61ede3fec9"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "8829e9877dfaf1dbc0e4307bcabf526d"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "0ccc48754acaa9ca49839396505b7a00"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "03f1462cc345ff5bef74bfaca022addd"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "1f21741bb6106752e5833ef45ba7f513"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "219cc67a8ba1081390673898f04289c8"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "16b794a98eaa07af66163ba7a21567b3"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "319fff34e9dce93cb73cb9874da97035"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "76c468ce1810bd6461c4ffffbcd817c9"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "dd186a7a581e04df0b7daefbafdfbdb0"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "4165d9256872b7d102feabdbf0783cc5"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "4a5696c552931f2c47c48ab539cb44ff"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "24c0a2bb5cfe63f48bf83a7aa7aee083"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "0afa9c13892daf704909c783e9fba2b2"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "ac6d24375316acd2587c38c9e3b19c5d"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "24aff6a1e287a65d1792fea85b3404cd"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "0f2129808a90e92a48d923a311180fee"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "b5c2fe1bce600a7a85bd03c973687da8"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "9db1ca89e972ae5e46453e70f6a64ced"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "d061f109b33323488086343d16acd4bd"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "041e124995abb2697dc4834a356318e8"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "94be9ca464c5344a4d33b89a5edcb320"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "3b4625d26fbeb4c8e2db56c8198c17a0"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "da9a7586f6eacacf46b19656b7522099"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "654ad3ec98045e7d2268ecb79b187b99"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "8b5ff7ed351e28b086e7c2a0d7cc6e2c"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "d1147c24a35b5ea9b6b1f8ef388ecd58"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "3cd3e77691def175035f9ef686029752"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "a6e72791bfb3d4661eccb1e46754295f"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "04df73b0810b5afb1dd1fe8d8467acb1"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "3a99bcf6805b3edfe9548fa9b2884de2"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "54f6ca80dfc3333b010d2eb041e16bc2"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "a1cc660f15e2a73349f2f0be5649f27d"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "d7c3f025242aaa72a926c1f24c132250"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "d6360bf8e9cca282d1ff62b537b9e842"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "5c0c7a844e22584a411b559a5d68bcea"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "85c894b3c098e06f1bd2fd50dce652e8"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "85951760146e094f31d1726337e48c1c"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "121b55958a227c28926705809e3728f3"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "28b3c1a374b63768e68610fef92521f3"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "c7a17e10c50ad7f28f87a1e60c2a996a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "1500ea380793bbf17cf95a2dff699c3c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "7a9846c92f7bc36b3ac28f1d6ab5e4b1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "0237cade4f587207bafa944ce9a10bfd"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "9c18ddc1241f384d97aa30504ac729f3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "2db66c47c5c62c6c1f15f2debaed353d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "0c7311bd8916bbb7fa7f5fde336feb03"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "7f6d29405db8737e8a96fa661744e505"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "7778c811ce07a83519c88f56b0ef31ae"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "a7657931fe1e778a13fe7b3d2c35942e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "a52b1b030be624a831eed199763a7a7c"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "6ea06607163c7cc94c7b2d49ea1d1da2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "5f60e1954caac9cd5a7859df7bc86efe"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "31c85b3026dd6ba1b00285ade494c667"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "efb179e5a6d41a1f7730795a057d3f5d"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "6ef18ff577893b7988cc002919abffa7"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "e8cd7506e1e79a8c06652df9070ba0b3"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "8e8cb47cf5d3cc2370a28d9b4b4ce40a"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "a4c9f9169476afab3a3371c7e4cc07d8"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "cd82440156829a12060db8108dd7ea86"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "fabea8b5f408e9d191b14fd1dcdd1060"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "7814ba71d7b0925db30552379df95581"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "e6057eb529c97067d05be99e5ecc50d2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "59bd97d316f1c27a228b6fff4fca57f2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "3356eae8a31a8dd2b0f0c598a277bf43"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "50eaa7bad265fb2b17b1530c47c2ed1d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "0e374727397f074cd9363ac3ec0a1705"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "6fa36038982ab52140d0821443101fc4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "1376bf8439f0f9658832afc6c027ec75"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "d091a51fe680363062df2de97dcbd47a"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "d744455cfd24ed60af3811790c1677a9"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "2400849c1944129939ca7521c7ea353f"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "6dcdc0f75336086bae3a36e5641e3a82"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "650e63f9cc4f17e1e68de2c48c51b7b7"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "3296c4259e93f723dd8c03f8f82a74cb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f5595d92643455961e3f5f684aa0cae3"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "213a070b169e2ebf3a8429da36d96395"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "9df1d6c9b76a768d19003a8a749e5f5e"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "651b2a559b373a45e4b46f8ddaaf54cb"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "fa4ad6f8ab0d4413c975016b5ec0d43e"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "fd0ef3dab2110ef0565a23a637c350c7"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "7704b1781414a61ffe9ab8a5784e036e"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "a8f837a6b0e5b54453256cb7b54e29a8"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "6047d55afa34dcbe73634cdc8037382f"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "aa2ad9dd1cbfe7e3aaa2141ec61d5b9b"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "ce7be1fd554f3d5c07cd6fe345c1c70a"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "030d9be1550a6b8153b8c915e2906353"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "4b2e4356113dcead7bf989a817a0315a"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "ee63ce9f6f509a4e8b34d8b92a75ebbd"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "3e11431d27b5e7ac80018c36029586e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "a06d377a29697bfe0b6209a98eb06bdf"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "1be49b505978cabc9d7c192178ab04dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "aa33855c6cb3da4697270fda56a6c7d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "15bf92449f74e3f85a0f5364313891b9"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "0ae6bb1b176db0ddf14c8cab529432eb"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "58e9a37928ebdbd8e5658c2190fc6bc4"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "ee094d01db77c574e8e8b75939f47c0f"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "ba9c10dad4179e700877cdd9dd3c533b"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "3d6ace8efd8bf09ba91a56ec42c57439"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "d5f2693456c47821e9128726d5eecc1c"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "53351ac2414bbaa453789954efe03b5a"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "a1bbca887072b458c80ebd476f653a8a"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "6e549ee842715cdef4b4991fa44c8731"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "b63f9cdfd18c2818cf66cf0437c20d45"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "67d581460ab9340811d12dff1bab3f18"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "85f10356a7fc5e42597cc5eead307022"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "833675410d9ac8896c9867ba94568b02"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "c844af2a7bf61a4d58ed32f94d9fb46a"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "11f1e7d338b9a940a31bece54a790b89"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "70a495edf1c57f437c72f23f66c990c3"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "2e399f9e337c8f3f72aef07afff7a3b9"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "02be13ced703e1211d23fe544facdc23"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "ef603730eb9aba23cb90ebaf82b860b6"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "d17f469d918b438c1ef46fb3ba6686a5"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "2690252360c82b5d6d2811781bd64d1a"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "b057c45ddb397759d9f2537e6293c602"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "f9e43a156a184ea857bf4b7f4c360bff"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "50a87f8ca52537b407e8a85aa7f0ca0b"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "a669838afacd886041f0a7b5b266c47a"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b67a3ece960612c5ac8b03bb56600ceb"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "f91d2c58ffc407ad0b836ff02463308f"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "44f099ef5c8789febc04d75cfccfaaa1"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "ce3a44c02e062104dcc3710f1673b6be"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "7d2d05a770a6f4a10f064a50a72d7305"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "56fdc4ed7f4ae86e1f2bbe5cd01c34a0"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "94433b7554ffc21212f73589f4f61e33"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "b7c33edb23bf11ee6233cb89c4177165"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "fb42a7c93050110f66e115c458794b32"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "1ebc212a4a6a47470620d209ed4b7dac"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "63842fe90f1ffe0c052dced1be760440"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "d28ceb824c17a39081faf7d792279dfb"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "8a9841b9ee154483423ae2579ba2fbd3"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "b60b48d2ba55a258dfd098ddcb08a987"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "e155557b79ae499096ede70cd5a90581"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "260bcd8bea7c0e005ce5eb69e83e3dfa"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "32e9ff944ba835388e97343b43ba671e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "d895084f83508fbc7bd467ebe1281205"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "1c5d516b11f92ddc40b67926cb245914"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "9f299068a98887a83843e38c0f41a10d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "72aed9102ec4b2dc16084625b6e3cdcf"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "5051acb760a6aa08627e1d7409bd26db"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "09046b3b3b31759d5b8a7085c5db01ee"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "c2d54368c6a1b06a780674818d1cd1b7"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "f2cfb4ee98f20efbf9b0ecaa1c037db2"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "a7499e0ccedf264ad1a4b5434175ad9d"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "7afef92026a394e777e2aad8b4e73b89"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "b86f91b417d8d7381680cd04991f5968"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "1900b5320da060d9a9a056037d85fd49"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "f501488281c7eea1bee58215529bb2b2"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "744ae88dc35bd4d3c18310259efc77d0"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "9fb76eee99487cec8fd1c3382e57bb26"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "2d012f582826de13ac063aafa98c59a3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "03aea78ad13b3e3a1cf728b32845f8a5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "ba640943ed7225ef19d27b2000303695"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e3b15f665fc1d50cef96a77e300f948f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "3949405e5e72ce60ad8716e8a2ce50d4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "400d12b09391e76d6dafd18a2e96b17d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "240bda58bac60a158f4291e9c33e82ff"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "4e723bb4f83b08cfc3a0b8f3fff38d93"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "6d6dd3a6b90cdb5113933773c9960e30"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "8edb8fb63b4a2b475d1f9c709100cfc0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "141126aefbd1cb80b1feb3d2f5e603ad"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "c3b653e2dfbc4c55d0d6a9df89b5ecdf"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "6651f74885f1b7704aaac0a18a5cd664"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "b50216fc9ea8080b7476086b7e1d0048"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "f8cac0832867ce22ddbc62ca4d7436d8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "65d518d52d0bc09aa4083a966e553b56"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "ac32b4999686523ad3e25c16460c8702"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "0f1d5e533a5f504f9eb1ebe80b5fb754"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "c4124c61c9d0fa206aea29841b45971e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "8fc5c9ae270b17e14d204175ae64215e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "30cb09262d77868e581740b93170fadb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "6a0cff3171b207e578ecf81dc8e1f67b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "448bdf2c0b83aae2a991bffa9775110d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "4f15d3fff9cff90ed9067e9a6c51dbce"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "a5306769aa5d0123fd92d3ded8a69000"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ccbda01e835ad32f2bddcbad9384b73e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "497789d00361654e5da453b47e2db9e3"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "105345e1644029f3f65f3f439330a624"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "dd697b408fbf8e505a2ba110bdb45be3"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "7d4251a7b99f878b328c815c29132691"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "0ef68a2bb742f721ff8f3e8fb21780cb"
  },
  {
    "url": "categories/os/index.html",
    "revision": "9d8070c019890e9bbba9518230693ee4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "4d90c8508e3e5c4c685f3da38bb85c12"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "77874d1f09ee81aaa5f74c8f8b7ed732"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "6b8e313cf1b5ef19ac3b2e4475648fd5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "441ab0d8376a54a12d15f69557dbe0eb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "93c1b641d3a756ee4799530d328412ea"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "e3135d434fdb41d3d59b8a245a9cb492"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "c75fe03826a51a7f1f09185722960dcb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "106137db76789f5675937be05a628871"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "b6c7e23ec3130e2fa1861d89fa917892"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "b81cf9c8cafc7e937516eb1f812324a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "86b75ccf8c88c064f3d97636864690b5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "91162c864179bd57977cb43482516208"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "ded0979eb546c3ecd3cebf62b7d73845"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "7ddab38ec8c010ff325ac8cb3edce762"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "c988019ef104d3efbda998ec38511b4e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "03027952ae4f76cd8eded429119bcf30"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "b9fa282a2080d55ee694afcfa8421b9e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "528b0b8d870935d2e6fb19a9b7b18d60"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "bf02314dbb9de77a71d09bc53ae73090"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "18ba2731985ca5bb8ab2fa6bd4260d20"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "179f1c0c398b8a5c5dbad2073e036831"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "9e26657f833e48c648f1a7e3e2278c63"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "766007cb5713c55f505e4806a6108c9f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "0dc6d1f1e16ed70d96673816e031165c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "1c9f3f9ee22ea60a0561b55b189bf392"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "765cc256e3190b5805e9398807c48356"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "ceedae748fde0f7a738828e2776f2d0d"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "8691a7ed52d9b780aa678dfec0b219ba"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "77e2dbadce52c9d2f912fcfc9ed59b39"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "68ca79037b43b34f01a51bbf0747725c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "a84892df0e6cf9f31c8db6b90022b71f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "34b6f725bae5a311b5a634b085a13d93"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "2801f7aa9b8e28d7cf9a0b822c1f7cac"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "16d7decb89407a629f513acfd963b95c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "2b26623e206a5f19470d21291dd58646"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "237b6057174b262d10e10a8d32ad8a65"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "41cf4d8e939ed51ff2b05f1adba4d964"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "6696161a447e7c0b4232766f69b69608"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "6efd93214bfc0f2555c27a3396993731"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "fc492779fcf321fc8942c30e7aa32a6b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "130103183a6d4ed0c18a7c258b97517e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "17d7883f2c5108b48c2259f8fa397013"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "badcacac82b0b402d25ea1e03a17fc33"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "4a82876f37a23e1603e2f6869933f8af"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "72c1b7ee1ee72de81e701a38df0e45bd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "93a74e2882f9e0617bf8de744c2a3a20"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "d2a4adcafd61ed35b15018ac61fdadde"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "83e0c7e5b85a011e4e5481d9ba53caee"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "e099b2fd840e8b2462a1c0c970984bd3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "2a51034a3ad0116457b8a2da13560cc8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "96561827253c841ee7d4a1a9f679bb76"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "4f8747995cccf1e7a190d98201c3b125"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "81ba16222a9830b5145c6e294c056a82"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "2c76d9cfc1894cc3b773f1db18697672"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "a1d953f2e15d6d05a2e50e0623e7d387"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "ff82837006de490a66e9fee07334adac"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "ed8b27e9999ce3cad93e3b63a604779f"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "babade34fba90a272a93cba82b7aa1ad"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "cbc79f74a41388f4b51f05a25bff5c30"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "56739b15c19b9ccb3202f536fb180963"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "d6ff6dfe06d94c56beb03c5c974298f4"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "72e291c2cb74941601437e4d695510a1"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "31972f234e76da065610df5aa7ee9b26"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "0795dfe588fd1ed62c8ba53ec0d6975d"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "e310ea239ac8ff463572f5e7c0f6ea3b"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "0b9379a3b3ede2687b5f4973413a9192"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "2a6e754bdc90a886ab3dd5927e8904e4"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "d5510c182955e52d5a0300df0885ec84"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "62f2da241506e4527e7c12c03f99a0e3"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "472e6a18182b0fb4a44f40856a38aef2"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "99cd0ee85b4579a1180cf99d650bd4b2"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "b5f35ae57e2e45e57dafb0b298a444c7"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "13170c425901fad74ccc46137a624308"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "57d5e823230e72d2e05afb8ae1eebd0f"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "914ccd8854b7946bec458876cdbecda1"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "d9619425a9068799b8fc2c0a94b83e91"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "36b190e31805cb3cd2fe44997219c7c0"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "f29b5f21f83aca5d66ef7403930207a3"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "c4cbddaf04b1e872e327c6e5df3c7cf0"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "29e1a93f6414c885922ef25f84029de2"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "4bb26f2db0e52d2709c955ff2091a98e"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "f7f31b765f8d2da7f6f199dac8998af6"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "a909a9a160a0cde81d60b638c1504b90"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "8c0cb5208b38a593e9420f8e4ae009f6"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "190a43d984e3832692ca173e5aeae3ed"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "aa658d40a6fd2a62e1facc26486f97db"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "ba71c94391c1976d68435aa128b21cfa"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "486bd8cd1af2f41b62893564815666b7"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "c60807d46c581dba9bdeb7c150721dc6"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "db71bd7f971f7928926cb639b5448036"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "2997138dcb007e33ae5535054cc423d1"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "96dc0e8ca9b7d761f180348460fda645"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "52486baba8d4c07d897ebd5605ed3c11"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "120a9c57e9207376332aa60f45328db6"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "2c07090f5cefefa30983a62950dbf570"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "50680054c578a5f3c7b148b20aa7dd10"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "8c93e349b6121a027549efbccb11433c"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "23f1743a613cd0a38a4c54a59a09e63d"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "d8b0cdac655e2b9b64cb943baabc52e3"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "484440955a395520045750bc2b3ee436"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "3d08f902bf7e27e37eb55b88a5b35ad2"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "256eacc3465d680160f0ea3c4b725492"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "6003b4fe2fed85d93274001879c16099"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "a8c5c041880d05cdf372ec29fbd14a15"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "0a665c290d1c1e936d8b28697ab5ffb7"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "693f9b468696a95cd9cdd6660ea2b206"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "6255af771a2687b72e5d050db68c8e6c"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "a4680255c2808f50e075f28341a2b6a9"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "9a16ec941a0a17a091b2779140b9036b"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "9ac40afb03a293d7f553add773bec7bb"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "6b6464c7955e2b0154e52fc92486c69a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "81caa7072030d083b4b9afc52b6ca92b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "f1deeb039656d696f60d95c821372f43"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "8a46895bb0885e6ae5b84efd52ec8f6c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "6496c03571c670e849ac37a37065a535"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "2f1152e1b6485df64a497e9e4faebf13"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "4d053f64339a706bd78191811ff1d36a"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "142e8b590141eac225d6e6f630778647"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "a2d228dd58a8f61919651e5f91d849ab"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "b95d8a57c7042c6dd98c3929853d2145"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "f90a6cc920a3745b0fbdaf7854c52cd0"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "a8e3a97025b1d3cf52942516dc7275f4"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "c2b354c27bc2aec9ae3c0a6aa57df29d"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "9d1a3be21e821cf92bd2ca5a455f98da"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "2725120447dc9b9e0b7d6e7ab5aa6572"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "8ffedbd8994f1c9c6e704696339b6b9e"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "6b14cb7854f463afbb80307858a62cdc"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "74915985e23089ea893ffea36285e3a1"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "06d93aca112e86fd39b26a195b13e834"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "f48d6733fd1c8da2b2e5b6e03056810c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "c80c9b6558b2849564ea531480680c74"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "d491dff7eb4092a40e764237aee66689"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "d2860bd29bf66c346d3ce52ad22f3d58"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "13bbcb88e055c33f1f116a13c81426ca"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "0cda60b4f1f31049ae2c27e1b9abfd0e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "206ef54c483316568b416e8fcee32e7e"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "dc0f74f7ea5537d90f49e22e839053ab"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "6d1bc28bcfde05ec4e911fe0907964ea"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "77aa11ec982c7caff57c8ab93768f601"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "b71a56d165bb106f34c5c8f77e424fd3"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "bcb50b3309cfb99c31dece1eb350fd39"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "9e65f92bf3088297c46ce47a62350f34"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "0c995cfa0571a11b418a67a51d861006"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "3f44070f260ebe245a5e4eeb428d9ab8"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "378d97feb1d4e4fa20d317b5326095ed"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "0c49df48b156240f105096783c0ae8d1"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "903276924c7b72f2aee39153e89391a8"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "0b12ef63781f0248467b9231e1698ab8"
  },
  {
    "url": "categories/php/index.html",
    "revision": "4ff3fb2e9ea664894b02bad668f2b8e7"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "2dfc83798dc635501b8f623d6b9b7da3"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "16602734a7e36b0492366cbd5da39186"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "99fd906eab21d459377867531d668306"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "4dc8b6ed5b2d7e16a372a069b5d5bef8"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "dcc78874f07809efa77a222cb820c440"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "ea030343f2585e7d831b1f293de5d4da"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "140f4b5056445f61f770a4d0174a8384"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "f748c8eb9efd13800f31d91909ae3c7e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "ad2112ec284fba5d72ea1c29cee12566"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "5f2caabf0edcea204cc64f64e10f08ec"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "c7fcd36e1deae74df6245e883316a6ab"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "31e46efd99c7c70010f811eb29c74ef1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "3ca2800f8c7e67aed92d6f4e2c6a70e2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "57256590c0ab83e914a700629394f5aa"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "ea1be1f1f06fc0a22330fb87d443301a"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "852938b78c9373f3222e9cedbe41a30f"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "7dec675b0cd679ef62d10f36e08a702f"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "a8dde9626df11548c7c335815f1bd060"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "9aadb63349be9111d6a22a17616d1aac"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "d4174aa6f1d5ac38c46c54d428efebad"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "f00c648d3f6832dc0bf72c470fd23cf4"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "63dd5d6ace2cd56c6493e169d5d9b91f"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "630b50a0959adf048f8d533435eec3e8"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "59bdd9ec74fb8b910e61f2d5bbaef6f2"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "524ec18a2cafc577c283dd205871f9e5"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "1826d267e202e7a2ba0375f2fa507e18"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "daf510e0f98ec4be437041ddcfdb4348"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "c96cb0efb7e47afa43143353d30fddd8"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "5fcffe10c76a85f16aff99112a5dd146"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "9b2159be136709776707da6e7b98cf98"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "8098e82d798d89df17588057bc0562b5"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "98c714fb42310c92b2cc63867f165586"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "9795a3b3ce8c610d767a5875858db519"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "f523535bf42dd72403d68ad13734b750"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "2ef5eb5e2ab627ed69d41b57f3a87fc3"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "b9d1b98579e47c03b507a835be43cbbe"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "88b14d80293d47187948ccca336cb36d"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "fceddd2eea069507e6c6bc78f5f9b476"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "680b681c7b020ae9a53853d9a3c72629"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "439f469de544fbc5f0030ecde0378c26"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "9816e3545d6b369c5638bd7668700a73"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "45fde3c9a2afe2b68bb9cc4cec812172"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "f7c2c9311e9138efd8f5bae9e8f8e938"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "51437398190030605f8838d3c4c6bd23"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "76735c1e29ab562a9fe2ca258f034af9"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "973f5af43e542801936bd927e1baacd6"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "13da813bf243bddc6c5e42a0d129cbfe"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "e3abb71fe872baf6315a6ec8e5c9c5ee"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "60708006834a0ecb59724a95986b2252"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "a38bc27650acff3b198f46559c54d885"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "c5bd0e1082c27fb2f331fa94a5065917"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "79ae41b7aa63f5ed0cbd17fedca732c2"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7d6106c9127730cff58c9c9bb75ac95b"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "2cb2b81c644803a7eda9b87eae318bb6"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "ecf5d071142eaa19448d38c84293d40a"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "3799a1c0cd9db278fabb4ea677eff749"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "d0718dfa016c6fe6140770fe24de2b69"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "4a77fc68d1925533dfa4ae4a1f7fcf2a"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "769fea2839036eb56498258b80b4cdeb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "936019e4a644aee3d496a5dbd106efaf"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "783b054bd87f105ea8ab77ab97604875"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "5cc30520b546b39f9f365ae6942b0cf3"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "68997ad23f35b4e8b313cecf97d07f79"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "047b0fffcada0ec08ca6e5e70212276c"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "d5f5eb7ed2b53c113ee29c5056558c35"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "bfbac6f8e5d583a1c4fabffda4db66d1"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "5c8b2741b0dcc8fa72e8463dd155c6ed"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "55065bde04060cfa42249d1e85ae2db8"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "e95a9e8826a3a7fc23c1a0933cd9c0b6"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "739627bc0f1d495f74ef1f4380584818"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "31d87052f0cae2bb52871365f54a07bc"
  },
  {
    "url": "categories/system/index.html",
    "revision": "b1ed54a8db7f4ec1165652ed288c82f7"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "f026482b4b79f733836f81e23737c90a"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "98afc0748d4ebd34da9ab9402f415d78"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "daad3bc6e609fa273a6fdc6ceb3e1467"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "87d479a5bc224ec64fc65c10bdef803e"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "a7d332d47bd2d4f2f41f84bcd27da305"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "bdec4b5c13eb4450069eef1d7c3e7965"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "5e7844d1365651e9de2421993f25c057"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "79981ca4b55d1d75283626d7dff54170"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "435b62dc5bb4efbb80c4c7442429871a"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "cddad727c9d221b43d2b787512df3944"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "975413484a6cd453cc0edccc5f112471"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "17aa1eb7cc68b974c3b3d651a9675350"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "d8c4853ecf7300d088776ce0e48e1600"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "6afb0c85f2a436688ef9de3a1d0dec4f"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "c868631eb3a409bdfb3acc0854e2b7db"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "9955dd6994262f0b97984f30048cd134"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "d7f17478d7283ede3ee5c4d56baa9929"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "31088986ae55f9bebe2306dfdcbe3ec5"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "fe5aed2da789aee36f0d9192070e0a23"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "8469ff81f26959de9510e58a5b131309"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "a059a6b58162454b6d019dae6420da03"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "e448ea4a9c5454e59cd6316e635d4795"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "e8fe375c611fe04377505f46c9bba153"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "1d5a9cf6dbba85fbf99661eac50e65e8"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "5e4fd51e2c6b9c550535576ff6f7b589"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "538411dcc0e86f34dbadc76578264a8b"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "2876fa142ec36a9310be37dede4bd43f"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "295a6431ddf9ad1258b2782708f822c2"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "9c23917f4ac0b7e022ad289a83398399"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "3e957b158dc0918f8fd440bcec587b65"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "135f28babbd2e5db9cbde85105ce8cfc"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "25a4862180c5f4a1cc14950d40d7c8a4"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "65820f66ce0e8c2491fe3b3afe390d49"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "fab8f4d8a816e3759ea12229c174650e"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "794f5b80929348b3c0d7b9474ae79538"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "c75d746aa8a6d70473e08dc5e1bb6663"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "d0619bdb4ae1e8516ad44e8e0b8af01f"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "31dc613d753cb59060577077a389f2f9"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "cee2d7aa5604952ecf7212e2b9d95400"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "5ee023e2dc76664199503541ea556d75"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "87c6d55033d3ae904b44140267220a34"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "506819aad5cdf32d4757bca161e30c7f"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "095b54b5de395a3ca461a6411be7c585"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "fdc1b5d388e38bf925d93ea22a3e496d"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "597541e88bb037fbac1479ebfde0bd22"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "5faab68a2fa1c98101e6bc03ba2b2b0a"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "2106ff20e803584ce97687a992a4105b"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "0d41bb4889584af0f3dfc02cdb33a17a"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "73b5bdddbb42af6a479f8b382ef88be0"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "715aef5c9043eb9357ef1e32b0f85ec9"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "a16547f5b5b9b0f051d8e40243acfb87"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "05d58f160a9b1b029552b03ed8492683"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "02f0039be9c57cf5ce7b33cde705cb47"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "9af5925f0c0c9b7ce7e1b5a923e4da96"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "bd500fcd37bd6dd1df66e0b92f819ca0"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "3aa94974fbb15ba0bdb943ebc1cb918a"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "fe3b6461e5cb352bba0d5dd5bcd99594"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "b5e3361822570d5a502b99d785b5e440"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "cf87d96915ac6900a30531d92ca1302b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "f25a104e191243c56749d8b8a15d8d81"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "2ec22a806c769d9d400db582a32274c6"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "2062597b6e9ff61f85de8947ce024195"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "b9098cd499708afab682b8eacc66262e"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "1ee66b6169f0bc8214f943c1a819dfb2"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "095e358a79dd6dd704dba75851792e72"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "2e0a579ec60e1bf532aa8739b09b19e2"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "3bb55e5b05012aee19b3d83c18ea39a1"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "353b70a8c801f8f07a289393d95bdb4e"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "97983920b89f5c4fa5b66dc30c5aaf90"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "78361f0753d401877f06b17af5e820e7"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "5fbc5ba1221f232219d49741e30a1f6a"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "3043efc828d134e513262b02684dfdcb"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "3468609aa4b5458caecfef228705f0f9"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "f43cf4508e79d294d3aec259ea16e638"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "1ec8416f32f849aa940e32e5c88970c3"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "1ae879c24952311ce74d0a002e927180"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "97550d480ec1b90dff921503f46b63a8"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "a729ad8b435e63b00f085d678ba98a90"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "1673a09942e790a746a017133d955830"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "a1a06a854d0de91e1e86677b411ca7b5"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "2c2a6d851ef6588bfbc27a5e60a3a00c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "97c8c2bf4d933fc23b2ec00251216bc9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "b0eaa2a017763e316d3643a9647cf89e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "50549019a12cb97de6b8ec52b5033599"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "2f479a0409b14eb4cd28cfa436f0342b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "3be5bfbd54d342b8e8eca02d7097f01d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "950a1b0c4598843eb97d7f691211b040"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "ac307447d5bbbb1da403ef05ffee8810"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "ba42d719c653932a640af498ea0f7cee"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "20b8540bc7fae9e32456b3f94d050aa3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "169c878646c02858d643ae96a59b26ce"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "09f2ea605217dcbf6fbdca5a0abb6b3c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "69026693f327438dc0d5e907d537c56d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "fb856e208615ae830cc91dcb2ec76dc9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "d542cd85559933baeeba27cd32682b90"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "78fe70a0f13f0c167dc6e72ef12b7d0d"
  },
  {
    "url": "favorite/index.html",
    "revision": "efedd8bfca6ae54a24bfe907a2cfd0c3"
  },
  {
    "url": "index.html",
    "revision": "e8e1a6d3084db1d536da522ac98925f8"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "8157abf95925ce236314cf708fd330ea"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "eb0c07c0c1fb4ef43d2ef3087fa8a53d"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "9a4eac936fd25ef1b9d5247542cc9955"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "224c323e88e1fb4e8a9c62b05a4b3317"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "985588615734465ddf9a8e64a3bc3104"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "e9509e12bbd97673cfe77a78f5205f10"
  },
  {
    "url": "note/index.html",
    "revision": "af7655e28f17bba25082e109587c1bd4"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "8af71ca2ded3b4403e25c2020dbe7825"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e95c544960074b8740f6c4007fe2094a"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "7b2361fdcef80ee7b7c43ac1ecc104a1"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "6054cf40107a1cc1514d1a5a4a18a8ba"
  },
  {
    "url": "share/index.html",
    "revision": "69d39ea23dfd3e1842a1f7a33b7c1e82"
  },
  {
    "url": "single/about_me.html",
    "revision": "b4cde279b043086a95c8143e3f4c5d52"
  },
  {
    "url": "single/all_article.html",
    "revision": "23747ea2bacb3dedb97b60edb4fa49c6"
  },
  {
    "url": "single/welcome.html",
    "revision": "9a60dc255d1e958d3386ecd53dd5e082"
  },
  {
    "url": "test/index.html",
    "revision": "87414593a0993edb97940ad534f77733"
  },
  {
    "url": "test/test.html",
    "revision": "d39af07c25365d0b032315dcf632cc13"
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
