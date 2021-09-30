import React from 'react';
import Card from '../ui/Card';
import styles from './MeetupItem.module.css';
import { MeetupActions } from '../../store/slices/Meetups';
import { useDispatch } from 'react-redux';

const MeetupItem = (props) => {
  const dispatch = useDispatch();
  const favouriteHandler = () => {
    dispatch(MeetupActions.favouriteMeetup(props.id))
  }

  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        {props.favourite ? <p className={styles.favourited}>Favourited</p> 
        : 
        <div className={styles.actions}>
          <button onClick={favouriteHandler}>To Favourites</button>
        </div> }
      </li>
    </Card>
  )
}

export default MeetupItem
