import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { useSelector } from 'react-redux';

const Favourites = () => {
  const storedMeetups = useSelector((state) => state.meetups.meetups);
  const favourites = storedMeetups.filter(meetup => {
    return meetup.favourite
  })

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={favourites} />
    </div>
  )
}

export default Favourites
