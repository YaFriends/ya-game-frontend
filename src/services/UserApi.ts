import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  UserUpdateProfileProps,
  UserUpdatePasswordProps,
  UserData,
  ChangePasswordResponse,
} from '../@types/UserTypes';
import { EXTERNAL_API_URL } from '../config';

const servicePoint = '/user';

export const UserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: EXTERNAL_API_URL + servicePoint,
  }),
  tagTypes: ['User'], //TODO из другой апишки вытянуть данные
  endpoints: build => ({
    updateProfile: build.mutation<UserData, UserUpdateProfileProps>({
      query: body => ({
        url: '/profile',
        method: 'PUT',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    updatePassword: build.mutation<ChangePasswordResponse, UserUpdatePasswordProps>({
      query: body => ({
        url: '/password',
        method: 'PUT',
        credentials: 'include',
        responseHandler: response => response.text(),
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useUpdatePasswordMutation, useUpdateProfileMutation } = UserApi;
