import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { CurrentUser } from '../../@types/AuthTypes';

interface InitialState {
  currentUser: CurrentUser;
}

const initialState: InitialState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<CurrentUser>) {
      state.currentUser = action.payload;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
