import "./weatherCard.css";

type WeatherAppProps = {
	weatherData: weatherDataType;
};

type weatherDataType = {
	nameWeather: string;
	description: string;
	temperature: number;
	tempMin: number;
	tempMax: number;
	location: string;
	icon: string;
};

export function WeatherCard(props: WeatherAppProps) {
	const { weatherData } = props;

	return (
		
		<div className="Card">
			<div className="City">
				<h1>{weatherData.location}</h1>
			</div>
			<div className="Temp">
				<h2>{weatherData.temperature}C</h2>
			</div>
			<div className="Temps">
				<p>Max: {weatherData.tempMax}C</p>
				<p>Min: {weatherData.tempMin}C</p>
			</div>
			<div className="iconDesc">
				<img
					src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
					alt={weatherData.description}
				/>
				<p>{weatherData.description}</p>
			</div>
		</div>
	);
}