import React, { useState, useEffect } from "react";
import "../styles/booking.css";
import { availableTimesData } from "../api.js"; // Importa los datos de los horarios disponibles

const BookingForm = ({ timesState, dispatch, onBookingConfirm }) => {
  const [date, setDate] = useState(""); // Estado para la fecha seleccionada
  const [time, setTime] = useState(""); // Estado para el tiempo seleccionado
  const [guests, setGuests] = useState("5");
  const [occasion, setOccasion] = useState("birthday");

  // Manejar cambios en la fecha seleccionada
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate); // Actualiza el estado de la fecha seleccionada
    // Actualiza los horarios disponibles en base a la fecha seleccionada
    if (selectedDate in availableTimesData) {
      const availableTimes = availableTimesData[selectedDate];
      dispatch({ type: "SET_TIMES", payload: availableTimes });
      setTime(availableTimes[0]); // Establece el primer horario disponible como valor predeterminado
    } else {
      dispatch({ type: "SET_TIMES", payload: [] }); // Si no hay horarios disponibles, vacía la lista
      setTime(""); // Restablece el tiempo seleccionado
    }
  };

  // Actualizar el estado del tiempo cuando cambian los horarios disponibles
  useEffect(() => {
    if (timesState && timesState.length > 0) {
      setTime(timesState[0]); // Establecer el primer horario disponible como valor predeterminado
    }
  }, [timesState]); // Ejecutar cuando cambia la lista de horarios disponibles

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { date, time, guests, occasion });
    // Aquí puedes manejar la confirmación de la reserva
    if (onBookingConfirm) {
      onBookingConfirm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {Array.isArray(timesState) &&
          timesState.map((timeOption, index) => (
            <option key={index}>{timeOption}</option>
          ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
