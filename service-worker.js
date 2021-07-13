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
    "revision": "474389a0aa5a3f2f383d783afbea2b97"
  },
  {
    "url": "about.html",
    "revision": "14c76827731b6da112860717a6870aed"
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
    "url": "assets/js/18.78579088.js",
    "revision": "4c69b3d8fb2e7f6db7894a929cf2ffc4"
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
    "url": "assets/js/20.dbc3b908.js",
    "revision": "f4fbcaaaace06c54256e530da64d58f6"
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
    "url": "assets/js/27.fbb96a08.js",
    "revision": "3c510ca88182661dae5f6286d5fb4f37"
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
    "url": "assets/js/30.14212edd.js",
    "revision": "3bbbe56e504b6c8f806802e348988d0f"
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
    "url": "assets/js/app.003a3c5d.js",
    "revision": "6ecb06ce65bebf1ed347a621b8db69c1"
  },
  {
    "url": "frontend/electron.html",
    "revision": "5a6ef45184b8c9e3e186d87d52d3189b"
  },
  {
    "url": "frontend/more.html",
    "revision": "d3a1e8880347370f0004a0ef5744e52e"
  },
  {
    "url": "frontend/points.html",
    "revision": "68b21223e67d42003df08ed8b8b45745"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "b9fcbe97272daa558d7825642707981f"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "d0990a7fe88efdaeef2a9df8bc2b6779"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "b279d96399a6b9ee3e76c59f9bc9a6de"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "9e390cf659976a2afee5af8ac8408322"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "3e6ec47ef9cc227d24daa34f38d116d8"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "b0907a0d6ea8ee5aca44f9b903fc9c85"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "1ed463c4d3dd6b7ee27f74496016c01b"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "de61e51aeb683a70baf74060eaad9678"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "7cc93a066da13ae293fbaacdb7cd9ea7"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "67a12fce91e863b499224f3a5c18b712"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "c588765332e4cd1e626940f743b70261"
  },
  {
    "url": "guide.html",
    "revision": "38c00d3d74fe56ce23044b5f1c8b629a"
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
    "revision": "88f36091d52a438a473a374bcba2aec9"
  },
  {
    "url": "other/cook.html",
    "revision": "b25ea8ad9a186a637e7688d4192db280"
  },
  {
    "url": "other/countup.html",
    "revision": "d9efd95d62461bca74e32d2e46ad3d47"
  },
  {
    "url": "other/image.html",
    "revision": "72d1e2504e149ff651a64ebf13518517"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "9063150f12172e8d3ce1f8a639412e6c"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "0a6bd43eadfb5390427e11068d9899c3"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "d95f26724f863764d69b152a6b959015"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "1b36af4ffe0844cae0bbe905a4833999"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "f21bcc83c4bf71435579b7681837d192"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "c7eba27b1df142a9d4ae86111a33f0d9"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "0a87a34f6c7a0d6061e57c0d997c700a"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "b631fb27d913ef92c414aa4579c45219"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "575194ecac01252f766f4c2575e48bc0"
  },
  {
    "url": "todo.html",
    "revision": "6652ecc6803838254ddeafdcbabf5453"
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
