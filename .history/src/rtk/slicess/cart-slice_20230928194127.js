import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cartSlice",
  initialState:0,
  reducers:{
    AddToCart:(state,action)=>{
      state = state+1;
    },
    deleteFromCart:(state,actoin)=>{
      state = state -1;
    },
    clearCart:(state, actoin)=>{
      state = 0
    }
  },
  extraReducers:(builder)=>{}
});

export const {AddToCart, deleteFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;