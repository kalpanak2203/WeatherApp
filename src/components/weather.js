import React from 'react';
import "./weather.css";

const Weather = ({ city, weatherData, weatherOnClick, onChangeCity, unit }) => {
  const weatherIcon = weatherData?.current ? `https://${weatherData?.current?.condition?.icon}` : null;

  return (
    <div className="weather-container">
      <div className="search-section">
        <input
          type="text"
          value={city}
          onChange={(e) => onChangeCity(e.target.value)}
          className='enter-city-bar'
          placeholder="Enter city"
        />
        <button onClick={weatherOnClick} className='getWeather-button'>
          Search
        </button>
      </div>

      <div className='weather-card'>
        <div className="weather-info">
          <h3 className="city-name">City Name : {weatherData?.location?.name ?? "Not found"}</h3>
          <div className="temp-weather">
            {weatherIcon && <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />}
            <h3 className="temp">
              {unit == "metric"?weatherData?.current?.temp_c ?? "-":weatherData?.current?.temp_f ?? "-"}{unit == "metric"?"°C":"°F"}
            </h3>
          </div>
          <h3 className="weather-condition">
            Weather Condition : {weatherData?.current?.condition?.text ?? "-"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Weather;
