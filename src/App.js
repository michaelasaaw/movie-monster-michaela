import React from 'react';
import {Container} from 'react-bootstrap'
import Searchbar from './components/searchbar/Searchbar'
import Header from './components/header/Header'
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Searchbar />
    </Container>
  );
}

export default App;
