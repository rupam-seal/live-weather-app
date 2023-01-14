import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Body from '../components/Body';
import axios from 'axios';
import { Forecast, Weather } from '../api/WeatherApi';

const HomePage = () => {
  const [search, setSearch] = useState();
  const [weather, setWeather] = useState({});
  const [day, setDay] = useState();

  const searchPressed = () => {
    const fetchWeather = () => {
      axios.get(Weather(search)).then((response) => {
        setWeather(response.data);
        fetchForcast(response.data);
      });
    };

    const fetchForcast = (data) => {
      axios
        .get(Forecast(data.coord.lat, data.coord.lon))
        .then((response) => {
          setDay(response.data.daily);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchWeather();
  };

  return (
    <>
      <div className="container">
        <Topbar />
        {typeof weather.main !== 'undefined' ? (
          <Body
            day={day}
            setSearch={setSearch}
            searchPressed={searchPressed}
            name={weather.name}
            country={weather.sys.country}
            desc={weather.weather[0].description}
            temp={weather.main.temp}
            humadity={weather.main.humidity}
            preasure={weather.main.pressure}
          />
        ) : (
          <Body
            setSearch={setSearch}
            searchPressed={searchPressed}
            name={'New York'}
            desc={'rainy season'}
            temp={'-9'}
            humadity={'69'}
            preasure={'89'}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
