import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slicess/'


export const store = configureStore({
  reducer: {
    products:productsReducer,
  },
})