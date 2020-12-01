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
    "revision": "0b0f9a271509907cdbf5d035e322961f"
  },
  {
    "url": "about.html",
    "revision": "b36a87a806f993d3220ed136515ae2e4"
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
    "url": "assets/js/4.c9d18a79.js",
    "revision": "08d55a51217c02546d3a935330ab5a5d"
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
    "url": "assets/js/48.436f0d84.js",
    "revision": "b0cd4095442ea0c0235b35fb1420008e"
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
    "url": "assets/js/50.d8b5184d.js",
    "revision": "82177ecf2ace7b5cdfbea807de52cf97"
  },
  {
    "url": "assets/js/51.ec59914b.js",
    "revision": "fd198ecb09ee472c14fd267a19910b0c"
  },
  {
    "url": "assets/js/52.3451c9dc.js",
    "revision": "f963361ebccc1589b8815e05ffd37052"
  },
  {
    "url": "assets/js/53.90885620.js",
    "revision": "54a6a35383a3cf940cc1ecae85dfafe0"
  },
  {
    "url": "assets/js/54.f67724a6.js",
    "revision": "40eba98437b8d872b0c11bb2ae85f5e9"
  },
  {
    "url": "assets/js/55.439c668e.js",
    "revision": "46cad45be6ce7c807f70a6d8fd05d0a2"
  },
  {
    "url": "assets/js/56.3a46f1ec.js",
    "revision": "2cd6a74f03e20e9b89f85737a507f9f3"
  },
  {
    "url": "assets/js/57.a240bf89.js",
    "revision": "53f8c4fa9ee11055bbccc8929046b84f"
  },
  {
    "url": "assets/js/6.34e2a404.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/7.d83b8777.js",
    "revision": "22eff7598ee25653ae32073367447431"
  },
  {
    "url": "assets/js/8.fcac84f2.js",
    "revision": "f0275d1281a92db827831a9b0567d753"
  },
  {
    "url": "assets/js/9.e290ae3f.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.5b8e0f32.js",
    "revision": "bd8033a73d75194bf935fb3ebd0110e3"
  },
  {
    "url": "countup.html",
    "revision": "c957080b6bdf0bf93ea390528248c195"
  },
  {
    "url": "front-end/css.html",
    "revision": "3ab0613ce413d8f82c856eb8492d93f2"
  },
  {
    "url": "front-end/electron.html",
    "revision": "2f129025593e9f2ab943c4739fe5f750"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "6f1328cb1194cbfe586c205ac10e44ed"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "13ae88e8a74d9b9cc4e77263ba306c05"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "5af804b6ed0fa835cc477c2329d14caa"
  },
  {
    "url": "front-end/html.html",
    "revision": "f7717a4c672340a4ee14f3ba78b0eac1"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "d38e83a95e3d06db00b49e133ab4d419"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "b1fd241c6a3a9a5adba1ddb8129fffdc"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "4dcacae5d3e0d360391a33cba2eeb615"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "6b1162f8e53aaad0b71111b0685a104b"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "818a3f853fcfbf359d6452949850b35c"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "8277d70e0363f00a9a5704e401e272dd"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "b04462f6167db6c0e9f9f5b2b6934d15"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "7bcb51e24171d8c5b9cc135c89a8d561"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "f92f4fb4f3ecfec088e7f3a53b5ec1af"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "de15eaa4f8b6a7ab6ddfafc981010458"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "4632cc7ecdf54cd1d813648d76c75152"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "c4ec28bdbc91e2ce21b38c7f4d627dcf"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "3897b1487361929b70afec75307c71e3"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "5544a86d77b8829b3f402cab10836674"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "d5ad480104fc88e1fdeb9e17408ae2e7"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "3c9152b26237d23e2eac3469c3601198"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "fc15b0851139010bfb381c6f0c8759b4"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "093d254e3c0c4e219c13a42a9f7c00bd"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "8b4230cbf798799da9d78895928266be"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "400a1e3a853d64135c6517e59d1a19b5"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "45208ea09abdaa93297691461e1b014b"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "0968cfff04c12e14fe80b50cc3b339a7"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "843ad310489fc67410d0f9ad5de4601d"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "1c95e7af997a2ccbf81db44eddfb3528"
  },
  {
    "url": "front-end/react.html",
    "revision": "66fdddfcf941ea580a8d60e042d72926"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "07232320dfceb217d66698e157a07c57"
  },
  {
    "url": "front-end/vue.html",
    "revision": "7af0247eb79ee6c5865db64ca39cd242"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "bcb013b93c145485a33f6e7d604a29bd"
  },
  {
    "url": "guide/index.html",
    "revision": "68d2b0ec2cb9bf003c5472de7a164340"
  },
  {
    "url": "guide/test.html",
    "revision": "24eb10e02d4ee594dca13e675b7ab59d"
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
    "revision": "80de61a360b9ea36cce41d9fc6581d8e"
  },
  {
    "url": "nodejs/index.html",
    "revision": "378731fbbcea3ef2b6fdebceee3d55a7"
  },
  {
    "url": "python/anaconda.html",
    "revision": "15b343a1c2b4a25dbcf6f75b30410b8d"
  },
  {
    "url": "python/base.html",
    "revision": "5d56729779cde59ee3e9f001ba3dbd51"
  },
  {
    "url": "python/flask.html",
    "revision": "7bc8c12fafb5af287714aa0e739ec6b3"
  },
  {
    "url": "python/spider.html",
    "revision": "02c86ecbd0e30ed72ba6a6dd7e6a5d35"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "ecfb32b063b66c7aab45a9bb5033cc17"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "b1d972ece04b44578c5befcb5d806b67"
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
