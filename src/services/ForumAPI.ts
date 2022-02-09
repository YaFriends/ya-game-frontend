import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PostCreationAttributes } from '../../backend/models/Post';
import { PostCommentCreationAttributes } from '../../backend/models/PostComment';
import { Like, Post, PostComment } from '../@types/ForumTypes';
import { INTERNAL_API_URL } from '../config';

const servicePoint = '/posts';

export const ForumAPI = createApi({
  reducerPath: 'forumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: INTERNAL_API_URL + servicePoint,
  }),
  tagTypes: ['Posts', 'Post'],
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
    loadPost: build.query<Post, number>({
      query: id => ({
        url: `/${id}`,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['Post'],
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
      invalidatesTags: ['Posts', 'Post'],
    }),
    unlikePost: build.mutation<Like, { id: number; user_id: number }>({
      query: ({ id, user_id }) => ({
        url: `/${id}/like`,
        method: 'DELETE',
        credentials: 'include',
        body: { user_id },
      }),
      invalidatesTags: ['Posts', 'Post'],
    }),
    commentPost: build.mutation<PostComment, PostCommentCreationAttributes>({
      query: comment => ({
        url: `/${comment.postId}/comment`,
        method: 'POST',
        credentials: 'include',
        body: comment,
      }),
      invalidatesTags: ['Post'],
    }),
    loadComments: build.query<PostComment[], number | undefined>({
      query: postId => ({
        url: `/${postId}/comments`,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['Post'],
    }),
  }),
});

export const {
  useLoadPostQuery,
  useLoadCommentsQuery,
  useLoadPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
  useCommentPostMutation,
} = ForumAPI;
