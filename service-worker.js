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
    "revision": "feebe725e00501930c2266a0ab7be7a3"
  },
  {
    "url": "about.html",
    "revision": "b6a73513fc10ffe56314edcaf8222535"
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
    "url": "assets/js/56.dbd51084.js",
    "revision": "dcad7787f1e639888df6aba6d2a0b452"
  },
  {
    "url": "assets/js/57.e1ab36bc.js",
    "revision": "9940218a50ada28981a7c5a6ca7c7f25"
  },
  {
    "url": "assets/js/58.41aa9cb5.js",
    "revision": "0611637c2d982fa70effc9959a5f7f29"
  },
  {
    "url": "assets/js/59.60a59eb5.js",
    "revision": "afd2e664899d53a77cf8f1b6188a02a8"
  },
  {
    "url": "assets/js/6.34e2a404.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.d6a033ea.js",
    "revision": "10482320d9545331409ef39dc44abcfd"
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
    "url": "assets/js/app.165f5a1d.js",
    "revision": "860f03e2cb4974076d6c2cc3563d45ab"
  },
  {
    "url": "countup.html",
    "revision": "faf1ea241c0487d7522fd2a446e30d4f"
  },
  {
    "url": "front-end/css.html",
    "revision": "11923e349d1ed9bf9e9683ffcc78a58e"
  },
  {
    "url": "front-end/electron.html",
    "revision": "411c88554aa818073d45fb50c4166d61"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "9e4e14d26c05bca72051e0b005d642a7"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "f5ae5111219d58250b0c55034c041934"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "b93cdeb337f493e1de1fb1da085d8bbc"
  },
  {
    "url": "front-end/html.html",
    "revision": "fdce493dc7eb6de31b630e77787a11ee"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "d92016037d670844a5eabbac4cce50ec"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "61a4971a6a9f7a0ca12d62f0c268a3a7"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "119e025c9fcef14b84cfcf10f76aaf0a"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "710385aeccf9ca9501870b4befdeba14"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "c727bc5a1696d3279d2dc6d6fce4817f"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "de9a09938f8f67122c454825e7dc5a83"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "f8090e71e74c11f8e6213e9aad5d3f3e"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "fd072554a8c9ef109a2e6164be4c5d59"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "c3c2f93d5b99c4c508d6ae5d47ed7f65"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "5e8b8083383fa5912db627d5747917c9"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "670e4af7c817be23ff2b00e52e5aa283"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "1de5aead3536b3a6962b947fc47bfc31"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "357673854517ec3e73ac5c7d7b89dd85"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "ee16e73d8035e2d3f5fedd95843e52bc"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "d8ecbe4028a5a68f90a2a3ef68a917fa"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "2ac5e4468aaf72764e388795f89ff56e"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "baff667d73ebcce6371204f7d076f457"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "7e496bad0e3cc36d6e67c701350cb191"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "d8ce5455dc0f4bbaa91322dba78a890c"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "3ae3c825ced00ebc058c86e337bb9cf7"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "c1720b301c43fd7bedcb44c0766b07ed"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "76079cbb69f0c028ce15b78867a64c96"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "8d0fbf73a4890cff654bd6f962cd585d"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "43a67522fce75fde6ae01ff762f63935"
  },
  {
    "url": "front-end/react.html",
    "revision": "c6a6b462fad4dbcf6f54f73bf105008e"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "8a469eec236148eb5b3ca38c62692eb9"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "946b2bb3d32c2d5902042cb2e58cd536"
  },
  {
    "url": "front-end/vue.html",
    "revision": "bece2f993de7d7976139549c89ac9d02"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "25860e583614d7f4d280330ec3cfcac0"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "d48ff87727a7034480b736d18a8b59c9"
  },
  {
    "url": "guide/index.html",
    "revision": "59e21c108b6d1c9f9f9bbdd84f6060ff"
  },
  {
    "url": "guide/test.html",
    "revision": "76d1c1d66b513e11058e4c6312dff150"
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
    "revision": "714898a277c9143f41e219d00c6ca853"
  },
  {
    "url": "nodejs/index.html",
    "revision": "f5cbe2b4e3ebb821a790ef45fb48d3ee"
  },
  {
    "url": "python/base.html",
    "revision": "3abd5b4dedf9931c17e42b525124edc5"
  },
  {
    "url": "python/flask.html",
    "revision": "64f98da09883a4714d14083d03530c9b"
  },
  {
    "url": "python/spider.html",
    "revision": "90efacdf1e4be65f1a81a85071aae6c4"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "bc1752c32ef382584864bb1d4dbf9f4e"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "02b65916802bf75562ee980eccb59e61"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "cb7dfaffa0413bc5e484a5d1fa54b7a0"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "03b50c5c66f40cc43f1e083b88444d27"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "40c3ce768c8a0279af8c74f2f769dda2"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "19a52608a63679e3c9268612507a37c2"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "02fad57b951e7647d42c053fee080328"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "e8595d8ba77aad3fd2bd5e38986f5de2"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "a29f4b408c0d06fc27d436a4ef17043b"
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
