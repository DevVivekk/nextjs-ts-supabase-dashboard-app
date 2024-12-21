import { configureStore } from '@reduxjs/toolkit'
import studentSlice  from './slices/studentslice'


export const store = configureStore({
  reducer: {
    studentReducer:studentSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch