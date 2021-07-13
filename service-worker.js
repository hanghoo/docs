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
    "revision": "e9d04f5ec77dd029c2702bac3a28abca"
  },
  {
    "url": "about.html",
    "revision": "fd7b11e5a0240f94a57e09c1b7056394"
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
    "url": "assets/js/14.4ed16264.js",
    "revision": "690f94fde937b1753cd43b016d70404f"
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
    "url": "assets/js/18.74b19ad9.js",
    "revision": "210640cdf0e4b17c7ca267bb890c5a46"
  },
  {
    "url": "assets/js/19.f4fafc14.js",
    "revision": "ae8b2a0a8174c47c836ff4a0a4742192"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.d5297c77.js",
    "revision": "02bc658746fce5592dfe2f6f2ccf6533"
  },
  {
    "url": "assets/js/21.2075ed57.js",
    "revision": "ce411a08631fc634ea5b37a8508a46e3"
  },
  {
    "url": "assets/js/22.463678f9.js",
    "revision": "1acc7127fb9d0edbcd30dbce0d8bc510"
  },
  {
    "url": "assets/js/23.eedb39c9.js",
    "revision": "abdf363ca7feedcec60c8b52e72bac20"
  },
  {
    "url": "assets/js/24.c000be7c.js",
    "revision": "f63ee87d9c6ff30d78593f5a64393834"
  },
  {
    "url": "assets/js/25.caf45bcb.js",
    "revision": "c9ae69e0ec209e03cc3115c7b90454f3"
  },
  {
    "url": "assets/js/26.b80b6397.js",
    "revision": "2b7bfd56d5a4f784c56e88c85df7bc21"
  },
  {
    "url": "assets/js/27.54810ff1.js",
    "revision": "806a361f1b939b584ba7070ef9530b79"
  },
  {
    "url": "assets/js/28.fed26aca.js",
    "revision": "7c1fa045a71a120c9faa4a5799da8ec5"
  },
  {
    "url": "assets/js/29.20a46076.js",
    "revision": "791715b10918e454ffdf8e785a6ec637"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.42299943.js",
    "revision": "183f86e990635a8da42b2617cc44868f"
  },
  {
    "url": "assets/js/31.68e80988.js",
    "revision": "ce8b74b6094eff92f253770548010047"
  },
  {
    "url": "assets/js/32.e5bc5e4e.js",
    "revision": "afde204792cffb7cca58cec2247ed7c7"
  },
  {
    "url": "assets/js/33.08317570.js",
    "revision": "d3b76029f5b1654bd09c23a3cb275ea9"
  },
  {
    "url": "assets/js/34.04465e22.js",
    "revision": "c8d7e81c01e0dfd423abbe64b8df86dd"
  },
  {
    "url": "assets/js/35.664a197f.js",
    "revision": "6140fcf9b2207036033ae5cc0dc0c15d"
  },
  {
    "url": "assets/js/36.70c72671.js",
    "revision": "ea706cd428e923158990fb00afad63b1"
  },
  {
    "url": "assets/js/37.20dba59e.js",
    "revision": "1e18ff191162422322edb3d7a3f74ca9"
  },
  {
    "url": "assets/js/38.e137c732.js",
    "revision": "9aeb4f913a41662732e7af19dda0b0df"
  },
  {
    "url": "assets/js/39.83d6c736.js",
    "revision": "485392dedf232c47fca292d07a6357d3"
  },
  {
    "url": "assets/js/4.b72df220.js",
    "revision": "008c3a1a1b3f00f0102fe90082cd35be"
  },
  {
    "url": "assets/js/40.d7e7bcf7.js",
    "revision": "f988524ffedeefbd1cb9e171a121718e"
  },
  {
    "url": "assets/js/41.743e6cb1.js",
    "revision": "507b995f50efb41257e4eeae793e3a77"
  },
  {
    "url": "assets/js/42.00698349.js",
    "revision": "baa117859ca546dbb03bef1f41db5add"
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
    "url": "assets/js/7.8f38cefa.js",
    "revision": "01243d71a7a4723faff8bf48df45ee84"
  },
  {
    "url": "assets/js/8.ee56721c.js",
    "revision": "1815e5e82a7c796221a804803fd53030"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.5a57c4b6.js",
    "revision": "ca3c9c373f961af86d85d838766a7bef"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "a2f0181a88ed93fd31fa3b1954cef8eb"
  },
  {
    "url": "frontend/electron.html",
    "revision": "709d6b599636b9f8440fc1f75743e819"
  },
  {
    "url": "frontend/more.html",
    "revision": "1731eef41d75c558225096ef8f2f7c42"
  },
  {
    "url": "frontend/points.html",
    "revision": "c77bd0f972d37ec060857f19291abf4c"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "414b7c4790731cd4bc5bfc8a9b9ff163"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "bf3f2ec67422a17857ad8703a5033961"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "067260680d60828ef94682f523b8ce49"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "93108b12568de057e92a2ad73bf8054f"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "bcaf9502b8ba4954a154f39df6e55408"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "0a18ca26e48b4d365eb5f4fdc0053deb"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "b04abbafa523ee8b785f812ac27861e1"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "1c4e220a0d77647c5841e50e0b390058"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "f50b71bf85bcd19a8c531d23d43e2bf4"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "8c733599513166909e99aaab0d51f83e"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "cdf50de8a9a8e460cdbf05eecf7ed573"
  },
  {
    "url": "guide.html",
    "revision": "2bf73fccbb3a1e1287659b3f9fa779fa"
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
    "revision": "5c1208f9ad3ede177f4b601c68baec66"
  },
  {
    "url": "other/cook.html",
    "revision": "debc2685b09032a6ccc98a7c702451dc"
  },
  {
    "url": "other/countup.html",
    "revision": "ad01f1a05af8f6c8160728adba34e417"
  },
  {
    "url": "other/image.html",
    "revision": "04a11080aac8d4ede2de66405fd6aee9"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "17ae0c7f7da8df8a46eaa09ae0fc40ee"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "09321f44553ed73e8b06df902decde70"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "81a0a52d3939313d20af5240a07f19c1"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "a6efed70dae4b4f29ca1a1d460747750"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "4484592174d8dd056e6dcfbea5e3525f"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "ceaaa1cd0824f53a3b8552826488e431"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "23e8168711e8e977e9835672395fd7d1"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "337db63c27ec5ea0ad38d986e1c23f5f"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "7daa77f93a8bf327618e9d2dc9bb91e2"
  },
  {
    "url": "todo.html",
    "revision": "39dfe79359af41d50badc1f25f6683ff"
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
