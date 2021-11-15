import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameSet } from '../../@types/GameSet';

import type { RootState } from '../index';

interface GameSetState {
  gameSet?: GameSet;
}

const initialState: GameSetState = {
  gameSet: undefined,
};

export const GameSetSlice = createSlice({
  name: 'game-set',
  initialState,
  reducers: {
    setGameSet: (state, { payload }: PayloadAction<GameSet>) => {
      state.gameSet = payload;
    },
  },
});

export const { setGameSet } = GameSetSlice.actions;

export const selectGameSet = (state: RootState): GameSet | undefined => state.gameSet.gameSet;

export default GameSetSlice.reducer;
