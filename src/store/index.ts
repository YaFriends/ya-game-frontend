import { configureStore } from '@reduxjs/toolkit';

import GameSetReducer from './slices/GameSetSlice';

export const store = configureStore({
  reducer: {
    gameSet: GameSetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
