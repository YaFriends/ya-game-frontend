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
  tagTypes: ['gameSet'],
  endpoints: build => ({
    generateLink: build.query<GameSet, number>({
      query: (totalGames: number) => ({
        url: '/create',
        method: 'POST',
        credentials: 'include',
        body: { totalGames },
      }),
      providesTags: ['gameSet'],
    }),
    fetchSession: build.query<GameSet, string>({
      query: (id: string) => ({
        url: id,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['gameSet'],
    }),
    updateGameSet: build.mutation<GameSet, Partial<GameSet> & Pick<GameSet, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['gameSet'],
    }),
  }),
});

export const { useFetchSessionQuery, useGenerateLinkQuery, useUpdateGameSetMutation } = GameSetAPI;
