import React from 'react';
import { Button, Col, Media } from 'react-bootstrap'
import './Movie.css';
import TMDB from '../../api/tmdb/TMDB'
const tmdb = new TMDB();

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        favourite: false,
        watchlist: false,
    };
  }
  checkImagePath(path,width, height) {
      let url = "https://image.tmdb.org/t/p/w" + width + "/" + path;
       
      if (!path) {
        url = "https://via.placeholder.com/" + width + "x" + height;
      } 
      return url;
  }

  async addToFavourites(event) {
    console.log("add to favourites")
    await tmdb.manageFavourites(event.target.getAttribute('movieid'), true)
  }

  async removefromFavourites(event){
    await tmdb.manageFavourites(event.target.getAttribute('movieid'), false)
  }

  addToWatchlist(event) {
    console.log("add to watchlist")
    tmdb.addToWatchlist(event.target.getAttribute('movieid'), this.addedToFavourites)
  }

  render() {
    return(
      <Col sm={12} md={6} lg={4} className="mb-4" key={this.props.i}>
          <Media>
              <img
                  width={"100px"}
                  src={this.checkImagePath(this.props.imagePath, 200, 300)}
                  alt={this.title + " - movie poster"}
              />
              <Media.Body className="p-3 d-flex flex-wrap">
                <div>
                  <h3>{this.props.title}</h3>
                  <p className="text-muted p-0 mb-2"><small>Release date: {this.props.year}</small></p>
                  <p className="p-0 mb-3">{this.props.description.substring(0,300) + "..."}</p>
                </div>
                  
                  <div className="align-self-end w-100">
                    <Button className="add-to-favourites float-right" variant="primary"  movieid={this.props.id} onClick={this.addToFavourites.bind(this)}><i className="fa fa-heart-o"></i> Add to favourites</Button>
                    <Button className="add-to-watchlist float-right" variant="secondary" movieid={this.props.id} onClick={this.addToWatchlist.bind(this)}><i className="fa fa-clock-o"></i> Add to watchlist</Button>
                  </div>
                  
              </Media.Body>
          </Media>
      </Col>
    )
  }
}

export default Movie;
