import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UserUpdateProfileProps, UserUpdatePasswordProps } from '../@types/UserTypes';
import { EXTERNAL_API_URL } from '../config';

const servicePoint = '/user';

const UserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: EXTERNAL_API_URL + servicePoint,
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    updateProfile: build.mutation<void, UserUpdateProfileProps>({
      query: body => ({
        url: '/user',
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    updatePassword: build.mutation<void, UserUpdatePasswordProps>({
      query: body => ({
        url: '/user',
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useUpdatePasswordMutation, useUpdateProfileMutation } = UserApi;
