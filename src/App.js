import axios from "axios";

import './App.css';
import { useState } from 'react';

function App() {
  let [location, setLocation] = useState("");
  let [weatherData, setWeatherData] = useState("");
  const api = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=e23dd80848c5ec996845fc1863a13704";

  async function getData(e) {
    if (e.key == "Enter") {
      //console.log("Hello World");
      let response = await axios.get(api);
      setWeatherData(response.data);
      console.log(weatherData);

    }

  }
  return (
    <div className="app">
      <div className='search'>
        <input value={location} type="text" placeholder='Search City' onChange={(e) => (setLocation(e.target.value))} onKeyPress={(e) => { getData(e) }} />
      </div>
      {weatherData 
      
      ?

        <div className="container">
          <div className="top">
            <div className="location">
              <p>{weatherData.name ? weatherData.name : "N/A"}
              </p>
            </div>
            <div className="temp">
              <h1>{weatherData.main?.temp ? weatherData.main?.temp : "N/A"}</h1>
            </div>
            <div className="description">
              <p>{weatherData.weather ? weatherData.weather[0].description : "N/A"}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className='bold'>{weatherData.main ? weatherData.main.feels_like : "N/A"}°c</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>{weatherData.main ? weatherData.main.humidity : "N/A"}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>{weatherData.wind ? weatherData.wind.speed : "N/A"} MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
        :
        <div className="msg">
          <div>
            <p className="bold">please search city or Location for weather report.</p>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
