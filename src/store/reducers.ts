import { combineReducers } from '@reduxjs/toolkit';

import GameSetSlice from './slices/GameSetSlice';
import authSlice from './slices/authSlice';

export const rootReducer = () =>
  combineReducers({
    auth: authSlice,
    gameSet: GameSetSlice,
  });
