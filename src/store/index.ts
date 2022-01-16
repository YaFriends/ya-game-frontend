import { configureStore } from '@reduxjs/toolkit';
import { PreloadedState } from 'redux';

import { AuthAPI } from '../services/AuthAPI';
import { GameSetAPI } from '../services/GameSetAPI';
import { LeaderboardAPI } from '../services/LeaderboardAPI';
import { UserAPI } from '../services/UserAPI';

import authSlice from './slices/authSlice';

export const preparedState = (initialStore?: PreloadedState<any>) =>
  configureStore({
    reducer: {
      [AuthAPI.reducerPath]: AuthAPI.reducer,
      [LeaderboardAPI.reducerPath]: LeaderboardAPI.reducer,
      [UserAPI.reducerPath]: UserAPI.reducer,
      [GameSetAPI.reducerPath]: GameSetAPI.reducer,
      auth: authSlice,
    },
    preloadedState: initialStore,

    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat([
        AuthAPI.middleware,
        LeaderboardAPI.middleware,
        UserAPI.middleware,
        GameSetAPI.middleware,
      ]),
  });

const store = preparedState();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
