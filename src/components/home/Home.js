import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('HOME');
    // IF ACCOUNT DETAILS WELCOME USER BACK
  }

    render() {
      return(
        <div>
            <Container className="start-container">
                <Row>
                    <Col>
                        <h2>Welcome to Movie Monster</h2>
                        <p>The only movie finding service you'll ever need</p>
                    </Col>
                </Row>
            </Container>
            <Container className="start-container-background"></Container>
        </div>

      )
  }
}

export default Home;
