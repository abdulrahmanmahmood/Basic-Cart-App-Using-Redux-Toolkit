import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {}

createAsyncThunk("")

const productsSlice = createSlice({
  name:"productsSlice",
  initialState:initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase()
  }
})

export const {} = productsSlice.actions;

export default productsSlice.reducer;