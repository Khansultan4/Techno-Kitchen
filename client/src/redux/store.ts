import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const storeOptions = {
  reducer: {
    user: userSlice,
  },
};

const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
