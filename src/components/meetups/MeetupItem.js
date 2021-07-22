import { useContext } from "react";
import FavoritesContext from "../../store/FavoritesContext";

import Card from "../ui/Card";
import style from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const isFavorite = favoritesCtx.isFavorite(props.id);

  function addRemoveHandler() {
    if (isFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li>
      <Card>
        <div className={style.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <div className={style.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
        </div>
        <div className={style.actions}>
          <button onClick={addRemoveHandler}>
            {isFavorite ? "Remove Favorite" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
