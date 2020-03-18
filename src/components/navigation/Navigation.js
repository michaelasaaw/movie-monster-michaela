import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button, FormControl,Navbar, Nav, } from 'react-bootstrap'
import './Navigation.css';

const axios = require('axios');

class Navigation extends Component {

    render () {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><h1 className="start-heading">Movie Monster</h1></Navbar.Brand>
                <Nav className="mr-auto">
                    <ul>
                        <li><Link  to="/favourites">Favourites</Link></li>
                        <li><Link to="/watchlist">Watchlist</Link></li>
                        <li><Link to="/auth"><i className="fa fa-user"></i></Link></li>
                    </ul>
                </Nav>
                <Form inline >
                    <FormControl type="text" placeholder="Name a great movie" className="mr-sm-2" />
                    <Button variant="primary"><i className="fa fa-search"></i></Button>
                </Form>
            </Navbar>
        );
    }
}

export default Navigation;