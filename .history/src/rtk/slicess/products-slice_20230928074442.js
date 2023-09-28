import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productsSlice = createSlice({
  name:"productsSlice",
  initialState:initialState,
  reducers:{

  },
  extraReducers:(builder)=>{

  }
})

export const {} = productsSlice.actions;

export default productsSlice.reducer;