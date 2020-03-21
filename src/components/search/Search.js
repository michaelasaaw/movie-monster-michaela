import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import Searchresult from './Searchresult.js'
import TMDB from '../../api/tmdb/TMDB'
import './Search.css';

const tmdb = new TMDB();

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: {}, error: null, value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await tmdb.getMoviesBySearch(this.state.value)
      this.setState({ movies: response.data, error: null })
    } catch (execption) {
      this.setState({error: "Ooops, something went wrong! It's probably our fault. Please try again later."})
    }
  }

  render() {

    return (
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="d-flex" controlId="searchMovie">
                  <Form.Control size="lg" type="text" placeholder="Name a great movie" value={this.state.value} onChange={this.handleChange} />
                  <Button className="btn btn-primary px-5" type="submit" value="Submit"><i className="fa fa-search"></i></Button>
              </Form.Group>
            </Form>
          </Col>
          { this.state.error &&
          <Col sm={12} lg={6}>
            <Alert variant="danger">{this.state.error}</Alert>
          </Col>
          }
        </Row>
        { this.state.movies &&
          <Searchresult movies={this.state.movies} />
        }
      </Container>
    );
  }
}

export default Search;
