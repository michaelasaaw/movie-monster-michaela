import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import Searchresult from '../searchresult/Searchresult.js'

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
    const mdb = require('moviedb')('083fa5e11411b1e085ce96b058432e29');
    mdb.searchMovie({ query: this.state.value }, (err, res) => {
      this.setState({movies: res});
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
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
            <Searchresult movies={this.state.movies} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
