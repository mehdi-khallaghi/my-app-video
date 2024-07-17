const staticCacheName = 'faradarsCaches5';  
const dynamicCacheName = 'dynamicCache';  

const assets = [  
  '/',  
  'index.html',  
  '/static/js/bundle.js',  
  '/pages/page.html'  
];  

self.addEventListener('install', (event) => {  
  event.waitUntil(  
    caches.open(dynamicCacheName)  
      .then((cache) => {  
        console.log('کش باز شد');  
        return cache.addAll(assets);  
      })  
  );  
});  
//state-while-revalidate
self.addEventListener('fetch', function (event) {
  event.respondWith(
      caches.open(dynamicCacheName)
          .then(function(cache) {
              cache.match(event.request)
                  .then( function(cacheResponse) {
                      fetch(event.request)
                          .then(function(networkResponse) {
                              cache.put(event.request, networkResponse)
                          })
                      return cacheResponse || networkResponse
                  })
          })
  )
});

self.addEventListener('activate', (event) => {  
  event.waitUntil(  
    caches.keys()  
      .then((cacheNames) => {  
        return Promise.all(  
          cacheNames.filter((cacheName) => {  
            return cacheName !== staticCacheName && cacheName !== dynamicCacheName;  
          }).map((cacheName) => {  
            return caches.delete(cacheName);  
          })  
        );  
      })  
  );  
});

// self.addEventListener("fetch", (event) => {  
//   event.respondWith(  
//     caches.open(dynamicCacheName)  
//       .then((cache) => cache.match(event.request))  
//       .then((cacheResponse) => {  
//         if (cacheResponse) {  
//           return cacheResponse;  
//         }  
//         return fetch(event.request)  
//           .then((networkResponse) => {  
//             cache.put(event.request, networkResponse.clone());  
//             return networkResponse;  
//           })  
//           .catch((err) => {  
//             return caches.match("/pages/page.html");  
//           });  
//       })  
//   );  
// });
// //کدهای خودمان
// // self.addEventListener('fetch', function (event) {
// //     event.respondWith(
// //         caches.open(dynamicCache)
// //             .then(function(cache) {
// //                 cache.match(event.request)
// //                     .then( function(cacheResponse) {
// //                         fetch(event.request)
// //                             .then(function(networkResponse) {
//   //                                 cache.put(event.request, networkResponse)
//   //                             })
//   //                         return cacheResponse || networkResponse
// //                     })
// //             })
// //     )
// // });




// //chat liama 3

  
//   // self.addEventListener("fetch", (event) => {
// //     // Let the browser do its default thing
// //     // for non-GET requests.
// //     if (event.request.method !== "GET") return;
  
// //     // Prevent the default, and handle the request ourselves.
// //     event.respondWith(
// //       (async () => {
// //         // Try to get the response from a cache.
// //         const cache = await caches.open("faradarsCaches");
// //         const cachedResponse = await cache.match(event.request);

// //         if (cachedResponse) {
//   //           // If we found a match in the cache, return it, but also
// //           // update the entry in the cache in the background.
// //           event.waitUntil(cache.add(event.request));
// //           return cachedResponse;
// //         }
  
// //         // If we didn't find a match in the cache, use the network.
// //         // return fetch(event.request);
// //       })()
// //     );
// //   });

// //----------------------------پاک کردن کش قدیمی----------------------------
//   // self.addEventListener("activate", (event) => {
//   //   event.waitUntil(
//   //     caches.keys().then((keyList) => {
//   //       return Promise.all(
//   //         keyList.map((key) => {
//   //           if (key === cachName1) {
//   //             return;
//   //           }
//   //           return caches.delete(key);
//   //         }),
//   //       );
//   //     }),
//   //   );
//   // });