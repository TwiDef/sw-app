import { configureStore } from '@reduxjs/toolkit'
import { mediaSlice } from './slices/mediaSlice'
import { charactersApi } from '../services/characters'

export const store = configureStore({
  reducer: {
    media: mediaSlice.reducer,
    [charactersApi.reducerPath]: charactersApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch