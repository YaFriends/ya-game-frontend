import axios from 'axios';
import { EXTERNAL_API_URL } from '../../src/config';

axios.defaults.withCredentials = true;

export const http = axios.create({
  baseURL: EXTERNAL_API_URL,
  withCredentials: true,
});
