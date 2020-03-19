import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Searchresult from './Searchresult.js'
import TMDB from '../../api/TMDB'
import './Search.css';

const tmdb = new TMDB();

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: {}};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    tmdb.search(this.state.value, this.setMovies.bind(this))
  }
  // callback function
  setMovies( movies ) {
    this.setState({movies: movies})
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="d-flex" controlId="searchMovie">
                  <Form.Control size="lg" type="text" placeholder="Name a great movie" value={this.state.value} onChange={this.handleChange} />
                  <Button className="btn btn-primary px-5" type="submit" value="Submit"><i className="fa fa-search"></i></Button>
              </Form.Group>
            </Form>
          </Col>
          <Col sm={12}>
            <Searchresult movies={this.state.movies} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
