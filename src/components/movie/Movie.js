import React, { useState } from 'react';
import { Button, Col, Media, Alert } from 'react-bootstrap'
import './Movie.css';
import TMDB from '../../api/tmdb/TMDB'
const tmdb = new TMDB();

const Movie = (props) => {

  const [error, setError] = useState(null)

  const getImagePath = (path, width, height) => {
      let url = "https://image.tmdb.org/t/p/w" + width + "/" + path;
      if (!path) {
        url = "https://via.placeholder.com/" + width + "x" + height;
      } 
      return url;
  }

  const addToFavourites = async ( event ) => {
    try {
      await tmdb.manageFavourites(event.target.getAttribute('movieid'), true)
      setError(null)
    } catch (error) {
      setError("Couldn't add movie to favourites right now :(")
    } 
  }

  const removeFromFavourites = async ( event ) => {
    try {
      await tmdb.manageFavourites(event.target.getAttribute('movieid'), false) 
      setError(null)
    } catch {
      setError("Couldn't remove movie from favourites right now :(")
    }
  }
 
  const addToWatchlist = async ( event ) => {
    try {
      await tmdb.manageWatchlist(event.target.getAttribute('movieid'), true)
      setError(null)
    } catch {
      setError("Couldn't add movie to watchlist right now :(")
    }
  }

  const removeFromWatchlist = async ( event ) => {
    try {
      await tmdb.manageWatchlist(event.target.getAttribute('movieid'), false) 
      setError(null)
    } catch {
      setError("Couldn't remove movie from watchlist right now :(")
    }
  }

  if (!error) {
    return(
      <Col sm={12} md={6} xl={4} className="mb-4" key={props.i}>
          <Media>
              <img
                  width={"100px"}
                  src={getImagePath(props.imagePath, 200, 300)}
                  alt={ props.title + " - movie poster"}
              />
              <Media.Body className="p-3 d-flex flex-wrap">
                <div>
                  <h3>{props.title}</h3>
                  <p className="text-muted p-0 mb-2"><small>Release date: {props.year}</small></p>
                  <p className="p-0 mb-3">{props.description.substring(0,300) + "..."}</p>
                </div>
                  
                {props.favourite &&
                  <div className="align-self-end w-100">
                    <Button id="remove-from-favourites-btn" className="float-right" variant="danger"  movieid={props.id} onClick={removeFromFavourites}><i className="fa fa-heart-broken"></i> Remove from favourites</Button>
                  </div>
                }
  
                {props.watchlist &&
                  <div className="align-self-end w-100">
                    <Button id="remove-from-watchlist-btn" className="float-right" variant="danger"  movieid={props.id} onClick={removeFromWatchlist}><i className="fa fa-ban"></i> Remove from watchlist</Button>
                  </div>
                }
                
                {!props.favourite && !props.watchlist &&
                  <div className="align-self-end w-100">
                    <Button id="add-to-favourites-btn" className="float-right" variant="primary"  movieid={props.id} onClick={addToFavourites}><i className="fa fa-heart-o"></i> Add to favourites</Button>
                    <Button id="add-to-watchlist-btn" className="float-right" variant="secondary" movieid={props.id} onClick={addToWatchlist}><i className="fa fa-clock-o"></i> Add to watchlist</Button>
                  </div>
                }
              
              </Media.Body>
          </Media>
      </Col>
    )
  } else {
    return(
      <Col>
        <Alert id="error-box" variant="danger">{ error }</Alert>
      </Col>
    )
  }
}

export default Movie;
