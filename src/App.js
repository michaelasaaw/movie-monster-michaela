import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.js";
import Home from "./components/home/Home.js";
import Search from "./components/search/Search.js";
import Favourites from "./components/favourites/Favourites.js";
import Watchlist from "./components/watchlist/Watchlist.js";
import Auth from "./components/auth/Auth.js";
import Approved from "./components/auth/Approved.js";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/approved">
            <Approved />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
