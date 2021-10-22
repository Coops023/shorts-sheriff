import "./App.css";
import { useState } from "react";

const api = {
  key: "8bf79da0dac590c9f68d149606881b00",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metrics&appid=${api.key}`)
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
        </div>

        <div className="date">{dateBuilder(new Date())}</div>
      </main>
    </div>
  );
}

export default App;
