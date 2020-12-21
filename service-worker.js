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
    "revision": "0a2a8a555e2c2bd94ed81e17d63e8bcd"
  },
  {
    "url": "about.html",
    "revision": "787d4a392f70b29d3cf47f715a27628a"
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
    "url": "assets/js/12.c86c4f8b.js",
    "revision": "a9faf6bf6e59529674acb27ca5d0b379"
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
    "url": "assets/js/16.66786fc1.js",
    "revision": "e7bb35a4cd79522bacc3dfe1e21a8b5c"
  },
  {
    "url": "assets/js/17.099646b7.js",
    "revision": "9bc57e70135534cb50d2a5b6d3b55903"
  },
  {
    "url": "assets/js/18.1830694c.js",
    "revision": "c8882f6887e70a24e093f1120b53824c"
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
    "url": "assets/js/4.8a7386df.js",
    "revision": "89113d77842f6eac4ceadaf62ec7f4eb"
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
    "url": "assets/js/45.dbfbcdda.js",
    "revision": "f9e4fe7fdafb25827a55456fa6dbe03b"
  },
  {
    "url": "assets/js/46.1055cf28.js",
    "revision": "0949607350eb31d16efe1714a12dc284"
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
    "url": "assets/js/51.ceb51c03.js",
    "revision": "c88efdbfa13e06f6d4436b8f100ce879"
  },
  {
    "url": "assets/js/52.c6f68501.js",
    "revision": "94637876719e82a4078a01a408620b94"
  },
  {
    "url": "assets/js/53.be73fe85.js",
    "revision": "f8d3352b4de1c20cd216c1b0d8ae1c59"
  },
  {
    "url": "assets/js/54.02b87baa.js",
    "revision": "e8ad426a0a1b85ba37fbe19dc2ff26fd"
  },
  {
    "url": "assets/js/55.fc219816.js",
    "revision": "83d122c093e02c786db40205e1a66a7b"
  },
  {
    "url": "assets/js/56.7e89b1ec.js",
    "revision": "fb48a1b346c0dcc349e8783faa91d4b8"
  },
  {
    "url": "assets/js/57.fc3f2977.js",
    "revision": "b1a2564f15327d246b33dda7f1d101a3"
  },
  {
    "url": "assets/js/58.42749851.js",
    "revision": "a7c6798601020588a80a69b612db04a1"
  },
  {
    "url": "assets/js/59.3545da5d.js",
    "revision": "724cfd45147a4108a229148bed8deaee"
  },
  {
    "url": "assets/js/6.673b47bb.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.3e2cc536.js",
    "revision": "75bba5b30f0ef034fc5c13e0b3796a19"
  },
  {
    "url": "assets/js/61.ef18cd2f.js",
    "revision": "456b0b1840fc08854590219205527817"
  },
  {
    "url": "assets/js/62.cfca5a15.js",
    "revision": "5cb50d735a251fc4ce941d3c7d95e32d"
  },
  {
    "url": "assets/js/63.b418225d.js",
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
    "url": "assets/js/7.c80adb03.js",
    "revision": "3816373db48dd01f2dc5ce18b3bb1b5f"
  },
  {
    "url": "assets/js/8.169c3cda.js",
    "revision": "dbc09c4ee8706159f97b4501dafc9c36"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.8de2e4be.js",
    "revision": "1a990bd54480dc7b37780fec76f90b5d"
  },
  {
    "url": "countup.html",
    "revision": "5ba1ce3b27c0e512c91f777376e6bb76"
  },
  {
    "url": "front-end/css.html",
    "revision": "98abf1a7382163f83f2c854e0773dda4"
  },
  {
    "url": "front-end/electron.html",
    "revision": "280499dfae67a7681f1d645fb211d2f9"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "37500c4ee9648ab5ac4c9fb47ac5af4b"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "1f98246ea942cd420cd2556fff39ba1b"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "cbf3dd1b850ec5cee2f62cff09a9bb78"
  },
  {
    "url": "front-end/html.html",
    "revision": "339470502333f51a81939bf7b3cc9d77"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "dde05bb351acd67c2954210da020862f"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "1655f3888193cb1ffb3c8cebba6f32ec"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "133c1907a9dc4874615d9b2a8656f4f5"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "2f7089b3ae2c62c4e4c0aa8e65c0ea08"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "af51d2409fef188b6ce992714fddea74"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "b20833b2d953a94218d94227838d002d"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "e9edab45b04f18103fbc9e726542781b"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "8ce3198e704b04a2a752504ef6f724f9"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "29d20d5cf6af3c5f425465faaf7d8523"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "5617cd54475852157124c9f401d6bb45"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "1827acc6f349607c07e9d9aae1c14edb"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "c377880e3e5705f893732826d42e0c14"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "8da6f984e2579b448ccf61beba036bcb"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "49e776880269ab9cda58cb314f437ed5"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "1bf3956a3c8a590f15391963573d5308"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "9958a6507e8d7567c0992df4553d04a4"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "d515ee7c94c8b6d8de2140bbb90b4582"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "7a5606fd4320226fae63c8b5f91d705e"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "ffb0805904773a3ac1c9517fe5f2043e"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "fe43a259fcca0a7b8d455140fc7e2c8a"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "8124b4c08a30c2beb7d157c04d8b20e6"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "037ec908fdc975bff067ad66ad753376"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "9b67711222e2799b822a6d1481aae727"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "e2116cbb0aac39e6faea7cab48a5486a"
  },
  {
    "url": "front-end/react.html",
    "revision": "48442d25302e1d051f2780e42da0c952"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "ca32250b254ff5bd51fa9eeced6a590a"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "ba6cf03f146cb18be988e290930e2956"
  },
  {
    "url": "front-end/vue.html",
    "revision": "e139f1ceb237a1ddc8855e77b45a64ef"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "85baee373dd087249fb830573a5d7f13"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "46b39756bf000fe90744e6fe8e2597db"
  },
  {
    "url": "guide/index.html",
    "revision": "e93a01788b52bf2e4c8a12c7f91b9a5d"
  },
  {
    "url": "guide/test.html",
    "revision": "b764e21b2ca8486935e71f384e5528ab"
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
    "revision": "7c3c2e629b4f39b2b0e3ce292ec55b4a"
  },
  {
    "url": "nodejs/index.html",
    "revision": "3fd33379924f5dfe53248dd4598cbe96"
  },
  {
    "url": "python/base.html",
    "revision": "e29a3608caa99364d08c690bb87ea76e"
  },
  {
    "url": "python/flask.html",
    "revision": "1072485d00508c6a552aedeef8ee1e1c"
  },
  {
    "url": "python/spider.html",
    "revision": "cbdd506978120a85b00a3d464d1d7000"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "b82329b7ddf7e0435863b2ab9e69f4f4"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "0b9a5791dc7b350d276f67db818eb65a"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "822a9b6ef59aca1ebb148e23204d0537"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "716e46bc4882a547c57fa9acaf8cb8bb"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "350e1b45433bb2eaa5c6b7a6c1aa72bd"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "be16f437de9c2fd96d6234ec4232fd50"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "34313ac7b3386ecda3de5f5731383ace"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "0bc3ea00b221f07c1617af5fc03a6ff0"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "7f1c461e63cfa3feab4bc3c8332e9a6d"
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
