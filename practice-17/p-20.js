// ! Write a function that converts a temperature in Celsius to Fahrenheit.

function celsiusToFahrenheit(C) {
  let F = (C * 9) / 5 + 32;
  F = Math.round(F);
  console.log(`${C}°C = ${F}°F`);
}

celsiusToFahrenheit(40.2);
