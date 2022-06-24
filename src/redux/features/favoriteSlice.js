import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  loading:false,
  error:null,
  color:"#959595",
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites = [action.payload, ...state.favorites];
      console.log(state.favorites);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (user) => user.id !== action.payload
    
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer