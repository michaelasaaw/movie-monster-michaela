import React from 'react';
import { Col, Row } from 'react-bootstrap'
import Movie from '../movie/Movie'


class Searchresult extends React.Component {
  render() {

    if (this.props.movies.results) {
      console.log(this.props.movies);
      return(
        <Row>
        {this.props.movies.results.map((movie, index) => (
          <Movie id={movie.id} key={index} title={movie.title} year={movie.release_date} description={movie.overview} imagePath={movie.poster_path } />
      ))}
        </Row>
      )

    } else {
      return (
        <Row>
          <Col>
            <p className="text-muted">It's empty here!</p>
          </Col>
        </Row>
      )
    }
  }
}

export default Searchresult;
