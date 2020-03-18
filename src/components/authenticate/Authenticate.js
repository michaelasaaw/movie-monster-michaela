import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'

const axios = require('axios');

class Authentication extends Component {
    componentWillMount() {
        if (localStorage.session_token) {
            console.log("Approved!");
        }
        else if (localStorage.request_token) {
            console.log("Almost approved");
            this.authenticate(this.createSession)
        }
    }
    createSession() {
        
        axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=083fa5e11411b1e085ce96b058432e29', {
            request_token: localStorage.request_token,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
    }
    authenticate(callback){
        axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=083fa5e11411b1e085ce96b058432e29')
            .then(function (response) {
                console.log(response);
                localStorage.request_token = response.data.request_token;
                window.location.href = "https://www.themoviedb.org/authenticate/" + response.data.request_token;
                
            })
            .catch(function (error) {
                console.log(error.statusText);
            })
            .finally(function () {
            // always executed
            });
    }
    render () {
        return (
            <Row>
                <Col>    
                    <p>Inloggad!</p>
                </Col>
            </Row> 
        );
    }
}

export default Authentication;