if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA/sw.js', { scope: '/PWA/' }).then(function(reg) {

    }).catch(function(error) {
    });
};