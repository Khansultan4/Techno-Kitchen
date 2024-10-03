import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import configuratorBuildSlice from './slices/configuratorBuildSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    configuratorBuild: configuratorBuildSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
