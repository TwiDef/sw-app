import { configureStore } from '@reduxjs/toolkit'
import { mediaSlice } from './slices/mediaSlice'

export const store = configureStore({
  reducer: {
    media: mediaSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch