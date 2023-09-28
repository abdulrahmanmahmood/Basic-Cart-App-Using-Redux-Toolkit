import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './store'


export const store = configureStore({
  reducer: {
    products:
  },
})