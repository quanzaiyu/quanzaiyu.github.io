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
    "revision": "4d8fa9601bbfbd584c6bca5807458a50"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "fe15c17d96d3e190db0e3b971670a3a2"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "566d090d452e12baf8067f43c36eec31"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "f25e6ed63cc682f23f57b13c563ae53e"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "bec8cad9b49e2036e835e84df46b14ca"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "f1e37e66acf25c7c1058aa3f27fc8338"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4f40f5fe67c0bc23769526381e2193ad"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "ee7feab927dcdd88a0715977f54e138d"
  },
  {
    "url": "articles/index.html",
    "revision": "82a17d31f28765263c537f02c09bf30b"
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
    "url": "assets/js/1.5d4da319.js",
    "revision": "0b6295ed40a11d43204f4fd5e425c357"
  },
  {
    "url": "assets/js/10.99fab07f.js",
    "revision": "abc035a050b613651b296ed0f46e50ab"
  },
  {
    "url": "assets/js/11.70bc14a5.js",
    "revision": "1d231dd2fb0149745943581c253de89b"
  },
  {
    "url": "assets/js/12.aa18a28e.js",
    "revision": "11483ab66c8375f0cbebc812dff4cb2f"
  },
  {
    "url": "assets/js/13.ec4a26aa.js",
    "revision": "7d7d9327c833bcf40b5d178050fe829a"
  },
  {
    "url": "assets/js/14.600cd8f5.js",
    "revision": "2fa2dbe36fe9b36e87bab62685a49d82"
  },
  {
    "url": "assets/js/15.cee5b69a.js",
    "revision": "e3627195e3a46be565ac53140dfcc8fc"
  },
  {
    "url": "assets/js/2.ff0d85c0.js",
    "revision": "42914375c369af0ad54d777cade6d3c0"
  },
  {
    "url": "assets/js/5.4cf5a94d.js",
    "revision": "60e9a413f214e17d1e7aa5c52277153b"
  },
  {
    "url": "assets/js/6.66df097b.js",
    "revision": "3690d1c1593f7236234bf89496b0460e"
  },
  {
    "url": "assets/js/7.67eaa0b3.js",
    "revision": "0969271fa6809e715a851c695dce636b"
  },
  {
    "url": "assets/js/8.de51e78f.js",
    "revision": "49b2694ebc3eec28d2817560611e6931"
  },
  {
    "url": "assets/js/9.f8a5ce57.js",
    "revision": "56c936d5d37d4efe415866142421c9f0"
  },
  {
    "url": "assets/js/vendors~docsearch.077b7d33.js",
    "revision": "1cc58203437a279fd81f10b909c816b3"
  },
  {
    "url": "blog/index.html",
    "revision": "5dd456f1824c57fe03642817cc6def7d"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "28ac0d36157c1616abcf188c165466da"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "05ceb7ef4cca98ada96a4c1e873078c0"
  },
  {
    "url": "books/index.html",
    "revision": "423b7a46ba087b973c7436a8a86cc98b"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "66d07bc87c47bf238e8562bce765033e"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "b5b5f6803a6b597ddbb8e5ec07d3e19f"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "ae0a54d3dfeb8ce82f2a369c02b6602b"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "38b653d29006ad0aebf739d96ea74646"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "c0b2403d9fb387f61d20b3968c1b5a13"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "50e81b69f76cac92dee7703baf759b0e"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "84f50760a89068e8a4212415ac0c020f"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "1373570f2512267ee0c6e7a88f571653"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "a9154bd300ddfc25f1eeaaa86ce318ef"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "0a8cc818b64fe674854f4cfb25663dee"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "2ccf763200c70ea6e55f1e8879782da0"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "472ec87f29773db5b711b89a4001237d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "122a57ef86d14ba843d9d27c2bc0836c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "b25e883aaf37c153b3562a95ed8b188f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "c31a2bd7bc11ff02b40e9a7a2298768c"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "099ebfb0de95543b01b0175ebf0759c9"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "63328ccd8979e432a5fe13fcbd735f34"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "fe047b75a51218e6525287a4b41de8c9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "6071486e3493bf5c8603cbf2ff7a383b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "38a2120b70c33c4e9e2a622bf467ede1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "39b6f75d7758bc1c6672e796ed40d492"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "d9144a616226e6d35536dff328bb7b3b"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "166d4cf432811df93f5cb8a6966b102f"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "45e8718d38f2392cc5f8eb55ce9230d5"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "734c61152f59d3bea933bbf18466056e"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "e1c32485e27541bf13b1d9cfa25d1b26"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "7a8caee29e98b01eb7c64a7012299449"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "e13c297f955e0bcad541a730eebb1113"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "380a3be7c55f66545daa1d703f07f06e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "3f82d1dd8eecbc5547be47cd3b512c64"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "5928d168866ea4671e0fa501e04b4e6f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "e8c79ca674a0afde6d63c5c7798a810b"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "59ff0d056bd825a8dc637166147b0f5d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "0e6ffb6c6085ed0321a1922bcb2c45f0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "972c361940ab3f1a2255e411aeb07786"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "af746ac10389ac65909c3a601cee3e5a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "3b455e1e05bd4ee46362fbcb524c0251"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "cca9abfd71a75338db321741a9f5d9b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "2cf5e2bbf3880392ff982d37e4aeba22"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "90426b2638e61ec578a9222370197298"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "9b3a21a489aa7c8d999876f5f4f788c4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "e223ffb264403f0d251f38dcac9e4117"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "848a01170598c28d6053a88787425060"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "38e3a0f79efade30505a73117a83d5cf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "23b35cd6a4f752cd06e8f43e7506459b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4c7e7c0d8833a22d261d382e23e10e3f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "033a09aa80494139e10cb8c95e1aa686"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "9058eba59124c18bd1e466f407bf3a73"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "19bfbde15837f7623524d0e5fa8559cd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "5eab487543a3cf6022781f9023546b37"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "4193f0e9972c18810cfdccdc7fcd0d4b"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "3dc990224e8f60e19f70e33a82c49906"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "ec70752d2d6ff81ff2ddb8993324fadf"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "619c698e4ed065c9ce45476d099bfa35"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "0be96334af7e0c33aac0568818558e9f"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "732949189655d036a14885a9db9e0864"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "9ff6dfb7df3b9654f240fccf0ada8ebb"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "6e6999156f10e325d3d1ef5624abc0bc"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "52082411d9c9bfac64a5e1f07a8d282b"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "0691b9dd1108819bb8e5533ee2bfdce5"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "4300b1ce1e90bbfec8990f2fe5af1e32"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "43147e951e1bb2c9d3c5c605cd2e0ab3"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "a16838c526d82d0f22d990d1ff90db17"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "6ebaa7ee75c010a4275ecb8ae3447ef8"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "d32109d3030670e812476c625c6529aa"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "564219d2fb0474ec8971729375db0190"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "985529b6864df4b063a5741ab8d6d1b0"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "408f15d0b985b7ae259e160271f8cf62"
  },
  {
    "url": "categories/database/index.html",
    "revision": "04025ea5cc09f25c08aa8200870b3d23"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "38298342b723590e28738eb6fa7f25fb"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "959f3691bcd1ad0eba2b578fd74045c4"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "0123d1576cb17aa9cba7772683f2cca6"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "8a480f07e63d079c191a74f66e68160b"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "7fb071935d3f0203d8f9467ad7d6ed26"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "f5ff80d3ba6c1c53747772cbd47ab2dd"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "a080071721543a4510f1ee79ae439d18"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "d7b2d0a11da42ad455bedd355415630b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "44faa27b4d67ebc890fe8f99d9118eb8"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "f43516bd83bf514940b5f87fa7602a4a"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "a9f8829aa9a3b7e75111f162c389cd45"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d7cfb0b6d376f90172742c514ee9edbf"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "f3833c7f5ebe6ebe46d219afb50e97a3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "48ac9670cc999471d67158dca6cea5ac"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "23a78104c57c25d2260b62f2c68ac9a3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "f13f41dbbc8ca8fa6f47c676685c6f19"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "3755d1889c8e802a1ae046db1ec5f25a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "18a77859c4fa9a2b87821543707a0cab"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "3a9fd32fa6cec2338217d070c5812373"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "b79feb6fc0ae228c286772b2fc317ead"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "9ca33d9be3d092d23e8a7c0fba601e83"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "f2e8e3580b087d6dbb5a58c4e585d62a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "d15e4a5e23bf6d5e00e11ba59ae75844"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "adeb9f2b370f02f71acaa72d2dec7e30"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "3116b0cc3d2d30592c02c007b85ec954"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "6b7a30aa1b7a1b44587efbba0490af04"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "2d3bc821098b124f758c55ed8e09ebb8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "6fa6c91e322f0924d803de6cb083e660"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "815cff0eb30e39a1951c3827499f3aba"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "bf4d111fa0971385f43f9ea262c095f4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "c4e4bf601681d052aec15e2c62b92308"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "ddc149476927b024e5ffbab2ad934c87"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "7d8aeee926d8fbbf2abd4f8035e8484c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "77f58cec59b05f23065bd6cce173f80f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "fb60e7774885690fbf0fc366ccc0ee2b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "cd554b84330197bafbd228ae27f5cef1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "5ffdb4cbe7cd464a39f1f0a3c3cce139"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "90996b1f1c891d52d2121b11844f2fca"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "ac8a4e47fcadeef9bfc45f44fd8ea91d"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "e3a3cc0218b4c9d1b9bdfba16c0a2a63"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "1e786e39419bba8e554f41d14bceb733"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "8a5855bf3aa26a06d828bf4a55d2219b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "6fa74c8e2781ea5b9ae5c397b6a6eb6b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "dde4338b99a3716531b538af2cf0db62"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "16326de9224f5cfd2992f1650219400c"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "7635a55a870eabd9f00115bd6347f95a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "69dc21257d3df61b2563ec62cec3ee29"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "a56a424c7d5ac53c5e2df0e6b400d391"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "74589a9cc2a11b2e1f12c17debc3356d"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "193263c6800b84ffcdc2f6c9a8ae68c9"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "677e012ab7cc650f3596bdc9cf25af4f"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "0ed4ac7f6eb0f92bcf16c55b592aadf2"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "8a606dcae0ae3546da4e5f7180de2b12"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "cfddba1d32fd258593fb28dee9e842f9"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "40d43514f19a83c659ebcdf09cff3f5a"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "f688b6f4573dda9586428c45a99d07ad"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "51dfb0481724f02a8f94b1b1ad8215e5"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "4d6283bcd841f035b13b93f8ab4d7ab0"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "f4e8952d26877f23721341e2d3d07b40"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "da604dc35a168e24c1e8fb7b94d5f5fe"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "323da8379f49f908254e57e10555cc1e"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "ba4b7242b9c700add7542faaea84a5d9"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "d3a6bd15118208b5369b2c4cc9c229fc"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "794100c58643ec7f6793bc3e6ce0afdc"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a5f116a04e27a4ce218f9591f1f4d183"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "380c39e8c2566c7b7dd59221a617fa8e"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "c231f8c9fb96367ab1c185334a4be24e"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "820cf5a9c39e965d395c2700ac3ed340"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "78d486e793669302542933d650be66d8"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "339918b6b00a2dacb6840c75470ed693"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "976b9775021c2c811682cfd8caf1aef6"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "e1fec3f1b33c57e8e025c864485ce224"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "2b285897a23456d3e0bfdc50ac38e7e6"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "c8317cf836ccc83e0b38b1410b810a3f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "a2e3294733445700ef4805f909b09466"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "6f2a2e8da19a36730f91b3dafe962d2f"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "a8506cd4358d3f4004f0c4e4a7718194"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "9a3ff764440caafdc900a101b4606898"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "14ba44e9b06c910d586cf792b28bb45f"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "406340b60b7abd61ee202901069f047a"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "ce0a90b332827d5403f2c5ef3a10418a"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "6cb8b3253941a65b621b79d6dd73ef84"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "163dcf09128738260c318a24d19821ab"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "ca33b72872be9466e6cd9f3713fa24d9"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "6f8293939ff067b676231003f339357e"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "468605086704fb3c6b836da0f96f8ce9"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "cb155279f274d02789228c3b9f5d164b"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "37e97cf142af7a82789e2d01eb12ad70"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "cf0fda1d9e6994a6ae5bd78b972145c2"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "16a14d15a5c2486f667817fff607410b"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "4cc228b8f6ab7e0a9278d488b84ba92a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "20eba700745dc7f4ab920171f4d1dfbe"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "540351f9dd2f41c0821557c30718493b"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "870955dfea1ea8ab77b1190c707a2e14"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "a555f21f0eb41ec778309a1349e93b61"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "2de174c314842a6c85e5503039a3df4f"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "b082085f24841b377b2e5502377a7910"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "2f05bf9ef7989d91b3e17bb702f9dd45"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "8dc086219767cdefdb1828fc8e38a142"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "a59f5c3f8266b8b6abbe95c1a8727fb5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "9dcb81beb921a247405ff7636330ed3a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "a0b4cf8c6955d4004ee7ec645814d7c3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "8dba64feacd1cd2ca2340a37d85f33d4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "2afc3d44d3440efe48688f881807e5dc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "96b6ed0770da47ca5afd7ce50850e394"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "6a12dc6f9fdb90916f06cffca497174d"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1553786e36ceb76e7d688aeda1fc2928"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "78c4ef0ab3e1fb8f3994596a9830ff4b"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "877e923e41d35bf79e6bd214058715ff"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "f3c0878211f79df30cc4363b363e60aa"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "0371dac928f3df4eddf6e70194345e0f"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "3d5866acfe23745b3d47c1f876bbac37"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "f39fc0b628576f7e2cf072c8fd48907b"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "96b190c6685221c139f7ff29e848c207"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "aa39726b902e31c6fed07478bdbf35c3"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "f71e4428593a081f352f690f84e89a8a"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "1360a68f88466efeeaa0835db3c8e725"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "71972189a18de0fe1b26c8ae64e3e474"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "4b90bbe62759f19996d4895a43e28f13"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "eb2f58553903640d8fe8dcbc0b824247"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "f2a8ca60baa2988161182acdef6c602c"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "81e4a20b8e94e053290db0f74bce7c84"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "29b8a7246838f633f386a34ae07dd21a"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "79f4a19d05cba8dd92ac156288a4011c"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "b336d95fc330d5e1154bfc09dfeccb93"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "f664a0de67cb63cfbe515b67be32a9db"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "82bfd355de66933e1b085629d5d2c064"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "fc967fdfcf0a9314420664f33a6e0c69"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "0f907391245e50ae9127654dcf199aeb"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "2a123d0c7b2eff78efefba5bf2891003"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "2ace664ec0925f76f83bb12768fe9122"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "20eb85244aa3bfd8e18eb224bd4b397a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "f5bbba5a8042f650d62369f2bf6c7269"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "92864f0d937ececb93c7f3ffc2acf7a3"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f6c4047098f0dec826bf6841e4a9db65"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "ec612a24c39c914e01d5c92fbab9a10d"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "42d2890a032d8d2df997fb18e4312b22"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "04e7a056d059642ddabf30a4a8755627"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "bf70dbff001dbe6d3e9bb22f0d1fd1b2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "588f49d7125105beffb2c949c27d2ce7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "1aae30e0c2fc8e46638b705d43e2e0cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "b889e2b0c2e16c96d0d6e2cd2189b9b5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "c11cc698c20827a3b55d5a0f6882e883"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "bbda4909c0617820a6e7b0f999b79fa3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "dec8361fe3ad065879f3ee52c9a6950f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "1c4fd71482e2694b5c88c562a78a016d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "ce679201db728c0486360313488239a9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "bdc6dcfaab7c1a174b7cc471f6b15de6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "6ecc579c61cc10e82b1aa1d35b902826"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "fb6949876f03be239c37bf4d8129ea52"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "a410cb3f93ddd6f77a17c3473970fcc5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "abf9fdb15ec0583023ba0b5ba468d1bf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "a1627a1e835eefe08ab9b271a2a7829d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "514c158bba7d749fe22c42e982a58318"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "0d84b7f0e38efa7a8db705dd8001cf77"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "1db1001b6610d2adc446ad352dffa1a4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "b1d7a48dbcf04766869daee2d4949e38"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "10f9a94d58649c0b408894614027fda4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "e434430b65477e6c0c14388b9a5aa7a5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "4d7727b5b1345f3936cafdcff498a39f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "3e082f7857533a978115ad52a971299a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "76348072ddf82b2a0c84698522134b27"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "f2b74b5dd056517e69bdb3e0bce48f2d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "da0ac75b6d39938b1f86f5d38e217b9e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "0c4454c1bd710798625f9493ec525b67"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "486348fd3e134ea330fd64601005004a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "f2c1caef207d1fb362e00956af657fc3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "b2e5937abf14ed3398e3c97c66982d19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "816998d16f28d873157fbab0d446f2f8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "3f96bda5c6fe4796dcb747e7b998de13"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "393215d87eae413e3f4e9de45b628c15"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "45f579a28acb3fca6da4b7d5d52f9fd7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "d4583e3379fa39e075cc8c65e7710a82"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "f79c3254d9733098ed7d28aee6465ab9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "3dc78fca1956a5eaa02d1de4b922ff8a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "76818c0b0dbbfee13f56b90d3b3e754d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "698fc94614794b4387dbd65626163ed0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "7509260efc7353cbf69a3e77ab56de01"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "96563a8675c299933ff34769307bca13"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "89547d01219630ff85cb106d3e0deedf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "b7259b93a48508fff6b4ac2fff145436"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "f4c3e872e96686db5755f4f37e79fde5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "cf3cad468a9958e2521bf0f388673dfa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "2717dcbe1763a0ac749086ce8efc19f6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "435767787d70bab00ed33e44875add61"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "ca1a46f002d677b81afe634fbba070f4"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "2587e4a4a8cccdd44bb41e09ddad06ee"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "ca0b20a9823f748a40cb6c47244d934c"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "6b4228765e61fd1aeee4762d047a2f01"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "4971230dcb9c5cb299b7616f2bff015b"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "535fa6ce89ed5f1be0b6c8600c87bb52"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ac62c005595c18cf519d312a44ea27e3"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "82d7c8556a080221e6f9fc693a69de57"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "62249d963de3484c17a9991b08f2ed3b"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "f24cd4e06b85907331acc34064566eaf"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "fe9bbb23e43c25abee9510673f6a87ee"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "4426f070966b5feed059ab7a542bacee"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "fb819410de245441c606420ff6ee0637"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "b4b8667d83f31eb00fa29e1f161250ae"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "817ce5c18c1ed77a3e214165451d4757"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "cbb6e3c246a0f273570fbed2d93410eb"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "fa5c62363cf69b205087a787edfc3423"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "32c15859d35cdbca80f9fea3a8ebadaf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "34021b5cbf7ffe2b54f7a5f3e04ed7d2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "b8d7358dd76c027b989fd20873fabcfd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "6d1f04563727289f98e35e60ec661b0a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "57d76dce84f58870a2a4bb9d6a94d551"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "933aec06a3307919af9d6587aa87ef5c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "a75efcef1861ddd0d03001d3e89607e8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "f60fc3d086ac2131c71d29009d51eca3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "58eeb2b3aa3af888bef74eddf1edaecd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "d98e8a009ef08a667007320d63711608"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "e4cc6853cf1539ba03426949eab47655"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "271d9b77ba48463df635f0c95c2b6bb7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "0d3b1ae792513442a93c5819a576482a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "c71c02cf14a27274a622e10c61e45743"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "f13f4f2c88cc9b7c9e71f6c0e7efdc94"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "f74c4edd0c3385afb28f1830d5b65e74"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "1cf95cc0cd79d19fa0cbe1241a92dcbb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "c534702114b3a93146ef959b6acc5358"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "aca4c3b446355c483084d0287505744d"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "08755fba61aaac747d5617947960ea3a"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "3774a5d23a0f733e2d069cadb1ecfbb2"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "d5423cd2b23e436bb43569325e562817"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "ca1f768981a1a4373754a32fe7c00c33"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "9ec87b2821ab5269935a80f0179e9d68"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9e484a68f2d89fa18c1e7ff88cd16981"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "3f2b73a87c968ac2f6543c4ebbc7ddb5"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "a9bf3a6799b1a7c547edd7732fd02733"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "59393ee64f05bf04520a524261419379"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "d823ccc76d3cb9a3a81779974e506dee"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "3e7bd7f30bc60c28bd716db2c40aab15"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "23a57009f4f6650ebec09cd60b49e168"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "dc2951d4cba5d387b0de5e31598c4510"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "9d49f7613898f334619ff206ac8d7d46"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "51bca417ab449424c76330abf69d6259"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "f4627286fe80df4f5a0f03e3c2b991ce"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "84f3c405bc0bdf526b1b8e1873d78537"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "fcbbe069a97102c41ef84fdc15c49c99"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "4ea72910ad60f03ac5f0db5d27837748"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "e40be92f625aa2375e93aef1aa299031"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "fc10985a3b18baf680aed4ffe827f739"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "cbc87e3e5701c6496b30659c70db630f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "8b75bd510c52bde5b200b0326233d76f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "2309c2e61838e88158bc73206ed48e16"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "4843b745ece4b57e1c665c78caf59deb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "df294d9dc652cb6a53a5ee76d0245c0d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "36042d6eac267e7840692e5eab2a9a56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "1d356144d400f60b9aa9813287b3b6a9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "f8701c15b023244f18b614351061040e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ad26e5b79336bdc6fca942935f48cd5a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "bed0618a408594587c9b2c9cc990d458"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "790f9a09568cd61463e166e87febc894"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "ad786c565479287c58ee15c249333c9c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "6eebacc6b6c8d0a1e2b86735092fef19"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "63a1f2d8f4b2231c9cabbd950cc34833"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "9894bc81d49f90310d2948a8ab313b6b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "e21df09f5efd552c6f708604fc03e5f6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "6815706e65f1990fea258d68dd0e666d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "3d60bb66d6132a9e8aa56dce0c1eee36"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d5b23e21c058c69ccf7c5e97e43f3f99"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "1e61c86bb49c3d57d12060964a410e38"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "cb84425aedfbc2fc0f3e40738c877d4a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "5c81754b6ed7e5538bcbb112270271de"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "f413b2058b8cc3f6ce995476f312975a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "fdd0216472fd349f18dcde5fa4a6dcc7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "34980e3c0d5effdeeeec9e68e4ee9225"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "f7e00b71ba1b95c8f52474326196e90c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "5227cf6cd1a5612b58682b0837c46865"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "c4c78a459968bc6f1658e1c5b7adcf47"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "de397582c5e66fb53d98020d8fe363d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "b4452a4ef2bbddf0899a3db60b8e149d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "cee7173d100dee07f25d4eeabea2d428"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "04d239e621bddb950df4ad5891a1a813"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "5e43ea1fcd732511e4ee7348f0266353"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "882b5496a9b1f46b99547635666fa437"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "e8bc5941a7be0f00df9392e8622ce05b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "82372e48b264898d729f15ce6478123e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "890aaac9bf034f00f57dd9efbe7667a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0e1476964ea6de9363a554b5a684cb31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "7621162bb9fe7ea1c7408d4cb0571da3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "54ec3e91ec2df3767dd66db265308173"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "c0aacc188e8267774ba9b7733f6d949f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "73f34f770c2836ceb712dcd663dae66c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "e026931d9b9cecad95d01c1a3a227096"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "ef216baaab0fb87c74f71a0888630267"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "c293ed1d850b378a807e19242a0c705e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "f7e60135b2271017982c51d2b99545bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "cf85cc231a7b1235042dee398ac3e261"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "3994738b2ba01854a30cf239f3bab271"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "566f67be7fb6f1aee516e5dd80f683ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "1f72e242b3473f24c59181221ee09d7f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "5f78bb2d970c452b57618f1b28d075bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "c16c665206702d854ed2332f712c0117"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "2d8e390b03ecff621ebc5d2aec84ae07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "69765711be2601797d8d756cbf4af14a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "c9add3ebff51f28a6bf4887cbc3fbb62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "7615166218ba1975d36e621bc7faba91"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "99f6a236605a6dc76eeee5261a9e8895"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "7523d55e27b15343740114651bd60b1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "acfffb22ba7a2d50e3cf05e652e50149"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "6750dab3a13aaf55fc455cf8784b59f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "1f2eb42e8f6281cc91c275a7b5b08ba6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "6fcda231b03f9643089f2f0e073aba6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "e11c8714d353d520c9630784e9ddf09d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "eb57a496b388f12d8fbd5ec3ab17ea50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "9e4a4fc3cfef9ddb940eca6ed108a123"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "50ee8e2632eaed1d71d09fb48410f8b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "15a05697c46839c191d43d32eaafaf10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "7e3c7b7e5ded9dc8f7be74c5efd9760f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "206d676aae56243fd23d6cf410a5723c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "83359ef300ddabc0442bc7e664022ae5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "6c24e0b491b3c7d77c9c26837c360795"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "2b7c72c81c0b789ff2d60adbbcca5c4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "c3511714aa9bda5686957fea9d328273"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "7ebc4a0c05c10826a5b49e2570b104bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "505bd1a84686ee1940b1ab3c590260a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "affd12c3f4d912d7ff173e551342b100"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "2221c82b000ddd61f985d4ebe4930694"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "ca25262cea2bdd1b4cc3c18b0dc87563"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "774f9ffef959d91df1d18a4ad8441bc0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "fcbce781ffc2247b8dec524699ca3967"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "7f8ba17f8241b6d6d9f8e5108c9ce955"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "10765776d5e78eaff7599fffea4e7e89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "1ab614b807d86f8b9517157c4db26c04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "c879e6039939cfe12009cd2e7f6fe6e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "a2012d3b15c3025761395e3f51430603"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "bbcd6603a00a596fe75a5900b5e3cc60"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "793495239eccf3de69a1bf6b7790a6c1"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "56a879f5332aa95a73afcfa44dc11471"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "c9d9d6b4504323a7d6338e10e2bc7f8c"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "61c36b49a967a3cfb0292f474daa3bec"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "d2d7a3f8173b2bfd6d5035e3cef9d2b5"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "3bc09a47f1167a6dffb88dfb5d769abf"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "6d0d5bca1d54c49c0b5150f9e7ade9f1"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "a486e05470e36ee3f550eac66e5c7b84"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "93532a22c1287fcbc933ce302429daa6"
  },
  {
    "url": "categories/index.html",
    "revision": "b8ea41a4ae8ec1915030b577281fcff8"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "361d020b4276984fa2021646f800c036"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "e3ffbab1347596fea3c37b946b117939"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "fe851b3d80b1a53a575e8463e11451ad"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "7deac72d8b59c8968f74bed143db6a75"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "ecea394fc376736cf75f25e0d0c57764"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "97ad63b5a8dd098373e186e288ae6022"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "e08448d620e28ca425cbe059289b27bd"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "043bf182abc0291afefeb199d00f1f6b"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "51fb6833983c30dc7fc98b8ef557e012"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "22df32c000df4027bfa912f801c01b78"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "47aa5b7ec4e05176baca464400239e58"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "9c08d713af61590c3fc078f11a91eb0f"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "e22ae8172483fd8cda0d86b3f38f5362"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "60b9d1b4710910bc8f43637829413ffb"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "340c67cf6e648944fad5aeaf67364a00"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "78aecd3b268dbac6d9d076e002e760d5"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "26e14e713f95f881bc7e3b3c9c80cd64"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "385a4c0cd482c79d807ec72ceaae6961"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "d1ca705d3045a39d9b65b53efe3fc56b"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "22397a1217e42ab3a0f56948620b9b02"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "33eb2f6dae2f1a3623a310f8c04aaae5"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "69a72aefc3afba31bac291943b856a83"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "f2204943acc4dd4792af31d727f1d134"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "e21bd238fed150fd071e66b82029fc77"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "c3b5fd44454153fdb8589061b0261249"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "4084efc17fab478e6c87a556601823dd"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "a4c1e85bce18c0383245e0f1ae807267"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "ee9535070cf601e31262944948e90225"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "008370a826d9d8222390efbbf7ad654e"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "15e6ff9c53587f00e2c8d4b41255d133"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "c94b12a57ac5e3cfe0e5bda902004077"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "871d657c31b1ae7b41efd0cd0946b3e9"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "d69c69bdac47c1bffe84df9ab20a97e5"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "6e6991e3aa3a271b3ef45722c0545e09"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "1e0c5aac157b6c6dac2bb032f10b7d47"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "4ccbc678d6fb3ecdc0300bfa5d1864c7"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "173c6869923085ba07a4772811e0b8c3"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "6109b3a6680ab705b5a7b4e239785576"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "332b5e6c1e7e243ed5b5e8b90263e941"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "318863aaeff0b874ca3e4a8bf2948c97"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "2f882d0a94b8130fc07a3e3a4447fd99"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "da136a19ca5f2a8c5e8fbfbe70743088"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "55740f71a1c2a5dfa2203443523e1619"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "67dc28fa3579373e314b2f3569846b68"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "150ac4d52c531cfbe300909f08a2d45f"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "a3699328faa04d4a892c1f32bdd59b3a"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "a10499ee88024e59569dbb2558cfad0f"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "4623174d7b29df5af040b5ee7679af54"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "5808c82f697f276d39cdad57b4c08da6"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "d20870779e142a61aaa648fd473b7225"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "2ccd1681980359f4d93e475594f58d96"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "00a4c3097f592405f07554884c5e6a32"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "d02896f38110cdd5220b27311a63f34e"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "1fdc0be83fb8797624708fa738c7d59f"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "1b3309ece4399acd29218b47ee9b93ae"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "d5842f47477bdc14cf721888d661ffc4"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "18f25f1c3427ed0bde0ea4d2102478e5"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "5e5bc0e5d0c405fa27aa0790dfe0ec0c"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "6dcb02db62c8722568dd20e49ca1928e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "0ec5522cad39b554624a4c402852f713"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "81909eece843c185792ca74631aaf62a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "2f6d5d61d6d8ed9501cb0c007bfa25e5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "b47afb3433ee2b2a0656ebb48346de9c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "7dbf5ba8869907def5e58bfbf3cb3d18"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "2455a0ed682d4de8c952a27d56b2f9d8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "083cc4ef5f1dc43e7db14f0c39678130"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "b22ec7ccacb88edc3afa867dbdc189d4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "61c8ffe300d822400f77d2a4e15609f4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "f855b6e7c6f3a5cdd6ffe3a0c56a6226"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "4da096cd05727b4212d0b670f29ee99d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "f8f1a7ce53161cde27c6dfe7bb944091"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "6f239dbf5b03e1df18efc0353d07c828"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "1878e88b1bf9940c557e4455e5b9fffd"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "67cda0c444a24fde1e672a7722cd4634"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "79f065945f59984e21beb65523c86d95"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "061dd1f5053cc121094fb523d528421f"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "245eb6ddf171bce49071cea79606919d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "5c159be2cfdd64190bd5c011205fd66b"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "a55c35fe9c3af5ccd0113bbcff7d5efa"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "cc00ea6cc8e7ddd354da352146a21fad"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "9046693fd619d0a81dc11f7a45df739f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "4437255a10a920fc9987e75c904415f9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "35a0e3bfaeea6312607093f880ec29ed"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "a62c6227098eb34133c7771863268ab7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "dd7a2e2367a1549ba0e5761c313ae6b4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "cb392e26acf791b3884a78ce9d335f31"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "10deac414a7dad6e43eb4db315cd1a12"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "136494917b33fb5c22a4563a55874d74"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "6fcd1a374d37575d6791883eb22e5d1e"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "37dd16fa3e867ba73f788ebea9911d42"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "fe10e3ade1390c2bd76f603d2cf07684"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "19386c29cd5d578cdf5eb4e0657746d0"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "2fc05cf1bc0dcc7c0487805e4671cedf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5b24e4f015a8cac51f222a7792417724"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "2917e382e8352e45e84aa09d8721a1fa"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "374e8578f23aa665908d0058cb6a1f50"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "8701c587d8f96ad4b768c77d5b8aae4f"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "02c98c40e5092d381f7536ba03a96dc0"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "2953d71ef2624023c92cafaef9195c78"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "9290d41b8814d3a4b36f8b29accef65f"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "e74d4bf8464edaee2fb89cb75710ff32"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "5733dcc078c72b9122622391dc0f3605"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "6acf01711ce02caec198ae397386992a"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "0ba7459cee0f46983454961b54c9ed01"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "de4c4a7bb9b34c79700fcbc76fef0f90"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "0cb5db5c4382b2a21cb2c9f40d8eaa9a"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "f30f9f6cf06f170527d2b8184a9d8026"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "0d400c067d09568e45dd140b433b2a10"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "27d2cc3196b4034851938af33ff355d6"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "843de8c528b3767b3ece5e395e21d990"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "baefbc0f202d9154ad32b76c2e0c6032"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "a9f42b5c6ba7aaa8b6fe47ea728e1a8e"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "e036bb62b6fc9fb63a59b12282967ce8"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "49072f5b682f5cc18de398225243385b"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "02ee6b414ae2a43cdd4221e3131268e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "ef097da5536cd03e98c8e24495df3f09"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "987330498f21c16d8ec79d766aa83d58"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "5bf5e032b5b9080fdb92e26d9fe6851f"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "8bc7b47f2aef3232e2ec50a0702a504f"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "68387cd49aefc809f4692d5dc25bafd8"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "96cf64178220b7b4b3abfa449d9d9cc3"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "9a442fdea9878819676134fd4454f30d"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "1749c72db2ba5cfc311f121efccd2789"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "530085e79f7a2bade3957a9390a34388"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "1ad2755716b8b9f08482b37ea80500da"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "c5149ebe93b2fb96ae355f2fba1e4163"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "2cfcad42845e0f27176bb69c72b2a3f6"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "c6c89b0932d0d34815a69c304dc11081"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "0f726ef3a33e039b90688d2883b08700"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "a8a2f21b151dd36ec30a2dbc76347620"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "403029b42fc426ea93bbce3e1820c854"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "b6a2f8c91126f5c766fbfd3232b31a0c"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "1252eaff1364590ffedf063227291003"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "5dca9a41f506d07bb7471fc753572eb9"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "b5e4d490ea49474a4681d3a953bb755f"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "d6f614c4e7eed985f8499d1bd18dba71"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "7f4f765c985c725538054fed7054414c"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "4cef2b029be229e21466d7691413d2cb"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "814a7265119476df0558557ba5c9a1ec"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "216532e4c8b8e1210a9b70eae2596745"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "e760cd71b748ffebcfe5f5c8ffb1abef"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "23fe8f6084accc859ba003d898c5a45c"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "844ea7803a7eaf5f531f3247d7171a73"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "8081610f9dcbb334909ac57478fdf264"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "c8f54112b5cc34700758f67b75d7f71b"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "c2da600f5b76ae7dc8a550425c0b4851"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "a93be14892f79de7906a0148250919f6"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "dc1722959b499f652bab33971c31a231"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "4d2d7a0f69ed8e99fd946e71801afb06"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "8c2c0e3e76542af6b2545e5c48fe6029"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "2594a9e26f88c059f133f0df2d14d1a1"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "bad1adab3fa0eadbd6b2c61265290e6f"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "0bc1299a4a38363e93c6ec5c8dca024f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "c5aca50f9ec8d6030936abbdd9d4e0f7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "a4f63a6b25d55bea04451686ea9d08e6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "6a9635ca2757e2878eb04d4f508c52c1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ea3839b0fc0f64aa232c31e29bbe19d0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "6163f4322eec5d2ac43421951bce7a6a"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "eafa182ee40366e3ea59d1b4ecc30437"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "76a14877bce4f0446cd93c08d1c43b0c"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "3907419bde1c41adb1ce0f1976cb6624"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "7aaa0cfe760bd8b3a0331726a0c22840"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "970874d06390413e7494d33d184fc164"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "127ca86a628d94ba4c3b7a15227b1090"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "2ee308d112c6d0d82c9973024a672450"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "effa92f011b87347a58f538f17739813"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "4490bacb6c1e62f7600fa1093cbe40d8"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "5f9d6e21e312b53c34a3480c1df34c60"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "d676773f7cd5f221d2cbb05f683506dc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "faac85fb54477f94a50d6cf1fb51d790"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "b6f6e9b74a5fc53e5008c1df48a29adc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "e222881e314b79138abcb8ca607c1eca"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "9c0a51ca0cc1f6e0e3b6d82e09722f1a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "17d7c3774aaefa541087e6c9729a2afc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "584f9040f216fc903b7946b66fb764d3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "73f97fda8cc8b63a4e0cba7a3b09bc1f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "2d1d40b573fef8110d08a7117e85263b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "dd556fa3db6d63a2d43297fc3a9a4ade"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "33c96b8b76976eac21b4320f403d3769"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "62b1eda11f1c291416f65545f308e543"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "44f417cda3fe98f79b951ee978b014e3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "2ccdc7550ec273b0c1c63b72d9179071"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "5e908ae4b6925fc4b378ade0a679a928"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "0fac1a0681f02adb23be62470a8bcf6c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "e0172aaa67ec250ec65a2f9d735af0b5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "eb47e840ea6698919b41169a63211d2f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "89db968e84ffd5f5408a213499e0e68b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "67af74ed6f871c157fb605f6d9872b59"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "e304d1000c0175ef24a63f94216f3239"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "db48d2e49972680182821149aee2cc8e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "1a56073718d9febde4395408f09554a0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "fc90429dc22f2effa128bb0619573307"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "aed98bf5784c076305588a7e7230aa88"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "81deaeca1f51818d5c527c415110770b"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "59670ddce841c974d7e7978c81f1ef73"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "3cf26da7c23e2dcf7c74c34f6604c9f4"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "aed66620847f72745f53c0568382e229"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "fc340f385b9534d4ae417c1d3f95c230"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "a62533dbf614acf9279b13cf5f956cfd"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "251bf8be3d385227c03eecee45a755f9"
  },
  {
    "url": "categories/os/index.html",
    "revision": "c44343aa03e0f621c80ccb271fc31027"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "8acc161617781984b0daa684a3d11720"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "1d4adbc820ac0d6d33da94de5aa388fd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "e3599c4497fdd82f9703d46c67b0332b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "ddcd09bfb78a5e7d6fe6308b0ba03a43"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "30c886239a07404e818639d16358c26f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "b11feed011a513e4febf3f119b3fdcfd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "35a41613c8fed2b4b17e9898fdff2d8b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "9dbb033952e53798dbd0fcc96f72c443"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "6055752329a182ea03973123f413d564"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "ae54a3bfced38e53658d97d10345e9f9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "8aecdb0696df6dde0fbeeb24b5c6f63d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "08db3821f77c9f14c62f8f38e943afcf"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "24389e56865c8fbbf97a418ec3056543"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "6d527ca682c3815755c7813d818421b5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "edbdaed4e34b4ea735567d9c2cc4601b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "e3f0fac8c2b9ca6df679f1fe770c3c91"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "e83cc203304002e89b28b141a9ed40fe"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "2c996f0efbe0d94321bd75fcad1d625a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "67f9c06491f2699ae817bd8028a3ce9e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "f1e01e17e89a3e4e01cb8ee74cd2c9b0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "9cd45306910dbe269baffc4c3dc92eed"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "1a10f6388cfd64f940e0ed43fd3bab6d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "12c5121ea003a11c0d6c5ffa330302ca"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "319ac10352f36974cf78f10d0a144c08"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "e56557a97794a86d86a490057a87baca"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "a88723112b7c3f90e2322ef473962f86"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "afd9fbb6816aaf5df73ffdc17f35afab"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "6e702b0631d8b13f46cd3cf1ad4bf126"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "acef6425d9edc4bc17c8d64f338457b1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "0d07d198098b3a93788f1fee6c05b4e0"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "951ed0f54b04546fed571f21166a1cf9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "7146f4f64a84efa657e6f912d3b5e0a6"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "dcf6eb6ab9c0fa142eb9e13ae57dbb12"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "6424c183429a0b1e088428ebc779fec2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "4c95283d23d2f118c3df620e82bb0222"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "51eb3c3c204b504662f0c100903237b9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "92e80ed92aecbd3de49241bcaed7d6a7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "479a2e85d1d49b56e531e35b45cc289d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "812f64cb73ccd970a6003a6deaffacd5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "1d9000f00775917465e7cd98d1e839e8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "d12fa74270f8f138438a9e5d175a7173"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "170c7d6dded0317feeb51311401a6a95"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "410ef3f3b558dcaeb8d3b31bb7198125"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "d5c275bf2085579d49be36e5ad35b143"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "76129ff10bdbcd04604ede5820624481"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "5a5c0bc2a5cae3e1d1f12a4867a3636b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "4bce7edc1c3b7f5c441470cf6f89acb7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "8ec5476a4e240f8c25185c211136a004"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "24bcf0463d882302778c9397e679e652"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "bcd1c9d25f02aad266be2b57b1cf075b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "556e28e6fd65dfe47bdfa004d3654af1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "b0d89c494d8416c55f6f9f896d8c2f30"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "b29b06ff86f797b321e118b41cc2c6c7"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "189e84f81c3f5acb32499d967b01b986"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "d5eac16c12a92f175c749a56fb51ab7a"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "e65fd18813f8415f6cb023502d0196fe"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "7659a0f1ecdf928b3fd6ef34023b0871"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "36b44f384bdde19aa87c87177a920d9a"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "8b85bf6ce0ee10cb3c5832f988b2e684"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "2567173a6c0fe91c5b1a601118912d24"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "7d19da25974941e225dab7a32bd44ce0"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "77d2b313c2d8f33c540af2163c96c87e"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "3f9be9010b00cc6fbb9bd0b0c2b28bfc"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "4bac4095ca7513b6ab5896f3c357450d"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "d6539968ea28f39ec08340b578c048e2"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "ec6e8baf9a04aeb2cfbc49149525b158"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "38f47c5f3ef08c0256dd0c99fde512fc"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "e5154fb3256323e42bba888b9c3dd196"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "32642c7a6fc08ecacfe96ef2bde9bdfd"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "a62d912b01d261ecd16d2c153d579c1d"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "bbe9db76767e68081fa5a65d4900d86b"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "0e4f522426eef748cdfad84938cc231d"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "5b10a89ec623a2f58d7c7204cdff9cfc"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "d7dd1f8ee7b614bf7d04bdfc74356340"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "0ddf7767b5991ffc8a7a87475152ea84"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "8d882c4fcd698f0900df7eddce0eaab8"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "218533a2ec3a71b5bf540e14a636c5c1"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "d94d18638900440ecc1bb88106747eff"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "81299eb9269ac5c547d3dbfbaa6efb28"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "c369ddde9e7f80b6bb21bc7a80ab144a"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "0581c568395f0f930d771d2abe14e46e"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "c5c2ea7b7dff04b734a3b55551288573"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "6279cb3858cf1ce87d2c5db884db3344"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "654a1e8aaf250f4dd6af66554cec0d7e"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "0e93964dd0dc6392c65b367dd5eb439b"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "7529f01ba8769b74d7c11f8de0015b00"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "15c1d566366a1df12c4b629ab4c5c25a"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "32f06db96c2bad504506ec8dc4e4c2fa"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "2a6989c1692b13252e60820ee023a19b"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "8714fe2af52eeff011ce23e04ec3d29e"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "1736e370707a7b1271427924d1e7112a"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "76d562baf11f313330eaf6ae1ab71282"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "344e9c5f9812068443fd629ae54bad10"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "41916660f9424468aa7a7112464de39c"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "45d9ae2f53d5e8b7d85bc2b626225ba4"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "510f1253ca5a42f99a14a8f1e8fcfeb7"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "bec2541f141b5c8ba3b2caf9e3392b8f"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "6b289b0a8f0ae47e8da4e6ab49806df5"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "170881b3a0a18708ec9f20ad58428dce"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "3d4709eb6a1eb8317706db4fb8c008a4"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "bb5990334fcf9f2a00d0b170f24c91c6"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "a279cf65f3a2a8b89961df64e6a00500"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "0f93c8b97e70c6cc10f28f865a807f4a"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "4aa85b7cf7d5befae1b04d16e7deafd6"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "65c9c812ee8c371ebc560f2356f95829"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "7b9ceddd786438cb66f2e7eee5c89e17"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "3dabfc71a52a06655d33b15c4f051676"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "5c908377bbbcd2ffbdc0194b429f1d6a"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "f6ca809d28bd4f8f4d0a0a116e0b753d"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "ac67dae0a1baf0e8971b79ff2f277802"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "435157b718f879c98022879479df1ac9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "ea5463fa957b99b107654a1932d8f992"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "1079e2b1fdfbb78f22fe389b99b1949e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "1ad5a67fbb275951b2872a3b1470598a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "81709985db1e92b1bc809c2ef6834b5b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "b143ebb1755e34d0c6d654e2df54e2c6"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "1c586d7895ff1bc3e501663a5c6c0833"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "55d6b1b24a4212f9101f12bb1a9f2072"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "b3c5c9f132291a06bd9d318e867ecbb9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "929ca80b8d7e8ba34effb25e0588c855"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "851641ef14dc102a5f070328899a6fab"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "395a67c1a95303b1e436bd6cca731eb9"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "5e5e331d154c607be7120e50c3e5af4d"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "bf86befc045a11fec15acd314bd486eb"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "271d4913a70b86cd8bf69a4fc8f4dca1"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "478ae605c3b0547b2d52dc5928be7964"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "47b10cf3e0c411efceb271920fad4088"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "d04548bbf05471f4023969b5e2205379"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "2dc011961a8324549fd4b3a78980968d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "360f668da3cec2600837933ef44e4dc7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "0edb3d668bbb451be7c3b6fe53b39ad3"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "d89a01bdfe06f9f0d342fd71abd93054"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "75d848d18dd752813a62cb4501a239fa"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "065c51f506b49b985b6286794f7f7cf8"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "cc44d3f36268d35a1c8dc1a81f2d8fd3"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "e67717fc6b9a140dbf7deb2f15e82756"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "858ca8a8f0debbb1a7a3be9e51a7f0c9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "91c24b7f536a5a91047884dfd4bbcd0a"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "83032088c601c4897764eccc94a1542f"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "19cb5d503f17ea23f7cbf971b61ca50d"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "837761cd798116c94beca28180f0bed6"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "97a87fcbb2e56d26162e9585c6cbb26f"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "c1cd8292b7312624b23ecec515346234"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "a34e73103dd32757061639ce1ffa85dc"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "82504f6c710c8a195cf11e8b5c88379c"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "02a6a3ffd17509c3307a5ac06522802a"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "54a7173beb06a1c4283558289bada374"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "a440d02eb1167d003fa94aea48cb291d"
  },
  {
    "url": "categories/php/index.html",
    "revision": "63c67d5517f98f7f7309882fbaa8926d"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "f16084bea98938b47a796a66bdd53708"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "9407946e7d88897a6fecd68cd6096532"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "cbf088162936d8aab0e8b7a3bb437284"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "c71a5c2658e9a1e11fd8461aa7912d98"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "2a549ad47c71d81d85d63f9b3fe0037f"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "b1cd4664acb8e028f9355b660bda7b0c"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "d74d976bbc01ea09eba6a6c42510bab6"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "6de5e077276900c1ed818fff176995bc"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "ef3cd6e6d631946f89908606e6f4374a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "6fd69e341122148e01d55a749b41022d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "371c5c8db8ea30c5110e0c48bc799c73"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "da4aa483096028ebc925f26cce2b5a69"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "63029d18c974f62b0d02d820a52b05bd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "331e4b6a4369010e9452ae69b581f8ff"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "87d3a0fa2c881bc66f9fc0063569678c"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "554a35122667b2a6ae438ba626c4dbda"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "980d2d46de8a464f84b6c37ad0a5e0bf"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "02fec157df3e8b0db3e49a1da6d216bc"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "b96188dc9bc7f990246e119b9d5c522e"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "72b01df0b2387c980a1a902c77e59d4a"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "76f38fff8e13ad979dcb031af977f5a8"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "14a5dc9d1bd69cddd030770bcf962c0a"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "a6dc11212a1133aa50ad76f04452eb65"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "2819206135afea92439196fd24c57bb3"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "48207468730e9e029b08741a8d1971a2"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "41bc118bd6e4a7861913e0dc8bd72018"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "5c9cd311667c080b2b059846e230471e"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "cc369c71412953fd5e2d1e39889559a8"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "a0fac0177a802bff03a61ec19f15421d"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "87918d353e6da5eb08363dc112e342c4"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "a146525309230d01c8713dfb08db292b"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "3149042816dbba06c99111bc394c7b4d"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "1a83180fd64fc33492e967ce9e39edff"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "a6bf62bd551c2b001e21d6abca419524"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "15c3a455255864903ef43b5b15cbcd21"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "5acadd8e2af68f1f6d69f5cf89813212"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "4359ce4ddd718ac57d802b911b69ccfc"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "30b33cc3841ef46939f4988f907e708d"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "da1ce96c6188337c4d19399f3b9a8e48"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "be1d4a8a1e2c88de5d2e72dd90218ef7"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "02a1a247be6015583aeff95e47ad4199"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "247e5b3dce0b90fe303f64227572485c"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "5f11ba6fa8a3c3e72ebecf747f5dff09"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "4a9ab30087adbbf74edaab98956b3240"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "6b36e10d1f1df5c656774db397d1679b"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "3d6a86b1256ca26a9a9b445a7e9c982f"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "2c921396c25ddb50d80237faf62b7097"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "342f98c845901eab43c0979abe858779"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "abb596b3db3dfc8a3f0143bdef66a673"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "471ff09d740da9fad5440e69c9957756"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "bca9a72574981a593efd6ed135f368b1"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "26a856c60f5d4f052ebcebcad15c5fc2"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "c18d6c816aa0da96fbf17c7a4dfec8c6"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "a290e58395650ee3c99a23e2bf821f7b"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "9e627e58c812ed973a020a387a198584"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "02f369cd3b792b308cb27078835c8187"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "d84a0773a0e68c733a6c5bf6a8b3f744"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "b7e648a34a36a5cf27a8efe91c54def2"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "742ff0b6648191bdff93ddfe3c52f708"
  },
  {
    "url": "categories/python/index.html",
    "revision": "7db845bc9e52e8ddadac8eacac50d38e"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "f4ae5a08eaace5d31daedfd99a55da2f"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "66272e0d64f223368d2745f072e3548d"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "15681a72796d6c3d992d85defa3c82cf"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "e876d5dd7814cdf89ce5a2d85d8efd9d"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "fdfef4e0bc37c2ed9e1f529e9748b7c6"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "4f1e1879daf12d55d7043a52cde3c973"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "8c5509de59bc14c91442ab01f1ddfc65"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "140cc2584872f36f8864adbd1c08013f"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "e992f4310d23b80d41f99d310456cfa9"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "f7d7c9f84d641be5a6dde46371e5ebaf"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "63ea69cbcc7b1a23c706fc7cb2aecd7b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "402019c710bb9190fd39721983c9aa69"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "7ef91e7e279de2325bf8df3b8ecfe212"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "d552ae7b670bd918ce928198e21b27ff"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "dd6e7db2d32d4bba721cb111a1461fc4"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "4c1bc4364d9c4caae6dd2f96a8b7c46c"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "db9e445e81ac42b36d3133eeb81eb885"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "a3ebbe8edcf4943ad79720735de4dcb1"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "253eb88b30bf22abdced808f0ff0403a"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "df0be40689ceff38e0a9aaa37a61be43"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "ca0294c3ee9b999bf89ed68c1d392e31"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "a608786cb7e2bcb0c189dc20fc8f27ea"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "12eb9a2bb25ee7255cca6ebc428b7a3b"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "442f0a65c02646b329381727f9b62499"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "23a09aa11019e4ec1b216bb9a6eb94f7"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ba4e1967f390833463bfc1d4bd9aff03"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "0249a331584af63584e81e7b260f901e"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "97693985a2544e5457c2cf89e4ef31c5"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "854ea3684ec36bf0fdbaa72a7e167248"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "b438e3e17c854d2a0b1f1126c0f055e6"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "4ef73bb6c83af59b8e700417cdafc7f3"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "16553f460787250154288f1f0875590e"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "aff41e54c69aae8ad7f9cb770d8bd12a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "26d2df761f26112cc0af438b625333eb"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "bcaa3547fe70146d228d303ae0cffdb6"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "415c9e9d6b9b20b3e4d2cb23b3f7f3dd"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "67d8ab8dfed147092f42630b16ee07ac"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "f2114a26056bcfc9e74f72ba88698c6c"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "4ee7d07703ffc1a67d657793e11bb66e"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "e56df44e12c64a1836cfca6610f25556"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "1dfb6ba97f1d4f557fc3a63d0a779aff"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "a63a2401b25b30755e6693f289963f17"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "568cf93ac58f67d9cc5dee091423b0d2"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "35636ac946dd4b790c81acaed0283bec"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "13387088834b94cb55fafd525b371dd0"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "7801249306af22b3457be58e038f19a4"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "440a96da4ad45992f57e7433cfeb8263"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "114c0b3ebfe123b1930a56f44fc5c1eb"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "9035a8c2e661a018f200e0bf90320984"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "364943ef2cb3530025f0ad39300ab293"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "f19229879e34068276b46d5a62e76b62"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "19b7dc16e9f40d21d8c83153e442184d"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "90d8afb4ef2700b88e6fe107510fe170"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "27798204e500f6e6f5c821a7bff49597"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "844f100a974329a17f15fdf576165ab5"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "5120a8c93c6b3ac65bdcc186c3e4e485"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "ffee76ac8624164b3b60050d4a961201"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "d8df280a1a38797bd55517d51a304f6b"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "5fdf672871589e53e6fd3fe7049e5169"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "77eaf12d7ca9637e525c62f1ba7442b5"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "d12106a5aa3228119b777c34febcf3fe"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "b75bdb7bba2c5994647542a98531322e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "fc928668002d8df70a7f766ed409b98d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "8785333580938488ef94c5b7bd6b0538"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "649fe5516165feff3f6381e03f628f8c"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "a9abc6d6f9c1f8cef20c7988bc116fd0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "e4c05c2b9ee5d26a48ae6884982bb255"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "f14b25c9f00e667537b5c91956e1b152"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "9c4c5e72ca81625eac22ec49b91ba517"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "dad791e8be19abe110ece60bf7a2ac82"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "6eeca5cdf14416d4a26a64972c243e8c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "e4c633b67de7628633a9a624f64b5d23"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "24e6bdb369586a318a64edaea4659313"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "b1facb0caf965eb30ed959b352545207"
  },
  {
    "url": "favorite/index.html",
    "revision": "ba64add47ba281a65e53a5278ebd06b8"
  },
  {
    "url": "index.html",
    "revision": "ee20744eba20c53c7d4a33fa8540befb"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "dd196e7cb3849f3059af2dbfc9fe84ba"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "55695fe1297594a657a933f9330a8920"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "2e2df2200fd7c7e6e23bdb0830ff1031"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "7b778b36b3576dfb25ee8ad7292cfb25"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "e6f3bc2fae1e0e021e56bbac5afb2da6"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "b3cc2bb6563a1ca749d92b329ada9938"
  },
  {
    "url": "note/index.html",
    "revision": "ccafca4e77a7cec5e9bad2eef76f72f8"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "fae45aa0438b86e389bbf52cb919a733"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "9543c6d8edbb3a040fec20014a589363"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "c219675a45f42257eeb494e90e6fcf81"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "db688a5a5c53cf9451f7cb13df78756e"
  },
  {
    "url": "share/index.html",
    "revision": "b725b520602eed8abeec6dacd076ffcc"
  },
  {
    "url": "single/about_me.html",
    "revision": "51c3b5aae3fb2d436af6b41e8c1e8345"
  },
  {
    "url": "single/all_article.html",
    "revision": "deac5114162854578e4b27f45d6ceb40"
  },
  {
    "url": "single/welcome.html",
    "revision": "f6036fa57a77b77555fb4a495c8e38eb"
  },
  {
    "url": "test/index.html",
    "revision": "67fd053db17cbd9e4910019cef4a0099"
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
