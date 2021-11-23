import { configureStore } from '@reduxjs/toolkit';

import { AuthAPI } from '../services/AuthAPI';

import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(AuthAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
