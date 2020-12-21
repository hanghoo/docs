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
    "revision": "ee854098bc63b815fda42c695498e9a2"
  },
  {
    "url": "about.html",
    "revision": "33c34285f93872e1808807bec5da8760"
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
    "url": "assets/js/27.9d7514af.js",
    "revision": "560f9f0d229cab77d566af29fa6ef748"
  },
  {
    "url": "assets/js/28.3bc2f284.js",
    "revision": "91c3d03b76729d4ee6891949cd65346d"
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
    "url": "assets/js/49.abe3238a.js",
    "revision": "e0c30915b321dab5ea1268a248d43403"
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
    "url": "assets/js/58.9907eea4.js",
    "revision": "6f425dd79b94f0a637bdc24d51f25502"
  },
  {
    "url": "assets/js/59.d64af406.js",
    "revision": "9abcac303803532068697ab7d412f2a8"
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
    "url": "assets/js/app.f6fbe969.js",
    "revision": "acc95b93a93cfc80580d4b96cb2d1688"
  },
  {
    "url": "countup.html",
    "revision": "b0b894d4a19068c8e62864241800ef73"
  },
  {
    "url": "front-end/css.html",
    "revision": "ea0cae625baf6afe5069fc9eadd70ed9"
  },
  {
    "url": "front-end/electron.html",
    "revision": "332c7e227c2ff5ff0b55cdf577f8ca68"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "634c3f6b9167d0bd1a6c084c3ac45542"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "2f12879251c9a3eccea1db728abb3f7c"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "053ca4882b9c6c5b0b5b1d5631ef0075"
  },
  {
    "url": "front-end/html.html",
    "revision": "85cabfd4ae8b1525cf20972a73f2cb15"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "ce3196ab9d0f5c08850436d217a684be"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "455cc3ecfa6078b42d7c9d00d01a1574"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "fbee332e4be74b703611658e9d716bce"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "665e8aac9c89e1b10dab5751afd8fdee"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "68f3df7bff8be384a5c70ee1368a3bb7"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "b56f5df78be378934631c320b2a2eab4"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "98f8d324b1a6bad9e1a91da7b39ad654"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "7b18ea26a219997b12126b5da9c20fe1"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "88bc17c8a92c9ae12fa945d8ba0c8b8c"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "436dcfd89920aae9edbc734c7d46e778"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "98eddc0364dbe13ea4b1ea787d5ed7bb"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "63d5482c5e78109da41c335e411d40e7"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "e84f1e757a9e6f959faced01569af25a"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "e8cf817943b48bfb626cc47e0b7fa2e2"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "f6b5b9db5785858020d1c7dba0008b22"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "db94931ec75670373121704a763222c9"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "2c87d2690dc3e97a779f7f80b0214558"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "0fc4bb1737fd6a17557cb0de01560ead"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "af1736d465e6f37ca68235a96f02ef4b"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "04faa9b6c5d9cf47b0431604e4ab7fe7"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "c1dc375cd861b88be610c8cba31673f4"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "73b3ce6fc1b7d534bf01220fc9c104d3"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "355d33f8aa9a56010a338b8da72782f4"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "286bced820b9d8d874e30c0ff72b8c91"
  },
  {
    "url": "front-end/react.html",
    "revision": "d6ddc6dd3cd0abc4015a12ed17bf868f"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "f7719539078cad355574cd5a9ddb18cd"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "d6ea4a3b6c8d335c12f0a45b9a49e7f7"
  },
  {
    "url": "front-end/vue.html",
    "revision": "3c71804f79235b610edf17a79de92ad6"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "4657065a19e76312ed0cea3a108e1268"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "d6d1492603874c79922d32d34d128da1"
  },
  {
    "url": "guide/index.html",
    "revision": "2f1d2d453ae8ee00d2eb64e1d0ce8409"
  },
  {
    "url": "guide/test.html",
    "revision": "e68e811a7e6942b0dbf3912a2ac6cbe2"
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
    "revision": "48d6a327180fc0d2cc8207ca1836474d"
  },
  {
    "url": "nodejs/index.html",
    "revision": "302f323ed34302f152f698b56bd5f661"
  },
  {
    "url": "python/base.html",
    "revision": "34c19c5047ac9fdf976fe7557c664959"
  },
  {
    "url": "python/flask.html",
    "revision": "a96926dd0794ed4367170dc733fa0f4f"
  },
  {
    "url": "python/spider.html",
    "revision": "d5a27076d917b73b325174aee0a9a8b8"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "0395260d499364167c3c6609f88af40c"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "c59120a2ff2ab1d463f2c291a223e0ce"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "1ba23b2eea191635e5e2b1b2bd1ad223"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "8064f42f9c355a8f5543fd32e2c7ccea"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "b4d20accb5fb07d73b54d3083af909c6"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "a44fcf6bcf3bdf9a38fc693acd7183c2"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "6cc6bfcd3e516fb190d4eec9df93f0b8"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "66c9f8770cace7cb722508115cb1ab91"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "4110aba1c3ee85a6db35e84c9ac6bb8d"
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
