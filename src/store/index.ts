import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory, createMemoryHistory } from 'history';

import { AuthAPI } from '../services/AuthAPI';
import { GameSetAPI } from '../services/GameSetAPI';
import { LeaderboardAPI } from '../services/LeaderboardAPI';
import { UserAPI } from '../services/UserAPI';
import { isServer } from '../utils/isServer';

import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [LeaderboardAPI.reducerPath]: LeaderboardAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer,
    [GameSetAPI.reducerPath]: GameSetAPI.reducer,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      AuthAPI.middleware,
      LeaderboardAPI.middleware,
      UserAPI.middleware,
      GameSetAPI.middleware,
    ]),
});

const history = isServer ? createMemoryHistory({ initialEntries: ['/'] }) : createBrowserHistory();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { history };
