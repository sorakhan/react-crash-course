import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://learning-react-96db8-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => { // this then block is for the return in line 14
        const meetups = [];
        for (const key in data) {
          // loops through unique ID of meetup created
          const meetup = {
            id: key,
            ...data[key], // gets all object and keys as is and adds to this object
          };

          meetups.push(meetup);
        }
        setisLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); 
  // without useEffect, the fetch call would keep running whenever this component/page is shown
  // Thanks to the 2nd argument [], useEffect only execute if the array changes - hence avoiding infinite loads/loops

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
