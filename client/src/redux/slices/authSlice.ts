import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = { authStatus: string };

const authSlice = createSlice({
  name: "AuthReducer",
  initialState: { authStatus: "login" },
  reducers: {
    login(state: Draft<AuthState>): void {
      state.authStatus = "login";
    },
    register(state: Draft<AuthState>): void {
      state.authStatus = "register";
    },
  },
});

export default authSlice.reducer;

export const { login, register } = authSlice.actions;
