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
    "revision": "a93622628da8eabd24e81447b6a4bb60"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "6a26332a8a0915ae5e16ee641f9c4c6e"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "c7b0d638f46ef5398bf228fd36727418"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "7f5298dbb132a656e000f3e790f87d60"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "5d349441de51ddd76fbdd1ebed50e84d"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "750064fe71cc480d3d3ddf2775ccb123"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "1f477cb329359644b8d4c9bebc508a17"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "59be95f5c092d526feebf504207b1f1c"
  },
  {
    "url": "articles/index.html",
    "revision": "7b290542f9d7f3d848bd4a87c6dfcc27"
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
    "url": "assets/js/1.e02ab4f6.js",
    "revision": "5ace0dce1d38fd2bcd186b0c8e3a6eea"
  },
  {
    "url": "assets/js/10.61f02ff2.js",
    "revision": "3fd86e1b57cd150e39177e8f88ec7d5d"
  },
  {
    "url": "assets/js/11.b86e807b.js",
    "revision": "f32542e5b3631da187fc1c3f26bf4961"
  },
  {
    "url": "assets/js/12.b64a559e.js",
    "revision": "14559de3b760c340aedb8bab20da3974"
  },
  {
    "url": "assets/js/13.0d4df230.js",
    "revision": "167fd3511379a69f2e3c2333468b2816"
  },
  {
    "url": "assets/js/14.f2ea8d61.js",
    "revision": "d18d4ff4a1952f1b2e51cfbea3b7ed9b"
  },
  {
    "url": "assets/js/15.bd8ee295.js",
    "revision": "eb99e393d8b12b1421683720d96c45d1"
  },
  {
    "url": "assets/js/2.7493b84a.js",
    "revision": "ac1111ec50b608dcf2632d99683e347c"
  },
  {
    "url": "assets/js/5.30627c12.js",
    "revision": "ea8f2cd4baa56cdc1960c9ce70cd736d"
  },
  {
    "url": "assets/js/6.fbeaefb6.js",
    "revision": "beb2a82829cc1e4481f4d8573d291b07"
  },
  {
    "url": "assets/js/7.d96afe03.js",
    "revision": "c2d9b7ce21ef2a8b565ceb5bfe6fff7e"
  },
  {
    "url": "assets/js/8.35d4d3eb.js",
    "revision": "710d12fc5f557ae5d9a99ad511b2434f"
  },
  {
    "url": "assets/js/9.d4c08c0a.js",
    "revision": "7c6b81ddbc271b872c1b8ac757cb0987"
  },
  {
    "url": "assets/js/vendors~docsearch.cf43117f.js",
    "revision": "338876033e8b107a767acad13b7c0f57"
  },
  {
    "url": "blog/index.html",
    "revision": "d7d7c60c321910d6478fa2666620ebd1"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "85fef45f04e46a536a8bfeb91aab7774"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "2058f8e2df4c987b22c19ee5695ed872"
  },
  {
    "url": "books/index.html",
    "revision": "755452c285a5666d56662d7b3e5f9bea"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "5422fdf7c81ce70868208240d2c81b6b"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "bcdaefaf7adef8205e71ca1dc6e3a306"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "331231359df8f7bf5d1fb40786eccb90"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "7e5c2d68f2fc51446c1ca518a69231fd"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "7eefa4f16dad15960acf0bd75c409656"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "a55f24aa9abcc115fc7870d74869fd22"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "16e35dcdf5b22e4432d7f195fa310c11"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "aff14fd34912a010e2f210e7f52dd003"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "8fd8e23c653afd471ff14545dbad9c6d"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "400b9e8568b723a5ca0fc082e3c05fa6"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "fa6e0a0e0512199f7048cdc285ab5dff"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "b0b47763d2a9187e9e27f2bf1859bf62"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "31406df5bd838a42718e99adc2ebc97f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "783b328f52e1f9c576f1209e145c6f9f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "814c68b0fbfc02ac80066d28e4eb7ea5"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "15efc30ba936ac637ee4e40187a2cc98"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "e55ee271f13225b18927c387dc198528"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "33e688085c6a5a0f26d6d4cba4d79950"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "ef5b3bd6f1957711f2083dfc73208b3f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "2f100ceb8fc28aec1190bce6f8b92f87"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "69e81e4e855a2e9c5c146b212d4dcaf7"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "2a44516471f5739e5cc277299eec3888"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "bc49d4c655cae4743d9d9a069fdc9d56"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "138a17d5ea69205839227ab1ee42c13f"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "27e4386dd3f8d1b48b9a7be0d24e0faf"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "ddb2750a597e762c69b3428a21e1a07c"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "cfd0b2804423a886f81ac554de8947dd"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "33b860843cbafe1559104aa4ec8ef869"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "5ebfd263e4b192fa9923ca25376a19d2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "5d000b63f8480f6466b0d05c25c5d748"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "efb394e72495aa3f37ab733adff5ef83"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "a74b47106f04ec7a69505d97ba11e563"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "2569c70ecf9f47837c92c4d9454d9ec3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "7ed05d08c0d13c29afc73e941dc7463c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "d77757d870f7c6eef3a8f82dca1bdf55"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "21c87498db9d32ddae0d14e4e28ad0c4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "01eb570a3842625158c38ba619141ecf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "952d867cde0dbacd73dbfc02406e52b2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "904fc0664e2c7a70f03c9aef5853a247"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "f3ee28fedeb9d8e790ac1589bf424a2a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "7190d053b1516dab14e7edce6ecc33d8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "e4dd131ffaa14129708f01f3ad91dad4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "f0d8db036534ef1aa40b0e7f193cbd4a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "6af9c003246b5e3e9c30f3dc5aaa8428"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "98b27e8363e7d3f741b836f84f1e4eb7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "0dc5887dc85c0cf3a95f99b7bfe975ba"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "2d1670597c2bafd1f87a4f139ffabb0c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "8084ae605f4bc5b8359aecd2b59d97eb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "330138d44efa33e92c7c5c94f50cba19"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b1c8e0588dd8f1a3317dbcdf89bf8182"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "66ddce82366fcde0cab04b98a85d2be6"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "0012653563a90cfff7d6c0f05c9d0bb4"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "d24a2e0d6616082c52a5def28a655225"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "0f7612308ad458ff14f2228f214046ba"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "e0b7523c0165b77ad42321b4f16efb59"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "0afe3ba5be435c22ad3293241c2c633c"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "6736ad5015cead2a9c649b47dbc34a6e"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "765b69d7bee59cc4e5fb91bffb3f7ff6"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "59a0b8bd50fca8eace4572bef76d59d2"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "64cb091d05ec06a4d01f469411ae7b58"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "0f324719a1d1de7ab1ad71b71eefc4a4"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "de51fd018c0d9619e43c9292dd54ccce"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "e9b436f7a31ba1387f9a7e9ef9daa269"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "d43b9db7354669a3092b615dd000d13d"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "4652ab56513b449137ecac3b2352b834"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e659b5c0823d4d665d896e258122ada1"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "efbd6c0d79620b11b14db4706c250013"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "4e38db1cc83b7931132a2344e972054b"
  },
  {
    "url": "categories/database/index.html",
    "revision": "dfda77e742e6d98bf52655d06383042a"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "3b6f514d5f68cf3264248af5db16cb40"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "49f4c8a7f6d0b68e6acfb729090077a3"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "6f8885c3fda9440cc2199585921f8a29"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "cd23d7d51e87a9b7413b2092b64fc6b9"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "c0199cace4c1c749afd9dd1390227a97"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "3ce8fdea88563fa7ff1ead027bf1f906"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "7f899f144172446a658d7dadebfdacee"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "df834c8cbfb991aa8cfe5ce688258ccc"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "db92400195cc401663a4101d6700c409"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "6f1e967d240f7dbd9144379d46bb08dd"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "4a0124f606d6768302b691ddd25b2069"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "40ec701bc0b462b8c5a92d05fccab8f6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "0f53c04581d144d7fb3e48f51ed8e70f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "a371fa90452679e4b380ef8ad1b23ae6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "c323b76c3f24fa8129bb25e59b4a7c3c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "c9c9cbeb3ec4a2f9da9b86acc9192882"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c5bbea72e197628b058d286ba7aa4d36"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "1eadcfae29963e0d0c4f0fd0a64dcc93"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "e05563627bfe744ef3b369aff3f11915"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "6e24dcc75acaac6b8d5c90b4c2cfa69c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "f350c63010d2040221b980f579944b87"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "ccc18e40792a0666c88b7ecf6c191368"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "b0f4a986d8d9de42e420ef8127763f99"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "d2bbffcffecab6be304373f838715146"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "3e748bfa04e9da11546d81562e1fba7e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "a057e3e831d32e75a683f546b31c7d01"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "5ea6877dfc7e9055da60ccfdabd301d6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "c484c277912deb9346ea390b1d1c9c9c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "b5e467c4ab91129d407defa931142fe7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "30a8ac8efdf3b272be9772b157e7dbf3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "72cc6cc4e50cd15def40de4cd46e7b3e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "152182eb51bc1fb6c54e3cb22ea11ca5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "81eb9313a5df4626c32e3ed41e412559"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "dd48585bcea0ed3cdb26a220225ea7b1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "89c16834fce13f6e8a91b07ebee7ebfa"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "2bfb453b9d8b592fd88cc1599eae9fd8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "c38b71ee586f861002169b27a9c2401b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "92830a40a7efb85e29f1277b7bf67521"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "8058719d75b6a18901c2ecfff02447be"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "4ad32d1b0f4d6148f7c35fea8c3aea4d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "699bb8bb3b9356bcf0c73144d70f9811"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "7e2fcbe47b35bf8ea380c9a97fcf3150"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "5ad5f3f7ef835e4db4e1e241a08bb12f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "9a5d3c83b5112e0d341c9164e774bd87"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "d74e111d0dc03b75c1b6913373145870"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "07854925b5e105961c55a19b1dbfad0a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "d1336472f6c124d17cc1c40a460652cd"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "488a02ae3b04f9e64c8bc20dad0f06b5"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "2f0a453e3bda858b66a2da5b767861df"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "c4ec3cd25b8a2e009742ffdad795dc97"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "deeff762172e0b6b05cb0fe9f23b1d1c"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "f00aedfb2645f7ec49bfa602976d63e5"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "618c09e4e4c9607d2ea059a24c0e9d26"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "1cb25f98a81261c06f41d84e0d95a80f"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "75455b0a56328a46b9f6ebf1a4348c36"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "784adce72898542915962f646822ce1e"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "db04b8131a56b553259c64151f3ce870"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "80bd91e68d3269c305fbad64f5f501c2"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "1ba36c70150ae47aed9c5a4974856784"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "371f49336ccd212fad5122fee5285bf5"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "2908ce5b624f414ed9da4686f521da6f"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "15c5b85f315b1010b13a8d2787c9aa3b"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "a13b42a70997120a9fb395c15a6af248"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "585c70f6f0672f2a8bd2808fe5f5deab"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a3ac66740ae8362c19c6c9b0471588b3"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "bbd7258c82c5b70d5afce4459ad4e223"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "64b47397dbdc5bf778f8764429fdf86e"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "920574284b94d9444efedbe4ab488c9c"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "721e2358b6e0cdca9e0f2ffadac23869"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "3bcef416633996b29bbff8e80a5a75b1"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "afe3b867071e3ec9185ab26c63827109"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "3ebbf8bb5b151cf889cca888a18906e2"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "f75dba77c4666ea77177d26fe25b9457"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "6e75ce5e3ecb00eb7ed738ca4b108ef6"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "33259bd1089143b226e8a0bd7bc86422"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "a4636eec6e8fe6166f44f15b5a42845b"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "9a32bc2465d212fecc01009da3146207"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "072b13348d765cd7cea7b9cbfb4fe48e"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "f9471ca4b2026a781e298119d5c1c933"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "4ed37de19cbae1342dbaa5c038e85b0a"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "8f522f34886c8921fb4752bebd988dac"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "3272514c2abfdaa9074852a05320dd17"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a44b37226c72a590531f8896c7d64e64"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "0b7f0605143fd00930a92dc1c4641e11"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "b9fc9a6234729f027f5caff7d9464976"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "9f48f512f6414da7c8c9eff0d66a4add"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "1ccb176729663e55df1594e1fc83b974"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "96bd62a7b2f40ddf9114ce05eb033159"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "068d5b313883833bc554cf1d28c2ccf3"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "94d051b9f7347d4eb08cf0ee316ecbf3"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "9390022b099da7b01f2d51d9ad9b9b96"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9de178558e5130446a1256476c440aab"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "83e6b6705e0cbd7f8f0b3175f832dbb0"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "552c30ba46fe909bb8064643c136fb91"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "6c899c594f9f010a2c4680c35e9f0710"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "84fc38fb330c21ae6e74571cb36c63b2"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "4cdb39cf0eabb3297b8dae756268f0b0"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "7df75b58cc946efd2e0a7d8ee3705d46"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "4ef42988ea61037fdd4b365f73d2de6b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "f92a9e6b9257109c476bf577e5cf56fc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "3039020e1e94b09ffeaf5efde09c5f47"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "4b7cc90d42bce87e014b198246747154"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "c8f0b16ba422f8ee58f0310d3733bc6f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "d9cb1edb18b9a05cf1b2e0cce3d61c88"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "1ae6576144f70b414ce495ee614e9457"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "3a8c31a57f055c7db4a1a238f46d0991"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "f26c329ba04d77c678828df99e484965"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "b2401662e7fd266c34b926d41b04a9db"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "e051cc9d3ac8d0e0f1ef8375efcc97ff"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "2ff7f968a6ff6b9d6e1926a444a395d5"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "ddf74be1eaf33fdacdbe125f1e80d392"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "8e91184ef72fc1f4bf32f0ab58305b36"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "f0ff2ad145b699376a21e3e7caf7ff3c"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "7b50f64308979f828c413da50467816d"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "0c11e8e3981b4e7c9b5b307f487d575b"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "13b5710f830365e29599e931150117be"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "bab7b8bdd5074a342a01a8fb6d57f51c"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "78ca1bceb2ab3c1b0bddd376113d9b18"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "4b9dc19fd91f1cb8637920784168341d"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "a5efc93db48c5ff4ddd7d8ae178bfc42"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "d7abce59863246576148ca51ab32a252"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "6cf896244d3988df811bd6f24ad6cfff"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "819d1ae4ac9172b8f47fa327b318c2d8"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "5a9a8dbd1a7ed01e8cde524751338d65"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a447e75444a7683b39cbd08d6286fcc4"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "a11633290bf677d7367606e8d448d6ca"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "db47036a35db9b75df29158c04018d16"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "061e71e8f726cb22c8e886983d8da036"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "0b07deca4f4a83e306ebc0de128199cd"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "bb4adbe85d2e8183b235e588d044ce24"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "9f877fa8bff1049bf5d0a88187fbecd2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "28850166b80e6759fd3e2f16671d43bb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "06a6f7fab355c41162e0ebed6d0f42bb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "aa87166e5b6311fea397e41c156734ab"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "9e6050ff868580b41f26d795c4f125d2"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "5777b81c248bf98b04884b61afb459e1"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "5099597d532f03fa5d254592d8cd5a9c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "2c426845a1984411d1c1b4337bd09127"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "19f86284307b28b90224b29d13e66236"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "bf951555592270bf37ff49fb6bb18b8f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "fc49998f2808e4d6145011c82608cb43"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "30f3be15412ff83b9ca6f914623b16fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "d18ed924076508c73d49d7367ab58db6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "e12d404559eee38e27b9c903510fca47"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "86eec69acf0631c988c702db9e7b4e06"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "77f7f64ab562b26e3fbbe57ea229df90"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "2a3b38e657335ec3104d2823a93ad7e8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "717b4ccdd1e62cfb1615a3eae63aafda"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "30616587ba2e274e899ac4daa85761f5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "c41be8fd0f7dfceb84aa3050296459be"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "a68b2bf9219995e0e8945325429362d5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "00fca0cff20947dbca87f63b2e084a4c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "dfad461d3ea2d15441fc64c56baee3dc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "008c79c5ab58432cc44de4a02fa22dcc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "bca7761627c9e92551fdeee2990a8f18"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "ecf50ad5061169110c9ab215da84eac2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "b58753110f4a9eff58792e211de998d4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "65bac7fa3a125b872240d01bddd42b6f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "9c7333d5b7265ab18588bf2612478949"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "4c8cee9a07b0823b94a8f2d0ee547f41"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "655307b75b37c3cc5858777eb1256648"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "66446b560f7c55dc8fb993ac24e541d0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "cddae77a92d5ea59fe848bcf3fbccc59"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "6144d547cf969706467ea3bbca5c7e0d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "b3113ed9f52032a31821026d69f65dea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "660dd59811e9e5593e8530a0dec89932"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "72ca1134dc5fdd9c5a717ee34adef4bd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "9d2536f91ce6785baf1ac7c18c91a724"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "56543f8795275103dff9ae9985d94935"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "57bcc539a464e6a7baed4faa00b8e2ce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "dd8b350cfa5dd2cedf38c9c82ed35331"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "e0ef39e052288d05d8e3b7d7cd953c8f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "45573a5f9cbadcb59d63d29ed37bde0c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "4b327b87b12985da9875523e2057f992"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "75aa33f49897c5b4f10188bc8afd7f53"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "a436db7b3b4039d6968f752347d864c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "8e5faaa52304b97a58c648d9f06d3e4e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "52d0ae27a52a1894a1f2e17029ab00e0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "1f6d41a7b7933c132e36a9b4c974bf8c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "f883ea6c916c1efcc057b2eb3109666a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "67b2f6d748e2a75b6eedda037640f24c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "5b6fe249da0f25ac543fb56b11a39408"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "dd384b4bda6484f80063afbd1910be9b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "86da243c9398f09185b4f28f3d2f8652"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "a4b7ea510666aa34e09d412003aa8154"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "e38ca83a6d7d18be7a1addee9668d308"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "741ed82d665447a65acec65b187ed590"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "d26587edb51235d08ff136f57da2c5fb"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "d670513589da2cd91eaf14864a8f997d"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "beb0ec76aed8a33efae842d9a9e94c3b"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "3e73be52197b5b0fd58b7f736c9bbd33"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "50b8e40ea74a441e60c5e0095a325d90"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "e895fa71295c5b51d1e1847051dfbc2a"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "6f562bb79f9e93cb9042dab651e19f72"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "d467a2d91b7042a96c31702fa38665cc"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "76edda66dc38b8ce528de500032753e6"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "b695b5a0ffac42af6d9666c11ea56695"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "45132f829998cbc16bbb225ea2de632d"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "bc2ab73eb499317f2fcfb07195f421ac"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "f86fe7c2a7730bb51a42ec899ba3f14b"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "e78e4d044e380d5af2c6532fd1ecc4e0"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "71f6c15c1d43a65eeb92c9c6d7dc9bea"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "65cfc372d3c1eb13d33c4e7fde1a5b3d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "841934d719bbcccc58dac2c04272aeb1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "9398c767f6eb476fc5f688bcbacb027a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "6062be7997f1032251f78433027beeed"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "b5c482c62197a9926ef059294d4f2f59"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "6ff8a0d37ee79052768abab09c73e2df"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "06165176241f2ea39c87a77495b681ab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "dfd412b640b25aa638bf2eefa663ef33"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "7a438f40e2ca2875e64e79d6ef71cc5a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "86df69e3d541fee6491b44e687a3efc6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "34cab2fcdc32b242971e91ac1ef45c0e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "02fa722ca0f1fbbd76d515f4663c5f25"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "40f155af4fdc8ed75cecb592a6f8818b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "c55ce6852830e138a30a0862504fa447"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "a83c72d74c15267b591520b586578f4e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "c4e57481af06ea105f39fc25b78a9726"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "ecab72b1b8d95b0105e018246b3a4632"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "43a0d8537098bea275dd1a39e6fdbf90"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "d0cc68b95865361776b7e2de9e1e89f8"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "fb58780f1487ee336d73e81b7d092742"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "1f63ff558f7498b2ecbbdf8deb8baf61"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "302baa57e1359af237e6e474567c0547"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "e9ec70c6660cb330241c596694ce4c98"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "a95333bee2f74a1445fa45fe50079696"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "81618913a9b4e023ce5335d7b9d727cb"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "a0f34b3af29d085393a8408845b5b4d3"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "3666af0640a9ec7bf3c1308ab0138fc5"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "d47760dd03731888152de1082feb2e53"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "1a77f33ca6cf41cd2b8bfba16feec638"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "85412d18c47d8610f347354d75736d6a"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "12fb1f3bc564a680aaf7a4855fedef07"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "d43966dda9936dcc01b7cdeacfe113f7"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "b7e02635e313511fc1e05d9e664958d0"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "42ffdf9488d0e67e59715153f23da10e"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "3fab777a67dd526c1e626dcd027455c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "2ae211a5e899c426a68451e7490bd7d0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "148b41b84866ce5d86f8db08742c65ce"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "bcd38741c1476d9d3881a289a4ff4788"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "2ffafd0dfe7b94f53e4651e029b79ef9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "9c7c19f00319e384596b9a19667f9da7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "c94773dedf44ab4cdfe7ab60cf00a655"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "aee673d392980c6f2c2ada6a1b29280a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "4df996f846b71270cb6b5d49a2d0a271"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "cd0ab5453639310db28271abca072842"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "b4ac74aaf632ffd256c7b27b597d1913"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "fb74281ad28147a9deac6bbf618145c3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "bd9ebb7f4baf973010e50896a58688a1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "71e24a1dedf0c53c76034f9a6902fb13"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "4c47bbcc19db94fe8e16437f00ad96d6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "cbcfb0a070b0c462cda03b5187b5e105"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "1c8a2a07ee1d6d917535d4a4201de7d7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "e0031226cb056f46f07f406899e0ae2d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "ee926ef10d062d9abaac543a3baab5ee"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "04fc8ce158b630e92229995aa1e08d8b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "80cb887ac65e6eacc9bc6c0ca6eb14c0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "301ef50865f5d9337f3cdb78c47e2c13"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "a95e7e13b7642546026aedb17ddaca9a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "ff94ab8915d6f9902d1ea0b75d939c11"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "03aaf0089e52dce2f940b75082b0fc8f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "9aac37aefe6775da718e22c61853f849"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "5ad0468fdf9ede920a54a43bd9034c1d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "e03e4efcbeb6b5c5c99645c37dec67c6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "2c263ffb6bd5ba40a56d6ee8ba1c3ba8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "97adf35cee451a6d798b03a5adf49f54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "426fe255ce16c719ec678015866564f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "0e5a71981bdec74316896025eb5d07f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "ee787d8501493438a27b40445360debd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "1084e1944fd477e5be0f40e5354af16a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "245239e92490957694d8e170d2fab4bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "99cbaa614fdb1b799097abc615002225"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "34f22891db5ace1937caef6555185bb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "aac3ad0c4030a9e9aa2d9c8996ad7689"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "5ca932d56bc06e41cdeae95b1433089a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "66dc3a72d3a22f8e8191d4d7c5125567"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "1dae6403fbba81cb92497e95c882c62b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "226526fffec7ce3c3c182719b8b4e9e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "a0b266edc0fa47fb5fb5e979e4450e8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "5e4debe34d10db56895ceae5c30c709d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "3899564b5fc77be59e2d67bcf6dafd05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "003669cdb3cd809aa70295f6093e9469"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "aee8c6cd635b82183c5361d9cf25e7f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "2143ba2ee325f34f5442069dd213e53b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "e5b8fd60d4acb438ab992e993539c134"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "5093d72681179aebd8d1e4319fd0ffa5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "99f76c9a4cc2bc5abf33671b9ccdd32d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "df4e19b0d5a70e546a64a38646fc3e4f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "d63e65b4499fe40311b25594a665c92f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "cec5cd7c239d96ea6933e956865ee713"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "9a73158db2fb138795e649ab38811850"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "65f2e1f6aeedde9571b8ace13f7d07b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "9ae7685921b32e35e31ac6c765ff5801"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "3e4893845a4e9272de911f2524e817d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "abdd9cdf1a2438f4f954b499388e3479"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "c41a98c01a5d54139b92109b820f6227"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "2b3b2b66a20a535fc7b7d7d4debdd664"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "59130df8c71b2266675fdb1e516401b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "548705abc85b84559aff713d7c28c8f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "33aa63cb778e470688507e3a0464451c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "5291df7064a82528a4407eb0defa5257"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "92a8aa2cad4a369903ce1a5cf0bd2dd3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "17418dd3a01b9d5161bb28ebc316ddf8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "e4b55c45380d05ccdf78f3018479fdc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "37de30e3dcd39667fb51bbf4c5c4c11e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "d88fb6840f7c5de1aeaa5829e2444cf7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "3c54891913197cf47d6e503a18c87e69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "c916ce8b6dbbb78e06b4d789aa2ba62e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "6f04b094e6e643e3deed59f4d565f013"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "cf8a914250ddc5e576898f7791a24b2d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "3924c4fb37f9fd8e6c20a071b015f0b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "d17108d63de2d562b9edeae215f31dd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "e7f5a5cc4cb267c00989556da9fb528d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "d3c369b61d67fa49490aad49f92988d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "0ad62df67006facfdeb37c8a1f132fc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "f78a5c3bdc3df77119040f46061e1be6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "45b4ed27140dd43504fd5cf6d2106f65"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "2ffa5d30f05d5486bb1a85b07c6fb2ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "253b932fd0a198aa377c231d22e2c19d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "4904dcb2bd7fe26843169d1582094004"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "a16a58823278a5d4a9c9111a7fc11fb4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "1b6bc02607cc791607cf7131fe4b613c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "6d7ea7d6d87c1303674e68e750b66fe2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "62189b219befeaa15ae9b66fc87d5491"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "f7c30442668870bf4d32c7e62f115e6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "74836dafe322a594e095423f4a9f6cf6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "c3afd21717320a1f95a0c5b4fcf07741"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "0541968198ed5d9d61fd1ce6d9ee1c58"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "dc6b8549cdc6da23d3a508e098ae0369"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "af4230e18ed2ef5eec13bf36235291fb"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "d283e3970350e74be3ab1cabdd86e0ef"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "59347bbe65033803f3bd55ecb2a1a9df"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "169a3490dbba4caac87beccfaa9c2dc6"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "bef057b19fdb11ecbe28885bc2f267cf"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "18986100e3d4c621a56690fa3fe3450b"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "7411aa0068059e13eae7dff5bd349716"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "3cae553171dc1cef4a3bea530e147747"
  },
  {
    "url": "categories/index.html",
    "revision": "904d7dc484c05b8ed211b29640d4a017"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "e5207c38f9d43983dd83c33f79dda6e3"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "c6e99696c6260750aec06032fc85b69b"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "f0c62ae459d7f8b422aab3e9dc1ab676"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "9d07826d706f2a9834b11b0cdb09890a"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "9c10224c3f521114fdc4e6726983c5d5"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "753870ca49f5f4b4c91dd5a45fe27dc6"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "e9ff5763cad400534763b396c407f9b7"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "1bb23d356e49f3586830ea8899a871df"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "85d2d2544b91fa94151090ba03b51e64"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "21ceb0ae9a4d2f69d5282d3ac17f0d15"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "4626404f08d2fb763cb427c63fa79965"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "599670f64e2d6aa75860937cc73a0030"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "f28e7405bce737a5054d2cc848868c40"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "acf9b7f7426b64d11e86656e14a3faaf"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "192e1071c6580a5f23eeda1432a3a4de"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "73a8e04e7e9cd100d8c7b7d4494d4337"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "03b8b38463b8803c0612623fb807df21"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "d93ccc3f6f65901336ba93217890f275"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "078164e9cc0a769e06677c88e6fc8404"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "eb8aabea7313213aae231d1ab22ff68b"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "f85323160a6858d87e5079e6b5d11e71"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "de3b496092da7ce59f41da7a67269b8c"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "d8bde7a2138e8174a419cd7417b82dbb"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "0020bf85499fc793a4ec0a7a10c6f1b8"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "b75adcd6dad0406d25de48d4b949e9da"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "99361df2a6af8fbe5c5928f1aae47acf"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "35630088c8f00290080f1ba58ceee4d2"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "d03216f69489b0dc4853bb1b1c2e4bae"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "38720b56ef0a8dea917af1af9bbd65d8"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "bb5003f6898174a10d71c5d0e4d4d6c9"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "d0dd88c0da6f0a240d05c01810f536db"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "e4cadc754333f343fb37c51ff0f63410"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "9463cf01ed033fccb35314fc7c1690c1"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "b5c1e0cf54578530fa76d0b3f89a2e87"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "069b0d3123c0a4eef63d8fa1aa6b1763"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "8b22df6e9764a9538592440d1f4c270a"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "0098c2dbd32c54c4535bbb71c681352d"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "107bb8f4f6539df8e01abe6802c4e2b8"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "9104b0eea070f975e80ba95eb7e60af5"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "6a4a4db431717c9450f5ed2d3329120b"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "28959340d4e6b8ac64c9da40370aac05"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "a3e6c897f00869e2bf89749ed99099b5"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "973a3f9325cd8aff811aa7d1433e33fd"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "9607cdf62a5853a6159463a3d31044c9"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "f47bbb856a076d3b7e4402ef44c8d5e0"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "214c914f0b08907fc936548ea64fe94b"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "b7b005da06038d220c77ef53aabea373"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "85c35fe15069fef0bd9143cba57cca5b"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "5e2789e66d648508fc390e7f8922c74d"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "122265fb523ab3d384858787968d7564"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "007002fcffd730bd55d83cf1a1ad1df4"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "5da5760c73887c7f588e51eba5929ee6"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "576a38f6edeaf880b69606892975fea3"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "cd4fce331a2c1a725bc488674d79a359"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "0958e67eeb0d4893d466e5cc992d8948"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "85749cc4dabeebe1e3fd877c29f3e476"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "f59f2a0022410426081074d5c742b3ce"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "a574a87058bc60baddc54cc764b9859a"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "d43e4be58005f32c3ce675e854f6364f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "a22a6faded3cde32f9e392c9d86a59bc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "875215c58f77f0ef8bfbc59490c67498"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "97093177992d9403034cee5a92ca7d84"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "1754c35f945a21580e6e4856b3366614"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "116e8d0683c352b2ade44c021c66d7a0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "9cbd9412571ae86ef7dcda33fb5ec487"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "e0503a5f758db3f1c48f8715d61d0d5a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "d7d639197830a955b41e6b31a6278da0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "4dd8873337b9201d070a0a1be0547d73"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "bc2c667722291fde9e1073fca22521fe"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "8972a3d8afdeea3fa4c144dd68f4bead"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "905252085b8fd8600fa5b4544bffedee"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "e1eeb77c89e4a08877613d1a150c855e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "8420be42027cbbcfcdf872c49e261551"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "a25822c442f86f51dd1181adbd0f6913"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "46fe5b839100f8571a15d98fe99ef51e"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "d7174ac7de58487575dee141fe661b59"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "cd79ddd96a943f655e776c9cb401f52d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "84c945f2cfb1782e7ca5a5a5be099cf2"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "4558a86daebd3cc49b0ed659566fec58"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "7e072cacb0c91e572f49f2ba1322d119"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "c67c4382eaa43439271a10145c19c37d"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "de04cd4d9be855464928e5dbb139c83c"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "7eb92ca4c6b27ee72c9070222903fe86"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "eaafd1117bb37844fcf6da1f3ef4e06e"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "a9572e94697e9753c92110191b754352"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "2f38d86d914538b15a4d6ca2974355e3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "200ca53ec0f9d04dbac0d7c96b2ea646"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "7b018018862f1dfddece59dfeb7791ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "4d285709c9f116a00ae246556c710bbf"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "dcfcc7b1469ff60a6314d0d0466fa4e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "0be585480ec171464ff317e6e0e53545"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "282ed4c0c78b3dac8ebc61ec222ad4c0"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "680ca024de10bd9bc4b50f7f99a09e02"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "0c6fb5307f7245e35d8181f545c33fd1"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "07d5e087e89ba8b2a1ed82d26ed62bb0"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "bcef4193c31b69ce16ece3582930fc47"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "4e12a44f9480eaf1d26302fa183a0c52"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "077a567ecdf22f7559f5d6e7805aa05d"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "2bc40862a591bd1cb01e64a3949db624"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "1c371bb598d94864389bf5c253be6b16"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "4935831021f4d9fd37b0deca77ce2cc8"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "00a415d74273f2bfb39bd1e2c3e9ee1d"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "72e9560fee1fa6cbd9743e0e52ce09ff"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "0f7173a4caae1efbeb961fb3a1ff5f3d"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "948c2711eae84018b9c08e42d798c15e"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "c37dc800bcac929c4bf58490a2f867bf"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "4562c9129771f23fe703519839a70035"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "830b1914919f456f6545d1c3f6c6fca1"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "80e36549320a300d83d3ba593815432d"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "361151d2c13e179378dbba3b1a402f0e"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "660e328e0fc5a734223b6c2ae3efa0a9"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "e95bb471c208153f21373355be0de226"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "659a70a2fd71492102acb0c412c96566"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "78f7c912cfcfcf30ce35973e6a925335"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "445f8ac8d74d4c62b7ff2f8f0421baeb"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "7ce23dd77aa3ac4cad9dbd9be52a45ec"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "5e2df588133839be4392ff0b0d355031"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "8cad2baa1fab96ac32719ffa8878aff7"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "60ac2cbf468e6add576384d9c5d4ca2d"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "36d4b80489b8f934b6d022e1121669f6"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "2ac5d55a8bf0553c869a84b04d20b423"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "3ddc99800e7a3c611d2fd4ec5a534f82"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "f9f10806a19658325ecf67af992f8861"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "dbc59eeeeecb56f740d474fbe60e89bc"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "74b7f33461dfb0a713a0523aa0316116"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "5c9e498feb4673a9fcf13eafde7564dd"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "0283b43cb42a084c06e1abc5b833394d"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "ecaa4f169b6493bc1a976980b0dd5883"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "78aae69cea128740d173d9cf40778174"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "08b6a7e12930cc238f510d82080dcfad"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "8ed381929d07c1670c8089d6968573a3"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "23325b51fc940e1de74a8a41a14e7a0b"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "80d1d52b9ae23dc5e519ae7f4293b3c0"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "737be5f5a3eb2313136abaa773bf7683"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "03a29356ee6935d519e0e69287be73d5"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "a3256eca74d8154e4d9b5cfa2c980281"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "89c0fc65028c7c0ffe7370f264ebcfb9"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "41391bf24fa656f885145b2c5364752d"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "a9b7cc30173d84823b33f82e1eba243f"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "51a6b1db1596c57a6ede2831500e7789"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "596847329b11123e6b2a72916fa7bd90"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "e20d3f0c281b5be49dc1b3c32fe643b2"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "9d229c2333a21543e02bb3fb87c32680"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "df3ff602d4f460b679ddb9496d225a7b"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ed2bcbc7728444dd3a36cc5e6617cf17"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c7cb46f1089f21bb8ad8ed32342915cc"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "71829ced7b677182991a33d39b7046e6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "2274792a67b6a838d52d38626f502c4e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "22320ecaf16468f1bddcda7ef0c59e64"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "13b9c0218077e075d865e35d946939f4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "59df2b6a4722fa98164fc084b9a8acad"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c720bc59e06f9d8fe3a762e23081e142"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "c09452bcee8c5b99e63a498f3ea96d82"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "faaf84c7d717d650aab11a6adfc2d80e"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "cf8799e216764660c56b7134ef13976d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "bf345a639f901b291d70cf5a31038ad1"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "bb4f64969428f467b9a9c9ded2ee4cf3"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "e0d38885440af3a4c90fddc1de359fa0"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "d5c09736a98103c6c41fafe26455f437"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "8089e3b25de7871fa99f218d3fd919b3"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "3eba3f50f45e69428ca63b63466a7fde"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "4b7faa428e4e1afb502df164d8a82514"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "04088cf7b4d67f790b449253196b8f29"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "272e117fd0649c50f6c5f40767f0077d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "5d04a535f50651a7055c8f77b2f089ce"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "c8ef081bdc5e7b2630da67c3ff130c1f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "0f1348a9f2297622864dbb5acc455626"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "1e96142ffcd73129d0340530c05c3f18"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "0bd99b8eb0c123be189ba5ebcdfbd8be"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "a87a04b10f494d4378f3d35213c2a3e6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "c70dbc4b366deef806d7b75cc80ecc6c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "395ec85032bfaf182fa752212062256e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4e813f46e77c39dd9d57858fbb63a4e4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "beb9651b5c884030d245d7ac4127e858"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "53893d873ce14070ec39feb7f3809c0e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "7c571e9587ff310a7dca8d90dad3e330"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "99ce98e7cfa4d9b5933e4033b577b140"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "581e53d315386368d87b1a739556445d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "e7b95a8d3182e94ce03b12034f9ea9e6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "81eaffd7ed7db77f90b958093a55fc5e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "a4ec431712a3b045c534edbd91a91413"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "674450112479cf641ecb66f05f69f097"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "7e42caed905dc4ad95de28d8a388277b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "665a7a0b72a22ea3a3afeeed19a238fb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "b584383939394ad8c1b048703af78852"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "3b5a0bc1ed0d2ea33c427baabd7e7573"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "91240229358ced7101e3b28f1acfcbab"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "29f0d1a3bc5a316e8e4f0313eb9fbb02"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "00e51081b4ec5d3e6434631c13d91bb4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "6c6f6e89e3743ca26d11783a98163484"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "4b82b130509e62ba0d517e7a4442c7dd"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "1ca16b1c62b88f86c1e885a26433ff18"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "04f1e216a1ff9801e2fa8844441260d3"
  },
  {
    "url": "categories/os/index.html",
    "revision": "e93c3218c727a72570b4f0201a27a3c3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "ce500c4b268c389c7f635d82782a60fb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "b076837483a5b7b04c4ebdccc6464a43"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "961e0baaa730392da2268773c27acf65"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "0834309bad16b0267be1351f928f38af"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "cb6dcf49f42ecba561c95d66a42fcc99"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "028f2d45446dac0d3e2c6c5d603aab5e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "d090d74c29eaf1de54e1f486f5581a2c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "7b28600a19a09d4edfe09c07c2e3eaf1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "21a46f46a27f930469690d8fa243c313"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "ffe095b69ed5ecfa014143aa9ce43304"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "86373f1025a2c6054e3713c589b1099b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "684099860cb723b15188ab0c60662683"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "44f8221280544463dfea7dafa93b0846"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "c6106a92db65ef9d6e7df7d6d9ac266a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "34f8187bc1f92309cb1524cec2226e98"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "e4bf4a14cdaa22e40b1faa193a82cc88"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "1176bffd2f521f8f9685503a8992dfb6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "20b21853b1c71ca97d0e0b9a6d5310be"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "b28cf6b7ea03cd0492181502c462f0a5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "e0bafa806b103d4babfb919ec69fb67b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "4e7b134459d78c1b9cc057f8fe7370db"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "6223c4beba2bcb74d63759e4ad07faac"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "924d840fee98de4a947ce39067392896"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "80cb1cead864e2720130e6c6c43e2f8b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "7e043dc8976b3304416ada6e75df25c1"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "cbba8ddd9f2fddcb7800f5db7482d2f1"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "3f523dca1279d46a48380094ba8bbc61"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "7ca7f02317435bfcb6e402d2e3745ccc"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "8a64f33b3ad3ce20c25eaf9711a7e182"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "b0e92439f82578ddcdf9187ee9fe42d6"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "a27c1cd456c1521cdef19ff794e78bba"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "7f6d84ab15586b66945b7978acf2a1d4"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "a5b57001bbc432371804a8be114263f0"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "96fd61794f1625337b1f7a48a80e09f7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "e3e25fd527f4e1b16746d76aa9b35249"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "c2ac62e5959b247250370601fc22e0b0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "0c9616d25144ac96ec64f4d3a97461ee"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "13074551d4c04760a552067e5e1dba67"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "74fdc5d66653ab6552e8dfd9b0390e4a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "b2ed23a1e7008eeacdd7c24150f25c1e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "aa32b0a8eb2349d09dfc90e994d3a775"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "26df1028f07f86c7a9333e499f00df9e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "4e6497550427b237718c37962ee3f72b"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "61cb6b14317e7ba7d4179fc87dfb82f5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "1be9760d7b85e3221e0ed6c8eeabd71c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "5e86d8fac60f265aaccd93c5f9d6600e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "564facb8fd5d474ef0059b472cd00eb9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "3839366a88d4a9ebae332eb0541f0fcf"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "dad38257d02048bb71e258ab2bdd58e2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "d942a305f41bbebdcc695a255ed56079"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "9debed69033bd540241b7689c330899d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "e34fc22758928a22ff94fbe17a7913e0"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "525813fa07c52eafd3bf0740a8f8b4be"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "399d9e45002efeaa91f1dab60322eb01"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "93708265dae30a4ec839679dbce54f6e"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "2e6010cc9cb18e4f503689419ff6db7c"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "0037239220d673707ad17d9d22a7720d"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "3340b81b72c25ddbd7724625579b7b3c"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "8fee33b1c3872faf5bad407d33f0b270"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "3c0d3722fe31ddec77c8edbefc1bf5ca"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "2e93e6f571cc7ef1f5179e5bb7e22c92"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "296c2945affda6a33b95ffea5e95842a"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "3a25f6f6fbab0dbfb56751f502423f84"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "fc65ccd2b1ba67355bc7bb5412cd5020"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "15ac0700c0c62628746ef69f0a61726b"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "d132aff93e2f6e3c66510caf1be713a0"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "a8cfa2899078cb0371cdb94da7e0e2b1"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "8373808149bdec2901ccc36760349e63"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "027c0e360168ebbe30a449d70d705ac6"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "b020836190a325c9aa322eb180c3c50a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "c0564d4bd8907c80e117ae0d725d2563"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "b746f3fac0554c0accfa68d492fc6fe7"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "41365398d42cfeea4c1ced0ea61ac40c"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "1d28fc0c3294fddc1dceb984fe410ce8"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "82aadf43c708c66196cef63e65a90c3c"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "a974268e264148cfb17bec7dd3c065cd"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "824d085036dff2ed3fbf186fadc069cf"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "e0cb44f68b6ba894049bbc059e9a1641"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "a0362b441b9f7de8188629d83493d1d3"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "2502992bbdb934430c8f87e9a4914d34"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "2308a4dc35cd288f46d1c072856d4356"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "c47e551f59f6eb3121a92100389f09c9"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "f6969bbd11750088a9105c62663602de"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "d44d44fc551ac23e586ff6c9721b0833"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "ac5ad7a027f16b4d2bbcfdfb573e99b6"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "81f8845c9ea85be3651230eec756eafb"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "4905f3f9b181ecdd68945a138ede05be"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "e8f6a72e2d67bf38d1605266eb0accf4"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "595859c9e565192a14ddd89060079546"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0858d23480a45adc025630239d844637"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "08aa9d9d7430fea4ed7affdc7a6cbe64"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "8a3a1db8432d16adb205f55ff6e9e827"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "4f47c4ef5c6819f209cc38652d8bb752"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "55de5f21f3d0a7f0dfb74fd2b8398991"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "2b742086d55a769c3e7143afccdebbfa"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "b734d4cface90acea2eaa04804dd357f"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "34cb7ad8fa077dad419077935b2bb336"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "8b82ba5a3750de0e78715c0460408a5f"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "5585c7dd4c8da726f3310b409429bd91"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "43ceb071566f9cdd3a525e081ad5fca8"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "19db986f9fd39b24b43ba465979ec32c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "618d1ca02c11c3b8d9ff4377c681e8b9"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "34215036f141cb73ff03d1c79a326881"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "5873f3e56550168f098b84c0b5c31c2a"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "bfce4bb16ff05f3aa4867c80db2f427b"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ee00495ba903cf591d5b2c29799ef9dc"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "ee7e71690e86b8a88aa5641588f02c22"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "9624fe9371a6f377a377c60c24627d6b"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "f38e8520b905ec886ded41ac24f856b7"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "995c5050e06b0eb7ba3b055a9ec45233"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "89b65e64c52cbace2bfa53d13c977c2f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "22925a295f8c9bda99f237844c4132e4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "1b66f8afe0d0f5d9cbc02a9a3d4ea309"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "169f68a006fe64c18ce8beeeb09a71ea"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "b251417311b9c198137786c31509657f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "ac991d599b373c5cd80d45f776537d33"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "51cb5ff85ae803184f21241d1f611cc2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "b8b48eb58418fc5d7a0b053b1a774e01"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "d7f6f10a70c2f29048f5932bfdd9a7a5"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "a8dd2cf66456394113ab16e7f14ca191"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "5514a7d3b500ac7113f210bae0b22de8"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "c578ac35c5be0d132bda4b800e64d534"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "b151829958c34ee3fa0e89ad09330ca0"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "508442628834a27579317d6bd2b00b02"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "cb56ce23ecd026fb58421fa685935683"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "1a3cb40db9830e4b3377bc188da3f4fb"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "21134ac430ed04ee6719e43f85e6de16"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "aaa76a100660333cc3a8b52c3695b1ab"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "c15a3adb778ab8d14f428ce85e0c5d5e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "c91cffd1071233e3ed98213727d04822"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "86c95c95dfe3517e68f62d7af4b0f317"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "1f7b0ed79bdee94afede5fcd6e06623d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "4c59e2d57169801f0962308b45b68acf"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "d2ed3abf64ba98b0cec281ce8a9b8cb8"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "2f1150c08fc3bcd188b04a412a04ce75"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "2b25b7058f92ef33c960a66e24d0a2a8"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "6b2de858840c41e0dbf4b66af7b7ff9d"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "d8581504ba99033cfb28372be90735b5"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "abac530cc9d609a42b3877b6fd246190"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "60036b8f8811c59946387d3feeb1820b"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "5b48095f26c1a7f2ef767ad552b14a53"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "222a131a7355b429dfdea0dfc4dd9723"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "88e818e6d82d9ad6a9dbfb1887e1aa6a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "42c2dffd8ce1602b0e65d098c5f23623"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "6a0e5f077e6199f7a12b894e414bd17b"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "14d834a12493cffe7491b2558f13bbf2"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "df79c918ee6d8439a252396e92966ffb"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "edbe2b5b7d8f17d456cf03719229bb02"
  },
  {
    "url": "categories/php/index.html",
    "revision": "e51517cd194643e1667ae9f777e08d93"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "b5ec7ced6fbde8c043ce549347879322"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "ae746ebf1b8cc0c5c50614f02dd6c087"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "484283e35856a182d52c62fca1c2239d"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "a6c5b03d0cd4098aa0b3355de16c6ce6"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "566ab807e8c6a3ddc70c63a743502072"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "444a2888b1e978a53b28b2519a60bc8d"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "362a6b115d3b0fd41edcae3a70f2605f"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "f2808f07132f398558a61bbc9884c9f7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "7cc7317676bf5906c2cb2707fc9de630"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "37053268681568dd4f2de0ba43a810ef"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "488abae9d3209362fed9f7250969b02a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "d4f0f56cf4bdc4fc5e8138dcacab5ad3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "7ade1ff283375673b49dc6fc726bd494"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "50b9c0844cfc4375ba8be9cd21bc2a06"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "4f50c34d87ca94176701062a8f339378"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "6e05d3db9cc35a8f8d464e82bfa0eca0"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "4854c4cad6676b813b6a215d691a0929"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "aa682bcf1f5b8bbb5a2c23b6c96a77c0"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "cd3f3dddb7bfcbd28b8e533f1807fefa"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "8775a6e9bd3cc9787f4e77de293b8d03"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "af36b4bc2236ee41d01f73c01ad1232f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "a05fc64bc7f88b88c9fd24a540fe19eb"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "1fb108011e8e1175584e1f176f8f705c"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "84366f19aa982936a86f877080afa4b7"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "caee10645d8badbed772cf80d8b7725f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "5305e1d79a37b1f4ccdd7d048479bd0c"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "6a838b09cc19ac4fc2870013d8794440"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "59289b27a9c27cbc7a1e092c7a0441b6"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "cb9b8454ed3da40fe74dfb31ae0df62a"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "8df8d46bd473ae8940406e91d31f47eb"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "1357d5e648835a2c1b4588dcd5c3c994"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "130952af77de039e00535744bccce9bd"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "6b1c78af428f31296d3378803180a38f"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "741e2c39ef7e0cf41bef6c05735eb750"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "f3576b925dd8b0b7c8863166025bbdd3"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "46138ee771384d0da9acc8b45d70f4a9"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "76bda406a914ae52868e95538a613092"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "12dad7448a5467d9c82646812d93f1f9"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "ff0874d1a8d6d5c7c179b95296fae425"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "28684bcd1824456c95ef580b65613809"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "bc649598e33f27689b88363646281a50"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "83c6bb572b9097ff8a866caaa9776f18"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "c102bfa660462c67267f2ca6d78855af"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "cbb0a795e1d4927c1958dd2448b76337"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "bd7bd24a8789d45f720e6d9394d442ab"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "6db9e021b1ea4528a73864a4203fef40"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "d2fca3b60d7355c10f0fd2fb8a4ebac7"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "d5e55efb65ef0d85816cf60aa995994f"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "346d0cb863e395dfa676d536081ca457"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "153f1c86094e2a59cc26cc45c8886de6"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "3aa8bfb10f8a713359fb065b941bdb66"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "6e0bd37cab4bd04f9330f20257fbefc5"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "c6335f8b96c3cefd330899d095abc914"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "6ad21bed80607bc1f9cf6eb2736dcad1"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "3892d41f9a6c533f5723e891471f12f0"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "90ec87bd3825e889453a918cf1e8254e"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "fc8b9bf447615e3cd013138c8077e785"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "935f64236e92d680462c936851f921ca"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "b3c2054b9c9a414f8953a44bb0ae7136"
  },
  {
    "url": "categories/python/index.html",
    "revision": "7e7082f6cafdbe110fac783f507f1c6e"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "3fb7c1d103105637ed58af704bbbee79"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "9c1f3a54499b3518d16b07c8a6251b2a"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "cc038ae88a06a87d0108d59110448862"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "ca12869efb97367b424fdc11da0fa32b"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "66eeb7d411f4f736b3ef98d90c52c559"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "05f73de7004a655cc113e1458e54bb72"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "7babbf6b57905593acfab45fbae4e687"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "de2f53dc2646dc145a9fcc3ad7d77742"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "a08c889a6f6596f9735fe182fe7d959a"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "b1fd84b78c0cd79ed5808c21ac80c9ed"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "70cd6b21656d21c02584e86fcbdd89a0"
  },
  {
    "url": "categories/system/index.html",
    "revision": "e04283f0543b3731da286269c47e4138"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "68b2ad9d17504259620df88ec5f58078"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "3ff3abfac5ba88584319fb2f1f4ae949"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "0eaacdfd25e4bc3f166ca360255d3b32"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "94edb92737e48bdb4a48a6ea231f24b0"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "de600766bf5d04426210fabbb5352d6b"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "bab0108b9e3f4c503f8555d974a53633"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "36f2741267f10d4476a3c63b28e8c022"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "93f458c19ed30b4366e3277006a5ea7c"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "b7f26d059ed59f90a08f03eac470ea48"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "32042f201c1857c10ae76dfd6a3dac90"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "18fcf2322130c6c30e2b224e9a346a76"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "ab98541d9b8bfb24aed272b22b263f8d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "ea445e92f981caea07a758e10aba407f"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "fae0139843196189d49c0b10f9bc3e03"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "974ba799508cec7ebc5fbb4ff066e78e"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "e4221276032c46669b385b02ab18c79a"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "dd0fe95dba4d2959f3141cdf063c6336"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "cac189d0ac66b0b44465b8aab9f55cad"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e71d8aa44e8794b291fdc217b14c50d2"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "f62df498167b16b30d235f727d10d258"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "0111b68d81b587b2eef8f55a1d84c0ea"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "95e4fa831bb44e4b3f20912858a8ad49"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "b6df58898a9e3e28e6cbcf8f3ff9faf6"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "b0de742653034106078089a417060fe5"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "85baf818f1025f367b24cda25f6dee9c"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "cbfb409fca5ea5dfb92294e9b1b35db0"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "532f05b100eaa20476c31e919f039bde"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "2566092434336ff9b713492e0f5ccac7"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "febe4b81811b3911f7b9b06c1d845b98"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "b6fc43eb84ac0deaa20be72f57540ac3"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "db4576ef690b7805445528a33708eba4"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "9cb623d077f595eac8309b21ef2c20cd"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "6c4bf56ae19c49ffe2e2f84f01b4d350"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "e53c97a6a0a1a277b5fc5140ee42a257"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "4794678b18624dcae5f2d6f16a926e77"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "259583344f72397e43c85b9f2bd8c999"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "3e61610ce9bffd916095428e2af5d111"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "8bc47b60e05adcd59d983d3ee3d2b9ad"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "36a14db71bdc1a66f0d9858c2a36fb1f"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "d072d78b9276e55a16bf0c57ca1713f5"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "06c2b39626714a911da1c4a80bd6fd5f"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "a4c1fbfeaaabbd0608770041828247a1"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "8da639741c842c658a056e135f293ca4"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "e57b36db5af84573be3cfb1641003d24"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "3f6537ebb0ecd8ba7fc73be5888e6f21"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "96822e489fd4a710472ebda60d2b655b"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "f034bfece5c71f99a3ad5a72ec33ac3b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "12a59de43e02e8c39fbb16042f6765ea"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "29ba53ba50fb2976886973cd2669f6e9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "fe61cb5d0f5789a705527d1bbea704f6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "815b9524a8b515acc4e5f716fb401768"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "525f849b1f4da58a71e45b438ed5ea4e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "bc9f84007a329a0129611a8e7917b2a1"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "89fc28c0005ffa715724c27dae19860c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "85f5d41be61e75ab226e7c5afbfb6334"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "4a83507ce2955194897be888411676e9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "8bb13c20ebdebf40762943b12434272a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "b67525b17a1e13cbb52c520d30e9cd90"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "d7ab9f70043d1ace31cb4d8a90eac17a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "0cbecdc13edc4c2dc34e35f8243137c3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "f7b32c13ab778e39d210d561b48f16cc"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "1e090d1c34162a8a5d845457ecbfca38"
  },
  {
    "url": "favorite/index.html",
    "revision": "4a086626abcc51c06649d31f66b28be2"
  },
  {
    "url": "index.html",
    "revision": "9d9cb57c16783f683498b9d424a6a7e0"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "ac72e39b01cf76b50330ac9d856019a9"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "59e9848e5336404137066301713429f4"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "e503109131578f8db0f06386bbc18903"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "e9b3ac94e91dd9d3d5fc3677d0c7eba0"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "000df48ebdb42fe236c279d1c4157038"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "15d228dac05d21af32622f0164be62d2"
  },
  {
    "url": "note/index.html",
    "revision": "1359f771513c30c90c1044ac1000c1be"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "c3eb57dbd2c439d28bf5930a14d24b76"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "01e09fceba1cb04464d51a85cc45a7ec"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "b0938ab9a3473a933d06b2146f91b347"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "d03dfa4bfc90026f183b5f82391f2a5d"
  },
  {
    "url": "share/index.html",
    "revision": "61c5899e4f82c73c3694f136c436e610"
  },
  {
    "url": "single/about_me.html",
    "revision": "c5077d8c70e92f65c86935cba1b5e827"
  },
  {
    "url": "single/all_article.html",
    "revision": "91935355bc1ab76845c7c5c2efa5ceae"
  },
  {
    "url": "single/welcome.html",
    "revision": "33353cdf8bd0704504bccc5110f6774f"
  },
  {
    "url": "test/index.html",
    "revision": "1d1fc7fe659628b39cb61e9f9b3be88f"
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
