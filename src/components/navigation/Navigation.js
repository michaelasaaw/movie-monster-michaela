import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className="home-a" href="/">
            <h1 className="start-heading">
              M<span>ovie Monster</span>
            </h1>
          </a>
        </li>
        <li>
          <a href="/search">
            <i className="fa fa-search mr-2"></i> <span>Search</span>
          </a>
        </li>
        <li>
          <a href="/favourites">
            <i className="fa fa-heart-o mr-2"></i> <span>Favourites</span>
          </a>
        </li>
        <li>
          <a href="/watchlist">
            <i className="fa fa-clock-o mr-2"></i> <span>Watchlist</span>
          </a>
        </li>
        <li>
          <a href="/auth">
            <i className="fa fa-user mr-2"></i> <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
