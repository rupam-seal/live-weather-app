import React, { memo } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { MdDateRange } from 'react-icons/md';
import moment from 'moment/moment';

const Body = memo(
  ({
    day,
    setSearch,
    searchPressed,
    name,
    country,
    desc,
    temp,
    humadity,
    preasure,
  }) => {
    const days = day?.slice(1, 8).map((el, index) => {
      return (
        <div className="day" key={index}>
          <div className="day__item">
            <div className="day__left">
              <img
                alt=""
                className="day__img"
                src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
              ></img>
              <div className="day__info">
                <span className="day__title">
                  {moment(el.dt * 1000).format('MMMM DD')}
                </span>
                <span className="day__sub">{el.weather[0].main}</span>
              </div>
            </div>
            <div className="day__right">
              <span className="day__max">{el.temp.min}&#176;</span> /
              <span className="day__min">{el.temp.max}&#176;</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
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
              <span>{name}</span>
              <span>({country})</span>
            </div>
            <span className="detail__desc">{desc}</span>
          </div>

          <div className="card">
            <div className="card__item item1">
              <span className="card__title">Temparature</span>
              <span className="card__sub">{temp}&#176;C</span>
            </div>
            <div className="card__item item2">
              <span className="card__title">Humadity</span>
              <span className="card__sub">{humadity}%</span>
            </div>
            <div className="card__item item3">
              <span className="card__title">Preasure</span>
              <span className="card__sub">{preasure}mb</span>
            </div>
          </div>

          {days}
        </div>
      </>
    );
  }
);

export default Body;
