import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import MovieList from '../movielist/Movielist.js'

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createList(){

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const mdb = require('moviedb')('083fa5e11411b1e085ce96b058432e29');
    mdb.searchMovie({ query: this.state.value }, (err, res) => {
      this.setState({movies: res});
    });
  }
  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="searchMovie">
              <Form.Control type="text" placeholder="Name a great movie" value={this.state.value} onChange={this.handleChange} />
              </Form.Group>
            <Button className="btn btn-dark" type="submit" value="Submit">Search</Button>
          </Form>
        </Col>
        <Col>
          <MovieList movies={this.state.movies} />
        </Col>
      </Row>
    );
  }
}

export default Searchbar;
