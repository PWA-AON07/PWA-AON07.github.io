self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('PXL_AON07').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/css/style.css',
                '/file-handler.js',
                '/manifest.json',
                '/icons/manifest-icon-192.maskable.png',
                '/icons/manifest-icon-512.maskable.png',
                '/logo.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});