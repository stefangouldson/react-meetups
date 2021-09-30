import React from 'react';
import { useHistory } from 'react-router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useDispatch } from 'react-redux';
import { MeetupActions } from '../store/slices/Meetups'

const NewMeetup = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addMeetupHandler = (meetupData) => {
    dispatch(MeetupActions.addMeetup(meetupData))
    history.push('/')
  }
  return (
    <section>
      <h1>New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup
