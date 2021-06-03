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
    "revision": "f2a332464df7a5c92aa97c0d481e9588"
  },
  {
    "url": "about.html",
    "revision": "5ae77d43cd3a45769d1a1b8f07b40d49"
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
    "url": "assets/js/13.df953930.js",
    "revision": "4eb38dd80d19ca8de9facd1c5da6f494"
  },
  {
    "url": "assets/js/14.4ed16264.js",
    "revision": "690f94fde937b1753cd43b016d70404f"
  },
  {
    "url": "assets/js/15.b4653c5f.js",
    "revision": "917deae36cf3246448f63d034657413f"
  },
  {
    "url": "assets/js/16.f8c74308.js",
    "revision": "21d5c275962edf131c6e0736b4a9fd63"
  },
  {
    "url": "assets/js/17.7fab13be.js",
    "revision": "fd1f134cf48cc3831be1f8aa520ec17a"
  },
  {
    "url": "assets/js/18.58c0f329.js",
    "revision": "c6111be6b4034b8e5e3a8d7a334cac21"
  },
  {
    "url": "assets/js/19.39f539bc.js",
    "revision": "d814ae3a63f6396156d6a1ccbccd1712"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.fbb3fe11.js",
    "revision": "b53a767eb465f3a63f28e62b5024ad59"
  },
  {
    "url": "assets/js/21.802345bd.js",
    "revision": "45e4c3dbe7ca6f26d75aa20ac98168d2"
  },
  {
    "url": "assets/js/22.143fbdd6.js",
    "revision": "7bad821f6fe0e5da4e95ecc58173612a"
  },
  {
    "url": "assets/js/23.ac1a611f.js",
    "revision": "13e930f15a0fdd33eccfd5cef0ae17c2"
  },
  {
    "url": "assets/js/24.6356d633.js",
    "revision": "deb0f03cf806341e85180ab3823ff69c"
  },
  {
    "url": "assets/js/25.d574966d.js",
    "revision": "88d4ab54431244c54bb844d12db34a5e"
  },
  {
    "url": "assets/js/26.c7805fe1.js",
    "revision": "49e38113eb3d317fae1b07afe926dccc"
  },
  {
    "url": "assets/js/27.c6d4f2ac.js",
    "revision": "d11260e80eab494d0840d5bde3ab2f99"
  },
  {
    "url": "assets/js/28.4666d18f.js",
    "revision": "b92da04b50bfcbe3b2fa153ca7a5b9ff"
  },
  {
    "url": "assets/js/29.26122e53.js",
    "revision": "abeccf6e07ce0e7daec398a472e0e47b"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.4b3a2bd4.js",
    "revision": "5767116bfa95888c2b47eae77b2ef91b"
  },
  {
    "url": "assets/js/31.b84c040c.js",
    "revision": "cbd6a50ae533a4ba5e2f21dc09a8d8ef"
  },
  {
    "url": "assets/js/32.e53bbc57.js",
    "revision": "afde204792cffb7cca58cec2247ed7c7"
  },
  {
    "url": "assets/js/33.0692e19b.js",
    "revision": "d3b76029f5b1654bd09c23a3cb275ea9"
  },
  {
    "url": "assets/js/34.bcc898a9.js",
    "revision": "20309a87bce8f10236e805e1ed53f476"
  },
  {
    "url": "assets/js/35.23752e67.js",
    "revision": "a52d093f86ea64a30ac103ec72373b06"
  },
  {
    "url": "assets/js/36.7331cecb.js",
    "revision": "0bc6b2abcac4a5a07d21db49110d42c6"
  },
  {
    "url": "assets/js/4.08b1e0a1.js",
    "revision": "33c500e9dba5d57750f0f1424d9cc8f5"
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
    "url": "assets/js/7.0ec23cac.js",
    "revision": "4ae544064e34e3b23d986d74155a16de"
  },
  {
    "url": "assets/js/8.94cb95cf.js",
    "revision": "4551792c5acaab98557f45aaedcb2700"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.d68fe200.js",
    "revision": "c996532cda6a0c73d50f93d0fabd3e4e"
  },
  {
    "url": "frontend/electron.html",
    "revision": "6ae553cc60c407d8a8470a4544549af7"
  },
  {
    "url": "frontend/more.html",
    "revision": "755bbfaba5ee574a5e9f4ed4b756dec8"
  },
  {
    "url": "frontend/NPM+Yarn.html",
    "revision": "4d45b9ee2bce6f52653c0849131d99c3"
  },
  {
    "url": "frontend/points.html",
    "revision": "1c92ea20ea910d24b093c17f2ab44cec"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "618d03f774e5c2a1de392212b4ec9377"
  },
  {
    "url": "frontend/TS+Vue3.html",
    "revision": "afc28ff0c1e60f5a8cd6f8957c7b406b"
  },
  {
    "url": "frontend/verdaccio+lerna.html",
    "revision": "74c9715f022394c48cd93354d9fecbe4"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "8f4c11cea66869fbefc852c91a2350e6"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "2044e4f118f57d2ce6b251e45201575e"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "fe6228fb224c080b5d8252891fb8f735"
  },
  {
    "url": "guide.html",
    "revision": "00bd7ed6a84fbc71ae8d6e18167757cd"
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
    "revision": "9e1d9e3abf34d88c26a5d1b5bf290f06"
  },
  {
    "url": "other/cook.html",
    "revision": "b72e7caf0193e991c0f80aa549975906"
  },
  {
    "url": "other/countup.html",
    "revision": "739f0de81c6ee8a14e835ec3ca7af628"
  },
  {
    "url": "other/image.html",
    "revision": "e482946922057b3362a8e753f6b006a5"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "4c80333986ec4dd8d50645adab0dda1c"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "13234a12143711e9f3d37444bf4d0212"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "474bbe58d13e016352b9fbe5fc79bdab"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "15ce72ab161b6b233ad2460d8f9fb64e"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "8b1ddfa348c1b2f9d0e3463ea2362f47"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "8f9fd228bd477543d1de2ac10ed0ef09"
  },
  {
    "url": "python/管理包/anaconda.html",
    "revision": "99e58523024fc5d864667bb17b241c22"
  },
  {
    "url": "python/管理包/pip.html",
    "revision": "a8a2be182ea2adf0097201434f470896"
  },
  {
    "url": "todo.html",
    "revision": "b90ec8eb55f6f6639a47e891160433fe"
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
