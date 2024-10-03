import { initUserState } from '../initStates/initStates';
import {
  fetchLogoutUser,
  fetchSignInUser,
  fetchSignUpUser,
  fetchUser,
} from '../thunkActions';
import { IUser } from '../types/stateTypes';
import { createSlice } from '@reduxjs/toolkit';

export type Error = {
  message: string;
};

export type UserState = {
  user: IUser;
  loading: boolean;
  error: unknown;
};

const initialState:UserState = {
  user: initUserState,
  loading: true,
  error: { message: '' },
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSignUpUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchLogoutUser.fulfilled, (state) => {
      state.user = initUserState;
    });
    builder.addCase(fetchSignInUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
