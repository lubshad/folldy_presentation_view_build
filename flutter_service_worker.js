'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0da1fd9f7880689c91748fa6c525e442",
".git/config": "37521b7d084c4b5bee211bf69b44f58a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eb932636f81e9c7ab11d4991f54d9e21",
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
".git/index": "d3d8388ecf3fa6369ee95be362100932",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4dbf7056894f64558ee1a126c3bec5a7",
".git/logs/refs/heads/master": "4dbf7056894f64558ee1a126c3bec5a7",
".git/logs/refs/remotes/origin/master": "fa5b7c9500a3a615bd54842b7ac6a146",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/806bf96a604111b9b4cf25de981f2824a09282": "c1f86b4fd546dfe45202a93f33ea40a9",
".git/objects/07/690fbad32f83d03ae7c03d38c0df397cd7ae1c": "1bc46b9626f65bcde31ec74a8f91a75a",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/0c/be7f84a9712602a69e996d39be79ba81254205": "707e2b014c369d897f26a20ffb946296",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/5baceb1952799d320cc3c5ae5779de8902495d": "1ba857d4e930f9a87f7547fcca10011c",
".git/objects/10/c3cf8958a9219e1eb7f60dc461212630cca65c": "c758c58452c9d070192a58ba44d5e233",
".git/objects/12/17aae43e43ab1260bcb22810245183d8fbf559": "3ce58f195168057bd0b6b23d1843b810",
".git/objects/1e/cb264151141bc28dc8cdc200099c44e1aba543": "4ac577319f49049c6f7596ea2624efb9",
".git/objects/22/b8ccdceac9fd3e45d9fbb2b8192bfaf7f3b043": "3a38f68a5eb854c3cab87f3c7c0a8bad",
".git/objects/23/83205e73b1acbe81e83d769943b938ead0d4b3": "e84c06e3a77d9d4b98659e442f981a2d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/e7fbb8f2c1a12ddfc5b2c583e840943675e1b1": "06980461ff46e4cf3903df3241bfd6bd",
".git/objects/2a/21e5ab355c00a6ca6fc19c21c9bcfb6fd38e46": "ec583eb800b76324803be6e9f00b1b2a",
".git/objects/2d/3fb8c4d595654604aa1eaf19c1b9a68f90bec3": "030eaa45b5918511e7c80d34e216e3c0",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/59c8accd19f1f67c590f356241f5ee25510785": "fb9cb99f15b5580e474c50e475167e78",
".git/objects/32/7b0b19f915eebd17f4e16f5e76d436490a3b5b": "16d35f079ffc2a5d828546dfa70ecd76",
".git/objects/38/2bac88da58f95d7bb7a7fe78cf10c30cd71366": "35c58e85a286b090c8d239d0ba8d1fc3",
".git/objects/3a/2618fad03fdd6ab2d237d698b4e2fb2b78ac66": "345b848212ced5e17f50921ffd99c050",
".git/objects/3a/e70487c7b956264afd3c4959f40911fb1c03db": "ee092d0d0d1dc1b0375ef88fa3236406",
".git/objects/3d/4c71b2ec2238ac0701ac125c45e054e68f9316": "0bdc40a14b05ecf213183bc56c81a4d9",
".git/objects/41/d081b45c1b1af455dbf71fdf7eddc92ff93cb3": "99bd378446600938d5c0bfdb584a464c",
".git/objects/42/a4f0866c74bddd19f3d3e3724a895696cf5871": "2f2c04c0fa1679cf7c801b996d55d3f0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/86c871414d6b2e840fcc424ca9088420cdc61d": "df07630e5e2c93e3aa5649118f9bfe9c",
".git/objects/49/e98bdbd17045dfcd307f5f2ae82506b19ec190": "65bc0e0ce1b8791e0e26aee28e07b225",
".git/objects/4d/c21dbde93110da3ac26d4c1e7694a6cb2bf39f": "fc31971e3b6f2c659246d2a95ecc069c",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/a4add23190d5fadc023c50d6275bf1487d4de3": "f2eefaecd672c2cadd20822fe0337e33",
".git/objects/51/3a6e48bb50b9f826fd66b70f333740cf39496c": "ee30d5cccf3abbda7c4fc21def4ff7b9",
".git/objects/52/41bd7a3dba8edeb5dd1c252ececb6e8a0399f3": "6e5e28e81baa4d633b1be5ff196043bf",
".git/objects/52/467c827cd55d7afb7354167cfa658c1f1415f9": "c99e5df92d7c025dfd72d5491b1c2fda",
".git/objects/53/d72d204eda5aae950d2b02f2c25ec867aeadb0": "39f196bdcbf21cddcc42d4e958f35531",
".git/objects/55/12e0d73cf8fc0cdd0eecbef484f68df31e8caa": "84f750543837a2208d4b20766654f625",
".git/objects/55/8a64769f092e42576b6fe79fe70f7f7798696c": "f437952774b68ccaf005f86d93a6a290",
".git/objects/57/20c70225f87b45bbb3d37652c87a237af4e22c": "87ea72cd5baae4040b0013a51298918d",
".git/objects/58/1807207e95d0deee4118707f5eaf84dbf80ae5": "e066377a7a92c897140e50d6de739b46",
".git/objects/59/3ea62bc91f704a558e66d592a3050d3c5020a5": "847c722a0c1f0358ffd40785313fadce",
".git/objects/61/7d96c0e50c9f25df1e9643e2b6ab6f195e2059": "e8eb30f20487ccbf58875a6e084d01a4",
".git/objects/61/892eb2def0a75c35301cc792aacaf46b3b0821": "575776664d2bf00287a2b57cef105a0d",
".git/objects/65/c0f0ca77b3c33833b1bf915bf43d08f02479d8": "2aa6be08b130bf22b97c3bd2ddf80df9",
".git/objects/69/2f04c32b497d2f596d1a9aeb0a1dbc2f59873b": "645d445ebaab0fd56edeeb28aa321a43",
".git/objects/6b/0e126725c1b9f16a9df1035cd4fa05ca5ca8d4": "ff16364696d02f411502008e67465f0b",
".git/objects/6d/a6d58d6313faa70964ffff76909be7327d221a": "9513611f33779ca4d905593a8a3db736",
".git/objects/70/ee1c0e0c41bf024cbb9c7c9fd62d45cb7d0025": "ebe67628bfb1fe95bc7eab05ee59de61",
".git/objects/71/39e20955c03a71d4b864d502951e6222062bf2": "9fc41ece9478099b04a7d9a4de4c3275",
".git/objects/72/954749085dd198702975df0df77b076c8ed915": "236c6c0f8684a93c56b22460c01ba9e4",
".git/objects/76/70c1926e16ee211a9440081cb76fe01fb7ec92": "a12c62fbf610524e9a08337fc56f7b96",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/2dd2b52820e21546edb13dca19de1ff0f8885b": "4f3f64fb0507f68faed0364200d854c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/0ec35e8fe4383881a95c5dee245843ea1d282b": "9fb4278d2eb414eb361e554c9769d3e6",
".git/objects/84/195cd6a90be38a90a7d2e4e99b1c5b468add76": "305ac0d78d505631f6b0fc66d7846b59",
".git/objects/85/3c0b1ad924ffa23fe94e5f2e3ae06725bf6193": "ecb56d69ca55e6bcd6b3b0cec4135fba",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/dbd1b2c33fa086009ab1858de3525fb3b3ca0d": "f7156f56d40f37e44fdc0852a9aad384",
".git/objects/94/2c3880b4738e90c6b0701a6366541c907e2388": "d7f9f1976eb08f722edf3ae696dede7a",
".git/objects/95/22f2ff19c726d677db477fc6c76dbf3874bb36": "0d79ef0ab25855ef21305a3f482ba12c",
".git/objects/95/7ca3cff92e59c827090f611f6d8e20296f2b3e": "d62f9d68a44c59b7ae673d98ef4ebe88",
".git/objects/95/e5d45a5143ef67c053c468d02eaff85a8cad3f": "73e144349b284330837e9de837b2147b",
".git/objects/97/3ea2a6c599ee9a48de513ef4c59c590bb8b3ee": "9684877f822ea44f6c516c6a4f2e8330",
".git/objects/9b/57b3fa9484056c265d74a1201758aae4d9f214": "2939fb195a5d0667e8bf8c8f4e6810e3",
".git/objects/9c/4c39c14bd4568de26cbbe6f576617734f4ba12": "2b554da9a000d22577a6f79e9bd0091f",
".git/objects/9e/071f3b24bfe7fbaaa46b662d8894071317e98e": "a284b7ec9daa7e17b275c9503ee0ac81",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b0c8f5b3ccdd917b6e7e2b9689336fbbc90d5e": "f08a9d44b3b89f95a272d51539e4bf4a",
".git/objects/a4/55dbaed789f7659c50c20dca87a8d0461d53f2": "9a20494088e891b0186e791f79effebe",
".git/objects/a8/102b2bd1c5567e7a609e117468127d42165357": "c278f106fc9861f0f0d3ab11f25eb4a8",
".git/objects/a9/53c9762f1f3eb538deee94e66710cf731a1d6c": "513c14cb99e265c3ddf80e2beba8dc88",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/6614abfec434e5128f0fea3cf0e182476e4ff3": "7637ad2e9d01d7dd6b8af0e6f50eefe8",
".git/objects/af/149724cd2d28acc566f097597006d92876c53d": "4f0fcff7bf841fedd80fc463e8a0a512",
".git/objects/b0/698cc6875db13142b625426390b1149bb31124": "5d65ce0319ad359a5ed8060a3bc191a8",
".git/objects/b1/549f37ef429b3c7fef11a0df1684d29f57bb66": "d1564f2530978181d80d3ece56008cd8",
".git/objects/b4/015a0faf75ef3ead86266727342910c5b2bc81": "710802eed513d75006f8c615c1c12317",
".git/objects/b4/dcdc15f426ea9f1074eb4704e1caf1f9223012": "ec2c1af071e70bae794140dbe86f279b",
".git/objects/b5/1d2afd4a21790402d6c5bca3ee8608e7ac03f2": "7b1ddf334d03e28bc27b8a65d7b657c6",
".git/objects/b6/83a437f1247efffce4be05c8c4b02b0f8f3565": "39f1aaef38bb9b779a53f3a97d8c2fc9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/248737d04238e1d686e1134652fb96aeb6de89": "90f8901d62a82992c4f4ea2b94a5ef6c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/5e707518137cbed8e2dfab1a5e7377c8de4631": "318cb41173397690c2446268f938c30b",
".git/objects/c1/343c6d840c534095ee442ab6f6282917a43672": "e289a90eab34f2e7905958f0eebc76fa",
".git/objects/c1/e8e9ed5660a3b8aae3517519175ba557fd73de": "ce5aa63bad5b6c97fec7fa004fc2ee6a",
".git/objects/c4/3e6c457ab2fee64361d94107878ac24713d486": "92cf6bf3654a43fda8d4a65aabe3fa95",
".git/objects/c6/9d811e220733bf684d0087530f3c519e17270a": "993524f5df062b71426a887d339d873e",
".git/objects/c8/dcd89da34fcfd5d7a895adc9591999ba6049f9": "7df4056798372b23e2510fc466401ff6",
".git/objects/c9/61cbbc74b419e4fe33a414a69bff7f16506b66": "6518b75316675a01915e3b195e5f7937",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/5e31472a05bbd40c7f508c85379a9e0427a29f": "816c2759560c4aba322038052fb43461",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9d09f5a2e07646ef5156a09d67f29149ba2954": "aec73e98333cbeb471bf4243775a94a6",
".git/objects/d9/976ab9258e88661206169f8e1dc6d58d16887c": "702a817e6fde9b9e2c0a981c03d711d5",
".git/objects/dc/bf4916b56dfece2cfbf407c3a4f5899ccef62e": "51ed832c26657b68612bba593c200c37",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/67feb693125e660480346a1d20f47b490dcbf2": "4772453c252ec0283ff29f25f188a15b",
".git/objects/e3/fa11dd8ec4c2c49cb4998e19114759e050dfcf": "8ba38f39a0543cc3561b77fea5e677e3",
".git/objects/e5/9043fa8ded2633dbc65fe7de49deb5eff569bb": "82e2d3c0b47b9d7ac2aac3004c3e4325",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/96c1a061ebbf86c5ce2e1e20ce013e9d7ba1e5": "a2fb97f4eb20a584a964fc6eec8ec5a1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/fcebdd546331573df71f9993c61d3f91cb6f93": "31641d90337bf497db32dfbc1a82ce61",
".git/objects/f0/0f13c75cca8e655a1f74e502a47a119a2007e6": "9f43c1e237e9aef9567b040f768633be",
".git/objects/f0/33f4d46b8688252b897cdc604d8e372907cd52": "c62aee2a1e893f4fa473bc0cd0a0f195",
".git/objects/f1/046e13aba4cb9d90e270c25c8c81d607a80d61": "6388da0cd0a8067d2935f5574169a583",
".git/objects/f2/dec12682c8cb263ab969f655730d6f6c3622af": "4e2f1d8349e9dcaffe1f564bf34ca404",
".git/objects/f3/5e19310664fe9f74cbddc6f2c41bec316c8dfd": "55980df0921b9aae23768e678759030f",
".git/ORIG_HEAD": "8c7d889d2dc90c6af1a999ee9f0cf5c1",
".git/refs/heads/master": "b4c261ef966a801615e07be60e973871",
".git/refs/remotes/origin/master": "b4c261ef966a801615e07be60e973871",
"assets/AssetManifest.json": "909d329d3315e9a16cd6602c16e8fa50",
"assets/assets/svgs/api_error.svg": "bb38e8f79208c9c9398431c1877ea39a",
"assets/assets/svgs/database_error.svg": "642e552c6efaba48be432f049b3d83a6",
"assets/assets/svgs/network_error.svg": "87f338237308d2e48367308f1382e3e4",
"assets/assets/svgs/session_denied_error.svg": "69ae9954672700ed77c8bc8efe098f3f",
"assets/assets/svgs/unauthorised_error.svg": "29c91bb9d9ebb9babb793de88b209d23",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6d8a48b4cde479f4dd47a239c4b7988e",
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
"index.html": "b8d2e12fb084bfd59a7c292772feda21",
"/": "b8d2e12fb084bfd59a7c292772feda21",
"main.dart.js": "ce2d0df4bb25629b478afe0ced8b9013",
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
