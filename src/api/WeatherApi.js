// COIN LIST
export const Weather = (search) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${process.env.REACT_APP_API_KEY_WEATHER}`;

// COIN LIST
export const Forecast = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY_FORECAST}`;
