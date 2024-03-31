import React, { useReducer, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/main.css";
import restaurantfood from "../images/restaurantfood.jpg";
import greeksalad from "../images/greeksalad.jpg";
import bruschetta from "../images/bruschetta.png";
import lemondessert from "../images/lemondessert.jpg";
import deliveryIcon from "../images/delivery.png";
import avatar from "../images/user.png";
import chicago from "../images/chicago.jpg";
import restaurant from "../images/restaurant.png";
import BookingForm from "./BookingForm";

function Main() {
  const timesReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        // Aquí puedes implementar la lógica para actualizar los horarios basados en la fecha seleccionada
        // Por ahora, simplemente devolveremos la lista original de horarios
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    // Esta función podría ser útil si necesitas inicializar los horarios de alguna manera específica
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const [timesState, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const updateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", payload: date });
  };

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
        <Container fluid>
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
                        <div className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam feugiat dui non quam varius, a fermentum
                          nisl auctor. Donec nec mauris augue. Nam sit amet
                          tellus et est hendrerit lacinia vel eu dui. Fusce
                          justo magna, pellentesque vel viverra nec, dictum at
                          sapien. Proin in diam lacus. In orci mauris, faucibus
                          ac leo id,
                        </div>
                      </div>
                      <p className="delivery">Order a delivery</p>
                    </div>
                    <div className="delivery-icon">
                      <img src={deliveryIcon} alt="delivery" />
                    </div>
                    <div className="card">
                      <img src={bruschetta} alt="bruscheta" />
                      <div className="content-below">
                        <span className="name">Bruscheta</span> {/* Nombre */}
                        <span className="price">$10.99</span> {/* Precio */}
                      </div>
                      <div>
                        <div className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam feugiat dui non quam varius, a fermentum
                          nisl auctor. Donec nec mauris augue. Nam sit amet
                          tellus et est hendrerit lacinia vel eu dui. Fusce
                          justo magna, pellentesque vel viverra nec, dictum at
                          sapien. Proin in diam lacus. In orci mauris, faucibus
                          ac leo id,
                        </div>
                      </div>
                      <p className="delivery">Order a delivery</p>
                    </div>
                    <div className="delivery-icon">
                      <img src={deliveryIcon} alt="delivery" />
                    </div>
                    <div className="card">
                      <img src={lemondessert} alt="lemmon-dessert" />
                      <div className="content-below">
                        <span className="name">Lemon Dessert</span>{" "}
                        {/* Nombre */}
                        <span className="price">$10.99</span> {/* Precio */}
                      </div>
                      <div>
                        <div className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam feugiat dui non quam varius, a fermentum
                          nisl auctor. Donec nec mauris augue. Nam sit amet
                          tellus et est hendrerit lacinia vel eu dui. Fusce
                          justo magna, pellentesque vel viverra nec, dictum at
                          sapien. Proin in diam lacus. In orci mauris, faucibus
                          ac leo id,
                        </div>
                      </div>
                      <p className="delivery">Order a delivery</p>
                    </div>
                    <div className="delivery-icon">
                      <img src={deliveryIcon} alt="delivery" />
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Col>
            <div className="testim-card">
              <div className="testimonials">
                <div>Testimonials</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="avatar-container">
              <div className="avatar-box">
                <img src={avatar} alt="user-avatar" />
                <div className="below">
                  <div className="name">Name:</div>
                  <div className="rating">Rating:</div>
                </div>
              </div>
              <div className="avatar-box">
                <img src={avatar} alt="user-avatar" />
                <div className="below">
                  <div className="name">Name:</div>
                  <div className="rating">Rating:</div>
                </div>
              </div>
              <div className="avatar-box">
                <img src={avatar} alt="user-avatar" />
                <div className="below">
                  <div className="name">Name:</div>
                  <div className="rating">Rating:</div>
                </div>
              </div>
              <div className="avatar-box">
                <img src={avatar} alt="user-avatar" />
                <div className="below">
                  <div className="name">Name:</div>
                  <div className="rating">Rating:</div>
                </div>
              </div>
            </div>
          </Col>
        </Container>
        <Container fluid>
          <Row>
            <Col className="chicago">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <div className="para-container1">
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  auctor, mauris sit amet bibendum facilisis, magna lorem
                  posuere odio, in convallis metus nisi laoreet arcu. Sed
                  venenatis placerat justo sed pretium. Ut vel augue eu odio
                  ullamcorper efficitur in a lorem. Nunc sed neque vel enim
                  euismod semper vel sit amet dolor. Sed hendrerit imperdiet
                  malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Phasellus enim risus, lobortis sit amet ligula eget,
                  posuere accumsan mauris.
                </p>
                <div className="image-container">
                  <img src={restaurant} alt="Imagen 1" className="imagen1" />
                  <img src={chicago} alt="Imagen 2" className="imagen2" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Main;
