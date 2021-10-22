import React, { useState } from "react";

export default function Weather(props) {
  const [weather, setWeather] = useState({});
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
    <div>
      {typeof props.weather.main !== "undefined" &&
      props.weather.main.temp < 20 ? (
        <div>
          <div>
            {props.weather.name}, {props.weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div>{Math.round(props.weather.main.temp)}&deg;C</div>
          <p>Its too cold for shorts</p>
        </div>
      ) : (
        ""
      )}
      {typeof props.weather.main !== "undefined" &&
      props.weather.main.temp > 20 ? (
        <div>
          <div>
            {props.weather.name}, {props.weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div>{Math.round(props.weather.main.temp)}&deg;C</div>
          <p>Get those knee's out champion</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
