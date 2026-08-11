export default function WeatherCard({forecast}){
	const dateLabel = forecast.dateLabel;
	const weather = forecast.telop;
	const maxTemp = forecast.temperature.max.celsius ?? "--";
  const minTemp = forecast.temperature.min.celsius ?? "--";
	
	const transformedDate =()=>{
	const date = forecast.date;
	const parts = date.split('-');
	const month = Number(parts[1]);
	const day = Number(parts[2]);

	return `${month}月${day}日`;
	}


	return (
		<div>
			<div className="p-4 mx-4 items-center border-1 border-black rounded-2xl bg-white z-0">
				<p className="text-lg">{transformedDate()}({dateLabel})</p>
				<img id="weather-icon" className="m-auto w-full h-auto" src={forecast.image.url} alt="" />
				<div className="my-3">
					<p id="weather-name">{weather}</p>
				</div>
				<p>最高気温: {maxTemp}</p>
				<p>最低気温: {minTemp}</p>
			</div>
		</div>
	)
}