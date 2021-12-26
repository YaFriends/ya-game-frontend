const isDev = process.env.NODE_ENV !== 'production';
export const EXTERNAL_API_URL = 'https://ya-praktikum.tech/api/v2';
export const INTERNAL_API_URL = isDev
  ? 'http://localhost:8000'
  : 'https://ya-friends-demo-1.herokuapp.com';
export const REDIRECT_URI_FOR_OAUTH = isDev
  ? 'http://localhost:8000'
  : 'https://ya-friends-demo-1.herokuapp.com';
