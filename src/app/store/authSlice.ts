import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../models/User";
import { RootState } from "./reducers";

export type AuthState = { currentUser: User | null };

export const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null } as AuthState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    unsetCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});
export default authSlice.reducer;

export const { setCurrentUser, unsetCurrentUser } = authSlice.actions;

export const selectAuthState = (rootState: RootState) => rootState.auth;

export const selectCurrentUser = (rootState: RootState) =>
  selectAuthState(rootState).currentUser;
