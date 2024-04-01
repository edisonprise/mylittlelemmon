import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  // Verificar que el encabezado está presente
  const headerElement = screen.getByRole("banner");
  expect(headerElement).toBeInTheDocument();

  // O verificar que el pie de página está presente
  // const footerElement = screen.getByRole("contentinfo");
  // expect(footerElement).toBeInTheDocument();
});
