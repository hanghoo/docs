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
    "revision": "4c0fa8a096cb698324d3d38ba911c8c5"
  },
  {
    "url": "about.html",
    "revision": "046036a3cb67c4af95cfb8151fbbc3e5"
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
    "url": "assets/js/10.2f2f1c5b.js",
    "revision": "c48f8512a5ff50b6ec03cf9043466ff3"
  },
  {
    "url": "assets/js/11.c6ded7a3.js",
    "revision": "04317b78964ea48a6b0e43273e183ff4"
  },
  {
    "url": "assets/js/12.f92aadfa.js",
    "revision": "b60a1157f2c8b05807f46e80b455f66f"
  },
  {
    "url": "assets/js/13.2252fd36.js",
    "revision": "90c066f579fa1de2d0d7b9f3824f43c5"
  },
  {
    "url": "assets/js/14.02b640c3.js",
    "revision": "690f94fde937b1753cd43b016d70404f"
  },
  {
    "url": "assets/js/15.6434b11f.js",
    "revision": "6ae79624171f0c8e8cbc4eadc992c5f7"
  },
  {
    "url": "assets/js/16.69b427fa.js",
    "revision": "21d5c275962edf131c6e0736b4a9fd63"
  },
  {
    "url": "assets/js/17.8e482b0d.js",
    "revision": "4f28158d9ea7c199109810031cffbfe7"
  },
  {
    "url": "assets/js/18.27f92f7a.js",
    "revision": "2ca23b74f4e2ce5d4bae0355bda0333a"
  },
  {
    "url": "assets/js/19.e51207b3.js",
    "revision": "e454a96ffa7bb61a5c82cbd39920877d"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.03a7b900.js",
    "revision": "0311066f7d71db29c0fa9c2368e243c8"
  },
  {
    "url": "assets/js/21.b168bedb.js",
    "revision": "a6e7cd1c607c548fa1333a12779a30c3"
  },
  {
    "url": "assets/js/22.3b17063d.js",
    "revision": "4b166a412df07f3c3887be5a4d3db7d7"
  },
  {
    "url": "assets/js/23.94cc8bb7.js",
    "revision": "36c8d31aa6c99c7ebc7d2171805cacac"
  },
  {
    "url": "assets/js/24.c84ece8b.js",
    "revision": "80e1d70ec1f13645bd99e0bd6bd0b55b"
  },
  {
    "url": "assets/js/25.abc66367.js",
    "revision": "940e3cb0053156a5d28abbb83018b629"
  },
  {
    "url": "assets/js/26.5f7595fd.js",
    "revision": "149ea674f86b61bafdb07d43b88208f7"
  },
  {
    "url": "assets/js/27.17a720bd.js",
    "revision": "3e9c37c94e20158ce0cb1e956f11b19f"
  },
  {
    "url": "assets/js/28.0e5703bb.js",
    "revision": "365b39e9470991fb67e0c04f78f82517"
  },
  {
    "url": "assets/js/29.0c8286af.js",
    "revision": "3b778b9a1f3c43b7f38e750577d8e35b"
  },
  {
    "url": "assets/js/3.cf321bd1.js",
    "revision": "1c76bf8e4f94240ab999483d04f100b3"
  },
  {
    "url": "assets/js/30.710d0425.js",
    "revision": "6eccf75a1c5b7102a3b39e1594a88196"
  },
  {
    "url": "assets/js/31.7260bec6.js",
    "revision": "b4317b58b1c1686378f5be3c71f2e144"
  },
  {
    "url": "assets/js/32.9717121e.js",
    "revision": "5345d2d5d5cd32be2ac4e4bb405aa752"
  },
  {
    "url": "assets/js/33.a9783456.js",
    "revision": "a93f512740b7feeb769610f2e92ddca6"
  },
  {
    "url": "assets/js/34.1bbb5ee3.js",
    "revision": "58edcdb0927439ba09d708b364e51f8e"
  },
  {
    "url": "assets/js/35.4fa3dcc9.js",
    "revision": "243b5ab21f92587229d09f62be09e6c6"
  },
  {
    "url": "assets/js/36.3a2db681.js",
    "revision": "b20d010ea84578d97887bb5462fa2768"
  },
  {
    "url": "assets/js/37.8ef466f3.js",
    "revision": "3102e3cb40c984a3271170f2b2eb4936"
  },
  {
    "url": "assets/js/38.e51cd9af.js",
    "revision": "4b0d82bc194a0e56f397eadbc2f2df92"
  },
  {
    "url": "assets/js/39.1108dcd4.js",
    "revision": "5c9f07d22d347776d36f47ab501c112f"
  },
  {
    "url": "assets/js/4.c0252aab.js",
    "revision": "a31248b71b4d057787bcdcc62cee724f"
  },
  {
    "url": "assets/js/40.131efeef.js",
    "revision": "df3bcb6fb4d7a5b102309631f3293774"
  },
  {
    "url": "assets/js/41.52f59678.js",
    "revision": "42a5d1ab48fe04836c77497d6991ced9"
  },
  {
    "url": "assets/js/42.86dff4b9.js",
    "revision": "c0e0276b804642596981c9c909294dd8"
  },
  {
    "url": "assets/js/43.d60e1787.js",
    "revision": "4a1e0664263359645b8f972126120478"
  },
  {
    "url": "assets/js/44.3065f446.js",
    "revision": "9cc78b4d35e4a854613ef075b8f2b944"
  },
  {
    "url": "assets/js/45.ed102740.js",
    "revision": "fbb3961eb44685505d16ef8552219912"
  },
  {
    "url": "assets/js/46.734950da.js",
    "revision": "07588209c46664deed1d5ea13a9b0b8d"
  },
  {
    "url": "assets/js/47.6b500ae0.js",
    "revision": "6c4fbe1f0b4f53109dfb86503051ee29"
  },
  {
    "url": "assets/js/48.726882ff.js",
    "revision": "356e6c2697d3ee972a1e5c344850b7c8"
  },
  {
    "url": "assets/js/49.9e066cba.js",
    "revision": "e0c30915b321dab5ea1268a248d43403"
  },
  {
    "url": "assets/js/5.269ed1bb.js",
    "revision": "af903bf9fa25137b66d87cfab9e5afe9"
  },
  {
    "url": "assets/js/50.a4dc27cb.js",
    "revision": "0310b6401039352be3c00f0ac3e007ca"
  },
  {
    "url": "assets/js/51.4d3a8c03.js",
    "revision": "1b644190cb1b34ef10e451c146266845"
  },
  {
    "url": "assets/js/52.9c281c3b.js",
    "revision": "2be5b7fb1b525949e5b1e7bc61fcd4bd"
  },
  {
    "url": "assets/js/53.b206327b.js",
    "revision": "9fc95dc777fae6aa990ec70433b9af30"
  },
  {
    "url": "assets/js/54.4cad78a2.js",
    "revision": "2b141116bff45da51026a2b6b87e24c8"
  },
  {
    "url": "assets/js/55.fbd4b75e.js",
    "revision": "08491772511a9c08e0e7c71f6020dacb"
  },
  {
    "url": "assets/js/56.30b532de.js",
    "revision": "d2b3c6d32fb846922cea86fb0d5bdefc"
  },
  {
    "url": "assets/js/57.98196dd4.js",
    "revision": "285c8178ce91e94fb5b37d198fb44586"
  },
  {
    "url": "assets/js/58.261dd9ce.js",
    "revision": "7b06bbbba96d4901d8406d0c60362119"
  },
  {
    "url": "assets/js/59.a4b65561.js",
    "revision": "0a1b1eb1ff75e9acaa2ca5a902a96610"
  },
  {
    "url": "assets/js/6.673b47bb.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.39efda65.js",
    "revision": "a766a0a59363f3b71942713823805ebf"
  },
  {
    "url": "assets/js/61.1fc66a95.js",
    "revision": "f53f2c5147d2ce119a5f72be331f9945"
  },
  {
    "url": "assets/js/62.21990024.js",
    "revision": "03b11b45eb2069b686f8aa6eba1fbaf9"
  },
  {
    "url": "assets/js/63.33bc3357.js",
    "revision": "56cccbd88af32a3ad329657653ec39d7"
  },
  {
    "url": "assets/js/64.0ca2f121.js",
    "revision": "adb197eecd2b606eb7444f3d54a1da0a"
  },
  {
    "url": "assets/js/65.73f50f14.js",
    "revision": "319a4370e6700f8401803786f9d22655"
  },
  {
    "url": "assets/js/66.8ed70e79.js",
    "revision": "958126868d324020409db5b693bea314"
  },
  {
    "url": "assets/js/7.c80adb03.js",
    "revision": "3816373db48dd01f2dc5ce18b3bb1b5f"
  },
  {
    "url": "assets/js/8.ad8ae199.js",
    "revision": "3de9fd32393755587e846718b4e71115"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.928d7c75.js",
    "revision": "1defe2242d65d546c26860ef1e1aa8f1"
  },
  {
    "url": "countup.html",
    "revision": "7ceb7f4d8f2ba61a2f8688637ef370fa"
  },
  {
    "url": "front-end/css.html",
    "revision": "0d1d58c6151c1bcdea48dd4a138f1431"
  },
  {
    "url": "front-end/electron.html",
    "revision": "b5cca0ca725e46f5579c9de2568a57a6"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "69b762d4fe2e94094928cee36c33168a"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "2a0f515793e6648ab092fcbfdece3b7c"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "0c0e02d43f2674df2657167ec0668f39"
  },
  {
    "url": "front-end/html.html",
    "revision": "15ef8d6056b28580ca71813520b7ff3b"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "d90a530ba529b8acb38f9b8161239971"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "28e33861e26c23441f7378bcae11a243"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "aaf3d61e2dc899c2465485ed259f5389"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "97e0ab0390f2efe31d0497dbb44dbbba"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "8a267b5f2d6ad3b882dbc24c9aa437ac"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "fdb199ea6d89232177ddb26cb046daf6"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "77eca398631eb3a1a5e4a26acaf9e6c0"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "e5ef04cd4fa92009516e170270b4b69f"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "297ce06d97d988c5fb884a37fdfa780e"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "5b2858b01e4d1bcc1825cd49a6266b99"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "2d7643f16d4f5448023fd9842745214e"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "7548c2ab4a1bacb7600858874e48109e"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "84d5e79e425b2a1546e7cb3dc48f22aa"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "5875c43517018e70df5692c492972730"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "556015a30d1529eb1fa66f44e580439d"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "ccbd21335e6462c768365a7b99dcc8c7"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "5e6d6c585f0a38d02189f9b76d670f14"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "592a2e5d8b7ef31c165226ce97bc40f7"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "ee876bce54639d6f01de2a674aa8653d"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "77be75ba96bfa6b7856583c0b71fb21c"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "e396582450b2b4bd9668173b18036332"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "f88c4a07f508b99c11feeeb4662f3dfb"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "ebea3deb904a70bab704c00c73e32d8e"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "1eaeac962091bd0d2709ca4168c6ba0b"
  },
  {
    "url": "front-end/react.html",
    "revision": "a94ff3ceb88c310a7782aaa04189f757"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "f4cf440b1519209f32054f9bb0b3655d"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "fbb64412d7358829306cf448f32ae66d"
  },
  {
    "url": "front-end/vue.html",
    "revision": "e1de52a059a6722095d6872937c8f6f3"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "d7174d00cb684e46beda4421acab17a7"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "7fa7de4e4ac0efe24a2637928ec2c767"
  },
  {
    "url": "guide/index.html",
    "revision": "d552acf4c2606876d21aba60f851d25c"
  },
  {
    "url": "guide/test.html",
    "revision": "1d12d80e556d9761d127925573346aab"
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
    "revision": "b7c8bad3a26763df00e26586cdb71d12"
  },
  {
    "url": "life/cook.html",
    "revision": "68d86346b362fae60ed58ca773c6674a"
  },
  {
    "url": "nodejs/index.html",
    "revision": "6115c30df43f3d9ea1040cbcd2003dbe"
  },
  {
    "url": "python/base.html",
    "revision": "67f5449d465d7ef72d1531fa1b170f95"
  },
  {
    "url": "python/flask.html",
    "revision": "8c277de66dc2e13aafbd082b9b3c00f1"
  },
  {
    "url": "python/spider.html",
    "revision": "ef91150e6c96a0373fffb8fad1c6a454"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "cae9eaccab0d28ab564930a5cdf4c12e"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "47b7ba22c3af89de00c44f59c45177d5"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "68940aa1ccb75fe280e089d923c2feca"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "5bd7d555a443927c3141767f88aa54a9"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "f74f1eb1e53b338a6583131305666f5f"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "e1daea3bfd01d7fafc61620ede88626f"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "521be209147b7c720bec03fe0f00d1a3"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "52310e85aed1e7b00d160326db802540"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "9f4312cc25ca5c1a904bddad37c7f735"
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
