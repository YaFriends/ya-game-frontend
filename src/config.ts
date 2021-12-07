export const EXTERNAL_API_URL = 'https://ya-praktikum.tech/api/v2';
export const INTERNAL_API_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8080'
    : 'https://ya-friends-demo-1.herokuapp.com';

console.log('EXTERNAL_API_URL', EXTERNAL_API_URL);
console.log('INTERNAL_API_URL', INTERNAL_API_URL);
