import { cacheNames } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((res) => {
        const fetchRequest = event.request.clone();

        return new Promise((resolve) => {
          fetch(fetchRequest)
            .then((response) => {
              if (!response || !response.status.toString().startsWith('2') || response.type !== 'basic') {
                return resolve(response);
              }

              const responseToCache = response.clone();

              caches.open(cacheNames.precache)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return resolve(response);
            })
            .catch((err) => {
              if (res) {
                return resolve(res);
              }
              throw err;
            });
        });
      }).catch(err=>{console.log(err)}),
  );
});