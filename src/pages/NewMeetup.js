import { useHistory } from "react-router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // This fetch url is from Firestore db. We added meetups.json by ourselves
    // By default, fetch does a GET request
    fetch(
      "https://learning-react-96db8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
