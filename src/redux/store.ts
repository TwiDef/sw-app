import { configureStore } from '@reduxjs/toolkit'
import { mediaSlice } from './slices/mediaSlice'
import { swapi } from '../services/swapi'

export const store = configureStore({
  reducer: {
    media: mediaSlice.reducer,
    [swapi.reducerPath]: swapi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch