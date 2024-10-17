import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../store/CounterSlicer'

export const store = configureStore({
  reducer: {
    counter:counterReducer
  },
})