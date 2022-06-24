import { configureStore } from '@reduxjs/toolkit';
import { favoriteReducer } from '../features/favoriteSlice';
import { userReducer } from '../features/userSlice';

export const store = configureStore({
  reducer: {
   userList:userReducer,
   favoriteList:favoriteReducer,
  },
});
