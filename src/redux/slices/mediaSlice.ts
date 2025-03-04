import { createSlice } from '@reduxjs/toolkit'
import { IMediaState } from '../types'

const initialState: IMediaState = {
  screens: null
}

export const mediaSlice = createSlice({
  name: 'media',

  initialState,
  reducers: {
    setScreens: (state, action) => {
      state.screens = action.payload
    }
  },
})

export const { setScreens } = mediaSlice.actions

export default mediaSlice.reducer