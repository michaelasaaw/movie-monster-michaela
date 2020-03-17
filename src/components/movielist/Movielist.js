import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap'



class Movielist extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    if (this.props.movies.results) {
    
      return(
        <ListGroup>
        
        {this.props.movies.results.map((movie, index) => (
        <ListGroup.Item key={index}>{movie.title}</ListGroup.Item>
      ))}

  
        </ListGroup>
      )

    } else {
      return (
        <ListGroup>
          <p class="text-muted">It's empty here!</p>
        </ListGroup>
      )
    }
  }
}

export default Movielist;
