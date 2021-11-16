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
    setCurrentUser(state, action: PayloadAction<UserData | null>) {
      state.currentUser = action.payload;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
