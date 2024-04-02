// api.js

// Simulación de datos de horarios disponibles para la fecha especificada
const availableTimesData = {
  "2024-03-16": ["10:00", "12:00", "14:00", "16:00"],
  "2024-03-17": ["11:00", "13:00", "15:00", "17:00"],
  // Otros datos de horarios disponibles para diferentes fechas
};

// Función para simular la obtención de los horarios disponibles para una fecha específica
export const fetchAPI = async (date) => {
  return new Promise((resolve, reject) => {
    if (!(date instanceof Date && !isNaN(date))) {
      reject(new Error("Invalid date"));
    } else {
      const dateString = date.toISOString().split("T")[0]; // Convertir la fecha a formato YYYY-MM-DD
      const availableTimes = availableTimesData[dateString];
      if (availableTimes && availableTimes.length > 0) {
        resolve(availableTimes); // Si hay horarios disponibles para la fecha, resolvemos la promesa con los horarios
      } else {
        resolve([]); // Si no hay horarios disponibles, devolvemos un array vacío
      }
    }
  });
};
