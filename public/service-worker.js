const cacheName = 'cache-v1';
const cacheContents = [
    '/',
    '/index.html'
];

addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName)
            .then(function(cache){
                console.log("installing cache");
                return cache.addAll(cacheContents);
            })
            .catch(function(err){
                console.log("error installing cache", err);
            })
    );
})

addEventListener('fetch', function(e){
    e.respondWith(caches.match(e.request)
        .then(function(res){
            return res || fetch(e.request);
        }))
})
importScripts("https://js.pusher.com/beams/service-worker.js");