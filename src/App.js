import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Search from './components/search/Search'
import Favourites from './components/favourites/Favourites'
import Watchlist from './components/watchlist/Watchlist'
import Auth from './components/auth/Auth'
import Approved from './components/auth/Approved'
import './App.css';

class App extends React.Component {
  render() {
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
  }
 
}



export default App;
