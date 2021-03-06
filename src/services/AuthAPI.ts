import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LoginData, SignUpData } from '../@types/AuthTypes';
import { UserData } from '../@types/UserTypes';
import { INTERNAL_API_URL } from '../config';

const servicePoint = '/auth';

export const AuthAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: INTERNAL_API_URL + servicePoint,
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    signUp: build.mutation<{ id: number }, SignUpData>({
      query: body => ({
        url: '/signup',
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    login: build.mutation<void, LoginData>({
      query: body => ({
        url: '/signin',
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
        credentials: 'include',
      }),
    }),
    fetchUser: build.query<UserData, void>({
      query: () => ({
        url: '/user',
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['User'],
    }),
    updateUser: build.mutation<UserData, Partial<UserData> & { id: number }>({
      query: body => ({
        url: `/user/${body.id}`,
        method: 'PATCH',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useFetchUserQuery,
  useLazyFetchUserQuery,
  useUpdateUserMutation,
} = AuthAPI;
