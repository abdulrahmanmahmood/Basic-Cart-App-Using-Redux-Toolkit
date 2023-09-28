import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cartSlice",
  initialState:[],
  reducers:{
    AddToCart:(state,action)=>{
    const finded =  state.find((product)=>product.id ==== action.payload.id)
      state = state.push(action.payload);
    },
    deleteFromCart:(state,action)=>{
    return  state = state.filter((item)=>item.id !== action.payload.id);
    },
    clearCart:(state, actoin)=>{
    return  state = []
    }
  },
  extraReducers:(builder)=>{}
});

export const {AddToCart, deleteFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;