import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export function FavoritesProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addToFavoritesHandler(meetup) {
    console.log("Adding to favorites");
    console.log(meetup)
    setUserFavorites((currentFavorites) => { // modifies userFavorites to newly returned array
      return currentFavorites.concat(meetup);
    });
  }

  function removeFromFavoritesHandler(meetupId) {
    console.log("Removing from favorites");
    setUserFavorites((currentFavorites) => {  // modifies userFavorites to newly returned array
      return currentFavorites.filter((favorite) => favorite.id !== meetupId);
    });
  }

  function isInFavoritesHandler(meetupId) {
    return userFavorites.some((favorite) => favorite.id === meetupId);
  }

  // because we want to use above handlers, we make it accessible to other components
  const context = {
    favorites: userFavorites,
    total: userFavorites.length,
    addFavorite: addToFavoritesHandler,
    removeFavorite: removeFromFavoritesHandler,
    isFavorite: isInFavoritesHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
