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
    "revision": "19a6ee7e4e2cc94caf833b54aae1c138"
  },
  {
    "url": "about.html",
    "revision": "124032596cc32596a770712b426fecac"
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
    "url": "assets/img/2-1.png",
    "revision": "30bb09193fa2631d957629bfb1847dbf"
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
    "url": "assets/js/11.d3322511.js",
    "revision": "0c1fd7801b454e050b7e032d8a33aa01"
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
    "url": "assets/js/14.56b1e6f5.js",
    "revision": "690f94fde937b1753cd43b016d70404f"
  },
  {
    "url": "assets/js/15.de736c88.js",
    "revision": "6ae79624171f0c8e8cbc4eadc992c5f7"
  },
  {
    "url": "assets/js/16.6ce37da3.js",
    "revision": "e7bb35a4cd79522bacc3dfe1e21a8b5c"
  },
  {
    "url": "assets/js/17.736e923c.js",
    "revision": "4f28158d9ea7c199109810031cffbfe7"
  },
  {
    "url": "assets/js/18.eff26335.js",
    "revision": "2ca23b74f4e2ce5d4bae0355bda0333a"
  },
  {
    "url": "assets/js/19.662608fb.js",
    "revision": "e454a96ffa7bb61a5c82cbd39920877d"
  },
  {
    "url": "assets/js/2.30a1a5a3.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.2b773a24.js",
    "revision": "0311066f7d71db29c0fa9c2368e243c8"
  },
  {
    "url": "assets/js/21.5cede5a5.js",
    "revision": "a6e7cd1c607c548fa1333a12779a30c3"
  },
  {
    "url": "assets/js/22.6c551c97.js",
    "revision": "4b166a412df07f3c3887be5a4d3db7d7"
  },
  {
    "url": "assets/js/23.20458e0d.js",
    "revision": "36c8d31aa6c99c7ebc7d2171805cacac"
  },
  {
    "url": "assets/js/24.a7bae989.js",
    "revision": "80e1d70ec1f13645bd99e0bd6bd0b55b"
  },
  {
    "url": "assets/js/25.87006b65.js",
    "revision": "940e3cb0053156a5d28abbb83018b629"
  },
  {
    "url": "assets/js/26.a80c4cb8.js",
    "revision": "149ea674f86b61bafdb07d43b88208f7"
  },
  {
    "url": "assets/js/27.e994f5ac.js",
    "revision": "3e9c37c94e20158ce0cb1e956f11b19f"
  },
  {
    "url": "assets/js/28.435419b5.js",
    "revision": "365b39e9470991fb67e0c04f78f82517"
  },
  {
    "url": "assets/js/29.e8a3c48d.js",
    "revision": "3b778b9a1f3c43b7f38e750577d8e35b"
  },
  {
    "url": "assets/js/3.d4422b17.js",
    "revision": "1c76bf8e4f94240ab999483d04f100b3"
  },
  {
    "url": "assets/js/30.93b6cf2b.js",
    "revision": "6eccf75a1c5b7102a3b39e1594a88196"
  },
  {
    "url": "assets/js/31.552ca3e2.js",
    "revision": "b4317b58b1c1686378f5be3c71f2e144"
  },
  {
    "url": "assets/js/32.f853e274.js",
    "revision": "5345d2d5d5cd32be2ac4e4bb405aa752"
  },
  {
    "url": "assets/js/33.32fd32ca.js",
    "revision": "a93f512740b7feeb769610f2e92ddca6"
  },
  {
    "url": "assets/js/34.956b954a.js",
    "revision": "58edcdb0927439ba09d708b364e51f8e"
  },
  {
    "url": "assets/js/35.e83e1b4f.js",
    "revision": "243b5ab21f92587229d09f62be09e6c6"
  },
  {
    "url": "assets/js/36.062b29cb.js",
    "revision": "b20d010ea84578d97887bb5462fa2768"
  },
  {
    "url": "assets/js/37.051a8d50.js",
    "revision": "3102e3cb40c984a3271170f2b2eb4936"
  },
  {
    "url": "assets/js/38.f0b2f1ff.js",
    "revision": "4b0d82bc194a0e56f397eadbc2f2df92"
  },
  {
    "url": "assets/js/39.a0e037bf.js",
    "revision": "5c9f07d22d347776d36f47ab501c112f"
  },
  {
    "url": "assets/js/4.8a7386df.js",
    "revision": "89113d77842f6eac4ceadaf62ec7f4eb"
  },
  {
    "url": "assets/js/40.d386f950.js",
    "revision": "df3bcb6fb4d7a5b102309631f3293774"
  },
  {
    "url": "assets/js/41.c131f162.js",
    "revision": "42a5d1ab48fe04836c77497d6991ced9"
  },
  {
    "url": "assets/js/42.9f4ecd74.js",
    "revision": "c0e0276b804642596981c9c909294dd8"
  },
  {
    "url": "assets/js/43.d4492250.js",
    "revision": "4a1e0664263359645b8f972126120478"
  },
  {
    "url": "assets/js/44.3e8b05c8.js",
    "revision": "9cc78b4d35e4a854613ef075b8f2b944"
  },
  {
    "url": "assets/js/45.e4a84228.js",
    "revision": "fbb3961eb44685505d16ef8552219912"
  },
  {
    "url": "assets/js/46.c5d4d9a2.js",
    "revision": "07588209c46664deed1d5ea13a9b0b8d"
  },
  {
    "url": "assets/js/47.41c02046.js",
    "revision": "6c4fbe1f0b4f53109dfb86503051ee29"
  },
  {
    "url": "assets/js/48.cd8858ab.js",
    "revision": "356e6c2697d3ee972a1e5c344850b7c8"
  },
  {
    "url": "assets/js/49.b1f62459.js",
    "revision": "8e006d83c5e5017d86373d8954ad46b4"
  },
  {
    "url": "assets/js/5.b8408efa.js",
    "revision": "af903bf9fa25137b66d87cfab9e5afe9"
  },
  {
    "url": "assets/js/50.5dddc7c9.js",
    "revision": "0310b6401039352be3c00f0ac3e007ca"
  },
  {
    "url": "assets/js/51.b54e0088.js",
    "revision": "c88efdbfa13e06f6d4436b8f100ce879"
  },
  {
    "url": "assets/js/52.f1d4ecf8.js",
    "revision": "94637876719e82a4078a01a408620b94"
  },
  {
    "url": "assets/js/53.23cd89c8.js",
    "revision": "f8d3352b4de1c20cd216c1b0d8ae1c59"
  },
  {
    "url": "assets/js/54.04b520c3.js",
    "revision": "e8ad426a0a1b85ba37fbe19dc2ff26fd"
  },
  {
    "url": "assets/js/55.e7823288.js",
    "revision": "83d122c093e02c786db40205e1a66a7b"
  },
  {
    "url": "assets/js/56.d0676769.js",
    "revision": "fb48a1b346c0dcc349e8783faa91d4b8"
  },
  {
    "url": "assets/js/57.438088e3.js",
    "revision": "b1a2564f15327d246b33dda7f1d101a3"
  },
  {
    "url": "assets/js/58.a050f021.js",
    "revision": "b7e9f984d0f7f1923f7c0e8cf322871d"
  },
  {
    "url": "assets/js/59.05f67ba7.js",
    "revision": "76333a115b26e73a22dbf428b9052901"
  },
  {
    "url": "assets/js/6.34e2a404.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.4da1c22a.js",
    "revision": "75bba5b30f0ef034fc5c13e0b3796a19"
  },
  {
    "url": "assets/js/61.1b049e9f.js",
    "revision": "7fc2f5455eceea5ee31cc22e352be068"
  },
  {
    "url": "assets/js/62.f4dadec5.js",
    "revision": "e9f33c8186d402d88e2142cbb48b8a90"
  },
  {
    "url": "assets/js/63.03d4a5b9.js",
    "revision": "948dc4060bb058637091b898451c2eaa"
  },
  {
    "url": "assets/js/64.25337d9b.js",
    "revision": "87a1873fce2efc3d08962f34a1551cb6"
  },
  {
    "url": "assets/js/65.148a7ddc.js",
    "revision": "c5eb16f86a245b97d41e4e641c8aa416"
  },
  {
    "url": "assets/js/7.407d5d3b.js",
    "revision": "3816373db48dd01f2dc5ce18b3bb1b5f"
  },
  {
    "url": "assets/js/8.f3be8038.js",
    "revision": "dbc09c4ee8706159f97b4501dafc9c36"
  },
  {
    "url": "assets/js/9.e290ae3f.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.0fa70bf3.js",
    "revision": "2b3dd5c0b70110c71d61e207d9df6213"
  },
  {
    "url": "countup.html",
    "revision": "420d2967c2f178673291e7eed906547e"
  },
  {
    "url": "front-end/css.html",
    "revision": "66eaa008cbd049c8eafa34638dd473c0"
  },
  {
    "url": "front-end/electron.html",
    "revision": "8a1af75c9f16472db1dc8ef1191a1568"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "733bf068e320ce68e332d0c285e01810"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "dba26364d9b4b806f26ea6f2f49bfece"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "91e43a653bf429eb09efb27a3d5e78d7"
  },
  {
    "url": "front-end/html.html",
    "revision": "072ddd4d31619d0511298672cebbc2aa"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "b3bd4126e4a165cc2a50ee786c1f567b"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "9ee480fbcfcb47d6914d1b24dcee68cc"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "0f9917bc1e85adf7e081d308c2717c42"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "6a6bbe0eb2f57dcebb840e2c4ac567ae"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "a98781d8e0d1778e7182969642fb3460"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "2aa70b4a4c0e62f1dbaffa3598b8066f"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "9a83c27cbe2b57cc4625203dc1e8edf7"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "00dde590c7f8945f618c06d5aa68c571"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "442360fc75e4a19b392b0ae6ad064981"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "8e2bb3c915f39a2c6ee98fe8b97d3634"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "60573287894ee408e1765412d1925a48"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "4faf267465fce0f3640def99a4573d14"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "c6f909c718ce1364e1cea8afd07e6669"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "0e64f38f682fe2d4797e5d4eb2b22f6d"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "f86447ae3003ff56a5e378d8ff6376b1"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "d292ac8ea9c7ea06aa64ae8f5f28b4cc"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "b2d6e98ae8536c1f5c4a05bbe60d59ba"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "e37e5d06ef416a0e62b9ee8c9d21ab70"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "c96ba44f36fca65ffd96cb538579c36c"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "0c8fdad0779002d7d4ddb63f21fae80b"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "0058d071b439abaa3136fdda6d343ac6"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "90e971a1c405b91a41ab7e39d4dc7e37"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "438e3b088efa332a39e5cfaab00c8b9b"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "db9c18f446f9aecfed5c04498368b8a2"
  },
  {
    "url": "front-end/react.html",
    "revision": "8a2b3f5cbd2e609daba0a614cd3e34ba"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "a3bc0f55026a5b4ad0967f6953c408f6"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "3132e28af47f954a469af8e25368f85b"
  },
  {
    "url": "front-end/vue.html",
    "revision": "8c2e75ef411203a99fb04fb05ad9723a"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "fea36a20e79297c4bd80cdf79a092ed4"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "6338549eafafbecc51e84eb9ebe673ec"
  },
  {
    "url": "guide/index.html",
    "revision": "fb08bea1cd494a44bcde0703982fa9bd"
  },
  {
    "url": "guide/test.html",
    "revision": "ccf3a2079648fdc37539560a3b0263da"
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
    "revision": "55972d02f150e2ff4827b0a8c4fc5800"
  },
  {
    "url": "nodejs/index.html",
    "revision": "44763a3e9657d808635acf854974bedb"
  },
  {
    "url": "python/base.html",
    "revision": "823eebcb359b86d2ee55c448a945b939"
  },
  {
    "url": "python/flask.html",
    "revision": "7e997e41a81f1e639cf95b46507b634b"
  },
  {
    "url": "python/spider.html",
    "revision": "e0a2594331247476a7d4a7788fae41b2"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "af21f7d602569dbd224156f3a78d2d46"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "5b1859dfc33097e05403d9b6ab6e4916"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "35ce77dd7a8fc7c5d79c5240322c50f5"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "22636abd2138d1aafce05e04aba9160b"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "4646cf1adfc304b14d5a1f53f018b902"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "b89438c7f869bd8d0d74757682ca301c"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "c94cf8c0b8c7a005aacc0cf5f225e92f"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "f80d9a832188c7f46c614c3a7115de57"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "d50fb39d72f700566d6bf5a9685d4d8f"
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
