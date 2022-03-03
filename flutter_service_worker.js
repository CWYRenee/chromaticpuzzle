'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "48e17f1f14b93adc496ea9a4ea739f18",
"index.html": "662bfeb8eb5dc1617a4b31b61f5cdd10",
"/": "662bfeb8eb5dc1617a4b31b61f5cdd10",
"main.dart.js": "39f224fc306795f1925335498219d398",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b101b2124903fb9ef93860dcd747ecc5",
".git/config": "a282b5a895b5edb943616ad8477c2276",
".git/objects/0d/e5e7bd29cfdfa1a5b2955203eef119182bb174": "0baf5b8f0725ef45003eefee56a73d6e",
".git/objects/0d/e11456c46ffa066a0fce1828f250dcafe7880b": "08d9d295c2e471e45d157cba4fbb5119",
".git/objects/68/5077888ec565a3a60b3674d102828c978795cf": "4b0abe0e64a4b6a038b3bf3fa9d5745d",
".git/objects/6a/917a0069ea75055ca48b75f14a52edff81b178": "1ecf1bb27ec9c14965f26fec19fbe8bc",
".git/objects/56/613ee8827c7f99f1c88d734fe23c0c5852b209": "dc7303267310810ffd0ff9d1b9e0041c",
".git/objects/56/c23dcf89ef6d77dce3f3acb32f66086949c13c": "8633b806ae89f5b47971168a2afd8056",
".git/objects/0b/030d58b5addd6bd15cb79dbe5795a4ee0b977f": "89d9fa57a772fa2626a96c737ad9c296",
".git/objects/34/4ffc20d5af598b330e7687d8f1dfb0753785e7": "fcf6610b65554481a706ec1081a350ac",
".git/objects/b2/2aee012eb51f850b7ba5b1459156202ef18afd": "24043906e183b75f7d557b4ea314aa92",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/e1629ebe378e185f51192c487cb60fe2b0e34c": "c57a7092b27a534cde8d118376f41713",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/fd1dd09e8c0ca3ae47b0e2683a50374011aa78": "dbc6dc836af25fb77c7724291cfcb378",
".git/objects/fe/b7c5866644ba390f28a9641ef4c84ef35d26e9": "ff99152ac716a50bc57db16cd7b9520c",
".git/objects/1a/9bb1f7eece6365ef7a40c3546f35d6ec5fdfac": "23453135469422c3baea4c37577bde23",
".git/objects/1a/3cdefa8fc93d0a191cdd851e9de612746e287d": "77a7f9353f60f25f524713c173d01ac6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/9c60ba960d0d84b03560fff186665d300bac8b": "033aa5b6d0932a1659db09eb5c44b6f6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/c432affc703a4de0ad136dd5b847402147a1bb": "3c9d06fe71d5defaaa0c5bfc9e1edafa",
".git/objects/5c/adb5889617deb73047508d27e554c7301bab04": "8272d1f84cd57290e4175cc1556e1a79",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/b6/915d02b50c342dc1e5163129ca95c001e6f498": "042523e0e0f3c3be604a24e266ab7ec3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4f63e960b39cda45e65c37f82bb6c8a5e37994": "376accdd1b7351aa2cc71ce77fc3013c",
".git/objects/db/c173d3a7de62922b136b0531468325b2d53a28": "2932fe12d3760c27f75c295e5d1ad9de",
".git/objects/db/21325de5735efb581f7fc46f4e277f7445dee0": "1d73e7dc947337b0f2eaebbb0ab96470",
".git/objects/db/d96f52a1ca1ec78b5b83dbb7b823014fef7c90": "7184951f8ec0da659cdd1521bb4bb6db",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e496ba9988f0a6648c768e1c36a0c42213f83b": "04e702a384cd7718ddaa8bf61ea3ab52",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/30089453627c46086f46bdf613fc002c2d894d": "87048ac8aa1370757f82817953f178af",
".git/objects/fa/908b4d919743e8d5527d4332cf74dc8a287f0f": "94e0344793ac3a606842d8fdbd8859b6",
".git/objects/ff/cbe94aaaa32a6f263bacdbb23d39681c7f9515": "52bfe8eb3dfad066ee6655d499802981",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/b8a666726f0eb1222caf1909a7c45af66e0c2f": "69b347e2f3615627c986ac177ab1f08a",
".git/objects/79/6346a9d9dd6d6e8ccc316cf63e8cff62fb5c37": "f010598abc7ff31c365ecf32f4c723f1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/454327d028e6129682eb97ab0ecf446b7f96fa": "6f98d3b619c98e4ca75d81d3c1176ad8",
".git/objects/24/3c5571173aa37856be7891da9a54b674e6f8bd": "17b883a157a3f3247b0af0796b9724c9",
".git/objects/40/9e0aa2910836947dc89b0fd40f024c5986130e": "8e493dbcf065830858ec01ca38b1e64f",
".git/objects/14/0882ab1113c290abf2f2958ac35157199d2696": "f2c216beee4a5b3d00195310cbbf853d",
".git/objects/8e/a82475f7a288d713eda39d8cdc86288ea5bee1": "1e39a87c800bb29ed22b122e58c0d7b5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fa97975c6f7e77a1b7f3ea5f504b444a",
".git/logs/refs/heads/main": "77efe377793232d7dc3596cf5d903172",
".git/logs/refs/remotes/origin/main": "ac5ce9eef0cb2c58e383d0d384c9ce03",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "67b63f508c96057e7d96769507706dcf",
".git/refs/remotes/origin/main": "67b63f508c96057e7d96769507706dcf",
".git/index": "9b7d85d184496e8d0d3a73a43eaacbaf",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"assets/AssetManifest.json": "a025445d7980c1e294cdbaf42a6b3f26",
"assets/NOTICES": "7319d8db19ae260e712f610f7ef3989a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/audio/a.mp3": "32ed921d4d4b315785acc80996a84e15",
"assets/assets/audio/cChromatic.mp3": "a9045755401ae6d4bad706f8d923bdea",
"assets/assets/audio/startEnd.mp3": "13e460479dc92b0ff1574d35a5204392",
"assets/assets/audio/b.mp3": "a189db28b453e97cad976ec3ab3f7033",
"assets/assets/audio/c.mp3": "dd6fa0a202c776abbb6c6deb1cdee29d",
"assets/assets/audio/dSharp.mp3": "2b67e8996af9401d1f4026e828d152f5",
"assets/assets/audio/g.mp3": "c71a5e6000b56457d6db5311569cca0a",
"assets/assets/audio/f.mp3": "e5e44e923dee288cf12ab2d30c43e3c4",
"assets/assets/audio/d.mp3": "a32bdae845cb2ce2ceb0414bba77fdfb",
"assets/assets/audio/e.mp3": "a69f33ec590dc31d276039d42ed79ef7",
"assets/assets/audio/bSharp.mp3": "05a51909e503a00f3b93062d1f0d1041",
"assets/assets/audio/cSharp.mp3": "eaa5782579d99fae881b2a3b91c51f65",
"assets/assets/audio/shuffle.mp3": "7b257864b73a219a79572b785910e685",
"assets/assets/audio/fSharp.mp3": "669a11cd7b8c29bb0989bd5ab939177a",
"assets/assets/audio/gSharp.mp3": "986a462f5aa0397caabcd8b28b45ef6c",
"assets/assets/audio/highC.mp3": "a80c95b0cfff9bfee5a95fe978b4342e",
"assets/assets/audio/aSharp.mp3": "c05a4b448616384bdadaea848bd50c7f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
