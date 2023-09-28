import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cartSlice",
  initialState:[],
  reducers:{
    AddToCart:(state,action)=>{
    const findedProduct =  state.find((product)=>product.id === action.payload.id)
    if(findedProduct){
      findedProduct.quantity+=1;
    }else{
      const productClone = {...action.payload, quantity:1};
      state.push(productClone);

    }
    },
    deleteFromCart:(state,action)=>{
  const findedProduct =  state.find((product)=>product.id === action.payload.id);
    return  state = state.filter((item)=>item.id !== action.payload.id);
    },
    clearCart:(state, action)=>{
    return  state = []
    }
  },
  extraReducers:(builder)=>{}
});

export const {AddToCart, deleteFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;