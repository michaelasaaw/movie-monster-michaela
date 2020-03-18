import React from 'react';
import { ListGroup, Media } from 'react-bootstrap'
import './Movie.css';


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
    addToFavourites() {
        console.log("add to favourites");
    }
    addToWatchlist() {
        console.log("add to watchlist")
    }
    render() {
      return(
        <ListGroup.Item key={this.props.i}>
            <Media>
                <img
                    className="mr-3"
                    width={"100px"}
                    src={this.checkImagePath(this.props.imagePath, 200, 300)}
                    alt={this.title + " - movie poster"}
                />
                <Media.Body>
                    <h3>{this.props.title}</h3>
                    <div className="add-to-list">
                        <i className="fa fa-heart add-to-favourites" onClick={this.addToFavourites.bind(this)}></i>
                        <i className="fa fa-star add-to-watchlist" onClick={this.addToWatchlist.bind(this)}></i>
                    </div>
                    <p className="text-muted"><small>Release date: {this.props.year}</small></p>
                    <p>{this.props.description.substring(0,140) + "..."}</p>
                   
                </Media.Body>
            </Media>
        </ListGroup.Item>
      )
  }
}

export default Movie;
