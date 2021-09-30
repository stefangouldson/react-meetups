import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { useSelector } from 'react-redux';

const AllMeetup = () => {
  const storedMeetups = useSelector((state) => state.meetups.meetups);

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={storedMeetups} />
    </div>
  )
}

export default AllMeetup
