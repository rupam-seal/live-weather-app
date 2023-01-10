import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Body from '../components/Body';

const HomePage = () => {
  const [search, setSearch] = useState();
  const [weather, setWeather] = useState({});

  const api_key = 'e34323ec7e274ae5d886f444c2eb4823';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`;

  const searchPressed = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <>
      <div className="container">
        <Topbar />
        <Body />
      </div>
    </>
  );
};

export default HomePage;
