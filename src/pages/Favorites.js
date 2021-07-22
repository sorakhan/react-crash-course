import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/FavoritesContext";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.total === 0) {
    content = "You have no favorite meetups yet.";
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  );
}

export default FavoritesPage;
