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
    "revision": "53690b69cc7d7855f57665f44344ea93"
  },
  {
    "url": "about.html",
    "revision": "c982cf003f8189a4fae22e4de14c45d9"
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
    "url": "assets/js/21.6f601c61.js",
    "revision": "cb2b602711242278be3b4d9364828f11"
  },
  {
    "url": "assets/js/22.0ccbaf26.js",
    "revision": "5840147c70c487dd7366f502e782950c"
  },
  {
    "url": "assets/js/23.5e4a3e1e.js",
    "revision": "f62ad4a6fcebfbaddabdb0218c216a40"
  },
  {
    "url": "assets/js/24.ec9ca814.js",
    "revision": "72b75080778aa95ce4484a2f384feaea"
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
    "url": "assets/js/app.1e9a28f0.js",
    "revision": "09071e313bcd4faebdbb737f0e01022f"
  },
  {
    "url": "frontend/electron.html",
    "revision": "c5e31501ad1992f27b203da83a838eb2"
  },
  {
    "url": "frontend/more.html",
    "revision": "a3b26b9fe87fb820dad778db6c371c06"
  },
  {
    "url": "frontend/points.html",
    "revision": "b02553c10fb8d9f76683724f691694f1"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "68a7eba0d26b71bf534d06aaabe958a5"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "ca4b68c51174b7f9ed332388e51196d6"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "d4ca37047ec578aae3797433d488466e"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "8de6f6a34b79a13f3abe877c8444fa5a"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "446c8f694096f65eb3364a16a0c491b7"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "f48f63bf68494c2f51637a3efdb98953"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "ebc6e903b9eacad2f867f9278edcaf49"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "b667dba488a3e6b5f28306cee700ca8b"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "6f431cd2ae0d69da025a66d9ff16152c"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "f5c0d97284b320e0cd8cfff766cba5bd"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "3d251d593ed567915a3dbcfc106dac15"
  },
  {
    "url": "guide.html",
    "revision": "ca3530c0da732bd4ab67e57d668faa7e"
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
    "revision": "18e00c44144886b688272a216ab46459"
  },
  {
    "url": "other/cook.html",
    "revision": "cccdff76bec1d37c867a32bf9f9f016b"
  },
  {
    "url": "other/countup.html",
    "revision": "5a37eeebd079536d091ea149f094fa7e"
  },
  {
    "url": "other/image.html",
    "revision": "e3660fd56d4878e92f69de051dc6cb99"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "d4d3829a45f8180e86520874598cfa11"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "99313a564c47367ac3000470dfa6136e"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "8db460516a63aa89902c0c61922eee1e"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "8a6e56d375079090fc75b35dc5369ac8"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "220bdb47789dddbb2dd57dd53c56da10"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "d59e270b1337e740edff3c484840b9e8"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "509e791393a41cf2681058f69f857c65"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "c408f804d6cc8cfc87172414df25375b"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "314a25c4e697e46a09ee846a0d372f24"
  },
  {
    "url": "todo.html",
    "revision": "a0e36ea0ddc92f3131aadf7ba8e7e260"
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
