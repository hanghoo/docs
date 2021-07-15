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
    "revision": "1217cec727a5b3ef4c099ed4b5185b27"
  },
  {
    "url": "about.html",
    "revision": "f266aaa9eafd83b1bb796aa245f030d3"
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
    "url": "assets/js/13.68d822bc.js",
    "revision": "54e73250d116b5fd692132de072d8796"
  },
  {
    "url": "assets/js/14.7c344161.js",
    "revision": "6b70b75d16a5b056491c68a27fbaa3fa"
  },
  {
    "url": "assets/js/15.d6f50176.js",
    "revision": "66df8942a790a65b6b4fbb2ff5406edd"
  },
  {
    "url": "assets/js/16.f8c74308.js",
    "revision": "21d5c275962edf131c6e0736b4a9fd63"
  },
  {
    "url": "assets/js/17.117d8a21.js",
    "revision": "b67fee5cf6d2dbc048ea2c78d1d904c8"
  },
  {
    "url": "assets/js/18.58c0f329.js",
    "revision": "c6111be6b4034b8e5e3a8d7a334cac21"
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
    "url": "assets/js/20.0f0cd20e.js",
    "revision": "d1a693e8f6dd20dc11b2753f4b944077"
  },
  {
    "url": "assets/js/21.50785dc2.js",
    "revision": "0624b493f24600a494133af9945d9b2a"
  },
  {
    "url": "assets/js/22.34e49197.js",
    "revision": "4cae8deb890edcbee565a6c6ac0b918f"
  },
  {
    "url": "assets/js/23.4f5bb32b.js",
    "revision": "97d98e79f76598c4bd996e8ed4824018"
  },
  {
    "url": "assets/js/24.111d3e3e.js",
    "revision": "31b609f37af22833625b983ec235024c"
  },
  {
    "url": "assets/js/25.e4e777b1.js",
    "revision": "5d57177358223ddf53a9f666a842cce0"
  },
  {
    "url": "assets/js/26.a3276ffc.js",
    "revision": "661ec3011fb647bde8da2bc6bf0196bc"
  },
  {
    "url": "assets/js/27.8d15bec0.js",
    "revision": "851143ef23471ed17371ebbeb086b0c4"
  },
  {
    "url": "assets/js/28.2e982447.js",
    "revision": "202f15a8acea63cf07df4b2b656b0931"
  },
  {
    "url": "assets/js/29.e82cbd6a.js",
    "revision": "3e89939ea1413aa53d208a48777ef7cf"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.9a840cb1.js",
    "revision": "c949b52d8515ed2c904144e67b4206ba"
  },
  {
    "url": "assets/js/31.04ed04db.js",
    "revision": "e3e1de14ba47306a5e2558a2147da118"
  },
  {
    "url": "assets/js/32.648d8880.js",
    "revision": "307c7fd5d7c711e87df8f5998dc86503"
  },
  {
    "url": "assets/js/33.b003e3bd.js",
    "revision": "e605026150c9236960db5cdd3a44cd83"
  },
  {
    "url": "assets/js/34.6e3b7926.js",
    "revision": "9485cef6b1db032cbc9074e3a1104505"
  },
  {
    "url": "assets/js/35.bf9113c1.js",
    "revision": "907326a8039fae910293b9cd2b01bb81"
  },
  {
    "url": "assets/js/36.00c9a477.js",
    "revision": "74351355853f716e92a4e7b96e656e40"
  },
  {
    "url": "assets/js/37.c0f768b8.js",
    "revision": "ef70edb22bcbee8c88a33a99dc7717db"
  },
  {
    "url": "assets/js/38.17f25934.js",
    "revision": "5af65a9594c5fc5760ac9600fad8f72a"
  },
  {
    "url": "assets/js/39.80d30e7d.js",
    "revision": "2223d09f46eb1ccca1bafd2e73cee6b2"
  },
  {
    "url": "assets/js/4.4a3a3d1e.js",
    "revision": "0256260969a46c455b43fd8650e1fa61"
  },
  {
    "url": "assets/js/40.18531f34.js",
    "revision": "aab05ec7e81817b3ab30e60b32a1bb22"
  },
  {
    "url": "assets/js/41.005eccfb.js",
    "revision": "95b8afa5d2d0e40bbe25e2b410fe4c7b"
  },
  {
    "url": "assets/js/42.58a7b570.js",
    "revision": "0fc64ce8b44b8a1304b02cee3e5be710"
  },
  {
    "url": "assets/js/43.a36445a0.js",
    "revision": "f6d7cc2ffb5bcd8d7be7df349e859433"
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
    "url": "assets/js/7.f7101052.js",
    "revision": "41b728cce1c1278f991a26cda4084de7"
  },
  {
    "url": "assets/js/8.ad8218ac.js",
    "revision": "748c2e825108a60050b3929003d4c1a2"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.34b0ec00.js",
    "revision": "384597ebf522036a1672a81f5cddb317"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "1fa5666481ab1e1e5996c35a2267694f"
  },
  {
    "url": "english/zero.html",
    "revision": "6d802b0bde22ebb08745765fdee8a772"
  },
  {
    "url": "frontend/electron.html",
    "revision": "f922b3416cd47749eca92aa81c7b6d97"
  },
  {
    "url": "frontend/more.html",
    "revision": "27868b8407bfa88dfc90902ea67c6dee"
  },
  {
    "url": "frontend/points.html",
    "revision": "1286dc1f12217cb50c4ecc9acbe64f48"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "9048ddd8e9844cb34a4326805b7a4771"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "969038b5358153a0176318464af2f76a"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "0c942fd3f4ddf1763b87d42549ddd27b"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "67c42b1e53e4ff750d692aae6f90e982"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "bb03c0ad9dbb12e580ce8ae9bb5c97f6"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "750eb3fd719a91a5fad8165c579753a1"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "a7bdb3df4d03a5b0e053383426d18765"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "c5625b36c32380180686845f76a35cb6"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "ec6dcc9e6233bc198d3013761530af36"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "d747b4a700fd6b18b9418ad3bb541ace"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "14fbbbb8b33e8d23daefbb01d1d9f47f"
  },
  {
    "url": "guide.html",
    "revision": "43914386de6362e3110b175a1402137f"
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
    "revision": "4d552e5692dbe2b244da5a23ad218604"
  },
  {
    "url": "other/cook.html",
    "revision": "33111a679a1a3608a872d4a48892d60a"
  },
  {
    "url": "other/countup.html",
    "revision": "2d5b973d6a7c94a32e3961ecb4ab6788"
  },
  {
    "url": "other/image.html",
    "revision": "aa10f5c2e09368d42363f7c81f9eda80"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "708a45647155394a0f4f419639033b06"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "eae1265ab0306a2bbd1c2e9e64c7c164"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "e795cc0653e85c8d0972e7fbc8914b6c"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "e18e62d174e825bf756d6c405c177440"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "1d5cf87b7ad55e91517d594791f31bb4"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "eb37a37b9265ab3b86de2f415b47b548"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "ac8352f3fd63f18a843f594c3742d5b9"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "af1a882b1aa8a6bd060afa905362b127"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "6fdc97c3c9258345e16940d3bfcf7dfd"
  },
  {
    "url": "todo.html",
    "revision": "803af431b2af5a4880226b0e8bdb8951"
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
