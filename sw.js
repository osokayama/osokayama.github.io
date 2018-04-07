const CACHE_NAME = 'cache-v1';
const CACHE_URLS = [
  '/',
  '/?homescreen=1',
  '/index.html',
  '/images/ogp_image.png',
  '/images/logo.svg',
  '/css/style.css',
  '/sw.js'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_URLS).then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
    );
});
