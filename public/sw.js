// Dolphy Café & Academy - Official Progressive Web App Service Worker 2026
const CACHE_NAME = 'dolphy-pwa-v1.0.1';

// Core URLs to precache immediately on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/manifest.json',
  '/favicon.png',
  '/favicon-32x32.png',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-maskable-192x192.png',
  '/icons/icon-maskable-512x512.png'
];

// Install Event: Precache core static shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[Dolphy SW] Precache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up legacy caches and claim active clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[Dolphy SW] Deleting obsolete cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event Strategy:
// 1. Navigation (HTML Pages): Network-First, fall back to cached /index.html (SPA routing)
// 2. Static Assets (CSS, JS, Fonts): Stale-While-Revalidate
// 3. Media & Images: Cache-First with Network fallback
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests or chrome-extension URLs
  if (request.method !== 'GET' || url.protocol.startsWith('chrome-extension')) {
    return;
  }

  // 1. SPA Navigation Requests (HTML)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Offline fallback: return cached page or index.html for client-side routing
          const cachedResponse = await caches.match(request);
          if (cachedResponse) return cachedResponse;
          const fallback = await caches.match('/index.html');
          if (fallback) return fallback;
          return new Response('<h1>Dolphy Café Offline</h1><p>Vui lòng kết nối mạng để tải lại trang.</p>', {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
        })
    );
    return;
  }

  // 2. Google Fonts & Static CDN Resources
  if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          return networkResponse;
        });
      })
    );
    return;
  }

  // 3. Images and Media (PNG, JPG, JPEG, WEBP, SVG, MP4)
  if (
    request.destination === 'image' ||
    url.pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico)$/i)
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        }).catch(() => {
          // Fallback to default favicon if image missing offline
          return caches.match('/favicon.png');
        });
      })
    );
    return;
  }

  // 4. Bundled Assets (JS, CSS) - Stale-While-Revalidate
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    url.pathname.match(/\.(js|css|json)$/i)
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // 5. Default Fallback
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return cachedResponse || fetch(request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        return caches.match('/index.html');
      });
    })
  );
});

// Listen for update message from web app UI
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
