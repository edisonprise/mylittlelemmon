// BookingPage.js

// Importamos useEffect y useState
import React, { useReducer, useEffect } from "react";
import BookingForm from "../elements/BookingForm";
import { fetchAPI } from "../api";

const BookingPage = () => {
  const timesReducer = (state, action) => {
    switch (action.type) {
      case "SET_TIMES":
        return action.payload; // Actualiza el estado con los horarios recibidos
      default:
        return state;
    }
  };

  // Inicializamos timesState con un array vacío
  const [timesState, dispatch] = useReducer(timesReducer, []);

  // Función para inicializar los horarios
  const initializeTimes = async () => {
    try {
      const today = new Date(); // Obtener la fecha actual
      const response = await fetchAPI(today); // Obtener los horarios disponibles para hoy
      dispatch({ type: "SET_TIMES", payload: response }); // Actualizar el estado con los horarios recibidos
    } catch (error) {
      console.error("Error fetching initial times:", error);
      // Manejar el error
    }
  };

  // Llamamos a initializeTimes cuando el componente se monta
  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div data-testid="booking-page">
      <BookingForm timesState={timesState} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
