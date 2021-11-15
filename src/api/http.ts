import axios from 'axios';

import { EXTERNAL_API_URL, INTERNAL_API_URL } from '../config';

export const httpExternal = axios.create({
  baseURL: EXTERNAL_API_URL,
  responseType: 'json',
  withCredentials: true,
});

export const httpInternal = axios.create({
  baseURL: INTERNAL_API_URL,
  responseType: 'json',
  withCredentials: true,
});
