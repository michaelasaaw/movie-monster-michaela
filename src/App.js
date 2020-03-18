import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/navigation/Navigation'
import Search from './components/search/Search'
import Favourites from './components/favourites/Favourites'
import Watchlist from './components/watchlist/Watchlist'
import Authenticate from './components/authenticate/Authenticate'
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/"  component={Search}>
              <Search/>
            </Route>
            <Route path="/auth" component={Authenticate}>
              <Authenticate />
            </Route>
            <Route path="/favourites" component={Favourites}>
              <Favourites />
            </Route>
            <Route path="/watchlist" component={Watchlist}>
              <Watchlist />
            </Route>
          </Switch>     
        </div>
      </Router>
  );
}



export default App;
