import { createSlice } from "@reduxjs/toolkit";
import produce from "@reduxjs/toolkit/node_modules/immer";

const MeetupSlice = createSlice({
  name: 'meetups',

  initialState: {
    meetups: [
      {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        favourite: 0
      },
      {
        id: 'm2',
        title: 'Birkenhead Meetup',
        image:
          'https://i2-prod.liverpoolecho.co.uk/incoming/article17198641.ece/ALTERNATES/s615/0_St-WerburghS-Sqaure.jpg',
        address: 'The job center',
        description: "We meet up and swap different kinds of drugs. Where are ya? I'm in the entree!",
        favourite: 0

      },
    ]
  },

  reducers: {
    addMeetup(state, action){
      return {
        ...state,
        meetups: [...state.meetups, action.payload ]
      }
    },
    favouriteMeetup(state, action){
      const index = state.meetups.findIndex(meetup => meetup.id === action.payload);
      const newArray = [...state.meetups];
      const updatedArray = produce(newArray, draft => {
        draft[index].favourite = 1
      })

      return {
        ...state,
        meetups: updatedArray
      }
    }
  }
})

export const MeetupActions = MeetupSlice.actions;
export default MeetupSlice.reducer;
