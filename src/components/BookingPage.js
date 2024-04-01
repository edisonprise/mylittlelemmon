import React, { useReducer } from "react";
import BookingForm from "../elements/BookingForm";

const BookingPage = () => {
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
    <div data-testid="booking-page">
      <BookingForm
        timesState={timesState} // Pasamos el estado timesState al componente BookingForm
        dispatch={dispatch} // Pasamos la función dispatch al componente BookingForm
      />
    </div>
  );
};

export default BookingPage;
