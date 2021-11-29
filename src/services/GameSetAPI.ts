import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GameSet } from '../@types/GameSet';
import { INTERNAL_API_URL } from '../config';

const servicePoint = '/session';

export const GameSetAPI = createApi({
  reducerPath: 'gameSetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: INTERNAL_API_URL + servicePoint,
  }),
  tagTypes: ['GameSet'],
  endpoints: build => ({
    fetchSession: build.query<GameSet, string>({
      query: (id: string) => ({
        url: id,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['GameSet'],
    }),
  }),
});

export const { useFetchSessionQuery } = GameSetAPI;
