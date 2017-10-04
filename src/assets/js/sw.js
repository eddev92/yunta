var CACHE = 'cache-only';

self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');
  evt.waitUntil(precache());
});

 
self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
  evt.respondWith(fromCache(evt.request));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      'assets/images/1.png',
      'assets/images/10.png',
      'assets/images/12.png',
      'assets/images/3.png',
      'assets/images/6.png',
      'assets/images/8.png',
      'assets/images/features-1.jpg',
      'assets/images/features-2.jpg',
      'assets/images/features-3.jpg',
      'assets/images/features-4.jpg',
      'assets/images/features-5.jpg',
      'assets/images/features-6.jpg',
      'assets/images/features-7.jpg',
      'assets/css/bootstrap.min.css',
      'assets/images/banner.png',
      'app.component.html',
      'styles.css'
    ]);
  });
}
 
// function fromCache(request) {
//   return caches.open(CACHE).then(function (cache) {
//     return cache.match(request).then(function (matching) {
//       return matching || fetch(request);
//     });
//   });
// }

