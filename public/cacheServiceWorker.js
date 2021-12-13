// Реализован базовый пример из теории
// Если будет время:
// TODO: Разобраться и попробовать закешировать данные, чтобы можно было обратиться к ним из offline

const CACHE_NAME = 'my-site-cache-v1';
const URLS = [
  '/',
  '/public',
  '/static',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS);
      })
      .catch(err => {
        throw err;
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    // Пытаемся найти ответ на такой запрос в кеше
    caches.match(event.request)
      .then(response => {
        // Если ответ найден, выдаём его
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();
        // В противном случае делаем запрос на сервер
        return fetch(fetchRequest)
          // Можно задавать дополнительные параметры запроса, если ответ вернулся некорректный.
          .then(response => {
              // Если что-то пошло не так, выдаём в основной поток результат, но не кладём его в кеш
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              const responseToCache = response.clone();
              // Получаем доступ к кешу по CACHE_NAME
              caches.open(CACHE_NAME)
                .then(cache => {
                  // Записываем в кеш ответ, используя в качестве ключа запрос
                  cache.put(event.request, responseToCache);
                });
              // Отдаём в основной поток ответ
              return response;
            }
          );
      })
  );
});

self.addEventListener('activate', () => {
  return self.clients.claim();
});
