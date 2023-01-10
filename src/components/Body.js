import React, { memo, useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { MdDateRange } from 'react-icons/md';

const Body = memo(() => {
  const [search, setSearch] = useState();
  const [weather, setWeather] = useState({});

  const api_key = API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${api_key}`;

  const searchPressed = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  console.log(weather);

  return (
    <>
      {typeof weather.main !== 'undefined' ? (
        <div className="section">
          <div className="search">
            <div className="search__warpper">
              <div className="search__icon">
                <RiSearch2Line />
              </div>
              <input
                className="search__inp"
                type="text"
                placeholder="Search places ..."
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button className="search__btn" onClick={searchPressed}>
                Search
              </button>
            </div>
            <div className="date">
              <div className="date__icon">
                <MdDateRange />
              </div>
              <span className="date__txt">{new Date().toDateString()}</span>
            </div>
          </div>

          <div className="detail">
            <div className="detail__place">
              <span>{weather.name}</span>
              <span>(US)</span>
            </div>
            <span className="detail__desc">
              {weather.weather[0].description}
            </span>
          </div>

          <div className="card">
            <div className="card__item item1">
              <span className="card__title">Temparature</span>
              <span className="card__sub">{weather.main.temp}&#176;C</span>
            </div>
            <div className="card__item item2">
              <span className="card__title">Humadity</span>
              <span className="card__sub">{weather.main.humidity}%</span>
            </div>
            <div className="card__item item3">
              <span className="card__title">Preasure</span>
              <span className="card__sub">{weather.main.pressure}mb</span>
            </div>
          </div>

          <div className="day">
            <div className="day__item">
              <span className="card__left">Preasure</span>
              <span className="card__right">1017</span>
            </div>
            <div className="day__item">
              <span className="card__left">Preasure</span>
              <span className="card__right">1017</span>
            </div>
            <div className="day__item">
              <span className="card__left">Preasure</span>
              <span className="card__right">1017</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="section">
          <div className="search">
            <div className="search__warpper">
              <div className="search__icon">
                <RiSearch2Line />
              </div>
              <input
                className="search__inp"
                type="text"
                placeholder="Search places ..."
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button className="search__btn" onClick={searchPressed}>
                Search
              </button>
            </div>
            <div className="date">
              <div className="date__icon">
                <MdDateRange />
              </div>
              <span className="date__txt">{new Date().toDateString()}</span>
            </div>
          </div>

          <div className="detail">
            <div className="detail__place">
              <span>New York</span>
              <span>(US)</span>
            </div>
            <span className="detail__desc">warmer</span>
          </div>

          <div className="card">
            <div className="card__item item1">
              <span className="card__title">Temparature</span>
              <span className="card__sub">13&#176;C</span>
            </div>
            <div className="card__item item2">
              <span className="card__title">Humadity</span>
              <span className="card__sub">69%%</span>
            </div>
            <div className="card__item item3">
              <span className="card__title">Preasure</span>
              <span className="card__sub">1002mb</span>
            </div>
          </div>

          <div className="day">
            <div className="day__item">
              <span className="card__left">Preasure</span>
              <span className="card__right">1017</span>
            </div>
            <div className="day__item">
              <span className="card__left">Preasure</span>
              <span className="card__right">1017</span>
            </div>
            <div className="day__item">
              <span className="card__left">Preasure</span>
              <span className="card__right">1017</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Body;
