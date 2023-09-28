import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slicess/products-slice'


export const store = configureStore({
  reducer: {
    products:productsReducer,
  },
})