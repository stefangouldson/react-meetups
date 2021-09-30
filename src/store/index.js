import { configureStore } from "@reduxjs/toolkit";
import MeetupReducer from './slices/Meetups'

const store = configureStore({
  reducer: {
    meetups: MeetupReducer
  }
})

export default store