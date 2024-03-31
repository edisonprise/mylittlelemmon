import React, { useState } from "react";
import "../styles/booking.css";

export const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(
    availableTimes.length > 0 ? availableTimes[0] : ""
  );
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("birthday");

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
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((timeOption, index) => (
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
