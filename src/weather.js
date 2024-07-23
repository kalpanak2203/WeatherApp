import React, { useState } from 'react';
import axios from 'axios';
import "./weather.css"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const apiKey = 'bbff50e80358b0af490a9a3e8f82808a';  // Replace with your actual API key

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      console.log("apiResponse: ", response.data);
    } catch (error) {
      console.error('Error fetching the weather data', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        className='Enter-city-bar'
        placeholder="Enter city" 
      />
      <button onClick={getWeather} className='getWeather-button'>Search</button>
      <br></br>

      {weatherData ? (
        <div className='weather-data'>
          <h3>City name : {weatherData.name}</h3>
          <h3>Temperature : {weatherData.main.temp}°C</h3>
          <h3>Weather : {weatherData.weather[0].description}</h3>
        </div>
      ) : (
        <div className='weather-data'>
          <h3>City name : </h3>
          <h3>Temperature : </h3>
          <h3>Weather : </h3>
        </div>
      )}
    </div>
  );
};

export default Weather;
