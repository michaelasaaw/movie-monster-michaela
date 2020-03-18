import React from 'react';
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import MovieList from '../searchresult/Searchresult.js'

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
        <Col sm={12} md={6}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="d-flex flex-wrap" controlId="searchMovie">
              <InputGroup>
                <Form.Control size="lg" type="text" placeholder="Name a great movie" value={this.state.value} onChange={this.handleChange} />
                <InputGroup.Append>
                  <Button className="btn btn-primary px-5" type="submit" value="Submit"><i className="fa fa-search"></i></Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={12}>
          <MovieList movies={this.state.movies} />
        </Col>
      </Row>
    );
  }
}

export default Searchbar;
