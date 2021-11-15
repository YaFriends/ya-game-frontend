import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { UserData } from '../../api/UserAPI';

interface InitialState {
  currentUser: UserData | null;
}

const initialState: InitialState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<UserData>) {
      state.currentUser = action.payload;
    },
    resetCurrentUser(state) {
      state.currentUser = null;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
