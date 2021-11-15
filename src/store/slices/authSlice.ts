import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    resetCurrentUser(state) {
      state.currentUser = null;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
