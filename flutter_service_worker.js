'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f264fd4fa1df2e62e410508a695062da",
".git/config": "37521b7d084c4b5bee211bf69b44f58a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0a84d92de98917c3341c97e2edbc34b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18947c8f271344be310851bf6f541f68",
".git/logs/refs/heads/master": "18947c8f271344be310851bf6f541f68",
".git/logs/refs/remotes/origin/master": "e8ceb84feaded11b0c42a3f108a3f27a",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/806bf96a604111b9b4cf25de981f2824a09282": "c1f86b4fd546dfe45202a93f33ea40a9",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/12/17aae43e43ab1260bcb22810245183d8fbf559": "3ce58f195168057bd0b6b23d1843b810",
".git/objects/1e/cb264151141bc28dc8cdc200099c44e1aba543": "4ac577319f49049c6f7596ea2624efb9",
".git/objects/23/83205e73b1acbe81e83d769943b938ead0d4b3": "e84c06e3a77d9d4b98659e442f981a2d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/e7fbb8f2c1a12ddfc5b2c583e840943675e1b1": "06980461ff46e4cf3903df3241bfd6bd",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/7b0b19f915eebd17f4e16f5e76d436490a3b5b": "16d35f079ffc2a5d828546dfa70ecd76",
".git/objects/3a/e70487c7b956264afd3c4959f40911fb1c03db": "ee092d0d0d1dc1b0375ef88fa3236406",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/55/8a64769f092e42576b6fe79fe70f7f7798696c": "f437952774b68ccaf005f86d93a6a290",
".git/objects/61/7d96c0e50c9f25df1e9643e2b6ab6f195e2059": "e8eb30f20487ccbf58875a6e084d01a4",
".git/objects/61/892eb2def0a75c35301cc792aacaf46b3b0821": "575776664d2bf00287a2b57cef105a0d",
".git/objects/69/2f04c32b497d2f596d1a9aeb0a1dbc2f59873b": "645d445ebaab0fd56edeeb28aa321a43",
".git/objects/71/39e20955c03a71d4b864d502951e6222062bf2": "9fc41ece9478099b04a7d9a4de4c3275",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/2dd2b52820e21546edb13dca19de1ff0f8885b": "4f3f64fb0507f68faed0364200d854c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/3c0b1ad924ffa23fe94e5f2e3ae06725bf6193": "ecb56d69ca55e6bcd6b3b0cec4135fba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/dbd1b2c33fa086009ab1858de3525fb3b3ca0d": "f7156f56d40f37e44fdc0852a9aad384",
".git/objects/94/2c3880b4738e90c6b0701a6366541c907e2388": "d7f9f1976eb08f722edf3ae696dede7a",
".git/objects/9b/57b3fa9484056c265d74a1201758aae4d9f214": "2939fb195a5d0667e8bf8c8f4e6810e3",
".git/objects/9c/4c39c14bd4568de26cbbe6f576617734f4ba12": "2b554da9a000d22577a6f79e9bd0091f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b0c8f5b3ccdd917b6e7e2b9689336fbbc90d5e": "f08a9d44b3b89f95a272d51539e4bf4a",
".git/objects/a4/55dbaed789f7659c50c20dca87a8d0461d53f2": "9a20494088e891b0186e791f79effebe",
".git/objects/a9/53c9762f1f3eb538deee94e66710cf731a1d6c": "513c14cb99e265c3ddf80e2beba8dc88",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/1d2afd4a21790402d6c5bca3ee8608e7ac03f2": "7b1ddf334d03e28bc27b8a65d7b657c6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/e8e9ed5660a3b8aae3517519175ba557fd73de": "ce5aa63bad5b6c97fec7fa004fc2ee6a",
".git/objects/c4/3e6c457ab2fee64361d94107878ac24713d486": "92cf6bf3654a43fda8d4a65aabe3fa95",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/5e31472a05bbd40c7f508c85379a9e0427a29f": "816c2759560c4aba322038052fb43461",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9d09f5a2e07646ef5156a09d67f29149ba2954": "aec73e98333cbeb471bf4243775a94a6",
".git/objects/dc/bf4916b56dfece2cfbf407c3a4f5899ccef62e": "51ed832c26657b68612bba593c200c37",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/fcebdd546331573df71f9993c61d3f91cb6f93": "31641d90337bf497db32dfbc1a82ce61",
".git/objects/f0/0f13c75cca8e655a1f74e502a47a119a2007e6": "9f43c1e237e9aef9567b040f768633be",
".git/objects/f2/dec12682c8cb263ab969f655730d6f6c3622af": "4e2f1d8349e9dcaffe1f564bf34ca404",
".git/refs/heads/master": "dc4f0963ed951294748648f5aa5aabb7",
".git/refs/remotes/origin/master": "dc4f0963ed951294748648f5aa5aabb7",
"assets/AssetManifest.json": "909d329d3315e9a16cd6602c16e8fa50",
"assets/assets/svgs/api_error.svg": "bb38e8f79208c9c9398431c1877ea39a",
"assets/assets/svgs/database_error.svg": "642e552c6efaba48be432f049b3d83a6",
"assets/assets/svgs/network_error.svg": "87f338237308d2e48367308f1382e3e4",
"assets/assets/svgs/session_denied_error.svg": "69ae9954672700ed77c8bc8efe098f3f",
"assets/assets/svgs/unauthorised_error.svg": "29c91bb9d9ebb9babb793de88b209d23",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7f3e9e0ee6d42381cd693d936e767c25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "29e86d3778db4388cf6aa63d3d9a18ea",
"/": "29e86d3778db4388cf6aa63d3d9a18ea",
"main.dart.js": "8db62330dd959b16057ccfa455193aa3",
"manifest.json": "b2f218ed3b7e743458b927812f024686",
"version.json": "e69a71a67fc30a0f6f0620792dcf7850"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
