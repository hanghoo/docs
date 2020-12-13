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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dff6dedc992951e57e135fd886e9b930"
  },
  {
    "url": "about.html",
    "revision": "e084cf0c9a9498a5f0c02758ae4a48f9"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "assets/css/0.styles.5ec96225.css",
    "revision": "b1aab0f72b932524bff38383cf4d5605"
  },
  {
    "url": "assets/img/18008-0.jpg",
    "revision": "0b0c2c9362e4593eb61a97090e93e5ca"
  },
  {
    "url": "assets/img/18008.jpg",
    "revision": "a70bf338a8c1ab42f28a760697d000f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0ea4df41.js",
    "revision": "c48f8512a5ff50b6ec03cf9043466ff3"
  },
  {
    "url": "assets/js/11.35a6bb11.js",
    "revision": "33f151faf44ec3538a6c81b308fcade6"
  },
  {
    "url": "assets/js/12.6428619f.js",
    "revision": "0abd55e839d6bf31db015e693e6f21d3"
  },
  {
    "url": "assets/js/13.a9e4907e.js",
    "revision": "90c066f579fa1de2d0d7b9f3824f43c5"
  },
  {
    "url": "assets/js/14.345bbbe5.js",
    "revision": "9d0c2e3590e4603959c6e3d1fb20bfd9"
  },
  {
    "url": "assets/js/15.3474e64d.js",
    "revision": "a62294646d804b20c9a538573c5894b8"
  },
  {
    "url": "assets/js/16.4d193e27.js",
    "revision": "09e4b8a00e80a5b022d68a067998dde8"
  },
  {
    "url": "assets/js/17.f986bf83.js",
    "revision": "e450388e3702517b70d0f9ed0fe6a5f2"
  },
  {
    "url": "assets/js/18.36d97115.js",
    "revision": "0e2bfc4162f58db55ca2d1dbaf3232ea"
  },
  {
    "url": "assets/js/19.fae8d4ae.js",
    "revision": "021078f24835fbd0963076de223ed0c5"
  },
  {
    "url": "assets/js/2.30a1a5a3.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.190fbc0b.js",
    "revision": "1ca9276e93b77fccf287db185abc5072"
  },
  {
    "url": "assets/js/21.302bbb8f.js",
    "revision": "cbddd29afc40eee121f9f4cd0a659663"
  },
  {
    "url": "assets/js/22.767bc8f8.js",
    "revision": "11bedd4f4fe6a1c98d675b90364ea039"
  },
  {
    "url": "assets/js/23.3c61217f.js",
    "revision": "418bc4a7bf14fcba91aa806b7852f12b"
  },
  {
    "url": "assets/js/24.d405c9ea.js",
    "revision": "41ab7842a314e9c297f2552421a798f5"
  },
  {
    "url": "assets/js/25.ed32d4ab.js",
    "revision": "4bfa38106b83708b232f7ce9c1379c54"
  },
  {
    "url": "assets/js/26.2f009f4c.js",
    "revision": "619d50e0dd7319b037dfdac3ac7f8ca9"
  },
  {
    "url": "assets/js/27.00937c59.js",
    "revision": "da9c8a470bfd9bcaa0b96e0a79379131"
  },
  {
    "url": "assets/js/28.e41a2053.js",
    "revision": "24f986438b04ff3dd599870ad5208e97"
  },
  {
    "url": "assets/js/29.6b152074.js",
    "revision": "e63b4be2ab20087057c435c8700e7c8f"
  },
  {
    "url": "assets/js/3.d4422b17.js",
    "revision": "1c76bf8e4f94240ab999483d04f100b3"
  },
  {
    "url": "assets/js/30.41ab361e.js",
    "revision": "5a2aff3ca88b0798bca2e31b5a98c6b8"
  },
  {
    "url": "assets/js/31.440fa5be.js",
    "revision": "5521f5cefc62f32c614bce84ca3303e2"
  },
  {
    "url": "assets/js/32.74dcc8d3.js",
    "revision": "cc18ffd580daa9e2ec15cfa9891a9862"
  },
  {
    "url": "assets/js/33.56da746a.js",
    "revision": "f4e14416d67daa223ed93e4081f10c97"
  },
  {
    "url": "assets/js/34.d9d79510.js",
    "revision": "7e9e557de462a8eaec60dc911198e1a1"
  },
  {
    "url": "assets/js/35.f60e409d.js",
    "revision": "1ace92a26f5425f29c9eebcbe77d62a3"
  },
  {
    "url": "assets/js/36.7e44badb.js",
    "revision": "5e33339c0490bc856f1a1f91ea85f019"
  },
  {
    "url": "assets/js/37.dd62b864.js",
    "revision": "9d0a29d08ffbe8ee73f1258530ffb92c"
  },
  {
    "url": "assets/js/38.316dcdce.js",
    "revision": "39b620f6a781026d7f013bf2f4a4a75c"
  },
  {
    "url": "assets/js/39.2e961648.js",
    "revision": "55e63008aac7aa7be55e0f1c7b17f0bd"
  },
  {
    "url": "assets/js/4.e66a40e3.js",
    "revision": "53ef12e698c9016b489dffa0ae31795d"
  },
  {
    "url": "assets/js/40.4feb3eee.js",
    "revision": "762be18e1e31ea1acfbba74000810b54"
  },
  {
    "url": "assets/js/41.32e7cfbb.js",
    "revision": "70b1804170044381e11f36a794226ce4"
  },
  {
    "url": "assets/js/42.f29e6c03.js",
    "revision": "f97b184d60e806f566e2a31e5bfe06f6"
  },
  {
    "url": "assets/js/43.44449afc.js",
    "revision": "b5b1ee1e858a51a8efc04eb7555f45e3"
  },
  {
    "url": "assets/js/44.2f043ec2.js",
    "revision": "3b1fa075dcb183690e71b2d633b63347"
  },
  {
    "url": "assets/js/45.2d30cc74.js",
    "revision": "23c78a1f0553c30006090728d0facc14"
  },
  {
    "url": "assets/js/46.a3e8fb57.js",
    "revision": "e25eb34ff3dfb88f476763c5ae8fe1be"
  },
  {
    "url": "assets/js/47.80a74ac6.js",
    "revision": "21ec06867577c48ff33434d49f9eb9e2"
  },
  {
    "url": "assets/js/48.3da8203b.js",
    "revision": "8d534c3bf52790dd14798b6f989de2a3"
  },
  {
    "url": "assets/js/49.62010934.js",
    "revision": "77f12fd8741796275d76a942a643c653"
  },
  {
    "url": "assets/js/5.b8408efa.js",
    "revision": "af903bf9fa25137b66d87cfab9e5afe9"
  },
  {
    "url": "assets/js/50.ac35d981.js",
    "revision": "03fd949a66f79f409767b3eba615ddb5"
  },
  {
    "url": "assets/js/51.07dfcb4c.js",
    "revision": "572c4338ae7fad1634d743005a1b72b3"
  },
  {
    "url": "assets/js/52.8f734125.js",
    "revision": "aa432c2fb5ed8040cc308b381ce455c5"
  },
  {
    "url": "assets/js/53.679c68ef.js",
    "revision": "ecc5c236a1367b71c57fea8e79fbeb5c"
  },
  {
    "url": "assets/js/54.ca368a94.js",
    "revision": "53cd20f4c924e66b88866f66342d15d9"
  },
  {
    "url": "assets/js/55.a166f0df.js",
    "revision": "244eb4f10d629cabb7d7e54f82b4ad6d"
  },
  {
    "url": "assets/js/56.ac76b782.js",
    "revision": "c64af1e23ab3716f0409bedfcc857e1f"
  },
  {
    "url": "assets/js/57.285bf2f9.js",
    "revision": "244c90087a2dd178506799868933cb39"
  },
  {
    "url": "assets/js/58.b3305801.js",
    "revision": "43837c461992855bf02ad2802680f71f"
  },
  {
    "url": "assets/js/59.ed93c2b6.js",
    "revision": "eb5a70878767e548006e8fb4da048dcc"
  },
  {
    "url": "assets/js/6.34e2a404.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.c5d34571.js",
    "revision": "184470c960fb0ad89a1e40dd5d2d72bd"
  },
  {
    "url": "assets/js/61.ce6c0637.js",
    "revision": "751e9d0c9f406183d3a082136763dd56"
  },
  {
    "url": "assets/js/62.827acc55.js",
    "revision": "ae9ef3e64630e6c24e6d3b0645cee1e4"
  },
  {
    "url": "assets/js/63.115c289d.js",
    "revision": "65072cf2e023aa6c7ab1dace1765e858"
  },
  {
    "url": "assets/js/7.d83b8777.js",
    "revision": "22eff7598ee25653ae32073367447431"
  },
  {
    "url": "assets/js/8.454186c8.js",
    "revision": "395a7deb92932a6bf67cb930697196a0"
  },
  {
    "url": "assets/js/9.e290ae3f.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.7a9a70a6.js",
    "revision": "a7182f6182134573c7ade40808ae1b2e"
  },
  {
    "url": "countup.html",
    "revision": "c5efe42931793027d268aecb19c1ffac"
  },
  {
    "url": "front-end/css.html",
    "revision": "8f447da72295e897f0601b6eb78ab54b"
  },
  {
    "url": "front-end/electron.html",
    "revision": "a67557af9fad86c1aee13868b223e83f"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "8602ae7116ea1b7823544188736b5373"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "2212fd76c2704e92274864e8221bd1fd"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "941b14c4b028b272506ac3b70b4abeb6"
  },
  {
    "url": "front-end/html.html",
    "revision": "5245bec277404c7e9520b12e7ab8508c"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "373f8b7045750d3afe946f66039a7a9b"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "3437c33ac44b090dc5376d80b0a2ee4e"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "7fd1e41ed3fa616e9a8b3aac731cf3e7"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "aef2618927d8ed4d0921ac8789596d4f"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "6ba606d3fba43a51678805c884760fcb"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "9515121b2ce3ab38a89a8065a90f4af1"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "b14a989b62ddbfb87d460c3e0ed96de4"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "18be0831e985674c28d5c87e74e47d0f"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "a8a34c6f7987cb9254eaf203426279c0"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "65212abb07d25d7b2f6758e14217808a"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "0fab58db6c04b197607271a3f73f8cef"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "203da137630e75edc934a31f5cee165b"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "414ea2cd124e8d8cbf0fdc76e7b256b0"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "dbb81efe03ff9706d84b6bf9874f49b5"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "1178eacc6efb0410209616f33ff593a3"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "07c6215837657fdab0bb79bdc346c608"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "1f1de95530db9dd7730cd2e14b44809c"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "0762c993c277dd07bd2807f5750b8dff"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "67a8d7927424b838138be55f16620220"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "aabca418cd42a670349f1a023bb37a5e"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "a083ac20243fab0136a5ff1dbe977cbd"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "fc452b4d9ab430ad30b7728224ea9bc8"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "1d0f42200f280a548d6a2349a4b5b4c2"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "5fe35b421ccb8aba5bae439d4cd93d73"
  },
  {
    "url": "front-end/react.html",
    "revision": "35a089db45900e11863953d859801a7f"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "87d4600c70a4af196b6705a58685e686"
  },
  {
    "url": "front-end/vue.html",
    "revision": "e898c3092999138fc78bcae9b043b9f5"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "c75b16e3346051d928dbb1701e506d18"
  },
  {
    "url": "guide/index.html",
    "revision": "197a704c8dc46cfacd2694aeae664311"
  },
  {
    "url": "guide/test.html",
    "revision": "4b3c980aae28b861c8867e79fc150e1e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "720929da63322d11431cd697b63b209b"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "c87a981a15f35e93b1dce276d5197ff1"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "08d7ebcdea34fde5cd1b598cc6d86529"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4a6cf569e6b52d1a673dd5fb0b587a81"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "409c3843dc16c098ee10435a1df12d4f"
  },
  {
    "url": "index.html",
    "revision": "f8d570db518f64b10f640381fbb0ef60"
  },
  {
    "url": "nodejs/index.html",
    "revision": "e5b2023aca5e36c6f69a1ae687fd5606"
  },
  {
    "url": "python/base.html",
    "revision": "a77afc9962ccd71a74ea46726e5416bf"
  },
  {
    "url": "python/flask.html",
    "revision": "9fed74002d202af05a9a0acc7878d4e2"
  },
  {
    "url": "python/spider.html",
    "revision": "76892c3b793f2526e15aac9aa536a743"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "a9ba0894d281c72ec028c24a271cbd59"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "145521286da5cfd3d97e4db36d005b0c"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "4b0092b58c634fb91ed68edeb882b215"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "874116905fe06b3ae65b620c98483988"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "260653ca0bdeda3830691cfd82a42c47"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "fa812a10fac4341731b3e006b3c7a15c"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "d5b814ec1a3bc222307e845ea86f9d3a"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "142e2e8605bc167c458d70da24b04e1c"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "035f8273b02a25453f45ba91097e682b"
  }
].concat(self.__precacheManifest || []);
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
