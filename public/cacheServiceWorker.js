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
  console.log('install');
});

self.addEventListener('fetch', () => {
  console.log('fetch');
});

self.addEventListener('activate', () => {
  console.log('activate');
});
