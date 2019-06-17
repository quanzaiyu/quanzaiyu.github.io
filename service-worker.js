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
    "revision": "88a0b6b3f681067070170d1aa03e4865"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f30a7491390117408272df4d501e4447"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "517c4ad7d2c67685da14401162c089c2"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "e2d9b1961ef6cdd30bd688cdc4a5096c"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "dc79a9f6d4acb6b1bb0357e822253198"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "790efb69a83cb6673c1e5c92318df4cf"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "16456ee7f9ad6a519ab996b6fb17014b"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "569b556acda42e47ea9384ba7e5857f2"
  },
  {
    "url": "articles/index.html",
    "revision": "b83f65c64c1bbc157d185d487d723171"
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
    "url": "assets/js/1.2296c4ea.js",
    "revision": "9efc6bb458b1dcf89d9af302034a1d5c"
  },
  {
    "url": "assets/js/10.b998386a.js",
    "revision": "45dc8d6921ad861eabd80eb115a691d4"
  },
  {
    "url": "assets/js/11.4e1c0f63.js",
    "revision": "9f4a1f338b8db8cfa0ec18a7f8255293"
  },
  {
    "url": "assets/js/12.bd74a432.js",
    "revision": "170dc2d0c90f4daefcb02cf9c48cbed7"
  },
  {
    "url": "assets/js/13.9a8f434a.js",
    "revision": "de93276293adf604b19fc432b01587b0"
  },
  {
    "url": "assets/js/14.c2ad3b59.js",
    "revision": "ddcac6592afdbb4650ff8a4568b68dd9"
  },
  {
    "url": "assets/js/15.a862e55e.js",
    "revision": "b3382cec0f2ee5da23a89311adbc14a9"
  },
  {
    "url": "assets/js/2.6560ca77.js",
    "revision": "f9761282fcf585ff6ebb46c87f164cf6"
  },
  {
    "url": "assets/js/5.49df099c.js",
    "revision": "00ed34a81e8474e52f6a2e1ae52efabe"
  },
  {
    "url": "assets/js/6.1e58fa27.js",
    "revision": "05d67baf74164039acceb5b89d7674d3"
  },
  {
    "url": "assets/js/7.23858362.js",
    "revision": "1f1cc512deb3bada7ca3be788b462e41"
  },
  {
    "url": "assets/js/8.9897d628.js",
    "revision": "b5d3bad5bd7e2d7b6ceae331f71be768"
  },
  {
    "url": "assets/js/9.3e396dbb.js",
    "revision": "eb335e1f9c56a616d77b920ba4c04e9e"
  },
  {
    "url": "assets/js/vendors~docsearch.bb8e5c2e.js",
    "revision": "de0df720b0b4cc7b5fc976dca4978b1e"
  },
  {
    "url": "blog/index.html",
    "revision": "1a2b43f6f4b9ad39b84209e82ef4a680"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "0d960f7f18c99917378682c7bc3bbba1"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "6dbff62a86012559264b3df9ef6f3c26"
  },
  {
    "url": "books/index.html",
    "revision": "2bb742dde4d1dede628416c4579f0606"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "2505d5991edf805bf2686270347db9fe"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "d7daba353a0ee6bfb2c8f287ba8bf49c"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "e13fceb4dd572b24d7030f050a4d9c43"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "2f4136cb05975b36f57a642f7e3418a1"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "b736261ab3b8e4ea43be732e6887a247"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "54fffb07612eb4a3e0026eb585a5a8e2"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "670c4f80986c527237e6f11adaad0fe7"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "6ccfd2cd2735d516bdb4c0de38b7984e"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "1d1e741168f23348079f3e4f9712b0c2"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "82c89f8a74edc43c0a7130a87b9dde3f"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "8635f1da8ee473d98838e732c6cf2beb"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "4b96678106a01e83981b28377f4da089"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "aaa7de647f5d68daad60fdece4519e78"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "c701687c785086f886ef87f783586ebb"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "6ba4431672ee322f3cd52d5abf6bcd92"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "eb3e9ef346b3c0d7047c848c81862a4f"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "220f51ed4d05a2b96e49ad0cb5ca639b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "bd2b17fd9542ee8acd4fa31027b26e5d"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "b0f72c52fdbebd14beee3e2ff46b1709"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "972ec421afb2d811ce304d3b9cf67c4b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "1d02d3524ecddcc98d43ee653bf69ef9"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "9ebcaf067d7f6270947045be9d122095"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "74b6b83e982b30933c39d04c90d8864d"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "e8094a475071f3dbc8a62cf4ae375cb7"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "1bddee449ca64d8684699cdfba40af3b"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "8c6aace49f6eb9c4f712d63ee78d25a5"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "54a7dfd03ac8393f8a692545ecb4846b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "645189edd1e08f6e1d21cd49028d0621"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "09ada0b64dde08e69bf85af029094acc"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "e4038ddc5676e39e52dff34d19121cda"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "2f5ef076034bb09ca671ead2797a8ad9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "d1f9c4d9d2d6409d0fd924d177588f7f"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f829a899637b80e5a10d4a1f30a503cf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "69efe3fbb327cf5a4c55e9d9c82be041"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "b0fd941e5cd4b46365e48a8094875b57"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "ca9dedc53da222a578ba737b1d9d1083"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "a3570bdd21dd32a100a615eac22aeed1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "7e9fcb4608a334cb2822f53a3002e161"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "1968a723d14b7d90fb567b59b519a0df"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "92d39f0258e2c76b0a13ee6b8b1d9b15"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "123a842bebe9ef8ef1f310cd9cb0ff32"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "7592c82432379581452d0fc4c960767f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "7b52ac6b064208edee684f64987ed010"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "bb455dbe1ad33a7d5cb8c7c9439ccace"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "d7a4c26f4171e4ce6b301c5d908d24a8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "3e7d8b5f8dd2c3f3eb936392b544a07a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "b28199b2677c76cd0e3d86bd064777f7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "1069b3f70d0555cad27b1132e2a695b3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "9c98967ed8d2216e50988f06dae4ad90"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "9fa410579a865f979835990f60f386c7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "22c8c4e0d93ddf3df7cff083cef1e698"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "92b2a446004dfdafe5f7ad5e4a59eabd"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "5cc988d7c9282dfaf1600e49c7f06e52"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "c0db577617235578d6eb7d1a5579d4b2"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "2e3525161c20c26a86837c01287a21c7"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "2e171a069d2b2061e405f1a5c48b5df4"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "88f55bb85a2642c8d7e8ab12a31c5c3b"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "7756dfda5298b8bc07c72eef307f2436"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "8e224a99d4329c36092edf4ff2403e3a"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "fc31c8fb95f2a9993cb6d5d11ad6b302"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "bcc1cdc2436e9f5026ebe6a4651b421a"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "ba27ca0b12a32b06af56e79fea8f3540"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "c5eff042956dc20d9e4ed0dfa282d6e7"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "9db3ae87e4bb69adb40afa9b3d99004b"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "13fd84b6e5f379cfc1d178b27c2b34e4"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "5b8775041740d9fdee0512d58d0782bc"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "03b704964b2d67d35cca344177baac0b"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "7913bacbeb63aded90f14c52c3e9aa21"
  },
  {
    "url": "categories/database/index.html",
    "revision": "698c91f7622957c4afec0137d0cef80b"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "28c2142e405e38bbe263c4beb889f9c5"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "5f0da2b3236f703eefbab4fd6721ecea"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "14841be062f1ace8e113ddffc06658c8"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "7c366fe87b5651d352cf7960ef5352c7"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "380bfaebcd531c5dbb335efa14739617"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "e95b28bdc1969824da104f1ac44b5ccc"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "e311eb52023872b75197521a01649b5a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "0ed4a4904746f38fb148a233d092ae1c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "bb9b8f537107b70bc966ef3937c4980a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "44c584b0a559f0a7c64561900ef96308"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "bec8150b2a275049ed3918ddd3c244e1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "90a9b7e3bb0b905429f9c27f4ea981a0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "6f1e674187f29d7b8b021dad7cc9a501"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "bbf4fcfeb909176e9ca0840cbcafb00c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "2430fc15f62ba5fb4b942257b1c5070d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "0595ede5dd35589fc95ee328c09b05f2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "f412dda926119d8944f2887c9705b1c1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "43f8e524f240be5ba1e72d461701cc2f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "13879964e906b32fefe565b4843a2f96"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "30432415341542a739601c68811fa831"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "830c410cfc8429de86e998abb8af68f5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "51662287afcc304819623a5b13c56075"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "5c690eef573374b2f28b49d98378ab93"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "0937b66ccb3aaa7267150ed74399aef0"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "473b7dce32e398a144fb4561041b41e2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "3680faf07cdbe2bfde8badc8868a262f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "e7e87d8d5a23bdb604acddc5ba465a72"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "ec729f030ae22bc6c337eb193eb895a3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "584dc31451da41a6a7ab7edcd728d4d4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "a568c78b1a797ad2618b180053985e25"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "9935e44028bc3fc3c9f974b4e73e2534"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "8de9c55927ea71c4dfac8d9f278d31b9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "2ee3cc2c24322a13df664555ca9d214e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "fa8a4c3ac7bd34c1f3edffc7a7b46930"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "7db5c84ca5f99404aee4bf5110d4dd60"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "34bf7a7c9c8f55cb0665444a178a2e27"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "de0e978861dfef081f3af5e123dd39de"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "68baff653ccb8795c089a6a9a9de9ce3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "a0b4e0341871d824d1ab2a5c9c7ece83"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "e3f90a5a33ce2c0cfe5fd7bbb8293b6e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "12a8188828a7d0f8fb2c754786b51fc2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "4071942231a069e3021d3322c342f26b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "40a089fe52696fe854a4d67025b2c28a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "34561e49f5ddfee1cd97ee8fa4b1d048"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "0dcdbc86679b3e671280b923988827f1"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "aba8af934319ec200057c0028f9f6f46"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "ce23f5fd2fb8f769375f44bb5fb7afcf"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "98901f3be873a73de428ba08084ab521"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "0ced106497a4c9d3932508d43f2b7336"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "54f0109dc0c738470b3b51d727613173"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "b63bb361753ae0f661fee8fb0d73c363"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "b6644a1bd2102c34fafdeed6b2a829d5"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "a019b43b3bf6eb5b5e29a5d3548581e9"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "f3f890a4c65de0f11159985a7122cbc5"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "d89b08d4bd851c1ada5f4bd76394f364"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "a14567b0d62b554acfe4257517f369d4"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "7cad343eb63e39c8964e0b0258ce42a4"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "356301e3664c962d9df7b892cc683f69"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "bc26c5e6ba96f43c6894dffc8fb917f1"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "aa837b273ca01bd843791bb356ae8630"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "ad43c0a954bf776a90d04fc9d75775f4"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "07b68c243756f5a582b466f73894b184"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "022d7b0141f48e80573c12dfeeb7cf43"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "cabe9980e78136dd5c1dcfb02baaef4b"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "3812b0bceb7e5a42f1ee03c805d67960"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "5004e66d0ff61b0202fea511f0d87e9a"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "9e3251b158f6c2351eb7ef3ce85f967d"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "134f5d3fcf5883eff1bc9987fb8dc7c7"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "396a7b6febb9616165b37922a536c79b"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "076d1f31730b224fb3749430506f40aa"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "7996d2097e5512f2f809ea1561085764"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "8d61173521356465cbfa60d2b2962502"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "4d2131891befd9b4ebfe0f1c212859cc"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "bb54ef13b98912b19cd61833f08de70a"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "2dc821c2566e1d9e157f634b4cd0e794"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "de25452a9e9338226a3de0b69d08e024"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "d21a97505e87d6959fd92c5756020e04"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "983f377688cf16cb7b87f4c2b32a0245"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "f19e4e445fecef91741dbe0c0e5a8483"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "7a7179bf1e751c9f8f2384ec50f385c5"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "e30f6a8992a0fb9812124a02a7298694"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "750ecf3bf15a628d3217ef6f78e78f4e"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "462565e293c8467da6e5a5ce9c1955f3"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "16077c8d323e7257897106d615689603"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "397e26d21fd2a958fce87c939ea52805"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "aceaecd5611eda3c9c6eae8d1053593c"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "75e67d88055c6c3d92706b1c4e830033"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "a2f565918851ff88729e0b410552387b"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "bb9393df338cd6a6e7368806d65378b2"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "a558c27f93edfa233f8752001901c4d6"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "cb4ca87892c784a631fc124a38535e70"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "a65a46ba3d0df9c31011b2fb369ad4ac"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "52eb8da227b8796e807709aa2cb422db"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "62e2e593ce61e793729f6bcdea4eae64"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "ccc9b4da9fca203eab529bdf2d8a99cc"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "3c73faeb1465f4667568af1c7bc90412"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "5dc5672d10a785355ecf4044cb929d20"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "bf46a919df2648e0e2bcd8fbefb8e9a2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "dd52c9676360564a801491ff832e754c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "817207d126a699728303e8f85855f237"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "c0ced5eb77db8f7198094881f5c8456c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "5019326a715f209815174d624f3bca5a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "6b9d8d48c59eeb707378dd0d4fd64a6f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "df978059bbb858a9ee08cb3e1cad0343"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "591d0c5bde121379b41799fb395fb6ed"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "5c9b6aeb35d669191b4f80c6af555ec2"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "86fc021761a5050038fba8e1995fb712"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "13e73589d4d37aaa805672784e5c734d"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "05b0ed51c4d3b5e934235481e91c254d"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "858e619a432d136763a915d909dc368d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "a26632ad77a8edc7f3c52eb84ec2733b"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "29e4b4d1edf5fcb2bc497a74fc6dd663"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "066799339701e10b8528567190f7e001"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "c85e8a9e53fc95af80e36721f283fc0a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "71c3f200e3d3b82c442607463a263414"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "e3132773441e0407eab2500e44459e1d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "fd96b1807be347f5f20560d163902f1a"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "54aa032deed053bf979b5471518e65ca"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "01ccf7304d5c4c60cc13929b3f9e369c"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "c42b73c726396fe0bea8b2e051ec28d8"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "122194f727ec644e85e9f17eefef9423"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "e71123fc50c10bd4b31d8d7d9e7c5b54"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "ed4b388555749a99686fbf4910900bed"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "c56507d536025d7a71986ab4746f8577"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "ce95cd1335ec00fffb2c13d9e9377fa0"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "e9c52c8949c5b02ef8de281cacc37ebd"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "7d5b8d98091f7cd078c3d827e5e8147a"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "0a62820c9027d268e300cd729bc27a6b"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "969c9a4c6d48683fe32c32111faa2a9b"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "b628819ca3174e8360f06bf222cb0977"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "cc42674b4db8d3fbebe97658674ac41e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "57f7318b2dc88a3857e6346d1bd126aa"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "e777a0f40bf3ebe8a9767168d8397f55"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "d914a7d6e8188648a1a996b8ab72e066"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "c4d5fb2cd489f2d820e13bd2988b4ad8"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "8bd09203e9d819f43210553eff1b98cb"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "0bc1a0aa1d575aedaa1d9b7fb0f1f7fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "5b3e43328e9559a2b14c8c820912e2b8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "800d80cd40f2b0243eda7f8a4f6343ca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "f624e73a5b93821217bc2f6cbebe56bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "8db19bb1d4454127d8616c782bd35bd5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "c45101d5f105d869b1c204c161f94a30"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "efb9f3f8c39636a65a52a21c47c121cc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "ab09ba7ea74e2474b745a2eec679fabc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "5ec2910a2ab530ce245a7e35c49ab974"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "b51837f16d95d7deed95bfb5e9278f0f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "b9723b7c65718afba2999e9aca00b362"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "ddebdbd35c6d004eb3c1dc5275ba92b1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "4deeb9acfafcdfbab31f54202352ee1d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "f8b970a130c0a94f28b00dafe412bd4a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "82d230425288adbdb67ac860b586753a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "ce75c4b1efb953164953c404b067b486"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "bcf5b09300eab13221ebfd6fea66ee76"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "9dbe5b94784ebdc371aff56556122cf1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "28fe9ad8504913c912ee129363bbdec0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "ce7e8c764c612dd14b2adb88a67c769c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "2febc9a5d71d449b4f1178342f69d276"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "e8faae69596c56fb35fae89f1193d6f8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "573ebf562a6dc2d4336b606e84982db1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "a1d162d1f2259fe6c7f0339d72ef7170"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "4b7417d2b5d0bcf5f7f0e8828f8e7b8f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "3a395d1321749084875d473722ea1b7f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "46eec740115be15a51b5ab9e3c44c380"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "5f510b433e3ee7b3648a0d0c5bd57f9d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "0a3628715fc7c12fed70cce4c0c8852f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "4e0e407c57e359aaf3b0fd022f16661d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "cf08e47d3e71c56143300786a60ae005"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "85593f8d1cc642f3b2ad420eb585e792"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "4aa7aa4388840e0be0a612c855a4ebe7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "6fb4f9be88e4c822179f668137718f58"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "dff0b02d4a290b432f772f41e78d10f9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "7d928d0e77ae36744ef0711b63820e61"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "b99530626a5e6da17216f48482889c9a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "7a45e87094071ea20af77b03f4888038"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "c6e277bf6cbf6a544d49fd1b37501092"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "3bf9707596b8e14badda09fac3cbed05"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "f7dbdc4c4beba586ebb781f2635b070e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "478dea6d35312722b4d6654c33981398"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "f2d0083804830b1066852d0ad8f4cd05"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "19a48302f00afbf0e14760280a2ed56b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "2b526bfb34a9899f3a8e894de77696bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "6a04662eb67e98afcdd62a5c575fe4f6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "f0088a540e7f1c142a7ee67afe767e3f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "af294576ebd4a7ebc2ef9633a959c68c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "4e7262e51e464d9e670c1348a0f8a889"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "385a6b267ee631dfa1dc6f9c28e0dc3f"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "983375a23a456ebacbbc2258767acdd4"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "ff02983bf91c052b6810dfedcc9df211"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "2f720b6a0075a65cfe00274d667df682"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "8f178e757bfb3d0874a7b88521640ba8"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "afabcfc93401ba5d0a0865b9d34cc05a"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "fb2235c0eb54e95031690116acccdcf1"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "ad816d56427e091f5908f2a1a106580d"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "215aefb8fe0fae77e34de6788f24dfee"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "ba18d3eb86e23cb660e7f8c552e27c7b"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "6ef1f0ef6d003637f4ff16cd5b363b67"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "c52177c63e1947ca9db176a6e38c9512"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "19904119bcafb20f6196e1f5948a94ee"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "920f6f0226800b488f5e6b6f7bc151d4"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "59b8e056a84dbeae9d41082b72a85203"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "707331a20826ca6dfbf68a23b25e12ca"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "b799495afb1d1db8480891bd72183df5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "c6ee27593bdc454e82f63b407de7beb1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "564b740b456d2ef25fff3b14fd3fc147"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "f36a5239571f313f1f06cfaf82a7556c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "86c18c313a6a7b682de444831ce1231b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "e6ffd22c91d129b6bb6c27e57bca56ef"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "5ed9713d8d15da06da0004f3f1116c76"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "baadf9b155bf4934c02435e06c6aad1a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "836ce8423fb2d0692b82b982c7a59842"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "2de58ab739fe59d6996ff97866ca8056"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "5fcba420a2e427cdff1586ec4057be03"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "989509554b630cc94d67f72e8a4e5478"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "4aac29397ae368cafb99c86ede2600de"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "64693f65bc77c44026ad967eee5b4d08"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "574547dcfaea80906c51e53cc7b34d44"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "4ad6aa16f74cd9f41b7db7d82178683d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "00125f3435aaebbbfd704d0a939503b5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "f155c28aedbe20b3175e9ea4409ab015"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "d98cd30366ab324034f5bb8260c5fa37"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "a155d3c95bbed0285d70890021f551e8"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "dc0f69df3928a7d3ed15048b3d2b6f66"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "65ed7f7310bb1d0ab887d14c8daffbdf"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "b11a99c37f6341e9ee83906ae846f82c"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "1aed544d88170504c128501817ff5875"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "fc018e349c70307b85809ecd90a50385"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "69dad92deaa41a824a492ddd0e7a9236"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "6f388794e346a7d57b599d4c6ae07a86"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "5b78fa5b7d08fdfd2c241eec5a35cc4f"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "391a111416a286dbe12800c752e9b187"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "bcf7289deff6ca2c71fd5c446ccc1ca0"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "88ec92567bcf9e7bd1c1a0077201c41f"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "e7d1043f446bca437be78c04e7accf29"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "95b6610423ae85cd50f0580c97568c19"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "9bc96d4c450ad45f22f069a1d2dbd0f8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "4a6c9c9dc50f57038ac1df86408863ba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "7c59fe1b70542028541a3d8378e7a088"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "5d7ee500a9937198dfe60ca569b11019"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "b854fbd412ea86c3f9b81a3b714a4d9b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "b4d7a229452ab024fc6eb559582d3f3b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "2310339eff92e78629496b1025886395"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "38b5317a00d5ef1d3d7793eddb11e6ee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "388f8cf0ede6c70dd7a86bd8ca898ffd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "753f63b54c304fa48b1cef2eb5091eca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "a6b208b224dfd4d1cdc3bf7fd96f0910"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "bda14e39e83aacf6ac9209d98b5412bd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "d71f0b6d09dacf9a8c31ba538b1f7e8e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "cf6c578650e2fe6d122500bb5b333767"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "3d5b05387b129e64601e533489e240e8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "a872099b121b329c5852486e726a1780"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "22775cb8b5cbedf520b444d1c1e588b9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "cd96561dadddf5bd23cd04ae3e48d6d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "26d0229ef00054856d68e941c3c9dffa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "6e9d8e5b41ab55217ff7832bcdc651e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "002f57b4d0ae799d50b4ee3936f635e8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "87918872285ff20639d01fa170dc54cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "12de552bf7c7b54011532d00fcbc2b30"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "2620d963dcfe8ae5872e7d3e206c5080"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "67a8eb3a99c8f607d75e89374c5a5379"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "c57cfb6bc3dee13cdac5f22e25c47997"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "f0de89b1f3c211920b35d10ceecbd1a2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "7aa4de5b861ee9c1f76d57d1c1544e6f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "0c53756002d4cac75da9ff719900f278"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "ca3a26688ed52fd7843683ab878f9cde"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "c92ed8eee1416613841698ce8a868e9e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "6a8282ca49f2d24acca67e182cf16a27"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "fe6d8d0a7c5d3d898e48ee33b3cadc46"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "3042b7271391632daf34ccc6b12061eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "ab2bba0544a50804409f2cb8507d1d91"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "c5e0430238d4f68de2cb1a5d6be414b7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "e5d3d07d744fb379944e18e834f871ce"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "71f9eba3b3059fea4fe6e44f88974719"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "2d4f0ca9c1dbb8f6fed5157c05aae843"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "f67cb36580cb42f611b64069c38354c2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "417d8ef0ebc52ee4354680cf66a15163"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "5aadcb721565fa5f4f691eec827e06db"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "22c767b07ef4919f875a7642115fef56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "71b4ab71d0f98359cd3d46fbb1f70139"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "f405732bc62f2cf12bd8769e888b7150"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "d261507756dccda9160b2b638f365944"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "d000777b498b2c761c7ffdeb0ccdbe81"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "df95913ecd268e3949e722c5f9423ab7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "c4760139dfdb2276af8ec08e820b9f42"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "74e4590814c290ccc7f88c83de4c38ff"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "49c5484077421483c6cd448c814053db"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "d61a411c95a8b1d37aa33bc7b1d553a0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "fa70ff7622692225c517f40824152f36"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "81efcc6aef4fc627e3ed29b2f41126da"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "952a8d3f0770dc763e92ceed956d82b7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "d6afadbbfd25ca4d9669c8bdbf7c53d2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "6e694c1a371d9e0744f2b1398560b01e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "e7918ae43d5b2559ef5a91f2a823ec71"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "bf3b6699e311545da2ec27fed7dfc1bb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "6810d5f27afcf7e3b4dd90d4489d893e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "e7e99b5cf67ed1dc10f84c36e28e528b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "9c942b54066c4d93ecdef9af44db6b9a"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "c061ff56fa0637b623a7fb22812b73e2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "ae65c523da662c4f9c8b59618e16db76"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "202e36b6a842bcfe2853b2eeffff8bb0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "89a8fe48518230d7e3e4eeb793df1620"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "c5d3de3d8826162529a589a12528f097"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "bc5d0c48f610f819a7a44df962b33eb6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "b3a9e3f6b9b380872f5a08e6d271b152"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "6bacd37299a6d26ab78da9ae52727ef3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "f3169b2e0da0a39d2345b16f43dbb2a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "27d5a61b0bebb480224e9c941ac607e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "8799faac0926830f51c99d75b19bc732"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "8b92c8d07b745dd79674d9da5f71f8f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "f52ceb5758678b5292c66abe5533f413"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "e4f6eb23d619f186da279e5e3f29617b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "65e5ddaa416aaf04b1a73818fd8e9f33"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "d6f5b4298337f569430c68cec38962f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "701508e7453c994f0d4ba59b1cc6fdc5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "62f0465aa52adf9dca3e2102ea6c21d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "ea0014ded000963be93630ca0ea4a7b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "2188a842dd4bb8df53574373a374f690"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "61a9a5226fa939bc6353ed534da39b17"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "2eac620241b84b4005b2fc4649c39b08"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "cc4af419379eb03c4c9b5d3c06d1c31d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "944a2e498b0910b77a8203ec8c8949a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "c375a50d4b1b7c369948cdf84ec12cd8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "1a47837fc7979e4c16631a8d52a18f55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "4f6a60e8dcc56db84647a03767d59dde"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "97760a389de632065f0b6e5564082c17"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "96f4528184ce1c7bb5d273494ea48ff7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "4323ad62909ccfc9c243d2449e1ed433"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "0bfe2792676b95ea8ba93217ce4ca940"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "fb5b270cc6fb6e3f8b41f0b9783e8ebc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "07c88c0fa03606b0e1400224cb8b6696"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "82c70cb510e4692695e61070a58aa2d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "07cd327484e3b4003eec6019fdce04bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "01d68a6ef968a1423e8726254abf8133"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "b049a831a48dabb10eba77caae74d2e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "169319bd67b170909cf71de714dcd9de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "4e2a214efa816c40ebb89a99cd056369"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "4d6ff70321dd34f5972f776180464e07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "b09861a750594b5bc28c348de5055929"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "e9ce6d21c8fd9ac51ae91369844854cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "e78a4421a921a9105bbdcc0f1ed4d254"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "3ae2aea0e6e4100415fb5c6f49834fe5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "a623381d9b70508fdcb717f25610fc53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "898ab930b2f81dff68a9a8f588f52567"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "b3e2f325822c671d906500547c3f4af6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "c488d78873388e72e74712fd8333ced0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "524d5d4d42d55346176598e8218e0d3f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "057f30592c62d485241c79e4ad5907ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "baa835a7a670648c849fdc091c0cd686"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "04c920a31019a27e88345f3db4f608cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "497a84df14d4cebe0a454d762919e7e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "34be263cef15f20ed1d3f564fcbdad56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "4a0887dde3ed5adef1f650efb6507b18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "3c89da4ed86f283f92b9b943520f3fcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "035319b05a1519e938adb2439fdd11ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "92b2baff35d062dcf32fe6543ffbc3a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "e1718157ac4bbc6e87a4a88331c384ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "d50ff0d3c52b0431696fa8a090bd59fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "699acf3ae82e7abd4d33bd5d1d2ddd49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "16361d5cb58875903f4e1940dbd2947a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "06054c210c9e8d7efa1c6304c1881536"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "6d4c10150edb323e15e404845d85fe8d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "eb94e32098deae9a31d0b609f5950b27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "c364d4e62c62371d9e2d04ed9943d5bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "2bd5c988eebbcea7d8aad49d5a37b151"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "dca04caac5a0f229356eeea368eab8ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "d094390fbf3e6fab4f8bad2077d3aaf0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "31cbcdac6ff2ced68de1823068cf2108"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "701aca17a1027762d13ff32a877ee0da"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "94e1fcd653029ee9ea4104f782d53549"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "ab314b0f73f226aa0d895a040efd04a8"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "aa3ad21698790c5537f49ed68cee11ab"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "21cac8df08bed1a8450ce8251e3c3e70"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "c0f3aa8005e12e8aa22984c1c31e9a68"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "b46b2980f2946da72d7ffc1d96e74ade"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "47990e2515c2213527535f5834403380"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "517efbd6d90a9bd64dcd12977aaac121"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "3d43d87f296315f4ea7353b56f01f44c"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "d512ed00c14c6a247a4cac3d2a69efb6"
  },
  {
    "url": "categories/index.html",
    "revision": "03eb364a56cb370a594c9d750454cd6b"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "0593baea7b609285e3cbb5971cb9b87c"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "4a38e66ed179270a660a84039e6a08f5"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "e03ea6a1b8efea6d136e935b8d6be3fc"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "a695a44782c1bca15960dc078dcdaddc"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "9259e1b64cb877e189eaaa9a6ba44769"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "2e6a99000a5074aa0d81537ffa29ed9c"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "a158a0489d33fa4b91b67d86f0606fda"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "c6dc706472a457215364d15b499d21ca"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "95b24bd09504109d44a4f3c37ad25723"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "b1d853a44b7e3ea1bf95aaea321c0611"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "8288c5c239ad05bd1e1b26a8bb3e4506"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "0fbb9612e0e0417a10bd4b6e00340ba0"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "792e2090fe1afd32ebbdd4e0d5d24340"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "1588851f643d20509d42b9078cabd7e3"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "8e548f2642509b7c4b8b2a38c2875663"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "18b7d202cb0645667d5e3aa9c0666fa0"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "8f2eb3333ecc4d0e36165bcf796d60ba"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "d36606261a02e34b37b822d08c66a407"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "093288425d9dddc87ae50a791b4bd061"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "6bb0e158c93e6ba16249bb244b03b803"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "08aa12e9e33e99e30aafdf63d939adc7"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "79f53501276098a464d3906c46bec36a"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "ef6c997130bc41447dda811b4dfbe97d"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "2a862e65b787dbd52cf3b9d238b741e1"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "45262f215c48a8cbb2986a31e7e90728"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "de11f7e48ccb73f4126faa74f719a464"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "8ba7743c9b968a74ddd9072500a81ef2"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "e2caa78ecdcb5ba10ec94a2f9a0c5ea2"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "39f8eae3c0ad04815266d2d08a2f1748"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "ef1a2897b0778d1602935bd065c1fe3c"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "50423dc594c8eb68f5f2810b373c8bb8"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "cd9b2bbaa04223d04e51e8ef5bc166b0"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "8480c9576f015b19ed1d2cd7333dc299"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "5ae780d0355a1deedecd519e20f818d4"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "57c7265c3a4db7c0054655abd460bc7c"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "a1b14b8bf9ec1edb9f7d0286bc2e9423"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "a0275e1b73f1b78ce4889f3a4abd80cc"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "45fa58a5712abd8701c4253e5168a915"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "7cfbe06e7902054ea5803c5c9d3f11d5"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "827423f794144d9c33124ab3052baa71"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "2adee7735630e32d72b3e46bd06de718"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "31e7d78e32c6ce9bad3e4af1efc3bdc5"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "0088ba0fc7b72d4012ddff311fa74510"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "cdcf28d13bf9618f56da4cd0c4c578a6"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "5163ea075a5a80394b983f8df0b1a0d6"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "2cb0b2682a337319ac9b922ab41490f9"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "7d98b40c561e519e256ad6f164f71005"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "41d0b7a0f7aa2fef76e0e56354d20212"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "0c38f779d146009a32e106ec7dcb2ecf"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "c50fed8978af726fe913da3dccc27378"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "4d8d26c273d05e91051e6d9ec2325796"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "ab551b4248b98c5b5770b12b98c0f48b"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "68abba40ae28809dcf600abda64c1b8b"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "54ac08b5d8080f22a09ce1c93b8093e1"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "797ed06b88cf2486d23a3e643880c10a"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "6a250723d7802b0b899cbcf54118bec5"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "bb625acd0bcef57d61569fc17957ff0e"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "1c7c424bbfc1ee3edc6be646638a2799"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "3af4ed57a311fd40fd9ccef6c0d06f5d"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "0afe85d95c0f9c104056c4d4bb529afa"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "82e250b7b0659cd7376cee49f778b2a6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "d1f22ac6d78378a8438fb5aae226b427"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "5823fc0808c3ee69054109b79a6a7de3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "73cb04016c2649b25e7b4780f3b9d0c8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "3cf9a0f6165c9ce87e3753d742746ce4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "c5bae634ae828f3b0ea17592661ee89e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "e1d2329d3a2df2185f82efc8ed4f92ab"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "0efe3e21c8ed757220e2c48aa78e39c8"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "75cccd4fc8f7fa212febb13bec6a3398"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "d3dfd1195fb7369d98e97d73f992fdea"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "30d7958e10b3feb370de80cbae8e0916"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "5fbae32c105dfbed8db402a9d2955bf0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "1c067fdb9b40f91935d4b510c125efb1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "1b26f8bda08f01833137766b7dc6c034"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "e4877d34d36b9f3779436139c1889d19"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "c8f77f5532c2c8889be01f3cc26f1529"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "cacf468fb7661e2296efd3a87a353332"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "76c0062377094d7b3a34d846725eaeb2"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "1bb8b2141d8d15d6527566446a4974c3"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "36361f74fd654c886639b6e335b3552a"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "f48e23874db06a9c9c3481841a73444b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "ee5035e786096278d0c29aed8d976448"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "1ecd4e5c51a825eeb50a96c8099cb2de"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "5df9233de0dcd5c46befd35d10273efd"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "220b37f2626a68948ed53f36aacd575a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "fdea74a122e3d047fae6c4690ca4f99f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "f82b51c08e7bfbec880e02133280ac77"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "006408ee6c2c51c5715155e567fffeac"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "6a27dc720ad8ce35c4e75c75fc9b38d0"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "59ea89181c1a579f557062bf66a59406"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "9b6a3384b5f56437710be4cb8735d9a5"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "eb045c1d689d0627838195cb40289e27"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "e358aa1f790be2634b0ceaa93eb58f43"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "bd4663c48b57d8afa3e9e2282c8d72e7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "44335cef2c0345895c54b42282a22c60"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "d46613f8e166da8b02fa0b29d804250a"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "c6db87646177f48cd454aeaa119e563f"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "28b31f1aea7182618bafc3a8f360fb03"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "c5931e6b4624a3e06d50168b3f1e34ad"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "fad7ee3a981b2285f2da9496f78ca546"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "df058cbe9040552582ab1863be41288e"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "31e74d966142681bb9d12007b15b916d"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "e5a97bcbf31d7f6def5340504ae5b17a"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "7ec97fddeae07fb21626787ea6152ee3"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "ff9073a0056404c799c218b23b22c8dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "0dceb20cab291eb47aee3c0ed5c05b9a"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "7f6ca39c21f51dc9a7ddbd170a989c97"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "5173317baf77396dc6780bde6fb4770a"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "5e516aa727e40fda6a65e549afce61f4"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "1f85d7149cb0a62805e4f227503f6e05"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "53b1b39a2d283527e72b4677dbc971d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "e96ee23e1b86c4a6c08bd74c64e9d733"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "a0a723fa36a598a2d2de80a5f8347d1a"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "6abf443cebcafdd631d3fd33a6397423"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "759297479755090c9706ad5cd8c75c9f"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "166744661c391916dc2723c70c303380"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "546e982a70b39c684c5b41fd5494ae35"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "01bbcec67324224fe7032cd3e888a59c"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "e2184bb465b357c7dcc2568f66958a54"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "8520213b50f865f50e628d775bd26c65"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "4c9f68da057c222aa9e724bceaf49f3c"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "c49571c4c7d92b2fd600c541d37e54fc"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "0323897abc50c751b2bbccdade2131b8"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "02f73ed74ed4e48caf34d2a2f6ea42f2"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "51101febe0fdee49075a99ab5c91d70c"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "93182941ec5aa3fdf42c83172d5a51c0"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "d6c17eed12b33c00312ab7732626b59b"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "ce626dcc6613864bdf225fe1fa67240a"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "87e22a8dedbdb387f2dcbc656c998b27"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "9c67fbc045f7e98a2516102bc8fb10bb"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "acbe67f7359c220361b5cc5c51f02200"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "2d10c9a1e139836facdfb5c46287d79a"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "bb063477ca4b10ea74d15f4434cc8dd6"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "6d2375c95bea9cd47c1fef0aaea5ade2"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "1ebf4a7a9c7b2629c6a48dab823b16a7"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "8d5988688e4790875168d6d590a52274"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "1ce60c3da1584225fde84dafb0ed4f89"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ae8c5296d39ecd86856540fdfc851a0d"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "874110244f087fd701fcce6369d07a98"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "9f7f3a151243da77e8727ea4a6a5f4ec"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "5533f166026fa6fc73c5ce7e1b280065"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "929153d44b0bbcfaee72b46ba401887b"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "c57090d4671973c4ff4a0f8e6792d802"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "1c49a0596987f6dea631cd9a893f2dec"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "4714565c1f0506e8e9279ac6161b4228"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f6b3b5952de32decd599acfa2f4501c7"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "3648b22e55c7cb26df5b6ac6a1da4e0b"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "385e3c66921aeedf241df63e724f55ee"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "996cd9051bd921db3afbe1adb8177ded"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "8c6e33c4e6d5e52c4c338e9a22605ea2"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "6d601017f89340b846e5204b582e40bc"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "507815b2c77935b565a8ffb53e79e6a1"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "b1a9c67ea90047158b56df22201495f8"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "67998ef0554f961687d3578e2a4ab1fa"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "80c316d470efb025f61b6624d35f3972"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "eab89bb0cd1ec73d851a15a82eed2b38"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "4ffbeb5037544f3cd610b50d9f20ac1b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "403fea60cd562d9b72f502337ecfa380"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "c08c165ca2a685be338dc9029c02d5da"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "ec637d6cd9c0b1b60d86c3686c61510b"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "2ab940a55a9b19dc2396be708b527731"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "54155a43ac87c1cba10d012435258f94"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "4ee41aa694270567937bfa3488c64ccf"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "b664ff022332725207d4754a04e53660"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "4d74ba61951562ec07812a03fe0fcc3d"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "d3f1eafe5d096ff572beae8b9e7ad665"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "c88ecaa3889d1df64d7831d732c0026b"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "cba0ac278f5e0a159aea34710cbe334e"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "77f388dcc79082d2bab1a0bac01e72da"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "302d2d71efbb7a91d6997ee73b71daf5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "a117257129943d28cf29527bd19cfc1f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "b29f1534996211f196139f0c33d7cefb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "4343195c8651b2d93fbdff09268414dd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "2d82eaecfb557dba6cb6c9fd9f33415f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "d91db6d107b966f48d0904935df45558"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "443ac627e8516a5d74ab6eaee7e6b4b0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "a8bc00b9e4b7fb72e7b34ed2cf888208"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "e0a5bdd17a2d77fccb1dba69d63f9541"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "b9bbcc7c8247c2bc0d93716ffdddbacd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "67746a7602e5ac58a295bdce28691b8e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "006ca81a55090723e7c9c93b5c3450c8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "6fe6a29125965b92b5098cad0e8208d9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "f2f5f94404914fe4a5f8b324e0f1dd1e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "569392b1702054f0c0ac457bd56d55a0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "2fdf25a81d5572321cbba2b64b457125"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "077c7728432e231156f96ff72c656a84"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "c0338ad4c24232a6691f5fe90a2fda4b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "3f3c22c65e4803148a54b8d98c7e9e76"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "5fec92eed66fb5d9eed53064d73cd390"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "3e365f442f22c60ab3d658fc059ff269"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "85c745afdc34f2aafdbff34800756821"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "4016cac8a3c5b5567ccead1659417ee2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "fd3c52fb74506b9051dee19222617c90"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "5396cf7bba1ebaa3eee6c07f8750bed7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "f8bafb39fd3e479292736526f0ddcb02"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "8f98a757d65814ea13c5aaa6f7c3cf5e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "de389f833715dac9704cb24588104536"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "35e240c2bb01b6fe9a1fafbe512fa5af"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "5277eeedc7b98610d949e260a6c9ca62"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "494731d265e42f7bbbdc63680cc51f5b"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "1b1fe6077fb7e827c5d42ab766c6313c"
  },
  {
    "url": "categories/os/index.html",
    "revision": "2a937507d99689d250e3e6490fde78fa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "1d5a0dad3bb7749192d8713ad40b3e91"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "82495e4b6a76e2d48779f5fba0034a63"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "54a1bc1592bf602cd406a88abe73e905"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "1b763ff076e76976ddce07ee546cbc64"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "805eed52375886ce0416437124ef5f1f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "ca0450b6c3337382bd0e6c2fb89ae9c6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "5e9252b4f14d6ef7bba4db354b0642da"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "ec2990a05cfe27ebc90f526d4731f007"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "c7ceff85f121ec47b768af339951443c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "85a7a8ec85a39395c8f989ac11ad869e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "e3973cd53e81fb10ee7f0d4edb28d202"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "13362dcddb8076a1f77ef108b9f8b88d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "37f40ced9fe8b62eed5516a3a526d1a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "38614948573901eff233244030e81bc2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "f61460d310db3c561705d9c633bbba0c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "3449ad347c14f9a25dde8798a08f0cf9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "07aeea78c0901b3d8aada83d6851d2d2"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "0e8d41fbeddce8cc16dd6b212e8150ff"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "c881fe531528125de1ea10048ce2a347"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "20b9799d3a64d9c0721036631b6235a1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "b83d1524f472fe3e05d789337f3282c3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "5a4ff11fef017575c02145f46d71e1de"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "aab9b615264535d36cd111b5a1dd9f29"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "28d4c74fc236b9105104ae457efed7fd"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "813700476eaced1262a341be0f9af69f"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "1e9f4d4010243e648e26a769af2370eb"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "2c99337fa6eadfb9ef52f83f0aca10fb"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "ee3626b298f54b64b4139e3a2ade4bf6"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "e304d6139f74c504264a414a126f57e1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "2511e3bae9166dbab0fb63385936e7b1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "e434c1b9f779bd53e523eea320478976"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "ef7e33f802d15322189b43ef8912274b"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "88e6fed0f1ea4f4c54ec6b174afc4841"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "cc53852de2664ef54b3d6381b468119b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "99a0da8cb936293ae3b80fae0118cad1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "b8688deed559a47a1e9f28afc78e7a63"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "9c799eb280122fea2e16ce90df9eb32e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "4741fd4bace530c4cc61556e381b1438"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "4b7788f21c5035dbdb10a169d3fbc6d1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "d2527e934d990f6e67ae77e9ca363087"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "2a7f2b30946049a5063a615357c22335"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "9ecaab8291e6c2d546d956914665d60e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "de89a2ed0723d0d81f1564fdc5a36877"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "1ef61b26f29f2d7896ed1d5d4b78a0f9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "fe9a0975a33b865ad2361e2bd8ef2c20"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "31d087aee6b4ad87bc5cdc916b781a35"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "a9c935f776f393dea939dc085e0d0f8f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "f957e2759b73ceec193da9eaaf0caecb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "b0a4ec469d814585235656203833e494"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "f4ab8300004cc8ffe200e2e057f7f65b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "8a8791f8e25170584973cc01f5c5100b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "85905d12e1d263a8e8e066e80fc8c4d2"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "4ee454ed22636bfc59a68b3704ffc0c9"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "7d38da9502b5e202a14e6a35be122c46"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "0e2ea7f0941d8e1865fd0a5833616d52"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "94cb4af80db8fec8bdd399b33b1fd302"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "c3a4bbdb7bbd8517e28c18c15737c509"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "0135213a0f45ad78917793e731f0dbde"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "1a208a132b1e9de9e423b933e54567a6"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "b8255eb30c7dafa6879a7b9f9bcf44cb"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "6b7ed3e6d51cab19a00fc6a9b92d6414"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "83e0184735ba587b7192c0ea62e067ab"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "e962b5589064b6aa03489917abce6e73"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "e78282105e62c6edf3fe1be1c61ecb7f"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "b9d6816e22fedbbbbd0d470f24915994"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "a0ddb543daccbadab263160749f80302"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "a2a72724674690a647191e8bae28565b"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "01c1ab21762c2256897b57ada9c7764a"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "6a1e270e7e11cb1cfe2156089ab1f64a"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "17c0a4a95564c0784b75a018b4bd57e5"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "2848bf6d1846f34883c23fec54a82d1f"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "606dd087204b32c14de021c3201f1661"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "6013dbf733fb777a442b1d9951010b22"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "8d32b3ad8f99db7fb6b594bb36ba5782"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "f5f49af74dc4e731a7533402ad5c99b5"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "315ebb85a6bffc3740cf42ca3ea31af6"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "7ab361e68d7bdd4c36a2c7e5abc654a5"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "bd46f76c536283735b6e99d2dab6fafe"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "715612858dcc16dc3013b5dd94585ca9"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "0607ec3336a2ab606ab90f1dc920259e"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "c9762670a040dc80a0170924abb03cbb"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "b00597be8556d09ccc0d6edaf96d8d9c"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "34cb2bf32a41edc267b8ff3e7c63417c"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "83c58e5a7f584dc35be9eb1ebfe39a7f"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "1cff3da95f00183356fe7f240f2344de"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "474433093333c984414905792955db0d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "aaea75c3e1cdd9ecb67f947f0e2a7310"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "1de2ba0333df30484e40f6c99e08b004"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "c1c6fc53649fadf96d3f200700cb25fe"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "ea2f3acfa5fb2777d9cdee96541b5408"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "f6bcb0b322e788b397d07807beb9a454"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "b6967fd0d20028b00a5d62b588425dc7"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "756ef3bf5ef59e046635d367496f989f"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "c51674edbbe0bfa64016ee7a99a3ae2c"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "00c1aa9103de02dd6c10d3a5050595a3"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "10b1274b28e1d0abfb60c7b56909693e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "8f2a2101dc20fe65f6d2e3839a40b3c2"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "2760c897512736fc96c9174b1c7db711"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "8c068e20677eeaf05ec68e02d84d2326"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "ef6cc0ccf4ea9da1a430018744ed07ac"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "397381804862d00fe7e9f65490c07fe5"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "9e62a39b62fbf2f06931d9ffad963a40"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "6862eeddab99d4f9fb2c9ce65fd5f70c"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "afd3544f860114b4a9162b9aab90092b"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "d41a4761505fb699389ec354eab40e05"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ebef9e9c1a62de9511a0efd938570652"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "85374344ed598af5486b063d67b2f7ef"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "32a8056680991d6833cfdfc3fdbecadc"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "e4ab4225e6724bf5c0f53e24ec79b82c"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "afa51ba1220b33c5e192382e0b56e323"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "006a6f8ae731e27c34f6eb3783fc04d8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "9fb21ca4352287f7ddf704d17bd534bb"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "ece2c4bc969c302a62ec1579b2624a9b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "dadc10b62535af7527da053647c69432"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "0468fd3a4c711dc0e7cdfcc1ce7760a0"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "10d28cf3fb860f0c0e7903c2276d65a5"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "83d93e2094a1917fa7c169a3f2dba1a9"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "6dab1b826eaab76d5ba8d8a59478b8e5"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "f796a04dd50d420114e3c1ce0e8acd98"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "f08a501d0f44abada323bd5d78c64626"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "dba8063c4a39022197379c1afea60c8b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "4eaa77a5e87ab2a33c33c900fbb2a379"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "542d1a991763458fda1f21a079c70620"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "5e9a65ce77fa95b17abae7ef6447038f"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "8e91c71566ee2d31a500c4177de7fff5"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "7356dc10fe7221a85a6e63940a2c5404"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "a27b893a1f5a37d4fee87b90d5a1a7cd"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "d9f9029af3bc655735c2b753166898b5"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "3df17b19aef5b0988f7e92cdc7a8d67e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "8270c022b0cf7289100e6036ab36cee2"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "c89e7cbcd2e1b5f228648ce3e9ece907"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "8bde4f468fb4ec707bb3018b72e1a7e4"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "319bf15080f87bb2ee2db716ed1cad89"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "f12bc3bfb2b5d381b6e918d2baddfee4"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "657ad6d3d9c56c73b180f3c139a83610"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "6c986e47fc63784eee798d5475790f6b"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "bb987bdd3c4406e732ee8a521b8b9c55"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "9316b8bdff6aa990d9d9ae6b6081cd3d"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "5fd96fc9b18d39957f9fc02d7307b0b8"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "438a658d117d84942daece0da9998a89"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "7d1ac74fa4fc0d70fd2710912f16b576"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "8bebc3d316eae116112ef01d77d53faf"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "c2336d803161a944337e112fa9d29d53"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "e1634f974d117e092472a5e1dfeeb38d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "e2c43ee3ee30653eaaacaed85cb9ee37"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "ce464a96a50035e09058b45ff94fcab0"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "45bacecff1cc0879cab09e258f87c13e"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "d5607ceaa362306c13cd95db4879f1f1"
  },
  {
    "url": "categories/php/index.html",
    "revision": "404fb454efd4a485f3d5a20bb7e52fff"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "bf4a61f618f772331377c75dc7cae194"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "b7ab0bdb8e447522eff088638eb18bd4"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "e6e6ded87cfd9267510b471528d56454"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "41e03467db3b9c2fbc992ac8c2b865a8"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "b63b6ffd46a020d224ffd7f4bfc3377a"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "84824379f7da8a5422c3eb890248ea21"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "7194c0c5197c5f580c79eb7c4f1991c3"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "e65f1eb7d31f990d26c206023814c4f0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "610a7cc95a2ff4de61ff98738c8a9f88"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "35c2c33d37aa2c47e7fc1b5ed1ec499c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "ff536ed429984bf8f3f6ffcac69e4c7b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "030f6676a035f07e9f2875fa7dab45e5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "225559b9833dd915e3a22f16887a4cde"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "d26bf93d2c3aba685d4cb16862684a63"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "d075cca2a12422cdcee664e0c8f7a4d2"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "9daea114f3a283a13beea40bf65be6b3"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "c9ce70f1791e34d3ee2e76f3c6719f9c"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "c4d5e74b647397fb4cf128f8d85cc13f"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "27e2ea85b1a5b4f3004a7c174ec64d3e"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "253cbfc7d7b9e9397edfafc3311cf8e0"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "39b6907e69052de80951b3e4623cb648"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "6aef0976ac7bc4ce6f1f7d657c278ce4"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "d3f6989336ab06c90e48bd32a9ae83a1"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "fa2f9a8eac638dc5d0aaa9af85e62091"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "1295addf35b5d3f88884def1dcbf335b"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "14166c0430c3807ca8d5afe1b0cb9efe"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "67239df317ce1d9c698980e09131958d"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "862eee8e171d4e9e441c04901ebdb0bd"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "e639d41e365cc2f48f9dea0466b4eebd"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "e4a1058efaa8dad33cb2646eb9464aa3"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "c60a0e27d8f640880e10622ba8785342"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "4869bf1b70fe1051072dd7c7ff6fc737"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "634274bacaac95874ba9731678d0571e"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "8a688e0dc4ef364890d78ff30c033522"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "8b264b00f04d2eef9bfede69a6478dc7"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "ad0c3f5d1f8be5820d47a13e5f117e2f"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "16fff6a8522b7904e6002883b558c59f"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "4f163c84fa21a3ca08143b0bce338037"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "a394f7399fb2d7f4442a5b6028c17201"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "05fc4bf05f562a82279decca021cf974"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "6159c66bd77faa545dd7259b05021231"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "6cdf9d5860b04022038ef00ee857b7eb"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "7891a40d2a4eeb4147a066d6351b73be"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "0ba2bc79c08d9010a6a683d09973de76"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "23d4ad2163a8cfdd196dba8992a96f39"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "9dd7997ea2ee93f7a120f51dfa322d5b"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "6cf598426d09c8ebfde9b9f1f7df81a3"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "e44ba979a4750d29f4c3863e3bea14ff"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "b191cafb49970f27d6193535c28d746e"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "161ed1d9101880c374fbb0125f8b3ae8"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "4dc262ddd2815c99c17cfbd40d83fcda"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "acf1cfc1e636f6579ab2f30a97e6c908"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "f4b805b9183870ed1da00adf2ccf5ef0"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "862111bc95fe116ed2d36800aa93a3f8"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "599f5adcd5cbb195024b954bc53f6a01"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "e6283d0193c1e134f1d1fd9036b4ff78"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "45ad6af4fea5050736de98cb9af6b147"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "ecb5eba86db84e9d688d657e2e70aabf"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "2b0df1b7cf0e3991b889e06d7cd38a28"
  },
  {
    "url": "categories/python/index.html",
    "revision": "0e500189681d801749f6dbfed4243ea7"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "1f29d29c5b527d45b25559709a4b2506"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "4ab5ad0ec0f1d78a8edb4e72ddea569b"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "13ebea34fcfc20adcfc8122c486e9fef"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "a3311e5e401c04af3ff8669069641444"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "706647275d69de85de89a6681b63e058"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "29082e577b5fadad708dab6076e0df9a"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "92aac7b9e7a1963b4e14bbc36039f9d4"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "dc5d380bf279f9600d2996b69ab5f0a7"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "1f5a1eaf6c05e88da4416763ff5b4cc5"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "24a7c43bbb625ad900c7cd7b457eaaf3"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "05d26c6fd91fa12c0467bdf92bfa3369"
  },
  {
    "url": "categories/system/index.html",
    "revision": "1f26d4cd9bd3f3b8aa1826d873d4dd3d"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "9ccb576ad9d396557b0f24bf58fbd897"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "c4ea2244d6a3695a52dfc3a8d446f5ba"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "aeb1086f9dfd71a653232a23da7ff1da"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "d754646ee37d1a5ba8a439ebd7eb048d"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "ac5f2749840111fe30e2730b4719fe44"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "53bc64b1c6e59d6b9ab604e2bc1e0d7f"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "269d5bf1239d2e538353e2c937242814"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "acef2f92822da5eb4219caeff06427bc"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "a14602d047e9a3c90e869e63e2913d1a"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "11673d1c7ae8a47170415a7b158620ce"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "de7c724ee9252667d1fa52bf7227bb9c"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "134ad48f00da8de0a6f40d30a671eb2b"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "a2b7e29f822c48c62f09af18d35a6dd6"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ce030df440457b78287198acb6641e01"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "5f03a065dde2794b9d178cdcdfac2ca1"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "8515605c24610c43d4464ae785a5efff"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "633b46fc0763808fc9df845460cafa07"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "f9e9a181501b7e6ef465cd4afca23338"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "143eddab715f3666882ac4aa959f26c6"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "d08af4b0d6897e3846ea5692017ae62e"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "f77d0248df17110bbf8981206ba6e496"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "15434fe16e39a04bd0eddb7ce0f80f39"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "6de6d1fede8aef373499b05396f46bcb"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "a1c3079e0dc57a37a35af6919de7db00"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "f188effe9dda06420a6ad8d300b5b846"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "6a46c265a96ad5c44f70d6635f58a0a8"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "806dbd3d310274bb3ceed4322cf30518"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "286f2144f54dea772f3483d5973e9bd5"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "86766c5367781e53d160c99de3f80584"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "cfe74e8c3400f7c3c293c56690878745"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "3b280b0cc934bc25c4d2174ab02a75ed"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "a376881dc1c686912032303cd8f60e4e"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8ffeed3b533b75466a4b8a22265f9309"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "264fca674b15531fc4700a150515e42c"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "9a364a7167a4c5fa0c75c647a3579965"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "618f09cceba3adc3191f72767297726c"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "4dcab2761fe4296c53660ccc5faaacf5"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "2c112313500886b3c4d10031e631aa8a"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "61e8882d2b898e4b1603563b8ab2c386"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "cec84c99287eb00816017276198c8835"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6767f94b7ca906e373f438ab14d0ae71"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "e198230581c6a49aa15baebdcfa4c0ba"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "32fe4b4dfc394d1c5a63036c38e0abe7"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "8e61593df6c92c84876f65435afd6d15"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "c2ef0c58f28755203056095e9984f094"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "b6e61e572d9216473c7a8635a57bfb9a"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "0c5011d5d6b5bec14919b0540b91e3de"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "299cf360af46d17350a10e478ce98f3e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "e533e518f4347957d9a898f431f9b60d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "353dccfed51803743793e766fc80304c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "78f001fb179a0843c3c8f48ddcfbe498"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "1caf58898488572e12b1d0d6adc84ec8"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "db0bdcd9090ea7362b445c533377f725"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "53b91daf84f243caa51f249975a0d265"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "0b7539285b869a9bf90b58dd58477684"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "a7c33290a2f69a7d745bebda5026e94c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "c8c3628dd9884dfafc16db9b148d2283"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "d8f9203d81f2ff9b5214ba468d4528c1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "ee9587de63bedb8ad951c57016754bf3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "8f0ceec9316e63b7b933dbf9971c2522"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "80c05705ab714cdbc2f3e4df144c85b4"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "9a023cf42dd2027da8b5c3b4db4b3196"
  },
  {
    "url": "favorite/index.html",
    "revision": "8aea7c0ef26e6654eb0003c2eed5d77d"
  },
  {
    "url": "index.html",
    "revision": "ca82d79592bb78ed11501ad897afdf8d"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "f49f458b1bf1a51389e4f5b0c4fd1e37"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "ff503b8075108ff9295aeba9c46b9bf2"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "baf88aea78aa3966116c2894f9f00e78"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b4f9266d72cdd0a9864870600b7be765"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "e9e15c074ccc1d5e6bd36f98624912ac"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "0ac7b613f76bb2db862e006115a21132"
  },
  {
    "url": "note/index.html",
    "revision": "3802b9445bd0d44eaf92964897ec1e27"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "7fe28e5b0e059b8ba31fe68f5fbd6375"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "ac38ad6fee41ee3fb64a2c11ee76dc99"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "fef54a099d4188d0559112dc0c029d54"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "fefbe875befcb84ffbd70aae7ac04252"
  },
  {
    "url": "share/index.html",
    "revision": "b3473d681768e76c75be0b6a6fd08ce8"
  },
  {
    "url": "single/about_me.html",
    "revision": "f4bd15086ae539b9f211127adb8b5fe1"
  },
  {
    "url": "single/all_article.html",
    "revision": "e712d07f340c82c93aa1f88fde778345"
  },
  {
    "url": "single/welcome.html",
    "revision": "ae376fefbf0b307c8839816406297024"
  },
  {
    "url": "test/index.html",
    "revision": "5f8bf0d787344b8e8d3c26631155530b"
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
