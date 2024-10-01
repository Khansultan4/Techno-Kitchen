import { initUserState } from "../initStates/initStates";
import { IUser } from "../types/stateTypes";
import { createSlice } from "@reduxjs/toolkit";
import { authUser, getUser, logoutUser } from "../thunkActions";

export type UserState = {
  user: IUser;
  loading: boolean;
  error: object;
};

const initialState = {
  user: initUserState,
  loading: true,
  error: {},
};

const userSlice = createSlice({

});

export default userSlice.reducer;
