import { Switch, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={AllMeetupsPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/new" component={NewMeetupPage} />
      </Switch>
    </Layout>
  );
}

export default App;
