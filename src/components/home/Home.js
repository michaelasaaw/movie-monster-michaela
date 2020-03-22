import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Container className="start-container">
        <Row>
          <Col>
            {localStorage.username && <h2>Welcome back to Movie Monster</h2>}
            {!localStorage.username && <h2>Welcome to Movie Monster</h2>}
            <p>The only movie finding service you'll ever need</p>
          </Col>
        </Row>
      </Container>
      <Container className="start-container-background"></Container>
    </div>
  );
};

export default Home;
