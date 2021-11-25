import { configureStore } from '@reduxjs/toolkit';

import { AuthAPI } from '../services/AuthAPI';
import { LeaderboardAPI } from '../services/LeaderboardAPI';
import { UserApi } from '../services/UserApi';

import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [LeaderboardAPI.reducerPath]: LeaderboardAPI.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      AuthAPI.middleware,
      LeaderboardAPI.middleware,
      UserApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
