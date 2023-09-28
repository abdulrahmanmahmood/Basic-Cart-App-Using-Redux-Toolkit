import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slicess/products-slice'
import CartReducer from './slicess/cart-slice'

export const store = configureStore({
  reducer: {
    products:productsReducer,
    cart:
  },
})