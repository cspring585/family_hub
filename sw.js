const CACHE_PREFIX = 'family-hub-';
const CACHE_VERSION = 'v2';
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;
const APP_SHELL = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    // Activate the new worker only after the app shell has been cached successfully.
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
        .map((name) => caches.delete(name))
    );
    await self.clients.claim();
  })());
});

async function cacheSuccessfulResponse(request, response) {
  if (!response || response.status !== 200 || response.type !== 'basic') return;

  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Leave Firebase, Google APIs, and calendar embeds to their own network/cache policies.
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok) {
        // Keep the cache write part of the event lifetime without delaying the response.
        event.waitUntil(cacheSuccessfulResponse(request, response));
      }
      return response;
    } catch (error) {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) return cachedResponse;

      // Firebase Hosting rewrites app routes to index.html; use the cached shell offline too.
      if (request.mode === 'navigate') {
        const appShell = await caches.match('/index.html');
        if (appShell) return appShell;
      }

      return new Response('You are offline and this page is not available in the cache.', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
