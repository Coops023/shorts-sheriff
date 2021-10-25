import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  console.log(props);
  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather-card">
      {typeof props.weather.main !== "undefined" &&
      props.weather.main.temp < 20 ? (
        <div>
          <div className="weather-location">
            {props.weather.name}, {props.weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-conditions">
            {Math.round(props.weather.main.temp)}&deg;C <br />
            {props.weather.weather[0].main}
          </div>

          <iframe
            src="https://giphy.com/embed/XElwYuzMe4RXz4JiCb"
            width="350"
            height="250"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>

          <p className="feedback-message">Its too cold for shorts</p>
        </div>
      ) : (
        ""
      )}
      {typeof props.weather.main !== "undefined" &&
      props.weather.main.temp > 20 ? (
        <div>
          <div className="weather-location">
            {props.weather.name}, {props.weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-conditions">
            {Math.round(props.weather.main.temp)}&deg;C <br />
            {props.weather.weather[0].main}
          </div>
          <iframe
            src="https://giphy.com/embed/4KMlwaKfznhM4"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>

          <p className="feedback-message">Get those knee's out champion</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
