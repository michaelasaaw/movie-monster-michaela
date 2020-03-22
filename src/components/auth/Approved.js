import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import TMDB from "../../api/tmdb/TMDB";

const tmdb = new TMDB();

const Approved = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!localStorage.session_id) {
      initSession();
    } else if (localStorage.session_id === "undefined") {
      window.location.href = "/auth";
    }
  });

  const initSession = async () => {
    try {
      let response = await tmdb.createSession(getRequestTokenFromUrl());
      localStorage.session_id = response.data.session_id;
      setError(null);
      try {
        let accountDetails = await tmdb.getAccountDetails(
          localStorage.session_id
        );
        if (accountDetails.data.name !== "") {
          localStorage.username = accountDetails.data.name;
        } else {
          localStorage.username = accountDetails.data.username;
        }
        localStorage.account_id = accountDetails.data.id;
      } catch (exception) {
        setError("Couldn't get your account details.");
      }
    } catch (exception) {
      setError("Couldn't create new session");
    }
  };

  const getRequestTokenFromUrl = () => {
    console.log("get request token");
    let url_string = window.location.href;
    let url = new URL(url_string);
    return url.searchParams.get("request_token");
  };

  return (
    <Container>
      <Row>
        {!error && (
          <Col>
            <h2>
              Hi {localStorage.username}, You're logged in!{" "}
              <span role="img" className="float-right" aria-label="tv-emoji">
                📺
              </span>
            </h2>
            <p>
              Let's start adding movies!{" "}
              <span role="img" aria-label="popcorn-emoji">
                🍿
              </span>
            </p>
          </Col>
        )}
        {error && (
          <Col>
            <Alert id="error-box" variant="warning">
              {error}
            </Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Approved;
