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
    "revision": "12e79534a73783cdf4880c6831407e4d"
  },
  {
    "url": "about.html",
    "revision": "2118e38e98af7474d8ea61ada1af8f2f"
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
    "url": "assets/js/14.1e970d61.js",
    "revision": "9b55d8963d8dedffc53e3c2cf5dedbca"
  },
  {
    "url": "assets/js/15.319c7979.js",
    "revision": "51136b66ca5d5064b60f791463481247"
  },
  {
    "url": "assets/js/16.66786fc1.js",
    "revision": "e7bb35a4cd79522bacc3dfe1e21a8b5c"
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
    "url": "assets/js/19.5fd66aff.js",
    "revision": "9d4ec76ae5cdf2cf106d60864e893756"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.36c7122a.js",
    "revision": "a9698cd7e08f3333be619af775c143e0"
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
    "url": "assets/js/37.36add87b.js",
    "revision": "cbf921576daa125f67d1ec10bd8504b8"
  },
  {
    "url": "assets/js/38.c32f9ac2.js",
    "revision": "ba9f47b0db94176469aefa918d08472d"
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
    "url": "assets/js/57.8a93fc67.js",
    "revision": "ee1e4ab42269ee006c562bbacda0a1f7"
  },
  {
    "url": "assets/js/58.bcd34a1a.js",
    "revision": "8448fdd900ded530c09cd718dd5a911f"
  },
  {
    "url": "assets/js/59.1419aecb.js",
    "revision": "492768044bb2d7a05ce6c3ac6be35be5"
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
    "url": "assets/js/63.9962cd8c.js",
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
    "url": "assets/js/app.2cb04ef8.js",
    "revision": "e97095cad0219568d4a13e61cf6148b8"
  },
  {
    "url": "countup.html",
    "revision": "af865e28bec92211a1d789a1b322e609"
  },
  {
    "url": "front-end/css.html",
    "revision": "6725dbde2b36ecab0a386604e7f9ca87"
  },
  {
    "url": "front-end/electron.html",
    "revision": "a718185201bc3ad3417fc0887a6e1923"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "5280b8b6dd35737fc69349bf1d7069e9"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "bed9bd2408c3864e57ba6b4f837a9c6e"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "008cdc0f1291b1bf30c714b61c896aa4"
  },
  {
    "url": "front-end/html.html",
    "revision": "0af9c5352d896557e15aff9c1613d719"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "fb87c9239242faf7368baa7e9508ee36"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "b8204ff2d13b49e378e0c7b83ff1fa1f"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "0a94a9e5802fcd49131a229a7967a496"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "b86b77e4ded68452b50987033448a581"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "ca299ef7b742c68e048adcc50cf39352"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "d215a355e025d0b07ff6cfbf0d045694"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "d75ad3474b731bec3e3cfa337ec6ce17"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "084f0e0ba4c08ebbd3d237696e2e4fc8"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "d9c2be3e1a8ee23f464ce47e253ffd25"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "865c29c2b56b04c89583e53953c26777"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "1abac1a18a4797ba2c7f9f8b21c88843"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "6b2a5b01bbe82447b7441878174fa111"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "92d42eafd85dbc8dc43766a1a5409847"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "841e3a5f8b7879b4cde10aef113ce833"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "dbd651da44047179fb3bb955b37c1779"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "bcb409287b25a895a784c09290e6e421"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "fbaf1c02813ff4b4b31c30d437d1c3b8"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "0a7bf7dbead10325a746825205bdd5b0"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "8e99fff01ed1a713071f0e7c4909af1e"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "4140508b34900388fe317955f4dc1ef3"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "4616757b02518addf7ea7452b9ba82ca"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "132957a54e365dc8ad11b9819ae9fcd0"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "fe9ddedd9eeb0312557d9f3de998341b"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "0c7303a00741cf58bbaed3ec6e915f2b"
  },
  {
    "url": "front-end/react.html",
    "revision": "861c01574a97e3dfe4520412fe076584"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "3919760e6b6a459343de65e852da1a5a"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "d2d4465c4610c51b7982e5d956d1baf7"
  },
  {
    "url": "front-end/vue.html",
    "revision": "6116088ac0489d0b3d0954b2688c4dfd"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "82cf1dfefac5086a0c9da2a6ef9c998c"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "05acc395047a773fcada7a6da1880522"
  },
  {
    "url": "guide/index.html",
    "revision": "5300dbe7f7354c8737b5e99ae19fe5dd"
  },
  {
    "url": "guide/test.html",
    "revision": "276e072ec3ccc7d34da4b468f05c366c"
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
    "revision": "c5ad86dc377faabf0bd95891cf56b612"
  },
  {
    "url": "nodejs/index.html",
    "revision": "f10834139508d100e22f5bb2ab38e885"
  },
  {
    "url": "python/base.html",
    "revision": "4eb0ce13589da60c38617ff5f2db9438"
  },
  {
    "url": "python/flask.html",
    "revision": "1870b56dfcbf68ff17625c6020587f8c"
  },
  {
    "url": "python/spider.html",
    "revision": "0c3e60fe35054806e43a29dbb1d13451"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "44b665f137d78a80d5251c1214f4159c"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "d3bfe8875b6c57634dded2f47f544f8c"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "b82b9e41d613d85da8a95ef142fc2014"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "27b069b459631c3bea955792a4025e31"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "ac2ffd725abb60d3cd05d3a57d05a538"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "1092ac5c23e4c2a1f46c45349f346f23"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "287c95ec264b3fd7ecd4816969e58afa"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "6832242ab56ae7dc77b2ee6bef1d4b6d"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "1c3b26706c701e3a720dc180bef2f326"
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
