
import './App.css';
import { fetchWeather } from "./api/fetchWeather";
import { useState } from 'react';
import { MdSearch } from 'react-icons/md'


function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});


  const search = async (e) => {
    if(e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data)
      setWeather(data);
      setQuery("");
    }
  }

  const searchBTN = async (e) => {
    const clicked = true 
    if(clicked) {
      const data = await fetchWeather(query);
      console.log(data)
      setWeather(data);
      setQuery("");
    }
  }

  function handleSubmit(e){
    e.preventDefault()
      
  }

  return (
    <div className="main-container">
      <form className="search-container" onSubmit={handleSubmit}>
        <input 
          required="required"
          type="text"
          className="search"
          placeholder="Search... eg. London,GB" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <button onClick={searchBTN} aria-label="search button"><MdSearch className="search-icon"/></button>
      </form>
      {weather.main && (
        <div className={weather.main.temp <= 20 ? "city-card-cold" : "city-card-hot"}>
          <h2 className="city-name">
            <span className="city">{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="city-feels-like">
            Feels like {Math.round(weather.main.feels_like)}<sup>&deg;C</sup>
          </div>
          <div className="humidity">
            Humidity {Math.round(weather.main.humidity)}&#37;
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
