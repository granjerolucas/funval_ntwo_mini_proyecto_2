export const getCompassDirection = (angle) => {
  angle = ((angle % 360) + 360) % 360;

  // Definir las direcciones con sus rangos
  const dirs = [
    { min: 348.75, max: 360, abbreviation: "N", description: "Norte" },
    { min: 0, max: 11.25, abbreviation: "N", description: "Norte" },
    {
      min: 11.25,
      max: 33.75,
      abbreviation: "NNE",
      description: "Norte-Noreste",
    },
    { min: 33.75, max: 56.25, abbreviation: "NE", description: "Noreste" },
    {
      min: 56.25,
      max: 78.75,
      abbreviation: "ENE",
      description: "Este-Noreste",
    },
    { min: 78.75, max: 101.25, abbreviation: "E", description: "Este" },
    {
      min: 101.25,
      max: 123.75,
      abbreviation: "ESE",
      description: "Este-Sureste",
    },
    { min: 123.75, max: 146.25, abbreviation: "SE", description: "Sureste" },
    {
      min: 146.25,
      max: 168.75,
      abbreviation: "SSE",
      description: "Sur-Sureste",
    },
    { min: 168.75, max: 191.25, abbreviation: "S", description: "Sur" },
    {
      min: 191.25,
      max: 213.75,
      abbreviation: "SSW",
      description: "Sur-Suroeste",
    },
    { min: 213.75, max: 236.25, abbreviation: "SW", description: "Suroeste" },
    {
      min: 236.25,
      max: 258.75,
      abbreviation: "WSW",
      description: "Oeste-Suroeste",
    },
    { min: 258.75, max: 281.25, abbreviation: "W", description: "Oeste" },
    {
      min: 281.25,
      max: 303.75,
      abbreviation: "WNW",
      description: "Oeste-Noroeste",
    },
    { min: 303.75, max: 326.25, abbreviation: "NW", description: "Noroeste" },
    {
      min: 326.25,
      max: 348.75,
      abbreviation: "NNW",
      description: "Norte-Noroeste",
    },
  ];

  // Encontrar la dirección correspondiente al ángulo
  const dir = dirs.find((dir) => {
    if (dir.min > dir.max) {
      // Caso especial para el Norte (348.75-11.25)
      return angle >= dir.min || angle <= dir.max;
    }
    return angle >= dir.min && angle < dir.max;
  });

  return {
    abbreviation: dir.abbreviation,
    description: dir.description,
    angulo: angle,
  };
};

const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const convertToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const convertTo = (type, value) => {
  if (type === "celsius") {
    return convertToCelsius(value);
  }
  if (type === "fahrenheit") {
    return convertToFahrenheit(value);
  }
};
