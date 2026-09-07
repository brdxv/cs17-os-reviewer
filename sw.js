const CACHE='cs17-os-reviewer-v9';
const ASSETS=['./?v=9','./index.html?v=9','./styles.css?v=9','./data.js?v=9','./lesson1.js?v=9','./lesson2.js?v=9','./lesson3.js?v=9','./lesson4.js?v=9','./app.js?v=9'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Prefer the live localhost files so edits appear immediately.
// Cached copies are only used as a fallback if the local server cannot respond.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(hit => hit || caches.match('./index.html?v=9') || caches.match('./?v=9')))
  );
});
