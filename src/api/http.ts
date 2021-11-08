import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://ya-praktikum.tech/api/v2',
  responseType: 'json',
  withCredentials: true,
});
