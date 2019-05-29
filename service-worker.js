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
    "revision": "48b507cf97da8a477102d10edec5d4fc"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f07967cc5f3b1e6eacf675842a05d7ad"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "b317ef10ed074124898c12da4a02d3b1"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "c881290cf70b58278b68f6a7e2894f30"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "708ef9c165bee59d5d8552e8b66583e0"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "a0a1d51c819176b5ab82bb666bfd9ffc"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "1c889216cf54160c87d8a9d8e012cb38"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "9dfdf66ebf2e6d1a0549feb77d0935a1"
  },
  {
    "url": "articles/index.html",
    "revision": "1c561c7b29ff052c6ecab99834d15c22"
  },
  {
    "url": "assets/css/0.styles.a3b4d9d0.css",
    "revision": "ee1e40754732061deb9fbb611ec28134"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f0dfaf16.js",
    "revision": "1782dd7d372195267cb55ac7ac9c4864"
  },
  {
    "url": "assets/js/10.1042872a.js",
    "revision": "4d9c2a9767c20d9a5253a2d3738d3c5a"
  },
  {
    "url": "assets/js/11.8a14d2d5.js",
    "revision": "9acdd3cb9f995103e8d6d8827612afa0"
  },
  {
    "url": "assets/js/12.52773c73.js",
    "revision": "1ee3017431101d93ac2eff78ec0c8bc4"
  },
  {
    "url": "assets/js/13.d7127f36.js",
    "revision": "e1f3bcb3e6ee91fd9b6329573a15c4a3"
  },
  {
    "url": "assets/js/14.48cc83bb.js",
    "revision": "1689d9de79930b1b41d2b1578cd486ae"
  },
  {
    "url": "assets/js/15.9a4171f9.js",
    "revision": "ab908b519242ae1b93d4f07bc8219260"
  },
  {
    "url": "assets/js/2.c44f50b1.js",
    "revision": "13fabfec5de9bc8a4c9816bd6cf5dd69"
  },
  {
    "url": "assets/js/5.6063643d.js",
    "revision": "2fea4079d47f56a9ed8716d34545982f"
  },
  {
    "url": "assets/js/6.7ccae606.js",
    "revision": "18b95991100614f92a89f663d9c609b2"
  },
  {
    "url": "assets/js/7.c07c9d43.js",
    "revision": "235bc13aacbc56eb966d79ad02fe45a1"
  },
  {
    "url": "assets/js/8.3bc7f71e.js",
    "revision": "accdca2707b8e1a53c5766b24c890dee"
  },
  {
    "url": "assets/js/9.fe66bb45.js",
    "revision": "602bd8c3d4b24e4bf48c706eac41b8a5"
  },
  {
    "url": "assets/js/vendors~docsearch.d748588e.js",
    "revision": "4329f86d64447e9188a38c48ec104b11"
  },
  {
    "url": "blog/index.html",
    "revision": "629fccac8e1da87b5d9d908fdee93ad6"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "5a36ac0fa5e920d0b895eb53041b4ed2"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "e27b2ed85a33e2cf74bc956c43e02841"
  },
  {
    "url": "books/index.html",
    "revision": "c0a7b6047fbd7d790129670b0f250d2a"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "734fff9220a528d0d1d7e5b7604eec88"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "21940c8984c0601eedc44cfb97aa0a0f"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "d046adf047f69ff5f44b63c30f50b35b"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "093f0294c428b393f0af405ec2e61ff4"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "aee7c07057e479ec27a45ed157f45ba2"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "a758263adb66908d49f1bdc2c7b4548f"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "21825f0546c15a9f00b7b1e1d563b95b"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "f6e41cb163ecccc892e5c14396d647fa"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "90db511404dd75d3e83a1ff09a8802da"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "b9c106fd369b1a1b9a60e9d5262f5403"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "8eb3386534a85db9a78b5ef1e43db4f8"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "937442ae9e44eb5a6dc703a3cca6072b"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "5d41ca38874fe921f12053b0409e273c"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "274fe89489a5ad4e36bfbb2bec683a56"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "13baed1b123862ef19eebfc94b3d3506"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "f342bac50e46e60a62d836d070d0a4d0"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "7ac2386e91f9733c74a6d621211cda55"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "fd6eb91cd74c0084858c8d47bf8f8cd1"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "3c9985966d69b2e5304b4b1bddc72fa1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "9bf71a3b492eaedf6f3f68d56ff63c54"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "f5738e53181291d2478c13aa0d989340"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "06133a502a7c5e3c68c572b6952d60b3"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "ae0539b5f785e78d451e9ed2b2ee13db"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "b2abb69af3b7e434bccc6a9a614d6ada"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "a1c7c950d19ca5b50f79514b4d43cbbf"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "b9551b822abc226c4bb7d7ec9ac015c5"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "694b4d98512c59545bf6b8035c0227fc"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "a1e1d2b4a2f80705ea6f93079557581f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "a6f91384e90ca436a5388ab8dd825eb1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "5b0c7431b9dcbec5afe2a16fdb7852e0"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "1b8858d3d187f10ef2b1d2f0d71b6c64"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "3845eadfd3d8733ccd6b5f917333cb57"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "5ca1daceb662adbcee7f3ae100f9fdfd"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "d601f93f778fd946acd8abadeffbe6aa"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "b8e8b9f5efdb667647f2078ff21591ce"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "46a8922772f9635b6066421d7a9c6dc1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "fb58fe5db59db54a9c412f9e1298d1a0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "6ee1c3f810a91301dccb15025dd31887"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "26c50b660473eed3f1345900fe4cf157"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "e66d08e606d73d1c74b7680c1b56e585"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "1e4641c9e7541b961da44a9b5c592ed3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "5ae1026ecd2ffb0b3c602fbf2de486c2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "0fda83d3e4f23b06014f90c04acb1d11"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "b52d09c77a1dc196b9ad5da9b39c73cc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "b8dd5431b10294ff50f36cb1332e009d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b74a88284c8eea1cec80a4396f0994c7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "1681c22bb54bac9fda877c8a45ded60a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "7a97f01e36d40ca8fdaffcc1c1af667a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ff7430af39914cb9f71aded9e51c9010"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "67c4aba6bfc06117a89cc8513f3e48d5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "d53d997a76aaada987c4ed65cf15c6e6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "7f96af78cdfd4bb023e1a351c1348cd9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "700c9e094b4d652148c4576751c0f452"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "fce6ba9e5248d44496d2d8e2c1972f41"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "f70e7d80359b3c554da2cd31360cb9a3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "619a5a5552e1507bf3db2843f0965420"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "cccd5a95170c6ba74570fa3c88e83862"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "6756b813a3a34a8efca6a78a3438fb84"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "e670f7239a7f84b15476bc8bef6d79a6"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "ab7e9d69b7f6cb0ab90df967681923cc"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "0bd540294c8779404126d80b5e2a3173"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "9050fc5bcdde8d37130401c8b6847526"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "d311ca3182372e8342af0b0b2b61501f"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "1c6ac21357a96914836787b1d0a31450"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "1010d99d3a7bfc231eaf62941c2c06c7"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "b13e56a393d368eda48bf0c2cef89c2f"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "7137f4e5f54643afc4bb8cca50530a0b"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation.html",
    "revision": "443cd8a08e796ee179d223db33c3e7d6"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/example.html",
    "revision": "425c0b0715ad9e2116a586d68b2d2065"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/index.html",
    "revision": "d7da90380ba86405f3eaf31606ad18e5"
  },
  {
    "url": "categories/front-end/_books/canvas/Animation/reference.html",
    "revision": "77b45ff046405fca3d1810d1ee416933"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "f78871892644196f70297a3e9b01a938"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/color.html",
    "revision": "5f82fef5b2b5e2869f11705abf09d362"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/create.html",
    "revision": "2fc216d6b1518ca4fb36fcb311dbcef1"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/image.html",
    "revision": "5d5200f5a301f719ddab772599a9bf63"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/path.html",
    "revision": "19b0744d95948f327edba91e19d197dd"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/rectangle.html",
    "revision": "660606678cf2b3b2da671ad9e1424b99"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/reference.html",
    "revision": "4ca752bb77f3be57f431a396f283e040"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/save.html",
    "revision": "cceff86cd5c7615d8fa9cfdf1588c25e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/style.html",
    "revision": "4b35d4accc1f2bccf12f5c997495744e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basics/text.html",
    "revision": "5ed86827eec94a94f27c62d47e358fe5"
  },
  {
    "url": "categories/front-end/_books/canvas/Clip.html",
    "revision": "8fa92bd82eeaf76dfbee1ad04a081477"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate.html",
    "revision": "1af3e4d4bbbf33f4641ed35e4cf8d5fb"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/index.html",
    "revision": "0bcdbb4ca17bccb0182c1d2938f7b163"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/reference.html",
    "revision": "ea1d2d79400f517b8ee6620a54dff611"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/rotate.html",
    "revision": "e92294144232b7abdc1484438f3136d4"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/scale.html",
    "revision": "78fcca450682f75f354383c7838cf180"
  },
  {
    "url": "categories/front-end/_books/canvas/Coordinate/translate.html",
    "revision": "60bceb112a3120fffd398a7a67fcac6c"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawArc.html",
    "revision": "ccaf5330878f3e7b9bb371f1562f594e"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGradient.html",
    "revision": "4d112257632caf0f1a41cbdc63f7abfa"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawGraphics.html",
    "revision": "39c9ac30ada7f6cfc8639f4e5c9050fd"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawImage.html",
    "revision": "773481aac3c00d7089c33bd74b14d275"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawPolygon.html",
    "revision": "85ddf37d4444787e82184dfa028f8e6f"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawStyle.html",
    "revision": "4607cc1a9d76db3daa4fe7d2cd3e09e4"
  },
  {
    "url": "categories/front-end/_books/canvas/DrawText.html",
    "revision": "9843a40a0dc33a2079eca02b53e1ffaf"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/capture.html",
    "revision": "e4de84a7b9d8706cd3d93d11a7746714"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/clip.html",
    "revision": "5df8f6cf28cc7ccfc25c312b15e459ee"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/composite.html",
    "revision": "64cc2c0210b062ce9a48faa540056ed1"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/effect.html",
    "revision": "15b124e378340bbcc5501af1d6a1ab40"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/pixel.html",
    "revision": "57b197942aa00fb14d806d1c40b6f2d7"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/reference.html",
    "revision": "53840e8bc8548a17d59828f626eaf624"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/scale.html",
    "revision": "ccb6f5f2b0bdafa42dc20e5ede05f054"
  },
  {
    "url": "categories/front-end/_books/canvas/Image/waterMark.html",
    "revision": "6ae69bab024646c05afe9ab2665ae853"
  },
  {
    "url": "categories/front-end/_books/canvas/ImageProcess.html",
    "revision": "2decb8f98384550db4e25dfca1ef8859"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "ae7da30333b8d724805e730005306c3e"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction.html",
    "revision": "8e73b5552a76fa0647beed321311f3d7"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/ball.html",
    "revision": "3193b28a27f6ef9468e8c2bddbd08400"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/card.html",
    "revision": "c35b7151e7e250029c2cf0a75da4d41c"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/element.html",
    "revision": "d31d2bf96c8795516adf054e67c4482b"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/keyboard.html",
    "revision": "c9fc10266f64271a46a0de1126826af2"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/mouse.html",
    "revision": "ebfeda0b4ae89f3f4d18f2cf8207b8fe"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/position.html",
    "revision": "85c8cd970fe263c7796a4a33350f2a41"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/reference.html",
    "revision": "12ec0c8c30f057019276532f5c287c27"
  },
  {
    "url": "categories/front-end/_books/canvas/Interaction/spotlight.html",
    "revision": "25b86453d250b406eb4b1894af944e20"
  },
  {
    "url": "categories/front-end/_books/canvas/Matrix.html",
    "revision": "ed44742223c7c31101fbb79a718d280a"
  },
  {
    "url": "categories/front-end/_books/canvas/Point.html",
    "revision": "5145138dfb901b70fd422dbb499331fc"
  },
  {
    "url": "categories/front-end/_books/canvas/Reference.html",
    "revision": "0137a0bed6482e7eb76c1b002f5a9b4a"
  },
  {
    "url": "categories/front-end/_books/canvas/Save_Restore.html",
    "revision": "2c71020bb60a1bd1b6324310f6cf3c2c"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/coordinate_system.html",
    "revision": "49b6ec6b1490bed97475082b8a3e24ab"
  },
  {
    "url": "categories/front-end/_books/canvas/Theory/matrix.html",
    "revision": "3cb0490e696c917ab4332c3ec8398586"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform1.html",
    "revision": "bf39a4dafbd54d7c8a3876b8953a4bfd"
  },
  {
    "url": "categories/front-end/_books/canvas/Transform2.html",
    "revision": "b18244a26ce361acb974f394e8dc003f"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "9f6129d22382c9ff7187f5758123a84b"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "9f7b00f5efbe5694de7f0639818abad7"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "1992f164a05f79d9c25266f27d8b53fd"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "ed476e336aa27af17cb37e8b7ae9e4f0"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "6cccccdde08749f3d3d56459a7efa648"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "25ac8415bf6490b97de0f0365ccc0a2e"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "c8d2892ea0eb610bd630384e52c5eda2"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "7084991320356158f3031e75da72eac3"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "73c4c96b8e53140c51ab6fa480b5e5e1"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "dc434f114c639e8a7a849fab1a6b4716"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "26c845239ae72f05b6358525ed4a6f82"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "3714bdcbeed76d4f3d00c105182a7a15"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "336e2b9f2e5cbc208a115a2fdbc9293c"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "55821b293b596a25da9c5954b7511625"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "fd4e6b48976bccb583ee1f430c3ea98c"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "480fc7643531bc63698fbdb5fad6eeda"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "170039fbcc13321b85099cb9870e0e6d"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "4d2f77d0497a39ee5a47d7e0db59fbd5"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "da31bbd6eb06ec5f6e28bb91bde8813e"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "a0e4109c766c083326e015a84f83f129"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "d09f481446da0a76785892160bf3b5e8"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "96b62d30e6921eb599616fd7765a0897"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "656ed2ac4cc3e6c339af263bc238e78d"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "e088ce174403ee2928186db4a1151143"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "c723837edaa920a236061b5eb8b69b05"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "23a4bc59740acb2d529a22ccabf2ea14"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "894593809761f5cc69d72081aababd9b"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "39e5c7edf7253586ec0dfdbdfd33c7e8"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "d29cc728ddc6a42915fc0b4ec352dbeb"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "edba7eebc5c5c5382e1c8a8a4acdfe7f"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "7d8af7a67b8f4959a6746fc93d912634"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "9bfe7f7f75790c01d72ab26cdec98008"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "f53f7ad7d359d79ab33ae0b4fa9d2e51"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "24626b3ac26d2eba351062f9a8a93911"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "5a98e68755db9a4f35220789843b90ed"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "17ccc9707ac27f5613eeea345623bc9e"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "b2c1da8ae5a431870bdf139632235a9a"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "8a75428e794dfaaf507dde9b814c77c1"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "ed1ef220c8ebf01ffd3040fb418224e9"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "86415b71e2c7fa880526a5eb2d3bd012"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "43fa83890450b88d9f32d39648ba2014"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "212a03cc7dc6eab71ae471f7071434de"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "3a5b0476ecd779af774888c7cf3e6ae4"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "6af072f95bf9e00c72812c3f24afe839"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "660b34cec64b2b43662a615d13e148bf"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "f68ed0b79ae01fa3d14f3cfa9de3a8a6"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "538bdb56b461a178920e2f807321b0e1"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "e0ca904c8c17f4d80088e8e0c8b7ec37"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "72a086e6112edc220ac85c6bbc14b2d8"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "9cd2a673447bcd50d80fa8a7983dbd15"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b5e7a734afef243a6d962675f04cff32"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "84e5192bd28ae6c443b34fd2bbb8c86a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "670383b7328dc2bc18e92a1bfa28b874"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "2876361576f13c53efe678c3402d759c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "fd4612783f9c23ade82d7d829b886857"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "abd10888d77b098807ee1b857de8c009"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "5979a55f399c203623cc649c733b62a2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "3d51d4db40cd216de5e69b50ccd23ca1"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "eb35c60a29e1d95e5b3959170abae67c"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "10514e90de8389fe2015d9a8d9bf33f2"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "e32221358aa9451e0a64953a75f9084e"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "7b35dcfec97670b0b0bbbd34b8eb083b"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "eded145b784b287b12b86b39c46921ac"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "6cf778a34f3b20472ebe4d7238958412"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "c2a6c6a98cead08fb1f2f50827294fac"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "bc2a953ff7c7d4216469518961904889"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "8d4b45ba082a2397a2a67745e9c93fc2"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "528e41327bd2c872a9773641d539b765"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "22e494302292d0b7c35c1bb23ea0a182"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "1a075f6a78fd07ffd8a11d17ac5b7b24"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "735bbf310720da7c99e735265c5af315"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "5d8fdfd88fdd4ce366da01a200e7a990"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "17afb0b424084602ca58bc97a999f822"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "189518ec6120248c8808ff7cc76ee311"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "6ce282e5fbd6bbd7b2c454fe463da5ee"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "c42862c5dc2ef71f7a7e4ff969852997"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "8cd4e7bd6befdc60555ee9e1fac3101a"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "836cda1d87476aaf398b4e1ff54a0b00"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "64e0dce8f35d090f295371b98e692d2a"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "76536cc0b69f1ddcf28097e59130e6a5"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "5b2b4e34e8a79c3eb424b5f1a5fc1e0a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "3ce9763cc2999f53d5fe33e3fe4062a7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "c2433c1c28a16b08905198d4b4f13df9"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "d1a98ecc7cba6cfc75e951b2ec12e7a7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "7695f1d43bba2001b4e17ae6c42fe1f3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "b7db61b8311a6df5c94342b0164b876e"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "d606a4ccc0c8a05938cef7a7c05edadd"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "7a6ede536bc0f7e5f8ba3439cc24ed81"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "4accb0bb7f0a5753d61ce2e91a32dc38"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "ac7f2447027b9a24510f28f80f839532"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "19beacec7b7b0d6b7078631fbbc28773"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "9ddb440c8b7ad4b29041ebd9b96fd6e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "7a60d7b8e6c5ed581242a0af179cd3fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "10e0b82967bde555c059764b6f058b2e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "8413be570e15f1f06c2683fd76614f80"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "8f01254e1af7176cac480f54ad58bab0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "aba8c6cd4f69713de1ac116930953bc5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "8c665c75b75f66ffb2bf8dd2f03e1782"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "fe215f3f0a6723bae6c83d25bd57297e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "794b575834e139f9b3115f497cd44134"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "4c8697943d5c81ac556c810837b31179"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "0e9f806f5bc447323817abddc7146d60"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "c183d9ded24a876e3515eb3c5c4090d1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "3a121ca2168f3a72a3b869a64dedb16a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "ec4eaedcf24ae96d941e6361afb99fef"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "4be90abdbac69193b4eb26cf57a81d72"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "3193f9facb4b0938e526f2e539ad7edf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "79c7457bb2d09ef4e0d781f55450aaeb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "7795e28fabcd499233dfadfa12dd9724"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "52ab4e6e4dfee2b4e7557f9deba5f4ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "ea7b1b5e43e073305686e1ced1f98a2c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "a6bd78f3e5d9868b339c8a8155dce7f2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "6f2baee27af55434a7e056c23ad95095"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "c8ad96feb37dcd00cf3d0015126bba8d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "46049bef44b81b56ec62dba3d27eac8c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "3d63c8beee380282e5b2287b2046fffc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "239f9d9610fd5b0e18940b5df19450c4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "d4b716147e15bcf3295fc03b646087b9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "7cdc87af926586a8f15fda381e44fc88"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "37a7128bddc75a3b6cb71e59bfaf55ff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "317655b59b3708afc0a77f468302f6d4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "1aa1d3c2e6074a9eebb9234bce7f9c15"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "1e42d8bca3d9e4d425880f3c858dc946"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "9525ce7ab953aaeeb3323ad8b881011b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "3197bdb3f21f68b6e9d60b88a091b1d6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "bb7781e8a652fcc3b0d12d72a2b169fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "39283d518011c43c05df1238b114b766"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "ea04dc570ca93a1ad55a8c25d3afb01b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "4904841a8b663607b9db1cafd321a543"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "4e44ce597088af21d26c20d9f597a342"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "b1f5c570530d0f838bdc45e2c2e0380a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "cc3876810e8c65b74d00f96bc52d3c42"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "8be15a916f3010ef227fa0694bebf2df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "a9a3fc6f8747c2446afd46410ef2a807"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "549d9b0a7fc0f92445efdabf96caa450"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "06d22f0fa8b9bdd1c79ca3f793fcfc26"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "c5d07cd5bc029d625d877fc21363bc76"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "0b6a6ac2da894a1ab1ea5b8b0e19b9d9"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "ab33468a0eff531de50212c56b2dbbc9"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "9fca219da1c1fc026f4895777be3e2f4"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "46e7f747f7bcc8c86eb2ab298c46342a"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "31ed56fd7494cf0d994da647fbd139e1"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "b810f00b423644fe41ce7ec21045a079"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ac8e8582ec8ec7688d41576095d736b2"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "2b9c97033d1537f9ff25564cadc35b4f"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "df1ed6910b9415d60914856c07f49582"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "3f84e5411524ebd9d606b16cf7326009"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "f68b103da7fc56c74ff982d1a61984c5"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "97e1d8077b64b8d24577721d117ef8e3"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "3b5caf61af2cd4bb1d2b0eda16f5229f"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "945ec9c89d6af6ce97d7ba44c4b508a2"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "af52b238964539521a8d24b56fce0d7a"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "f6104e2ac6533e2d70e2d7040fe8b860"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "211b688ec3b624f2aea9af7fa4197ea0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "994ce8f6dfb5a1d15b02bd1b28c173fb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "982f920d03bb05cd877ac3dff894c5b3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "e4c202a9be0ab01842639d61d40b8c4b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "e90fa09015c55d3bad5771d1efbb127c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "74cce8e8b8f5ae0254ab42b3f305a831"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "c1545e9da873b007f9d3ce30a380387a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "9c003b5712132974300efedbd5e64728"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "da36fd9693324c77f119a6a39024ae5d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "23c9b21173e379158adcdf1e77040df4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "3e20bc0c48587af59fbcf3f69021abfd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "18bed1e901cced66a2859611d0f82367"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "369d91783e778ba9a8787883a34772e1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "6a98d1f222ea8d87c688711d455a3b51"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "c889d81afe6eae589d39af21bd00b1c5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "c5452a5d9c8835df85e72a2c7db72052"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "c396b8b92301cec3b8fb7ef079caf951"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "fda8b35db343326261525c0d9ed26b48"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "4662be86e55e3d08a809d507541ea7b6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "9567cba62e27f17052c2dbb63c116879"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "d1cf2dbdec2f169059cdc0c79b753f2f"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "4027e79c334f4b6a9365b36666d46c4d"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "544612483a6012838e617df407d742ad"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "ed74a8e9d8d930b8b70a74e37d621bec"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "594c4cdf4a77a613bd6b4d9bf075c176"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "6cac35886e86356679cb28239ece4702"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "0a55036bc078017f0d1ca6c2adbc8baf"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "ad5a3f9d41f9be1f9b7c7d608f814f66"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "940fbd80898e675c321626a7d5eafe46"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "2b4494fe2250751050b46b3f05537115"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "bf316e8bea5c193b4f323dd32f3b336b"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "ac1e434b8990b716e8f39842edcf6f7c"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "8abc895ab4c5a4e14f3c9b969cb3f034"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "9648f9628b378f5861707eae29660700"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "69ade4c313a92161e6debebd4963eed2"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "e5b1b3fcb90f958bc34a7a83f51f7af5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "6c9f99a879ba6cb56f1ca92f407f03e4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "bcb45d3f3c88cc291ff5adff6f98b6d5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "588e3276f41bd0a26ddc08311f24bb0f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "5bae100c20c0b7bb2939109d0ccb9e83"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "e146495697aa377e4b7befe27ee18db5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "7273543a2a5d701059c4c157d967131e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "fd19c7eefd37a8d33767ef09c252b16b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "59069dff74397a858adc2aff639b775a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "c7bd982d7bb166b16430c7e25f96522e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "525e0529cb9ef84d846488040d8dd765"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "dd2ee4f71e95bd5a288458167c0ee2ae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "0c09a7f8a5fec84d793551e9c73381fe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "100e03d23833b8b847047a30f9c06fc8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "f7535b0368862e8578d82ba2ca8fabce"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "f5747bb9719e71f06ecda9658de641ec"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "cdadd8d97a0ab90ba10beed94edc1d75"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "4211df14e525d1fef8d6a87cb72cdb5b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "340112c34c38f959854e39ff0820b54b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "a070f74345d419294efb94b8164a43f3"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "1d8c0cd7ea1e94dc2a5b314d9c56d6f6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "50745fb227bb8ce2f973fad87a48f2ec"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "1a36b622ff6e3c08ad17a47d23ebd071"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "654124d2282b0ae8f5fde1e60ef7d150"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "9fe111a105da386f4ea7d0b13e333bcc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "c1e265178e091f4b1a4bad20e31d0003"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "bb4f44196bd955a09e24a1c67376a2ed"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "ffe793e3e976e161cd73c16e424cfd56"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "0a371cb59ffb88bd2b052d7ecdc73bb9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "4ab65861a4f2c39a018ed78e756d14a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "3595379230faece35d7b3983b7dc77de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "bad4436ed4778a3a0aa1c15b931596ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "a38d82a952f8df53257b8db8176c011b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "25fa938ab87c9f4b7b21c8b187a32c1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "a7b87686a2ce101537499bbe6bd14a48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "41ff9db157a93929f3e21c1ab5b43da3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "becff98f9d76d75468e07ac3c56ddbd6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "0c22811eb4c3a97cf57019ab1fd9115d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "27c5ede2614128d46e7f57940730488f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "13a11bc5075c611941d50be4ad15556c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "06133b25f5969a1030d1c769029b3554"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "2a13db5011123301f1939173699c070b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "abec5cafa1ba4d22549a0c8cc6c6a0db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "875c0a055290441a2001d2cceaced6d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "97a7fd3b4475aef879250854d9263c51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "2ae7de811e738af84a78c5df3f3b9f8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "8261a8be2de05cca8d72f188a6019ce4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "aae7b20eb5d402330a8f30f48090d68e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "29969911e70302b776372cc81dc37bc3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "9fc818c9421d21eec95a51a693e49210"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "ec0c95b24e74a6e23ee5dbb6c8c30296"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "f751169aae13deec1a98c86ff066d845"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "2d3986ec84ed5593ddf0c6f4ef875370"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "cd66aaf788608b31bed1d86ae3216028"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "853c5fb18fe146fdd0ef1b2ac8740846"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "7adbf10a152046363afe79128a7a7487"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "5eb66e4e5866dad9b8d3a4cef96c5ff6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "e13aab1403b9bf148d5a3380c6cfc7e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "11b14c8008aef25f2b3991644c27864d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "e3ab7577853bc8a4f01dc8320e9bfd2d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "552bf47aacf5e49b6e74563ae5d120e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "0a9daab1e99d4a1094561648c0556729"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "d26c0a63b92dfbec48b5f707698bfd22"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "6af0b46ef9e06c25f969dd92d758c888"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "9e44593b92e86d0d205010e219007e67"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "49b5c0f3a23458f689daea8bbed988be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "e9d963c818617ccf22676c8bfdfe49de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "5bcf2ee67652294c712518f52f2591b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "0fec3acbc6b8f9e710d33105139dba13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "93e0843494a61a1cec38727aa732ccfe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "5bc14f68ac86736d32252031ac76900a"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "61f2c0f03f35ade1ac73e666b965e8b2"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "5e1a7787de29f1751d44d567515d0db8"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "33b2ffd21993b83caad7d257ee60d8d0"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "95fdf0c676682c838c9b8773b3e01d29"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "fb6e2ce2b8b66cf0e925151675bccf34"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "019e826188e24f326d5d468bfb80f649"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "1299e38c9b1151c5f11c2a4226355e85"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "491e4148f68ebecefc78ff6b09936a9d"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "0ece4a571ed8a945b4277846391a0662"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "c64867192decc0e8bc595baf1d32538d"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "73ff3099e4842725cd256c4cb859b0f0"
  },
  {
    "url": "categories/index.html",
    "revision": "1eed25e1f899114547c7e98cb4459a48"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "d150282167342c7bdf1fed85815c2eda"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "5bedaf4ef3bd80e688ee2ec7a5447b32"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "41468d2c1b18548c252288d53f0aab1e"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "a551a3826a72d851ad11752b89f0f9df"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "55152a7e896cd70ad5108f3b26d38f47"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "1b89286e5a18758cfefd7b40703a3352"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3338b81cccfca3591b329574ac0732c6"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "701d9bfa6b3c6e4dfe52080e49292b06"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "9b1e363926b8d81bf58c4e91a9b96b7e"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "b304392614ccc51fadb706d384c8378c"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "38cef67d341666bab7fc61d0d92843a4"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "b3295a653edf85e742a32c5df06c59fa"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "0d6a920c65a78ecff722a0def0d4351a"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "f75b35a570262486454d051809302708"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "1383920c00b60421a499164081d8af4f"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "287951e0f1c6fa9935d62407c87bf3a3"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "bb6f8b4bee0dd2123268d8bf78de07f3"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "c30df96e3529c8f9f9c13e3ddb0d22c7"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "8f8206ae3f71fda8b3e4d00dd8335500"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "070f26bdf46b9a20aef650b0a6a7174e"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "794d0ba6dc1814a2947276855235d062"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "4b1578f20b8a3b6de2d414b08960da81"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "8d65f1db6f0dd96a971f156a771cf4f6"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "d1749cd8dfaf549ee3efa0c3d2d52d81"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "a537980e07c8d215f60b9ee4be190fec"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "c3c6827408b558065679277893933811"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "1e26c58fcb17a30403fc9f3723307dab"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "87b4475202b8ae0326b6a0d53a81339e"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "a1a163f8e70247e36ff7fc6852dccc3c"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "098a6c9d71d25422dafe7e04ac3777a0"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "9e9df3536d2de0d987927a077e3a860a"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "cc131613658bd4a3ba1b079de338d4fb"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "3af5f7818a79183741bf97c9383ac2a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "8b79f30cc9a9e9e22c23c6ae6d6efa1c"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "9324951574339c8b70df949bc5a3210a"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "9c6999bee18fbb99074ac27a96d4625a"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "814beb0599a89ef664789843b642033e"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "6c63400307c2ad036f51ac39aea2dfba"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "c7c2a7f33ec2620989239c281b6bdf9e"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "823154c0f0c321663651fd8454237b18"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "27cd505d1dec28116b7378561b0e1cdd"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "e5b5be5619367d00c728ab4f62c294a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "a95679dd204ff1c3b86a761a6693afce"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "1386d1b85b0927024bbe07412a08da20"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "3d7e57fe569a6d89a4008f5dda1673b9"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "fc7818e9b93de23db6c6db1a63369d06"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "e7addc053ade338a434ea56dd9ab75b1"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "73eace474c01825c45770a62ce018e01"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "09eac2681ae2f8ef00c693c0c7efb981"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "4d0fcb6cb22a03a9564b567fcbec6b58"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "70faafd4443df1ea9659aafc677bf0bf"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "9a0a9680d4af9b1ef9e58184dc30017c"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "9938a60c9501f3c7e3b7d25979930560"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "93703cd5ceeef7a120585b20870637b8"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "abb70e6d458e90e69b14c2d47660f29e"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "71f377adfd3db4c6d74cdb240e4c84e9"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "b5efa3b8ff2a24edd2351877fae512d6"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "05bff86dc686aae4b24b033be80e1501"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "6fb607a841cb64e9bcceb8edb43c3e44"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "1b11fabd23bdbbed786f401d85d1802e"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "1b2cab26927e0fad3527971ee782b715"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "f4876902e786bb4837423b57ddf2dcf9"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "1277717a48d4fb06293ca0b356a75af8"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "051a73444685ad474dfab5a1e81f3849"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "4fbc03a6648916f5369d6461df7b9be1"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "a3bc24161e13768371e0e23444a244e0"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "dd68dc835c587389c8754bf50b3fe9e9"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "8609e794578d211f7904864bb44e1edf"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "548ee06b571a6ded5f166d5a3b6a8e9e"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "a5fd316866a5cbefcffa50494090d47d"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "c63c02ff89d042cb8041f3368c51986f"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "25c10ef3106a593505106e407f5a8c41"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "859e1a9ea33037a9cdcd4f718b9de362"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "317f9c5256d8c524bf699f0867be81c2"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "d886c1a3470635358b730e9ac7437ec1"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "8b693d60b096cc84be4602284bf3da0c"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "62ae0bd7512e5eb44575b05cdc3cc53d"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "9d86b2bb924d382dc93077e99d7b244a"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "fe8872ce85cbb7a29cd067fe702ca88f"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "e3ad2c402daf0cec5c572c45e112175c"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c04f05dcad87401d3502de8fb56f05c5"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "4465e0eb36df707249ed437892b31e62"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "56e1d1d3c75156386dc23c17b94bf806"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "2357eb1482f533b151819faa48790c3d"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "1de8c50f8cf5136a553872c3bc3cbae3"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "14ed7ec246df97599cc239cb3d2537ca"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "5d2e1f520e4bbdcf34b3bd5ce9cec1b6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "dd404e5e2f4879b41b439aada893a109"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "7bf3b12199fe767bb3e5b3f6af93fdd3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "17da80dca1733669f780fec5c36c7587"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "4ffba4ae75a4b17c369b4a3fb923b426"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "940f12573320f7feb105043f8cf8266b"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "90d4d870cddce682b9e393348b3cc46a"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "c98eda5f9147e3437e2f6a820c25c020"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "266d586acb954b41dfb2cbd52443ef4d"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "5e63c07aa4e3c97c22c4c4e1af9858a5"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "dc03fb290c44370c6edd1711786151b2"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "72449df2a741dd17cfdd3da297eb70a3"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "702da4aa9ab0df8a9e57b8302bf78842"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "0cf2f6fc6f0a434950b56425070328cd"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "9597d47e23f85536894a2f352a3823a3"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "5b73bb170b36bd232d9df187a03954fa"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "675ede0a1d47afe3981c1c6baaecc2b0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "4b4b48ec983cf74b7944ee3d4d55eb04"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "ed90797b3e526727e0ecd4d5919f1df1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "eac8123449230a808ffc2335e8ab9c65"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "4a90ed5e234e7f3ef11ad68d710d80c9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "4e6dcefa1c904db0dee65cec709b0204"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "9a66f722647b2bfecc984bc98509ee7a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "4c2c25308ad2968ca331a0b1d3ce900a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "efc8bffc3bbd121c886e953e4ac6d9f7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "614d7304894688c584b668b9eee659d4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "40e6591bd52f6c6907e3c75b71f6ebc4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "ed88bfe17d1680b2f96953bd661f353a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "f5f02d9679a9fc57a595b18339b17178"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "9f8cf457eda3171e4cd919bfd938a0bc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "445424e6a7658356a4aa20fed465f6a2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "d0485b2c2442be143f0b569bdd8a8d9c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "6c1247b9c79da8635320e10a08d0d28e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "5c55f3823cc15bca4feac93d1d888b58"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "8a40feb28ed32c69b5abfdb59470b7f8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "5b95c4b83a3480927d3794f0b1063f11"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "66e895080b66665965c3d84f59bf860c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "16417713381303eb24e08636beaf417c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "2b12e86a4b235d7d3fe2a653dea495d8"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "3487c735bf29f25829a5a53c6c8ffba5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "35ca3b00df75a2b05c25e04926e2bdfd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "3c6d056d4a3501c13d3f15af991c28a0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "4f3c115e1be21bf8ed46f9ae403618be"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ce519afe1920b1827eb8a8c5c204e28d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "f175fb5c76047fed5de2f06b9a737407"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "447ce54b6d8489b8b2d9a17d086baba2"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "5c3902782422cc9435250358d07d091e"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "558115c540273ff73dde15d4f24b2783"
  },
  {
    "url": "categories/os/index.html",
    "revision": "48abe46d2c1a34f0e9da4e429c096098"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "45a38424739c731fb8c85061acb6ce9e"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "efbbc70005c765573c353f91a871ed53"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "0808297596cbdd6d9a1278942da0011d"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "a235117a76d8f88ed249864f8af75bcf"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "18ce12059c4a639bb30e830a3b9ffe47"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "6bfffd47717e83bf8b4f93b469ce5096"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "68772c3cb6f0c11a5c1f00d7758b1fad"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "3083c2b80043b6147391fb0ebb6d396b"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "367110a714050a2c1db25917d55ebf50"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "6d68bbffebf34b32e3b30aea5409395a"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "cde7c50e1beec627b77d68a3a6caee89"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "8a36fc692628a96f9d9206812a1fa681"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "0bf81e86e71e9a38da6a3c35a8bee83b"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "b5fa27b0701220ea977f80b17fbe4757"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "b5c9d05b2d5b78e3d16c15a13bf28693"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "adb1e7115d1bbbc4580233cd186dacc4"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "35ee609d04185b2dd8292062e85a690d"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "fe71f65aa09188bb088c80606f0e2725"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "9a73e6179664ff2f0029284241be76ad"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "dce1438ff8f4850c585898fd3926d2eb"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "c867bc04846d479bf4935a6b53a7819a"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "2dae881eafc8e0f5e5c71f81360d49bc"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "cbdecd015fa05ce30f1ed6c232955868"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "c3ec617807601b9746ca2f85c80f4c8f"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "9170c0672a4bafcf4e319413647a9568"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "49bd1decb446482f3bd02a62d0e83435"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "29c9dc85db6797945fe7c8190dd027cb"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "7ff59cadc1de7871bc8ac647a45bf4a4"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "913de596e44886eac54d2fe663169df6"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "5c9ef3e3c1e87e7c49356b08f60fdb1f"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "6cdaeb08f42da03eed19394966369487"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "3ab81722d286a6278dd58f917e54e6c9"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "32abbc5c5b6b78388f28dc2cb822e32d"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "d2f49539db6405641b2dbf1fae34dd91"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "0b5b505045cb2e51f882923f8524fca8"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "b67bec5874d75efe7a527e5dcc5aebc2"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "539c87516b5726740e368c0abcf6c67f"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "0acb70affd41d24426a3ed757b754443"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "15102fc4857aa54b5a0664cb01c43f14"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "3e548effb71fc8b29e558823743be139"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "69799a378637979763b1b9d0bb8c29d5"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "8418c02e4b7eb66785fe0f23f55c432e"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "fa75c9abf23d3d87539530223c2588ee"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "e0a78973786a458aaf9c5972191c9de0"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "f712129f9cf8e40970ef11cab1425426"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "4935bd7e943bd6fd1f650ae329f13126"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "39b999c70c877212f82a8b62f8c51e1f"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "b77f6ec62a356dc1d3abbce5cd3a57c5"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "d6f367043c79534595dec5303972daf3"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "ae48f97f06c8f71bd6b8b45c59762bbc"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "b7c02d1ff3709316706ad77a94c5a3ee"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "26a86a987dc74ae99aee260f4feb38dd"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "8314e7ffa34024c19b77e8f7f70ad39d"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "8c8cb0aa6fc3cf2548291ff5334db56c"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "ee5d570525747dabee1c8712fd08f30f"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "1eb53242dc2e23bd6d599f969f1955ae"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "d446ffbdc463815d39cc1a672b241682"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "17d98eaf6adae2a880255068bd1a9a6a"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "d99b1dcda8cac66506778ba1f1bee2d8"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "6ed9b389fa0db97bc853ebe8f21f1c6e"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "3ed1c335c1eb20c43d5fac1dd60e969e"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "8cbd9ce3c7179b5cd42ca73f1127afde"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "bf65494fed38a51142f40fff04cf0a4b"
  },
  {
    "url": "categories/php/_books/thinkphp/Config_Detail.html",
    "revision": "2a6b83a39cf375e8ff029e7cf7b72e5c"
  },
  {
    "url": "categories/php/_books/thinkphp/Config.html",
    "revision": "77308a2d466fc54d497b855853a2ab53"
  },
  {
    "url": "categories/php/_books/thinkphp/Container.html",
    "revision": "234b069db8220055f033f915d8fce082"
  },
  {
    "url": "categories/php/_books/thinkphp/Controller.html",
    "revision": "b391c622a0a6a0dd7d14df8c18d37506"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_CURD.html",
    "revision": "b5a319a1ed482cddbd5b7803c371d433"
  },
  {
    "url": "categories/php/_books/thinkphp/Database_Query.html",
    "revision": "86156ad7913a1d6ca07e854f5eda3f6e"
  },
  {
    "url": "categories/php/_books/thinkphp/Database.html",
    "revision": "4d945aa64c507d0a2ffab080e8755bd7"
  },
  {
    "url": "categories/php/_books/thinkphp/Env.html",
    "revision": "8f2a66f50bab4d2f0f7497ea6ccb6d46"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Composer.html",
    "revision": "9c398fe56dd1b7ad0a9deab8ef2098c9"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Function.html",
    "revision": "1606e175efc238bfc209e3d51cb2b8c4"
  },
  {
    "url": "categories/php/_books/thinkphp/Extend/Library.html",
    "revision": "f685849e5c74ca9707b5b403b034cb0a"
  },
  {
    "url": "categories/php/_books/thinkphp/Facade.html",
    "revision": "675951e4015aede9040f497ad102805f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "bde87c71836148e38956ff72ca87f408"
  },
  {
    "url": "categories/php/_books/thinkphp/Inject.html",
    "revision": "47098f2eac1f9d445e644fa8c5c020ed"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "626fd122cfe238df400633b3badfb559"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Advance.html",
    "revision": "b7b70590974aaf83c573e3acef573a16"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/CURD.html",
    "revision": "eb02c1e78930632bd83aa1d6f2c88c8c"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/index.html",
    "revision": "4d1e90596b138328ae93770c1ad0700b"
  },
  {
    "url": "categories/php/_books/thinkphp/Model/Transform.html",
    "revision": "14439057fdaf577533e8a23db655365b"
  },
  {
    "url": "categories/php/_books/thinkphp/Namespace.html",
    "revision": "1373f39c071410312641b2bd21093dae"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "b48915212cc4032ae5cfec4a4f315fd5"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Assistant.html",
    "revision": "502066cbf6f22c9712110f64277dc204"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Console.html",
    "revision": "0c487690f215142ed53ad805afd990b2"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Constant.html",
    "revision": "c8bd214b3ef94adc0ba552112d919b14"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference/Debug.html",
    "revision": "ab1d7c7981baa547ae4ae4566605a99a"
  },
  {
    "url": "categories/php/_books/thinkphp/Request.html",
    "revision": "1597239f728096b928eb32dea7c33d31"
  },
  {
    "url": "categories/php/_books/thinkphp/Response.html",
    "revision": "edfa32eeaf6a78de9734fd83614f930a"
  },
  {
    "url": "categories/php/_books/thinkphp/Route.html",
    "revision": "11f6ad3e6434b01cc6413a99148269df"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "af1fea04f748a0b4c2f189d30e138b60"
  },
  {
    "url": "categories/php/_books/thinkphp/Static.html",
    "revision": "95e96bfac020194d45f1f5e3db72567e"
  },
  {
    "url": "categories/php/_books/thinkphp/Template_Engine.html",
    "revision": "9908a94e04c8518bf8bbf557397cab10"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator_Rules.html",
    "revision": "3d893aa94014cf2d55457719510ed3a3"
  },
  {
    "url": "categories/php/_books/thinkphp/Validator.html",
    "revision": "38990f54a075ba19d27e92dcd6fcc5e6"
  },
  {
    "url": "categories/php/_books/thinkphp/View.html",
    "revision": "0a50920d7f0c3bde3c51662caa546da3"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "dc780c19a62307c0be3c7e5b4a7ab796"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "12d9fb081516db5cee310d2f9d312efd"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "727b7a96cc78e52d22375d7579a75928"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "9ff089b45e339836bd96321d764cbbfb"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "80e960a33675934505aa656d4d7e3995"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "365103e244259d1b001b51529f41196c"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "9697e79ea7c7807412f929cffd987f0c"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "4cf886cda657dc5dad36322f951231d5"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "3a153f4c05fbddd251c0780883924d46"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "7158e97075407010e7470b7a104032d0"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "5f97c6eceee4a9b6bd193cd29a85e5a8"
  },
  {
    "url": "categories/php/index.html",
    "revision": "3836da7c6545935b1ac4d130d3e8be26"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "8fc1f101d5fe432f5b6a7c059fa2e413"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "89785dcb6aa8ad1343fd56815c3eebb0"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "836e1a1bfe986b45431c124fbe495f7a"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "70119cb2fc6313a8df18211dd5e3fc81"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "26107bb7eb2bd3c634c9fe870f3ddadc"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "0311ea20ab4d97f03aa00b90ac711b75"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "acdd3495a73a623e4661f03319ec7010"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "dfba5df79acc211d208acf8f714b425b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "aa60f2a1d322a0fdcad8eb54baa25e72"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "5e9e748f45454624fa843afd4693a125"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "105fc4646b8a8d6bd7ee6268a43f02c6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "57340915a36612018a3d349cfcaf5016"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "2a011b0dbba90cf5a1d271e1e3cac03e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "dc99f1398509d127cb6d95b8500d5093"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "779347e76860efe53d762aa26a657335"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "2ea24133ae39ca14e01686f7d85bb704"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "89c68faa6e7206bbfdabc080715c6073"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "c75de74d4387baf02c6bd06c3e02535f"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "5d4fd39a90156964574978127ccc7f7c"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "4eccccb09743131f299f767b9e011054"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "0b289aa6a2ecebd41628653d95cd41e1"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "aceec79483763e702053de61b09f469c"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "839eeed407e1904f982e5b414e7c1a61"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "6f919c8db0d6c2990f47ea4c0e042bf5"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "f06be15906c5ecc36621dea532864cb0"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "eb4808cd85c2277f1eee7630d9256d61"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "9e1f99a2eade0c7065fdb215f2231d90"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "7cf641c964426e39a9c2222b3f6a814e"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "ef31b5b35c926d2796af4d9dac6c7f86"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "024f82a3889aefa4f946606b1beafe91"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "3ee746a54bc648150b19c375bc075d98"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "d9edd5cbadb8db59a85284612673b376"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "f7a47dcfe4dc70d11e47f4bc5fed16cd"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "37eba7501dc4bfd480fa9e35c99bbf0b"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "f4d2cb58d7548f7b1f783eb584a72ccc"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "35886eacb1b2edb3432eafd2be1a0be8"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "eb13e4e956cbe87c90b7974fa197e1b0"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "4573790c8c75d98f21a35ea606f8f26b"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "351f7a826e8055ca0c6089c3ab99cc79"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "d0b01c5141cb8416a1c24827dd10b253"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "bd7eb7d82614e8f091993c94eecae928"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "28aa35544049c9fd0a3ffcc7ec7d0940"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "1173ffc2e5ab706150d393f76b9d736e"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "76c5d101f14ae7e63e5b4f50a58d0b87"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "98d193dac281b1a1c732798b46239a91"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "801145ec06f9993f40beb8ebfb41f391"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "40ae7a61d182c7a902f37ea89359ba1c"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "171906f92ac3319fc87dc51515544e3f"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "1c9e0c6294aa2ae5e451365631f8c668"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "5c4268265b249a475324c4858ef920cf"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "afae1907a12fee8edaa0652957cf087f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "df3c0a295876dd472fb0af4e87187114"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "bb519b19e6e01d501076e79bfcf9d7fe"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "e3bd5d54d3f7942f841eae60e8b2e1c8"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "1ee64ad5efdb0eedb96aeb83f4fe7df9"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "bc2ce687358313b0bb276aed3834d8a1"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "1c18fe5d298a1beded01b93b0616f442"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "4d93cf1373a8d85cdfac93ec0945ace7"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "0e1f308370ba45d3dddb8f72619f05ee"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "0f482da223815d10c0f5e5a55f59006d"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "ac9b6e6fb635ba39a9762a3ff38bb28f"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "2916f65b0358fac38d778eea72c77c51"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "3adafd5cb0d58c659b743014f44e92aa"
  },
  {
    "url": "categories/system/index.html",
    "revision": "de128390f52fff8c0c9fa63a453f1465"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "52343ac6e500134a86e220ed11344f63"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "4a4bbff18b36fa9da8db4036f216de81"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "eb8f28d8ef9695630a5caa0022502153"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "b706f86469102e92681a8f1d3c0c5c6d"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "46f97b0ca2a38dd6d83a9d957c32def3"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "9446dad10eb3a26cfc55c444a8ec8b12"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "de67290e6a6911534f637f65ddc45479"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "490d077099c4ab6a6e8bd9346ee9e851"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "b7f803abc631235ea177e9dad9085577"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "ce5d0f4adc551e8dcf12366f038c2f00"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "32b87651a4c0fafd8efd0dfbc4d05e5e"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "fbe2c0a3784146c0b114e9ef9dea51c9"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "feb0522bccd9c0d78f82134a9dacdac9"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "6e4044f1cfedf0c00ffd5698f67051e6"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "f9e214f25d7a55b89052c7bf82e14f57"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "a6787e45587c0fe73471d502ac9f5257"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "a687b04213d60d98583a1510525cecbe"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "3a63188cc27c60987ef89e68ac64a779"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e1770a1d81b76816d306ab2dd4c97f83"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "eda400ffbd4bae595aa89beaa0afda19"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "b165a91ec1313e5c66993f4346e13a1b"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "9602f2e373fc2dcf49b7264e3c145a0b"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "54f77fb1e61f5ce59d978af4f69ee3d3"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "ed991dc04f7c648775ec1a5d86824f6d"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e753373237c47b62d1b4401132a51570"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "fb435a5af231948a51528ad1a0637393"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "82ef07cc68498932917162eab07a0626"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "a94f5e09c64d2be15ff4e079d1e1db6e"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "ab4303c9d678de923a0e652ce28e1ed2"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "55b3d01936f73427e437e3bcdf280610"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "cf14d6b37e3c762c6cf95db6561d7476"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "ef999b7b3b44f4bf28d227d98c9331b6"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "bc7b70936cd3795445958a170381016a"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "13aaeb44fd383e41b34b5afa25ca4428"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "03602487fd06f7e5e94dfa0084592d63"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "5c3c0cf19cd9a8353f335cdc84d1cd63"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "9976df2a575c13646fde0c63d885161a"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "dff6a4edc455fd15031161f448033678"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "5478ae09f2fdce6f9c9ce200063cbc65"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "3fab39d80e62b82ac64ab4a28f81a081"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "3393c1509a8c62b6076fecfc02576cb5"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "2c13f904f35a5c5fb2b45fe84233933f"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "6a854ce8fe0536a16bde886cc5d09c8c"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "0056bd8002a835ce204bb761e073827a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "e2a3c7593265a566e59bf9f07c3508f9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "162c734899bdce35eb6a0c3788584929"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "18e9b89a2584e575842c4276fe268928"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "ea5d8ccdd04c12c1b5e66e50618a0d71"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "4115ff4db68a0962f87468543c8663c4"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "ba1eee8b712248b16afc0e7d333c3bde"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "ca8c87f3e93ad8b30d5dbadf099710d8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "06799afe6fa21cc0653e81f48bd24021"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "f284d29c967b7a7dccd7db8ef401041f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "6f06b9ef9e25f5edc8799840bc68424a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "1cbd8ec2c2ff312bd8c7160347985f6d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "84eb15e02e23db69c81c26d7b6de5b76"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "041b7beaab9ab9fd57ad4ff120417ebe"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "a31ecd7a7c16be2591a7400a906a6353"
  },
  {
    "url": "favorite/index.html",
    "revision": "74cbde4a7801531c8f890cdaebf3a176"
  },
  {
    "url": "index.html",
    "revision": "07220ea4177947c62e056bd4d30dd736"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "77881e1b2b1dd664cebbb0643ff486b7"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "542e2e328f4b178a9601a5533ed34e5f"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "c7d054b9c249193cd40cd3cf8af40684"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "68516fb177c24fdf3ad3d20edb9dc439"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "86239b5be475b29b8cd6dad4bda1100c"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "d3ced7769b675cba18c397c60562fdaf"
  },
  {
    "url": "note/index.html",
    "revision": "4e0e1813d03a50bc1a57213ae8cf3dba"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "23993b43c21ccbf1f1fc983ef47aac1d"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "de1d10df86bee3f8987253b1823fc689"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "cb86808dd4da4e041cac3aca667a7248"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "6ac0b0ad749818d1922f0b2716ab5048"
  },
  {
    "url": "share/index.html",
    "revision": "fe1614127e6c035972b16d58a4a43826"
  },
  {
    "url": "single/about_me.html",
    "revision": "478a0f60c33e88b60aa8afc8331d36f8"
  },
  {
    "url": "single/all_article.html",
    "revision": "78f706fe30898fc841a2d84824c6311c"
  },
  {
    "url": "single/welcome.html",
    "revision": "39b51b1b303ca3d79fdcd9d385681d7d"
  },
  {
    "url": "test/index.html",
    "revision": "f76fd01ff472b1a6e6ae22ba124849f4"
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
