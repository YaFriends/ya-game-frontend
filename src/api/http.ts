import axios, { AxiosRequestConfig } from 'axios';

import { EXTERNAL_API_URL, INTERNAL_API_URL } from '../config';

const setup: AxiosRequestConfig = {
  responseType: 'json',
  withCredentials: true,
};

const internalSetup = { ...setup };
if (INTERNAL_API_URL) {
  internalSetup.baseURL = INTERNAL_API_URL;
}

export const httpExternal = axios.create({
  ...setup,
  baseURL: EXTERNAL_API_URL,
});

export const httpInternal = axios.create(internalSetup);
