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
    "revision": "c76e39cf48ed6d332e495c3fda874eb8"
  },
  {
    "url": "about.html",
    "revision": "9c2e509e6fb39a96fbe795404bf73782"
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
    "url": "assets/js/11.23820df1.js",
    "revision": "0c1fd7801b454e050b7e032d8a33aa01"
  },
  {
    "url": "assets/js/12.e79a861c.js",
    "revision": "ec5e211d3b748e80109f74f02348e34f"
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
    "url": "assets/js/26.0212c827.js",
    "revision": "37a2edddd6499d913d2af3c0e604f697"
  },
  {
    "url": "assets/js/27.5c43e9ec.js",
    "revision": "722ac870fa5ab96cdc7da5ec3c601277"
  },
  {
    "url": "assets/js/28.337096ee.js",
    "revision": "c70399ed9afe6936564bb36ac88ffb98"
  },
  {
    "url": "assets/js/29.8065a239.js",
    "revision": "d1398944e4584899fab136a6dd5d33bb"
  },
  {
    "url": "assets/js/3.cf321bd1.js",
    "revision": "1c76bf8e4f94240ab999483d04f100b3"
  },
  {
    "url": "assets/js/30.e13c4db4.js",
    "revision": "78bc7682af7ba0cca0efeb0a002197a6"
  },
  {
    "url": "assets/js/31.caf41435.js",
    "revision": "1fff6e3569fce82ab550c47a58ab6708"
  },
  {
    "url": "assets/js/32.eb8ee0d2.js",
    "revision": "675195a12d12cec345102a970ed71798"
  },
  {
    "url": "assets/js/33.0f45fca7.js",
    "revision": "e9efbfbeff6a51dc4585b80d11ea199c"
  },
  {
    "url": "assets/js/34.74cedd6b.js",
    "revision": "03b6525307cd5dbe2a2a2600e8e52e5c"
  },
  {
    "url": "assets/js/35.f12d4121.js",
    "revision": "1d333c3a5c117b213492041b760f79d3"
  },
  {
    "url": "assets/js/36.c8007a9d.js",
    "revision": "28e7a0cf62c758232b3aa2bfe1dc19f6"
  },
  {
    "url": "assets/js/37.d9f30907.js",
    "revision": "d11ab604a2f22d0f8748aa07750403e7"
  },
  {
    "url": "assets/js/38.c32f9ac2.js",
    "revision": "ba9f47b0db94176469aefa918d08472d"
  },
  {
    "url": "assets/js/39.709088dc.js",
    "revision": "53ffff1d08041900eba7e2cc022a8a5a"
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
    "url": "assets/js/51.fa984a25.js",
    "revision": "508bf7aac9ea827dbbcc57661863cc09"
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
    "url": "assets/js/59.b02227d5.js",
    "revision": "02df05c92f878988cc216b1f58b85d84"
  },
  {
    "url": "assets/js/6.673b47bb.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.2c571735.js",
    "revision": "0b8d187910fbd713cc30c9981fd2d297"
  },
  {
    "url": "assets/js/61.82641dd1.js",
    "revision": "23d4e8c9c47f5b9dda1c81288fe0f582"
  },
  {
    "url": "assets/js/62.f1adce83.js",
    "revision": "e463de4ba0da20ccff2f144d982e113b"
  },
  {
    "url": "assets/js/63.4c04b694.js",
    "revision": "c8e98372bd88611d949bfb369b6c2363"
  },
  {
    "url": "assets/js/64.f31871a2.js",
    "revision": "2e9a7a7deb4c303c7ee50117285dd89f"
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
    "url": "assets/js/app.e9412a7f.js",
    "revision": "4a236cec1540bf47f16c5b502c405657"
  },
  {
    "url": "countup.html",
    "revision": "791e99acecae588151d3822d74c2b57c"
  },
  {
    "url": "front-end/css.html",
    "revision": "885b736641ecec815c7de9f7bfcaf57b"
  },
  {
    "url": "front-end/electron.html",
    "revision": "1ddcd0167cfa8e3661abb673d369e869"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "c94e1139fad38852cea1ad3a45df6863"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "b33012cea34a5e1e9f70d706dca38624"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "80de7b9edc815cb914703a09645bbded"
  },
  {
    "url": "front-end/html.html",
    "revision": "6902a3df677b5b614465d3f88eaa5c96"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "78e5e6f1f08c792bcd65e22d3e70a8dc"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "6a7f2b2d7757511d328ebf42860f1b2b"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "12049479b03e7fac048aacd9ff1de10f"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "b0725889198dd29ba4786eac572decbf"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "96d10c3b7fa6cc6cb41b38723555e1ea"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "abed70da34b7a28f8f00d328eb45d69f"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "852b5a07446bf85dbe1348288f217ce6"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "33451dd6378e5b42068ceedca4560469"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "84d3b6b349771eb850e082c697c04168"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "cadc3e860ba27bb607e3b69baa3ef157"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "5c67e7a1c5c97bc3f765ffda023886ea"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "a233c3e55f061e24bf0433cb9bd0fb70"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "ae8d379dc4832db2324d3a6ed43911da"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "6a75c25cf56a64d5869058016f277bfd"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "43dfc887a68d8072962da716171feee2"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "23ba1abb662a91ac2dba7e74526cbcf3"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "968566d986444fbb42120c5f92809ad6"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "1cea75650df5225f5601ac08b261df37"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "2d8d41e411ff5e464acf52bf0da4d352"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "0fa4f6baaa653a7a27ff29837d90e76b"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "65609c0e4c48e1782950281faddd557b"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "4cd03a1aed487bcaf69ca20952a64290"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "9c81c2d39e9241c2d6465e42e7d92fc0"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "5c6961c8271fb561e6be88fdabd584f7"
  },
  {
    "url": "front-end/react.html",
    "revision": "2101e983863983f6444dc7ec1619ca0a"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "86fe9f850602ab1e3b7ad1cb4220d8bd"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "98888c1420f9c61f14c9e2c2bb619b93"
  },
  {
    "url": "front-end/vue.html",
    "revision": "51b5f361835bc35a7a759e35c5a6f82f"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "1a74c53036d6f7fb69b8a60b5829424b"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "f0a9236cdc7d3fe7da977057090298be"
  },
  {
    "url": "guide/index.html",
    "revision": "f202217cc8ca807ce49ffa2f88b04369"
  },
  {
    "url": "guide/test.html",
    "revision": "a182f153a0867db83d7a440d07a56d96"
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
    "revision": "0e7678a1f5756c1a8041bc1c59e0dc5d"
  },
  {
    "url": "life/cook.html",
    "revision": "250b9814f39a79e7463c9f1b7e9e15f3"
  },
  {
    "url": "nodejs/index.html",
    "revision": "af8044e230e7d3de08eb89536c8a31f7"
  },
  {
    "url": "python/base.html",
    "revision": "82b920a04645eb48c9a06e71d12b259b"
  },
  {
    "url": "python/flask.html",
    "revision": "89080f31532095f084ee680cf123776a"
  },
  {
    "url": "python/spider.html",
    "revision": "b94820303079bfc294dead67dcac0af2"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "23808f93074c214c3d2268a03fac6a01"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "91571724cffbc15a754fb56eef3c9728"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "17fe33a25883993c0fe429eaa869199d"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "4393be3841b1fb9d24060437e33af9d5"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "bc72d25ca31c7d6b3e290c437175a68c"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "739b9e96e29bcd9f5e2436e0814fd034"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "2221418308a62dbe087d824154deb90e"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "e9a27b7ba9afba6ce33aabc2e60cfc03"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "d330838181beab7997142957a5740c69"
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
