import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/main.css";

function Main() {
  return (
    <div className="main-container">
      <div className="background">
        <Container fluid>
          <Row>
            <Col>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="para-container">
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec magna ac elit lacinia fringilla vitae aliquam leo.
                  Sed vitae ullamcorper augue. Nullam nec mi eu turpis finibus
                  interdum
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Main;
