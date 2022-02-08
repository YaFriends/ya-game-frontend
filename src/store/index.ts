import { configureStore } from '@reduxjs/toolkit';
import { PreloadedState } from 'redux';

import { AuthAPI } from '../services/AuthAPI';
import { GameSetAPI } from '../services/GameSetAPI';
import { LeaderboardAPI } from '../services/LeaderboardAPI';
import { OAuthAPI } from '../services/OAuthAPI';
import { UserAPI } from '../services/UserAPI';

import authSlice from './slices/authSlice';
import themeSlice from './slices/themeSlice';
import { ForumAPI } from '../services/ForumAPI';

export const preparedState = (initialStore?: PreloadedState<any>) =>
  configureStore({
    reducer: {
      [AuthAPI.reducerPath]: AuthAPI.reducer,
      [GameSetAPI.reducerPath]: GameSetAPI.reducer,
      [LeaderboardAPI.reducerPath]: LeaderboardAPI.reducer,
      [OAuthAPI.reducerPath]: OAuthAPI.reducer,
      [UserAPI.reducerPath]: UserAPI.reducer,
      [ForumAPI.reducerPath]: ForumAPI.reducer,
      auth: authSlice,
      theme: themeSlice,
    },
    preloadedState: initialStore,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat([
        AuthAPI.middleware,
        GameSetAPI.middleware,
        LeaderboardAPI.middleware,
        OAuthAPI.middleware,
        UserAPI.middleware,
        ForumAPI.middleware,
      ]),
  });

const store = preparedState();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
