import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  UserUpdateProfileProps,
  UserUpdatePasswordProps,
  UserData,
  ChangePasswordResponse,
} from '../@types/UserTypes';
import { EXTERNAL_API_URL } from '../config';

const servicePoint = '/user';

export const UserAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: EXTERNAL_API_URL + servicePoint,
  }),
  endpoints: build => ({
    updateProfile: build.mutation<UserData, UserUpdateProfileProps>({
      query: body => ({
        url: '/profile',
        method: 'PUT',
        credentials: 'include',
        body,
      }),
    }),
    updatePassword: build.mutation<ChangePasswordResponse, UserUpdatePasswordProps>({
      query: body => ({
        url: '/password',
        method: 'PUT',
        credentials: 'include',
        responseHandler: response => response.text(),
        body,
      }),
    }),
    updateAvatar: build.mutation<UserData, FormData>({
      query: body => ({
        url: '/profile/avatar',
        method: 'PUT',
        credentials: 'include',
        body,
      }),
    }),
  }),
});

export const { useUpdatePasswordMutation, useUpdateProfileMutation, useUpdateAvatarMutation } =
  UserAPI;
