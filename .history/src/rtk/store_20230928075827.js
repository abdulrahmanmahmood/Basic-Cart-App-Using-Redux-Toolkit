import { configureStore } from '@reduxjs/toolkit'
import productsReducer from 'l/'


export const store = configureStore({
  reducer: {
    products:productsReducer,
  },
})