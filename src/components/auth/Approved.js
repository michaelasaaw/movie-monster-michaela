import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import TMDB from '../../api/tmdb/TMDB';

const tmdb = new TMDB();

class Approved extends Component {
    constructor(props) {
        super(props)
        this.state = {error: null}
        this.initSession()
    }

    async initSession() { 
        try {
            let response = await tmdb.createSession(this.getRequestTokenFromUrl());
            localStorage.session_id = response.data.session_id;
            this.setState({error: null})
            try {
                response = await tmdb.getAccountDetails(localStorage.session_id);
                localStorage.account_id = response.data.id;
            } catch {
                this.setState({error: "Could not get account details. Please try again."})
            }
        } catch (exception) {
            this.setState({error: "Could not create a new session. Please try again."})
        }
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