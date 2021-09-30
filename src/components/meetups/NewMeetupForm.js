import React, { useRef } from 'react'
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetupData = {
      id: Date.now(),
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      favourite: 0
    }
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
         <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" id="title" required ref={titleInputRef} />
         </div>
         <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" id="image" required ref={imageRef} />
         </div>
         <div className={classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input type="text" id="address" required ref={addressRef} />
         </div>
         <div className={classes.control}>
            <label htmlFor="description">Meetup Desription</label>
            <textarea id="description" required rows="5" ref={descriptionRef}></textarea>
         </div>
         <div className={classes.actions}>
           <button>Add Meetup</button>
         </div>
      </form> 
    </Card>
  )
}

export default NewMeetupForm
