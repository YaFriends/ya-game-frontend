import { configureStore } from '@reduxjs/toolkit';

import { AuthAPI } from '../services/AuthAPI';
import { LeaderboardAPI } from '../services/LeaderboardAPI';
import { UserAPI } from '../services/UserAPI';

import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [LeaderboardAPI.reducerPath]: LeaderboardAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      AuthAPI.middleware,
      LeaderboardAPI.middleware,
      UserAPI.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
