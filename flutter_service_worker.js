'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "02499101ceb8abbef1267819982474c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/14.png": "1542679873af68a608561aefa8af76b2",
"assets/images/15.png": "e2f0dc6052a4bc88ad873a385e579bb3",
"assets/images/16.png": "29f9fb382fee6a1832c4ae00ab079593",
"assets/images/17.png": "9078637c8da87917b537808f1eaa60b3",
"assets/images/18.png": "2beb314aa27c27d3b5bfbb0a1afc915a",
"assets/images/19.png": "4c681685a7715c46541bc95c4a8a7ddf",
"assets/images/20.png": "e6eeeb3f649baa15afc90a33311f54b6",
"assets/images/21.png": "bfa3fc46aaf8e98a490823af05538eb2",
"assets/images/22.png": "c9127ea423415739266e4ca00e7f5beb",
"assets/images/23.png": "338e6fdc78592b1303251356abf7633b",
"assets/images/24.png": "925340913688dd56a025d647d45e40fa",
"assets/images/25.png": "e7b9fc3bb60fd14d0a04621df20bd657",
"assets/images/26.png": "d71cad39e4b6c2dad7ec1b06f2240037",
"assets/images/27.png": "9148ee201c4855a5827c011dafb8d037",
"assets/images/28.png": "6a8498c809b08f70cdecbba0f2eb1bb0",
"assets/images/29.png": "779f4e8557a99fc9c261d2ae3996c846",
"assets/images/agenda.png": "1308a79d640ef90324457034e4f1f92e",
"assets/images/biopsia.png": "f166e937665f59199df3119b61f54d80",
"assets/images/contatti.png": "a0b2ba25871ff35105d00af04e1771f6",
"assets/images/contatti2.png": "a33b013668cf07cb1b9301004a80f24c",
"assets/images/ecografia.png": "014e2f055c8f43d17c97c76da40d4ede",
"assets/images/endoscopia.png": "cc30d49ef01db3f513d5828dde0e5b19",
"assets/images/esperienza.png": "b6fc20fe4c16ce1ed1552348fdfea055",
"assets/images/esperienza2.png": "2f538dac801c3669ef0a30ba5caec51c",
"assets/images/fotocontatti.png": "24ad365c0da3833c59b5164923739885",
"assets/images/FotoHome.png": "530b0d259bcc8c1dc48b9698c55164a3",
"assets/images/holep.png": "107847b17354b2528937b628b3d687e2",
"assets/images/Home.png": "44e141860862814cc3d4cd9af04945a7",
"assets/images/homeimage.png": "64e44d5a95941fa091dae51eb5aded9f",
"assets/images/homeimage2.png": "ca2932dba7952d6f0f1f64a09ecb8209",
"assets/images/homepage2.png": "ff9dce150fe0bb003bc1362474b34cab",
"assets/images/homepage22.png": "3e3871d7a25b802d905910ed017697ae",
"assets/images/iconahome.png": "4b6c76fd9bde1aeb23e0963bede068ef",
"assets/images/instagram.png": "f7a6533639795dce94d111e3ebd83b7a",
"assets/images/linea.png": "e52b926b28a3e9a05d5f19205c8571c8",
"assets/images/miniinvasiva.png": "b24e812d6ee8a108ebd978cf81c99768",
"assets/images/penecurvo.png": "d8960ae23a76a0c492d9686c026ac122",
"assets/images/penecurvo2.png": "dee27083720404f3aafee1aeb9ef3980",
"assets/images/prostatite.png": "17bf25586d6141db390d3ef69dfb984f",
"assets/images/prostatite2.png": "61d5159aea674b8836b03e3197607d36",
"assets/images/rene.png": "97a22acfba89b873817771727638f946",
"assets/images/rezun.png": "bb8da1a9c07dac31db0e0231e904b9c9",
"assets/images/rezun2.png": "c35c5fd6c26d722b3fd4567cb4fed099",
"assets/images/Services%2520(2).png": "2e905c64545954b2d10aa7ae06ae46e2",
"assets/images/Services%2520(3).png": "5005308e094c63c010b2640d98068c46",
"assets/images/Services%2520(4).png": "11b55a6b5a49f86420526772e044f5c2",
"assets/images/Services%2520(5).png": "345f4caba415f0b4282a4ca55023fec7",
"assets/images/Services%2520(6).png": "d48c3b3cdc565f2dae8ca37fe067d6be",
"assets/images/Services%2520(7).png": "99be25f048041ced8403e4d93b58a541",
"assets/images/Services%2520(8).png": "459aac6d32fa04a50674be63d140b676",
"assets/images/Services%2520(9).png": "66710f8b1f4520e94f7dac48168f4729",
"assets/images/Services.png": "44fd50838502f4c4d04b4cdaf67c3c64",
"assets/images/uretroscopia.png": "e68257ba1a7d05d6d5f5c8d6eeee0410",
"assets/images/varicocele.png": "27ea40e2ea225cdd4db4f31bcf4490ad",
"assets/images/varicocele2.png": "5193646e488e0434c7e332bf1caeeab5",
"assets/images/vuota.png": "20d86983c0757d2ad3d5edfbe52d378d",
"assets/images/vuota2.png": "eae3572bdd4b519c25b8673764381ca9",
"assets/images/Who%2520We%2520Are%2520(2).png": "1a46a2d82018ec4552f2814a306e0ce4",
"assets/images/Who%2520We%2520Are%2520(3).png": "6f87aa79e51d3ac8656a4c434cded53d",
"assets/images/Who%2520We%2520Are.png": "624a42471c9d0eff3108ec0a8a33523b",
"assets/NOTICES": "3a78c09e80e78586138597b542b0c7bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "cd7f296067fcc7372a671e1497d8a937",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0f797653f52995c90894ccf6e3fe04e4",
"/": "0f797653f52995c90894ccf6e3fe04e4",
"main.dart.js": "7649a6cddabb300ee64a74f70b698fb4",
"manifest.json": "03a335611cd30df72356af2194ae282f",
"version.json": "fc73884cd5630fd54d5c1953698f8346"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
