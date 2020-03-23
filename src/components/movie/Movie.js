import React, { useState } from "react";
import { Button, Col, Media, Alert } from "react-bootstrap";
import "./Movie.css";
import TMDB from "../../api/tmdb/TMDB";
const tmdb = new TMDB();

const Movie = props => {
  const [error, setError] = useState(null);
  const [favourite, setFavourite] = useState(props.favourite);
  const [watchlist, setWatchlist] = useState(props.watchlist);

  const getImagePath = (path, width, height) => {
    let url = "https://image.tmdb.org/t/p/w" + width + "/" + path;
    if (!path) {
      url = "https://via.placeholder.com/" + width + "x" + height;
    }
    return url;
  };

  const addToFavourites = async event => {
    try {
      await tmdb.manageFavourites(event.target.getAttribute("movieid"), true);
      setFavourite(true);
      setError(null);
    } catch (error) {
      console.log(error)
      setError("Couldn't add movie to favourites right now :(");
    }
  };

  const removeFromFavourites = async event => {
    try {
      await tmdb.manageFavourites(event.target.getAttribute("movieid"), false);
      props.onUpdate();
      setFavourite(false);
      setError(null);
    } catch (error) {
      console.log(error)
      setError("Couldn't remove movie from favourites right now :(");
    }
  };

  const addToWatchlist = async event => {
    try {
      await tmdb.manageWatchlist(event.target.getAttribute("movieid"), true);
      setWatchlist(true);
      setError(null);
    } catch (error){
      console.log(error)
      setError("Couldn't add movie to watchlist right now :(");
    }
  };

  const removeFromWatchlist = async event => {
    try {
      await tmdb.manageWatchlist(event.target.getAttribute("movieid"), false);
      props.onUpdate();
      setWatchlist(false);
      setError(null);
    } catch (error) {
      console.log(error)
      setError("Couldn't remove movie from watchlist right now :(");
    }
  };

  if (!error) {
    return (
      <Col sm={12} md={6} xl={4} className="mb-4" key={props.i}>
        <Media>
          <img
            width={"100px"}
            src={getImagePath(props.imagePath, 200, 300)}
            alt={props.title + " - movie poster"}
          />
          <Media.Body className="p-3 d-flex flex-wrap">
            <div>
              <h3>{props.title}</h3>
              <p className="text-muted p-0 mb-2">
                <small>Release date: {props.year}</small>
              </p>
              <p className="p-0 mb-3">
                {props.description.substring(0, 300) + "..."}
              </p>
            </div>
            <div className="align-self-end w-100">
              {favourite && (
                <Button
                  id="remove-from-favourites-btn"
                  className="btn-block text-left"
                  variant="danger"
                  movieid={props.id}
                  onClick={removeFromFavourites}
                >
                  <i className="fa fa-heart-broken"></i> Remove from favourites
                </Button>
              )}
              {!favourite && (
                <Button
                  id="add-to-favourites-btn"
                  className="btn-block text-left"
                  disabled={!localStorage.session_id}
                  variant="primary"
                  movieid={props.id}
                  onClick={addToFavourites}
                  title={
                    !localStorage.session_id
                      ? "Log in to add favourite"
                      : "Add favourite"
                  }
                >
                  <i className="fa fa-heart-o"></i> Add to favourites
                </Button>
              )}

              {watchlist && (
                <Button
                  id="remove-from-watchlist-btn"
                  className="btn-block text-left"
                  variant="danger"
                  movieid={props.id}
                  onClick={removeFromWatchlist}
                >
                  <i className="fa fa-ban"></i> Remove from watchlist
                </Button>
              )}
              {!watchlist && (
                <Button
                  id="add-to-watchlist-btn"
                  disabled={!localStorage.session_id}
                  className="btn-block text-left"
                  variant="secondary"
                  movieid={props.id}
                  onClick={addToWatchlist}
                  title={
                    !localStorage.session_id
                      ? "Log in to add to watchlist"
                      : "Add to watchlist"
                  }
                >
                  <i className="fa fa-clock-o"></i> Add to watchlist
                </Button>
              )}
            </div>
          </Media.Body>
        </Media>
      </Col>
    );
  } else {
    return (
      <Col>
        <Alert id="error-box" variant="danger">
          {error}
        </Alert>
      </Col>
    );
  }
};

export default Movie;
