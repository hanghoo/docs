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
    "revision": "f3a34c15ce84faf947e6a327e48b2bdc"
  },
  {
    "url": "about.html",
    "revision": "372ec8c0edd948c697b2934908032505"
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
    "url": "assets/js/51.e386a2b7.js",
    "revision": "87d094b7a2775bc666fb00479d4952e8"
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
    "url": "assets/js/57.f2bd9073.js",
    "revision": "18d69d44c3aeb7f14a273e7df0de9564"
  },
  {
    "url": "assets/js/58.ee94adb6.js",
    "revision": "58ecc50c980579f9607eb62ee1106b9c"
  },
  {
    "url": "assets/js/59.89d40e2e.js",
    "revision": "f2ac9682c776e753673c790e7d241b6b"
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
    "url": "assets/js/61.79b76106.js",
    "revision": "0c519c123246a787166dde2012555f38"
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
    "url": "assets/js/app.fe63b2b8.js",
    "revision": "24e23f1e1a6e5cfff37bccf0e86f9cf1"
  },
  {
    "url": "countup.html",
    "revision": "33d8ed07e0c52e60cdf9b85733b20c06"
  },
  {
    "url": "front-end/css.html",
    "revision": "11a044fc67430e7d89ccdab41973881d"
  },
  {
    "url": "front-end/electron.html",
    "revision": "6b5b0b5b4cee0119bd3df799291d7e59"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "6eb1a0b1af47d80efb11ac1d5b030deb"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "992df856a395b730d82206c979ba55fe"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "905e27b0101d00726ecc5ff459f262bb"
  },
  {
    "url": "front-end/html.html",
    "revision": "eb714539fbb479d976ae13dcf208cde2"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "48eb1c2dc00ad9dbfca27241dd91c591"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "57e1f64ee881dec2b25581f5a907a17b"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "f3881bd711cc4358e1bb95982bc36055"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "908f3fc8b69846c9280e56dac143672d"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "b5b0a44f3a7bdd9f2ed682927afa4a0f"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "42479849f6d76d54f7ba66f21b82fb72"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "03cb6f995c1ae35ea207b1b10d29ec7b"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "cbcaf3eec752101abe8416a8fdd4e067"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "76fe43f6d8030d919583dee056db4618"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "c3c898ad7aed76f5ad2f13a23c05dd5e"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "1027fb8d824e130f4c11349f366b4e01"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "32413672b7dd08dae4631a2246a09a3e"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "4e1dfdc519276a27e0fd2530eaab8a54"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "52693719238806373ee5b5b4b3592ffc"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "dbae699f1c74911e63abc3e53c4a85d1"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "81dc0375803f3244240fc6a1725d05d3"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "ac4cc286066837368930eba5355a2bc6"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "ba38058f3b40854509d222d53965660f"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "77ebf7047f57fd755c0806faa6daeb16"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "237e4bddb3c73e0623ec11bf0428e5e0"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "59621ab9bbac51a8af13d96239378528"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "a7573f6911459edb5fd87771118bdab5"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "a3403b795310e60d94e7afd990a6dd25"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "0c42d90476fccc49cfb8280dbc212fac"
  },
  {
    "url": "front-end/react.html",
    "revision": "2eb3e6fb81dc9202eac1d0d7b7783008"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "44321b144a0cd7219fb5daf5536b7742"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "98d664549dd88122e640432d82cd2d95"
  },
  {
    "url": "front-end/vue.html",
    "revision": "c2abd0d34e63d5faeda8ab46f2b5b870"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "1ae842c043511dcd8aa902723a6611c1"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "e25575e5b52958b49a2c4c3012d80fb2"
  },
  {
    "url": "guide/index.html",
    "revision": "b42e40aa14aeb53310e341cac2ab9533"
  },
  {
    "url": "guide/test.html",
    "revision": "f683b722606dd9ce92e01bb3eba92f32"
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
    "revision": "9d4425a5c78383e7da7368b837460ceb"
  },
  {
    "url": "life/cook.html",
    "revision": "5118c67a0af2c9f2725f5c6e801b27cc"
  },
  {
    "url": "nodejs/index.html",
    "revision": "6c038975fe3b163becd2fc3f9ea250de"
  },
  {
    "url": "python/base.html",
    "revision": "f145c79f0c3b34292e1b18e56fcedcf8"
  },
  {
    "url": "python/flask.html",
    "revision": "2ecad649f30f112486cd5f0999515d6d"
  },
  {
    "url": "python/spider.html",
    "revision": "033db41baa6fe3cf50428644ce26f4f1"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "94d962a5d0183e33f1ee74833396528f"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "cb07dff16fa76ff438933ee454ba263e"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "cdecba17bec4425984b6b2189368ecd9"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "5237ca1b625b42e0cf41ddc565e3b3d1"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "d5b1fcbed4bbe9f352b75cf6214b3f92"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "afd6b85dcf877177dc4dbf9e88c12cab"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "9bb19e4fe64ec580ae2eea7519cbdd1b"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "d707abd9c316b1d98794bdae20782298"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "97203ee1fed71643b8bde48caa019e62"
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
