import React, {useState, useEffect} from "react";
import MeetupItem from "./MeetupItem";

const MeetupList = ({meetups}) => {
  const [loading, setLoading] = useState(false);
  const [loadedMeetups, setMeetups] = useState([]);

  useEffect(() => {
    setLoading(true)
    setMeetups(meetups)
    setLoading(false)
  }, [meetups])

  return ( 
    loading ? <h1>Loading...</h1> : (
    <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
      {loadedMeetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
            favourite={meetup.favourite}
          />
        );
      })}
    </ul>
    )
  );
};

export default MeetupList;
