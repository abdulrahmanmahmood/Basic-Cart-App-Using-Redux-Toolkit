import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {}

createAsyncThunk("productsSlice/fetchProducts", async ()=>{
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
})

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