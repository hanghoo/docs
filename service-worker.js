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
    "revision": "85f2210bd43f20b86c1b7af2f97c78dd"
  },
  {
    "url": "about.html",
    "revision": "439828082895c22ed405611722c0ac4d"
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
    "url": "assets/js/11.ca796b2e.js",
    "revision": "ec6bf924f6168f8392d99fcf50cf6fd9"
  },
  {
    "url": "assets/js/12.cca6aaef.js",
    "revision": "a9faf6bf6e59529674acb27ca5d0b379"
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
    "url": "assets/js/35.b1dcc61b.js",
    "revision": "4e2a956cbb3400119a6dc5508a843215"
  },
  {
    "url": "assets/js/36.5a2e098e.js",
    "revision": "e80acc29d4c75a852200f03abca96972"
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
    "url": "assets/js/4.30617082.js",
    "revision": "ad72662ef2e71d9fea2798f3fb7fcd32"
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
    "url": "assets/js/48.0bf32919.js",
    "revision": "a288c5b99485854edb5c770fef7ac0d2"
  },
  {
    "url": "assets/js/49.985a987c.js",
    "revision": "0e254b5496a30a79744a36f568d604a9"
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
    "url": "assets/js/53.6ebfff81.js",
    "revision": "f693ea40490badfb335888d4a706a307"
  },
  {
    "url": "assets/js/54.aa5d8ec4.js",
    "revision": "005c954ed91c99ad800ee12d495af68f"
  },
  {
    "url": "assets/js/55.bbe19b89.js",
    "revision": "34e3d37d740914ffdd812404f72cdfc6"
  },
  {
    "url": "assets/js/56.d5d55197.js",
    "revision": "60288487cae20b05c7debd0e34616279"
  },
  {
    "url": "assets/js/6.34e2a404.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/7.3efe1bb6.js",
    "revision": "e43c4b892a90d1c3d8e2a669e254a700"
  },
  {
    "url": "assets/js/8.da4d0fc0.js",
    "revision": "88ac74809e430fecc1a97af0b49b9391"
  },
  {
    "url": "assets/js/9.e290ae3f.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.a66c1777.js",
    "revision": "c7bda774e4ea0ee1fb40a78f0b5ce32e"
  },
  {
    "url": "countup.html",
    "revision": "ae12481ff5054f6a1f88870a62f6eedb"
  },
  {
    "url": "front-end/css.html",
    "revision": "30197b9f418ac389ee319581cda353e6"
  },
  {
    "url": "front-end/electron.html",
    "revision": "01b548be10f388e2a82fb33c0721eb4c"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "3b9808cf3a246d59a6dbeebf73d1958a"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "a88a209ab8558298052c4e4248d2c843"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "f9a0ec26ffa3f47d769970c12de66982"
  },
  {
    "url": "front-end/html.html",
    "revision": "1ed42d2ae5673ba072a5242e043529f3"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "0abac6f4efd0e2afccd34d229cb9f180"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "f601a43a949010abcf7f5e36ab427118"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "0d1136273b02b5efe86d0357838ccc89"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "995106113e7fca9a96f6a8da93bd742e"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "ee61a585a68e9c00f70eec36718b3676"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "ff9be563e7a50238516ee7c6ea618b68"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "874645ece5c1ab90fa2ba90bb4003d81"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "63bfb509fefd1b4b25846d5655f62f99"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "4bf27f1a2353a898a14e4688a60d6d9a"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "134c8bc90c3a495f5c1f65199bde3e95"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "149ccecf485c7c90e5167f0323fa1b27"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "f1d3512497d823f001854b840817e959"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "7723fb612669c8737942161e333a1a09"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "df52281e1f14b12cc18da2c1b047189a"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "1eeef35999c40ded3ebcff1b60132522"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "b6394cd23846ecda26224c209c0f1750"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "a7021de05e2fd9f3e4ad61703d71c0a1"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "feea06eaac722b8a5d61e221498a6250"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "183d9205e27379f0935832968061cf3e"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "0b85a1c07fa0ac47ab78468fa009667f"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "40060642fb666aa34c57e07c6e2afb4b"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "0f11fca7b9fdae33448c9b370c0f8622"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "ebdb58607027675a087e54db3ea043f9"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "e80252156af1ea012889275047281483"
  },
  {
    "url": "front-end/react.html",
    "revision": "204820c8a028763bb74ebd6b6d8e1350"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "c933bf24b07744be32a61121a78af61a"
  },
  {
    "url": "front-end/vue.html",
    "revision": "9d9a3f1a94a0ab7c8bfbfca4ed5a3499"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "fc174188b4b7f9f3105ae9f8ae33e2ee"
  },
  {
    "url": "guide/index.html",
    "revision": "8bb3cebbc4ce3aa1e7816a89eec36244"
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
    "revision": "dcb46f6105774841dc8c90f6366f5d4b"
  },
  {
    "url": "nodejs/index.html",
    "revision": "3a3cf95d44cc4405452fcaca24dc7251"
  },
  {
    "url": "python/anaconda.html",
    "revision": "45c6bb1c7f644c79f6a4f240cbf49da6"
  },
  {
    "url": "python/base.html",
    "revision": "363b1f0aaf29f90e43b1b5c9fe270f9a"
  },
  {
    "url": "python/flask.html",
    "revision": "8e9e761de47698dd0d9ad7f6d1a33238"
  },
  {
    "url": "python/spider.html",
    "revision": "4bb86439534bde82f808aed1f8692184"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "3c8fd753716a2368cc5e990094bf746d"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "ee11267e428a43cb0d9a7dc059014b22"
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
