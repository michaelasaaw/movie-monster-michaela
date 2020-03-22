import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Movie from "./../movie/Movie";
import TMDB from "../../api/tmdb/TMDB";
import { useEffect } from "react";
const tmdb = new TMDB();

const Favourites = () => {

  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (localStorage.session_id) {
      getFavourites();
    } else {
      window.location.href = "/auth";
    }
  }, []);

  const getFavourites = async () => {
    try {
      const response = await tmdb.getFavourites();
      setMovies(response.data.results)
      setError(null)
    } catch (exception) {
      setError("Couldn't get favourites :(")
    }
  };

  if (movies && movies.length > 0) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              Favourites
              <span
                role="img"
                className="float-right"
                aria-label="red-heart-emoji"
              >
                ❤️
              </span>
            </h2>
          </Col>
        </Row>
        <Row>
          {movies.map((movie, index) => (
            <Movie
              id={movie.id}
              key={index}
              favourite={true}
              title={movie.title}
              year={movie.release_date}
              description={movie.overview}
              imagePath={movie.poster_path}
            />
          ))}
        </Row>
      </Container>
    );
  } else if (error) {
    return (
      <Container>
        <Row>
          <Col>
          <Alert id="error-box" variant="danger">{ error }</Alert>
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Favourites{" "}
            <span
              role="img"
              className="float-right"
              aria-label="red-heart-emoji"
            >
              ❤️
            </span>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted">
            It's empty here!
            <span role="img" aria-label="sad-emoji">
              😥
            </span>
          </p>
          <p className="text-muted">
            Find favourites to add using our great
            <a href="/search">search</a>
            <span role="img" aria-label="heart-eyes-emoji">
              😍
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
