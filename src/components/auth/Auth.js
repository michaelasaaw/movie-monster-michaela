import React, { useEffect, useState } from 'react';
import { Container,Row, Col, Alert } from 'react-bootstrap'
import TMDB from '../../api/tmdb/TMDB'

const tmdb = new TMDB();
const BASE_URL_TMDB = "https://www.themoviedb.org/authenticate/"
const APP_HOST = "movie-monster-michaela.herokuapp.com"

const Auth = () => {

    const [ error, setError ] = useState(null)

    useEffect( () => {
        if (!localStorage.session_id ||localStorage.session_id === "undefined") {
          authRequest()
        } else {
          window.location.href = "/approved";
        }
    }, []);
    
    const authRequest = async () => {
        try {
            const response = await tmdb.getRequestToken();
            setError(null)
            if (window.location === "movie-monster-michaela.herokuapp.com" ) {
                window.location.href = `${BASE_URL_TMDB}${response.data.request_token}?redirect_to=https://${APP_HOST}/approved`;
            } else {
                window.location.href = `https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://5.57.244.204:3000/approved`;
            }    
        } catch {
            setError('Something went wrong logging you in. Sorry!')
        }
    }

    return (
        <Container>
            <Row>
                <Col>{error && <Alert id="error-box" variant="danger">{error}</Alert>}
                    <Alert variant="warning">You need to be authenticated. Stand by.</Alert>
                </Col>
            </Row>
        </Container>
 
    )
}

export default Auth;