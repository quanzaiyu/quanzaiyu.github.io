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
    "revision": "b573602ea37c916788878c6089130567"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "aa435d644acf0e739ba7661128d27993"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "f2945f91af87ec515e9fb57a228e670f"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "bee2ecf33b9cc58f5fce3f3d9cfcb6dd"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "89eb0c572f24e2649f5bcf1e533bf9e7"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "29eb0ea2b0a8c5746c83f6ec45684988"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "00f47e32fdbefb9344b93195491ce36a"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "a35f704b1ba2577593a1a7e12a00b0ff"
  },
  {
    "url": "articles/index.html",
    "revision": "680d63edc87860c6ba70681a6876d2da"
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
    "url": "assets/js/1.eaa33edf.js",
    "revision": "0ff827af28de2fc7cba9e942e33b5fec"
  },
  {
    "url": "assets/js/10.38acf979.js",
    "revision": "b9e4a5fa05e3b1c2ba146511b2a6c1c5"
  },
  {
    "url": "assets/js/11.fc2d78c1.js",
    "revision": "11d52529f07e925cee1ca387dc1c6fc5"
  },
  {
    "url": "assets/js/12.127174aa.js",
    "revision": "ac30e7d8e7a10e6a91df051c5770088e"
  },
  {
    "url": "assets/js/13.9facbb15.js",
    "revision": "645246998eba7a69bdc53209dc700653"
  },
  {
    "url": "assets/js/14.09023cd3.js",
    "revision": "9e2a38954134410c62db1b17093692c6"
  },
  {
    "url": "assets/js/15.5e3bfa95.js",
    "revision": "fa9c03ada898277e4aea10387b0c86da"
  },
  {
    "url": "assets/js/2.8690f1f9.js",
    "revision": "39d4fe0ff3cc5de4f44f6a8ff9d23eda"
  },
  {
    "url": "assets/js/5.b2d88b04.js",
    "revision": "d5c68d23b0cc8d4ae4e2bac5b775a00b"
  },
  {
    "url": "assets/js/6.9cfaa079.js",
    "revision": "326e78b6679f8d22deddbffe461b4294"
  },
  {
    "url": "assets/js/7.12d7389a.js",
    "revision": "1f86876bdae3eefba994965c64565d17"
  },
  {
    "url": "assets/js/8.2a2bed59.js",
    "revision": "386ec3b516a301d711e779b909ccff27"
  },
  {
    "url": "assets/js/9.38d16243.js",
    "revision": "2e13a6f3bac27d77810a842e193ecf44"
  },
  {
    "url": "assets/js/vendors~docsearch.9ca4b8ed.js",
    "revision": "ffae475eedd9319be60a48484c5541b4"
  },
  {
    "url": "blog/index.html",
    "revision": "9e267f0abeb6de18cce839205ad676c6"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "0ee8d7d793aff5264f5c8723172906b2"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "d5f919a96ea71ffbd8042fa56816958c"
  },
  {
    "url": "books/index.html",
    "revision": "0309b8ec3cba4f41732ba4df222bd242"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "2b962ddd6b61af157f892d0d8fb7c6df"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "dc502652b80eb91b1d4f49e2866e9c5e"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "8ede815df37f748ab7964dcbf7f427fb"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "b33700faf6b4e04b03f596f7d71d4027"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "673af82030d218840712b4e589ecdf4f"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "e717a5b2f49d4ff17080367733b9af57"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "d0f4861ef9e1ebbbb6c45fdc6f4a3dfb"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "5de89f77b8b066e971ca12e51a53b673"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "75b1947ca3495eeb41c3c36d24899baa"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "8639cc72ba53065891f5a49a47753464"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "0a28613c0aef871ea1ffac0618eff1f1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "6db7fa62379d9e61a39cdfa9fd76d5a5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "c0d3581311a9cb504cc17bb3e3589103"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "9dddf21698698225de3927c11a1d2870"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "7878ab510ee33554496860435e121296"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "6cd8f6b78e3c2b8c3b28dd9424fd6dc8"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "b4b4964f625bf3a7cc022ca3e89bfaf9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "c9c363f3b4265e3d797b7b9ea907f023"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "8fc022deea4e104bcceaca7fb195dfa0"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "add880e5f4b33a2f79294095192fc87c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "5faad576d7711ee1e3c76afb977f22b3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "fea3486098764196a6dab1425ca84147"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "9bac88617acf344605b73775d98599a0"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "61da773b8151d2141aee53fd356b0a75"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "2a242d8f20611ce5bc21e14339e6e82b"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "767fbd88754e773093a8c3102619b53f"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "9a9a55ffa41b750ee34b0b8460ae1f3e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "69652dd2c5ee7ed89e043880b0991930"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "ee357685b393a33bb29882a1da422397"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "f9f8ca57d3a9c5268303784a2c78eca9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "f41897adaf6855696ee06695969f963f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "92e53222909705fed87a40c5cca197dc"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "45c10c0979de03ab6e1a67ca3ab747ed"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "5714bfc7269122bc398e52685c2ab177"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "d621440ba05c2530d2f9f6113b5891fb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "8ff45f7d9870cf426f868a8961dca61f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "31e12db2e65b9aaa97bf991d6c4bf52f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "ab479b26506071e46227f1b3e83cb6a5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "9d927a7826b5b1d7cc45117021ac2cdc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "0fa4ca4c8a4e69473cad9376434b86ff"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ce3ac943ff12bd0502775a9f0054745d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "8cdd136dad595cbba78b609380f9d83c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "3e1c6d5e3b30eeb5c72172b8a2ec1809"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "16973b45b6f6ccd021d76722ef34490c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "4092447ba4bfed47ad7d176b828dad34"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "501c56d6bb62d6f35c9ad8c4a69c6f85"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "fadbcb6b47d62d4ce50427cf4bc97d9a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "c6885237ae1fd2219ceeb07ff3e912a2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "9eac1ddf079e586dd3cbe1955c842425"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "f29995e9c07d5fbd20746d9812117440"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "378b5e8c1e04a9c8a0d7671f9f3dfe97"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "4dfdf101b498548a204d95fdcc56d7d2"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "c0ebf9c919ea4991f4799f2d15298505"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "83ecb209eb9c569d91a1f440c3b8ed4a"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "666589c3aa1e7eba3b017bb77068b0cb"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "0d6811e6d76a2fc524b8fe49e51bdaf2"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "45593c9eaf72c894dda16386454dc3bd"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "40995b36bd24c501b132218b0f336f9a"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "f06d4310e48ddff06cd560fc17f3464b"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "84a1694c27a7800cf943386ba1127c89"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "5764a79d56129f5b79ec6301a5214f61"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "082a71c5fed026eb99f7f9d2e5d91ad8"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "bee55fb6d79d27624941c8a8ccb08457"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "f4dd0b79579d5dcb89b9d55cfd73ef52"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "fee6c4d6531e43ccf6af05c33bc4d7aa"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "f47d0dba14fea903ba9c4a902bf43244"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "5ebc431582f51140612e01073ce5913d"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "1913161f027165355306f131ed3293a8"
  },
  {
    "url": "categories/database/index.html",
    "revision": "795c699617892645b5b5261cfc490344"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "4d60fd9632e42b2c661e0d2bad08320b"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "58d68f79245ac4c3e17295fabb7fdfb9"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "9fd03de12cba215ebdc265e6163e58ab"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "709152680c0a822265c3a11ac7ac8cd3"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "8696d1d5a65aa2289ba80c5d74d86924"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "f34d8210bbb5042699bb5e7c37dfce5b"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "c280db75626fbe4d37ab139ed8cd7b17"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "9d1207c6aa677da5d21fb20bb998121d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "3e5a80ebed00afc9ae83e0bc879f554b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "6e9a8a8617e359de36da91fad5d67a63"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "b1804430595464084a420f9f7992d622"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "be29016f93eb65aade31bad5e1c35975"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "1c4095583897d8288b812a7a557d8c6b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "78d34cdd7b4b930584d0f3fbf38971b3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "f8e586aa6c5ab28b43f99a738a99710a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "2ac9adcd63d1760402f4664805248a2f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "d0d1a50774c4167c8f90e3812b905e9b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "318023546830eda2a1ac8af54559f502"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "acdd640c5aaabb9e03b3c154a81ea31e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "3c0d064b1fc6543759a241e229f87cc3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "0474d7f8223e193bb562561088698687"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "89226958fda72d79bdbd69d72364b28c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "e386f57abff0f99a36fb3b52b2d1a6a8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "dba8164243c3926e4bbe6928a1c64417"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "ef41f1868ead251d6ff980fe5453778c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "7925370633b9a21d75e661963e073a47"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "e3837e78b9d2b28c0334b96928961f2c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "2bb295aa8a21bdadf107667e12999db7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "889643669b417f969afcab604132b993"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "2380590d2a8eb2d88736940e8c224f87"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "a2a9249a97bd2561095334dc1778bb76"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "5a9560af777d08aac810b8c1cb509756"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "2f07249e8142aa132d8f79f6bba3c492"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "a7f28236ee408e6b3067a34ae50a5f83"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "3437ca4da6d5c0886633bf0e0a10aa31"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "f1aa0dd2ac571bbc395d4ad36ecab86a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "f8060e650c19aa4b25d748e2a1829cbc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "8ea2dae72782b5719067fd95e59b7cfb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "21c6d1e5b6129dd8b03eaa77b521505b"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "d8500b158dce8f80c5214d1ea5f872aa"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "f264b1d2e14278b05f371e485eed62ae"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "4dddd62143093b73f52c33ff98d7c893"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "eae7d8486c3842c97d42dd9a7b38f170"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "81c42d732853734381e3fc5a1f69da08"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "c0859d0e860b4b67a14347475d2946ea"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "6160daa70b92f4ae8471c81e0025344c"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "dbccb521241dc53c95bee4fa8e633e1d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "d90c2fa44d01f771285aa82698645671"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "6d65849ca96c883fb361202ca3983e2a"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "2734ce35637b6d0dad6a346d06eeda6c"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "103826f8941a7c66a528fd59bd0ffcb5"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "2a68f7f03cace75280999beffe612c96"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "ef3cbb9a08dd43d14fac1738f7348169"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "85ecb70eb7c656ee8fa22a95f6678c04"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "a8962cf61d50648b4b49db2513af6568"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "62960d36a2935a2d12a298714785b3d2"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "1518c873ff74a3db54ec040f5454df1d"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "975620bbc760e315fab89b39c64a9bc7"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "9fb98a433f44ee1a9071b8955693bafd"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "632c7366f80ca5a46e4609b5c1c17827"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "4c2a11cdf719add1a187ead81d4f55ef"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "0fdc4f360fc4f786d8db89fc77e25b9c"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "5c23f9769d312963f92d5656d6711741"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "48f42519e59cee3bbe70c0d2ee9ef4df"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "4efbc309ec56fa489b3b95ec1d84d67f"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "de7f68dcb7205a76a94a68a0e728eb6d"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "3343edd90d3cbb73f0823395a0925d80"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "e8c3b66da21f2a85e6138e04817ab4ca"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "a6ec8a12d5d5b9a68cbe590947a052ab"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "664748c66ec3b21d32cdf290db4e1e66"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "e5eaef32380f9a110afa52cb07a705b2"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "28ff9868dffcd12ab2243712bb1c717f"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "74472d73b22dfc6a6a744437656f51eb"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "42c6f6eb93fd660ff9cbe1edd2b44509"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "5ff958d3445c76e387e6c64ea0eab1cd"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "90b82ffc3e0ca1def135a18e7761cf8b"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "4b1a2b8eabdcf33f403f116f018b746d"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "9ceb779f641d7c4dd5c5bb4330ed5e35"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "6cf98442619c6b1cb9bc77c566c0fc0a"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "41a955ab983e29273e6bb351c58422d3"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "0163c5091281e7c467344676a1b7ad44"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "e45b5dbf39e32b8f35998214a02c28bb"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "3d109d085f8e4ff48a4363f9d6869c47"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "27249ca057b48590131ca8dddf7ac6db"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "3d73a42d01721c172056d0e1627ce1cf"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "af02cf0d684bdaf5b2da0c0199b24728"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "1552ad2c8a4f6dffdd57666341a21711"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "48d5d8078b8a061adae1168c6933c836"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "0b2e53b85660747aaff932570fe65dc4"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "577d7e22c5d3af7f028304631a18d15f"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "db9e12745f9a2c5e7ab7440c6dbef25e"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "baac620ee9b7aec2d15110d840226285"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "db4d53a682655f1cfc95893fd130d66f"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "9d44fbe3a7f8a70f98fcd628b1896e88"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "f8d6f33b711e0d2aba1926cce9261467"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "93541a79f5f0886c3981c4cf10f2fbe5"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "d11e761d065a609ec9c1cba269448c28"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "b379a742eea28a7db06d128e0d738a89"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "cea23715c489d5fa3e753c9792ec7195"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "b73063dca22cd637a0ff6151f1485b32"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "3ba514189004a69a37238d2695afeeda"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "705c2a5ff3857eb10ddbc328caff567c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "0e593880a59556c709e50dd52bc9fb2e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "bf83cd1370eacdb7181fd82a4eae114c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "dbb9641e92550eef5a3ca8ec6a7ac831"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "fab9c9d6fbe08d17bb5e9075b02064e0"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "5e046edfa763a67ccb43ed79f38841cc"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "d676ce13f13b98a8375dedd46e647559"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "6e9cc2ba5f31875d875456de440e3da1"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "bcde76dfab1655fc335984a5c84a0f6a"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "c65ef1449d6ea3e945ec76846df39488"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "a84b7678a34dcc933dce6801201832a9"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "52028cd604a75c66e6070e6cf47a8c43"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "66ec7b56e3c497b8f615cd1ade9d3bf5"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "75a838d0879b765bb08a121dc5469098"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "e463ff27e1672c0b34d026e54fee355a"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "7ba76bd34899bdc1662c0615fdb392ea"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "3a622e5f13726ac975478c817fe7e047"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "ece531c25ae6da5bc017caacaf17dd80"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "55ac9144c2f2a60288942477c733093b"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "1e2f04dac92d8f19d3953fe8b2cb3d11"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "847b1bebfaf2f09e87d6df74829dbcda"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "f5bb3e0ccef279d674d379be23567d20"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "7e0ce4342097208a11facd1bd5c373b9"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "5082edec819052efb3ac42633ee4bc70"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "72d941eead77dfa543f7d62734c169e5"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "f9fa8032fdfa4be4f00b5b0120a734a0"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "8290f2ca78059dfdf3573c5279e1217f"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "8dad12dc5058307e266341dd0d959b06"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "d4b1e2230d26163c6e379cfc711eed3e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "3d31e373a1dcfb18e988cf754931581e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "88ea2d9b7a5b261f9de4534bcd77ed1e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "f80ddbb7974bf9a16ad2ef143c18e412"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "cbf7b894cc2d608ca32155f3857f4f98"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "3a208202a951d34f7744ab6a75db9321"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "5893ba8f529cb310c69d9d656b613041"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "6e63cbf17e1385dbc6673bba6bd2e3e4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "3e0b2f58da291c38c8106f620c679fa8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "f8a3578b0bbba11b47b91613fb23e883"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "62c0a8cda74888a0b09edb9f251fdac6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "97cedb7bdbee03a036f744f608b50ce6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "7758649bd90051ec99d7ebf40093ff64"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "972d549b75b9ad95c5c45c4b8e5c2d8e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "77fd269904a24b505931e30ea803775b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "09bf976680ee4f1aeea351a59fe5a942"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "6f802a400f19e0aa47fd69c811a4b8b2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "ac0a6255e635b71b1f6c2f977eb58303"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "15a36a3662912e08d79b59d7e39ee131"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "560b11faeadf07beb6b2ac3113e7fb2b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "0acedb399dc2970455d4ce7cb49cd0b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "76f9ddf8d8a3ee9b4ce936cf4db7ff78"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "02810b5c49f96de60b24c3a1cc09226a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "fca6ef658074b22f9cba24fbe3cdfb21"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "1c94a9786d440409926280328ee0aace"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "3a3b0418d0eec1c770375b029f5ddf39"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "d3abe59b20127eaff4e7213f67598546"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "2fcada28f94433d331a18f07ed24ffe0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "1a4611a176dfd8260a7e1290997a32cc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "ac7bf775fcb74d137af71ce362555e56"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "83aad6a662649aab526b2104f3317a14"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "3ce488cc1fc447328e1d65ec7d1ffb9c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "34385a4681bbc9ddf43cfb82cc0064eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "163900e1ddfc61d3c8bf0f974847f176"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "8340931c5662b689ff06a3a16af3f5e6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "7aed8acda2770cc32337a6d28fd32999"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "1460cbf00c78ed5600938218d99f436f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "68b579e14c31d5dea8db5961bf98ddd6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "eceb7b703327b17f2a526040327b9ee0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "ef072e116600d07a32225945745bce77"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "5ddc4acc398c86625c991e1d3faf5bb7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "29bb99afba19037ed19cbf4ec5ae1302"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "e55ac815dbb81b1346d14f84bbe4a6ef"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "75d8e7f09cd85baca66a58cb593e2f29"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "46f909bd0b92757bdf7a472dc009727f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "a6c3b479e75d0278015621f07f1ff9b4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "5ea9ae5f277044899b690214515368da"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "402579730d5b7e171a52f078ea55e2cd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "27e3dc9d803dc76536a3c9a54013472b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "50448faabcf9c89af1da1e35998aabc0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "b4acb1180d680de41dfb6a8b3ef51303"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "adffecd4dcb24266312258ad53bfc6b2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "59d270f10cf863178953ea2757eae733"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "8dd6c1390212250bb07100fb9d0ee930"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "b43d59f66077e598eb4ba8b5a0828778"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "a04787e1b82715af3da3efe2ef6fe1bc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "b86c89f5ad451b3880890c0394cb2767"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "66832fba0b678237c19e02b07090f198"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "8170d8fb404cc3c1d214a3a54469cc7d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "6c2020b120419890c596456e73f89a31"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "23ce03afc2ed94ce5c22d0c1840d7122"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "e2269328a8735867d5a0e0c0cf2c1c64"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "282fdd4c91074abc447a224d6bf0a4d1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "3dbd737fd1afbf08eea32bd11c879baa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "d691379f350d242b0ec340bf63bfa04a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "4c1716fdc2aaa154e6baf8db39a26f44"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "9b9914fefa84c9b7a56dcede85e39143"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "4f3e31d6e49bf0d8ad7c4f601ef5472b"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "45534aee9095eb261d5b97cdd4a9a585"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c8c76b3acfb3ab880d929b79daa7ac92"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "7a232e42aefb279e0ae6536e404e4eab"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "5f9b89dd6c709f72c75f2dceb6dab844"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "5aa02cbe67d4077d11413ffaabacf5a1"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "a045866234e9ccc4e629f1fe5651d17b"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "5d2739b34a325640e0f1b501a01e3737"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "c87add1e432ab3ff937dd2824ee0bd4c"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "cb5689e14d0673d0ce49e8b46df81abc"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "21ef2faf828e9ddeb3fab2bd0d2e27c0"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "3ac59bea30a69f6395edff05faba38d4"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "6c72845fdff2a108fcdf060d2ae6905a"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "e44bfa1b1401e3932510c0caac420d0c"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "02e727ffc34178a2791a8779d4319d8f"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "ed05bccc22db408fbff6be653fd807b7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "e6aaa24e6701eac449b2f2b7002f4753"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "74d58d7fc0994b243ecbecf8fbc46abe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "ccbd9dac35f647f9277a327c8ef586ff"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "14d5cf1aa1f30fdfa09851bb238ceed9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "f14b03b33931516dba500d5ae63dbd65"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "6a6f6ed3049abe5704541705ac479677"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "bb6f875ac7f7cd591ebf4e586a945f96"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "d2faaf98c764f791a357dc1cee8d7fa1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "da353abe1a8942f9e07955a34fad1e4b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "d253fc80ccc2b2a4956d9c668bc19592"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "0f7dfd9a3df994d9342ef9edde9f1ff8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "6aed3aba6ec097c70375f09346edda86"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "0970dda072bb6eb4154eddb2912a0b40"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "562b03c113764f6f924c2117546a1e83"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "41c71a3caea8478627360709547d109f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "ef5fefb485c463adb936f0c3f63219e0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "dc3b6f64921c528bb5eab966e2501511"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "08d1b6a0840ed4a243e51d725c59324c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "f4c10141063157fa795d3a51cff904ba"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "37662579d92cd71fc0a0b0ee9fc8999e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "609e2b532f20a1e629c81209bdaf075c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "d2c064a3804d5e0a35534cf13a00bd03"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "6a7e6a9c4e748095d6e3c00208af4677"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "4cee1abc47d7c91ad4da4d3965634dae"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "bdd139349ff1d0ff6f85ef5ce8e1b6a3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "a6879528d2ca86cbb0af3d14b0d4b41d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "b6a5ac7cc15de2a65cf317d905fe572c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "4722e3206992958e3217e31253e5fd77"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "1f22e4e903fa06cd9bb175057d20c2e3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "c5a43e464d1d1e595b62125f9c88646c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "bac3c98b426299e02ca3ad20da874160"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "4698fdc8106e2beea53b92fa0d25291e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "2b2813a734cbf622f814b7831e9279fc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "d659fdc7f8b568a5a77a57ceed59666a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "b134df01ca065bf0b04414cd31773a82"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "e267950b7f1d52948f1a5c1eb8beb3b9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "dd9908584e55f70561a2ce956cf43fa3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "b00f0ff94a42aef24517577eaff2e598"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "46a0cc46b359f2d05f5bfdf9ec7434c5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "fa13f0a28461312a530b5ebca6f6b2b7"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "3695dbce3ec8d4da7690b7a6acba010c"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "dfaa82693fa78dda225bc95f95e1622d"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "feffd7f2a6bfa1dda837504e9b937deb"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "c48d31b48e0656b1d5d87ea58ab2a370"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "76039223f685cf6e9b76cd42a459afae"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "be2169c013fba96853e1fc19c7d4ce87"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "57f049108bd1158889e3621d221052af"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "3488e5826532f3171529f53a67ef4114"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "7c7f35539c8cbe793b4a5d25f25f3a65"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "c4067ac9bf930ae20c4541cf3d10c3f2"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "3b3552e51bcf68b309a7bb07c2334ed5"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "249543665f903868c38e3182976eb5eb"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "80c210ab6181e2481bee4bb81b888ec6"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "4f8814fae3391ca0198073913f1878fa"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "47a8800c4eb9e189e3583c98556c5cb9"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "160b5623e39bb09c6011da58381e084b"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "2e0e5a59d19c06e52bb4f8bd8e1277bb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "ca78b6a863d99b95e2c3f40de7e9c37b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "6a4e3a30c903615b15a3e91ec9b946ed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "f12f43dbbe3896c17a4894d3414b9c1c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "c8e7539612d323fe841b87a973b8c7ef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "9b982fb6989c89df588f67437a8b4a0b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "2d7e506dc80c125c5b9eb5a610a120c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "b6f3f1b55bf38a9607cc37f60c21530c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "a16ed2c0f1a814efd19d19f584647d51"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "2bceb72a74c608e53d6c8ed4dbdfe541"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "d683a40d28f446ca8f6f516c2746a4e6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "a94917156d2a016816b4b80f39a3cb68"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "2f50a451f3718a751a1a76638c995c69"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "c5f7e3429811a173f137400217581569"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "238d0ce3b0ec8404f162d23eb6be521c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "3fba61a40fc91fc657fa007cf218e28b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "37833421211fb037f5a9a97020c258bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "e4c88439bd16111ab6797c8befbbfefc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "5cb20a3ced11257a2950e323c56a43e9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "0ae3108a1ccc94586cd5d606368d3065"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "573797d7acbc95392bc4fa17ba1ebe5d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "39e4c2627eca1cebc695dac6a519c5a0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "62fd116d457a0d00c84083fc9ab578d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "bdc78a4ab74648d1688826d37353e295"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "53adf2bbcb11379b40db3abb072918c6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "d66bde325f57f0554b1f633fb132cdd4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "da6ac9bb55c962833f07b552e5aa69f4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "1e5f069c74f8efe09a8d74f58a0455d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "ac882f41b4651b098b69bc92f423c670"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "863a4da622cc13357d7ebbb563dbe084"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "95ae1c9dc5833c71e60929df2a25e3f7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "d13d1468ac81bfce9afbf87dccdee58a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "45b73b01264d6e31eff2302ff257a81b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "464899536b76ef532eebc93f09f586fe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "d0c085b621eac17315d79df05156d741"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "9edbad980d5680aad12a81da70045c15"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "e0bb8bf2069025a6c2ff0acc1ff8f8b1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "b2295f04cf7e2266adb9d56e38ab6b41"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "614da9cadd912e4c56d8f7d9088caf65"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "18ed1fa2eca00efb9af4e145a7c69fc1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "63db5f354fb619bbe42b71a2f7b159c7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "9aae50abb673aeb9f3cefe682f929774"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "d88e3ac9398bc3e363839c838e71ee02"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "a78fe087dcfe62d298f819cdf01bf8be"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "344cc333a598fb66817351cf5065405c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "664d172ce7b9d1e3afc253ead04e8f70"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "a56b229a1435cc8c84c189edeaf074de"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "ac3e42b0d56c17d1f71ad130097aafb7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "bec435e136b86473ac3b1b15f40ab1cb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "f98272abe7b51f3f868f1b6765463292"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "acd191cddcf43e5084342c70a7a54d01"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "301a1b3552a50ba84caa7ac38df0b6a7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "b18cfaf50998df31210856f8892d1c51"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "90ef5c149b6389f59acf9f5625767105"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "331a13556fbe8422a750ce8a4205527c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "c4908a5e3df87b8d6a0f6f5fe9142af6"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "a6468a867bad900484183eb223a77265"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "97c1ffd12abcc4ae7d4ac87fb97eaa92"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "da6975c858749e539980399349a256e1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "1568c8112b38aa7772a4d8614f54f81a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "9932566b480b67b92625a78d2518e5b9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "fbfdab76a149541f4a50914abb43fdab"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "432e71592bf9e4dbdc13aab73149409a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "6e324edb29718542e0c6bed272553bc1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "5da9ac7bd87093f23a1b000963676246"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "033399483c0d04ed1c1dffc336274797"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "c8813d45d0fe8635f5ffdd2ab78acf55"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "6af081a9d2f4d8f2e5495a237d7b1830"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "5cc764a5b2a2b8f558406284f019e491"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "536c77befbf08926df9d94342efc5127"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "968b0ba242d2859d926b0a7e482e398b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "0ed39b77e9edd05b5180c3498f329758"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "4eea5d85ac630aa9ea9535ab87b28b29"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "9f3ebb279fb15069805f8cbb43b91589"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "94f29e1ad2d9c61ad2732694fcc92535"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "2b8f9672b40b87b39b8f37f23b9637c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "0882588484dcd848be6eca2827e9578a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "59838b03d3c83c6c989763902e38cfc7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "85cb8ebf992b775d80eaa36484ceed63"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "a1709f5bae84940e19fdfee6924c068a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "900296814e349bc734a4a8befada5ba4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "bce230c5f69fc93be33f3249b29da7cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "11d27e77025e896c77a867263f6c33b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "90a45b0a929a5458e8d4f96b60019d0a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "2b2c76ae7f80cb5c538eef6ee4c68660"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "7498ef7de716f85a4220bf3655a00c16"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "b3e9fff50299dbaf9d11f1f52b1531de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "e196443332b5e715a8b1781c3631be87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "89572092a6a551c9e4803811e6b3d85e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "d052aa9714b5fced8efc6771d422977e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "96902481bec03c51aa97ebe7127fb01e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "a57cec817c084175c9ecc34fc5533179"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "b3a40e149a5087f376d13cecb4716d99"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "651703ad53cfc7e958611b35cc1a2ed5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "b52f554a9ca86f18051bf83e6000d009"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "4487c96a3db4a0e8d2a0cf033a9a7d0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "0221354566dd23f53ad2a29e0775ec3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "24839200fe3a9d92da9bd0bec5ca6374"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "516ae55d5fe1219f44eac221a9904f2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "9475c6f2140c3acb6827bb5a90c02feb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "03899453bcde7b35a1615e45cef0e81f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "321775b9f32ef952c3f6c2018a0954bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "5a66b83cffd7b6d095e4abcaaf5e3fab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "45593ed8864446251d5be282a98c83ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "8ea435ddf166c7705ba71309f874768c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "1768e3e87745864e648b28601851080e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "4db44cb4c4bf6faa5e9646fe36ee0999"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "0b875c3e0e6ecec30427ebcc2cc731c3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "f7c728d2ec660e5ba68a5fa2b912cac2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "ebaf66fc9509c96362d9d3665815d8d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "00538cf9fa55e71b3424deb05b55e751"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "da76d52e2f5bd32f954133d1195a53ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "a89940529c15ac1c02fe1a3e2100c8bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "af233b72fa10d586a831306572c8aa95"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "29cf66daba0a40b044c8fb1d66738cbb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "3c69e367e4df4604b2462c03fd489ad5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "0bb9d85c4f12bfd8b6aa1e8b0b6c46e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "31ac6b6805fef939358a6745398c044e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "747ab02979fbd94121c6134d7cdfa639"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "4c95c79606048db6ff8dd0157c4ad8fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "c96029016d2d394441dc41caeff19425"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "027558823027ab9a83116a6851c92116"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "7c4103eae5d67d4378bfb1c7a8f8f758"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "d3ef805f9e22c94bd70cbd15219d7577"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "76cca1ca5453e0eee226cdfbe1338ffa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "5c9276444fb2c5dd4dc03d496d1d6c88"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "0df09692ff63da30784057525670be81"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "f78d320d900c573b49b4ce40f975c4e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "300feb19a85fecd2ddf932144c5ccdcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "f0f7c57bf9f902ed9f7945a3fec285fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "cedddc54da3fc91599bfc00a4dba2b40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "77dba0589e77ea527a6ce78384ab4499"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "ca816cce7f8fc7d56854e0a587e8359d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "edf4c56f20671c24470aead7ef0f68e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "56b96de3ba5ec0906ebf19d8fae5e28e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "abc8de649dce727d61e26d2c88d1c314"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "01635b3ea56b08a9c9fdac8ac4d104e9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "454a43d356d904c60fc82b92d6fa9db3"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "0c9c709316f948ee574f7aa46b06907f"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "aa6da52c90310958053bbe96c425fe8c"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "9666c922526ee5fda1bb4860e05c2660"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "48a34c765965b51a93d19ba5da790412"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "9a98189437376103bdfefac51831127b"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "cb7b4ed0eaa1208a594793c0eaae1c8d"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "89db347adbf1097ad80bff0c23211e98"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "fe05d19b1456480081ddd7bf2f3fa239"
  },
  {
    "url": "categories/index.html",
    "revision": "590543143eecc1495c639e5b1cebadd7"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "8a66c2453573f52a31a1d0abc044c082"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "553e0239ba27c71c1275425b1a19de37"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "97cbf91d17c94c898d91bce7a230dabd"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "123ad0230377b0bcf48ff970c387706f"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "1d97f6ea25c609de8d0c17e9955f553d"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "b113573d299a8cf3051975b6da547855"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "5d8ad6507232e2b18f129a1771546685"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "2383113aedfc96a470a631f672cf6a7d"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "85e77af876acbdd39d26ddb263449e88"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "fc2a52d78d7bb617d6b603d5c106ec12"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "761ef0405dda20766ec42f20965af965"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "6e0a8ff08d8cd3850f3600384e20682d"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "7ab3166f9dc2c7c276f4dbb6e3d7af79"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "f77b43b788a2229175595833cb962fe1"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "0a1a0141915787537404f16db4b4d16b"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "9ca000895fd7ac5d74f7fbd1956c9e89"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "980c98775b9fee48f1a740c5348236bb"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "1acb38a7b461412c4d77dac720543a2c"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "cf98733e5d258f2945b4332e76a4aa4d"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "908755ecefec4f04e2c0a4a99fbdb936"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "7122423e8b0591bdd5808501dca365b7"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "7b4d9dbf21e5bcb93bf052a2a7fa50d2"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "e26e3f9aa87b7145a4d0fe6ebff65aeb"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "3ccd1103f1ea5da9d7e6649d726b1187"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "2b600bde9a3ee8a3002cbbc3e28f2b7c"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "2c97524293af9defc53a58db5a8fadbb"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "1328dcfe0aa63a00483c686a5124b628"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "c735d2459710f1e8dace9f6c03fa9f21"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "3df33eb3834059f35e24b641c1ee511a"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "8c3baa1ca0c9a470e73582b88ae46433"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "ce38ef9f0a6a0a8b194d599993378f9d"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "7a5513819cddc25512b7e3e91ea2a3a7"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "92d6b8ace8014b39ed6d5eb0027192f4"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "65663c405d2b25febec6c831c37ce209"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "820c38f7cc93b6cd51941a1c9381bae3"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "65c7810f088c57bb4c332b3fe97fa084"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "3830a0397ccf6a79820b7a45adf16f6f"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "6974dac5d53d26b73a64efd66dd0a30d"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "443c4da1f8ab32cf47b6298463a13e3d"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "044e48f086af3b028791cb992948240c"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "5189c851a4a66070fb2d4d8f49d1f07b"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "5bfd51da82f3b345bf928b469b7888a2"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "9bb36e0af8f721532c7931241e77475b"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "a1ab6d82de3fe3899815f54d67f5d267"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "4e2ec69ccc6f172a4689607ea85fdc94"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "601d03d8eb61dc5b538ff22ee21309b1"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "ccc0fe167f3bfdc601ecf3753b037988"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "4eebb0a8b7569f628a0b2b0fc4648fd4"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "b79c2bba3d6c09fa425eb8ff5cba8438"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "6882ee1c40c6b5be1ed03617c8436736"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "beacaa8b49ab4a6cfe30394ac7783b8e"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "0d64278818cd1743d85f1c7e15f9cb1b"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "0f190fa8ad840316453b39896575ce66"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "c388ee289ae5b44a89d30cc8ce472a86"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "d0681e62d1ae3e8a70bb48bba4b4965a"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "ecb922ce53533a02db18c4460a4e4a6d"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "9423a9786d3b94725ce6bba831ed4090"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "0fba3c296fd428317387b8ef5c7ab25c"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "ada82d2f6bcb22c968e6289806353efe"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "4a027e3a0009ebcb74b2a83b7815d99b"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "0438c92e86f3e0ade7586bf48343f737"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "138adf7759ceca1a72bb2e514448765d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "537bb8ac086e1c482eac201397bfc5d0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "c2912162124db92f8a8ecde9871344dc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "133f6101f5d8600bfac903b139152048"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "5b5bd19eeb95ce84f1396f4083c8eb28"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "d3fdd0a4510a9472b513f14467466d3f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "8c68c696defd15b329aa46b3695afed0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "d61d076defbaf1d890aa6b34af21d2df"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "395a0b5fb824bebef9bc84df33495877"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "e2e247bbd044c8a6fc0c884562d6d9fc"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "5f0ef8de4a0882f188804479201f962e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "e223ca908d84e6a6621c579d7423d5a9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "e0a950dbf9fa973b3166ba7e599c4711"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "7dcecf97a2c7c9e0843a01277fcf580e"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "e2ea8d988f058c962df29a1681af9cb1"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "be8c702a6c7ad3e0985187f07b910b0a"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "4bc0d8c2db88913c30f726a32cd0ad18"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "c58b208f99faa79a62b19aba39a5e1b4"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "bd8723487713088a061f99e7237ba445"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "11c77249202c0d68ec29a6077401d0c9"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "244707ccf28640c20cf076d598381c34"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "4fa2120162b04ec805ebebb631606b9b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "f9d2eb4412935ec78e8762dce1cfbab4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "24495cc7bd97ff7cf1232f22c5928252"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "719be2149614d7531f1154c6b6e577ef"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "a7358815e80ea436f155a56052ece169"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "e9c0c0b0e1f0aaf08af2c0262817c5eb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "0a69d79b517e4e8088af43b9d480adf5"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "1e8f51d796ad36ab3c8f2a43e87850c0"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "f44b30dd2bf7e07369fa378a8dfefade"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "91ad6ada36fe556b445ae89ab1dc13b0"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "2bec541c95ca080685bbd5749643b695"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "5e9202981ee2eb451a32757c67f4c992"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "77734414fdda930adaa8e06676eb9179"
  },
  {
    "url": "categories/java/index.html",
    "revision": "82ea0b6a038f3c424a5be792d95c1e48"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "2fccff5b407644e10e0ecce252ca833f"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "3a8dc88fffe8a0df9f86a159e3fd4acf"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "489082bf43ef0cf0ff73f026595e9a3e"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "b70de0749262854a5d9d168ae9f8d47a"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "23fafdd0e607656439ebe7dae7892c96"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "b03607c22179b6d4be1a60f50b395165"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "9031cb73824e37fd8557e153f40ae115"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "3e1857402001c8aa928af4e56c56cefc"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "80094a5ea93f42d3ecb137e29f405e25"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "49338029f2d4222801d1732ac5c8726e"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "62f3afc46db40f35667763046178d6a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "30ed65078bc51b0c0795a5f828a25cf0"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "3a0b7b80e08badadc2e9cc293835a7e1"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "f43cb796c6f18673853298c644f319f3"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "42ad4b78157e99001c7f5db61e80551d"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "cea954a938531eea222658c755f637fd"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "4498e49f308634744392e58bd893c103"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "ed1e344559af9178f783ec2354aa6522"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "0abbdba2417df41c522aa58048f0cc0d"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "b29655212cdf093914ce832779e4ae39"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "cf25bb99b40d87d51e6a4fd35b494ab5"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "22bc71a07bce122579cee529ca2ea0c2"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "f6de6872e3efe205088879866d5784d5"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "8ef7efa92fe1b3b7501abeee751dc3f7"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "3782970c260e8fc1312ea1f754d3f81a"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "b399957e34eef245e8d0e37e84f60523"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "cfbf5d7f916a69ea7088aa1e5bf65a59"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "f8292f2ee9baea4d5bfc1e19eee788ba"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "6ac6ef88401ed02b07bb3d0fd8a0a75d"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "c8f763c4ed4b8265ec2c32be2d2effff"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "4a0cd658d470667849ac37914311d099"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "bc0ce24f419df446b68dcf57935624ca"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "33e973d8cde83f9a428d89b9f3d98022"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "953b9136fed3d378eb997747c4b49cf0"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "b29fe89d2e923719999e5cfdecf84768"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "ff28286d78b1bb28a4a7be4947a112b7"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "73659b6b85bb33fb582240e7b871c29a"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "0edf03273fabc4591bafe77a4a346de2"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "744a8306b8621bb4cf4a4bc587e00f3d"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "4375daddb863d15f19d2bad1f35dcf34"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "94c260da0390d05785223b5c8c341144"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "f1e092725ed63d6bde9fa4c81d91487f"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "bd82edabba8cb5f95113f4b2078a458d"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b9a66d270ef0e1bede593f104e972976"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "87be401f85f9544606f691c532b0cd5d"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "b27b8117aa85c97c51f347914b9d06e6"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "9943da67c5e38476bd11176067276b10"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "0ee2305190f098998200a11c86e82398"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "7f66d1b47e36deffefa6bc0319187531"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "9898f879186b166bbdf5c2e7200c8ce4"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "4fe252ec4e023b2a60a3291bdec552eb"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "4ba21e502df70a037f23053cbead3b13"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "7b7ee1c725cea1fa1a4f97737e757b7d"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "3f55e924c50a4e5af0621a5792cc516b"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "29368300c41450bfbceec97ed35a58d6"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "2d694212ffd88ea8cd8fb2c2d095a6ed"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "abe4815f06682e5eb7aeb8fde179bc0e"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "0ba549c484d01fab8d86b26702c70293"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "efd4277b747b1a7d5a647a9a210c0bd9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "e988f9cff0fe1a5cf64009c49343de33"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "650e2e8cb7f91a08b909c08c799e2a01"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "5a3e10e45f8a14190895c9795106c5a0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "3a4299020ef1d57e5eef93ade3b6f67a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "629802cff6179186baab634acddbb560"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "9032e6759d393d29d378ca240146e71f"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "e2db502e84bd7a95cbac54f2b11b0fff"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "feee1fc15660f7e34302af2fe3a98daf"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "a0cb48a6ff2d3f6a48e9df203f008cf1"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "a4c8edda1663cbc0de346d3408d5e8a5"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "98319913391fbe70219fc6857a1f1322"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "11bb7813c13f5f8603aeac45c2ae4813"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "2d62f7a15a56a51019e6419088a227af"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "060d60e39c1f606bd8ecfe00c68d3a9c"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "b187d77da0538a285c154dfee24d1d2e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "5c0b37dacd700ce1a5e09c27c09e78f9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "8a573a4b8ea7fd6d71710c2f0023dd89"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "9cf1649b4176e10a7d2f370c8684c283"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "011447f4bb997864a571d8a729c8bf7c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "58e1f578318596e4f410204aad25df1d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "2423cdb36da194e13f195eeb9a9c91cf"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "867790e255015b22256af2eb956e1be4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "e2212b35c1f319d38c8f6f00d94048d1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "e0dd895d462179491219d51f8f227e10"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "18b747f18073a2bd7bce47272ee4c7bb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "61fad627a72958c1a0836c092b032e3f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "edcf6a2796b872bd2c5f9ff01face279"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "74775598718259b172b8d92b67350509"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "c3e4c4c81bf1680142e0a2f946227ea1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "856a1d5f10d42871b826de790ecab94d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "6107b79bd9ce09422d92a84ca44de8fa"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "8001cfb3295a287389c9b6b35e179234"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "bb1f2caf4b4c482bfe4c4f63f5c58a47"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "7767b0de073addc24e0239f656854e4d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "bb0b2dc791e5d7f8d5d733c78a0fb65d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "d719455cc213749e41df5c1f4d984a15"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "dabf08cdb0d76ff3a056134030c29963"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "d96002a60a2425e1ffa5cdd4ed03b8c0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "507842c945a77316482e19620b81273d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "ea118e409d5492c83084ad67da0af60e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "b0bf96187d7e2dd67eeddb6771362b0d"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "cce8e238506c10a759f5a3c75f503406"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "eb1e2fffa4b0e18c00623e0cfaae90d4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "9baf9b4096ad334f876b4572a23c6bf8"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "c9e26b36c91cb606aba876ed438727e2"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "ba1eacc01b214744944dec1b7b0541bb"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "d956d04a289baebaabbe81cffd4f1114"
  },
  {
    "url": "categories/os/index.html",
    "revision": "6d12786e3a3f058f577d4af4dba2c511"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "5a71ce2d5d45eba89cb8ec04ce3fe7f1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "f59a2dff853840d1f781edaa9b0f172a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "71b82d075eb63b2c7ac5b25f93bf9722"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "0fbd7631641e0d9b4000d714933b1a72"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "d9f85b44a0718826b8824372fc8b48a9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "f8b5078052f4eb4878f3bbb416196ad7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "38b990ad15e75baf39370dcf0cf6499f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "706ea902782d9be5c2ccc83bc170dfeb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "d8d1910c10c2fbbbf1b9d3a32216f2b2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "5c418a99e23d01f7f97ff01bb47e6904"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "7c5f1cb49200f7edcb861f6989cf6c41"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "44357fd86bba4495231b70c153349072"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "a81b3618b6b5f325e39af61c563abef4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "54643d59b1c5d6db546ea53f527f42d9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "16aeacc1409176f0685d706b5d3d1ac5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "98959fa36bf8cc5f36dec4f4235dbccd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "1568e6e0ade2b6e2c9208ab08eda4540"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "d8d89109abffba51aebf133baaee9d59"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "36f13aaec0f2439219551a3ffb6559d4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "7b472de4edc8098f024a31732e3dc7f3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "3cc2e1dfc40045208d05357e5abb5830"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "559856bd865ab02245f4b24560b7f285"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "6800e6cf9e64227ea9e03577e3d0d6b0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "0822819d90bf96854b2b2c486130edf9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "78df20077a20b2c0cd5500fc742d1262"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "7000dd13b78f91241ad0907ff206f1dc"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "67489f8a46c1564b12d7630e87ebe456"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "57c5e08d1799f4249c64a62f7867170e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "97c0170cdcd5686cb5c622774b8ce252"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "8b73cb1e2c53fd0de7f2ba45af165585"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "ce50b3be72ed1fc9c8cc9ecf8933c946"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "68512ccd7e142e35ef319a328036473f"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "8a5f5b64da549e61079430c7c6813dd3"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "4cad74d76e7826544bac0cea627b608d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "1cf8dfe86fbdc49acff3db6615af671e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "61584844ecd75d4e040d84062662c261"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "6e79680360c09bd046d23f8dbd9dc1f3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "96c22ddbd64a6ac1869f690cc5fd131b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "d9b8ed69856ceeabf89c3a67b3e63f71"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "16e43614b985d96cfeceee679ab3d808"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "cf854a995d68fadcf36a6ebc7e357406"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "7f0bbe6b1da3a0665f96bc350db79297"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "1e8ef813cb1f133c39d2eec1b55218be"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "b29fdc49efe922494e69027c94cbd1ca"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "5a60e9cbf132c168a0073d2c41e67dc8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "18f15d1fcf4efc7ad0c1e2d3aba18938"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "1be5799f8e798db0b9e86826ae7544fc"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "9f532c91fe4595390f3444f87c792765"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "a33992165431dfec0247960d56ad2e77"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "b38afe0586e47be2c8df0d1e41e6f7c2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "dadcf46bdd1d251e3241f43f3a190aff"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "387fe8ff8e58d7fe98ee76aa0f563b3c"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "899c602c3b68bc56c25d63d71745a345"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "08e53a0ec8ae2a871428e322bcd147b3"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "83b98858eb8435660f48722c4979d5f0"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "74a9ec7f088e15cbf34d00c4910f5ffb"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "c6fa2c69f0040a5ae410f4829a6bcd6e"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "b793e0d9e7fea547e3e8e2e82d569d3a"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "58e48e86ef611fd0fe1a838dd121c95a"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "648df5d23b6152058380cbf479f2f208"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "189b447e9a63a2449e69f29a57676905"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "20f41d1ee0578ce521b061b66589868a"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "cb6da3398177b6b52d82b285c058ad47"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "812f9c6cf6d2bd410af44de66fca30b5"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "4716305ea9532b5e3b46734c956d9589"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "d6c4edfb94944ccc418458c394bb02a1"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "eef658541a8e170642608e9413e7fd6a"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "faf924cdd204a595f485684a3f3c2b88"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "e8eef465ad3c5622e807ea48bc936378"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "bd6d9dec7bbe785dca495a0b59399237"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "7a2b42ec954224da9f006743279a1c8a"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "5966e9841cc1a4f6cd5044972302f880"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "f74486404535b83705b2e177910803d8"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "268aa53cf5195bf1eb331c6c7cf56575"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "1127cfed0f1e64d11fc5c73dcac55fbc"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "f4c84ea925ac974842b28b45d7ff018f"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "81da315c4393e745f728fec9a55d9a12"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "f1c020f04bb1902850ce91467cde64da"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "a20fd5bbb6cf404a317ab7c88a40b9a0"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "9d10011e8708a70320704e712f2f1092"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "9f64608d681b202bda071a2bf5f5d653"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "c5b2474af094c2ec5439b48379b3aae2"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "86300aa3c6ade91d8905b70f44c7b921"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "859ca829d5a1a541242b3a473f6491ca"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "bbf1629f38bf8e7d9f60e322a3a22762"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "689573666491d615bb9b3d48b76d1020"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "92de16811c315f49fdf452e201d2c196"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "9a9b08a258f50135591a233000cb0026"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "e4f3f60140e82722dffbc1d23878f296"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "a2c107f6616231dab409c0c8e8a612f2"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "7b63549ed3d23d2518337ded74085c68"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "7ee219143a05702f75b66a3fd7a6d746"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "cdd76aa1771b9f9286b1e629a213ab56"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "2871af7cad42e5eab492d1e6e8b68c9d"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "ff843ddd04196202b353f7139a19cf07"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "304939c18df11692e975df00017a5040"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "baa9c4f5bfc0892d8180156d36fb9a4a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "a6c48d5130a44f0e49cdaffe016f267e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "e7723158ef95e230bcf6bd7bd79d157d"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "e22bc0989e44de994cadb403d3fc2cd4"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "a6d8dac8aa42c21f94f47bb4b59a88f8"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "9e8b12f3996763a3547c66234750a4b6"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "8d4ffa5fdfe336a91d12fd15cebb1577"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "dfab8677ecc17c3070a5a12fa7745ac7"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "b5dd63d4fd0c1d5cfa3a76f18019968c"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "0defc34ee5a5532bdf5458dab8944084"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "57b8ddebacd1ead00aff0936a336169a"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "b592ca9f83c8eec146e982258496dbec"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "58f204de1d0181cb7afeb6734608fed8"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "585f3d66072b4c24adb46ef8e4df12a0"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "1989888f9e69388efca768c4cac7b865"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "e27d8900504b85c587b7f58771456aa8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "6a903584d3ebe1256851d75ec322a9e6"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "5966e93ea4b7c60bba6efcf3981fce4d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "21c87215312279df64e83ed83e5f074b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "f482fa3aab8557b14e988164ae06995f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "5319444e533d571546b7c44b13720c7c"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "5144be00790c32fff633628bf2ad4f7c"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "c7cf957d13dea50a5c2ddb7b2ae004aa"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "5c76cf27f7d815aa29282f32976c2895"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "102c36e7ae21f282bbe077267f9f4d06"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "e7388ce9dce9be62028648af259eb1eb"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "b5b9ae3912e8f43e73b1fb21978f5e49"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "1c29ccdcfb05c5c42cadc5955b5dde08"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "75296160fe7faf6e6dc96203c61db7fd"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "72d2fedccef498150fa81475375b0f1a"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "88233824cc26692fce042ebffe8122ae"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "b5cdc1efb656e78a3a9c27e9070137bc"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "f2e8f674b18d12f6164690e878994140"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "01895b02aa59db56e70336a82e3923c0"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "05a9bfd76fef00be4aa90a1c3aba4a4d"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "786788750a6f49ba286fccc8437d07dc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "6deca8c6f8ca548f636d7f16080a265b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "b53596f76bcba0f4577ba63e302cd44b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "ac826db1896a9eddedd4aabe95f7d121"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "f5396562217764296077a5f64167ef00"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "4afccbe3f08d130cd7684a3375ee8226"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "f172c6787e17e5dc77e7bf2cb0cc94f3"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "fc6ed8de7c305eec82ffbbf5e1d41140"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "3591461dc714f984e55dda7123445a21"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "9cc504d57978a9a56f663a73a96b8f1f"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "fb9071fdeb864a8a3c1deaa08da5d667"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "50ed1e21f3ef88025a7d5690ee11da00"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "01040d10d2e0951cbd6f345c9d640b53"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "5e7aa355df48a1d58625b5fe01a15463"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "da8882d4e473d6b723504960bf25662e"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "ca0cfef31a62c67f367c4681f86c85fb"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "80e95a811100dbbc6041f1dcd7f078da"
  },
  {
    "url": "categories/php/index.html",
    "revision": "a1d15e26ea2e498ee930afa08ad307c2"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "946cc480e5405d4169f6c91f0c1524c9"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "dddd2761f6a71bfc0fc2b11432a6844e"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "baf5bb6c94b36237ca2b705ea8573c65"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "383ce34a81ac2fa3657fa58d61ddc7f2"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "4be45a3c664bcd442ba616b45f63e692"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "3deb0a7b9241103113923fe11d64e003"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "44468a88a44d3c673caf8e659f1b3d17"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "553a882dc9edd8c425f3bde3a0ddc965"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "eb296946896f23c3fe1cc96f2604f48f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "d3d50370fa8cc67e8ec7f88ece2613c8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "92786596e61511b3ddbef1f2d2f460d3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "6fcb7a2a88f3b2d47f503d8200e76e72"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "2b8b12f7a4b5d2e81d5423514bbac3ea"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "8f2c98847072e9d2bba4831307b604b5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "6d97dc25e5ebcee398fca64026ee5efb"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "d35571d879abd0ab2cef78edff4ff95d"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "dc0035af6d1ae5b7448007825bfe4699"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "b5b2f4916728c2ce8a6206b3b620db62"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "a2e1330328e373126f76713c59c41d8d"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "5e501c1e2bfe67eae1312e3f08f84911"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "62a2977eee1ff327443390daf6e1a080"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "af6b7a6bbd063f09bbe7a06be7714aab"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "561bd4428cbb8d93e71270e0794009d4"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "1484c6bebe51e2d8c63d6a5b7721d077"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "14f9fe6ca94f89b6702cf94d191ac44a"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "3cb8b2a3ffaff45c6e74f1cf084b6a97"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "66ca6a269ba9dcddc66e9e8a459b2f14"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "a2ead1836a1ce193d940b0d04f537248"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "d4a1860c97bd15c2d9eb0fa1d9c8b88c"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "858b157ba90f387057af7f59c3966a85"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "b314470067c07b904c9e94752dd1d268"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "143479893a94c7fd169f6b5ae5335d35"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "045c25f72f05de3897a5d1fd42507ee4"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "e75d1e21ef9be4efd319a89db531b3d0"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "92a1b15d69c1317c6726e93a251e0e46"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "2906f41e26d5f1135a3104c85dd5ae61"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "b5b7ebc43ef7eae235c96c35235a4611"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "b53ff551af9018cee71dbad6f15bef82"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "081c0ec6f8a2733646c2e76722921f88"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "7ac27c17cd5088e3065bfde28e316f58"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "60a1a4647a6e244364998ac048676caa"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "c51091bef734bb81233acae0fff0844a"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "2afd24f3480c2cf066e5b62e8c29df68"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "25f70f37790185a2153028f4f7e1c8a6"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "1bb04adf1642054f08e58e6308c83822"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "acb574a25230627dc211b57b31f7f8cf"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "2a26644e0d52b569ed8afac76afad9f4"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "b860354f1052b5a3a256733a107bafe0"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "ad0e825a3f5128db5559a21a0c1c2b77"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "811c6c2971bc573cf1841e4109b3aa94"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "bb4002063b78b9e6fc26c0150c93b0f4"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "3c73ae1fbf0aab3d5d0a73fe9f06f496"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "9ded683296ee6ff1666956874c6d30cf"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "788819f1a517e827fe957b37aedc28b2"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "ec5572e8e037547d958caae45ce7fb91"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "8bb15c6cb2a632292b688d89f9fa2a32"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "34bfcf23d85859a030507c9081269097"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "ff21894d3a12134c37b92b22f99e638b"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "d1212f33b9d3091942f53ca704014310"
  },
  {
    "url": "categories/python/index.html",
    "revision": "8b6091624a964c2f8f1986a56880a750"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "a251ed40263b8a3387961c1d31acc2fa"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "bbfe7959b99d633a50b3a3bc45730edf"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "741a935f89eecf29a804844d171b5fea"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "9f569950311147d43635423697be5ce2"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "2a08b09df4705ac40b70fa098e1345e3"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "96aafe5becbeebf1db525a4ce67cb004"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "8c2c441e7828406bd92aea61bf708a44"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "46abc494ea8201901675d931eebd8b3b"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "d3b0b7fba36cb261a1861afa0ad6bf82"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "71422ae9f647a10203dd9eeffbcdef1b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "ab1d0a75f7454766420aaea12c183aa8"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "6852edbfad89729e2099ae2c708bb223"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "90fa87b4c8e316b5a713d43c5a5bc4e6"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "7a7514b03528fb64b64551c45c7edde1"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "ed46d298ea663057e38f0be2c040a88d"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "5b3c9d2d1aafe7d5c9c736220683062e"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "9ffa0269a88f0029fcaec3155e8240c6"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "c2a3ccdce10732c076a81b81f523c2e2"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "1ee4afd4b92a99b5d38ab4e75e5a983b"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "b08fab29df99076317d1b1410135107b"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "72531743fe6a517863c440d8b8fa859a"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "50d5491f5cdb6565a93a9ab057030963"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "24f74e783710bfe54edc5a3dd625ed2c"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "d6f3eeae58d05d97f5f32a3a4a951265"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "92b829c5625a7910c606c9c3edd315fa"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "da67f63c224b4b38c4eb368454fdcb12"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "6c6d88a64afa62e2a8ff37851b6c424c"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "07395169af3eec6c1c9c5fab248e3056"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "fe4fd441650f1795addaa09949016a33"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "bbfce5087e20b672c97b6d14f685a7ab"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "91a028af9512948568495d12c864cc96"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "34b5eba5029a4eda8d0ed958852ab801"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "60d21a2b3564a3856ec33edf1735be50"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "f52509991fe9219342bbb4b5cc5d706d"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "2244e1b0947222cc31de3653bc3503bb"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "9b756b2b3403b04734734cb68ca4c303"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "9bd63272507752e0cb3ff94b9eefca5a"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "8940be85a796b26d4f26fea68351a0d7"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "472afb00c987b13c90fa1bc419d2f94a"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "b87df602f6e2f56c8a2e5da9b2fd8576"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "978a063e5eb6211d07b0ef29831d9fee"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "d981a9d1033731eaf0d581f2fa51b39d"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "6bd01be803a566f346bf817dc36cd58f"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "d14c588a200f889900417dfa8281fd2d"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "17e1fa33166a0f15ca91b7f165b224fe"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "66ffa7ed85e2a5cf823423258e4ccefe"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "b6b1d0b53eb883731bf9d8f99e4ab8d7"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "952a0f58dbb760d4bda28e47179473bb"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "fa063636c976bfece543057792ce5da9"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "51bdb86409d8385bba802046fa8ca882"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "ff05257e2f0caceb288058de5deebe8a"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "d623a67c84c458399d771144b276a8c7"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "4a0fe583c38d08764081cd62919b5973"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "28530b19d9e0310c19bfa5999f87bdd2"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "e772d7789dae343e6cb4778a0739c2e0"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "672ed197d6415626b09c72617bf64610"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "8ffaaf7478c4b2666811859660676c2b"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "24b6bb4184de0f3bf50f69f95696475b"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "f844f65793f61d008985941752e14b4c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "b80ca77b4a86eb5755d096788e845e89"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "32b79d32e4aeeb2d1a9354ffcd706206"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "6bfae8e146111dd1ff85f82cc4072546"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "d9081bbba6610b8652f35972b6bc95df"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "a305844ce4ef4398f1bc346e2a430899"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "dfa9402759e6595b4449f1bc739e3749"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "b828007ccb8201db8db5c92ccb23c496"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "604c1a48557d925d69e0b2008b242b31"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "4f1252ca95b2e107e08ca4e6f2ce1052"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "dd37684f594bdb1a9623f2116aebee04"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "c8ef1beb9a897f5b46ab25ef6805e0d9"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "c2101066f840469d066d75a0c65678be"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "ad8b7a16b5b2e74f3e38cdf02f4c5162"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "3373caa9163d2d5017fc879d2bb7c9c7"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "5f2a8a591a1b402e15fe5b16b416552c"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "cb1a559524ac9d081345b99be53ed39c"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "dd05ff2efdf61d53471ca7999994cab9"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "2ac420f7fcf353b8ad86efe8b25f5965"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "551082cd4a60fdfccbf4ccb38678e0e5"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "d29df77e9475cac23761e6a01547458c"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "c876a18a489f14f46a792f29c7ddb0a2"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "0bdd51a35f12cfa2ec2ebb182d95e217"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "346c9cc1645b3464293203ad17bc3d2c"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "5b150bd2245f3a980d80e0401cf072e2"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "e00b52691deb3a9cf363f41a7811fa46"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "708f40f686e7b293eab220267ced88b7"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "527b720a0d7889f1c0df3776ee87914d"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "0e31974fb48a2d19bbe7ca6c546135a5"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "433bb0a4910b12b30d989aeff037dc39"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "f36a48c4d949a4ad65b17750ab10be2c"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "1ea14c2f519cfbf47453410841c7a969"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "ee07ca5ec13802e76eea4c31e02dd25c"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "baf5389b25663e57415b152455c4a5ad"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "ddd43ad33bcf84eea53942b6cd70623c"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "402601749796a08d0771350ac65ad775"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "10bbf58793c6ec8bf832df46b3a187b5"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "08ee1d340b345adb1eaa34dcb0f0d1ea"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "217c0a190e9b305e07cb39d16c1481ed"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "8bec97c4c67bc91e81588ebe3ad1d1c6"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "c68a85ae4441d5806bfea9cbeed3713a"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "b85c7389782890af3dc036dba0cf0f46"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "9f7c2359fb31dd494e87d2d99dcdf9f4"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "b4ad8e03e35a5343773ec7ddf7f18f90"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "e878da493c3ebac5b214edc1ad20cd82"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6b82f5c0a44d89edbce8e2b4feb966a4"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "7189eb0ad592e022816972d2b277748d"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "e74eaa8c41c4979ddbb3be9fb686e153"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "6d0f9443b8a55d2c2c3369b0e01e24f0"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "08103e6e3a7818540d67c2dc646a4759"
  },
  {
    "url": "favorite/index.html",
    "revision": "2bf962b237098aabe1e722d08f1cbaf5"
  },
  {
    "url": "index.html",
    "revision": "da7124a72da956aad6133e112d1427b3"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "49fd8ec4801dbf643a06352858688aae"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "adb4f5b630cec3d1d7e1c959a9dd71b1"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "dfd2f78d08e45762073ae80a22963207"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b0db640b6fd0c017a541fababe337449"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "26cee7bf03d089675092532f21e7ecbc"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "d01a3d6d81295e2eb80b622496bee0e5"
  },
  {
    "url": "note/index.html",
    "revision": "967842becb0b6f4f65746ddcfe038f92"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "d47a3c040a05090d88c1bd2e13ed4a32"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "423d6f9aa7e734e923d07af2fe78f1a3"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "d0b18f00b71adb5b63ed6fc03cdf1ddd"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "9927098cf8eba1128bd57a7b27639766"
  },
  {
    "url": "share/index.html",
    "revision": "87e1fadfdffd7d2f4d221e5ce81b84dc"
  },
  {
    "url": "single/about_me.html",
    "revision": "62c8ca779a0c113d5c40c51160083cf8"
  },
  {
    "url": "single/all_article.html",
    "revision": "1d01d93d66c6c022e19a4dfa39c0d8a6"
  },
  {
    "url": "single/welcome.html",
    "revision": "f2ecf887533de722b066add190249be7"
  },
  {
    "url": "test/index.html",
    "revision": "d8598ae97d3180094fbf81e8fd1e7000"
  },
  {
    "url": "test/test.html",
    "revision": "9673658162670d8d5cf86b14a00a7741"
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
