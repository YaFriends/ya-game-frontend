import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  AddUserToLeaderboard,
  GetAllLeaderboards,
  LeaderboardData,
} from '../@types/LeaderboardTypes';
import { EXTERNAL_API_URL } from '../config';

const servicePoint = '/leaderboard';

export const LeaderboardAPI = createApi({
  reducerPath: 'leaderboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: EXTERNAL_API_URL + servicePoint,
  }),
  endpoints: build => ({
    addUserToLeaderboard: build.mutation<void, AddUserToLeaderboard>({
      query: body => ({
        url: '',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    getAllLeaderboards: build.mutation<LeaderboardData[], GetAllLeaderboards>({
      query: body => ({
        url: '/all',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
    getTeamLeaderboard: build.mutation<
      LeaderboardData,
      { teamName: string; data: GetAllLeaderboards }
    >({
      query: body => ({
        url: '',
        method: 'POST',
        credentials: 'include',
        body,
      }),
    }),
  }),
});

export const {
  useAddUserToLeaderboardMutation,
  useGetAllLeaderboardsMutation,
  useGetTeamLeaderboardMutation,
} = LeaderboardAPI;
