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
    "revision": "bb51fe6fee83ac9deec90f0d7e9ad588"
  },
  {
    "url": "about.html",
    "revision": "60dc1e3229933defe32b90813f15202e"
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
    "url": "assets/js/18.55e52c71.js",
    "revision": "67f810841ba6228e99aa2292368928ac"
  },
  {
    "url": "assets/js/19.8c2ae0f8.js",
    "revision": "2366905d56f8f6d86fd20cb8d6172390"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.2e78ea76.js",
    "revision": "0542ca887a1ad402567e17b629e0bdfb"
  },
  {
    "url": "assets/js/21.a9d60daf.js",
    "revision": "da3c715e81c8219e46546a813a684951"
  },
  {
    "url": "assets/js/22.e723edd8.js",
    "revision": "8ecee5015cc4e59a44803c74a6e837ac"
  },
  {
    "url": "assets/js/23.759ef782.js",
    "revision": "e63470b52436f99c0590763f0f8e316d"
  },
  {
    "url": "assets/js/24.7bf30e83.js",
    "revision": "f515fef0c5102987440056fe074b4fb3"
  },
  {
    "url": "assets/js/25.230690e2.js",
    "revision": "f356abe231cb4ca532a98e91420dfebe"
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
    "url": "assets/js/app.339e238d.js",
    "revision": "03609d34806a2b349130f8c9e5b6d752"
  },
  {
    "url": "frontend/electron.html",
    "revision": "1ad861d1bdbfad2554630796b68c9b50"
  },
  {
    "url": "frontend/more.html",
    "revision": "b510a2cba45274d7fcef1679f683db2b"
  },
  {
    "url": "frontend/points.html",
    "revision": "8983a22cc5a9cf9d09ec28b2ae713763"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "dd430ca034ca4ac417a921dd234235c8"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "3575eafd50751bda0ff8569d25f7eeab"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "c10209be6d5672f1a7423f1f8b736b31"
  },
  {
    "url": "frontend/常用工具/lerna.html",
    "revision": "ee4cded2415c5fd8ac03efdbc09b5b3d"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "5bf8ca3138c228af74e6776ad4665f9b"
  },
  {
    "url": "frontend/常用工具/verdaccio.html",
    "revision": "d846a2f38877ec4ed36ec768fa302969"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "cba8722a0ce857485a07d08dcc150855"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "b5c32f1b649408d5fc282dd4b6ee888d"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "726922ada661de67e479ac7600230ea0"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "e1244ae61aa2c04ba1852879f80f3cbe"
  },
  {
    "url": "guide.html",
    "revision": "896fb581baba0489131cdc291e98ddf2"
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
    "revision": "65457d04e82abad0dd07026ea8f6d3fa"
  },
  {
    "url": "other/cook.html",
    "revision": "18c1143f4c07fda52a337b245250c938"
  },
  {
    "url": "other/countup.html",
    "revision": "7184ee9427665dac277dc15883226a7b"
  },
  {
    "url": "other/image.html",
    "revision": "d6fcf961ddff05f2afee2a674105bcdc"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "38e3857f26e56acfc31de487d71a6c35"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "5280f9f404fdf3a5b5eadf9e42f76449"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "42a2877f7178db0a0c86662dc8b0073a"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "961334b7adfc2771e879cbd956bf1d8c"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "43eaa2bb1f4521d9fdcab04164f566d6"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "db2db219ecdc81f1d18bd8fe25be90bd"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "4a3a0bbcbb6b08e068eeaee5601c0bed"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "18421220a977a843f2bd2abefc300e3b"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "37b84aa5a8f33e6d80fee6c92d72e24f"
  },
  {
    "url": "todo.html",
    "revision": "71325c13bc558e48895fadcc191a94da"
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
