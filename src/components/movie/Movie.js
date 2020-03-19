import React from 'react';
import { Col, Media } from 'react-bootstrap'
import './Movie.css';
import TMDB from '../../api/TMDB'
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
    addToFavourites(event) {
      console.log("add to favourites")
      tmdb.addToFavourites(event.target.getAttribute('movieid'), this.addedToFavourites)
    }

    // callback
    addedToFavourites() {
      console.log('added!')
    }

    addToWatchlist(event) {
      console.log("add to watchlist")
      tmdb.addToWatchlist(event.target.getAttribute('movieid'), this.addedToFavourites)
    }

    addedToWatchlist() {
      console.log('added!')
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
                <Media.Body className="p-3">
                    <h3>{this.props.title}</h3>
                    <div className="add-to-list">
                        <i className="fa fa-heart-o add-to-favourites" movieid={this.props.id} onClick={this.addToFavourites.bind(this)}></i>
                        <i className="fa fa-clock-o add-to-watchlist" movieid={this.props.id} onClick={this.addToWatchlist.bind(this)}></i>
                    </div>
                    <p className="text-muted"><small>Release date: {this.props.year}</small></p>
                    <p>{this.props.description.substring(0,140) + "..."}</p>
                </Media.Body>
            </Media>
        </Col>
      )
  }
}

export default Movie;
