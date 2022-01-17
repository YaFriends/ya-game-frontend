import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GameSet } from '../@types/GameSet';
import { INTERNAL_API_URL } from '../config';

const servicePoint = '/session';

export const GameSetAPI = createApi({
  reducerPath: 'gameSetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: INTERNAL_API_URL + servicePoint,
  }),
  keepUnusedDataFor: 0,
  endpoints: build => ({
    generateLink: build.query<string, null>({
      query: () => ({
        url: '/create',
        method: 'GET',
        credentials: 'include',
      }),
    }),
    fetchSession: build.query<GameSet, string>({
      query: (id: string) => ({
        url: id,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    updateGameSet: build.mutation<GameSet, Partial<GameSet> & Pick<GameSet, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const { useFetchSessionQuery, useGenerateLinkQuery, useUpdateGameSetMutation } = GameSetAPI;
