import React from 'react';
import { Col, Row, Alert } from 'react-bootstrap'
import Movie from '../movie/Movie'


class Searchresult extends React.Component {

  render() {
    if (this.props.movies.results) {
      return(
        <Row>
        {this.props.movies.results.map((movie, index) => (
          <Movie id={movie.id} key={index} title={movie.title} year={movie.release_date} description={movie.overview} imagePath={movie.poster_path } />
      ))}
        </Row>
      )
    } else if (this.props.movies.results && this.props.movies.results.length === 0) {
       return(
        <Row>
          <Col lg={6}>
            <Alert variant="warning">
              Zero results. Zorry!
            </Alert>
          </Col>
        </Row>
      ) 
    } else {
      return (
        <Row></Row>
      )
    }
  }
}

export default Searchresult;
