import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../src/elements/BookingForm";

describe("BookingForm component", () => {
  test("renders static text", () => {
    render(<BookingForm />);
    const chooseDateText = screen.getByText("Choose date");
    const chooseTimeText = screen.getByText("Choose time");
    const guestsText = screen.getByText("Number of guests");
    const occasionText = screen.getByText("Occasion");
    const submitButtonText = screen.getByText("Make Your reservation");

    expect(chooseDateText).toBeInTheDocument();
    expect(chooseTimeText).toBeInTheDocument();
    expect(guestsText).toBeInTheDocument();
    expect(occasionText).toBeInTheDocument();
    expect(submitButtonText).toBeInTheDocument();
  });
});
