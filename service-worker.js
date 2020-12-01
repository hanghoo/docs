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
    "revision": "6218662f20e1333fae7cd3fd94352d96"
  },
  {
    "url": "about.html",
    "revision": "4b8752b9b6711f23c315d8c94e8838ac"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1f196e67.js",
    "revision": "c48f8512a5ff50b6ec03cf9043466ff3"
  },
  {
    "url": "assets/js/11.54790416.js",
    "revision": "33f151faf44ec3538a6c81b308fcade6"
  },
  {
    "url": "assets/js/12.8618c3ba.js",
    "revision": "0abd55e839d6bf31db015e693e6f21d3"
  },
  {
    "url": "assets/js/13.1d53e731.js",
    "revision": "c2a362f2d7dc4f4d9d71cf2f2540f549"
  },
  {
    "url": "assets/js/14.6cb0e203.js",
    "revision": "3be101d621e615a022e575d65533662f"
  },
  {
    "url": "assets/js/15.be1a6e3a.js",
    "revision": "51136b66ca5d5064b60f791463481247"
  },
  {
    "url": "assets/js/16.5f171db1.js",
    "revision": "e7bb35a4cd79522bacc3dfe1e21a8b5c"
  },
  {
    "url": "assets/js/17.c21530e9.js",
    "revision": "5f6034f096683546d94405f1a89ae188"
  },
  {
    "url": "assets/js/18.5e1c7312.js",
    "revision": "b2738e4c0588dcc9857cdcc1bcb39061"
  },
  {
    "url": "assets/js/19.16281e86.js",
    "revision": "609801122be42016b39bc3fef305545b"
  },
  {
    "url": "assets/js/2.cb800520.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.51a104d2.js",
    "revision": "c85b0c203f0b8b4f1b4c378bca7ac0fe"
  },
  {
    "url": "assets/js/21.56cdda2b.js",
    "revision": "14787cbb93b3ae4d003bb4c715968fcc"
  },
  {
    "url": "assets/js/22.0606b472.js",
    "revision": "4e8f64a41b729e119b04f65517b5270c"
  },
  {
    "url": "assets/js/23.f3f1627e.js",
    "revision": "2d9f491af826002743315d7bc176d5a1"
  },
  {
    "url": "assets/js/24.9f712961.js",
    "revision": "695e7ee8af87f4f36c086d331d14f6c8"
  },
  {
    "url": "assets/js/25.acea32e9.js",
    "revision": "75fef2bc2086c53c37b62b2e34c8a1c4"
  },
  {
    "url": "assets/js/26.8fecd314.js",
    "revision": "ebaf270ced36e396d33e30bc6fe96d79"
  },
  {
    "url": "assets/js/27.84ab5cf7.js",
    "revision": "397c23a1c2c43c5ed8fa3a9ae8356344"
  },
  {
    "url": "assets/js/28.e6c4160a.js",
    "revision": "319abf419c76af3d697d88b98fa2f3c8"
  },
  {
    "url": "assets/js/29.769d7b7e.js",
    "revision": "f5e1994aa3835784fccf483398fc9a1e"
  },
  {
    "url": "assets/js/3.db95efc8.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.866f6b36.js",
    "revision": "c078ed96c78f1b110d2608c88d654ce7"
  },
  {
    "url": "assets/js/31.aac80d2d.js",
    "revision": "7b3e5436e6f2f4249f27da5fc07ceeb9"
  },
  {
    "url": "assets/js/32.aca702fb.js",
    "revision": "8b9ffb37d8cf456fc11d377e7895f3cb"
  },
  {
    "url": "assets/js/33.dcf3007a.js",
    "revision": "a2a7a8bb5b491866b8a2e716fcb141ed"
  },
  {
    "url": "assets/js/34.a99b4899.js",
    "revision": "276bc7c83a2ed497c6b48a5824032bc0"
  },
  {
    "url": "assets/js/4.9410f470.js",
    "revision": "1728bce3b1169de2b2b42ccde5923d96"
  },
  {
    "url": "assets/js/5.3a1bebb4.js",
    "revision": "af903bf9fa25137b66d87cfab9e5afe9"
  },
  {
    "url": "assets/js/6.8f598380.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/7.abe566e1.js",
    "revision": "f881ba0c1c7dd1ef82debae7f90d20f3"
  },
  {
    "url": "assets/js/8.2c3619df.js",
    "revision": "561fbc246e73df3649819950f6f20c6a"
  },
  {
    "url": "assets/js/9.c9b66f67.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.7120ce3c.js",
    "revision": "48f8b9f6168c845ace4dad182175707d"
  },
  {
    "url": "countup.html",
    "revision": "e65c7eb50e093ea0fbb346ede0ef45d2"
  },
  {
    "url": "front-end/微前端.html",
    "revision": "26b80c668652c1e941cdd52f705b5455"
  },
  {
    "url": "front-end/css.html",
    "revision": "207abb77e5cb204eb4772ec9bb7340b5"
  },
  {
    "url": "front-end/electron.html",
    "revision": "89fe006a3ffdf6f7010926e5b81c7012"
  },
  {
    "url": "front-end/es6/array.html",
    "revision": "420cdaf53ef58b5c31591979d6ebdff2"
  },
  {
    "url": "front-end/es6/index.html",
    "revision": "c8598546e486c60d1d98d090484b268f"
  },
  {
    "url": "front-end/flutter.html",
    "revision": "ae2ffae5bf3da2c8b284d7b8373ed40c"
  },
  {
    "url": "front-end/html.html",
    "revision": "51bcc0d93c8e74e0d40b399769c4dd9a"
  },
  {
    "url": "front-end/index.html",
    "revision": "f33fcbf6a817dc575c83d9780424fa33"
  },
  {
    "url": "front-end/javascript.html",
    "revision": "7158b62db0fd3f35c64c0feecbcd5147"
  },
  {
    "url": "front-end/lodash.html",
    "revision": "8295195e03dafce3bf9e119ed884e037"
  },
  {
    "url": "front-end/react.html",
    "revision": "89838cacc0dd7a76a53c9dd44ec03ce6"
  },
  {
    "url": "front-end/typescript.html",
    "revision": "f9a17d48812eb36ef547e2417115f2fa"
  },
  {
    "url": "front-end/vue.html",
    "revision": "9e063e7d22d78a53de27ce3227097240"
  },
  {
    "url": "guide/index.html",
    "revision": "7cccb11bff35b7520cbd07ce1944025c"
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
    "revision": "b03e3aee8cc6a33a88943de0902b78a9"
  },
  {
    "url": "nodejs/index.html",
    "revision": "11cbbba61d227b2069a8b560a99daa92"
  },
  {
    "url": "python/anaconda.html",
    "revision": "327703a4fd3c58e5928d67cd9aba9efa"
  },
  {
    "url": "python/base.html",
    "revision": "e3ab1136c2137a258b373a9751e5917b"
  },
  {
    "url": "python/flask.html",
    "revision": "2183858d97087e730461db1da597a9b1"
  },
  {
    "url": "python/machine-learning.html",
    "revision": "8d75bba7e02f98840d50ecd341399807"
  },
  {
    "url": "python/spider.html",
    "revision": "5d6bcf64f3d90ebb3eb90beddde3dc7d"
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
