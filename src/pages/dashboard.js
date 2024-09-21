import React, { useState, useEffect } from "react";
import axios from 'axios';
import Weather from "../components/weather";
import ForecastCard from "../components/ForecastCard";
import "./dashboard.css";

const apiKey = 'bbff50e80358b0af490a9a3e8f82808a';

const App = () => {
    const [city, setCity] = useState("delhi");
    const [weatherData, setWeatherData] = useState([]);
    const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

    useEffect(() => {
        getWeather();
    }, [city, unit]);

    const getWeather = async () => {
        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/forecast.json?key=5a9438e54d8643be91e193147242109&q=${city}&days=5&aqi=no&alerts=no`
            );
            setWeatherData(response.data);
            console.log("apiResponse: ", response.data);
        } catch (error) {
            console.error('Error fetching the weather data', error);
        }
    };

    const handleUnitToggle = () => {
        setUnit(prevUnit => prevUnit === 'metric' ? 'imperial' : 'metric');
    };

    return (
        <div>
            <div className="card-container">
                <h1 className="card-title">Current weather</h1>
                <button className="unit-toggle-button" onClick={handleUnitToggle}>
                    Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
                </button>
                <Weather city={city} weatherData={weatherData} weatherOnClick={getWeather} onChangeCity={setCity} unit={unit} />
                <ForecastCard forecastData={weatherData?.forecast?.forecastday} unit={unit} />
            </div>
        </div>
    );
}

export default App;
