import React from 'react';
import { ListGroup } from 'react-bootstrap'
import Movie from '../movie/Movie'


class Movielist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.movies.results) {
      return(
        <ListGroup>
        {this.props.movies.results.map((movie, index) => (
          <Movie i={index} title={movie.title} year={movie.release_date} description={movie.overview} imagePath={movie.poster_path } />
      ))}
        </ListGroup>
      )

    } else {
      return (
        <ListGroup>
          <p className="text-muted">It's empty here!</p>
        </ListGroup>
      )
    }
  }
}

export default Movielist;
