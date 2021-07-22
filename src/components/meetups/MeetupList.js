import MeetupItem from "./MeetupItem";

import style from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={style.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
