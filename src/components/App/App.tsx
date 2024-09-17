import React, { useState } from "react";
import './App.css';
import { WeatherCard } from "../WeatherCard/weatherCard";


const apiKey: string = import.meta.env.VITE_API_KEY;

type weatherDataType = {
	nameWeather: string;
	description: string;
	temperature: number;
	tempMin: number;
	tempMax: number;
	location: string;
	icon: string;
};

const initialData: weatherDataType[] = [];

function App() {  

	const [weatherData, setWeatherData] = useState(initialData);
	const [cityInput, setCityInput] = useState("");
	
	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		const input = e.target.value;
		setCityInput(input);
		console.log(input);
	}

	function onClick() {
		if (cityInput !== "") {
			getWeatherData(cityInput);
			setCityInput("");
		}
	}

	async function getWeatherData(cityInput: string) {
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${cityInput},%20uk&appid=${apiKey}&units=metric`
		);
		const data = await response.json();
		console.log(data);
		const cityWeatherData: weatherDataType = {
			nameWeather: data.weather[0].main,
			description: data.weather[0].description,
			temperature: data.main.temp,
			tempMin: data.main.temp_min,
			tempMax: data.main.temp_max,
			location: data.name,
			icon: data.weather[0].icon,
		};
		const newWeatherData = [...weatherData, cityWeatherData];
		setWeatherData(newWeatherData);
	}
	

  return (
    <div className="App">
    <div className="inputDiv">
      <input placeholder= "Enter location" type="text" onChange={onChange} value={cityInput}></input>
      <button className="button-80" onClick={onClick}>Add location</button>
    </div>
    
    {weatherData.map((weatherData) => {
      return <WeatherCard weatherData={weatherData}></WeatherCard>;
    })}
    
  </div>
  );
}

export default App;