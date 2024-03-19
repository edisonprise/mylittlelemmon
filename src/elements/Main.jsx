import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/main.css";
import restaurantfood from "../images/restaurantfood.jpg";
import greeksalad from "../images/greeksalad.jpg";
import bruschetta from "../images/bruschetta.png";
import lemondessert from "../images/lemondessert.jpg";
import deliveryIcon from "../images/delivery.png";

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
              <div className="container">
                <img
                  src={restaurantfood}
                  className="image"
                  alt="restaurant food"
                />
              </div>
              <button className="reservetable">Reserve a table</button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="content">
        <Container>
          <Row>
            <Col>
              <h4 className="specials">This Weeks Specials!</h4>
              <button className="online">Online Menu</button>
              <div>
                <Row>
                  <div className="card-container">
                    <div className="card">
                      <img src={greeksalad} alt="greek-salad" />
                      <div className="content-below">
                        <span className="name">Greek Salad</span> {/* Nombre */}
                        <span className="price">$10.99</span> {/* Precio */}
                      </div>
                      <div>
                        <span className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam feugiat dui non quam varius, a fermentum
                          nisl auctor. Donec nec mauris augue. Nam sit amet
                          tellus et est hendrerit lacinia vel eu dui. Fusce
                          justo magna, pellentesque vel viverra nec, dictum at
                          sapien. Proin in diam lacus. In orci mauris, faucibus
                          ac leo id,
                        </span>
                      </div>
                      <p className="delivery">
                        <img
                          src={deliveryIcon}
                          alt="delivery"
                          className="delivery-icon"
                        />
                        Order a delivery
                      </p>
                    </div>
                    <div className="card">
                      <img src={bruschetta} alt="bruscheta" />
                      <div className="content-below">
                        <span className="name">Bruscheta</span> {/* Nombre */}
                        <span className="price">$10.99</span> {/* Precio */}
                      </div>
                      <div>
                        <span className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam feugiat dui non quam varius, a fermentum
                          nisl auctor. Donec nec mauris augue. Nam sit amet
                          tellus et est hendrerit lacinia vel eu dui. Fusce
                          justo magna, pellentesque vel viverra nec, dictum at
                          sapien. Proin in diam lacus. In orci mauris, faucibus
                          ac leo id,
                        </span>
                      </div>
                      <p className="delivery">
                        <img
                          src={deliveryIcon}
                          alt="delivery"
                          className="delivery-icon"
                        />
                        Order a delivery
                      </p>
                    </div>
                    <div className="card">
                      <img src={lemondessert} alt="lemmon-dessert" />
                      <div className="content-below">
                        <span className="name">Lemon Dessert</span>{" "}
                        {/* Nombre */}
                        <span className="price">$10.99</span> {/* Precio */}
                      </div>
                      <div>
                        <span className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam feugiat dui non quam varius, a fermentum
                          nisl auctor. Donec nec mauris augue. Nam sit amet
                          tellus et est hendrerit lacinia vel eu dui. Fusce
                          justo magna, pellentesque vel viverra nec, dictum at
                          sapien. Proin in diam lacus. In orci mauris, faucibus
                          ac leo id,
                        </span>
                      </div>
                      <p className="delivery">
                        <img
                          src={deliveryIcon}
                          alt="delivery"
                          className="delivery-icon"
                        />
                        Order a delivery
                      </p>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Main;
