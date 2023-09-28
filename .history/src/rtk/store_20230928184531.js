import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slicess/products-slice'
import 

export const store = configureStore({
  reducer: {
    products:productsReducer,
    cart:
  },
})