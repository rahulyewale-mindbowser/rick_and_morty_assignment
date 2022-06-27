import { configureStore } from '@reduxjs/toolkit';
import { allCharReducer } from '../features/allCharacterSlice';
import { favoriteReducer } from '../features/favoriteSlice';
import { userReducer } from '../features/userSlice';

export const store = configureStore({
  reducer: {
   userList:userReducer,
   favoriteList:favoriteReducer,
   allcharactersList:allCharReducer,
  },
});
