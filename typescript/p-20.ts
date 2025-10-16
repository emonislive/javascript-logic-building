function celsiusToFahrenheit(C: number) {
  let F: number = (C * 9) / 5 + 32;
  F = Math.round(F);
  console.log(`${C}°C = ${F}°F`);
}

celsiusToFahrenheit(40.4);
