// Реализован базовый пример из теории
// Если будет время:
// TODO: Разобраться и попробовать закешировать данные, чтобы можно было обратиться к ним из offline

// const CACHE_NAME = 'my-site-cache-v1';
// const URLS = [
//   '/',
//   '/public',
//   '/static',
// ];

self.addEventListener('install', () => {
  console.info('install');
});

self.addEventListener('fetch', () => {
  console.info('fetch');
});

self.addEventListener('activate', () => {
  console.info('activate');
});
