import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Searchresult from "./Searchresult.js";
import TMDB from "../../api/tmdb/TMDB";
import "./Search.css";

const tmdb = new TMDB();

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSumbit = async event => {
    event.preventDefault();
    try {
      const response = await tmdb.getMoviesBySearch(inputValue);
      setMovies(response.data);
      setError(null);
    } catch (execption) {
      if (inputValue === "") {
        setError("Did you forget something?");
      } else {
        setError(
          "Ooops, something went wrong! It's probably our fault. Please try again later."
        );
      }
    }
  };
  return (
    <Container>
      <Row>
        <Col md={12} lg={6}>
          <Form onSubmit={handleSumbit}>
            <Form.Group className="d-flex" controlId="searchMovie">
              <Form.Control
                size="lg"
                type="text"
                placeholder="Name a great movie"
                value={inputValue}
                onChange={handleChange}
              />
              <Button
                className="btn btn-info px-5"
                type="submit"
                value="Submit"
              >
                <i className="fa fa-search"></i>
              </Button>
            </Form.Group>
          </Form>
        </Col>
        {error && (
          <Col sm={12} lg={6}>
            <Alert variant="danger">{error}</Alert>
          </Col>
        )}
      </Row>
      {movies && <Searchresult movies={movies} />}
    </Container>
  );
};

export default Search;
