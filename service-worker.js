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
    "revision": "402972c8289c69541abbe9b6104eb69e"
  },
  {
    "url": "about.html",
    "revision": "84462a4690e8ced68c35b0bdfbf30a94"
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
    "url": "assets/js/11.ed700294.js",
    "revision": "ee2c8749701dd3137af05cef2a5baf99"
  },
  {
    "url": "assets/js/12.f92aadfa.js",
    "revision": "b60a1157f2c8b05807f46e80b455f66f"
  },
  {
    "url": "assets/js/13.2608220a.js",
    "revision": "b374c0aee135f9ea212d7d9562930e95"
  },
  {
    "url": "assets/js/14.0b384cd9.js",
    "revision": "0b398654c7ed6c1958a8a670af6b8c46"
  },
  {
    "url": "assets/js/15.a2ed9e9b.js",
    "revision": "c4b7c94c743db45362611bc262c08a1f"
  },
  {
    "url": "assets/js/16.af64bd3e.js",
    "revision": "f300174d587f5c1f9ca1d6e9762a4a8f"
  },
  {
    "url": "assets/js/17.4a8a45ef.js",
    "revision": "edcfdd58d5686d2df3b53a5accc6e55b"
  },
  {
    "url": "assets/js/18.cdff223c.js",
    "revision": "484139c0197e0e2e10d3465a9b0e7687"
  },
  {
    "url": "assets/js/19.2b10e9f0.js",
    "revision": "9a1e024eb2522eb95f909f6c42004ba9"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.92f47f86.js",
    "revision": "df4057dc4114dd91a3b38ce7451fa865"
  },
  {
    "url": "assets/js/21.024aa2a8.js",
    "revision": "a436ef1d74217aca8c98467d88f0963a"
  },
  {
    "url": "assets/js/22.40645f5e.js",
    "revision": "ab7a8e8d6cfbb84096c0ee6b0e0230de"
  },
  {
    "url": "assets/js/23.1fca34e3.js",
    "revision": "51dd08b945f57ddfa73b832a05d2bb67"
  },
  {
    "url": "assets/js/24.3b2512c1.js",
    "revision": "588708881b97f14d892cf0d9424afdbb"
  },
  {
    "url": "assets/js/25.fed7f780.js",
    "revision": "1a19446be8a9d2676c910494dfe5bc6b"
  },
  {
    "url": "assets/js/26.e19af135.js",
    "revision": "691f3c31a4a565fb9e8199ba3da7ecb0"
  },
  {
    "url": "assets/js/27.8e11a40b.js",
    "revision": "d04539695802dda213354c440ca059d5"
  },
  {
    "url": "assets/js/28.e447a6b0.js",
    "revision": "f2c9e432e215dc4aaec6bb09da256617"
  },
  {
    "url": "assets/js/29.db81f3ba.js",
    "revision": "9da0876bdf98cce54307e4ef2acfd570"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.213fba46.js",
    "revision": "d4cf6a9c312dbe723a20f40b911612d1"
  },
  {
    "url": "assets/js/31.4659a5e1.js",
    "revision": "9100464485f6b60891894f65c08e496d"
  },
  {
    "url": "assets/js/32.1c6ce504.js",
    "revision": "9025dbd1cdaf7856e122ecbf576acbaf"
  },
  {
    "url": "assets/js/33.f08457b5.js",
    "revision": "71c357edc533ca3ff35ac1f34a2101c4"
  },
  {
    "url": "assets/js/34.58e4bfd7.js",
    "revision": "a494579fb056bb535e42cb113a0db5ae"
  },
  {
    "url": "assets/js/35.8cf8ea26.js",
    "revision": "5514c7424f43944643065ecba9563137"
  },
  {
    "url": "assets/js/36.e503ea50.js",
    "revision": "8d8eb6a7d94068caeeded37c93119639"
  },
  {
    "url": "assets/js/37.f135eb5f.js",
    "revision": "7068819a7538b06338382439ab0148e3"
  },
  {
    "url": "assets/js/38.307a9941.js",
    "revision": "cdd3d616da0a0271201adc0101f055e4"
  },
  {
    "url": "assets/js/39.10cbfde9.js",
    "revision": "54ec5f7d266fcc82a1a3f3431cd35e7c"
  },
  {
    "url": "assets/js/4.1913a68e.js",
    "revision": "7eb2704e099fec838e930c9c08fe03ba"
  },
  {
    "url": "assets/js/40.34dea558.js",
    "revision": "5a412a68a2f9c27b52044aa0562b6104"
  },
  {
    "url": "assets/js/5.269ed1bb.js",
    "revision": "af903bf9fa25137b66d87cfab9e5afe9"
  },
  {
    "url": "assets/js/6.673b47bb.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/7.51bb29cc.js",
    "revision": "3145dec975ca2d0b5459a401afd57988"
  },
  {
    "url": "assets/js/8.ac19f09f.js",
    "revision": "008b0639710c982a0986e5fc0281c7cf"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.2814a140.js",
    "revision": "cc6a1bc45f641ca348785ae7af125b3b"
  },
  {
    "url": "frontend/electron.html",
    "revision": "5f70ad96d23bb0f2540d5897d43b846f"
  },
  {
    "url": "frontend/more.html",
    "revision": "90f6641bd9208a29ca2467735363150c"
  },
  {
    "url": "frontend/points.html",
    "revision": "4b39499e5888c6fb81538579bb0f5692"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "a500fc1aed6a5f0fdd5c2c88cba3a86a"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "9dff75198498a688e2d2e779010836ce"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "a21d1ae14ea9953aac651c2a262c2d5c"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "0f1070b29b05183a1cb0b0dc66e4216e"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "994b5528b3278f1d84eaf5c4b847c392"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "27bfa4f02b47fdd9caff2ea84595eff2"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "6641bd02e4a17f47198c0e91a65a5b51"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "0ffdfa5c7e7e073cb78f7957ce7bb79e"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "5184d2f8f759e7658ab3f3790878d08d"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "59347105c0bd3ceb0537ebdd47b91d72"
  },
  {
    "url": "guide.html",
    "revision": "863167db4495ba98eb5498e54fbf970a"
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
    "revision": "c787682312a7d3aa7ba3846d5b5d8933"
  },
  {
    "url": "other/cook.html",
    "revision": "dc9e8da558651e2cda33dd569e205b56"
  },
  {
    "url": "other/countup.html",
    "revision": "358ba25902d97c96305ac491079bcd8d"
  },
  {
    "url": "other/image.html",
    "revision": "b0e5be7d80a3eb545462416c8542001b"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "4c8b4cbe84fe69c3ef454f4035b0ca74"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "518ba1fef5943c6662cec531eb078369"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "dcac5c02136a1001e66ef9a9f1248708"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "662be71bdebd36b29221bcf82ac93064"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "72e4f3125f3e28b6c487a40ca363fbde"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "bc687ce0f79b76214fb6a314e5631a26"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "94091e6630035338c98713041c132a3f"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "d624e5677a9d15a69765d032d4501381"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "e970c618835bdb5baefd5b1383169d7d"
  },
  {
    "url": "todo.html",
    "revision": "f4a8fc5f1febf7c5ae12bc24308b70cd"
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
