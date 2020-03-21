import React, { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap'
import TMDB from '../../api/tmdb/TMDB'

const tmdb = new TMDB();
const BASE_URL_TMDB = "https://www.themoviedb.org/authenticate/"
const APP_HOST = "movie-monster-michaela.herokuapp.com"

class Auth extends Component {
    constructor(props) {
        super(props)
        if (!localStorage.session_id) {
            this.initAuth()
        } else {
            window.location.href="/approved"
        }
    }

    async initAuth() {
        try {
            const response = await tmdb.getRequestToken();
            this.setState({error: null})
            if (window.location === "movie-monster-michaela.herokuapp.com" ) {
                window.location.href = `${BASE_URL_TMDB}${response.data.request_token}?redirect_to=https://${APP_HOST}/approved`;
            } else {
                window.location.href = `https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://5.57.244.204:3000/approved`;
            }    
        } catch (exception) {
            this.setState({error: "Could not get a request token. Please try again."})
        }
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col>    
                        <p>Authentication needed</p>
                    </Col>
                </Row> 
            </Container>
        );
    }
}

export default Auth;