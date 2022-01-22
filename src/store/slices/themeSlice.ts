import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

export type currentTheme = 'dark' | 'light';
type InitialState = {
  currentTheme: currentTheme;
};

const initialState: InitialState = {
  currentTheme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCurrentTheme(state, action: PayloadAction<currentTheme>) {
      state.currentTheme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
