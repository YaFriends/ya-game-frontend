import { configureStore } from '@reduxjs/toolkit';

import { AuthAPI } from '../services/AuthAPI';
import { GameSetAPI } from '../services/GameSetAPI';
import { LeaderboardAPI } from '../services/LeaderboardAPI';
import { OAuthAPI } from '../services/OAuthAPI';
import { UserAPI } from '../services/UserAPI';

import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [GameSetAPI.reducerPath]: GameSetAPI.reducer,
    [LeaderboardAPI.reducerPath]: LeaderboardAPI.reducer,
    [OAuthAPI.reducerPath]: OAuthAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      AuthAPI.middleware,
      GameSetAPI.middleware,
      LeaderboardAPI.middleware,
      OAuthAPI.middleware,
      UserAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
