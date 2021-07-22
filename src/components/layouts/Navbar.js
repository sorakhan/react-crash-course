import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/FavoritesContext";

import style from "./Navbar.module.css";

function Navbar() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites{" "}
              <span className={style.badge}>{favoritesCtx.total}</span>
            </Link>
          </li>
          <li>
            <Link to="/new">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
