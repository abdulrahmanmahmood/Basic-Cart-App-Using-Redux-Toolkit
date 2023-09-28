import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cartSlice",
  initialState:[],
  reducers:{
    AddToCart:(state,action)=>{
      state = state.push(action.payload);
    },
    deleteFromCart:(state,action)=>{
      state = state.filter(action.payload);
    },
    clearCart:(state, actoin)=>{
      state = 0
    }
  },
  extraReducers:(builder)=>{}
});

export const {AddToCart, deleteFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;