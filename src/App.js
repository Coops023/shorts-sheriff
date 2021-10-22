import "./App.css";
import { useState } from "react";

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

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

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const currentLocationHandler = (e) => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    fetch(
      `${api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className="App">
      <main>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Where are you?"
            onChange={changeHandler}
            value={query}
            onKeyPress={search}
          />
          <button onClick={currentLocationHandler}>Current Location</button>
        </div>
        {/* <div>{weather.main.temp}</div>
        {weather.main.temp < 20 ? (
          <div>Take those shorts off you lunatic</div>
        ) : (
          <div>Get those shorts on mate</div>
        )} */}
        <div className="date">{dateBuilder(new Date())}</div>
      </main>
    </div>
  );
}

export default App;
