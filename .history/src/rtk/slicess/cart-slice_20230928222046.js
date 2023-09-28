import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cartSlice",
  initialState:[],
  reducers:{
    AddToCart:(state,action)=>{
    const findedProduct =  state.find((product)=>product.id === action.payload.id)
    if(findedProduct){
      state.map((product)=>{
        product
      })
    }
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