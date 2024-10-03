import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { IUser, IAuth } from './types/stateTypes';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/get', async () => {
  const response = await axiosInstance.get<{
    user: IUser;
    accessToken: string;
  }>(`${import.meta.env.VITE_API}/token/refresh`);
  setAccessToken(response.data.accessToken);
  return response.data.user;
});

export const fetchSignInUser = createAsyncThunk(
  'user/signIn',
  async (inputs: IAuth, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API}/auth/signin`,
        {
          email: inputs.email,
          password: inputs.password,
        }
      );

      setAccessToken(response.data.accessToken);
      return response.data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || 'An unknown error occurred';
        return rejectWithValue({ message: errorMessage }); // Use rejectWithValue to set the error
      }
    }
  }
);

export const fetchSignUpUser = createAsyncThunk(
  'user/signUp',
  async (inputs: IAuth, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API}/auth/signup`,
        {
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
        }
      );
      setAccessToken(response.data.accessToken);
      return response.data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || 'An unknown error occurred';
        return rejectWithValue({ message: errorMessage }); // Use rejectWithValue to set the error
      }
    }
  }
);

export const fetchLogoutUser = createAsyncThunk('user/logout', async () => {
  await axiosInstance.get(`${import.meta.env.VITE_API}/auth/logout`);
  setAccessToken('');
});
