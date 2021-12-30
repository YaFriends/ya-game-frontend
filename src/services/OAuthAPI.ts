import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { EXTERNAL_API_URL } from '../config';

type getAppIdResponse = {
  service_id: string;
};

type signInRequest = {
  code: string;
  redirect_uri: string;
};

const servicePoint = '/oauth';

export const OAuthAPI = createApi({
  reducerPath: 'oAuthApi',
  baseQuery: fetchBaseQuery({
    baseUrl: EXTERNAL_API_URL + servicePoint,
  }),
  endpoints: build => ({
    getAppId: build.query<getAppIdResponse, string>({
      query: uri => ({
        url: '/yandex/service-id',
        method: 'GET',
        credentials: 'include',
        params: {
          redirect_uri: uri,
        },
      }),
    }),
    OAuthYandex: build.mutation<void, signInRequest>({
      query: body => ({
        url: '/yandex',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
  }),
});

export const { useLazyGetAppIdQuery, useOAuthYandexMutation } = OAuthAPI;
