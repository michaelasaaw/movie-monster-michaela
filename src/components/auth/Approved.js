import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import TMDB from '../../api/TMDB';

const tmdb = new TMDB();

class Approved extends Component {
    constructor(props) {
        super(props)
        tmdb.createSession(this.getRequestTokenFromUrl());
    }

    getRequestTokenFromUrl() {
        let url_string = window.location.href;
        let url = new URL(url_string);
        return  url.searchParams.get("request_token");
    }

    render () {
        return (
          <Container>
                <Row>
                    <Col>    
                        <h2>You're logged in! <span role="img" className="float-right" aria-label="tv-emoji">📺</span></h2>
                        <p>Let's start adding movies! <span role="img" aria-label="popcorn-emoji">🍿</span></p>
                    </Col>
                </Row> 
            </Container>
        );
    }
}

export default Approved;