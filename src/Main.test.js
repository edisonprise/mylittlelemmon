// Importar las funciones a probar
// main.test.js

import { initializeTimes, timesReducer } from "./elements/Main.jsx";

describe("initializeTimes function", () => {
  test("should return an array of times", () => {
    const times = initializeTimes();
    // Verifica que la función devuelva un array
    expect(Array.isArray(times)).toBe(true);
    // Verifica que el array tenga la longitud esperada
    expect(times.length).toBe(6); // Suponiendo que se esperan 6 tiempos
    // Verifica algunos valores específicos en el array
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

describe("updateTimes function", () => {
  test("should return the same value as provided in the state", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const newState = timesReducer(initialState, {
      type: "UPDATE_TIMES",
      payload: "new date",
    });
    // Verifica que la función devuelva el mismo estado que se proporciona
    expect(newState).toEqual(initialState);
  });
});
