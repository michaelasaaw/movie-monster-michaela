import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Movie from "./../movie/Movie";
import TMDB from "../../api/tmdb/TMDB";
const tmdb = new TMDB();

const Watchlist = () => {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (localStorage.session_id) {
      getWatchlist();
    } else {
      window.location.href = "/auth";
    }
  }, []);

  const getWatchlist = async () => {
    try {
      const response = await tmdb.getWatchlist();
      setMovies(response.data.results);
      setError(null);
    } catch (exception) {
      setError("Couldn't get watchlist :(");
    }
  };

  if (movies && movies.length > 0) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              Watchlist{" "}
              <span role="img" className="float-right" aria-label="clock-emoji">
                🕒
              </span>
            </h2>
          </Col>
        </Row>
        <Row>
          {movies.map((movie, index) => (
            <Movie
              watchlist={true}
              id={movie.id}
              key={index}
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
            <Alert id="error-box" variant="danger">{error}</Alert>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Watchlist
            <span role="img" className="float-right" aria-label="clock-emoji">
              🕒
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
            Find movies to add to your watchlist using our great
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

export default Watchlist;
