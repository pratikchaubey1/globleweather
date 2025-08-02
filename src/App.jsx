import React, { useContext } from 'react';
import Weather from './Components/Weather';
import { WeatherContext } from "./Context/Context";
import {
  convertTemperature,
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,
} from './Components/Helper';
import {
  HumidityIcon,
  WindIcon,
  VisibilityIcon,
  SunriseIcon,
  SunsetIcon,
} from './Components/Icon';
// just some mini changes

function App() {
  const {
    unity,
    setunity,
    city,
    setcity,
    suggection,
    fetchWeatherData,
    handleSearch,
    setWeather,
    weather,
    getWeatherCondition,
  } = useContext(WeatherContext);

  const API_key = '91227ad11bc50310eceed2fa1e96ae7b';

  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className='min-h-screen'>
      <Weather condition={getWeatherCondition()} />

      <div className='flex items-center justify-center p-6 min-h-screen'>
        <div className='bg-transparent backdrop:blur-md rounded-xl shadow-2xl p-3 max-w-md text-white w-full border-white/30 relative z-10'>
          <h1 className='text-4xl font-extrabold text-center mb-6'>
            Weather App
          </h1>

          {!weather ? (
            <form onSubmit={handleSearch} className='flex flex-col relative'>
              <input
                value={city}
                onChange={(e) => setcity(e.target.value)}
                placeholder='Enter city or country (min 3 letters)'
                className='mb-4 p-3 rounded border-white border-2 bg-transparent text-white placeholder-white focus:outline-none focus:border-blue-300 transition duration-300'
              />

              {suggection.length > 0 && (
                <div className='absolute top-12 left-0 right-0 bg-white/20 backdrop-blur-md shadow-md rounded z-10'>
                  {suggection.map((s) => (
                    <button
                      type='button'
                      key={`${s.lat}-${s.lon}`}
                      onClick={() =>
                        fetchWeatherData(
                          `https://api.openweathermap.org/data/2.5/weather?lat=${s.lat}&lon=${s.lon}&appid=${API_key}&units=metric`,
                          `${s.name}, ${s.country}${s.state ? `, ${s.state}` : ''}`
                        )
                      }
                      className='block hover:bg-blue-700 bg-transparent px-4 py-2 text-sm text-left w-full transition-colors'
                    >
                      {`${s.name}, ${s.country}${s.state ? `, ${s.state}` : ''}`}
                    </button>
                  ))}
                </div>
              )}

              <button
                type='submit'
                className='mt-4 bg-purple-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors'
              >
                Get Weather
              </button>
            </form>
          ) : (
            <div className='mt-6 text-center transition-opacity duration-500'>
              <button
                onClick={() => {
                  setWeather(null);
                  setcity('');
                }}
                className='mb-4 bg-purple-900 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded transition-colors'
              >
                New Search
              </button>

              <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>{weather.name}</h2>
                <button
                  onClick={() => setunity((u) => (u === 'c' ? 'f' : 'c'))}
                  className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-1 px-3 rounded transition-colors'
                >
                  &deg;{unity}
                </button>
              </div>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
                alt={weather.weather?.[0]?.description}
                className='mx-auto my-4 animate-bounce'
              />

              <p className='text-4xl'>
                {convertTemperature(weather.main?.temp, unity)} &deg;{unity}
              </p>
              <p className='capitalize'>{weather.weather?.[0]?.description}</p>

              <div className='flex flex-wrap justify-around mt-6 gap-4 text-sm'>
                <div className='flex flex-col items-center'>
                  <HumidityIcon />
                  <p className='mt-1'>
                    {weather.main?.humidity}% ({getHumidityValue(weather.main?.humidity)})
                  </p>
                  <p className='text-gray-200'>Humidity</p>
                </div>

                <div className='flex flex-col items-center'>
                  <WindIcon />
                  <p className='mt-1'>
                    {weather.wind?.speed} m/s ({getWindDirection(weather.wind?.deg)})
                  </p>
                  <p className='text-gray-200'>Wind</p>
                </div>

                <div className='flex flex-col items-center'>
                  <VisibilityIcon />
                  <p className='mt-1'>{getVisibilityValue(weather.visibility)}</p>
                  <p className='text-gray-200'>Visibility</p>
                </div>

                <div className='flex flex-col items-center'>
                  <SunriseIcon />
                  <p className='mt-1 font-semibold'>Sunrise</p>
                  <p className='text-sm'>{formatTime(weather.sys.sunrise)}</p>
                </div>

                <div className='flex flex-col items-center'>
                  <SunsetIcon />
                  <p className='mt-1 font-semibold'>Sunset</p>
                  <p className='text-sm'>{formatTime(weather.sys.sunset)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
