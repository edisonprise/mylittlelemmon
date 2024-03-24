import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="description"
          content="Web application that provides options to book tables and show the dishes and services in the traditional mediterranean restaurant My Little Lemon"
        />
        <meta name="og:title" content="My Little Lemon" />
        <meta
          name="og:description"
          content="Traditional restaurant that offers the best mediterranean food in town"
        />
        <meta
          name="og:image"
          content="The image of the restaurant My Little Lemon is a yellow little lemon that represents the simplicity but richness of the mediterranean food that is offered in the restaurant My Little Lemon"
        />
      </Helmet>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Main />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
