import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { INTERNAL_API_URL } from '../config';
import { Like, Post, PostComment } from '../@types/ForumTypes';
import { PostCreationAttributes } from '../../backend/models/Post';
import { PostCommentCreationAttributes } from '../../backend/models/PostComment';

const servicePoint = '/posts';

export const ForumAPI = createApi({
  reducerPath: 'forumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: INTERNAL_API_URL + servicePoint,
  }),
  tagTypes: ['Posts'],
  endpoints: build => ({
    loadPosts: build.query<Post[], void>({
      query: () => ({
        url: '',
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['Posts'],
    }),
    createPost: build.mutation<Post, PostCreationAttributes>({
      query: body => ({
        url: '',
        method: 'POST',
        credentials: 'include',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    loadPost: build.query<Post, { id: Pick<Post, 'id'> }>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    deletePost: build.mutation<void, number>({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Posts'],
    }),
    likePost: build.mutation<Like, { id: number; user_id: number }>({
      query: ({ id, user_id }) => ({
        url: `/${id}/like`,
        method: 'POST',
        credentials: 'include',
        body: { user_id },
      }),
      invalidatesTags: ['Posts'],
    }),
    unlikePost: build.mutation<Like, { id: number; user_id: number }>({
      query: ({ id, user_id }) => ({
        url: `/${id}/like`,
        method: 'DELETE',
        credentials: 'include',
        body: { user_id },
      }),
      invalidatesTags: ['Posts'],
    }),
    commentPost: build.mutation<
      PostComment,
      { id: Pick<Post, 'id'>; comment: PostCommentCreationAttributes }
    >({
      query: ({ id, comment }) => ({
        url: `/${id}/comment`,
        method: 'POST',
        credentials: 'include',
        body: comment,
      }),
    }),
  }),
});

export const {
  useLoadPostQuery,
  useLoadPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
  useCommentPostMutation,
} = ForumAPI;
