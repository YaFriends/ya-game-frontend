const isDev = process.env.NODE_ENV !== 'production';
export const EXTERNAL_API_URL = 'https://ya-praktikum.tech/api/v2';
export const INTERNAL_API_URL = isDev ? '/api' : 'https://tarifa-yafriends-9.ya-praktikum.tech/api';

export const REDIRECT_URI_FOR_OAUTH = isDev
  ? 'http://localhost:8000'
  : 'https://tarifa-yafriends-9.ya-praktikum.tech';
