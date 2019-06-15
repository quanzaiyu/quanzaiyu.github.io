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
    "revision": "f62bf2e35c2b8589de228956a8d6e4c9"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "119b9d5202f355b3882f9c6cfa9e0fbb"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "da9d68e1e0b0c216cebcc9bf348909e7"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "54defdc3e5908aa41a26fd8e61f6daa6"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "530029ce6e5f0729afd0244ee84e6b8e"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "8ae895d0a8910d51d6c2e22951a111e8"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "e4e07aaeaf163681a7215b60f42d14c8"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "321ba905f521591932a6f12396098415"
  },
  {
    "url": "articles/index.html",
    "revision": "f1be0e29cd53a865d591351150a2dfd8"
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
    "url": "assets/js/1.3a7c4d91.js",
    "revision": "1876789c9a0a13b59ee1f80514fa462a"
  },
  {
    "url": "assets/js/10.0bd72cef.js",
    "revision": "a59cf9cd0da526c26f1798ca45da7b50"
  },
  {
    "url": "assets/js/11.ca903a74.js",
    "revision": "b8050a897f6dc90a9b064b51391e006e"
  },
  {
    "url": "assets/js/12.8a2c2f81.js",
    "revision": "de97c3d12ac8f41406f87c0a42f1c811"
  },
  {
    "url": "assets/js/13.a6017bc5.js",
    "revision": "ecf7a6d05fbcb13f19d18a524c0f5742"
  },
  {
    "url": "assets/js/14.7ca81c5c.js",
    "revision": "131aadd1978ccd66d11f75f104ced33c"
  },
  {
    "url": "assets/js/15.34191e4d.js",
    "revision": "59b245d22b40c46a3329a1370be64fa7"
  },
  {
    "url": "assets/js/2.644495c1.js",
    "revision": "7e2344ae75067f4837b4b02f5f3f5a9e"
  },
  {
    "url": "assets/js/5.e6dd924d.js",
    "revision": "21540779616e564ee694ab7ca932f40c"
  },
  {
    "url": "assets/js/6.de221795.js",
    "revision": "d1ca933368d6ef863ab502da0787106c"
  },
  {
    "url": "assets/js/7.6a2b611b.js",
    "revision": "9c84e68b501dc46b2af20e9fb2bc09fa"
  },
  {
    "url": "assets/js/8.4f682ec4.js",
    "revision": "2f09222f9d9c6fc3266a5795427f56b7"
  },
  {
    "url": "assets/js/9.1b9ce18c.js",
    "revision": "d284b852bb0500e92b8b9ed246753f6e"
  },
  {
    "url": "assets/js/vendors~docsearch.4f286437.js",
    "revision": "b398711466ad7bcf74773a2ae1c36af5"
  },
  {
    "url": "blog/index.html",
    "revision": "31c8d75e60473895da0707ba5f2fff85"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "a10bac7f00ec4b0920542969a44b3849"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "d8aa9c85068b8b6207df503aa1d0ef84"
  },
  {
    "url": "books/index.html",
    "revision": "7bb3c34b90c78f00ab0713eb6710e1bf"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "a81003ad3b7c4b4e52d2bd084e8bf380"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "a866f759db06f336dafe98291487a715"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "4dceea98623d54de99d7e004468deecc"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "e3bf28a56df807d944a624d6c28eb76e"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "050b9d0923e456fad83acaa69bd1070f"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "9717c0b274e249f761bf37ac5be404ff"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "243f3b49a3a0f9beda9eaa39e7b40310"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "eb62c5bc979e3275d162306792804de4"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "7ae1c496d94f178222c31ed7563b2afb"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "b5f3871239fe4bde250f39dd60819248"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "110b7a25ada22543a651a514340eae0f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "3b08ad052e3a790bdb569763820e581c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "9f8a20fb316a0338c9d71642c105883f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "1ed23d2b6ccba2196740c74e6859d573"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "40336ae144c96d72843c42412c6b6236"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "94968d64ffdd40f793780cf8d35ac754"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "2a6508801fe1d7dba0c0ad7d21017490"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "8191532d51308b1d382c3da43cec645d"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "9ca5e5ad584f7bfea6f9b32710d8f985"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "4b4d236c3c7b24cf69c92c866eacc86b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "9e21f0d2e28fa3439c18e9bb07f52731"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "e6d7113ff6451a2379132d896b1a1119"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2d8a215801cc68e321af42aca0316569"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "c62de796257fa98c1e4f2632b04b8439"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "aac84e022ff6a2fae03db968e2039e64"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "85b84815b98b320581b54e15db0a390c"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "3ac95637dec0b476c7b6de61239f7ed3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "c6a7832f3816eb34606741eb0267e6a3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "b333c19e98ce1b23a545a5c8773dd2b0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "9f1174c259a75af628b64bdece923d24"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "311e67b4e84b740ca02fbf6b3bac0f1a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "8f88a30a0366f25e3bc10dd127ded2e0"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "ac4d43e0148dd5255deb4a621570a852"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "365ed0ffe5b07f4943cdaa08bce1b9be"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "10162d1ef87525d21dd7879211533c17"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "baa403d436d65352a43522324234e8d0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "e61b35dd13f490faed9dd496aa1a5b59"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "e756c07bbc8fba80ca5aa95e196929a1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "0dcc9c8d546898536c6e1773a716d6b6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "baeb241989f03ab5359dfb7d39544e60"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "50e5ca987bd8b93ae3e38c21f139e918"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "638dd68e00fce1133e1ee959d7c985f1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "33aef3b96c8660bcc8878164ba72cf59"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "e9238c13cf71d3667ed71c4871e7dad5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "449e71cf0000348f7fa78edf42a12f8a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "a1912f2e8e326090256560b6841727b6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "61211306049421e77a34f07a3884e690"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "dd709626d4b9182935bf2d6b1623c96a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "03f0c4da251af8e41651951e6e820abc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b17c247a7d8c5c8128b76e51e29f711e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "b5884053f82a9327762d9bc746f907ab"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "06ed96e8757a88f23bea1826b55c0649"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "5eab97b6172b39164bb56fc727095721"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "10f2c2d6a7f056b6e33ca4cd0b91aaf2"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "26bd5f11c3c95ea1c2c378e1f84217b9"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "5c7eb2820043748c1378d25c64c6bf1b"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "f4c6ee865a8a24e62c07c51097b66689"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "1a1dfd2f1621c256fb7520425ff663ef"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "97d53604d59e2e3b9973e691cdefbf71"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "6283af073f6d48c0942d9883cd7032d9"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "7f545d25fb74f0c09f67a209531b17d7"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "10619ba07ad55c9304f2e92f6ef76a21"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "7a75a49646953cd342723d4bc597c959"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "1adb1b6ed8784b1ea1b9abee04a5606d"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "f3a291e045007c97156788fc274a35a3"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "09e102ce1ec3f3112e6b37bf40a18344"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "ece65fb87c25ff277de2d2911776f723"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "582275e27e854deed2c2379b8b9108a7"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0405ede7614c275fc46a8a277ba66e86"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "1a6e46659ccec136157dca7374abb936"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "a690083010adaa3addf3c2a2f9ed356a"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "962145b389b8fedae4b787d23713afe5"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "181a255ddb7d5ae798ef776f6141c33e"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "21bd85cf51f972fd628e5b13aef3464a"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "c874b4095f8d01c28c5483b6eee3726f"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "9fe679809dd7f60ef9b66f4ced546e38"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "6191f123a739c8bed634d97826bd6999"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "ce0deaec2d2e66161e3f6b5f70dcd354"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "84c7ec698c59c48ca5d82d0f9206c377"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "4f0b9f182da680fb0d455c93b2527ac4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "8fe8e49a957dcbafe1c2b8df432f9085"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "cfb95306116ed622995bc5984a130f55"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "b22cb6911c18da798c0e7e14ced4093d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "74309282c14cef07b3ea082f3994cd51"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "cb4afadf9b042f0e2447a1a82df3a22d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "537d4db9798344b479331d2490ba33e9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "44b92bb3b69551a15bf49adc0ee366f9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "fc33a9e9052ce2d1c430954c470ae045"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "c0fc5047536c8dff9caca6ebe812bb59"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "baa37bbd7d2a46f6044be319a1b5c528"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "f95204d6a3f63c1da4af3ba22d748099"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "ebfa3367c48f56fd6f77bdd7fcffb09f"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "4113d49fa38111ac5cce2a39896f189d"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "0e875c7142897178511e3cb881462de3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "83960e342b8718bd61f27d55fe712d3f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "ae23b753f6ce92a7480bfcbf54789bba"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "1a86349f0286f29bfb58bde3e5472448"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "6b84c44c2cbc751af7771deee0dc32f8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "a256907c908a373a9ec8770a779b2665"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "98c93767ba2c672607e9391cf3dd1b73"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "0ea1ddc11d018cdc20915d2f2a734aba"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "a74805becf6936134af64ba7afbb7d1c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "5597f4634f61777d5777b3c15c5dca5d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "5367403a25f6abbbcb31b5b6540cfe11"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "8c6d8e6200f2d26a78136f365f48d8af"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "36cad240af5294492896fdbfeb841955"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "06e1574d3e403a4ccefb117126c479d5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "2549fcff89281dbbc5e49eb71c37ae44"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "cf01d0ae8b2b000ece1130312b5b4c69"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "f7fadfb8b25b6788ad1b23784a997212"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "c57db6f5bbb84e08ef588583235ec486"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "df1ccb4a0171e93f8e5a9b15944c22eb"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "4f0be99d62962b707eb345624e3bcaeb"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "14f4003fc92fff8166ca5b960011740c"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "e20ddf8c65cbe0b8019e76aa857d4880"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "37e608987195015f04009ef4fb7e0df2"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "dbfdc32e22b84204e00aac12dacac5a1"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "801fcc201d56cff441416d5e0045af94"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "ad9b27aecf526bfafe6fcbf585ac1ace"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "963b23bd9cc04006c6b2c515cdc03c46"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "bcc271e951c00a1c8d27039b9ed6a23f"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "67547e795df890544d87d7c2dd0b512c"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "fad187ee7c7c9f0e9927562baca35841"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "166282599deef0fa048451dc4708ee0a"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "8e8a8f07f710417a2d93d1d629ff1884"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "a254bc50d74ba1bfed7729616c6597ee"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "6f7df7552eee72039a46b15abb17d1d9"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "cd24d7ba1a0f73f6619a40d8f6f5ad81"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "38c515c445c61b4a025a4da9966ea90a"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "aaf43f16a53335f0b1166768948110c7"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "dcb6c503284810147d12d3c0a0e9fbf3"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "48624c1fa1e7ac8cd5daac499e050a25"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "e4a9d67fdd58124bb2bcf82ca8edb135"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "81eb6cf8d037e82c9e2e05c4a49d9fc4"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "624b1c6cf17cf57c2bc667163f378036"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "5d67752e57d03ecb3c6450589b914b9a"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "f3ef8dd40f845c29d9fee89fc1a7f91d"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "02a4a9c20b599a0808a8ee44efc5854d"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "e8e304a0bd84250c5878f0e3d0a57c63"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "f5d3388d196c811fe0455a474d88f4dc"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "1803b97e0f5652c2072e604a02e91a24"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "2ce95ee5a17e5d619617db2666e07be7"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "4cbfa452d45c5f0eaf1e154925a3b29a"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "9bee9c0454cbb0e36e978beba3e261d1"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "897d087c76a73dd2dc1ec7434484f1b0"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "0f07646bcd42d03ce0fdfba868841e84"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "2ba22940d8c0c62997e0d671836d8992"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "f83bdc564b0c5b1e8f9ea9608b6d903b"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "933f670093d08711087de962157f5262"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "fef501e1e47acf8ee5e5054a7f683520"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "40362306ebf8ed4a505e3519b5b1ef37"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "5a521087d1c0891b64d36256de9033c8"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "e62a9fc13779e573a33f47144f56cb44"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "461a350c374bd1bfd1642a664c324306"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "a846f1d8f909e309b0d1bbb11008a2c6"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "89924c7e64269e7bb8ad2c5f139a4907"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "0c850e0c3f9645bf0ba7d7d082b36368"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "b1757fe7f7cfe6a440abca0236e99706"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "484b2c130755b9fd96a6988c96ad0e77"
  },
  {
    "url": "categories/front-end/_books/typescript/Classes.html",
    "revision": "11f66db25f770a4299f50c00450e2268"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/Accessor.html",
    "revision": "36568412d66b3284a4ccd5dcbbc1cf60"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/Attribute.html",
    "revision": "dfc10f940417c5c6d7d8d7c3059a027d"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/Class.html",
    "revision": "eaa6b527fdd75e9eac4addc38ca1936a"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/Definition.html",
    "revision": "1f3617c72cfb03035917ecb36c12fc1e"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/index.html",
    "revision": "3ce167111207662c808610e1093b7526"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/Method.html",
    "revision": "fdfd39f1903db6322990c32b059533f3"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/Params.html",
    "revision": "47b1138d1f6ed8f815dce5f99b138cd2"
  },
  {
    "url": "categories/front-end/_books/typescript/decorator/Sequence.html",
    "revision": "9ebd0b5db5887dcfec5ffe559e7c15d3"
  },
  {
    "url": "categories/front-end/_books/typescript/Functions.html",
    "revision": "0c3e9a785f494b2e7a72017f73eb55b0"
  },
  {
    "url": "categories/front-end/_books/typescript/generics/Classes.html",
    "revision": "49597618558750fd81e716fcaa2ae603"
  },
  {
    "url": "categories/front-end/_books/typescript/generics/Constraint.html",
    "revision": "63f56a9be5356d3a725dee6ea2c1b7d6"
  },
  {
    "url": "categories/front-end/_books/typescript/generics/index.html",
    "revision": "04605a27cbe30bc4414426016769275d"
  },
  {
    "url": "categories/front-end/_books/typescript/generics/Interfaces.html",
    "revision": "5b6e6bba246dc17dc75a236517f7508c"
  },
  {
    "url": "categories/front-end/_books/typescript/generics/ReadonlyArray.html",
    "revision": "461f806ef9b1f54134423ad246ea202b"
  },
  {
    "url": "categories/front-end/_books/typescript/generics/Variable.html",
    "revision": "2a8ca098799bf7c0bf673b1e5c33ae49"
  },
  {
    "url": "categories/front-end/_books/typescript/index.html",
    "revision": "9103d034b0eacecc2362439a11d2935b"
  },
  {
    "url": "categories/front-end/_books/typescript/Interfaces.html",
    "revision": "097713c4e9fbfe09330a94edeb7a5080"
  },
  {
    "url": "categories/front-end/_books/typescript/Reference.html",
    "revision": "d3fabc98a2b92d56a87b686509785078"
  },
  {
    "url": "categories/front-end/_books/typescript/Types.html",
    "revision": "93eab2d88fcb7e70ff6ac1eea0a94cfe"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Any.html",
    "revision": "6b38e28dee04f704fab6e30a3f9a4ae5"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Assertions.html",
    "revision": "2ed8aae90b7769ca08c780851e89fe78"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Basis.html",
    "revision": "c9da783ed62d3c1f6b1f8cc29d58f22f"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Enum.html",
    "revision": "bac39e2d27b7510251597af15bc03f03"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Never.html",
    "revision": "cf705c4276554d2a0f4e81a4fa8e35e1"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Object.html",
    "revision": "0b1dd7fad3cdbd7ca345ad34465d8fe7"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Tuple.html",
    "revision": "3eba90e3ac59b4b3a1ff9584ac689b0d"
  },
  {
    "url": "categories/front-end/_books/typescript/types/Void.html",
    "revision": "8b19194af6a6ad4df7087cbd381a7690"
  },
  {
    "url": "categories/front-end/_books/typescript/Variable.html",
    "revision": "f78718f1f1f7077ca18c2c663541970a"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "00f06eaca27aa9e14ae7317bc6c98461"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "d53699afb918eabae6519bd18ccdab7f"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "db996795f9dcb9921e0c2a3d9af42f77"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "545b6c3395e83ae1e9d142076747a877"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "66a14d3eff2b849691fe73b6bfa65970"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "d761c6354f851b35a2e494db09349718"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "30432c586a04e469627a5f595aedb8aa"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "fcc32fd4fa4bda1e871a7468ddbca796"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "a55083f497cf80bbbefa2e442dae3127"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "66799747b872f5ce2f3158615bdb8edf"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "e20e8f1a8af7f6b4e2d683064370efdf"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "67bd121699187380592069988f5f0739"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "af461ccc049be60dac24952eb574f3c4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "84048492596591fc327de056916fdce2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "815bceaa1749963076f1b2cfefaa2885"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "e9366085e17c65de1684917add6bc19b"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1b687d1ed212a1fb0fa2dc319ea5b536"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "8acb8f030c410e6e4a28fa0e2d71beba"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "1a9bd7f6bb6d7db3204db0bd7c26d705"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "549a8f76ac374a75f0b01654454a447f"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "667f766905c3f2c937719822853a5178"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "6aa4d921faf417849a5abd86c14a442f"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "9c2cafc20b0efb0cbcfd13fa46c0e957"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "8a09b125bccf2f4dc700acaee822ca3a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "711029812d890cb2eb8f4d4388a6d5dd"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "6ae47163c615c216d1fbfa695e5758c8"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "ac9217d454b8b50f80e3e1d0b7fcabbc"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "3ca02dcc21d757f95c1d1755646fe0f5"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "2cbbcd6eeb617c176083a3c604bc26c6"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "8f8dcf878928ff5dc1cedefb79d4f004"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "cf84503e780ba5ed19ed6c5397f5da48"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "e8facaeb5922f2da5b6a0c676d9b7139"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "9a70cb66a4d2fe6b5b5e16b5151ebf33"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "c6e0eee1545d8eb42b32348b215d0754"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "817c32ad601ebf1964543b20d1b32063"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "8d334483881099ada96ee1a9deeec51a"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "e7d301784cd30ff99e0b63452bffdc2d"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "5c73c694b28426c25d9a14c938f5af0a"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "3de8ada3265773f2af92e5e04d46a907"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "499ee0a68548d0f66e1989201a7e976e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "be5b21974dd3037dd3d365befd0f35f7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "0af3dcb45b7bfb83f869ad07797bdbb6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "eace1393c558d1d0a6beda4a5af823d6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "0db929ea46f56cdfc1234878565cc8a1"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f74149f70d7d9a4b24db1054342595f7"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "f25d3e5ca7ccca957f7d91e9f039c960"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "9a6e1979adefe5017ccd33a023c465f6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "318525629fbfbb3b2b32c1198ee924d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "295f4c84ed64ff69802cc5d4215f9cf8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "722cc4dc07f38d98d5ad90e7770a40b0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "0d6c1aef21de9459c481766967509616"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "6773b2c048a7918302da97049d981cba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "d566fcb8466c5b57bf25cabf23095ac7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "7adc7d1a4f5290f973823f076c5c155d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "b51f4ae98b868458252c3f9c2ec114cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "c68b85b29fedb99cc6fcf4eeaa368d78"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "6c3efe56ee241a3c09ff019a19cee604"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "49d3a8b576ee4905713eec2f513f51cc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "92fe73ef09a932d5657d1312c5295b93"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "9b97a074d44ae2e5c7ed055255b75220"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "f2096676b6c196b54259a036509c6189"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "e4412b63e4adc0f5d6eb8fb622db4da9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "b0a362c91d53b835c00e5968f69a0526"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "28b326e3f9404a361f0869491dfcfecc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "764ab41ea27ba5f89a32b9703a0a5ad7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "7b345309d7624f5eead978c43e106fce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "2264b3d1f3f23729b69f76d0e57c9df1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "1e8984ee4f74dcaf19cac691b7df9cd9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "fac06a72add98ba2c0501ca545e43f1f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "9932f9f9b2fc57567d71ead78ca3745c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "a006d49fe1b65c288facef8040cfc065"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "ac467cf4eac5a2e0e3be6cc42c26fd5c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "ca5e3d1b04fde8e9f2d33e381188bc1e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "3d60f39f2b137deefe6f5dcaab88d0ad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "b96ab750e89d9682b7d1b712323bc69b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "ac18d82d5a0b02ea5feb197c6f9093bd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "8616371dd9e14ea9b875a8dfb6ed0cd2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "80ef02550adc221d5f78f0ad90f4a30c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "046a654636c0feee41fa91e1bee4d9ec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "c6e38e66c15254b0d356b9689e46e88f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "c8c93667f7a903763e34834711d26ae2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "1e6f9163ee5d0469bfeb3df5b06826cc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "5660fd47238b3bf067624cf426166a2a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "0960b1862729cb4f61e5756fd01000f8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "51c87439f9df938825ab49a760184ced"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "ee2072a85af5b82f3577ce0989367d58"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "aa433192519f858eb21b1d717029d795"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "ef852970e418bc871c82c11e4465de61"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "c732881f3f0b74b1ab09936c89948d15"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "bbc58c3a534db8e91ee23575671ee783"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "f649aa3ff7214db1444500ee7bfb34a6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "955e3f8153fc8f2f6c276a422a739cd4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "336df6d992a974631ff88d98c3104ad8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "ec3d8379ee2de3c80c244bbdfb418025"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "c92c31415b062fd26f473f7770fab289"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "28999a4dbb0403ead62b73e0337104d3"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "73c500bd801d3aef9df99e50558e1fd2"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "b7f70b22441d08d970a877353c30837c"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "668fab2001183d91f8024cd0851a89e5"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "2b4ec20f13db540321179aadcd063ff0"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "13869c24e8036361078a9eaa3024bbfd"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "8f223e2dcb9ae8cdb0cc074e26e6ec21"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "26cbdb5691ec6df251ae06cda5890cfc"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "58c40cf6931dbf039c2ab09b47d4156f"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "f554904641e238564381a7ada85ce4bc"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "f5bc5990015ad865babc5eee42239cd2"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "0423850302bb040b77ccff64f66922a7"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "160fff3976e1716401ed00810394691f"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "dc66a88607629b6ec3c6e54d7f87d6a0"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "26fc429c7e39bdf02171fbd7f662d9eb"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "67661dc688c5e1284f275a66e07a6666"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "15589880a0b6e4c19d4ac5877167ac5a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "b8c2f03a308ecca8c511eff344397a03"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "e37735f29b2f400820815091426c64ac"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "80ade14312ab0120c3faf7ed5d49561a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "38c5b2956bb01992d065da1c74407072"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "b139f74bcd3ed10cbd61c0b2a024b70d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "1225db1571c46103714a8dd1d094f9c8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "c3fbdb13c5fce60013582d57baeabe86"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "f2ca38baeea1f1e4797b2dbd02a2b42d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "3ab0b5f6ac669d3ea87a71c34044f639"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "f762c35206cc316d0c1a256928fd6401"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "b5d3bf62c81320226fe29b24fb50957e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "24586da661af4f00b572eb5c06774499"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "7252e7dd78c28288f01e3f25afd57735"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "abbf39ce7bff013eb33825107d3d496f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "45880e8c1c81800241bf53180ba0f879"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "10fc1e487ea2ec28977601f498ac6e10"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "e7f6c0c5aeed42ced52e86078debceb3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "49aafdf8a1a8c5f6b03b1a76eb0389b7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "1b934044f3f451b7eceb7e8b7a4f8d93"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "127673c1f63b73349da4e2b0f7ed9d61"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "d824d1b39750b6c4f374f9db28900f30"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "767a73b6563cb852162e633a66427cfd"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "005b0d7607f428d32473d0481f418073"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "952e286bd532839ae4a83a5e0f2338d6"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "11bf75aeb39ad96ce0e19223c294443e"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "459648ed9b7dec5038541e5434ff4aba"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "f8a968620a3bafd5506989c55dbea6f1"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "6733bc971aa128d7f98335eea42ab9cd"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "08c7e31c5ffda6ad433ee79bcf50e95d"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "3df05a307b95d051f81a0214422008cb"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "84d425baa1480194101828145725a475"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "b8da250aa06a9813693ffa9b0b138915"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "1435cdb6d7909e1e1ed0d012bd50a5b7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "a45beed7eb27de9a8533b283b16b293a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "a5117df24d6acc38211069b3965fab36"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "67d1d09e5a268a1b7fef8a0f18eb9318"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "1d66502c9be6f4670324054abc7fde18"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "139e09879243febeadc7ebe6f9100ccb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "10f1c992e14ba438ce2333726ff0364e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "a4edb60298b681e7e7b54c065d617c63"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "b84db4cb90c4a73f481010936989fa07"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "2e95233a152997d8e20e5f65dbb8c079"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "d5e2419fd0a42a6416e1a76311f1a99d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "13c76f915a0c5d82a115e76c94a28fad"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "19400604e52d3ed2f6ccb87a07e95bf1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "1a1946592f6081ac4703370aa4f85c1f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "df5bf05491d828905ea99715abb1a32e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "3e13faae171476ba6d603542a5790c8c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "2bb54a910260e5ba078f478bcdce7a38"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "4721317aede85338f0bce8fe4f4ac1cf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "12f17195d0c2a189f40223a01d58123b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "96a917fe1741da400f8cd2c21dadbc30"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "89e05f5bc3078d05bc01ee9cfb2d3949"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "b6dcb5c094ab8222a29a1122a4bf90a0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "28397141162e0dfc0b14a4eab5e26c70"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "769dd02ebe000df6f702d522f0fb9f98"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "25ca17c27f5fe96b2dc1812269d564ff"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "2a9402e7a40b029f5e68f21f84d7e242"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "e73f257b12e4592e400ce2d0f0f02e88"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "588258bc89350514532937691a3ad556"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "089e391fc63a726fa0ea90efd1e766bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "0bb2e59473d1172668e4a348817e0311"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "44a3a11f8feaac99dc96df2bc0e87779"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "a3c0d9799b2b31403646b1d9e75b52eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "9e626b9b4f33558ad821c81835d8d52b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "add4978ca0d2745a432b712bcfbf6a12"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "5ced01ac7dd6f68415118daa59eaa5de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "cea35de21ee72f2ee5b9695d145e1be2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "ee0c883665e57dca63fff8b26a1de2f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "679c83f328be56744da236d2b2c475ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "89493417d3d65906cd68c412372e180e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "bc3b413607a7be8eec3409f8a623d101"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "c7973a5a39a966129021855676b064ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "364a7ae57cf88254f436757cdb8b77e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "dfb0a7a363a0270ced75a75bd9474524"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "3d67156f6a262803bbe40cb049bc1828"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "7b6fdbae2e203f5992a648db340ee875"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "10c0873b1c0ef4d1380a923d2322eb2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "6c93d55b4a3e9bf72d5a197fcb17f3d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "8252f4c00dd575fe7d1bf86d4e2e41c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "31f94ed94ad05bed0d4c3be58a4f986e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "96eff2d7dedfb32eaf14a22427e0d301"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "de5dc90a0c10d45d6671cd2668dea097"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "68b6898ea0b1db418839b9dbf164f5c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "118b5229585f4c36bb52c70e8bb542e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "ade0b0033dfcb8f9792597665f8077e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "ef4b8dd762437c23d31c393ffdffa3c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "930c9517dd170e34fe1207a601a6451e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "385129bc82da73d2e27a372b3460456b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "9ec8f239b83067d839dd8f7e2f63bdc0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "2776f9ce0d02097b2cad6f917f834411"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "f8ceb21f57d25486b3b9fdfc913d1c8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "e3a21fac09c12b3debf31a4c9eacc33c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "fd05335626a3a49984030a4e23ebbd23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "8b03818e79b915932af4d18eac92ec2e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "0f17c158d3ce4a0f497222009c2dd81c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "4bc1fe63171bcf7539814953b37dde51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "d304f35179d73fbfc27fd248513ddd52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "9b6aade04d0aeda5254fdebb39fe29ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "4bd2a13b0a33a91180bf15b686ef356c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "0b0cc6024adb8c47ae0416695ee616c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "edc9317eb12cc6d56735d2b85a3272d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "6aac0bce47f54d0eba554fcd4ceee87d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "91a0d56cc299090b76ad71f7844bc402"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "4de2853e9886f3d48f4421fd3da3ebb0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "415f449e826d1264bfdc6105c328c966"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "609c7b4e777852efbadc96d333ae4f10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "2af674023c3fe5734b7e8daa70da816c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "b84fbfe67848de29f6ac02e58e68e00b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "c263ac2efeea23389f4d7c9a9fa5a068"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "8c6b5a264f30ec2bb2e6fc506362c043"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "a4be52440c645cfb650482be90cabafa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "50ca93ece74847260aee3b5c853e9d41"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "af2a6728188a33826cfc7666abb99f21"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "9812577277e9116650a1bcdea8689ca1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "2e4490aef64405cb883a5ebda6b5b8a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "035b67ef1ea763a9961b8771875c1460"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "18d468482821a86e45f06eadf79f241e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "3053623047f4e5a76fd40c4d45c772f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "60a94b66d21bf91c048fe12c4b19b784"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "32e1293d4e378049664581aa0e82e01b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "75edd874001e80a0e713493918623210"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "25042492ffa7644839602308a2711183"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "8d332bbf66f1aec69cc512ed850d211b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "fa3b95099ebf8b073f736e24364e3124"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "0b38efddad3f09a8844c8adf3ea79845"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "a9fc7603cf5d258b1f46d238e39b36c0"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "fd2e12b1b2d729417afa7a0e36ce3a67"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "792c7dc0dd8d69afe0a55c119f25b7ad"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "b3ba363e0cac901caceebdfae4e124ee"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "ab8a96e4f27643dae63e00e8a4d3aa76"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "e528ef6108fcca1f749b9bb006f14ffe"
  },
  {
    "url": "categories/index.html",
    "revision": "ee4da33b10a4e7cfa6a802ec073bfd46"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "8e7d5686e55aa360c11a98b4d9720cc7"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "96f9509ae04cffcb2bcf99b4cdec59b7"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "1e12f7db1cb7a02a6a82f999439b1235"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "4fbb77a7e531dc57c799ff64f06816c2"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "26d745ca8cff861348e3766edcc21cc7"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "bf409844d309509a38dcfe14363e4bb6"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "06d34be196ed38e78e8da662cd184784"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "639f2d248f7eaf3edac8be2cdbce9766"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "4fc80cdf73c6808a7eebe49ca0f53f7f"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "7263e2594b8d752bdf0c4b02821aa511"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "036662ce517660bcbffb535f82708c40"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "283fa3fda95d6e2b7bc36465691c12c6"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "e62b4ecda35583ba7345f180f006c9f8"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "1a723572faf32045a0c027d7681e362f"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "72d340f537fa769da299de903704c85e"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "cf3e005a67bbef70f18785a7a9588e6b"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "31e2be19711a6d68e099011a4ef9e0ef"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "4ab399719b184b225b49f3a749fa338d"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "449c3083083c3e4485aec7553bf95c93"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "802ffe874515f4a725ff8151ce10f8df"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "b6129e8b98be2d381379d59f0c8e1293"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "edc76f97786ea21e2b7c4ffaed6eface"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "c827518fa03dd163e047d16b23d87f99"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "8d0746e0d72a19bcc07a5c0be3f0cc5d"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "b2ea3e19af14d29bcadda7e2da1b231f"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "cee9373a1bc43381e9ea9d14cf8e6094"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "cd115084a64d7156fa16c7adcf8339c0"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "c0805456c00b765d01c9f58b7684d7d2"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "9daac520a82a6c634a4c5e735ebf2de9"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "97aed097ef154e0886624d41d814d310"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "8b8c698fc8d116d2a574488d1e4bf245"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "c1af2a19c8a9004771cf59348999d363"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "13ed7751256930c7fe26bc401617fa89"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "8e44161b9089a878814ce6161edc8312"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "cd55554d18e81ffdbbc51039029d88fb"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "5b521e66a3aeae7685f87424599b573c"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "c87c44331cbfb6050daed8d85ff64f2a"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "92eaf1334fb93d48edcab6bab0f3b0e9"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "1a16aa32cca0c6b4d0fac7c3902bb2a7"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "8010bc4444160f65990d3a523448bc44"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "5c95029ece4ee3d096be3882259bb04d"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "012b19b54c9cec7329760aa81f40a163"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "085a8102fdac379661063654c0e6aa3b"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "643ef09abcee424b8e7009e1e20e295f"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "2182c086afb35341abae8a20fc396d59"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "b4d020f1bc2fbfcbbc4d483562170755"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "aa506e473d7754eccb91596f19557815"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "44f402173ada9fe353cc451e9cdf5168"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "3194efb581c1c8fb22fdb7131a89fe65"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "1f06cc98f53c513b8beada364a33e18d"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "db1d7931c90b17af10f9db099a143447"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "f184b3e11dc8d50b60eff12d2a7b2612"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "5133b7ac88d32d87c636ad2ed7a7f816"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "486ab01bdbbb080cdd514e7aa30f7b69"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "30db9bed6066c1b0999c3773b0cfa676"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "c686ea0a192b92de3bfb2509b931f2a6"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "01dcccdd5c0d913ef82e69f4181b46dd"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "7c6f54a45d2b540a89547c6a8152e0b7"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "fb93a2837c39f80524d15c3fb4ac972e"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "f947628282b2bf52764e6860733264a2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "cd4b95fb9a71409268039b5d696d3dc1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "509d73b26cd132c437eb1167e925a691"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "26c9be9e4e307bc1a70e2979abf47f47"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "10fb0ad681e5b910bc7ddfecb5628d66"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "915ba153abb52a0f85e516ad81a83beb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "f2bdc82c852e62e2b7653d294099e28f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "9e020f714831bc026dff15731c890f2d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "e7f703c0dde01cbe41d0c0f0c31e50ea"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "18c2611a3b8e269bc567099e40e02a4c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "f4a4cc4dc7b35d95a284b646283e2c3d"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "2d2cd6f493bf26fdc79282ccbfbcfcbf"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "cda991dab73ebd78d3fe6e01f0829562"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "8a0bc63f3fd30e53d425fc81612735dd"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "96a19a2e52afc58a52e585691f7e64fd"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "d3c8e6cc353b99b159a2d91db2e8c705"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "ed3d670546daa7b146b8f5778d92055c"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "cb807335e115b3a148608d7e4ac4f990"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "b08ee96105ea35020da14c69c90d8977"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "ba5b29322411db4a3d21a431a1ec1204"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "5f6c43ec6d8d5e8b4e6d328e1405b052"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "e095088942dfe51279b09492059470b7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "03a52c226a33100f46477d3859261e1f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "9b1a109f3ca7703bc5534bcd99ffab34"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "4162b322f684bf934b7112402c96cabe"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "bd0ce4f49d8918ec25cba8711d2fc043"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "28db3e80ace2bb7e5f5764a45d18e0ce"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "d34f4263491a2ad12278c9f4ef211671"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "151716d068a8af2931e41ce7170f357c"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "7e0c5032374b30bc82dc21b55f54e4c8"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "0a2f6a7d5037ed55cb46917d2926312c"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "35a73000390658bd6f50cd15abab862a"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "a43d9af874213c2dd4dd8becc0e1fc7d"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "51e9ebbdc5b66c77f3b77159c3c157e9"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "b76a4a4d50cf8f61812afb0e9efdfa32"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6143a01d8f2492f56332e81a261c5adc"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "e76dadfc5ca3e2a3beee4e8136ef0ade"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "e3c0f1785996e4e215105e05d767752e"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "0d8c6744ae85bc2db4b71ccd7d7d547d"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "3f72970f9908d372cd2e51380aa30175"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "3c75d530fa2b2ab5b034a249c6015fff"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "cc81fc7bda0a13c580f436f9c7188a5f"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "884bfddc6979405845156c49c3cf40fb"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "5775900c60aad5b16da2a4d17da183a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "b8393b6b89147f217973dcb6301d08b9"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "71e6e14ea210a3c054e864896517fdb6"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "d24d5cdacb133d618ba97083d1a4e47e"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "c6344f3433e11045a6daa920da7d09e5"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "b3200e218f54350f256dfcb55a913915"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "d0cbf61a387e9cffbc284c824c834dec"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "da4a6439ab9fdb7a64b6098356a8405f"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "50571b69349dd87431e4c02749be5c6e"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c02f1737abcd5320ff602d24cce4451c"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "ad86b7889b71d98443453cfe5ec77d89"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "94e038ccff91aeaf56abe41825e8908b"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "7ba2a4b9d80cfac5353f0043f3288e84"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "238da3fb4f82c2b4d96f2f20389ce27a"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "40ab24dcde23d21b094da8d45d5706c8"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "be6a96388dc60e963c67c35727babee6"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "d88b9d76373f8f5d00dee65a3d63a064"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "c4889a1ea3658e00aa1c490471702f12"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "d917a3469a6938754c11426f5ba677fd"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "f8e1889a046b7e80472637431c5a4528"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "ad276849923699b781370594d036bcf0"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "c5320a8f798bfe756709e98354bdeab3"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "f94f7f272ab6feb0cc2a4802fd79de59"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "1d3b68c8b6cff802b83fde279927c811"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "f8a877b2fc370b06b9f890db2a4872f6"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "67888f4d20432eba62fba089b53a4c81"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "4fe2278e5c9327b2d407bfedff8f50d3"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "876196999177d5381b22ebefe5be21e2"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "8b37875aeaf51df3ecb1852421f72e88"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "73b4d49df25ce619efbda014c632b15b"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "fc21e9b9d16908bb17ff5aa780a20204"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "98a21d91b069cc44e14dc2962097c4d0"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "4b845bf13df0718aabeaa2491e771fb1"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "b6e65052b3682bf63d0ba300e197f055"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "ed7920cc3faa8da2e9ef7b615d6b2112"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0c85ef472b3057d0d4414bc3934935b8"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "575845331ea82ae9f6ba9184fe6b15d3"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "0688cb74679f2f23c289f81c53890d0a"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "0cdc1bc6738660585159de8517dbc5bd"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "196ca568abe1c1026b5d7b297209f561"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "a78a556266dd848e5142643de8e65953"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "130559c2f19106a844628f040e7d95fe"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "8d40164f0e855c1cc1032b07ca216491"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "258573e616e986fe5c9b0e8ebe168524"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "ab8af1b24c1a3b062c467bf9fab8c384"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "cec0700d038947bab5efcf2d6ef511ac"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "20bde9c98932700c7d469efb468b30b9"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "726865791505529643d93f3ad13c2665"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "b9f8b2fa64ad41aaffe5bbac9cbf3c6f"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "daa2340572054332a22088f4b3b8269b"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "b24ce5e93243216b3b1ec355bf8c5d47"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "f5be17ea52e54638ead3aaa5553c09ca"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "24b737f244bd9d325fac7ca68333eb3f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "d1316aabc48181b9c68f387d35272f0f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "5be27fffde6e298e9a2b3085017acb00"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "c4fd95907f130a889bf36d693fa9de3d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "1a11b3fef06ad37b8b6f4dcaff9ae50a"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "bc8d1891bd143864e7f5ea052a729b56"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "4e23a7e9b7964635019dd6bec48e3b21"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "54b306070ffb931a9c9ed76b3babe63e"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "0fdc8cd3662bcf6e25dc1e3333d4733e"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "b3ac92d7ee19f43ccd7ca01e7c7a9374"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "d0cfa3ce70feb9016840289cddf2115d"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "5dea62e048ff90b04ae1b1b91630da01"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "d430152075642c2c2a6c1ba23d242fd0"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "43c64075d6b3981f361f337b1db025b9"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "13778574f86d0e68ee506ec522a106a9"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "5b409b01c725f16d52afccd9cbc4ff3f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "128f675aee5186abf888759aa96b159d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "cfa8fec6d4b0016a10103744cc77492c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "184ec37e2c8013ab246df8ccda26589d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "b8b5f7b8e668bc20c85ad80f22e7b6ee"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "bdcabed4b4d4836aec9cd454111050f4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "f664b4c8ed8ebc23259f84a0f2faaa30"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "ba59e975cb9c8415a64e950da0854da9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "603e0bd659935285d74f288aa6e33658"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "dd3808f0802c01fb3473c856f5f9405b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "7a9a93d16f0bbdb11c642348b468ac5a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "75a3970580e9defdebe3d91fc92f2ecc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "f604774a306efdc9ffb28f8961d3b2e1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "3f531c064b28bf7ff99521aedf1764ec"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "504eb7a78b3ea4da81b2d8246722aa20"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "0fd2252e7da77908ff45c09c9eb9a8a3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "3084ba1c68b66044094afb2c5d552cc0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "e8f73ca7160e3fcc7e72a55596aa53a1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "d49c2069bb5ce6cdd4b03eed24b338c6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "b9d49d5ef6ed7d070ee6267ac360ba2c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "4dd3464e220ffdbacdf489087f60cece"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "2ceab34e095b1ac45fe5a7cae21bd5d9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "c1932e729f1d68a58e1fb4c1c333ccf0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "040b9faa990caee444c0bfde37206a34"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "eefc17bd84a12ce75e6021ecf4da3643"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "d4d5c3922189d5f10d36c80a8a3fd93f"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c5e43cff3d62243ee58dc089e51f6952"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "450356f1414b84a0a964a63c7d78040b"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "b58f9f968b23922ba2fabe6a9a97760b"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "673dd693ab900a0753925fddcce7e0d6"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "37fdc9f2d42435519d7373d959e7711d"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "3e11a6653fe519bfc29337070a383424"
  },
  {
    "url": "categories/os/index.html",
    "revision": "5fc68aa72695baf509d955beaff542bd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "eb35f3ccd6b299fdf9df4672c77434fd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "3ecceaf2a4eb5172dbae0d44802730ec"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "930b20a3a8f6609561aa853037d73f1a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "b29481d1af2067ca88991a838019abb8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "c259d50fc090050c6efcfe1ff935e141"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "178a976be4cd7aa9f21283e8f5b7dae8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "a216901dba0f4c9e93e76f911b043f3b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "1af23eed51dd65d7f455d3001eb60993"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "7ac7c9c80f518057222f32ba6f064a8c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "e828398c8e3427f74ed9d8e9f172238d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "8aa3e20005fd539e2138ad442e7ddd98"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "238359c8591cd31cd9d39cb507432600"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "707413e60e71fc274e7e6c8b44c3f7d1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "c026cfa2eb59e7b226d2f453519728a4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "509af8d28008aaa04e57d6782be0c873"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "4d6e484d18bc0a4a50c51de2c96088a6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "f3de894b161a44a24d19d047c56fe7cb"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "d3a20ee4faaf7768d40728511ab88e4f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "e353e25e62cabc3426b6441a70559f9e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "82b991292cc808514ba5686999757558"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "da1843b24d73ef78a29f151c6feb0387"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "1390669aec4c79654d3b056ae75aa567"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "31ec5e1e8b674e3c0bd8b617db41c793"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "f9375a3dc59cd64dd7198aac6f820181"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "f73900044c426a85a8ace6d855d5a620"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "cec6c6aef9b6a827d22b6be92ed47e40"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "d5eb89c706b30bf6bcbceafc8378fdc9"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "7e97c28af1a907288720a32e9409a2d7"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "947047a563f9fb83e59f5034437d5267"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "2fcca73573528c5ffc5ffabd4a535350"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "4f15c66c3d1b2a773a3371e3209e120a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "29e52c0788c7805d1fd8357a270f6c7a"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "58f3954885f9bb5c9879ee17f9b0f585"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "dda48a83df4840a6d8b15e9101bfade1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "e6f64c3c120e5046807ae79c9a6d14f8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "34a3bd6e73ac537c85e0c186c8b03f40"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "9d1f6a4db8aec1ae347dd5e9ca825c1b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "893ceef5f6f6bb3c47ac9c3ab8af13c3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "5c1ddbec8fbacde2d0de11c7923fb7f6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "75ba27c3f166684c2c1dc52ac44bbfb9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "83e5214c611268b4d0a1514b87c4f81e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "226efa12b98d4be5434336900c46fdec"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "9d76c6352c9f50e5bca25f29cf788304"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "5148562bab035022dd40bf977e3bf9a7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "de344f45ea0ae1dd8fe35e6486834538"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "53339deccf6eda84c3ee0aa6f797baa7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "2d4016cc7183e5d8e30be1ec12de5b01"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "1280c77b1912c2c56c94e141ec0e6bd2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "d2190f039b0e22a8d206734e652a9ae5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "0936ff9b14299bc21223bf5e211a1827"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "faa1ba70780c1a0904adade17c602c71"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "b03f920648714880385c2c901306b5d1"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "8c20f9dad787178910dfd5f65cf25953"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "11a0e64efb70bb4f9811aa65e59c9869"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "3fc7b3e4bcf45ae35b8ee80055c1a274"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "63b37cdbacbfe518395abfb8b7aa6f37"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "98f5782577be589196a5f59c111de19e"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "a35d6015146584b76c9ec69e7cd4943c"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2dd5af23f3d83d297baa42f855b7fcc0"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "46f785ca97a627e85183bce0f9f6588d"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "02a2fa0d017763410681ab3824d8fc80"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "aff6231830ce2f08ad52b10e793b37cd"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "15d175c2ccf98575b37bc247b61c9f67"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "4f03fe08a1f5236716e7e42fa7bb2c99"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "4f3796951d99113a476b0eeadafbedd5"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "c8212f9dfdd1e73c06a42bf6937f01b8"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "56a90db119f1fe42e369d8273f153280"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "6b0fd63c7c5183f735275806684ac2c2"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "8c44d20d9226c072f365fc8a3d99a542"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "f9ed8587b1fb598892a6d4be8427eb84"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "b32d882e7038665ace27d4b16f5fd7cb"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "61c57cfb1d09fa469a3bb9479908b244"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "f637295e68fa28096ef8478baebbe558"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "27d5a524b2250932a00222c0dd8d699b"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "a64fa9cf81a42bb5a9768d9ce6487fe8"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "d8acdd12b9a67af4a1003ed23a11d4f1"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "af3db457a759e4733af6b7912f110521"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "2fcc17d79e3ceb9c2950bcc3a43994d8"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "d3846c48e1bdd586d174fc6e30684dc8"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "5e894de883bfc4a09446df73e06c9f45"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "9b767533f7ed7561c44c075c93b9e03a"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "78fd2e172171a021c4e067c4202760eb"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "108e60526fba75f04f137fe008bfcb1c"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "25cfb913791f83081f28fa1a567f8097"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "d100e7e6d72b8a2ce4e97e13019d6cb5"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "aeba1c48677eee7929ea9aa7acc70c3f"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "83772d5f2b3273617476bb9b652bbb19"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "6081e756fcbddbcf6b701ce90d64a709"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "79204844975e3fbb96ca56263a06e158"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "04f3c3859f588ceff6adc02c4aae16ff"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "15ee3c7e5b800b1a1fb23387e2274796"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "034770eaea450f782a627930e8280b03"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "8d7bbc2ca3bc47af401ad058b0cad1e7"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "fa04ea821edcfa4dbe651d0494aeb4eb"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "2234e01fd85398baa8a4dc18703194a0"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "1cf7c1e25bb3db889836a70de1f68223"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "ea48199f8a0dc77e16227b05da753fca"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "69b8800214fea6f45e5390f979ea0af1"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "0c369d3a2ffd716aa00b1ba745580435"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "f6480837349adf074bf0395733e5e62f"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "6f79b5a52784c3d2c000b3a9b346a993"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "4aa3449439fdacccd9e85e2716c575fa"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "fee7bdb56855fdfa42951a85bb2f5347"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "08a568bee4f68be2e089e3a8c3ae87d5"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "d76359481d452f0129831242abdf7eed"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "053ba692e7b9b6ce30c3b5737fe56a0d"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "0ef77460b27e97ef42c05ac278529c3a"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "a33e0216314017322c67b410fb827e4d"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "201cb36e3f87766f83586e4bbbc72a9e"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "af0121a2be6c31159a9a97053d2335e0"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "1936a1b42b82941366f4e7428a0cf630"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "342dd585e872b26482c53a4c40d066e7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "01575e2a7a255bb5c95dd6d96cd61465"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "15c57d0ee2afab21c6701ae94fca1e64"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "d7131335b5b21625872ed644bfaf272d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "755b7526fef787da51bc19d5ec797c36"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "35dd28ed5688e33e2aa07e1dc3fd9dc5"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "e4d59e27235a6980e6822405ad933ff6"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "cfeb4036d819ee8288462bc157fbcd75"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "039316d1dc55299cd79ab594be9db5dc"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "16a30326676b531a4213c3af0f684f86"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "7097d62aa017b6d6521840e70c75f3f1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "3b9fcc7ce707e86a54cb3327a2d0685a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "646b14dd34f288d2d418986b9c28357a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "822a744abde5e69082b97bf272c706b6"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "4ca91f77f2cce4e198fe54b25b0c9d1b"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "13c0983af9903f6a88f6462780b60be4"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "b1e05db7945faabe8d01ae5c0750a152"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "166b51e0c9ba9bfed87c5ec639e11d62"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "311c4561a4378135d47a9cf44ccc8f21"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "84f7d8c0d04f0cd4ca6418a45f9e4506"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "cc543e8ac494ca2037ac4c5cbe40c335"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "af8623e8550cffbcff141cd6a1400a58"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "aedf3f95805e8e9317b552ecf37f2c31"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "966ed471e722fa7c70d429d36e3d38e2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "4ecc44f8c9d42a48be8000977d073035"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "f64f8f47bac963476170f00543b252c5"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "5d4d41b60188939e4e8a54aa6e5cd1e5"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "7c2446407c79f2dabc19dd564fef8b77"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "5d56daf682790b815563de29fad1b857"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "97f5cc37647760dca79302a79a91676d"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "3b3cbdabc41025b029f5cc6b1b8ddb9a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "a7f43dfd81b9588b45528e8f965d8462"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "27555d0525d6be560614e47ab63f3491"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "26970c4a2d6fceb8d085f5bb75940b52"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "ff92817b3b64fb924fdd7818e3a847ea"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "392c62d938c9e63d64167f193a01ae21"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "1198a338af77a008149627b7c2d03f5b"
  },
  {
    "url": "categories/php/index.html",
    "revision": "8b34dc115e1ae385e475609898601542"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "8a801ddeba8305e8599343fb5ed09394"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "a3ad32e61896cd2efe518cef19198f29"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "b684b897063aaa47a07f4d4f41393441"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "1404d9844c8cbe04a0dc483408f0c8e2"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "8345deffc8a3b6232d71b06ec5fbe840"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "db87822cc8fbc81114be963b750fb773"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "2f69409c6e6de7e4d8d04acbd7519de7"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "7ab6f64d6cea95dc5e011b925cfec480"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "b7994218b2bd4dc64830ece538235c24"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "a07fceb60cebf15510e5aa59040b161b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "965e5859f8c0b2053f09d22a636e422b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "ae619e698b030554f77a3c480a911a20"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "515385e9aabac795687760f558058b35"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "5a578ebcd210fd53ec80c5b7ff7d6383"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "4cd73920c881443fcbd30531e219a879"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "8ddf32f6dfb0599ea152e473af4e446a"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "23618516a71ec3587f8ed5000a4e47ec"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "b0e616e0fa4eb10262847a08cbafd6e0"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "4a832a0a7be18e73c68f9285b054e1a0"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "7bdfa5830952176bd2ea5ceaf3c3edf1"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "43d28723245630b06c286a4fb034213c"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "ea9783dc162c53af90b75212544c7ed2"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "fd63100616a5ca65d61b8e919abdd97e"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "a4200ae5768a9e6d157d93c4c0e8fdf0"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "1e98a2c0bf3d5443a1d359e7099281a2"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "3d7996a54f2d17c47062997b3573e025"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "81f6df608c93a0ca717b1dbcfd8a3c8b"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "a1ed75af6f68beeb4eeeb4fafd0b6b5c"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "d84ed3b5002565312d85aea953677350"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "56f7c359c8eca6a5709fccc72bb74906"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "f0c9b1956d5874c5f55580e1ad6cc753"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "0983dfb2a329bb9b09f317a6576b6782"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "ffc160ace35843c0b686a11ce20052dd"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "9a523392a32df2cbbef935b193f707f9"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "c2f6aa26b8db1f61226d7b48f0ce0ee2"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "29517253acf2cea5abce431ad19d5f4a"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "18de7dc980780698e770560a7cf50ba8"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "5cee5eaaf714f26358c804d73e6ae68e"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "370715080e8843a82f89dd898b357791"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "8121dfb0bacadc561f33430b4da7a20f"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "639ce72fb1d0ca9220c35b20d304b89c"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "05eda38c69b33e5419bd4a089c6b5a26"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "2f8655e6b1ddcd369fb1e4bcc6e51258"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "885c2428a2f516c946eaf5246ae0e8a3"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "4d94394ebcbe0627fea448e255f946ae"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "b00bd4fb63834b4912a797206970cf6b"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "15e363cab92064992b2cbe008f4d230b"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "f0fd89cb1d518f725aae5c5585675f3d"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "4c8d46625b96fb10f96160ab5b8778ae"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "161f07a0a0200fce11b89e8d11532c95"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "1ae0b96944fe9144642538a497dbffc7"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "46d8e430377bcf3006a3203c7db86500"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "44e437a10e3dd30a14126dabcfa403ea"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "cc17eda210ca4b4e08b18e1a55580e1b"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "b628ce168794387d18e313e3853be2c4"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "08131b409a463bc25df8274fdcd945c6"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "b7d01ea4278ca8b8ebf9c144b7ac3cf2"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "5b08903d6aaeabf25a191a5861254c7a"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "0d17903f06eeebb2dfc26746458fd50a"
  },
  {
    "url": "categories/python/index.html",
    "revision": "ea7411422c7f429d3ea0999c8916fd4d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "d116eed2782fcab6b3c57f44ec4794c6"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "4a22c0b59090b37f0e6fb7148829a29d"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "3184585b9c874c8e88b1c73c423e4373"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "f8d5bd2755257beacb99b574a8365831"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "c533f2ecf7e813dc2dd612f4b6c4ab08"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "16e7c2a5bc8cfb650b62f2d86ea88bc3"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "b1198a86f238f847b0c46b00f53eb62d"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "9dd6d49ac383e2a2d49442b1d78a6208"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "6d471ad676768a0ce15f3542fe4f5b6d"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "d0e2f479bb7cfef774c5eca45fbdb5a8"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "f7a432d86533c8ea6e723d48d7a24b9f"
  },
  {
    "url": "categories/system/index.html",
    "revision": "0c07d0dfa267c06e47220992032b61fc"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "c1779f65c24308a0dafd23918471d5eb"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "fc66107a702ca189420ffe1453532556"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "0d5aceca0454ee5bb7b201ca62ffdc25"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "66c2d8f9b26e1cc5f322382620ba7a76"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "3c758fdcba4f1ddd3148922bddec5c02"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "5756fcf4a8623a77065f1224ab9e0a76"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "8436ad65b79299665454a1d6004228a3"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "72a28c80131057abf59bda23d4784f06"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "5b24d2faf897709162659918bdedd452"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "f13a1aeec12d9a70b9ed7826f3e85e23"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "0ccd6860475bb20123cb9fa88516d0b9"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "da2e17ddd07ebd6c9ae7ffb12f660ade"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "5d7626315bd255a6a01beaf37b12b68e"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "3f5d9031fd45a26176a78d13ab20de20"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "636ee1218ca50cc580c7d17cb7f25961"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "ede4dbf2a40c055282850675a0b5e760"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "32af927d83b6b4e6dfe605e610596000"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "ee62fd2edec0a6b98eadb2304731b6c7"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "99d99e0edfc1e06a1082f1de47e56ac0"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "88f3d1884069eba565ce9e05a6aaa443"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "94f8b5e8b1cd913a2b68a792308e6629"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "92695a8997cf40cbf2f06b025bdd7d5a"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "4b7ba5996b7ed08e332d8269b49668d8"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "5c50f3a3f4fa550bb01fe99da3bc2612"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "b019ec17296cb829cb0f2bf42fae83eb"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "66e27300f75de56679c92f480784f978"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "ca698c90b758db68b270520c91577efd"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "5e4f8f9ff96df5a9abb05c30d707413e"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "3f4df910d34d2d6999b2c353054ff8d0"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "474f6378a56ccdbb9a1fda817518eb09"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "45d00486747b2491a058cdc8694fd549"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "26ba0682db173963d41b0f5c8702c9ed"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "1525824b55f2e1bedf8725f0c7529981"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "61ecc4057b982936041b2332dfd6f120"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "71721550f96e47722fede68a0cf589ac"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "1c061803dc3cfc423f5a7e8aa9c114ef"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "f0b7d03a956ebe714e1aff6e88dde863"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "5678a192b3cc1fe78525f52fa55d5483"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "abf6446d1b26ee9f94009812ac65edbe"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "41fe8aa62a563f57b09acd30344157dc"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "af5fb0a4e9229b528abd8b0c13252bfa"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "6106a404c1ef0709ea0912a282a168a6"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "6525bbd21bd6f90fb85eaf1231041e62"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "bece2b64dba5c5f719534de069cf9356"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "f3dbd05deacd381cccf6c6e46dba72be"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "a1167d4af35eb5f88df75729f633991a"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "e638710ad8ca6ee5726dba4a8bea56af"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "b62995d9b92dac62b3cc159edbcb1588"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "422a5a1a4bd8d2cb2c6ced9e364ab8e2"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "9ee2f10eab2f3912a13831e815dc6f73"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "606ce521fcf7134c1ead860656e3ae07"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "505f8559b7e90d59d772e6e7e755bedf"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "20e8e27a208f7c54f055cd84b129a400"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "1c77925d5ab7aa48df4b9f424880c94d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "bd9b54f66020f1e0a62b3415b834cefb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "bd4fdcdda393c2f129b7370dcea0269e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "550e914519ef8deab7ce7eda8d76f7cb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "378099444aef87c85a9f08a8c04f1f9e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "12aadb035e721abc641e6340e7c9a425"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "f9a6d8cd71717d6fe1e09088c3624ea8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "434ab9c8ffcf6a9dd203025ec17a82e6"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "4d18ee9477f0fa53bc3e9aadcb64b20a"
  },
  {
    "url": "favorite/index.html",
    "revision": "434202c3cdf2fb64bb825c7521702b19"
  },
  {
    "url": "index.html",
    "revision": "d7ed6f61252b50e63fb77046035d0640"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "94810bdbba1d5bab42297f8d4a4ea037"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "dba7ed0d424386ff3b3ed84fb297220e"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "d70eb2b1715fb262638090f7245a7bc5"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "91120902d355cd93afc06abe5d0f1152"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "a02ad555188174de403f9a7a7cdd4089"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "c125f807458fd01e70cc9ca8c8db9c9d"
  },
  {
    "url": "note/index.html",
    "revision": "4db4397d1faa9563546fe81e230fe407"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "aea9152480a32993d505620260a3a1ef"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "671f46bfa309e108377bc79da494f780"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "87085f87fa17f2f10c3780e9c8c397cf"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "38e2f4bb2a7ce8898ae24fefb17c6e75"
  },
  {
    "url": "share/index.html",
    "revision": "6cb0134f8a61be66e7644021867b6e3e"
  },
  {
    "url": "single/about_me.html",
    "revision": "419c52055580fc18790423a0c07a0f2f"
  },
  {
    "url": "single/all_article.html",
    "revision": "5db0f4b2596f695fe23828d7d076eae8"
  },
  {
    "url": "single/welcome.html",
    "revision": "7fa6c96ed85487cf223a1c37aa88b3f1"
  },
  {
    "url": "test/index.html",
    "revision": "ac7146fd23d672599b13e47b534bae58"
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
