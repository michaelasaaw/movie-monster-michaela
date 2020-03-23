import React from "react";
import { Col, Row, Alert } from "react-bootstrap";
import Movie from "../movie/Movie";

const Searchresult = props => {
  const updateResult = () => {
    // When movie adds to list via searchresult. Do something.
  };
  if (props.movies.results) {
    return (
      <Row>
        {props.movies.results.map((movie, index) => (
          <Movie
            onUpdate={updateResult}
            id={movie.id}
            key={index}
            title={movie.title}
            year={movie.release_date}
            description={movie.overview}
            imagePath={movie.poster_path}
          />
        ))}
      </Row>
    );
  } else if (props.movies.results && props.movies.results.length === 0) {
    return (
      <Row>
        <Col lg={6}>
          <Alert variant="warning">Zero results. Zorry!</Alert>
        </Col>
      </Row>
    );
  } else {
    return <Row></Row>;
  }
};

export default Searchresult;
