import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

class Navigation extends Component {

    render () {
        return (
        <nav>
          <ul>
            <li>
              <Link className="home-link" to="/"><h1 className="start-heading">M<span>ovie Monster</span></h1></Link>
            </li>
            <li>
              <Link to="/search"><i className="fa fa-search mr-2"></i> <span>Search</span></Link>
            </li>
            <li>
              <Link to="/favourites"><i className="fa fa-heart-o mr-2"></i> <span>Favourites</span></Link>
            </li>
            <li>
              <Link to="/watchlist"><i className="fa fa-clock-o mr-2"></i> <span>Watchlist</span></Link>
            </li>
            <li>
              <Link to="/auth"><i className="fa fa-user mr-2"></i> <span>Profile</span></Link>
            </li>
          </ul>
        </nav>
        );
    }
}

export default Navigation;