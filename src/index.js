import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoritesProvider } from "./store/FavoritesContext";

ReactDOM.render(
  <FavoritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesProvider>,
  document.getElementById("root")
);
