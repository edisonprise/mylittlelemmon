import React, { useState } from "react";
import "../styles/booking.css";

const BookingForm = ({ timesState, dispatch }) => {
  const [date] = useState("");
  const [time, setTime] = useState(
    timesState && timesState.length > 0 ? timesState[0] : ""
  );
  const [guests, setGuests] = useState("5");
  const [occasion, setOccasion] = useState("birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    // Dispatch para actualizar los horarios basados en la fecha seleccionada
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });

    // Limpiar el tiempo si los horarios no están disponibles para la fecha seleccionada
    if (!timesState || !timesState.length) {
      setTime("12/11/2012");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
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
