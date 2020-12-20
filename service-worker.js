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
    "revision": "0edc5b108af360a75f56b542c1d4b5cb"
  },
  {
    "url": "about.html",
    "revision": "a212477b9c77943393aae491a04cfb75"
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
    "url": "assets/js/11.a793d53e.js",
    "revision": "04317b78964ea48a6b0e43273e183ff4"
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
    "url": "assets/js/50.0c1c67b8.js",
    "revision": "a6adc11eeb93da582dc976199c5dbfc9"
  },
  {
    "url": "assets/js/51.9c2779e8.js",
    "revision": "bea85113221de03e722424c9b07719d9"
  },
  {
    "url": "assets/js/52.29024a44.js",
    "revision": "a04b3ca68d5cf70a01efaf2b6dd90489"
  },
  {
    "url": "assets/js/53.b0c344b5.js",
    "revision": "d28f8160dbe2eed8d7351652a8d8bcd4"
  },
  {
    "url": "assets/js/54.127ac21f.js",
    "revision": "5459a7c1d1687d8104be96fe751a026e"
  },
  {
    "url": "assets/js/55.389c246f.js",
    "revision": "7300280b25538a3255473355e4975875"
  },
  {
    "url": "assets/js/56.d0676769.js",
    "revision": "fb48a1b346c0dcc349e8783faa91d4b8"
  },
  {
    "url": "assets/js/57.e71082ed.js",
    "revision": "11020b58245fbc5658bb2959a62ca207"
  },
  {
    "url": "assets/js/58.41aa9cb5.js",
    "revision": "0611637c2d982fa70effc9959a5f7f29"
  },
  {
    "url": "assets/js/59.451387e3.js",
    "revision": "2f39f01e64d6dda9183e4343904ae533"
  },
  {
    "url": "assets/js/6.34e2a404.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.008d8193.js",
    "revision": "80b2400135dd0fa787775994f6484889"
  },
  {
    "url": "assets/js/61.b71da054.js",
    "revision": "456b0b1840fc08854590219205527817"
  },
  {
    "url": "assets/js/62.0a948914.js",
    "revision": "5cb50d735a251fc4ce941d3c7d95e32d"
  },
  {
    "url": "assets/js/63.f5d6d8e6.js",
    "revision": "312258b51dae899fa1f7c6aea8313cc8"
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
    "url": "assets/js/7.8968765e.js",
    "revision": "0c414ff88e6c37143c5642bbf5bf7101"
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
    "url": "assets/js/app.da625880.js",
    "revision": "e338bf97e85f180e59597860bc2ea5bd"
  },
  {
    "url": "countup.html",
    "revision": "a5d6da8a2117b286393754539b63125c"
  },
  {
    "url": "front-end/css.html",
    "revision": "21549a0e8d3b4b4b1e319d6f8c11c9e7"
  },
  {
    "url": "front-end/electron.html",
    "revision": "d0a340de149dc9931a3733746216135b"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "a8b594f5d593b70cdf38540eddaf662b"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "01db5c5686f58fcdcac1341d1877ea30"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "ef3519b752571b697b04b9676753cfdc"
  },
  {
    "url": "front-end/html.html",
    "revision": "4f334e356fb861d02cb1d9b7506d6eb3"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "2285969d4353f15c2e5458d33c7688d1"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "9fee6a4ceee6329cd0ca2f1c6217249c"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "8a7bbd3b4cef86e152ddeedb6f3c33a6"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "0a7581052ca4c967867e7703943d8793"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "d8556707cb8482a8e5fe0b867e88d2dc"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "eda93f8d18f4b9fe61c205c1aadce511"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "7a9926235b2122255d5d10696c56236f"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "042b43b4094fb6c68d57019cfeddf281"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "44f20483cd4ea058a278384acc6440f9"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "61a26cfbd4f60126189f934b48767700"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "b2230a53c8e7b4e5517b82f194320b79"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "789d554b208e2446694957a867c9a2b0"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "2e82f45f6eaa20861b0221bc85d1ca9a"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "531b51278eb1a04e7cbd1c3ee13db1e4"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "633ee2603dc2cf470e5fc176522839fb"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "bb6b5d695d8b7fc90f44ec7556653809"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "5564abce152f76882c25b096e56e367a"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "8d27035b76ef187d5c350e9cda78bd41"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "49e4e2850fe668588d5fd03e008e39e6"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "91190eb50fdfd5885bc20c195ff3ecd5"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "f63f2acda97f3494cb05305df0a3f32f"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "df14f9f047c96fd89d385f0b0acec89c"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "443d7a9a5849c93fb2205ec696460924"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "e10b5d01d8976d3843a540603c6a90b8"
  },
  {
    "url": "front-end/react.html",
    "revision": "366726f2bc68b5185c4568c8047055b8"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "29e38e686c03c13bbf6446f5ce1e17e4"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "209aa33ca84ab311026029bfe0ba646e"
  },
  {
    "url": "front-end/vue.html",
    "revision": "139c016afdff53f74e9e1e351fb70d04"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "d749e3021c814a637b617e8936e6fb0e"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "73eecdfc7c76a11a090271468a107ae2"
  },
  {
    "url": "guide/index.html",
    "revision": "f91a67561c55613d6c1499a8981ed2f9"
  },
  {
    "url": "guide/test.html",
    "revision": "3d35ee12da66f91eaead6cd4d7cb0dd6"
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
    "revision": "75b2985a3e67f7a7e6e36d558fb20bf6"
  },
  {
    "url": "nodejs/index.html",
    "revision": "0a33ea5970dfed72584d8fcc1970f338"
  },
  {
    "url": "python/base.html",
    "revision": "9b8a0ac74c5a7e3c54caf23ec43cd28b"
  },
  {
    "url": "python/flask.html",
    "revision": "89be1a466aa3cb3715ff618f36c95a07"
  },
  {
    "url": "python/spider.html",
    "revision": "3d721004d304774a5df41b27e91f40ab"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "1531184222cc7b8cc12e2fef13b99a06"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "d5aa3b44dec0bdd1fd2b902d0775c8ff"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "9a3e2eb165c8652784c59265f67b8ba5"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "d622c92c2fb718d50362f8f0e8d68a1f"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "cad23c79bbad393f328c4c07ea340800"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "d8c8c3facc8ed62b016cdd486ece26f6"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "89d3638074ed20e435c664af2401fefb"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "cb83bbb8d9d0e874f40eaba1fa9c2857"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "e8ba47e0ce3fd4731a86688ba5d9e102"
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
