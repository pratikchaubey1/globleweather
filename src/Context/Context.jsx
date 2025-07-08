import React, { useState, createContext, useEffect } from 'react';

export const WeatherContext = createContext();

function Context({ children }) {
  const [weather, setWeather] = useState(null);
  const [city, setcity] = useState('');
  const [suggection, setsuggection] = useState([]);
  const [unity, setunity] = useState('c');
  const [error, seterror] = useState('');

  const API_key = '91227ad11bc50310eceed2fa1e96ae7b';

  useEffect(() => {
    if (city.trim().length >= 3 && !weather) {
      const timer = setTimeout(() => fetchsuggection(city), 500);
      return () => clearTimeout(timer);
    }
    setsuggection([]);
  }, [city, weather]);

  const fetchsuggection = async (query) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_key}`
      );
      if (res.ok) {
        setsuggection(await res.json());
      } else {
        setsuggection([]);
      }
    } catch {
      setsuggection([]);
    }
  };

  const fetchWeatherData = async (url, name = '') => {
    seterror('');
    setWeather(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error((await response.json()).message || 'City not found');
      const data = await response.json();
      setWeather(data);
      setcity(name || data.name);
      setsuggection([]);
    } catch (err) {
      seterror(err.message);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return seterror('Please enter a valid city name.');
    await fetchWeatherData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_key}&units=metric`
    );
  };

  const getWeatherCondition = () => {
    if (!weather) return null;
    return {
      main: weather.weather?.[0]?.main || 'Clear',
      isDay:
        Date.now() / 1000 > weather.sys?.sunrise &&
        Date.now() / 1000 < weather.sys?.sunset,
    };
  };

  return (
    <WeatherContext.Provider
      value={{
        unity,
        setunity,
        city,
        setcity,
        suggection,
        setsuggection,
        weather,
        setWeather,
        error,
        handleSearch,
        fetchWeatherData,
        getWeatherCondition,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default Context;
