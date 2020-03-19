import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Movie from './../movie/Movie'
import TMDB from '../../api/TMDB'
const tmdb = new TMDB();

class Favourites extends React.Component {

  constructor(props) {
    super(props)
    this.state = {movies:[]};
    this.initFavouriteMovies = this.initFavouriteMovies.bind(this);
    if (localStorage.session_id){
      tmdb.getFavouritesMovies(this.initFavouriteMovies)
    } else {
      window.location.href = "/auth";
    }
  }

  initFavouriteMovies(movies) {
    this.setState({movies: movies.data.results})
  }

  render(){
    if (this.state.movies && this.state.movies.length > 0) {
      return(
        <Container>
          <Row>
            <Col>
              <h2>Favourites<span role="img" className="float-right" aria-label="red-heart-emoji">❤️</span></h2>
              
            </Col>
          </Row>
          <Row>
          {this.state.movies.map((movie, index) => (
            <Movie id={movie.id} key={index} title={movie.title} year={movie.release_date} description={movie.overview} imagePath={movie.poster_path } />
          ))}
          </Row>
        </Container>
      )

    } else {
      return (
        <Container>
          <Row>
            <Col>
              <h2>Favourites <span role="img" className="float-right" aria-label="red-heart-emoji">❤️</span></h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-muted">It's empty here! <span role="img" aria-label="sad-emoji">😥</span></p>
              <p className="text-muted">Find favourites to add using our great <Link to="/search">search</Link> <span role="img" aria-label="heart-eyes-emoji">😍</span></p>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default Favourites;
