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
    "revision": "397d942c7f7c5275596d4bb9ba1ef4ff"
  },
  {
    "url": "about.html",
    "revision": "1bf886144ae6203546ababcdb33fb249"
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
    "url": "assets/js/24.3fa828ee.js",
    "revision": "f62b602e992a50f5520073ac952951d0"
  },
  {
    "url": "assets/js/25.fdb36069.js",
    "revision": "95ab96c528d7e276decc6c40a35cb603"
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
    "url": "assets/js/41.b0334416.js",
    "revision": "ac815a46462d7454007d161c8a3eabf3"
  },
  {
    "url": "assets/js/42.48736ac9.js",
    "revision": "f0114aa0e7b65f84a5408b613f0246a8"
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
    "url": "assets/js/53.36a995a4.js",
    "revision": "bf87031343c96fbcd2cf06e689b0a676"
  },
  {
    "url": "assets/js/54.d4cf834c.js",
    "revision": "5459a7c1d1687d8104be96fe751a026e"
  },
  {
    "url": "assets/js/55.fc219816.js",
    "revision": "83d122c093e02c786db40205e1a66a7b"
  },
  {
    "url": "assets/js/56.747d9388.js",
    "revision": "dcad7787f1e639888df6aba6d2a0b452"
  },
  {
    "url": "assets/js/57.fc3f2977.js",
    "revision": "b1a2564f15327d246b33dda7f1d101a3"
  },
  {
    "url": "assets/js/58.f9a9e0c8.js",
    "revision": "9ec99ad3a57dd899fb70395c27bb4aba"
  },
  {
    "url": "assets/js/59.fcb5c89a.js",
    "revision": "afd2e664899d53a77cf8f1b6188a02a8"
  },
  {
    "url": "assets/js/6.673b47bb.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/60.c95e8302.js",
    "revision": "10482320d9545331409ef39dc44abcfd"
  },
  {
    "url": "assets/js/61.70f0aa3a.js",
    "revision": "7fc2f5455eceea5ee31cc22e352be068"
  },
  {
    "url": "assets/js/62.ae5cc029.js",
    "revision": "f8029ebab33450483e0d18ade0c8eb0f"
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
    "url": "assets/js/app.e65d443c.js",
    "revision": "9bf320a99968f323ea7bee43e4e1aeac"
  },
  {
    "url": "countup.html",
    "revision": "ef6365d5e9cbe73e90cb8956b6b9af61"
  },
  {
    "url": "front-end/css.html",
    "revision": "bdedca9fa8f66f1040f53e2ee7ea3b1e"
  },
  {
    "url": "front-end/electron.html",
    "revision": "74f49182b44d954e6563e5691aed1e46"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "ceaa84f2af3ea05e8b52b7e4a5f182e8"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "d0e745da4f94c79b80e8c10aed36c087"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "1c5d212c87f1959c1925ecdf6b617861"
  },
  {
    "url": "front-end/html.html",
    "revision": "8d298e48d6ee48a7af4e9b5d1d2577ad"
  },
  {
    "url": "front-end/javascript/DOM.html",
    "revision": "887bfad750cd067c36e25a0a5fc0dbd4"
  },
  {
    "url": "front-end/javascript/index.html",
    "revision": "6f586409ef6c9089f01ca13c7fffa96e"
  },
  {
    "url": "front-end/javascript/事件.html",
    "revision": "3dde0499b9e53e0a0734f1b4e844cd48"
  },
  {
    "url": "front-end/javascript/异步操作.html",
    "revision": "fc60b64eb9f74d325f38e4d085939db3"
  },
  {
    "url": "front-end/javascript/数据类型.html",
    "revision": "667697509fa04422bec06b710b3ed61e"
  },
  {
    "url": "front-end/javascript/标准库.html",
    "revision": "068f0a06def153e9749d8b57f5d03556"
  },
  {
    "url": "front-end/javascript/浏览器模型.html",
    "revision": "8470ad1573288a6bd67be91a4edaa24f"
  },
  {
    "url": "front-end/javascript/语法.html",
    "revision": "13e7e5ac21837d7a0a3025b84005bbd9"
  },
  {
    "url": "front-end/javascript/运算符.html",
    "revision": "0675c403c744066235f68e0125c04728"
  },
  {
    "url": "front-end/javascript/面向对象.html",
    "revision": "49bf725cb78c517d41289b1046354c3a"
  },
  {
    "url": "front-end/lodash/Array.html",
    "revision": "28be847bb376373807dc3067ee4fa61d"
  },
  {
    "url": "front-end/lodash/Collection.html",
    "revision": "e04d164862f9c80fb516f07305d20209"
  },
  {
    "url": "front-end/lodash/Date.html",
    "revision": "73bcdeb4a92d448c571297772130ee59"
  },
  {
    "url": "front-end/lodash/Function.html",
    "revision": "ef87c532b48aa463ebb66e56e455745b"
  },
  {
    "url": "front-end/lodash/index.html",
    "revision": "b84d06cf8a4af2ece600b23c9b17bd5d"
  },
  {
    "url": "front-end/lodash/Lang.html",
    "revision": "ddd8f5855637b2117c1a20061c69f81a"
  },
  {
    "url": "front-end/lodash/Math.html",
    "revision": "487c71af943e9726c507137f0f56aa82"
  },
  {
    "url": "front-end/lodash/Methods.html",
    "revision": "8ff756667fff6d03c21634f7dc9fe8b6"
  },
  {
    "url": "front-end/lodash/Number.html",
    "revision": "7267a275e8e9f5d7a395c94b74e43463"
  },
  {
    "url": "front-end/lodash/Object.html",
    "revision": "84e466dd9e7abe6c56ed4ef45cdcbbcb"
  },
  {
    "url": "front-end/lodash/Properties.html",
    "revision": "cbffffbd3247eb3d58cb2c91adbc729b"
  },
  {
    "url": "front-end/lodash/Seq.html",
    "revision": "8be6f4f64a5a74c1e7af556bf39aa062"
  },
  {
    "url": "front-end/lodash/String.html",
    "revision": "70e398fa55428e35bdf2d5671426ca21"
  },
  {
    "url": "front-end/lodash/Util.html",
    "revision": "89895ca61232a015d643cba958879eff"
  },
  {
    "url": "front-end/react.html",
    "revision": "776bb1d91f2cf6304f23d6c5a345b134"
  },
  {
    "url": "front-end/SSR.html",
    "revision": "2aa319c56eeec3eb299e3929376a931f"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "9faeb237d70c9499389a233e7833b52b"
  },
  {
    "url": "front-end/vue.html",
    "revision": "4358033f60c86d0d2a278c4dcd837c25"
  },
  {
    "url": "front-end/webpack4.html",
    "revision": "d5fba022b0695dfba94bd17ffeded99e"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "0d3770cc04250f40047ba267902cb823"
  },
  {
    "url": "guide/index.html",
    "revision": "5dbc36e9c8cb1682b37967f2294726a4"
  },
  {
    "url": "guide/test.html",
    "revision": "25f8af940913f96225765830a5b9fcec"
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
    "revision": "284585e6a402db9b2f6e9f9d37dc7818"
  },
  {
    "url": "nodejs/index.html",
    "revision": "41d251c2e6ccf121e18469ede5729a20"
  },
  {
    "url": "python/base.html",
    "revision": "65286d31ac46356f6cddc24ff2a4bc8b"
  },
  {
    "url": "python/flask.html",
    "revision": "d569e1df6cb98a37a675187b08f0723f"
  },
  {
    "url": "python/spider.html",
    "revision": "fdcfcd3a4b048215c624e955dcf48b55"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "02c4b742cb21ecc9def0e2dece5350c6"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "c9b81f0c2a00aaf0fdbf3b42dac06f0c"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "c593d013b47a2009d0c38e19f3751ef7"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "5215f51483577b3be555e70e84cdc64e"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "a835dd68034671291e470b01b6c1878c"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "ef8f0678d39d2ff89fd408dd93118c9c"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "0362823854c6f628b3b57bc01229195d"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "a742bacc7f7240506d2a44591dae5a8e"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "fccc6888aa3fa88ac6cd8774ae6cb1a0"
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
