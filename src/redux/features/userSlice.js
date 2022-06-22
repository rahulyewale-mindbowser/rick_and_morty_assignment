import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import API from '../../services/index'

const initialState ={
    users:[],
    loading:false,
    error:null,
}

 export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const res = await fetch(API).then(
        (data) => data.json()
      )
      return res.results;
});

 const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
      [getUsers.pending]: (state) => {
        state.loading = true;
      },
      [getUsers.fulfilled]: (state, action) => {
        state.loading = false
        state.users = action.payload
      },
      [getUsers.rejected]: (state,action) => {
        state.loading = false
        state.users =[];
        state.error = action.error.message
      },
    },
  })
  
  export const userReducer = userSlice.reducer
