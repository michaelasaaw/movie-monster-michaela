import React, { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap'
import TMDB from '../../api/TMDB'

const tmdb = new TMDB();

class Auth extends Component {
    constructor(props) {
        super(props)
        if (!localStorage.session_id) {
            tmdb.createRequestToken();
        } else {
            window.location.href="/approved"
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