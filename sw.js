self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('fox-store').then((cache) => cache.addAll([
            '/PWA/',
            '/PWA/index.html',
            '/PWA/assets/js/index.js',
            '/PWA/assets/css/styles.css',
            '/PWA/assets/img/1314_logo_pxl_bol.png',
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});