import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cartSlice",
  initialState:[],
  reducers:{
    AddToCart:(state,action)=>{
      state = state+1;
    },
    deleteFromCart:(state,actoin)=>{}
  },
  extraReducers:(builder)=>{}
})