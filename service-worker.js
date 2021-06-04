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
    "revision": "db7d058ba73c08022ec4e17a310a9032"
  },
  {
    "url": "about.html",
    "revision": "70ca99244f42db7f8a191eb1bfc86bb2"
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
    "url": "assets/js/14.e51ea773.js",
    "revision": "91125100f0c88bba2d9e8642267c7366"
  },
  {
    "url": "assets/js/15.f42fc753.js",
    "revision": "dd9ea92615a461edca830b07f4dcd072"
  },
  {
    "url": "assets/js/16.5b1463b3.js",
    "revision": "ed857aa1106bf58ddb518e0c255fe0bc"
  },
  {
    "url": "assets/js/17.dd562426.js",
    "revision": "c443e7dc6c27366ae1578720b6a10cb6"
  },
  {
    "url": "assets/js/18.06404be6.js",
    "revision": "d91a56fe2505510650126b959fa682c2"
  },
  {
    "url": "assets/js/19.e2acce51.js",
    "revision": "3afc1b186731da5eb2c6d168361ce0c9"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.81324f08.js",
    "revision": "7d547198537a4c331fd8d41ac2c1ded5"
  },
  {
    "url": "assets/js/21.a63f0a8d.js",
    "revision": "4a9e76c45abf0bfcb751fe0a7c86015e"
  },
  {
    "url": "assets/js/22.a4a0372b.js",
    "revision": "f265262ce4f0c816eb081402b75aeaaf"
  },
  {
    "url": "assets/js/23.2159a9b5.js",
    "revision": "70df8ee2656c89dba34581bc1bb6e1bd"
  },
  {
    "url": "assets/js/24.83272711.js",
    "revision": "88813c66b49cd726ea92b291948eb132"
  },
  {
    "url": "assets/js/25.93989152.js",
    "revision": "fb021dfa95e88c1e89be1211e9d809e9"
  },
  {
    "url": "assets/js/26.5e224963.js",
    "revision": "8f77c6210841414e797c432366f041aa"
  },
  {
    "url": "assets/js/27.8ff30c78.js",
    "revision": "f4f25ea64dae1ef6b7a8b83f02317956"
  },
  {
    "url": "assets/js/28.6b2140f5.js",
    "revision": "692e8a66c1e36b6a5a9e8c1d99a9d495"
  },
  {
    "url": "assets/js/29.4577a828.js",
    "revision": "bf48daadc3316b6c205a012ad056f4aa"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.fb6effec.js",
    "revision": "5865b9596f6bf687ea667b9d38afefa8"
  },
  {
    "url": "assets/js/31.3bb770c2.js",
    "revision": "7a9b37130f066d2dd92a9a707a4be4eb"
  },
  {
    "url": "assets/js/32.7500d3ad.js",
    "revision": "dbb43c7acfbcda58616f6c6e734a37c2"
  },
  {
    "url": "assets/js/33.ba8f4f48.js",
    "revision": "7ad26ab27884d306bd496f31db142d3d"
  },
  {
    "url": "assets/js/34.6dcb4009.js",
    "revision": "7ac0df23e44759aae6a70617b085d04f"
  },
  {
    "url": "assets/js/35.d0415494.js",
    "revision": "61b0dd0e2a241ec0bd92c2126f20c0f1"
  },
  {
    "url": "assets/js/36.a8af3bba.js",
    "revision": "422071809ab23151ce9ac27665434f3c"
  },
  {
    "url": "assets/js/37.0875bf19.js",
    "revision": "920a52b5bf466ba78739504554e05ff1"
  },
  {
    "url": "assets/js/38.b670f88d.js",
    "revision": "57d88ed92a04863752e441099e8d2a2b"
  },
  {
    "url": "assets/js/39.b7d4a767.js",
    "revision": "b52199b709e13d3042c39e1a7d9d9020"
  },
  {
    "url": "assets/js/4.8b27dca4.js",
    "revision": "1ec40821d93e9ebb98acffd92626dacd"
  },
  {
    "url": "assets/js/40.8c2be244.js",
    "revision": "27c0b8d4bf70ce346a1797e81bb27b54"
  },
  {
    "url": "assets/js/41.f34bb9f0.js",
    "revision": "d6c43e43f765de5a5f73e37820f3b792"
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
    "url": "assets/js/7.0443fa4a.js",
    "revision": "9e69e2fe43867cb0c9ea93333607ffe8"
  },
  {
    "url": "assets/js/8.9642c1a5.js",
    "revision": "f84b3154886615696965e41040d25ab1"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.b31fab43.js",
    "revision": "296ad78e2bcfecaf68fe48fb30f3344c"
  },
  {
    "url": "frontend/electron.html",
    "revision": "4c6846227d8715069776194d542fa81c"
  },
  {
    "url": "frontend/more.html",
    "revision": "61881fa282057df1f3cc01beadab6196"
  },
  {
    "url": "frontend/points.html",
    "revision": "1531d057fbd52322d3f509d1da7034fb"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "839fde47867b7f0134c4e76c093841ac"
  },
  {
    "url": "frontend/TS+Vue3.html",
    "revision": "cf2abf9837b7851cdf696ced6ad40476"
  },
  {
    "url": "frontend/verdaccio+lerna.html",
    "revision": "2d1f7717457f4cbe36391ef40e8b63d8"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "d75fe58d09811442afeb98dde92b705a"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "337c2c3ec735b5e699c29ccfcea440e4"
  },
  {
    "url": "frontend/常用工具/lerna.html",
    "revision": "145561322adf8151bad562c928fc55b6"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "5b089eb934d06b8032955d3171185721"
  },
  {
    "url": "frontend/常用工具/verdaccio.html",
    "revision": "90073f5709f72e807328a33b10dadeca"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "653fd72cb2df02ba25fd013f9722876d"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "225e2b720db90447ad4f475c76f5c075"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "7b91c7a03a208e41d0329a32207d52c8"
  },
  {
    "url": "guide.html",
    "revision": "8337832b5e043a2529a48542a79c3b76"
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
    "revision": "3fa31b4e6df936e065ceaeb209834867"
  },
  {
    "url": "other/cook.html",
    "revision": "abed4059553456c719cb72a53807bc24"
  },
  {
    "url": "other/countup.html",
    "revision": "e7f72947635b2c70b0d4a236522db9d6"
  },
  {
    "url": "other/image.html",
    "revision": "86f12d72c9824b82e6799cbbfc015f16"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "870cbe941e5f2a7259f1fff1dd50053e"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "3c7e999fe02d18669328841edbb59f52"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "d58403b8307ce9dd21102c86f6aef43b"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "e338d7c20b221c640fc5c6a51b731654"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "6928c8289fe1b1c18518ac9c58b56fd6"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "4671eb03506c42859c93302e28fd6785"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "feb8bfefc87b399a18ecc821075e3881"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "6ad0239aebcc5032193c04ba53bf7b0c"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "3370bced228e48bc4b172b775d5e620c"
  },
  {
    "url": "todo.html",
    "revision": "2331bcb4d9a9add0624edbbbd5e555f7"
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
