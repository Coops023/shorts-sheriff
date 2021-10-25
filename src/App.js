import "./App.css";
import { useState } from "react";
import Weather from "./components/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const currentLocationHandler = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetch(
        `${api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        })
        .catch((err) => console.log(err));
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
          <p className="info-msg">Or use your current location</p>
          <br />
          <button
            className="current-location-button"
            onClick={currentLocationHandler}
          >
            {" "}
            Find my location <br />
            <FontAwesomeIcon icon={faLocationDot} />
          </button>
        </div>

        <Weather weather={weather} />
      </main>
    </div>
  );
}

export default App;
